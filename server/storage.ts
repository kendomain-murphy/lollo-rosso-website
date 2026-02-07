import { type User, type InsertUser, type FeedbackEntry, type FeedbackInput } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  addFeedback(feedback: FeedbackInput, ipAddress: string, location: string): Promise<FeedbackEntry>;
  getAllFeedback(): Promise<FeedbackEntry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private feedbackEntries: FeedbackEntry[];

  constructor() {
    this.users = new Map();
    this.feedbackEntries = [];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async addFeedback(feedback: FeedbackInput, ipAddress: string, location: string): Promise<FeedbackEntry> {
    const entry: FeedbackEntry = {
      ...feedback,
      id: randomUUID(),
      submittedAt: new Date().toISOString(),
      ipAddress,
      location,
    };
    this.feedbackEntries.push(entry);
    return entry;
  }

  async getAllFeedback(): Promise<FeedbackEntry[]> {
    return [...this.feedbackEntries];
  }
}

export const storage = new MemStorage();
