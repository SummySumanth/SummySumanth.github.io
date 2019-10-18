import React,{ Component } from 'react';
import classnames from 'classnames'
import { displayPic } from '../../assets/images'
import { github } from '../../../../assets/svg'
import '../../styles/sidebar.scss';

const styles = {
  sidebarContainer: 'sidebarContainer',
  nameContainer: 'sidebarNameContainer',
  name: 'sidebarName',
  nameDesc: 'sidebarNameDesc',
  namePic: 'sidebarNamePic',
  nameTextContainer: 'sidebarNameTextContainer',
  linksContainer: 'sidebarLinksContainer',
};

class SideBar extends Component{

  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
    };
  }

  render(){
    return(
      <div className={styles.sidebarContainer}>
        <div className={styles.nameContainer}>
          <div
            className={styles.namePic}
            style={{ backgroundImage: `url(${displayPic})`,}}
          />

          <div className={styles.nameTextContainer}>
            <div className={styles.name}>Sumanth Bettadapura</div>
            <div className={styles.nameDesc}>Frontend Developer</div>
          </div>
        </div>

        <div className={styles.linksContainer}>
          <div>
            {/*<github />*/}
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
