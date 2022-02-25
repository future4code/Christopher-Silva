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
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../data/connection");
const Authenticator_1 = require("../services/Authenticator");
const HashManager_1 = require("../services/HashManager");
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                res.statusCode = 422;
                throw new Error("Preencha os campos 'email' e 'password' ");
            }
            // select * from to_do_list_users where email = email
            const [user] = yield connection_1.connection("to_do_list_users").where({ email });
            const passwordIsCorrect = user && new HashManager_1.HashManager().compareHash(password, user.password);
            if (!user || !passwordIsCorrect) {
                res.statusCode = 401;
                res.statusMessage = "Credenciais invalidas";
                throw new Error("Credenciais inválidas");
            }
            const token = new Authenticator_1.Authenticator().generateToken({ id: user.id, role: user.role });
            res.status(200).send({ token });
        }
        catch (error) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: "Internal server error" });
            }
            else {
                res.send({ message: error.sqlMessage || error.message });
            }
        }
    });
}
exports.default = login;
