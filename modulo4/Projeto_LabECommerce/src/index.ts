import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { createUser } from "./endpoints/creatUsers/creatUser"
import { getAllUsers } from "./endpoints/getUsers/getAllUsers"
import { createProducts } from "./endpoints/creatProducts/creatProducts"
import { getAllProducts } from "./endpoints/getProducts/getAllProducts"
import { createPurchases } from "./endpoints/creatPurchases/creatPurchases"
import { getPurchase } from "./endpoints/getPurchases/getPurchase"

dotenv.config()
export const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003 ,()=>{
console.log("server running in", process.env.PORT || 3003)
})

app.post("/users", createUser) // Cadastro de usuário

app.get("/users", getAllUsers)  // Busca por todos usuários

app.post("/products", createProducts)  //Cadastro de produtos

app.get("/products", getAllProducts)  //Busca por todos produtos

app.post("/purchases", createPurchases)  //Cadastro de compras

app.get("/users/:user_id/purchases", getPurchase)  //Consulta de compras por usuário