import React, { useState } from 'react';
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
    <div className="page-container">
      <div className="container ">
        <div className={`social-links-container ${showContentFlag ? 'pop-in-animation ' : ''}`}>
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
          className={`downloadBtn  ${showContentFlag ? 'pop-in-animation ' : ''}`}
          ctaText="Download VCard"
          cta={() => downloadVcard}
        />
        <div className="imageContainer">
          <img draggable={false} className="avatar-img" src={ringmeup} alt="emoji" />
        </div>
      </div>
    </div>

  );
};

export default Contact;
