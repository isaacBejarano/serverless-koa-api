import { i_Idiom } from "../models/idiom";
import { log } from "../utils/chalk-log";

const fetchDB = (endpoint: string): Promise<i_Idiom[]> => {
	log("fetching DB...", null, "#ff00ff");

	let r: i_Idiom[] =
		endpoint === "lolly" ? [{ msg: "LOLLY" }] : endpoint === "pop" ? [{ msg: "POP" }] : [{ msg: endpoint }];

	// TODO: mocking REST API fetch
	return <Promise<i_Idiom[]>>new Promise((res, rej) => setTimeout(() => (r ? res(r) : rej("No mames wei!")), 500));
};

export { fetchDB };
