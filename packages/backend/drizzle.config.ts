import { defineConfig } from "drizzle-kit";
import { Resource } from "sst";

const { CLOUDFLARE_API_TOKEN } = process.env;

if (!CLOUDFLARE_API_TOKEN) {
	throw new Error("CLOUDFLARE_API_TOKEN is not set");
}

export default defineConfig({
	dialect: "sqlite",
	schema: ["./src/**/*.sql.ts"],
	out: "./migrations",
	driver: "d1-http",
	dbCredentials: {
		accountId: Resource.DbDetails.accountId,
		databaseId: Resource.DbDetails.dbId,
		token: CLOUDFLARE_API_TOKEN,
	},
});
