const Pengguna = require('../models/penggunaModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.getMe = async (req, res) => {
  try {
    const pengguna = await Pengguna.getById(req.user.id);
    if (!pengguna) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan' });
    }
    res.json({
      nama: pengguna.nama,
      email: pengguna.email,
      foto: pengguna.profile_picture
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.uploadPhoto = async (req, res) => {
  try {
    // Ambil user dari token
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Token tidak disediakan' });
    
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    
    if (!req.file) {
      return res.status(400).json({ error: 'File tidak ada' });
    }

    const photoPath = `/uploads/${req.file.filename}`;
    await Pengguna.update(userId, { profile_picture: photoPath });

    res.json({ message: 'Foto berhasil diunggah', foto: photoPath });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPengguna = async (req, res) => {
  try {
    const pengguna = await Pengguna.getAll();
    res.json(pengguna);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPenggunaById = async (req, res) => {
  try {
    const pengguna = await Pengguna.getById(req.params.id);
    if (!pengguna) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan' });
    }
    res.json(pengguna);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPengguna = async (req, res) => {
  try {
    await Pengguna.create(req.body);
    res.status(201).json({ message: 'Pengguna berhasil dibuat' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePengguna = async (req, res) => {
  try {
    await Pengguna.update(req.params.id, req.body);
    res.json({ message: 'Pengguna berhasil diperbarui' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePengguna = async (req, res) => {
  try {
    await Pengguna.delete(req.params.id);
    res.json({ message: 'Pengguna berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// const Pengguna = require('../models/pengguna.js');


// exports.getAllPengguna = async (req, res) => {
//   try {
//     const result = await Pengguna.getAll();
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Gagal mengambil data pengguna' });
//   }
// };
