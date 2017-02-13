import * as modules from './_app-modules/index';

class App{
    constructor() {
        Object.assign(this, modules);
    }
}

window.APP = new App();
