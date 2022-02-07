import React from 'react';
import styles from './contact.scss';

export default (props) => {
  return (
    <div className={props.className} styleName={`container`}>
      <div styleName='container-overlay'>
        <div styleName="page-title">
          Contact
        </div>
      </div>
    </div>
    );
};
