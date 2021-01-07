
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('blogposts').del()
      .then(function () {
        // Inserts seed entries
        return knex('blogposts').insert([
          {
            id: 1,
            blogpost_title: "How to build a thing",
            blogpost_content: "lorem ipsum all that good stuff",
            user_id: 1
          }
        ]);
      });
  };
  