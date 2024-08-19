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
		const frontend = await import("./infra/frontend");
		const db = await import("./infra/db");

		return {
			db: db.worker.url,
			site: frontend.site.url,
		};
	},
});
