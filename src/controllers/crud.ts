import { Context } from "koa";

import data from "../static/json/static.json";

// GET
const getCollection = async (ctx: Context, collection: string) =>
	(ctx.body = data[collection] ? data[collection] : [{ msg: "empty collection: " + collection }]);
	
const getDocumentById = async (ctx: Context, collection: string, id: number | string) => {};

// POST
const postDocumentInCollection = async (ctx: Context, collection: string, post: object) => {};

export { getCollection, getDocumentById, postDocumentInCollection };
