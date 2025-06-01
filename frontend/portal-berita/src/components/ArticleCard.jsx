import React from 'react';
import { Link } from 'react-router-dom';
import ilustrasi from '../assets/undraw_my-feed_fo8n.png';

const ArticleCard = ({ imgSrc, title, excerpt, category, date, small = false }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${small ? 'md:flex-row' : ''}`}>
      <img 
        src={imgSrc} 
        alt={title} 
        className={`${small ? 'w-full md:w-1/3 h-32 md:h-auto object-cover' : 'w-full h-48 object-cover'}`}
        onError={(e) => e.target.src = `https://placehold.co/${small ? '150x100' : '300x200'}/CCCCCC/757575?text=Gambar`}
      />
      <div className={`p-4 flex flex-col justify-between flex-1 ${small ? 'md:w-2/3' : ''}`}>
        <div>
          {category && <span className="text-xs text-purple-600 font-semibold uppercase">{category}</span>}
          <h3 className={`${small ? 'text-base' : 'text-lg'} font-semibold text-gray-800 mt-1 mb-2 hover:text-purple-600 transition duration-300`}>
            <a href="#">{title}</a>
          </h3>
          {excerpt && !small && <p className="text-gray-600 text-sm mb-3">{excerpt}</p>}
          {date && <p className="text-gray-500 text-xs">{date}</p>}
        </div>
        {!small && (
          <a href="#" className="text-purple-600 hover:text-purple-700 text-sm font-semibold self-start mt-2">
            Baca Selengkapnya &rarr;
          </a>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;