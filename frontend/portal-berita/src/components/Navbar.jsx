import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/banner-logo.png';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('nama');
    window.location.href = '/login';
  }

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white font-poppins">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-38" />
      </div>

      {/* Navigation */}
      <ul className="hidden md:flex gap-8 text-sm font-semibold text-black">
        <li className="hover:text-[#7E0063] transition duration-300"><Link to="/">Beranda</Link></li>
        <li className="hover:text-[#7E0063] transition duration-300"><Link to="/dashboard">Dashboard</Link></li>
        <li className="hover:text-[#7E0063] transition duration-300"><Link to="/pencarian">Pencarian</Link></li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-6">
        <button onClick={handleLogout} className="px-4 py-2 border border-black text-black rounded-lg text-sm font-semibold hover:bg-[#7E0063] hover:border-[#7E0063] hover:text-white transition duration-300">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
