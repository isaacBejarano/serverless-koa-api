import { Context } from "koa";

import { i_Idiom } from "../models/idiom";

// TODO: fetchDB implements RESTService + ASYNC
const getIdiom = (ctx: Context, collection: string): void => {
	const month = [
		{
			collection: collection,
			id: ctx.params.id,
		},
	];

	ctx.body = <i_Idiom[]>month; // ~fetchDB(collection)
};

export { getIdiom };
