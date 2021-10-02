const { fetchDB } = require("../services/rest");
// TODO: fetchDB implements RESTService + ASYNC

const getLolly = ctx => (ctx.body = fetchDB("lolly"));
const getPop = ctx => (ctx.body = fetchDB("pop"));

module.exports = { getLolly, getPop };
