import React from 'react';
import classNames from 'classnames';
import './BrandLogo.css';

const BrandLogo = (props) => (
  <div className={classNames(props.className, "text-container")} c>
    {'<summy.dev />'}
  </div>
);

export default BrandLogo;
