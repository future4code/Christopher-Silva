import connection from "../../connection";
import { Purchases } from "../../types";

export const purchaseMade = async (
  id: string
): Promise<Purchases | null> => {
   const result =  await connection.raw(`
   SELECT labecommerce_products.name FROM labecommerce_purchases
   JOIN labecommerce_products
   ON labecommerce_purchases.user_id = "${id}" AND labecommerce_products.id = product_id;
      `);
      
      const purchase= result[0].map(toPurchase)
      return purchase
  };
  const toPurchase = (input:any) : Purchases =>{
    return{
      name: input.name,
    }
  }