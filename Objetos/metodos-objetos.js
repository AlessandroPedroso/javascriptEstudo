const estudante = {
    
    nome: 'Alessandro Schuquel Pedroso',
    idade: 29,
    cpf: '0326554568',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5551998152725', '5551998152632'],
    enderecos: [{
        rua: 'Rua joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }] 
}

//pega as propriedades cadastradas
const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto)

if (!chavesObjeto.includes('enderecos')) {
    console.error('é necessário tem um endereço cadastrado')
}


const meuObjeto = { a: 1, b: 2, c: 3 };
const chaves = Object.keys(meuObjeto);
const valores = Object.values(meuObjeto);

console.log(chaves); // Saída: ['a', 'b', 'c']
console.log(valores); // Saída: [1, 2, 3]


const meuObjetoEntries = { a: 1, b: 2, c: 3 };
const entradas = Object.entries(meuObjetoEntries);

console.log(entradas);
// Saída: [['a', 1], ['b', 2], ['c', 3]]

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }
