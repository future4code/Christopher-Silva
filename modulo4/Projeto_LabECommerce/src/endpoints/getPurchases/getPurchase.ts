import { Request, Response } from "express"
import { purchaseMade } from "./purchaseMade";

export const getPurchase = async (req: Request, res: Response): Promise<void> => {
    try {
        const user_id = req.params.user_id

        if (!user_id || user_id.length === 0) {
            throw new Error("Id do usuário deve ser informado")
        }

        const purchase: any = await purchaseMade(user_id);
        if (purchase.length === 0) {
            throw new Error("Este Usuário não realisou compras")
        }
        const listNameProducts = purchase && purchase.map((purchase: any) => purchase.name)

        res.send(listNameProducts)

    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}