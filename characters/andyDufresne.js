import { Character } from "./character.js"

class AndyDufresneCharacter extends Character {
    constructor() {
        super("Andy");
    }
}

const AndyDufresneHimself = new AndyDufresneCharacter();

export { AndyDufresneHimself as Andy };