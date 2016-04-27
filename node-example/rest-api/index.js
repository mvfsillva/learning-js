'use strict';
var express = require('express');
var cors = require('cors');
var app = express();

var users = {
  joao: {
    nome: 'João',
    idade: 30
  },
  maria: {
    nome: 'Maria',
    idade: 22
  },
  marcus:{
    nome: 'Marcus',
    idade: 24
  }
};

app.use(cors());

app.get('/', function (request, response) {
  response.send('<h1>Home</h1>');
});

app.get('/user', function(request, response){
  response.send('User');
});

app.get('/user/:username', function(request, response){
  var username = request.params.username;
  if(users[username])
    return response.json(users[username]);
  response.status(404).json({error: 'Usuario não encontrado!'});
});

app.listen(3000);
