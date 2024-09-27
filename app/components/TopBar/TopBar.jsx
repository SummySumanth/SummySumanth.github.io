// Libs
import React, { useState } from 'react';
import classNames from 'classnames';

// Components
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

// Assets
import { Download } from '../../images/svgComponents';

// Styles
import styles from  './TopBar.module.css';

const TopBar = ({
  changeRoute, showNavbar, downloadResume, currentRoute,
}) => {
  const [showNavItems, setShowNavItems] = useState(false);
  return (
    <div className={classNames(styles.container, { [styles.show]: showNavbar})}>
      <div className={styles.navbarDesktop}>
        <input
          type="checkbox"
          name="toggle-navbar"
          id="toggle-navbar"
          className={styles.navbarToggle}
          checked={showNavItems}
          onChange={(e) => {
            setShowNavItems(!showNavItems);
          }}
        />
        <label htmlFor="toggle-navbar" className={styles.toggleLabel}>
          <div className={styles.barTop} />
          <div className={styles.barMiddle} />
          <div className={styles.barBottom} />
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
          className={styles.linkBio}
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
          className={styles.linkBlogs}
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
          className={styles.linkProjects}
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
          className={styles.linkCertificates}
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
          className={styles.linkTechstack}
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
          className={styles.linkUses}
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
          className={styles.linkContact}
          id="link-contact"
        />
        <nav id="navItems-container" className={styles.navItemsContainer}>
          <label htmlFor="link-bio" className={classNames(styles.navItems, styles.navItemBio)}>Bio</label>
          <label htmlFor="link-blogs" className={classNames(styles.navItems, styles.navItemBlogs)}>Blogs</label>
          {/* <label htmlFor="link-projects" className={classNames(styles.navItems, styles.navItemProjects)}>Projects</label>
          <label htmlFor="link-certificates" className={classNames(styles.navItems, styles.navItemCertificates)}>Certificates</label>
          <label htmlFor="link-techstack" className={classNames(styles.navItems, styles.navItemTechstack)}>Tech</label>
          <label htmlFor="link-uses" className={classNames(styles.navItems, styles.navItemUses)}>Uses</label> */}
          <label htmlFor="link-contact" className={classNames(styles.navItems, styles.navItemContact)}>Contact</label>
          <div className="slider" />
        </nav>
      </div>

      <div className={styles.navbarActions}>
        <div className={styles.resumeDownloadBtn}>
          {/* <img className="downloadicon" src={downloadSvg} alt="download btn" /> */}
          {/* <DownloadSvg /> */}
          <div className={styles.downloadicon}>

            <Download />
            {/* <DownloadSvg /> */}
          </div>

          <div className={styles.downloadText} onClick={downloadResume}>Download Resume</div>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
export default TopBar;
