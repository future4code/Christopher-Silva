import { Request, Response } from "express"
import { saveUsers } from "./saveUser";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            throw new Error("todos valores devem ser informados")
        }

        await saveUsers(
            Date.now().toString(),
            name as string,
            email as string,
            password as string
          );

        res.send("Usuário cadastrado")

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}