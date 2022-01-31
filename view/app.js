import React from 'react';
import styles from './app.css';

import postcssCustomMedia from 'postcss-custom-media';

export default function App() {
  
  
  
  postcssCustomMedia.process(styles /*, processOptions, pluginOptions */);

  return (
    <div className='app-container'>
      <div className='test-element'></div>
    </div>
  );
}
