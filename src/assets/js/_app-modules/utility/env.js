

class Env{
    constructor() {
        let ua = navigator.userAgent.toLowerCase();
        let ver = navigator.appVersion.toLowerCase();
        const uaParser = new UAParser();
        
        this.browser = {};
        this.device = {};
        this.engine = {};
        this.os = {};
        this.support = {};

        //BROWSER
        const browser = uaParser.getResult().browser;
        this.browser.isIE = (browser.name === 'IE');
        this.browser.isIE9 = (this.browser.isIE && browser.version === '9.0');
        this.browser.isIE10 = (this.browser.isIE && browser.version === '10.0');
        this.browser.isIE11 = (this.browser.isIE && browser.version === '11.0');
        this.browser.isEdge = (browser.name === 'Edge');
        this.browser.isChrome = (browser.name === 'Chrome');
        this.browser.isFirefox = (browser.name === 'Firefox');
        this.browser.isSafari = (browser.name === 'Safari');
        this.browser.isMobileSafari = (browser.name === 'Mobile Safari');
        this.browser.isAndroidBrowser = (browser.name === 'Android Browser');

        //DEVICE
        const device = uaParser.getResult().device;
        this.device.isMobile = (device.type === 'mobile');
        this.device.isTablet = (device.type === 'tablet');
        this.device.isDesktop = (!this.device.isMobile && !this.device.isTablet);
        this.device.isIphone = (device.model === 'iPhone');
        this.device.isIpad = (device.model === 'iPad');

        //ENGINE
        const engine = uaParser.getResult().engine;
        this.engine.isGecko = (engine.name === 'Gecko');
        this.engine.isWebKit = (engine.name === 'WebKit');
        this.engine.isTrident = (engine.name === 'Trident');
        this.engine.isEdgeHTML = (engine.name === 'EdgeHTML');

        //OS
        const os = uaParser.getResult().os;
        this.os.isIOS = (os.name === 'iOS');
        this.os.isAndroidOS = (os.name === 'Android');
        this.os.isWindows = (os.name === 'Windows');
        this.os.isMac = (os.name === 'Mac OS');

        //SUPPORT
        const detectCSSFeature = (featurename)=>{
            var feature = false,
                domPrefixes = 'Webkit Moz ms O'.split(' '),
                elm = document.createElement('div'),
                featurenameCapital = null;

                featurename = featurename.toLowerCase();

                if( elm.style[featurename] !== undefined ) { feature = true; }

                if( feature === false ) {
                    featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
                    for( var i = 0; i < domPrefixes.length; i++ ) {
                        if( elm.style[domPrefixes[i] + featurenameCapital ] !== undefined ) {
                          feature = true;
                          break;
                        }
                    }
                }
                return feature;
        };
        this.support.canvas = (()=>{
            let canvas = document.createElement('canvas');
            return !!(canvas.getContext && canvas.getContext('2d'));
        })();
        this.support.webGL = (()=>{
            let canvas = document.createElement("canvas");
            let gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            return (gl && gl instanceof WebGLRenderingContext) ? true : false;
        })();
        this.support.svg = typeof SVGRect != "undefined";
        this.support.cssTransition = detectCSSFeature('transition');
        this.support.cssAnimation = detectCSSFeature('animation');
        this.support.hashchange = ("onhashchange" in window);
        this.support.history = (window.history && window.history.pushState);
        this.support.requestAnimationFrame = (typeof requestAnimationFrame !== 'undefined');
        this.support.touchEvent = 'ontouchstart' in document.documentElement;
    }
}

export default new Env();
