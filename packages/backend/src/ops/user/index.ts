import { eq } from "drizzle-orm";
import { user } from "./user.sql";
import type { DrizzleD1Database } from "drizzle-orm/d1";

export type User = typeof user.$inferSelect; // return type when queried
export type InsertUser = typeof user.$inferInsert; // insert type

export async function create(db: DrizzleD1Database, values: InsertUser) {
	return await db.insert(user).values(values).returning();
}

export async function update(db: DrizzleD1Database, id: string, values: User) {
	return await db
		.update(user)
		.set(values)
		.where(eq(user.id.getSQL(), id))
		.returning();
}

export async function getIdForEmail(db: DrizzleD1Database, email: string) {
	return await db
		.select({ id: user.id })
		.from(user)
		.where(eq(user.email, email));
}

export async function getById(db: DrizzleD1Database, { id }: { id: string }) {
	return await db.select().from(user).where(eq(user.id.getSQL(), id));
}
