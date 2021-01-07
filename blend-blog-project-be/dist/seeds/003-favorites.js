exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('favorites').del()
        .then(function () {
        // Inserts seed entries
        return knex('favorites').insert([
            {
                id: 1,
                blogpost_id: 1,
                user_id: 1,
            }
        ]);
    });
};
//# sourceMappingURL=003-favorites.js.map