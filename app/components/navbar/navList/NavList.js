import React from 'react';
import className from 'classnames';
import styles from './NavList.module.css';

export default function NavList({hide}) {
  return (
  <div className={className(styles.container, hide ? styles.slideIn : styles.slideOut)}>
    <div className={styles.navItem}>Profile</div>
    <div className={styles.navItem}>Blogs</div>
    <div className={styles.navItem}>Projects</div>
    <div className={styles.navItem}>Techstack</div>
    <div className={styles.navItem}>Certificates</div>
    <div className={styles.navItem}>Social Media</div>
    <div className={styles.navItem}>Contact</div>
  </div>
  );
}
