import { Context, Next } from "koa";

import { log } from "../../utils/chalk-log";

const reqLogger = async (ctx: Context, next: Next) => {
	await next();
	const XRT: string = ctx.response.get("X-Response-Time");
	log(`Request: ${ctx.method} "${ctx.url}" ${XRT}`, null, "#ffb6c1");
};

// HoFn
const resLogger = (key: string) => async (ctx: Context, next: Next) => {
	await next();
	const lastCtx: object | Context = key ? ctx[key] : ctx;
	log("Response:", null, "#f08080");
	log(`status = ${lastCtx["status"]} ${lastCtx["message"]}`, null, "#f08080");
	log(`headers = ${JSON.stringify(lastCtx["header"])}`, null, "#f08080");
	log(`body = ${lastCtx["body"]}`, null, "#f08080");
	log(lastCtx, null, "#f08080");
};

export { reqLogger, resLogger };
