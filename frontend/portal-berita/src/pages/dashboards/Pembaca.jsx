import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import RightSidebar from '../../components/RightSidebar';

export default function Pembaca() {
  const [profile, setProfile] = useState({
    nama: '',
    email: '',
    foto: '/user.jpg'
  });

  const token = localStorage.getItem('token');

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

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div className="flex">
      <Sidebar onLogout={handleLogout} nama={profile.nama} email={profile.email} foto={profile.foto} />

      <div className="flex-1 bg-gray-50">
        <header className="border-b p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard Pembaca</h1>
          <p className="text-gray-500">Selamat Membaca, {profile.nama}!</p>
        </header>

        <div className="p-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Berita Tersimpan</h2>
            <p className="text-gray-500">Daftar artikel yang sudah Anda simpan untuk dibaca nanti.</p>
          </div>

          <div className="mt-6">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
