const express = require('express');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const apiRoutes = require('./backend/routes');

const app = express();
const PORT = 8080;

const mediumToken = '216323bc4436c388b91c0be265435515d0ed253a492cfc1d5673a942d1b602a58';

const initializeServer = () => {
  console.log('🏁 ### INITIALISING SERVER');

  console.log('📡 ### Fetching Medium User Profile');
  axios({
    method: 'get',
    url: 'https://api.medium.com/v1/me',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Accept-Charset': 'utf-8',
      authorization: `Bearer ${mediumToken}`,
    },
    // : `Bearer ${mediumToken}`,
  }).then((response) => {
    console.log('🟢 Medium API response:', response.data);
  }).catch((error) => {
    console.log('❗️ Medium API error:', error);
  });
};

initializeServer();

// Serve static assets (CSS, JS, images, etc.) from the 'dist' folder
app.use(express.static(path.join(__dirname, './../dist')));

// API routes
app.use('/api', apiRoutes);

// Middleware to serve 'index.html' for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './../dist', 'index.html'));
});

app.listen(process.env.PORT || PORT, () => {
  console.clear();
  console.log(`Server is now running at port ${PORT} on localhost successfully`);
});
