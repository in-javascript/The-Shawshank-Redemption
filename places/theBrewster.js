import { Place } from "./place.js";

class HalfwayHouse extends Place {
    constructor() {
        super("The Brewster");
    }
}

const TheBrewster = new HalfwayHouse();

export { TheBrewster };