const notas = [10,8.5,5,6.5,8,7.5];

//primeira expressão: executa apenas uma vez
//segunda expressão: condição de execução
//terceira expressão: executada sempre ao final do bloco

for (let indice = 0; indice < notas.length;indice++){
    console.log(indice,notas[indice]);
}

//Por exemplo, podemos percorrer um array do fim ao início:
const numeros = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

//Por exemplo, podemos criar dinamicamente um array com todos os números pares de 0 a 100:
const numerosPares = [];
 
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
 
console.log(numerosPares);

