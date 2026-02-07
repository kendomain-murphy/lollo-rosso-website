import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const feedbackSchema = z.object({
  name: z.string().min(1, "Name is required"),
  mobile: z.string().min(10, "Please enter a valid mobile number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  outlet: z.string().optional().or(z.literal("")),
  overallRating: z.number().min(1).max(5).optional(),
  foodRating: z.number().min(1).max(5).optional(),
  serviceRating: z.number().min(1).max(5).optional(),
  ambianceRating: z.number().min(1).max(5).optional(),
  visitDate: z.string().optional().or(z.literal("")),
  diningType: z.string().optional().or(z.literal("")),
  comments: z.string().optional().or(z.literal("")),
});

export type FeedbackInput = z.infer<typeof feedbackSchema>;

export interface FeedbackEntry extends FeedbackInput {
  id: string;
  submittedAt: string;
  ipAddress: string;
  location: string;
}
