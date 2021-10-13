// Exercícios de interpretação de código
/*
1 - a)
o código solicita um número ao usuário, bloquei a mensagem para apenas números,
 usa o módulo e retorna zero ou 1, formula "if "compara o resultado com 0 para saber se o 
 número é par ou impar.

 b) se for par retorna passou no teste
 c) se for impar retorna não passou no teste
 */

/*
2 - a) código serve para consultar valores das frutas
b) "O preço da fruta Maça é R$ 2,25
c) tirando break após o item Pêra, o valor dela passa a ser 5,
 pois o que vale é a última alteração da formula.

*/

/*
3 - a) a primeira linha cria uma variavel com nome numero
que solicita um número ao usuário e a respotasta deve ser um número

b) resposta sendo 10 aparecerá "Esse número passou no teste"
sendo -10 não aparecerá nada

c)escopo pai onde se encontra o console.log(mensagem) se encontra,
 não tem acesso ao escopo
*/

//Exercícios de escrita de código
/*
1 -
a) Faça um `prompt` para receber a idade do usuário e guarde 
em uma variável.

b) Garanta que essa variável é do tipo `Number`, você deve
 usar o cast para number para isso.

c) Agora veja se essa idade do usuário corresponde à idade 
mínima que permite dirigir. Se sim, imprima no 
console `"Você pode dirigir"`, caso contrário, 
imprima `"Você não pode dirigir."`

*/
/*
const idade = Number(prompt("Qual sua idade?"))

if(idade>=18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}
*/
/*
// 2 - 
const turno = prompt("Que turno você estuda? digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

if(turno==="M"){
    console.log("Bom Dia!")
} else if (turno==="V") {
    console.log("Boa tarde!")
} else if (turno==="N"){
    console.log("Boa Noite!")
} else {
    console.log("Digite um turno válido")
}
*/

//3 -
/*
const turno = prompt("Que turno você estuda? digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()
switch(turno) {
    case"M":
      console.log("Bom Dia!")
      break
    case"V":
      console.log("Boa tarde!")
      break
    case"N":
      console.log("Boa Noite!")
      break
    default:
      console.log("Digite um turno válido") 
}
*/

// 4 -
/*
const generoFilme = prompt("Qual gênero do filme?")
const valorFilme = prompt("Qual valor do filme?")

const condicaoGenero= generoFilme === "Fantasia"
const condicaoValor = valorFilme <= 15

if(condicaoGenero && condicaoValor){
    console.log("Bom filme!")
}else {
    console.log("Escolha outro filme!")
}
*/
// desafio 1 -
/*
const generoFilme = prompt("Qual gênero do filme?")
const valorFilme = prompt("Qual valor do filme?")

const condicaoGenero= generoFilme === "Fantasia"
const condicaoValor = valorFilme <= 15

if(condicaoGenero && condicaoValor){
    const lanche = prompt("Que lanche vai querer?")
    console.log("Bom filme!")
    console.log("Aproveite seu/sua "+lanche)
}else {
    console.log("Escolha outro filme!")
}
*/

// 2 -
/*
- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos
*/

