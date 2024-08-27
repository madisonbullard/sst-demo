import { Resource } from "sst";
import { base } from "$app/paths";

const authUrl = Resource.AuthAuthenticator.url;

export const load = async ({ url }) => {
	return {
		authUrl,
	};
};
