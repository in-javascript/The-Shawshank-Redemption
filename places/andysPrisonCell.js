import { Place } from "../places/place.js";

class PrisonCell extends Place {
    constructor() {
        super("Andy's prison cell");
    }
}

const PrisonCellItself = new PrisonCell();

export { PrisonCellItself as AndysPrisonCell };