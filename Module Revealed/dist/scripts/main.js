!function e(n,t,r){function u(i,f){if(!t[i]){if(!n[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(o)return o(i,!0);var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}var l=t[i]={exports:{}};n[i][0].call(l.exports,function(e){var t=n[i][1][e];return u(t?t:e)},l,l.exports,e,n,t,r)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)u(r[i]);return u}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){function n(e){i=e}function t(e){return 10>e?"0"+e:e}function r(e){return t(e.getHours())+":"+t(e.getMinutes())+":"+t(e.getSeconds())}function u(){i.innerHTML="Test Module: "+r(new Date)}function o(){i.innerHTML=""}var i=null;return{init:function(e){n(e),u()},destroy:function(){o()}}}()},{}],2:[function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var u=e("./ModuleRevealed"),o=r(u);o["default"].init(document.getElementById("test"))},{"./ModuleRevealed":1}]},{},[2]);
//# sourceMappingURL=main.js.map
