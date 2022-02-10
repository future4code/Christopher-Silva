import { Request, Response } from "express"
import { allUsers } from "./allUsers";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {

        const users: any = await allUsers();

        if (users.length === 0) {
            throw new Error("Não existem usuários cadastrados")
        }

        res.send({ users })

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}