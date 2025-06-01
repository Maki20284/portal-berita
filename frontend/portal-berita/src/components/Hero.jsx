import React from 'react';
import { Link } from 'react-router-dom';
import ilustrasi from '../assets/undraw_my-feed_fo8n.png';

const Hero = () => {
    return (
        <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Konten Teks */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Suarakan Ceritamu, Temukan Duniamu.
            </h1>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8">
              Platform di mana setiap jurnalis dapat berbagi berita, dan setiap pembaca menemukan perspektif baru. Bergabunglah dalam arus informasi yang bebas dan terpercaya.
            </p>
            <button className="hover:bg-[#7E0063] bg-black text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300">
              Jelajahi Sekarang
            </button>
          </div>
          {/* Ilustrasi */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            {/* Ganti dengan SVG atau gambar ilustrasi Anda */}
            <img 
              src={ilustrasi}
              alt="Ilustrasi" 
              className="rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              onError={(e) => e.target.src = 'https://placehold.co/500x350/E9D5FF/6B46C1?text=Gagal+Muat'}
            />
          </div>
        </div>
      </div>
    </section>
    );
};

export default Hero;