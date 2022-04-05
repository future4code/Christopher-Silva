import { Request, Response } from "express";
import PokemonsBusiness from "../business/PokemonsBusiness";
import { CustomError } from "../errors/CustomError";

export class PokemonsController {

   public async all(req: Request, res: Response) {
      try {

         const result = await PokemonsBusiness.all();
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Algo deu errado ao coletar pokemons" })
         }
      }
   }

   public async page(req: Request, res: Response) {
      try {
         const { page, pokemons_for_page } = req.body

         const result = await PokemonsBusiness.page(page, pokemons_for_page);
         res.status(200).send(result);
      } catch (error) {

         if (error instanceof Error) {
            res.status(400).send(error.message);
         } else {
            res.send({ message: "Algo deu errado ao coletar pokemons" })
         }
      }
   }

   public async byId(req: Request, res: Response) {
      try {
         const { id } = req.query
         
         const result = await PokemonsBusiness.byId(
            id as string
         );
         res.status(200).send(result);
      } catch (error) {
         
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.send({ message: "Algo deu errado ao coletar pokemon" })
        }
      }
   }

   public async search(req: Request, res: Response) {
      try {
         const { search1 } = req.query
         
         const result = await PokemonsBusiness.search(
            search1 as string
         );
         res.status(200).send(result);
      } catch (error) {
         
         if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.send({ message: "Algo deu errado ao coletar pokemon" })
        }
      }
   }
}

export default new PokemonsController()