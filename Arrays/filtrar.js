const alunos = [{nome:'Ana'},'Marcos','Maria','Mauro']
const medias = [7,4.5,8,7.5]

// const tamanhoNome = alunos.filter((aluno)=>{
//     return aluno.length < 4
// });

const reprovados = alunos.filter((_,indice)=>{
    return medias[indice] < 7
});

const buscar = alunos.filter(aluno=> aluno.nome)

console.log(reprovados)
console.log(buscar)
