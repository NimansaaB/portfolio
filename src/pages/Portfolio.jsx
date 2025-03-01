import React from 'react';
import Section from '../components/shared/Section';
import ProjectList from '../components/portfolio/ProjectList';
import { projects } from '../utils/data';
import '../styles/pages/Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <Section
        title="My Portfolio"
        subtitle="Showcasing my latest projects and work"
        variant="light"
        className="portfolio-section"
        id="portfolio"
      >
        <ProjectList projects={projects} />
      </Section>
    </div>
  );
};

export default Portfolio;