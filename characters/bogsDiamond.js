import { Character } from "./character.js";

class BogsDiamondCharacter extends Character {
    constructor() {
        super("Bogs", "You're some sweet punk. You been broke in yet?");
    }
}

const BogsDiamondHimself = new BogsDiamondCharacter();

export { BogsDiamondHimself as Bogs };