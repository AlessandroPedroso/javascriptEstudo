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

for (let chave in estudante) {
    
    const tipo = typeof estudante[chave]

    if (tipo !== 'object' && tipo !== 'function') {
        
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto)
    }
    // console.log(estudante[chave])
}





