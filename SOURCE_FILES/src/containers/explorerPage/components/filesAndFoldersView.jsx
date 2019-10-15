import React, { Component } from 'react';
import DynamicClassnames from 'classnames';
import { fileType , entrytype} from '../../../enums/index';
import { file, folder } from '../assets/images/filesAndFolders';
import { plus } from '../../../assets/images/common'
import NavBar from './navbar.jsx';

import '../styles/filesAndFoldersView.scss';

const classnames = {
  container : 'FunFileExplorer_FnFContainer',
  navBarContainer : 'FunFileExplorer_FnFNavBarContainer',
  viewContainer : 'FunFileExplorer_FnFviewContainer',
	item : 'FunFileExplorer_item',
	itemIcon : 'FunFileExplorer_item_icon',
	yellowHover : 'FunFileExplorer_item_yellowHover',
	blueHover : 'FunFileExplorer_item_blueHover',
	fileText : 'FunFileExplorer_FNFVIW_item_fileText',
	contectMenuContainer : 'FunFileExplorer_context_menu_container',
	contectMenuItem : 'FunFileExplorer_context_menu_item',
	contectMenuItemDelete : 'FunFileExplorer_context_menu_item_delete',
	addNewItem : 'FunFileExplorer_addNewItem',
	addNewItemImage : 'FunFileExplorer_addNewItem_Image',
}

class FilesAndFolders extends Component{

	constructor(props){
		super(props);
		this.state = {
			showContextMenu : false,
			contextMenuItem : {},
			mouseX: '',
			mouseY: '',
		}
	}

	getFileIcon(fileType){
			return (
				<div className={classnames.itemIcon}>
					<div>
						<img src={file}/>
					</div>
					<div className={classnames.fileText}>.{fileType}</div>
				</div>
			);
	}

	getFolderIcon(){
		return (
			<div className={classnames.itemIcon}>
				<div>
					<img src={folder}/>
				</div>
			</div>
		);
	}

	onMouseDownHandler(e, item){
		e.preventDefault();
		e.stopPropagation();
		if(e.button === 2){
			this.setState({
				showContextMenu : true,
				mouseX: e.pageX,
				mouseY: e.pageY,
				contextMenuItem: item,
			});
		}
	}

	getContentItem(item){
		let itemIcon;
		let dynamicName;
		if(item.type === entrytype.FOLDER ){
			dynamicName = DynamicClassnames(classnames.item , classnames.blueHover);
			itemIcon = this.getFolderIcon();
		} else {
			dynamicName = DynamicClassnames(classnames.item , classnames.yellowHover);
			itemIcon = this.getFileIcon(item.fileType);
		}

		return(
			<div
				key={`${item.title} ${(item.type === entrytype.FILE) ? item.fileType : ''}`}
				className={dynamicName}
				onDoubleClick={e => this.onContextMenuOpen(e, item)}
				onMouseDown={e => this.onMouseDownHandler(e, item)}
				onContextMenu={e => {e.preventDefault()}}
			>
				{itemIcon}
				{(item.type === entrytype.FOLDER) ?
					<div>{item.title}</div>
					:
					<div>{`${item.title}.${item.fileType}`}</div>
				}
			</div>
		)
	}

	getContents(pathsArray, fileSystem){
		let subContents = fileSystem.root;
		for(let i = 0; i < pathsArray.length; i ++){
			let index = subContents.content.findIndex(item => item.title === pathsArray[i]);
			if(index !== -1){
				subContents = subContents.content[index];
			}
		}
		return subContents.content;
	}

	getViewContainer(path, fileSystem){
		const pathsArray = path.split('/');
		const contents = this.getContents(pathsArray, fileSystem);
		return contents.map( item => this.getContentItem(item));
	}

	closeContextMenu = () =>{
		this.setState({
			showContextMenu: false
		});
	};

	onContextMenuOpen = (e, item) =>{
		e.stopPropagation();
		this.closeContextMenu();
		if(item.type === entrytype.FILE){
			let win = window.open(item.link, '_blank');
			win.focus();
		}
		else if(item.type === entrytype.FOLDER){
			this.props.onFolderOpen(item);
		}

	};

	onItemDelete = (e, item ) =>{
		e.stopPropagation();
		this.closeContextMenu();
		this.props.onItemDelete(item);
	};

	onContextMenuGetInfo = (e, item) =>{
		e.stopPropagation();
		this.closeContextMenu();
		this.props.onGetInfoClick(item);
	};

	getContextMenu(item, mouseX, mouseY){
		return(
			<div className={classnames.contectMenuContainer} style={{top: mouseY, left: mouseX}}>
				<div
					className={classnames.contectMenuItem}
					onMouseDown={e => this.onContextMenuOpen(e, item)}
				>
					Open
				</div>

				<div
					className={classnames.contectMenuItem}
					onMouseDown={e => this.onContextMenuGetInfo(e, item)}
				>
					Get info
				</div>

				<div
					className={classnames.contectMenuItemDelete}
					onMouseDown={e => this.onItemDelete(e, item)}
				>
					Delete
				</div>
			</div>
		)
	};

	render() {
		const { path, fileSystem, onNavBarUpLevelClick, onAddNewItemClick, onNavBarItemClick} = this.props;
		const { showContextMenu, contextMenuItem, mouseX, mouseY} = this.state;
		return (
			<div className={classnames.container} onMouseDown={() => {this.setState({showContextMenu: false})}}>
				<NavBar
					path={path}
					onNavBarUpLevelClick={onNavBarUpLevelClick}
					onNavBarItemClick={onNavBarItemClick}
				/>
				{(showContextMenu) ? this.getContextMenu(contextMenuItem, mouseX, mouseY) : null}
				<div className={classnames.viewContainer}>
					{this.getViewContainer(path, fileSystem)}
					<div className={classnames.addNewItem} onClick={() => onAddNewItemClick(path)}>
						<img className={classnames.addNewItemImage} src={plus} />
					</div>
				</div>
			</div>
		)
	}
};

export default FilesAndFolders;