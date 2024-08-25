import { Hono } from "hono/quick";
import user from "./routes/user";

const app = new Hono();

const route = app.route("/v1/user", user);

app.all("/*", async (c) => {
	return c.notFound();
});

export type TApp = typeof route;

export default app;
