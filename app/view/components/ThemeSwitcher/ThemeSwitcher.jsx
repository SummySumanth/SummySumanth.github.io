import React, { useContext } from 'react';
import ThemeContext from '../../ThemeContext';
import { sun, moon } from '../../images';
import './themeSwitcher.css';

function ThemeSwitcher() {
  // using theme context to toggle theme
  const toggleTheme = useContext(ThemeContext);

  return (
    <div className="toggle-theme-container">
    <label htmlFor="theme-checkbox" className="theme-container">
      <input id="theme-checkbox" className="theme-checkbox" type="checkbox" onChange={toggleTheme} />  
      <img className="theme-icons sun" alt="light mode" src={sun} />
      <img className="theme-icons moon" src={moon} alt="dark mode" />
    </label>
    </div>
  );
}

export default ThemeSwitcher;
