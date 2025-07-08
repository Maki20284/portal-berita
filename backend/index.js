const express = require('express');
const cors = require('cors');

const app = express();

const penggunaRoutes = require('./routes/pengguna');
const artikelRoutes = require('./routes/artikelRoutes');
const authRoutes = require('./routes/authRoutes');

// ✅ Middleware sekali saja di atas semua routes
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use('/api/artikel', artikelRoutes);
app.use('/api/pengguna', penggunaRoutes);
app.use('/api/auth', authRoutes);

// ✅ Default root (jangan didefinisikan dua kali!)
app.get('/', (req, res) => {
  res.send('Backend berjalan!');
});

// ✅ Start server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));

// const express = require('express');
// const app = express();
// const db = require('./db/db');
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const penggunaRoutes = require('./routes/pengguna');
// const artikelRoutes = require("./routes/artikelRoutes");
// const authRoutes = require('./routes/authRoutes');

// //routes artikel
// app.use(cors());
// app.use(bodyParser.json());
// app.use("/api/artikel", artikelRoutes);

// //routes pengguna
// app.use(express.json());
// app.use('/api/pengguna', penggunaRoutes);
// app.get('/', async (req, res) => {
//   try {
//     const result = await db('pengguna').select('*');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//   }
// });

// //routes authentication
// app.use(cors());
// app.use(bodyParser.json());
// app.use('/api/auth', authRoutes);
// app.get('/', (req, res) => {
//   res.send('Backend berjalan!');
// });

// //server running
// app.listen(5000, () => console.log("Server running on http://localhost:5000"));