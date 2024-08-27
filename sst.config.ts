/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
	app(input) {
		return {
			name: "sst-demo-test2",
			removal: input?.stage === "production" ? "retain" : "remove",
			home: "aws",
			providers: {
				cloudflare: true,
				aws: true,
			},
		};
	},
	async run() {
		const { auth } = await import("./infra/auth");
		const frontend = await import("./infra/frontend");
		const db = await import("./infra/db");

		return {
			auth: auth.url,
			db: db.worker.url,
			site: frontend.site.url,
		};
	},
});
