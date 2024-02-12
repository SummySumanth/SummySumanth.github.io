import React from 'react';
import { Link } from 'react-router-dom';
// import HamburgerBtn from '../../components/navbar/hamburgerBtn/HamburgerBtn';
// import Links from '../../components/links/Links';
import { motion } from 'framer-motion';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import RoundedBtn from '../../components/RoundedBtn/RoundedBtn';
import BrandLogo from '../../components/brandLogo/BrandLogo';

import { fistBump } from '../../images';

import './Bio.css';

const downloadResume = () => {
  window.location.assign(`${window.location.origin}/api/download/resume`);
};


function Bio() {
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
    <ThemeSwitcher />
    <div styleName="welcome-banner">
      <img styleName="avatar-img" src={fistBump} alt="avatar" />
      <BrandLogo styleName="banner-text" />

      <div styleName="description-text">
        Ey yo! Thanks for showing interest in getting to know me !

        <Link to="/app" styleName="description-text-enter">
          Get in
          {' '}
          {'->'}
        </Link>
      </div>
    </div>
    {/* <Links
      links={links}
    /> */}
  </motion.div>
  )
}

export default Bio