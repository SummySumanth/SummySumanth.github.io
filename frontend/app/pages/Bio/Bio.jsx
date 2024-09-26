// Libs
import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';

// Utils
import useScreenDetails, { deviceTypes } from '../../hooks/useScreenDetails';

// Components
import BrandLogo from '../../components/brandLogo/BrandLogo';
import ParallexImage from '../../components/ParallexImage/ParallexImage';

// Assets
import { DownArrow } from '../../images/svgComponents';
import {
  fistBump,
} from '../../images';

// Styles
import styles from './Bio.module.css';

const Bio = ({ showNavbar }) => {
  const screenDetails = useScreenDetails();
  useLayoutEffect(() => {
    const handleScroll = (e) => {
      if (e.target.scrollTop > 400 || typeof e.target.scrollTop === 'undefined') {
        showNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll, true);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <div className={styles.welcomeBlock}>
        <div className={styles.welcomeBanner}>
          <img className={styles.avatarImg} src={fistBump} alt="avatar" />
          <BrandLogo className={styles.bannerText} />

          <div className={styles.descriptionText}>
            Ey yo!
            <br />
            {' '}
            Thanks for showing interest in getting to know me !

            <div className={styles.descriptionTextEnter}>
              Scroll Down
            </div>
          </div>
        </div>
        <div className={`${styles.downArrowIcon} ${styles.animFadeIn}`}>
          <DownArrow />
        </div>

      </div>
      <div className={styles.detailsBlock}>
        <div className={styles.bioDetailsImageContainer}>
          <div className={styles.parallexImageContainer}>
            <ParallexImage
              size={screenDetails.deviceType === deviceTypes.TABLET_OR_LOWER ? 200 : 400}
            />
          </div>
        </div>
        <div className={styles.bioDetailsText}>
          <div className={styles.bioTextHeader}>
            about me
          </div>
          <div className={styles.bioTextBody}>
            <div className={styles.bioTextBodyBlock}>
              I&apos;m a Frontend Dev and UX Enthusiast From Bengaluru, India.
            </div>
            <div className={styles.bioTextBodyBlock}>
              I love quirky designs, minimalistic interfaces, and clean code.
              I&apos;ve have been working in the industry for over 6 years now.
              Currently working at
              {' '}
              <a href="https://www.smallcase.com/" target="_blank" rel="noreferrer">Smallcase</a>
              {' '}
              as a Software Engineer.
            </div>
            <div className={styles.bioTextBodyBlock}>
              Apart from work, I love to take photos and make video contents,
              That&apos;s where my first love for designing and building things started I believe.
            </div>
          </div>

        </div>
      </div>
      {/* <Links
      links={links}
    /> */}
    </motion.div>
  );
};

export default Bio;
