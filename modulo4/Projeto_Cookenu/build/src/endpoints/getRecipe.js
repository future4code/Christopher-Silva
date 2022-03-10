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
exports.getRecipe = void 0;
const connection_1 = __importDefault(require("../../connection"));
const person_1 = require("../../types/person");
function getRecipe(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield connection_1.default("Professors");
            const professor = result.map((prof) => {
                const professors = new person_1.Person(prof.id, prof.name, prof.email, prof.birth_date, prof.class_id);
                return professors;
            });
            if (!result.length) {
                res.status(204);
                throw new Error("Não existem professores cadastrados");
            }
            res.status(200).send(professor);
        }
        catch (error) {
            res.send({ message: error.message || error.sqlMessage || "Algo deu errado" });
        }
    });
}
exports.getRecipe = getRecipe;
