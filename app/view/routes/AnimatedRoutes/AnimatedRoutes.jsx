import React from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ContactUs from '../../pages/ContactUs/ContactUs';
import Welcome from '../../pages/welcome/welcome';
import App from '../../pages/App/App';

import Blogs from '../../pages/Blogs/Blogs';
import Bio from '../../pages/Bio/Bio';
import Projects from '../../pages/Projects/Projects';
import Certificates from '../../pages/Certificates/Certificates';
import TechStack from '../../pages/TechStack/TechStack';
import Uses from '../../pages/Uses/Uses';
import Contact from '../../pages/Contact/Contact';
import { downloadDark, downloadLight } from '../../images';


import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';

import './AnimatedRoutes.css';

function AnimatedRoutes(props) {

  console.log('props in animated routes are ', props)
  const location = useLocation();
  const Navigate = useNavigate();

  const changeRoute = (value) => {
    console.log('change route value is ', value);
    // redirect user to the route
    Navigate(value); // Use Navigate to redirect to the route
  }
  return (
    <>
      <div styleName="navbar">        
        <div styleName="navbar-desktop">
          <input type="checkbox" name="toggle-navbar" id="toggle-navbar" styleName="toggle-navbar" />
            <label htmlFor="toggle-navbar" styleName="toggle-label">
              <div styleName="barTop" />
              <div styleName="barMiddle" />
              <div styleName="barBottom" />
            </label>
            <input type="radio" name="nav-tabs" onClick={(e => changeRoute(e.target.value))} value="bio" styleName="link-bio" id="link-bio" />
            <input type="radio" name="nav-tabs" onClick={(e => changeRoute(e.target.value))} value="blogs" styleName="link-blogs" id="link-blogs" />
            <input type="radio" name="nav-tabs" onClick={(e => changeRoute(e.target.value))} value="projects" styleName="link-projects" id="link-projects" />
            <input type="radio" name="nav-tabs" onClick={(e => changeRoute(e.target.value))} value="certificates"  styleName="link-certificates" id="link-certificates" />
            <input type="radio" name="nav-tabs" onClick={(e => changeRoute(e.target.value))} value="techstacks" styleName="link-techstack" id="link-techstack" />
            <input type="radio" name="nav-tabs" onClick={(e => changeRoute(e.target.value))} value="uses" styleName="link-uses" id="link-uses" />
            <input type="radio" name="nav-tabs" onClick={(e => changeRoute(e.target.value))} value="contact" styleName="link-contact" id="link-contact" />
            <nav styleName="navItems-container">
              <label htmlFor="link-bio" styleName="navItems navItem-bio">Bio</label>
              <label htmlFor="link-blogs" styleName="navItems navItem-blogs">Blogs</label>
              <label htmlFor="link-projects" styleName="navItems navItem-projects">Projects</label>
              <label htmlFor="link-certificates" styleName="navItems navItem-certificates">Certificates</label>
              <label htmlFor="link-techstack" styleName="navItems navItem-techstack">Tech</label>
              <label htmlFor="link-uses" styleName="navItems navItem-uses">Uses</label>
              <label htmlFor="link-contact" styleName="navItems navItem-contact">Contact</label>
              <div styleName="slider" />
            </nav>
        </div>

        <div styleName="navbar-actions">
          <div styleName="resumeDownloadBtn">
            <img styleName="downloadicon" src={('light' === 'dark') ? downloadDark : downloadLight} alt="download btn" />
            <div styleName="downloadText">Downlaod Resume</div>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Bio />}  />
        <Route path="bio" element={<Bio />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="techstacks" element={<TechStack />} />
        <Route path="uses" element={<Uses />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
