import React from 'react';
import styles from './techstack.scss';

export default (props) => {
return (
  <div className={props.className} styleName={`container`}>
      <div styleName='container-overlay'>
        <div styleName="page-title">
          Tech Stack
        </div>
      </div>
    </div>
    );
};
