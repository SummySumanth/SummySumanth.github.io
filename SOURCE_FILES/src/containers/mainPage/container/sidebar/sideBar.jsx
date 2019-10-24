import React,{ Component } from 'react';
import classnames from 'classnames'
import { displayPic } from '../../assets/images'
import { github, linkedIn, medium, facebook, twitter, instagram, downloadAccent, download } from '../../../../assets/svg'
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
  linksIconHolderTwitter: 'sidebarLinksIconHolderTwitter',
  navigationContainer: 'sidebarNavigationContainer',
  navigationItemContainer: 'sidebarNavigationItemContainer',
  navigationItem: 'sidebarNavigationItem',
  navigationItemHeighlighter: 'sidebarNavigationItemHeighlighter',
  navigationItemSelected: 'sidebarNavigationItemSelected',
  downloadIconHolder: 'downloadIconHolder',
  downloadContainer: 'downloadResumeContainer',
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
    const twitterStyle = classnames(styles.linksIconHolderTwitter, 'twitter');
    const githubStyle = classnames(styles.linksIconHolder, 'github');
    const defaultStyle = classnames(styles.linksIconHolder, 'defaultHover');


    const projectsBarStyle = classnames(styles.navigationItem, { [styles.navigationItemHeighlighter] : this.props.currentActiveContent === 'projects'});
    const techStackBarStyle = classnames(styles.navigationItem, { [styles.navigationItemHeighlighter] : this.props.currentActiveContent === 'techStack'});
    const experiencesBarStyle = classnames(styles.navigationItem, { [styles.navigationItemHeighlighter] : this.props.currentActiveContent === 'experiences'});
    const certificatesBarStyle = classnames(styles.navigationItem, { [styles.navigationItemHeighlighter] : this.props.currentActiveContent === 'certificates'});
    const articlesBarStyle = classnames(styles.navigationItem, { [styles.navigationItemHeighlighter] : this.props.currentActiveContent === 'articles'});
    const feedsBarStyle = classnames(styles.navigationItem, { [styles.navigationItemHeighlighter] : this.props.currentActiveContent === 'feeds'});
    const contactBarStyle = classnames(styles.navigationItem, { [styles.navigationItemHeighlighter] : this.props.currentActiveContent === 'contact'});



    return(
      <div className={styles.sidebarContainer}>
        {/*TOP BAR*/}
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



        {/* Download Resume*/}

        <a href={'https://raw.githubusercontent.com/SummySumanth/SummySumanth.github.io/master/SOURCE_FILES/src/assets/sumathsResume.pdf'}>
          <div className={styles.downloadContainer}>
              <div className={styles.downloadIconHolder}>{download}</div>
              <div> Download Resume</div>
          </div>
        </a>

        {/*NAVIGATIONS CONTAINER*/}
        <div className={styles.navigationContainer}>
          <div
            className={styles.navigationItemContainer}
            onClick={() => this.props.onLinkClick('projects')}
          >
            <div className={projectsBarStyle}>Projects</div>
          </div>

          <div
            className={styles.navigationItemContainer}
            onClick={() => this.props.onLinkClick('techStack')}
          >
            <div className={techStackBarStyle}>Tech Stack</div>
          </div>


          <div
            className={styles.navigationItemContainer}
            onClick={() => this.props.onLinkClick('experiences')}
          >
            <div className={experiencesBarStyle}>Experiences</div>
          </div>

          <div
            className={styles.navigationItemContainer}
            onClick={() => this.props.onLinkClick('certificates')}
          >
            <div className={certificatesBarStyle}>Certificates</div>
          </div>


          <div
            className={styles.navigationItemContainer}
            onClick={() => this.props.onLinkClick('articles')}
          >
            <div className={articlesBarStyle}>Articles</div>
          </div>


          <div
            className={styles.navigationItemContainer}
            onClick={() => this.props.onLinkClick('feeds')}
          >
            <div className={feedsBarStyle}>Feeds</div>
          </div>


          <div
            className={styles.navigationItemContainer}
            onClick={() => this.props.onLinkClick('contact')}
          >
            <div className={contactBarStyle}>Contact</div>
          </div>
        </div>


        {/*BOTTOM BAR*/}
        <div className={styles.linksContainer}>
          <a href={'https://github.com/SummySumanth/'} target='_blank'>
            <div className={githubStyle}>{github}</div>
          </a>

          <a href={'https://www.linkedin.com/in/sumanthba/'} target='_blank'>
            <div className={linkedinStyle}>{linkedIn}</div>
          </a>

          <a href={'https://medium.com/@sumanthbettadapura'} target='_blank'>
            <div className={mediumStyle}>{medium}</div>
          </a>

          <a href={'https://www.facebook.com/summy.biohazaradous'} target='_blank'>
            <div className={facebookStyle}>{facebook}</div>
          </a>

          <a href={'https://twitter.com/i_freak_summy'} target='_blank'>
            <div className={twitterStyle}>{twitter}</div>
          </a>

          <a href={'https://www.instagram.com/i_summy_/'} target='_blank'>
            <div className={defaultStyle}>{instagram}</div>
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
