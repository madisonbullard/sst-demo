const secrets = {
	GithubClientID: new sst.Secret("GithubClientID"),
	GithubClientSecret: new sst.Secret("GithubClientSecret"),
};
const auth = new sst.aws.Auth("Auth", {
	authenticator: {
		link: [secrets.GithubClientID, secrets.GithubClientSecret],
		handler: "packages/auth/src/functions/index.handler",
	},
});
