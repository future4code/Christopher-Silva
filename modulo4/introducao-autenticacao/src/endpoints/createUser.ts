import { Request, Response } from "express";
import connection from "../connection";
import { generateToken, getData } from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const {email, password } = req.body
      const userTableName = "User";
console.log('ENTROU')
      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'password' e 'email'")
      }

      if (!email || email.indexOf("@") === -1) {
         throw new Error("Invalid email");
     }

     if (!password || password.length < 6) {
         throw new Error("Invalid password");
     }

      const [user] = await connection('User')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = IdGenerator()

      const createUser = async (id: string, email: string, password: string) => {
         await connection
           .insert({
             id,
             email,
             password,
           })
           .into(userTableName);
       };
       createUser(id, email, password)

       const token = generateToken(id)

      res.status(201).send(token)

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}