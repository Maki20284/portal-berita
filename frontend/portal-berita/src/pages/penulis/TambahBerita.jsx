import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function TambahBerita() {
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('');
  const [isi, setIsi] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [kategoriList, setKategoriList] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const id_penulis = localStorage.getItem('id_pengguna'); // pastikan id penulis disimpan di localStorage saat login

  // Misal kategori sudah fix 10
  useEffect(() => {
  const fetchKategori = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/kategori');
      setKategoriList(res.data);
    } catch (err) {
      console.error('Gagal mengambil kategori', err);
    }
  };
  fetchKategori();
}, []);

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!judul || !kategori || !isi) {
        alert('Harap lengkapi semua field');
        return;
    }

    try {
        setIsSubmitting(true);

        let url_thumbnail = '';
        if (thumbnail) {
        const formData = new FormData();
        formData.append('file', thumbnail);
        const uploadRes = await axios.post('http://localhost:5000/api/upload', formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
            }
        });
        url_thumbnail = uploadRes.data.url;
        }

        await axios.post('http://localhost:5000/api/artikel', {
        id_kategori: parseInt(kategori, 10),
        judul,
        konten: isi,
        url_thumbnail
        }, {
        headers: { Authorization: `Bearer ${token}` }
        });

        alert('Berita berhasil diajukan ke Editor untuk review!');
        navigate('/dashboard/penulis');
    } catch (err) {
        console.error(err);
        alert('Gagal menambahkan berita');
    } finally {
        setIsSubmitting(false);
    }
    };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow my-8">
      <h1 className="text-2xl font-bold mb-4">Tulis Berita Baru</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Judul</label>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="border rounded w-full p-2"
            placeholder="Masukkan judul berita"
          />
        </div>

        <div>
          <label className="block font-semibold">Kategori</label>
          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="border rounded w-full p-2"
          >
            <option value="">Pilih kategori</option>
            {kategoriList.map(k => (
              <option key={k.id} value={k.id}>{k.nama}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold">Thumbnail (opsional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
            className="border rounded w-full p-2"
          />
        </div>

        <div>
          <label className="block font-semibold">Isi Artikel</label>
          <textarea
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            className="border rounded w-full p-2 min-h-[150px]"
            placeholder="Tulis isi berita di sini"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
        >
          {isSubmitting ? 'Mengirim...' : 'Ajukan ke Editor'}
        </button>
      </form>
    </div>
  );
}
