import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Button.css';

const Button = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
  ...props 
}) => {
  const buttonClasses = `
    button 
    button--${variant} 
    button--${size} 
    ${fullWidth ? 'button--full-width' : ''} 
    ${className}
  `;

  // If it's a link within the application
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  // If it's an external link
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses} 
        target="_blank" 
        rel="noopener noreferrer" 
        {...props}
      >
        {children}
      </a>
    );
  }

  // If it's a regular button
  return (
    <button 
      className={buttonClasses} 
      onClick={onClick} 
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;