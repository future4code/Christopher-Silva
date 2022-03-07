import { Request, Response } from "express";
import app from "./app"
import { CharacterDataBase } from "./data/CharacterDatabase";
import { Character } from "./types";

app.post("/character", (req: Request, res: Response) => {
    try {
        const { name, gender, age, description } = req.body;

        const character = new Character(name, gender, age, description)

        const characterDB = new CharacterDataBase()
        characterDB.createCharacter(character)

    } catch (error: any) {
        res.status(400).send(error.message | error.sqlMessage)
    }

})


/*
--> Exercício 1

a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*
R.
Construtor são funções de inicialização criadas dentro das classes,
 servem para guardar recursos que um objeto de classe, são invocados 
 no momento em que objetos desta classe são criadas.


b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
Foi impresso uma vez

c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*
criando funções dentro da própria classe com essa funcionalizadade
*/

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getDataUserAccount(){
      this.name;
      this.cpf;
      this.age
   }

   insertTransaction(transaction:Transaction){
      this.transactions.push(transaction)
   }
  }


class Transaction {
      private date: string;
      private value: number;
      private description: string;
      
      constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
      }

      public getDataTransaction(){
         this.date;
         this.value;
         this.description
      }
     
    }

   const user:UserAccount = new UserAccount("0000000","nome do usuário", 20)
   const transaction1 = new Transaction("15/05/2021",3000,"salário")

  console.log("sem trasação",user)
user.insertTransaction(transaction1)
console.log("com transação",user)
  /*
  --> Exercício 2
  Transforme a variável de tipo abaixo, chamada Transaction em uma classe Transaction.
  Ela deve conter as mesmas propriedades: data, valor e descrição. 
   Agora, porém, todas elas devem ser privadas. Portanto, crie métodos (getters)
   para a leitura desses valores, tanto para essa classe quanto para a classe UserAccount. 
   Crie uma instância dessa classe e adicione à instância já criada de UserAccount 
  */

/*
Exercício 3

Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação.
 Ela deve possuir a propriedades accounts, privada (crie os getters e setters que achar apropriado).

}
*/

class Bank {
   private accounts: UserAccount[];
 
   constructor(accounts: UserAccount[]) {
     this.accounts = accounts;
   }
 
 }

 const userAccounts = [user]
 const newBank = new Bank (userAccounts)
   