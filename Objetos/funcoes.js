const estudante = {
    
    nome: 'Alessandro Schuquel Pedroso',
    idade: 29,
    cpf: '0326554568',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5551998152725', '5551998152632'],
    media: 7.5,
    estaAprovado: function (mediaBase) {
        return this.media >= mediaBase ? true:false
    }
}

console.log(estudante.estaAprovado(7))




