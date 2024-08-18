const hono = new sst.aws.Function("Hono", {
	handler: "packages/api/src/index.handler",
	url: true,
});

export const apiRouter = new sst.aws.Router("ApiRouter", {
	routes: {
		"/*": hono.url.apply((url) => url),
	},
});
