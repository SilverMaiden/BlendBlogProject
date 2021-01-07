module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/blogappdb',
        migrations: {
            directory: './migrations'
        },
        seeds: {
            directory: './seeds'
        },
        useNullAsDefault: true
    },
    test: {
        client: 'pg',
        connection: 'postgres://localhost/blogappdb',
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds/test'
        },
        useNullAsDefault: true
    },
    production: {
        client: 'pg',
        connection: process.env.DB_URL,
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds/production'
        },
        useNullAsDefault: true
    }
};
//# sourceMappingURL=knexfile.js.map