import { Resource } from "sst";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const res = await fetch(Resource.ApiRouter.url);

	const msg = await res.json();

	return {
		msg,
	};
};
