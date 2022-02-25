"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticator = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Authenticator {
    constructor() {
        this.generateToken = (payload) => {
            const token = jsonwebtoken_1.sign(payload, "asdjkl", // JW_SECRET
            { expiresIn: process.env.EXPIRES_IN });
            return token;
        };
        this.getTokenData = (token) => {
            try {
                const tokenData = jsonwebtoken_1.verify(token, "asdjkl" // JW_SECRET
                );
                return {
                    id: tokenData.id,
                    role: tokenData.role
                };
            }
            catch (error) {
                console.log(error);
                return null;
            }
        };
    }
}
exports.Authenticator = Authenticator;
