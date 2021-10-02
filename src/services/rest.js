const https = require("https");

const { log } = require("../utils/chalk-log");

const fetchDB = endpoint => {
	log("fetching DB...", null, "#ff00ff");

	// TODO: consume DB API
	return endpoint === "lolly" ? [{ msg: "LOLLY" }] : endpoint === "pop" ? [{ msg: "POP" }] : [{ msg: endpoint }];
};

module.exports = { fetchDB };
