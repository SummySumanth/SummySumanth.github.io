import React, { Component } from 'react';
import DynamicClassnames from 'classnames';

import { fileType , entrytype} from '../../../enums/index';
import { file, folder } from '../assets/images/filesAndFolders';
import {close, plus,} from '../../../assets/images/common';

import '../styles/fileInfoWindow.scss';

const classnames = {
	fileInfoContainer : 'FunFileExplorer_FileInfoContainer',
	fileInfoContent : 'FunFileExplorer_FileInfoContent',
	closeBtn : 'FunFileExplorer_closeBtn',
	fileInfoTableField : 'FunFileExplorer_FileInfoField',
	fileInfoTableValue : 'FunFileExplorer_FileInfoValue',
	itemIcon : 'FunFileExplorer_item_icon',
	fileText : 'FunFileExplorer_item_fileText',
};

let fileInfoDragDelayFlag = true;
let dragInfoWindow = false;
let dragInfoWindowInitialX;
let dragInfoWindowInitialY;


class FileInfoWindow extends Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}

	getFileIcon = fileType =>{
		return (
			<div className={classnames.itemIcon}>
				<div>
					<img src={file}/>
				</div>
				<div className={classnames.fileText}>.{fileType}</div>
			</div>
		);
	};

	getFolderIcon(){
		return (
			<div className={classnames.itemIcon}>
				<div>
					<img src={folder}/>
				</div>
			</div>
		);
	}

	handleFileInfoOnMouseMove = (e) =>{
		e.preventDefault();
		if(dragInfoWindow && fileInfoDragDelayFlag){
			fileInfoDragDelayFlag = false;
			let element = this.refs.infoWindow;
			let moveX = dragInfoWindowInitialX - e.clientX;
			let moveY = dragInfoWindowInitialY - e.clientY;
			dragInfoWindowInitialX = e.clientX;
			dragInfoWindowInitialY = e.clientY;
			element.style.top = (element.offsetTop - moveY) + 'px';
			element.style.left = (element.offsetLeft - moveX) + 'px';
			setTimeout(()=>{
				fileInfoDragDelayFlag = true;
			}, 100);

		}
	};

	handleFileInfoWindowMouseDown = (e) =>{
		if(e.button === 0){
			dragInfoWindow = true;
			dragInfoWindowInitialX = e.clientX;
			dragInfoWindowInitialY = e.clientY;
		}
	};

	handleFileInfoWindowMouseUp = (e) =>{
		dragInfoWindow = false;
	};

	render() {
		const { onCloseHandler } = this.props;
		const { title, type, creatorName, createdDate, size, fileType} = this.props.infoWindowItem;
		return(
			<div
				className={classnames.fileInfoContainer}
				onMouseDown={this.handleFileInfoWindowMouseDown}
				onMouseUp={this.handleFileInfoWindowMouseUp}
				onMouseMove={(this.handleFileInfoOnMouseMove)}
				ref='infoWindow'
			>
				<img
					className={classnames.closeBtn}
					onClick={onCloseHandler}
					src={close}
				/>
				<div className={classnames.fileInfoContent}>
					File Info
				</div>
				<div className={classnames.fileInfoContent}>
					{
						(type === entrytype.FOLDER)
							?
							this.getFolderIcon()
							:
							this.getFileIcon(fileType)
					}
				</div>

				<table>
					<tr>
						<td className={classnames.fileInfoTableField}>Name:</td>
						<td className={classnames.fileInfoTableValue}>{title}</td>
					</tr>
					{
						(type === entrytype.FILE)
							?
							<tr>
								<td className={classnames.fileInfoTableField}>Size:</td>
								<td className={classnames.fileInfoTableValue}>{size}</td>
							</tr>
							:
							null
					}
					<tr>
						<td className={classnames.fileInfoTableField}>Creator Name:</td>
						<td className={classnames.fileInfoTableValue}>{creatorName}</td>
					</tr>
					<tr>
						<td className={classnames.fileInfoTableField}>Created Date:</td>
						<td className={classnames.fileInfoTableValue}>{createdDate}</td>
					</tr>
				</table>
			</div>
		);
	}
};

export default FileInfoWindow;