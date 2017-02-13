(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

},{}],2:[function(require,module,exports){
"use strict";

},{}],3:[function(require,module,exports){
"use strict";

},{}],4:[function(require,module,exports){
"use strict";

},{}],5:[function(require,module,exports){
"use strict";

},{}],6:[function(require,module,exports){
"use strict";

},{}],7:[function(require,module,exports){
"use strict";

},{}],8:[function(require,module,exports){
"use strict";

},{}],9:[function(require,module,exports){
"use strict";

},{}],10:[function(require,module,exports){
"use strict";

},{}],11:[function(require,module,exports){
"use strict";

},{}],12:[function(require,module,exports){
"use strict";

},{}],13:[function(require,module,exports){
"use strict";

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cssTween = require('./animation/cssTween');

Object.defineProperty(exports, 'cssTween', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cssTween).default;
  }
});

var _customEase = require('./animation/customEase');

Object.defineProperty(exports, 'customEase', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_customEase).default;
  }
});

var _scrollTo = require('./animation/scrollTo');

Object.defineProperty(exports, 'scrollTo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scrollTo).default;
  }
});

var _Sprite = require('./animation/Sprite');

Object.defineProperty(exports, 'Sprite', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sprite).default;
  }
});

var _checkScreenEdge = require('./dom/checkScreenEdge');

Object.defineProperty(exports, 'checkScreenEdge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_checkScreenEdge).default;
  }
});

var _flexibleFontResizer = require('./dom/flexibleFontResizer');

Object.defineProperty(exports, 'flexibleFontResizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_flexibleFontResizer).default;
  }
});

var _Inview = require('./dom/Inview');

Object.defineProperty(exports, 'Inview', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Inview).default;
  }
});

var _Modal = require('./dom/Modal');

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Modal).default;
  }
});

var _popupWin = require('./dom/popupWin');

Object.defineProperty(exports, 'popupWin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_popupWin).default;
  }
});

var _Resizer = require('./dom/Resizer');

Object.defineProperty(exports, 'Resizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Resizer).default;
  }
});

var _Scroller = require('./dom/Scroller');

Object.defineProperty(exports, 'Scroller', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Scroller).default;
  }
});

var _Slider = require('./dom/Slider');

Object.defineProperty(exports, 'Slider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Slider).default;
  }
});

var _WrapCharInTag = require('./dom/WrapCharInTag');

Object.defineProperty(exports, 'WrapCharInTag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WrapCharInTag).default;
  }
});

var _checkType = require('./utility/checkType');

Object.defineProperty(exports, 'checkType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_checkType).default;
  }
});

var _env = require('./utility/env');

Object.defineProperty(exports, 'env', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_env).default;
  }
});

var _eventCenter = require('./utility/eventCenter');

Object.defineProperty(exports, 'eventCenter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_eventCenter).default;
  }
});

var _Geom = require('./utility/Geom');

Object.defineProperty(exports, 'Geom', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Geom).default;
  }
});

var _Loader = require('./utility/Loader');

Object.defineProperty(exports, 'Loader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Loader).default;
  }
});

var _Timeline = require('./utility/Timeline');

Object.defineProperty(exports, 'Timeline', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Timeline).default;
  }
});

var _ValWatcher = require('./utility/ValWatcher');

