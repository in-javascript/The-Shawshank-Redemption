import { Actable } from "../helpers/actable.js";

class Character extends Actable {
    constructor(name, introductoryWords) {
        super(name);
        this.introductoryWords = introductoryWords ? introductoryWords : "I have nothing to say.";
    }

    go(somewhere) {
        this.act("goes to", somewhere.constructor === String ? somewhere : somewhere.name);
    }

    throw(item, somewhere) {
        this.act("throws", `${item.name}${somewhere ? " to " + somewhere : somewhere}`);
    }

    shouldBeGrantedParole() {
        return false;
    }

    introduceYourself() {
        this.say(`Hi, I'm ${this.name}. ${this.introductoryWords}`);
    }

    say(something) {
        this.act("says: ", `"${something}"`);
    }
}

export { Character };