// Libs
import React, { useContext } from 'react';
import classNames from 'classnames';  

// Utils
import ThemeContext from '../../ThemeContext';

// Assets
import { sun, moon } from '../../images';

// Styles
import styles from './themeSwitcher.module.css';

function ThemeSwitcher() {
  // using theme context to toggle theme
  const toggleTheme = useContext(ThemeContext);

  return (
    <div className={styles.mainContainer}>
    <label htmlFor="theme-checkbox" className={styles.container}>
      <input id="theme-checkbox" className={styles.checkbox} type="checkbox" onChange={toggleTheme} />  
      <img className={classNames(styles.icons, sun)} alt="light mode" src={sun} />
      <img className={classNames(styles.icons, moon)} src={moon} alt="dark mode" />
    </label>
    </div>
  );
}

export default ThemeSwitcher;
