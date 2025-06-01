import { useState } from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import LatestArticlesSection from './components/LatestArticleSection.jsx';
import WeeklySpotlightSection from './components/WeeklySpotlightSection.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MainContent />
      <LatestArticlesSection/>
      <WeeklySpotlightSection/>
      <Footer />
    </div>
  );
}

export default App;