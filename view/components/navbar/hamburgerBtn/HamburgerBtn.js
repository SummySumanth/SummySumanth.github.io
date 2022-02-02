import React from 'react';
import styles from './HamburgerBtn.scss';

export default function HamburgerBtn() {
  return (
    <div className='hamburger-main-container'>
      <input type={'checkbox'} id="ham-checkbox-input"/>
      <label className="button" htmlFor="ham-checkbox-input">
        <div className="h1 hrow"></div>
        <div className="h2 hrow"></div>
        <div className="h3 hrow"></div>
      </label>
    </div>
  );
}
