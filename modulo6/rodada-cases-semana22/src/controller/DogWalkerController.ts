import { Request, Response } from "express";
import DogWalkerBusiness from "../business/DogWalkerBusiness";

export class DogWalkerController {

   public async creat(req: Request, res: Response) {
      try {
         const { date, duration, latitude, longitude, numberOfPets, startTime, endTime } = req.body
         const result = await DogWalkerBusiness.creat(
            date,
            duration, 
            latitude, 
            longitude, 
            numberOfPets, 
            startTime, 
            endTime
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

}

export default new DogWalkerController()