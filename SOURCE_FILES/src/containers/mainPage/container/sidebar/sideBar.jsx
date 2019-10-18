import React,{ Component } from 'react';
import classnames from 'classnames'
import { displayPic } from '../../assets/images'
import { github, linkedIn, medium, facebook, twitter } from '../../../../assets/svg'
import '../../styles/sidebar.scss';

const styles = {
  sidebarContainer: 'sidebarContainer',
  sidebarContainerAppear: 'sidebarContainerAppear',
  sidebarContainerDisappear: 'sidebarContainerDisappear',
  nameContainer: 'sidebarNameContainer',
  name: 'sidebarName',
  nameDesc: 'sidebarNameDesc',
  namePic: 'sidebarNamePic',
  nameTextContainer: 'sidebarNameTextContainer',
  linksContainer: 'sidebarLinksContainer',
  linksIconHolder: 'sidebarLinksIconHolder',
};

class SideBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
    };
  }

  render(){
    const linkedinStyle = classnames(styles.linksIconHolder, 'linkedin');
    const mediumStyle = classnames(styles.linksIconHolder, 'medium');
    const facebookStyle = classnames(styles.linksIconHolder, 'facebook');
    const twitterStyle = classnames(styles.linksIconHolder, 'twitter');
    const githubStyle = classnames(styles.linksIconHolder, 'github');

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
          <div className={githubStyle}>{github}</div>
          <div className={linkedinStyle}>{linkedIn}</div>
          <div className={mediumStyle}>{medium}</div>
          <div className={facebookStyle}>{facebook}</div>
          <div className={twitterStyle}>{twitter}</div>
          <div className={facebookStyle}>{facebook}</div>
          {/*<div className={styles.linksIconHolder}>{githubVar}</div>*/}
        </div>
      </div>
    );
  }
}

export default SideBar;
