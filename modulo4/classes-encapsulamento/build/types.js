"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
var GENDERCHARACTER;
(function (GENDERCHARACTER) {
    GENDERCHARACTER["MALE"] = "MALE";
    GENDERCHARACTER["FAMALE"] = "FAMALE";
})(GENDERCHARACTER || (GENDERCHARACTER = {}));
class Character {
    constructor(name, gender, age, description) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.description = description;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.Character = Character;
const homer = new Character('homer', GENDERCHARACTER.MALE, 60, 'fica em casa e beber duff');
const bart = new Character('bart', GENDERCHARACTER.MALE, 60, 'fica em casa e beber duff');
const magie = new Character('magie', GENDERCHARACTER.FAMALE, 60, 'fica em casa e beber duff');
const marge = new Character('marge', GENDERCHARACTER.FAMALE, 60, 'fica em casa e beber duff');
//# sourceMappingURL=types.js.map