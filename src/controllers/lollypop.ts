import { Context } from "koa";

import { i_Idiom } from "../models/idiom";
import { fetchDB } from "../services/rest";

// TODO: fetchDB implements RESTService + ASYNC

const getLolly = (ctx: Context) => (ctx.body = <i_Idiom[]>fetchDB("lolly"));
const getPop = (ctx: Context) => (ctx.body = <i_Idiom[]>fetchDB("pop"));

export { getLolly, getPop };
