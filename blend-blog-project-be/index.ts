// import * as server from './server.js';
import server from "./server.js";

import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.DB_PORT;
// tslint:disable-next-line:no-console
console.log(PORT);
server.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Listening on port ${PORT}...`);
});
