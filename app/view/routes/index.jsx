import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import ThemeContext, { toggleTheme } from '../ThemeContext';
import THEMES from '../utils/constants';

import AnimatedRoutes from './AnimatedRoutes/AnimatedRoutes';

const Routes = () => {
  useEffect(() => {
    let theme;
    const html = document.querySelector('html');
    const cachedTheme = window.localStorage.getItem('theme');

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
    window.localStorage.setItem('theme', theme);
  }, []);
  return (
    <ThemeContext.Provider value={toggleTheme}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeContext.Provider>
  );
};

export default Routes;
