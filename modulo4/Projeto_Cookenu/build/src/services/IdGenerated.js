"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdGenerated = void 0;
const uuid_1 = require("uuid");
class IdGenerated {
    constructor() {
        this.generatedId = () => uuid_1.v4();
    }
}
exports.IdGenerated = IdGenerated;
