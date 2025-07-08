import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/banner-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] text-black pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Kolom Logo dan Deskripsi */}
          <div>
            <img src={logo} alt="Logo" className="h-22 w-58" />
            <p className="text-sm text-black leading-relaxed">
              Jurnalistik Program winnicode adalah program pengembangan sumber daya manusia yang ditujukan bagi pemuda pemudi yang berkarir di dunia report.
            </p>
          </div>

          {/* Kolom Kategori */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Kategori</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#7E0063] transition duration-300">Web Development</a></li>
              <li><a href="#" className="hover:text-[#7E0063] transition duration-300">Mobile Development</a></li>
              <li><a href="#" className="hover:text-[#7E0063] transition duration-300">Data Science</a></li>
              <li><a href="#" className="hover:text-[#7E0063] transition duration-300">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Kolom Tentang Kami */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Tentang Kami</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#7E0063] transition duration-300">Tim Kami</a></li>
              <li><a href="#" className="hover:text-[#7E0063] transition duration-300">Karir</a></li>
              <li><a href="#" className="hover:text-[#7E0063] transition duration-300">Kontak</a></li>
              <li><a href="#" className="hover:text-[#7E0063] transition duration-300">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Kolom Ikuti Kami */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-[#7E0063] transition duration-300">IG</a>
              <a href="#" className="text-black hover:text-[#7E0063] transition duration-300">TW</a>
              <a href="#" className="text-black hover:text-[#7E0063] transition duration-300">LN</a>
            </div>
            <button className="mt-6 w-full bg-black hover:bg-[#7E0063] text-white font-semibold py-2 px-4 rounded-md text-sm transition duration-300">
              Berlangganan Newsletter
            </button>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Win Code. Semua Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;