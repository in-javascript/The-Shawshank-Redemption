import { Actable } from "../helpers/actable.js";

class Item extends Actable {
    constructor(name, easilyFindable = false) {
        super(name);
        this.easilyFindable = easilyFindable;
    }
}

export { Item };