const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig.development);
const { Model } = require('objection');

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'portal-berita'
  }
});

Model.knex(knex);

module.exports = knex
