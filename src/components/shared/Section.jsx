import React from 'react';
import '../../styles/components/Section.css';

const Section = ({ 
  id,
  title, 
  subtitle,
  children, 
  className = '',
  variant = 'default',
  fullHeight = false,
  centered = false,
  ...props 
}) => {
  const sectionClasses = `
    section 
    section--${variant} 
    ${fullHeight ? 'section--full-height' : ''} 
    ${centered ? 'section--centered' : ''} 
    ${className}
  `;

  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className="section__container">
        {(title || subtitle) && (
          <div className="section__header">
            {title && <h2 className="section__title">{title}</h2>}
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="section__content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;