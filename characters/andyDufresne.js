import { script } from "../helpers/script.js";
import { Hadley } from "./captainHadley.js";
import { Character } from "./character.js"
import { Norton } from "./wardenNorton.js";

class AndyDufresneCharacter extends Character {
    constructor() {
        super("Andy");
    }

    provideConsultancyServices(someone) {
        this.act("provides consultancy services to", someone.name);

        if (someone === Hadley) {
            script(`${Hadley.name} saves $35.000!`);
            Hadley.protect(this);
        }

        if (someone === Norton) {
            script(`new Character("${this.theSecondCousingToHarveyTheRabbit.name}")`);
        }
    }

    get theSecondCousingToHarveyTheRabbit() {
        if (!this._theSecondCousingToHarveyTheRabbit) {
            this._theSecondCousingToHarveyTheRabbit = new Character("Randall Stephens");
        }

        return this._theSecondCousingToHarveyTheRabbit;
    }

    doTheBooksForNortonsDirtyMoney() {
        Norton.takeTheBibleAndTheRecordsFromSafe();
        this.doTheBooks();
        Norton.putTheBibleAndTheRecordsToSafe();
    }

    doTheBooks() {
        this.act("does the books");
    }
}

const AndyDufresneHimself = new AndyDufresneCharacter();

export { AndyDufresneHimself as Andy };