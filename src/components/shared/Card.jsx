import React from 'react';
import '../../styles/components/Card.css';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  onClick = null,
  ...props 
}) => {
  const cardClasses = `
    card 
    card--${variant} 
    ${hover ? 'card--hover' : ''} 
    ${onClick ? 'card--clickable' : ''} 
    ${className}
  `;

  return (
    <div 
      className={cardClasses} 
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick(e) : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;