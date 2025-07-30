import React, { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import MainContent from '../components/MainContent.jsx';
import Footer from '../components/Footer.jsx';
import LatestArticlesSection from '../components/LatestArticleSection.jsx';
import WeeklySpotlightSection from '../components/WeeklySpotlightSection.jsx';
import { useNavigate } from 'react-router-dom';

export default function Beranda() {
  const navigate = useNavigate();

  // Cek role saat komponen di-load
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
        case '/dashboard/pembaca':
          // pembaca boleh tetap di beranda
          break;
        default:
          // jika role tidak dikenal, logout
          handleLogout();
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('nama');
    navigate('/login');
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="py-[200px]">
          <Hero />
        </div>
        <MainContent />
        <LatestArticlesSection />
        <WeeklySpotlightSection />
      </div>
      <Footer />
    </div>
  );
}
