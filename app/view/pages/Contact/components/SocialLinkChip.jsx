import React from 'react';
import './SocialLinkChip.css';

function SocialLinkChip({ social, onImageLoadCallback }) {
  const {
    siteName, link, icon,
  } = social;
  return (
    <a key={siteName} className="container" href={link} target="_blank" rel="noreferrer">
      <img
        className="logo"
        src={icon}
        alt={siteName}
        onLoad={onImageLoadCallback}
      />
      <div className="siteName">{siteName}</div>
    </a>
  );
}

export default SocialLinkChip;
