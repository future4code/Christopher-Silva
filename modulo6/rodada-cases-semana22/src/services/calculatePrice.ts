
import { DogWalkInputDTO } from "../model/DogWalking";

export class CalculatePrice {
    public calculate = async (duration:Number, numberOfPets:any): Promise<any> =>{
if(duration === 30){
        if(numberOfPets === 1){
            return 25
        }else{
            return 25 + 15*(numberOfPets-1)
        }
    }else if(duration === 60){
        if(numberOfPets === 1){
            return 35
        }else{
            return 35 + 20*(numberOfPets-1)
        }
    }
    } 
}


