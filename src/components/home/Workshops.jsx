import React from 'react';
import Section from '../shared/Section';
import '../../styles/components/Workshops.css';

// Import images (you'll need to add these image files to your assets folder)
import genAI from '../../assets/images/workshops/genAI.jpeg';
import coderally from '../../assets/images/workshops/coderally.jpeg';
import algorithmWorkshop from '../../assets/images/workshops/algorithm-workshop.jpeg';
import careerNavigator from '../../assets/images/workshops/career-navigator.jpeg';
import ieeeXtreme from '../../assets/images/workshops/ieee-xtreme.jpeg';

const Workshops = () => {
  const workshopsData = [
    {
      id: 1,
      title: "API & GenAI Tour 2025 (Postman & Pieces)",
      organizer: "Postman & Pieces for Developers",
      date: "January 2025",
      description: "Participated in this event to learn about APIs and Generative AI from industry experts. Earned Postman API Fundamentals Student Expert certification.",
      image: genAI,
      tags: ["GenAI", "API", "Certification"]
    },
    {
      id: 2,
      title: "CodeRally 5.0 Hackathon",
      organizer: "IEEE Computer Society SBC of IIT",
      date: "2024",
      description: "Participated and won 1st place in this 24-hour competitive programming hackathon where tech passion met exceptional problem-solving skills.",
      image: coderally,
      tags: ["Hackathon", "Competition", "1st Place"]
    },
    {
      id: 3,
      title: "Advanced Algorithm Techniques Workshop",
      organizer: "CodeRally & IEEE CS IIT",
      date: "August 2024",
      description: "Enhanced algorithmic problem-solving skills in this interactive workshop focused on advanced coding techniques.",
      image: algorithmWorkshop,
      tags: ["Algorithms", "Problem Solving", "Coding"]
    },
    {
      id: 4,
      title: "Career Navigator Workshop",
      organizer: "IEEE CS IIT & IndustPro",
      date: "2024",
      description: "Participated in this career development workshop to gain insights on professional growth and industry requirements in tech.",
      image: careerNavigator,
      tags: ["Career Development", "Professional Skills"]
    },
    {
      id: 5,
      title: "IEEE Xtreme 18.0 Hackathon",
      organizer: "IEEE SBC of IIT",
      date: "October 2024",
      description: "Participated in this 24-hour global programming competition, solving complex algorithmic challenges and enhancing teamwork skills under tight time constraints.",
      image: ieeeXtreme,
      tags: ["Global Competition", "Team Coding", "Problem Solving"]
    }
  ];

  return (
    <Section 
      id="workshops"
      title="Workshops & Events"
      subtitle="Professional development activities"
      variant="light"
      className="workshops"
    >
      <div className="workshops__container">
        {workshopsData.map((workshop) => (
          <div key={workshop.id} className="workshops__card">
            <img 
              src={workshop.image} 
              alt={workshop.title} 
              className="workshops__image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x200?text=Workshop';
              }}
            />
            <div className="workshops__content">
              <h3 className="workshops__title">{workshop.title}</h3>
              <div className="workshops__meta">
                <span className="workshops__organizer">{workshop.organizer}</span>
                <span className="workshops__date">{workshop.date}</span>
              </div>
              <p className="workshops__description">{workshop.description}</p>
              {workshop.tags && (
                <div className="workshops__tags">
                  {workshop.tags.map((tag, index) => (
                    <span key={index} className="workshops__tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Workshops;