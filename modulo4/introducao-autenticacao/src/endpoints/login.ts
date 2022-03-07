import { Request, Response } from "express";
import { generateToken } from "../services/Authenticator";
import { getUserByEmail } from "../services/getUserByEmail";


export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if (password.length < 6 || !password) {
         res.statusCode = 422
         res.statusMessage = "password inválido ou não informado'"
         throw new Error()
      }

      if (!email || email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }

      const dataUser = await getUserByEmail(email)
      
      if (!dataUser || dataUser.password !== password){
          res.statusCode = 401
          throw new Error("email ou senha incorreto")
      }

      const token = generateToken(dataUser.id)
      
      res.status(200).send({token})

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}