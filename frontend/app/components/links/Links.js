import React from 'react';
import './Links.css';

function Links({links}) {
  return (
    <div styleName="links-container">
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