import { ExerciciosDatabase } from "./ExerciciosDatabase";

export class ExerciciosBusiness {

  constructor(
    private exercicios: ExerciciosDatabase,
  ) {

  }

  public ex1(arrayNum: Number[]) {

    let firstNum: any = arrayNum[0];
    for (const num of arrayNum) {
      if (num === firstNum) {
        firstNum += 1
      } else {
        return ("falta o número " + firstNum)
      };
    }
    return "Nenhum número faltante";

  }

  public ex1BD(text: string) {

    let arrayNum: number[] = this.exercicios.ex1(text)

    let firstNum: any = arrayNum[0];
    for (const num of arrayNum) {
      if (num === firstNum) {
        firstNum += 1
      } else {
        return ("falta o número " + firstNum)
      };
    }
    return "Nenhum número faltante";

  }

  public indexOf(source: string, query: string) {

    let array: string[] = Array.from(source)
    let index: number = 0

    for (let character of array) {
      if (character === query) {
        return index
      } else {
        index += 1
      }
    }

    return "caracter não encontrado na palavra"
  }

  public checkCharacter(str: string) {

    let array: string[] = Array.from(str)
    let arrayTest: string[] = Array.from(str)
    //let index:number = 0      ([])
    let lastCha = arrayTest[arrayTest.length - 1]

    for (let character of array) {
      if ((character === "(") && (lastCha === ")") || (character === "[") && (lastCha === "]") || (character === "{") && (lastCha === "}")) {
        arrayTest.splice(0, 1)
        arrayTest.pop()
        lastCha = arrayTest[arrayTest.length - 1]
      } else if (arrayTest.length === 0) {
        return true
      } else {
        return false
      }
    }
  }


  public checkCommonPrefix(strs: string[]) { // recebe o array do console no index

    if (strs.length === 0) return ""  //if que verifica se o que foi enviado estiver vaziu ja retorna um array vazio

    let commonPrefix = ""  // variavel para salvar as letras iniciais iguais

    for (let i = 0; i < strs[0].length; i++) { //for que pega o tamanho da primeira palavra
      let currentChar = strs[0][i]  // var que pega letra por letra da primeira string

      for (let j = 0; j < strs.length; j++) {  //for que pega cada string do array enviado
        if (strs[j][i] !== currentChar) {  // if que pega letra por letra da cada string, se for diferente retorna a var que vai salvar as letras iguais
          return commonPrefix
        }
      }

      if (currentChar) {   // se passar no primeiro for é porque as letras são iguais, dai salva essa letra 
        commonPrefix += currentChar
      }
    }

    return commonPrefix
  }

  public lonelyNumber(strs: number[]) {

    let newArray = strs
    for (let i = 0; i < strs.length; i++) {
      for (let j = 1; i < strs.length; j++) {
        if (strs[i] === strs[j]) {
          
            let buscarPor = strs[i]
            let indice = newArray.indexOf(buscarPor);
            while (indice >= 0) {
              newArray.splice(indice, 1);
              indice = newArray.indexOf(buscarPor);
            }
          

        }
      }
    }

    return newArray
  }
}



export default new ExerciciosBusiness(
  new ExerciciosDatabase()
)
