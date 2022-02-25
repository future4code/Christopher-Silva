"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const createUser_1 = __importDefault(require("./endpoints/createUser"));
const login_1 = __importDefault(require("./endpoints/login"));
const getMyProfile_1 = require("./endpoints/getMyProfile");
const getOtherProfile_1 = require("./endpoints/getOtherProfile");
const getRecipe_1 = require("./endpoints/getRecipe");
const creatRecipe_1 = require("./endpoints/creatRecipe");
//get
app_1.default.get('/user/profile', getMyProfile_1.getMyProfile); // Pegar próprio perfil
app_1.default.get('/user/:id', getOtherProfile_1.getOtherProfile); // pegar perfil de outro usuário
app_1.default.get('/recipe/:id', getRecipe_1.getRecipe); // pegar receita
//post
app_1.default.post('/users/signup', createUser_1.default); // Signup
app_1.default.post('/login', login_1.default); // Login
app_1.default.post('/recipe', creatRecipe_1.creatRecipe); // Criar receita
//put
//delete
