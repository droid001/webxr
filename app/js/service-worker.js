!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}({4:function(e,t,n){e.exports=n(5)},5:function(e,t,n){"use strict";var s="v0.9::",o=["assets/css/app.css","assets/js/app.js","assets/css/lib-aframe.css","assets/css/vendors.css","assets/js/lib-aframe.js","assets/js/vendors.js","assets/pwa/browserconfig.xml","assets/pwa/manifest.json","assets/pwa/manifest.webapp","assets/pwa/offline.css","assets/pwa/offline.js"];self.addEventListener("install",function(e){console.log("WORKER: install event in progress."),e.waitUntil(caches.open("".concat(s,"fundamentals")).then(function(e){return e.addAll(o)}).then(function(){console.log("WORKER: install completed")}))}),self.addEventListener("fetch",function(e){console.log("WORKER: fetch event in progress."),"GET"===e.request.method?e.respondWith(caches.match(e.request).then(function(t){var n=fetch(e.request).then(function(t){var n=t.clone();return console.log("WORKER: fetch response from network.",e.request.url),caches.open("".concat(s,"pages")).then(function(t){t.put(e.request,n)}).then(function(){console.log("WORKER: fetch response stored in cache.",e.request.url)}),t},o).catch(o);return console.log("WORKER: fetch event",t?"(cached)":"(network)",e.request.url),t||n;function o(){return console.log("SW: fetch request failed in both cache and network."),new Response("<h1>Service Unavailable</h1>",{status:503,statusText:"Service Unavailable",headers:new Headers({"Content-Type":"text/html"})})}})):console.log("WORKER: fetch event ignored.",e.request.method,e.request.url)})}});