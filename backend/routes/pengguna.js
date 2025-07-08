const express = require('express');
const router = express.Router();
const penggunaController = require('../controllers/penggunaController');

// GET semua pengguna
router.get('/', penggunaController.getAllPengguna);

// GET pengguna by ID
router.get('/:id', penggunaController.getPenggunaById);

// POST pengguna
router.post('/', penggunaController.createPengguna);

// PUT pengguna
router.put('/:id', penggunaController.updatePengguna);

// DELETE pengguna
router.delete('/:id', penggunaController.deletePengguna);

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const Pengguna = require('../models/pengguna');

// // GET semua pengguna
// router.get('/', async (req, res) => {
//   try {
//     const pengguna = await Pengguna.query();
//     res.json(pengguna);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // POST user
// router.post('/', async (req, res) => {
//   const user = await Pengguna.query().insert(req.body);
//   res.status(201).json(user);
// });

// module.exports = router;