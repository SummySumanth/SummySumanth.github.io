import express from 'express';
import downloader  from './downloads.js';
import blogs  from './blogs/blogs';

const router = express.Router({ mergeParams: true });

router.use('/blogs', blogs);

router.get('/download/:filename', downloader);

export default router;
