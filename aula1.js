console.log("Aprendendo JavaScript");
var nome = "Gabriel";
var idade = 18;
var altura = 1.84;
var estudante = true;

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Altura: " + altura);
console.log("Estudante: " + estudante);

//recebendo entrada do usuário
// para receber entrada do usuário no navegador, podemos usar as funções prompt e confirm
// só funciona no navegador, não funciona no Node.js

var nomeUsuario = prompt("Digite seu nome:"); 
var idadeUsuario = prompt("Digite sua idade:"); var idadeUsuario = Number(idadeUsuario); // converte a string retornada pelo prompt para um número
var alturaUsuario = prompt("Digite sua altura:"); var alturaUsuario = Number(alturaUsuario); // converte a string retornada pelo prompt para um número
var estudanteUsuario = confirm("Você é estudante?");

// variaveis 

var a = 10;
let b = 20;
const c = 30;

// var pode ser redeclarada e reatribuida
// let pode ser reatribuida, mas não redeclarada
// const não pode ser redeclarada nem reatribuida

// tipos de dados
var numero = 42; // number
var texto = "Olá, mundo!"; // string
var booleano = true; // boolean
var nulo = null; // null
var indefinido; // undefined        

// operadores
var soma = a + b; // adição
var subtracao = a - b; // subtração
var multiplicacao = a * b; // multiplicação
var divisao = a / b; // divisão
var modulo = a % b; // módulo   
var incremento = a++; // incremento
var decremento = b--; // decremento
var potencia = a ** 2; // potência
var raizQuadrada = Math.sqrt(a); // raiz quadrada

// modulo é o resto da divisão entre dois números

// operadores de comparação
var igual = a == b; // igualdade
var estritamenteIgual = a === b; // igualdade estrita
var diferente = a != b; // desigualdade
var estritamenteDiferente = a !== b;
var maior = a > b; // maior que
var menor = a < b; // menor que
var maiorOuIgual = a >= b; // maior ou igual a
var menorOuIgual = a <= b; // menor ou igual a 

// operadores lógicos
var e = (a > 5) && (b < 30); // operador lógico AND (&& significa "e")
var ou = (a > 5) || (b < 30); // operador lógico OR (|| significa "ou") 
var nao = !(a > 5); // operador lógico NOT (! significa "não")

// estruturas de controle   
if (a > b) {
    console.log("a é maior que b");
} else if (a < b) {
    console.log("a é menor que b");
} else {
    console.log("a é igual a b");
}

switch (a) {
    case 10:
        console.log("a é igual a 10");
        break;
    case 20:
        console.log("a é igual a 20");
        break;
    default:
        console.log("a é diferente de 10 e 20");
}

// loops
for (var i = 0; i < 5; i++) {
    console.log("Valor de i: " + i);
}

var j = 0;
while (j < 5) {
    console.log("Valor de j: " + j);
    j++;
}   

var k = 0;
do {
    console.log("Valor de k: " + k);
    k++;
} while (k < 5);

// for é usado quando sabemos o número de iterações, while é usado quando não sabemos o número de iterações 
// do...while é usado quando queremos garantir que o bloco de código seja executado pelo menos uma vez

//funções
function saudacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saudacao("Gabriel"));

function soma(a, b) {
    return a + b;
}   
console.log(soma(5, 10));


//arrays

var frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // acessa o primeiro elemento do array
console.log(frutas.length); // retorna o número de elementos do array
frutas.push("uva"); // adiciona um elemento ao final do array
console.log(frutas); 
frutas.pop(); // remove o último elemento do array
console.log(frutas);
frutas.shift(); // remove o primeiro elemento do array
console.log(frutas);
frutas.unshift("morango"); // adiciona um elemento no início do array
console.log(frutas);

// para precorrer um array, podemos usar um loop for ou forEach
for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

frutas.forEach(function(fruta) { 
    console.log(fruta);
});

// diferença de for e forEach é que for é mais flexível, pois podemos controlar o índice e a condição de parada
// enquanto forEach é mais simples e legível, mas não permite controle sobre o índice e a condição de parada.

//objetos 

var pessoa = {
    nome: "Gabriel",
    idade: 18,
    altura: 1.84,
    estudante: true
};

console.log(pessoa.nome); // acessa a propriedade nome do objeto pessoa
console.log(pessoa["idade"]); // outra forma de acessar a propriedade idade do objeto pessoa
pessoa.idade = 19; // altera o valor da propriedade idade do objeto pessoa
console.log(pessoa.idade);
pessoa.sexo = "masculino"; // adiciona uma nova propriedade sexo ao objeto pessoa
console.log(pessoa.sexo);
delete pessoa.altura; // remove a propriedade altura do objeto pessoa
console.log(pessoa.altura); // undefined, pois a propriedade altura foi removida

//arrow functions

var saudacaoArrow = (nome) => {
    return "Olá, " + nome + "!";
}

console.log(saudacaoArrow("Gabriel"));

var somaArrow = (a, b) => a + b;
console.log(somaArrow(5, 10));

//arrow functions são uma forma mais concisa de escrever funções, mas não possuem o próprio this, arguments, super ou new.target.
//  Elas são ideais para funções anônimas e callbacks.




// para receber entrada do usuário no Node.js, podemos usar o módulo readline
//precisa desse primeiro bloco sempre que quiser pedir inputs do usuário no Node.js
const readline = require("readline").createInterface({ // createInterface é um método do módulo readline que cria uma interface de leitura e escrita (permite ler e escrever no console)
    input: process.stdin, // process.stdin é um objeto que representa a entrada padrão do processo (o console)
    output: process.stdout // process.stdout é um objeto que representa a saída padrão do processo (o console)
});

readline.question("Digite seu nome: ", function(nomeUsuario) {
    readline.question("Digite sua idade: ", function(idadeUsuario) {
        console.log("Olá, " + nomeUsuario + "!");
        console.log("Você tem " + idadeUsuario + " anos.");
        readline.close(); // fecha a interface de leitura e escrita, para evitar que o programa continue esperando por mais inputs do usuário
    });
});



