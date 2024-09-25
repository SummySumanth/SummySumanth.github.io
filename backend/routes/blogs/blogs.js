const express = require('express');
const { htmlToJson } = require('html-to-json-converter-44');

const { fetchBlogsList } = require('../../controllers/blogs/fetchBlogDetails');

const router = express.Router({ mergeParams: true });

router.get('/getBlogsList', (request, response) => {
  fetchBlogsList()
    .then((res) => {
      const blogList = res.items.map((item) => {
        const src = htmlToJson(`<div> ${item.content} </div>`, false);

        return {
          title: item.title,
          link: item.link,
          category: item.category,
          imageSrc: src.children.find((child) => child.tag === 'figure').children[0].src,
        };
      });
      response.send(blogList);
    })
    .catch((err) => {
      response.send(new Error(err));
    });
});

module.exports = router;
