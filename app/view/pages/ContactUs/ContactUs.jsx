import React from 'react';
import { ringmeup } from '../../images';

import {socialLinks} from '../../constants/socialLinks';
import SocialLinkChip from './components/SocialLinkChip.jsx';

import './ContactUs.css';

function ContactUs() {

  console.log('social links are ', socialLinks);
  return (<>
          <header styleName="header">
                Contact Me !
          </header>
          <div styleName='container tablet-container-padded'>
            <div styleName="social-links-container">
              
              {
                socialLinks.map(item => (
                  <>
                    <SocialLinkChip
                        siteName={item.link}
                    />
                  </>
                ))
              }
            </div>  
          <div styleName={'imageContainer'}>
            <img styleName='avatar-img' src={ringmeup} />
          </div>      
        </div>  
      </>
    
  )
}

export default ContactUs;