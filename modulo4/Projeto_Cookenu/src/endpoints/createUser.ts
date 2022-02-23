import { Request, Response } from "express";
import connection from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerated } from "../services/IdGenerated";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void | any> {
   try {

      const { name, email, password } = req.body

      if (!name || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name', 'nickname' , 'email', 'role' e 'password' ")
      }

      const [user] = await connection('cookenu_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new IdGenerated().generatedId()

      const cypherPassword: string = new HashManager().createHash(password)

      const newUser: user = { 
         id,
         name,
         email, 
         password: cypherPassword,
      }

      await connection('cookenu_users')
         .insert(newUser)

      const token = new Authenticator().generateToken({ id })

      res.status(201).send({ message: "User created successfully!", token })

   } catch (error) {
 
      if (error instanceof Error) {
         res.send({ message: error.message })
     } else {
         res.send({ message: "Erro inesperado" })
     }
      
   }
}