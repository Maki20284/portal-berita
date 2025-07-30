import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard.jsx';
import axios from 'axios';

const LatestArticlesSection = () => {
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://winnicode.com/api/publikasi-berita', {
          headers: {
            Authorization: 'Bearer a42278524bee772194f2ad0e9ac88a5893aa733db4d1c684d89c2dc08b7f718a'
          }
        });
        setLatestArticles(response.data); // pastikan format JSON array
      } catch (error) {
        console.error('Gagal memuat artikel:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#7E0063] mb-8 text-center md:text-left">Artikel Terbaru</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
            <ArticleCard 
              key={index}
              imgSrc={article.gambar || "https://placehold.co/300x200?text=No+Image"}
              title={article.judul}
              excerpt={article.deskripsi?.slice(0, 100) + '...'} // asumsi field 'deskripsi' tersedia
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;
