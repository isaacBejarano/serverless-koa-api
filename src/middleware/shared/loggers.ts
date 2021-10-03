const { log } = require("../../utils/chalk-log"); 
import { Context, Next } from "koa"; // @types/koa -D

const reqLogger = async (ctx: Context, next: Next) => {
	const XRT = ctx.response.get("X-Response-Time");
	await next();
	log(`Request: ${ctx.method} "${ctx.url}" ${XRT.replace("ms", " ms")}`, null, "#ffb6c1");
};

// HoFn
const resLogger = (key: string) => async (ctx: Context, next: Next) => {
	const lastCtx = key ? ctx[key] : ctx;
	await next();
	log("Response:", null, "#f08080");
	log(lastCtx);
};

module.exports = { reqLogger, resLogger };
