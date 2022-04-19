
export class Pokemon {
    constructor(
       private id: string,
       private name: string,
       private img_name: string
    ) { }
 
    public getId(): string {
       return this.id;
    }
 
    public getName(): string {
       return this.name;
    }
 
    public getImgName(): string {
       return this.img_name;
    }
 }

 export class PokemonAllData {
    constructor(
       private id: string,
       private name: string,
       private img_name: string,
       private generation: string,
       private evolution_stage: string,
       private type_1: string,
       private type_2: string,
       private weather_1: string,
       private weather_2: string,
       private stat_total: number,
       private atk: number,
       private def: number,
       private sta: number
    ) { }
 
    public getId(): string {
       return this.id;
    }
 
    public getName(): string {
       return this.name;
    }
 
    public getImgName(): string {
       return this.img_name;
    }

    public getGeneration(): string {
        return this.generation;
     }

    public getEvolutionStage(): string {
        return this.evolution_stage;
     }

     public getType1(): string {
        return this.type_1;
     }

     public getType2(): string {
        return this.type_2;
     }

     public getWeather1(): string {
        return this.weather_1;
     }

     public getWeather2(): string {
        return this.weather_2;
     }

     public getStateTotal(): number {
        return this.stat_total;
     }

     public getAtk(): number {
        return this.atk;
     }

     public getDef(): number {
        return this.def;
     }

     public getSta(): number {
        return this.sta;
     }
 }

 export class PokemonType {
   constructor(
      private id: string,
      private name: string,
      private img_name: string,
      private type_1: string,
      private type_2: string
   ) { }

   public getId(): string {
      return this.id;
   }

   public getName(): string {
      return this.name;
   }

   public getImgName(): string {
      return this.img_name;
   }

   public getType1(): string {
      return this.type_1;
   }

   public getType2(): string {
      return this.type_2;
   }
}
