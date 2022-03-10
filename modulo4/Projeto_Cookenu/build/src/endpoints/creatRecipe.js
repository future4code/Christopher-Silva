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
exports.creatRecipe = void 0;
const connection_1 = __importDefault(require("../../connection"));
exports.creatRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, birth_date, class_id } = req.body;
        const classroom = yield connection_1.default("Class");
        const classroomId = classroom.map((idClass) => {
            return idClass.id;
        });
        const verification = classroom.filter((idClass) => {
            return idClass.id === class_id;
        });
        if (verification.length === 1) {
            res.status(204);
            throw new Error("Classe informada não existe");
        }
        if (!name || !email || !birth_date || !class_id) {
            res.status(404);
            throw new Error("Um ou mais valores não foram enviados");
        }
        const professor = {
            id: Date.now().toString(),
            name,
            email,
            birth_date,
            class_id
        };
        yield connection_1.default("Professors").insert(professor);
        res.status(200).send({ message: 'Professor cadastrado com sucesso!' });
    }
    catch (error) {
        res.send({ message: error.message || error.sqlMessage || "Algo deu errado " });
    }
});
exports.default = registerProfessors;
