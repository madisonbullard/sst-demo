import { drizzle } from "drizzle-orm/d1";

export const getClient = (db: D1Database) => drizzle(db);
