"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = void 0;
const db_config_js_1 = __importDefault(require("../../db-config.js"));
class Favorites {
    constructor() {
        this.thing = '';
    }
    find(id) {
        if (id) {
            return db_config_js_1.default('favorites')
                .where('favorites.id', id);
        }
        else {
            return db_config_js_1.default('favorites');
        }
    }
    findByUser(userId, blogpostId) {
        return db_config_js_1.default('favorites')
            .where('favorites.user_id', userId)
            .where('favorites.blogpost_id', blogpostId);
    }
    add(favorites) {
        return db_config_js_1.default('favorites')
            .insert(favorites, "id")
            .then(([id]) => this.find(id));
    }
    delete(id) {
        return db_config_js_1.default('favorites')
            .where("favorites.id", id)
            .del();
    }
}
exports.Favorites = Favorites;
//# sourceMappingURL=favorites-model.js.map