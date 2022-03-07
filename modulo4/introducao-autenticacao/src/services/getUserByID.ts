import connection from "../connection";

export const getUserByID = async(id: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("user")
      .where({ id });
 
    return result[0];
   }