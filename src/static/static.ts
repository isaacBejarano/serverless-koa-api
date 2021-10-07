import fs from "fs";
import https from "https";

import { ENV } from "../config/env";

const API = ENV.API;
const collections = ["slangs", "populars", "months"]; // ...
let db: object = {};

// call + persist
for (const collection of collections) {
	fetchRestfulDB(collection);
}

// LIB
function fetchRestfulDB(collection: string) {
	const endpoint = API + "/" + collection;
	let stream = "";

	https
		.get(endpoint, async (res: any) => {
			res.on("data", (d: string) => {
				stream += d;
			});

			res.on("end", () => {
				let cleanUpCollection = [];
				// read + cleanup
				for (const _idiom of JSON.parse(stream).documents) {
					let id = _idiom.name.split("/");
					let fields = {};

					for (const key in _idiom.fields) {
						fields[key] = _idiom.fields[key].stringValue;
					}

					cleanUpCollection.push({
						id: id[id.length - 1],
						fields: fields,
						createTime: _idiom.createTime,
						updateTime: _idiom.updateTime,
					});
				}

				db[collection] = cleanUpCollection;

				// then persist
				fs.writeFileSync(__dirname + "/json/static.json", JSON.stringify(db));
			});
		})
		.on("error", (err: any) => console.error(err));
}
