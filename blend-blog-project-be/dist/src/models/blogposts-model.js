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
    findBy(filter) {
        return db_config_js_1.default('blogposts').where(filter);
    }
    edit(blogpost) {
        return db_config_js_1.default('blogposts')
            .where('blogposts.id', blogpost.id)
            .update(blogpost)
            .then(() => {
            return this.find(blogpost.id);
        });
    }
    add(blogpost) {
        return db_config_js_1.default('blogposts')
            .insert(blogpost, "id")
            .then(([id]) => this.find(id));
    }
    delete(id) {
        // tslint:disable-next-line:no-console
        console.log(id);
        return db_config_js_1.default('blogposts')
            .where('blogposts.id', id)
            .del();
    }
    deleteFavorite(id) {
        // tslint:disable-next-line:no-console
        console.log(id);
        return db_config_js_1.default('favorites')
            .where('favorites.blogpost_id', id)
            .del();
    }
}
exports.BlogPosts = BlogPosts;
//# sourceMappingURL=blogposts-model.js.map