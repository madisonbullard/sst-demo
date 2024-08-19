export const db = new sst.cloudflare.D1("Database");

export const worker = new sst.cloudflare.Worker("Worker", {
	handler: "packages/backend/src/index.ts",
	link: [db],
	url: true,
});

export const dbDetails = new sst.Linkable("DbDetails", {
	properties: { accountId: db.nodes.database.accountId, dbId: db.id },
});
