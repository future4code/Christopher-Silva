import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  insertUser = async (
    user: user
  ) => {
    await this.connection.insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
    }).into('to_do_list_users')
  }

  selectUserByEmail = async (
    email: string
 ): Promise<user> => {
    try {
       const result = await this.connection("to_do_list_users")
          .select("*")
          .where({ email })
 
       return {
          id: result[0].id,
          name: result[0].name,
          email: result[0].email,
          password: result[0].password,
          role: result[0].role
       }
 
    } catch (error: any) {
       throw new Error(error.slqMessage || error.message)
    }
 }

 getUsers = async (
   
 ) => {
   const users: any = [];
   const result = await this.connection.select("*").from('to_do_list_users')
   for(let user of result){
      users.push(user);
}
return users;
 }

 deleteUser = async (
   id:string
   ) => {
     
     const result = await this.connection('to_do_list_users')
     .delete('id').where('id', 'like', `%${id}%`)

   }
 }