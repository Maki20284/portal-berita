const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig.development);

knex.raw('SELECT 1+1 AS result')
  .then(res => {
    console.log('✅ Koneksi berhasil:', res.rows);
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Koneksi gagal:', err);
    process.exit(1);
  });
