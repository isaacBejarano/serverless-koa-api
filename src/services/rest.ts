const fetchDB = (endpoint: string) => {
	// log("fetching DB...", null, "#ff00ff");

	// TODO: consume DB API
	return endpoint === "lolly" ? [{ msg: "LOLLA" }] : endpoint === "pop" ? [{ msg: "POP" }] : [{ msg: endpoint }];
};

module.exports = { fetchDB };
