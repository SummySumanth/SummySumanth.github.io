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

  header : 'Portfolio_WelcomeScreen_Header',
  headerName: 'Portfolio_WelcomeScreen_Header_Name',
  helloText: 'Portfolio_WelcomeScreen_hello',
  iAmText: 'Portfolio_WelcomeScreen_Iam',
  nameText: 'Portfolio_WelcomeScreen_name',
  accent: 'accent',
  inlineBtn: 'gotoSiteInlineBtn',
  description: 'mainShortDescription',
  sideBar: 'Portfolio_WelcomeScreen_Sidebar',
  sideBarDisappear: 'Portfolio_WelcomeScreen_Sidebar_disappear',
  sidebarContainer: 'Portfolio_WelcomeScreen_Sidebar_container',
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
      hideSideBar: false
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
          I'm a Javascript enthusiast crazed with web development with the top notch techno like ReactJs and
          also a keen nodeJs learner. I love designing and I love coding and that's how I ended up becoming web developer.
        </p>
        <br />
        <p className={styles.description2}>
          Apart from being "In the zone" when hooked into my macbook, I'm a raging foodie, hardcore Xbox gamer, cyclist, beer dude and a binge watcher on Netflix.
        </p>
        <br />
        <p className={styles.description3}>
          Thanks for tuning in, be sure to click on
          <div
            className={styles.inlineBtn}
            onClick={this.props.onHideClickHandler}
          >
            Let's go!
          </div>
          for more info on my works, projects, designs and contact.
        </p>

      </div>
    )
  };

  hideHandler = () =>{
    this.setState({
      hideSideBar: true
    });

    this.props.onHideClickHandler();
  };

  sideBarAnimationEndHandler = () =>{
    if(this.state.hideSideBar){
      this.props.onHideClickHandler();
    }
  };

  render(){
    const welcomeScreenStyle = classnames(styles.welcomeScreen, { [styles.welcomeScreenHide] : !this.props.showWelcomeScreen})
    const nameStyle = classnames(styles.headerName, styles.nameText);
    const sideBarStyle = classnames(styles.headerName, styles.nameText);
    const sideBarVisibilityStyle = classnames(styles.sideBar, { [styles.sideBarDisappear] : this.state.hideSideBar});
    return(
      <div className={welcomeScreenStyle}>
        <div className={styles.contentHolder}>
            <div
              className={sideBarVisibilityStyle}
              onAnimationEndCapture={this.sideBarAnimationEndHandler}
            >
              <div className={styles.sidebarContainer}>
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
              </div>
            </div>


          {/*Open button*/}
          <div
            className={styles.gotoSiteBtn}
            onClick={this.props.onHideClickHandler}
          >
            Let's go !
          </div>
        </div>

        {this.getBackgroundImages()}
      </div>
    );
  }
}

export default WelcomeScreen;

//const newImage = BackgroundImages[];