(function (win, doc) {
  'use strict';
  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonOperations = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  Array.prototype.forEach.call($buttonNumbers, function(button){
    button.addEventListener('click', handClickNumber, false);
  });

  Array.prototype.forEach.call($buttonOperations, function(button){
    button.addEventListener('click', handClickOperation, false);
  });

  $buttonCE.addEventListener('click', handClickCE, false);
  $buttonEqual.addEventListener('click', handClickEqual, false);

  function handClickNumber() {
    $visor.value += this.value;
  }

  function handClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handClickCE() {
    $visor.value = 0;
  }

  function isLastItemOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function(operator){
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsAnOperator(number) {
    if(isLastItemOperation(number)){
      return number.slice(0, -1);
    }
    return number;
  }

  function handClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var values = $visor.value.match(/\d+[+x÷-]?/g);

    var result = values.reduce(function(accumulated, actual){

      var firstValue = accumulated.slice(0, -1);
      var operator = accumulated.split('').pop();
      var lastValue = removeLastItemIfItIsAnOperator(actual);
      var lastOperator = isLastItemOperation(actual) ? actual.split('').pop() : '';

      switch(operator) {
        case '+':
          return ( Number(firstValue) + Number( lastValue ) ) + lastOperator;
        case '-':
          return ( Number(firstValue) - Number( lastValue ) ) + lastOperator;
        case 'x':
          return ( Number(firstValue) * Number( lastValue ) ) + lastOperator;
        case '÷':
          return ( Number(firstValue) / Number( lastValue ) ) + lastOperator;
      }

      return accumulated + actual;
    });
    $visor.value = result;
  }

})(window, document);
