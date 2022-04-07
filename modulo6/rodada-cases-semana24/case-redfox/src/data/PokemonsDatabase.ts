import { Pokemon, PokemonAllData, PokemonType } from "../model/Pokemon";
import BaseDataBase from "./BaseDatabase";

export class PokemonsDatabase extends BaseDataBase {

   protected tableName: string = "pokemon_go_api";

   private toModel(dbModel?: any): Pokemon | undefined {
      return (
         dbModel &&
         new Pokemon(
            dbModel.id,
            dbModel.name,
            dbModel.img_name
         )
      );
   }

   private toModel2(modelAllData?: any): PokemonAllData | undefined {
      return (
         modelAllData &&
         new PokemonAllData(
            modelAllData.id,
            modelAllData.name,
            modelAllData.img_name,
            modelAllData.generation,
            modelAllData.evolution_stage,
            modelAllData.type_1,
            modelAllData.type_2,
            modelAllData.weather_1,
            modelAllData.weather_2,
            modelAllData.stat_total,
            modelAllData.atk,
            modelAllData.def,
            modelAllData.sta
         )
      );
   }

   private toModel3(dbModelType?: any): PokemonType | undefined {
      return (
         dbModelType &&
         new PokemonType(
            dbModelType.id,
            dbModelType.name,
            dbModelType.img_name,
            dbModelType.type_1,
            dbModelType.type_2
         )
      );
   }

   public async getAllPokemons(test:String): Promise<void|any> {
      try {
         const result = await BaseDataBase.connection.raw(`
         SELECT * from ${this.tableName};
         `);

         return result[0].map((res: any) => {
            return this.toModel(res);
         });
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
          }
      }
   }

   public async getPokemonsByPage(page:Number|any,pokemonsForPage:Number|any): Promise<void|any> {
      try {
         const result = await BaseDataBase.connection.raw(`
         SELECT * from ${this.tableName} LIMIT ${page-1}, ${pokemonsForPage};
         `);

         return result[0].map((res: any) => {
            return this.toModel(res);
         });
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
         return result[0].map((res: any) => {
            return this.toModel2(res);
         });
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

         return result[0].map((res: any) => {
            return this.toModel3(res);
         });
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
          }
      }
   }

}
