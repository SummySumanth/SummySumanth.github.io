import React from 'react';
import styles from './certificates.scss';

export default React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={props.className} styleName={`container`}>
      <div styleName='container-overlay'>
        <div styleName="page-title">
          Certificates
        </div>
      </div>
    </div>
    );
});
