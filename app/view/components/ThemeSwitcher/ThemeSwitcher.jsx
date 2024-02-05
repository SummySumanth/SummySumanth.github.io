import React, { useContext } from 'react';

function ThemeSwitcher() {
  return (
    <>
      <input id="theme-checkbox" styleName="theme-checkbox" type="checkbox" onChange={toggleTheme} />
      <label htmlFor="theme-checkbox" styleName="theme-container">
        <img styleName="theme-icons sun" alt="light mode" src={sun} />
        <img styleName="theme-icons moon" src={moon} alt="dark mode" />
      </label>
    </>
  );
}

export default ThemeSwitcher;
