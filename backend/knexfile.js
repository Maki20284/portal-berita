// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// knexfile.js
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',        
      user: 'root',             
      password: '',    
      database: 'portal_berita'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
