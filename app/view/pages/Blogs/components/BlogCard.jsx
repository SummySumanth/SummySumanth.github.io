import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from './BlogCard.css';

const BlogCard = (props) => {
  const {
    categories, link, title, imageSrc,
  } = props;
  return (
    <a target="_blank" styleName="container" href={link} rel="noreferrer">
      <div styleName="detailsContainer">        
        <img styleName="image" src={imageSrc} alt={title} />        
        <div styleName="textContainer">
          <div styleName="topLineText">
          <div styleName="blogTitle">
            {title}
          </div>
          <OpenInNewIcon alt="Open Blog" className={styles.openInNewIcon}/>
          </div>
          
          {
            (
              <div styleName="categoriesContainer">
                {
              categories.map((category) => (
                <div styleName="category" key={category}>
                  {category}
                </div>
              ))
            }
              </div>
            )
          }

        </div>
      </div>
    </a>
  );
};

export default BlogCard;
