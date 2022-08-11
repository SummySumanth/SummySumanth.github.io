import React from 'react';
import styles from './underconstruction.scss';

export default function UnderConstruction() {
  return (
    <div style={{ background: '#121212', height: '100%'}}>
      <div styleName={'main-container'}>
        <img styleName='image' src='https://github.com/SummySumanth.png'/>
      
        <div styleName='texts-container'>
          <div styleName='greeting'> 
            Coming Soon !
          </div>
          <div styleName='message'>
            Something awesome is being cooked !
          </div>
        </div>
      </div>
      <div styleName='logo'>
        Summy.dev
      </div>
    </div>
  );
}
