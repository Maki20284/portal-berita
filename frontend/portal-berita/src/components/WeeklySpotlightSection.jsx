import React from 'react';
import ArticleCard from './ArticleCard.jsx';

const WeeklySpotlightSection = () => {
  const spotlightItems = [
    { id: 1, imgSrc: "https://placehold.co/400x300/A5B4FC/3730A3?text=Sorotan+1", title: "Keindahan Alam Tersembunyi di Jawa Timur" },
    { id: 2, imgSrc: "https://placehold.co/400x300/C7D2FE/3730A3?text=Sorotan+2", title: "Resep Masakan Tradisional Nusantara" },
    { id: 3, imgSrc: "https://placehold.co/400x300/A5B4FC/3730A3?text=Sorotan+3", title: "Review Gadget Terbaru Minggu Ini" },
    { id: 4, imgSrc: "https://placehold.co/400x300/C7D2FE/3730A3?text=Sorotan+4", title: "Tips Produktif Bekerja dari Rumah" },
  ];
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center md:text-left">Sorotan Mingguan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spotlightItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <img 
                src={item.imgSrc} 
                alt={item.title} 
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => e.target.src = 'https://placehold.co/400x300/CCCCCC/757575?text=Gambar+Sorotan'}
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800 group-hover:text-purple-600 transition duration-300">
                  <a href="#">{item.title}</a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklySpotlightSection;