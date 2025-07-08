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


// const Pengguna = require('../models/pengguna.js');

// exports.getAllPengguna = async (req, res) => {
//   try {
//     const users = await Pengguna.getAll();
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Gagal mengambil data pengguna' });
//   }
// };

// exports.getPenggunaById = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await Pengguna.getById(id);
//     if (!user) {
//       return res.status(404).json({ error: 'Pengguna tidak ditemukan' });
//     }
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Gagal mengambil data pengguna' });
//   }
// };

// exports.createPengguna = async (req, res) => {
//   try {
//     const data = req.body;
//     await Pengguna.create(data);
//     res.status(201).json({ message: 'Pengguna berhasil dibuat' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Gagal membuat pengguna' });
//   }
// };

// exports.updatePengguna = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const data = req.body;
//     await Pengguna.update(id, data);
//     res.json({ message: 'Pengguna berhasil diperbarui' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Gagal memperbarui pengguna' });
//   }
// };

// exports.deletePengguna = async (req, res) => {
//   try {
//     const id = req.params.id;
//     await Pengguna.delete(id);
//     res.json({ message: 'Pengguna berhasil dihapus' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Gagal menghapus pengguna' });
//   }
// };
