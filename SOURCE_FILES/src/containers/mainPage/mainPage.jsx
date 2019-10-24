import React,{ Component } from 'react';
import classnames from 'classnames'

import SideBar from "./container/sidebar/sideBar.jsx";
import ContentContainer from "./container/contentContainer/contentContainer.jsx";

import './styles/mainPage.scss';
import './styles/contentContainer.scss'

const styles = {
  mainpageContainer : 'mainpageContainer',
  showBtn:  'Portfolio_WelcomeScreen_SHOWBtn',


  contentItem : 'contentItem',
  contentHeader : 'contentHeader',
  contentContainer: 'contentContainer',
  contentItemContainer: 'contentItemContainer'
};

class MainPage extends Component{

  constructor(props) {
    super(props);

    this.state = {
      activeContent : 'projects'
    };

    this.references = {
      projects : React.createRef(),
      techStack : React.createRef(),
      experiences : React.createRef(),
      certificates : React.createRef(),
      articles : React.createRef(),
      feeds : React.createRef(),
      contact : React.createRef(),
    };
  }

  navigateHandle = reference =>{
    this.references[reference].current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  };

  changeActiveContent = content =>{
    console.log('changing active content to', content);
    this.setState({
      activeContent : content
    });
  };

  render(){
    const show =  this.props.welcomeScreenHidden;
    return(
      <div className={styles.mainpageContainer}>
          <SideBar
            show={show}
            currentActiveContent={this.state.activeContent}
            onLinkClick={this.navigateHandle}
          />
          <ContentContainer
            references={this.references}
            currentActiveContent={this.state.activeContent}
            changeActiveContent={this.changeActiveContent}
          />
      </div>
    );
  }
}

export default MainPage;
