# Título <h1>
## Título <h2>
### Título <h3>
#### Título <h4>

**texto**

 ~~~javascript

~~~

# --> Exercício 1

## a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

*Concordo, pois aumenta a quantidade numérica de Ids mesmo tendo um número menor de caracteres.*

## b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 

~~~javascript
import { v4 } from "uuid"

export function IdGenerator():string{
    return v4();
}
~~~


# --> Exercício 2 

~~~javascript
const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});
const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};
~~~

## a) Explique o código acima com as suas palavras.

*Variavel "userTableName" carrega o nome da tabela.*

*O connection para se conectar com o banco de dados.*

*Por fim a função assincrona "createUser" envia para dentro da tabela as informações do usuário.*


## b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

~~~javascript
const {email, password } = req.body
~~~

## c) Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.

*INSERT INTO User(id, email, password)
VALUES ("001", "fulano@gmail.com", "2345678");*

## --> Exercício 3
import * as jwt from "jsonwebtoken";

const expiresIn = "1min"


~~~javascript
const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
~~~

## a) O que a linha as string faz? Por que precisamos usar ela ali?
*define o retorno da JWT_KEY como uma string, usada aqui para não ter conflito de tipagem na execu~ção do código*

## b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.

~~~javascript
GenerateToken = (
        payload: AuthenticationData
    ) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn
            }
        )
    }
~~~

# --> Exercício 4

## a) Crie o endpoint que realize isso, com as funções que você implementou anteriormente

~~~javascript
app.post('/user/signup', creatUser)
~~~


## b) Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`

~~~javascript
if (!email || email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
~~~

## c) Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais

~~~javascript
if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }
~~~
# --> Exercício 5
## a) Crie uma função que retorne as informações de um usuário a partir do email
~~~javascript
const emailUser = getUserByEmail(email)

export const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("user")
      .where({ email });
 
    return result[0];
   }
~~~
# --> Exercício 6 
## a) Crie o endpoint que realize isso, com as funções que você implementou anteriormente
~~~javascript
app.post('/user/login', login)
~~~

## b) Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um "@"
 ~~~javascript
if (!email || email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
~~~

# --> Exercício 7

 ~~~javascript
const expiresIn = "1min";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
~~~

## a) O que a linha as any faz? Por que precisamos usá-la ali?
*tipa o retorno como any, para que o retorno não tenha uma tipagem definida*

## b) Crie uma função que realize a mesma funcionalidade da função acima

# --> Exercício 8

## a) *Comece criando uma função no data que retorne o usuário a partir do id*
~~~javascript
export const getUserByID = async(id: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("user")
      .where({ id });
 
    return result[0];
   }

~~~

## b) *Crie o endpoint com as especificações passadas*

~~~javascript
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

~~~

