import React,{ Component } from 'react';
import classnames from 'classnames';
import '../../styles/contact.scss';

const styles = {
  container: 'contactsContainer',
  itemContainer: 'contactItemContainer',
  itemData: 'contactItemData',
};

class Contact extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div className={styles.container}>
        <div className={styles.itemContainer}>
            <div>
              Mail :
            </div>

            <div className={styles.itemData}>
              <a
                href="mailto: Sumanth261094@gmail.com"
                target={'_blank'}
              >
                Sumanth261094@gmail.com
              </a>
            </div>
        </div>
        <div className={styles.itemContainer}>
            <div>
              Phone :
            </div>
            <div className={styles.itemData}>
              <a
                href='tel:+919060000493'
                target={'_blank'}
              >
                +91-90600-00493
              </a>
            </div>
        </div>
      </div>
    );
  }
}

export default Contact;
