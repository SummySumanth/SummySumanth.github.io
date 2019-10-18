import React,{ Component } from 'react';
import classnames from 'classnames'
import { connect } from 'react-redux';
import { a1, a2, a3, a4, a5, a6, a7, a8} from '../../assets/images/slideshowImages'
import './styles/welcomePage.scss';

const styles = {
  welcomeScreen: 'Portfolio_WelcomeScreen',
  welcomeScreenHide: 'Portfolio_WelcomeScreen_HIDE',
  imgHolder: 'Portfolio_WS_imgHolder',
  contentHolder: 'Portfolio_WS_ContentHolder',
  gotoSiteBtn: 'Portfolio_WS_GotoSiteBtn',
  showBtn:  'Portfolio_WelcomeScreen_SHOWBtn',
  containerBox: 'Portfolio_WelcomeScreen_contentsContainerBox',
  header : 'Portfolio_WelcomeScreen_Header',
  headerName: 'Portfolio_WelcomeScreen_Header_Name',
  helloText: 'Portfolio_WelcomeScreen_hello',
  iAmText: 'Portfolio_WelcomeScreen_Iam',
  nameText: 'Portfolio_WelcomeScreen_name',
  accent: 'accent',
  inlineBtn: 'gotoSiteInlineBtn',
  description: 'mainShortDescription',
  sideBarBackground: 'Portfolio_WelcomeScreen_SidebarBackground',
  description1 : 'description1',
  description2 : 'description2',
  description3: 'description3',

}

const BackgroundImages = [ a1, a2, a3, a4, a5, a6, a7, a8];

class WelcomeScreen extends Component{

  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
    };
    setInterval(()=>{
      this.setNextImage();
    }, 10000);
  }

  setNextImage = () =>{
    this.setState((prevState)=>{
        if(prevState.currentImage === BackgroundImages.length - 1){
          return{
            currentImage : 0
          }
        }
        return {
          currentImage : prevState.currentImage + 1
        }
      });
  };

  getBackgroundImages = () =>{
    return(
      <div
        className={styles.imgHolder}
        style={{
          backgroundImage: `url(${BackgroundImages[this.state.currentImage]})`,
        }}
      />
    );
  };

  getDescription = () =>{
    return(
      <div className={styles.description}>
        <p className={styles.description1}>
          I'm a Javascript enthusiast focusing on frontend development with the great technologies like React and
          tech associated with the modern web development technologies and tools.
        </p>
        <br />
        <p className={styles.description2}>
          When I am not hooked into macbook, I would be snugging on food, xbox, cycling, beer and hey netflix is default for everyone right?
        </p>
        <br />
        <p className={styles.description3}>
          Thanks for reaching out to my site, please hit
          <div
            className={styles.inlineBtn}
            onClick={this.props.onHideClickHandler}
          >
            Let's go!
          </div>
          to explore more about my works, projects and contact details.
        </p>

      </div>
    )
  };

  render(){
    const welcomeScreenStyle = classnames(styles.welcomeScreen, { [styles.welcomeScreenHide] : !this.props.showWelcomeScreen})
    const nameStyle = classnames(styles.headerName, styles.nameText);
    return(
      <div className={welcomeScreenStyle}>
        <div className={styles.contentHolder}>

          <div className={styles.containerBox}>
            <div className={styles.header}>
              <p className={styles.helloText}>
                Hello<span className={styles.accent}>,</span>
              </p>
              <p className={styles.iAmText}>
                I am
              </p>
              <p className={nameStyle}>
                <span className={styles.accent}>Summy</span>
              </p>
            </div>

            {this.getDescription()}
            <div className={styles.sideBarBackground} />
          </div>




          <div
            className={styles.gotoSiteBtn}
            onClick={this.props.onHideClickHandler}
          >
            Let's go !
          </div>
          {/*<div className={styles.showBtn}>*/}
          {/*  Home*/}
          {/*</div>*/}
        </div>
        {this.getBackgroundImages()}
      </div>
    );
  }
}

export default WelcomeScreen;

//const newImage = BackgroundImages[];