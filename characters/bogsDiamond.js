import { script } from "../helpers/script.js";
import { Hadley } from "./captainHadley.js";
import { Character } from "./character.js";

class BogsDiamondCharacter extends Character {
    constructor() {
        super("Bogs", "You're some sweet punk. You been broke in yet?");
    }

    startMolesting(someone) {
        if (!this.findMolestationRecord(someone)) {
            this.molestationRecords.push({
                person: someone,
                interval: setInterval(() => {
                    this.molest(someone);
                }, 1)//every day
            });
        }

        this.molest(someone);//start immediately
    }

    get molestationRecords() {
        if (!this._molestationRecords) {
            this._molestationRecords = [];
        }

        return this._molestationRecords;
    }

    findMolestationRecord(someone) {
        const filteredResults = this.molestationRecords.filter((molestationRecord) => molestationRecord.person === someone);

        if (filteredResults.length !== 0) {
            return filteredResults[0];
        } else {
            return null;
        }
    }

    molest(someone) {
        const molestationRecord = this.findMolestationRecord(someone);

        if (!molestationRecord) {
            script("I'm not interested!");
        }

        if (!Hadley.protects(someone)) {
            script(`${this.name} molests ${someone.name}`);
        } else {
            Hadley.beatToDeath(this);
            clearInterval(molestationRecord.interval);
        }
    }
}

const BogsDiamondHimself = new BogsDiamondCharacter();

export { BogsDiamondHimself as Bogs };