const notas = [10,6.5,8,7.5];

let somaDasNotas = 0;

for(let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

console.log(`Soma das notas: ${somaDasNotas}`);

const media = somaDasNotas/notas.length;

console.log(`média das notas: ${media}`);

