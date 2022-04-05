
export class Participants {
   constructor(
      private id: String,
      private firstName: String,
      private lastName: String,
      private participation: Number,
   ) { }

   public getId(): String {
      return this.id;
   }

   public getFirstName(): String {
      return this.firstName;
   }

   public getLastName(): String {
      return this.lastName;
   }

   public getParticipation(): Number {
      return this.participation;
   }
}

export interface ParticipantsInputDTO{
   firstName: string,
   lastName: string,
   participation: number
}


