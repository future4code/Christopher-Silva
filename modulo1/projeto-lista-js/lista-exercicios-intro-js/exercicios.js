// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt("Qual altura do retangulo?")
const largura = prompt("Qual largura do retangulo")
const area = altura * largura
console.log(area)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt("Em que ano estamos?")
const anoNascimento = prompt("Que ano você nasceu?")
  const idade = anoAtual - anoNascimento
    console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
    return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
   const nome = prompt("Qual seu nome?")
   const idade = prompt ("Qual sua idade?")
   const email = prompt ("Qual seu e-mail?")

      console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt ("Qual sua cor favorita?")
  const cor2 = prompt ("Qual sua segunda cor favorita?")
  const cor3 = prompt ("Qual sua terceira cor favorita?")
    const cores = [cor1, cor2, cor3]
      console.log(cores) 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const maiusculo = string.toUpperCase()
    return maiusculo
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingressosCalculo = custo / valorIngresso
    return ingressosCalculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanho = string1.length === string2.length
    return tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroItem = array[0]
    return primeiroItem
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
   const ultimoItem = array.length-1
    return array[ultimoItem]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primItem = array[0]
  array.splice(0,1,array[array.length - 1])
   array.pop()
   array.push(primItem)
    return(array)
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const str1 = string1.toUpperCase()
const str2 = string2.toUpperCase()

    const checa = str1 === str2
      return(checa) 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}