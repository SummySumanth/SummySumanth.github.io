import React from 'react';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

import { downloadDark, downloadLight, DownloadSvg } from '../../images';
import { Download, DownloadIcon } from '../../images/svgComponents';

import './TopBar.css';

const TopBar = ({
  changeRoute, showNavbar, downloadResume, currentRoute,
}) => (
  <div styleName={`navbar ${showNavbar ? 'show' : ''}`}>
    <div styleName="navbar-desktop">
      <input type="checkbox" name="toggle-navbar" id="toggle-navbar" styleName="toggle-navbar" />
      <label htmlFor="toggle-navbar" styleName="toggle-label">
        <div styleName="barTop" />
        <div styleName="barMiddle" />
        <div styleName="barBottom" />
      </label>
      <input type="radio" name="nav-tabs" defaultChecked={(currentRoute === '/' || currentRoute === '/bio')} onClick={((e) => changeRoute(e.target.value))} value="bio" styleName="link-bio" id="link-bio" />
      <input type="radio" name="nav-tabs" defaultChecked={(currentRoute === '/blogs')} onClick={((e) => changeRoute(e.target.value))} value="blogs" styleName="link-blogs" id="link-blogs" />
      <input type="radio" name="nav-tabs" defaultChecked={(currentRoute === '/projects')} onClick={((e) => changeRoute(e.target.value))} value="projects" styleName="link-projects" id="link-projects" />
      <input type="radio" name="nav-tabs" defaultChecked={(currentRoute === '/certificates')} onClick={((e) => changeRoute(e.target.value))} value="certificates" styleName="link-certificates" id="link-certificates" />
      <input type="radio" name="nav-tabs" defaultChecked={(currentRoute === '/techstacks')} onClick={((e) => changeRoute(e.target.value))} value="techstacks" styleName="link-techstack" id="link-techstack" />
      <input type="radio" name="nav-tabs" defaultChecked={(currentRoute === '/uses')} onClick={((e) => changeRoute(e.target.value))} value="uses" styleName="link-uses" id="link-uses" />
      <input type="radio" name="nav-tabs" defaultChecked={(currentRoute === '/contact')} onClick={((e) => changeRoute(e.target.value))} value="contact" styleName="link-contact" id="link-contact" />
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
        {/* <img styleName="downloadicon" src={downloadSvg} alt="download btn" /> */}
        {/* <DownloadSvg /> */}
        <div styleName="downloadicon">

          <Download />
          {/* <DownloadSvg /> */}
        </div>

        <div styleName="downloadText" onClick={downloadResume}>Download Resume</div>
      </div>
      <ThemeSwitcher />
    </div>
  </div>
);
export default TopBar;
