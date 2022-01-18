// Exercício 2
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos.
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

/*
Desafio
- Ainda nos exercícios 1 e 2 adicione verificações para garantir que os parâmetros passados estão corretos e informe ao usuário caso não estejam. Exemplo: "Esperava 2 parâmetros só recebi um."
- Volte nos exercícios 1 e 2 e faça com que o texto impresso no terminal (usando`console.log`) seja colorido.
*/

const tipoOperacao = process.argv[2]
const primeiroValor = process.argv[3]
const segundoValor = process.argv[4]

const soma= Number(primeiroValor) + Number(segundoValor)
const subtracao= Number(primeiroValor) - Number(segundoValor)
const multiplicacao= Number(primeiroValor) * Number(segundoValor)
const divicao= Number(primeiroValor) / Number(segundoValor)

const operacao=()=>{
  if (tipoOperacao === undefined){
    console.log("\033[31m passe os seguintes parametros após o npm run start=","\033[33m primeiro: o tipo de operação","\033[34m (soma=add, subtração=sub, multiplicação=mult, divisão=div)", "\033[33m segundo:umNumero, terceiro:maisUmNumero")
  }else if (primeiroValor === undefined){
    console.log("\033[31m é necessário passar 3 parametros na seguinte ordem, primeiro: o tipo de operação, segundo:umNumero, terceiro:maisUmNumero")
  }else if (segundoValor === undefined){
    console.log("\033[31m é necessário passar 3 parametros na seguinte ordem, primeiro: o tipo de operação, segundo:umNumero, terceiro:maisUmNumero")
  }else {
    switch (tipoOperacao) {
        case "add":
        console.log("\033[32m a soma de ", primeiroValor," e ", segundoValor," é igual a ",soma)  ;
          break;
          case "sub":
        console.log("\033[32m a subtração de ", primeiroValor," por ", segundoValor," é igual a ",subtracao)  ;
          break;
          case "mult":
        console.log("\033[32m a multiplicação de ", primeiroValor," por ", segundoValor," é igual a ",multiplicacao)  ;
          break;
          case "div":
        console.log("\033[32m adivisão de ", primeiroValor," por ", segundoValor," é igual a ",divicao)  ;
          break;
          default:
              "ocorreu um erro"
    }
    }
} 
operacao()
