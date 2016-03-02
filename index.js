var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('in /');
    res.send('Hello World!');
});

app.use(express.static(__dirname + '/public'));

app.get('/angular', function(req, res){
    console.log('in /angular');
    res.redirect('/index.html');
});


app.listen(3000, function () {
  console.log('http://localhost:3000 is ready');
});