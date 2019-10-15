import React,{ Component } from 'react';
import objectPath from 'object-path';

import Sidebar from './components/sidebar.jsx';
import FilesAndFolders from './components/filesAndFoldersView.jsx';
import FileInfoWindow from './components/fileInfoWindow.jsx';
import AddItemWindow from './components/addItemWindow.jsx'
import { entrytype, fileType } from '../../enums'

import './styles/explorer.scss';

const classnames = {
  explorerContainer : 'FunFileExplorer_explorerContainer',
};

class Explorer extends Component{

  constructor(props){
    super(props);
    this.state = {
      folderStructure : {
        root : {
          title: 'root',
          type: entrytype.FOLDER,
          path: '/',
          creatorName: 'Summy',
          createdDate: '23rd Sep, 2019',
          content: [
            {
              title: 'Apps',
              type: entrytype.FOLDER,
              path: 'root',
              creatorName: 'Summy',
              createdDate: '23rd Sep, 2019',
              content: [],

            },
            {
              title: 'Pictures',
              type: entrytype.FOLDER,
              path: 'root',
              creatorName: 'Summy',
              createdDate: '23rd Sep, 2019',
              content: [],
            },
            {
              title: 'Videos',
              type: entrytype.FOLDER,
              path: 'root',
              creatorName: 'Summy',
              createdDate: '23rd Sep, 2019',
              content: []
            },
            {
              title: 'Docs',
              type: entrytype.FOLDER,
              path: 'root',
              creatorName: 'Summy',
              createdDate: '23rd Sep, 2019',
              content: [
                {
                  title: 'Work',
                  type: entrytype.FOLDER,
                  path: 'root/Docs',
                  creatorName: 'Summy',
                  createdDate: '23rd Sep, 2019',
                  content: [
                    {
                      title: 'e',
                      type: entrytype.FILE,
                      fileType: fileType.PDF,
                      path: 'root/Docs/Work',
                      creatorName: 'Summy',
                      createdDate: '23rd Sep, 2019',
                      link: ''
                    },
                    {
                      title: 'f',
                      type: entrytype.FILE,
                      size: '12.2 KB',
                      fileType: fileType.TS,
                      path: 'root/Docs/Work',
                      creatorName: 'Summy',
                      createdDate: '23rd Sep, 2019',
                      link: ''
                    }
                  ]
                },
                {
                  title: 'c',
                  type: entrytype.FILE,
                  size: '1.2 MB',
                  fileType: fileType.PDF,
                  path: 'root/Docs',
                  creatorName: 'Summy',
                  createdDate: '23rd Sep, 2019',
                  link: ''
                },
                {
                  title: 'd',
                  type: entrytype.FILE,
                  size: '12 MB',
                  fileType: fileType.DOCX,
                  path: 'root/Docs',
                  creatorName: 'Summy',
                  createdDate: '23rd Sep, 2019',
                  link: ''
                }
              ]
            },
            {
              title: 'a',
              type: entrytype.FILE,
              size: '3 MB',
              fileType: fileType.PDF,
              path: 'root',
              creatorName: 'Summy',
              createdDate: '23rd Sep, 2019',
              link: ''
            },
            {
              title: 'b',
              type: entrytype.FILE,
              size: '14 MB',
              fileType: fileType.PDF,
              path: 'root',
              creatorName: 'Summy',
              createdDate: '23rd Sep, 2019',
              link: ''
            },
          ]
        }
      },
      expandedFolders : [],
      showItemInfo : false,
      infoWindowItem : {},
      currentPath : 'root',
      dragInfoWindow : false,
      dragInfoWindowInitialX : '',
      dragInfoWindowInitialY : '',
      showAddItemWindow: false,
      addItemWindowPath: '',
    }
  };

  // NAVBAR HANDLERS
  onNavBarUpLevelClick = path =>{
    const currentPath = path.split('/');
    currentPath.pop();
    const finalPath = currentPath.join('/');
    this.setState({
      currentPath : finalPath
    })
  };

  onNavBarItemClick = (item , index) => {
    if(item === 'root'){
      this.setState({
        currentPath : 'root'
      })
    } else {
      const OldPath = this.state.currentPath;
      const OldPathArray = OldPath.split('/');
      let flag = true;
      while(flag){
        if(index ===  OldPathArray.length-1){
          flag=false;
        } else {
          OldPathArray.pop();
        }
      }
      const newPath = OldPathArray.join('/');
      this.setState({
        currentPath : newPath
      })
    }
  };




  // SIDEBAR HANDLERS
  onSideBarItemClick = (item) =>{
  	if(item.title === 'root'){
      this.setState({
        currentPath : 'root'
      })
		} else {
      const currentPath = `${item.path}/${item.title}`;
      this.setState({
        currentPath
      })
    }

  };

