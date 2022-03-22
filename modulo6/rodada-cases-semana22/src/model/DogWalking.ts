import { CustomError } from "../errors/CustomError";

export class DogWalking {
   constructor(
      private id: string,
      private date: Date,
      private price: Number,
      private duration: Number,
      private latitude: String,
      private longitude: String,
      private numberOfPets: Number,
      private startTime: Number,
      private endTime: Number
   ) { }

   public getId(): string {
      return this.id;
   }

   public getDate(): Date {
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

   public getStartTime(): Number {
      return this.startTime;
   }

   public getEndTime(): Number {
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


