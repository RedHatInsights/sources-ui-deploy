/*! For license information please see 4291.1645101967948.644f545e34141383b08b.js.LICENSE.txt */
"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[4291],{44291:(e,t,n)=>{n.r(t),n.d(t,{createFocusTrap:()=>g});var r,a=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=a.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,u=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},c=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},l=function(e){return"INPUT"===e.tagName},s=function(e,t){return!(t.disabled||function(e){return l(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=i.call(e,"details>summary:first-of-type")?e.parentElement:e;if(i.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var r=e.getBoundingClientRect(),a=r.width,o=r.height;return 0===a&&0===o}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(l(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},f=function(e,t){return!(!s(e,t)||function(e){return function(e){return l(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var a=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!a||a===e}(e)}(t)||u(t)<0)},d=a.concat("iframe").join(","),p=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==i.call(e,d)&&s(t,e)};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m,y=(m=[],{activateTrap:function(e){if(m.length>0){var t=m[m.length-1];t!==e&&t.pause()}var n=m.indexOf(e);-1===n||m.splice(n,1),m.push(e)},deactivateTrap:function(e){var t=m.indexOf(e);-1!==t&&m.splice(t,1),m.length>0&&m[m.length-1].unpause()}}),h=function(e){return setTimeout(e,0)},g=function(e,t){var n,a=document,l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),s={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},d=function(e){return s.containers.some((function(t){return t.contains(e)}))},m=function(e){var t=l[e];if(!t)return null;var n=t;if("string"==typeof t&&!(n=a.querySelector(t)))throw new Error("`".concat(e,"` refers to no known node"));if("function"==typeof t&&!(n=t()))throw new Error("`".concat(e,"` did not return a node"));return n},g=function(){var e;if(null!==m("initialFocus"))e=m("initialFocus");else if(d(a.activeElement))e=a.activeElement;else{var t=s.tabbableGroups[0];e=t&&t.firstTabbableNode||m("fallbackFocus")}if(!e)throw new Error("Your focus-trap needs to have at least one focusable element");return e},w=function(){if(s.tabbableGroups=s.containers.map((function(e){var t,n,r,a,l,s,d,p=(n=[],r=[],(a=e,l=(t=t||{}).includeContainer,s=f.bind(null,t),d=Array.prototype.slice.apply(a.querySelectorAll(o)),l&&i.call(a,o)&&d.unshift(a),d.filter(s)).forEach((function(e,t){var a=u(e);0===a?n.push(e):r.push({documentOrder:t,tabIndex:a,node:e})})),r.sort(c).map((function(e){return e.node})).concat(n));if(p.length>0)return{firstTabbableNode:p[0],lastTabbableNode:p[p.length-1]}})).filter((function(e){return!!e})),s.tabbableGroups.length<=0&&!m("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},E=function e(t){t!==a.activeElement&&(t&&t.focus?(t.focus({preventScroll:!!l.preventScroll}),s.mostRecentlyFocusedNode=t,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(t)&&t.select()):e(g()))},O=function(e){d(e.target)||(l.clickOutsideDeactivates?n.deactivate({returnFocus:l.returnFocusOnDeactivate&&!p(e.target)}):l.allowOutsideClick&&("boolean"==typeof l.allowOutsideClick?l.allowOutsideClick:l.allowOutsideClick(e))||e.preventDefault())},k=function(e){var t=d(e.target);t||e.target instanceof Document?t&&(s.mostRecentlyFocusedNode=e.target):(e.stopImmediatePropagation(),E(s.mostRecentlyFocusedNode||g()))},N=function(e){if(!1!==l.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void n.deactivate();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){w();var t=null;if(s.tabbableGroups.length>0)if(e.shiftKey){var n=s.tabbableGroups.findIndex((function(t){var n=t.firstTabbableNode;return e.target===n}));if(n>=0){var r=0===n?s.tabbableGroups.length-1:n-1;t=s.tabbableGroups[r].lastTabbableNode}}else{var a=s.tabbableGroups.findIndex((function(t){var n=t.lastTabbableNode;return e.target===n}));if(a>=0){var o=a===s.tabbableGroups.length-1?0:a+1;t=s.tabbableGroups[o].firstTabbableNode}}else t=m("fallbackFocus");t&&(e.preventDefault(),E(t))}(e)},S=function(e){l.clickOutsideDeactivates||d(e.target)||l.allowOutsideClick&&("boolean"==typeof l.allowOutsideClick?l.allowOutsideClick:l.allowOutsideClick(e))||(e.preventDefault(),e.stopImmediatePropagation())},C=function(){if(s.active)return y.activateTrap(n),r=l.delayInitialFocus?h((function(){E(g())})):E(g()),a.addEventListener("focusin",k,!0),a.addEventListener("mousedown",O,{capture:!0,passive:!1}),a.addEventListener("touchstart",O,{capture:!0,passive:!1}),a.addEventListener("click",S,{capture:!0,passive:!1}),a.addEventListener("keydown",N,{capture:!0,passive:!1}),n},D=function(){if(s.active)return a.removeEventListener("focusin",k,!0),a.removeEventListener("mousedown",O,!0),a.removeEventListener("touchstart",O,!0),a.removeEventListener("click",S,!0),a.removeEventListener("keydown",N,!0),n};return(n={activate:function(e){if(s.active)return this;w(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=a.activeElement;var t=e&&e.onActivate?e.onActivate:l.onActivate;return t&&t(),C(),this},deactivate:function(e){if(!s.active)return this;clearTimeout(r),D(),s.active=!1,s.paused=!1,y.deactivateTrap(n);var t=e&&void 0!==e.onDeactivate?e.onDeactivate:l.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:l.returnFocusOnDeactivate)&&h((function(){var e;E((e=s.nodeFocusedBeforeActivation,m("setReturnFocus")||e))})),this},pause:function(){return s.paused||!s.active||(s.paused=!0,D()),this},unpause:function(){return s.paused&&s.active?(s.paused=!1,w(),C(),this):this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return s.containers=t.map((function(e){return"string"==typeof e?a.querySelector(e):e})),s.active&&w(),this}}).updateContainerElements(e),n}}}]);
//# sourceMappingURL=../sourcemaps/4291.3ed568304b4ce0d50168546af5510928.js.map