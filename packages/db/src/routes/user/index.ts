import { eq } from "drizzle-orm";
import { db } from "../../index";
import { user } from "./user.sql";

export type User = typeof user.$inferSelect; // return type when queried
export type InsertUser = typeof user.$inferInsert; // insert type

export async function create(values) {
	return await db.insert(user).values(values).returning();
}

export async function update(id: string, values: User) {
	return await db
		.update(user)
		.set(values)
		.where(eq(user.id.getSQL(), id))
		.returning();
}

export async function getIdForEmail(email: string) {
	return await db
		.select({ id: user.id })
		.from(user)
		.where(eq(user.email, email));
}

export async function getById({ id }: { id: string }) {
	return await db.select().from(user).where(eq(user.id.getSQL(), id));
}
