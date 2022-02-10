import { Request, Response } from "express"
import { savePurchases } from "./savePurchases";

export const createPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
        const { user_id, product_id, quantity, total_price } = req.body

        if (!user_id || !product_id || !quantity || !total_price) {
            throw new Error("todos valores devem ser informados")
        }

        await savePurchases(
            Date.now().toString(),
            user_id as string,
            product_id as string,
            quantity as number,
            total_price as number
        );

        res.send("Compra cadastrada")

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}