module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/migrations'
    }
  },

  staging: {
    client: process.env.DB_CONNECTION,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user:     process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: process.env.DB_CONNECTION,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user:     process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
