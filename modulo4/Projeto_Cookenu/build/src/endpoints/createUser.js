"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../data/connection"));
const Authenticator_1 = require("../services/Authenticator");
const HashManager_1 = require("../services/HashManager");
const IdGenerated_1 = require("../services/IdGenerated");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, nickname, email, password, role } = req.body;
            if (!name || !nickname || !email || !password || !role) {
                res.statusCode = 422;
                throw new Error("Preencha os campos 'name', 'nickname' , 'email', 'role' e 'password' ");
            }
            const [user] = yield connection_1.default('to_do_list_users')
                .where({ email });
            if (user) {
                res.statusCode = 409;
                throw new Error('Email já cadastrado');
            }
            const id = new IdGenerated_1.IdGenerated().generatedId();
            const cypherPassword = new HashManager_1.HashManager().createHash(password);
            const newUser = {
                id,
                name,
                nickname,
                email,
                password: cypherPassword,
                role
            };
            yield connection_1.default('to_do_list_users')
                .insert(newUser);
            const token = new Authenticator_1.Authenticator().generateToken({ id, role });
            res.status(201).send({ message: "User created successfully!", token });
        }
        catch (error) {
            res.send({ message: error.message || error.sqlMessage || "Algo deu errado" });
        }
    });
}
exports.default = createUser;
