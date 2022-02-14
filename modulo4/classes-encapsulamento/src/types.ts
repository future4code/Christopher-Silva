// criando uma classe
// export class Cachorro {
// atributos
// nome: string;
// idade: number;

// constructor(nome:string) {
//     this.nome = nome;
// }

// latir() {
//     console.log("AU-AU")
// }

// metodoParaMostrarOThis(){

// }

// }
// instanciar uma classe



// type cachorroDeType = {
//     nome: string,
//     idade: number
// }

export type characterSimpsion = {
   name: string;
   gender:GENDERCHARACTER;
   age: number;
   description: string;
}

enum GENDERCHARACTER {
   MALE = "MALE",
   FAMALE = "FAMALE"
}


export class Character {

   private name: string
   private gender: GENDERCHARACTER
   private age: number
   private description: string

   constructor(name: string, gender: GENDERCHARACTER, age: number, description: string) {
       // this.regraDeNegocioPersonagem(name)
       this.name = name;
       this.gender = gender;
       this.age = age;
       this.description = description;
   }

   public getName(){
       return this.name
   }

   public setName(name:string){
       this.name = name
   }


   // public regraDeNegocioPersonagem(name:string) {
   //     if(name !== 'homer'){
   //         throw new Error("Só pode criar homer's")
   //     }
   // }

}

const homer: Character = new Character('homer', GENDERCHARACTER.MALE, 60, 'fica em casa e beber duff');
const bart: Character = new Character('bart', GENDERCHARACTER.MALE, 60, 'fica em casa e beber duff');
const magie: Character = new Character('magie', GENDERCHARACTER.FAMALE, 60, 'fica em casa e beber duff');
const marge: Character = new Character('marge', GENDERCHARACTER.FAMALE, 60, 'fica em casa e beber duff');

// public private protected