import express, { Request, Response } from 'express'
import connection from "../data/connection";
import { Authenticator } from '../services/Authenticator';
import { currentDate } from '../services/currentDate';
import { HashManager } from '../services/HashManager';
import { IdGenerated } from '../services/IdGenerated';
import { recipe, user } from '../types';

export const creatRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
console.log("entrou")
        const { title, description } = req.body
        const token = req.headers.authorization as string

        const tokenData = await new Authenticator().getTokenData(token)

        if (!tokenData) {
            res.statusCode = 401
            res.statusMessage = "token invalido ou nao passado no headers"
            throw new Error("token invalido ou nao passado no headers")
        }

        if (!title || !description) {
            res.statusCode = 422
            throw new Error("Preencha os campos 'title e 'description' ")
        }

        const [user] = await connection('cookenu_recipes')
            .where({ title })

        if (user) {
            res.statusCode = 409
            throw new Error('receita já cadastrada')
        }

        const id: string = new IdGenerated().generatedId()

        const newRecipe: recipe = {
            id,
            title,
            description,
            created_date: new currentDate().actualDate()
        }
        
        await connection('cookenu_recipes')
            .insert(newRecipe)


        res.status(201).send({ message: "Receita cadastrada!" })

    } catch (error) {

        if (error instanceof Error) {
            res.send({ message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }

    }
}
