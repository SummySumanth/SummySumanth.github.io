import React, { useEffect, useState, useCallback} from 'react';
import Navbar from './components/navbar/Navbar';

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
  // const [y, setY] = useState(window.scrollY);

  const THEMES = {
    dark: 'dark',
    light: 'light'
    }

  useEffect(() => {
    const cachedTheme = localStorage.getItem("theme");
    console.log('cached theme is', cachedTheme);
    if(cachedTheme) {
      console.log('inside IF');
      html.dataset.theme = THEMES[cachedTheme];
      setActiveTheme(cachedTheme);
    } else {
      console.log('inside ELSE');
      if (window.matchMedia) {
        console.log('inside if window match media');
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
          console.log('inside dark found');
          setActiveTheme(THEMES.dark);
        } else {
          console.log('inside light found');
          setActiveTheme(THEMES.light);
        }
      } else {
        console.log('inside else window match media');
        setActiveTheme(THEMES.dark);
      }
    }
  }, []);

  // useEffect(() => {
  //   setY(window.scrollY);
  //   window.addEventListener("scroll", handleNavigation);
  
  //   return () => {
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [handleNavigation]);

  useEffect(() => {
    localStorage.setItem('theme', activeTheme);
    html.dataset.theme = activeTheme;
  }, [activeTheme]);

  // const handleNavigation = useCallback(
  //   e => {
  //     console.log('navigation happened');
  //     const window = e.currentTarget;
  //     if (y > window.scrollY) {
  //       console.log("scrolling up");
  //     } else if (y < window.scrollY) {
  //       console.log("scrolling down");
  //     }
  //     setY(window.scrollY);
  //   }, [y]
  // );

  const toggleTheme = () => {
    console.log('theme toggled');
    if(activeTheme === THEMES.dark) {
      setActiveTheme(THEMES.light);
    } else {
      setActiveTheme(THEMES.dark);
    }
  }

  return (
    <>
      <Navbar activeTheme={activeTheme === THEMES.dark} toggleTheme={toggleTheme}/>
        <Profile  styleName='page p1'/>
        <Blogs styleName='page p1'/>
        <Projects styleName='page p1'/>
        <Techstack styleName='page p1'/>
        <Certificates styleName='page p1'/>
        <SocialMedia styleName='page p1'/>
        <Contact styleName='page p1'/>
    </>
  );
}
