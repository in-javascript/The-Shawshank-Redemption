import { Character } from "./character.js";

class ElmoBlatchCharacter extends Character {
    constructor() {
        super("Elmo Blatch");
    }
}

const ElmoBlatchHimself = new ElmoBlatchCharacter();

export { ElmoBlatchHimself as Elmo };