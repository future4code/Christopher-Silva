/*
Interpretação de código

Exercício 1

let array
console.log('a. ', array)
 //vai imprimir 'a. undefined' 
 'a. 'pois foi criado ese string e undefined pois criou uma variavel 'array' sem nada


array = null
console.log('b. ', array)
//vai imprimir 'b. null'
'b. ' pois foi criado a string e null pois foi dado esse valor na variavel 'array'

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//vai imprimir 'c.  11'
'c. ' pois foi criado a string e 11 do comando .lenght 
que conta quantos itens tem na array

let i = 0
console.log('d. ', array[i])
//vai imprimir d.  3
'd. ' da string e 3 pois o comando pediu para mostrar o item 
na posição equivalente a variavel 'i' que foi dado o valor de 0 

array[i+1] = 19
console.log('e. ', array)
//vai imprimir 'e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]'
'e. ' da string e foi adicionado dentro da array o número 19 na
posição 1, referente a [i + 1] sendo i = 0

const valor = array[i+6]
console.log('f. ', valor)
//vai imprimir 'f.  9'
'f. ' da string e 9 pois foi atribuido a variável 'valor' o item 
na posição 6 dentro da array, referente a [i+6]

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//será impresso '"SUBI NUM ÔNIBUS EM MIRROCOS" 27
.toUpperCase deixou tudo em maiúsculo
.replaceAll trocou as letras a por i
.length devolveu quantos itens tinham dentro da array, no caso sendo 
uma string apenas devolveu quantas letras tinha contando os espaços


*/

//Exercicios de escrita de código

/*
//exercício 1
Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
Em seguida, Imprima no console a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

let emailDoUsuario = prompt("Qual seu e-mail?")
let nomeDeUsuario = prompt("qual seu nome de usuário?")

console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o),", nomeDeUsuario,"!")
*/

/*
//exercício 2
aça um programa que contenha um array com 5 das suas comidas preferidas,
armazenado em uma variável. Em seguida, siga os passos:
a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas 
preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
 Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista
*/
/*
let comidasPreferidas = ["lasanha","pizza","strogonoff","hamburguer","passoca"]
//a)
//console.log(comidasPreferidas)

//b)

console.log("Essas são minhas comidas preferidas:")
let comida1 = comidasPreferidas[0]
let comida2 = comidasPreferidas[1]
let comida3 = comidasPreferidas[2]
let comida4 = comidasPreferidas[3]
let comida5 = comidasPreferidas[4]
console.log(comida1)
console.log(comida2)
console.log(comida3)
console.log(comida4)
console.log(comida5)
*/
//c)

//let usuarioComida = prompt("Qual sua comida preferida")
// comidasPreferidas.splice(1,0,usuarioComida)
//console.log(comidasPreferidas)

/*
exercício 3
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array no console

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array no console
*/
/*
//a)
//let listaDeTarefas=[]

//b)
let tarefa1 = prompt("Site a primeira tarefa que irá realizar hoje?")
let tarefa2 = prompt("segunda tarefa que irá realizar hoje?")
let tarefa3 = prompt("Terceira tarefa que ira reálizar hoje?")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

//C)
console.log(listaDeTarefas)

//d)
let realizou = prompt("ja realizou a tarefa 1, 2 ou 3? (digite apenas o número")

//e)
listaDeTarefas.splice(realizou-1,1)

//f)
console.log(listaDeTarefas)
*/
/*

const num1 = 5
const num2 = 20

let maiorNumero = 0
let menorNumero = 0
    if(num1>num2){
        maiorNumero = num1
        menorNumero = num2
    }else{
        maiorNumero = num2
        menorNumero = num1
    }

    var maiorDivisivelPorMenor = (maiorNumero%menorNumero===0)
    var diferenca = maiorNumero - menorNumero
      
return {maiorNumero,maiorDivisivelPorMenor,diferenca}
*/
/*
const ladoA = 6
const ladoB = 4
const ladoC = 4

if(ladoA===ladoB&&ladoA===ladoC){
    console.log("Equilátero")
}else if(ladoA!==ladoB&&ladoA!==ladoC&&ladoB!==ladoC){
    console.log("Escaleno")
}else if(ladoA===ladoB&&ladoA!==ladoC){
    console.log("Isósceles")
}else if(ladoA===ladoC&&ladoA!==ladoB){
    console.log("Isósceles 2")
}else{
    console.log("Isósceles 3")
}
*/
/*
var array=[1,2,3,5,6,8,9,7,10]
console.log(array)
let i=0
let maiorNumero = 0
let segundoMaiorNumero = 0
while(i< array.length){
    if(array[i] > maiorNumero){
maiorNumero = array[i]
    }
    i++
}
array.splice(array.indexOf(maiorNumero),1)
console.log(array)

for(let i = 0; i< array.length;i++){
    if(array[i] > segundoMaiorNumero){
        segundoMaiorNumero = array[i]
    }
}

console.log(segundoMaiorNumero)

let menorNumero = maiorNumero
let segundoMenorNumero = maiorNumero

for(let i = 0; i< array.length;i++){
    if(array[i] < menorNumero){
        menorNumero = array[i]
    }
}

console.log(menorNumero)

array.splice(array.indexOf(menorNumero),1)

console.log(array)

for(let i = 0; i< array.length;i++){
    if(array[i] < segundoMenorNumero){
        segundoMenorNumero = array[i]
    }
}
console.log(segundoMenorNumero)
*/
/*
var filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
 }
 console.log("Venha assistir ao filme ",$(filme.nome),", de ",$(filme.ano),", dirigido por ",$(filme.diretor)," e estrelado por ",$(filme.atores),".")

*/

let pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

/*
let permissao = (pessoas) =>{
    return pessoas.altura>1.5&&pessoas.idade>14&&pessoas.idade<60
}
    
let pessoasQUePodemBrincar = pessoas.filter(permissao)

   console.log(pessoasQUePodemBrincar)
   */

   var contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

var soma = 0

 for(var i = 0; i < contas.compras.length; i++) {
    contas.compras.length += contas.compras[i];
}

console.log(soma)