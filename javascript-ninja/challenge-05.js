/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ['Ninja', 23, {}, [1,2,3], function(){}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function arrayIndice(newArray, i){
    return newArray[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArray = ['mvfsilva', undefined, {nome: 'Marcus', idade: 23}, function(){}, 20];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(arrayIndice(newArray, 0));
console.log(arrayIndice(newArray, 1));
console.log(arrayIndice(newArray, 2));
console.log(arrayIndice(newArray, 3));
console.log(arrayIndice(newArray, 4));



/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
var book = function(nameBook){
    var allBooks = {
        'Harry Potter e a pedra filosofal': {
            quantidadePaginas: 190,
            autor:'J. K. Rowling',
            editora: 'Rocco'
        },
        'Clean Code':{
            quantidadePaginas: 431 ,
            autor:'Robert C. Martin',
            editora: 'Prentice Hall PTR'
        },
        'Senhor dos Aneis e a sociedade do Anel':{
            quantidadePaginas: 434,
            autor:'J. R. R. Tolkien',
            editora: 'Martins Fontes Edito'
        }
    };
    return !nameBook ? allBooks :  allBooks[nameBook];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Clean Code';
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + bookName + ' é '+ book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro  " + bookName + " foi publicado pela editora " + book(bookName).editora + ".");
