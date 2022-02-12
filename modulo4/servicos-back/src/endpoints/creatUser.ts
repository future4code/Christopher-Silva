import { Request, Response } from "express"
import { getAddressInfo } from "../services/getAddressInfo"
import { saveAddressUsers } from "./saveAddressUsers"


//Exercício 1
export const createUser = async (req: Request, res: Response) => {
    try {
        const { cep } = req.body

        const address = await getAddressInfo(cep)

        if (!address) {
            throw new Error("Erro ao coletar endereço")
        }

        res.send({address})

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}

export const createUserAddress = async (req: Request, res: Response) => {
    try {
        const { cep, number } = req.body

        const address = await getAddressInfo(cep)

        if (!address) {
            throw new Error("Erro ao coletar endereço")
        }

        await saveAddressUsers(
            Date.now().toString(),
            cep,
            address.street,
            number,
            address.neighborhood,
            address.city,
            address.state
          );

        res.send("Endereço de usuário cadastrado")

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}