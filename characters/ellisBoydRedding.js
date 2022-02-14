import { nameOfAndysRockHammer } from "../helpers/statics.js";
import { Character } from "./character.js";
import { RockHammer } from "../items/rockHammer.js";

class EllisBoydReddingCharacter extends Character {
    constructor() {
        super("Red");
    }

    get(something) {
        if (something === nameOfAndysRockHammer) {
            this.say(`Brooks will bring you your ${nameOfAndysRockHammer}. Don't dig a tunner under the wall with it!`);

            return new RockHammer();
        }
    }
}

const EllisBoydReddingHimself = new EllisBoydReddingCharacter();

export { EllisBoydReddingHimself as Red };