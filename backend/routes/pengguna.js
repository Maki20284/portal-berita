const express = require('express');
const router = express.Router();
const penggunaController = require('../controllers/penggunaController');
const upload = require('../middlewares/uploadMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// GET route me
router.get('/me', authMiddleware, penggunaController.getMe);

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

// POST untuk upload foto profil
router.post('/upload-photo', upload.single('file'), penggunaController.uploadPhoto);

module.exports = router;