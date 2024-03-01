const express = require('express');

const router = express.Router({ mergeParams: true });

const downloader = require('./downloads');

router.get('/test', (request, response) => {
  response.send('Hello from the other side !');
});

router.get('/test-env-keys', (request, response) => {
  console.log('###### PRINTING ENV KEYS ######', process.env);
  response.send(process.env);
});

router.get('/download/:filename', downloader);

module.exports = router;
