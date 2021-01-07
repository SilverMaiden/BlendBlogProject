exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
        // Inserts seed entries
        return knex('users').insert([
            {
                id: 1,
                name: 'humaira',
                email: 'h.specials@gmail.com',
                password: 'imapassword'
            }
        ]);
    });
};
//# sourceMappingURL=001-users.js.map