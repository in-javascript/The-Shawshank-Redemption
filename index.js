import { Andy } from "./characters/andyDufresne.js";
import { Glenn } from "./characters/glennQuentin.js";
import { Gun } from "./items/gun.js";

const andysGun = new Gun("Andy's gun");

(function PlayMovie() {
    introduction();
})();

function introduction() {
    Andy.go(Glenn);
    Andy.throw(andysGun, "Royal River");
}