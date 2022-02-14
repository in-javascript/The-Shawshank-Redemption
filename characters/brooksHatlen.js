import { Character } from "./character.js";

class BrooksHatlenCharacter extends Character {
    constructor() {
        super("Brooks", "I live with a crow under my jacket!");
    }
}

const BrooksHatlenHimself = new BrooksHatlenCharacter();

export { BrooksHatlenHimself as Brooks };