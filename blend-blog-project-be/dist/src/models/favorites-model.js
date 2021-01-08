const db = require('../../db-config.js');
module.exports = {
    find,
    add
};
function find() {
    return db('favorites');
}
function add(favorites) {
    return db('favorites')
        .insert(favorites, "id");
}
//# sourceMappingURL=favorites-model.js.map