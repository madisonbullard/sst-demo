export const d1 = new sst.cloudflare.D1("Database");

// const binding = sst.cloudflare.binding({
// 	type: "d1DatabaseBindings",
// 	properties: {
// 		databaseId: d1.id,
// 	},
// });

export const database = new sst.Linkable("DatabaseLinkable", {
	properties: {
		id: d1.id,
		accountId: d1.nodes.database.accountId,
	},
});
