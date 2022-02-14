import connection from "../../connection";

export const saveProducts = async (
    id: string,
    name: string,
    price:number,
    image_url: string,
  ): Promise<void> => {
    await connection.raw(`
          INSERT INTO labecommerce_products
            (id, name, price, image_url)
          VALUES (
          "${id}",
          "${name}",
          "${price}",
          "${image_url}"
      );
      `);
  };