const express = require('express');

const { fetchBlogsList } = require('../../controllers/blogs/fetchBlogDetails');

const router = express.Router({ mergeParams: true });

router.get('/getBlogsList', (request, response) => {
  fetchBlogsList()
    .then((res) => {
      response.send(res);
    })
    .catch((err) => {
      response.send(new Error(err));
    });
});

module.exports = router;
