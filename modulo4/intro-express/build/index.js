"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
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
;
// exercício 1 - criar função get
app.get("/", (req, res) => {
    res.send("Hello from Express").status(201);
});
//exercício 3 - Crie um array de usuários para servir como base de dados da nossa API.
const users = [
    {
        id: 1,
        name: "Mario",
        phone: "51-5515151",
        email: "mario@gmail.com",
        website: "http://Mario"
    }, {
        id: 2,
        name: "Luigi",
        phone: "52-5525252",
        email: "luigi@gmail.com",
        website: "http://luigi"
    }, {
        id: 3,
        name: "Toad",
        phone: "52-5525253",
        email: "toad@gmail.com",
        website: "http://toad"
    }
];
// Exercício - 4 Construa um endpoint que retorne os usuários criados no exercício anterior.
app.get("/users", (req, res) => {
    res.send(users).status(201);
});
/*
Exercício 6 - Crie um array de posts para incrementar a base de dados da nossa API.
Você acha melhor criá-los dentro ou fora do array de usuários? Justifique com comentários no código. (criei fora pois torna mais fácil de organizar)
Não se esqueça de fazer a tipagem correta desse array.
*/
const posts = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 2,
        id: 1,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        userId: 3,
        id: 1,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
];
/*
Exercício 7 - Construa um endpoint que retorne os posts criados no exercício anterior.
Use o JSONPlaceholder como exemplo para o nome da rota e formato da resposta.
*/
app.get("/posts", (req, res) => {
    res.send(posts).status(201);
});
/*
Exercício 8 - Construa um endpoint que retorne os posts de um usuário em particular.
Use o JSONPlaceholder como exemplo para a construção da rota.
*/
app.post("/posts/1", (req, res) => {
    console.log("params", req.query.id);
    // res.send(postID).status(201)
});
