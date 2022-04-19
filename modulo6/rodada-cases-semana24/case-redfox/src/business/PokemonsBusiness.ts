import { PokemonsDatabase } from "../data/PokemonsDatabase";

export class PokemonsBusiness {

   constructor(
      private pokemonsDatabase: PokemonsDatabase,
   ) {

   }
   public async all(test:String) {
      try {

         const pokemons = await this.pokemonsDatabase.getAllPokemons(test);

         if (!pokemons || pokemons.length === 0) {

            throw new Error("Erro ao retornar lista de pokemons");
         }

         return (pokemons);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Erro ao retornar pokemons")
         }
      }
   }

   public async page(
      page: Number | String,
      pokemonsForPage: Number | String
   ) {
      try {

         if (page <= 0 || pokemonsForPage <= 0 || !page || !pokemonsForPage) {
            throw new Error("Preencha todos os dados corretamente, valor enviado não pode ser 0 nem número negativo");

         } 

         const pokemons = await this.pokemonsDatabase.getPokemonsByPage(page, pokemonsForPage);

         if (!pokemons || pokemons.length === 0) {
            throw new Error("Nenhum pokemon nesta página");
         }

         return (pokemons);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Erro ao retornar pokemons")
         }
      }
   }

   public async byId(
      id: String
   ) {
      try {
         if (!id) {
            throw new Error("Preencha o id corretamente");
         }
         const pokemons = await this.pokemonsDatabase.gePokemonById(
            id
         );

         if (!pokemons || pokemons.length === 0) {
            throw new Error("Nenhum pokemon encontrado");
         }

         return (pokemons);
      } catch (error) {

         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Erro ao retornar pokemon")
         }
      }
   }

   public async search(
      search: String
   ) {
      try {
         if (!search) {
            throw new Error("Parametro de busca não enviado");
         }
         const pokemons = await this.pokemonsDatabase.getPokemonSearch(
            search
         );

         if (!pokemons || pokemons.length === 0) {
            throw new Error("Nenhum pokemon encontrado");
         }

         return (pokemons);

      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message)
         } else {
            throw new Error("Erro ao retornar pokemon")
         }
      }
   }
}
export default new PokemonsBusiness(
   new PokemonsDatabase(),
)