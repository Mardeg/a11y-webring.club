!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e){e.exports=[{name:"Some site",uri:"https://something.com"},{name:"Some site",uri:"http://localhost:9000"},{name:"Bryan's site",uri:"https://somethingelse.com"}]},function(e,t,n){"use strict";const o=n(0);t.handler=function(e,t,n){const r=(e=>{const t=o.findIndex(function(t){return t.uri.includes(e)});return console.log(t),t})(e.headers.host),u=(e=>e===o.length-1)(r);console.log(u);const i=u?`${o[0].uri}`:`${o[r+1].uri}`;console.log(i),n(null,{statusCode:302,headers:{Location:i},body:`event is ${e}`})}}]));