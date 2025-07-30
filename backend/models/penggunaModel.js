const db = require('../db/db.js');

exports.getAll = () => {
  return db('pengguna').select('*');
};

exports.getById = (id) => {
  return db('pengguna').where({ id }).first();
};

exports.findByEmail = (email) =>
  db('pengguna').where({ email }).first();

exports.create = (data) =>
  db('pengguna').insert(data);

exports.update = (id, data) => {
  return db('pengguna').where({ id }).update(data);
};

exports.delete = (id) => {
  return db('pengguna').where({ id }).del();
};
