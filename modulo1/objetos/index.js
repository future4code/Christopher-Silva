/*
Exercícios de interpretação de código
01 - 
a)
Matheus Nachtergaele
Virginia Cavendish
canal: 'Globo', horario: '14h'

2 - 
a)
nome: 'Juca', idade: 3, raca: 'SRD'
nome: 'Juba', idade: 3, raca: 'SRD'
nome: 'Jubo', idade: 3, raca: 'SRD'

b)
os 3 pontos fazem um espelhamento do objeto anterior

3 - 
a) 
false
undefined

b)
false pois é o valor de backender
e undefined pois altura não foi definido
*/
/*
Exercícios de escrita de código
/*
1- 
a) Crie um objeto. Ele deve conter duas 
propriedades: nome (string) 
e apelidos (um array que sempre terá exatamente três apelidos).
 Depois, escreva uma função que recebe como entrada um objeto 
 e imprime uma mensagem no modelo abaixo: 
 */

/*
const pessoa = {
    nome:"Juca",
    apelidos: ["perebas","ratinho", "rato"]
}
  function texto(dados) {
   let fraze = ("Eu sou "+pessoa.nome+" mas pode me chamar de "+pessoa.apelidos+".")
    return fraze
}
    console.log(texto(pessoa))

  pessoa.apelidos = ["Joca","Jeca","jubileu"]
  
      console.log(texto(pessoa))
  
*/

/*
a) Crie dois objet
diferentes com as seguintes propriedades: nome, idade e profissão. 

b) Escreva uma função que receba esses objetos e retorne 
um array com as seguintes informações
*/

/*
const pessoa1 = {
	nome: "jairo", 
    idade: 30, 
	profissao: "aluno"
}
const pessoa2 = {
    nome: "Christopher",
    idade: 38,
    profissão: "estudante"
}

function descricao(dados){
let dados1 = [pessoa1.nome,pessoa1.nome.length,pessoa1.idade,pessoa1.profissao]
let dados2 = [pessoa2.nome,pessoa2.nome.length,pessoa1.idade,pessoa2.profissao]
return dados1,dados2
}
console.log(descricao(pessoa1))
console.log(descricao(pessoa2))
*/

/*
3 -
a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

*/
/*
const carrinho=[]

const sacolao = [
{
    nome: "banana",
    disponibilidade: true

},
{
    nome: "abacate",
    disponibilidade: true
},
{
    nome: "laranja",
    disponibilidade: true

}
]

function compra(mercado){
    const balcao = carrinho.push(sacolao[0],sacolao[1],sacolao[2])

    return balcao
}
compra()
console.log(carrinho)
*/

