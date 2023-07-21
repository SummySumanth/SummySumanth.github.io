/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { connect, Connect } from 'react-redux';
// import HamburgerBtn from '../../components/navbar/hamburgerBtn/HamburgerBtn';
// import Links from '../../components/links/Links';
import RoundedBtn from '../../components/RoundedBtn/RoundedBtn.jsx';
import ThemeContext from '../../ThemeContext';

import { setTheme } from '../../actions/index';

import { fistBump, moon, sun } from '../../images/index';

import './welcome.css';

function App() {
  const toggleTheme = useContext(ThemeContext);

  const downloadResume = () => {
    window.location.assign(`${window.location.origin}/api/download/resume`);
  };

  return (
    <div>
      <div styleName="welcome-banner">
        <div styleName="welcome-text">
          <img styleName="avatar-img" src={fistBump} alt="avatar" />
          summy.dev
        </div>
        <div styleName="description-text">
          Ey yo! Thanks for hopping in, I'm preparing some lit stuff to show you soon !
          {/* Ey yo! Thanks for hopping in, I have got some lit stuff to show you..  */}
          {/* <span styleName="description-text-enter">Get in -></span> */}
        </div>
      </div>
      <input id="theme-checkbox" styleName="theme-checkbox" type="checkbox" onChange={toggleTheme} />
      <label htmlFor="theme-checkbox" styleName="theme-container">
        <img styleName="theme-icons sun" alt="light mode" src={sun} />
        <img styleName="theme-icons moon" src={moon} alt="dark mode" />
      </label>
      <RoundedBtn styleName="downloadBtn" ctaText="Download Resume" cta={downloadResume} />
      {/* <Links
        links={links}
      /> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.appSettings.theme,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: (theme) => dispatch(setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
