import { Actable } from "../helpers/actable.js";

class ParoleBoardInstitution extends Actable {
    constructor() {
        super("The Parole Board");
    }

    assessParoleGrant(someone) {
        if (someone.shouldBeGrantedParole()) {
            this.act("approved parole request", `for ${someone.name}`);
        } else {
            this.act("rejects parole request", `for ${someone.name}`);
        }
    }
}

const ParoleBoardItself = new ParoleBoardInstitution();

export { ParoleBoardItself as ParoleBoard };