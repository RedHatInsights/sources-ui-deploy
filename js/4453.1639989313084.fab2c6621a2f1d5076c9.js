(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[4453],{60076:(e,t,a)=>{"use strict";a.d(t,{_j:()=>n,yS:()=>r}),a(92950),a(86235),a(98583);var n={sources:{path:"/sources"},sourcesNew:{path:"/sources/new",writeAccess:!0},sourcesRemove:{path:"/sources/remove/:id",redirectNoId:!0,writeAccess:!0},sourcesDetail:{path:"/sources/detail/:id",redirectNoId:!0},sourcesDetailRename:{path:"/sources/detail/:id/rename",redirectNoId:!0,writeAccess:!0,noPaused:!0},sourcesDetailRemove:{path:"/sources/detail/:id/remove",redirectNoId:!0,writeAccess:!0},sourcesDetailAddApp:{path:"/sources/detail/:id/add_app/:app_type_id",redirectNoId:!0,writeAccess:!0,noPaused:!0},sourcesDetailRemoveApp:{path:"/sources/detail/:id/remove_app/:app_id",redirectNoId:!0,writeAccess:!0,noPaused:!0},sourcesDetailEditCredentials:{path:"/sources/detail/:id/edit_credentials",redirectNoId:!0,writeAccess:!0}},r=function(e,t){return e.replace(":id",t)}},4138:(e,t,a)=>{"use strict";a.d(t,{be:()=>k,Rj:()=>Z,TA:()=>w,uc:()=>M,Cu:()=>A,rL:()=>j,oI:()=>C,ye:()=>N});var n=a(4942),r=a(15861),o=a(29439),s=a(87757),c=a.n(s),i=a(35898),l=a.n(i),u=a(27361),p=a.n(u),d=a(36968),m=a.n(d),f=a(79477),v=a(17207),y=a(84866),g=a(4833),h=a(6407),b=a(63032);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=l().create();k.interceptors.request.use(v.w5),k.interceptors.response.use(v.xH),k.interceptors.response.use(null,v.Di),k.interceptors.response.use(null,v.ub),k.interceptors.response.use(null,v.ud),k.interceptors.response.use((function(e){return e.errors&&e.errors.length>0?Promise.reject({detail:e.errors[0].message}):e})),k.interceptors.response.use(null,(function(e){if(e.errors&&403===e.errors[0].status)return Promise.reject({detail:e.errors[0].detail,title:"Forbidden access"});throw e}));var Z=function(){return{checkAvailabilitySource:function(e){return k.post("".concat(h.s,"/sources/").concat(e,"/check_availability"))},updateSource:function(e,t){return k.patch("".concat(h.s,"/sources/").concat(e),t)},updateEndpoint:function(e,t){return k.patch("".concat(h.s,"/endpoints/").concat(e),t)},createEndpoint:function(e){return k.post("".concat(h.s,"/endpoints"),e)},updateAuthentication:function(e,t){return k.patch("".concat(h.s,"/authentications/").concat(e),t)},createAuthentication:function(e){return k.post("".concat(h.s,"/authentications"),e)},showSource:function(e){return k.get("".concat(h.s,"/sources/").concat(e))},listSourceEndpoints:function(e){return k.get("".concat(h.s,"/sources/").concat(e,"/endpoints"))},listSourceApplications:function(e){return k.get("".concat(h.s,"/sources/").concat(e,"/applications"))},listEndpointAuthentications:function(e){return k.get("".concat(h.s,"/endpoints/").concat(e,"/authentications"))},deleteSource:function(e){return k.delete("".concat(h.s,"/sources/").concat(e))},createApplication:function(e){return k.post("".concat(h.s,"/applications"),e)},postGraphQL:function(e){return k.post("".concat(h.s,"/graphql"),e)},listSourceTypes:function(){return k.get("".concat(h.s,"/source_types"))},doLoadAppTypes:function(){return k.get("".concat(h.s,"/application_types"))},deleteApplication:function(e){return k.delete("".concat(h.s,"/applications/").concat(e))},createAuthApp:function(e){return k.post("".concat(h.s,"/application_authentications"),e)},deleteAuthentication:function(e){return k.delete("".concat(h.s,"/authentications/").concat(e))},showAuthentication:function(e){return k.get("".concat(h.s,"/authentications/").concat(e))},updateApplication:function(e,t){return k.patch("".concat(h.s,"/applications/").concat(e),t)},showApplication:function(e){return k.get("".concat(h.s,"/applications/").concat(e))},listSourceAuthentications:function(e){return k.get("".concat(h.s,"/sources/").concat(e,"/authentications"))},createSource:function(e){return k.post("".concat(h.s,"/sources"),e)},getEndpoint:function(e){return k.get("".concat(h.s,"/endpoints/").concat(e))},getGoogleAccount:function(){return k.get("".concat(h.s,"/app_meta_data?filter[name]=gcp_service_account"))},bulkCreate:function(e){return k.post("".concat(h.s,"/bulk_create"),e)},pauseApplication:function(e){return k.post("".concat(h.s,"/applications/").concat(e,"/pause"))},unpauseApplication:function(e){return k.post("".concat(h.s,"/applications/").concat(e,"/unpause"))},pauseSource:function(e){return k.post("".concat(h.s,"/sources/").concat(e,"/pause"))},unpauseSource:function(e){return k.post("".concat(h.s,"/sources/").concat(e,"/unpause"))}}},w=function(e){return Z().deleteSource(e).catch((function(e){throw{error:{detail:e.errors[0].detail}}}))},O=function(e,t){return"limit:".concat(e,", offset:").concat((t-1)*e)},P=function(e,t){return e?"source_type_id"===e?'sort_by:{source_type:{product_name:"'.concat(t,'"}}'):"applications"===e?'sort_by:{applications:{__count:"'.concat(t,'"}}'):"sort_by:{".concat(e,':"').concat(t,'"}'):""},S="\n    id,\n    created_at,\n    source_type_id,\n    name,\n    imported,\n    availability_status,\n    source_ref,\n    last_checked_at,\n    updated_at,\n    last_available_at,\n    app_creation_workflow,\n    paused_at,\n    authentications { authtype, username, availability_status_error, availability_status }\n    applications { application_type_id, id, availability_status_error, availability_status, paused_at, authentications { id, resource_type } },\n    endpoints { id, scheme, host, port, path, receptor_node, role, certificate_authority, verify_ssl, availability_status_error, availability_status, authentications { authtype, availability_status, availability_status_error } }\n",M=function(e){var t=e.pageSize,a=e.pageNumber,n=e.sortBy,r=e.sortDirection,o=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=[];n.name&&o.push('name: { contains_i: "'.concat(n.name,'" }')),(null===(e=n.source_type_id)||void 0===e?void 0:e.length)>0&&o.push("source_type_id: { eq: [".concat(n.source_type_id.map((function(e){return'"'.concat(e,'"')})).join(", "),"] }")),(null===(t=n.applications)||void 0===t?void 0:t.length)>0&&o.push("applications: { application_type_id: { eq: [".concat(n.applications.map((function(e){return'"'.concat(e,'"')})).join(", "),"] }}")),r===y.JL&&o.push('source_type: { vendor: { not_eq: "Red Hat"} }'),r===y.B0&&o.push('source_type: { vendor: "Red Hat" }');var s=null===(a=n.availability_status)||void 0===a?void 0:a[0];return s&&(s===g.Rl?o.push('availability_status: { eq: "'.concat(g.Rl,'" }')):s===g.nZ&&o.push('availability_status: { eq: ["'.concat(g.L,'", "').concat(g.nZ,'"] }'))),o.length>0?"filter: { ".concat(o.join(", ")," }"):""}(e.filterValue,e.activeVendor),s=[O(t,a),P(n,r),o].join(",");return Z().postGraphQL({query:"{ sources(".concat(s,")\n      { ").concat(S," },\n     sources_aggregate(").concat(o,"){aggregate{total_count}}\n    }")}).then((function(e){return e.data}))},A=function(e){return Z().createApplication(e)},j=function(e,t){return Z().deleteApplication(e).catch((function(e){var a=(0,o.Z)(e.errors,1)[0].detail;throw{error:{title:t,detail:a}}}))},C=function(e){return Z().postGraphQL({query:"{ sources(filter: { id: { eq: ".concat(e,"}})\n            { ").concat(S," }\n        }")}).then((function(e){return e.data}))},N=function(){var e=(0,r.Z)(c().mark((function e(t,a,n){var r,o,s,i,l,u,d,v,y,g;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z().postGraphQL({query:"{ sources(filter: { id: { eq: ".concat(t,"}})\n          { source_type_id, applications {\n              application_type_id,\n              id,\n              availability_status_error,\n              availability_status,\n              paused_at,\n              authentications {\n                  id\n              }\n          } }\n      }")});case 2:return i=e.sent,l=[],null===(r=i.data.sources)||void 0===r||null===(o=r[0])||void 0===o||null===(s=o.applications)||void 0===s||s.forEach((function(e){l.push(Z().showApplication(e.id))})),e.next=7,Promise.all(l);case 7:if(u=e.sent,d=n.find((function(e){var t,a;return e.id===(null===(t=i.data.sources)||void 0===t||null===(a=t[0])||void 0===a?void 0:a.source_type_id)})),v=a.find((function(e){return e.name===f.f.COST_MANAGAMENT})),!u.length){e.next=18;break}y=c().mark((function e(a){var n,r,o,s,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=u[a],r=n.extra,o=n.application_type_id,s=E({},r),o!==v.id||!b.ZV.includes(d.name)||Object.keys(r).length){e.next=7;break}return e.next=5,(0,b.xS)(t);case 5:l=e.sent,Object.keys(b.Iw).forEach((function(e){var t=p()(l,e);t&&m()(s,b.Iw[e],t)}));case 7:i.data.sources[0].applications[a]=E(E({},i.data.sources[0].applications[a]),{},{extra:s});case 8:case"end":return e.stop()}}),e)})),g=0;case 13:if(!(g<u.length)){e.next=18;break}return e.delegateYield(y(g),"t0",15);case 15:g++,e.next=13;break;case 18:return e.abrupt("return",i.data);case 19:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},98583:(e,t,a)=>{"use strict";a.d(t,{aN:()=>v,Xf:()=>y,mI:()=>g,sk:()=>h,X6:()=>_});var n=a(87462),r=a(45987),o=a(92950),s=a.n(o),c=a(45697),i=a.n(c),l=a(89091),u=a(48716),p=a(56976),d=a(30567),m=["isDeleting"],f=["row"],v=function(e){var t=e.width,a=void 0===t?"100%":t,n=e.height,r=void 0===n?"100%":n,o=e.className,c=void 0===o?"":o;return s().createElement("span",{className:"src-c-loader ".concat(c),style:{width:a,height:r}})};v.propTypes={className:i().string,width:i().oneOfType([i().string,i().number]),height:i().oneOfType([i().string,i().number])};var y=function(){return s().createElement(v,{className:"top-pagination",height:30,width:200})},g=function(){return s().createElement(p.Bullseye,{className:"src-c-bullseye__placeholder-loader"},s().createElement(p.Spinner,{size:"xl"}))},h=function(e){var t=e.row,a=t.isDeleting,o=(0,r.Z)(t,m),c=(0,r.Z)(e,f);return a?s().createElement("tr",null,s().createElement("td",{colSpan:d.W,className:"pf-u-p-md"},s().createElement(v,{height:100}))):s().createElement(l.RowWrapper,(0,n.Z)({},c,{row:o,className:"src-c-row-vertical-centered"}))};h.propTypes={row:i().object.isRequired};var b=function(e){return s().createElement(p.Card,{className:"pf-u-m-md"},s().createElement(p.CardBody,null,s().createElement(v,e)))},_=function(){return s().createElement("div",{className:"src-c-detail-page"},s().createElement(u.Z,null,s().createElement(v,{height:96})),s().createElement(p.Grid,null,s().createElement(p.GridItem,{md:"6"},s().createElement(b,{height:218})),s().createElement(p.GridItem,{md:"6"},s().createElement(b,{height:218})),s().createElement(p.GridItem,{md:"12"},s().createElement(b,{height:324}))))}},56638:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(87462),r=a(29439),o=a(45987),s=a(92950),c=a.n(s),i=a(45697),l=a.n(i),u=a(98583),p=["src"],d=function(e){var t=e.src,a=(0,o.Z)(e,p),i=(0,s.useState)(!1),l=(0,r.Z)(i,2),d=l[0],m=l[1];return c().createElement(c().Fragment,null,!d&&c().createElement(u.aN,(0,n.Z)({height:"40px",width:"110px"},a)),c().createElement("img",(0,n.Z)({src:t,onLoad:function(){return m(!0)},style:{display:d?"initial":"none"}},a)))};d.propTypes={src:l().string.isRequired};const m=d},21298:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>N});var n=a(29439),r=a(92950),o=a.n(r),s=a(56976),c=a(81778),i=a(56638),l="https://sandbox.marketplace.redhat.com";const u=function(e){return o().createElement(s.Card,{isFlat:!0,className:"marketplace-card"},o().createElement(s.CardTitle,{className:"pf-u-pl-md pf-u-pr-md"},o().createElement(i.Z,{src:e.publishedContent.logo.url,className:"marketplace-card-icon"}),o().createElement("br",null),e.publishedContent.title,o().createElement("br",null),o().createElement(s.Label,{className:"pf-u-mt-sm marketplace-label",icon:o().createElement(c.DatabaseIcon,null)},e.primaryCategory.content.name)),o().createElement(s.CardBody,{className:"marketplace-card-body pf-u-mb-md pf-u-pl-md pf-u-pr-md",isFilled:!0},e.publishedContent.localizedContent.descriptions.short),o().createElement(s.CardFooter,{className:"pf-u-pl-md pf-u-pr-md pf-u-pb-md"},o().createElement(s.Button,{variant:"link",isInline:!0,icon:o().createElement(c.ExternalLinkAltIcon,null),iconPosition:"right",component:"a",href:"".concat(l,"/en-us/products/").concat(e.productPageName),rel:"noopener noreferrer",target:"_blank"},"Add"," ")))};var p,d=a(15861),m=a(87757),f=a.n(m),v=a(4138),y=function(){var e=(0,d.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=5;break}return e.next=3,v.be.post("".concat(l,"/api-security/om-auth/cloud/token"),{grant_type:"urn:ibm:params:oauth:grant-type:apikey",apikey:localStorage.getItem("marketplace-key")});case 3:t=e.sent,p=t.access_token;case 5:return e.abrupt("return",v.be.post("".concat(l,"/catalog/gql"),{query:'\n{\n  productByIds (ids: [\n    "ca54ff2ba24df884a96995f1eefd081b",\n    "ccb29628eabe15c81121ecf231a0a8cd",\n    "9e3b238934c288394680f3a53d1544e0",\n    "bd44b472123b544a630a939c650e968e"\n\t]) {\n    products {\n      id\n      productPageName\n      publishedContent {\n        title\n        localizedContent {\n          descriptions {\n            short\n          }\n        }\n        logo {\n          url\n        }\n      }\n      productRating {\n        averageRating\n      }\n      primaryCategory {\n        content { name }\n      }\n      company {\n        displayName\n      }\n    }\n  }\n}'},{headers:{Authorization:"Bearer ".concat(p)}}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=a(45697),h=a.n(g),b=a(87462),_=a(4942),E=a(90111);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,_.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=function(e){return{page:1,perPage:10,itemCount:(null==e?void 0:e.length)||0,filters:{type:["database"]}}},O=function(e,t){var a=t.type,n=t.payload;switch(a){case"SET_PAGE":return Z(Z({},e),{},{page:n});case"SET_PER_PAGE":return Z(Z({},e),{},{page:1,perPage:n})}},P=function(e){return{database:"Database"}[e]||e},S=function(e){var t,a=e.data,i=e.isOpen,p=e.onClose,d=(0,r.useReducer)(O,a,w),m=(0,n.Z)(d,2),f=m[0],v=m[1];return o().createElement(s.Modal,{className:"sources",onClose:p,isOpen:i,title:"Browse catalog",description:o().createElement("span",null,"A curated selection of offerings available for purchase from"," ",o().createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Red Hat Marketplace ",o().createElement(c.ExternalLinkAltIcon,null))),variant:"large"},o().createElement(E.Z,{useMobileLayout:!0,className:"marketplace-modal-toolbar",pagination:{itemCount:f.itemCount,page:f.page,perPage:f.perPage,onSetPage:function(e,t){return v({type:"SET_PAGE",payload:t})},onPerPageSelect:function(e,t){return v({type:"SET_PER_PAGE",payload:t})},"data-testid":"pagination"},filterConfig:{items:[{label:"Type",placeholder:"Filter by product type",type:"checkbox",filterValues:{items:[{label:"Database",value:"database",isDisabled:!0}],value:["database"]}}]},activeFiltersConfig:{showDeleteButton:!1,filters:(t=f.filters,Object.keys(t).map((function(e){var a;return t[e]&&0!==(null===(a=t[e])||void 0===a?void 0:a.length)?function(e,t){return{type:{category:"Type",chips:t.map((function(e){return{name:P(e)}}))}}[e]||{category:e,chips:t.map((function(e){return{name:e}}))}}(e,t[e]):null})).filter(Boolean))}}),o().createElement("div",{className:"pf-u-mb-md marketplace-flex"},a.map((function(e){return o().createElement(u,(0,b.Z)({key:e.id},e))}))))};S.propTypes={data:h().array,isOpen:h().bool,onClose:h().func};const M=S;var A=function(e){var t=e.data,a=(0,r.useState)(!1),c=(0,n.Z)(a,2),i=c[0],l=c[1];return o().createElement(o().Fragment,null,o().createElement(M,{onClose:function(){return l(!1)},data:t,isOpen:i}),o().createElement(s.Card,{isFlat:!0,className:"marketplace-card marketplace-seemore-card"},o().createElement(s.CardBody,{isFilled:!0,className:"pf-u-pl-md pf-u-pr-md card-text"},"Not what you’re looking for? Browse the catalog to see more offerings from Red Hat Marketplace."),o().createElement(s.CardFooter,{className:"pf-u-pl-md pf-u-pr-md pf-u-pb-md"},o().createElement(s.Button,{variant:"primary",onClick:function(){return l(!0)}},"See more databases"))))};A.propTypes={data:h().array};const j=A,C=function(){return o().createElement(s.Card,{isFlat:!0,className:"marketplace-card"},o().createElement(s.CardTitle,null,o().createElement(s.Skeleton,{role:"progressbar"})),o().createElement(s.CardBody,null,o().createElement(s.Skeleton,{role:"progressbar"})),o().createElement(s.CardFooter,null,o().createElement(s.Skeleton,{role:"progressbar"})))},N=function(){var e=(0,r.useState)(),t=(0,n.Z)(e,2),a=t[0],c=t[1],i=(0,r.useMemo)((function(){return localStorage.getItem("marketplace-key")}),[]);return(0,r.useEffect)((function(){i&&y().then((function(e){var t,a;return c(null==e||null===(t=e.data)||void 0===t||null===(a=t.productByIds)||void 0===a?void 0:a.products)}))}),[]),i?a?o().createElement(o().Fragment,null,o().createElement(s.Title,{headingLevel:"h4",size:"xl",className:"pf-u-mb-md"},"Recommended services"),o().createElement("div",{className:"pf-u-mb-md marketplace-flex"},o().createElement(u,a.find((function(e){var t;return"mongodb-enterprise-advanced"===(null==e||null===(t=e.productPageName)||void 0===t?void 0:t[0])}))||a[0]),o().createElement(j,{data:a}))):o().createElement("div",{className:"pf-u-mb-md marketplace-flex"},o().createElement(C,null),o().createElement(C,null)):null}},4833:(e,t,a)=>{"use strict";a.d(t,{bF:()=>P,Fd:()=>S,P5:()=>M,vh:()=>A,jl:()=>j,Ee:()=>C,Rl:()=>N,nZ:()=>T,L:()=>x,Bj:()=>D,BN:()=>z,c:()=>V,Gz:()=>H,Z3:()=>U});var n=a(45987),r=a(87462),o=a(93433),s=a(29439),c=a(4942),i=a(92950),l=a.n(i),u=a(45697),p=a.n(u),d=a(56976),m=a(43047),f=a(5913),v=a(17546),y=a(44012),g=a(86896),h=a(62410),b=a(86235),_=a(60076),E=a(86866),k=["app","showStatusText"],Z=["applications"];function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){(0,c.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){return{http:"80",https:"443"}[e]},S=function(e){var t=Object.keys(e).reduce((function(t,a){return O(O({},t),{},(0,c.Z)({},a,e[a]||""))}),{}),a=t.scheme,n=void 0===a?"":a,r=t.host,o=void 0===r?"":r,s=t.path,i=void 0===s?"":s,l=t.port,u=void 0===l?"":l,p="".concat(n,"://").concat(o).concat(function(e,t){return t&&String(t)!==P(e)?":".concat(t):""}(n,u)).concat(i);if("://"!==p)return p},M=function(e,t,a){var n=a.sourceTypes.find((function(t){return t.id===e}));return n&&n.product_name||e||""},A=function(e){return l().createElement("span",{className:"src-c-help-cursor"},l().createElement(h.Z,{type:"relative",date:e}))},j=function(e,t,a){var n=a.sourceTypes;return l().createElement(d.TextContent,null,l().createElement(b.Link,{to:(0,_.yS)(_._j.sourcesDetail.path,t.id)},e),l().createElement("br",{key:"".concat(t.id,"-br")}),l().createElement(d.Text,{key:t.id,component:d.TextVariants.small},function(e,t){var a=t.find((function(t){return t.id===e.source_type_id}));return a&&"openshift"===a.name}(t,n)&&function(e){return e.endpoints&&e.endpoints[0]&&S(e.endpoints[0])}(t)))},C=function(e){if(!e)return null;var t=function(e){return{cfme:l().createElement(y.Z,{id:"sources.cloudformImportTooltip",defaultMessage:"This source can be managed from your connected CloudForms application."})}[e.toLowerCase()]}(e);return t?l().createElement(d.Tooltip,{content:t},l().createElement(d.Badge,{isRead:!0,className:"src-m-help-cursor"},l().createElement(y.Z,{id:"sources.imported",defaultMessage:"imported"}))):l().createElement(d.Badge,{isRead:!0},l().createElement(y.Z,{id:"sources.imported",defaultMessage:"imported"}))},N="available",T="unavailable",x="partially_available",D="in_progress",R="paused_at",F="rhel_azure",I=function(e){var t;return(t={},(0,c.Z)(t,T,"red"),(0,c.Z)(t,N,"green"),(0,c.Z)(t,x,"orange"),(0,c.Z)(t,R,"cyan"),t)[e]||"grey"},B=function(e){var t;return(t={},(0,c.Z)(t,T,l().createElement(y.Z,{id:"sources.unavailable",defaultMessage:"Unavailable"})),(0,c.Z)(t,N,l().createElement(y.Z,{id:"sources.available",defaultMessage:"Available"})),(0,c.Z)(t,x,l().createElement(y.Z,{id:"sources.partiallyAvailable",defaultMessage:"Partially available"})),(0,c.Z)(t,D,l().createElement(y.Z,{id:"sources.inProgress",defaultMessage:"In progress"})),(0,c.Z)(t,R,l().createElement(y.Z,{id:"sources.paused",defaultMessage:"Paused"})),t)[e]||l().createElement(y.Z,{id:"sources.unknown",defaultMessage:"Unknown"})},L=function(){return l().createElement(y.Z,{id:"sources.unknownError",defaultMessage:"unavailable"})},q=function(e,t){return l().createElement(l().Fragment,null,t.source&&l().createElement(l().Fragment,null,l().createElement(y.Z,{id:"sources.sourceError",defaultMessage:"Source's status: { error }",values:{error:t.source}}),l().createElement("br",null)),t.endpoint&&l().createElement(l().Fragment,null,l().createElement(y.Z,{id:"sources.endpointError",defaultMessage:"Endpoint error: { error }",values:{error:t.endpoint}}),l().createElement("br",null)),t.authentications&&l().createElement(y.Z,{id:"sources.authErrors",defaultMessage:"Authentication {count, plural, one {status} other {statuses}} : { errors }",values:{count:t.authentications.length,errors:t.authentications.map((function(e){var t=e.error,a=e.type;return l().createElement(l().Fragment,{key:a},l().createElement(y.Z,{id:"sources.errorAuthTemplate",defaultMessage:"{ type }: { error }",values:{error:t,type:a}}),l().createElement("br",null))}))}}),t.applications&&l().createElement(y.Z,{id:"sources.appErrors",defaultMessage:"Application {count, plural, one {status} other {statutes}}: { errors }",values:{count:t.applications.length,errors:t.applications.map((function(t){var a,n=t.error,r=t.id;return l().createElement(l().Fragment,{key:r},l().createElement(y.Z,{id:"sources.errorAppTemplate",defaultMessage:"{ app }: { error }",values:{error:n,app:(null===(a=e.find((function(e){return e.id===r})))||void 0===a?void 0:a.display_name)||r}}),l().createElement("br",null))}))}}))},G=function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(a={},(0,c.Z)(a,T,l().createElement(l().Fragment,null,l().createElement(y.Z,{id:"sources.appStatusPartiallyOK",defaultMessage:"We found {count, plural, one {this error} other {these errors}}.",values:{count:Object.keys(n).length}}),l().createElement("hr",null),q(t,n))),(0,c.Z)(a,N,l().createElement(y.Z,{id:"sources.appStatusOK",defaultMessage:"Everything works fine."})),(0,c.Z)(a,x,l().createElement(l().Fragment,null,l().createElement(y.Z,{id:"sources.appStatusPartiallyOK",defaultMessage:"We found {count, plural, one {this error} other {these errors}}.",values:{count:Object.keys(n).length}}),l().createElement("hr",null),q(t,n))),(0,c.Z)(a,D,l().createElement(y.Z,{id:"sources.inProgressStatus",defaultMessage:"We are still working to validate credentials. Check back for status updates."})),(0,c.Z)(a,R,l().createElement(y.Z,{id:"sources.pausedStatus",defaultMessage:"Data collection is temporarily disabled. Resume source to reestablish connection."})),(0,c.Z)(a,F,l().createElement(y.Z,{id:"sources.rhelAzureStatus",defaultMessage:"This source cannot currently be monitored in Sources, and does not reflect true status or resources."})),a)[e]||l().createElement(y.Z,{id:"sources.appStatusUnknown",defaultMessage:"Status has not been verified."})},z=function(e,t,a){var n=a.appTypes,c=a.sourceTypes,i=function(e){var t=e.availability_status,a=e.availability_status_error,n=e.applications,r=void 0===n?[]:n,c=e.endpoints;c=void 0===c?[]:c;var i=(0,s.Z)(c,1)[0];if(t===D)return{errors:{},status:D};var u={},p=0,d=0;return t===T?(u=O(O({},u),{},{source:a||l().createElement(L,null)}),p++,d++):t===N&&p++,r.map((function(e){e.availability_status===T?(u=O(O({},u),{},{applications:[].concat((0,o.Z)(u.applications?u.applications:[]),[{id:e.application_type_id,error:e.availability_status_error||l().createElement(L,null)}])}),p++,d++):e.availability_status===N&&p++})),(null==i?void 0:i.availability_status)===T?(u=O(O({},u),{},{endpoint:i.availability_status_error||l().createElement(L,null)}),p++,d++):(null==i?void 0:i.availability_status)===N&&p++,null!=i&&i.authentications&&i.authentications.map((function(e){e.availability_status===T?(u=O(O({},u),{},{authentications:[].concat((0,o.Z)(u.authentications?u.authentications:[]),[{type:e.authtype,error:e.availability_status_error||l().createElement(L,null)}])}),p++,d++):e.availability_status===N&&p++})),{errors:u,status:0===d?0===p?"unknown":N:d===p?T:x}}(t),u=t.paused_at?R:(0,E.Z)({source:t,sourceTypes:c,appTypes:n})?F:i.status;return l().createElement("span",null,l().createElement(d.Popover,{showClose:!1,"aria-label":"".concat(u," popover"),bodyContent:G(u,n,i.errors)},l().createElement(d.Label,(0,r.Z)({className:"src-m-clickable",color:I(u)},t.availability_status===D&&{icon:l().createElement(f.ZP,null)},t.paused_at&&{icon:l().createElement(v.ZP,null)}),B(u))))},V=function(e){var t=e.app,a=e.showStatusText,o=(0,n.Z)(e,k),s=(0,g.Z)(),i=function(e,t,a){var n;return(n={},(0,c.Z)(n,N,a.formatMessage({id:"sources.appStatusOK",defaultMessage:"Everything works fine."})),(0,c.Z)(n,T,t||a.formatMessage({id:"sources.unknownError",defaultMessage:"Unknown error"})),(0,c.Z)(n,D,l().createElement(y.Z,{id:"sources.inProgressStatus",defaultMessage:"We are still working to validate credentials. Check back for status updates."})),n)[e]||a.formatMessage({id:"sources.appStatusUnknown",defaultMessage:"Status has not been verified."})}(t.availability_status,t.availability_status_error,s);return l().createElement(d.Popover,(0,r.Z)({showClose:!1,key:t.display_name,"aria-label":"".concat(t.display_name," popover"),bodyContent:t.paused_at?"".concat(i," ").concat(s.formatMessage({id:"appplication.paused.additionalText",defaultMessage:"Resume this application to continue data collection."})):i},t.paused_at&&{headerContent:s.formatMessage({id:"application.paused.header",defaultMessage:"Application paused"})}),l().createElement(d.Label,(0,r.Z)({className:"src-m-clickable",color:I(t.availability_status)},t.availability_status===D&&{icon:l().createElement(f.ZP,null)},t.paused_at&&{icon:l().createElement(v.ZP,null)},o),a?B(t.availability_status):t.display_name))};V.propTypes={app:p().shape({display_name:p().string,availability_status:p().string,availability_status_error:p().string,paused_at:p().string}),showStatusText:p().bool};var W=function(e){var t=e.applications,a=(0,n.Z)(e,Z),o=(0,g.Z)();return l().createElement(d.LabelGroup,(0,r.Z)({},a,{numLabels:2,collapsedText:o.formatMessage({id:"applications.showMore",defaultMessage:"{remaining} more"},{remaining:"${remaining}"})}),t.map((function(e,t){return l().createElement(V,{app:e,key:e.id||t})})))};W.propTypes={applications:p().arrayOf(p().shape({display_name:p().string,availability_status:p().string,availability_status_error:p().string,paused_at:p().string})).isRequired};var H=function(e,t,a){var n=a.appTypes,r=e.map((function(e){return function(e,t,a){var n=a.find((function(t){return t.id===e.application_type_id}));if(n){var r,o,s,c,i,l,u=e.availability_status,p=e.availability_status_error;return"Endpoint"===(null===(r=e.authentications)||void 0===r||null===(o=r[0])||void 0===o?void 0:o.resource_type)&&(u=null===(s=t.endpoints)||void 0===s||null===(c=s[0])||void 0===c?void 0:c.availability_status,p=null===(i=t.endpoints)||void 0===i||null===(l=i[0])||void 0===l?void 0:l.availability_status_error),{display_name:n.display_name,paused_at:e.paused_at,availability_status:u,availability_status_error:p}}}(e,t,n)})).filter(Boolean).sort((function(e,t){return e.display_name.localeCompare(t.display_name)}));return 0===r.length?"--":l().createElement(W,{numLabels:2,collapsedText:!0,applications:r})},U=function(e,t,a){var n=a.intl,r=a.sourceType;if("account_authorization"===e){var o,s=null==r?void 0:r.schema.authentication.find((function(e){return e.is_superkey})),c=null==t||null===(o=t.authentications)||void 0===o?void 0:o.find((function(e){var t=e.authtype;return t&&t===s.type}));return l().createElement(l().Fragment,null,n.formatMessage({id:"configurationMode.trust",defaultMessage:"Account authorization"}),(null==c?void 0:c.availability_status)===T&&l().createElement(d.Tooltip,{position:"top",content:c.availability_status_error||n.formatMessage({id:"configurationMode.trustmode.defaultError",defaultMessage:"Edit credentials required."})},l().createElement("span",{className:"pf-u-ml-sm"},l().createElement(m.ZP,{fill:"#C9190B"}))),l().createElement("div",{className:"pf-u-mt-sm"},l().createElement(b.Link,{to:(0,_.yS)(_._j.sourcesDetailEditCredentials.path,t.id)},l().createElement(d.Button,{variant:"link",id:"edit-super-credentials",isInline:!0},t.paused_at?n.formatMessage({id:"sources.viewCredentials",defaultMessage:"View credentials"}):n.formatMessage({id:"sources.editCredentials",defaultMessage:"Edit credentials"})))))}return n.formatMessage({id:"configurationMode.manual",defaultMessage:"Manual configuration"})}},65088:()=>{},11452:()=>{},32857:()=>{},93818:()=>{},94498:()=>{},28992:()=>{},90479:()=>{},78752:()=>{},8572:()=>{},98379:()=>{},99624:()=>{},36974:()=>{},97236:()=>{},38024:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/4453.37af5f9097fd1048383639ee17d52adc.js.map