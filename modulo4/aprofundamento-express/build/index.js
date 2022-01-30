"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
/*
Exercício 1
Faça novamente a instalação e configuração do Express na pasta do exercício.
Para testar, crie um endpoint que aponte para o path “/ping”.
Esse endpoint pode responder apenas com uma mensagem “pong”.
*/
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓");
});
/*
Exercício 2
Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”to dos”).
 Crie uma variável de tipo para representar cada afazer.
 =>(data.ts)

Exercício 3
Acesse a API do JSONPlaceholder e observe os endpoints que buscam afazeres (”to dos”).
 Crie uma variável de tipo para representar cada afazer.
 =>(data.ts)

Exercício 4
Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um único status, ou seja,
 retorne ou afazeres concluídos ou somente os que ainda estão em andamento.
*/
app.get("/homework/search", (req, res) => {
    const homeworkCompleted = req.query.completed;
    if (!homeworkCompleted) {
        res.status(400).send("Query 'completed' não informado");
    }
    const resultHomeworkCompleted = [];
    for (let homework of data_1.homeworks) {
        if (homeworkCompleted === "false" && homework.completed === false) {
            resultHomeworkCompleted.push(homework.title);
        }
        else if (homeworkCompleted === "true" && homework.completed === true) {
            resultHomeworkCompleted.push(homework.title);
        }
    }
    res.send(resultHomeworkCompleted);
});
/*
Exercício 5
Construa um endpoint de criação de afazer. A resposta deve retornar o array de afazeres atualizado.
*/
app.post("/homework/creat", (req, res) => {
    const userIdBody = req.body.userId;
    const titleBody = req.body.title;
    data_1.homeworks.push({
        "userId": userIdBody,
        "id": Date.now(),
        "title": titleBody,
        "completed": false
    });
    res.send(data_1.homeworks);
});
/*
Exercício 6
Construa um endpoint de edição do status de um afazer, ou seja, de completo para incompleto e vice-versa.
*/
app.put("/homework/completed", (req, res) => {
    const idHomework = Number(req.query.idHomework);
    if (!idHomework) {
        res.status(400).send("Query 'idHomework' não informado");
    }
    for (let i = 0; i < data_1.homeworks.length; i++) {
        if (data_1.homeworks[i].id === idHomework) {
            data_1.homeworks[i].completed = !data_1.homeworks[i].completed;
        }
    }
    res.send(idHomework);
});
