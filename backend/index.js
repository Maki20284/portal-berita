const express = require('express');
const app = express();
const db = require('./db/db');
const penggunaRoutes = require('./routes/pengguna');

app.use(express.json());
app.use('/api/pengguna', penggunaRoutes);

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM pengguna');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});