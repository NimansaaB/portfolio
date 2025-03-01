import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../../styles/components/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">
          <span className="navbar__logo-text">NIMANSA</span>
        </NavLink>

        <button 
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>

        <nav className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__nav">
            <li className="navbar__item">
              <NavLink to="/" className={({ isActive }) => 
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }>
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/portfolio" className={({ isActive }) => 
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }>
                Portfolio
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/certifications" className={({ isActive }) => 
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }>
                Certifications
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/contact" className={({ isActive }) => 
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;