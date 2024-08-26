export const auth = new sst.aws.Auth("Auth", {
	authenticator: {
		handler: "packages/auth/src/functions/index.handler",
	},
});

export const authRouter = new sst.aws.Router("AuthRouter", {
	routes: {
		"/*": auth.url.apply((url) => url),
	},
});
