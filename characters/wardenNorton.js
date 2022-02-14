import { Character } from "./character.js";

class WardenNortonCharacter extends Character {
    constructor() {
        super("Warden Norton", "I love discipline and the Bible!");
    }
}

const WardenNortonHimself = new WardenNortonCharacter();

export { WardenNortonHimself as Norton };