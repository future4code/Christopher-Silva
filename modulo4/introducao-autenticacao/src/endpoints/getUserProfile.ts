import { Request, Response } from "express";
import { generateToken, getData } from "../services/Authenticator";
import { getUserByEmail } from "../services/getUserByEmail";
import { getUserByID } from "../services/getUserByID";


export default async function getUserProfile(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const token = req.headers.authorization as string;

        if (!token) {
            res.statusCode = 404
            throw new Error("token não informado")
        }

        const authenticationData = await getData(token);
        const dataUser = await getUserByID(authenticationData.id)
        res.status(200).send({ dataUser })

    } catch (error) {

        if (res.statusCode === 200) {
            res.status(500).end()
        }

        res.end()
    }
}