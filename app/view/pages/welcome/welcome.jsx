/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
// import HamburgerBtn from '../../components/navbar/hamburgerBtn/HamburgerBtn';
// import Links from '../../components/links/Links';
import { motion } from 'framer-motion';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import RoundedBtn from '../../components/RoundedBtn/RoundedBtn';
import BrandLogo from '../../components/brandLogo/BrandLogo';

import { fistBump } from '../../images';

import './welcome.css';

function App() {
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

          <Link to="/contact-us" styleName="description-text-enter">
            Get in
            {' '}
            {'->'}
          </Link>
        </div>
      </div>
      <ThemeSwitcher />

      <RoundedBtn styleName="downloadBtn" ctaText="Download Resume" cta={downloadResume} />
      {/* <Links
        links={links}
      /> */}
    </motion.div>
  );
}

export default App;
