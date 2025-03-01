import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import '../../styles/components/ProjectList.css';

const ProjectList = ({ projects = [] }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  // Fixed list of technologies for filters
  const allTechnologies = ['all', 'Flutter', 'Spring Boot', 'Machine Learning', 'Kotlin', 'Android', 
    'React', 'Node.js', 'Express', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'UI/UX', 'Figma', 'Angular', 'Python'];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.technologies.includes(filter)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="project-list">
      <div className="project-list__filters">
        {allTechnologies.map((tech, index) => (
          <button
            key={index}
            className={`project-list__filter-btn ${activeFilter === tech ? 'project-list__filter-btn--active' : ''}`}
            onClick={() => handleFilterChange(tech)}
          >
            {tech.charAt(0).toUpperCase() + tech.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="project-list__grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              featured={false} // Disable featured to ensure all cards are same size
            />
          ))
        ) : (
          <div className="project-list__empty">
            <p>No projects found with the selected technology.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;