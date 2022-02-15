console.log("Hello, world!")

/*
- Exercício 1 - Herança
    
    Analise a classe `User`. Perceba quais propriedades são públicas e quais são privadas.
     Copie esse código para o seu exercício de hoje; crie uma instância dessa classe 
     (dê o nome, email, etc que você quiser) e imprima, no terminal, o id, o nome e o
      email desse usuário. 
    
    a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
    R. Nâo pois é um valor privado
    
    b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
    R. Uma vez
*/

class User {
    private id: string;
    private email: string;
    public name: string;
    private password: string;
    public introduceYourself: string

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        introduceYourself: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
        this.introduceYourself = introduceYourself
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
}

//const newUser:User = new User("001","newuser@gmail","New User", "12345","introdução")
//Ex. 1 crie uma instância dessa classe (dê o nome, email, etc que você quiser)

// Ex. 01 (imprima, no terminal, o id, o nome e o email desse usuário)
//console.log(newUser.getEmail(), newUser.getId(), newUser.getName()) 

/*
- Exercício 2 - Herança
  
  Analise a `Customer`. Perceba quais propriedades são públicas e quais são privadas.
   Copie esse código para o seu exercício de hoje e crie uma instância dessa classe
    (com as informações que você quiser). Atente-se ao fato de que o `Customer`
     é uma subclasse (ou classe filha) da classe `User`. Sabemos disso porque há a palavra `extends` 
     na declaração da classe `Customer`; e, em seu construtor, foi usado o `super`.
  
  a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 
  R. Uma Vez 

  b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
  R. Uma vez, na chamado no super (da classe Customer) que é a chamada do construtor da classe pai (que é User)

  */

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string,
        introduceYourself: string

    ) {
        super(id, email, name, password, introduceYourself);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
    public getintroduceYourself(): string {
        return this.introduceYourself;
    }
    public getintroduceYourselfName(): string {
        return `Olá, sou ${this.name}. Bom dia!`;
    }
}

//const newCostumer = new Customer("002", "newCostumer@gmail", "New Costumer", "54321", "'Saldo na conta'", `"Olá, bom dia!"`)

//console.log(newCostumer)

/*
- Exercício 3 - Herança
 
Agora, imprima **todas as informações possíveis** da instância que você criou:
o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito (`creditCard`).
Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).
 
a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?*
R. Não pois é uma informação privada e só pode ser acessada dentro da própria classe
*/


//Ex. 3

//console.log("purchesa informação publica",newCostumer.purchaseTotal)
//console.log("funções que imprimem informações privadas",newUser.getEmail(), newUser.getId(), newUser.getName(),newCostumer.getCreditCard())




/*
- Exercício 4 - Herança

Adicione um método público à classe `User`. Esse método deve ter o nome de `introduceYourself`("apresente-se") e deve retornar a mensagem:
 `"Olá, bom dia!"`. As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função,
  faça com que a instância que você criou para a classe `Customer` chame esse método
*/

//  console.log(newCostumer.getintroduceYourself()) //Ex. 4

/*
Exercício 5 - Herança
Altere o método que você acabou de criar para que ele imprima a mensagem: 
"Olá, sou ${nome do usuário}. Bom dia!". Realize os mesmos testes anteriores.
*/

//console.log(newCostumer.getintroduceYourselfName()) // Ex. 5

/*
- Exercício 1 - Polimorfismo
 
Vamos começar analisando a **interface** Client. Ela possui 4 atributos explicados abaixo.
*/

export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}
/*
Comece criando um objeto dessa interface, colocando a tipagem correta.
 Perceba que você terá que dar uma implementação para o método `calculateBill()`.
  Por enquanto, implemente de tal forma que sempre retorne `2` (ou qualquer outro número).
   Imprima todas as informações que forem possíveis no terminal.

a) *Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível?
 Por que isso aconteceu?*
Consegui imprimir todas pois é publica
*/


//console.log(client)
//console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill())


/*
- Exercício 2
  
  Agora, vamos ver a classe **Place**.
*/

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

class NewPlace extends Place {

}

const place = new NewPlace("erer")

/*
a) *Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: `new Place(...)`).
 Qual foi o erro que o Typescript gerou?*
R. Não é possível criar uma instância de uma classe abstrata.

b) *Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?*
R. Criar uma classe e extender para Place como herança

*/


/*
3) *Por que a classe `Place` é uma Classe Abstrata?*

Será um pouco mais longo, mas esperamos que seja esclarecedor.

Vamos começar lendo três classes. 

A primeira representa uma casa residencial. Vamos armazenar nela uma variável para representar a quantidade de moradores
(`residentsQuantity`)
*/
export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }
    public getresidentsQuantity(): number {
        return this.residentsQuantity
    }
}

const residence = new Residence(3, "98567-000")




/*
A segunda é para um comércio. Para ela, vamos adicionar uma propriedade para representar os andares desse lugar
 comercial (floorsQuantity)
*/
export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }
    public getfloorsQuantity(): number {
        return this.floorsQuantity
    }
}


//const commerce = new Commerce(2, "98550-000")

/*
A última é para uma indústria e adicionaremos uma propriedade para guardar a quantidade máquinas de lá 
(machinesQuantity)
*/

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }
    public getmachinesQuantity(): number {
        return this.machinesQuantity
    }
}

//const industry = new Industry(5, "98588-000")

// crie uma instância de cada uma das classes novas. Imprima no console o CEP de cada uma delas,
// através do método getCep herdado da classe Place

//console.log("industry", industry.getCep())
//console.log("commerce", commerce.getCep())
//console.log("residence", residence.getCep())


/*
Exercício 4
a) Que métodos e propriedades essa classe possui? Por quê?
class para os dados do cliente residencial
extends para classe Residence para pegar os dados da residencia
e implements client para pegr a função calculateBill(), com o calculo do consumo de energia
*/

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep);
    }

    public getCpf(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}

const clienteResidencial = new ResidentialClient("Jorge", 9, 150, "4567723-00", 4, "956789-890")

console.log(clienteResidencial.calculateBill())

/*
- Exercício 5
  
  Crie a classe `CommercialClient` para representar o Cliente Comercial. Ele deve possuir um CNPJ (privado).
   Crie os getter dela.
  
  Essa classe deve ser **filha** da classe `Commerce` e implementar a interface `Client`.
   Nesse caso, o valor da conta é **(quantidade de energia) x 0.53.**
  
  a) *Quais as semelhanças dessa classe com a `ResidentialClient`?*
  public name: string,

    public registrationNumber: number,
    public consumedEnergy: number,
    cep: string

  b) *Quais as diferenças dessa classe com a `ResidentialClient`?*
ResidentialClient
 private cnpj: string,
    floorsQuantity: number,

CommercialClient
private cnpj: string,
    floorsQuantity: number,
  */
class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

    public getCnpj(): string {
        return this.cnpj;
    }
}

/*
- Exercício 6
    
    Agora, crie a classe `IndustrialClient` para representar o Cliente Industrial.
     Ele deve possuir um um número de registro industrial (privada). Crie somente os getters dela.
    
    a) *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*
      Industry, porque contem as informações comerciais
    
    b) *Que interface a `IndustrialClient` implementa? Por quê?*
    complementa Client pois complementa a função de calculo de energia

    
    c) *Nós pedimos para criar somente os getters dessa classe.
     Pense num motivo para isso: por que só os getters?*


*/
class IndustrialClinent extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private insdustryNumber: string, // tanto faz ser string ou number
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getIndustryNumber(): string {
      return this.insdustryNumber;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
  }