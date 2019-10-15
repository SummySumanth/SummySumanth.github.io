import React from 'react';

import { arrowCircle } from '../../../assets/images/common'
import '../styles/navbar.scss';

const classnames = {
	navBarContainer : 'FunFileExplorer_NavBarContainer',
	pathContainer : 'FunFileExplorer_pathContainer',
	searchFieldContainer : 'FunFileExplorer_searchFieldContainer',
	pathImg : 'FunFileExplorer_pathImg',
	pathImgDisabled : 'FunFileExplorer_pathImg_disabled',
	pathTextContainer : 'FunFileExplorer_pathTextContainer',
	pathText : 'FunFileExplorer_pathText',
	pathHolder : 'FunFileExplorer_pathHolder',
};

function NavBar(props){
	const { path, onNavBarUpLevelClick} = props;

	const getPathComponents = path =>{
		const pathsArray = path.split('/');
		return pathsArray.map((item, index) =>{
			return(
				<div className={classnames.pathHolder} key={item} onClick={() => props.onNavBarItemClick(item, index)}>
					<div className={classnames.pathText}>
						{item}
					</div>
					<div className={classnames.pathText}>
						/
					</div>
				</div>
			);
		});

	};

	const getBackButton = path =>{
		if(path !== 'root'){
			return <img className={classnames.pathImg} src={arrowCircle} onClick={() => {onNavBarUpLevelClick(path)}}/>
		}
		return <img className={classnames.pathImgDisabled} src={arrowCircle} />;
	};

	return (
		<div className={classnames.navBarContainer}>
			<div className={classnames.pathContainer}>
				{ getBackButton(path)}
				<div className={classnames.pathTextContainer}>{getPathComponents(path)}</div>
			</div>
			{/*<div className={classnames.searchFieldContainer}>Search Field</div>*/}
		</div>
	)
};

export default NavBar;