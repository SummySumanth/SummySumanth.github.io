import React, { useEffect, useState, useCallback, useRef} from 'react';

import Navbar from './components/navbar/Navbar';
import NavList from './components/navbar/navList/NavList';

import Blogs from './pages/blogs/blogs';
import Certificates from './pages/certificates/certificates';
import Contact from './pages/contact/contact';
import Profile from './pages/profile/profile';
import Projects from './pages/projects/projects';
import SocialMedia from './pages/socialmedia/socialmedia';
import Techstack from './pages/techstack/techstack';

import styles from './app.scss';

export default function App() {
  const html = document.querySelector('html');
  const localStorage = window.localStorage;
  const [activeTheme, setActiveTheme] = useState();
  const [navListHidden, setNavListHidden] = useState();

  const THEMES = {
    dark: 'dark',
    light: 'light'
  }

  // useEffect(() => {
  //   const cachedTheme = localStorage.getItem("theme");
  //   if(cachedTheme !== null && cachedTheme !== 'undefined') {
  //     html.dataset.theme = THEMES[cachedTheme];
  //     setActiveTheme(cachedTheme);
  //   } else {
  //     if (window.matchMedia) {
  //       if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //         setActiveTheme(THEMES.dark);
  //       } else {
  //         setActiveTheme(THEMES.light);
  //       }
  //     } else {
  //       setActiveTheme(THEMES.dark);
  //     }
  //   }
  // }, []);

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
    <>
      <NavList />
      <Navbar 
        activeTheme={activeTheme === THEMES.dark}
        toggleTheme={toggleTheme}
        hideNavList={hideNavList}
      />
      <Profile styleName='page p1'/>
      <Blogs styleName='page p1'/>
      <Projects styleName='page p1'/>
      <Techstack styleName='page p1'/>
      <Certificates styleName='page p1'/>
      <SocialMedia styleName='page p1'/>
      <Contact styleName='page p1'/>
    </>
  );
}
