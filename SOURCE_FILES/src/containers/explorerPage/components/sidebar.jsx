import React, { Component } from 'react';

import SidebarItem from './sidebar_item.jsx';
import { fileType , entrytype} from '../../../enums';
import '../styles/Sidebar.scss'
import {folder} from '../assets/images/filesAndFolders';

const classnames = {
  container : 'FunFileExplorer_sidebarContainer',
  header : 'FunFileExplorer_sidebarHeader',
};

class Sidebar extends Component{

  getFolderTree(folders, onSideBarItemClick, onSideBarItemExpandClick, expandedFolders){
    return folders.root.content.map(item =>{
      if(item.type === entrytype.FOLDER){
        return(
          <SidebarItem
            key={`${item.title + item.path}`}
            item={item}
            onSideBarItemClick={onSideBarItemClick}
            onItemExpandClick={onSideBarItemExpandClick}
            expandedFolders={expandedFolders}
          />
        )
      }
    });
  };

  render(){
    const { folders, onSideBarItemClick, onSideBarItemExpandClick, expandedFolders } = this.props;
    return (
      <div className={classnames.container}>
        <div className={classnames.header} onClick={() => onSideBarItemClick(folders.root)}>ROOT</div>
        {this.getFolderTree(folders, onSideBarItemClick, onSideBarItemExpandClick, expandedFolders)}
      </div>
    )
  }
};

export default Sidebar;