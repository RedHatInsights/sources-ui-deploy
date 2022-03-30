/*! For license information please see 247.1648652113479.ee22029d5986efa6aa69.js.LICENSE.txt */
(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[247],{27957:(e,r,n)=>{"use strict";n.d(r,{Xr:()=>o,ZP:()=>a,o1:()=>u});var t=n(40400);const o={name:"PlayIcon",height:512,width:448,svgPath:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z",yOffset:0,xOffset:0},u=(0,t.IU)(o),a=u},17558:(e,r,n)=>{"use strict";n.d(r,{Dv:()=>o,Kf:()=>u,wt:()=>a});var t="@@INSIGHTS-CORE/NOTIFICATIONS/",o="".concat(t,"ADD_NOTIFICATION"),u="".concat(t,"REMOVE_NOTIFICATION"),a="".concat(t,"CLEAR_NOTIFICATIONS")},21458:(e,r,n)=>{"use strict";n.d(r,{FV:()=>u,L1:()=>a,wN:()=>o});var t=n(17558),o=function(e){return{type:t.Dv,payload:e}},u=function(e){return{type:t.Kf,payload:e}},a=function(){return{type:t.wt}}},29932:e=>{e.exports=function(e,r){for(var n=-1,t=null==e?0:e.length,o=Array(t);++n<t;)o[n]=r(e[n],n,e);return o}},97786:(e,r,n)=>{var t=n(71811),o=n(40327);e.exports=function(e,r){for(var n=0,u=(r=t(r,e)).length;null!=e&&n<u;)e=e[o(r[n++])];return n&&n==u?e:void 0}},80531:(e,r,n)=>{var t=n(62705),o=n(29932),u=n(1469),a=n(33448),c=t?t.prototype:void 0,i=c?c.toString:void 0;e.exports=function e(r){if("string"==typeof r)return r;if(u(r))return o(r,e)+"";if(a(r))return i?i.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n}},71811:(e,r,n)=>{var t=n(1469),o=n(15403),u=n(55514),a=n(79833);e.exports=function(e,r){return t(e)?e:o(e,r)?[e]:u(a(e))}},15403:(e,r,n)=>{var t=n(1469),o=n(33448),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,r){if(t(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||a.test(e)||!u.test(e)||null!=r&&e in Object(r)}},24523:(e,r,n)=>{var t=n(88306);e.exports=function(e){var r=t(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r}},55514:(e,r,n)=>{var t=n(24523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u=/\\(\\)?/g,a=t((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(o,(function(e,n,t,o){r.push(t?o.replace(u,"$1"):n||e)})),r}));e.exports=a},40327:(e,r,n)=>{var t=n(33448);e.exports=function(e){if("string"==typeof e||t(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},27361:(e,r,n)=>{var t=n(97786);e.exports=function(e,r,n){var o=null==e?void 0:t(e,r);return void 0===o?n:o}},33448:(e,r,n)=>{var t=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==t(e)}},88306:(e,r,n)=>{var t=n(83369);function o(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],u=n.cache;if(u.has(o))return u.get(o);var a=e.apply(this,t);return n.cache=u.set(o,a)||u,a};return n.cache=new(o.Cache||t),n}o.Cache=t,e.exports=o},79833:(e,r,n)=>{var t=n(80531);e.exports=function(e){return null==e?"":t(e)}},6526:(e,r,n)=>{"use strict";n.d(r,{E:()=>o});var t=n(96985),o=n.n(t)().createContext(null)},38548:(e,r,n)=>{"use strict";if(n.d(r,{ZP:()=>c}),534!=n.j)var t=n(63366);var o=534!=n.j?["initMapStateToProps","initMapDispatchToProps","initMergeProps"]:null;function u(e,r,n,t){return function(o,u){return n(e(o,u),r(t,u),u)}}function a(e,r,n,t,o){var u,a,c,i,s,f=o.areStatesEqual,p=o.areOwnPropsEqual,l=o.areStatePropsEqual,d=!1;return function(o,v){return d?function(o,d){var v,y,m=!p(d,a),h=!f(o,u);return u=o,a=d,m&&h?(c=e(u,a),r.dependsOnOwnProps&&(i=r(t,a)),s=n(c,i,a)):m?(e.dependsOnOwnProps&&(c=e(u,a)),r.dependsOnOwnProps&&(i=r(t,a)),s=n(c,i,a)):h?(v=e(u,a),y=!l(v,c),c=v,y&&(s=n(c,i,a)),s):s}(o,v):(c=e(u=o,a=v),i=r(t,a),s=n(c,i,a),d=!0,s)}}function c(e,r){var n=r.initMapStateToProps,c=r.initMapDispatchToProps,i=r.initMergeProps,s=(0,t.Z)(r,o),f=n(e,s),p=c(e,s),l=i(e,s);return(s.pure?a:u)(f,p,l,e,s)}},42396:(e,r,n)=>{"use strict";n.d(r,{zt:()=>t.Z,$j:()=>D,wU:()=>O.Z,I0:()=>J,v9:()=>ee});var t=n(60682);if(534!=n.j)var o=n(87462);if(534!=n.j)var u=n(63366);var a=n(8679),c=n.n(a),i=n(96985),s=n.n(i),f=n(72973),p=n(86496),l=n(1881),d=n(6526),v=534!=n.j?["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]:null,y=534!=n.j?["reactReduxForwardedRef"]:null,m=534!=n.j?[]:null,h=534!=n.j?[null,null]:null;function b(e,r){var n=e[1];return[r.payload,n+1]}function w(e,r,n){(0,l.L)((function(){return e.apply(void 0,r)}),n)}function P(e,r,n,t,o,u,a){e.current=t,r.current=o,n.current=!1,u.current&&(u.current=null,a())}function g(e,r,n,t,o,u,a,c,i,s){if(e){var f=!1,p=null,l=function(){if(!f){var e,n,l=r.getState();try{e=t(l,o.current)}catch(e){n=e,p=e}n||(p=null),e===u.current?a.current||i():(u.current=e,c.current=e,a.current=!0,s({type:"STORE_UPDATED",payload:{error:n}}))}};return n.onStateChange=l,n.trySubscribe(),l(),function(){if(f=!0,n.tryUnsubscribe(),n.onStateChange=null,p)throw p}}}var C=function(){return[null,0]};if(534!=n.j)var O=n(35067);function S(e){return function(r,n){var t=e(r,n);function o(){return t}return o.dependsOnOwnProps=!1,o}}function E(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function x(e,r){return function(r,n){n.displayName;var t=function(e,r){return t.dependsOnOwnProps?t.mapToProps(e,r):t.mapToProps(e)};return t.dependsOnOwnProps=!0,t.mapToProps=function(r,n){t.mapToProps=e,t.dependsOnOwnProps=E(e);var o=t(r,n);return"function"==typeof o&&(t.mapToProps=o,t.dependsOnOwnProps=E(o),o=t(r,n)),o},t}}const N=[function(e){return"function"==typeof e?x(e):void 0},function(e){return e?void 0:S((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?S((function(r){return function(e,r){var n={},t=function(t){var o=e[t];"function"==typeof o&&(n[t]=function(){return r(o.apply(void 0,arguments))})};for(var o in e)t(o);return n}(e,r)})):void 0}],T=[function(e){return"function"==typeof e?x(e):void 0},function(e){return e?void 0:S((function(){return{}}))}];function R(e,r,n){return(0,o.Z)({},n,e,r)}534==n.j&&(o=n(87462));const j=[function(e){return"function"==typeof e?function(e){return function(r,n){n.displayName;var t,o=n.pure,u=n.areMergedPropsEqual,a=!1;return function(r,n,c){var i=e(r,n,c);return a?o&&u(i,t)||(t=i):(a=!0,t=i),t}}}(e):void 0},function(e){return e?void 0:function(){return R}}];if(534!=n.j)var M=n(38548);var Z=534!=n.j?["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]:null;function I(e,r,n){for(var t=r.length-1;t>=0;t--){var o=r[t](e);if(o)return o}return function(r,t){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+t.wrappedComponentName+".")}}function q(e,r){return e===r}const D=534!=n.j?(k=(F={}).connectHOC,_=void 0===k?function(e,r){void 0===r&&(r={});var n=r,t=n.getDisplayName,a=void 0===t?function(e){return"ConnectAdvanced("+e+")"}:t,l=n.methodName,O=void 0===l?"connectAdvanced":l,S=n.renderCountProp,E=void 0===S?void 0:S,x=n.shouldHandleStateChanges,N=void 0===x||x,T=n.storeKey,R=void 0===T?"store":T,j=(n.withRef,n.forwardRef),M=void 0!==j&&j,Z=n.context,I=void 0===Z?d.E:Z,q=(0,u.Z)(n,v),D=I;return function(r){var n=r.displayName||r.name||"Component",t=a(n),l=(0,o.Z)({},q,{getDisplayName:a,methodName:O,renderCountProp:E,shouldHandleStateChanges:N,storeKey:R,displayName:t,wrappedComponentName:n,WrappedComponent:r}),d=q.pure,v=d?i.useMemo:function(e){return e()};function S(n){var t=(0,i.useMemo)((function(){var e=n.reactReduxForwardedRef,r=(0,u.Z)(n,y);return[n.context,e,r]}),[n]),a=t[0],c=t[1],d=t[2],O=(0,i.useMemo)((function(){return a&&a.Consumer&&(0,f.isContextConsumer)(s().createElement(a.Consumer,null))?a:D}),[a,D]),S=(0,i.useContext)(O),E=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch);Boolean(S)&&Boolean(S.store);var x=E?n.store:S.store,T=(0,i.useMemo)((function(){return function(r){return e(r.dispatch,l)}(x)}),[x]),R=(0,i.useMemo)((function(){if(!N)return h;var e=(0,p.X)(x,E?null:S.subscription),r=e.notifyNestedSubs.bind(e);return[e,r]}),[x,E,S]),j=R[0],M=R[1],Z=(0,i.useMemo)((function(){return E?S:(0,o.Z)({},S,{subscription:j})}),[E,S,j]),I=(0,i.useReducer)(b,m,C),q=I[0][0],F=I[1];if(q&&q.error)throw q.error;var k=(0,i.useRef)(),_=(0,i.useRef)(d),A=(0,i.useRef)(),L=(0,i.useRef)(!1),B=v((function(){return A.current&&d===_.current?A.current:T(x.getState(),d)}),[x,q,d]);w(P,[_,k,L,d,B,A,M]),w(g,[N,x,j,T,_,k,L,A,M,F],[x,j,T]);var $=(0,i.useMemo)((function(){return s().createElement(r,(0,o.Z)({},B,{ref:c}))}),[c,r,B]);return(0,i.useMemo)((function(){return N?s().createElement(O.Provider,{value:Z},$):$}),[O,$,Z])}var x=d?s().memo(S):S;if(x.WrappedComponent=r,x.displayName=S.displayName=t,M){var T=s().forwardRef((function(e,r){return s().createElement(x,(0,o.Z)({},e,{reactReduxForwardedRef:r}))}));return T.displayName=t,T.WrappedComponent=r,c()(T,r)}return c()(x,r)}}:k,L=void 0===(A=F.mapStateToPropsFactories)?T:A,$=void 0===(B=F.mapDispatchToPropsFactories)?N:B,H=void 0===(U=F.mergePropsFactories)?j:U,z=void 0===(K=F.selectorFactory)?M.ZP:K,function(e,r,n,t){void 0===t&&(t={});var a=t,c=a.pure,i=void 0===c||c,s=a.areStatesEqual,f=void 0===s?q:s,p=a.areOwnPropsEqual,l=void 0===p?O.Z:p,d=a.areStatePropsEqual,v=void 0===d?O.Z:d,y=a.areMergedPropsEqual,m=void 0===y?O.Z:y,h=(0,u.Z)(a,Z),b=I(e,L,"mapStateToProps"),w=I(r,$,"mapDispatchToProps"),P=I(n,H,"mergeProps");return _(z,(0,o.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:b,initMapDispatchToProps:w,initMergeProps:P,pure:i,areStatesEqual:f,areOwnPropsEqual:l,areStatePropsEqual:v,areMergedPropsEqual:m},h))}):null;var F,k,_,A,L,B,$,U,H,K,z;function V(){return(0,i.useContext)(d.E)}function W(e){void 0===e&&(e=d.E);var r=e===d.E?V:function(){return(0,i.useContext)(e)};return function(){return r().store}}var X=W();function G(e){void 0===e&&(e=d.E);var r=e===d.E?X:W(e);return function(){return r().dispatch}}var J=G(),Q=function(e,r){return e===r};function Y(e){void 0===e&&(e=d.E);var r=e===d.E?V:function(){return(0,i.useContext)(e)};return function(e,n){void 0===n&&(n=Q);var t=r(),o=function(e,r,n,t){var o,u=(0,i.useReducer)((function(e){return e+1}),0)[1],a=(0,i.useMemo)((function(){return(0,p.X)(n,t)}),[n,t]),c=(0,i.useRef)(),s=(0,i.useRef)(),f=(0,i.useRef)(),d=(0,i.useRef)(),v=n.getState();try{if(e!==s.current||v!==f.current||c.current){var y=e(v);o=void 0!==d.current&&r(y,d.current)?d.current:y}else o=d.current}catch(e){throw c.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+c.current.stack+"\n\n"),e}return(0,l.L)((function(){s.current=e,f.current=v,d.current=o,c.current=void 0})),(0,l.L)((function(){function e(){try{var e=n.getState();if(e===f.current)return;var t=s.current(e);if(r(t,d.current))return;d.current=t,f.current=e}catch(e){c.current=e}u()}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}}),[n,a]),o}(e,n,t.store,t.subscription);return(0,i.useDebugValue)(o),o}}var ee=Y();534==n.j&&(O=n(35067));var re=n(20563);(0,n(9256).F)(re.unstable_batchedUpdates)},86496:(e,r,n)=>{"use strict";n.d(r,{X:()=>u});var t=n(9256),o={notify:function(){},get:function(){return[]}};function u(e,r){var n,u=o;function a(){i.onStateChange&&i.onStateChange()}function c(){var o,c,i;n||(n=r?r.addNestedSub(a):e.subscribe(a),o=(0,t.k)(),c=null,i=null,u={clear:function(){c=null,i=null},notify:function(){o((function(){for(var e=c;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=c;r;)e.push(r),r=r.next;return e},subscribe:function(e){var r=!0,n=i={callback:e,next:null,prev:i};return n.prev?n.prev.next=n:c=n,function(){r&&null!==c&&(r=!1,n.next?n.next.prev=n.prev:i=n.prev,n.prev?n.prev.next=n.next:c=n.next)}}})}var i={addNestedSub:function(e){return c(),u.subscribe(e)},notifyNestedSubs:function(){u.notify()},handleChangeWrapper:a,isSubscribed:function(){return Boolean(n)},trySubscribe:c,tryUnsubscribe:function(){n&&(n(),n=void 0,u.clear(),u=o)},getListeners:function(){return u}};return i}},9256:(e,r,n)=>{"use strict";n.d(r,{F:()=>o,k:()=>u});var t=function(e){e()},o=function(e){return t=e},u=function(){return t}},35067:(e,r,n)=>{"use strict";function t(e,r){return e===r?0!==e||0!==r||1/e==1/r:e!=e&&r!=r}function o(e,r){if(t(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(var u=0;u<n.length;u++)if(!Object.prototype.hasOwnProperty.call(r,n[u])||!t(e[n[u]],r[n[u]]))return!1;return!0}n.d(r,{Z:()=>o})},1881:(e,r,n)=>{"use strict";n.d(r,{L:()=>o});var t=n(96985),o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?t.useLayoutEffect:t.useEffect},88359:(e,r)=>{"use strict";var n=60103,t=60106,o=60107,u=60108,a=60114,c=60109,i=60110,s=60112,f=60113,p=60120,l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var v=Symbol.for;n=v("react.element"),t=v("react.portal"),o=v("react.fragment"),u=v("react.strict_mode"),a=v("react.profiler"),c=v("react.provider"),i=v("react.context"),s=v("react.forward_ref"),f=v("react.suspense"),p=v("react.suspense_list"),l=v("react.memo"),d=v("react.lazy"),v("react.block"),v("react.server.block"),v("react.fundamental"),v("react.debug_trace_mode"),v("react.legacy_hidden")}r.isContextConsumer=function(e){return function(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:switch(e=e.type){case o:case a:case u:case f:case p:return e;default:switch(e=e&&e.$$typeof){case i:case s:case d:case l:case c:return e;default:return r}}case t:return r}}}(e)===i}},72973:(e,r,n)=>{"use strict";e.exports=n(88359)}}]);
//# sourceMappingURL=../sourcemaps/247.cb323931f96161c1a42dbea8309958b1.js.map