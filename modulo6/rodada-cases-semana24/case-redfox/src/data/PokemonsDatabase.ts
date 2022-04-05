import { CustomError } from "../errors/CustomError";
import { Participants } from "../model/Participants";
import BaseDataBase from "./BaseDatabase";


export class PokemonsDatabase extends BaseDataBase {

   protected tableName: string = "pokemon_go_api";

   private toModel(dbModel?: any): Participants | undefined {
      return (
         dbModel &&
         new Participants(
            dbModel.id,
            dbModel.first_name,
            dbModel.last_name,
            dbModel.participation
         )
      );
   }

   public async getPokemons(): Promise<void|any> {
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

   public async getOrPokemon(search1: String, search2: String): Promise<void|any> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} 
            WHERE (name LIKE '%${search1}%')
            OR (type_1 LIKE '%${search1}%')
            OR (type_2 LIKE '%${search1}%')
            OR (name LIKE '%${search2}%')
            OR (type_1 LIKE '%${search2}%')
            OR (type_2 LIKE '%${search2}%')
         `);
         return result[0];
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
          }
      }
   }

   public async getPokemon(search: String): Promise<void|any> {
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
