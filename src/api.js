const Koa = require("koa");
const KoaRouter = require("@koa/router");
const serve = require("koa-static");

const { getLolly, getPop } = require("./controllers/lollypop");
const { headers } = require("./middleware/meta/headers");
const { reqLogger, resLogger } = require("./middleware/shared/loggers");
const { getIdiom } = require("./controllers/idioms");
const { log } = require("./utils/chalk-log");

//* 1. 	API
const api = new Koa();
const router = new KoaRouter();
const routes = router.routes();
const allowedMethods = router.allowedMethods();
const port = process.env.PORT || 3000;

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
router.get("/lolly", ctx => getLolly(ctx));
router.get("/pop", ctx => getPop(ctx));
router.get("/months/:id", ctx => getIdiom(ctx, "months"));


// 4.2. routing
api.use(routes);
api.use(allowedMethods);


// 4.2. "/*" - cascade!
api.use(ctx => {
	ctx.status = 404;
	ctx.body = ctx.message;
});

//* 5. 	ERROR HANDLER
api.on("error", err => log("server error", err, "#ff4500"));

//* 6. 	RUN
api.listen(port, () => log("Koa listening on port", port, "#eee8aa"));

/*
NOTE
* Lambda Cold Start => Don't pipe!
* Def MIME: JSON + Fn: sync || async
*/
