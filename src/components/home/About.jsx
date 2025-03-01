import React from 'react';
import Section from '../shared/Section';
import '../../styles/components/About.css';

const About = () => {
  return (
    <Section 
      id="about"
      title="About Me"
      subtitle="Get to know me better"
      variant="light"
      className="about"
    >
      <div className="about__container">
        <div className="about__content">
          <p className="about__text">
            I am a Computer Science undergraduate with a strong foundation in software development, 
            currently studying at Informatics Institute of Technology affiliated with the 
            University of Westminster, UK. I'm expected to graduate in 2027.
          </p>
          <p className="about__text">
            My technical focus areas include UI/UX Design, Web Frontend Development, and Mobile 
            Application Development. I'm passionate about creating intuitive, user-friendly interfaces 
            and solving real-world challenges through technology.
          </p>
          <p className="about__text">
            Known for being responsible, punctual, and an effective communicator, I'm seeking 
            opportunities to gain hands-on experience and contribute to innovative projects in 
            software engineering.
          </p>
        </div>
        <div className="about__info">
          <div className="about__info-item">
            <h3 className="about__info-title">Contact Information</h3>
            <ul className="about__info-list">
              <li className="about__info-entry">
                <span className="about__info-label">Email:</span>
                <a href="mailto:nimansab22@gmail.com" className="about__info-value">nimansab22@gmail.com</a>
              </li>
              <li className="about__info-entry">
                <span className="about__info-label">Location:</span>
                <span className="about__info-value">Maharagama, Sri Lanka</span>
              </li>
              <li className="about__info-entry">
                <span className="about__info-label">LinkedIn:</span>
                <a 
                  href="https://www.linkedin.com/in/nimansa-bandara" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="about__info-value"
                >
                  nimansa-bandara
                </a>
              </li>
            </ul>
          </div>
          <div className="about__info-item">
            <h3 className="about__info-title">Languages</h3>
            <ul className="about__info-list">
              <li className="about__info-entry">
                <span className="about__info-label">English:</span>
                <span className="about__info-value">Advanced (CAE Score: 184)</span>
              </li>
              <li className="about__info-entry">
                <span className="about__info-label">Sinhala:</span>
                <span className="about__info-value">Native</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;