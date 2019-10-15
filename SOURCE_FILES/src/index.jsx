import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {smallCase, cardImage, openInNew, infoIcon, warning, downArrow} from './assets/images/common';

import './styles/index.scss';
import './styles/mockup.scss';

// import WelcomeScreen from "./containers/welcomePage/WelcomeScreenContainer.jsx";
// import Explorer from './containers/explorerPage/explorerContainer.jsx';


const classNameEnums = {
  body : 'mockup_Body',
  headBar : 'mockup_HeadBar',
  headBarImage : 'mockup_HeadBarImage',
  loadMoreNewItems : 'mockup_loadMoreNewItems',
  loadMoreNewItemsDownArrow : 'mockup_loadMoreNewItemsDownArrow',
  cardContainer :'mockup_CardContainer',
  card :'mockup_Card',
  cardLogoContainer :'mockup_CardLogoContainer',
  cardInfoContainer :'mockup_CardInfoContainer',
  cardLogoImageBG: 'mockup_CardInfocardLogoImageBG',
  cardLogoImage: 'mockup_CardInfocardLogoImage',
  cardHeader: 'mockup_CardInfoHeader',
  cardDescription: 'mockup_CardInfoDescription',
  cardLink: 'mockup_CardInfoLink',
  cardLinkImage: 'mockup_CardInfoLinkImage',
  cardInfoIcon: 'mockup_CardInfoInfoIcon',
  cardInfoIconContainer: 'mockup_CardInfoIconContainer',
  cardToolTipContainer: 'mockupToolTipContainer',
  cardToolTipWarningImage:'mockup_tooltipWarningImg',
  cardToolTipWarningText:'mockup_tooltipWarningTxt',
  cardToolTipPointer:'mockup_TooltipPointer',
};

const dummyData = [
  {
    header: 'Government Reforms',
    Subheader: 'Government policies & projects that will drive reforms in coming years',
    link: '12 other smallcases'
  },
  {
    header: 'Government Reforms',
    Subheader: 'Government policies & projects that will drive reforms in coming years',
    link: '12 other smallcases'
  },
  {
    header: 'Government Reforms',
    Subheader: 'Government policies & projects that will drive reforms in coming years',
    link: '12 other smallcases'
  },
  {
    header: 'Government Reforms',
    Subheader: 'Government policies & projects that will drive reforms in coming years',
    link: '12 other smallcases'
  },
  {
    header: 'Government Reforms',
    Subheader: 'Government policies & projects that will drive reforms in coming years',
    link: '12 other smallcases'
  },
  {
    header: 'Government Reforms',
    Subheader: 'Government policies & projects that will drive reforms in coming years',
    link: '12 other smallcases'
  }
];

const testArray = [1, [2], [3,[5,6,7]]];

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

  // render(){
  //   return(
  //     <div>
  //       { this.state.showWelcome ? <WelcomeScreen onModalClose={this.hideWelcome} /> : <div />}
  //       <Explorer/>
  //     </div>
  //   );
  // }

  getContent(){
      return dummyData.map(item =>{
        return(
          <div className={classNameEnums.card}>
            <div className={classNameEnums.cardLogoContainer}>
              <div className={classNameEnums.cardLogoImageBG}>
                <img className={classNameEnums.cardLogoImage} src={cardImage} />
              </div>
            </div>

            <div className={classNameEnums.cardInfoContainer}>
              <div className={classNameEnums.cardHeader}>
                {item.header}
                <div className={classNameEnums.cardInfoIconContainer} >
                  <img className={classNameEnums.cardInfoIcon} src={infoIcon}/>
                  <div className={classNameEnums.cardToolTipContainer}>
                    <div className={classNameEnums.cardToolTipPointer}></div>

                    <div>
                      <img className={classNameEnums.cardToolTipWarningImage} src={warning} />
                    </div>
                    <div>
                      <div className={classNameEnums.cardToolTipWarningText}>
                        Archiving this order batch will
                        not place new orders for
                        unfilled stocks.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classNameEnums.cardDescription}>
                {item.Subheader}
              </div>
              <div className={classNameEnums.cardLink}>
                {item.link} <img className={classNameEnums.cardLinkImage} src={openInNew} />
              </div>
            </div>
          </div>
        );
      });
  }

  render(){
    return(
      <div className={classNameEnums.body}>
        <div className={classNameEnums.headBar}>
          <div>
            <img className={classNameEnums.headBarImage} src={smallCase}/>
          </div>
        </div>
        <div className={classNameEnums.cardContainer}>
          {this.getContent()}
        </div>
        <div className={classNameEnums.loadMoreNewItems}>
          Load more news items <img className={classNameEnums.loadMoreNewItemsDownArrow} src={downArrow} />
        </div>
      </div>
    )
  }
}


ReactDOM.render(
    <Main />
  ,document.getElementById('root')
);