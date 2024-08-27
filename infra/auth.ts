const GithubClientID = new sst.Secret("GithubClientID");
const GithubClientSecret = new sst.Secret("GithubClientSecret");

export const auth = new sst.aws.Auth("Auth", {
	authenticator: {
		link: [GithubClientID, GithubClientSecret],
		handler: "packages/auth/src/functions/index.handler",
	},
});
