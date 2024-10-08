// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "sqlite3",
    migrations: {directory: './migrations'},
    seeds: {directory: './seeds'},
    useNullAsDefault: true,
    connection: {
      filename: "./recipe.db3",
    }, 
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done); 
      },
    },
  },
};
