import React from 'react';
import './BlogCard.css';

const BlogCard = (props) => {
  const {
    categories, link, title, imageSrc,
  } = props;
  return (
    <a target="_blank" styleName="container" href={link} rel="noreferrer">
      <img styleName="imageBG" src={imageSrc} alt={title} />
      <div styleName="detailsContainer">
        <img styleName="image" src={imageSrc} alt={title} />
        <div styleName="textContainer">
          <div>
            {title}
          </div>
          <div styleName="categoriesContainer">
            {
            categories.map((category) => (
              <div styleName="category" key={category}>
                {category}
              </div>
            ))
          }
          </div>

        </div>
      </div>

    </a>
  );
};

export default BlogCard;
