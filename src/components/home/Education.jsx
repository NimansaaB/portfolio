import React from 'react';
import Section from '../shared/Section';
import Card from '../shared/Card';
import '../../styles/components/Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: 'Informatics Institute of Technology',
      degree: 'BSc (Hons) Computer Science',
      location: 'Affiliated with the University of Westminster, UK',
      period: 'Sep 2023 - present',
      details: 'Expected Graduation year – 2027'
    },
    {
      id: 2,
      institution: 'Cambridge University, UK',
      degree: 'Cambridge English Qualifications',
      location: '',
      period: 'Jan 2012 - Present',
      details: [
        'Cambridge English: Proficiency (CPE) – In progress',
        'Cambridge English: Advanced (CAE) – Achieved June 2024 (Score: 184)'
      ]
    },
    {
      id: 3,
      institution: 'Institute of Human Resource Advancement (IHRA)',
      degree: 'Certificate Course in English Language',
      location: 'University of Colombo',
      period: 'Apr 2023 - Oct 2023',
      details: ''
    },
    {
      id: 4,
      institution: 'Anula Vidyalaya',
      degree: 'Secondary Education',
      location: 'Nugegoda',
      period: 'Sep 2014 - Jan 2023',
      details: [
        'G.C.E Advanced Level (A/L) – 2023 (2022)',
        'G.C.E Ordinary Level (O/L) – 2019'
      ]
    }
  ];

  return (
    <Section 
      id="education"
      title="Education"
      subtitle="My academic journey"
      variant="dark"
      className="education"
    >
      <div className="education__timeline">
        {educationData.map((item) => (
          <Card key={item.id} className="education__card" variant="dark">
            <div className="education__period">{item.period}</div>
            <div className="education__content">
              <h3 className="education__institution">{item.institution}</h3>
              <h4 className="education__degree">{item.degree}</h4>
              {item.location && <p className="education__location">{item.location}</p>}
              
              {typeof item.details === 'string' ? (
                <p className="education__details">{item.details}</p>
              ) : (
                <ul className="education__details-list">
                  {item.details.map((detail, index) => (
                    <li key={index} className="education__details-item">{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Education;