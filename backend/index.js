const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const penggunaRoutes = require('./routes/pengguna');
const artikelRoutes = require('./routes/artikelRoutes');
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const kategoriRoutes = require('./routes/kategori');

// ✅ Unggah foto profil
app.use('/uploads', express.static('uploads'));

// ✅ Middleware sekali saja di atas semua routes
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use('/api/kategori', kategoriRoutes);
app.use('/api/artikel', artikelRoutes);
app.use('/api/pengguna', penggunaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);

// ✅ Default root (jangan didefinisikan dua kali!)
app.get('/', (req, res) => {
  res.send('Backend berjalan!');
});

// ✅ Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));