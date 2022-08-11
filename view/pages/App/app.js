
import React, { useEffect, useState, useCallback, useRef, useReducer} from 'react';
import { connect, Connect } from 'react-redux';
// import HamburgerBtn from '../../components/navbar/hamburgerBtn/HamburgerBtn';

import { setTheme } from '../../actions/index';

import THEMES from '../../utils/constants';

import fistBump from '../../images/fist_bump.png';
import styles from './app.scss';

const App = (props) => {
  Object.defineProperty(window, 'localStorage', { value: global.localStorage,configurable:true,enumerable:true,writable:true });
  const { theme, changeTheme } = props;

  useEffect(() => {
    localStorage = window.localStorage;

    const cachedTheme = localStorage.getItem("theme");
    if(cachedTheme !== null && cachedTheme !== 'undefined') {      
      changeTheme(cachedTheme);
    } else {
      if (window.matchMedia) {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
          changeTheme(THEMES.dark);
        } else {
          changeTheme(THEMES.light);
        }
      } else {
        changeTheme(THEMES.dark);
      }
    }
  }, []);

  const toggleTheme = () => {
    if(theme === THEMES.dark) {
      changeTheme(THEMES.light);
    } else {
      changeTheme(THEMES.dark);
    }
  }

  return (
    <div styleName="container">
      <div styleName="welcome-banner">          
        <div styleName='welcome-text'>
          <img styleName='avatar-img' src={fistBump} />
          summy.dev
        </div>
        <div styleName="description-text">
          Ey yo! Thanks for hopping in, I have got some lit stuff to show you.. <span styleName="description-text-enter">Get in -></span>
        </div>
      </div>
      <input type="checkbox" onChange={toggleTheme}/>
    </div>
  );
} 

const mapStateToProps = state => ({
  theme: state.appSettings.theme,
})

const mapDispatchToProps = dispatch => ({
  changeTheme: theme => dispatch(setTheme(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);