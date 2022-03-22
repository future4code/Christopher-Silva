import { CustomError } from "../errors/CustomError";

export class DogWalking {
   constructor(
      private id: String,
      private date: String,
      private price: Number,
      private duration: Number,
      private latitude: String,
      private longitude: String,
      private numberOfPets: Number,
      private startTime: String,
      private endTime: String
   ) { }

   public getId(): String {
      return this.id;
   }

   public getDate(): String {
      return this.date;
   }

   public getPrice(): Number {
      return this.price;
   }

   public getDuration(): Number {
      return this.duration;
   }

   public getLatitude(): String {
      return this.latitude;
   }

   public getLongitude(): String {
      return this.longitude;
   }

   public getNumberOfPets(): Number {
      return this.numberOfPets;
   }

   public getStartTime(): String {
      return this.startTime;
   }

   public getEndTime(): String {
      return this.endTime;
   }

   
}

export interface DogWalkInputDTO{
   date: string,
   duration: number,
   latitude: string,
   longitude: string,
   numberOfPets: number,
   startTime: string,
   endTime: string
}


