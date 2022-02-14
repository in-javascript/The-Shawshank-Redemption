import { Actable } from "../helpers/actable.js";

class Character extends Actable {
    constructor(name) {
        super(name);
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
}

export { Character };