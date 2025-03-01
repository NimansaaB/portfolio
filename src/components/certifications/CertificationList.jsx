import React, { useState, useEffect } from 'react';
import CertificationCard from './CertificationCard';
import '../../styles/components/CertificationList.css';

const CertificationList = ({ certifications = [] }) => {
  const [filteredCertifications, setFilteredCertifications] = useState(certifications);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setFilteredCertifications(certifications);
  }, [certifications]);

  // Extract unique categories from all certifications
  const allCategories = ['all', ...new Set(
    certifications.map(cert => cert.category)
  )];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredCertifications(certifications);
    } else {
      const filtered = certifications.filter(cert => 
        cert.category === filter
      );
      setFilteredCertifications(filtered);
    }
  };

  return (
    <div className="certification-list">
      <div className="certification-list__filters">
        {allCategories.map((category, index) => (
          <button
            key={index}
            className={`certification-list__filter-btn ${activeFilter === category ? 'certification-list__filter-btn--active' : ''}`}
            onClick={() => handleFilterChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      {filteredCertifications.length > 0 ? (
        <div className="certification-list__grid">
          {filteredCertifications.map((cert) => (
            <CertificationCard 
              key={cert.id} 
              certification={cert}
            />
          ))}
        </div>
      ) : (
        <div className="certification-list__empty">
          <p>No certifications found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default CertificationList;