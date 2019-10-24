import React,{ Component } from 'react';
import classnames from 'classnames';
import '../../styles/project.scss';

const styles = {
  container : 'projectsContainer',
  detailsHolder: 'projectDetailsHolder',
  title: 'projectTitle',
  description: 'projectDescription',
  links: 'projectLinks',
};

class Project extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div
        className={styles.container}
         style={{
           backgroundImage: `url(${this.props.data.titleBG})`,
         }}
      >
        <div className={styles.detailsHolder}>
          <div
            className={styles.title}
          >{this.props.data.title}</div>
          <div className={styles.description}>{this.props.data.description}</div>
          {/*<div>Achievements</div>*/}
          <div className={styles.links}>Links </div>
        </div>
      </div>
    );
  }
}

export default Project;
