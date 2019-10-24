import React,{ Component } from 'react';
import classnames from 'classnames';
import Project from '../innerItems/project.jsx';
import ProjectContents from '../../../../assets/contents/projects';
import Contact from '../innerItems/contact.jsx';
import '../../styles/contentContainer.scss';


const styles = {
  contentItem : 'contentItem',
  contentHeader : 'contentHeader',
  contentHeaderActive : 'contentHeaderActive',
  contentContainer: 'contentContainer',
  contentItemContainer: 'contentItemContainer',
  contentEndFin: 'contentEndFin',
};

class SideBar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      inViewPortContent : 'projects'
    };
  }

  getActiveContent = () =>{

  };

  handleScrollChange = (e) =>{
    const topRange = 0;
    const bottomRange = window.innerHeight*0.75;
    let projectsTop = this.props.references.projects.current.getBoundingClientRect().top;
    let techStackTop = this.props.references.techStack.current.getBoundingClientRect().top;
    let experiencesTop = this.props.references.experiences.current.getBoundingClientRect().top;
    let certificatesTop = this.props.references.certificates.current.getBoundingClientRect().top;
    let articlesTop = this.props.references.articles.current.getBoundingClientRect().top;
    let feedsTop = this.props.references.feeds.current.getBoundingClientRect().top;
    let contactTop = this.props.references.contact.current.getBoundingClientRect().top;

    if(topRange <= projectsTop && projectsTop  < bottomRange && this.props.currentActiveContent !== 'projects'){
      this.props.changeActiveContent('projects');
    }
    if(topRange < techStackTop && techStackTop < bottomRange && this.props.currentActiveContent !== 'techStack'){
      this.props.changeActiveContent('techStack');
    }
    if(topRange < experiencesTop && experiencesTop < bottomRange  && this.props.currentActiveContent !== 'experiences'){
      this.props.changeActiveContent('experiences');
    }
    if(topRange < certificatesTop && certificatesTop < bottomRange  && this.props.currentActiveContent !== 'certificates'){
      this.props.changeActiveContent('certificates');
    }
    if(topRange < articlesTop && articlesTop < bottomRange && this.props.currentActiveContent !== 'articles'){
      this.props.changeActiveContent('articles');
    }
    if(topRange < feedsTop && feedsTop < bottomRange && this.props.currentActiveContent !== 'feeds'){
      this.props.changeActiveContent('feeds');
    }
    if(topRange < contactTop && contactTop < bottomRange && this.props.currentActiveContent !== 'contact'){
      this.props.changeActiveContent('contact');
    }

  };
  render(){
    const projectsHeaderStyle = classnames(styles.contentHeader, { [styles.contentHeaderActive] : this.props.currentActiveContent === 'projects'});
    const techStackHeaderStyle = classnames(styles.contentHeader, { [styles.contentHeaderActive] : this.props.currentActiveContent === 'techStack'});
    const experiencesHeaderStyle = classnames(styles.contentHeader, { [styles.contentHeaderActive] : this.props.currentActiveContent === 'experiences'});
    const certificatesHeaderStyle = classnames(styles.contentHeader, { [styles.contentHeaderActive] : this.props.currentActiveContent === 'certificates'});
    const articlesHeaderStyle = classnames(styles.contentHeader, { [styles.contentHeaderActive] : this.props.currentActiveContent === 'articles'});
    const feedsHeaderStyle = classnames(styles.contentHeader, { [styles.contentHeaderActive] : this.props.currentActiveContent === 'feeds'});
    const contactHeaderStyle = classnames(styles.contentHeader, { [styles.contentHeaderActive] : this.props.currentActiveContent === 'contact'});
    return(
      <div
        className={styles.contentContainer} id={'hello'}
        onScrollCapture={this.handleScrollChange}
      >
          <div className={styles.contentItem} ref={this.props.references.projects} >
            <div className={projectsHeaderStyle}>Projects</div>
            <div className={styles.contentItemContainer}>
              {
                ProjectContents.map(project =>
                  <Project
                    data={project}
                  />
                )
              }
            </div>
          </div>

          <div className={styles.contentItem} ref={this.props.references.techStack}>
            <div className={techStackHeaderStyle}>Tech Stack</div>
            <div className={styles.contentItemContainer}>
              Ushhh! cookies are still in the oven, don't rush!
            </div>
          </div>

          <div className={styles.contentItem} ref={this.props.references.experiences}>
            <div className={experiencesHeaderStyle}>Experiences</div>
            <div className={styles.contentItemContainer}>
              Ushhh! cookies are still in the oven, don't rush!
            </div>
          </div>

          <div className={styles.contentItem} ref={this.props.references.certificates}>
            <div className={certificatesHeaderStyle}>Certificates</div>
            <div className={styles.contentItemContainer}>
              Ushhh! cookies are still in the oven, don't rush!
            </div>
          </div>

          <div className={styles.contentItem} ref={this.props.references.articles}>
            <div className={articlesHeaderStyle}>Articles</div>
            <div className={styles.contentItemContainer}>
              Ushhh! cookies are still in the oven, don't rush!
            </div>
          </div>

          <div className={styles.contentItem} ref={this.props.references.feeds}>
            <div className={feedsHeaderStyle}>Feeds</div>
            <div className={styles.contentItemContainer}>
              Ushhh! cookies are still in the oven, don't rush!
            </div>
          </div>

          <div className={styles.contentItem} ref={this.props.references.contact}>
            <div className={contactHeaderStyle}>Contact</div>
            <div className={styles.contentItemContainer}>
              <Contact

              />
            </div>
          </div>

          <div className={styles.contentEndFin}>
            Fin...
            <br />
            <span className={'subtextFin'}> Thanks for visiting 🤗</span>
            <br />
          </div>
      </div>
    );
  }
}

export default SideBar;
