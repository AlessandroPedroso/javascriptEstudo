const notas = [10,6.5,8,7.5]

let somaDasNotas = 0;

// notas.forEach(function(nota){
//     somaDasNotas += nota;
// })

// notas.forEach(notas => {
//     somaDasNotas += notas
// })

notas.forEach(somaNotas);

function somaNotas(notas){
    somaDasNotas += notas
}

const media = somaDasNotas/notas.length

console.log(`a média das notas é ${media}`)