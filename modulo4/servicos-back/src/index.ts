import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { createUser, createUserAddress } from "./endpoints/creatUser"

dotenv.config()
export const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003 ,()=>{
console.log("server running in", process.env.PORT || 3003)
})

/*
Exercício 1
Escreva uma função que receba um CEP, faça uma requisição para a url [https://viacep.com.br/ws/:cep/json/]
(https://viacep.com.br/ws/05424150/json/)  e retorne um objeto contendo:

- Logradouro
- Bairro
- Cidade
- Estado
*/
app.get("/users", createUser) //Ex. 1


/*
Exercício 3
Refatore o endpoint de cadastro para que ele receba, também, as informações básicas de endereço do usuário
 (CEP, número e complemento) e preencha todos os campos da tabela criada no exercício anterior.
*/

app.post("/users/address", createUserAddress)