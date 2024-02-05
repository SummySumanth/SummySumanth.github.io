import React, {
  useEffect, useState, useCallback, useRef, useReducer,
} from 'react';

import helloImg from '../../../images/hello.png';
import styles from './mainPage.css';

export default function App() {
  const listOfTabs = {
    BIO: 'bio',
    CONTACT: 'contact',
    BLOGS: 'blogs',
    UPI: 'UPI',
    SOS: 'SOS',
  };

  const initialState = {
    navListShow: false,
    currentTab: listOfTabs.BIO,
  };

  const actionTypes = {
    TOGGLE_NAVLIST_SHOW: 'TOGGLE_NAVLIST_SHOW',
    CHANGE_TAB: 'CHANGE_TAB',
  };

  const reducer = (state, action) => {
    console.log('action received', action);
    switch (action.type) {
      case actionTypes.TOGGLE_NAVLIST_SHOW:
        return {
          ...state,
          navListShow: action.payload,
        };
      case actionTypes.CHANGE_TAB:
        return {
          ...state,
          currentTab: action.payload,
        };
      default:
        throw new Error('Invalid action dispatched');
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const html = document.querySelector('html');
  html.dataset.theme = 'light';
  const { localStorage } = window;
  const [activeTheme, setActiveTheme] = useState();
  const [navListHidden, setNavListHidden] = useState();

  const THEMES = {
    dark: 'dark',
    light: 'light',
  };

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
    if (activeTheme === THEMES.dark) {
      setActiveTheme(THEMES.light);
    } else {
      setActiveTheme(THEMES.dark);
    }
  };

  const toggleNavList = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    dispatch({
      type: actionTypes.TOGGLE_NAVLIST_SHOW,
      payload: !state.navListShow,
    });
  };

  const changeCurrentTab = (e, tab) => {
    console.log('change current tab event', e);
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    dispatch({
      type: actionTypes.CHANGE_TAB,
      payload: tab,
    });
    setTimeout(() => {
      dispatch({
        type: actionTypes.TOGGLE_NAVLIST_SHOW,
        payload: false,
      });
    }, 500);
  };

  const closeNavBar = (e) => {
    console.log('close nav bar called', state);
    if (state.navListShow) {
      console.log('closing nav bar - inside if');
      setTimeout(() => {
        dispatch({
          type: actionTypes.TOGGLE_NAVLIST_SHOW,
          payload: false,
        });
      }, 0);
    }
  };

  // window.addEventListener('click',closeNavBar);
  // window.addEventListener('scroll',closeNavBar);

  return (
    <>
      <img styleName="avatar" src={helloImg} />
      <div styleName="avatar-text">
        summy.dev
      </div>

      <div styleName="pageContainer">
        <div styleName="navbar-container">
          <input
            type="checkbox"
            id="hamburger-nav"
            styleName="hamburger-nav-checkbox"
            checked={state.navListShow}
            readOnly
          />
          <div styleName="hamburger-nav-overlay" />
          <label
            htmlFor="hamburger-nav"
            styleName="hamburger-nav-label"
            onClick={(event) => {
              console.log('main hamburger event reached', event);
              // event.stopPropagation();
              toggleNavList(event);
            }}
          >
            <div styleName="h1 hrow" />
            <div styleName="h2 hrow" />
            <div styleName="h3 hrow" />
          </label>

          <input name="navbar" type="radio" id="bio" styleName="bio" readOnly checked={state.currentTab === listOfTabs.BIO} />
          <input name="navbar" type="radio" id="contact" styleName="contact" readOnly checked={state.currentTab === listOfTabs.CONTACT} />
          <input name="navbar" type="radio" id="blogs" styleName="blogs" readOnly checked={state.currentTab === listOfTabs.BLOGS} />
          <input name="navbar" type="radio" id="upi" styleName="upi" readOnly checked={state.currentTab === listOfTabs.UPI} />
          <input name="navbar" type="radio" id="sos" styleName="sos" readOnly checked={state.currentTab === listOfTabs.SOS} />
          <div styleName="navbar">
            <label htmlFor="bio" styleName="label bio-label" onClick={(e) => changeCurrentTab(e, listOfTabs.BIO)}>😀 Bio</label>
            <label htmlFor="contact" styleName="label contact-label" onClick={(e) => changeCurrentTab(e, listOfTabs.CONTACT)}>🤙🏻 Contact</label>
            <label htmlFor="blogs" styleName="label blogs-label" onClick={(e) => changeCurrentTab(e, listOfTabs.BLOGS)}>💬 Blogs</label>
            <label htmlFor="upi" styleName="label upi-label" onClick={(e) => changeCurrentTab(e, listOfTabs.UPI)}>💸 Upi</label>
            <label htmlFor="sos" styleName="label sos-label" onClick={(e) => changeCurrentTab(e, listOfTabs.SOS)}>🆘 SOS</label>
            <div styleName="slider" />
          </div>
        </div>
      </div>
    </>
  );
}
