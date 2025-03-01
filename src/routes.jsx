import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Fallback route for any unmatched paths */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;