const nomeCompleto = prompt("Qual seu completo? (sem abreviar)")
const tipoJogo = prompt ("Qual tipo de jogo? 'IN' indica internacional e 'DO' indica doméstico").toUpperCase()
const etapaJogo = prompt ("QuaL etapa? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase()
const categoriaJogo = Number(prompt ("Qual categoria? opções 1, 2, 3 ou 4"))
const qtdIngressos = prompt ("Quantos ingressos?")

console.log("---Dados da compra---")
console.log("Nome do cliente:  "+nomeCompleto)
console.log("Tipo de jogo:  "+tipoJogo)
console.log("Etapa do jogo:  "+etapaJogo)
console.log("Categoria:  "+categoriaJogo)
console.log("Quantidade de Ingressos:   "+qtdIngressos)
console.log("---Valores---")
const condTipo1 = tipoJogo==="DO"
const condTipo2 = tipoJogo==="IN"

const condEtapa1 = etapaJogo==="SF"
const condEtapa2 = etapaJogo==="DT"
const condEtapa3 = etapaJogo==="FI"

const condCategoria1 = categoriaJogo===1
const condCategoria2 = categoriaJogo===2
const condCategoria3 = categoriaJogo===3
const condCategoria4 = categoriaJogo===4

if(condTipo1 && condEtapa1 && condCategoria1){
        console.log("Valor do Ingresso:   R$"+132000)
        console.log("valor total:   R$"+88000)
        console.log("valor total:   R$"+qtdIngressos*88000)
    }else if(condTipo1 && condEtapa1 && condCategoria3){
        console.log("Valor do Ingresso:   R$"+55000)
        console.log("valor total:   R$"+qtdIngressos*55000)
    }else if(condTipo1 && condEtapa1 && condCategoria4){
        console.log("Valor do Ingresso:   R$"+22000)
        console.log("valor total:   R$"+qtdIngressos*22000)
    }
    else if(condTipo1 && condEtapa2 && condCategoria1){
        console.log("Valor do Ingresso:   R$"+66000)
        console.log("valor total:   R$"+qtdIngressos*66000)
    }else if(condTipo1 && condEtapa2 && condCategoria2){
        console.log("Valor do Ingresso:   R$"+44000)
        console.log("valor total:   R$"+qtdIngressos*44000)
    }else if(condTipo1 && condEtapa2 && condCategoria3){
        console.log("Valor do Ingresso:   R$"+33000)
        console.log("valor total:   R$"+qtdIngressos*33000)
    }else if(condTipo1 && condEtapa2 && condCategoria4){
        console.log("Valor do Ingresso:   R$"+17000)
        console.log("valor total:   R$"+qtdIngressos*17000)
    }
    else if(condTipo1 && condEtapa3 && condCategoria1){
        console.log("Valor do Ingresso:   R$"+198000)
        console.log("valor total:   R$"+qtdIngressos*198000)
    }else if(condTipo1 && condEtapa3 && condCategoria2){
        console.log("Valor do Ingresso:   R$"+132000)
        console.log("valor total:   R$"+qtdIngressos*132000)
    }else if(condTipo1 && condEtapa3 && condCategoria3){
        console.log("Valor do Ingresso:   R$"+88000)
        console.log("valor total:   R$"+qtdIngressos*88000)
    }else if(condTipo1 && condEtapa3 && condCategoria4){
        console.log("Valor do Ingresso:   R$"+33000)
        console.log("valor total:   R$"+qtdIngressos*33000)
    }
    //IN
    if(condTipo2 && condEtapa1 && condCategoria1){
        console.log("Valor do Ingresso:   R$"+132000*410)
        console.log("valor total:   R$"+qtdIngressos*132000*410)
    }else if(condTipo2 && condEtapa1 && condCategoria2){
        console.log("Valor do Ingresso:   R$"+88000*410)
        console.log("valor total:   R$"+qtdIngressos*88000*410)
    }else if(condTipo2 && condEtapa1 && condCategoria3){
        console.log("Valor do Ingresso:   R$"+55000*410)
        console.log("valor total:   R$"+qtdIngressos*55000*410)
    }else if(condTipo2 && condEtapa1 && condCategoria4){
        console.log("Valor do Ingresso:   R$"+22000*410)
        console.log("valor total:   R$"+qtdIngressos*22000*410)
    }
    else if(condTipo2 && condEtapa2 && condCategoria1){
        console.log("Valor do Ingresso:   R$"+66000*410)
        console.log("valor total:   R$"+qtdIngressos*66000*410)
    }else if(condTipo2 && condEtapa2 && condCategoria2){
        console.log("Valor do Ingresso:   R$"+44000*410)
        console.log("valor total:   R$"+qtdIngressos*44000*410)
    }else if(condTipo2 && condEtapa2 && condCategoria3){
        console.log("Valor do Ingresso:   R$"+33000*410)
        console.log("valor total:   R$"+qtdIngressos*33000*410)
    }else if(condTipo2 && condEtapa2 && condCategoria4){
        console.log("Valor do Ingresso:   R$"+17000*410)
        console.log("valor total:   R$"+qtdIngressos*17000*410)
    }
    else if(condTipo2 && condEtapa3 && condCategoria1){
        console.log("Valor do Ingresso:   R$"+198000*410)
        console.log("valor total:   R$"+qtdIngressos*198000*410)
    }else if(condTipo2 && condEtapa3 && condCategoria2){
        console.log("Valor do Ingresso:   R$"+132000*410)
        console.log("valor total:   R$"+qtdIngressos*132000*410)
    }else if(condTipo2 && condEtapa3 && condCategoria3){
        console.log("Valor do Ingresso:   R$"+88000*410)
        console.log("valor total:   R$"+qtdIngressos*88000*410)
    }else if(condTipo2 && condEtapa3 && condCategoria4){
        console.log("Valor do Ingresso:   R$"+33000*410)
        console.log("valor total:   R$"+qtdIngressos*33000*410)
    }
    









