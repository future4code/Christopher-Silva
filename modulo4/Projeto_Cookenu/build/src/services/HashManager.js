"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashManager = void 0;
const bcryptjs_1 = require("bcryptjs");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class HashManager {
    constructor() {
        this.createHash = (plainText) => {
            const rounds = Number(process.env.COST);
            const salt = bcryptjs_1.genSaltSync(rounds);
            const cypherText = bcryptjs_1.hashSync(plainText, salt);
            return cypherText;
        };
        this.compareHash = (plainText, hash) => {
            return bcryptjs_1.compareSync(plainText, hash);
        };
    }
}
exports.HashManager = HashManager;
