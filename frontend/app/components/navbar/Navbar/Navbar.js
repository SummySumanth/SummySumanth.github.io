import React from 'react';
import HamburgerBtn from '../hamburgerBtn/HamburgerBtn';

import styles from './navbar.module.css';

export default function Navbar({
  toggleTheme,
  activeTheme,
}) {
  return (
    <div className={styles.container}>      
      <input type={'checkbox'} onChange={toggleTheme} checked={activeTheme}/>
      <HamburgerBtn />
    </div>
  );
}
