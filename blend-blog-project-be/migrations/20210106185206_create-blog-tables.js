
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', tbl => {
      tbl.increments()
      tbl.string('name', 128)
        .notNullable();
      tbl.string('email', 128)
        .notNullable();
      tbl.string('password', 128)
        .notNullable();

    })

    .createTable('blogposts', tbl => {
      tbl.increments()
      tbl.string('blogpost_title', 128)
        .notNullable()
      tbl.string('blogpost_content', 10000)
        .notNullable();
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')

    })

    .createTable('favorites', tbl => {
      tbl.increments()
      tbl.integer('blogpost_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('blogposts')
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
    })
    .createTable('user-blogposts', tbl => {
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
      tbl.integer('blogpost_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('blogposts')

      tbl.primary(['user_id', 'blogpost_id']);
    })
    .createTable('user-favorites', tbl => {
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
      tbl.integer('blogpost_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('blogposts')

      tbl.primary(['user_id', 'blogpost_id']);
    });
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user-favorites')
    .dropTableIfExists('user-blogposts')
    .dropTableIfExists('favorites')
    .dropTableIfExists('blogposts')
    .dropTableIfExists('users')
};
