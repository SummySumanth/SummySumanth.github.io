
import React, { useEffect, useState, useCallback, useRef} from 'react';

import styles from './mainPage.scss';

export default function App() {
  const html = document.querySelector('html');
  html.dataset.theme = 'light';
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

  // useEffect(() => {
  //   localStorage.setItem('theme', activeTheme);
  //   html.dataset.theme = activeTheme;
  // }, [activeTheme]);

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
    <div styleName="pageContainer">
      <img styleName='avatar' src="https://avatars.githubusercontent.com/u/18090380?v=4" />
      <div styleName='avatar-text'>
        summy.dev
      </div>
      <div>
        <div styleName="navbar-container">
            <input name='navbar' type="radio" id="bio" styleName="bio" defaultChecked/>
            <input name='navbar' type="radio" id="contact" styleName="contact"/>
            <input name='navbar' type="radio" id="blogs" styleName="blogs"/>
            <input name='navbar' type="radio" id="upi" styleName="upi"/>
            <input name='navbar' type="radio" id="sos" styleName="sos"/>
          <div styleName="navbar">

            <label for="bio" styleName="label bio-label">😀 Bio</label>
            <label for="contact" styleName="label contact-label">🤙🏻 Contact</label>
            <label for="blogs" styleName="label blogs-label">💬 Blogs</label>
            <label for="upi" styleName="label upi-label">💸 Upi</label>
            <label for="sos" styleName="label sos-label">🆘 SOS</label>
            <div styleName='slider' />
          </div>
        </div>
      </div>
    </div> 
  );
} 