/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import HamburgerBtn from '../../components/navbar/hamburgerBtn/HamburgerBtn';
// import Links from '../../components/links/Links';
import { motion } from 'framer-motion';
import RoundedBtn from '../../components/RoundedBtn/RoundedBtn';
import ThemeContext from '../../ThemeContext';
import BrandLogo from '../../components/brandLogo/BrandLogo';

import { fistBump, moon, sun } from '../../images/index';

import './welcome.css';

function App() {
  const toggleTheme = useContext(ThemeContext);

  const downloadResume = () => {
    window.location.assign(`${window.location.origin}/api/download/resume`);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <div styleName="welcome-banner">
        <img styleName="avatar-img" src={fistBump} alt="avatar" />
        <BrandLogo styleName="banner-text" />

        <div styleName="description-text">
          Ey yo! Thanks for showing interest in getting to know me !
          {/* Ey yo! Thanks for hopping in, I have got some lit stuff to show you..  */}

          <Link to="/contact-us" styleName="description-text-enter">
            Get in
            {' '}
            {'->'}
          </Link>
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
    </motion.div>
  );
}

export default App;
