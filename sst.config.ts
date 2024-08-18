/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
	app(input) {
		return {
			name: "sst-demo-test",
			removal: input?.stage === "production" ? "retain" : "remove",
			home: "aws",
			profile:
				input.stage === "production" ? "sst-demo-production" : "sst-demo-dev",
			providers: {
				cloudflare: true,
				aws: true,
			},
		};
	},
	async run() {
		const frontend = await import("./infra/frontend");
		const api = await import("./infra/api");
		await import("./infra/db");

		return {
			site: frontend.site.url,
			api: api.apiRouter.url,
		};
	},
});
