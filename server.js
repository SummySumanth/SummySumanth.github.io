// Libs
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

// Utils
import secrets from './app/backend/utils/secrets.js';
import apiRoutes from './app/backend/routes/index.js';

const global = {
  applicationSecrets: secrets,
};

dotenv.config();
const app = express();

const corsOptions = {
  origin: ['http://localhost:5001', 'http://localhost:8080', 'https://summy.dev', 'https://www.summy.dev', 'https://summydev.github.io', 'https://summydev.github.io/summy.dev/'],
  optionsSuccessStatus: 200,
};


const PORT = 8080;

// Serve static assets (CSS, JS, images, etc.) from the 'dist' folder
app.use(express.static(path.join(__dirname, './dist')));

// To allow cross-origin requests and safely handle CORS - Cross-Origin Resource Sharing
app.use(cors(corsOptions));

app.get('/health', (req, res) => {
  res.send('Server is healthy');
});

// API routes
app.use('/api', apiRoutes);

// Middleware to serve 'index.html' for all other routes
app.get('*', (req, res) => {
  console.log('reaching WILDCARD route', req);
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.listen(process.env.PORT || PORT, () => {
  if (global.applicationSecrets.NODE_ENV === 'development') {
    console.clear();
  }
  console.log(`🚀 Server is now running at port ${PORT} on localhost successfully - Current Environment Mode: ${global.applicationSecrets.NODE_ENV}`);

  console.table({
    PORT,
    'Environment Type': global.applicationSecrets.NODE_ENV,
  });
});
