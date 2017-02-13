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

var _Watcher = require('./utility/Watcher');

Object.defineProperty(exports, 'Watcher', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Watcher).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./animation/Sprite":1,"./animation/cssTween":2,"./animation/customEase":3,"./animation/scrollTo":4,"./dom/Inview":5,"./dom/Modal":6,"./dom/Resizer":7,"./dom/Scroller":8,"./dom/Slider":9,"./dom/WrapCharInTag":10,"./dom/checkScreenEdge":11,"./dom/flexibleFontResizer":12,"./dom/popupWin":13,"./utility/Geom":15,"./utility/Loader":16,"./utility/Timeline":17,"./utility/Watcher":18,"./utility/checkType":19,"./utility/env":20,"./utility/eventCenter":21}],15:[function(require,module,exports){
"use strict";

},{}],16:[function(require,module,exports){
"use strict";

},{}],17:[function(require,module,exports){
"use strict";

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**=======================================================================
 * [ Watcher ]
 * 値の監視をして、変更された場合は指定したコールバックを実行する。
 * 値の型は{string|number|array|object}に対応。
 * arrayおよびobjectのディープ監視も可能（deep指定）。
 * Watch.jsに依存する。
 *
 * objectの場合、deepの他に、「新しく追加されたプロパティ」に反応させたい場合、
 * detectNewAttrをtrueにすること。（デフォルトではfalse）
 *
 * (例)
 =======================================================================*/
var _class = function () {
    function _class(param) {
        _classCallCheck(this, _class);

        this.target = null;
        this.onChange = function () {};
        this.deep = 1;
        this.detectNewAttr = true;

        Object.assign(this, param);
    }

    _createClass(_class, [{
        key: 'init',
        value: function init() {
            var _this = this;

            if (this.target === null) {
                console.error('Watcher ::: target is null');
                return;
            }

            watch(this.target, function (prop, action, newvalue, oldvalue) {
                _this.onChange(newvalue, oldvalue);
            });
        }
    }, {
        key: 'destory',
        value: function destory() {}
    }]);

    return _class;
}();

exports.default = _class;

},{}],19:[function(require,module,exports){
"use strict";

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Env = function () {
    function Env() {
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
        this.support.cssTransition = this._detectCSSFeature('transition');
        this.support.cssAnimation = this._detectCSSFeature('animation');
        this.support.hashchange = "onhashchange" in window;
        this.support.history = window.history && window.history.pushState;
        this.support.requestAnimationFrame = typeof requestAnimationFrame !== 'undefined';
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


    _createClass(Env, [{
        key: '_detectCSSFeature',
        value: function _detectCSSFeature(featurename) {
            var feature = false;
            var domPrefixes = 'Webkit Moz ms O'.split(' ');
            var elm = document.createElement('div');
            var featurenameCapital = null;

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
        }
    }]);

    return Env;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9hbmltYXRpb24vU3ByaXRlLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvYW5pbWF0aW9uL2Nzc1R3ZWVuLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvYW5pbWF0aW9uL2N1c3RvbUVhc2UuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9hbmltYXRpb24vc2Nyb2xsVG8uanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vSW52aWV3LmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvZG9tL01vZGFsLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvZG9tL1Jlc2l6ZXIuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vU2Nyb2xsZXIuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vU2xpZGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvZG9tL1dyYXBDaGFySW5UYWcuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vY2hlY2tTY3JlZW5FZGdlLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvZG9tL2ZsZXhpYmxlRm9udFJlc2l6ZXIuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9kb20vcG9wdXBXaW4uanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy9pbmRleC5qcyIsInNyYy9hc3NldHMvanMvX2FwcC1tb2R1bGVzL3V0aWxpdHkvR2VvbS5qcyIsInNyYy9hc3NldHMvanMvX2FwcC1tb2R1bGVzL3V0aWxpdHkvTG9hZGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvdXRpbGl0eS9UaW1lbGluZS5qcyIsInNyYy9hc3NldHMvanMvX2FwcC1tb2R1bGVzL3V0aWxpdHkvV2F0Y2hlci5qcyIsInNyYy9hc3NldHMvanMvX2FwcC1tb2R1bGVzL3V0aWxpdHkvY2hlY2tUeXBlLmpzIiwic3JjL2Fzc2V0cy9qcy9fYXBwLW1vZHVsZXMvdXRpbGl0eS9lbnYuanMiLCJzcmMvYXNzZXRzL2pzL19hcHAtbW9kdWxlcy91dGlsaXR5L2V2ZW50Q2VudGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9hcHAtc3JjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs2Q0NBUyxPOzs7Ozs7Ozs7K0NBQ0EsTzs7Ozs7Ozs7OzZDQUNBLE87Ozs7Ozs7OzsyQ0FDQSxPOzs7Ozs7Ozs7b0RBR0EsTzs7Ozs7Ozs7O3dEQUNBLE87Ozs7Ozs7OzsyQ0FDQSxPOzs7Ozs7Ozs7MENBQ0EsTzs7Ozs7Ozs7OzZDQUNBLE87Ozs7Ozs7Ozs0Q0FDQSxPOzs7Ozs7Ozs7NkNBQ0EsTzs7Ozs7Ozs7OzJDQUNBLE87Ozs7Ozs7OztrREFDQSxPOzs7Ozs7Ozs7OENBR0EsTzs7Ozs7Ozs7O3dDQUNBLE87Ozs7Ozs7OztnREFDQSxPOzs7Ozs7Ozs7eUNBQ0EsTzs7Ozs7Ozs7OzJDQUNBLE87Ozs7Ozs7Ozs2Q0FDQSxPOzs7Ozs7Ozs7NENBQ0EsTzs7Ozs7OztBQ3hCVDtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7O0FDREE7Ozs7Ozs7Ozs7Ozs7QUFhSSxvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsYUFBSyxNQUFMLEdBQWMsSUFBZDtBQUNBLGFBQUssUUFBTCxHQUFnQixZQUFJLENBQUUsQ0FBdEI7QUFDQSxhQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsYUFBSyxhQUFMLEdBQXFCLElBQXJCOztBQUVBLGVB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IiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKVGNISnBkR1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNlcxMTkiLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSmpjM05VZDJWbGJpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiWFgwPSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKamRYTjBiMjFGWVhObExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHRkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKelkzSnZiR3hVYnk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJYWDA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpKYm5acFpYY3Vhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2VzExOSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKTmIyUmhiQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYlhYMD0iLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSlNaWE5wZW1WeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHRkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKVFkzSnZiR3hsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJYWDA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpUYkdsa1pYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2VzExOSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKWGNtRndRMmhoY2tsdVZHRm5MbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2x0ZGZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSmphR1ZqYTFOamNtVmxia1ZrWjJVdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXMTE5IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUptYkdWNGFXSnNaVVp2Ym5SU1pYTnBlbVZ5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sdGRmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUp3YjNCMWNGZHBiaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYlhYMD0iLCIvL2FuaW1hdGlvblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjc3NUd2VlbiB9IGZyb20gJy4vYW5pbWF0aW9uL2Nzc1R3ZWVuJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3VzdG9tRWFzZSB9IGZyb20gJy4vYW5pbWF0aW9uL2N1c3RvbUVhc2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY3JvbGxUbyB9IGZyb20gJy4vYW5pbWF0aW9uL3Njcm9sbFRvJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3ByaXRlIH0gZnJvbSAnLi9hbmltYXRpb24vU3ByaXRlJztcblxuLy9kb21cbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2hlY2tTY3JlZW5FZGdlIH0gZnJvbSAnLi9kb20vY2hlY2tTY3JlZW5FZGdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmxleGlibGVGb250UmVzaXplciB9IGZyb20gJy4vZG9tL2ZsZXhpYmxlRm9udFJlc2l6ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnZpZXcgfSBmcm9tICcuL2RvbS9JbnZpZXcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gJy4vZG9tL01vZGFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9wdXBXaW4gfSBmcm9tICcuL2RvbS9wb3B1cFdpbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlc2l6ZXIgfSBmcm9tICcuL2RvbS9SZXNpemVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2Nyb2xsZXIgfSBmcm9tICcuL2RvbS9TY3JvbGxlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNsaWRlciB9IGZyb20gJy4vZG9tL1NsaWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdyYXBDaGFySW5UYWcgfSBmcm9tICcuL2RvbS9XcmFwQ2hhckluVGFnJztcblxuLy91dGlsaXR5XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoZWNrVHlwZSB9IGZyb20gJy4vdXRpbGl0eS9jaGVja1R5cGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbnYgfSBmcm9tICcuL3V0aWxpdHkvZW52JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXZlbnRDZW50ZXIgfSBmcm9tICcuL3V0aWxpdHkvZXZlbnRDZW50ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHZW9tIH0gZnJvbSAnLi91dGlsaXR5L0dlb20nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkZXIgfSBmcm9tICcuL3V0aWxpdHkvTG9hZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGltZWxpbmUgfSBmcm9tICcuL3V0aWxpdHkvVGltZWxpbmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXYXRjaGVyIH0gZnJvbSAnLi91dGlsaXR5L1dhdGNoZXInO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpIWlc5dExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHRkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKTWIyRmtaWEl1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNlcxMTkiLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSlVhVzFsYkdsdVpTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiWFgwPSIsIi8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBbIFdhdGNoZXIgXVxuICog5YCk44Gu55uj6KaW44KS44GX44Gm44CB5aSJ5pu044GV44KM44Gf5aC05ZCI44Gv5oyH5a6a44GX44Gf44Kz44O844Or44OQ44OD44Kv44KS5a6f6KGM44GZ44KL44CCXG4gKiDlgKTjga7lnovjga97c3RyaW5nfG51bWJlcnxhcnJheXxvYmplY3R944Gr5a++5b+c44CCXG4gKiBhcnJheeOBiuOCiOOBs29iamVjdOOBruODh+OCo+ODvOODl+ebo+imluOCguWPr+iDve+8iGRlZXDmjIflrprvvInjgIJcbiAqIFdhdGNoLmpz44Gr5L6d5a2Y44GZ44KL44CCXG4gKlxuICogb2JqZWN044Gu5aC05ZCI44CBZGVlcOOBruS7luOBq+OAgeOAjOaWsOOBl+OBj+i/veWKoOOBleOCjOOBn+ODl+ODreODkeODhuOCo+OAjeOBq+WPjeW/nOOBleOBm+OBn+OBhOWgtOWQiOOAgVxuICogZGV0ZWN0TmV3QXR0cuOCknRydWXjgavjgZnjgovjgZPjgajjgILvvIjjg4fjg5Xjgqnjg6vjg4jjgafjga9mYWxzZe+8iVxuICpcbiAqICjkvospXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9ICgpPT57fTtcbiAgICAgICAgdGhpcy5kZWVwID0gMTtcbiAgICAgICAgdGhpcy5kZXRlY3ROZXdBdHRyID0gdHJ1ZTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHBhcmFtKTtcbiAgICB9XG4gICAgaW5pdCgpe1xuICAgICAgICBpZiAodGhpcy50YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dhdGNoZXIgOjo6IHRhcmdldCBpcyBudWxsJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB3YXRjaCh0aGlzLnRhcmdldCwgKHByb3AsIGFjdGlvbiwgbmV3dmFsdWUsIG9sZHZhbHVlKT0+e1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShuZXd2YWx1ZSwgb2xkdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGVzdG9yeSgpe1xuXG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpqYUdWamExUjVjR1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNlcxMTkiLCIvKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogWyBFbnYgXVxuICog44Kv44Op44Kk44Ki44Oz44OI44GuVUHjgarjgannkrDlooPmg4XloLHjgpLlj5blvpfjgZnjgovjgIJcbiAqIOODluODqeOCpuOCtuOAgeODh+ODkOOCpOOCueOAgeOCqOODs+OCuOODs+OAgU9T44GK44KI44Gz5ZCE5qmf6IO944KS6Kq/44G544KL44CCXG4gKiDln7rmnKznmoTjgavlhajjgabjga7jg5fjg63jg5Hjg4bjgqPjga97Ym9vbGVhbn3jgpLov5TljbTjgZnjgovjgIJcbiAqIFVBUGFyc2VyLmpz44Gr5L6d5a2Y44GZ44KL44Gf44KB5YWI6Kqt44G/44GZ44KL44GT44Go44CCXG4gKlxuICogKOS+iylcbiAqIEFQUC5lbnYuYnJvd3Nlci5pc1NhZmFyaeODu+ODu+ODu1NhZmFyaeOBi+OBqeOBhuOBi1xuICogQVBQLmVudi5kZXZpY2UuaXNJcGhvbmXjg7vjg7vjg7tpUGhvbmXjgYvjganjgYbjgYtcbiAqIEFQUC5lbnYuc3VwcG9ydC5jYW52YXPjg7vjg7vjg7tjYW52YXPjgavjgIDlr77lv5zjgZfjgabjgYTjgovjgYvjganjgYbjgYtcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5jbGFzcyBFbnZ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHZlciA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHVhUGFyc2VyID0gbmV3IFVBUGFyc2VyKCk7XG5cbiAgICAgICAgdGhpcy5icm93c2VyID0ge307XG4gICAgICAgIHRoaXMuZGV2aWNlID0ge307XG4gICAgICAgIHRoaXMuZW5naW5lID0ge307XG4gICAgICAgIHRoaXMub3MgPSB7fTtcbiAgICAgICAgdGhpcy5zdXBwb3J0ID0ge307XG5cbiAgICAgICAgLy9CUk9XU0VSXG4gICAgICAgIGNvbnN0IGJyb3dzZXIgPSB1YVBhcnNlci5nZXRSZXN1bHQoKS5icm93c2VyO1xuICAgICAgICB0aGlzLmJyb3dzZXIuaXNJRSA9IChicm93c2VyLm5hbWUgPT09ICdJRScpO1xuICAgICAgICB0aGlzLmJyb3dzZXIuaXNJRTkgPSAodGhpcy5icm93c2VyLmlzSUUgJiYgYnJvd3Nlci52ZXJzaW9uID09PSAnOS4wJyk7XG4gICAgICAgIHRoaXMuYnJvd3Nlci5pc0lFMTAgPSAodGhpcy5icm93c2VyLmlzSUUgJiYgYnJvd3Nlci52ZXJzaW9uID09PSAnMTAuMCcpO1xuICAgICAgICB0aGlzLmJyb3dzZXIuaXNJRTExID0gKHRoaXMuYnJvd3Nlci5pc0lFICYmIGJyb3dzZXIudmVyc2lvbiA9PT0gJzExLjAnKTtcbiAgICAgICAgdGhpcy5icm93c2VyLmlzRWRnZSA9IChicm93c2VyLm5hbWUgPT09ICdFZGdlJyk7XG4gICAgICAgIHRoaXMuYnJvd3Nlci5pc0Nocm9tZSA9IChicm93c2VyLm5hbWUgPT09ICdDaHJvbWUnKTtcbiAgICAgICAgdGhpcy5icm93c2VyLmlzRmlyZWZveCA9IChicm93c2VyLm5hbWUgPT09ICdGaXJlZm94Jyk7XG4gICAgICAgIHRoaXMuYnJvd3Nlci5pc1NhZmFyaSA9IChicm93c2VyLm5hbWUgPT09ICdTYWZhcmknKTtcbiAgICAgICAgdGhpcy5icm93c2VyLmlzTW9iaWxlU2FmYXJpID0gKGJyb3dzZXIubmFtZSA9PT0gJ01vYmlsZSBTYWZhcmknKTtcbiAgICAgICAgdGhpcy5icm93c2VyLmlzQW5kcm9pZEJyb3dzZXIgPSAoYnJvd3Nlci5uYW1lID09PSAnQW5kcm9pZCBCcm93c2VyJyk7XG5cbiAgICAgICAgLy9ERVZJQ0VcbiAgICAgICAgY29uc3QgZGV2aWNlID0gdWFQYXJzZXIuZ2V0UmVzdWx0KCkuZGV2aWNlO1xuICAgICAgICB0aGlzLmRldmljZS5pc01vYmlsZSA9IChkZXZpY2UudHlwZSA9PT0gJ21vYmlsZScpO1xuICAgICAgICB0aGlzLmRldmljZS5pc1RhYmxldCA9IChkZXZpY2UudHlwZSA9PT0gJ3RhYmxldCcpO1xuICAgICAgICB0aGlzLmRldmljZS5pc0Rlc2t0b3AgPSAoIXRoaXMuZGV2aWNlLmlzTW9iaWxlICYmICF0aGlzLmRldmljZS5pc1RhYmxldCk7XG4gICAgICAgIHRoaXMuZGV2aWNlLmlzSXBob25lID0gKGRldmljZS5tb2RlbCA9PT0gJ2lQaG9uZScpO1xuICAgICAgICB0aGlzLmRldmljZS5pc0lwYWQgPSAoZGV2aWNlLm1vZGVsID09PSAnaVBhZCcpO1xuXG4gICAgICAgIC8vRU5HSU5FXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IHVhUGFyc2VyLmdldFJlc3VsdCgpLmVuZ2luZTtcbiAgICAgICAgdGhpcy5lbmdpbmUuaXNHZWNrbyA9IChlbmdpbmUubmFtZSA9PT0gJ0dlY2tvJyk7XG4gICAgICAgIHRoaXMuZW5naW5lLmlzV2ViS2l0ID0gKGVuZ2luZS5uYW1lID09PSAnV2ViS2l0Jyk7XG4gICAgICAgIHRoaXMuZW5naW5lLmlzVHJpZGVudCA9IChlbmdpbmUubmFtZSA9PT0gJ1RyaWRlbnQnKTtcbiAgICAgICAgdGhpcy5lbmdpbmUuaXNFZGdlSFRNTCA9IChlbmdpbmUubmFtZSA9PT0gJ0VkZ2VIVE1MJyk7XG5cbiAgICAgICAgLy9PU1xuICAgICAgICBjb25zdCBvcyA9IHVhUGFyc2VyLmdldFJlc3VsdCgpLm9zO1xuICAgICAgICB0aGlzLm9zLmlzSU9TID0gKG9zLm5hbWUgPT09ICdpT1MnKTtcbiAgICAgICAgdGhpcy5vcy5pc0FuZHJvaWRPUyA9IChvcy5uYW1lID09PSAnQW5kcm9pZCcpO1xuICAgICAgICB0aGlzLm9zLmlzV2luZG93cyA9IChvcy5uYW1lID09PSAnV2luZG93cycpO1xuICAgICAgICB0aGlzLm9zLmlzTWFjID0gKG9zLm5hbWUgPT09ICdNYWMgT1MnKTtcblxuICAgICAgICAvL1NVUFBPUlRcbiAgICAgICAgdGhpcy5zdXBwb3J0LmNhbnZhcyA9ICgoKT0+e1xuICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgICAgcmV0dXJuICEhKGNhbnZhcy5nZXRDb250ZXh0ICYmIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LndlYkdMID0gKCgpPT57XG4gICAgICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgIGxldCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIikgfHwgY2FudmFzLmdldENvbnRleHQoXCJleHBlcmltZW50YWwtd2ViZ2xcIik7XG4gICAgICAgICAgICByZXR1cm4gKGdsICYmIGdsIGluc3RhbmNlb2YgV2ViR0xSZW5kZXJpbmdDb250ZXh0KSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN2ZyA9IHR5cGVvZiBTVkdSZWN0ICE9IFwidW5kZWZpbmVkXCI7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5jc3NUcmFuc2l0aW9uID0gdGhpcy5fZGV0ZWN0Q1NTRmVhdHVyZSgndHJhbnNpdGlvbicpO1xuICAgICAgICB0aGlzLnN1cHBvcnQuY3NzQW5pbWF0aW9uID0gdGhpcy5fZGV0ZWN0Q1NTRmVhdHVyZSgnYW5pbWF0aW9uJyk7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5oYXNoY2hhbmdlID0gKFwib25oYXNoY2hhbmdlXCIgaW4gd2luZG93KTtcbiAgICAgICAgdGhpcy5zdXBwb3J0Lmhpc3RvcnkgPSAod2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJyk7XG4gICAgICAgIHRoaXMuc3VwcG9ydC50b3VjaEV2ZW50ID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFsgX2RldGVjdENTU0ZlYXR1cmUgXVxuICAgICAqIENTUzPjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7lr77lv5zjgpLoqr/jgbnjgovjgIJcbiAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9qYS9kb2NzL1dlYi9DU1MvQ1NTX0FuaW1hdGlvbnMvRGV0ZWN0aW5nX0NTU19hbmltYXRpb25fc3VwcG9ydFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZlYXR1cmVuYW1l44O744O744O7dHJhbnNpdGlvbuOBi2FuaW1hdGlvbuOBruOBv1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW5944O744O744O75a++5b+c44GX44Gm44GE44KL44GL44Gp44GG44GLXG4gICAgICovXG4gICAgX2RldGVjdENTU0ZlYXR1cmUoZmVhdHVyZW5hbWUpe1xuICAgICAgICBsZXQgZmVhdHVyZSA9IGZhbHNlO1xuICAgICAgICBsZXQgZG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBtcyBPJy5zcGxpdCgnICcpO1xuICAgICAgICBsZXQgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBmZWF0dXJlbmFtZUNhcGl0YWwgPSBudWxsO1xuXG4gICAgICAgIGZlYXR1cmVuYW1lID0gZmVhdHVyZW5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiggZWxtLnN0eWxlW2ZlYXR1cmVuYW1lXSAhPT0gdW5kZWZpbmVkICkgeyBmZWF0dXJlID0gdHJ1ZTsgfVxuICAgICAgICBpZiggZmVhdHVyZSA9PT0gZmFsc2UgKSB7XG4gICAgICAgICAgICBmZWF0dXJlbmFtZUNhcGl0YWwgPSBmZWF0dXJlbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGZlYXR1cmVuYW1lLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgZG9tUHJlZml4ZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgaWYoIGVsbS5zdHlsZVtkb21QcmVmaXhlc1tpXSArIGZlYXR1cmVuYW1lQ2FwaXRhbCBdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmZWF0dXJlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEVudigpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpsZG1WdWRFTmxiblJsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJYWDA9IiwiaW1wb3J0ICogYXMgbW9kdWxlcyBmcm9tICcuL19hcHAtbW9kdWxlcy9pbmRleCc7XG5cbmNsYXNzIEFwcHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBtb2R1bGVzKTtcbiAgICB9XG59XG5cbndpbmRvdy5BUFAgPSBuZXcgQXBwKCk7XG4iXX0=
