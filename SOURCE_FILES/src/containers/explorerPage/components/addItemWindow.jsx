import React, { Component } from 'react';
import DynamicClassnames from 'classnames';

import { fileType , entrytype} from '../../../enums/index';
import { file, folder } from '../assets/images/filesAndFolders';
import {close, plus,} from '../../../assets/images/common';

import '../styles/addItemWindow.scss';

const classnames = {
	Container : 'FunFileExplorer_AddItemContainer',
	Content : 'FunFileExplorer_AddItemContent',
	TableField : 'FunFileExplorer_AddItemField',
	TableValue : 'FunFileExplorer_AddItemValue',
	closeBtn : 'FunFileExplorer_closeBtn',
	itemIcon : 'FunFileExplorer_item_icon',
	fileText : 'FunFileExplorer_item_fileText',
	grabbing	: 'grabbing',
	switchContainer : 'FunFileExplorer_AddItemSwitchContainer',
	switchItem : 'FunFileExplorer_AddItemSwitchItem',
	switchHighlight : 'FunFileExplorer_AddItemSwitchItemHighLight',
	fieldsContainer : 'FunFileExplorer_AddItemFieldsContainer',
	createButton : 'FunFileExplorer_AddItemCreateBtn',
	createButtonDeactivate : 'FunFileExplorer_AddItemCreateBtnDeactivate',
	inputContainer : 'FunFileExplorer_AddItemFieldInputContainer',
	inputField : 'FunFileExplorer_AddItemFieldInput',
};

let addItemDragDelayFlag = true;
let dragWindow = false;
let dragWindowInitialX;
let dragWindowInitialY;


class FileInfoWindow extends Component{

	constructor(props){
		super(props);
		this.state = {
			item : {
				title : '',
				creatorName : '',
				createdDate : '',
				size : '',
				type : entrytype.FILE,
				fileType : fileType.PDF,
			},
			isValid: false
		}
	}

	handleMouseMove = (e) =>{
		e.preventDefault();
		if(dragWindow && addItemDragDelayFlag){
			addItemDragDelayFlag = false;
			let element = this.refs.addItemWindow;
			let moveX = dragWindowInitialX - e.clientX;
			let moveY = dragWindowInitialY - e.clientY;
			dragWindowInitialX = e.clientX;
			dragWindowInitialY = e.clientY;
			element.style.top = (element.offsetTop - moveY) + 'px';
			element.style.left = (element.offsetLeft - moveX) + 'px';
			setTimeout(()=>{
				addItemDragDelayFlag = true;
			}, 100);
		}
	};

	handleMouseDown = (e) =>{
		if(e.button === 0){
			dragWindow = true;
			dragWindowInitialX = e.clientX;
			dragWindowInitialY = e.clientY;
		}
	};

	handleMouseUp = (e) =>{
		console.log('handling mouse up');
		dragWindow = false;
	};

	setItemType = type =>{
		this.setState(prevState => {
			return {
				...prevState,
				item : {
					...prevState.item,
					type
				}
			}
		});
	}

	getSwitch = () =>{
		const selection = this.state.item.type;
		let fileClassName,folderClassName;
		if(selection === entrytype.FOLDER){
			folderClassName = DynamicClassnames(classnames.switchItem, classnames.switchHighlight);
			fileClassName = DynamicClassnames(classnames.switchItem);
		} else {
			fileClassName = DynamicClassnames(classnames.switchItem, classnames.switchHighlight);
			folderClassName = DynamicClassnames(classnames.switchItem);
		}
		return (
			<div className={classnames.switchContainer}>
				<div className={fileClassName} onClick={() => this.setItemType(entrytype.FILE)}>
					File
				</div>
				<div className={folderClassName} onClick={() => this.setItemType(entrytype.FOLDER)}>
					Folder
				</div>
			</div>
		);
	};

	changeTextHandler = (e, type) =>{
		const value = e.target.value;
		this.setState(prevState =>{
			return {
				...prevState,
				item : {
					...prevState.item,
					[type] : value,
				}
			}
		});

		if(
			this.state.item.title !== '' &&
			this.state.item.creatorName !== '' &&
			this.state.item.createdDate !== '' &&
			( this.state.item.type === entrytype.FILE ? (this.state.item.size !== '' && this.state.item.fileType !== '') : true)
		){
			this.setState({
				isValid : true
			});
		} else{
			this.setState({
				isValid : false
			});
		}

	};

	dropdownHandler = e =>{
		this.changeTextHandler(e , 'fileType');
	};

	getFields = () =>{
			return(
				<>
					<div className={classnames.inputContainer}>
						<input
							className={classnames.inputField}
							value={this.state.item.title}
							placeholder={'Name'}
							onChange={e => this.changeTextHandler(e, 'title')}
						/>
					</div>
					<div className={classnames.inputContainer}>
						<input
							className={classnames.inputField}
							value={this.state.item.creatorName}
							placeholder={'Creator'}
							onChange={e => this.changeTextHandler(e, 'creatorName')}
						/>
					</div>

					{
						(this.state.item.type === entrytype.FILE)
							?
							<div className={classnames.inputContainer}>
								<input
									className={classnames.inputField}
									value={this.state.item.size}
									placeholder={'Size'}
									onChange={e => this.changeTextHandler(e, 'size')}
								/>
							</div>
							:
							null
					}

					<div className={classnames.inputContainer}>
						<input
							className={classnames.inputField}
							value={this.state.item.createdDate}
							placeholder={'Date (DD/MM/YYYY) '}
							onChange={e => this.changeTextHandler(e, 'createdDate')}
						/>
					</div>

					{
						(this.state.item.type === entrytype.FILE)
							?
							<div className={classnames.inputContainer}>
								<select className={classnames.inputField} onChange={this.dropdownHandler}>
									<option value={fileType.PDF}>pdf</option>
									<option value={fileType.JPG}>jpg</option>
									<option value={fileType.DOCX}>docx</option>
									<option value={fileType.TS}>ts</option>
									<option value={fileType.PNG}>png</option>
									<option value={fileType.TXT}>txt</option>
								</select>
							</div>
							:
							null
					}
				</>
			);
	};

	onCreateClickHandler = () =>{
		if(this.state.isValid){
			this.props.onCreate(this.state.item);
			this.props.onCloseHandler();
		} else {
			alert('please check if all fields are filled');
		}
	};


	render() {
		const { onCloseHandler } = this.props;
		const createBtnClass = DynamicClassnames(classnames.createButton , { 'FunFileExplorer_AddItemCreateBtnDeactivate' : !this.state.isValid })
		return(
			<div
				className={classnames.Container}
				onMouseDown={this.handleMouseDown}
				onMouseUp={this.handleMouseUp}
				onMouseMove={(this.handleMouseMove)}
				ref='addItemWindow'
			>
				<img
					className={classnames.closeBtn}
					onClick={onCloseHandler}
					src={close}
				/>
				<div className={classnames.Content}>
					Create New
				</div>

				{this.getSwitch()}

				<div className={classnames.fieldsContainer}>

					{this.getFields()}

					<div className={createBtnClass} onClick={this.onCreateClickHandler}>
						Create
					</div>
				</div>
			</div>
		);
	}
};

export default FileInfoWindow;