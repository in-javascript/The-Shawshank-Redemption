import { nameOfAndysRock, nameOfAndysRockHammer, nameOfMarilynMonroePoster } from "../helpers/statics.js";
import { Character } from "./character.js";
import { RockHammer } from "../items/rockHammer.js";
import { nameOfRitaHayworth, RitaHayworth } from "./ritaHayworth.js";
import { Poster } from "../items/poster.js";
import { Rock } from "../items/rock.js";
import { TheBrewster } from "../places/theBrewster.js";

const nameOfRitaHayworthPoster = `${nameOfRitaHayworth} Poster`;

class EllisBoydReddingCharacter extends Character {
    constructor() {
        super("Red");
        this.hasHope = true;
    }

    get(something) {
        if (something === nameOfAndysRockHammer) {
            this.say(`Brooks will bring you your ${nameOfAndysRockHammer}. Don't dig a tunner under the wall with it!`);

            return new RockHammer(nameOfAndysRockHammer);
        }

        if (something === nameOfRitaHayworth) {
            if (RitaHayworth.nightlyRateInUSD > 10) {
                return this.get(nameOfRitaHayworthPoster);
            }
        }

        if (something === nameOfRitaHayworthPoster) {
            this.say("Here's your Rita Hayworth; free.");
            return new Poster(nameOfRitaHayworthPoster);
        }

        if (something === nameOfAndysRock) {
            this.say("We collected some stones for you!");
            return new Rock(nameOfAndysRock);
        }

        if (something === nameOfMarilynMonroePoster) {
            this.say(`Here's a gift from me to you Andy; A ${nameOfMarilynMonroePoster}`);
            return new Poster(nameOfMarilynMonroePoster);
        }
    }

    get hasHope() {
        return this._hasHope;
    }

    set hasHope(has) {
        this._hasHope = has;
    }

    shouldBeGrantedParole() {
        return !this.hasHope;
    }

    goToTheSecretLocation() {
        this.act("goes", "to the secret location");
        this.wealthInUSD = 1000;
    }

    breakParole() {
        TheBrewster.carve(`So was ${this.name}`.toUpperCase());
    }
}

const EllisBoydReddingHimself = new EllisBoydReddingCharacter();

export { EllisBoydReddingHimself as Red };