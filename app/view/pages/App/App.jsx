import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import RoundedBtn from '../../components/RoundedBtn/RoundedBtn';
import ThemeContext from '../../ThemeContext';

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

      {/* <div styleName="ham-nav-item">Profile</div>
    <div styleName="ham-nav-item">Blogs</div>
    <div styleName="ham-nav-item">Projects</div>
    <div styleName="ham-nav-item">Techstack</div>
    <div styleName="ham-nav-item">Certificates</div>
    <div styleName="ham-nav-item">Social Media</div>
    <div styleName="ham-nav-item">Contact</div> */}
      <nav styleName="navbar">
        <a>Bio</a>
        <a>Blogs</a>
        <a>Projects</a>
        <a>Certificate</a>
        <a>Tech Stack</a>
        <a>Uses</a>
        <a>Contact</a>
      </nav>
      {/* <label htmlFor="theme-checkbox" styleName="theme-container">
        <img styleName="theme-icons sun" alt="light mode" src={sun} />
        <img styleName="theme-icons moon" src={moon} alt="dark mode" />
      </label> */}
      {/* <Links
        links={links}
      /> */}
    </motion.div>
  );
}

export default App;
