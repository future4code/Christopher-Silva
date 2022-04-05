import express from "express";
import { PokemonsController } from "../controller/PokemonsController";


export const pokemonsRouter = express.Router();

const pokemonsController = new PokemonsController();

pokemonsRouter.get("/all", pokemonsController.all);//Retorna todos pokemons
pokemonsRouter.get("/page", pokemonsController.page); // Retorna lista de pokemons por página e quantidade
pokemonsRouter.get("/byid", pokemonsController.byId); // Retorna o pokemon pelo id
pokemonsRouter.get("/search", pokemonsController.search); // Retorna lista de pokemons por nome ou tipo e mostra todos que contenham a busca 




