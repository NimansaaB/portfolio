import React from 'react';
import Section from '../shared/Section';
import '../../styles/components/TechnicalSkills.css';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS']
    },
    {
      id: 2,
      title: 'Web Development',
      skills: ['Angular', 'Spring Boot', 'React', 'Node.js']
    },
    {
      id: 3,
      title: 'Mobile Development',
      skills: ['Flutter', 'Kotlin']
    },
    {
      id: 4,
      title: 'Databases',
      skills: ['SQL', 'MongoDB']
    },
    {
      id: 5,
      title: 'Networking & Web Services',
      skills: ['Java Networking (Sockets, HTTP)', 'RESTful APIs (JAX-RS)', 'Apache Tomcat']
    },
    {
      id: 6,
      title: 'Tools',
      skills: ['Git', 'Postman', 'NetBeans', 'Pieces']
    },
    {
      id: 7,
      title: 'Design',
      skills: ['Figma', 'Axure']
    }
  ];

  return (
    <Section 
      id="skills"
      title="Technical Skills"
      subtitle="My technical expertise"
      variant="light"
      className="skills"
    >
      <div className="skills__container">
        {skillCategories.map((category) => (
          <div key={category.id} className="skills__category">
            <h3 className="skills__category-title">{category.title}</h3>
            <div className="skills__list">
              {category.skills.map((skill, index) => (
                <div key={index} className="skills__item">
                  <span className="skills__name">{skill}</span>
                  <div className="skills__bar">
                    <div className="skills__progress" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechnicalSkills;