!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("@emotion/native")},function(e,t){e.exports=require("native-base")},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),u=n.n(i),c=n(2),f="/Users/alechp/Code/capswan/monolith/.repositories/ui/mobile/components/Emotion/index.js";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){var e=v(["\n          border-radius: 10px;\n        "]);return l=function(){return e},e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(){var e=v(["\n  padding: 40px;\n"]);return y=function(){return e},e}function d(){var e=v(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 50px;\n"]);return d=function(){return e},e}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var _=u.a.View(d()),h=u.a.Text({color:"hotpink"}),j=u.a.Image(y()),O=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,b(t).call(this,e))}var n,u,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["Component"]),n=t,(u=[{key:"render",value:function(){var e=this;return o.a.createElement(_,{style:Object(i.css)(l()),__source:{fileName:f,lineNumber:28}},o.a.createElement(h,{style:{fontSize:45,fontWeight:"bold"},__source:{fileName:f,lineNumber:33}},"Emotion Primitives"),o.a.createElement(j,{source:{uri:"https://cdn.rawgit.com/emotion-js/emotion/master/emotion.png",height:150,width:150},__source:{fileName:f,lineNumber:36}}),o.a.createElement(c.Button,{primary:!0,onPress:function(){return e.props.history.push("/")},__source:{fileName:f,lineNumber:43}},o.a.createElement(c.Text,{__source:{fileName:f,lineNumber:44}},"Go to first page")))}}])&&s(n.prototype,u),a&&s(n,a),t}();n.d(t,"default",function(){return O})}]));
//# sourceMappingURL=components.js.map