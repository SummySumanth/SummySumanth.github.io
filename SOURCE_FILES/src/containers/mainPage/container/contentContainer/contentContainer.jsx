import React,{ Component } from 'react';
import classnames from 'classnames'
import '../../styles/contentContainer.scss';

const styles = {
  contentItem : 'contentItem',
  contentHeader : 'contentHeader',
  contentContainer: 'contentContainer'
};

class SideBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div className={styles.sidebarContainer}>

          <div className={styles.contentItem}>
            <div className={styles.contentHeader}>Projects</div>
            <div className={styles.contentContainer}></div>
          </div>

          <div className={styles.contentItem}>
            <div className={styles.contentHeader}>Tech Stack</div>
            <div className={styles.contentContainer}></div>
          </div>

          <div className={styles.contentItem}>
            <div className={styles.contentHeader}>Experiences</div>
            <div className={styles.contentContainer}></div>
          </div>

          <div className={styles.contentItem}>
            <div className={styles.contentHeader}>Articles</div>
            <div className={styles.contentContainer}></div>
          </div>

          <div className={styles.contentItem}>
            <div className={styles.contentHeader}>Feeds</div>
            <div className={styles.contentContainer}></div>
          </div>

          <div className={styles.contentItem}>
            <div className={styles.contentHeader}>Contact</div>
            <div className={styles.contentContainer}></div>
          </div>
      </div>
    );
  }
}

export default SideBar;
