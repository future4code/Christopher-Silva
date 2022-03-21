import { DogWalkerDatabase } from "../data/DogWalkerDatabase";
import { CustomError } from "../errors/CustomError";
import { DogWalking } from "../model/DogWalking";
import { CalculatePrice } from "../services/calculatePrice";
import hashGenerator, { HashGenerator } from "../services/hashGenerator";
import idGenerator, { IdGenerator } from "../services/idGenerator";
import tokenGenerator, { TokenGenerator } from "../services/tokenGenerator";

export class DogWalkerBusiness {

   constructor(
      private idGenerator : IdGenerator,
      private hashGenerator : HashGenerator,
      private tokenGenerator : TokenGenerator,
      private dogWalkerDatabase : DogWalkerDatabase,
      private calculatePrice : CalculatePrice
   ){

   }

   public async creat(
      date: Date,
      duration: Number, 
      latitude: String, 
      longitude:String, 
      numberOfPets:Number, 
      startTime: Number, 
      endTime: Number
   ) {
      try {
         if (!date || !duration || !latitude || !longitude || !numberOfPets || !startTime || !endTime) {
            throw new CustomError(422, "Preencha todos os dados corretamente");
         }

         const id = this.idGenerator.generate();

        const price = await this.calculatePrice.calculate(duration,numberOfPets)
console.log("preço",price)
         await this.dogWalkerDatabase.creat(
            new DogWalking(id,
               date,
               price,
               duration, 
               latitude, 
               longitude, 
               numberOfPets, 
               startTime, 
               endTime)
         );

         return ("Passeio cadastrado");
      } catch (error) {

         if (error instanceof Error) {
               throw new CustomError(400,error.message)
        } else {
         throw new CustomError(400,"Erro ao cadastrar passeio")
        }

      }

   }

}

export default new DogWalkerBusiness(
   new IdGenerator(),
   new HashGenerator(),
   new TokenGenerator(),
   new DogWalkerDatabase(),
   new CalculatePrice()
)