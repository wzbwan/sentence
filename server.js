var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    console.log('/ call')
  res.sendFile( __dirname+'/public/index.html');
});

var server = app.listen(3001, function () {
    console.log('Listening at http://');
});