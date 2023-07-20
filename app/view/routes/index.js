
import React, {useEffect} from 'react';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import ThemeContext,{ toggleTheme } from '../ThemeContext.js';
import THEMES from '../utils/constants.js';

import ContactUs from '../pages/ContactUs/ContactUs.jsx';
import Welcome from '../pages/welcome/welcome.jsx';

function AppRoutes() {

  useEffect(() => {
    let theme;
  
    const html = document.querySelector('html');
    const localStorage = window.localStorage;
    const cachedTheme = localStorage.getItem("theme");
    
    if(cachedTheme !== null && cachedTheme !== 'undefined') {      
        theme = cachedTheme;
      } else {
        if (window.matchMedia) {
          if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = THEMES.dark;
          } else {
            theme = THEMES.light;
          }
        } else {
          theme = THEMES.dark;
        }
      }
      html.dataset.theme = theme;
      localStorage.setItem("theme", theme);
  }, []);

  return (
    <ThemeContext.Provider value={toggleTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='*' element={<h1>404 Uh Oh! it seems nothing here</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default AppRoutes