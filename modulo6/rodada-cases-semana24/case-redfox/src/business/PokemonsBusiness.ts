import { PokemonsDatabase } from "../data/PokemonsDatabase";
import { CustomError } from "../errors/CustomError";
import { Participants} from "../model/Participants";

export class PokemonsBusiness {

   constructor(
      private pokemonsDatabase: PokemonsDatabase,
   ) {

   }
   public async all() {
      try {

         const pokemons = await this.pokemonsDatabase.getPokemons();

         if (!pokemons || pokemons.length === 0) {
            throw new CustomError(422, "Erro ao retornar pokemons");
         }

      
         return (pokemons);
      } catch (error) {

         if (error instanceof Error) {
            throw new CustomError(400, error.message)
         } else {
            throw new CustomError(400, "Erro ao retornar pokemons")
         }
      }
   }

   public async page(
      page: Number,
      pokemonsForPage: Number
   ) {
      try {

        if(page <= 0){
         throw new CustomError(422, "número da página não pode ser 0 ou número negativo");

        }else if (!page || !pokemonsForPage) {
            
            throw new CustomError(422, "Preencha todos os dados corretamente");
         }
         
         const pokemons = await this.pokemonsDatabase.getPokemonsByPage(page,pokemonsForPage);

         if (!pokemons || pokemons.length === 0) {
            throw new CustomError(422, "Erro ao retornar pokemons ou nenhum pokemon nesta página");
         }

      
         return (pokemons);
      } catch (error) {

         if (error instanceof Error) {
            throw new CustomError(400, error.message)
         } else {
            throw new CustomError(400, "Erro ao retornar pokemons")
         }
      }
   }

   public async byId(
      id: String
   ) {
      try {
         if (!id) {
            throw new CustomError(422, "Preencha o id corretamente");
         }
         const pokemon = await this.pokemonsDatabase.gePokemonById(
            id
         );

         return (pokemon);
      } catch (error) {

         if (error instanceof Error) {
            throw new CustomError(400, error.message)
         } else {
            throw new CustomError(400, "Erro ao retornar pokemon")
         }
      }
   }

   public async search(
      search: String
   ) {
      try {
         if (!search ) {
            throw new CustomError(422, "Preencha o campo de busca");
         }
         const pokemon = await this.pokemonsDatabase.getPokemon(
            search
         );

         if (!pokemon || pokemon.length === 0 ) {
            throw new CustomError(204, "Nenhum pokemon encontrado");
         }

         return (pokemon);
      } catch (error) {

         if (error instanceof Error) {
            throw new CustomError(400, error.message)
         } else {
            throw new CustomError(400, "Erro ao retornar pokemon")
         }
      }
   }

}

export default new PokemonsBusiness(
   
   new PokemonsDatabase(),
)