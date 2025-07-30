import React from 'react';
import ArticleCard from './ArticleCard.jsx';

export default function MainContent({ berita }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {berita.map((item, i) => (
        <div key={i} className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-bold">{item.judul}</h2>
          <p className="text-sm text-gray-600">{item.ringkasan || item.konten?.substring(0, 100)}</p>
          <a
            href={`https://winnicode.com/api/publikasi-berita/${item.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm mt-2 inline-block"
          >
            Baca selengkapnya →
          </a>
        </div>
      ))}
    </div>
  );
}