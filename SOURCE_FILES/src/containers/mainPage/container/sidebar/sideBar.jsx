import React,{ Component } from 'react';
import classnames from 'classnames'

import '../../styles/sidebar.scss';

const styles = {
  sidebarContainer: 'sidebarContainer',
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
asdas
      </div>
    );
  }
}

export default SideBar;
