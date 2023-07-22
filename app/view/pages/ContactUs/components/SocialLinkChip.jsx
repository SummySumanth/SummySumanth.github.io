import React from 'react';
import './SocialLinkChip.css';

function SocialLinkChip({ social, onImageLoadCallback }) {
  const {
    siteName, link, icon,
  } = social;
  return (
    <a key={siteName} styleName="container" href={link} target="_blank" rel="noreferrer">
      <img
        styleName="logo"
        src={icon}
        alt={siteName}
        onLoad={onImageLoadCallback}
      />
      <div styleName="siteName">{siteName}</div>
    </a>
  );
}

export default SocialLinkChip;
