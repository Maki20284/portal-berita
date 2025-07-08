import React, { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import MainContent from '../components/MainContent.jsx';
import Footer from '../components/Footer.jsx';
import LatestArticlesSection from '../components/LatestArticleSection.jsx';
import WeeklySpotlightSection from '../components/WeeklySpotlightSection.jsx';

export default function Beranda() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="py-[200px]">
          <Hero />
        </div>
        <MainContent />
        <LatestArticlesSection/>
        <WeeklySpotlightSection/>
      </div>
      <Footer />
    </div>
  );
}