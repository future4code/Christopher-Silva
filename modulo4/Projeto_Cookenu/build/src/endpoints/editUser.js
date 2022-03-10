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
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, nickname } = req.body;
            const token = req.headers.authorization;
            if (!name && !nickname) {
                res.statusCode = 422;
                res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'";
                throw new Error();
            }
            const tokenData = new Authenticator_1.Authenticator().getTokenData(token);
            if (!tokenData) {
                res.statusCode = 401;
                res.statusMessage = "token invalido ou nao passado no headers";
                throw new Error();
            }
            if (tokenData.role !== "ADMIN") {
                res.statusCode = 403; // forbidden
                res.statusMessage = "usuário não permitido";
                throw new Error("usuário não permitido");
            }
            yield connection_1.connection('to_do_list_users')
                .update({ name, nickname })
                .where({ id: tokenData.id });
            res.send({ message: "User updated sucessfully!" });
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
exports.default = createUser;
