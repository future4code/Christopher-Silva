import express from "express";
import { DogWalkerController } from "../controller/DogWalkerController";


export const dogWalkerRouter = express.Router();

const dogWalkerController = new DogWalkerController();

dogWalkerRouter.post("/creat", dogWalkerController.creat);  //cria novo passeio


//app.use("/index/nextwalks", userRouter);  // Filtra pelos próximos passeios a partir do dia atual
//app.use("/index/allwalks", userRouter);   // Retorna todos os passeios cadastrados
// aplicar paginação

//app.use("/creat", userRouter);  //cria novo passeio

//app.use("/show", userRouter); // retorna retorna o tempo real(diferença entre inicio e fim) de um passeio realizado

//app.use("/start_walk", userRouter); // Cadastra o horário de inicio de uma caminhada
//app.use("/finish_walk", userRouter); // Cadastra o horário final de uma caminhada