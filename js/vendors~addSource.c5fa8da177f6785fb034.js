(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{533:function(e,t,r){"use strict";var n=r(489).createCommonjsModule((function(e){var t=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),a=new A(n||[]);return i._invoke=function(e,t,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw i;return x()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=u(e,t,r);if("normal"===c.type){if(n=r.done?f:p,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=f,r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l="suspendedStart",p="suspendedYield",d="executing",f="completed",m={};function y(){}function h(){}function v(){}var g={};g[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(R([])));w&&w!==r&&n.call(w,i)&&(g=w);var _=v.prototype=y.prototype=Object.create(g);function S(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function E(e,t){var r;this._invoke=function(o,i){function a(){return new t((function(r,a){!function r(o,i,a,s){var c=u(e[o],e,i);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(p).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function O(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function R(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return h.prototype=_.constructor=v,v.constructor=h,v[s]=h.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},S(E.prototype),E.prototype[a]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(_),_[s]="Generator",_[i]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}));function o(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}var i=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){o(a,n,i,s,c,"next",e)}function c(e){o(a,n,i,s,c,"throw",e)}s(void 0)}))}};t._asyncToGenerator=i,t._regeneratorRuntime=n},630:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0}),r(489),r(465),r(477);var o=r(470),i=r(0),a=n(i),s=n(r(14)),c=r(151),u=n(r(454)),l=n(r(455)),p=r(490);r(458),r(476),r(499),r(159);var d=r(82),f=r(92);r(484),r(471),r(472),r(500);var m=r(478),y=n(r(453));r(461),r(460);var h=r(466),v=r(515),g=r(533),b=n(r(534)),w=r(517);r(245),r(486);var _=r(532),S=function(e){var t=e.name,r=y();return i.useEffect((function(){return setTimeout((function(){return r.change(t,"1")})),function(){return r.change(t,"")}}),[]),null};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){o._defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}S.propTypes={name:s.string.isRequired};var T,M=(T=g._asyncToGenerator(g._regeneratorRuntime.mark((function e(t){var r,n,o,i=arguments;return g._regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=i.length>1&&void 0!==i[1]?i[1]:void 0,n=i.length>2?i[2]:void 0,t){e.next=4;break}return e.abrupt("return",void 0);case 4:return e.prev=4,e.next=7,h.findSource(t);case 7:o=e.sent,e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(4),console.error(w.handleError(e.t0)),e.abrupt("return",void 0);case 14:if(!o.data.sources.find((function(e){return e.id!==r}))){e.next=16;break}throw n.formatMessage({defaultMessage:"That name is taken. Try another.",id:"wizard.nameTaken"});case 16:return e.abrupt("return",void 0);case 17:case"end":return e.stop()}}),e,null,[[4,10]])}))),function(e){return T.apply(this,arguments)}),A=!0,R=function(e){return A=e},x=function(){return A},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return b(e,t,r)}(M),P=function(e){return x()?(R(!1),function(t,r){return t?M(t,r,e):void 0}):j},C=function(e){return p._toConsumableArray(e.sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){return{value:e.name,label:e.product_name}})))},k=function(e,t){return[{label:t.formatMessage({id:"wizard.none",defaultMessage:"None"}),key:"none"}].concat(p._toConsumableArray(e.sort((function(e,t){return e.display_name.localeCompare(t.display_name)})).map((function(e){return{value:e.id,label:e.display_name}}))))},D=function(e){return function(t,r){if(!t.value)return t;var n=r.getState().values.source_type,o=e.find((function(e){return e.display_name===t.label})),i=!n||o.supported_source_types.includes(n);return O({},t,{isDisabled:!i})}},L=function(e,t){return function(r,n){var o=n.getState().values.application?n.getState().values.application.application_type_id:void 0,i=e.find((function(e){return e.id===o})),a=!i||i.supported_source_types.includes(t.find((function(e){return e.product_name===r.label})).name);return O({},r,{isDisabled:!a})}},z=function(e){return function(t){var r=e.find((function(e){return e.name===t}));return r&&r.icon_url?function(){return a.createElement("img",{src:r.icon_url,alt:r.product_name,className:"ins-c-sources__wizard--icon"})}:null}},I=function(e){var t=e.values,r=t.application,n=t.source_type,o=r&&r.application_type_id;return o?"".concat(n,"-").concat(o):n},B=function(e,t,r,n){return{title:n.formatMessage({id:"wizard.chooseAppAndType",defaultMessage:"Source type and application"}),name:"types_step",nextStep:I,fields:[{component:"card-select",name:"source_type",isRequired:!0,label:n.formatMessage({id:"wizard.selectYourSourceType",defaultMessage:"A. Select your source type"}),iconMapper:z(e),validate:[{type:l.REQUIRED}],options:C(e),mutator:L(t,e)},O({component:"enhanced-select",name:"application.application_type_id",label:n.formatMessage({id:"wizard.selectYourApplication",defaultMessage:"B. Select an application"}),options:k(t,n),mutator:D(t),isDisabled:r,placeholder:n.formatMessage({id:"wizard.chooseApp",defaultMessage:"Choose application"})},m.getActiveVendor()===m.REDHAT_VENDOR&&{isRequired:!0,validate:[{type:l.REQUIRED}]},{menuIsPortal:!0}),{component:"description",name:"fixasyncvalidation",Content:S}]}},q=function(){var e=c.useIntl();return a.createElement(f.TextContent,{key:"step1"},a.createElement(d.Text,{component:d.TextVariants.p},e.formatMessage({id:"wizard.nameDescription",defaultMessage:"To import data for an application, you need to connect to a data source. Enter a name, then proceed to select your application and source type."})))},F=function(e){return{title:e.formatMessage({id:"wizard.name",defaultMessage:"Name"}),name:"name_step",nextStep:"types_step",fields:[{component:"description",name:"description-summary",Content:q},{component:u.TEXT_FIELD,name:"source.name",type:"text",label:e.formatMessage({id:"wizard.name",defaultMessage:"Name"}),placeholder:"Source_1",isRequired:!0,validate:[function(t){return P(e)(t,void 0,e)},{type:l.REQUIRED}],resolveProps:_.default}]}},N=function(){var e=c.useIntl();return a.createElement(f.TextContent,null,a.createElement(d.Text,{component:d.TextVariants.p},e.formatMessage({id:"wizard.summaryDescription",defaultMessage:"Review the information below and click Add to add your source. Use the Back button to make changes."})))},V=function(e,t,r){return{fields:[{component:"description",name:"description-summary",Content:N},{name:"summary",component:"summary",sourceTypes:e,applicationTypes:t}],name:"summary",title:r.formatMessage({id:"wizard.reviewDetails",defaultMessage:"Review details"})}};t.NameDescription=q,t.SummaryDescription=N,t.appMutator=D,t.asyncValidator=M,t.asyncValidatorDebounced=j,t.asyncValidatorDebouncedWrapper=P,t.default=function(e,t,r,n,o){return R(!0),{fields:[{component:u.WIZARD,name:"wizard",title:m.WIZARD_TITLE(),inModal:!0,description:m.WIZARD_DESCRIPTION(),buttonLabels:{submit:o.formatMessage({id:"sources.add",defaultMessage:"Add"}),back:o.formatMessage({id:"wizard.back",defaultMessage:"Back"}),cancel:o.formatMessage({id:"wizard.cancel",defaultMessage:"Cancel"}),next:o.formatMessage({id:"wizard.next",defaultMessage:"Next"})},container:n,showTitles:!0,crossroads:["application.application_type_id","source_type","auth_select"],fields:[F(o),B(e,t,r,o)].concat(p._toConsumableArray(v.schemaBuilder(e,t)),[V(e,t,o)])}]}},t.getFirstValidated=x,t.iconMapper=z,t.nextStep=I,t.setFirstValidated=R,t.sourceTypeMutator=L,t.typesStep=B},949:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(0),r(151);var n=r(478);t.default=function(e){var t,r;return(null===(t=e.schema)||void 0===t?void 0:t.authentication)&&(null===(r=e.schema)||void 0===r?void 0:r.endpoint)},t.filterVendorTypes=function(e){var t=e.vendor;return n.getActiveVendor()===n.CLOUD_VENDOR?t!==n.REDHAT_VENDOR:t===n.REDHAT_VENDOR}},950:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(489),r(465);var n=r(477),o=r(470);r(458),r(461),r(460);var i=r(466),a=r(533),s=r(517),c=r(569),u=r(568);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o._defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d,f=function(e){if(!e)return{};try{var t=new URL(e);return{scheme:t.protocol.replace(/:$/,""),host:t.hostname,port:t.port,path:t.pathname}}catch(e){return console.log(e),{}}},m=function(e){return e.url?f(e.url):e},y=(d=a._asyncToGenerator(a._regeneratorRuntime.mark((function e(t,r){var o,l,d,f,y,h,v,g,b,w,_,S,E,O,T,M,A,R,x,j,P,C,k,D,L,z,I,B,q,F=arguments;return a._regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=F.length>2&&void 0!==F[2]?F[2]:[],e.prev=1,y=r.find((function(e){return e.name===t.source_type})).id,e.next=5,i.getSourcesApi().createSource(p({},t.source,{source_type_id:y}));case 5:return l=e.sent,h=[],t.endpoint?(v=m(t),g=v.scheme,b=v.host,w=v.port,_=v.path,S=parseInt(w,10),E=p({},t.endpoint,{default:!0,source_id:l.id,scheme:g,host:b,port:isNaN(S)?void 0:S,path:_}),h.push(i.getSourcesApi().createEndpoint(E))):h.push(Promise.resolve(void 0)),t.application&&t.application.application_type_id?(O=p({},t.application,{source_id:l.id}),h.push(i.getSourcesApi().createApplication(O))):h.push(Promise.resolve(void 0)),e.next=11,Promise.all(h);case 11:if(T=e.sent,M=n._slicedToArray(T,2),A=M[0],R=M[1],!(A||t.authentication&&(null===(d=R)||void 0===d?void 0:d.id))){e.next=20;break}return k=p({},t.authentication,{resource_id:(null===(j=A)||void 0===j?void 0:j.id)||(null===(P=R)||void 0===P?void 0:P.id),resource_type:(null===(C=A)||void 0===C?void 0:C.id)?"Endpoint":"Application"}),e.next=19,i.getSourcesApi().createAuthentication(k);case 19:x=e.sent;case 20:return D=[],t.credentials||t.billing_source?(L=t.credentials,z=t.billing_source,I={},I=L?{authentication:{credentials:L}}:{},I=z?p({},I,{billing_source:z}):I,D.push(c.patchSource(p({id:l.id},I)))):h.push(Promise.resolve(void 0)),x&&R?(B={application_id:R.id,authentication_id:x.id},D.push(i.getSourcesApi().createAuthApp(B))):h.push(Promise.resolve(void 0)),e.next=25,Promise.all(D);case 25:if((null===(f=l)||void 0===f?void 0:f.id)&&i.getSourcesApi().checkAvailabilitySource(l.id),!R){e.next=31;break}return q=o.includes(R.application_type_id)?1e4:0,e.next=30,u.checkAppAvailability(R.id,q);case 30:R=e.sent;case 31:if(!A){e.next=35;break}return e.next=34,u.checkAppAvailability(A.id,void 0,void 0,"getEndpoint");case 34:A=e.sent;case 35:return e.abrupt("return",p({},l,{endpoint:[A],applications:[R]}));case 38:return e.prev=38,e.t0=e.catch(1),e.next=42,s.handleError(e.t0,l?l.id:void 0);case 42:throw e.sent;case 44:case"end":return e.stop()}}),e,null,[[1,38]])}))),function(e,t){return d.apply(this,arguments)});t.doCreateSource=y,t.handleErrorWrapper=function(e){return t=a._asyncToGenerator(a._regeneratorRuntime.mark((function t(r){return a._regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.handleError(r,e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)};var t},t.parseUrl=f,t.urlOrHost=m},980:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0}),r(489);var o=r(694),i=r(465),a=r(477),s=r(470),c=r(0),u=n(c),l=r(152),p=n(r(14)),d=n(r(629)),f=r(151),m=r(717);r(558),r(454),r(455),r(562),r(497),r(563),r(490),r(249),r(555),r(556),r(557),r(553),r(458),r(476),r(499),r(159);var y=r(82);r(92),r(484),r(471),r(472),r(500);var h=r(478);r(453),r(461);var v=r(460),g=r(466);r(515),r(621),r(121),r(122),r(456),r(157),r(95),r(240),r(508),r(457),r(624),r(496),r(625),r(626),r(533),r(534);var b=r(630);r(517),r(245),r(486),r(532),r(467),r(516),r(468),r(153);var w=r(627),_=r(535),S=r(949);r(473),r(250);var E=r(718);r(251);var O=r(628);r(719);var T=r(720),M=r(721),A=r(66);r(569),r(568);var R=r(950);r(501),r(242);var x=r(722);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var P={schema:{},sourceTypes:[],isLoading:!0},C=function(e,t){var r=t.type,n=t.sourceTypes,o=t.applicationTypes,i=t.container,a=t.disableAppSelection,c=t.intl;switch(r){case"loaded":return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){s._defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{schema:b.default(n.filter(S.default).filter(S.filterVendorTypes),o.filter(_.default).filter(_.filterVendorAppTypes(n)),a,i,c),isLoading:!1,sourceTypes:n})}},k=function(e){var t=e.sourceTypes,r=e.applicationTypes,n=e.disableAppSelection,i=e.isCancelling,s=e.onCancel,l=e.values,p=e.onSubmit,d=c.useReducer(C,P),y=a._slicedToArray(d,2),v=y[0],b=v.schema,_=v.sourceTypes,S=v.isLoading,E=y[1],O=c.useRef(!1),T=c.useRef(document.createElement("div")),M=f.useIntl();return c.useEffect((function(){O.current=!0;var e=[];return t||e.push(g.doLoadSourceTypes()),r||e.push(g.doLoadApplicationTypes()),Promise.all(e).then((function(e){var o=e.find((function(e){return e.hasOwnProperty("sourceTypes")})),i=e.find((function(e){return e.hasOwnProperty("applicationTypes")}));O.current&&E({type:"loaded",sourceTypes:t||o.sourceTypes,applicationTypes:r||i.applicationTypes,disableAppSelection:n,container:T.current,intl:M})})),function(){O.current=!1}}),[]),c.useEffect((function(){T.current.hidden=i}),[i]),S?u.createElement(m.Wizard,{isOpen:!0,onClose:s,title:h.WIZARD_TITLE(),description:h.WIZARD_DESCRIPTION(),steps:[{name:"Loading",component:u.createElement(w.default,{onClose:function(){return s()}}),isFinishedStep:!0}]}):u.createElement(o.SourcesFormRenderer,{initialValues:l,schema:b,onSubmit:function(e){return p(e,_)},onCancel:s})};k.propTypes={onCancel:p.func.isRequired,onSubmit:p.func.isRequired,sourceTypes:p.arrayOf(p.shape({id:p.string.isRequired,name:p.string.isRequired,product_name:p.string.isRequired,schema:p.shape({authentication:p.array,endpoint:p.object})})),applicationTypes:p.arrayOf(p.shape({id:p.string.isRequired,name:p.string.isRequired,display_name:p.string.isRequired})),values:p.object,disableAppSelection:p.bool,isCancelling:p.bool},k.defaultProps={values:{},disableAppSelection:!1};var D=function(e){var t=e.id,r=f.useIntl().formatMessage({id:"wizard.editSource",defaultMessage:"Edit source"});return"sources"===insights.chrome.getApp()?u.createElement(A.Link,{to:"/sources/detail/".concat(t)},u.createElement(l.Button,{variant:"primary",className:"pf-u-mt-xl"},r)):u.createElement(l.Button,{variant:"primary",className:"pf-u-mt-xl",component:"a",target:"_blank",href:"".concat(E.computeSourcesUrl(),"/detail/").concat(t),rel:"noopener noreferrer"},r)};D.propTypes={id:p.string.isRequired};var L=function(e){var t,r,n,o,i,s=e.afterSubmit,p=e.afterError,d=e.isFinished,v=e.isErrored,b=e.successfulMessage,_=e.hideSourcesButton,S=e.returnButtonTitle,A=e.reset,R=e.createdSource,x=void 0===R?{}:R,j=e.tryAgain,P=e.afterSuccess,C=c.useState(),k=a._slicedToArray(C,2),L=k[0],z=k[1],I=c.useState(),B=a._slicedToArray(I,2),q=B[0],F=B[1],N=f.useIntl(),V=u.createElement(l.Button,{variant:"link",onClick:A},N.formatMessage({id:"wizard.addAnotherSource",defaultMessage:"Add another source"}));if(q)i=u.createElement(E.FinishedStep,{onClose:s,title:N.formatMessage({id:"wizard.removeSourceSuccessTitle",defaultMessage:"Removing successful"}),successfulMessage:N.formatMessage({id:"wizard.removeSourceSuccessDescription",defaultMessage:"Source was successfully removed."}),hideSourcesButton:_,returnButtonTitle:S,secondaryActions:V});else if(L)i=u.createElement(w.default,{customText:N.formatMessage({id:"wizard.removingSource",defaultMessage:"Removing source"})});else if(d)switch(M.default(x)){case"unavailable":i=u.createElement(O.default,{onClose:s,secondaryActions:u.createElement(l.Button,{variant:"link",onClick:function(){return z(!0),g.getSourcesApi().removeSource(x.id).then((function(){P&&P(),F(!0)})).catch((function(){return z(!1)}))}},N.formatMessage({id:"wizard.removeSource",defaultMessage:"Remove source"})),Component:function(){return u.createElement(D,{id:x.id})},message:(null===(t=x.applications)||void 0===t||null===(r=t[0])||void 0===r?void 0:r.availability_status_error)||(null===(n=x.endpoint)||void 0===n||null===(o=n[0])||void 0===o?void 0:o.availability_status_error)||N.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"}),title:N.formatMessage({id:"wizard.configurationUnsuccessful",defaultMessage:"Configuration unsuccessful"})});break;case"timeout":i=u.createElement(T.default,{onClose:s,returnButtonTitle:S,secondaryActions:V});break;default:i=u.createElement(E.FinishedStep,{onClose:s,successfulMessage:b,hideSourcesButton:_,returnButtonTitle:S,secondaryActions:V})}else i=v?u.createElement(O.default,{onClose:p,primaryAction:j,secondaryActions:u.createElement(y.Text,{component:"a",target:"_blank",href:"https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",rel:"noopener noreferrer"},N.formatMessage({id:"wizard.openTicket",defaultMessage:"Open a support case"})),returnButtonTitle:N.formatMessage({id:"wizard.retryText",defaultMessage:"Retry"})}):u.createElement(w.default,{customText:N.formatMessage({id:"wizard.loadingText",defaultMessage:"Validating source credentials"}),onClose:p,cancelTitle:N.formatMessage({id:"wizard.close",defaultMessage:"Close"})});return u.createElement(m.Wizard,{isOpen:!0,onClose:d?s:p,title:h.WIZARD_TITLE(),description:h.WIZARD_DESCRIPTION(),steps:[{name:"Finish",component:i,isFinishedStep:!0}]})};function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){s._defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}L.propTypes={afterSubmit:p.func.isRequired,afterError:p.func.isRequired,isFinished:p.bool.isRequired,isErrored:p.bool.isRequired,successfulMessage:p.node.isRequired,hideSourcesButton:p.bool,returnButtonTitle:p.node.isRequired,errorMessage:p.node,reset:p.func,createdSource:p.object,tryAgain:p.func,afterSuccess:p.func};var B=function(e){return{isSubmitted:!1,isFinished:!1,isErrored:!1,isCancelling:!1,values:e,createdSource:{},error:void 0}},q=function(e,t){var r=t.type,n=t.values,o=t.data,i=t.error,a=t.initialValues,s=t.sourceTypes;switch(r){case"reset":return B(a);case"prepareSubmitState":return I({},e,{isFinished:!1,isErrored:!1,error:void 0,isSubmitted:!0,values:n,sourceTypes:s});case"setSubmitted":return I({},e,{isFinished:!0,createdSource:o});case"setErrored":return I({},e,{isErrored:!0,error:i.toString()});case"onStay":return I({},e,{isCancelling:!1});case"showCancelModal":return I({},e,{isCancelling:!0,values:n})}},F=function(e){var t=e.successfulMessage,r=e.isOpen,n=e.sourceTypes,o=e.applicationTypes,s=e.disableAppSelection,l=e.hideSourcesButton,p=e.returnButtonTitle,f=e.initialValues,m=e.onClose,y=e.afterSuccess,h=c.useReducer(q,B(f)),g=a._slicedToArray(h,2),b=g[0],w=b.isErrored,_=b.isFinished,S=b.isSubmitted,E=b.values,O=b.error,T=b.isCancelling,M=b.createdSource,A=i._objectWithoutProperties(b,["isErrored","isFinished","isSubmitted","values","error","isCancelling","createdSource"]),j=g[1],P=function(e,t){return j({type:"prepareSubmitState",values:e,sourceTypes:t}),R.doCreateSource(e,t,v.timeoutedApps(o)).then((function(e){y&&y(e),j({type:"setSubmitted",data:e})})).catch((function(e){j({type:"setErrored",error:e})}))};return r?S?u.createElement(L,{afterSubmit:function(){m(void 0,M),j({type:"reset",initialValues:f})},afterError:function(){return m({})},isFinished:_,isErrored:w,successfulMessage:t,hideSourcesButton:l,returnButtonTitle:p,errorMessage:O,reset:function(){return j({type:"reset",initialValues:f})},createdSource:M,tryAgain:function(){return P(E,A.sourceTypes)},afterSuccess:y}):u.createElement(u.Fragment,null,u.createElement(x.default,{isOpen:T,onExit:function(){return m(E)},onStay:function(){return j({type:"onStay"})}}),u.createElement(k,{isCancelling:T,values:E,onSubmit:P,onCancel:function(e){return d(e)?m({}):j({type:"showCancelModal",values:e})},sourceTypes:n,applicationTypes:o,disableAppSelection:s})):null};F.propTypes={afterSuccess:p.func,sourceTypes:p.arrayOf(p.shape({id:p.string.isRequired,name:p.string.isRequired,product_name:p.string.isRequired,schema:p.shape({authentication:p.array,endpoint:p.object})})),applicationTypes:p.arrayOf(p.shape({id:p.string.isRequired,name:p.string.isRequired,display_name:p.string.isRequired})),onClose:p.func.isRequired,isOpen:p.bool.isRequired,successfulMessage:p.node,initialValues:p.shape(s._defineProperty({},p.string,p.oneOf([p.string,p.array,p.number,p.bool]))),disableAppSelection:p.bool,hideSourcesButton:p.bool,returnButtonTitle:p.node},F.defaultProps={successfulMessage:u.createElement(f.FormattedMessage,{id:"wizard.successfulMessage",defaultMessage:"Your source was successfully added."}),initialValues:{},returnButtonTitle:u.createElement(f.FormattedMessage,{id:"wizard.goBackToSources",defaultMessage:"Go back to Sources"})};t.AddSourceButton=function(e){var t=c.useState(!1),r=a._slicedToArray(t,2),n=r[0],i=r[1];return u.createElement(u.Fragment,null,u.createElement(l.Button,{variant:"primary",onClick:function(){return i(!0)}},h.WIZARD_TITLE()),u.createElement(F,o._extends({isOpen:n,onClose:function(){return i(!1)}},e)))},t.AddSourceWizard=F}}]);
//# sourceMappingURL=../sourcemaps/vendors~addSource.js.map