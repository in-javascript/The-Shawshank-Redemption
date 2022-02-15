import { script } from "../helpers/script.js";
import { nameOfThePlaceAndyPlansToGo } from "../helpers/statics.js";
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

    shareAfterPrisonPlans(someone) {
        this.say(`${someone.name}, I will go to ${nameOfThePlaceAndyPlansToGo}, open a little hotel right on the beach, buy some worthless old boat and fix it up like new.`);
    }

    shareASecretLocation(someone) {
        this.say(`${someone.name}, go to the big hayfield up near Buxton, with a long rock wall with a big oak at the north end. You'll find something buried a piece of black volcanic glass, under the bsase of that wall. I want you to have it.`);
    }

    findRope() {
        this.act("get long rope", "from Heywood");
    }

    replaceOriginalBooksWithDummies() {
        this.act("replaces original books with dummies");
    }

    leaveInmateClothes() {
        this.act("leaves his inmate clothes", "in the creek");
    }

    switchIdentities() {
        this.act(`switches his identity from ${this.name}`, `to ${this.theSecondCousingToHarveyTheRabbit.name}`);
        this.name = this.theSecondCousingToHarveyTheRabbit.name;
    }

    getAllDirtyMoney() {
        this.act(`gets all money of ${this.theSecondCousingToHarveyTheRabbit.name}`);
        this.wealthInUSD = 370000;
    }

    sendAllBooks(somewhere) {
        this.act("sends all books to", somewhere.name);
    }
}

const AndyDufresneHimself = new AndyDufresneCharacter();

export { AndyDufresneHimself as Andy };