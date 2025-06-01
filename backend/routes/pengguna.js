const express = require('express');
const router = express.Router();
const Pengguna = require('../models/pengguna');

// GET semua pengguna
router.get('/', async (req, res) => {
  try {
    const pengguna = await Pengguna.query();
    res.json(pengguna);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST user
router.post('/', async (req, res) => {
  const user = await Pengguna.query().insert(req.body);
  res.status(201).json(user);
});

module.exports = router;