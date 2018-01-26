import {Kurve} from "./kurve/Kurve";

class Main {
    run()
    {
        let kurve = new Kurve();
        kurve.init();
    }
}

let app = new Main();
document.addEventListener('DOMContentLoaded', app.run);