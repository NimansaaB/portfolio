import React from 'react';
import Section from '../shared/Section';
import Card from '../shared/Card';
import '../../styles/components/Awards.css';

const Awards = () => {
  const awardsData = [
    {
      id: 1,
      title: '1st Place - Coderally 5.0 24hrs Hackathon & Workshop Series',
      organization: 'IEEE Computer Society SBC of IIT',
      date: '2023',
      description: 'Innovative problem-solving skills and effective teamwork.'
    },
    {
      id: 2,
      title: 'IEEE Xtreme 18.0 24hrs Hackathon',
      organization: 'IEEE SBC of IIT',
      date: '2023',
      description: 'Teamwork and coding skills under time constraints.'
    }
  ];

  return (
    <Section 
      id="awards"
      title="Honors & Awards"
      subtitle="Recognition for my achievements"
      variant="dark"
      className="awards"
    >
      <div className="awards__container">
        {awardsData.map((award) => (
          <Card key={award.id} className="awards__card" variant="dark">
            <div className="awards__icon">🏆</div>
            <div className="awards__content">
              <h3 className="awards__title">{award.title}</h3>
              <div className="awards__details">
                <span className="awards__organization">{award.organization}</span>
                <span className="awards__date">{award.date}</span>
              </div>
              <p className="awards__description">{award.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Awards;