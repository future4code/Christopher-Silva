"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const CharacterDatabase_1 = require("./data/CharacterDatabase");
const types_1 = require("./types");
app_1.default.post("/character", (req, res) => {
    try {
        const { name, gender, age, description } = req.body;
        const character = new types_1.Character(name, gender, age, description);
        const characterDB = new CharacterDatabase_1.CharacterDataBase();
        characterDB.createCharacter(character);
    }
    catch (error) {
        res.status(400).send(error.message | error.sqlMessage);
    }
});
//# sourceMappingURL=index.js.map