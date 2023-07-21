import React from 'react';
import linkedin from '../linkedin.png';
import './SocialLinkChip.css';

function SocialLinkChip(props) {
  const {
    siteName, name, link, icon,
  } = props.social;
  return (
    <a key={siteName} styleName="container" href={link} target="_blank" rel="noreferrer">
      <img styleName="logo" src={icon} alt={siteName} />
      <div styleName="siteName">{siteName}</div>
    </a>
  );
}

export default SocialLinkChip;
