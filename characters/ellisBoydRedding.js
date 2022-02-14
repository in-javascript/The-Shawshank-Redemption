import { Character } from "./character.js";

class EllisBoydReddingCharacter extends Character {
    constructor() {
        super("Red");
    }
}

const EllisBoydReddingHimself = new EllisBoydReddingCharacter();

export { EllisBoydReddingHimself as Red };