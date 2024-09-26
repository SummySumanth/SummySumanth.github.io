import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import useScreenDetails, { deviceTypes } from '../../hooks/useScreenDetails';
import BrandLogo from '../../components/brandLogo/BrandLogo';
import ParallexImage from '../../components/ParallexImage/ParallexImage';
import { DownArrow } from '../../images/svgComponents';

import {
  fistBump,
} from '../../images';

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
      <div className="welcome-block">
        <div className="welcome-banner">
          <img className="avatar-img" src={fistBump} alt="avatar" />
          <BrandLogo className="banner-text" />

          <div className="description-text">
            Ey yo!
            <br />
            {' '}
            Thanks for showing interest in getting to know me !

            <div className="description-text-enter">
              Scroll Down
            </div>
          </div>
        </div>
        <div className="down-arrow-icon anim-fade-in ">
          <DownArrow />
        </div>

      </div>
      <div className="details-block">
        <div className="bio-details-image-container">
          <div className="parallex-image-container">
            <ParallexImage
              size={screenDetails.deviceType === deviceTypes.TABLET_OR_LOWER ? 200 : 400}
            />
          </div>
        </div>
        <div className="bio-details-text">
          <div className="bio-text-header">
            about me
          </div>
          <div className="bio-text-body">
            <div className="bio-text-body-block">
              I&apos;m a Frontend Dev and UX Enthusiast From Bengaluru, India.
            </div>
            <div className="bio-text-body-block">
              I love quirky designs, minimalistic interfaces, and clean code.
              I&apos;ve have been working in the industry for over 6 years now.
              Currently working at
              {' '}
              <a href="https://www.smallcase.com/" target="_blank" rel="noreferrer">Smallcase</a>
              {' '}
              as a Software Engineer.
            </div>
            <div className="bio-text-body-block">
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
