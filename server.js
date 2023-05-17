const express = require('express');
const routes = require('./app/backend/routes');
const path = require('path');

let app = express();

app.use('/api', routes);



app.get('*.js', function(req, res, next) {
  console.log('got request for JS');
  console.log('requested url is', req.url);
  // req.url = req.url + '.gz';
  // res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.get('*.css', function(req, res, next) {
  console.log('got request for CSS');
  // req.url = req.url + '.gz';
  // res.set('Conten/t-Encoding', 'gzip');
  console.log('requested url is', req.url);
  res.set('Content-Type', 'text/css');
  next();
});

app.use(express.static(path.join(__dirname, 'dist/assets')));

app.get('*', function(req, res){
  
  console.log('###### sending file ', req.url);
  res.sendFile(__dirname + '/dist/' + req.url);
});

app.listen(8080, () =>{
    console.log('Server is now running at post 8080 in localhost successfully');
})