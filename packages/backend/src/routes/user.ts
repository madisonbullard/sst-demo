import { Hono } from "hono/tiny";
import { zValidator } from "@hono/zod-validator";
import { create, insertUserSchema } from "../ops/user";
import { getClient } from "../client";
import { Resource } from "sst";

const app = new Hono();

const postRoute = app.post(
	"/",
	zValidator("json", insertUserSchema),
	async (c) => {
		const db = getClient(Resource.Database as unknown as D1Database);
		const user = await c.req.valid("json");

		const result = await create(db, user);

		return c.json(result, 201);
	},
);

export type TUserPost = typeof postRoute;

export default app as TUserPost;
