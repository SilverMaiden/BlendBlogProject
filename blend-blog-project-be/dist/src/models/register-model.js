"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = void 0;
const db_config_js_1 = __importDefault(require("../../db-config.js"));
class RegisterUser {
    constructor() {
        this.thing = '';
    }
    findBy(filter) {
        return db_config_js_1.default('users')
            .where(filter);
    }
    find(id) {
        if (id) {
            return db_config_js_1.default('users')
                .where('users.id', id)
                .first();
        }
        else {
            return db_config_js_1.default('users');
        }
    }
    addUser(user) {
        return db_config_js_1.default('users')
            .insert(user, "id")
            .then(([id]) => this.find(id));
    }
}
exports.RegisterUser = RegisterUser;
//# sourceMappingURL=register-model.js.map