//1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

function recebeArrays(...arrays){

    return [].concat(...arrays)
}

const array1 = [1, 2,]
const array2 = [3, 4,]
const array3 = [5, 6,]
const array4 = [7, 8,]

const arraysConcatenados = recebeArrays(array1,array2,array3,array4)
console.log(arraysConcatenados)

