const knexConfig = require('../knexfile.js');
const knex = require('knex')(knexConfig.development);

module.exports = knex;


// const express = require("express")
// const app = express()
// const mysql = require("mysql2");

// const db = mysql.createPool({
//   connectionLimit: 100,
//   host: "127.0.0.1",
  
// })

// const connection = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "portal_berita"
// });

// module.exports = connection.promise(); // agar bisa pakai async/await


// const knexConfig = require('../knexfile');
// const knex = require('knex')(knexConfig.development);
// const { Model } = require('objection');

// const db = knex({
//   client: 'pg',
//   connection: {
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'portal-berita'
//   }
// });

// Model.knex(knex);

// module.exports = knex
