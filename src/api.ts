// require("module-alias/register");

// TODO: alias path
// TODO: create models
// TODO: SOLID refactor
import serverless from "serverless-http";

import Koa, { Context } from "koa";
import KoaRouter from "@koa/router";
import serve from "koa-static";

import { log } from "./utils/chalk-log";
import { getCollection } from "./controllers/crud";
import { headers } from "./middleware/meta/headers";
import { reqLogger, resLogger } from "./middleware/shared/loggers";
import { PORT, API_LAMBDA } from "./config/config";

//* 1. 	API
const api = new Koa();
const router = new KoaRouter();
const port: string | number = PORT || 3000; // 3000 is dev. For prod, Netlify auto assigns port !== 3000

//* 2.
// 2.1. statics
api.use(serve("./public"));

// 2.2. shared
api.use(resLogger("response"));
api.use(reqLogger);

//* 3. 	HEADERS
api.use(headers);

//* 4. 	BODY
// 4.1. API + "/slug" => controllers
router.get(API_LAMBDA + "/slangs", (ctx: Context) => getCollection(ctx, "slangs"));
router.get(API_LAMBDA + "/populars", (ctx: Context) => getCollection(ctx, "populars"));
router.get(API_LAMBDA + "/months", (ctx: Context) => getCollection(ctx, "months"));
// ...

// 4.2. routing
api.use(router.routes());
api.use(router.allowedMethods);

// 4.2. "/*" - cascade!
api.use((ctx: Context) => {
	ctx.status = <number>404;
	ctx.body = <string>ctx.message;
});

//* 5. 	ERROR HANDLER
api.on("error", (err: Error) => log("server error", err, "#ff4500"));

//* 6. 	RUN
api.listen(port, () => log("Koa listening on...", `http://localhost:${port}`, "#eee8aa"));

// NOTE: Lambda Cold Start => Don't pipe!
/* LAMDBA - Netlify */

module.exports.handler = serverless(api);
