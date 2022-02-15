import { Norton } from "../characters/wardenNorton.js";
import { Actable } from "../helpers/actable.js";

class PoliceInstitution extends Actable {
    constructor() {
        super("Police");
    }

    arrest(someone) {
        if (someone === Norton) {
            Norton.commitSuicide();
        } else {
            this.act("arrests", someone.name);
        }
    }
}

const PoliceItself = new PoliceInstitution();

export { PoliceItself as Police };