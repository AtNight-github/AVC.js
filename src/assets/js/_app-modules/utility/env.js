/**=======================================================================
 * [ Env ]
 * クライアントのUAなど環境情報を取得する。
 * ブラウザ、デバイス、エンジン、OSおよび各機能を調べる。
 * 基本的に全てのプロパティは{boolean}を返却する。
 * UAParser.jsに依存するため先読みすること。
 *
 * (例)
 * APP.env.browser.isSafari・・・Safariかどうか
 * APP.env.device.isIphone・・・iPhoneかどうか
 * APP.env.support.canvas・・・canvasに　対応しているかどうか
 =======================================================================*/
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
        this.support.cssTransition = this._detectCSSFeature('transition');
        this.support.cssAnimation = this._detectCSSFeature('animation');
        this.support.hashchange = ("onhashchange" in window);
        this.support.history = (window.history && window.history.pushState);
        this.support.requestAnimationFrame = (typeof requestAnimationFrame !== 'undefined');
        this.support.touchEvent = 'ontouchstart' in document.documentElement;
    }

    /**
     * [ _detectCSSFeature ]
     * CSS3アニメーションの対応を調べる。
     * https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Animations/Detecting_CSS_animation_support
     *
     * @param {string} featurename・・・transitionかanimationのみ
     * @return {boolean}・・・対応しているかどうか
     */
    _detectCSSFeature(featurename){
        let feature = false;
        let domPrefixes = 'Webkit Moz ms O'.split(' ');
        let elm = document.createElement('div');
        let featurenameCapital = null;

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
    }
}

export default new Env();
