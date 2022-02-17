import sleep from "sleep";

function script(toWrite) {
    console.log(toWrite);
    sleep.sleep(1);
}

export { script };