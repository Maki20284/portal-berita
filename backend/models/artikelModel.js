const db = require('../db/db.js');

exports.getAll = () => db('artikel').select('*');

exports.getById = (id) => db('artikel').where({ id }).first();

exports.create = (data) => db('artikel').insert(data);

exports.update = (id, data) => db('artikel').where({ id }).update(data);

exports.delete = (id) => db('artikel').where({ id }).del();


// const db = require("../db/db.js");

// exports.getAll = () => db.query("SELECT * FROM artikel ORDER BY id DESC");

// exports.getById = (id) => db.query("SELECT * FROM artikel WHERE id = ?", [id]);

// exports.create = (id_kategori,id_penulis,judul,slug,ringkasan,konten,url_thumbnail,status,tanggal_publikasi) =>
//   db.query(
//     "INSERT INTO artikel (id_kategori,id_penulis,judul,slug,ringkasan,konten,url_thumbnail,status,tanggal_publikasi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);",
//     [id_kategori,id_penulis,judul,slug,ringkasan,konten,url_thumbnail,status,tanggal_publikasi]
//   );

// exports.update = (id, id_kategori, id_penulis, judul, slug, ringkasan, konten, url_thumbnail, status, tanggal_publikasi) =>
//   db.query(
//     "UPDATE artikel SET id_kategori=?, id_penulis=?, judul=?, slug=?, ringkasan=?, konten=?, url_thumbnail=?, status=?, tanggal_publikasi=? WHERE id=?",
//     [id_kategori, id_penulis, judul, slug, ringkasan, konten, url_thumbnail, status, tanggal_publikasi, id]
//   );

// exports.delete = (id) => db.query("DELETE FROM artikel WHERE id = ?", [id]);