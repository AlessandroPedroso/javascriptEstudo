// 1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

const livro = {
    titulo: "O senhor dos Áneis",
    autor: "J.R.R Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
}

console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}
    `)

//2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
//Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
//Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
//Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

const anoAtual = new Date().getFullYear();

const livro2 = {
    titulo: "O senhor dos Áneis",
    autor: "J.R.R Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
}

// Adicionando a propriedade idadePublicacao diretamente ao objeto livro
livro2.idadePublicacao = anoAtual - livro2.anoPublicacao
livro2.mostrarDetalhes = "Detalhes do Livro: \n" + 
    "Título: " + livro2.titulo + "\n" +
    "Autor: " + livro2.autor + "\n" +
    "Ano de Publicação: " + livro2.anoPublicacao + "\n" +
    "Gênero: " + livro2.genero + "\n" +
    "Idade de Publicação: " + livro2.idadePublicacao + " anos"

// Exibindo os detalhes do livro no console
console.log(livro2.mostrarDetalhes)

// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

const anoAtual3 = new Date().getFullYear();

const titulo3 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual3 - 1954,
}

// Exemplos de acesso direto às propriedades do objeto livro
console.log("Detalhes do Livro:")
console.log("Título: " + titulo3['titulo'])
console.log("Autor: " + titulo3['autor'])
console.log("Ano de Publicação: " + titulo3['anoPublicacao'])
console.log("Gênero: " + titulo3['genero'])
console.log("Idade de Publicação: " + titulo3['idadePublicacao'])


//4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
//No final do arquivo livro.js, adicione uma avaliação ao objeto.
//Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
//Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

const anoAtual4 = new Date().getFullYear();

const livro4 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
    avaliacao: null, // Nova propriedade para armazenar a avaliação
}

// Adicionando uma avaliação fictícia ao objeto livro

const novaAvalicao = {nota:4.5,comentario:"òtima leitura!"}
if (livro4.avaliacao === null) {
    livro4.avaliacao = novaAvalicao
} else {
    console.log("Este livro já possui uma avaliação.")
}

// Exibindo detalhes do livro, incluindo a avaliação
console.log("Detalhes do Livro:")
console.log("Título: " + livro4.titulo)
console.log("Autor: " + livro4.autor)
console.log("Ano de Publicação: " + livro4.anoPublicacao)
console.log("Gênero: " + livro4.genero)
console.log("Idade de Publicação: " + livro4.idadePublicacao)
console.log("Avaliação: " + (livro4.anoPublicacao === null? "Nenhuma avaliação disponível." : "Nota: " + livro4.avaliacao.nota + ", Comentário: \"" + livro4.avaliacao.comentario + "\""))

// 5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".

const anoAtual5 = new Date().getFullYear();

const livro5 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
    avaliacao: null
}

// Alteração direta do gênero do livro
livro5.genero = "Aventura"

// Exibição dos detalhes do livro no console
console.log(`Detalhes do Livro:
    Título: ${livro5.titulo}
    Autor: ${livro5.autor}
    Ano de Publicação: ${livro5.anoPublicacao}
    Gênero: ${livro5.genero}
    Idade de Publicação: ${livro5.idadePublicacao} anos
    Avalicação: ${livro5.avaliacao === null ? "Nenhuma avaliação disponível.": `Nota: ${livro5.avaliacao.nota}, Comentário: "${livro5.avaliacao.comentario}"`}
    `)

// 6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
const anoAtual6 = new Date().getFullYear();

const livro6 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
    avaliacao: { nota: 4.5, comentario: "Ótima leitura!" }
}

// Excluir a propriedade 'avaliacao' do objeto livro
delete livro6.avaliacao

console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}
    Idade de Publicação: ${livro.idadePublicacao} anos
    Avaliação: Nenhuma avaliação disponível.`)