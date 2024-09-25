import React, { useState } from 'react';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

import { Download } from '../../images/svgComponents';

import './TopBar.css';

const TopBar = ({
  changeRoute, showNavbar, downloadResume, currentRoute,
}) => {
  const [showNavItems, setShowNavItems] = useState(false);
  return (
    <div className={`navbar ${showNavbar ? 'show' : ''}`}>
      <div className="navbar-desktop">
        <input
          type="checkbox"
          name="toggle-navbar"
          id="toggle-navbar"
          className="toggle-navbar"
          checked={showNavItems}
          onChange={(e) => {
            setShowNavItems(!showNavItems);
          }}
        />
        <label htmlFor="toggle-navbar" className="toggle-label">
          <div className="barTop" />
          <div className="barMiddle" />
          <div className="barBottom" />
        </label>
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={(currentRoute === '/' || currentRoute === '/bio')}
          onClick={((e) => {
            setShowNavItems(false);
            changeRoute(e.target.value);
          })}
          value="bio"
          className="link-bio"
          id="link-bio"
        />
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={(currentRoute === '/blogs')}
          onClick={((e) => {
            setShowNavItems(false);
            changeRoute(e.target.value);
          })}
          value="blogs"
          className="link-blogs"
          id="link-blogs"
        />
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={(currentRoute === '/projects')}
          onClick={((e) => {
            setShowNavItems(false);
            changeRoute(e.target.value);
          })}
          value="projects"
          className="link-projects"
          id="link-projects"
        />
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={(currentRoute === '/certificates')}
          onClick={((e) => {
            setShowNavItems(false);
            changeRoute(e.target.value);
          })}
          value="certificates"
          className="link-certificates"
          id="link-certificates"
        />
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={(currentRoute === '/techstacks')}
          onClick={((e) => {
            setShowNavItems(false);
            changeRoute(e.target.value);
          })}
          value="techstacks"
          className="link-techstack"
          id="link-techstack"
        />
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={(currentRoute === '/uses')}
          onClick={((e) => {
            setShowNavItems(false);
            changeRoute(e.target.value);
          })}
          value="uses"
          className="link-uses"
          id="link-uses"
        />
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={(currentRoute === '/contact')}
          onClick={((e) => {
            setShowNavItems(false);
            changeRoute(e.target.value);
          })}
          value="contact"
          className="link-contact"
          id="link-contact"
        />
        <nav id="navItems-container" className="navItems-container">
          <label htmlFor="link-bio" className="navItems navItem-bio">Bio</label>
          <label htmlFor="link-blogs" className="navItems navItem-blogs">Blogs</label>
          {/* <label htmlFor="link-projects" className="navItems navItem-projects">Projects</label>
          <label htmlFor="link-certificates" className="navItems navItem-certificates">Certificates</label>
          <label htmlFor="link-techstack" className="navItems navItem-techstack">Tech</label>
          <label htmlFor="link-uses" className="navItems navItem-uses">Uses</label> */}
          <label htmlFor="link-contact" className="navItems navItem-contact">Contact</label>
          <div className="slider" />
        </nav>
      </div>

      <div className="navbar-actions">
        <div className="resumeDownloadBtn">
          {/* <img className="downloadicon" src={downloadSvg} alt="download btn" /> */}
          {/* <DownloadSvg /> */}
          <div className="downloadicon">

            <Download />
            {/* <DownloadSvg /> */}
          </div>

          <div className="downloadText" onClick={downloadResume}>Download Resume</div>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
export default TopBar;
