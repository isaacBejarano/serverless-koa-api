const headers = async (ctx, next) => {
	const req = Date.now();
	await next();
	const res = Date.now() - req;
	ctx.set("X-Response-Time", `${res} ms`);
	ctx.set("Content-Type", "json");
	// ctx.set("Access-Control-Allow-Origin", "*");
	// ctx.set("Access-Control-Allow-Headers", "GET");
	// ctx.set("Origin", 'https://refranesespanol.es');
};

module.exports = { headers };
