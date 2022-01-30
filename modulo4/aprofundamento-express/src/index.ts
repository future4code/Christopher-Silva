import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { homeworks } from "./data";


const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/*
Exercício 1
Faça novamente a instalação e configuração do Express na pasta do exercício. 
Para testar, crie um endpoint que aponte para o path “/ping”. 
Esse endpoint pode responder apenas com uma mensagem “pong”.
*/

app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

/*
Exercício 2
Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”to dos”).
 Crie uma variável de tipo para representar cada afazer. 
 =>(data.ts)

Exercício 3
Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”to dos”).
 Crie uma variável de tipo para representar cada afazer. 
 =>(data.ts)

Exercício 4
Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja,
 retorne ou afazeres concluídos ou somente os que ainda estão em andamento.
*/

app.get("/homework/search", (req:Request, res:Response) => {     
  const homeworkCompleted = req.query.completed

  if(!homeworkCompleted){
    res.status(400).send("Query 'completed' não informado")
  }

  const resultHomeworkCompleted = []

for (let homework of homeworks){
  if(homeworkCompleted === "false" && homework.completed === false){
    resultHomeworkCompleted.push(homework.title)
  }else if(homeworkCompleted === "true" && homework.completed === true){
    resultHomeworkCompleted.push(homework.title)
  }
}
  res.send(resultHomeworkCompleted)
})

/*
Exercício 5
Construa um endpoint de criação de afazer. A resposta deve retornar o array de afazeres atualizado.
*/

app.post("/homework/creat", (req:Request, res:Response) => {   
  const userIdBody = req.body.userId  
  const titleBody = req.body.title  
  
  homeworks.push(
    {
      "userId": userIdBody,
      "id": Date.now(),
      "title": titleBody,
      "completed": false
    }
  )
  res.send(homeworks)
})

/*
Exercício 6
Construa um endpoint de edição do status de um afazer, ou seja, de completo para incompleto e vice-versa.
*/

app.put("/homework/completed/:id", (req:Request, res:Response) => {   
  const idHomework = Number(req.query.idWork)  

  if(!idHomework) {
    res.status(400).send("Query 'idHomework' não informado")
}
  for (let i = 0; i < homeworks.length; i++){
    if (homeworks[i].id === idHomework){
       homeworks[i].completed = !homeworks[i].completed
    }
  }
  res.send(idHomework)
})