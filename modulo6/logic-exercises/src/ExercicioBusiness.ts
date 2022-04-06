import { ExerciciosDatabase } from "./ExerciciosDatabase";

export class ExerciciosBusiness {

  constructor(
    private exercicios: ExerciciosDatabase,
  ) {

  }

  public ex1(arrayNum:Number[]) {
     
    let firstNum:any = arrayNum[0];
    for (const num of arrayNum) {
      if (num === firstNum) {
        firstNum += 1
      } else {
        return ("falta o número "+firstNum) 
      };
    }
    return "Nenhum número faltante";

}

public ex1BD(text:string) {
     
      let arrayNum:number[] = this.exercicios.ex1(text)

      let firstNum:any = arrayNum[0];
      for (const num of arrayNum) {
        if (num === firstNum) {
          firstNum += 1
        } else {
          return ("falta o número "+firstNum) 
        };
      }
      return "Nenhum número faltante";

  }

  public indexOf(source:string, query:string) {

    let array:string[] = Array.from(source)
    let index:number = 0

    for (let character of array){
      if (character === query){
        return index
      }else{
        index +=1
      }
    }

    return "caracter não encontrado na palavra"
  }
}

  export default new ExerciciosBusiness(
    new ExerciciosDatabase()
 )
