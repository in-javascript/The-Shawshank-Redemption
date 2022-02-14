import { Actable } from "../helpers/actable.js";

class Place extends Actable {
    constructor(name) {
        super(name);
    }

    carve(message) {
        this.act("is carved with this message: ", `"${message}"`)
    }
}

export { Place };