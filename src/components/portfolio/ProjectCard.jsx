import React from 'react';
import Button from '../shared/Button';
import '../../styles/components/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { 
    id, 
    title, 
    description, 
    technologies, 
    period
  } = project;

  // Get first letter for placeholder
  const firstLetter = title ? title.charAt(0) : 'P';

  return (
    <div className="project-card">
      {/* Image container with fixed height */}
      <div className="project-card__image-container">
        <div className="project-card__image-placeholder">
          <span className="project-card__image-text">{firstLetter}</span>
        </div>
      </div>
      
      {/* Content area with fixed structure */}
      <div className="project-card__content">
        <div className="project-card__header">
          <h3 className="project-card__title">{title}</h3>
          <span className="project-card__period">{period}</span>
        </div>
        
        {/* Description with truncation */}
        <div className="project-card__description-container">
          <p className="project-card__description">
            {description}
          </p>
        </div>
        
        {/* Technologies list */}
        <div className="project-card__technologies">
          {technologies && technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="project-card__tech">
              {tech}
            </span>
          ))}
        </div>
        
        {/* View Demo button consistently positioned */}
        <div className="project-card__button-container">
          <Button 
            to={`/project/${id}`}
            variant="primary" 
            size="small"
            className="project-card__button"
          >
            View Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;