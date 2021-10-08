//Exercícios de interpretação de código
/*
1 -
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?
//será impresso:
10
50

b) O que aconteceria se retirasse os dois `console.log`
 e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`?
  O que apareceria no console?
// Não apareceria nada no console


2)
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade
//Essa função deixa todo texto do usuário em letras minúsculas e busca pela palavra cenoura
utilidade na busca por itens especificos na frase inserida pelo usuário

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`   // true
     ii.  `CENOURA é bom pra vista` //true
     iii. `Cenouras crescem na terra`  //true

     


*/

/*
Exercícios de escrita de código

//1)
 //a) A função não deve receber nenhum parâmetro e deve imprimir
 //uma mensagem falando algumas informações sobre você, como:

//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
//Lembrando que a função não possui entradas, apenas imprime essa mensagem.

function meusDados() {
    const dados = "Eu sou Christopher, tenho 38 anos, moro em Rolante e sou estudante."
    return dados
}
const frase = meusDados()
console.log(frase)

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem
// às informações de uma pessoa: o nome (string), a idade (number), 
 //a cidade (string) e uma profissão (string). Ela deve retornar uma string
 // que unifique todas as informações da pessoa em uma só mensagem com o template:

function informacoes(nome, idade, cidade, profissao) {
   const frase = "Eu sou "+ nome +", tenho "+ idade +" anos, moro em "+ cidade +" e sou "+ profissao
   return frase
}
 
const minhaFrase = informacoes("Christopher",38, "Novo Hamburgo", "estudante")

console.log(minhaFrase)

*/

/*
2)
//a) Escreva uma função que receba 2 números como parâmetros, e,
// dentro da função, faça a soma das duas entradas e retorne o 
// resultado. Invoque a função e imprima no console o resultado.

function doisNumeros(primeiro,segundo) {
    const soma = primeiro + segundo
    return soma
}
const resultado = doisNumeros(2,2)
console.log(resultado)

//b) Faça uma função que recebe 2 números e retorne um booleano 
//que informa se o primeiro número é **maior ou igual** ao segundo.

function doisNumeros(primeiro,segundo) {
    const maiorIgual = primeiro >= segundo
    return maiorIgual
}
const resultado = doisNumeros(1,2)
console.log(resultado)

//c) Escreva uma função que receba um número e devolva um booleano
// indicando se ele é par ou não

function parImpar(numero) {
    const numeroTeste = numero % 2
    
    return numeroTeste
}
const resultado = parImpar(1)
const teste = resultado === 0
console.log("este número é par",teste)

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro
// e imprima o tamanho dessa mensagem, juntamente com uma versão dela 
// em letras maiúsculas.

function mensagem(texto){
    const tamanho = texto.length
    const maiusculo = texto.toUpperCase()
    const resultado = []
    resultado.push(tamanho,maiusculo)
return resultado
}
    
const tamanhoFrase = mensagem("meu texto aqui")
console.log(tamanhoFrase)
*/

/*
//3)Crie uma função para cada uma das operações básicas 
 //(soma, subtração, multiplicação e divisão). Em seguida,
 //peça para o usuário inserir dois números e chame essas
 //4 funções com esses valores inputados pelo usuário sendo
 //o argumento. Por fim, mostre no console o resultado
 //das operações:


const numero1 = prompt("Insira um número?")
const numero2 = prompt("Insita outro número?")

function operacoesBasicas(primeiroNumero,segundoNumero){

    const soma = primeiroNumero + segundoNumero
    const subtracao = primeiroNumero - segundoNumero
    const multiplicacao = primeiroNumero * segundoNumero
    const divisao = primeiroNumero / segundoNumero

    const resultados = [soma, subtracao, multiplicacao, divisao]
    return resultados
}
const resposta = operacoesBasicas(numero1,numero2)
console.log("Números inseridos:"+numero1+" e "+numero2)
console.log("soma:"+resposta[0])
console.log("Diferença:"+resposta[1])
console.log("Multiplicação:"+resposta[2])
console.log("Divisão:"+resposta[3])
*/

    