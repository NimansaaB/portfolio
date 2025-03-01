import React from 'react';
import Section from '../components/shared/Section';
import CertificationList from '../components/certifications/CertificationList';
import { certifications } from '../utils/data';
import '../styles/pages/Certifications.css';

const Certifications = () => {
  return (
    <div className="certifications-page">
      <Section
        title="Certifications & Courses"
        subtitle="My continuous learning journey"
        variant="light"
        className="certifications-section"
        id="certifications"
      >
        <CertificationList certifications={certifications} />
      </Section>
    </div>
  );
};

export default Certifications;