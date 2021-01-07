"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as server from './server.js';
const server_js_1 = __importDefault(require("./server.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.DB_PORT;
// tslint:disable-next-line:no-console
console.log(PORT);
server_js_1.default.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Listening on port ${PORT}...`);
});
//# sourceMappingURL=index.js.map