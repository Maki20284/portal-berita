import React from 'react';
import ArticleCard from './ArticleCard.jsx';

const LatestArticlesSection = () => {
  const latestArticles = [
    { id: 1, imgSrc: "https://placehold.co/300x200/EDE9FE/5B21B6?text=Terbaru+1", title: "Panduan Lengkap Belajar React untuk Pemula", excerpt: "Mulai perjalanan Anda dalam pengembangan web modern dengan React." },
    { id: 2, imgSrc: "https://placehold.co/300x200/F5F3FF/5B21B6?text=Terbaru+2", title: "Tips & Trik Tailwind CSS yang Wajib Diketahui", excerpt: "Optimalkan workflow styling Anda dengan Tailwind CSS." },
    { id: 3, imgSrc: "https://placehold.co/300x200/EDE9FE/5B21B6?text=Terbaru+3", title: "Membangun API dengan Node.js dan Express", excerpt: "Dasar-dasar pembuatan backend yang tangguh." },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center md:text-left">Artikel Terbaru</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map(article => (
            <ArticleCard 
              key={article.id}
              imgSrc={article.imgSrc}
              title={article.title}
              excerpt={article.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;