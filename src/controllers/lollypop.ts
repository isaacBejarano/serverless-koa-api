import { Context } from "koa";

const { fetchDB } = require("../services/rest");
// TODO: fetchDB implements RESTService + ASYNC

const getLolly = (ctx: Context) => (ctx.body = fetchDB("lolly"));
const getPop = (ctx: Context) => (ctx.body = fetchDB("pop"));

module.exports = { getLolly, getPop };
