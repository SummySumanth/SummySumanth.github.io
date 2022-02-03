import React, { useEffect, useState, useCallback, useRef} from 'react';
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentlyShownPageIndex, setCurrentlyShownPageIndex] = useState(0);
  // const [y, setY] = useState(window.scrollY);

  const profileRef = useRef(null);
  const blogsRef = useRef(null);
  const projectsRef = useRef(null);
  const techstackRef = useRef(null);
  const certificatesRef = useRef(null);
  const socialmediaRef = useRef(null);
  const contactRef = useRef(null);
  const pageReferences = [ profileRef, blogsRef, projectsRef, techstackRef, certificatesRef, socialmediaRef, contactRef, pageReferences];

  useEffect(() => {
    console.log('Change state of current page', currentlyShownPageIndex);
    console.log('page references', pageReferences);
    const targetPage = pageReferences[currentlyShownPageIndex];
    console.log('Use effect reached', targetPage);
    if(targetPage){
      console.log('SCROLLING',);
      targetPage.current.scrollIntoView();
    }
  }, [currentlyShownPageIndex]);

  const gotoNextPage = () => {
    if(currentlyShownPageIndex !== pageReferences.length) {
      console.log('going to next page');
      setCurrentlyShownPageIndex(currentlyShownPageIndex + 1);
    }
  }

  const gotoPreviousPage = () => {
    if(currentlyShownPageIndex !== 0) {
      setCurrentlyShownPageIndex(currentlyShownPageIndex - 1);
    }
  }

  const THEMES = {
    dark: 'dark',
    light: 'light'
  }

  useEffect(() => {
    console.log('profileRef is', profileRef);
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

  window.addEventListener('scroll', e => {
    console.log('scroll recognized');
  });

  const toggleTheme = () => {
    console.log('theme toggled');
    if(activeTheme === THEMES.dark) {
      setActiveTheme(THEMES.light);
    } else {
      setActiveTheme(THEMES.dark);
    }
  }

  // const getScrollDirection = ()

  // document.body.addEventListener('scroll', e => {
  //   console.log('scroll recognized !!!!', e);
  //   if ((document.body.getBoundingClientRect()).top > 0)
	// 	document.getElementById('info-box').setAttribute('data-scroll-direction', 'UP');
	// else
	// 	document.getElementById('info-box').setAttribute('data-scroll-direction', 'DOWN');
	// saves the new position for iteration.
	// scrollPos = (document.body.getBoundingClientRect()).top;
  // });

  setTimeout(() => {
    gotoNextPage();
  }, 2000)
  
  document.body.addEventListener('scroll', e => {
    console.log('body scrollY is ', document.body.screenY);
    console.log('window scrollY is ', window.screenY);
    // const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // console.log('scrollTop ', scrollTop)
    // console.log('document.body.pageYOffset ', document.body.pageYOffset)
  });

  return (
    <>
      <Navbar activeTheme={activeTheme === THEMES.dark} toggleTheme={toggleTheme}/>
        <Profile ref={profileRef} styleName='page p1'/>
        <Blogs ref={blogsRef} styleName='page p1'/>
        <Projects ref={projectsRef} styleName='page p1'/>
        <Techstack ref={techstackRef} styleName='page p1'/>
        <Certificates ref={certificatesRef} styleName='page p1'/>
        <SocialMedia ref={socialmediaRef} styleName='page p1'/>
        <Contact ref={contactRef} styleName='page p1'/>
    </>
  );
}
