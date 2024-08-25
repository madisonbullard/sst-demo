import { Resource } from "sst";
import { hc } from "hono/client";
import type { TApp } from "backend";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get("email");

		if (typeof email !== "string") {
			return fail(400, { email });
		}

		const client = hc<TApp>(Resource.Worker.url);

		const res = await client.v1.user.$post({
			json: {
				email,
			},
		});

		const json = await res.json();

		return {
			user: json[0],
		};
	},
} satisfies Actions;
