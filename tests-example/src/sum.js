'use strict';

function sum(num1, num2) {
  if (isEmpty(num1) || isEmpty(num2)){
    return new Error('Passe dois números por parâmetro');
  }

  if(isNaN(num1) || isNaN(num2)){
    return new Error('Os parâmetros devem ser números');
  }
  return num1 + num2;
}

function isEmpty(arg) {
  return !arg;
}

module.exports = sum;
