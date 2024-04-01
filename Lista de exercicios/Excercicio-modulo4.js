// 1.Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, 
// depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, 
// considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let saldo=500;
const deposito=100;
const saque=150;

let operacao = saldo - saque;


console.log(`Saldo: ${saldo}`);
console.log(`saldo após o saque: ${operacao}`)

operacao = operacao + deposito

console.log(`saldo após o deposito: ${operacao}`)
//////////////////////////////////////////////////////////////////////////////////////////////////////
// 2.Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
const numerico = 9;

const resultado =  numerico % 2===0 ? 'é par': 'é impar';
console.log(resultado)
//////////////////////////////////////////////////////////////////////////////////////////////////////

// 3.Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. 
// Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
const usuario = true;
const adm = false;

// const resultadoUsuario = usuario === true && adm === true ? 'Acesso liberado': "Acesso Negado";
const resultadoUsuario = usuario && adm
console.log('Administrador logado no sistema', resultadoUsuario)
//////////////////////////////////////////////////////////////////////////////////////////////////////()
// 4.Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

const boolean1 = false;
const boolean2 = true;

const resultadoBoolean = boolean1 || boolean2
console.log(resultadoBoolean)


// 5.Imagine um sistema que determine se um usuário tem idade suficiente para comprar ou entrar para um show. 
// Declare duas variáveis ​​que determinam a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar uma compra.
const idadeMinima = 18;
const idadeUsuario = 16;

if (idadeUsuario >= idadeMinima){

    console.log(`Usuário possui idade de ${idadeUsuario}, pode entrar para o show`);
}else{
    console.log('Usuário não pode entrar para o show');
}
