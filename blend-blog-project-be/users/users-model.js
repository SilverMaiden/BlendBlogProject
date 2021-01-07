const db = require('../db-config.js');
module.exports = {
    find,
    findBlogPosts,
    findFavorites,
    add
};

function find(id) {
    if (id) {
        return db('users')
        .where('users.id', id)
        .first()
    } else {
        return db('users');
    }
}

function findBlogPosts(id) {
    return db('users as u' )
        .join('blogposts as b', 'u.id', 'b.user_id')
        .where('u.id', id)

}

function findFavorites(id) {
    return db('favorites as f' )
        .where('f.user_id', id)

}


function add(users) {
    return db('users')
    .insert(users, "id")
    .then(([id]) => this.find(id));
}
