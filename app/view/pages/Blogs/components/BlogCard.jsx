import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from './BlogCard.module.css';

const BlogCard = (props) => {
  const {
    categories, link, title, imageSrc,
  } = props;
  return (
    <a target="_blank" className={styles.container} href={link} rel="noreferrer">
      <div className={styles.detailsContainer}>        
        <img className="image" src={imageSrc} alt={title} />        
        <div className="textContainer">
          <div className="topLineText">
          <div className="blogTitle">
            {title}
          </div>
          <OpenInNewIcon alt="Open Blog" className={styles.openInNewIcon}/>
          </div>
          {
            (
              <div className="categoriesContainer">
                {
              categories.map((category) => (
                <div className="category" key={category}>
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
