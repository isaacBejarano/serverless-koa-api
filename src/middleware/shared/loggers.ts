import { Context, Next } from "koa";

import { log } from "../../utils/chalk-log";

const reqLogger = async (ctx: Context, next: Next) => {
	const XRT: string = ctx.response.get("X-Response-Time");
	await next();
	log(`Request: ${ctx.method} "${ctx.url}" ${XRT.replace("ms", " ms")}`, null, "#ffb6c1");
};

// HoFn
const resLogger = (key: string) => async (ctx: Context, next: Next) => {
	const lastCtx: object | Context = key ? ctx[key] : ctx;
	await next();
	log("Response:", null, "#f08080");
	log(lastCtx);
};

export { reqLogger, resLogger };
