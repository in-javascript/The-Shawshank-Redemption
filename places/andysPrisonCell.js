import { Andy } from "../characters/andyDufresne.js";
import { Place } from "../places/place.js";

class PrisonCell extends Place {
    constructor() {
        super("Andy's prison cell");
    }

    async carve(message) {
        Place.prototype.carve.call(this, message);
        screen(`Piece of the ${this.name} wall dropped to the ground.`);

        Andy.digAHoleInTheWall();
    }
}

const PrisonCellItself = new PrisonCell();

export { PrisonCellItself as AndysPrisonCell };