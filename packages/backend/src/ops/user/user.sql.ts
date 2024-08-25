import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
	id: integer("id").primaryKey(),
	createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	email: text("email").notNull().unique(),
});
