import { Request, Response } from "express";
import DogWalkerBusiness from "../business/DogWalkerBusiness";
import { CustomError } from "../errors/CustomError";

export class DogWalkerController {

   public async creat(req: Request, res: Response) {
      try {
         const { date, duration, latitude, longitude, number_of_pets, start_time, end_time } = req.body
         const result = await DogWalkerBusiness.creat(
            date,
            duration, 
            latitude, 
            longitude, 
            number_of_pets, 
            start_time, 
            end_time
         );
         res.status(200).send(result);
      } catch (error) {
         
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
           res.send({ message: "Algo deu errado ao cadastrar passeio" })
        }
      }
   }

   public async show(req: Request, res: Response) {
      try {
         const { id_walk } = req.query
         
         const result = await DogWalkerBusiness.show(
            id_walk as string
         );
         res.status(200).send(result);
      } catch (error) {
         
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.send({ message: "Algo deu errado ao coletar passeio" })
        }
      }
   }

   public async startWalk(req: Request, res: Response) {
      try {
         const  idWalk  = req.params.id_walk
         const  startWalk  = req.body.start_walk

         const result = await DogWalkerBusiness.startWalk(
            idWalk,
            startWalk
         );
         res.status(200).send(result);
      } catch (error) {
         
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.send({ message: "Algo deu errado ao iniciar passeio" })
        }
      }
   }

   public async finishWalk(req: Request, res: Response) {
      try {
         const  idWalk  = req.params.id_walk
         const  finishWalk  = req.body.finish_walk

         const result = await DogWalkerBusiness.finishWalk(
            idWalk,
            finishWalk
         );
         res.status(200).send(result);
      } catch (error) {
         
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.send({ message: "Algo deu errado ao iniciar passeio" })
        }
      }
   }

   public async walks(req: Request, res: Response) {
      try {
         const { page, walks_for_page } = req.body

         const result = await DogWalkerBusiness.walks(page, walks_for_page);
         res.status(200).send(result);
      } catch (error) {
         
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.send({ message: "Algo deu errado ao retornar passeios" })
        }
      }
   }

}

export default new DogWalkerController()