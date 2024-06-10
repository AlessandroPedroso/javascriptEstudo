
// 1.Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array

const arrayNames = ["Alessandro", "Eduardo", "Taís",]

for (const names of arrayNames) {
    
    console.log(names)
}

//2.Crie uma função que receba uma array e imprima no console o número do índice e o elemento

function namesElement(names){
    for (let index = 0; index < names.length; index++) {
        console.log(`${index} - ${names[index]}`);
    }
}
namesElement(arrayNames)

//3.Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos

const arrayNumber = [2,3,4,6]

function sumNumbers(array){
    let sumNumber = 0
    for (let index = 0; index < array.length; index++) {
        sumNumber += array[index];
        
    }
    console.log("Resultado da soma:" + sumNumber)
}

sumNumbers(arrayNumber)

//4.Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'

function smallerAndBiggerValue(array){
    let biggerValue = 0
    let smallerValue = 0
    
    for (let i = 0; i < array.length; i++) {

        if (array[i] > biggerValue){
            biggerValue = array[i]
        }

        if(array[i] <= smallerValue){
            smallerValue = array[i]
        }
    }

    console.log("o menor numero é: ",smallerValue)
    console.log("o maior numero é: ",biggerValue)
}

smallerAndBiggerValue(arrayNumber)

// 5.Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

for (let index = 0; index < numeros.length; index++) {
    if(numeros[index] % 2 ===0){
        console.log(numeros[index])
    }
}

// 6.Crie um programa que calcule a média dos números presentes em um array utilizando um loop for

const numberMedias = [2,4,5,6,2,7]
    let sum =0
for (let index = 0; index < numberMedias.length; index++) {
     sum += numberMedias[index];
}

const media = sum/numberMedias.length

console.log("Resultado da media: ",media)

