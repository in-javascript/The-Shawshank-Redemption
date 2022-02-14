import { Character } from "./character.js";

class CaptainHadleyCharacter extends Character {
    constructor() {
        super("Captain Hadley", "I love killing people at work!");
    }
}

const CaptainHadleyHimself = new CaptainHadleyCharacter();

export { CaptainHadleyHimself as Hadley };