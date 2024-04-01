//()

function exibeNomeEstudante(){
    console.log('Alessandro')
}

exibeNomeEstudante();

function exibeNomeEnota(nome,nota){
    return `nome do aluno é ${nome} e nota é ${nota}`
}

const resultado = exibeNomeEnota('Alessandro',10)

console.log(resultado)