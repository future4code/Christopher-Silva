//const nome:string="Chris"
//const dataNascimento:string =  "15/05/1983"

function imprimeConsole (nome:string,dataNascimento:string):void{

   const separaData:string[] = dataNascimento.split("/")

const dia:string = separaData[0]
const mes:number = Number(separaData[1])
const ano:string = separaData[2]

const mesesDoANo:string[] = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]

const mesDoAno:string=mesesDoANo[mes-1]

console.log("Olá me chamo ",nome," nasci no dia", dia ,"do mês de", mesDoAno ,"do ano de ",ano) 
}

imprimeConsole("Chris","15/05/1983")