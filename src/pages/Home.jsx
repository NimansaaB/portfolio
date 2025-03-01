import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Education from '../components/home/Education';
import TechnicalSkills from '../components/home/TechnicalSkills';
import Awards from '../components/home/Awards';
import Workshops from '../components/home/Workshops';
import '../styles/pages/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Education />
      <TechnicalSkills />
      <Awards />
      <Workshops />
    </div>
  );
};

export default Home;