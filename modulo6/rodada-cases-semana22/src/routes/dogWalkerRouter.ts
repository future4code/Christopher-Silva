import express from "express";
import { DogWalkerController } from "../controller/DogWalkerController";


export const dogWalkerRouter = express.Router();

const dogWalkerController = new DogWalkerController();

dogWalkerRouter.get("/show", dogWalkerController.show);  // retorna o tempo real(diferença entre inicio e fim) de um passeio realizado
dogWalkerRouter.post("/creat", dogWalkerController.creat);  //cria novo passeio
dogWalkerRouter.put("/start_walk/:id_walk", dogWalkerController.startWalk); // Cadastra o horário de inicio de uma caminhada
dogWalkerRouter.put("/finish_walk/:id_walk", dogWalkerController.finishWalk) // Cadastra o horário final de uma caminhada

//app.use("/index/nextwalks", userRouter);  // Filtra pelos próximos passeios a partir do dia atual
//app.use("/index/allwalks", userRouter);   // Retorna todos os passeios cadastrados
// aplicar paginação




