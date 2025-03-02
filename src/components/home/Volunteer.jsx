import React from 'react';
import Section from '../shared/Section';
import Card from '../shared/Card';
import '../../styles/components/Volunteer.css';

const VolunteerExperience = () => {
  const volunteerData = [
    {
      id: 1,
      title: "Editorial Volunteer - CodeRally 5.0",
      organization: "IEEE Computer Society SBC of IIT",
      period: "Jun 2024 - Sep 2024",
      description: "I volunteered for CodeRally 5.0, where I helped organize workshops and a 24-hour hackathon. The experience was both informative and engaging, and I gained valuable insights into event management and teamwork while contributing to the success of this exciting initiative.",
      
      icon: "👨‍💻"
    },
    {
      id: 2,
      title: "Editorial Volunteer - IndustPro 3.0",
      organization: "IEEE Computer Society SBC of IIT",
      period: "Feb 2024 - May 2024",
      description: "I volunteered as part of the editorial team for IndustPro 3.0, where I contributed to helping others learn more about career development. The experience was both informative and engaging, and I appreciated the opportunity to collaborate with a great team in supporting this important initiative.",
     
      icon: "👨‍💻"
    },
    {
      id: 3,
      title: "Editorial Volunteer - Webspire",
      organization: "IEEE Computer Society SBC of IIT",
      period: "Dec 2023 - Jan 2024",
      description: "I volunteered as part of the editorial team for the Webspire Front End Web Development Workshop Series organized by IEEE Computer Society SBC of IIT. The experience was both informative and engaging, and I gained valuable insights into collaborative teamwork while supporting the development of the workshop content.",
   
      icon: "👨‍💻"
    }
  ];

  return (
    <Section
      id="volunteer"
      title="Volunteer Experience"
      subtitle="Contributing to the tech community"
      variant="dark"
      className="volunteer"
    >
      <div className="volunteer__container">
        {volunteerData.map((item) => (
          <Card key={item.id} className="volunteer__card" variant="dark">
            <div className="volunteer__header">
              <div className="volunteer__icon-wrapper">
                <span className="volunteer__icon">{item.icon}</span>
              </div>
              <div className="volunteer__title-container">
                <h3 className="volunteer__title">{item.title}</h3>
                <div className="volunteer__organization">{item.organization}</div>
                <div className="volunteer__period">{item.period}</div>
              </div>
            </div>
            <div className="volunteer__content">
              <p className="volunteer__description">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default VolunteerExperience;