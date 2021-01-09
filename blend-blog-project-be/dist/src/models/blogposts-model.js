"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPosts = void 0;
const db_config_js_1 = __importDefault(require("../../db-config.js"));
class BlogPosts {
    constructor() {
        this.thing = '';
    }
    find(id) {
        if (id) {
            return db_config_js_1.default('blogposts')
                .where('blogposts.id', id);
        }
        else {
            return db_config_js_1.default('blogposts');
        }
    }
    add(blogpost) {
        return db_config_js_1.default('blogposts')
            .insert(blogpost, "id")
            .then(([id]) => this.find(id));
    }
    delete(id) {
        return db_config_js_1.default('blogposts')
            .where("blogposts.id", id)
            .del();
    }
}
exports.BlogPosts = BlogPosts;
//# sourceMappingURL=blogposts-model.js.map