Object.defineProperty(exports, 'ValWatcher', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ValWatcher).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./animation/Sprite":1,"./animation/cssTween":2,"./animation/customEase":3,"./animation/scrollTo":4,"./dom/Inview":5,"./dom/Modal":6,"./dom/Resizer":7,"./dom/Scroller":8,"./dom/Slider":9,"./dom/WrapCharInTag":10,"./dom/checkScreenEdge":11,"./dom/flexibleFontResizer":12,"./dom/popupWin":13,"./utility/Geom":15,"./utility/Loader":16,"./utility/Timeline":17,"./utility/ValWatcher":18,"./utility/checkType":19,"./utility/env":20,"./utility/eventCenter":21}],15:[function(require,module,exports){
"use strict";

},{}],16:[function(require,module,exports){
"use strict";

},{}],17:[function(require,module,exports){
"use strict";

},{}],18:[function(require,module,exports){
"use strict";

},{}],19:[function(require,module,exports){
"use strict";

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Env = function Env() {
    _classCallCheck(this, Env);

    var ua = navigator.userAgent.toLowerCase();
    var ver = navigator.appVersion.toLowerCase();
    var uaParser = new UAParser();

    this.browser = {};
    this.device = {};
    this.engine = {};
    this.os = {};
    this.support = {};

    //BROWSER
    var browser = uaParser.getResult().browser;
    this.browser.isIE = browser.name === 'IE';
    this.browser.isIE9 = this.browser.isIE && browser.version === '9.0';
    this.browser.isIE10 = this.browser.isIE && browser.version === '10.0';
    this.browser.isIE11 = this.browser.isIE && browser.version === '11.0';
    this.browser.isEdge = browser.name === 'Edge';
    this.browser.isChrome = browser.name === 'Chrome';
    this.browser.isFirefox = browser.name === 'Firefox';
    this.browser.isSafari = browser.name === 'Safari';
    this.browser.isMobileSafari = browser.name === 'Mobile Safari';
    this.browser.isAndroidBrowser = browser.name === 'Android Browser';

    //DEVICE
    var device = uaParser.getResult().device;
    this.device.isMobile = device.type === 'mobile';
    this.device.isTablet = device.type === 'tablet';
    this.device.isDesktop = !this.device.isMobile && !this.device.isTablet;
    this.device.isIphone = device.model === 'iPhone';
    this.device.isIpad = device.model === 'iPad';

    //ENGINE
    var engine = uaParser.getResult().engine;
    this.engine.isGecko = engine.name === 'Gecko';
    this.engine.isWebKit = engine.name === 'WebKit';
    this.engine.isTrident = engine.name === 'Trident';
    this.engine.isEdgeHTML = engine.name === 'EdgeHTML';

    //OS
    var os = uaParser.getResult().os;
    this.os.isIOS = os.name === 'iOS';
    this.os.isAndroidOS = os.name === 'Android';
    this.os.isWindows = os.name === 'Windows';
    this.os.isMac = os.name === 'Mac OS';

    //SUPPORT
    var detectCSSFeature = function detectCSSFeature(featurename) {
        var feature = false,
            domPrefixes = 'Webkit Moz ms O'.split(' '),
            elm = document.createElement('div'),
            featurenameCapital = null;

        featurename = featurename.toLowerCase();

        if (elm.style[featurename] !== undefined) {
            feature = true;
        }

        if (feature === false) {
            featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
            for (var i = 0; i < domPrefixes.length; i++) {
                if (elm.style[domPrefixes[i] + featurenameCapital] !== undefined) {
                    feature = true;
                    break;
                }
            }
        }
        return feature;
    };
    this.support.canvas = function () {
        var canvas = document.createElement('canvas');
        return !!(canvas.getContext && canvas.getContext('2d'));
    }();
    this.support.webGL = function () {
        var canvas = document.createElement("canvas");
        var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        return gl && gl instanceof WebGLRenderingContext ? true : false;
    }();
    this.support.svg = typeof SVGRect != "undefined";
    this.support.cssTransition = detectCSSFeature('transition');
    this.support.cssAnimation = detectCSSFeature('animation');
    this.support.hashchange = "onhashchange" in window;
    this.support.history = window.history && window.history.pushState;
    this.support.requestAnimationFrame = typeof requestAnimationFrame !== 'undefined';
    this.support.touchEvent = 'ontouchstart' in document.documentElement;
};

exports.default = new Env();

},{}],21:[function(require,module,exports){
"use strict";

},{}],22:[function(require,module,exports){
'use strict';

var _index = require('./_app-modules/index');

var modules = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
    _classCallCheck(this, App);

    Object.assign(this, modules);
};

window.APP = new App();

},{"./_app-modules/index":14}]},{},[22])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9hbmltYXRpb24vU3ByaXRlLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvYW5pbWF0aW9uL2Nzc1R3ZWVuLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvYW5pbWF0aW9uL2N1c3RvbUVhc2UuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9hbmltYXRpb24vc2Nyb2xsVG8uanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vSW52aWV3LmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvZG9tL01vZGFsLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvZG9tL1Jlc2l6ZXIuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vU2Nyb2xsZXIuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vU2xpZGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvZG9tL1dyYXBDaGFySW5UYWcuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vY2hlY2tTY3JlZW5FZGdlLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvZG9tL2ZsZXhpYmxlRm9udFJlc2l6ZXIuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vcG9wdXBXaW4uanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9pbmRleC5qcyIsInNyYy9hc3NldHMvanMvX2FwcC1tb2R1bGVzL3V0aWxpdHkvR2VvbS5qcyIsInNyYy9hc3NldHMvanMvX2FwcC1tb2R1bGVzL3V0aWxpdHkvTG9hZGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvdXRpbGl0eS9UaW1lbGluZS5qcyIsInNyYy9hc3NldHMvanMvX2FwcC1tb2R1bGVzL3V0aWxpdHkvVmFsV2F0Y2hlci5qcyIsInNyYy9hc3NldHMvanMvX2FwcC1tb2R1bGVzL3V0aWxpdHkvY2hlY2tUeXBlLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvdXRpbGl0eS9lbnYuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy91dGlsaXR5L2V2ZW50Q2VudGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9hcHAtc3JjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs2Q0NBUyxPOzs7Ozs7Ozs7K0NBQ0EsTzs7Ozs7Ozs7OzZDQUNBLE87Ozs7Ozs7OzsyQ0FDQSxPOzs7Ozs7Ozs7b0RBR0EsTzs7Ozs7Ozs7O3dEQUNBLE87Ozs7Ozs7OzsyQ0FDQSxPOzs7Ozs7Ozs7MENBQ0EsTzs7Ozs7Ozs7OzZDQUNBLE87Ozs7Ozs7Ozs0Q0FDQSxPOzs7Ozs7Ozs7NkNBQ0EsTzs7Ozs7Ozs7OzJDQUNBLE87Ozs7Ozs7OztrREFDQSxPOzs7Ozs7Ozs7OENBR0EsTzs7Ozs7Ozs7O3dDQUNBLE87Ozs7Ozs7OztnREFDQSxPOzs7Ozs7Ozs7eUNBQ0EsTzs7Ozs7Ozs7OzJDQUNBLE87Ozs7Ozs7Ozs2Q0FDQSxPOzs7Ozs7Ozs7K0NBQ0EsTzs7Ozs7OztBQ3hCVDtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7SUNDTSxHLEdBQ0YsZUFBYztBQUFBOztBQUNWLFFBQUksS0FBSyxVQUFVLFNBQVYsQ0FBb0IsV0FBcEIsRUFBVDtBQUNBLFFBQUksTUFBTSxVQUFVLFVBQVYsQ0FBcUIsV0FBckIsRUFBVjtBQUNBLFFBQU0sV0FBVyxJQUFJLFFBQUosRUFBakI7O0FBRUEs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Q0EsU0FBSyxPQUFMLENBQWEsWUFBYixHQUE0QixpQkFBaUIsV0FBakIsQ0FBNUI7QUFDQSxTQUFLLE9BQUwsQ0FBYSxVQUFiLEdBQTJCLGtCQUFrQixNQUE3QztBQUNBLFNBQUssT0FBTCxDQUFhLE9BQWIsR0FBd0IsT0FBTyxPQUFQLElBQWtCLE9BQU8sT0FBUCxDQUFlLFNBQXpEO0FBQ0EsU0FBSyxPQUFMLENBQWEscUJBQWIsR0FBc0MsT0FBTyxxQkFBUCxLQUFpQyxXQUF2RTtBQUNBLFNBQUssT0FBTCxDQUFhLFVBQWIsR0FBMEIsa0JBQWtCLFNBQVMsZUFBckQ7QUFDSCxDOztrQkFHVSxJQUFJLEdBQUosRTs7O0FDMUZmO0FBQ0E7Ozs7QUNEQTs7SUFBWSxPOzs7Ozs7SUFFTixHLEdBQ0YsZUFBYztBQUFBOztBQUNWLFdBQU8sTUFBUCxDQUFjLElBQWQsRUFBb0IsT0FBcEI7QUFDSCxDOztBQUdMLE9BQU8sR0FBUCxHQUFhLElBQUksR0FBSixFQUFiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKVGNISnBkR1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNlcxMTkiLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSmpjM05VZDJWbGJpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiWFgwPSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKamRYTjBiMjFGWVhObExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHRkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKelkzSnZiR3hVYnk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJYWDA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpKYm5acFpYY3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2VzExOSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKTmIyUmhiQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYlhYMD0iLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSlNaWE5wZW1WeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHRkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKVFkzSnZiR3hsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJYWDA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpUYkdsa1pYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2VzExOSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKWGNtRndRMmhoY2tsdVZHRm5MbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2x0ZGZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSmphR1ZqYTFOamNtVmxia1ZrWjJVdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUptYkdWNGFXSnNaVVp2Ym5SU1pYTnBlbVZ5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sdGRmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUp3YjNCMWNGZHBiaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYlhYMD0iLCIvL2FuaW1hdGlvblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjc3NUd2VlbiB9IGZyb20gJy4vYW5pbWF0aW9uL2Nzc1R3ZWVuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3VzdG9tRWFzZSB9IGZyb20gJy4vYW5pbWF0aW9uL2N1c3RvbUVhc2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY3JvbGxUbyB9IGZyb20gJy4vYW5pbWF0aW9uL3Njcm9sbFRvJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3ByaXRlIH0gZnJvbSAnLi9hbmltYXRpb24vU3ByaXRlJztcblxuLy9kb21cbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2hlY2tTY3JlZW5FZGdlIH0gZnJvbSAnLi9kb20vY2hlY2tTY3JlZW5FZGdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmxleGlibGVGb250UmVzaXplciB9IGZyb20gJy4vZG9tL2ZsZXhpYmxlRm9udFJlc2l6ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnZpZXcgfSBmcm9tICcuL2RvbS9JbnZpZXcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gJy4vZG9tL01vZGFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9wdXBXaW4gfSBmcm9tICcuL2RvbS9wb3B1cFdpbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlc2l6ZXIgfSBmcm9tICcuL2RvbS9SZXNpemVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2Nyb2xsZXIgfSBmcm9tICcuL2RvbS9TY3JvbGxlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNsaWRlciB9IGZyb20gJy4vZG9tL1NsaWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdyYXBDaGFySW5UYWcgfSBmcm9tICcuL2RvbS9XcmFwQ2hhckluVGFnJztcblxuLy91dGlsaXR5XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoZWNrVHlwZSB9IGZyb20gJy4vdXRpbGl0eS9jaGVja1R5cGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbnYgfSBmcm9tICcuL3V0aWxpdHkvZW52JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXZlbnRDZW50ZXIgfSBmcm9tICcuL3V0aWxpdHkvZXZlbnRDZW50ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHZW9tIH0gZnJvbSAnLi91dGlsaXR5L0dlb20nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkZXIgfSBmcm9tICcuL3V0aWxpdHkvTG9hZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGltZWxpbmUgfSBmcm9tICcuL3V0aWxpdHkvVGltZWxpbmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWYWxXYXRjaGVyIH0gZnJvbSAnLi91dGlsaXR5L1ZhbFdhdGNoZXInO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpIWlc5dExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHRkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKTWIyRmtaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNlcxMTkiLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSlVhVzFsYkdsdVpTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiWFgwPSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKV1lXeFhZWFJqYUdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHRkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKamFHVmphMVI1Y0dVdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5IiwiXG5cbmNsYXNzIEVudntcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgdmVyID0gbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgdWFQYXJzZXIgPSBuZXcgVUFQYXJzZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYnJvd3NlciA9IHt9O1xuICAgICAgICB0aGlzLmRldmljZSA9IHt9O1xuICAgICAgICB0aGlzLmVuZ2luZSA9IHt9O1xuICAgICAgICB0aGlzLm9zID0ge307XG4gICAgICAgIHRoaXMuc3VwcG9ydCA9IHt9O1xuXG4gICAgICAgIC8vQlJPV1NFUlxuICAgICAgICBjb25zdCBicm93c2VyID0gdWFQYXJzZXIuZ2V0UmVzdWx0KCkuYnJvd3NlcjtcbiAgICAgICAgdGhpcy5icm93c2VyLmlzSUUgPSAoYnJvd3Nlci5uYW1lID09PSAnSUUnKTtcbiAgICAgICAgdGhpcy5icm93c2VyLmlzSUU5ID0gKHRoaXMuYnJvd3Nlci5pc0lFICYmIGJyb3dzZXIudmVyc2lvbiA9PT0gJzkuMCcpO1xuICAgICAgICB0aGlzLmJyb3dzZXIuaXNJRTEwID0gKHRoaXMuYnJvd3Nlci5pc0lFICYmIGJyb3dzZXIudmVyc2lvbiA9PT0gJzEwLjAnKTtcbiAgICAgICAgdGhpcy5icm93c2VyLmlzSUUxMSA9ICh0aGlzLmJyb3dzZXIuaXNJRSAmJiBicm93c2VyLnZlcnNpb24gPT09ICcxMS4wJyk7XG4gICAgICAgIHRoaXMuYnJvd3Nlci5pc0VkZ2UgPSAoYnJvd3Nlci5uYW1lID09PSAnRWRnZScpO1xuICAgICAgICB0aGlzLmJyb3dzZXIuaXNDaHJvbWUgPSAoYnJvd3Nlci5uYW1lID09PSAnQ2hyb21lJyk7XG4gICAgICAgIHRoaXMuYnJvd3Nlci5pc0ZpcmVmb3ggPSAoYnJvd3Nlci5uYW1lID09PSAnRmlyZWZveCcpO1xuICAgICAgICB0aGlzLmJyb3dzZXIuaXNTYWZhcmkgPSAoYnJvd3Nlci5uYW1lID09PSAnU2FmYXJpJyk7XG4gICAgICAgIHRoaXMuYnJvd3Nlci5pc01vYmlsZVNhZmFyaSA9IChicm93c2VyLm5hbWUgPT09ICdNb2JpbGUgU2FmYXJpJyk7XG4gICAgICAgIHRoaXMuYnJvd3Nlci5pc0FuZHJvaWRCcm93c2VyID0gKGJyb3dzZXIubmFtZSA9PT0gJ0FuZHJvaWQgQnJvd3NlcicpO1xuXG4gICAgICAgIC8vREVWSUNFXG4gICAgICAgIGNvbnN0IGRldmljZSA9IHVhUGFyc2VyLmdldFJlc3VsdCgpLmRldmljZTtcbiAgICAgICAgdGhpcy5kZXZpY2UuaXNNb2JpbGUgPSAoZGV2aWNlLnR5cGUgPT09ICdtb2JpbGUnKTtcbiAgICAgICAgdGhpcy5kZXZpY2UuaXNUYWJsZXQgPSAoZGV2aWNlLnR5cGUgPT09ICd0YWJsZXQnKTtcbiAgICAgICAgdGhpcy5kZXZpY2UuaXNEZXNrdG9wID0gKCF0aGlzLmRldmljZS5pc01vYmlsZSAmJiAhdGhpcy5kZXZpY2UuaXNUYWJsZXQpO1xuICAgICAgICB0aGlzLmRldmljZS5pc0lwaG9uZSA9IChkZXZpY2UubW9kZWwgPT09ICdpUGhvbmUnKTtcbiAgICAgICAgdGhpcy5kZXZpY2UuaXNJcGFkID0gKGRldmljZS5tb2RlbCA9PT0gJ2lQYWQnKTtcblxuICAgICAgICAvL0VOR0lORVxuICAgICAgICBjb25zdCBlbmdpbmUgPSB1YVBhcnNlci5nZXRSZXN1bHQoKS5lbmdpbmU7XG4gICAgICAgIHRoaXMuZW5naW5lLmlzR2Vja28gPSAoZW5naW5lLm5hbWUgPT09ICdHZWNrbycpO1xuICAgICAgICB0aGlzLmVuZ2luZS5pc1dlYktpdCA9IChlbmdpbmUubmFtZSA9PT0gJ1dlYktpdCcpO1xuICAgICAgICB0aGlzLmVuZ2luZS5pc1RyaWRlbnQgPSAoZW5naW5lLm5hbWUgPT09ICdUcmlkZW50Jyk7XG4gICAgICAgIHRoaXMuZW5naW5lLmlzRWRnZUhUTUwgPSAoZW5naW5lLm5hbWUgPT09ICdFZGdlSFRNTCcpO1xuXG4gICAgICAgIC8vT1NcbiAgICAgICAgY29uc3Qgb3MgPSB1YVBhcnNlci5nZXRSZXN1bHQoKS5vcztcbiAgICAgICAgdGhpcy5vcy5pc0lPUyA9IChvcy5uYW1lID09PSAnaU9TJyk7XG4gICAgICAgIHRoaXMub3MuaXNBbmRyb2lkT1MgPSAob3MubmFtZSA9PT0gJ0FuZHJvaWQnKTtcbiAgICAgICAgdGhpcy5vcy5pc1dpbmRvd3MgPSAob3MubmFtZSA9PT0gJ1dpbmRvd3MnKTtcbiAgICAgICAgdGhpcy5vcy5pc01hYyA9IChvcy5uYW1lID09PSAnTWFjIE9TJyk7XG5cbiAgICAgICAgLy9TVVBQT1JUXG4gICAgICAgIGNvbnN0IGRldGVjdENTU0ZlYXR1cmUgPSAoZmVhdHVyZW5hbWUpPT57XG4gICAgICAgICAgICB2YXIgZmVhdHVyZSA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvbVByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTycuc3BsaXQoJyAnKSxcbiAgICAgICAgICAgICAgICBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgICAgICBmZWF0dXJlbmFtZUNhcGl0YWwgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgZmVhdHVyZW5hbWUgPSBmZWF0dXJlbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYoIGVsbS5zdHlsZVtmZWF0dXJlbmFtZV0gIT09IHVuZGVmaW5lZCApIHsgZmVhdHVyZSA9IHRydWU7IH1cblxuICAgICAgICAgICAgICAgIGlmKCBmZWF0dXJlID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZW5hbWVDYXBpdGFsID0gZmVhdHVyZW5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBmZWF0dXJlbmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgZG9tUHJlZml4ZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZWxtLnN0eWxlW2RvbVByZWZpeGVzW2ldICsgZmVhdHVyZW5hbWVDYXBpdGFsIF0gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmZWF0dXJlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN1cHBvcnQuY2FudmFzID0gKCgpPT57XG4gICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICByZXR1cm4gISEoY2FudmFzLmdldENvbnRleHQgJiYgY2FudmFzLmdldENvbnRleHQoJzJkJykpO1xuICAgICAgICB9KSgpO1xuICAgICAgICB0aGlzLnN1cHBvcnQud2ViR0wgPSAoKCk9PntcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgbGV0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKSB8fCBjYW52YXMuZ2V0Q29udGV4dChcImV4cGVyaW1lbnRhbC13ZWJnbFwiKTtcbiAgICAgICAgICAgIHJldHVybiAoZ2wgJiYgZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9KSgpO1xuICAgICAgICB0aGlzLnN1cHBvcnQuc3ZnID0gdHlwZW9mIFNWR1JlY3QgIT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgICAgdGhpcy5zdXBwb3J0LmNzc1RyYW5zaXRpb24gPSBkZXRlY3RDU1NGZWF0dXJlKCd0cmFuc2l0aW9uJyk7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5jc3NBbmltYXRpb24gPSBkZXRlY3RDU1NGZWF0dXJlKCdhbmltYXRpb24nKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0Lmhhc2hjaGFuZ2UgPSAoXCJvbmhhc2hjaGFuZ2VcIiBpbiB3aW5kb3cpO1xuICAgICAgICB0aGlzLnN1cHBvcnQuaGlzdG9yeSA9ICh3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpO1xuICAgICAgICB0aGlzLnN1cHBvcnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LnRvdWNoRXZlbnQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRW52KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSmxkbVZ1ZEVObGJuUmxjaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYlhYMD0iLCJpbXBvcnQgKiBhcyBtb2R1bGVzIGZyb20gJy4vX2FwcC1tb2R1bGVzL2luZGV4JztcblxuY2xhc3MgQXBwe1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG1vZHVsZXMpXG4gICAgfVxufVxuXG53aW5kb3cuQVBQID0gbmV3IEFwcCgpO1xuIl19
