import connection from "../../connection";
import { Users } from "../../types";

export const allUsers = async (): Promise<Users | null> => {

  const result = await connection.raw(`
    SELECT * FROM labecommerce_users;
      `);
  const users = result[0].map(toUsers)
  return users
};

const toUsers = (input: any): Users => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    password: input.password
  }
}

