import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
/*
Exercício 1
Vamos começar fazendo um endpoint que busque todos os usuários de uma lista. A lista está disponível abaixo
a. Qual método HTTP você deve utilizar para isso?
 GET
b. Como você indicaria a entidade que está sendo manipulada?
users
*/

app.get("/users", (req: Request, res: Response) => {
  try {
    res.status(200).send(users)
  } catch (error: any) {

  }

})

/*
Exercício 2
Agora, vamos criar um novo endpoint, que busque todos os usuários que tenham uma propriedade type específica,
 recebendo apenas um type por vez. Após isso, responda:

 a. Como você passou os parâmetros de type para a requisição? Por quê?
 Por query params por ser um filtro

 b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
expecificando o type diretamente na req que iremos receber os parametros (req.query.type as string)
*/

app.get("/users/bytype", (req: Request, res: Response) => {

  try {

    const type: string = req.query.type as string //(b)
    const user = users.filter((user) => user.type === type)

    res.status(200).send(user)
  } catch (error: any) {

  }
})

/*
Exercício 3
Vamos agora praticar o uso de buscas mais variáveis.
 Faça agora um endpoint de busca que encontre um usuário buscando por nome.

 a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
 query params por se tratar de um filtro

 b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
com if(!user), pois se o filtro find não retornar nenhum usuário, o if vai marcar a busca de (!user) como true e retornar o error para o catch
*/

app.get("/users/byname", (req: Request, res: Response) => {

  try {

    const name: string = req.query.name as string //(b)
    const user = users.find((user) => user.name === name)

    if (!user) {
      throw new Error("Usuário não encontrado")
    }
    res.status(200).send(user)

  } catch (error: any) {

    switch (error.message) {
      case "Usuário não encontrado":
        res.status(422)
        break
      default:
        res.status(500)
    }
    res.send(error.message)
  }
})

/*
Exercício 4
Fizemos algumas buscas no nosso conjunto de itens, agora é hora de adicionar coisas.
 Comecemos criando um usuário na nossa lista. 
Crie um endpoint que use o método POST para adicionar um item ao nosso conjunto de usuários.

a. Mude o método do endpoint para PUT. O que mudou?
retornou da mesma maneira

b. Você considera o método PUT apropriado para esta transação? Por quê?
Não, porque a diferença está na ação, ou seja,
 o POST é Utilizado para criação de novos registros.
e o PUT é Utilizado para atualização de registros existentes.
 
*/

app.post("/users/newuser", (req: Request, res: Response) => {

  try {
      const nameToAdd = req.body.name
      const emailToAdd = req.body.email
      const typeToAdd = req.body.type
      const ageToAdd = req.body.age

    
      users.push(
        {
          id: Date.now(),
          name: nameToAdd,
          email: emailToAdd,
          type: typeToAdd,
          age: ageToAdd
        }
      )
      res.send({ users })

  } catch (error: any) {

      res.send(error.message)
  }

})