import { Andy } from "./characters/andyDufresne.js";
import { Red } from "./characters/ellisBoydRedding.js";
import { Glenn } from "./characters/glennQuentin.js";
import { Court } from "./institutions/court.js";
import { ParoleBoard } from "./institutions/paroleBoard.js";
import { Gun } from "./items/gun.js";

const andysGun = new Gun("Andy's gun", false);

(function PlayMovie() {
    introduction();
    court();
    RedIntroduced();
})();

function introduction() {
    Andy.go(Glenn);
    Andy.throw(andysGun, "Royal River");
}

function court() {
    const foundEvidence = Court.findEvidence(andysGun);
    Court.verdict(foundEvidence, Andy);
}

function RedIntroduced() {
    ParoleBoard.assessParoleGrant(Red);
}