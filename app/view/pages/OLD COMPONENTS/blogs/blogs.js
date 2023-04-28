import React from 'react';
import styles from './blogs.css';

export default (props) => {
  return (
    <div className={props.className} styleName={`container`}>
      <div styleName='container-overlay'>
        <div styleName="page-title">
          Blogs
        </div>
      </div>
    </div>
    );
};
