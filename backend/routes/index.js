const express = require('express');
const blogs = require('./blogs/blogs');

const router = express.Router({ mergeParams: true });

const downloader = require('./downloads');

router.use('/blogs', blogs);

router.get('/download/:filename', downloader);

module.exports = router;
