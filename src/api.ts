// require("module-alias/register");

// TODO: alias path
// TODO: create models
// TODO: SOLID refactor

import Koa from "koa";
import KoaRouter from "@koa/router";
import serve from "koa-static";
import { Context } from "koa";

import { log } from "./utils/chalk-log";
import { getIdiom } from "./controllers/idioms";
import { getLolly, getPop } from "./controllers/lollypop";
import { headers } from "./middleware/meta/headers";
import { reqLogger, resLogger } from "./middleware/shared/loggers";

//* 1. 	API
const api = new Koa();
const router = new KoaRouter();
const routes = router.routes();
const allowedMethods = router.allowedMethods();
const port: string | number = process.env.PORT || 3000;

//* 2.
// 2.1. statics
api.use(serve("./public"));

// 2.2. shared
api.use(resLogger("response"));
api.use(reqLogger);

//* 3. 	HEADERS
api.use(headers);

//* 4. 	BODY
// 4.1. "/r" + controllers
router.get("/lolly", (ctx: Context) => getLolly(ctx));
router.get("/pop", (ctx: Context) => getPop(ctx));
router.get("/months/:id", (ctx: Context) => getIdiom(ctx, "months"));

// 4.2. routing
api.use(routes);
api.use(allowedMethods);

// 4.2. "/*" - cascade!
api.use((ctx: Context) => {
	ctx.status = <number>404;
	ctx.body = <string>ctx.message;
});

//* 5. 	ERROR HANDLER
api.on("error", (err: Error) => log("server error", err, "#ff4500"));

//* 6. 	RUN
api.listen(port, () => log("Koa listening on port", port, "#eee8aa"));

/*
NOTE
* Lambda Cold Start => Don't pipe!
* Def MIME: JSON + Fn: sync || async
*/
