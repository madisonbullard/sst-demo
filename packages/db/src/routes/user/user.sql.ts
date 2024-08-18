import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
	id: integer("id").primaryKey(),
	createdAt: text("text_modifiers").notNull().default(sql`CURRENT_TIMESTAMP`),
	email: text("email").notNull().unique(),
	username: text("username"),
	firstName: text("first_name"),
	lastName: text("last_name"),
});
