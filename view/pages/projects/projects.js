import React from 'react';
import styles from './projects.scss';

export default (props) => {
  return (
    <div className={props.className} styleName={`container`}>
      <div styleName='container-overlay'>
        <div styleName="page-title">
            Projects
        </div>
      </div>
    </div>
    );
};
