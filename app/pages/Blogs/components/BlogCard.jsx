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
        <img className={styles.image} src={imageSrc} alt={title} />        
        <div className={styles.textContainer}>
          <div className={styles.topLineText}>
          <div className={styles.blogTitle}>
            {title}
          </div>
          <OpenInNewIcon alt="Open Blog" className={styles.openInNewIcon}/>
          </div>
          {
            (
              <div className={styles.categoriesContainer}>
                {
              categories.map((category) => (
                <div className={styles.category} key={category}>
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
