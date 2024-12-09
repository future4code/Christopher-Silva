
export const arrayex1 = [1,2,3,4,5,6,8]

export class ExerciciosDatabase {
 
    public ex1(text:String): number[] {
        let array = []

        if(text === "falta numero"){
          array = [1,2,3,4,5,6,8]
           
        }else{
             array = [1,2,3,4,5,6,7,8]

        }
        
return array
    }
}