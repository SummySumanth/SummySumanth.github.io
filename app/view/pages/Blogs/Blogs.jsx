import React, { useState, useEffect } from 'react';
import { getBlogsList } from '../../utils/apiCalls/blogs';
import BlogCard from './components/BlogCard';

import './Blogs.css';

const Blogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogsList, setBlogsList] = useState([]);
  useEffect(() => {
    setLoading(true);
    getBlogsList()
      .then((response) => {
        console.log('blogs list is ', response);
        setBlogsList(response);
      })
      .catch((error) => {
        console.log('Error in fetching blogs list: ', error);
      })
      .finally(() => {
        setLoading(false);
      }, []);
  }, []);
  return (
    <div styleName="page-container">
      {
        blogsList.map((blog) => (
          <BlogCard
            key={blog.id}
            categories={blog.category}
            link={blog.link}
            title={blog.title}
            imageSrc={blog.imageSrc}
          />
        ))
      }
    </div>
  );
};

export default Blogs;
