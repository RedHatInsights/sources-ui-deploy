"use strict";(self.webpackChunksources=self.webpackChunksources||[]).push([[68],{5068:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e){return null!==e&&"object"===n(e)&&e&&"function"==typeof e.then}r.r(t),r.d(t,{ActionType:()=>f,createPromise:()=>l,default:()=>p});var i=r(34155);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[f.Pending,f.Fulfilled,f.Rejected],r=e.promiseTypeSuffixes||t,n=void 0===e.promiseTypeDelimiter?"_":e.promiseTypeDelimiter;return function(e){var t=e.dispatch;return function(e){return function(i){var u,a;if(!i.payload)return e(i);var f=i.payload;if(o(f))u=f;else if(o(f.promise))u=f.promise,a=f.data;else{if("function"!=typeof f&&"function"!=typeof f.promise)return e(i);if(u=f.promise?f.promise():f(),a=f.promise?f.data:void 0,!o(u))return e(c({},i,{payload:u}))}var l,p,y=i.type,s=i.meta,b=(p=3,function(e){if(Array.isArray(e))return e}(l=r)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(l,p)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),d=b[0],m=b[1],v=b[2],h=function(e,t){return c({type:[y,t?v:m].join(n)},null==e?{}:{payload:e},{},void 0!==s?{meta:s}:{},{},t?{error:!0}:{})};return e(c({type:[y,d].join(n)},void 0!==a?{payload:a}:{},{},void 0!==s?{meta:s}:{})),u.then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=h(e,!1);return t(r),{value:e,action:r}}),(function(e){var r=h(e,!0);throw t(r),e}))}}}}function p(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).dispatch;return"function"==typeof e?l()({dispatch:e}):(i&&i.env,null)}}}]);
//# sourceMappingURL=../sourcemaps/68.52d556d3eb3e343789ef77382a000210.js.map