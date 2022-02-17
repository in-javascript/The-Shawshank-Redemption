import { Actable } from "../helpers/actable.js";

class CourtInstitution extends Actable {
    constructor() {
        super("Andy's court");
    }

    findEvidence(item) {
        const itemName = item.constructor === String ? item : item.name;

        if (item.easilyFindable) {
            this.act("finds", itemName);
            return item;
        } else {
            this.act("can not find", itemName);
            return null;
        }
    }

    verdict(evidence, someone) {
        if (!evidence) {
            for (let i = 0; i < 2; i++) {
                this.sentenceForLife(someone);
            }
        } else {
            throw new Error("Not scripted!");
        }
    }

    sentenceForLife(someone) {
        this.act("sentences for life", someone.name);
    }
}

const CourtItself = new CourtInstitution();

export { CourtItself as Court };