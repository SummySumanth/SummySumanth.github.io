import React from 'react';
import styles from './HamburgerBtn.css';

export default function HamburgerBtn() {
  return (
    <div styleName="ham-checkbox-container">
      <input styleName="ham-checkbox-input" type={'checkbox'} id="ham-checkbox-input"/>
      <label styleName="button" htmlFor="ham-checkbox-input">
        <div styleName="h1 hrow"></div>
        <div styleName="h2 hrow"></div>
        <div styleName="h3 hrow"></div>
      </label>
    </div>
  );
}
  