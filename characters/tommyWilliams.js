import { Character } from "./character.js";

class TommyWilliamsCharacter extends Character {
    constructor() {
        super("Tommy", "I like stealing & getting caught and I don't know to read & write.");
    }
}

const TommyWilliamsHimself = new TommyWilliamsCharacter();

export { TommyWilliamsHimself as Tommy };