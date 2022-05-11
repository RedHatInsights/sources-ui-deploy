"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[8815],{60076:(e,t,a)=>{a.d(t,{ZP:()=>p,_j:()=>u,yS:()=>l});var n=a(92950),r=a.n(n),i=a(86235),o=a(98583),s=(0,n.lazy)((function(){return Promise.all([a.e(908),a.e(3937),a.e(4650),a.e(3611),a.e(2181),a.e(2046),a.e(1337),a.e(593)]).then(a.bind(a,24080))})),c=(0,n.lazy)((function(){return Promise.all([a.e(8287),a.e(908),a.e(4015),a.e(3937),a.e(4938),a.e(2181),a.e(4397),a.e(6818)]).then(a.bind(a,63799))})),u={sources:{path:"/sources"},sourcesNew:{path:"/sources/new",writeAccess:!0},sourcesRemove:{path:"/sources/remove/:id",redirectNoId:!0,writeAccess:!0},sourcesDetail:{path:"/sources/detail/:id",redirectNoId:!0},sourcesDetailRename:{path:"/sources/detail/:id/rename",redirectNoId:!0,writeAccess:!0,noPaused:!0},sourcesDetailRemove:{path:"/sources/detail/:id/remove",redirectNoId:!0,writeAccess:!0},sourcesDetailAddApp:{path:"/sources/detail/:id/add_app/:app_type_id",redirectNoId:!0,writeAccess:!0,noPaused:!0},sourcesDetailRemoveApp:{path:"/sources/detail/:id/remove_app/:app_id",redirectNoId:!0,writeAccess:!0,noPaused:!0},sourcesDetailEditCredentials:{path:"/sources/detail/:id/edit_credentials",redirectNoId:!0,writeAccess:!0}},l=function(e,t){return e.replace(":id",t)};const p=function(){return r().createElement(n.Suspense,{fallback:r().createElement(o.zx,null)},r().createElement(i.Switch,null,r().createElement(i.Route,{path:u.sourcesDetail.path,component:c}),r().createElement(i.Route,{component:s})))}},48815:(e,t,a)=>{a.d(t,{be:()=>y,Cu:()=>k,rL:()=>O,M5:()=>_,ye:()=>P,uc:()=>M,oI:()=>A,TA:()=>b,Rj:()=>g,sd:()=>S});var n=a(29439),r=a(78542),i=a.n(r),o=a(4942),s=a(15861),c=a(87757),u=a.n(c),l=a(80729);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(){return(d=(0,s.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=a(84866),f=a(17570),v=a(34155),h="".concat(v.env.BASE_PATH||"/api","/sources/v3.1"),y=i().create();y.interceptors.request.use((function(e){return d.apply(this,arguments)})),y.interceptors.response.use((function(e){return e.data?e.data:e})),y.interceptors.response.use(null,(function(e){if(e.response&&401===e.response.status)return window.insights.chrome.auth.logout(),!1;throw e})),y.interceptors.response.use(null,(function(e){throw e.response&&e.response.status>=500&&e.response.status<600&&(0,l.e)((function(t){t.setTag("request_id",e.response.req_id)})),e})),y.interceptors.response.use(null,(function(e){if(!i().isCancel(e))try{var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){(0,o.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);if(t.response&&t.response.data)throw t.response.data;throw e}catch(e){var a=(0,l.Tb)(e);throw e.sentryId=a,e}})),y.interceptors.response.use((function(e){return e.errors&&e.errors.length>0?Promise.reject({detail:e.errors[0].message}):e})),y.interceptors.response.use(null,(function(e){if(e.errors&&403===e.errors[0].status)return Promise.reject({detail:e.errors[0].detail,title:"Forbidden access"});throw e}));var g=function(){return{checkAvailabilitySource:function(e){return y.post("".concat(h,"/sources/").concat(e,"/check_availability"))},updateSource:function(e,t){return y.patch("".concat(h,"/sources/").concat(e),t)},updateEndpoint:function(e,t){return y.patch("".concat(h,"/endpoints/").concat(e),t)},createEndpoint:function(e){return y.post("".concat(h,"/endpoints"),e)},updateAuthentication:function(e,t){return y.patch("".concat(h,"/authentications/").concat(e),t)},createAuthentication:function(e){return y.post("".concat(h,"/authentications"),e)},showSource:function(e){return y.get("".concat(h,"/sources/").concat(e))},listSourceEndpoints:function(e){return y.get("".concat(h,"/sources/").concat(e,"/endpoints"))},listSourceApplications:function(e){return y.get("".concat(h,"/sources/").concat(e,"/applications"))},listEndpointAuthentications:function(e){return y.get("".concat(h,"/endpoints/").concat(e,"/authentications"))},deleteSource:function(e){return y.delete("".concat(h,"/sources/").concat(e))},createApplication:function(e){return y.post("".concat(h,"/applications"),e)},postGraphQL:function(e){return y.post("".concat(h,"/graphql"),e)},listSourceTypes:function(){return y.get("".concat(h,"/source_types"))},doLoadAppTypes:function(){return y.get("".concat(h,"/application_types"))},deleteApplication:function(e){return y.delete("".concat(h,"/applications/").concat(e))},createAuthApp:function(e){return y.post("".concat(h,"/application_authentications"),e)},deleteAuthentication:function(e){return y.delete("".concat(h,"/authentications/").concat(e))},showAuthentication:function(e){return y.get("".concat(h,"/authentications/").concat(e))},updateApplication:function(e,t){return y.patch("".concat(h,"/applications/").concat(e),t)},showApplication:function(e){return y.get("".concat(h,"/applications/").concat(e))},listSourceAuthentications:function(e){return y.get("".concat(h,"/sources/").concat(e,"/authentications"))},createSource:function(e){return y.post("".concat(h,"/sources"),e)},getEndpoint:function(e){return y.get("".concat(h,"/endpoints/").concat(e))},getGoogleAccount:function(){return y.get("".concat(h,"/app_meta_data?filter[name]=gcp_service_account"))},bulkCreate:function(e){return y.post("".concat(h,"/bulk_create"),e)},pauseApplication:function(e){return y.post("".concat(h,"/applications/").concat(e,"/pause"))},unpauseApplication:function(e){return y.post("".concat(h,"/applications/").concat(e,"/unpause"))},pauseSource:function(e){return y.post("".concat(h,"/sources/").concat(e,"/pause"))},unpauseSource:function(e){return y.post("".concat(h,"/sources/").concat(e,"/unpause"))}}},_=function(){return g().doLoadAppTypes()},b=function(e){return g().deleteSource(e).catch((function(e){throw{error:{detail:e.errors[0].detail}}}))},E=function(e,t){return"limit:".concat(e,", offset:").concat((t-1)*e)},Z=function(e,t){return e?"source_type_id"===e?'sort_by: { name: "source_type.product_name", direction: '.concat(t," }"):"applications"===e?'sort_by: { name: "applications", direction: '.concat(t," }"):'sort_by: { name: "'.concat(e,'", direction: ').concat(t," }"):""},w="\n    id,\n    created_at,\n    source_type_id,\n    name,\n    imported,\n    availability_status,\n    source_ref,\n    last_checked_at,\n    updated_at,\n    last_available_at,\n    app_creation_workflow,\n    paused_at,\n    authentications { authtype, username, availability_status_error, availability_status }\n    applications { application_type_id, id, availability_status_error, availability_status, paused_at, authentications { id, resource_type } },\n    endpoints { id, scheme, host, port, path, receptor_node, role, certificate_authority, verify_ssl, availability_status_error, availability_status, authentications { authtype, availability_status, availability_status_error } }\n",M=function(e){var t=e.pageSize,a=e.pageNumber,n=e.sortBy,r=e.sortDirection,i=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,i=[];n.name&&i.push('{ name: "name", operation: "contains_i", value: "'.concat(n.name,'" }')),(null===(e=n.source_type_id)||void 0===e?void 0:e.length)>0&&i.push('{ name: "source_type_id", operation: "eq", value: ['.concat(n.source_type_id.map((function(e){return'"'.concat(e,'"')})).join(", "),"] }")),(null===(t=n.applications)||void 0===t?void 0:t.length)>0&&i.push('{ name: "applications.application_type_id", operation: "eq", value: ['.concat(n.applications.map((function(e){return'"'.concat(e,'"')})).join(", "),"] }")),r===m.JL&&i.push('{ name: "source_type.category", operation: "eq", value: "Cloud" }'),r===m.B0&&i.push('{ name: "source_type.category", operation: "eq", value: "Red Hat" }');var o=null===(a=n.availability_status)||void 0===a?void 0:a[0];return o&&(o===f.Rl?i.push('{ name: "availability_status", operation: "eq", value: "'.concat(f.Rl,'" }')):o===f.nZ&&i.push('{ name: "availability_status", operation: "eq", value: ["'.concat(f.L,'", "').concat(f.nZ,'"] }'))),i.length>0?"filter: [ ".concat(i.join(", ")," ]"):""}(e.filterValue,e.activeCategory),o=[E(t,a),Z(n,r),i].join(",");return g().postGraphQL({query:"{ sources(".concat(o,")\n      { ").concat(w," },\n     meta{count}\n    }")}).then((function(e){return e.data}))},k=function(e){return g().createApplication(e)},O=function(e,t){return g().deleteApplication(e).catch((function(e){var a=(0,n.Z)(e.errors,1)[0].detail;throw{error:{title:t,detail:a}}}))},S=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,i=[];n.name&&i.push("filter[name][contains_i]=".concat(n.name)),(null===(e=n.source_type_id)||void 0===e?void 0:e.length)>0&&n.source_type_id.map((function(e){return i.push("filter[source_type_id][]=".concat(e))})),(null===(t=n.applications)||void 0===t?void 0:t.length)>0&&n.applications.map((function(e){return i.push("filter[applications][application_type_id][eq][]=".concat(e))})),r===m.JL&&i.push("filter[source_type][category]=Cloud"),r===m.B0&&i.push("filter[source_type][category]=Red Hat");var o=null===(a=n.availability_status)||void 0===a?void 0:a[0];return o&&(o===f.Rl?i.push("filter[availability_status]=".concat(f.Rl)):o===f.nZ&&(i.push("filter[availability_status][]=".concat(f.L)),i.push("filter[availability_status][]=".concat(f.nZ)))),i.length>0?i.join("&"):""},A=function(e){return g().postGraphQL({query:'{ sources(filter: { name: "id", operation: "eq", value: "'.concat(e,'" })\n            { ').concat(w," }\n        }")}).then((function(e){return e.data}))},P=function(e){return g().postGraphQL({query:'{ sources(filter: { name: "id", operation: "eq", value: "'.concat(e,'" })\n          { applications {\n              application_type_id,\n              id,\n              availability_status_error,\n              availability_status,\n              paused_at,\n              extra,\n              authentications {\n                  id\n              }\n          } }\n      }')}).then((function(e){return e.data}))}},98583:(e,t,a)=>{a.d(t,{X6:()=>M,Xf:()=>b,aN:()=>g,mI:()=>E,sk:()=>Z,zx:()=>_});var n=a(87462),r=a(45987),i=a(92950),o=a.n(i),s=a(45697),c=a.n(s),u=a(14040),l=a(80123),p=a(39173),d=a(44873),m=a(89624),f=a(30567),v=a(86896),h=["isDeleting"],y=["row"],g=function(e){var t=e.width,a=void 0===t?"100%":t,n=e.height,r=void 0===n?"100%":n,i=e.className,s=void 0===i?"":i;return o().createElement("span",{className:"src-c-loader ".concat(s),style:{width:a,height:r},role:"progressbar"})};g.propTypes={className:c().string,width:c().oneOfType([c().string,c().number]),height:c().oneOfType([c().string,c().number])};var _=function(){var e=(0,v.Z)();return o().createElement(o().Fragment,null,o().createElement(l.Z,null,o().createElement(p.Z,{title:e.formatMessage({id:"sources.sources",defaultMessage:"Sources"})})),o().createElement(d.Z,{type:"content"},o().createElement("div",{className:"src-c-fake_content pf-u-p-lg"},o().createElement(g,null))))},b=function(){return o().createElement(g,{className:"top-pagination",height:30,width:200})},E=function(){return o().createElement(m.Bullseye,{className:"src-c-bullseye__placeholder-loader","data-testid":"placeholder-table"},o().createElement(m.Spinner,{size:"xl"}))},Z=function(e){var t=e.row,a=t.isDeleting,i=(0,r.Z)(t,h),s=(0,r.Z)(e,y);return a?o().createElement("tr",null,o().createElement("td",{colSpan:f.W,className:"pf-u-p-md","data-testid":"removing-row"},o().createElement(g,{height:100}))):o().createElement(u.RowWrapper,(0,n.Z)({},s,{row:i,className:"src-c-row-vertical-centered","data-testid":"row"}))};Z.propTypes={row:c().object.isRequired};var w=function(e){return o().createElement(m.Card,{className:"pf-u-m-md"},o().createElement(m.CardBody,null,o().createElement(g,e)))},M=function(){return o().createElement("div",{className:"src-c-detail-page"},o().createElement(l.Z,null,o().createElement(g,{height:96})),o().createElement(m.Grid,null,o().createElement(m.GridItem,{md:"6"},o().createElement(w,{height:218})),o().createElement(m.GridItem,{md:"6"},o().createElement(w,{height:218})),o().createElement(m.GridItem,{md:"12"},o().createElement(w,{height:324}))))}},84866:(e,t,a)=>{a.d(t,{B0:()=>s,IV:()=>d,JL:()=>c,M$:()=>u,N9:()=>r,OH:()=>n,Qr:()=>l,T2:()=>m,fn:()=>p,lJ:()=>o,lc:()=>i});var n="satellite",r="ansible-tower",i="azure",o="google",s="Red Hat",c="Cloud",u="/insights/platform/topological-inventory",l="/insights/platform/cost-management",p="/insights/platform/cloud-meter",d="/insights/platform/catalog",m=function(e){var t,a;return[null===(t=e.find((function(e){return e.name===p})))||void 0===t?void 0:t.id,null===(a=e.find((function(e){return e.name===l})))||void 0===a?void 0:a.id]}},17570:(e,t,a)=>{a.d(t,{Rl:()=>N,c:()=>W,Bj:()=>R,L:()=>D,nZ:()=>C,Gz:()=>H,BN:()=>G,Z3:()=>J,vh:()=>P,bF:()=>O,Fd:()=>S,Ee:()=>j,jl:()=>T,P5:()=>A});var n=a(45987),r=a(87462),i=a(93433),o=a(29439),s=a(4942),c=a(92950),u=a.n(c),l=a(45697),p=a.n(l),d=a(89624),m=a(43047),f=a(5913),v=a(17546),h=a(44012),y=a(86896),g=a(62410),_=a(86235),b=a(60076),E=a(84866);var Z=["app","showStatusText"],w=["applications"];function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){(0,s.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(e){return{http:"80",https:"443"}[e]},S=function(e){var t=Object.keys(e).reduce((function(t,a){return k(k({},t),{},(0,s.Z)({},a,e[a]||""))}),{}),a=t.scheme,n=void 0===a?"":a,r=t.host,i=void 0===r?"":r,o=t.path,c=void 0===o?"":o,u=t.port,l=void 0===u?"":u,p="".concat(n,"://").concat(i).concat(function(e,t){return t&&String(t)!==O(e)?":".concat(t):""}(n,l)).concat(c);if("://"!==p)return p},A=function(e,t,a){var n=a.sourceTypes.find((function(t){return t.id===e}));return n&&n.product_name||e||""},P=function(e){return u().createElement("span",{className:"src-c-help-cursor"},u().createElement(g.Z,{type:"relative",date:e}))},T=function(e,t,a){var n=a.sourceTypes;return u().createElement(d.TextContent,null,u().createElement(_.Link,{to:(0,b.yS)(b._j.sourcesDetail.path,t.id)},e),u().createElement("br",{key:"".concat(t.id,"-br")}),u().createElement(d.Text,{key:t.id,component:d.TextVariants.small},function(e,t){var a=t.find((function(t){return t.id===e.source_type_id}));return a&&"openshift"===a.name}(t,n)&&function(e){return e.endpoints&&e.endpoints[0]&&S(e.endpoints[0])}(t)))},j=function(e){if(!e)return null;var t=function(e){return{cfme:u().createElement(h.Z,{id:"sources.cloudformImportTooltip",defaultMessage:"This source can be managed from your connected CloudForms application."})}[e.toLowerCase()]}(e);return t?u().createElement(d.Tooltip,{content:t},u().createElement(d.Badge,{isRead:!0,className:"src-m-help-cursor"},u().createElement(h.Z,{id:"sources.imported",defaultMessage:"imported"}))):u().createElement(d.Badge,{isRead:!0},u().createElement(h.Z,{id:"sources.imported",defaultMessage:"imported"}))},N="available",C="unavailable",D="partially_available",R="in_progress",L="paused_at",q="rhel_azure",I=function(e){var t;return(t={},(0,s.Z)(t,C,"red"),(0,s.Z)(t,N,"green"),(0,s.Z)(t,D,"orange"),(0,s.Z)(t,L,"cyan"),t)[e]||"grey"},x=function(e){var t;return(t={},(0,s.Z)(t,C,u().createElement(h.Z,{id:"sources.unavailable",defaultMessage:"Unavailable"})),(0,s.Z)(t,N,u().createElement(h.Z,{id:"sources.available",defaultMessage:"Available"})),(0,s.Z)(t,D,u().createElement(h.Z,{id:"sources.partiallyAvailable",defaultMessage:"Partially available"})),(0,s.Z)(t,R,u().createElement(h.Z,{id:"sources.inProgress",defaultMessage:"In progress"})),(0,s.Z)(t,L,u().createElement(h.Z,{id:"sources.paused",defaultMessage:"Paused"})),t)[e]||u().createElement(h.Z,{id:"sources.unknown",defaultMessage:"Unknown"})},B=function(){return u().createElement(h.Z,{id:"sources.unknownError",defaultMessage:"unavailable"})},z=function(e,t){return u().createElement(u().Fragment,null,t.source&&u().createElement(u().Fragment,null,u().createElement(h.Z,{id:"sources.sourceError",defaultMessage:"Source's status: { error }",values:{error:t.source}}),u().createElement("br",null)),t.endpoint&&u().createElement(u().Fragment,null,u().createElement(h.Z,{id:"sources.endpointError",defaultMessage:"Endpoint error: { error }",values:{error:t.endpoint}}),u().createElement("br",null)),t.authentications&&u().createElement(h.Z,{id:"sources.authErrors",defaultMessage:"Authentication {count, plural, one {status} other {statuses}} : { errors }",values:{count:t.authentications.length,errors:t.authentications.map((function(e){var t=e.error,a=e.type;return u().createElement(u().Fragment,{key:a},u().createElement(h.Z,{id:"sources.errorAuthTemplate",defaultMessage:"{ type }: { error }",values:{error:t,type:a}}),u().createElement("br",null))}))}}),t.applications&&u().createElement(h.Z,{id:"sources.appErrors",defaultMessage:"Application {count, plural, one {status} other {statutes}}: { errors }",values:{count:t.applications.length,errors:t.applications.map((function(t){var a,n=t.error,r=t.id;return u().createElement(u().Fragment,{key:r},u().createElement(h.Z,{id:"sources.errorAppTemplate",defaultMessage:"{ app }: { error }",values:{error:n,app:(null===(a=e.find((function(e){return e.id===r})))||void 0===a?void 0:a.display_name)||r}}),u().createElement("br",null))}))}}))},F=function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(a={},(0,s.Z)(a,C,u().createElement(u().Fragment,null,u().createElement(h.Z,{id:"sources.appStatusPartiallyOK",defaultMessage:"We found {count, plural, one {this error} other {these errors}}.",values:{count:Object.keys(n).length}}),u().createElement("hr",null),z(t,n))),(0,s.Z)(a,N,u().createElement(h.Z,{id:"sources.appStatusOK",defaultMessage:"Everything works fine."})),(0,s.Z)(a,D,u().createElement(u().Fragment,null,u().createElement(h.Z,{id:"sources.appStatusPartiallyOK",defaultMessage:"We found {count, plural, one {this error} other {these errors}}.",values:{count:Object.keys(n).length}}),u().createElement("hr",null),z(t,n))),(0,s.Z)(a,R,u().createElement(h.Z,{id:"sources.inProgressStatus",defaultMessage:"We are still working to validate credentials. Check back for status updates."})),(0,s.Z)(a,L,u().createElement(h.Z,{id:"sources.pausedStatus",defaultMessage:"Data collection is temporarily disabled. Resume source to reestablish connection."})),(0,s.Z)(a,q,u().createElement(h.Z,{id:"sources.rhelAzureStatus",defaultMessage:"This source cannot currently be monitored in Sources, and does not reflect true status or resources."})),a)[e]||u().createElement(h.Z,{id:"sources.appStatusUnknown",defaultMessage:"Status has not been verified."})},G=function(e,t,a){var n=a.appTypes,s=a.sourceTypes,c=function(e){var t=e.availability_status,a=e.availability_status_error,n=e.applications,r=void 0===n?[]:n,s=e.endpoints;s=void 0===s?[]:s;var c=(0,o.Z)(s,1)[0];if(t===R)return{errors:{},status:R};var l={},p=0,d=0;return t===C?(l=k(k({},l),{},{source:a||u().createElement(B,null)}),p++,d++):t===N&&p++,r.map((function(e){e.availability_status===C?(l=k(k({},l),{},{applications:[].concat((0,i.Z)(l.applications?l.applications:[]),[{id:e.application_type_id,error:e.availability_status_error||u().createElement(B,null)}])}),p++,d++):e.availability_status===N&&p++})),(null==c?void 0:c.availability_status)===C?(l=k(k({},l),{},{endpoint:c.availability_status_error||u().createElement(B,null)}),p++,d++):(null==c?void 0:c.availability_status)===N&&p++,null!=c&&c.authentications&&c.authentications.map((function(e){e.availability_status===C?(l=k(k({},l),{},{authentications:[].concat((0,i.Z)(l.authentications?l.authentications:[]),[{type:e.authtype,error:e.availability_status_error||u().createElement(B,null)}])}),p++,d++):e.availability_status===N&&p++})),{errors:l,status:0===d?0===p?"unknown":N:d===p?C:D}}(t),l=t.paused_at?L:function(e){var t,a=e.source,n=e.sourceTypes,r=e.appTypes,i=null==n?void 0:n.find((function(e){return e.name===E.lc})),o=null==n?void 0:n.find((function(e){return e.name===E.lJ})),s=null==r?void 0:r.find((function(e){return e.name===E.fn}));return i&&s&&(a.source_type_id===(null==i?void 0:i.id)||a.source_type_id===(null==o?void 0:o.id))&&1===(null===(t=a.applications)||void 0===t?void 0:t.length)&&a.applications[0].application_type_id===(null==s?void 0:s.id)}({source:t,sourceTypes:s,appTypes:n})?q:c.status;return u().createElement("span",null,u().createElement(d.Popover,{showClose:!1,"aria-label":"".concat(l," popover"),bodyContent:F(l,n,c.errors)},u().createElement(d.Label,(0,r.Z)({className:"src-m-clickable",color:I(l)},t.availability_status===R&&{icon:u().createElement(f.ZP,null)},t.paused_at&&{icon:u().createElement(v.ZP,null)}),x(l))))},W=function(e){var t=e.app,a=e.showStatusText,i=(0,n.Z)(e,Z),o=(0,y.Z)(),c=function(e,t,a){var n;return(n={},(0,s.Z)(n,N,a.formatMessage({id:"sources.appStatusOK",defaultMessage:"Everything works fine."})),(0,s.Z)(n,C,t||a.formatMessage({id:"sources.unknownError",defaultMessage:"Unknown error"})),(0,s.Z)(n,R,u().createElement(h.Z,{id:"sources.inProgressStatus",defaultMessage:"We are still working to validate credentials. Check back for status updates."})),n)[e]||a.formatMessage({id:"sources.appStatusUnknown",defaultMessage:"Status has not been verified."})}(t.availability_status,t.availability_status_error,o);return u().createElement(d.Popover,(0,r.Z)({showClose:!1,key:t.display_name,"aria-label":"".concat(t.display_name," popover"),bodyContent:t.paused_at?"".concat(c," ").concat(o.formatMessage({id:"appplication.paused.additionalText",defaultMessage:"Resume this application to continue data collection."})):c},t.paused_at&&{headerContent:o.formatMessage({id:"application.paused.header",defaultMessage:"Application paused"})}),u().createElement(d.Label,(0,r.Z)({className:"src-m-clickable",color:I(t.availability_status)},t.availability_status===R&&{icon:u().createElement(f.ZP,null)},t.paused_at&&{icon:u().createElement(v.ZP,null)},i),a?x(t.availability_status):t.display_name))};W.propTypes={app:p().shape({display_name:p().string,availability_status:p().string,availability_status_error:p().string,paused_at:p().string}),showStatusText:p().bool};var U=function(e){var t=e.applications,a=(0,n.Z)(e,w),i=(0,y.Z)();return u().createElement(d.LabelGroup,(0,r.Z)({},a,{numLabels:2,collapsedText:i.formatMessage({id:"applications.showMore",defaultMessage:"{remaining} more"},{remaining:"${remaining}"})}),t.map((function(e,t){return u().createElement(W,{app:e,key:e.id||t})})))};U.propTypes={applications:p().arrayOf(p().shape({display_name:p().string,availability_status:p().string,availability_status_error:p().string,paused_at:p().string})).isRequired};var H=function(e,t,a){var n=a.appTypes,r=e.map((function(e){return function(e,t,a){var n=a.find((function(t){return t.id===e.application_type_id}));if(n){var r,i,o,s,c,u,l=e.availability_status,p=e.availability_status_error;return"Endpoint"===(null===(r=e.authentications)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.resource_type)&&(l=null===(o=t.endpoints)||void 0===o||null===(s=o[0])||void 0===s?void 0:s.availability_status,p=null===(c=t.endpoints)||void 0===c||null===(u=c[0])||void 0===u?void 0:u.availability_status_error),{display_name:n.display_name,paused_at:e.paused_at,availability_status:l,availability_status_error:p}}}(e,t,n)})).filter(Boolean).sort((function(e,t){return e.display_name.localeCompare(t.display_name)}));return 0===r.length?"--":u().createElement(U,{numLabels:2,collapsedText:!0,applications:r})},J=function(e,t,a){var n=a.intl,r=a.sourceType;if("account_authorization"===e){var i,o=null==r?void 0:r.schema.authentication.find((function(e){return e.is_superkey})),s=null==t||null===(i=t.authentications)||void 0===i?void 0:i.find((function(e){var t=e.authtype;return t&&t===o.type}));return u().createElement(u().Fragment,null,n.formatMessage({id:"configurationMode.trust",defaultMessage:"Account authorization"}),(null==s?void 0:s.availability_status)===C&&u().createElement(d.Tooltip,{position:"top",content:s.availability_status_error||n.formatMessage({id:"configurationMode.trustmode.defaultError",defaultMessage:"Edit credentials required."})},u().createElement("span",{className:"pf-u-ml-sm"},u().createElement(m.ZP,{fill:"#C9190B"}))),u().createElement("div",{className:"pf-u-mt-sm"},u().createElement(_.Link,{to:(0,b.yS)(b._j.sourcesDetailEditCredentials.path,t.id)},u().createElement(d.Button,{variant:"link",id:"edit-super-credentials",isInline:!0},t.paused_at?n.formatMessage({id:"sources.viewCredentials",defaultMessage:"View credentials"}):n.formatMessage({id:"sources.editCredentials",defaultMessage:"Edit credentials"})))))}return n.formatMessage({id:"configurationMode.manual",defaultMessage:"Manual configuration"})}},30567:(e,t,a)=>{a.d(t,{E:()=>r,W:()=>i});var n=a(17570),r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[{title:e.formatMessage({id:"sources.name",defaultMessage:"Name"}),value:"name",formatter:n.jl,sortable:!t},{title:e.formatMessage({id:"sources.type",defaultMessage:"Type"}),value:"source_type_id",formatter:n.P5,sortable:!t},{title:e.formatMessage({id:"sources.connectedApplications",defaultMessage:"Connected applications"}),value:"applications",formatter:n.Gz},{title:e.formatMessage({id:"sources.addedDate",defaultMessage:"Date added"}),value:"created_at",formatter:n.vh,sortable:!t},{hidden:!0,value:"imported",formatter:n.Ee},{title:e.formatMessage({id:"sources.status",defaultMessage:"Status"}),value:"availability_status",formatter:n.BN}]},i=r({formatMessage:function(){return""}}).length+1}}]);