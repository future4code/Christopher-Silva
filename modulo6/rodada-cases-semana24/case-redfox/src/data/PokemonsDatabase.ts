import BaseDataBase from "./BaseDatabase";

export class PokemonsDatabase extends BaseDataBase {

   protected tableName: string = "pokemon_go_api";

   public async getAllPokemons(test:String): Promise<void|any> {
      try {
         const result = await BaseDataBase.connection.raw(`
         SELECT * from ${this.tableName};
         `);
         return result[0];
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
          }
      }
   }

   public async getPokemonsByPage(page:Number | any,pokemonsForPage:Number | any): Promise<void|any> {
      try {
         const result = await BaseDataBase.connection.raw(`
         SELECT * from ${this.tableName} LIMIT ${page-1}, ${pokemonsForPage};
         `);
         return result[0];
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
          }
      }
   }

   public async gePokemonById(id: String): Promise<void|any> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} WHERE id = '${id}'
         `);
         return result[0];
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
          }
      }
   }

   public async getPokemonSearch(search: String): Promise<void|any> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} 
            WHERE (name LIKE '%${search}%')
            OR (type_1 LIKE '%${search}%')
            OR (type_2 LIKE '%${search}%')
         `);
         return result[0];
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
          }
      }
   }

}
