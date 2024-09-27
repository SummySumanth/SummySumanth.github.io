import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ThemeContext from '../../ThemeContext';

import styles from './RoundedBtn.module.css';

function RoundedBtn(props) {
  const values = useContext(ThemeContext);
  const theme = window.localStorage.getItem('theme');
  const { ctaText, cta, className } = props;
  return (
    <button type="button" className={ classNames(className, styles.container)} onClick={cta}>
      
      <div className={styles.text}>
        {ctaText}
      </div>
    </button>
  );
}

RoundedBtn.propTypes = {
  ctaText: PropTypes.string,
  cta: PropTypes.func.isRequired,
  className: PropTypes.string,
};

RoundedBtn.defaultProps = {
  ctaText: 'Download',
  className: null,
};

export default RoundedBtn;
