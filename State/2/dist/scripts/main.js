!function e(t,n,r){function o(a,i){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!i&&l)return l(a,!0);if(u)return u(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var u="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./states/NoQuarterState"),i=r(a),l=e("./states/HasQuarterState"),s=r(l),c=e("./states/SoldOutState"),f=r(c),h=e("./states/SoldState"),b=r(h),y=e("./states/WinnerState"),p=r(y),g=function(){function e(){o(this,e),this.state=new i["default"](this),this.gumballs=10}return u(e,[{key:"insertQuarter",value:function(){this.state.insertQuarter()}},{key:"ejectQuarter",value:function(){this.state.ejectQuarter()}},{key:"turnCrank",value:function(){this.state.turnCrank()}},{key:"dispense",value:function(){this.state.dispense()}},{key:"getCount",value:function(){return this.gumballs}},{key:"releaseBall",value:function(){this.state.releaseBall()}},{key:"setState",value:function(e){this.state=e}},{key:"getNoQuarterState",value:function(){return new i["default"](this)}},{key:"getHasQuarterState",value:function(){return new s["default"](this)}},{key:"getSoldOutState",value:function(){return new f["default"](this)}},{key:"getSoldState",value:function(){return new b["default"](this)}},{key:"getWinnerState",value:function(){return new p["default"](this)}}]),e}();n["default"]=g},{"./states/HasQuarterState":3,"./states/NoQuarterState":4,"./states/SoldOutState":5,"./states/SoldState":6,"./states/WinnerState":8}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("./GumballMachine"),u=r(o),a=new u["default"];$("#insert_quarter_button").click(function(){a.insertQuarter()}),$("#release_quarter_button").click(function(){a.ejectQuarter()}),$("#turn_crank_button").click(function(){a.turnCrank(),a.dispense()})},{"./GumballMachine":1}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("./State"),s=r(l),c=function(e){function t(e){o(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.randomWinner=Math.random(),n}return a(t,e),i(t,[{key:"insertQuarter",value:function(){console.log("You can not insert another quarter!")}},{key:"ejectQuarter",value:function(){console.log("Quarter returned!"),this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())}},{key:"turnCrank",value:function(){console.log("You turned..."),this.randomWinner<.2?(console.log("Winner state"),this.gumballMachine.setState(this.gumballMachine.getWinnerState())):(console.log("Sold state"),this.gumballMachine.setState(this.gumballMachine.getSoldState()))}},{key:"dispense",value:function(){console.log("No gumball dispensed!")}}]),t}(s["default"]);n["default"]=c},{"./State":7}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("./State"),s=r(l),c=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"insertQuarter",value:function(){console.log("You inserted a quarter!"),this.gumballMachine.setState(this.gumballMachine.getHasQuarterState())}},{key:"ejectQuarter",value:function(){console.log("You haven't inserted a quarter!")}},{key:"turnCrank",value:function(){console.log("You turned, but there is no quarter")}},{key:"dispense",value:function(){console.log("You must to pay first!")}}]),t}(s["default"]);n["default"]=c},{"./State":7}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("./State"),s=r(l),c=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"insertQuarter",value:function(){console.log("You inserted a quarter!"),this.gumballMachine.setState(this.gumballMachine.getHasQuarterState())}},{key:"ejectQuarter",value:function(){console.log("You haven't inserted a quarter!")}},{key:"turnCrank",value:function(){console.log("You turned, but there is no quarter")}},{key:"dispense",value:function(){console.log("You must to pay first!")}}]),t}(s["default"]);n["default"]=c},{"./State":7}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("./State"),s=r(l),c=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"insertQuarter",value:function(){console.log("Please wait, we're already giving you a gumball!")}},{key:"ejectQuarter",value:function(){console.log("Sorry, you already turned the crank!")}},{key:"turnCrank",value:function(){console.log("Turning twice doesn't get you another gumball!")}},{key:"releaseBall",value:function(){console.log("Gum is being released."),this.gumballMachine.gumballs--}},{key:"dispense",value:function(){this.gumballMachine.getCount()>0?(this.gumballMachine.releaseBall(),this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())):(console.log("Oops!, out of gumballs!"),this.gumballMachine.setState(this.gumballMachine.getSoldOutState()))}}]),t}(s["default"]);n["default"]=c},{"./State":7}],7:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(t){r(this,e),this.gumballMachine=t}return o(e,[{key:"insertQuarter",value:function(){throw new Error("This method must be overwritten!")}},{key:"releaseBall",value:function(){throw new Error("This method must be overwritten!")}},{key:"ejectQuarter",value:function(){throw new Error("This method must be overwritten!")}},{key:"turnCrank",value:function(){throw new Error("This method must be overwritten!")}},{key:"dispense",value:function(){throw new Error("This method must be overwritten!")}}]),e}();n["default"]=u},{}],8:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("./State"),s=r(l),c=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"insertQuarter",value:function(){console.log("Please wait, we're already giving you a gumball!")}},{key:"ejectQuarter",value:function(){console.log("Sorry, you already turned the crank!")}},{key:"turnCrank",value:function(){console.log("Turning twice doesn't get you another gumball!")}},{key:"releaseBall",value:function(){console.log("Gum is being released."),this.gumballMachine.gumballs--}},{key:"dispense",value:function(){console.log("You're a Winner! You get two gumball for your quarter!"),this.gumballMachine.getCount()>0?(this.gumballMachine.releaseBall(),this.gumballMachine.releaseBall(),this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())):(console.log("Oops!, out of gumballs!"),this.gumballMachine.setState(this.gumballMachine.getSoldOutState()))}}]),t}(s["default"]);n["default"]=c},{"./State":7}]},{},[2]);
//# sourceMappingURL=main.js.map
