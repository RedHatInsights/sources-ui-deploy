"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[746,8815],{95957:(e,t,a)=>{function n(){this.cache=Object.create(null)}n.prototype.get=function(e){return this.cache[e]},n.prototype.set=function(e,t){this.cache[e]=t}},82644:(e,t,a)=>{a.d(t,{Z0:()=>n}),a(95957);var n={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:function(e){},onWarn:function(e){}}},60076:(e,t,a)=>{a.d(t,{_j:()=>n,yS:()=>r}),a(92950),a(86235),a(98583);var n={sources:{path:"/sources"},sourcesNew:{path:"/sources/new",writeAccess:!0},sourcesRemove:{path:"/sources/remove/:id",redirectNoId:!0,writeAccess:!0},sourcesDetail:{path:"/sources/detail/:id",redirectNoId:!0},sourcesDetailRename:{path:"/sources/detail/:id/rename",redirectNoId:!0,writeAccess:!0,noPaused:!0},sourcesDetailRemove:{path:"/sources/detail/:id/remove",redirectNoId:!0,writeAccess:!0},sourcesDetailAddApp:{path:"/sources/detail/:id/add_app/:app_type_id",redirectNoId:!0,writeAccess:!0,noPaused:!0},sourcesDetailRemoveApp:{path:"/sources/detail/:id/remove_app/:app_id",redirectNoId:!0,writeAccess:!0,noPaused:!0},sourcesDetailEditCredentials:{path:"/sources/detail/:id/edit_credentials",redirectNoId:!0,writeAccess:!0}},r=function(e,t){return e.replace(":id",t)}},48815:(e,t,a)=>{a.d(t,{be:()=>y,Cu:()=>O,rL:()=>M,ye:()=>j,uc:()=>Z,oI:()=>k,TA:()=>b,Rj:()=>g});var n=a(29439),r=a(78542),o=a.n(r),i=a(4942),s=a(15861),c=a(64687),u=a.n(c),l=a(80729);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(){return(d=(0,s.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=a(84866),m=a(4833),v=a(34155),h="".concat(v.env.BASE_PATH||"/api","/sources/v3.1"),y=o().create();y.interceptors.request.use((function(e){return d.apply(this,arguments)})),y.interceptors.response.use((function(e){return e.data?e.data:e})),y.interceptors.response.use(null,(function(e){if(e.response&&401===e.response.status)return window.insights.chrome.auth.logout(),!1;throw e})),y.interceptors.response.use(null,(function(e){throw e.response&&e.response.status>=500&&e.response.status<600&&(0,l.e)((function(t){t.setTag("request_id",e.response.req_id)})),e})),y.interceptors.response.use(null,(function(e){if(!o().isCancel(e))try{var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);if(t.response&&t.response.data)throw t.response.data;throw e}catch(e){var a=(0,l.Tb)(e);throw e.sentryId=a,e}})),y.interceptors.response.use((function(e){return e.errors&&e.errors.length>0?Promise.reject({detail:e.errors[0].message}):e})),y.interceptors.response.use(null,(function(e){if(e.errors&&403===e.errors[0].status)return Promise.reject({detail:e.errors[0].detail,title:"Forbidden access"});throw e}));var g=function(){return{checkAvailabilitySource:function(e){return y.post("".concat(h,"/sources/").concat(e,"/check_availability"))},updateSource:function(e,t){return y.patch("".concat(h,"/sources/").concat(e),t)},updateEndpoint:function(e,t){return y.patch("".concat(h,"/endpoints/").concat(e),t)},createEndpoint:function(e){return y.post("".concat(h,"/endpoints"),e)},updateAuthentication:function(e,t){return y.patch("".concat(h,"/authentications/").concat(e),t)},createAuthentication:function(e){return y.post("".concat(h,"/authentications"),e)},showSource:function(e){return y.get("".concat(h,"/sources/").concat(e))},listSourceEndpoints:function(e){return y.get("".concat(h,"/sources/").concat(e,"/endpoints"))},listSourceApplications:function(e){return y.get("".concat(h,"/sources/").concat(e,"/applications"))},listEndpointAuthentications:function(e){return y.get("".concat(h,"/endpoints/").concat(e,"/authentications"))},deleteSource:function(e){return y.delete("".concat(h,"/sources/").concat(e))},createApplication:function(e){return y.post("".concat(h,"/applications"),e)},postGraphQL:function(e){return y.post("".concat(h,"/graphql"),e)},listSourceTypes:function(){return y.get("".concat(h,"/source_types"))},doLoadAppTypes:function(){return y.get("".concat(h,"/application_types"))},deleteApplication:function(e){return y.delete("".concat(h,"/applications/").concat(e))},createAuthApp:function(e){return y.post("".concat(h,"/application_authentications"),e)},deleteAuthentication:function(e){return y.delete("".concat(h,"/authentications/").concat(e))},showAuthentication:function(e){return y.get("".concat(h,"/authentications/").concat(e))},updateApplication:function(e,t){return y.patch("".concat(h,"/applications/").concat(e),t)},showApplication:function(e){return y.get("".concat(h,"/applications/").concat(e))},listSourceAuthentications:function(e){return y.get("".concat(h,"/sources/").concat(e,"/authentications"))},createSource:function(e){return y.post("".concat(h,"/sources"),e)},getEndpoint:function(e){return y.get("".concat(h,"/endpoints/").concat(e))},getGoogleAccount:function(){return y.get("".concat(h,"/app_meta_data?filter[name]=gcp_service_account"))},bulkCreate:function(e){return y.post("".concat(h,"/bulk_create"),e)},pauseApplication:function(e){return y.post("".concat(h,"/applications/").concat(e,"/pause"))},unpauseApplication:function(e){return y.post("".concat(h,"/applications/").concat(e,"/unpause"))},pauseSource:function(e){return y.post("".concat(h,"/sources/").concat(e,"/pause"))},unpauseSource:function(e){return y.post("".concat(h,"/sources/").concat(e,"/unpause"))}}},b=function(e){return g().deleteSource(e).catch((function(e){throw{error:{detail:e.errors[0].detail}}}))},_=function(e,t){return"limit:".concat(e,", offset:").concat((t-1)*e)},E=function(e,t){return e?"source_type_id"===e?'sort_by: { name: "source_type.product_name", direction: '.concat(t," }"):"applications"===e?'sort_by: { name: "applications", direction: '.concat(t," }"):'sort_by: { name: "'.concat(e,'", direction: ').concat(t," }"):""},w="\n    id,\n    created_at,\n    source_type_id,\n    name,\n    imported,\n    availability_status,\n    source_ref,\n    last_checked_at,\n    updated_at,\n    last_available_at,\n    app_creation_workflow,\n    paused_at,\n    authentications { authtype, username, availability_status_error, availability_status }\n    applications { application_type_id, id, availability_status_error, availability_status, paused_at, authentications { id, resource_type } },\n    endpoints { id, scheme, host, port, path, receptor_node, role, certificate_authority, verify_ssl, availability_status_error, availability_status, authentications { authtype, availability_status, availability_status_error } }\n",Z=function(e){var t=e.pageSize,a=e.pageNumber,n=e.sortBy,r=e.sortDirection,o=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=[];n.name&&o.push('{ name: "name", operation: "contains_i", value: "'.concat(n.name,'" }')),(null===(e=n.source_type_id)||void 0===e?void 0:e.length)>0&&o.push('{ name: "source_type_id", operation: "eq", value: ['.concat(n.source_type_id.map((function(e){return'"'.concat(e,'"')})).join(", "),"] }")),(null===(t=n.applications)||void 0===t?void 0:t.length)>0&&o.push('{ name: "applications.application_type_id", operation: "eq", value: ['.concat(n.applications.map((function(e){return'"'.concat(e,'"')})).join(", "),"] }")),r===f.JL&&o.push('{ name: "source_type.category", operation: "eq", value: "Cloud" }'),r===f.B0&&o.push('{ name: "source_type.category", operation: "eq", value: "Red Hat" }');var i=null===(a=n.availability_status)||void 0===a?void 0:a[0];return i&&(i===m.Rl?o.push('{ name: "availability_status", operation: "eq", value: "'.concat(m.Rl,'" }')):i===m.nZ&&o.push('{ name: "availability_status", operation: "eq", value: ["'.concat(m.L,'", "').concat(m.nZ,'"] }'))),o.length>0?"filter: [ ".concat(o.join(", ")," ]"):""}(e.filterValue,e.activeCategory),i=[_(t,a),E(n,r),o].join(",");return g().postGraphQL({query:"{ sources(".concat(i,")\n      { ").concat(w," },\n     meta{count}\n    }")}).then((function(e){return e.data}))},O=function(e){return g().createApplication(e)},M=function(e,t){return g().deleteApplication(e).catch((function(e){var a=(0,n.Z)(e.errors,1)[0].detail;throw{error:{title:t,detail:a}}}))},k=function(e){return g().postGraphQL({query:'{ sources(filter: { name: "id", operation: "eq", value: "'.concat(e,'" })\n            { ').concat(w," }\n        }")}).then((function(e){return e.data}))},j=function(e){return g().postGraphQL({query:'{ sources(filter: { name: "id", operation: "eq", value: "'.concat(e,'" })\n          { applications {\n              application_type_id,\n              id,\n              availability_status_error,\n              availability_status,\n              paused_at,\n              extra,\n              authentications {\n                  id\n              }\n          } }\n      }')}).then((function(e){return e.data}))}},98583:(e,t,a)=>{a.d(t,{X6:()=>_,Xf:()=>h,aN:()=>v,mI:()=>y,sk:()=>g});var n=a(87462),r=a(45987),o=a(92950),i=a.n(o),s=a(45697),c=a.n(s),u=a(68770),l=a(80123),p=a(55138),d=a(30567),f=["isDeleting"],m=["row"],v=function(e){var t=e.width,a=void 0===t?"100%":t,n=e.height,r=void 0===n?"100%":n,o=e.className,s=void 0===o?"":o;return i().createElement("span",{className:"src-c-loader ".concat(s),style:{width:a,height:r},role:"progressbar"})};v.propTypes={className:c().string,width:c().oneOfType([c().string,c().number]),height:c().oneOfType([c().string,c().number])};var h=function(){return i().createElement(v,{className:"top-pagination",height:30,width:200})},y=function(){return i().createElement(p.Bullseye,{className:"src-c-bullseye__placeholder-loader","data-testid":"placeholder-table"},i().createElement(p.Spinner,{size:"xl"}))},g=function(e){var t=e.row,a=t.isDeleting,o=(0,r.Z)(t,f),s=(0,r.Z)(e,m);return a?i().createElement("tr",null,i().createElement("td",{colSpan:d.W,className:"pf-u-p-md","data-testid":"removing-row"},i().createElement(v,{height:100}))):i().createElement(u.RowWrapper,(0,n.Z)({},s,{row:o,className:"src-c-row-vertical-centered","data-testid":"row"}))};g.propTypes={row:c().object.isRequired};var b=function(e){return i().createElement(p.Card,{className:"pf-u-m-md"},i().createElement(p.CardBody,null,i().createElement(v,e)))},_=function(){return i().createElement("div",{className:"src-c-detail-page"},i().createElement(l.Z,null,i().createElement(v,{height:96})),i().createElement(p.Grid,null,i().createElement(p.GridItem,{md:"6"},i().createElement(b,{height:218})),i().createElement(p.GridItem,{md:"6"},i().createElement(b,{height:218})),i().createElement(p.GridItem,{md:"12"},i().createElement(b,{height:324}))))}},84866:(e,t,a)=>{a.d(t,{B0:()=>o,IV:()=>l,JL:()=>i,M$:()=>s,N9:()=>r,OH:()=>n,Qr:()=>c,T2:()=>p,fn:()=>u});var n="satellite",r="ansible-tower",o="Red Hat",i="Cloud",s="/insights/platform/topological-inventory",c="/insights/platform/cost-management",u="/insights/platform/cloud-meter",l="/insights/platform/catalog",p=function(e){var t,a;return[null===(t=e.find((function(e){return e.name===u})))||void 0===t?void 0:t.id,null===(a=e.find((function(e){return e.name===c})))||void 0===a?void 0:a.id]}},4833:(e,t,a)=>{a.d(t,{BN:()=>B,Bj:()=>x,Ee:()=>A,Fd:()=>k,Gz:()=>U,L:()=>N,P5:()=>j,Rl:()=>T,Z3:()=>z,bF:()=>M,c:()=>F,jl:()=>P,nZ:()=>C,vh:()=>S});var n=a(45987),r=a(87462),o=a(93433),i=a(29439),s=a(4942),c=a(92950),u=a.n(c),l=a(45697),p=a.n(l),d=a(55138),f=a(43047),m=a(5913),v=a(17546),h=a(44012),y=a(86896),g=a(62410),b=a(86235),_=a(60076),E=["app","showStatusText"],w=["applications"];function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){(0,s.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=function(e){return{http:"80",https:"443"}[e]},k=function(e){var t=Object.keys(e).reduce((function(t,a){return O(O({},t),{},(0,s.Z)({},a,e[a]||""))}),{}),a=t.scheme,n=void 0===a?"":a,r=t.host,o=void 0===r?"":r,i=t.path,c=void 0===i?"":i,u=t.port,l=void 0===u?"":u,p="".concat(n,"://").concat(o).concat(function(e,t){return t&&String(t)!==M(e)?":".concat(t):""}(n,l)).concat(c);if("://"!==p)return p},j=function(e,t,a){var n=a.sourceTypes.find((function(t){return t.id===e}));return n&&n.product_name||e||""},S=function(e){return u().createElement("span",{className:"src-c-help-cursor"},u().createElement(g.Z,{type:"relative",date:e}))},P=function(e,t,a){var n=a.sourceTypes;return u().createElement(d.TextContent,null,u().createElement(b.Link,{to:(0,_.yS)(_._j.sourcesDetail.path,t.id)},e),u().createElement("br",{key:"".concat(t.id,"-br")}),u().createElement(d.Text,{key:t.id,component:d.TextVariants.small},function(e,t){var a=t.find((function(t){return t.id===e.source_type_id}));return a&&"openshift"===a.name}(t,n)&&function(e){return e.endpoints&&e.endpoints[0]&&k(e.endpoints[0])}(t)))},A=function(e){if(!e)return null;var t=function(e){return{cfme:u().createElement(h.Z,{id:"sources.cloudformImportTooltip",defaultMessage:"This source can be managed from your connected CloudForms application."})}[e.toLowerCase()]}(e);return t?u().createElement(d.Tooltip,{content:t},u().createElement(d.Badge,{isRead:!0,className:"src-m-help-cursor"},u().createElement(h.Z,{id:"sources.imported",defaultMessage:"imported"}))):u().createElement(d.Badge,{isRead:!0},u().createElement(h.Z,{id:"sources.imported",defaultMessage:"imported"}))},T="available",C="unavailable",N="partially_available",x="in_progress",D="paused_at",q=function(e){var t;return(t={},(0,s.Z)(t,C,"red"),(0,s.Z)(t,T,"green"),(0,s.Z)(t,N,"orange"),(0,s.Z)(t,D,"cyan"),t)[e]||"grey"},I=function(e){var t;return(t={},(0,s.Z)(t,C,u().createElement(h.Z,{id:"sources.unavailable",defaultMessage:"Unavailable"})),(0,s.Z)(t,T,u().createElement(h.Z,{id:"sources.available",defaultMessage:"Available"})),(0,s.Z)(t,N,u().createElement(h.Z,{id:"sources.partiallyAvailable",defaultMessage:"Partially available"})),(0,s.Z)(t,x,u().createElement(h.Z,{id:"sources.inProgress",defaultMessage:"In progress"})),(0,s.Z)(t,D,u().createElement(h.Z,{id:"sources.paused",defaultMessage:"Paused"})),t)[e]||u().createElement(h.Z,{id:"sources.unknown",defaultMessage:"Unknown"})},L=function(){return u().createElement(h.Z,{id:"sources.unknownError",defaultMessage:"unavailable"})},R=function(e,t){return u().createElement(u().Fragment,null,t.source&&u().createElement(u().Fragment,null,u().createElement(h.Z,{id:"sources.sourceError",defaultMessage:"Source's status: { error }",values:{error:t.source}}),u().createElement("br",null)),t.endpoint&&u().createElement(u().Fragment,null,u().createElement(h.Z,{id:"sources.endpointError",defaultMessage:"Endpoint error: { error }",values:{error:t.endpoint}}),u().createElement("br",null)),t.authentications&&u().createElement(h.Z,{id:"sources.authErrors",defaultMessage:"Authentication {count, plural, one {status} other {statuses}} : { errors }",values:{count:t.authentications.length,errors:t.authentications.map((function(e){var t=e.error,a=e.type;return u().createElement(u().Fragment,{key:a},u().createElement(h.Z,{id:"sources.errorAuthTemplate",defaultMessage:"{ type }: { error }",values:{error:t,type:a}}),u().createElement("br",null))}))}}),t.applications&&u().createElement(h.Z,{id:"sources.appErrors",defaultMessage:"Application {count, plural, one {status} other {statutes}}: { errors }",values:{count:t.applications.length,errors:t.applications.map((function(t){var a,n=t.error,r=t.id;return u().createElement(u().Fragment,{key:r},u().createElement(h.Z,{id:"sources.errorAppTemplate",defaultMessage:"{ app }: { error }",values:{error:n,app:(null===(a=e.find((function(e){return e.id===r})))||void 0===a?void 0:a.display_name)||r}}),u().createElement("br",null))}))}}))},G=function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(a={},(0,s.Z)(a,C,u().createElement(u().Fragment,null,u().createElement(h.Z,{id:"sources.appStatusPartiallyOK",defaultMessage:"We found {count, plural, one {this error} other {these errors}}.",values:{count:Object.keys(n).length}}),u().createElement("hr",null),R(t,n))),(0,s.Z)(a,T,u().createElement(h.Z,{id:"sources.appStatusOK",defaultMessage:"Everything works fine."})),(0,s.Z)(a,N,u().createElement(u().Fragment,null,u().createElement(h.Z,{id:"sources.appStatusPartiallyOK",defaultMessage:"We found {count, plural, one {this error} other {these errors}}.",values:{count:Object.keys(n).length}}),u().createElement("hr",null),R(t,n))),(0,s.Z)(a,x,u().createElement(h.Z,{id:"sources.inProgressStatus",defaultMessage:"We are still working to validate credentials. Check back for status updates."})),(0,s.Z)(a,D,u().createElement(h.Z,{id:"sources.pausedStatus",defaultMessage:"Data collection is temporarily disabled. Resume source to reestablish connection."})),a)[e]||u().createElement(h.Z,{id:"sources.appStatusUnknown",defaultMessage:"Status has not been verified."})},B=function(e,t,a){var n=a.appTypes,s=function(e){var t=e.availability_status,a=e.availability_status_error,n=e.applications,r=void 0===n?[]:n,s=e.endpoints;s=void 0===s?[]:s;var c=(0,i.Z)(s,1)[0];if(t===x)return{errors:{},status:x};var l={},p=0,d=0;return t===C?(l=O(O({},l),{},{source:a||u().createElement(L,null)}),p++,d++):t===T&&p++,r.map((function(e){e.availability_status===C?(l=O(O({},l),{},{applications:[].concat((0,o.Z)(l.applications?l.applications:[]),[{id:e.application_type_id,error:e.availability_status_error||u().createElement(L,null)}])}),p++,d++):e.availability_status===T&&p++})),(null==c?void 0:c.availability_status)===C?(l=O(O({},l),{},{endpoint:c.availability_status_error||u().createElement(L,null)}),p++,d++):(null==c?void 0:c.availability_status)===T&&p++,null!=c&&c.authentications&&c.authentications.map((function(e){e.availability_status===C?(l=O(O({},l),{},{authentications:[].concat((0,o.Z)(l.authentications?l.authentications:[]),[{type:e.authtype,error:e.availability_status_error||u().createElement(L,null)}])}),p++,d++):e.availability_status===T&&p++})),{errors:l,status:0===d?0===p?"unknown":T:d===p?C:N}}(t),c=t.paused_at?D:s.status;return u().createElement("span",null,u().createElement(d.Popover,{showClose:!1,"aria-label":"".concat(c," popover"),bodyContent:G(c,n,s.errors)},u().createElement(d.Label,(0,r.Z)({className:"src-m-clickable",color:q(c)},t.availability_status===x&&{icon:u().createElement(m.ZP,null)},t.paused_at&&{icon:u().createElement(v.ZP,null)}),I(c))))},F=function(e){var t=e.app,a=e.showStatusText,o=(0,n.Z)(e,E),i=(0,y.Z)(),c=function(e,t,a){var n;return(n={},(0,s.Z)(n,T,a.formatMessage({id:"sources.appStatusOK",defaultMessage:"Everything works fine."})),(0,s.Z)(n,C,t||a.formatMessage({id:"sources.unknownError",defaultMessage:"Unknown error"})),(0,s.Z)(n,x,u().createElement(h.Z,{id:"sources.inProgressStatus",defaultMessage:"We are still working to validate credentials. Check back for status updates."})),n)[e]||a.formatMessage({id:"sources.appStatusUnknown",defaultMessage:"Status has not been verified."})}(t.availability_status,t.availability_status_error,i);return u().createElement(d.Popover,(0,r.Z)({showClose:!1,key:t.display_name,"aria-label":"".concat(t.display_name," popover"),bodyContent:t.paused_at?"".concat(c," ").concat(i.formatMessage({id:"appplication.paused.additionalText",defaultMessage:"Resume this application to continue data collection."})):c},t.paused_at&&{headerContent:i.formatMessage({id:"application.paused.header",defaultMessage:"Application paused"})}),u().createElement(d.Label,(0,r.Z)({className:"src-m-clickable",color:q(t.availability_status)},t.availability_status===x&&{icon:u().createElement(m.ZP,null)},t.paused_at&&{icon:u().createElement(v.ZP,null)},o),a?I(t.availability_status):t.display_name))};F.propTypes={app:p().shape({display_name:p().string,availability_status:p().string,availability_status_error:p().string,paused_at:p().string}),showStatusText:p().bool};var W=function(e){var t=e.applications,a=(0,n.Z)(e,w),o=(0,y.Z)();return u().createElement(d.LabelGroup,(0,r.Z)({},a,{numLabels:2,collapsedText:o.formatMessage({id:"applications.showMore",defaultMessage:"{remaining} more"},{remaining:"${remaining}"})}),t.map((function(e,t){return u().createElement(F,{app:e,key:e.id||t})})))};W.propTypes={applications:p().arrayOf(p().shape({display_name:p().string,availability_status:p().string,availability_status_error:p().string,paused_at:p().string})).isRequired};var U=function(e,t,a){var n=a.appTypes,r=e.map((function(e){return function(e,t,a){var n=a.find((function(t){return t.id===e.application_type_id}));if(n){var r,o,i,s,c,u,l=e.availability_status,p=e.availability_status_error;return"Endpoint"===(null===(r=e.authentications)||void 0===r||null===(o=r[0])||void 0===o?void 0:o.resource_type)&&(l=null===(i=t.endpoints)||void 0===i||null===(s=i[0])||void 0===s?void 0:s.availability_status,p=null===(c=t.endpoints)||void 0===c||null===(u=c[0])||void 0===u?void 0:u.availability_status_error),{display_name:n.display_name,paused_at:e.paused_at,availability_status:l,availability_status_error:p}}}(e,t,n)})).filter(Boolean).sort((function(e,t){return e.display_name.localeCompare(t.display_name)}));return 0===r.length?"--":u().createElement(W,{numLabels:2,collapsedText:!0,applications:r})},z=function(e,t,a){var n=a.intl,r=a.sourceType;if("account_authorization"===e){var o,i=null==r?void 0:r.schema.authentication.find((function(e){return e.is_superkey})),s=null==t||null===(o=t.authentications)||void 0===o?void 0:o.find((function(e){var t=e.authtype;return t&&t===i.type}));return u().createElement(u().Fragment,null,n.formatMessage({id:"configurationMode.trust",defaultMessage:"Account authorization"}),(null==s?void 0:s.availability_status)===C&&u().createElement(d.Tooltip,{position:"top",content:s.availability_status_error||n.formatMessage({id:"configurationMode.trustmode.defaultError",defaultMessage:"Edit credentials required."})},u().createElement("span",{className:"pf-u-ml-sm"},u().createElement(f.ZP,{fill:"#C9190B"}))),u().createElement("div",{className:"pf-u-mt-sm"},u().createElement(b.Link,{to:(0,_.yS)(_._j.sourcesDetailEditCredentials.path,t.id)},u().createElement(d.Button,{variant:"link",id:"edit-super-credentials",isInline:!0},t.paused_at?n.formatMessage({id:"sources.viewCredentials",defaultMessage:"View credentials"}):n.formatMessage({id:"sources.editCredentials",defaultMessage:"Edit credentials"})))))}return n.formatMessage({id:"configurationMode.manual",defaultMessage:"Manual configuration"})}},30567:(e,t,a)=>{a.d(t,{E:()=>r,W:()=>o});var n=a(4833),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[{title:e.formatMessage({id:"sources.name",defaultMessage:"Name"}),value:"name",formatter:n.jl,sortable:!t},{title:e.formatMessage({id:"sources.type",defaultMessage:"Type"}),value:"source_type_id",formatter:n.P5,sortable:!t},{title:e.formatMessage({id:"sources.connectedApplications",defaultMessage:"Connected applications"}),value:"applications",formatter:n.Gz},{title:e.formatMessage({id:"sources.addedDate",defaultMessage:"Date added"}),value:"created_at",formatter:n.vh,sortable:!t},{hidden:!0,value:"imported",formatter:n.Ee},{title:e.formatMessage({id:"sources.status",defaultMessage:"Status"}),value:"availability_status",formatter:n.BN}]},o=r({formatMessage:function(){return""}}).length+1},74806:(e,t,a)=>{a.d(t,{_y:()=>o});var n=a(92950);a(8679);var r=n.createContext(null),o=(r.Consumer,r.Provider,r)},680:(e,t,a)=>{a.d(t,{lq:()=>s,wU:()=>c});var n=a(70655),r=a(92950),o=a(25687),i=a(82644);function s(e){(0,o.kG)(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}function c(e,t){if(e===t)return!0;if(!e||!t)return!1;var a=Object.keys(e),n=Object.keys(t),r=a.length;if(n.length!==r)return!1;for(var o=0;o<r;o++){var i=a[o];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}(0,n.pi)((0,n.pi)({},i.Z0),{textComponent:r.Fragment})},70655:(e,t,a)=>{a.d(t,{Jh:()=>i,_T:()=>r,fl:()=>c,mG:()=>o,pi:()=>n});var n=function(){return n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)};function r(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}function o(e,t,a,n){return new(a||(a=Promise))((function(r,o){function i(e){try{c(n.next(e))}catch(e){o(e)}}function s(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,s)}c((n=n.apply(e,t||[])).next())}))}function i(e,t){var a,n,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function s(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,r,o=a.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){r={error:e}}finally{try{n&&!n.done&&(a=o.return)&&a.call(o)}finally{if(r)throw r.error}}return i}function c(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e}Object.create,Object.create}}]);
//# sourceMappingURL=../sourcemaps/746.0d0227cffdb2f1d2390cc818e9ad2f21.js.map