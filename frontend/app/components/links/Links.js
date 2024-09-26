import React from 'react';
import styles from './Links.module.css';

function Links({links}) {
  return (
    <div className={styles.linksContainer}>
      {
        links.map(item => (
          <a key={item.link}>
            {item.link}
          </a>
        ))
      }
    </div>
  )
}

export default Links