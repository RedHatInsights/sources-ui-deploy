/*! For license information please see 3840.64c5212c1277c237bc0c.js.LICENSE.txt */
(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[3840],{60053:(e,n)=>{"use strict";var t,r,a,o;if("object"==typeof performance&&"function"==typeof performance.now){var l=performance;n.unstable_now=function(){return l.now()}}else{var i=Date,u=i.now();n.unstable_now=function(){return i.now()-u}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var s=null,c=null,f=function(){if(null!==s)try{var e=n.unstable_now();s(!0,e),s=null}catch(e){throw setTimeout(f,0),e}};t=function(e){null!==s?setTimeout(t,0,e):(s=e,setTimeout(f,0))},r=function(e,n){c=setTimeout(e,n)},a=function(){clearTimeout(c)},n.unstable_shouldYield=function(){return!1},o=n.unstable_forceFrameRate=function(){}}else{var b=window.setTimeout,p=window.clearTimeout;if("undefined"!=typeof console){var d=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof d&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var v=!1,y=null,w=-1,m=5,h=0;n.unstable_shouldYield=function(){return n.unstable_now()>=h},o=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<e?Math.floor(1e3/e):5};var _=new MessageChannel,k=_.port2;_.port1.onmessage=function(){if(null!==y){var e=n.unstable_now();h=e+m;try{y(!0,e)?k.postMessage(null):(v=!1,y=null)}catch(e){throw k.postMessage(null),e}}else v=!1},t=function(e){y=e,v||(v=!0,k.postMessage(null))},r=function(e,t){w=b((function(){e(n.unstable_now())}),t)},a=function(){p(w),w=-1}}function T(e,n){var t=e.length;e.push(n);e:for(;;){var r=t-1>>>1,a=e[r];if(!(void 0!==a&&0<C(a,n)))break e;e[r]=n,e[t]=a,t=r}}function g(e){return void 0===(e=e[0])?null:e}function x(e){var n=e[0];if(void 0!==n){var t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,a=e.length;r<a;){var o=2*(r+1)-1,l=e[o],i=o+1,u=e[i];if(void 0!==l&&0>C(l,t))void 0!==u&&0>C(u,l)?(e[r]=u,e[i]=t,r=i):(e[r]=l,e[o]=t,r=o);else{if(!(void 0!==u&&0>C(u,t)))break e;e[r]=u,e[i]=t,r=i}}}return n}return null}function C(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}var P=[],F=[],I=1,M=null,j=3,A=!1,L=!1,q=!1;function R(e){for(var n=g(F);null!==n;){if(null===n.callback)x(F);else{if(!(n.startTime<=e))break;x(F),n.sortIndex=n.expirationTime,T(P,n)}n=g(F)}}function Y(e){if(q=!1,R(e),!L)if(null!==g(P))L=!0,t(E);else{var n=g(F);null!==n&&r(Y,n.startTime-e)}}function E(e,t){L=!1,q&&(q=!1,a()),A=!0;var o=j;try{for(R(t),M=g(P);null!==M&&(!(M.expirationTime>t)||e&&!n.unstable_shouldYield());){var l=M.callback;if("function"==typeof l){M.callback=null,j=M.priorityLevel;var i=l(M.expirationTime<=t);t=n.unstable_now(),"function"==typeof i?M.callback=i:M===g(P)&&x(P),R(t)}else x(P);M=g(P)}if(null!==M)var u=!0;else{var s=g(F);null!==s&&r(Y,s.startTime-t),u=!1}return u}finally{M=null,j=o,A=!1}}var N=o;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){L||A||(L=!0,t(E))},n.unstable_getCurrentPriorityLevel=function(){return j},n.unstable_getFirstCallbackNode=function(){return g(P)},n.unstable_next=function(e){switch(j){case 1:case 2:case 3:var n=3;break;default:n=j}var t=j;j=n;try{return e()}finally{j=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=N,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=j;j=e;try{return n()}finally{j=t}},n.unstable_scheduleCallback=function(e,o,l){var i=n.unstable_now();switch(l="object"==typeof l&&null!==l&&"number"==typeof(l=l.delay)&&0<l?i+l:i,e){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return e={id:I++,callback:o,priorityLevel:e,startTime:l,expirationTime:u=l+u,sortIndex:-1},l>i?(e.sortIndex=l,T(F,e),null===g(P)&&e===g(F)&&(q?a():q=!0,r(Y,l-i))):(e.sortIndex=u,T(P,e),L||A||(L=!0,t(E))),e},n.unstable_wrapCallback=function(e){var n=j;return function(){var t=j;j=n;try{return e.apply(this,arguments)}finally{j=t}}}},63840:(e,n,t)=>{"use strict";e.exports=t(60053)}}]);
//# sourceMappingURL=../sourcemaps/3840.ddec5484350cdb1d065d.js.map