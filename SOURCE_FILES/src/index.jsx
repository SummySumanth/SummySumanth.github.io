import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';

import WelcomeScreen from "./containers/welcomePage/WelcomeScreenContainer.jsx";
import MainPage from "./containers/mainPage/mainPage.jsx";

const classNameEnums = {

};

class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      showWelcome : true,
    }
  }

  hideWelcome = () =>{
    this.setState({
      showWelcome: false,
    });
  };

  render(){
    return(
      <div>
        <WelcomeScreen
          onHideClickHandler={this.hideWelcome}
          showWelcomeScreen={this.state.showWelcome}
        />
        <MainPage />
      </div>
    )
  }
}

ReactDOM.render(
    <Main />
  ,document.getElementById('root')
);