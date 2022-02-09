import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./connection";

export const saveAddressUsers = async (
    id: string,
    CEP: string,
    rua:string,
    numero: string,
    bairro: string,
    cidade: string,
    estdo: string
  ): Promise<void> => {
    await connection.raw(`
          INSERT INTO user_address
            (id, CEP, rua, numero,bairro,cidade,estdo)
          VALUES (
          "${id}",
          "${CEP}",
          "${rua}",
          "${numero}",
          "${bairro}",
          "${cidade}",
          "${estdo}"
      );
      `);
  };