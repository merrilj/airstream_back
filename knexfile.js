const databaseName = 'flyway';

module.exports = {
  development: {
    client: 'postgresql',
    connection: `postgres://localhost/flyway`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + "?ssl=true",
  }
};
