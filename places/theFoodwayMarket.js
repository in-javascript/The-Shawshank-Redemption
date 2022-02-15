import { Place } from "./place.js";

class Workplace extends Place {
    constructor() {
        super("The Foodway Market");
    }
}

const TheFoodwayMarket = new Workplace();

export { TheFoodwayMarket };