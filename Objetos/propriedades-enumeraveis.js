const meuObjeto = {
  nome: "ChatGPT",
  linguagem: "JavaScript",
  versao: "3.5"
};

for (let chave in meuObjeto) {
  console.log(chave); // Saída: nome, linguagem, versao
}

const fichaGuerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}
 
const equipoGuerreiro = {
 espada: "Andúril",
 capa: "capa élfica +2"
}

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)