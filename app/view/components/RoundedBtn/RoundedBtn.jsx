import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ThemeContext from '../../ThemeContext';
import { downloadDark, downloadLight } from '../../images';
import './RoundedBtn.css';

function RoundedBtn(props) {
  const values = useContext(ThemeContext);
  const theme = window.localStorage.getItem('theme');
  const { ctaText, cta, className } = props;
  return (
    <button type="button" className={className} styleName="container" onClick={cta}>
      <img styleName="icon" src={(theme === 'dark') ? downloadDark : downloadLight} alt="download btn" />
      <div styleName="text">
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
