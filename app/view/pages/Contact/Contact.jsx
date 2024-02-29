import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ringmeup } from '../../images';

import socialLinks from '../../constants/socialLinks';
import SocialLinkChip from './components/SocialLinkChip';
import RoundedBtn from '../../components/RoundedBtn/RoundedBtn';

import './Contact.css';

const Contact = () => {
  const downloadVcard = () => {
    window.location.assign(`${window.location.origin}/api/download/vcard`);
  };

  let numberOfImages = 0;

  const [showContentFlag, setShowContentFlag] = useState(false);

  const incrementLoadedImages = () => {
    numberOfImages++;
    if (numberOfImages === 10) {
      setShowContentFlag(true);
    }
  };

  return (
    <div styleName="page-container">
      <div styleName="container ">
        <div styleName={`social-links-container ${showContentFlag ? 'pop-in-animation ' : ''}`}>
          {
                socialLinks.map((item) => (
                  <SocialLinkChip
                    key={item.link}
                    onImageLoadCallback={incrementLoadedImages}
                    social={item}
                  />
                ))
              }
        </div>
        <RoundedBtn
          styleName={`downloadBtn  ${showContentFlag ? 'pop-in-animation ' : ''}`}
          ctaText="Download VCard"
          cta={() => downloadVcard}
        />
        <div styleName="imageContainer">
          <img draggable={false} styleName="avatar-img" src={ringmeup} alt="emoji" />
        </div>
      </div>
    </div>

  );
};

export default Contact;
