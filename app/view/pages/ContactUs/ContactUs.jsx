import React from 'react';
import { Link } from 'react-router-dom';
import { ringmeup } from '../../images';

import socialLinks from '../../constants/socialLinks';
import SocialLinkChip from './components/SocialLinkChip';

import './ContactUs.css';

function ContactUs() {
  return (
    <div styleName="page-container">
      <Link to="/">
        <header styleName="header">
          Reach me !
        </header>
      </Link>
      <div styleName="container ">
        <div styleName="social-links-container">
          {
                socialLinks.map((item) => (
                  <SocialLinkChip
                    social={item}
                  />
                ))
              }
        </div>
        <div styleName="imageContainer">
          <img draggable={false} styleName="avatar-img" src={ringmeup} alt="emoji" />
        </div>
      </div>
    </div>

  );
}

export default ContactUs;
