import { createContext } from 'react';
import THEMES from './utils/constants';

const ThemeContext = createContext();

const { localStorage } = window;

export const toggleTheme = () => {
  const cachedTheme = localStorage.getItem('theme');
  const html = document.querySelector('html');
  if (cachedTheme === THEMES.dark) {
    html.dataset.theme = THEMES.light;
    localStorage.setItem('theme', THEMES.light);
  } else {
    html.dataset.theme = THEMES.dark;
    localStorage.setItem('theme', THEMES.dark);
  }
};

export default ThemeContext;
