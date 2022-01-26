import express, { Request, Response } from "express";

import { AddressInfo } from "net";
import { products } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

/*
Exercício 1
Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint de teste 
com método GET no path “/test” que retorna uma mensagem genérica avisando que a API está funcional.]
*/

app.get("/test", (req: Request, res: Response) => {

    res.send("API funcionando")
})

/*
Exercício 2
Crie um arquivo chamado data.js que exporta um array de produtos. 
Cada produto será representado por um objeto com propriedades: id (string), name (string) e price (number). 
Popule manualmente o array com pelo menos 3 produtos.
*/

products

/*
Exercício 3
Desenvolva um endpoint que cria um novo produto e retorna a lista de produtos atualizada.
A id do produto deve ser gerada automaticamente pela API.
*/

app.post("/products/newitem", (req: Request, res: Response) => {

    try {
        const nameToAdd = req.body.name
        const priceToAdd = req.body.price
        if (!nameToAdd && priceToAdd) {
            throw new Error("Falta o parametro 'name' ")
        }else if ( priceToAdd < 1) {                              //- erro caso `price` seja igual ou menor que `0`
            throw new Error("O parametro 'number' dever ser maior que zero")
        } else if (!priceToAdd && nameToAdd) {
            throw new Error("Falta o parametro 'price'")          //- erro caso um ou nenhum deles forem recebidos
        } else if (!nameToAdd || !priceToAdd) {
            throw new Error("Faltam os parametros 'name' e 'price'")
        }else if ( typeof nameToAdd !== "string") {               // - erro caso `name` seja diferente de `string`
            throw new Error("O parametro 'name' deve ser uma string")
        } else if ( typeof priceToAdd !== "number") {             //- erro caso `price` seja diferente de `number`
            throw new Error("O parametro 'number' deve ser um número")
        }

        products.push(
            {
                id: String(Date.now()),
                name: nameToAdd,
                price: priceToAdd
            }
        )
        res.send({ products })

    } catch (error: any) {

        switch (error.message) {
            case  "Falta o parametro 'name' ":
                res.status(401)
                break
                case  "O parametro 'number' dever ser maior que zero":
                res.status(422)
                break
                case "Falta o parametro 'price'":
                res.status(401)
                break
                case  "Faltam os parametros 'name' e 'price'":
                res.status(401)
                break
                case  "O parametro 'name' deve ser uma string":
                res.status(422)
                break
                case  "O parametro 'number' deve ser um número":
                res.status(422)
                break
            default:
                res.status(500)        //- erro caso algo inesperado aconteça
        }
        res.send(error.message)
    }

})
/*
Exercício 7
Refatore o endpoint do exercício 3 (criar produto) para que sejam implementados
 fluxos de validação dos dados recebidos (`name` e `price`)

- erro caso um ou nenhum deles forem recebidos
- erro caso `name` seja diferente de `string`
- erro caso `price` seja diferente de `number`
- erro caso `price` seja igual ou menor que `0`
- erro caso algo inesperado aconteça 
*/
/*
Exercício 4
Crie um endpoint que retorna todos os produtos.
*/

app.get("/products", (req: Request, res: Response) => {

    const AllProducts = products.map((item) => {
        return item.name
    })
    res.send(AllProducts)
})

/*
Exercício 5
Crie um endpoint que edita o preço de um determinado produto
 e retorna a lista de produtos atualizada.
*/

app.put("/products/editprice", (req: Request, res: Response) => {
  
  try{
    const idItem = req.body.id
    const priceToEdit = req.body.price

     if (priceToEdit < 1) {
        throw new Error("o parametro 'number' deve ser maior que zero")    //- erro caso `price` seja igual ou menor que `0`
    }else if (idItem && !priceToEdit) {                                         //- erro caso `price` não seja recebido
        throw new Error("Falta o parametro 'price' ")
    }else if ( typeof priceToEdit !== "number") {                          //- erro caso `price` seja diferente de `number`
        throw new Error("O parametro 'number' dever ser type number")
    } else if (!idItem) {
        throw new Error("Falta o parametro 'id' ")                         //- erro caso id não seja recebida (exceto em casos de path params)
    }

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === idItem) {
            products[i].price = priceToEdit
        }else{
            throw new Error("Produto não encontrado")                      //- erro caso o produto a ser editado não seja encontrado
        }
    }

    res.status(200).send(products)  
  }catch(error:any){
    switch (error.message) {
        case  "o parametro 'number' deve ser maior que zero":
            res.status(422)
            break
            case "Falta o parametro 'price'":
            res.status(401)
            break
            case  "O parametro 'number' dever ser type number":
            res.status(422)
            break
            case  "Falta o parametro 'id' ":
            res.status(401)
            break
            case  "Produto não encontrado":
            res.status(401)
            break
        default:
            res.status(500)        //- erro caso algo inesperado aconteça
    }
    
    res.send(error.message)
  }
    
})
/*
Exercício 8
Refatore o endpoint do exercício 5 (editar produto) para que sejam implementados fluxos de validação dos dados recebidos (`price`)

- erro caso `price` não seja recebido
- erro caso `price` seja diferente de `number`
- erro caso `price` seja igual ou menor que `0`
- erro caso id não seja recebida (exceto em casos de path params)
- erro caso o produto a ser editado não seja encontrado
- erro caso algo inesperado aconteça
*/

/*
Exercício 6
Construa um endpoint que deleta um determinado produto e retorna a lista de produtos atualizada.
*/
app.delete("/products/deleteitem/:id", (req: Request, res: Response) => {
    const idItem = req.params.id

    try{
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === idItem) {
            products.splice(i, 1)
        }else{
            throw new Error("Produto não encontrado")  //- erro caso o produto escolhido não seja encontrado
        }
    }

    res.status(200).send(products)  
    }catch(error:any){
        switch (error.message) {
            case  "Produto não encontrado":
                res.status(401)
                break
                
            default:
                res.status(500)        //- erro caso algo inesperado aconteça
        }

        res.send(error.message)
    }
    
})



/*
Exercício 9
Refatore o endpoint do exercício 6 (deletar produto) para que sejam implementados fluxos de validação dos dados recebidos (`id`)

- erro caso `id` não seja recebido (exceto em casos de path params)
- erro caso o produto escolhido não seja encontrado
- erro caso algo inesperado aconteça
*/