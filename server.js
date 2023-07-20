const express = require('express');
const path = require('path');

const apiRoutes = require('./app/backend/routes');

const app = express();
const PORT = 8080;

// Serve static assets (CSS, JS, images, etc.) from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// API routes
app.use('/api', apiRoutes);

// Middleware to serve 'index.html' for all other routes
app.get('*', (req, res) => {
  console.log('Reached wild request -> ', req.url);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.clear();
  console.log(`Server is now running at port ${PORT} on localhost successfully`);
});