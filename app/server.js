const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

global.applicationSecrets = require('./backend/utils/secrets');

dotenv.config();
const app = express();
const apiRoutes = require('./backend/routes');

const PORT = 8080;

// Serve static assets (CSS, JS, images, etc.) from the 'dist' folder
app.use(express.static(path.join(__dirname, './../dist')));

app.get('/health', (req, res) => {
  res.send('Server is healthy');
});

// API routes
app.use('/api', apiRoutes);

// Middleware to serve 'index.html' for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './../dist', 'index.html'));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`🚀 Server is now running at port ${PORT} on localhost successfully - Current Environment Mode: ${global.applicationSecrets.NODE_ENV}`);

  console.table({
    PORT,
    'Environment Type': global.applicationSecrets.NODE_ENV,
  });
});
