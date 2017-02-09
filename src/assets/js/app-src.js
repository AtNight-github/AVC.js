import * as modules from './_app-modules/index';

class App{
    constructor() {
        this.modules = modules;
    }
}

window.APP = new App();
