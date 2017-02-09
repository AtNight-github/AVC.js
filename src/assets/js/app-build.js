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

var ua = navigator.userAgent.toLowerCase();
var ver = navigator.appVersion.toLowerCase();
var uaParser = new UAParser();

var Env = function Env() {
    _classCallCheck(this, Env);

    this.browser = {};
    this.device = {};
    this.engine = {};
    this.os = {};
    this.support = {};

    //BROWSER
    var browser = uaParser.getResult().browser;

    console.info(browser);

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
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }();
    this.support.cssTransition = detectCSSFeature('transition');
    this.support.cssAnimation = detectCSSFeature('animation');
    this.support.hashchange = "onhashchange" in window;
    this.support.history = window.history && window.history.pushState;
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

    this.modules = modules;
};

window.APP = new App();

},{"./_app-modules/index":14}]},{},[22])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9hbmltYXRpb24vU3ByaXRlLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvYW5pbWF0aW9uL2Nzc1R3ZWVuLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvYW5pbWF0aW9uL2N1c3RvbUVhc2UuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9hbmltYXRpb24vc2Nyb2xsVG8uanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vSW52aWV3LmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvZG9tL01vZGFsLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvZG9tL1Jlc2l6ZXIuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vU2Nyb2xsZXIuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vU2xpZGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvZG9tL1dyYXBDaGFySW5UYWcuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vY2hlY2tTY3JlZW5FZGdlLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvZG9tL2ZsZXhpYmxlRm9udFJlc2l6ZXIuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vcG9wdXBXaW4uanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9pbmRleC5qcyIsInNyYy9hc3NldHMvanMvX2FwcC1tb2R1bGVzL3V0aWxpdHkvR2VvbS5qcyIsInNyYy9hc3NldHMvanMvX2FwcC1tb2R1bGVzL3V0aWxpdHkvTG9hZGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvdXRpbGl0eS9UaW1lbGluZS5qcyIsInNyYy9hc3NldHMvanMvX2FwcC1tb2R1bGVzL3V0aWxpdHkvVmFsV2F0Y2hlci5qcyIsInNyYy9hc3NldHMvanMvX2FwcC1tb2R1bGVzL3V0aWxpdHkvY2hlY2tUeXBlLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvdXRpbGl0eS9lbnYuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy91dGlsaXR5L2V2ZW50Q2VudGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9hcHAtc3JjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs2Q0NBUyxPOzs7Ozs7Ozs7K0NBQ0EsTzs7Ozs7Ozs7OzZDQUNBLE87Ozs7Ozs7OzsyQ0FDQSxPOzs7Ozs7Ozs7b0RBR0EsTzs7Ozs7Ozs7O3dEQUNBLE87Ozs7Ozs7OzsyQ0FDQSxPOzs7Ozs7Ozs7MENBQ0EsTzs7Ozs7Ozs7OzZDQUNBLE87Ozs7Ozs7Ozs0Q0FDQSxPOzs7Ozs7Ozs7NkNBQ0EsTzs7Ozs7Ozs7OzJDQUNBLE87Ozs7Ozs7OztrREFDQSxPOzs7Ozs7Ozs7OENBR0EsTzs7Ozs7Ozs7O3dDQUNBLE87Ozs7Ozs7OztnREFDQSxPOzs7Ozs7Ozs7eUNBQ0EsTzs7Ozs7Ozs7OzJDQUNBLE87Ozs7Ozs7Ozs2Q0FDQSxPOzs7Ozs7Ozs7K0NBQ0EsTzs7Ozs7OztBQ3hCVDtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7QUNEQSxJQUFJLEtBQUssVUFBVSxTQUFWLENBQW9CLFdBQXBCLEVBQVQ7QUFDQSxJQUFJLE1BQU0sVUFBVSxVQUFWLENBQXFCLFdBQXJCLEVBQVY7QUFDQSxJQUFNLFdBQVcsSUFBSSxRQUFKLEVBQWpCOztJQUVNLEcsR0FDRixlQUFjO0FBQUE7O0FBQ1Ys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QUNWLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDSCxDOztBQUdMLE9BQU8sR0FBUCxHQUFhLElBQUksR0FBSixFQUFiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKVGNISnBkR1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNlcxMTkiLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSmpjM05VZDJWbGJpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiWFgwPSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKamRYTjBiMjFGWVhObExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHRkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKelkzSnZiR3hVYnk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJYWDA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpKYm5acFpYY3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2VzExOSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKTmIyUmhiQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYlhYMD0iLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSlNaWE5wZW1WeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHRkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKVFkzSnZiR3hsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJYWDA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpUYkdsa1pYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2VzExOSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKWGNtRndRMmhoY2tsdVZHRm5MbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2x0ZGZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSmphR1ZqYTFOamNtVmxia1ZrWjJVdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUptYkdWNGFXSnNaVVp2Ym5SU1pYTnBlbVZ5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sdGRmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUp3YjNCMWNGZHBiaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYlhYMD0iLCIvL2FuaW1hdGlvblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjc3NUd2VlbiB9IGZyb20gJy4vYW5pbWF0aW9uL2Nzc1R3ZWVuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3VzdG9tRWFzZSB9IGZyb20gJy4vYW5pbWF0aW9uL2N1c3RvbUVhc2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY3JvbGxUbyB9IGZyb20gJy4vYW5pbWF0aW9uL3Njcm9sbFRvJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3ByaXRlIH0gZnJvbSAnLi9hbmltYXRpb24vU3ByaXRlJztcblxuLy9kb21cbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2hlY2tTY3JlZW5FZGdlIH0gZnJvbSAnLi9kb20vY2hlY2tTY3JlZW5FZGdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmxleGlibGVGb250UmVzaXplciB9IGZyb20gJy4vZG9tL2ZsZXhpYmxlRm9udFJlc2l6ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnZpZXcgfSBmcm9tICcuL2RvbS9JbnZpZXcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gJy4vZG9tL01vZGFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9wdXBXaW4gfSBmcm9tICcuL2RvbS9wb3B1cFdpbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlc2l6ZXIgfSBmcm9tICcuL2RvbS9SZXNpemVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2Nyb2xsZXIgfSBmcm9tICcuL2RvbS9TY3JvbGxlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNsaWRlciB9IGZyb20gJy4vZG9tL1NsaWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdyYXBDaGFySW5UYWcgfSBmcm9tICcuL2RvbS9XcmFwQ2hhckluVGFnJztcblxuLy91dGlsaXR5XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoZWNrVHlwZSB9IGZyb20gJy4vdXRpbGl0eS9jaGVja1R5cGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbnYgfSBmcm9tICcuL3V0aWxpdHkvZW52JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXZlbnRDZW50ZXIgfSBmcm9tICcuL3V0aWxpdHkvZXZlbnRDZW50ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHZW9tIH0gZnJvbSAnLi91dGlsaXR5L0dlb20nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkZXIgfSBmcm9tICcuL3V0aWxpdHkvTG9hZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGltZWxpbmUgfSBmcm9tICcuL3V0aWxpdHkvVGltZWxpbmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWYWxXYXRjaGVyIH0gZnJvbSAnLi91dGlsaXR5L1ZhbFdhdGNoZXInO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpIWlc5dExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHRkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKTWIyRmtaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNlcxMTkiLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSlVhVzFsYkdsdVpTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiWFgwPSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKV1lXeFhZWFJqYUdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHRkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKamFHVmphMVI1Y0dVdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5IiwibGV0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xubGV0IHZlciA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG5jb25zdCB1YVBhcnNlciA9IG5ldyBVQVBhcnNlcigpO1xuXG5jbGFzcyBFbnZ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYnJvd3NlciA9IHt9O1xuICAgICAgICB0aGlzLmRldmljZSA9IHt9O1xuICAgICAgICB0aGlzLmVuZ2luZSA9IHt9O1xuICAgICAgICB0aGlzLm9zID0ge307XG4gICAgICAgIHRoaXMuc3VwcG9ydCA9IHt9O1xuXG4gICAgICAgIC8vQlJPV1NFUlxuICAgICAgICBjb25zdCBicm93c2VyID0gdWFQYXJzZXIuZ2V0UmVzdWx0KCkuYnJvd3NlcjtcblxuXG4gICAgICAgIGNvbnNvbGUuaW5mbyhicm93c2VyKTtcblxuICAgICAgICB0aGlzLmJyb3dzZXIuaXNJRSA9IChicm93c2VyLm5hbWUgPT09ICdJRScpO1xuXG4gICAgICAgIHRoaXMuYnJvd3Nlci5pc0lFOSA9ICh0aGlzLmJyb3dzZXIuaXNJRSAmJiBicm93c2VyLnZlcnNpb24gPT09ICc5LjAnKTtcbiAgICAgICAgdGhpcy5icm93c2VyLmlzSUUxMCA9ICh0aGlzLmJyb3dzZXIuaXNJRSAmJiBicm93c2VyLnZlcnNpb24gPT09ICcxMC4wJyk7XG4gICAgICAgIHRoaXMuYnJvd3Nlci5pc0lFMTEgPSAodGhpcy5icm93c2VyLmlzSUUgJiYgYnJvd3Nlci52ZXJzaW9uID09PSAnMTEuMCcpO1xuICAgICAgICB0aGlzLmJyb3dzZXIuaXNFZGdlID0gKGJyb3dzZXIubmFtZSA9PT0gJ0VkZ2UnKTtcbiAgICAgICAgdGhpcy5icm93c2VyLmlzQ2hyb21lID0gKGJyb3dzZXIubmFtZSA9PT0gJ0Nocm9tZScpO1xuICAgICAgICB0aGlzLmJyb3dzZXIuaXNGaXJlZm94ID0gKGJyb3dzZXIubmFtZSA9PT0gJ0ZpcmVmb3gnKTtcbiAgICAgICAgdGhpcy5icm93c2VyLmlzU2FmYXJpID0gKGJyb3dzZXIubmFtZSA9PT0gJ1NhZmFyaScpO1xuICAgICAgICB0aGlzLmJyb3dzZXIuaXNNb2JpbGVTYWZhcmkgPSAoYnJvd3Nlci5uYW1lID09PSAnTW9iaWxlIFNhZmFyaScpO1xuICAgICAgICB0aGlzLmJyb3dzZXIuaXNBbmRyb2lkQnJvd3NlciA9IChicm93c2VyLm5hbWUgPT09ICdBbmRyb2lkIEJyb3dzZXInKTtcblxuICAgICAgICAvL0RFVklDRVxuICAgICAgICBjb25zdCBkZXZpY2UgPSB1YVBhcnNlci5nZXRSZXN1bHQoKS5kZXZpY2U7XG4gICAgICAgIHRoaXMuZGV2aWNlLmlzTW9iaWxlID0gKGRldmljZS50eXBlID09PSAnbW9iaWxlJyk7XG4gICAgICAgIHRoaXMuZGV2aWNlLmlzVGFibGV0ID0gKGRldmljZS50eXBlID09PSAndGFibGV0Jyk7XG4gICAgICAgIHRoaXMuZGV2aWNlLmlzRGVza3RvcCA9ICghdGhpcy5kZXZpY2UuaXNNb2JpbGUgJiYgIXRoaXMuZGV2aWNlLmlzVGFibGV0KTtcbiAgICAgICAgdGhpcy5kZXZpY2UuaXNJcGhvbmUgPSAoZGV2aWNlLm1vZGVsID09PSAnaVBob25lJyk7XG4gICAgICAgIHRoaXMuZGV2aWNlLmlzSXBhZCA9IChkZXZpY2UubW9kZWwgPT09ICdpUGFkJyk7XG5cbiAgICAgICAgLy9FTkdJTkVcbiAgICAgICAgY29uc3QgZW5naW5lID0gdWFQYXJzZXIuZ2V0UmVzdWx0KCkuZW5naW5lO1xuICAgICAgICB0aGlzLmVuZ2luZS5pc0dlY2tvID0gKGVuZ2luZS5uYW1lID09PSAnR2Vja28nKTtcbiAgICAgICAgdGhpcy5lbmdpbmUuaXNXZWJLaXQgPSAoZW5naW5lLm5hbWUgPT09ICdXZWJLaXQnKTtcbiAgICAgICAgdGhpcy5lbmdpbmUuaXNUcmlkZW50ID0gKGVuZ2luZS5uYW1lID09PSAnVHJpZGVudCcpO1xuICAgICAgICB0aGlzLmVuZ2luZS5pc0VkZ2VIVE1MID0gKGVuZ2luZS5uYW1lID09PSAnRWRnZUhUTUwnKTtcblxuICAgICAgICAvL09TXG4gICAgICAgIGNvbnN0IG9zID0gdWFQYXJzZXIuZ2V0UmVzdWx0KCkub3M7XG4gICAgICAgIHRoaXMub3MuaXNJT1MgPSAob3MubmFtZSA9PT0gJ2lPUycpO1xuICAgICAgICB0aGlzLm9zLmlzQW5kcm9pZE9TID0gKG9zLm5hbWUgPT09ICdBbmRyb2lkJyk7XG4gICAgICAgIHRoaXMub3MuaXNXaW5kb3dzID0gKG9zLm5hbWUgPT09ICdXaW5kb3dzJyk7XG4gICAgICAgIHRoaXMub3MuaXNNYWMgPSAob3MubmFtZSA9PT0gJ01hYyBPUycpO1xuXG4gICAgICAgIC8vU1VQUE9SVFxuICAgICAgICBjb25zdCBkZXRlY3RDU1NGZWF0dXJlID0gKGZlYXR1cmVuYW1lKT0+e1xuICAgICAgICAgICAgdmFyIGZlYXR1cmUgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb21QcmVmaXhlcyA9ICdXZWJraXQgTW96IG1zIE8nLnNwbGl0KCcgJyksXG4gICAgICAgICAgICAgICAgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICAgICAgZmVhdHVyZW5hbWVDYXBpdGFsID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGZlYXR1cmVuYW1lID0gZmVhdHVyZW5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgIGlmKCBlbG0uc3R5bGVbZmVhdHVyZW5hbWVdICE9PSB1bmRlZmluZWQgKSB7IGZlYXR1cmUgPSB0cnVlOyB9XG5cbiAgICAgICAgICAgICAgICBpZiggZmVhdHVyZSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVuYW1lQ2FwaXRhbCA9IGZlYXR1cmVuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZmVhdHVyZW5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IGRvbVByZWZpeGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGVsbS5zdHlsZVtkb21QcmVmaXhlc1tpXSArIGZlYXR1cmVuYW1lQ2FwaXRhbCBdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmVhdHVyZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LmNhbnZhcyA9ICgoKT0+e1xuICAgICAgICAgICAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgICAgIHJldHVybiAhIShlbGVtLmdldENvbnRleHQgJiYgZWxlbS5nZXRDb250ZXh0KCcyZCcpKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LmNzc1RyYW5zaXRpb24gPSBkZXRlY3RDU1NGZWF0dXJlKCd0cmFuc2l0aW9uJyk7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5jc3NBbmltYXRpb24gPSBkZXRlY3RDU1NGZWF0dXJlKCdhbmltYXRpb24nKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0Lmhhc2hjaGFuZ2UgPSAoXCJvbmhhc2hjaGFuZ2VcIiBpbiB3aW5kb3cpO1xuICAgICAgICB0aGlzLnN1cHBvcnQuaGlzdG9yeSA9ICh3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudigpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpsZG1WdWRFTmxiblJsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJYWDA9IiwiaW1wb3J0ICogYXMgbW9kdWxlcyBmcm9tICcuL19hcHAtbW9kdWxlcy9pbmRleCc7XG5cbmNsYXNzIEFwcHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzID0gbW9kdWxlcztcbiAgICB9XG59XG5cbndpbmRvdy5BUFAgPSBuZXcgQXBwKCk7XG4iXX0=
