import { connection } from "./connection"
import users from "./users.json"
import recipes from "./recipes.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS aula48_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) UNIQUE NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("aula49_users")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const insertRecipes = () => connection("aula49_recipes")
   .insert(recipes)
   .then(() => { console.log("Receitas criadas") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .then(insertRecipes)
   .finally(closeConnection)