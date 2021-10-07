import fs from "fs";
import https from "https";

import { API_DB1, API_DB1_COL1, API_DB1_COL2, API_DB1_COL3 } from "../config/config";

const collectionsDB1 = [API_DB1_COL1, API_DB1_COL2, API_DB1_COL3]; // API_DB1_COL4...
// const collectionsDB2 = [API_DB2_COL1, API_DB2_COL2, API_DB2_COL3]; // API_DB2_COL4...

let db: object = {};

// call + persist
for (const collection of collectionsDB1) {
	fetchRestfulDB(collection);
}
// LIB
function fetchRestfulDB(collection: string) {
	let endpoint = API_DB1 + "/" + collection;
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
