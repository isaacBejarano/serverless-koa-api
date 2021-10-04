import { i_Idiom } from "../models/idiom";
import { log } from "../utils/chalk-log";
import fs, { createWriteStream } from "fs";
import path from "path";

export const persistDB = (data: any): any => {
	log("persisting fetched data...", data, "#88ff77");

	/*
	FIXME:
	1. FCP => return static sync DB data (outdated) <- PRECOMPILED JSON before deploy
	2. Fetch fresh data from REST API (async)
	3. Comprare NEW with PRECOMPILED
		 Same? Do nothing : Append NEW to PRECOMPILED, i.e. update persisted (thus, client new calls with be updated)
		 // If you update DB, then launch Client to force updates on persisted data.
	*/



	return data;
};


	// W
	// fs.writeFileSync(__dirname + "./../database/persisted.json", JSON.stringify(data));

	// R
	// const persisted: string = fs.readFileSync(__dirname + "./../database/persisted.json", "utf8");
	// log("currentPersisted updated...", JSON.parse(persisted), "#88ff77");