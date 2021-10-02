import { Context } from "koa";

const { fetchDB } = require("@services/rest");
// TODO: fetchDB implements RESTService + ASYNC

const getIdiom = (ctx: Context, collection: string) => {
	const month = [
		{
			collection: collection,
			id: ctx.params.id,
		},
	];

	ctx.body = fetchDB(month);
};

module.exports = { getIdiom };
