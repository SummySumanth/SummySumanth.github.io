import React from 'react';
import styles from './profile.css';

export default (props) => {
  return (
    <div className={props.className} styleName={`container`}>
      <div styleName='container-overlay'>
        <div styleName="page-title">
          Profile
        </div>
      </div>
    </div>
    );
};