'use strict';

var express = require('express'),
    posts=require('./mock/posts.json');

var app = express();

app.get('/', function(req, res) {
  res.send('<h1>I love baby !bear!!!!</h1>');
});

app.get('/blog', function(req, res) {
  res.send(posts)
});

app.listen(3000, function() {
  console.log('localhost listening to port 30001')
});
