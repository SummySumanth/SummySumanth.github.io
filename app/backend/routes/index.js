const express = require('express');
const router = express.Router({mergeParams: true});

const downloader = require('./downloads');

router.get('/test', (request, response) =>{
    console.log('request reached !')
    response.send('Hello from the other side !');
});

router.get('/download/:filename', downloader);

module.exports = router;
