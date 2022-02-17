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

    commitSuicide() {
        this.act("commits suicide");
    }

    kill(someone) {
        this.act("kills", someone.name);
    }

    wearSomeoneElsesCloths(theSomeoneElse) {
        this.act(`wears ${theSomeoneElse.name}'s cloths`);
    }

    crawlInTheTunnel() {
        this.act("crawls in the tunnel");
    }

    crawlInTheSewage() {
        this.act("crawls in the sewage");
    }

    getWetUnderTheRain() {
        this.act("gets wet under the rain");
    }

    sendPostcard(someone) {
        this.act("sends postcard", `to ${someone.name}`);
    }

    sleep(seconds) {
        this.act("sleeps", `for ${seconds} seconds.`);
    }

    handicappedBy(someone) {
        this.handicapped = true;
    }
}

export { Character };