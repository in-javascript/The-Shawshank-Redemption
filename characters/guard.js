import { Andy } from "./andyDufresne.js";
import { Character } from "./character.js";

class Guard extends Character {
    constructor(name) {
        super(name);
    }

    isAnInmateInTheirCell(someone) {
        return someone !== Andy;
    }

    escalate(problem, someone) {
        this.act(`escalates "${problem}" problem to`, `${someone.name}`);
    }
}

export { Guard };