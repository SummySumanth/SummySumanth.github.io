import React from 'react';
import styles from './SocialLinkChip.module.css';

function SocialLinkChip({ social, onImageLoadCallback }) {
  const {
    siteName, link, icon,
  } = social;
  return (
    <a key={siteName} className={styles.container} href={link} target="_blank" rel="noreferrer">
      <img
        className={styles.icon}
        src={icon}
        alt={siteName}
        onLoad={onImageLoadCallback}
      />
      <div className={styles.siteName}>{siteName}</div>
    </a>
  );
}

export default SocialLinkChip;
