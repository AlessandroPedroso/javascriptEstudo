const estudante = {
    
    nome: 'Alessandro Schuquel Pedroso',
    idade: 29,
    cpf: '0326554568',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5551998152725', '5551998152632'],
    endereco: [{
        rua: 'Rua joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }] 
}


estudante.endereco.push({
    rua: 'Rua Dona Clotide',
    numero: '71',
    complemento: null // null ou '' são considerados FALSE
})

console.log(estudante.endereco)
console.log(estudante.endereco[1])

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => {
    return endereco.complemento
})

console.log(listaEnderecosComComplemento)