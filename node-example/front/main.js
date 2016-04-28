(function() {
  'use strict';

  var ajax = new XMLHttpRequest();
  ajax.open('POST', 'http://localhost:3000/user');
  ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  ajax.send('username=roberto&age=32');

  console.log('Cadastrando usuário...');
  ajax.onreadystatechange = function(){
    if(ajax.readyState === 4)
      console.log('Usuario cadastrado!', ajax.responseText);
  };

  var get = new XMLHttpRequest();
  get.open('GET', 'http://localhost:3000/user/roberto');
  get.send();
  get.onreadystatechange = function(){
    if(get.readyState === 4)
      console.log(JSON.parse(get.responseText));
  };
})();

