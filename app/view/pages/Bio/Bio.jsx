import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import BrandLogo from '../../components/brandLogo/BrandLogo';
import ParallexImage from '../../components/ParallexImage/ParallexImage';
import { DownArrow } from '../../images/svgComponents';

import {
  fistBump,
} from '../../images';

import './Bio.css';

const Bio = ({ showNavbar }) => {
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
      <div styleName="welcome-block">
        <div styleName="welcome-banner">
          <img styleName="avatar-img" src={fistBump} alt="avatar" />
          <BrandLogo styleName="banner-text" />

          <div styleName="description-text">
            Ey yo! Thanks for showing interest in getting to know me !

            <div styleName="description-text-enter">
              Scroll Down
            </div>
          </div>
        </div>
        <div styleName="down-arrow-icon anim-fade-in ">
          <DownArrow />
        </div>

      </div>
      <div styleName="details-block">
        <div styleName="bio-details-image-container">
          <div styleName="parallex-image-container">
            <ParallexImage size={400} />
          </div>
        </div>
        <div styleName="bio-details-text">
          <div styleName="bio-text-header">
            about me
          </div>
          <div styleName="bio-text-body">
            <div styleName="bio-text-body-block">
              I&apos;m a Frontend Dev and UX Enthusiast From Bengaluru, India.
            </div>
            <div styleName="bio-text-body-block">
              I love quirky designs, minimalistic interfaces, and clean code.
              I&apos;ve have been working in the industry for over 6 years now.
              Currently working at
              {' '}
              <a href="https://www.smallcase.com/" target="_blank" rel="noreferrer">Smallcase</a>
              {' '}
              as a Software Engineer.
            </div>
            <div styleName="bio-text-body-block">
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
