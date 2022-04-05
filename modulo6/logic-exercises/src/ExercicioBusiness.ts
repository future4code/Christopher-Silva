import { ExerciciosDatabase } from "./ExerciciosDatabase";

export class ExerciciosBusiness {

  constructor(
    private exercicios: ExerciciosDatabase,
  ) {

  }

  public ex1(text:string) {
     

      let arrayNum:number[] = this.exercicios.ex1(text)

      let firstNum:any = arrayNum[0];
      for (const num of arrayNum) {
        if (num === firstNum) {
          firstNum += 1
        } else {
          throw new Error ("falta o número "+firstNum) 
        };
      }
      return "Nenhum número faltante";

  }
}

  export default new ExerciciosBusiness(
    new ExerciciosDatabase()
 )
