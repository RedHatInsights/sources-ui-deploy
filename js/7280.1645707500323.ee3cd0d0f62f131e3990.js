(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[7280],{68309:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(92950),o=r.n(n),i=r(51344),a=r(86350),c=r(29558),u=r(86235),s=r(60076),l=r(15671),p=r(43144),f=r(97326),d=r(60136),E=r(82963),v=r(61120),y=r(4942),O=r(45697),g=r.n(O),m=r(42396),I=r(60079),b=r(11146);var P=function(e){(0,d.Z)(a,e);var t,r,i=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,v.Z)(t);if(r){var o=(0,v.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,E.Z)(this,e)});function a(){var e;(0,l.Z)(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=i.call.apply(i,[this].concat(r)),(0,y.Z)((0,f.Z)(e),"state",{error:null}),e}return(0,p.Z)(a,[{key:"componentDidCatch",value:function(e){var t=I.Tb(e);this.props.dispatch((0,b.Hz)({title:"".concat(e.toString()," (Sentry ID: ").concat(t,")"),variant:"danger",description:e.stack}))}},{key:"render",value:function(){var e=this.state.error,t=this.props.children;return e?o().createElement(n.Fragment,null,"Error occurred"):o().createElement(n.Fragment,null,t)}}],[{key:"getDerivedStateFromError",value:function(e,t){return{error:e,errorInfo:t}}}]),a}(n.Component);P.propTypes={dispatch:g().func.isRequired,children:g().node};const _=(0,m.$j)()(P);var h=r(93433),S=r(45199);const D=function(e){var t=e.children,r=(0,m.I0)();return(0,n.useEffect)((function(){r((function(e){return e({type:S.a.SET_WRITE_PERMISSIONS_PENDING}),insights.chrome.getUserPermissions("sources",!0).then((function(t){var r=t.reduce((function(e,t){return[].concat((0,h.Z)(e),[null==t?void 0:t.permission])}),[]),n=r.includes("sources:*:*")||r.includes("sources:*:write");e({type:S.a.SET_WRITE_PERMISSIONS_FULFILLED,payload:n})})).catch((function(t){return e({type:S.a.SET_WRITE_PERMISSIONS_REJECTED,payload:{error:{detail:t.detail||t.data,title:"Cannot get user's credentials"}}})}))}))}),[]),t};var Z=r(54876);const T=function(){var e=(0,m.I0)(),t=(0,u.useLocation)().pathname,r=(0,m.v9)((function(e){return e.sources}),m.wU),o=(0,n.useRef)(t);return(0,n.useEffect)((function(){var t=(0,Z.uY)(),r=t.applications,n=t.types;r||n?Promise.all([e((0,b.WP)()),e((0,b.qJ)())]).then((function(){return e((0,b.il)(Z.mB))})):Promise.all([e((0,b.WP)()),e((0,b.qJ)()),e((0,b.il)(Z.mB))])}),[]),(0,n.useEffect)((function(){o.current!==t&&((0,Z.rh)(r),o.current=t)}),[t]),null};var j=r(7995);const R=function(){var e=(0,u.useHistory)();return(0,n.useEffect)((function(){try{insights.chrome.init(),insights.chrome.identifyApp("sources");var t=insights.chrome.on("APP_NAVIGATION",(function(t){var r;return"sources"===(t.navId.split("/").pop()||(null===(r=t.domEvent)||void 0===r?void 0:r.href.split("/").pop()))&&e.push(s._j.sources.path)}));return function(){return null==t?void 0:t()}}catch(e){console.warn("Failed to initialize chrome navigation.")}}),[]),null};var L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r="/",n=e.replace(/(#|\?).*/,"").split("/");return n.shift(),"beta"===n[0]&&(n.shift(),r="/beta/"),(0,h.Z)(new Array(t)).reduce((function(e,r,o){return"".concat(e).concat(n[o]||"").concat(o<t-1?"/":"")}),r)};const w=function(){return(0,n.useEffect)((function(){return function(){sessionStorage.removeItem(j.t)}}),[]),o().createElement(u.BrowserRouter,{basename:L(location.pathname,1)},o().createElement(c.Z,{locale:"en"},o().createElement(o().Fragment,null,o().createElement(i.ZP,null),o().createElement(_,null,o().createElement(D,null,o().createElement(a.Z,{style:{padding:0}},o().createElement(T,null),o().createElement(R,null),o().createElement(s.ZP,null)))))))}},2043:(e,t,r)=>{"use strict";r.d(t,{l:()=>o});var n=r(4138),o=function(){return(0,n.Rj)().listSourceTypes().then((function(e){return e.data}))}},45199:(e,t,r)=>{"use strict";r.d(t,{a:()=>a});var n=r(4942);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=["SET_WRITE_PERMISSIONS"].reduce((function(e,t){var r;return i(i({},e),{},(r={},(0,n.Z)(r,t,t),(0,n.Z)(r,"".concat(t,"_PENDING"),"".concat(t,"_PENDING")),(0,n.Z)(r,"".concat(t,"_FULFILLED"),"".concat(t,"_FULFILLED")),(0,n.Z)(r,"".concat(t,"_REJECTED"),"".concat(t,"_REJECTED")),r))}),{})},17711:(e,t,r)=>{"use strict";r.d(t,{X5:()=>R});var n,o=r(93433),i=r(4942),a=r(9036),c=r(84885),u=r(83215),s=r(53894),l=r(57283),p=r.n(l),f=r(13458);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={loaded:0,pageSize:50,pageNumber:1,entities:[],numberOfEntities:0,appTypesLoaded:!1,sourceTypesLoaded:!1,filterValue:{},sortBy:"created_at",sortDirection:"desc",removingSources:[],activeVendor:r(84866).JL,appTypes:[],sourceTypes:[]},y=function(e,t){var r=t.payload,n=r.sourceId,i=r.app;return E(E({},e),{},{entities:e.entities.map((function(e){return e.id===n?E(E({},e),{},{applications:[].concat((0,o.Z)(e.applications),[i])}):e}))})},O=function(e,t){var r=t.payload,n=r.id,o=r.name;return E(E({},e),{},{entities:e.entities.map((function(e){return e.id===n?E(E({},e),{},{name:o}):e}))})};const g=(n={},(0,i.Z)(n,f.aI.LOAD_ENTITIES_PENDING,(function(e,t){var r=t.options;return E(E({},e),{},{loaded:e.loaded+1,paginationClicked:!1},r)})),(0,i.Z)(n,f.aI.LOAD_ENTITIES_FULFILLED,(function(e,t){var r,n=t.payload,o=n.sources,i=n.sources_aggregate,a=t.options;return E(E({},e),{},{loaded:Math.max(e.loaded-1,0),entities:o,numberOfEntities:null==i||null===(r=i.aggregate)||void 0===r?void 0:r.total_count},a)})),(0,i.Z)(n,f.aI.LOAD_ENTITIES_REJECTED,(function(e,t){var r=t.payload.error;return E(E({},e),{},{fetchingError:r})})),(0,i.Z)(n,f.aI.LOAD_SOURCE_TYPES_PENDING,(function(e){return E(E({},e),{},{sourceTypes:[],sourceTypesLoaded:!1})})),(0,i.Z)(n,f.aI.LOAD_SOURCE_TYPES_FULFILLED,(function(e,t){var r=t.payload;return E(E({},e),{},{sourceTypes:r,sourceTypesLoaded:!0})})),(0,i.Z)(n,f.aI.LOAD_SOURCE_TYPES_REJECTED,(function(e,t){var r=t.payload.error;return E(E({},e),{},{fetchingError:r})})),(0,i.Z)(n,f.aI.LOAD_APP_TYPES_PENDING,(function(e){return E(E({},e),{},{appTypes:[],appTypesLoaded:!1})})),(0,i.Z)(n,f.aI.LOAD_APP_TYPES_FULFILLED,(function(e,t){var r=t.payload;return E(E({},e),{},{appTypes:r,appTypesLoaded:!0})})),(0,i.Z)(n,f.aI.LOAD_APP_TYPES_REJECTED,(function(e,t){var r=t.payload.error;return E(E({},e),{},{fetchingError:r})})),(0,i.Z)(n,f.aI.REMOVE_SOURCE_PENDING,(function(e,t){var r=t.meta;return E(E({},e),{},{removingSources:[].concat((0,o.Z)(e.removingSources),[r.sourceId])})})),(0,i.Z)(n,f.aI.REMOVE_SOURCE_FULFILLED,(function(e,t){var r=t.meta;return E(E({},e),{},{removingSources:e.removingSources.filter((function(e){return e!==r.sourceId})),entities:e.entities.filter((function(e){return e.id!==r.sourceId}))})})),(0,i.Z)(n,f.aI.REMOVE_SOURCE_REJECTED,(function(e,t){var r=t.meta;return E(E({},e),{},{removingSources:e.removingSources.filter((function(e){return e!==r.sourceId}))})})),(0,i.Z)(n,f.aI.REMOVE_APPLICATION_PENDING,(function(e,t){var r=t.meta;return E(E({},e),{},{entities:e.entities.map((function(e){return e.id===r.sourceId?E(E({},e),{},{applications:e.applications.map((function(e){return e.id===r.appId?E(E({},e),{},{isDeleting:!0}):e}))}):e}))})})),(0,i.Z)(n,f.aI.REMOVE_APPLICATION_FULFILLED,(function(e,t){var r=t.meta;return E(E({},e),{},{entities:e.entities.map((function(e){return e.id===r.sourceId?E(E({},e),{},{applications:e.applications.filter((function(e){return e.id!==r.appId}))}):e}))})})),(0,i.Z)(n,f.aI.REMOVE_APPLICATION_REJECTED,(function(e,t){var r=t.meta;return E(E({},e),{},{entities:e.entities.map((function(e){return e.id===r.sourceId?E(E({},e),{},{applications:e.applications.map((function(e){return e.id===r.appId?E(E({},e),{},{isDeleting:void 0}):e}))}):e}))})})),(0,i.Z)(n,f.aI.RENAME_SOURCE_PENDING,O),(0,i.Z)(n,f.aI.RENAME_SOURCE_REJECTED,O),(0,i.Z)(n,f.ei,(function(e,t){var r=t.payload,n=r.column,o=r.direction;return E(E({},e),{},{sortBy:n,sortDirection:o})})),(0,i.Z)(n,f.dD,(function(e,t){var r=t.payload,n=r.page,o=r.size;return E(E({},e),{},{pageSize:o,pageNumber:n})})),(0,i.Z)(n,f.lN,(function(e,t){var r=t.payload.value;return E(E({},e),{},{filterValue:E(E({},e.filterValue),r),pageNumber:1})})),(0,i.Z)(n,f.Q9,y),(0,i.Z)(n,f.Q9,y),(0,i.Z)(n,f.BW,(function(e,t){var r=t.payload.count;return E(E({},e),{},{numberOfEntities:r})})),(0,i.Z)(n,f.aE,(function(e,t){var r=t.payload.source;return E(E({},e),{},{entities:[].concat((0,o.Z)(e.entities),[E(E({},r),{},{hidden:!0})])})})),(0,i.Z)(n,f.Gs,(function(e){return E(E({},e),{},{filterValue:{},pageNumber:1})})),(0,i.Z)(n,f.y3,(function(e,t){var r=t.payload.vendor;return E(E({},e),{},{filterValue:E(E({},e.filterValue),{},{source_type_id:[],applications:[]}),activeVendor:r})})),n);var m,I=r(45199);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _={writePermissions:void 0},h=function(e){return P(P({},e),{},{writePermissions:void 0})};const S=(m={},(0,i.Z)(m,I.a.SET_WRITE_PERMISSIONS_PENDING,h),(0,i.Z)(m,I.a.SET_WRITE_PERMISSIONS_FULFILLED,(function(e,t){var r=t.payload;return P(P({},e),{},{writePermissions:r})})),(0,i.Z)(m,I.a.SET_WRITE_PERMISSIONS_REJECTED,h),m);var D=r(54876);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e){return function(t){return function(r){if(r.type===f.aI.LOAD_ENTITIES_PENDING){var n=e.getState().sources;(0,D.rh)(T(T({},n),r.options))}t(r)}}},R=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[s.Z,(0,c.ZP)({errorTitleKey:"error.title",errorDescriptionKey:"error.detail"}),p(),j].concat((0,o.Z)(e)),n=new a.ZP({},r);return n.register({sources:(0,a.Gg)(g,T(T({},v),t.sources))}),n.register({user:(0,a.Gg)(S,T(T({},_),t.user))}),n.register({notifications:u.ee}),n.getStore()}()}},54876:(e,t,r)=>{"use strict";r.d(t,{rh:()=>p,uY:()=>f,mB:()=>d});var n=r(29439),o=r(4942),i=r(4138),a=r(4833),c=r(30567),u=r(84866);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.sortBy,r=e.sortDirection,n=e.pageNumber,o=e.pageSize,a=e.filterValue,c=e.activeVendor,s="sort_by[]=".concat(t,":").concat(r),l="limit=".concat(o,"&offset=").concat((n-1)*o,"&activeVendor=").concat(c||u.JL),p=(0,i.sd)(a),f="?".concat(s,"&").concat(l).concat(p?"&".concat(p):""),d=decodeURIComponent("".concat(window.location.pathname).concat(f));return location.href!==d?history.replaceState("","",d):null},f=function(e){var t=e||new URLSearchParams(window.location.search),r=t.getAll("application"),n=t.getAll("type");return{applications:r.length&&r,types:n.length&&n}},d=function(e){var t,r,o={},i=new URLSearchParams(window.location.search),s=i.get("sort_by[]");s&&(t=s.split(":")[0],r=s.split(":")[1],t=(0,c.E)({formatMessage:function(){return""}}).filter((function(e){return e.sortable})).map((function(e){return e.value})).includes(t)?t:"created_at",r=["desc","asc"].includes(r)?r:"desc"),t&&r&&(o={sortBy:t,sortDirection:r});var p,d=i.get("limit"),E=i.get("offset");E&&d&&(p=E/d+1,isNaN(p)&&(p=void 0)),d&&p&&(o=l(l({},o),{},{pageNumber:parseInt(p,10),pageSize:Math.min(parseInt(d,10),100)}));var v={},y=i.get("filter[name][contains_i]");y&&(v={name:y});var O=i.getAll("filter[source_type_id][]");O.length>0&&(v=l(l({},v),{},{source_type_id:O}));var g=i.getAll("filter[applications][application_type_id][eq][]");g.length>0&&(v=l(l({},v),{},{applications:g})),i.get("filter[availability_status]")?v=l(l({},v),{},{availability_status:[a.Rl]}):i.get("filter[availability_status][]")&&(v=l(l({},v),{},{availability_status:[a.nZ]}));var m=f(i),I=m.applications,b=m.types;if(I||b){var P,_,h=e().sources,S=h.appTypes,D=h.sourceTypes,Z=null===(P=I.map)||void 0===P?void 0:P.call(I,(function(e){var t;return null===(t=S.find((function(t){return t.name.includes(e)})))||void 0===t?void 0:t.id})).filter(Boolean),T=null===(_=b.map)||void 0===_?void 0:_.call(b,(function(e){var t;return null===(t=D.find((function(t){return t.name===e})))||void 0===t?void 0:t.id})).filter(Boolean);v=l(l(l({},v),(null==Z?void 0:Z.length)&&{applications:Z}),(null==T?void 0:T.length)&&{source_type_id:T})}Object.entries(v).map((function(e){var t=(0,n.Z)(e,2);return t[0],t[1]})).filter(Boolean).length>0&&(o=l(l({},o),{},{filterValue:v}));var j=i.get("activeVendor");return j!==u.JL&&j!==u.B0||(o=l(l({},o),{},{activeVendor:j})),o}},81754:()=>{},80598:()=>{},10108:()=>{},74181:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/7280.4f2b6c6cb96fee0559a7b914ea62d78f.js.map