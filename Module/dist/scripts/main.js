!function e(n,t,r){function u(i,f){if(!t[i]){if(!n[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(o)return o(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[i]={exports:{}};n[i][0].call(l.exports,function(e){var t=n[i][1][e];return u(t?t:e)},l,l.exports,e,n,t,r)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)u(r[i]);return u}({1:[function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e){return new(function(){function n(){r(this,n)}return o(n,[{key:"init",value:function(){this.container.innerHTML="Test module"}},{key:"destroy",value:function(){this.container.innerHTML="",delete this.container}},{key:"container",get:function(){return e}}]),n}())}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();t["default"]=u},{}],2:[function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=e("./Module"),o=r(u),i=(0,o["default"])(document.getElementById("test"));i.init()},{"./Module":1}]},{},[2]);
//# sourceMappingURL=main.js.map
