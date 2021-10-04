import { Context } from "koa";
import { log } from "../utils/chalk-log";

import { i_Idiom } from "../models/idiom";
import { fetchDB } from "../services/rest";
import { persistDB } from "./persistance";

const getCollection = async (ctx: Context, collection: string) => {
	try {
		const data: i_Idiom[] = await (<Promise<i_Idiom[]>>fetchDB(collection));
		ctx.body = <i_Idiom[]>persistDB(data);
	} catch (err) {
		log(err, null, "#ff4500");
	}
};

export { getCollection };
