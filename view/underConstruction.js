import React from 'react';
import styles from './underconstruction.scss';

export default function UnderConstruction() {
  return (
    <div className='app-container'>
      <div className='main-container'>
        <img className='image' src='https://github.com/SummySumanth.png'/>
      
        <div className='texts-container'>
          <div className='greeting'> 
            Coming Soon !
          </div>
          <div className='message'>
            Something awesome is being cooked !
          </div>
        </div>
      </div>
      <div className='logo'>
        Summy.dev
      </div>
    </div>
  );
}
