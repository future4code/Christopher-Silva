import { Request, Response } from "express"
import connection from "./connection";
import express from "express";
import cors from "cors";
import app from "./app"



// Esse arquivo seria o index.ts

const getAVGByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    

    SELECT AVG(salary) FROM Actor WHERE gender ='${gender}'
  `)

    return result[0][0]
}

/*
// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("001") )
})()
*/
const averageSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });

    return result[0];
};
// Ou então podemos chamá-la dentro de um endpoint
app.get("/actors/avgSalaryByGender", async (req: Request, res: Response) => {
    try {

        const gender = req.body.gender

        res.send(await averageSalary(gender))
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

const getActorByGender = async (gender: any): Promise<any> => {
    const result = await connection.raw(`
      
      SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
    `)

    return result[0][0]
}

app.get("/actor", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender;
        const actor = await getActorByGender(gender);

        res.status(200).send(actor)
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});


const createActor = async (id: string, name: string, salary: number, birthDate: string, gender: string): Promise<void> => {
    const result = await connection.raw(`
      
      INSERT INTO Actor (id, name, salary, birth_date, gender)
       VALUES(
        '${id}', 
        '${name}',
        '${salary}',
        '${birthDate}', 
        '${gender}'
         )
    `)

    return result[0][0]
}

app.post("/actor", async (req: Request, res: Response) => {
    try {
        await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            req.body.dateOfBirth,
            req.body.gender
        );

        res.status(200).send("ator criado");
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});



/*
--> Exercício 1

a) *Explique como é a resposta que temos quando usamos o `raw`.* 
Com a comunicação que o conection faz com o banco de dados, enviamos os parametros para o banco,
 a função deve ser assíncrona, toda função assíncrona devolve uma promise,usamos a função await para
 o código esperar a resposta do banco de dados e não quebrar


b) *Faça uma função que busque um ator pelo nome;*

R.
     const getActorById = async (name: string): Promise<any> => {
     const result = await connection.raw(`
       SELECT * FROM Actor WHERE name = '${name}'
     `)

            return result[0][0]  --> por padrão o banco devolve 2 objetos, com "result[0]", acessamos o primeiro objeto 
          com os dados da tabela, com os "result[0][0]" acessamos o primeiro objeto da tabela.
     }

c) *Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`.
 Para atrizes, `female` e para atores `male`.*

R. const getActorById = async (gender: string): Promise<any> => {
     const result = await connection.raw(`
    
      SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
     `)

        return result[0][0]
     }

return : {
           "COUNT(*)": 3
         }


--> Exercício 2

     a) *Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão*
R.

const updateActor = async (id: string, newSalary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: newSalary,
      })
      .where("id", id);
  };
// Ou então podemos chamá-la dentro de um endpoint
app.put("/actors/changeSalary/:id", async (req: Request, res: Response) => {
  try {
    
    const id = req.params.id 
    const newSalary = req.body.salary

    res.send(await updateActor(id, newSalary))
  } catch (error:any) {
        console.log(error.message)
    res.status(500).send("Unexpected error")
  }




     b) *Uma função que receba um id e delete um ator da tabela*
R.

const delActor = async (id: string): Promise<any> => {
    await connection("Actor")
      .delete()
      .where("id", id);
  };

app.delete("/actors/changeSalary/:id", async (req: Request, res: Response) => {
  try {
    
    const id = req.params.id 
    

    res.send(await delActor(id))
  } catch (error:any) {
        console.log(error.message)
    res.status(500).send("Unexpected error")
  }




     c) *Uma função que receba um `gender` e devolva a média dos salários de atrizes ou atores desse `gender`*
R.
const averageSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
    .avg("salary")
    .where({ gender });

  return result[0];
  };

app.get("/actors/avgSalaryByGender", async (req: Request, res: Response) => {
  try {
    
    const gender = req.body.gender
    
    res.send(await averageSalary(gender))
  } catch (error:any) {
        console.log(error.message)
    res.status(500).send("Unexpected error")
  }


--> Exercício 3

a) Crie um endpoint com as especificações acima
R.
     const getActorById = async (id: string): Promise<any> => {
       const result = await connection.raw(`
         SELECT * FROM Actor WHERE id = '${id}'
       `)
   
         return result[0][0]
     }

     app.get("/actor/:id", async (req: Request, res: Response) => {
     try {
        const id = req.params.id;
        const actor = await getActorById(id);
  
        res.status(200).send(actor)
     } catch (err:any) {
        res.status(400).send({
          message: err.message,
        });
      }
     });


b) Crie um endpoint agora com as seguintes especificações:

- Deve ser um GET (`/actor`)
- Receber o gênero como um *query param* (`/actor?gender=`)
- Devolver a quantidade de atores/atrizes desse gênero

R.

const getActorByGender = async (gender: any): Promise<any> => {
    const result = await connection.raw(`
      
      SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
    `)
  
      return result[0][0]
  }

app.get("/actor", async (req: Request, res: Response) => {
    try {
      const gender = req.query.gender;
      const actor = await getActorByGender(gender);
  
      res.status(200).send(actor)
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


  --> Exercício 4
- Definir o método como `POST`
- Criar um path: `/actor`
- Receber os parâmetros pelo body

R.
const createActor = async (id: string, name: string, salary: number, birthDate: string, gender: string): Promise<void> => {
    const result = await connection.raw(`
      
      INSERT INTO Actor (id, name, salary, birth_date, gender)
       VALUES(
        '${id}', 
        '${name}',
        '${salary}',
        '${birthDate}', 
        '${gender}'
         )
    `)

    return result[0][0]
}

app.post("/actor", async (req: Request, res: Response) => {
    try {
        await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            req.body.dateOfBirth,
            req.body.gender
        );

        res.status(200).send("ator criado");
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});





*/