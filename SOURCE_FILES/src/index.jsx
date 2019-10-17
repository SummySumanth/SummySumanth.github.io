import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';

import WelcomeScreen from "./containers/welcomePage/WelcomeScreenContainer.jsx";

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

      </div>
    )
  }
}

ReactDOM.render(
    <Main />
  ,document.getElementById('root')
);