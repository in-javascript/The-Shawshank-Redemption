import { Character } from "./character.js";

class MrsDufresneCharacter extends Character {
    constructor() {
        super("Andy's wife");
    }
}

const MrsDufresneHerself = new MrsDufresneCharacter();

export { MrsDufresneHerself as AndysWife };