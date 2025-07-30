const express = require('express');
const router = express.Router();
const db = require('../db/db.js');

router.get('/', async (req, res) => {
  try {
    const kategori = await db('kategori').select('id', 'nama');
    res.json(kategori);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil kategori' });
  }
});

module.exports = router;