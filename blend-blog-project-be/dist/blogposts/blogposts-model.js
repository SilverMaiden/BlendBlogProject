const db = require('../db-config.js');
module.exports = {
    find,
    add
};
function find(id) {
    if (id) {
        return db('blogposts as b')
            .join('users', 'b.user_id')
            .where('user_id', id);
    }
    else {
        return db('blogposts');
    }
}
function add(blogpost) {
    return db('blogposts')
        .insert(blogpost, "id");
}
//# sourceMappingURL=blogposts-model.js.map