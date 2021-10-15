// Exercícios de interpretação de código

// 1 - para a variavel "valor" foi criado um çao onde sempre
// que o valor atribuido for menor que 5 vai adicionar mais "1", e no final do laço
// imprime o valor total

// 2 -
// a) Vai ser impresso apenas os números maiores que 18

// b) para acessar cada indice da array trocar o IF por  "numero < lista.length"

// 3 - 
// será impresso 4 linhas, onde em cada linha é adicionado um asterisco a mais

// Exercícios de escrita de código

/*
1 - 1. Pergunte ao usuário quantos bichinhos de estimação 
ele tem e guarde esse dado em uma variável. 
    
a) Se a quantidade for 0, imprima no console 
"Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite 
que o usuário digite os nomes deles, um por um, 
e guarde esses nomes em um array
 
c) Por fim, imprima o array com os nomes dos bichinhos no console

*/
/*
const numeroPets= Number(prompt("Quantos bichinhos vc tem?"))
let pet=0
let array = []
if (numeroPets>0){
    
    while(pet<numeroPets){
         
        array.push(prompt("Qual nome de 1 deles?"))
        pet++
    }
}else{
    console.log("Que pena, vc pode adotar um pet!")
}
console.log(array)
*/

/*
2 - Considere que você tenha acesso a um array  (chamado de 'array original')
 que é composto somente de números. Baseando-se nisso, crie uma função para
  cada um dos itens abaixo, realizando as operações pedidas:
a) Escreva um programa que **imprime** cada um dos valores 
do array original.

b) Escreva um programa que **imprime** cada um dos valores 
do array original divididos por 10

c) Escreva um programa que **crie** um novo array contendo, 
somente, os números pares do array original e **imprima** esse novo array

d) Escreva um programa que **crie** um novo array contendo 
strings, da seguinte forma: "O elemento do índex `i` 
é: `numero`". Depois, **imprima** este novo array.

e) Escreva um programa que imprima no console o maior e
 o menor números contidos no array original

*/

//a)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
/*
for (let elemento of array)
  console.log(elemento)
*/

//b)
/*
for (let elemento of array)
  console.log(elemento/10)
*/

//c)
/*
let novoArray=[]
for (let elemento of array)

  if(elemento%2 === 0){
      novoArray.push(elemento)
      
  }
  console.log(novoArray)
  */

  //d
/*
  let novoArray=[]
  let local = 0
  for (let elemento of array)
        novoArray.push("O elemento do índex "+local+" é: "+elemento)
        local++
        
    console.log(novoArray)
 */

// e)
/*
function maiorNumero(array){
    let maior = array[0]
 for(let numero of array){
     if(numero>maior){
         maior = numero
     }
     
 }

 return maior
}
const maiorNumeroArray = maiorNumero(array)

function menorNumero(array){
    let menor = array[0]
 for(let numero of array){
     if(numero<menor){
         menor = numero
     } 
 }
 return menor
}
const menorNumeroArray = menorNumero(array)

console.log("O maior número é "+maiorNumeroArray+" e o menor é "+menorNumeroArray)
*/



//Desafio 1 - 

/*
const numeroEscolhido = Number(prompt(" Vamos jogar? jogador 1 escolha 1 número e não deixo o jogador 2 ver"))
let chuteJogador = Number(prompt("Jogador 2 diga um número?"))
let tentativas = 0
function chute(numeroEscolhido){
    while(chuteJogador!==numeroEscolhido){
       
       if(chuteJogador>numeroEscolhido){
          console.log("O número chutado foi "+chuteJogador)
          console.log("errou é menor")
          tentativas+= 1
          chuteJogador = Number(prompt("Diga outro número?"))
       }else{
          console.log("O número chutado foi "+chuteJogador)
          console.log("errou é maior")
          tentativas+= 1
          chuteJogador = Number(prompt("Diga outro número?"))
       } 
    }
    if(chuteJogador===numeroEscolhido){
        console.log("Parabens acertou!!")
        console.log("Número de tentativas "+tentativas)
    }
    
}
chute(numeroEscolhido)

*/

// 2-
/*
const numeroEscolhido = Math.floor(Math.random() * 100 + 1)
let chuteJogador = Number(prompt("Jogador 2 diga um número?"))
let tentativas = 0
function chute(numeroEscolhido){
    while(chuteJogador!==numeroEscolhido){
       
       if(chuteJogador>numeroEscolhido){
          console.log("O número chutado foi "+chuteJogador)
          console.log("errou é menor")
          tentativas+= 1
          chuteJogador = Number(prompt("Diga outro número?"))
       }else{
          console.log("O número chutado foi "+chuteJogador)
          console.log("errou é maior")
          tentativas+= 1
          chuteJogador = Number(prompt("Diga outro número?"))
       } 
    }
    if(chuteJogador===numeroEscolhido){
        console.log("Parabens acertou!!")
        console.log("Número de tentativas "+tentativas)
    }
    
}
chute(numeroEscolhido)
*/

// Foi fácil fazer a alteração pois já tinha o código pronto, só alterei no meu código

