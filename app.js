var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/coderdojo', function(req, res){
  res.send('Be cool');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});