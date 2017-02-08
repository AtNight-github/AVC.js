!function(a,b,c,d){"use strict";function e(a,b){return a===d?b:a}function l(a,b){for(var c=void 0,e=void 0,g=b[0].toUpperCase()+b.slice(1),h=0;h<f.length;){if(c=f[h],e=c?c+g:b,e in a)return e;h++}return d}function m(){if(!o)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){return b[d]=!c||a.CSS.supports("touch-action",d)}),b}function ba(){return aa++}function ca(a,b,c){var e=void 0;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function da(a,b,c){return!!Array.isArray(a)&&(ca(a,c[b],c),!0)}function ea(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function na(a,b){return("undefined"==typeof a?"undefined":fa(a))===h?a.apply(b?b[0]||d:d,b):a}function oa(a,b){var c=b.manager;return c?c.get(a):a}function pa(a){return a&Y?"cancel":a&W?"end":a&V?"move":a&U?"start":""}function ua(a){return a===N?"down":a===M?"up":a===K?"left":a===L?"right":""}function xa(a,b){return function(){return a.apply(b,arguments)}}function ya(a,b,c){return setTimeout(xa(a,c),b)}function za(a,b,c){c||(c=R);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function Ca(a,b){return a.indexOf(b)>-1}function Da(a){if(Ca(a,s))return s;var b=Ca(a,t),c=Ca(a,u);return b&&c?s:b||c?b?t:u:Ca(a,r)?r:q}function Fa(a,b){for(;a;){if(a===b)return!0;a=a.parentNode}return!1}function Ga(a){var b=a.length;if(1===b)return{x:i(a[0].clientX),y:i(a[0].clientY)};for(var c=0,d=0,e=0;e<b;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:i(c/b),y:i(d/b)}}function Ha(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:i(a.pointers[c].clientX),clientY:i(a.pointers[c].clientY)},c++;return{timeStamp:k(),pointers:b,center:Ga(b),deltaX:a.deltaX,deltaY:a.deltaY}}function Ia(a,b,c){c||(c=R);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function Ja(a,b){return a===b?J:j(a)>=j(b)?a<0?K:L:b<0?M:N}function Ka(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==F&&f.eventType!==H||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function La(a,b,c){return{x:b/a||0,y:c/a||0}}function Ma(a,b){return za(b[0],b[1],S)/za(a[0],a[1],S)}function Na(a,b){return Ia(b[1],b[0],S)+Ia(a[1],a[0],S)}function Oa(a,b){var c=a.lastInterval||b,e=b.timeStamp-c.timeStamp,f=void 0,g=void 0,h=void 0,i=void 0;if(b.eventType!==I&&(e>E||c.velocity===d)){var k=b.deltaX-c.deltaX,l=b.deltaY-c.deltaY,m=La(e,k,l);g=m.x,h=m.y,f=j(m.x)>j(m.y)?m.x:m.y,i=Ja(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,i=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=i}function Pa(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=Ha(b)),e>1&&!c.firstMultiple?c.firstMultiple=Ha(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=Ga(d);b.timeStamp=k(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=Ia(h,i),b.distance=za(h,i),Ka(c,b),b.offsetDirection=Ja(b.deltaX,b.deltaY);var l=La(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=l.x,b.overallVelocityY=l.y,b.overallVelocity=j(l.x)>j(l.y)?l.x:l.y,b.scale=g?Ma(g.pointers,d):1,b.rotation=g?Na(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,Oa(c,b);var m=a.element;Fa(b.srcEvent.target,m)&&(m=b.srcEvent.target),b.target=m}function Qa(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&F&&d-e===0,g=b&(H|I)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,Pa(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function Ra(a){return a.trim().split(/\s+/g)}function Sa(a,b,c){ca(Ra(b),function(b){a.addEventListener(b,c,!1)})}function Ta(a,b,c){ca(Ra(b),function(b){a.removeEventListener(b,c,!1)})}function Ua(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function _a(a){return Array.prototype.slice.call(a,0)}function ab(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];ea(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function eb(a,b){var c=_a(a.touches),d=this.targetIds;if(b&(F|G)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e=void 0,f=void 0,g=_a(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return Fa(a.target,i)}),b===F)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(H|I)&&delete d[g[e].identifier],e++;return h.length?[ab(f.concat(h),"identifier",!0),h]:void 0}function mb(a,b){a&F?(this.primaryTouch=b.changedPointers[0].identifier,nb.call(this,b)):a&(H|I)&&nb.call(this,b)}function nb(a){var b=this,c=ma(a.changedPointers,1),d=c[0];d.identifier===this.primaryTouch&&!function(){var a={x:d.clientX,y:d.clientY};b.lastTouches.push(a);var c=b.lastTouches,e=function(){var d=c.indexOf(a);d>-1&&c.splice(d,1)};setTimeout(e,jb)}()}function ob(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(f<=kb&&g<=kb)return!0}return!1}function pb(a){var b=void 0,c=a.options.inputClass;return new(b=c?c:y?$a:z?db:x?lb:ib)(a,Qa)}function tb(a,b){var c=a.element;if(c.style){var d=void 0;ca(a.options.cssProps,function(e,f){d=l(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ub(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}function Ab(a,b){var c=_a(a.touches),d=_a(a.changedTouches);return b&(H|I)&&(c=ab(c.concat(d),"identifier",!0)),[c,d]}function Bb(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function Eb(a,b,c){var d=b.prototype,e=void 0;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&_(e,c)}var f=["","webkit","Moz","MS","ms","o"],g=b.createElement("div"),h="function",i=Math.round,j=Math.abs,k=Date.now,n=l(g.style,"touchAction"),o=n!==d,p="compute",q="auto",r="manipulation",s="none",t="pan-x",u="pan-y",v=m(),w=/mobile|tablet|ip(ad|hone|od)|android/i,x="ontouchstart"in a,y=l(a,"PointerEvent")!==d,z=x&&w.test(navigator.userAgent),A="touch",B="pen",C="mouse",D="kinect",E=25,F=1,G=2,H=4,I=8,J=1,K=2,L=4,M=8,N=16,O=K|L,P=M|N,Q=O|P,R=["x","y"],S=["clientX","clientY"],T=1,U=2,V=4,W=8,X=W,Y=16,Z=32,$=void 0;$="function"!=typeof Object.assign?function(b){if(b===d||null===b)throw new TypeError("Cannot convert undefined or null to object");for(var c=Object(b),e=1;e<arguments.length;e++){var f=arguments[e];if(f!==d&&null!==f)for(var g in f)f.hasOwnProperty(g)&&(c[g]=f[g])}return c}:Object.assign;var _=$,aa=1,fa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ha=(function(){function a(a){this.value=a}function b(b){function f(a,b){return new Promise(function(d,f){var h={key:a,arg:b,resolve:d,reject:f,next:null};e?e=e.next=h:(c=e=h,g(a,b))})}function g(c,d){try{var e=b[c](d),f=e.value;f instanceof a?Promise.resolve(f.value).then(function(a){g("next",a)},function(a){g("throw",a)}):h(e.done?"return":"normal",e.value)}catch(a){h("throw",a)}}function h(a,b){switch(a){case"return":c.resolve({value:b,done:!0});break;case"throw":c.reject(b);break;default:c.resolve({value:b,done:!1})}c=c.next,c?g(c.key,c.arg):e=null}var c,e;this._invoke=f,"function"!=typeof b.return&&(this.return=d)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(b.prototype[Symbol.asyncIterator]=function(){return this}),b.prototype.next=function(a){return this._invoke("next",a)},b.prototype.throw=function(a){return this._invoke("throw",a)},b.prototype.return=function(a){return this._invoke("return",a)},{wrap:function(a){return function(){return new b(a.apply(this,arguments))}},await:function(b){return new a(b)}}}(),function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}),ia=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),ja=function a(b,c,e){null===b&&(b=Function.prototype);var f=Object.getOwnPropertyDescriptor(b,c);if(f===d){var g=Object.getPrototypeOf(b);return null===g?d:a(g,c,e)}if("value"in f)return f.value;var h=f.get;return h===d?d:h.call(e)},ka=function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)},la=function(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!b||"object"!=typeof b&&"function"!=typeof b?a:b},ma=function(){function a(a,b){var c=[],e=!0,f=!1,g=d;try{for(var i,h=a[Symbol.iterator]();!(e=(i=h.next()).done)&&(c.push(i.value),!b||c.length!==b);e=!0);}catch(a){f=!0,g=a}finally{try{!e&&h.return&&h.return()}finally{if(f)throw g}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),qa=function(){function a(b){ha(this,a),this.options=_({},this.defaults,b||{}),this.id=ba(),this.manager=null,this.options.enable=e(this.options.enable,!0),this.state=T,this.simultaneous={},this.requireFail=[]}return ia(a,[{key:"set",value:function(b){return _(this.options,b),this.manager&&this.manager.touchAction.update(),this}},{key:"recognizeWith",value:function(b){if(da(b,"recognizeWith",this))return this;var c=this.simultaneous;return b=oa(b,this),c[b.id]||(c[b.id]=b,b.recognizeWith(this)),this}},{key:"dropRecognizeWith",value:function(b){return da(b,"dropRecognizeWith",this)?this:(b=oa(b,this),delete this.simultaneous[b.id],this)}},{key:"requireFailure",value:function(b){if(da(b,"requireFailure",this))return this;var c=this.requireFail;return b=oa(b,this),ea(c,b)===-1&&(c.push(b),b.requireFailure(this)),this}},{key:"dropRequireFailure",value:function(b){if(da(b,"dropRequireFailure",this))return this;b=oa(b,this);var c=ea(this.requireFail,b);return c>-1&&this.requireFail.splice(c,1),this}},{key:"hasRequireFailures",value:function(){return this.requireFail.length>0}},{key:"canRecognizeWith",value:function(b){return!!this.simultaneous[b.id]}},{key:"emit",value:function a(b){function a(a){c.manager.emit(a,b)}var c=this,d=this.state;d<W&&a(c.options.event+pa(d)),a(c.options.event),b.additionalEvent&&a(b.additionalEvent),d>=W&&a(c.options.event+pa(d))}},{key:"tryEmit",value:function(b){return this.canEmit()?this.emit(b):void(this.state=Z)}},{key:"canEmit",value:function(){for(var b=0;b<this.requireFail.length;){if(!(this.requireFail[b].state&(Z|T)))return!1;b++}return!0}},{key:"recognize",value:function(b){var c=_({},b);return na(this.options.enable,[this,c])?(this.state&(X|Y|Z)&&(this.state=T),this.state=this.process(c),void(this.state&(U|V|W|Y)&&this.tryEmit(c))):(this.reset(),void(this.state=Z))}},{key:"process",value:function(b){}},{key:"getTouchAction",value:function(){}},{key:"reset",value:function(){}}]),a}();qa.prototype.defaults={};var ra=function(a){function b(){return ha(this,b),la(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return ka(b,a),ia(b,[{key:"attrTest",value:function(b){var c=this.options.pointers;return 0===c||b.pointers.length===c}},{key:"process",value:function(b){var c=this.state,d=b.eventType,e=c&(U|V),f=this.attrTest(b);return e&&(d&I||!f)?c|Y:e||f?d&H?c|W:c&U?c|V:U:Z}}]),b}(qa);ra.prototype.defaults={pointers:1};var sa=function(a){function b(){return ha(this,b),la(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return ka(b,a),ia(b,[{key:"getTouchAction",value:function(){return[s]}},{key:"attrTest",value:function(c){return ja(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"attrTest",this).call(this,c)&&(Math.abs(c.rotation)>this.options.threshold||this.state&U)}}]),b}(ra);sa.prototype.defaults={event:"rotate",threshold:0,pointers:2};var ta=function(a){function b(){return ha(this,b),la(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return ka(b,a),ia(b,[{key:"getTouchAction",value:function(){return[s]}},{key:"attrTest",value:function(c){return ja(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"attrTest",this).call(this,c)&&(Math.abs(c.scale-1)>this.options.threshold||this.state&U)}},{key:"emit",value:function(c){if(1!==c.scale){var d=c.scale<1?"in":"out";c.additionalEvent=this.options.event+d}ja(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"emit",this).call(this,c)}}]),b}(ra);ta.prototype.defaults={event:"pinch",threshold:0,pointers:2};var va=function(a){function b(){ha(this,b);var a=la(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));return a.pX=null,a.pY=null,a}return ka(b,a),ia(b,[{key:"getTouchAction",value:function(){var b=this.options.direction,c=[];return b&O&&c.push(u),b&P&&c.push(t),c}},{key:"directionTest",value:function(b){var c=this.options,d=!0,e=b.distance,f=b.direction,g=b.deltaX,h=b.deltaY;return f&c.direction||(c.direction&O?(f=0===g?J:g<0?K:L,d=g!==this.pX,e=Math.abs(b.deltaX)):(f=0===h?J:h<0?M:N,d=h!==this.pY,e=Math.abs(b.deltaY))),b.direction=f,d&&e>c.threshold&&f&c.direction}},{key:"attrTest",value:function(b){return ra.prototype.attrTest.call(this,b)&&(this.state&U||!(this.state&U)&&this.directionTest(b))}},{key:"emit",value:function(c){this.pX=c.deltaX,this.pY=c.deltaY;var d=ua(c.direction);d&&(c.additionalEvent=this.options.event+d),ja(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"emit",this).call(this,c)}}]),b}(ra);va.prototype.defaults={event:"pan",threshold:10,pointers:1,direction:Q};var wa=function(a){function b(){return ha(this,b),la(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return ka(b,a),ia(b,[{key:"getTouchAction",value:function(){return va.prototype.getTouchAction.call(this)}},{key:"attrTest",value:function(c){var d=this.options.direction,e=void 0;return d&(O|P)?e=c.overallVelocity:d&O?e=c.overallVelocityX:d&P&&(e=c.overallVelocityY),ja(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"attrTest",this).call(this,c)&&d&c.offsetDirection&&c.distance>this.options.threshold&&c.maxPointers===this.options.pointers&&j(e)>this.options.velocity&&c.eventType&H}},{key:"emit",value:function(b){var c=ua(b.offsetDirection);c&&this.manager.emit(this.options.event+c,b),this.manager.emit(this.options.event,b)}}]),b}(ra);wa.prototype.defaults={event:"swipe",threshold:10,velocity:.3,direction:O|P,pointers:1};var Aa=function(a){function b(){ha(this,b);var a=la(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));return a.pTime=!1,a.pCenter=!1,a._timer=null,a._input=null,a.count=0,a}return ka(b,a),ia(b,[{key:"getTouchAction",value:function(){return[r]}},{key:"process",value:function(b){var c=this,d=this.options,e=b.pointers.length===d.pointers,f=b.distance<d.threshold,g=b.deltaTime<d.time;if(this.reset(),b.eventType&F&&0===this.count)return this.failTimeout();if(f&&g&&e){if(b.eventType!==H)return this.failTimeout();var h=!this.pTime||b.timeStamp-this.pTime<d.interval,i=!this.pCenter||za(this.pCenter,b.center)<d.posThreshold;this.pTime=b.timeStamp,this.pCenter=b.center,i&&h?this.count+=1:this.count=1,this._input=b;var j=this.count%d.taps;if(0===j)return this.hasRequireFailures()?(this._timer=ya(function(){c.state=X,c.tryEmit()},d.interval,this),U):X}return Z}},{key:"failTimeout",value:function(){var b=this;return this._timer=ya(function(){b.state=Z},this.options.interval,this),Z}},{key:"reset",value:function(){clearTimeout(this._timer)}},{key:"emit",value:function(){this.state===X&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}]),b}(qa);Aa.prototype.defaults={event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10};var Ba=function(a){function b(){ha(this,b);var a=la(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));return a._timer=null,a._input=null,a}return ka(b,a),ia(b,[{key:"getTouchAction",value:function(){return[q]}},{key:"process",value:function(b){var c=this,d=this.options,e=b.pointers.length===d.pointers,f=b.distance<d.threshold,g=b.deltaTime>d.time;if(this._input=b,!f||!e||b.eventType&(H|I)&&!g)this.reset();else if(b.eventType&F)this.reset(),this._timer=ya(function(){c.state=X,c.tryEmit()},d.time,this);else if(b.eventType&H)return X;return Z}},{key:"reset",value:function(){clearTimeout(this._timer)}},{key:"emit",value:function(b){this.state===X&&(b&&b.eventType&H?this.manager.emit(this.options.event+"up",b):(this._input.timeStamp=k(),this.manager.emit(this.options.event,this._input)))}}]),b}(qa);Ba.prototype.defaults={event:"press",pointers:1,time:251,threshold:9};var Ea=function(){function a(b,c){ha(this,a),this.manager=b,this.set(c)}return ia(a,[{key:"set",value:function(b){b===p&&(b=this.compute()),o&&this.manager.element.style&&v[b]&&(this.manager.element.style[n]=b),this.actions=b.toLowerCase().trim()}},{key:"update",value:function(){this.set(this.manager.options.touchAction)}},{key:"compute",value:function(){var b=[];return ca(this.manager.recognizers,function(a){na(a.options.enable,[a])&&(b=b.concat(a.getTouchAction()))}),Da(b.join(" "))}},{key:"preventDefaults",value:function(b){var c=b.srcEvent,d=b.offsetDirection;if(this.manager.session.prevented)return void c.preventDefault();var e=this.actions,f=Ca(e,s)&&!v[s],g=Ca(e,u)&&!v[u],h=Ca(e,t)&&!v[t];if(f){var i=1===b.pointers.length,j=b.distance<2,k=b.deltaTime<250;if(i&&j&&k)return}return h&&g?void 0:f||g&&d&O||h&&d&P?this.preventSrc(c):void 0}},{key:"preventSrc",value:function(b){this.manager.session.prevented=!0,b.preventDefault()}}]),a}(),Va=function(){function a(b,c){ha(this,a);var d=this;this.manager=b,this.callback=c,this.element=b.element,this.target=b.options.inputTarget,this.domHandler=function(a){na(b.options.enable,[b])&&d.handler(a)},this.init()}return ia(a,[{key:"handler",value:function(){}},{key:"init",value:function(){this.evEl&&Sa(this.element,this.evEl,this.domHandler),this.evTarget&&Sa(this.target,this.evTarget,this.domHandler),this.evWin&&Sa(Ua(this.element),this.evWin,this.domHandler)}},{key:"destroy",value:function(){this.evEl&&Ta(this.element,this.evEl,this.domHandler),this.evTarget&&Ta(this.target,this.evTarget,this.domHandler),this.evWin&&Ta(Ua(this.element),this.evWin,this.domHandler)}}]),a}(),Wa={pointerdown:F,pointermove:G,pointerup:H,pointercancel:I,pointerout:I},Xa={2:A,3:B,4:C,5:D},Ya="pointerdown",Za="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Ya="MSPointerDown",Za="MSPointerMove MSPointerUp MSPointerCancel");var $a=function(a){function b(){ha(this,b);var a=la(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));return a.evEl=Ya,a.evWin=Za,a.store=a.manager.session.pointerEvents=[],a}return ka(b,a),ia(b,[{key:"handler",value:function(b){var c=this.store,d=!1,e=b.type.toLowerCase().replace("ms",""),f=Wa[e],g=Xa[b.pointerType]||b.pointerType,h=g===A,i=ea(c,b.pointerId,"pointerId");f&F&&(0===b.button||h)?i<0&&(c.push(b),i=c.length-1):f&(H|I)&&(d=!0),i<0||(c[i]=b,this.callback(this.manager,f,{pointers:c,changedPointers:[b],pointerType:g,srcEvent:b}),d&&c.splice(i,1))}}]),b}(Va),bb={touchstart:F,touchmove:G,touchend:H,touchcancel:I},cb="touchstart touchmove touchend touchcancel",db=function(a){function b(){ha(this,b),b.prototype.evTarget=cb,b.prototype.targetIds={};var a=la(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));return a.evTarget=cb,a.targetIds={},a}return ka(b,a),ia(b,[{key:"handler",value:function(b){var c=bb[b.type],d=eb.call(this,b,c);d&&this.callback(this.manager,c,{pointers:d[0],changedPointers:d[1],pointerType:A,srcEvent:b})}}]),b}(Va),fb={mousedown:F,mousemove:G,mouseup:H},gb="mousedown",hb="mousemove mouseup",ib=function(a){function b(){ha(this,b);var a=la(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));return a.evEl=gb,a.evWin=hb,a.pressed=!1,a}return ka(b,a),ia(b,[{key:"handler",value:function(b){var c=fb[b.type];c&F&&0===b.button&&(this.pressed=!0),c&G&&1!==b.which&&(c=H),this.pressed&&(c&H&&(this.pressed=!1),this.callback(this.manager,c,{pointers:[b],changedPointers:[b],pointerType:C,srcEvent:b}))}}]),b}(Va),jb=2500,kb=25,lb=function(a){function b(){ha(this,b);var a=la(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments)),c=xa(a.handler,a);return a.touch=new db(a.manager,c),a.mouse=new ib(a.manager,c),a.primaryTouch=null,a.lastTouches=[],a}return ka(b,a),ia(b,[{key:"handler",value:function(b,c,d){var e=d.pointerType===A,f=d.pointerType===C;if(!(f&&d.sourceCapabilities&&d.sourceCapabilities.firesTouchEvents)){if(e)mb.call(this,c,d);else if(f&&ob.call(this,d))return;this.callback(b,c,d)}}},{key:"destroy",value:function(){this.touch.destroy(),this.mouse.destroy()}}]),b}(Va),qb=1,rb=2,sb=function(){function a(b,c){var d=this;ha(this,a),this.options=_({},vb.defaults,c||{}),this.options.inputTarget=this.options.inputTarget||b,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=b,this.input=pb(this),this.touchAction=new Ea(this,this.options.touchAction),tb(this,!0),ca(this.options.recognizers,function(a){var b=d.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}return ia(a,[{key:"set",value:function(b){return _(this.options,b),b.touchAction&&this.touchAction.update(),b.inputTarget&&(this.input.destroy(),this.input.target=b.inputTarget,this.input.init()),this}},{key:"stop",value:function(b){this.session.stopped=b?rb:qb}},{key:"recognize",value:function(b){var c=this.session;if(!c.stopped){this.touchAction.preventDefaults(b);var d=void 0,e=this.recognizers,f=c.curRecognizer;(!f||f&&f.state&X)&&(f=c.curRecognizer=null);for(var g=0;g<e.length;)d=e[g],c.stopped===rb||f&&d!==f&&!d.canRecognizeWith(f)?d.reset():d.recognize(b),!f&&d.state&(U|V|W)&&(f=c.curRecognizer=d),g++}}},{key:"get",value:function(b){if(b instanceof qa)return b;for(var c=this.recognizers,d=0;d<c.length;d++)if(c[d].options.event===b)return c[d];return null}},{key:"add",value:function(b){if(da(b,"add",this))return this;var c=this.get(b.options.event);return c&&this.remove(c),this.recognizers.push(b),b.manager=this,this.touchAction.update(),b}},{key:"remove",value:function(b){if(da(b,"remove",this))return this;if(b=this.get(b)){var c=this.recognizers,d=ea(c,b);d!==-1&&(c.splice(d,1),this.touchAction.update())}return this}},{key:"on",value:function(b,c){if(b!==d&&c!==d){var e=this.handlers;return ca(Ra(b),function(a){e[a]=e[a]||[],e[a].push(c)}),this}}},{key:"off",value:function(b,c){if(b!==d){var e=this.handlers;return ca(Ra(b),function(a){c?e[a]&&e[a].splice(ea(e[a],c),1):delete e[a]}),this}}},{key:"emit",value:function(b,c){this.options.domEvents&&ub(b,c);var d=this.handlers[b]&&this.handlers[b].slice();if(d&&d.length){c.type=b,c.preventDefault=function(){c.srcEvent.preventDefault()};for(var e=0;e<d.length;)d[e](c),e++}}},{key:"destroy",value:function(){this.element&&tb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}}]),a}(),vb=function a(b,c){return ha(this,a),c=c||{},c.recognizers=e(c.recognizers,a.defaults.preset),new sb(b,c)};vb.VERSION="2.0.8",vb.defaults={domEvents:!1,touchAction:p,enable:!0,inputTarget:null,inputClass:null,preset:[[sa,{enable:!1}],[ta,{enable:!1},["rotate"]],[wa,{direction:O}],[va,{direction:O},["swipe"]],[Aa],[Aa,{event:"doubletap",taps:2},["tap"]],[Ba]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var wb={touchstart:F,touchmove:G,touchend:H,touchcancel:I},xb="touchstart",yb="touchstart touchmove touchend touchcancel",zb=function(a){function b(){ha(this,b);var a=la(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));return a.evTarget=xb,a.evWin=yb,a.started=!1,Va.apply(a,arguments),a}return ka(b,a),ia(b,[{key:"handler",value:function(b){var c=wb[b.type];if(c===F&&(this.started=!0),this.started){var d=Ab.call(this,b,c);c&(H|I)&&d[0].length-d[1].length===0&&(this.started=!1),this.callback(this.manager,c,{pointers:d[0],changedPointers:d[1],pointerType:A,srcEvent:b})}}}]),b}(Va),Cb=Bb(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),Db=Bb(function(a,b){return Cb(a,b,!0)},"merge","Use `assign`.");_(vb,{INPUT_START:F,INPUT_MOVE:G,INPUT_END:H,INPUT_CANCEL:I,STATE_POSSIBLE:T,STATE_BEGAN:U,STATE_CHANGED:V,STATE_ENDED:W,STATE_RECOGNIZED:X,STATE_CANCELLED:Y,STATE_FAILED:Z,DIRECTION_NONE:J,DIRECTION_LEFT:K,DIRECTION_RIGHT:L,DIRECTION_UP:M,DIRECTION_DOWN:N,DIRECTION_HORIZONTAL:O,DIRECTION_VERTICAL:P,DIRECTION_ALL:Q,Manager:sb,Input:Va,TouchAction:Ea,TouchInput:db,MouseInput:ib,PointerEventInput:$a,TouchMouseInput:lb,SingleTouchInput:zb,Recognizer:qa,AttrRecognizer:ra,Tap:Aa,Pan:va,Swipe:wa,Pinch:ta,Rotate:sa,Press:Ba,on:Sa,off:Ta,each:ca,merge:Db,extend:Cb,assign:_,inherit:Eb,bindFn:xa,prefixed:l,toArray:_a,inArray:ea,uniqueArray:ab,splitStr:Ra,boolOrFn:na,hasParent:Fa,addEventListeners:Sa,removeEventListeners:Ta}),"function"==typeof define&&define.amd?define(function(){return vb}):"undefined"!=typeof module&&module.exports?module.exports=vb:a[c]=vb}(window,document,"Hammer");
