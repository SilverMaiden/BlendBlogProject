"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const db_config_js_1 = __importDefault(require("../../db-config.js"));
class Users {
    constructor() {
        this.thing = '';
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
    // Using findByEmail for Login
    findByEmail(email) {
        if (email) {
            return db_config_js_1.default('users')
                .where('users.email', email)
                .first();
        }
    }
    findBlogPosts(id) {
        return db_config_js_1.default('blogposts')
            .where('blogposts.user_id', id);
    }
    findFavorites(...args) {
        const id = args[0];
        return db_config_js_1.default('favorites as f')
            .where('f.user_id', id);
    }
    add(users) {
        return db_config_js_1.default('users')
            .insert(users, "id")
            .then(([id]) => this.find(id));
    }
}
exports.Users = Users;
//# sourceMappingURL=users-model.js.map