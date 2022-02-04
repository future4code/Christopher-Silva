import { Request, Response } from "express"
import connection from "./connection";
import app from "./app"


const createUser = async (id: string, name: string, nickName: number, email: string): Promise<void> => {
    const result = await connection.raw(`
      
      INSERT INTO user (id, name, nickName, email )
       VALUES(
             '${id}',
             '${name}',
             '${nickName}',
             '${email}'
            )
    `)
    return result[0][0]
}

app.post("/user", async (req: Request, res: Response) => {
    try {
        const id = String(Date.now())
        const { name, nickName, email } = req.body

        if (!name || !nickName || !email) {
            throw new Error("parametro name, nickName ou email não informado")
        }

        await createUser(
            id,
            name,
            nickName,
            email
        );
        res.status(200).send("usuário cadstrado");
    } catch (err: any) {
        switch (err.message) {
            case "parametro name, nickName ou email não informado":
                res.status(401)
                break

            default:
                res.status(500)
        }
        res.send(err.message)
    }
});

const getUserById = async (id: string): Promise<void> => {
    const result = await connection.raw(`
      
    SELECT user.id, user.nickName 
    FROM user 
    WHERE id='${id}'

    `)
    return result[0][0]
}

app.get("/user/:id", async (req: Request, res: Response) => {

    try {
        const id = String(req.params.id)

        const user: any = await getUserById(
            id
        );

        if (!user) {
            throw new Error("usuário não encontrado")
        }

        res.status(200).send(user);
    } catch (err: any) {
        switch (err.message) {
            case "usuário não encontrado":
                res.status(404)
                break

            default:
                res.status(500)
        }
        res.send(err.message)
    }
});

const editNameUser = async (id: string, name: string): Promise<void> => {
    const result = await connection.raw(`
      
    UPDATE user
SET name = '${name}'
WHERE id = '${id}'

    `)
    return result[0][0]
}

const editNickNameUser = async (id: string, nickName: string): Promise<void> => {
    const result = await connection.raw(`
      
    UPDATE user
SET nickName = '${nickName}'
WHERE id = '${id}'

    `)
    return result[0][0]
}

const editEmailUser = async (id: string, email: string): Promise<void> => {
    const result = await connection.raw(`
      
    UPDATE user
SET email = '${email}'
WHERE id = '${id}'

    `)
    return result[0][0]
}

const editNameAndNickNamelUser = async (id: string, name: string, nickName: string): Promise<void> => {
    const result = await connection.raw(`
      
    UPDATE user
SET name = '${name}', nickName = '${nickName}'
WHERE id = '${id}'

    `)
    return result[0][0]
}

const editNameAndEmailUser = async (id: string, name: string, email: string): Promise<void> => {
    const result = await connection.raw(`
      
    UPDATE user
SET name = '${name}', email = '${email}'
WHERE id = '${id}'

    `)
    return result[0][0]
}

const editNickNameAndEmailUser = async (id: string, nickName: string, email: string): Promise<void> => {
    const result = await connection.raw(`
      
    UPDATE user
SET nickName = '${nickName}', email = '${email}'
WHERE id = '${id}'

    `)
    return result[0][0]
}

const editNameAndNickNameAndEmailUser = async (id: string, name: string, nickName: string, email: string): Promise<void> => {
    const result = await connection.raw(`
      
    UPDATE user
SET name='${name}', nickName = '${nickName}', email = '${email}'
WHERE id = '${id}'

    `)
    return result[0][0]
}

app.put("/user/edit/:id", async (req: Request, res: Response) => {

    try {

        const id = String(req.params.id)
        const { name, nickName, email } = req.body

        if (req.body.name === "") {
            throw new Error("valor 'Name' esta sendo enviado vaziu")
        } else if (req.body.nickName === "") {
            throw new Error("valor 'nickName' esta sendo enviado vaziu")
        } else if (req.body.email === "") {
            throw new Error("valor 'email' esta sendo enviado vaziu")
        }

        if (!email && !nickName) {
            await editNameUser(
                id, name
            );
        } else if (!email && !name) {
            await editNickNameUser(
                id, nickName
            );
        } else if (!nickName && !name) {
            await editEmailUser(
                id, email
            );
        } else if (!email) {
            await editNameAndNickNamelUser(
                id, name, nickName
            );
        } else if (!nickName) {
            await editNameAndEmailUser(
                id, name, email
            );
        } else if (!name) {
            await editNickNameAndEmailUser(
                id, nickName, email
            );
        } else {
            await editNameAndNickNameAndEmailUser(
                id, name, nickName, email
            );
        }

        res.status(200).send("dados do usuário atualizados");
    } catch (err: any) {
        switch (err.message) {
            case "valor 'Name' esta sendo enviado vaziu":
                res.status(401)
                break
            case "valor 'nickName' esta sendo enviado vaziu":
                res.status(401)
                break
            case "valor 'email' esta sendo enviado vaziu":
                res.status(401)
                break
            default:
                res.status(500)
        }
        res.send(err.message)
    }
});

const newTask = async (idTask: string, title: string, description: string, limitDate: string, creatorUserId: string): Promise<void> => {
    const result = await connection.raw(`
      
    INSERT INTO task (id_Task,title, id_Task, description, limitDate, creatorUserId )
       VALUES task(
       '${idTask}',
       '${title}',
        '${description}',
        '${limitDate}',
        '${creatorUserId}'
    )

    `)
    return result[0][0]
}

app.post("/task", async (req: Request, res: Response) => {

    try {
        let errorCode = 400
        const { title, description, limitDate, creatorUserId } = req.body
        const idTask = String(Date.now())
        const limitDateChange = limitDate.split('/').reverse().join('/')

        await newTask(
            idTask,
            title,
            description,
            limitDateChange,
            creatorUserId
        );

        if (typeof title !== 'string' || typeof description !== 'string' || typeof limitDate !== 'string' || typeof createUser !== 'string') {
         errorCode = 422
            throw new Error("As informações devem ser enviadas como type 'string'")
        } else if (!title || title === "") {
            errorCode = 401
            throw new Error("valor 'title' não informado")
        } else if (!description || description === "") {
            errorCode = 401
            throw new Error("valor 'description' não informado")
        } else if (!limitDate || limitDate === "") {
            errorCode = 401
            throw new Error("valor 'limitDate' não informado")
        } else if (!creatorUserId || creatorUserId === "") {
            errorCode = 401
            throw new Error("valor 'limitDate' não informado")
        }



        res.status(200).send("dados do usuário atualizados");
    } catch (err: any) {
        if (err.message) {
           
               
        }
        res.send(err.message)
    }
});