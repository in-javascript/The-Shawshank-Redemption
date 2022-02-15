import { Actable } from "../helpers/actable.js";

class NewspaperInstitution extends Actable {
    constructor() {
        super("Portland Daily Bugle");

    }

    publishDirtyBusiness(someone) {
        this.act("publishes a new article", `about ${someone.name}'s dirty business`);
    }
}

const NewspaperItself = new NewspaperInstitution();

export { NewspaperItself as PortlandDailyBugle };