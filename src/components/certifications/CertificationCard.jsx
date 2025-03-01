import React from 'react';
import Card from '../shared/Card';
import '../../styles/components/CertificationCard.css';

const CertificationCard = ({ 
  certification,
  className = '',
  ...props 
}) => {
  const { 
    id, 
    title, 
    issuer, 
    date, 
    credentialId,
    credentialURL,
    category
  } = certification;

  return (
    <Card 
      className={`certification-card ${className}`}
      {...props}
    >
      <div className="certification-card__category-label">{category}</div>
      <div className="certification-card__content">
        <h3 className="certification-card__title">{title}</h3>
        <div className="certification-card__issuer">
          <span className="certification-card__issuer-name">{issuer}</span>
          <span className="certification-card__date">{date}</span>
        </div>
        {credentialId && (
          <div className="certification-card__credential">
            <span className="certification-card__credential-label">Credential ID:</span>
            <span className="certification-card__credential-id">{credentialId}</span>
          </div>
        )}
        {credentialURL && (
          <a 
            href={credentialURL}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card__link"
          >
            Verify Credential
          </a>
        )}
      </div>
    </Card>
  );
};

export default CertificationCard;