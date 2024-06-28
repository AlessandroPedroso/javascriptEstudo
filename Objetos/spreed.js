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
    }] 
}

function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

exibirTelefones(...estudante.telefones)

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);

