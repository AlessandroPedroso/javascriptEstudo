
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