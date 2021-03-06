import { Context, Next } from "koa";

const headers = async (ctx: Context, next: Next) => {
	const req = Date.now();
	await next();
	const res = Date.now() - req;
	ctx.set("X-Response-Time", `${res} ms`);
	ctx.set("Content-Type", "application/json");
	// ctx.set("Access-Control-Allow-Origin", "*"); // FIXME: set credentials and SAME ORIGIN CORS Policy
	// ctx.set("Access-Control-Allow-Headers", "GET");
	// ctx.set("Origin", 'https://refranesespanol.es');
};

export { headers };
