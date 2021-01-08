"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogIns = void 0;
const db_config_js_1 = __importDefault(require("../../db-config.js"));
class LogIns {
    constructor() {
        this.thing = '';
    }
    findBy(filter) {
        return db_config_js_1.default('users')
            .where(filter);
    }
}
exports.LogIns = LogIns;
//# sourceMappingURL=login-model.js.map