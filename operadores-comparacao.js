const estaAprovado = true;

if (estaAprovado === true) {
  console.log("aprovado");
}

if ("0" === 0) {
  console.log("passou na comparação");
} else {
  console.log("não passou na comparação");
}

const idadeMinima = 18;
const idadeEstudante = 16;

if (idadeEstudante >= idadeMinima){
    console.log('não precisa de autorização');
}else{
    console.log('precisa de autorização');

}


let valor1 = '5';
let valor2 = 5;

let resultado11 = valor1 + valor2;
let resultado22;

if (valor1 === valor2) {
 resultado2 = 'Os valores são iguais.';
} else {
 resultado2 = 'Os valores são diferentes.';
}

console.log('Resultado 1:', resultado11);
console.log('Resultado 2:', resultado22);

const numero = 10;
const resultado1 = (numero > 5 && numero < 15);
const resultado2 = (numero === 10 || numero > 20);
const resultado3 = !(numero < 5);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);

