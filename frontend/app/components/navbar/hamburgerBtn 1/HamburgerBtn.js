// Libs
import React from 'react';
import classNames from 'classnames';

// Styles
import styles from './HamburgerBtn.module.css';

export default function HamburgerBtn() {
  return (
    <div className={styles.container}>
      <input className={styles.input} type={'checkbox'} id="ham-checkbox-input"/>
      <label className={styles.button} htmlFor="ham-checkbox-input">
        <div className={className(styles.h1, styles.hrow) }></div>
        <div className={className(styles.h2, styles.hrow) }></div>
        <div className={className(styles.h3, styles.hrow) }></div>
      </label>
    </div>
  );
}
  