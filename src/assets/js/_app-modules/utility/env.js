let ua = navigator.userAgent.toLowerCase();
let ver = navigator.appVersion.toLowerCase();

class Env{
    constructor() {
        //BROWSER
       let isMSIE = (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1);
       this.isIE6 = isMSIE && (ver.indexOf('msie 6.') > -1);
       this.isIE7 = isMSIE && (ver.indexOf('msie 7.') > -1);
       this.isIE8 = isMSIE && (ver.indexOf('msie 8.') > -1);
       this.isIE9 = isMSIE && (ver.indexOf('msie 9.') > -1);
       this.isIE10 = isMSIE && (ver.indexOf('msie 10.') > -1);
       this.isIE11 = (ua.indexOf('trident/7') > -1);
       this.isEdge = (ua.indexOf('edge') > -1);
       this.isChrome = (ua.indexOf('chrome') > -1) && (ua.indexOf('edge') == -1);
       this.isFirefox = (ua.indexOf('firefox') > -1);
       this.isSafari = (ua.indexOf('safari') > -1) && (ua.indexOf('chrome') == -1);
       this.isOpera = (ua.indexOf('opera') > -1);

       //DEVICE
       this.isMobile = ua.indexOf('iphone') > 0 || ua.indexOf('ipod') > 0 || ua.indexOf('android') > 0 && ua.indexOf('mobile') > 0;
       this.isTablet = ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0;

        //ENGINE



        //OS

        //SUPPORT
        // this.isSupport = {
        //     canvas: modernizr.canvas,
        //     cssAnimation: modernizr.cssanimations,
        //     cssTransition: modernizr.csstransitions,
        //     hashchange: modernizr.hashchange,
        //     history: modernizr.history,
        //     requestAnimationFrame: modernizr.requestanimationframe,
        //     svg: modernizr.svg,
        //     touchEvent: modernizr.touchevents,
        //     webgl: modernizr.webgl
        // };
    }
}

export default new Env();
