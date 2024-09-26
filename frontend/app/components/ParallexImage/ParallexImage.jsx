import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { bioBg, bioFg } from '../../images';

import styles from './ParallexImage.module.css';

const ParallexImage = ({ size }) => {
  // const { options, ...rest } = props;

  const options = {
    scale: 1,
    speed: 1000,
    max: 10,
    startX: 50,
    staryY: 50,
    // glare: true,
    // 'max-glare': 0.25,
  };

  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div ref={tilt} className={styles.box} style={{ width: `${size}px`, height: `${size}px` }}>
      <img className={styles.imgBx} src={bioBg} alt="bioBg" />
      <img className={styles.contentBx} src={bioFg} alt="bioFg" />
    </div>
  );
};

export default ParallexImage;
