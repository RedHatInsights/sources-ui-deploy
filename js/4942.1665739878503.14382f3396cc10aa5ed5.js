/*! For license information please see 4942.1665739878503.14382f3396cc10aa5ed5.js.LICENSE.txt */
(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[4942],{11306:(e,t,n)=>{"use strict";n.d(t,{LZ:()=>u,Ws:()=>o,ZP:()=>s});var r=n(40400);const o={name:"ArrowRightIcon",height:512,width:448,svgPath:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",yOffset:0,xOffset:0},u=(0,r.IU)(o),s=u},27957:(e,t,n)=>{"use strict";n.d(t,{Xr:()=>o,ZP:()=>s,o1:()=>u});var r=n(40400);const o={name:"PlayIcon",height:512,width:448,svgPath:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z",yOffset:0,xOffset:0},u=(0,r.IU)(o),s=u},17558:(e,t,n)=>{"use strict";n.d(t,{Dv:()=>o,Kf:()=>u,wt:()=>s});var r="@@INSIGHTS-CORE/NOTIFICATIONS/",o="".concat(r,"ADD_NOTIFICATION"),u="".concat(r,"REMOVE_NOTIFICATION"),s="".concat(r,"CLEAR_NOTIFICATIONS")},21458:(e,t,n)=>{"use strict";n.d(t,{FV:()=>s,L1:()=>c,wN:()=>u});var r=n(17558),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},u=function(e){return{type:r.Dv,payload:o({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},s=function(e){return{type:r.Kf,payload:e}},c=function(){return{type:r.wt}}},27361:(e,t,n)=>{var r=n(97786);e.exports=function(e,t,n){var o=null==e?void 0:r(e,t);return void 0===o?n:o}},6526:(e,t,n)=>{"use strict";n.d(t,{E:()=>o});var r=n(92950);const o=n.n(r)().createContext(null)},50906:(e,t,n)=>{"use strict";function r(e,t){return(n,r)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`)}}n.d(t,{V:()=>r})},55112:(e,t,n)=>{"use strict";if(n.d(t,{W:()=>s}),3534!=n.j)var r=n(63480);if(3534!=n.j)var o=n(26343);if(3534!=n.j)var u=n(50906);function s(e){return e&&"object"==typeof e?(0,o.dX)((t=>(0,r.Z)(e,t))):e?"function"==typeof e?(0,o.xv)(e,"mapDispatchToProps"):(0,u.V)(e,"mapDispatchToProps"):(0,o.dX)((e=>({dispatch:e})))}},11743:(e,t,n)=>{"use strict";if(n.d(t,{R:()=>u}),3534!=n.j)var r=n(26343);if(3534!=n.j)var o=n(50906);function u(e){return e?"function"==typeof e?(0,r.xv)(e,"mapStateToProps"):(0,o.V)(e,"mapStateToProps"):(0,r.dX)((()=>({})))}},5532:(e,t,n)=>{"use strict";if(n.d(t,{eV:()=>s}),3534!=n.j)var r=n(87462);if(3534!=n.j)var o=n(50906);function u(e,t,n){return(0,r.Z)({},n,e,t)}function s(e){return e?"function"==typeof e?function(e){return function(t,{displayName:n,areMergedPropsEqual:r}){let o,u=!1;return function(t,n,s){const c=e(t,n,s);return u?r(c,o)||(o=c):(u=!0,o=c),o}}}(e):(0,o.V)(e,"mergeProps"):()=>u}},38548:(e,t,n)=>{"use strict";if(n.d(t,{Z:()=>s}),3534!=n.j)var r=n(63366);const o=3534!=n.j?["initMapStateToProps","initMapDispatchToProps","initMergeProps"]:null;function u(e,t,n,r,{areStatesEqual:o,areOwnPropsEqual:u,areStatePropsEqual:s}){let c,a,i,f,l,p=!1;return function(d,v){return p?function(p,d){const v=!u(d,a),m=!o(p,c);return c=p,a=d,v&&m?(i=e(c,a),t.dependsOnOwnProps&&(f=t(r,a)),l=n(i,f,a),l):v?(e.dependsOnOwnProps&&(i=e(c,a)),t.dependsOnOwnProps&&(f=t(r,a)),l=n(i,f,a),l):m?function(){const t=e(c,a),r=!s(t,i);return i=t,r&&(l=n(i,f,a)),l}():l}(d,v):(c=d,a=v,i=e(c,a),f=t(r,a),l=n(i,f,a),p=!0,l)}}function s(e,t){let{initMapStateToProps:n,initMapDispatchToProps:s,initMergeProps:c}=t,a=(0,r.Z)(t,o);return u(n(e,a),s(e,a),c(e,a),e,a)}},26343:(e,t,n)=>{"use strict";function r(e){return function(t){const n=e(t);function r(){return n}return r.dependsOnOwnProps=!1,r}}function o(e){return e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function u(e,t){return function(t,{displayName:n}){const r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e,void 0)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=o(e);let u=r(t,n);return"function"==typeof u&&(r.mapToProps=u,r.dependsOnOwnProps=o(u),u=r(t,n)),u},r}}n.d(t,{dX:()=>r,xv:()=>u})},5935:(e,t,n)=>{"use strict";n.d(t,{zt:()=>L.Z,$j:()=>Z,wU:()=>C.Z,I0:()=>k,v9:()=>m});var r=n(61688),o=n(52798),u=n(12181),s=n(9256),c=n(92950),a=n.n(c),i=n(6526);function f(){return(0,c.useContext)(i.E)}var l=n(76726);let p=l.B;const d=(e,t)=>e===t;function v(e=i.E){const t=e===i.E?f:()=>(0,c.useContext)(e);return function(e,n=d){const{store:r,subscription:o,getServerState:u}=t(),s=p(o.addNestedSub,r.getState,u||r.getState,e,n);return(0,c.useDebugValue)(s),s}}const m=v();if(3534!=n.j)var y=n(87462);if(3534!=n.j)var S=n(63366);var b=n(8679),h=n.n(b),w=n(72973);if(3534!=n.j)var O=n(38548);if(3534!=n.j)var g=n(55112);if(3534!=n.j)var E=n(11743);if(3534!=n.j)var P=n(5532);var x=n(86496),j=n(1881);if(3534!=n.j)var C=n(35067);const M=3534!=n.j?["reactReduxForwardedRef"]:null;let T=3534!=n.j?l.B:null;const N=3534!=n.j?[null,null]:null;function R(e,t,n,r,o,u){e.current=r,n.current=!1,o.current&&(o.current=null,u())}function I(e,t){return e===t}const Z=3534!=n.j?function(e,t,n,{pure:r,areStatesEqual:o=I,areOwnPropsEqual:u=C.Z,areStatePropsEqual:s=C.Z,areMergedPropsEqual:f=C.Z,forwardRef:l=!1,context:p=i.E}={}){const d=p,v=(0,E.R)(e),m=(0,g.W)(t),b=(0,P.eV)(n),Z=Boolean(e);return e=>{const t=e.displayName||e.name||"Component",n=`Connect(${t})`,r={shouldHandleStateChanges:Z,displayName:n,wrappedComponentName:t,WrappedComponent:e,initMapStateToProps:v,initMapDispatchToProps:m,initMergeProps:b,areStatesEqual:o,areStatePropsEqual:s,areOwnPropsEqual:u,areMergedPropsEqual:f};function i(t){const[n,o,u]=(0,c.useMemo)((()=>{const{reactReduxForwardedRef:e}=t,n=(0,S.Z)(t,M);return[t.context,e,n]}),[t]),s=(0,c.useMemo)((()=>n&&n.Consumer&&(0,w.isContextConsumer)(a().createElement(n.Consumer,null))?n:d),[n,d]),i=(0,c.useContext)(s),f=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch),l=Boolean(i)&&Boolean(i.store),p=f?t.store:i.store,v=l?i.getServerState:p.getState,m=(0,c.useMemo)((()=>(0,O.Z)(p.dispatch,r)),[p]),[b,h]=(0,c.useMemo)((()=>{if(!Z)return N;const e=(0,x.X)(p,f?void 0:i.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[p,f,i]),g=(0,c.useMemo)((()=>f?i:(0,y.Z)({},i,{subscription:b})),[f,i,b]),E=(0,c.useRef)(),P=(0,c.useRef)(u),C=(0,c.useRef)(),I=(0,c.useRef)(!1),L=((0,c.useRef)(!1),(0,c.useRef)(!1)),V=(0,c.useRef)();(0,j.L)((()=>(L.current=!0,()=>{L.current=!1})),[]);const D=(0,c.useMemo)((()=>()=>C.current&&u===P.current?C.current:m(p.getState(),u)),[p,u]),q=(0,c.useMemo)((()=>e=>b?function(e,t,n,r,o,u,s,c,a,i,f){if(!e)return()=>{};let l=!1,p=null;const d=()=>{if(l||!c.current)return;const e=t.getState();let n,d;try{n=r(e,o.current)}catch(e){d=e,p=e}d||(p=null),n===u.current?s.current||i():(u.current=n,a.current=n,s.current=!0,f())};return n.onStateChange=d,n.trySubscribe(),d(),()=>{if(l=!0,n.tryUnsubscribe(),n.onStateChange=null,p)throw p}}(Z,p,b,m,P,E,I,L,C,h,e):()=>{}),[b]);var k,B;let F;k=R,B=[P,E,I,u,C,h],(0,j.L)((()=>k(...B)),undefined);try{F=T(q,D,v?()=>m(v(),u):D)}catch(e){throw V.current&&(e.message+=`\nThe error may be correlated with this previous error:\n${V.current.stack}\n\n`),e}(0,j.L)((()=>{V.current=void 0,C.current=void 0,E.current=F}));const $=(0,c.useMemo)((()=>a().createElement(e,(0,y.Z)({},F,{ref:o}))),[o,e,F]);return(0,c.useMemo)((()=>Z?a().createElement(s.Provider,{value:g},$):$),[s,$,g])}const p=a().memo(i);if(p.WrappedComponent=e,p.displayName=i.displayName=n,l){const t=a().forwardRef((function(e,t){return a().createElement(p,(0,y.Z)({},e,{reactReduxForwardedRef:t}))}));return t.displayName=n,t.WrappedComponent=e,h()(t,e)}return h()(p,e)}}:null;var L=n(60682);function V(e=i.E){const t=e===i.E?f:()=>(0,c.useContext)(e);return function(){const{store:e}=t();return e}}const D=V();function q(e=i.E){const t=e===i.E?D:V(e);return function(){return t().dispatch}}const k=q();var B;3534==n.j&&(C=n(35067)),B=o.useSyncExternalStoreWithSelector,p=B,(e=>{T=e})(r.useSyncExternalStore),(0,s.F)(u.unstable_batchedUpdates)},86496:(e,t,n)=>{"use strict";if(n.d(t,{X:()=>u}),3534!=n.j)var r=n(9256);const o={notify(){},get:()=>[]};function u(e,t){let n,u=o;function s(){a.onStateChange&&a.onStateChange()}function c(){n||(n=t?t.addNestedSub(s):e.subscribe(s),u=function(){const e=(0,r.k)();let t=null,n=null;return{clear(){t=null,n=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}const a={addNestedSub:function(e){return c(),u.subscribe(e)},notifyNestedSubs:function(){u.notify()},handleChangeWrapper:s,isSubscribed:function(){return Boolean(n)},trySubscribe:c,tryUnsubscribe:function(){n&&(n(),n=void 0,u.clear(),u=o)},getListeners:()=>u};return a}},9256:(e,t,n)=>{"use strict";n.d(t,{F:()=>o,k:()=>u});let r=3534!=n.j?function(e){e()}:null;const o=e=>r=e,u=()=>r},63480:(e,t,n)=>{"use strict";function r(e,t){const n={};for(const r in e){const o=e[r];"function"==typeof o&&(n[r]=(...e)=>t(o(...e)))}return n}n.d(t,{Z:()=>r})},35067:(e,t,n)=>{"use strict";function r(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function o(e,t){if(r(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(let o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!r(e[n[o]],t[n[o]]))return!1;return!0}n.d(t,{Z:()=>o})},1881:(e,t,n)=>{"use strict";n.d(t,{L:()=>u});var r=n(92950);const o=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),u=3534!=n.j?o?r.useLayoutEffect:r.useEffect:null},76726:(e,t,n)=>{"use strict";n.d(t,{B:()=>r});const r=()=>{throw new Error("uSES not initialized!")}},88359:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),i=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy");Symbol.for("react.offscreen");Symbol.for("react.module.reference"),t.isContextConsumer=function(e){return function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case s:case u:case l:case p:return e;default:switch(e=e&&e.$$typeof){case i:case a:case f:case v:case d:case c:return e;default:return t}}case r:return t}}}(e)===a}},72973:(e,t,n)=>{"use strict";e.exports=n(88359)},53250:(e,t,n)=>{"use strict";var r=n(92950),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=r.useState,s=r.useEffect,c=r.useLayoutEffect,a=r.useDebugValue;function i(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=u({inst:{value:n,getSnapshot:t}}),o=r[0].inst,f=r[1];return c((function(){o.value=n,o.getSnapshot=t,i(o)&&f({inst:o})}),[e,n,t]),s((function(){return i(o)&&f({inst:o}),e((function(){i(o)&&f({inst:o})}))}),[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},50139:(e,t,n)=>{"use strict";var r=n(92950),o=n(61688),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=o.useSyncExternalStore,c=r.useRef,a=r.useEffect,i=r.useMemo,f=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var l=c(null);if(null===l.current){var p={hasValue:!1,value:null};l.current=p}else p=l.current;l=i((function(){function e(e){if(!a){if(a=!0,s=e,e=r(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return c=t}return c=e}if(t=c,u(s,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(s=e,c=n)}var s,c,a=!1,i=void 0===n?null:n;return[function(){return e(t())},null===i?void 0:function(){return e(i())}]}),[t,n,r,o]);var d=s(e,l[0],l[1]);return a((function(){p.hasValue=!0,p.value=d}),[d]),f(d),d}},61688:(e,t,n)=>{"use strict";e.exports=n(53250)},52798:(e,t,n)=>{"use strict";e.exports=n(50139)}}]);
//# sourceMappingURL=../sourcemaps/4942.abfa01658c19c850b01c1e3eaaa29f07.js.map