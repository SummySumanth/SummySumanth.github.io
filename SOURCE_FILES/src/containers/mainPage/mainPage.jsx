import React,{ Component } from 'react';
import classnames from 'classnames'

import SideBar from "./container/sidebar/sideBar.jsx";

import './styles/mainPage.scss';

const styles = {
  mainpageContainer : 'mainpageContainer',
};

class MainPage extends Component{

  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
    };
  }

  render(){
    const show =  this.props.welcomeScreenHidden;
    return(
      <div className={styles.mainpageContainer}>
          <SideBar
            show={show}
          />
      </div>
    );
  }
}

export default MainPage;
