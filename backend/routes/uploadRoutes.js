const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');

// POST /api/upload
router.post('/', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Tidak ada file yang diunggah' });
  }

  // Buat URL relatif untuk frontend
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

module.exports = router;
