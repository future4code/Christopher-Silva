import { Request, Response } from "express"
import { saveProducts } from "./saveProducts";

export const createProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) {
            throw new Error("todos valores devem ser informados")
        }

        await saveProducts(
            Date.now().toString(),
            name as string,
            price as number,
            image_url as string
        );

        res.send("Produto cadastrado")

    } catch (error) {
        if (error instanceof Error) {
            res.send({ message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}