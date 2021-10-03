import { i_Idiom } from "../models/idiom";
import { log } from "../utils/chalk-log";

const fetchDB = (endpoint: string): i_Idiom[] => {
	log("fetching DB...", null, "#ff00ff");

	// TODO: consume DB API
	return endpoint === "lolly" ? [{ msg: "LOLLY" }] : endpoint === "pop" ? [{ msg: "POP" }] : [{ msg: endpoint }];
};

export { fetchDB };
