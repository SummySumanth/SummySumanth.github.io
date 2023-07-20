import React, { useEffect } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import ThemeContext, { toggleTheme } from '../ThemeContext';
import THEMES from '../utils/constants';

import AnimatedRoutes from '../components/AnimatedRoutes/AnimatedRoutes';

function AppRoutes() {
  useEffect(() => {
    let theme;

    const html = document.querySelector('html');
    const { localStorage } = window;
    const cachedTheme = localStorage.getItem('theme');

    if (cachedTheme !== null && cachedTheme !== 'undefined') {
      theme = cachedTheme;
    } else if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = THEMES.dark;
      } else {
        theme = THEMES.light;
      }
    } else {
      theme = THEMES.dark;
    }
    html.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, []);

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default AppRoutes;