  onSideBarItemExpandClick = folder =>{
    this.setState((prevState) => {
      // check if its already expanded
      let index = prevState.expandedFolders.findIndex(item =>{
        if(item.title === folder.title && item.path === folder.path){
          return true
        }
      });

      // remove folder from expanded folders list
      if( index !== -1){
        let expandedFolders = [...prevState.expandedFolders];
        expandedFolders.splice(index,1);
        return {
          expandedFolders
        }
      }

      // add folder to expanded folders list
      return {
        expandedFolders : [ ...prevState.expandedFolders, folder]
      }
    });
  };




  // DELETE ITEM HANDLER
  removeObj = (searchItem, superItem) =>{
    superItem.content.forEach((item, index) =>{
      if(item.title === searchItem.title && item.path === searchItem.path){
        superItem.content.splice(index, 1);
      }
      if(item.type === entrytype.FOLDER){
        this.removeObj(searchItem, item)
      }
    });
  };

  onItemDelete = item =>{
      this.setState(prevState =>{
        const newFolderStructure = { ...prevState.folderStructure.root };
        this.removeObj(item, newFolderStructure);
        return {
          ...prevState,
          folderStructure: {
            root : {
              ...newFolderStructure
            }
          }
        }
      });
  };



  // INFO WINDOW HANDLERS
  closeInfoWindow = () =>{
    this.setState({
      showItemInfo : false,
      infoWindowItem : {},
    })
  };

  onGetInfoClick = item =>{
    this.setState({
      showItemInfo : true,
      infoWindowItem : item,
    });
  };




  // ADD ITEM WINDOW HANDLERS
  addObj = (searchItem, superItem) =>{
    console.log('search item is', searchItem);
    let isAdded = false;
    if(superItem.content.length !== 0){
      superItem.content.forEach( item =>{
        if( item.path === searchItem.path && !isAdded){
          let index = superItem.content.findIndex( indexItem => {
            if(indexItem.title === searchItem.title){
              if(searchItem.type === entrytype.FOLDER){
                return true;
              } else if(searchItem.fileType === indexItem.fileType){
                return true;
              }
            } else {
              false
            }
          });
          if(index === -1){
            isAdded = true;
            superItem.content.push(searchItem);
          }else if(!isAdded){
            // alert(`index is ${index}`)
          }
        }
        else if(item.type === entrytype.FOLDER){
          this.addObj(searchItem, item)
        }
      });
    }

    const constructedUpperPathArray = searchItem.path.split('/');
    constructedUpperPathArray.pop();
    const constructedUpperPath = constructedUpperPathArray.join('/')

    // IF the folder is empty
    if(constructedUpperPath === superItem.path && superItem.content.length === 0 &&!isAdded){
      superItem.content.push(searchItem);
    }
  };

  closeAddNewItemWindow = () =>{
    this.setState({
      showAddItemWindow: false,
      addItemWindowPath: '',
    });
  };

  onAddNewItemClick = parentPath =>{
    this.setState({
      showAddItemWindow: true,
      addItemWindowPath: parentPath,
    });
  };

  onSubmitAddItemWindow = item =>{
    this.setState(prevState =>{
      const newFolderStructure = { ...prevState.folderStructure.root };
      const newItem = {...item};
      if(newItem.type === entrytype.FOLDER){
        newItem.content = [];
      }
      newItem.path = this.state.addItemWindowPath;
      if(newItem.type === entrytype.FOLDER){
        newItem.content = [];
        delete newItem['fileType'];
        delete newItem['size'];
      }
      this.addObj(newItem, newFolderStructure);
      return {
        ...prevState,
        folderStructure: {
          root : {
            ...newFolderStructure
          }
        }
      }
    });
  };




  render(){
    const { folderStructure, expandedFolders, currentPath} = this.state;
    return(
      <div className={classnames.explorerContainer} ref={'explorerMain'} onMouseUp={this.handleFileInfoWindowMouseUp}>
        {
          (this.state.showItemInfo)
          ?
          <FileInfoWindow infoWindowItem={this.state.infoWindowItem} onCloseHandler={this.closeInfoWindow}/>
          :
          null
        }


        {
          (this.state.showAddItemWindow)
            ?
            <AddItemWindow
              onCloseHandler={this.closeAddNewItemWindow}
              onCreate={this.onSubmitAddItemWindow}
            />
            :
            null
        }

        <Sidebar
          folders={folderStructure}
          onSideBarItemClick={this.onSideBarItemClick}
          onSideBarItemExpandClick={this.onSideBarItemExpandClick}
          expandedFolders={expandedFolders}
        />

        <FilesAndFolders
          path={currentPath}
          fileSystem={folderStructure}
          onNavBarUpLevelClick={this.onNavBarUpLevelClick}
          onGetInfoClick={this.onGetInfoClick}
          onFolderOpen={this.onSideBarItemClick}
          onItemDelete={this.onItemDelete}
          onNavBarItemClick={this.onNavBarItemClick}
          onAddNewItemClick={this.onAddNewItemClick}
        />
      </div>
    )
  }
}

export default Explorer;