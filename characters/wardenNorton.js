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
        this.act("put The Bible and the records to safe");
    }
}

const WardenNortonHimself = new WardenNortonCharacter();

export { WardenNortonHimself as Norton };