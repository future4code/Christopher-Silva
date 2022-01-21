// Exercício 1
// a)como fazemos para acessar os parâmetros passados na linha de comando para o Node? process.argv

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores,
// imprima no console uma mensagem que siga a seguinte estrutura:

/*
const meuNome= "Christopher"
const minhaIdade= Number("38")

console.log("Olá,", meuNome,"! Você tem", minhaIdade," anos.")
*/

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

/*
const calculoIdadeMaisSete = minhaIdade + Number("7")
console.log("Olá,", meuNome,"! Você tem", minhaIdade," anos.  Em sete anos você terá", calculoIdadeMaisSete, "anos.")
*/


/*
Desafio
- Ainda nos exercícios 1 e 2 adicione verificações para garantir que os parâmetros passados estão corretos e informe ao usuário caso não estejam. Exemplo: "Esperava 2 parâmetros só recebi um."
- Volte nos exercícios 1 e 2 e faça com que o texto impresso no terminal (usando`console.log`) seja colorido.
*/

const seuNome= process.argv[2]
const suaIdade= process.argv[3]
const numeroTest = process.argv[4]

const print=()=>{
if (seuNome === undefined){
    console.log("\033[31m passe os seguintes parametros após o npm run start, primeiro:seuNome, segundo:suaIdade, terceiro:UmNumero")
}else if (suaIdade === undefined ){
    console.log("\033[31m é necessário passar 3 parametros, nessa ordem, primeiro:seuNome, segundo:suaIdade, terceiro:UmNumero")
}else if (numeroTest === undefined ){
    console.log("\033[31m é necessário passar 3 parametros, na ordem, primeiro:seuNome, segundo:suaIdade, terceiro:UmNumero")
}else{
    const calculo = Number(suaIdade) + Number(numeroTest)
    console.log("\033[32m Olá, ", seuNome,"! Você tem ", suaIdade," anos.  Em ", numeroTest," anos você terá ", calculo, " anos.")
}
}

print()