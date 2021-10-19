//Exercícios de interpretação de código
//1 - vai ser impresso o item, tipo e toda array junto de cada objeto
//2 - uma nova array apenas com os nomes
//3 - uma array mas sem o objeto.apelido Chijo


//Exercícios de escrita de código

//1 - 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

//a)

/*
 const soNome = (pet) => {
     
         return pet.nome
 }
 
 const nomePet = pets.map(soNome)
 console.log(nomePet)
 */

//b)

/*
const separandoSalsicha = (pet) => {
    if(pet.raca === "Salsicha") {
        return true
    }else {
        return false
    }
}

const soSalsicha = pets.filter(separandoSalsicha)

console.log(soSalsicha)
*/


//c)
/*
 const cupom = (pet) => {
    if(pet.raca === "Poodle") {
        return true
    }else {
        return false
    }
}

const cupomPoodle = pets.filter(cupom)

const ganhouCupom = (pet,raca) =>{
    return "Você ganhou um cupom de desconto de 10% para tosar o/a "+pet.nome+"!"
}

console.log(cupomPoodle.map(ganhouCupom))

*/


//2-
/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
*/

 //a)
 /*
 const soNomeProduto = (produto) => {
     
    return produto.nome
}

const nomeProdutos = produtos.map(soNomeProduto)
console.log(nomeProdutos)
*/

//b)
/*
const soNomeProduto = (produto) => {
     
    return produto.nome+(produto.preco-(produto.preco*0.05))
}

const nomeProdutos = produtos.map(soNomeProduto)
console.log(nomeProdutos)
*/

//c)

/*
const separandoBebidas = (bebida) => {
    if(bebida.categoria === "Bebidas") {
        return true
    }else {
        return false
    }
}

const bebidas = produtos.filter(separandoBebidas)

console.log(bebidas)

*/

//d)
/*
 const soNomeProduto = (produto) => {
     
    return (produto.nome).includes("Ypê")
}

const produtosYpe = produtos.filter(soNomeProduto)
 console.log(produtosYpe)
*/

//e)
/*
const soNomeProduto = (produto) => {
     
    return (produto.nome).includes("Ypê")
}

const produtosYpe = produtos.filter(soNomeProduto)


const compreYpe = (produto) =>{
    return "Compre "+produto.nome+" por "+produto.preco
}

console.log(produtosYpe.map(compreYpe))
*/

//Desafio
//1 - 


const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a)
/*
 pokemons.sort(function (a, b) {
	
	return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
 
});

console.log(pokemons)
*/

//b)
/*
const sotipo = (pokemon) => {
    return pokemon.tipo
}
const soOsTiposDosPokemons = pokemons.map(sotipo)
console.log(soOsTiposDosPokemons)
var novaArr = soOsTiposDosPokemons.filter(function(este, i) {
    return soOsTiposDosPokemons.indexOf(este) === i;
});
console.log(novaArr);
*/
