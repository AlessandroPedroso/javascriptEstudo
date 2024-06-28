//1-Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.

// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

// Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.

const pessoa = {
    nome: "Ana",
    idade: 25,
    solteiro: true,
    hobbies: ["Leitura","Caminhada","Fotografia"]
}

function mostrarInfoPessoa(pessoa) {
    console.log("Informações da Pessoa:")
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`)
    console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`)
    console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`)
}
// Chamada da função mostrarInfoPessoa
mostrarInfoPessoa(pessoa)

//2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:
//rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
//Preencha as subpropriedades do objeto endereco com valores fictícios.
//Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.
//No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
const pessoa2 = {
    nome: "Ana",
    idade: 25,
    solteiro: true,
    hobbies: ["Leitura", "Caminhada", "Fotografia"],
    endereco: {
        rua: "Rua Principal",
        cidade: "Cidade Feliz",
        estado: "Estado Alegre"
    }
}

function mostrarInfoPessoa2(pessoa) {
    console.log("Informações da Pessoa:");
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
    console.log("Endereço:");
    console.log(`Rua: ${pessoa.endereco.rua}`);
    console.log(`Cidade: ${pessoa.endereco.cidade}`);
    console.log(`Estado: ${pessoa.endereco.estado}`);
}

// Chamada da função mostrarInfoPessoa
mostrarInfoPessoa2(pessoa2);

//3 -

const listaPessoas = [

    {nome:"João", idade:30, cidade:"São Paulo"},
    {nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    {nome:"Carlos", idade:35, cidade:"Belo Horizonte"},
]

function mostrarInfoPessoa3(pessoas) {
    console.log("Lista de Pessoas:");
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
    });
}

function filtrarPorCidade(pessoas, cidade) {

    return pessoas.filter(pessoa=> pessoa.cidade === cidade)
}

// Chamada da função mostrarListaPessoas
mostrarInfoPessoa3(listaPessoas)

// Adição de uma nova pessoa à lista
listaPessoas.push({ nome: "Ana", idade: 28, cidade: "Salvador" })

// Chamada da função mostrarListaPessoas após a adição
mostrarInfoPessoa3(listaPessoas)

// Chamada da função filtrarPorCidade
const pessoasSalvador = filtrarPorCidade(listaPessoas, 'Salvador')
console.log("Pessoas em Salvador:")
console.log(pessoasSalvador)

//4 -

const calculadora = {

    soma: function (a, b) {
        return a + b
    },

    subtracao: function (a, b) {
        return a - b
    },

    multiplicacao: function (a, b) {
        return a * b
    },

    divisao: function (a, b) {
        if (b !== 0) {
          return a/b
        } else {
            return "Divisão por zero não é permitida"
      }
    },

    calculadoraMedia: function (numeros) {
        const soma = numeros.reduce((total, numero) => total + numero, 0)
        return soma / numeros.length
    }

}

// chamadas das funções
console.log("Soma: " + calculadora.soma(5, 3))
console.log("Subtração: " + calculadora.subtracao(8, 4))
console.log("Multiplicação: " + calculadora.multiplicacao(6, 2))
console.log("Divisão: " + calculadora.divisao(10, 2))
console.log("Divisão por zero: " + calculadora.divisao(8, 0))

const numerosParaMedia = [10, 8, 6, 9, 7]

console.log("Média: " + calculadora.calculadoraMedia(numerosParaMedia))

//5-5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

// titular: uma string representando o titular da conta.
// saldo: um número representando o saldo da conta.
// depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
// sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.

// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:
//nome: uma string representando o nome do cliente.
// conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).

//Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.
//Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.

const contaBancaria = {
    titular: "João",
    saldo: 100,

    depositar: function (valor) {
        this.saldo += valor;
    },
    
    sacar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -=valor
        } else {
            console.log("Saldo insuficiente para saque.")
        }
    }
}

const cliente = {
    nome: 'Carlos',
    conta: contaBancaria
}

function mostrarSaldo(cliente) {
    console.log(`Nome do cliente: ${cliente.nome}`)
    console.log(`Saldo da conta: ${cliente.conta.saldo}`)
}

// Realize operações de depósito e saque na conta bancária do cliente
cliente.conta.depositar(500)
cliente.conta.sacar(200)

// Chame a função mostrarSaldo para exibir as informações atualizadas
mostrarSaldo(cliente)