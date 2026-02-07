import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { feedbackSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/feedback", async (req, res) => {
    try {
      const result = feedbackSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: result.error.errors });
      }

      const ipAddress = req.headers["x-forwarded-for"]?.toString().split(",")[0]?.trim()
        || req.headers["x-real-ip"]?.toString()
        || req.socket.remoteAddress
        || "unknown";

      let location = "unknown";
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ipAddress}?fields=city,regionName,country`);
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          if (geoData.city) {
            location = `${geoData.city}, ${geoData.regionName}, ${geoData.country}`;
          }
        }
      } catch {
        location = "unknown";
      }

      const entry = await storage.addFeedback(result.data, ipAddress, location);
      return res.status(201).json({ success: true, id: entry.id });
    } catch (err) {
      console.error("Feedback submission error:", err);
      return res.status(500).json({ error: "Failed to submit feedback" });
    }
  });

  app.get("/api/feedback/csv", async (_req, res) => {
    try {
      const entries = await storage.getAllFeedback();
      const headers = [
        "ID", "Submitted At", "Name", "Mobile", "Email", "Outlet",
        "Overall Rating", "Food Rating", "Service Rating", "Ambiance Rating",
        "Visit Date", "Dining Type", "Comments", "IP Address", "Location"
      ];

      const escapeCSV = (val: string | number | undefined) => {
        if (val === undefined || val === null) return "";
        const str = String(val);
        if (str.includes(",") || str.includes('"') || str.includes("\n")) {
          return `"${str.replace(/"/g, '""')}"`;
        }
        return str;
      };

      const rows = entries.map(e => [
        e.id, e.submittedAt, e.name, e.mobile, e.email || "",
        e.outlet || "", e.overallRating || "", e.foodRating || "",
        e.serviceRating || "", e.ambianceRating || "",
        e.visitDate || "", e.diningType || "", e.comments || "",
        e.ipAddress, e.location
      ].map(escapeCSV).join(","));

      const csv = [headers.join(","), ...rows].join("\n");

      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename=feedback_submissions.csv");
      return res.send(csv);
    } catch (err) {
      console.error("CSV download error:", err);
      return res.status(500).json({ error: "Failed to generate CSV" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
