/*! For license information please see 3937.1650960039573.17f8010a9f0d26ec70be.js.LICENSE.txt */
(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[3937],{11306:(e,r,n)=>{"use strict";n.d(r,{LZ:()=>u,Ws:()=>o,ZP:()=>a});var t=n(40400);const o={name:"ArrowRightIcon",height:512,width:448,svgPath:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",yOffset:0,xOffset:0},u=(0,t.IU)(o),a=u},27957:(e,r,n)=>{"use strict";n.d(r,{Xr:()=>o,ZP:()=>a,o1:()=>u});var t=n(40400);const o={name:"PlayIcon",height:512,width:448,svgPath:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z",yOffset:0,xOffset:0},u=(0,t.IU)(o),a=u},17558:(e,r,n)=>{"use strict";n.d(r,{Dv:()=>o,Kf:()=>u,wt:()=>a});var t="@@INSIGHTS-CORE/NOTIFICATIONS/",o="".concat(t,"ADD_NOTIFICATION"),u="".concat(t,"REMOVE_NOTIFICATION"),a="".concat(t,"CLEAR_NOTIFICATIONS")},21458:(e,r,n)=>{"use strict";n.d(r,{FV:()=>u,L1:()=>a,wN:()=>o});var t=n(17558),o=function(e){return{type:t.Dv,payload:e}},u=function(e){return{type:t.Kf,payload:e}},a=function(){return{type:t.wt}}},27361:(e,r,n)=>{var t=n(97786);e.exports=function(e,r,n){var o=null==e?void 0:t(e,r);return void 0===o?n:o}},6526:(e,r,n)=>{"use strict";n.d(r,{E:()=>o});var t=n(92950),o=n.n(t)().createContext(null)},38548:(e,r,n)=>{"use strict";if(n.d(r,{ZP:()=>c}),3534!=n.j)var t=n(63366);var o=3534!=n.j?["initMapStateToProps","initMapDispatchToProps","initMergeProps"]:null;function u(e,r,n,t){return function(o,u){return n(e(o,u),r(t,u),u)}}function a(e,r,n,t,o){var u,a,c,i,s,f=o.areStatesEqual,p=o.areOwnPropsEqual,d=o.areStatePropsEqual,l=!1;return function(o,v){return l?function(o,l){var v,m,y=!p(l,a),h=!f(o,u);return u=o,a=l,y&&h?(c=e(u,a),r.dependsOnOwnProps&&(i=r(t,a)),s=n(c,i,a)):y?(e.dependsOnOwnProps&&(c=e(u,a)),r.dependsOnOwnProps&&(i=r(t,a)),s=n(c,i,a)):h?(v=e(u,a),m=!d(v,c),c=v,m&&(s=n(c,i,a)),s):s}(o,v):(c=e(u=o,a=v),i=r(t,a),s=n(c,i,a),l=!0,s)}}function c(e,r){var n=r.initMapStateToProps,c=r.initMapDispatchToProps,i=r.initMergeProps,s=(0,t.Z)(r,o),f=n(e,s),p=c(e,s),d=i(e,s);return(s.pure?a:u)(f,p,d,e,s)}},42396:(e,r,n)=>{"use strict";n.d(r,{zt:()=>t.Z,$j:()=>D,wU:()=>S.Z,I0:()=>J,v9:()=>ee});var t=n(60682);if(3534!=n.j)var o=n(87462);if(3534!=n.j)var u=n(63366);var a=n(8679),c=n.n(a),i=n(92950),s=n.n(i),f=n(72973),p=n(86496),d=n(1881),l=n(6526),v=3534!=n.j?["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]:null,m=3534!=n.j?["reactReduxForwardedRef"]:null,y=3534!=n.j?[]:null,h=3534!=n.j?[null,null]:null;function P(e,r){var n=e[1];return[r.payload,n+1]}function w(e,r,n){(0,d.L)((function(){return e.apply(void 0,r)}),n)}function b(e,r,n,t,o,u,a){e.current=t,r.current=o,n.current=!1,u.current&&(u.current=null,a())}function g(e,r,n,t,o,u,a,c,i,s){if(e){var f=!1,p=null,d=function(){if(!f){var e,n,d=r.getState();try{e=t(d,o.current)}catch(e){n=e,p=e}n||(p=null),e===u.current?a.current||i():(u.current=e,c.current=e,a.current=!0,s({type:"STORE_UPDATED",payload:{error:n}}))}};return n.onStateChange=d,n.trySubscribe(),d(),function(){if(f=!0,n.tryUnsubscribe(),n.onStateChange=null,p)throw p}}}var O=function(){return[null,0]};if(3534!=n.j)var S=n(35067);function C(e){return function(r,n){var t=e(r,n);function o(){return t}return o.dependsOnOwnProps=!1,o}}function E(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function N(e,r){return function(r,n){n.displayName;var t=function(e,r){return t.dependsOnOwnProps?t.mapToProps(e,r):t.mapToProps(e)};return t.dependsOnOwnProps=!0,t.mapToProps=function(r,n){t.mapToProps=e,t.dependsOnOwnProps=E(e);var o=t(r,n);return"function"==typeof o&&(t.mapToProps=o,t.dependsOnOwnProps=E(o),o=t(r,n)),o},t}}const x=[function(e){return"function"==typeof e?N(e):void 0},function(e){return e?void 0:C((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?C((function(r){return function(e,r){var n={},t=function(t){var o=e[t];"function"==typeof o&&(n[t]=function(){return r(o.apply(void 0,arguments))})};for(var o in e)t(o);return n}(e,r)})):void 0}],T=[function(e){return"function"==typeof e?N(e):void 0},function(e){return e?void 0:C((function(){return{}}))}];function R(e,r,n){return(0,o.Z)({},n,e,r)}3534==n.j&&(o=n(87462));const M=[function(e){return"function"==typeof e?function(e){return function(r,n){n.displayName;var t,o=n.pure,u=n.areMergedPropsEqual,a=!1;return function(r,n,c){var i=e(r,n,c);return a?o&&u(i,t)||(t=i):(a=!0,t=i),t}}}(e):void 0},function(e){return e?void 0:function(){return R}}];if(3534!=n.j)var j=n(38548);var Z=3534!=n.j?["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]:null;function I(e,r,n){for(var t=r.length-1;t>=0;t--){var o=r[t](e);if(o)return o}return function(r,t){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+t.wrappedComponentName+".")}}function q(e,r){return e===r}const D=3534!=n.j?(L=(F={}).connectHOC,k=void 0===L?function(e,r){void 0===r&&(r={});var n=r,t=n.getDisplayName,a=void 0===t?function(e){return"ConnectAdvanced("+e+")"}:t,d=n.methodName,S=void 0===d?"connectAdvanced":d,C=n.renderCountProp,E=void 0===C?void 0:C,N=n.shouldHandleStateChanges,x=void 0===N||N,T=n.storeKey,R=void 0===T?"store":T,M=(n.withRef,n.forwardRef),j=void 0!==M&&M,Z=n.context,I=void 0===Z?l.E:Z,q=(0,u.Z)(n,v),D=I;return function(r){var n=r.displayName||r.name||"Component",t=a(n),d=(0,o.Z)({},q,{getDisplayName:a,methodName:S,renderCountProp:E,shouldHandleStateChanges:x,storeKey:R,displayName:t,wrappedComponentName:n,WrappedComponent:r}),l=q.pure,v=l?i.useMemo:function(e){return e()};function C(n){var t=(0,i.useMemo)((function(){var e=n.reactReduxForwardedRef,r=(0,u.Z)(n,m);return[n.context,e,r]}),[n]),a=t[0],c=t[1],l=t[2],S=(0,i.useMemo)((function(){return a&&a.Consumer&&(0,f.isContextConsumer)(s().createElement(a.Consumer,null))?a:D}),[a,D]),C=(0,i.useContext)(S),E=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch);Boolean(C)&&Boolean(C.store);var N=E?n.store:C.store,T=(0,i.useMemo)((function(){return function(r){return e(r.dispatch,d)}(N)}),[N]),R=(0,i.useMemo)((function(){if(!x)return h;var e=(0,p.X)(N,E?null:C.subscription),r=e.notifyNestedSubs.bind(e);return[e,r]}),[N,E,C]),M=R[0],j=R[1],Z=(0,i.useMemo)((function(){return E?C:(0,o.Z)({},C,{subscription:M})}),[E,C,M]),I=(0,i.useReducer)(P,y,O),q=I[0][0],F=I[1];if(q&&q.error)throw q.error;var L=(0,i.useRef)(),k=(0,i.useRef)(l),_=(0,i.useRef)(),A=(0,i.useRef)(!1),B=v((function(){return _.current&&l===k.current?_.current:T(N.getState(),l)}),[N,q,l]);w(b,[k,L,A,l,B,_,j]),w(g,[x,N,M,T,k,L,A,_,j,F],[N,M,T]);var U=(0,i.useMemo)((function(){return s().createElement(r,(0,o.Z)({},B,{ref:c}))}),[c,r,B]);return(0,i.useMemo)((function(){return x?s().createElement(S.Provider,{value:Z},U):U}),[S,U,Z])}var N=l?s().memo(C):C;if(N.WrappedComponent=r,N.displayName=C.displayName=t,j){var T=s().forwardRef((function(e,r){return s().createElement(N,(0,o.Z)({},e,{reactReduxForwardedRef:r}))}));return T.displayName=t,T.WrappedComponent=r,c()(T,r)}return c()(N,r)}}:L,A=void 0===(_=F.mapStateToPropsFactories)?T:_,U=void 0===(B=F.mapDispatchToPropsFactories)?x:B,K=void 0===(H=F.mergePropsFactories)?M:H,$=void 0===(W=F.selectorFactory)?j.ZP:W,function(e,r,n,t){void 0===t&&(t={});var a=t,c=a.pure,i=void 0===c||c,s=a.areStatesEqual,f=void 0===s?q:s,p=a.areOwnPropsEqual,d=void 0===p?S.Z:p,l=a.areStatePropsEqual,v=void 0===l?S.Z:l,m=a.areMergedPropsEqual,y=void 0===m?S.Z:m,h=(0,u.Z)(a,Z),P=I(e,A,"mapStateToProps"),w=I(r,U,"mapDispatchToProps"),b=I(n,K,"mergeProps");return k($,(0,o.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:P,initMapDispatchToProps:w,initMergeProps:b,pure:i,areStatesEqual:f,areOwnPropsEqual:d,areStatePropsEqual:v,areMergedPropsEqual:y},h))}):null;var F,L,k,_,A,B,U,H,K,W,$;function z(){return(0,i.useContext)(l.E)}function V(e){void 0===e&&(e=l.E);var r=e===l.E?z:function(){return(0,i.useContext)(e)};return function(){return r().store}}var X=V();function G(e){void 0===e&&(e=l.E);var r=e===l.E?X:V(e);return function(){return r().dispatch}}var J=G(),Q=function(e,r){return e===r};function Y(e){void 0===e&&(e=l.E);var r=e===l.E?z:function(){return(0,i.useContext)(e)};return function(e,n){void 0===n&&(n=Q);var t=r(),o=function(e,r,n,t){var o,u=(0,i.useReducer)((function(e){return e+1}),0)[1],a=(0,i.useMemo)((function(){return(0,p.X)(n,t)}),[n,t]),c=(0,i.useRef)(),s=(0,i.useRef)(),f=(0,i.useRef)(),l=(0,i.useRef)(),v=n.getState();try{if(e!==s.current||v!==f.current||c.current){var m=e(v);o=void 0!==l.current&&r(m,l.current)?l.current:m}else o=l.current}catch(e){throw c.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+c.current.stack+"\n\n"),e}return(0,d.L)((function(){s.current=e,f.current=v,l.current=o,c.current=void 0})),(0,d.L)((function(){function e(){try{var e=n.getState();if(e===f.current)return;var t=s.current(e);if(r(t,l.current))return;l.current=t,f.current=e}catch(e){c.current=e}u()}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}}),[n,a]),o}(e,n,t.store,t.subscription);return(0,i.useDebugValue)(o),o}}var ee=Y();3534==n.j&&(S=n(35067));var re=n(12181);(0,n(9256).F)(re.unstable_batchedUpdates)},86496:(e,r,n)=>{"use strict";n.d(r,{X:()=>u});var t=n(9256),o={notify:function(){},get:function(){return[]}};function u(e,r){var n,u=o;function a(){i.onStateChange&&i.onStateChange()}function c(){var o,c,i;n||(n=r?r.addNestedSub(a):e.subscribe(a),o=(0,t.k)(),c=null,i=null,u={clear:function(){c=null,i=null},notify:function(){o((function(){for(var e=c;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=c;r;)e.push(r),r=r.next;return e},subscribe:function(e){var r=!0,n=i={callback:e,next:null,prev:i};return n.prev?n.prev.next=n:c=n,function(){r&&null!==c&&(r=!1,n.next?n.next.prev=n.prev:i=n.prev,n.prev?n.prev.next=n.next:c=n.next)}}})}var i={addNestedSub:function(e){return c(),u.subscribe(e)},notifyNestedSubs:function(){u.notify()},handleChangeWrapper:a,isSubscribed:function(){return Boolean(n)},trySubscribe:c,tryUnsubscribe:function(){n&&(n(),n=void 0,u.clear(),u=o)},getListeners:function(){return u}};return i}},9256:(e,r,n)=>{"use strict";n.d(r,{F:()=>o,k:()=>u});var t=function(e){e()},o=function(e){return t=e},u=function(){return t}},35067:(e,r,n)=>{"use strict";function t(e,r){return e===r?0!==e||0!==r||1/e==1/r:e!=e&&r!=r}function o(e,r){if(t(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(var u=0;u<n.length;u++)if(!Object.prototype.hasOwnProperty.call(r,n[u])||!t(e[n[u]],r[n[u]]))return!1;return!0}n.d(r,{Z:()=>o})},1881:(e,r,n)=>{"use strict";n.d(r,{L:()=>o});var t=n(92950),o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?t.useLayoutEffect:t.useEffect},88359:(e,r)=>{"use strict";var n=60103,t=60106,o=60107,u=60108,a=60114,c=60109,i=60110,s=60112,f=60113,p=60120,d=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var v=Symbol.for;n=v("react.element"),t=v("react.portal"),o=v("react.fragment"),u=v("react.strict_mode"),a=v("react.profiler"),c=v("react.provider"),i=v("react.context"),s=v("react.forward_ref"),f=v("react.suspense"),p=v("react.suspense_list"),d=v("react.memo"),l=v("react.lazy"),v("react.block"),v("react.server.block"),v("react.fundamental"),v("react.debug_trace_mode"),v("react.legacy_hidden")}r.isContextConsumer=function(e){return function(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:switch(e=e.type){case o:case a:case u:case f:case p:return e;default:switch(e=e&&e.$$typeof){case i:case s:case l:case d:case c:return e;default:return r}}case t:return r}}}(e)===i}},72973:(e,r,n)=>{"use strict";e.exports=n(88359)}}]);
//# sourceMappingURL=../sourcemaps/3937.56d10c179cc3fefe666ba780cf6dc5b0.js.map