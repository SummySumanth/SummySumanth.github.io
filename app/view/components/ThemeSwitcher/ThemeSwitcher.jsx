import React, { useContext } from 'react';
import ThemeContext from '../../ThemeContext';
import { sun, moon } from '../../images';
import './themeSwitcher.css';

function ThemeSwitcher() {
  // using theme context to toggle theme
  const toggleTheme = useContext(ThemeContext);

  return (
    <label htmlFor="theme-checkbox" styleName="theme-container">
      <input id="theme-checkbox" styleName="theme-checkbox" type="checkbox" onChange={toggleTheme} />  
      <img styleName="theme-icons sun" alt="light mode" src={sun} />
      <img styleName="theme-icons moon" src={moon} alt="dark mode" />
    </label>
  );
}

export default ThemeSwitcher;
