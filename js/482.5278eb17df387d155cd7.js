(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[482],{86482:(i,t,a)=>{"use strict";a.d(t,{Z:()=>e});var n=a(85061);const e=function(i){var t,a,e,u=(null===(t=i.applications)||void 0===t?void 0:t.filter(Boolean).map((function(i){return i.availability_status||"timeout"})))||[],l=(null===(a=i.endpoint)||void 0===a?void 0:a.filter(Boolean).map((function(i){return i.availability_status||"timeout"})))||[],o=(null===(e=i.authentications)||void 0===e?void 0:e.filter(Boolean).map((function(i){return i.availability_status||"timeout"})))||[],s=[].concat((0,n.Z)(u),(0,n.Z)(l),(0,n.Z)(o));return s.includes("unavailable")?"unavailable":s.length>0&&s.every((function(i){return"available"===i}))?"available":s.includes("timeout")?"timeout":"finished"}}}]);
//# sourceMappingURL=../sourcemaps/482.600b243ac29ee7cbb020.js.map