import connection from "../../connection";
import { Products } from "../../types";

export const allProducts = async (): Promise<Products | null> => {

  const result = await connection.raw(`
    SELECT * FROM labecommerce_products;
      `);
  const products = result[0].map(toProducts)
  return result
};

const toProducts = (input: any): Products => {
  return {
    id: input.id,
    name: input.name,
    price: input.price,
    image_url: input.image_url
  }
}