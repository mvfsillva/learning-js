'use strict';
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var users = [
  {
    username: 'joao',
    name: 'João',
    age: 30
  },
  {
    username: 'maria',
    name: 'Maria',
    age: 22
  }
];

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.get('/', function (request, response) {
  response.send('<h1>Home</h1>');
});

app.get('/user', function(request, response){
  response.send('User');
});

app.get('/user/:username', function(request, response){
  var username = request.params.username;
  var hasUser = users.some(function(user){
    return user.username === username;
  });

  if(hasUser){
    return response.json(users.filter(function(user){
      return user.username === username;
    }));
  }
  response.status(404).json({error: 'Usuario não encontrado!'});
});

app.post('/user', function(request, response){
  var username = request.body.username;
  var age = request.body.age;
  var user = request.body.user;
  var hasUser = users.some(function(user){
    return user.username === username;
  });

  if(!hasUser){
    users.push({
      username: username,
      age: age,
      user: user
    });
  }

  response.json(users);
});

app.listen(3000);
