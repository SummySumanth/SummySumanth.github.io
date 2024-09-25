import React from 'react';
import styles from './NavList.css';

export default function NavList({hide}) {
  return (
  <div styleName={`ham-checkbox-view ${hide ? `slide-out` : `slide-in`}`}>
    <div styleName="ham-nav-item">Profile</div>
    <div styleName="ham-nav-item">Blogs</div>
    <div styleName="ham-nav-item">Projects</div>
    <div styleName="ham-nav-item">Techstack</div>
    <div styleName="ham-nav-item">Certificates</div>
    <div styleName="ham-nav-item">Social Media</div>
    <div styleName="ham-nav-item">Contact</div>
  </div>
  );
}
