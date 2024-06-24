const estudante = {
    
    nome: 'Alessandro Schuquel Pedroso',
    idade: 29,
    cpf: '0326554568',
    turma: 'JavaScript',
    bolsista: true,
    telefones:['5551998152725', '5551998152632'],
}

estudante.endereco = {

    rua: 'Rua joseph Climber',
    numero: '45',
    complemento: 'apto 43'
}

console.log(estudante)
console.log(estudante.endereco)
console.log(estudante.endereco['rua'])
console.log(estudante.endereco.rua)