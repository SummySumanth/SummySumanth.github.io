import React from 'react';
import styles from './NavList.css';

export default function NavList({hide}) {
  return (
  <div className={`ham-checkbox-view ${hide ? `slide-out` : `slide-in`}`}>
    <div className="ham-nav-item">Profile</div>
    <div className="ham-nav-item">Blogs</div>
    <div className="ham-nav-item">Projects</div>
    <div className="ham-nav-item">Techstack</div>
    <div className="ham-nav-item">Certificates</div>
    <div className="ham-nav-item">Social Media</div>
    <div className="ham-nav-item">Contact</div>
  </div>
  );
}
