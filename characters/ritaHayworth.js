import { Character } from "./character.js";

const nameOfRitaHayworth = "Rita Hayworth";

class RitaHayworthCharacter extends Character {
    constructor() {
        super(nameOfRitaHayworth);
    }

    get nightlyRateInUSD() {
        return 10000;
    }
}

const RitaHayworthHerself = new RitaHayworthCharacter();

export { RitaHayworthHerself as RitaHayworth, nameOfRitaHayworth };