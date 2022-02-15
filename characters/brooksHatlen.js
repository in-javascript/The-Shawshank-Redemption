import { TheBrewster } from "../places/theBrewster.js";
import { Character } from "./character.js";

class BrooksHatlenCharacter extends Character {
    constructor() {
        super("Brooks", "I live with a crow under my jacket!");
    }

    shouldBeGrantedParole() {
        return true;
    }

    cantTakeItAnymore() {
        TheBrewster.carve(`${this.name} was here`.toUpperCase());
        this.commitSuicide();
    }
}

const BrooksHatlenHimself = new BrooksHatlenCharacter();

export { BrooksHatlenHimself as Brooks };