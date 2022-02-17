import { Character } from "./character.js";

class CaptainHadleyCharacter extends Character {
    constructor() {
        super("Captain Hadley", "I love killing people at work!");
    }

    protect(someone) {
        if (!this.protects(someone)) {
            this.protectionList.push(someone);
            this.act("starts protecting", someone.name);
        }
    }

    protects(someone) {
        return this.protectionList.indexOf(someone) !== -1;
    }

    get protectionList() {
        if (!this._protectionList) {
            this._protectionList = [];
        }

        return this._protectionList;
    }

    beatToDeath(someone) {
        someone.handicappedBy(this);
    }
}

const CaptainHadleyHimself = new CaptainHadleyCharacter();

export { CaptainHadleyHimself as Hadley };