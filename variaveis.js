const estudante = 'Caroline';
let professora = 'Ana';

console.log(estudante,professora)

// ()
// 1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase em constras maiúsculas.
const frase = "Não desista! você irá vencer!"
console.log(`Comprimento da frase: ${frase.length}`);
console.log(frase.toUpperCase());

////////////////////////////////////////////////////////
console.log("\n*********************************");
// 2.Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

let variavel1 = null;
let variavel2;
console.log(variavel1);
console.log(variavel2);
////////////////////////////////////////////////////////////////
console.log("\n*********************************");

// 3.Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
const numero = 50;
const string = "Alessandro";
const boolean = true;

const combinacao = `${numero} ${string} ${boolean}`

console.log(combinacao);
////////////////////////////////////////////////////////
console.log("\n*********************************");

// 4.Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
const numerica = 29;
const string2 = "50";

const conversao1 = Number(string2);
const conversao2 = String(numerica);

console.log('tipo de dados da conversao', typeof conversao1);
console.log('tipo de dados da conversao', typeof conversao2);
////////////////////////////////////////////////////////
console.log("\n*********************************");

// 5.Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console
const variavelManipulacao = "programar em javascript é muito bom";
console.log(variavelManipulacao.toUpperCase());
console.log(variavelManipulacao.toLowerCase());
const parteDaString = variavelManipulacao.slice(0,9)
console.log('parte da string:', parteDaString);