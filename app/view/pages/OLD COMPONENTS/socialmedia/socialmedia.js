import React from 'react';
import styles from './socialmedia.css';

export default (props) => {
return (
  <div className={props.className} styleName={`container`}>
      <div styleName='container-overlay'>
        <div styleName="page-title">
          Social Media
        </div>
      </div>
    </div>
    );
};