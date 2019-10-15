import React from 'react';
import classnames from 'classnames';
import { entrytype } from '../../../enums'
import '../styles/Sidebar_item.scss';
import { dropdown } from '../../../assets/images/common'

const className = {
  container: 'FunFileExplorer_sidebar_item_Container',
  bar: 'FunFileExplorer_sidebar_item_bar',
  image: 'FunFileExplorer_sidebar_item_image',
  imageOpen: 'FunFileExplorer_sidebar_item_image_open',
  expandedContainer: 'FunFileExplorer_sidebar_expanded_container',
  expandedBar: 'FunFileExplorer_sidebar_expanded_bar',
  expandedContent: 'FunFileExplorer_sidebar_expanded_content',
};

const getExpandedView = (contents, expandedFolders, onItemExpandClick, onSideBarItemClick) =>{
  return(
    <div className={className.expandedContainer}>
      <div className={className.expandedBar} />
      <div className={className.expandedContent}>
        {
          contents.map(item =>{
            return(
              <SidebarItem
                key={item.title}
                item={item}
                expandedFolders={expandedFolders}
                onItemExpandClick={onItemExpandClick}
                onSideBarItemClick={onSideBarItemClick}
              />
            )
          })
        }
      </div>
    </div>
  )
};

function SidebarItem(props){
  const { item , expandedFolders, onItemExpandClick ,onSideBarItemClick} = props;
  let isExpanded, imageClassName;

  if(item.type === entrytype.FOLDER) {
    let index = expandedFolders.findIndex(folder => (
      folder.title === item.title
      &&
      folder.path === item.path
    ));
    isExpanded = (index !== -1);
    imageClassName = classnames(className.image, { [className.imageOpen]: isExpanded});

    return(
      <div className={className.container} >
        <div className={className.bar} onClick={() => onSideBarItemClick(item)}>
          <div>{item.title}</div>
          { (item.content.length > 0 )
            ?
            <img
              className={imageClassName}
              src={dropdown}
              onClick={e =>{
                e.stopPropagation();
                onItemExpandClick(item)
              }}/>
            :
            <div />
          }
        </div>

        {isExpanded ? getExpandedView(item.content, expandedFolders, onItemExpandClick, onSideBarItemClick) : <div></div>}
      </div>
    );
  } else {
    return(
      <div />
    )
  }


}

export default SidebarItem;