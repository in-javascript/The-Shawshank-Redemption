import { Character } from "./character.js";

class GlennQuentinCharacter extends Character {
    constructor() {
        super("Glenn Quentin");
    }
}

const GlennQuentinHimself = new GlennQuentinCharacter();

export { GlennQuentinHimself as Glenn };