import React, { useEffect, useState} from 'react';
import Navbar from './components/navbar/Navbar';
import styles from './app.scss';

export default function App() {
  const html = document.querySelector('html');
  const localStorage = window.localStorage;
  const [activeTheme, setActiveTheme] = useState();
  const THEMES = {
    dark: 'dark',
    light: 'light'
    }

  useEffect(() => {
    const cachedTheme = localStorage.getItem("theme");
    if(cachedTheme !== 'undefined') {
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
      <div className='app-container'>  
        <div className='page p1'>
          Profile
        </div>
        <div className='page p2'>
          Tech Stack
        </div>
        <div className='page p3'>
          Projects
        </div>
        <div className='page p4'>
          Blogs
        </div>
        <div className='page p5'>
          Social Media
        </div>
        <div className='page p6'>
          Hire
        </div>
        <div className='pag p6'>
          Contact
        </div>
        <div className='page p8'>
          Certificates
        </div>
      </div>
    </>
  );
}
