import { script } from "../helpers/script.js";
import { Hadley } from "./captainHadley.js";
import { Character } from "./character.js"

class AndyDufresneCharacter extends Character {
    constructor() {
        super("Andy");
    }

    provideConsultancyServices(someone) {
        if (someone === Hadley) {
            this.act("provides consultancy services to", someone.name);
            script(`${Hadley.name} saves $35.000!`);
            Hadley.protect(this);
        }
    }
}

const AndyDufresneHimself = new AndyDufresneCharacter();

export { AndyDufresneHimself as Andy };