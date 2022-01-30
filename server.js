let express = require('express');
let routes = require('./routes');

let app = express();

app.use(express.static(__dirname + '/dist'));

app.use('/api', routes);

app.get('*', function(req, res){
    res.sendFile(__dirname + '/dist/index.html');
  });

app.listen(8080, () =>{
    console.log('Server is now running at post 8080 in localhost successfully');
})