import React from 'react';
import PropTypes from 'prop-types';
import { downloadIcon } from '../../images';
import './RoundedBtn.css';

RoundedBtn.propTypes = {
    link: PropTypes.string.isRequired,
    ctaText: PropTypes.string,
    cta: PropTypes.func.isRequired,
    className: PropTypes.string,
};

RoundedBtn.defaultProps = {
    ctaText: 'Download'
}

function RoundedBtn(props) {
    console.log('props are ', props);
    const { ctaText, cta } = props;
    return (
        <div className={props.className} styleName='container' onClick={cta}>
            <img styleName='icon' src={downloadIcon}/>
            <div styleName='text'>
                {ctaText}
            </div>
        </div>
    );
}

export default RoundedBtn;