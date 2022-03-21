import { DogWalking } from "../model/DogWalking";
import BaseDataBase from "./BaseDatabase";


export class DogWalkerDatabase extends BaseDataBase {

   protected tableName: string = "dog_walking";

   private toModel(dbModel?: any): DogWalking | undefined {
      return (
         dbModel &&
         new DogWalking(
            dbModel.id,
            dbModel.date,
            dbModel.price,
            dbModel.duration,
            dbModel.latitude,
            dbModel.longitude,
            dbModel.numberOfPets,
            dbModel.startTime,
            dbModel.endTime,
         )
      );
   }

   public async creat(walk: DogWalking): Promise<void> {
      try {
         await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (id, date, price, duration, latitude,longitude, number_of_pets, start_time, end_time)
            VALUES (
            '${walk.getId()}', 
            '${walk.getDate()}', 
            '${walk.getPrice()}',
            '${walk.getDuration()}',
            '${walk.getLatitude()}',
            '${walk.getLongitude()}',
            '${walk.getNumberOfPets()}',
            '${walk.getStartTime()}',
            '${walk.getEndTime()}'
            )`
         );
      } catch (error) {
         if (error instanceof Error) {
           throw new Error(error.message) 
         }
         
      }
   }

   /*
   public async getUserByEmail(email: string): Promise<  undefined> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} WHERE email = '${email}'
         `);
         return this.toModel(result[0][0]);
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
          }
      }
   }

   public async getUserById(id: string): Promise<User | undefined> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} WHERE id = '${id}'
         `);
         return this.toModel(result[0][0]);
      } catch (error) {
         if (error instanceof Error) {
            throw new Error(error.message) 
          }
      }
   }

   public async getAllUsers(): Promise<User[]| undefined> {
      try {
         const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName}
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
   */
}
