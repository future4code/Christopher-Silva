import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export async function getAllUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const result = await connection("aula48_exercicio")

      if (!result.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      const users = result.map(toUser)

      res.status(200).send(users)

   } catch (error: any) {
      res.status(500).send(error.message)
   }
}

const toUser = (input: any): user => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type,
   }
}

/*
Exercício 1

a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro 
de filtragem por nome. Este nome deve ser enviado por query params.

b) Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por tipo de user.
 O tipo de user deve ser passado por path params.
*/

export async function getAllUsersByName(  //Ex. 1 -  a)
   req: Request,
   res: Response
): Promise<void> {
   try {
      const name = req.query.name as string;

      const result = await connection("aula48_exercicio")
         .where('name', 'like', `%${name}%`)

      if (!result.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      const recipes = result.map(toUser)

      res.status(200).send(recipes)

   } catch (error: any) {
      res.status(500).send(error.message)
   }
}

export async function getAllUsersByType(  //Ex. 1 - b)
   req: Request,
   res: Response
): Promise<void> {
   try {
      const type = req.params.type as string;

      const result = await connection("aula48_exercicio")
         .where('type', 'like', `%${type}%`)

      if (!result.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      const recipes = result.map(toUser)

      res.status(200).send(recipes)

   } catch (error: any) {
      res.status(500).send(error.message)
   }
}

/*
Exercício 2
Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user.
 A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email.
*/

export async function getAllUsersOrdination( //Ex. 2
   req: Request,
   res: Response
): Promise<void> {
   try {
      let sort = req.query.sort as string;
      if (sort !== "name" && sort !== "type") {
         sort = "email";
      }

      const result = await connection("aula48_exercicio")
         .orderBy(sort, "ASC")

      if (!result.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      const users = result.map(toUser)

      res.status(200).send(users)

   } catch (error: any) {
      res.status(500).send(error.message)
   }
}

/*
Exercício 3
Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez,
 e permita que o usuário possa passar a página que deseja ver.
 O número da página deve ser passado por query params.
*/

export async function getAllUsersPagination(
   req: Request,
   res: Response
): Promise<void> {
   try {

      let page = Number(req.query.page)

      if (page < 1 || isNaN(page)) {
         page = 1;
      }
      let size = 5;
      let offset = size * (page - 1)
      const result = await connection("aula48_exercicio")
         .limit(size)
         .offset(offset)

      if (!result.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      const users = result.map(toUser)

      res.status(200).send(users)

   } catch (error: any) {
      res.status(500).send(error.message)
   }
}

/*
Exercício 4

Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens,
 a ordenação e a paginação). Atribua valores padrão para filtragem, ordenação e paginação para que:

- Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
- Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** em ordem **decrescente;**
- Caso o usuário não forneça número de página, deve começar na página 1
*/

export async function getAllUsersAllFunctionalities(  //Ex. 1 -  a)
   req: Request,
   res: Response
): Promise<void> {
   try {
      let name = req.query.name as string;
      let type = req.query.type as string;
      let sort = req.query.sort as string;
      let order = req.query.order as string;
      let page = Number(req.query.page)
      if(page < 1 || isNaN(page)){
         page = 1;
      }
      let size = 5;
      let offset = size * (page-1)
  // console.log(req.query)
      let filter = "name"
      let search = ""

      if (name) {
         search = name
      }
       if(type){
         search=type,  filter = "type"
      }
      if(!sort){
      sort = "name"
      }else if (sort !== "email" && sort !== "type") {
         sort = "name";
      }

      if(!order){
         order = "DESC"
      }
      

      const result = await connection("aula48_exercicio")
      .where(filter, 'like', `%${search}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)

      if (!result.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      const recipes = result.map(toUser)

      res.status(200).send(recipes)

   } catch (error: any) {
      res.status(500).send(error.message)
   }
}