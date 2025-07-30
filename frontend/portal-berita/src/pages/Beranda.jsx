import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import MainContent from '../components/MainContent.jsx';
import Footer from '../components/Footer.jsx';
import LatestArticlesSection from '../components/LatestArticleSection.jsx';
import WeeklySpotlightSection from '../components/WeeklySpotlightSection.jsx';
import { useNavigate } from 'react-router-dom';

export default function Beranda() {
  const [berita, setBerita] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (token && role) {
      switch (role) {
        case 'admin':
          navigate('/dashboard/admin');
          break;
        case 'editor':
          navigate('/dashboard/editor');
          break;
        case 'penulis':
          navigate('/dashboard/penulis');
          break;
        case 'pembaca':
          break; 
        default:
          handleLogout();
      }
    }

    fetchBerita();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('nama');
    navigate('/login');
  };

  const fetchBerita = async () => {
    try {
      const response = await fetch('https://winnicode.com/api/publikasi-berita', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer a42278524bee772194f2ad0e9ac88a5893aa733db4d1c684d89c2dc08b7f718a',
        },
      });

      const data = await response.json();
      setBerita(data); // pastikan format data JSON sesuai, atau sesuaikan
    } catch (error) {
      console.error('Gagal mengambil data berita:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="py-[200px]">
          <Hero />
        </div>
        <MainContent berita={berita} />
        <LatestArticlesSection berita={berita} />
        <WeeklySpotlightSection />
      </div>
      <Footer />
    </div>
  );
}