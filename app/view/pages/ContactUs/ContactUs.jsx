import React from 'react';
import { Link } from 'react-router-dom';
import { ringmeup } from '../../images';

import socialLinks from '../../constants/socialLinks';
import SocialLinkChip from './components/SocialLinkChip';
import RoundedBtn from '../../components/RoundedBtn/RoundedBtn';

import './ContactUs.css';

function ContactUs() {
  const downloadVcard = () => {
    window.location.assign(`${window.location.origin}/api/download/vcard`);
  };

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
        <RoundedBtn styleName="downloadBtn" ctaText="Download VCard" cta={downloadVcard} />
        <div styleName="imageContainer">
          <img draggable={false} styleName="avatar-img" src={ringmeup} alt="emoji" />
        </div>
      </div>
    </div>

  );
}

export default ContactUs;
