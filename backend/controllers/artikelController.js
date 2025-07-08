const Artikel = require("../models/artikelModel.js");

exports.getAllArtikel = async (req, res) => {
  try {
    const [rows] = await Artikel.getAll();
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mengambil data artikel' });
  }
};

exports.getArtikel = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Artikel.getById(id);

    // Jika tidak ada data
    if (!result || !result[0] || result[0].length === 0) {
      return res.status(404).json({ error: "Artikel tidak ditemukan" });
    }

    res.json(result[0][0]); // Ambil baris pertama dari rows
  } catch (error) {
    console.error("Error ambil artikel:", error);
    res.status(500).json({ error: "Gagal mengambil artikel" });
  }
};

exports.createArtikel = async (req, res) => {
  try {
    const {
      id_kategori,
      id_penulis,
      judul,
      slug,
      ringkasan,
      konten,
      url_thumbnail,
      status,
      tanggal_publikasi
    } = req.body;

    if (
      !id_kategori || !id_penulis || !judul || !slug || !konten || !status
    ) {
      return res.status(400).json({ error: "Data tidak lengkap" });
    }

   const result = await Artikel.create(
      id_kategori,
      id_penulis,
      judul,
      slug,
      ringkasan,
      konten,
      url_thumbnail,
      status,
      tanggal_publikasi
    );

    res.status(201).json({ message: "Artikel berhasil ditambahkan", data: result });
  } catch (error) {
    console.error("Gagal menambahkan artikel:", error);
    res.status(500).json({ error: "Gagal menambahkan artikel" });
  }
};

exports.updateArtikel = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      id_kategori,
      id_penulis,
      judul,
      slug,
      ringkasan,
      konten,
      url_thumbnail,
      status,
      tanggal_publikasi
    } = req.body;

    await Artikel.update(id, id_kategori, id_penulis, judul, slug, ringkasan, konten, url_thumbnail, status, tanggal_publikasi);

    res.json({ message: "Artikel diperbarui" });
  } catch (error) {
    console.error("Error update artikel:", error);
    res.status(500).json({ error: "Gagal memperbarui artikel" });
  }
};

exports.deleteArtikel = async (req, res) => {
  await Artikel.delete(req.params.id);
  res.json({ message: "Artikel dihapus" });
};