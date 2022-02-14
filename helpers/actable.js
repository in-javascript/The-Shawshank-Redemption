import { script } from "./script.js";

class Actable {
    constructor(name) {
        this.name = name;
    }

    act(action, subject) {
        script(`${this.name} ${action} ${subject ? subject : ""}`);
    }
}

export { Actable };