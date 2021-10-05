/*
Interpretação de código

Exercício 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)              a = False

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)              b = False

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)              c = True
 
console.log("d. ", typeof resultado)       d = booleano


 Exercício 2 
irá aparecer os números lado a lado

const primeiroNumero = prompt("Digite um numero!")
const segundoNumero = prompt("Digite outro numero!")

let soma = primeiroNumero + segundoNumero

console.log(soma)

Exercicio 3 
transformar string em número com tostring()

const primeiroNumero = prompt("Digite um numero!")
const segundoNumero = prompt("Digite outro numero!")

const primNumero=Number(primeiroNumero)
const segNumero=Number(segundoNumero)
const soma = primNumero + segNumero

console.log(soma)

*/
/*

Escrita de código
Exercício 1
a) Pergunte a idade do usuário

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)


let suaIdade =  prompt("Qual sua Idade?")
let idadeSeuAmigo = prompt("Qual idade do seu melhor amigo?")
let idadeMaior= suaIdade>idadeSeuAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)
diferença = suaIdade - idadeSeuAmigo
console.log(diferença)

Exercício 2
a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
todos números retornaram 0
d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
impar não é divisivel por 2 e na resposta traz o resto da conta.

let numPar = prompt("Insira um número par")
let numeroPar = Number(numPar)
let resultDiv = numeroPar % 2
console.log(resultDiv)


Exercício 3
Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
a) A idade do usuário em meses

b) A idade do usuário em dias

c) A idade do usuário em horas

let idadeEmAnos = prompt("Quantos anos você tem?")
let idadeAnos = Number(idadeEmAnos)

let meses = idadeAnos * 12
let dias = idadeAnos * 365
let horas = dias * 24

console.log("sua idade em meses", meses)
console.log("sua idade em dias", dias)
console.log("sua idade em horas", horas)

Exercócio 4
Faça um programa que pergunte ao usuário dois números. 
Em seguida, faça as operações e imprima no console as 
seguintes mensagens seguidas pelo true ou false:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true


let primNum = prompt("Diga um número?")
let segNum = prompt ("Diga outro número?")

let primeiroNum = Number(primNum)
let segundoNum = Number(segNum)

let a = primeiroNum > segundoNum
console.log("o primeiro número é maior que o segundo?", a)

let b = primeiroNum === segundoNum
console.log("o segundo número é igual ao segundo?", b)

let c = primeiroNum % segundoNum === 0
let d = segundoNum % primeiroNum === 0
console.log("O primeiro numero é divisível pelo segundo?",c)
console.log("O segundo numero é divisível pelo primeiro?",d)


let numPar = prompt("Insira um número par")
let numeroPar = Number(numPar)
let resultDiv = numeroPar % 2
console.log(resultDiv)

*/