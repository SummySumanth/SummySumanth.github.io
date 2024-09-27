// Libs
import React, { useState } from 'react';
import classNames from 'classnames';

// Assets
import { ringmeup } from '../../images';

// Constants
import socialLinks from '../../constants/socialLinks';

// Components
import SocialLinkChip from './components/SocialLinkChip';
import RoundedBtn from '../../components/RoundedBtn/RoundedBtn';

// Styles
import styles from './Contact.module.css';

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
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={classNames(styles.socialLinksContainer, {[styles.popInAnimation]: showContentFlag})}>
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
          className={classNames(styles.downloadBtn, {[styles.popInAnimation]: showContentFlag})}
          ctaText="Download VCard"
          cta={() => downloadVcard}
        />
        <div className={styles.imageContainer}>
          <img draggable={false} className={styles.avatarImg} src={ringmeup} alt="emoji" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
