import React from 'react';

const ArticleCard = ({ imgSrc, title, excerpt }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img 
      src={imgSrc} 
      alt={title} 
      className="w-full h-48 object-cover"
      onError={(e) => e.target.src = 'https://placehold.co/300x200/CCCCCC/757575?text=No+Image'}
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{excerpt}</p>
    </div>
  </div>
);

export default ArticleCard;