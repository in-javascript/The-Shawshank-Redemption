import { nameOfAndysRock, nameOfAndysRockHammer, nameOfMarilynMonroePoster } from "../helpers/statics.js";
import { Character } from "./character.js";
import { RockHammer } from "../items/rockHammer.js";
import { nameOfRitaHayworth, RitaHayworth } from "./ritaHayworth.js";
import { Poster } from "../items/poster.js";
import { Rock } from "../items/rock.js";

const nameOfRitaHayworthPoster = `${nameOfRitaHayworth} Poster`;

class EllisBoydReddingCharacter extends Character {
    constructor() {
        super("Red");
    }

    get(something) {
        if (something === nameOfAndysRockHammer) {
            this.say(`Brooks will bring you your ${nameOfAndysRockHammer}. Don't dig a tunner under the wall with it!`);

            return new RockHammer();
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
}

const EllisBoydReddingHimself = new EllisBoydReddingCharacter();

export { EllisBoydReddingHimself as Red };