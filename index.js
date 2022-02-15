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
import { nameOfAndysRock, nameOfAndysRockHammer, nameOfMarilynMonroePoster, nameOfRaquelWelchPoster } from "./helpers/statics.js";
import { AndysPrisonCell } from "./places/andysPrisonCell.js";
import { nameOfRitaHayworth } from "./characters/ritaHayworth.js";
import { Character } from "./characters/character.js";
import { Tommy } from "./characters/tommyWilliams.js";
import { Poster } from "./items/poster.js";
import { AndysWife } from "./characters/mrsDufresne.js";
import { Elmo } from "./characters/elmoBlatch.js";

const andysGun = new Gun("Andy's gun", false);

let andysRockHammer = null;
let andysPosterOnHisWall = null;
let andysRock = null;

(function PlayMovie() {
    introduction();
    ElmoBlatchDoesHisThing();
    court();
    RedIntroduced();
    NortonIntroduced();
    HadleyIntroduced();
    BrooksIntroduced();
    BogsIntroduced();
    AndyWantsARockHammerFromRed();
    AndyGetsProtectionFromHadley();
    AndyCarvesTheWall();
    AndyGetsGiftsFromRed();
    AndyStartsDoingTaxReturnsForEveryone();
    BrooksGrantedParole();
    RedTriesParoleAgain();
    RedGivesAMarilynMonroePosterToAndy();
    NortonStartsTheInsideOutProgram();
    TommyIntroduced();
    AndySomehowChangesThePoster();
    PoorTommy();
    HopefulAndy();
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

function AndyGetsProtectionFromHadley() {
    Andy.provideConsultancyServices(Hadley);
}

function AndyCarvesTheWall() {
    AndysPrisonCell.carve("A");
}

function AndyGetsGiftsFromRed() {
    andysPosterOnHisWall = Red.get(nameOfRitaHayworth);
    andysRock = Red.get(nameOfAndysRock);
}

function AndyStartsDoingTaxReturnsForEveryone() {
    Andy.provideConsultancyServices(new Character("every guard possible"));
}

function BrooksGrantedParole() {
    ParoleBoard.assessParoleGrant(Brooks);
    Brooks.cantTakeItAnymore();
}

function RedTriesParoleAgain() {
    ParoleBoard.assessParoleGrant(Red);
}

function RedGivesAMarilynMonroePosterToAndy() {
    andysPosterOnHisWall = Red.get(nameOfMarilynMonroePoster);
}

function NortonStartsTheInsideOutProgram() {
    Norton.takeBribe(new Character("anyone interested in any dirty business"));
    Andy.provideConsultancyServices(Norton);
    Andy.doTheBooksForNortonsDirtyMoney();
}

function TommyIntroduced() {
    Tommy.introduceYourself();
}

function AndySomehowChangesThePoster() {
    andysPosterOnHisWall = new Poster(nameOfRaquelWelchPoster);
}

function PoorTommy() {
    Tommy.say(`Hey, ${Andy.name} is not a killer. Another guy from another prison told me that he killed ${AndysWife.name} and ${Glenn.name}.`);
    Andy.say(`Hey, I am not a killer. Another guy from another prison told ${Tommy.name} that he killed my wife and ${Glenn.name}.`);
    Norton.say(`Hey, is ${Andy.name} not a killer ${Tommy.name}? Did another guy from another prison told you that he killed ${AndysWife.name} and ${Glenn.name}?`);
    Tommy.say(`Yes ${Norton.name}, ${Andy.name} is not a killer. Another guy from another prison told me that he killed ${AndysWife.name} and ${Glenn.name}.`);
    Norton.say(`I need ${Andy.name} as an inmate; he knows too much. ${Hadley.name}?`);
    Hadley.kill(Tommy);
}

function ElmoBlatchDoesHisThing() {
    Elmo.kill(Glenn);
    Elmo.kill(AndysWife);
}

function HopefulAndy() {
    Andy.shareAfterPrisonPlans(Red);
    Andy.shareASecretLocation(Red);
}