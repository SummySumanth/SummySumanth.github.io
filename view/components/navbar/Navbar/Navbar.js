import React from 'react';
import HamburgerBtn from '../hamburgerBtn/HamburgerBtn';

import styles from './navbar.scss';

export default function Navbar({
  toggleTheme,
  activeTheme,
}) {
  return (
    <div styleName='navbar-container'>      
      <input type={'checkbox'} onChange={toggleTheme} checked={activeTheme}/>
      <HamburgerBtn />
    </div>
  );
}
