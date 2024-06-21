
const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678987',
    turma:'JavaScript'
}

estudante.nome

function exibeInfoEstudante(objetoEstudante, infoEstudante) {
    return objetoEstudante[infoEstudante]
}

console.log(estudante['nome'])
console.log(estudante['cpf'])

console.log(exibeInfoEstudante(estudante,'nome'))
console.log(exibeInfoEstudante(estudante, 'cpf'))
