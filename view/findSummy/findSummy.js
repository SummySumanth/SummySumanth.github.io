import React, { useEffect, useState, useCallback, useRef} from 'react';
import MainPage from './page/mainPage/mainPage';

import styles from './findSummy.scss';

export default function App() {
  const html = document.querySelector('html');
  const localStorage = window.localStorage;
  const [activeTheme, setActiveTheme] = useState();
  const [navListHidden, setNavListHidden] = useState();

  const THEMES = {
    dark: 'dark',
    light: 'light'
  }

  useEffect(() => {
    const cachedTheme = localStorage.getItem("theme");
    if(cachedTheme !== null && cachedTheme !== 'undefined') {
      html.dataset.theme = THEMES[cachedTheme];
      setActiveTheme(cachedTheme);
    } else {
      if (window.matchMedia) {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setActiveTheme(THEMES.dark);
        } else {
          setActiveTheme(THEMES.light);
        }
      } else {
        setActiveTheme(THEMES.dark);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', activeTheme);
    html.dataset.theme = activeTheme;
  }, [activeTheme]);

  const toggleTheme = () => {
    if(activeTheme === THEMES.dark) {
      setActiveTheme(THEMES.light);
    } else {
      setActiveTheme(THEMES.dark);
    }
  }

  const hideNavList = flag => {
    setNavListHidden(flag);
  }

  return (
    <div styleName='main-app-container'>
      <MainPage />
    </div>
  );
}
 