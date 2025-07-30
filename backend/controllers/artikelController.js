const Artikel = require('../models/artikelModel');

async function getAllArtikel(req, res) {
  try {
    const data = await Artikel.getAll();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal mengambil artikel' });
  }
}

async function getArtikel(req, res) {
  try {
    const id = req.params.id;
    const artikel = await Artikel.getById(id);
    if (!artikel) return res.status(404).json({ error: 'Artikel tidak ditemukan' });
    res.json(artikel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal mengambil artikel' });
  }
}

async function createArtikel(req, res) {
  try {
    // Ambil id_penulis dari token
    const id_penulis = req.user.id;

    const { id_kategori, judul, konten, url_thumbnail } = req.body;

    if (!id_kategori || !judul || !konten) {
      return res.status(400).json({ error: "Data tidak lengkap" });
    }

    const slug = judul
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');

    const ringkasan = konten.substring(0, 150);
    const status = 'pending';
    const now = new Date();

    await Artikel.create({
      id_kategori,
      id_penulis,
      judul,
      slug,
      ringkasan,
      konten,
      url_thumbnail,
      status,
      tanggal_publikasi: now,
      tanggal_dibuat: now,
      tanggal_update: now
    });

    res.status(201).json({ message: "Artikel berhasil diajukan" });
  } catch (error) {
    console.error("Gagal menambahkan artikel:", error);
    res.status(500).json({ error: "Gagal menambahkan artikel" });
  }
}

async function updateArtikel(req, res) {
  try {
    const id = req.params.id;
    await Artikel.update(id, req.body);
    res.json({ message: 'Artikel diperbarui' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal update artikel' });
  }
}

async function deleteArtikel(req, res) {
  try {
    const id = req.params.id;
    await Artikel.delete(id);
    res.json({ message: 'Artikel dihapus' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal hapus artikel' });
  }
}

module.exports = {
  getAllArtikel,
  getArtikel,
  createArtikel,
  updateArtikel,
  deleteArtikel
};
