/*
Interpretação de texto

exercicio 1
 a,b e c são falsos
d é booleano

exercício 2
vai impirmir os números um ao lado do outr

exercício 3
transformar as strings em números

*/

//Escrita de código

/* exercício 1
1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
    


let idade = prompt("Qual sua idade?")
let idadeMelhorAmigo = prompt("qual idade de seu melhor amigo")

let suaIdade=Number(idade)
let idadeAmigo=Number(idadeMelhorAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdade>idadeAmigo)
console.log(suaIdade-idadeAmigo)
*/

//exercício 2
/*
a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
todas respostas deram zero
d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
todas respostas deram 1 porque não são divisiveis

let numPar = prompt ("Insira um número par?")
let numeroPar = Number(numPar)
console.log(numeroPar % 2)
*/

//exercício 3
/*
a) A idade do usuário em meses

b) A idade do usuário em dias

c) A idade do usuário em horas


let idade = prompt("Qual sua idade")
let idadeUsuario = Number(idade)

let meses = idadeUsuario * 12
let dias = idadeUsuario * 365
let horas = dias * 24
console.log("Sua idade em meses é", meses, "meses")
console.log("sua idade em dias é", dias, "dias")
console.log("sua idade em horas é", horas,"horas")
*/

//exercício 4
/*
a) O primeiro numero é maior que segundo? true
b) O primeiro numero é igual ao segundo? false
C) O primeiro numero é divisível pelo segundo? true
d) O segundo numero é divisível pelo primeiro? true


let primNum = prompt ("Insira um número?")
let segNum = prompt ("Insira outro número?")

let primeiro = Number(primNum)
let segundo = Number(segNum)

let a = primeiro>segundo
let b = primeiro === segundo
let c = primeiro % segundo === 0
let d = segundo % primeiro === 0

console.log("O primeiro numero é maior que segundo?", a)
console.log("O primeiro numero é igual ao segundo?", b)
console.log("O primeiro numero é divisível pelo segundo?", c)
console.log("O segundo numero é divisível pelo primeiro?", d)
*/

let nome = "Chijo"
let nomeAlterado = nome.tolowerCase()

console.log(nomeAlterado)
