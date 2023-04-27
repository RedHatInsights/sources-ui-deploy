(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[913],{80913:(t,e,r)=>{(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{FlagContext:()=>a,FlagProvider:()=>s,InMemoryStorageProvider:()=>o.InMemoryStorageProvider,LocalStorageProvider:()=>o.LocalStorageProvider,UnleashClient:()=>o.UnleashClient,default:()=>p,useFlag:()=>c,useFlagsStatus:()=>u,useUnleashClient:()=>h,useUnleashContext:()=>f,useVariant:()=>l});const o=r(14009),i=r(92950),a=e.n(i)().createContext(null),s=function(t){var e=t.config,r=t.children,n=t.unleashClient,s=t.startClient,c=void 0===s||s,u=i.useRef(n),l=i.useState(!1),f=l[0],h=l[1],p=i.useState(null),d=p[0],v=p[1];e||n||console.warn("You must provide either a config or an unleash client to the flag provider. If you are initializing the client in useEffect, you can avoid this warning by\n      checking if the client exists before rendering."),u.current||(u.current=new o.UnleashClient(e)),u.current.on("ready",(function(){h(!0)})),u.current.on("error",(function(t){v(t)})),i.useEffect((function(){(c||!n)&&u.current.start()}),[]);var y=function(t){return r=function(){return function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return[4,u.current.updateContext(t)];case 1:return e.sent(),[2]}}))},new((e=void 0)||(e=Promise))((function(t,n){function o(t){try{a(r.next(t))}catch(t){n(t)}}function i(t){try{a(r.throw(t))}catch(t){n(t)}}function a(r){var n;r.done?t(r.value):(n=r.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,i)}a((r=r.apply(void 0,[])).next())}));var e,r},g=function(t){return u.current.isEnabled(t)},b=function(t){return u.current.getVariant(t)},m=function(t,e,r){return u.current.on(t,e,r)},w=i.useMemo((function(){return{on:m,updateContext:y,isEnabled:g,getVariant:b,client:u.current,flagsReady:f,flagsError:d,setFlagsReady:h,setFlagsError:v}}),[f,d]);return i.createElement(a.Provider,{value:w},r)},c=function(t){var e=(0,i.useContext)(a),r=e.isEnabled,n=e.client,o=(0,i.useState)(!!r(t)),s=o[0],c=o[1],u=(0,i.useRef)();return u.current=s,(0,i.useEffect)((function(){n&&(n.on("update",(function(){var e=r(t);e!==u.current&&(u.current=e,c(!!e))})),n.on("ready",(function(){var e=r(t);c(e)})))}),[n]),s},u=function(){var t=(0,i.useContext)(a);return{flagsReady:t.flagsReady,flagsError:t.flagsError}},l=function(t){var e=(0,i.useContext)(a),r=e.getVariant,n=e.client,o=(0,i.useState)(r(t)),s=o[0],c=o[1],u=(0,i.useRef)();return u.current=s,(0,i.useEffect)((function(){n&&(n.on("update",(function(){var e=r(t);u.current.name===e.name&&u.current.enabled===e.enabled||(c(e),u.current=e)})),n.on("ready",(function(){var e=r(t);c(e)})))}),[n]),s||{}},f=function(){return(0,i.useContext)(a).updateContext},h=function(){return(0,i.useContext)(a).client},p=s;t.exports=n})()},74279:t=>{function e(){}e.prototype={on:function(t,e,r){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:r}),this},once:function(t,e,r){var n=this;function o(){n.off(t,o),e.apply(r,arguments)}return o._=e,this.on(t,o,r)},emit:function(t){for(var e=[].slice.call(arguments,1),r=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=r.length;n<o;n++)r[n].fn.apply(r[n].ctx,e);return this},off:function(t,e){var r=this.e||(this.e={}),n=r[t],o=[];if(n&&e)for(var i=0,a=n.length;i<a;i++)n[i].fn!==e&&n[i].fn._!==e&&o.push(n[i]);return o.length?r[t]=o:delete r[t],this}},t.exports=e,t.exports.TinyEmitter=e},82562:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=r(78410),i=function(){function t(){}return t.prototype.generateEventId=function(){return(0,o.v4)()},t.prototype.createImpressionEvent=function(t,e,r,o,i){var a=this.createBaseEvent(t,e,r,o);return i?n(n({},a),{variant:i}):a},t.prototype.createBaseEvent=function(t,e,r,n){return{eventType:n,eventId:this.generateEventId(),context:t,enabled:e,featureName:r}},t}();e.default=i},14009:function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},a=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},c=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.InMemoryStorageProvider=e.LocalStorageProvider=e.UnleashClient=e.resolveFetch=e.EVENTS=void 0;var u=r(74279),l=r(88524),f=r(8475);e.InMemoryStorageProvider=f.default;var h=r(6432);e.LocalStorageProvider=h.default;var p=r(82562),d=r(75581),v=["userId","sessionId","remoteAddress"];e.EVENTS={INIT:"initialized",ERROR:"error",READY:"ready",UPDATE:"update",IMPRESSION:"impression"};var y={name:"disabled",enabled:!1},g="repo";e.resolveFetch=function(){try{if("fetch"in window)return fetch.bind(window);if("fetch"in globalThis)return fetch.bind(globalThis)}catch(t){console.error('Unleash failed to resolve "fetch"',t)}};var b=function(t){function r(r){var n=r.storageProvider,o=r.url,a=r.clientKey,s=r.disableRefresh,c=void 0!==s&&s,u=r.refreshInterval,f=void 0===u?30:u,d=r.metricsInterval,v=void 0===d?30:d,y=r.disableMetrics,g=void 0!==y&&y,b=r.appName,m=r.environment,w=void 0===m?"default":m,E=r.context,x=r.fetch,I=void 0===x?(0,e.resolveFetch)():x,S=r.bootstrap,_=r.bootstrapOverride,k=void 0===_||_,R=r.headerName,T=void 0===R?"Authorization":R,N=r.customHeaders,O=void 0===N?{}:N,P=t.call(this)||this;if(P.toggles=[],P.etag="",P.readyEventEmitted=!1,!o)throw new Error("url is required");if(!a)throw new Error("clientKey is required");if(!b)throw new Error("appName is required.");return P.eventsHandler=new p.default,P.toggles=S&&S.length>0?S:[],P.url=o instanceof URL?o:new URL(o),P.clientKey=a,P.headerName=T,P.customHeaders=O,P.storage=n||new h.default,P.refreshInterval=c?0:1e3*f,P.context=i({appName:b,environment:w},E),P.ready=new Promise((function(t){P.init().then(t).catch((function(r){console.error(r),P.emit(e.EVENTS.ERROR,r),t()}))})),I||console.error('Unleash: You must either provide your own "fetch" implementation or run in an environment where "fetch" is available.'),P.fetch=I,P.bootstrap=S&&S.length>0?S:void 0,P.bootstrapOverride=k,P.metrics=new l.default({onError:P.emit.bind(P,e.EVENTS.ERROR),appName:b,metricsInterval:v,disableMetrics:g,url:P.url,clientKey:a,fetch:I,headerName:T}),P}return o(r,t),r.prototype.getAllToggles=function(){return c([],this.toggles,!0)},r.prototype.isEnabled=function(t){var r=this.toggles.find((function(e){return e.name===t})),n=!!r&&r.enabled;if(this.metrics.count(t,n),null==r?void 0:r.impressionData){var o=this.eventsHandler.createImpressionEvent(this.context,n,t,"isEnabled");this.emit(e.EVENTS.IMPRESSION,o)}return n},r.prototype.getVariant=function(t){var r=this.toggles.find((function(e){return e.name===t}));if(r){if(this.metrics.count(t,!0),r.impressionData){var n=this.eventsHandler.createImpressionEvent(this.context,r.enabled,t,"getVariant",r.variant.name);this.emit(e.EVENTS.IMPRESSION,n)}return r.variant}return this.metrics.count(t,!1),y},r.prototype.updateContext=function(t){return a(this,void 0,void 0,(function(){var e;return s(this,(function(r){switch(r.label){case 0:return(t.appName||t.environment)&&console.warn("appName and environment are static. They can't be updated with updateContext."),e={environment:this.context.environment,appName:this.context.appName},this.context=i(i({},e),t),this.timerRef?[4,this.fetchToggles()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},r.prototype.getContext=function(){return i({},this.context)},r.prototype.setContextField=function(t,e){var r,n;if(v.includes(t))this.context=i(i({},this.context),((r={})[t]=e,r));else{var o=i(i({},this.context.properties),((n={})[t]=e,n));this.context=i(i({},this.context),{properties:o})}this.timerRef&&this.fetchToggles()},r.prototype.init=function(){return a(this,void 0,void 0,(function(){var t,r;return s(this,(function(n){switch(n.label){case 0:return[4,this.resolveSessionId()];case 1:return t=n.sent(),this.context=i({sessionId:t},this.context),r=this,[4,this.storage.get(g)];case 2:return r.toggles=n.sent()||[],!this.bootstrap||!this.bootstrapOverride&&0!==this.toggles.length?[3,4]:[4,this.storage.save(g,this.bootstrap)];case 3:n.sent(),this.toggles=this.bootstrap,this.emit(e.EVENTS.READY),n.label=4;case 4:return this.emit(e.EVENTS.INIT),[2]}}))}))},r.prototype.start=function(){return a(this,void 0,void 0,(function(){var t,e=this;return s(this,(function(r){switch(r.label){case 0:return this.timerRef?(console.error("Unleash SDK has already started, if you want to restart the SDK you should call client.stop() before starting again."),[2]):[4,this.ready];case 1:return r.sent(),this.metrics.start(),t=this.refreshInterval,[4,this.fetchToggles()];case 2:return r.sent(),t>0&&(this.timerRef=setInterval((function(){return e.fetchToggles()}),t)),[2]}}))}))},r.prototype.stop=function(){this.timerRef&&(clearInterval(this.timerRef),this.timerRef=void 0),this.metrics.stop()},r.prototype.resolveSessionId=function(){return a(this,void 0,void 0,(function(){var t;return s(this,(function(e){switch(e.label){case 0:return this.context.sessionId?[2,this.context.sessionId]:[3,1];case 1:return[4,this.storage.get("sessionId")];case 2:return(t=e.sent())?[3,4]:(t=Math.floor(1e9*Math.random()),[4,this.storage.save("sessionId",t)]);case 3:e.sent(),e.label=4;case 4:return[2,t]}}))}))},r.prototype.getHeaders=function(){var t,e=((t={})[this.headerName]=this.clientKey,t.Accept="application/json",t["Content-Type"]="application/json",t["If-None-Match"]=this.etag,t);return Object.entries(this.customHeaders).filter(d.notNullOrUndefined).forEach((function(t){var r=t[0],n=t[1];return e[r]=n})),e},r.prototype.storeToggles=function(t){return a(this,void 0,void 0,(function(){return s(this,(function(r){switch(r.label){case 0:return this.toggles=t,this.emit(e.EVENTS.UPDATE),[4,this.storage.save(g,t)];case 1:return r.sent(),[2]}}))}))},r.prototype.fetchToggles=function(){return a(this,void 0,void 0,(function(){var t,r,n,o,i;return s(this,(function(a){switch(a.label){case 0:if(!this.fetch)return[3,8];a.label=1;case 1:return a.trys.push([1,7,,8]),t=this.context,r=new URL(this.url.toString()),Object.entries(t).filter(d.notNullOrUndefined).forEach((function(t){var e=t[0],n=t[1];"properties"===e&&n?Object.entries(n).filter(d.notNullOrUndefined).forEach((function(t){var e=t[0],n=t[1];return r.searchParams.append("properties[".concat(e,"]"),n)})):r.searchParams.append(e,n)})),[4,this.fetch(r.toString(),{cache:"no-cache",headers:this.getHeaders()})];case 2:return(n=a.sent()).ok&&304!==n.status?(this.etag=n.headers.get("ETag")||"",[4,n.json()]):[3,5];case 3:return o=a.sent(),[4,this.storeToggles(o.toggles)];case 4:return a.sent(),this.bootstrap||this.readyEventEmitted||(this.emit(e.EVENTS.READY),this.readyEventEmitted=!0),[3,6];case 5:n.ok||304===n.status||(console.error("Unleash: Fetching feature toggles did not have an ok response"),this.emit(e.EVENTS.ERROR,{type:"HttpError",code:n.status})),a.label=6;case 6:return[3,8];case 7:return i=a.sent(),console.error("Unleash: unable to fetch feature toggles",i),this.emit(e.EVENTS.ERROR,i),[3,8];case 8:return[2]}}))}))},r}(u.TinyEmitter);e.UnleashClient=b},88524:function(t,e){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){var e=t.onError,r=t.appName,n=t.metricsInterval,o=t.disableMetrics,i=void 0!==o&&o,a=t.url,s=t.clientKey,c=t.fetch,u=t.headerName;this.onError=e,this.disabled=i,this.metricsInterval=1e3*n,this.appName=r,this.url=a instanceof URL?a:new URL(a),this.clientKey=s,this.bucket=this.createEmptyBucket(),this.fetch=c,this.headerName=u}return t.prototype.start=function(){var t=this;if(this.disabled)return!1;"number"==typeof this.metricsInterval&&this.metricsInterval>0&&setTimeout((function(){t.startTimer(),t.sendMetrics()}),2e3)},t.prototype.stop=function(){this.timer&&(clearTimeout(this.timer),delete this.timer)},t.prototype.createEmptyBucket=function(){return{start:new Date,stop:null,toggles:{}}},t.prototype.sendMetrics=function(){return n(this,void 0,void 0,(function(){var t,e,r,n;return o(this,(function(o){switch(o.label){case 0:if(t="".concat(this.url,"/client/metrics"),e=this.getPayload(),this.bucketIsEmpty(e))return[2];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.fetch(t,{cache:"no-cache",method:"POST",headers:(n={},n[this.headerName]=this.clientKey,n.Accept="application/json",n["Content-Type"]="application/json",n),body:JSON.stringify(e)})];case 2:return o.sent(),[3,4];case 3:return r=o.sent(),console.error("Unleash: unable to send feature metrics",r),this.onError(r),[3,4];case 4:return[2]}}))}))},t.prototype.count=function(t,e){return!(this.disabled||!this.bucket||(this.assertBucket(t),this.bucket.toggles[t][e?"yes":"no"]++,0))},t.prototype.assertBucket=function(t){if(this.disabled||!this.bucket)return!1;this.bucket.toggles[t]||(this.bucket.toggles[t]={yes:0,no:0})},t.prototype.startTimer=function(){var t=this;this.timer=setInterval((function(){t.sendMetrics()}),this.metricsInterval)},t.prototype.bucketIsEmpty=function(t){return 0===Object.keys(t.bucket.toggles).length},t.prototype.getPayload=function(){var t=r(r({},this.bucket),{stop:new Date});return this.bucket=this.createEmptyBucket(),{bucket:t,appName:this.appName,instanceId:"browser"}},t}();e.default=i},8475:function(t,e){"use strict";var r=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this.store=new Map}return t.prototype.save=function(t,e){return r(this,void 0,void 0,(function(){return n(this,(function(r){return this.store.set(t,e),[2]}))}))},t.prototype.get=function(t){return r(this,void 0,void 0,(function(){return n(this,(function(e){return[2,this.store.get(t)]}))}))},t}();e.default=o},6432:function(t,e){"use strict";var r=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this.prefix="unleash:repository"}return t.prototype.save=function(t,e){return r(this,void 0,void 0,(function(){var r,o;return n(this,(function(n){r=JSON.stringify(e),o="".concat(this.prefix,":").concat(t);try{window.localStorage.setItem(o,r)}catch(t){console.error(t)}return[2]}))}))},t.prototype.get=function(t){try{var e="".concat(this.prefix,":").concat(t),r=window.localStorage.getItem(e);return r?JSON.parse(r):void 0}catch(t){console.error(t)}},t}();e.default=o},75581:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.notNullOrUndefined=void 0,e.notNullOrUndefined=function(t){return null!=t[1]}},78410:(t,e,r)=>{"use strict";r.r(e),r.d(e,{NIL:()=>_,parse:()=>f,stringify:()=>a.Z,v1:()=>u,v3:()=>w,v4:()=>E.Z,v5:()=>S,validate:()=>l.Z,version:()=>k});var n,o,i=r(13653),a=r(3958),s=0,c=0;const u=function(t,e,r){var u=e&&r||0,l=e||new Array(16),f=(t=t||{}).node||n,h=void 0!==t.clockseq?t.clockseq:o;if(null==f||null==h){var p=t.random||(t.rng||i.Z)();null==f&&(f=n=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==h&&(h=o=16383&(p[6]<<8|p[7]))}var d=void 0!==t.msecs?t.msecs:Date.now(),v=void 0!==t.nsecs?t.nsecs:c+1,y=d-s+(v-c)/1e4;if(y<0&&void 0===t.clockseq&&(h=h+1&16383),(y<0||d>s)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=d,c=v,o=h;var g=(1e4*(268435455&(d+=122192928e5))+v)%4294967296;l[u++]=g>>>24&255,l[u++]=g>>>16&255,l[u++]=g>>>8&255,l[u++]=255&g;var b=d/4294967296*1e4&268435455;l[u++]=b>>>8&255,l[u++]=255&b,l[u++]=b>>>24&15|16,l[u++]=b>>>16&255,l[u++]=h>>>8|128,l[u++]=255&h;for(var m=0;m<6;++m)l[u+m]=f[m];return e||(0,a.Z)(l)};var l=r(27738);const f=function(t){if(!(0,l.Z)(t))throw TypeError("Invalid UUID");var e,r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r};function h(t,e,r){function n(t,n,o,i){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}(t)),"string"==typeof n&&(n=f(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var s=new Uint8Array(16+t.length);if(s.set(n),s.set(t,n.length),(s=r(s))[6]=15&s[6]|e,s[8]=63&s[8]|128,o){i=i||0;for(var c=0;c<16;++c)o[i+c]=s[c];return o}return(0,a.Z)(s)}try{n.name=t}catch(t){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}function p(t){return 14+(t+64>>>9<<4)+1}function d(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}function v(t,e,r,n,o,i){return d((a=d(d(e,t),d(n,i)))<<(s=o)|a>>>32-s,r);var a,s}function y(t,e,r,n,o,i,a){return v(e&r|~e&n,t,e,o,i,a)}function g(t,e,r,n,o,i,a){return v(e&n|r&~n,t,e,o,i,a)}function b(t,e,r,n,o,i,a){return v(e^r^n,t,e,o,i,a)}function m(t,e,r,n,o,i,a){return v(r^(e|~n),t,e,o,i,a)}const w=h("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var r=0;r<e.length;++r)t[r]=e.charCodeAt(r)}return function(t){for(var e=[],r=32*t.length,n="0123456789abcdef",o=0;o<r;o+=8){var i=t[o>>5]>>>o%32&255,a=parseInt(n.charAt(i>>>4&15)+n.charAt(15&i),16);e.push(a)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[p(e)-1]=e;for(var r=1732584193,n=-271733879,o=-1732584194,i=271733878,a=0;a<t.length;a+=16){var s=r,c=n,u=o,l=i;r=y(r,n,o,i,t[a],7,-680876936),i=y(i,r,n,o,t[a+1],12,-389564586),o=y(o,i,r,n,t[a+2],17,606105819),n=y(n,o,i,r,t[a+3],22,-1044525330),r=y(r,n,o,i,t[a+4],7,-176418897),i=y(i,r,n,o,t[a+5],12,1200080426),o=y(o,i,r,n,t[a+6],17,-1473231341),n=y(n,o,i,r,t[a+7],22,-45705983),r=y(r,n,o,i,t[a+8],7,1770035416),i=y(i,r,n,o,t[a+9],12,-1958414417),o=y(o,i,r,n,t[a+10],17,-42063),n=y(n,o,i,r,t[a+11],22,-1990404162),r=y(r,n,o,i,t[a+12],7,1804603682),i=y(i,r,n,o,t[a+13],12,-40341101),o=y(o,i,r,n,t[a+14],17,-1502002290),r=g(r,n=y(n,o,i,r,t[a+15],22,1236535329),o,i,t[a+1],5,-165796510),i=g(i,r,n,o,t[a+6],9,-1069501632),o=g(o,i,r,n,t[a+11],14,643717713),n=g(n,o,i,r,t[a],20,-373897302),r=g(r,n,o,i,t[a+5],5,-701558691),i=g(i,r,n,o,t[a+10],9,38016083),o=g(o,i,r,n,t[a+15],14,-660478335),n=g(n,o,i,r,t[a+4],20,-405537848),r=g(r,n,o,i,t[a+9],5,568446438),i=g(i,r,n,o,t[a+14],9,-1019803690),o=g(o,i,r,n,t[a+3],14,-187363961),n=g(n,o,i,r,t[a+8],20,1163531501),r=g(r,n,o,i,t[a+13],5,-1444681467),i=g(i,r,n,o,t[a+2],9,-51403784),o=g(o,i,r,n,t[a+7],14,1735328473),r=b(r,n=g(n,o,i,r,t[a+12],20,-1926607734),o,i,t[a+5],4,-378558),i=b(i,r,n,o,t[a+8],11,-2022574463),o=b(o,i,r,n,t[a+11],16,1839030562),n=b(n,o,i,r,t[a+14],23,-35309556),r=b(r,n,o,i,t[a+1],4,-1530992060),i=b(i,r,n,o,t[a+4],11,1272893353),o=b(o,i,r,n,t[a+7],16,-155497632),n=b(n,o,i,r,t[a+10],23,-1094730640),r=b(r,n,o,i,t[a+13],4,681279174),i=b(i,r,n,o,t[a],11,-358537222),o=b(o,i,r,n,t[a+3],16,-722521979),n=b(n,o,i,r,t[a+6],23,76029189),r=b(r,n,o,i,t[a+9],4,-640364487),i=b(i,r,n,o,t[a+12],11,-421815835),o=b(o,i,r,n,t[a+15],16,530742520),r=m(r,n=b(n,o,i,r,t[a+2],23,-995338651),o,i,t[a],6,-198630844),i=m(i,r,n,o,t[a+7],10,1126891415),o=m(o,i,r,n,t[a+14],15,-1416354905),n=m(n,o,i,r,t[a+5],21,-57434055),r=m(r,n,o,i,t[a+12],6,1700485571),i=m(i,r,n,o,t[a+3],10,-1894986606),o=m(o,i,r,n,t[a+10],15,-1051523),n=m(n,o,i,r,t[a+1],21,-2054922799),r=m(r,n,o,i,t[a+8],6,1873313359),i=m(i,r,n,o,t[a+15],10,-30611744),o=m(o,i,r,n,t[a+6],15,-1560198380),n=m(n,o,i,r,t[a+13],21,1309151649),r=m(r,n,o,i,t[a+4],6,-145523070),i=m(i,r,n,o,t[a+11],10,-1120210379),o=m(o,i,r,n,t[a+2],15,718787259),n=m(n,o,i,r,t[a+9],21,-343485551),r=d(r,s),n=d(n,c),o=d(o,u),i=d(i,l)}return[r,n,o,i]}(function(t){if(0===t.length)return[];for(var e=8*t.length,r=new Uint32Array(p(e)),n=0;n<e;n+=8)r[n>>5]|=(255&t[n/8])<<n%32;return r}(t),8*t.length))}));var E=r(72045);function x(t,e,r,n){switch(t){case 0:return e&r^~e&n;case 1:case 3:return e^r^n;case 2:return e&r^e&n^r&n}}function I(t,e){return t<<e|t>>>32-e}const S=h("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var n=unescape(encodeURIComponent(t));t=[];for(var o=0;o<n.length;++o)t.push(n.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var i=t.length/4+2,a=Math.ceil(i/16),s=new Array(a),c=0;c<a;++c){for(var u=new Uint32Array(16),l=0;l<16;++l)u[l]=t[64*c+4*l]<<24|t[64*c+4*l+1]<<16|t[64*c+4*l+2]<<8|t[64*c+4*l+3];s[c]=u}s[a-1][14]=8*(t.length-1)/Math.pow(2,32),s[a-1][14]=Math.floor(s[a-1][14]),s[a-1][15]=8*(t.length-1)&4294967295;for(var f=0;f<a;++f){for(var h=new Uint32Array(80),p=0;p<16;++p)h[p]=s[f][p];for(var d=16;d<80;++d)h[d]=I(h[d-3]^h[d-8]^h[d-14]^h[d-16],1);for(var v=r[0],y=r[1],g=r[2],b=r[3],m=r[4],w=0;w<80;++w){var E=Math.floor(w/20),S=I(v,5)+x(E,y,g,b)+m+e[E]+h[w]>>>0;m=b,b=g,g=I(y,30)>>>0,y=v,v=S}r[0]=r[0]+v>>>0,r[1]=r[1]+y>>>0,r[2]=r[2]+g>>>0,r[3]=r[3]+b>>>0,r[4]=r[4]+m>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]})),_="00000000-0000-0000-0000-000000000000",k=function(t){if(!(0,l.Z)(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}},13653:(t,e,r)=>{"use strict";var n;r.d(e,{Z:()=>i});var o=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}},3958:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});for(var n=r(27738),o=[],i=0;i<256;++i)o.push((i+256).toString(16).substr(1));const a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase();if(!(0,n.Z)(r))throw TypeError("Stringified UUID is invalid");return r}},72045:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var n=r(13653),o=r(3958);const i=function(t,e,r){var i=(t=t||{}).random||(t.rng||n.Z)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){r=r||0;for(var a=0;a<16;++a)e[r+a]=i[a];return e}return(0,o.Z)(i)}},27738:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});const n=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,o=function(t){return"string"==typeof t&&n.test(t)}}}]);
//# sourceMappingURL=../sourcemaps/913.e061b30ffa02da3c092d1b24539eb007.js.map