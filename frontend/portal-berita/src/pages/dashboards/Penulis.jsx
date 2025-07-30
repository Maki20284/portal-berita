import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/HeaderPenulis';
import StatsCards from '../../components/StatsCards';
import BeritaList from '../../components/BeritaListDB';
import RightSidebar from '../../components/RightSidebar';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Penulis() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    nama: '',
    email: '',
    foto: '/user.jpg'
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const token = localStorage.getItem('token');

  // Fetch profile on load
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await axios.get('http://localhost:5000/api/pengguna/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile({
          nama: res.data.nama,
          email: res.data.email,
          foto: res.data.foto
        });
      } catch (err) {
        console.error('Failed to load profile:', err);
      }
    }

    fetchProfile();
  }, [token]);

  // Handle logout
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  // Handle photo upload
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append('file', selectedFile);

      const res = await axios.post('http://localhost:5000/api/pengguna/upload-photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });

      // Update profile with new photo URL
      setProfile((prev) => ({ ...prev, foto: res.data.foto }));
      alert('Foto berhasil diunggah!');
    } catch (err) {
      console.error('Upload failed', err);
      alert('Gagal upload foto');
    } finally {
      setIsUploading(false);
    }
  };

  // Dummy berita
  const berita = [
    { image: '/parlemen.jpg', title: 'Lorem ipsum dolor sit amet', category: 'Politik', timeAgo: '10 jam lalu' },
    { image: '/parlemen.jpg', title: 'Lorem ipsum dolor sit amet', category: 'Politik', timeAgo: '10 jam lalu' },
    { image: '/parlemen.jpg', title: 'Lorem ipsum dolor sit amet', category: 'Politik', timeAgo: '10 jam lalu' },
  ];

  return (
    <div className="flex">
      <Sidebar onLogout={handleLogout} nama={profile.nama} email={profile.email} foto={profile.foto}>
        <form onSubmit={handleUpload} className="mt-4 space-y-2 px-2">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="text-sm border border-gray-300 rounded px-2 py-1 w-full"
          />
          <button
            type="submit"
            disabled={isUploading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition"
          >
            {isUploading ? 'Mengunggah...' : 'Upload Foto'}
          </button>
        </form>
      </Sidebar>

      <div className="flex-1 bg-gray-50">
        <Header nama={profile.nama} />
        <div className="flex justify-end p-4">
          <button
            onClick={() => navigate('/dashboard/penulis/tambah-berita')}
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow transition">
            <FaPlus /><span>Tulis Berita Baru</span>
          </button>
        </div>
        <div className="p-6 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <StatsCards />
            <BeritaList berita={berita} />
          </div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
