const estudanteReprovou = (notaFinal,faltas) => {

    if(notaFinal < 7 && faltas > 4){
        
        return true;

    }else{
        return false;
    }
}

const exibeNome2 = (nome) => nome

 const exibeNome1 = (nome) =>{
    return nome
 }

 
 console.log(exibeNome2('Alessandro'))
 console.log(exibeNome1('Eduardo'))

console.log(estudanteReprovou(6,5))
console.log(estudanteReprovou(10,2))
