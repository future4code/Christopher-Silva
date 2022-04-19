import express from "express";
import { DogWalkerController } from "../controller/DogWalkerController";


export const dogWalkerRouter = express.Router();

const dogWalkerController = new DogWalkerController();

dogWalkerRouter.get("/show", dogWalkerController.show);  // Retorna o tempo real(diferença entre inicio e fim) de um passeio realizado
dogWalkerRouter.get("/index", dogWalkerController.walks); // Retorna todos os passeios cadastrados, com ou sem paginação

dogWalkerRouter.post("/creat", dogWalkerController.creat);  //Cria novo passeio

dogWalkerRouter.put("/start_walk/:id_walk", dogWalkerController.startWalk); // Cadastra o horário de inicio de uma caminhada
dogWalkerRouter.put("/finish_walk/:id_walk", dogWalkerController.finishWalk) // Cadastra o horário final de uma caminhada
