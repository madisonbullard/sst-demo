import { auth } from "./auth";
import { worker } from "./db";

export const site = new sst.aws.SvelteKit("Frontend", {
	path: "packages/frontend",
	link: [worker, auth.authenticator],
});
