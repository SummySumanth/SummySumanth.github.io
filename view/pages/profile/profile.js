import React from 'react';
import styles from './profile.scss';

export default function profile(props) {
  console.log('props at profile ', props);

  
  return (
    <div className={props.className} styleName={`container`}>
      <div styleName='container-overlay'>
        <div styleName="page-title">
          Profile
        </div>
      </div>
    </div>
    );
}
