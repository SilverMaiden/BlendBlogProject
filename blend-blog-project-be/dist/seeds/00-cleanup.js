const cleaner = require('knex-cleaner');
exports.seed = function (knex) {
    return cleaner.clean(knex, {
        mode: 'truncate',
        ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
    });
};
//# sourceMappingURL=00-cleanup.js.map