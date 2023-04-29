const express = require('express');
const router = express.Router();

const downloads = require('./downloads');

router.get('/test', (request, response) =>{
    response.send('Hello from the other side !');
});

router.get('/download', downloads);

module.exports = router;
