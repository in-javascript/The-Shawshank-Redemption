import { Andy } from "./characters/andyDufresne.js";
import { Hadley } from "./characters/captainHadley.js";
import { Red } from "./characters/ellisBoydRedding.js";
import { Glenn } from "./characters/glennQuentin.js";
import { Norton } from "./characters/wardenNorton.js";
import { Court } from "./institutions/court.js";
import { ParoleBoard } from "./institutions/paroleBoard.js";
import { Gun } from "./items/gun.js";
import { Brooks } from "./characters/brooksHatlen.js";
import { Bogs } from "./characters/bogsDiamond.js";
import { nameOfAndysRockHammer } from "./helpers/statics.js";

const andysGun = new Gun("Andy's gun", false);
let andysRockHammer = null;

(function PlayMovie() {
    introduction();
    court();
    RedIntroduced();
    NortonIntroduced();
    HadleyIntroduced();
    BrooksIntroduced();
    BogsIntroduced();
    AndyWantsARockHammerFromRed();
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

function NortonIntroduced() {
    Norton.introduceYourself();
}

function HadleyIntroduced() {
    Hadley.introduceYourself();
}

function BrooksIntroduced() {
    Brooks.introduceYourself();
}

function BogsIntroduced() {
    Bogs.introduceYourself();
}

function AndyWantsARockHammerFromRed() {
    andysRockHammer = Red.get(nameOfAndysRockHammer);
}