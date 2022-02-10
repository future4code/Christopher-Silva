import connection from "../../connection";

export const savePurchases = async (
    id: string,
    user_id:string,
    product_id: string,
    quantity: number,
    total_price:number
  ): Promise<void> => {
    await connection.raw(`
          INSERT INTO labecommerce_purchases
            (id, user_id, product_id, quantity, total_price)
          VALUES (
          "${id}",
          "${user_id}",
          "${product_id}",
          "${quantity}",
          "${total_price}"
      );
      `);
  };