import React from 'react';
import styles from './certificates.scss';

export default (props) => {
  return (
    <div className={props.className} styleName={`container`}>
      <div styleName='container-overlay'>
        <div styleName="page-title">
          Certificates
        </div>
      </div>
    </div>
    );
};
