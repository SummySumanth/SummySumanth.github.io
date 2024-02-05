import React from 'react';
import './BrandLogo.css';

function BrandLogo(props) {
  console.log('received props is ', props);
  return (
    <header styleName="brandLogo-container">
      <div className={props.className} styleName="text-container">
        {'<summy.dev />'}
      </div>
    </header>
  );
}

export default BrandLogo;
