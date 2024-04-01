// 1.Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. 
// Em seguida, chame a função e exiba a saudação no console.

//exemplo de funções realizando o mesmo processo
const nomePessoa = (nome) => `Olá tudo bem? me chamo ${nome} estou estudando funções em JavaScript.`

const nomePessoa1 = (nome) => {
    return `Olá tudo bem? me chamo ${nome} estou estudando funções em JavaScript.`
}

const nomePessoa2 = function(nome){

    return `Olá tudo bem? me chamo ${nome} estou estudando funções em JavaScript.`
}

console.log(nomePessoa2('Taís')) // esse exemplo de função precisa ser executado em ordem a chamada sempre após a declaração da função

function nomePessoa3(nome){

    return `Olá tudo bem? me chamo ${nome} estou estudando funções em JavaScript.`
}
//()

console.log(nomePessoa('Alessandro'))
console.log(nomePessoa1('Eduardo'))

console.log(nomePessoa3('João'))
////////////////////////////////////////////////////////////////////////////////////////////////
// 2.Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

const idadePessoa = (idade) => idade >=18 ? `É maior de idade ${idade}`: `É menor de idade ${idade}`

const idade = 16;

const resultadoIdade = idadePessoa(idade)
console.log(resultadoIdade)
////////////////////////////////////////////////////////////////////////////////////////////////
// 3.Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). 
// Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

const verificaPolindromo = function(string){
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPolindromo('arara'));
console.log(verificaPolindromo('Frase'));

// const stringInvertida = 'arara'.split('').join('')

// console.log(stringInvertida)
////////////////////////////////////////////////////////////////////////////////////////////////
// 4.Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. 
// Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

const numeroMaior = (number1,number2,number3) =>{
    let maior = number1

    if (number2 > maior){
        maior = number2
    } 
    
    
    if (number3 > maior){

        maior = number3
    }

    return maior

}

console.log(numeroMaior(80,5,8))
////////////////////////////////////////////////////////////////////////////////////////////////
// 5.Crie uma chamada de função de seta calculaPotenciaque recebe duas parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
const calculaPotencia = (base, expoente) => {
    return Math.pow(base, expoente);
};

const base = 2;
const expoente = 3;

const resultado = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`); // Saída: O resultado de 2 elevado a 3 é: 8