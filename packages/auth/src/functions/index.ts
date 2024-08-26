import { Resource } from "sst";
import { auth } from "sst/aws/auth";
import { GithubAdapter } from "sst/auth/adapter";
import { session } from "../utils/session.js";

export const handler = auth.authorizer({
	session,
	providers: {
		github: GithubAdapter({
			clientID: Resource.GithubClientID.value,
			mode: "oidc",
		}),
	},
	callbacks: {
		auth: {
			async allowClient() {
				return true;
			},
			async success(ctx, input) {
				if (input.provider === "github") {
					return ctx.session({
						type: "user",
						properties: {
							email: input.tokenset.claims().email,
						},
					});
				}
				return new Response("Uh oh", { status: 400 });
			},
		},
	},
});
