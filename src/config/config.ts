import * as dotenv from "dotenv";

dotenv.config(); // load .env file into environment

const PORT = process.env.API_PORT;
const API_LAMBDA = process.env.API_LAMBDA;

// >= 1 db
const API_DB1 = process.env.API_DB1;
const API_DB1_COL1 = process.env.API_DB1_COL1;
const API_DB1_COL2 = process.env.API_DB1_COL2;
const API_DB1_COL3 = process.env.API_DB1_COL3;
// const API_DB2 = process.env.API_DB2;
// ...

export { PORT, API_DB1, API_LAMBDA, API_DB1_COL1, API_DB1_COL2, API_DB1_COL3 };
