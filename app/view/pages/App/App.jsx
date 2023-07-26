import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeContext from '../../ThemeContext';
import BrandLogo from '../../components/brandLogo/BrandLogo';

import { fistBump, moon, sun } from '../../images/index';

import './App.css';

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
      <div styleName="navbar">
        <Link to="\">
          <BrandLogo styleName="welcome-text" />
        </Link>
        <div styleName="navbar-container">
          <input type="radio" name="nav-tabs" styleName="link-bio" id="link-bio" />
          <input type="radio" name="nav-tabs" styleName="link-blogs" id="link-blogs" />
          <input type="radio" name="nav-tabs" styleName="link-projects" id="link-projects" />
          <input type="radio" name="nav-tabs" styleName="link-certificates" id="link-certificates" />
          <input type="radio" name="nav-tabs" styleName="link-techstack" id="link-techstack" />
          <input type="radio" name="nav-tabs" styleName="link-uses" id="link-uses" />
          <input type="radio" name="nav-tabs" styleName="link-contact" id="link-contact" />
          <nav>
            <label htmlFor="link-bio" styleName="navItems navItem-bio">Bio</label>
            <label htmlFor="link-blogs" styleName="navItems navItem-blogs">Blogs</label>
            <label htmlFor="link-projects" styleName="navItems navItem-projects">Projects</label>
            <label htmlFor="link-certificates" styleName="navItems navItem-certificates">Certificates</label>
            <label htmlFor="link-techstack" styleName="navItems navItem-tech">Tech</label>
            <label htmlFor="link-uses" styleName="navItems navItem-uses">Uses</label>
            <label htmlFor="link-contact" styleName="navItems navItem-contact">Contact</label>
            <div styleName="slider" />
          </nav>
        </div>

      </div>
    </motion.div>
  );
}

export default App;
