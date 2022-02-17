import { nameOfAndysRock, nameOfRaquelWelchPoster } from "../helpers/statics.js";
import { Character } from "./character.js";

class WardenNortonCharacter extends Character {
    constructor() {
        super("Warden Norton", "I love discipline and the Bible!");
    }

    takeBribe(someone) {
        this.act("takes bribe from", someone.name);
    }

    takeTheBibleAndTheRecordsFromSafe() {
        this.act("takes The Bible and the records from safe")
    }

    putTheBibleAndTheRecordsToSafe() {
        this.act("puts The Bible and the records to safe");
    }

    throw(item, where) {
        Character.prototype.throw.call(this, item, where);

        if (item.name === nameOfAndysRock && where === nameOfRaquelWelchPoster) {
            throw new Error("How could this happen?");
        }
    }
}

const WardenNortonHimself = new WardenNortonCharacter();

export { WardenNortonHimself as Norton };