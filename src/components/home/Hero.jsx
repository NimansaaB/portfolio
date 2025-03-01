import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import '../../styles/components/Hero.css';
import profilePic from '../../assets/images/profilepic.jpeg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__greeting">Hello, I'm</span>
            <span className="hero__name">Nimansa Bandara</span>
          </h1>
          <h2 className="hero__subtitle">Computer Science Student</h2>
          <p className="hero__description">
            Specializing in UI/UX Design, Web Frontend Development, and Mobile Application Development.
            Passionate about creating intuitive, user-friendly interfaces and solving real-world challenges through technology.
          </p>
          <div className="hero__actions">
            <Button to="/portfolio" variant="primary" size="large">
              View My Work
            </Button>
            <Button to="/contact" variant="outline" size="large">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="hero__image-container">
          <div className="hero__circular-frame">
            <img src={profilePic} alt="Nimansa Bandara" className="hero__profile-image" />
            <div className="hero__neon-circle"></div>
          </div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <Link to="/#about" className="hero__scroll-link">
          <span className="hero__scroll-text">Scroll Down</span>
          <span className="hero__scroll-icon"></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;