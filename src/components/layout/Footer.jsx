import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__info">
            <h3 className="footer__name">Nimansa Bandara</h3>
            <p className="footer__tagline">Computer Science Student • UI/UX Designer • Developer</p>
          </div>
          
          <div className="footer__links">
            <div className="footer__nav">
              <h4 className="footer__heading">Navigation</h4>
              <ul className="footer__list">
                <li><Link to="/" className="footer__link">Home</Link></li>
                <li><Link to="/portfolio" className="footer__link">Portfolio</Link></li>
                <li><Link to="/certifications" className="footer__link">Certifications</Link></li>
                <li><Link to="/contact" className="footer__link">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer__connect">
              <h4 className="footer__heading">Connect</h4>
              <ul className="footer__list">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/nimansa-bandara" 
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:nimansab22@gmail.com" 
                    className="footer__link"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Nimansa Bandara. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  