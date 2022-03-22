import { DogWalkerDatabase } from "../data/DogWalkerDatabase";
import { CustomError } from "../errors/CustomError";
import { DogWalking } from "../model/DogWalking";
import { Calculate } from "../services/calculate";

import hashGenerator, { HashGenerator } from "../services/hashGenerator";
import idGenerator, { IdGenerator } from "../services/idGenerator";
import tokenGenerator, { TokenGenerator } from "../services/tokenGenerator";

export class DogWalkerBusiness {

   constructor(
      private idGenerator : IdGenerator,
      private hashGenerator : HashGenerator,
      private tokenGenerator : TokenGenerator,
      private dogWalkerDatabase : DogWalkerDatabase,
      private calculate : Calculate
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

        const price = await this.calculate.price(duration,numberOfPets)
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

   public async show(
      id: String
   ) {
      try {
         if (!id) {
            throw new CustomError(422, "Preencha todos os dados corretamente");
         }
         const walk = await this.dogWalkerDatabase.getWalkById(
            id  
         );

         if (walk[0].status === "PENDENTE") {
            throw new CustomError(422, "Passeio ainda não realizado");
         }else if(walk[0].status === "PASSEANDO") {
            throw new CustomError(422, "Passeio ainda não finalizado");
         }

         const startWalk = walk[0].start_walk.split(":") ;
         const finishWalk = walk[0].finish_walk.split(":");

         const time = await this.calculate.time(startWalk,finishWalk)

         return ("Tempo real de passeio: "+time+" minutos" );
      } catch (error) {

         if (error instanceof Error) {
               throw new CustomError(400,error.message)
        } else {
         throw new CustomError(400,"Erro ao cadastrar passeio")
        }
      }
   }

   public async startWalk(
      idWalk: String,
      startWalk:String

   ) {
      try {
         if (!idWalk || !startWalk) {
            throw new CustomError(422, "Preencha todos os dados corretamente");
         }
         const walk = await this.dogWalkerDatabase.startWalk(
            idWalk,
            startWalk  
         );

         return ("Passeio iniciado");
      } catch (error) {

         if (error instanceof Error) {
               throw new CustomError(400,error.message)
        } else {
         throw new CustomError(400,"Erro ao iniciar passeio")
        }
      }
   }

   public async finishWalk(
      idWalk: String,
      finishWalk:String

   ) {
      try {

         if (!idWalk || !finishWalk) {
            throw new CustomError(422, "Preencha todos os dados corretamente");
         }
         const walkData = await this.dogWalkerDatabase.getWalkById(
            idWalk 
         );

         const startWalkNumber = walkData[0].start_walk.split(":") ;
         const finishWalkNumber = finishWalk.split(":");

         if (startWalkNumber[0] === finishWalkNumber[0] && startWalkNumber[1] > finishWalkNumber[1]) {
            throw new CustomError(422, "Horário final não pode ser anterior ao inicial");
         }else if(startWalkNumber[0] > finishWalkNumber[0]){
            throw new CustomError(422, "Horário final não pode ser anterior ao inicial");
         }


         const walk = await this.dogWalkerDatabase.finishWalk(
            idWalk,
            finishWalk  
         );

         return ("Passeio finalizado");
      } catch (error) {

         if (error instanceof Error) {
               throw new CustomError(400,error.message)
        } else {
         throw new CustomError(400,"Erro ao finalizar passeio")
        }
      }
   }

}

export default new DogWalkerBusiness(
   new IdGenerator(),
   new HashGenerator(),
   new TokenGenerator(),
   new DogWalkerDatabase(),
   new Calculate()
)