import React from 'react';
import classNames from 'classnames';
import styles from './BrandLogo.module.css';

const BrandLogo = (props) => (
  <div className={classNames(props.className, styles.textContainer)} c>
    {'<summy.dev />'}
  </div>
);

export default BrandLogo;
