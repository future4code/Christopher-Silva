import { DogWalkerDatabase } from "../data/DogWalkerDatabase";
import { CustomError } from "../errors/CustomError";
import { DogWalking } from "../model/DogWalking";
import { Calculate } from "../services/calculate";

import hashGenerator, { HashGenerator } from "../services/hashGenerator";
import idGenerator, { IdGenerator } from "../services/idGenerator";
import tokenGenerator, { TokenGenerator } from "../services/tokenGenerator";

export class DogWalkerBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private dogWalkerDatabase: DogWalkerDatabase,
      private calculate: Calculate
   ) {

   }

   public async creat(
      date: String,
      duration: Number,
      latitude: String,
      longitude: String,
      number_of_pet: Number,
      start_time: String,
      end_time: String
   ) {
      
      try {
         
         if (!date || !duration || !latitude || !longitude || !number_of_pet || !start_time || !end_time) {
            
            throw new CustomError(422, "Preencha todos os dados corretamente");
         }

         var actualDate = new Date();
         var actualDay = parseInt(String(actualDate.getDate()).padStart(2, '0'));
         var actualMonth =parseInt( String(actualDate.getMonth() + 1).padStart(2, '0'));
         var actualYear = actualDate.getFullYear();
         
         const dateWalk = date.split("-");
         var daySent =  parseInt(dateWalk[2])
         var monthSent = parseInt(dateWalk[1])
         var yearSent = parseInt(dateWalk[0])

         if(yearSent < actualYear){
            
            throw new CustomError(422, "Ano não pode ser anterior ao atual");
         }else if(yearSent === actualYear && monthSent < actualMonth){
              throw new CustomError(422, "Mês não pode ser anterior ao atual");
         }else if(yearSent === actualYear && monthSent === actualMonth && daySent < actualDay){   
            throw new CustomError(422, "Dia não pode ser anterior ao atual");
         } 

         const startWalk = start_time.split(":");
         const finishWalk = end_time.split(":");

         const time = await this.calculate.time(startWalk, finishWalk)
         if(time !== duration){

            throw new CustomError(422, "Tempo entre inicio e fim não pode ser diferente que "+duration+" minutos");
         } 

         const id = this.idGenerator.generate();

         const price = await this.calculate.price(duration, number_of_pet)

         await this.dogWalkerDatabase.creat(
            new DogWalking(id,
               date,
               price,
               duration,
               latitude,
               longitude,
               number_of_pet,
               start_time,
               end_time)
         );

         return ("Passeio cadastrado");
      } catch (error) {

         if (error instanceof Error) {
            throw new CustomError(400, error.message)
         } else {
            throw new CustomError(400, "Erro ao cadastrar passeio")
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

         if (!walk || walk.length === 0) {
            throw new CustomError(422, "Passeio não encontrado");
         }else if (walk[0].status === "PENDENTE") {
            throw new CustomError(422, "Passeio ainda não realizado");
         } else if (walk[0].status === "PASSEANDO") {
            throw new CustomError(422, "Passeio ainda não finalizado");
         }

         const startWalk = walk[0].start_walk.split(":");
         const finishWalk = walk[0].finish_walk.split(":");

         const time = await this.calculate.time(startWalk, finishWalk)
         

         return ("Tempo real de passeio: " + time + " minutos");
      } catch (error) {

         if (error instanceof Error) {
            throw new CustomError(400, error.message)
         } else {
            throw new CustomError(400, "Erro ao retornar tempo do passeio")
         }
      }
   }

   public async startWalk(
      idWalk: String,
      startWalk: String

   ) {
      try {
         if (!idWalk || !startWalk) {
            throw new CustomError(422, "Preencha todos os dados corretamente");
         }
         const walkVerifyStartWalk = await this.dogWalkerDatabase.getWalkById(
            idWalk
         );

         if (!walkVerifyStartWalk || walkVerifyStartWalk.length === 0) {
            throw new CustomError(422, "Passeio não encontrado");
         }else if(walkVerifyStartWalk[0].status === "FINALIZADO"){
            throw new CustomError(422, "Não é possivel editar, passeio já finalizado");
         }else if(walkVerifyStartWalk[0].status === "PASSEANDO"){
            throw new CustomError(422, "Não é possivel editar, passeio já iniciado");
         }

         const walk = await this.dogWalkerDatabase.startWalk(
            idWalk,
            startWalk
         );

         return ("Passeio iniciado");
      } catch (error) {

         if (error instanceof Error) {
            throw new CustomError(400, error.message)
         } else {
            throw new CustomError(400, "Erro ao iniciar passeio")
         }
      }
   }

   public async finishWalk(
      idWalk: String,
      finishWalk: String

   ) {
      try {

         if (!idWalk || !finishWalk) {
            throw new CustomError(422, "Preencha todos os dados corretamente");
         }
         const walkData = await this.dogWalkerDatabase.getWalkById(
            idWalk
         );

         if (!walkData || walkData.length === 0) {
            throw new CustomError(422, "Passeio não encontrado");
         }else if(walkData[0].status === "PENDENTE"){
            throw new CustomError(422, "Não é possivel editar, passeio ainda não iniciado");
         }else if(walkData[0].status === "FINALIZADO"){
            throw new CustomError(422, "Não é possivel editar, passeio já finalizado");
         }
         const startWalkNumber = walkData[0].start_walk.split(":");
         const finishWalkNumber = finishWalk.split(":");

           if (startWalkNumber[0] === finishWalkNumber[0] && startWalkNumber[1] >= finishWalkNumber[1]) {
            throw new CustomError(422, "Horário final não pode ser anterior ou igual ao inicial");
         } else if (startWalkNumber[0] > finishWalkNumber[0]) {
            throw new CustomError(422, "Horário final não pode ser anterior ou igual ao inicial");
         }


         const walk = await this.dogWalkerDatabase.finishWalk(
            idWalk,
            finishWalk
         );

         return ("Passeio finalizado");
      } catch (error) {

         if (error instanceof Error) {
            throw new CustomError(400, error.message)
         } else {
            throw new CustomError(400, "Erro ao finalizar passeio")
         }
      }
   }

   public async walks(
      page: Number| null | String,
      walksForPage: Number | null | String
   ) {
      try {

         const walk = (async (page: Number | any, walksForPage: Number | any) => {

            if (page === 0) {
               throw new CustomError(400, "Número da página não pode ser 0");
            } else if ((page || page === "") && !walksForPage) {
               throw new CustomError(400, "Preencha ambos os dados para paginação");
            } else if (!page && (walksForPage || walksForPage === "")) {
               throw new CustomError(400, "Preencha ambos os dados para paginação");
            } else if (page && walksForPage) {
               const result = await this.dogWalkerDatabase.walksByPage(page, walksForPage);
               return result
            } else {
               const result = await this.dogWalkerDatabase.allWalks();
               return result
            }
         })

         return walk(page, walksForPage);
      } catch (error) {

         if (error instanceof Error) {
            throw new CustomError(400, error.message)
         } else {
            throw new CustomError(400, "Erro ao retornar passeios")
         }
      }
   }

}

export default new DogWalkerBusiness(
   new IdGenerator(),
   new DogWalkerDatabase(),
   new Calculate()
)