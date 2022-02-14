import { Andy } from "./characters/andyDufresne.js";
import { Glenn } from "./characters/glennQuentin.js";
import { Court } from "./institutions/court.js";
import { Gun } from "./items/gun.js";

const andysGun = new Gun("Andy's gun", false);

(function PlayMovie() {
    introduction();
    court();
})();

function introduction() {
    Andy.go(Glenn);
    Andy.throw(andysGun, "Royal River");
}

function court() {
    const foundEvidence = Court.findEvidence(andysGun);
    Court.verdict(foundEvidence, Andy);
}