const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Pengguna = require('../models/penggunaModel');
require('dotenv').config();
const SECRET_KEY = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  try {
    const { nama, email, password, role } = req.body;

    if (!nama || !email || !password || !role) {
      return res.status(400).json({ message: 'Data tidak lengkap' });
    }

    const exist = await Pengguna.findByEmail(email);
    if (exist) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Pengguna.create({
      nama,
      email,
      password: hashedPassword,
      role,
      profile_picture: null
    });

    res.json({ message: 'Registrasi berhasil' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Gagal mendaftar' });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Data tidak lengkap' });
    }

    const user = await Pengguna.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'Email tidak terdaftar' });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).json({ message: 'Password salah' });
    }

    // Buat token
    const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1d' });
    res.json({ token, role: user.role, nama: user.nama });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Gagal login' });
  }

};
