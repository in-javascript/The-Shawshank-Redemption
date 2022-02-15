import { Actable } from "../helpers/actable.js";
import { TheBrewster } from "../places/theBrewster.js";
import { TheFoodwayMarket } from "../places/theFoodwayMarket.js";

class ParoleBoardInstitution extends Actable {
    constructor() {
        super("The Parole Board");
    }

    assessParoleGrant(someone) {
        if (someone.shouldBeGrantedParole()) {
            this.act("approved parole request", `for ${someone.name}`);
            TheBrewster.welcome(someone);
            TheFoodwayMarket.welcome(someone);
        } else {
            this.act("rejects parole request", `for ${someone.name}`);
        }
    }
}

const ParoleBoardItself = new ParoleBoardInstitution();

export { ParoleBoardItself as ParoleBoard };