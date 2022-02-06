import { Request, Response } from "express"
import connection from "./connection";
import app from "./app"

// app/user

// 6. Pegar todos os usuários
const getAllUsers = async (): Promise<void> => {
    const result = await connection.raw(`
    SELECT * 
    FROM task; 
    `)
    return result[0]
}
app.get("/user/all", async (req: Request, res: Response) => {
    try {
        const users: any = await getAllUsers();
        res.status(200).send({ users });
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

// 2. Pegar usuário pelo id
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
        console.log(user)
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

// 8. Pesquisar usuário
const getUserBynickName = async (nickName: string): Promise<void> => {
    const result = await connection.raw(`
    SELECT user.id, user.nickName 
    FROM user 
    WHERE nickName='${nickName}'
    `)
    return result[0][0]
}
const getUserByEmail = async (email: string): Promise<void> => {
    const result = await connection.raw(`
    SELECT user.id, user.nickName 
    FROM user 
    WHERE email='${email}'
    `)
    return result[0][0]
}
app.get("/user", async (req: Request, res: Response) => {
    try {
        const nickName = String(req.query.nickName)
        const email = String(req.query.email)
        let user: any = ""
        if (!req.query.nickName && !req.query.email) {
            throw new Error("nickName ou email devem ser enviados por query")
        }
        if (req.query.nickName) {
            user = await getUserBynickName(
                nickName
            );
        }else if (req.query.email) {
            user = await getUserByEmail(
                email
            );
        }
        if(user===undefined){
            res.status(200).send( [] ) 
        }
        res.status(200).send( user );
    } catch (err: any) {
        switch (err.message) {
            case "nickName ou email devem ser enviados por query":
                res.status(401)
                break
            default:
                res.status(500)
        }
        res.send(err.message)
    }
});

// 1. Criar usuário 
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

// 3. Editar usuário
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


// app/task

// 10. Pegar usuários responsáveis por uma tarefa
const getUserResponsibleTask = async (task_id: string): Promise<any> => {
    const resultTaskId = await connection.raw(`
        SELECT user.id, user.nickname FROM responsible_task_user
        INNER JOIN user ON responsible_task_user.responsible_user_id = user.id
        WHERE responsible_task_user.task_id = "${task_id}"
    `)
    return resultTaskId[0]
}
  app.get("/task/:task_id/responsible", async (req: Request, res: Response): Promise<void> => {
    const task_id = req.params.task_id 
    let errorCode = 400
    try {
      const resultUserResponsibleTaskId = await getUserResponsibleTask(task_id)
      if(!resultUserResponsibleTaskId) {
        errorCode=422
        throw new Error ("Insira o id da tarefa")
      }
      if(resultUserResponsibleTaskId.length === 0) {
        errorCode=422
        throw new Error ("Id não encontrado")
      }
      res.send({users: resultUserResponsibleTaskId})
    } catch (err:any) {
      res.status(500).send({message: err.message});
    }
});

// 5. Pegar tarefa pelo id
const getTaskById = async (id: string): Promise<void> => {
    const result = await connection.raw(` 
    SELECT * 
    FROM task 
    WHERE id_Task='${id}'
    `)
    return result[0][0]
}
app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id = String(req.params.id)
        const user: any = await getTaskById(
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

// 7. Pegar tarefas criadas por um usuário
const getTaskByUserId = async (creatorUserId: string): Promise<void> => {
    console.log("entrou")
    const result = await connection.raw(`
    SELECT * 
    FROM task 
    WHERE creatorUserId ='${creatorUserId}'
    `)
    return result[0]
}
app.get("/task", async (req: Request, res: Response) => {
    try {
        const creatorUserId: string = String(req.query.creatorUserId)
        const task: any = await getTaskByUserId(creatorUserId);
        res.status(200).send({ task });
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

// 9. Atribuir um usuário responsável a uma tarefa
const newResponsibleUser= async (idTask: string, responsibleUserId: string): Promise<void> => {
    const result = await connection.raw(`
    INSERT INTO responsible_task_user (task_id, responsible_user_id )
       VALUES (
       '${idTask}',
       '${responsibleUserId}'
    )
    `)
}
app.post("/task/responsible", async (req: Request, res: Response) => {
    try {
        let errorCode = 400
        const { task_id, responsible_user_id } = req.body
       if(!task_id || !responsible_user_id){
        errorCode = 401
        throw new Error("Devem ser informados os valores  task_id e responsible_user_id ")
       }
        await newResponsibleUser(
            task_id,
            responsible_user_id
        );
        res.status(200).send("Tarefa atribuida a usuário");
    } catch (err: any) {
        res.status(500).send(err.message)
    }
});

// 4. Criar tarefa
const newTask = async (idTask: string, title: string, description: string, limitDate: string, creatorUserId: string): Promise<void> => {
    const result = await connection.raw(`
      
    INSERT INTO task (id_Task,title, description, limitDate, creatorUserId )
       VALUES (
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
        
        if (!title || title === "") {
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
        await newTask(
            idTask,
            title,
            description,
            limitDateChange,
            creatorUserId
        );
        res.status(200).send("Tarefa cadastrada");
    } catch (err: any) {
        res.status(500).send(err.message)
    }
});


