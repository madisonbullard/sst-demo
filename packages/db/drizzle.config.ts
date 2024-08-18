import { defineConfig } from "drizzle-kit";
import { Resource } from "sst";

export default defineConfig({
	schema: ["./src/**/*.sql.ts"],
	out: "./migrations",
	dialect: "sqlite",
	driver: "d1-http",
	dbCredentials: {
		accountId: Resource.DatabaseLinkable.accountId,
		databaseId: Resource.DatabaseLinkable.id,
		token: process.env.CLOUDFLARE_API_TOKEN,
	},
});
