import React from 'react';
import ArticleCard from './ArticleCard.jsx';

const MainContent = () => {
  const featuredArticle = {
    imgSrc: "https://placehold.co/800x450/A78BFA/FFFFFF?text=Teknologi+Digital",
    title: "Teknologi Digital Semakin Didepan",
    excerpt: "Perkembangan teknologi digital telah mengubah berbagai aspek kehidupan kita. Dari cara kita berkomunikasi hingga cara kita bekerja dan belajar, semuanya terpengaruh.",
    author: "Jane Doe",
    date: "28 Mei 2025",
  };

  const popularArticles = [
    { id: 1, imgSrc: "https://placehold.co/150x100/C4B5FD/4C1D95?text=Pop+1", title: "Lorem ipsum dolor sit amet consectetur", date: "27 Mei 2025" },
    { id: 2, imgSrc: "https://placehold.co/150x100/DDD6FE/4C1D95?text=Pop+2", title: "Adipiscing elit sed do eiusmod tempor", date: "26 Mei 2025" },
    { id: 3, imgSrc: "https://placehold.co/150x100/C4B5FD/4C1D95?text=Pop+3", title: "Incididunt ut labore et dolore magna", date: "25 Mei 2025" },
    { id: 4, imgSrc: "https://placehold.co/150x100/DDD6FE/4C1D95?text=Pop+4", title: "Ut enim ad minim veniam quis nostrud", date: "24 Mei 2025" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Kolom Utama (Featured Article) */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src={featuredArticle.imgSrc} 
                alt={featuredArticle.title} 
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
                onError={(e) => e.target.src = 'https://placehold.co/800x450/CCCCCC/757575?text=Gambar+Utama'}
              />
              <div className="p-6 md:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition duration-300">
                  <a href="#">{featuredArticle.title}</a>
                </h2>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{featuredArticle.excerpt}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <span>Oleh {featuredArticle.author}</span> | <span>{featuredArticle.date}</span>
                </div>
                <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md text-sm transition duration-300">
                  Baca Lebih Lanjut
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar (Artikel Populer) */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-500 pb-2">Artikel Populer</h3>
              <div className="space-y-4">
                {popularArticles.map(article => (
                  <ArticleCard 
                    key={article.id}
                    imgSrc={article.imgSrc}
                    title={article.title}
                    date={article.date}
                    small={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;