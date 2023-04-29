const express = require('express');
const router = express.Router();
const { resumeDownloader } = require('../controllers/downloaders/downloaders');

router('/resume', resumeDownloader);