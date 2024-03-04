const express = require('express');
const fetchBlogDetails = require('../../controllers/blogs/fetchBlogDetails');

const router = express.Router({ mergeParams: true });

router.get('/getBlogsList', (request, response) => {
  fetchBlogDetails()
    .then((res) => {
      response.send(res.data);
    })
    .catch((err) => {
      response.send({
        message: 'Error in fetching blog details',
        errorFromApi: err,
      });
    });
});

module.exports = router;
