(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[593],{76845:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>xe});var n=r(28481),a=r(96156),o=r(92950),i=r.n(o),s=r(45237),c=r(334),l=r(97066),u=r(86896),d=r(57277),p=r(54213),f=r(43846),m=r(35240),g=r(98495),v=r(85061),y=r(6877),b=r(98583),h=r(30567),E=r(80810);const S=function(){var e=(0,u.Z)(),t=(0,s.useDispatch)();return i().createElement(l.Bullseye,null,i().createElement(l.EmptyState,{variant:l.EmptyStateVariant.small},i().createElement(l.EmptyStateIcon,{icon:E.ZP}),i().createElement(l.Title,{headingLevel:"h2",size:"lg"},e.formatMessage({id:"sources.noResultsFoundTitle",defaultMessage:"No sources found"})),i().createElement(l.EmptyStateBody,null,e.formatMessage({id:"sources.noResultsFoundDescription",defaultMessage:"No sources match the filter criteria. Remove all filters or clear all filters to show sources."})),i().createElement(l.Button,{variant:"link",onClick:function(){return t((0,g.K5)())}},e.formatMessage({id:"sources.clearAllFilters",defaultMessage:"Clear all filters"}))))};var M=r(59824),O=r(58185),w=r(60076),k=r(16946);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e,t,r,n){return t.filter((function(e){return e.title||e.hidden})).map((function(t){return{title:t.formatter?t.formatter(e[t.value],e,{sourceTypes:r,appTypes:n}):e[t.value]||""}}))},P=function(e,t,r,n,a){return e.filter((function(e){return!e.hidden})).reduce((function(e,o){var i=a.includes(o.id);return[].concat((0,v.Z)(e),[j(j({},o),{},{originalName:o.name,isOpen:!!o.expanded,cells:_(o,t,r,n),disableActions:i,isDeleting:i})])}),[])},C=function(e){return e.filter((function(e){return e.title||e.hidden})).map((function(e){return j({title:e.title||"",value:e.value,hidden:e.hidden,transforms:[y.wrappable]},e.sortable&&{transforms:[y.sortable,y.wrappable]})}))},Z=function(e,t){return j(j({},e),t)},N=function(e,t,r,n){return function(a){var o=(0,k.Z)(e),i=[];return a.paused_at?i.push(j({title:e.formatMessage({id:"sources.resume",defaultMessage:"Resume"}),description:e.formatMessage({id:"sources.resume.description",defaultMessage:"Unpause data collection for this source"}),onClick:function(t,r,o){var i=o.id;return n((0,g.AX)(i,a.originalName,e))}},r?{component:"button"}:o)):i.push(j({title:e.formatMessage({id:"sources.pause",defaultMessage:"Pause"}),description:e.formatMessage({id:"sources.pause.description",defaultMessage:"Temporarily disable data collection"}),onClick:function(t,r,o){var i=o.id;return n((0,g.xz)(i,a.originalName,e))}},r?{component:"button"}:o)),i.push(j({title:e.formatMessage({id:"sources.remove",defaultMessage:"Remove"}),description:e.formatMessage({id:"sources.remove.description",defaultMessage:"Permanently delete this source and all collected data"}),onClick:function(e,r,n){var a=n.id;return t((0,w.yS)(w._j.sourcesRemove.path,a))}},r?{component:"button"}:o)),i.push(j({title:a.paused_at?e.formatMessage({id:"sources.viewDetails",defaultMessage:"View details"}):e.formatMessage({id:"sources.edit",defaultMessage:"Edit"}),onClick:function(e,r,n){var a=n.id;return t((0,w.yS)(w._j.sourcesDetail.path,a))}},r?{component:"button"}:o)),i}};const z=function(){var e,t=(0,c.useHistory)().push,r=(0,u.Z)(),a=(0,M.W)(),l=(0,O.E)(),d=(0,s.useSelector)((function(e){return e.sources}),s.shallowEqual),p=d.appTypes,f=d.entities,m=d.sourceTypes,v=d.sourceTypesLoaded,E=d.appTypesLoaded,w=d.sortBy,k=d.sortDirection,T=d.numberOfEntities,j=d.removingSources,_=(0,s.useDispatch)(),z=0===T||!a,D=(0,o.useReducer)(Z,(e=(0,h.E)(r,z),{rows:[],sortBy:{},isLoaded:!1,cells:C(e)})),x=(0,n.Z)(D,2),B=x[0],L=x[1],A=function(){var e=(0,h.E)(r,z);return L({rows:P(f,e,m,p,j),cells:C(e)})};(0,o.useEffect)((function(){a&&v&&E?(L({isLoaded:!0}),A()):(L({isLoaded:!1}),function(){var e=(0,h.E)(r,z);L({cells:C(e)})}())}),[a,v,E]),(0,o.useEffect)((function(){B.isLoaded&&A()}),[f,j]);var R=B.rows;return 0===T&&B.isLoaded?R=[{heightAuto:!0,cells:[{props:{colSpan:h.W},title:i().createElement(S,null)}]}]:a&&E&&v||(R=[{heightAuto:!0,cells:[{props:{colSpan:h.W,className:"sources-placeholder-row"},title:i().createElement(b.mI,null)}]}]),i().createElement(y.Table,{gridBreakPoint:"grid-lg","aria-label":r.formatMessage({id:"sources.list",defaultMessage:"List of Sources"}),onSort:function(e,t,r){return _((0,g.Bb)(B.cells[t].value,r))},sortBy:{index:B.cells.map((function(e){return e.hidden?"hidden":e.value})).indexOf(w),direction:k},rows:R,cells:B.cells,actionResolver:a&&T>0?N(r,t,l,_):void 0,rowWrapper:b.sk,className:0===T&&B.isLoaded?"ins-c-table-empty-state":""},i().createElement(y.TableHeader,null),i().createElement(y.TableBody,null))};var D=r(99166),x=r(4833),B=r(86482),L=r(36488);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=(0,D.Z)((function(e){return e()}),500),I={pageNumber:1,sortBy:"created_at",sortDirection:"desc"},F=function(e){return e.map((function(e){var t=e.id;return{label:e.product_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},W=function(e){return e.map((function(e){var t=e.id;return{label:e.display_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},H=function(e,t,r){return r((0,g.OU)((0,a.Z)({},e,t)))},q=function(e,t,r,n){return Object.keys(e).map((function(a){return e[a]&&e[a].length>0?function(e,t,r,n,a){return{name:function(){return{name:t[e],key:e}},source_type_id:function(){return{category:"Source Type",key:e,chips:t[e].map((function(e){var t=r.find((function(t){return t.id===e}));return{name:t?t.product_name:e,value:e}}))}},applications:function(){return{category:"Application",key:e,chips:t[e].map((function(e){var t=n.find((function(t){return t.id===e}));return{name:t?t.display_name:e,value:e}}))}},availability_status:function(){return{category:"Status",key:e,chips:[{value:t[e][0],name:t[e][0]===x.Rl?a.formatMessage({id:"sources.available",defaultMessage:"Available"}):a.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"})}]}}}[e]||function(){return{name:e}}}(a,e,t,r,n)():void 0})).filter(Boolean)},G=function(e,t){return t&&e.length>0?e:void 0},U=["xs","sm","md","lg","2xl"],J=function(){var e=window.innerWidth;return e<=576?U[0]:e<=768?U[1]:e<=992?U[2]:e<=1200?U[3]:U[4]};var K=r(80254),X=r(69061),$=r(84866),Q=r(45697),Y=r.n(Q),ee=r(22122),te=r(81253),re=["src"],ne=function(e){var t=e.src,r=(0,te.Z)(e,re),a=(0,o.useState)(!1),s=(0,n.Z)(a,2),c=s[0],l=s[1];return i().createElement(i().Fragment,null,!c&&i().createElement(b.aN,(0,ee.Z)({height:"40px",width:"110px"},r)),i().createElement("img",(0,ee.Z)({src:t,onLoad:function(){return l(!0)},style:{display:c?"initial":"none"}},r)))};ne.propTypes={src:Y().string.isRequired};const ae=ne,oe=function(e){var t=(0,u.Z)(),r=(0,k.$)(t);return i().createElement(l.Tooltip,{content:r},i().createElement("div",{className:"disabled-tile-with-tooltip"},i().createElement(l.Tile,(0,ee.Z)({},e,{isDisabled:!0}))))};var ie=r(78205),se=function(e){var t=e.setSelectedType,r=e.mapper,n=(0,s.useSelector)((function(e){return e.sources.sourceTypes}),s.shallowEqual),a=(0,s.useSelector)((function(e){return e.sources.activeVendor})),o=(0,c.useHistory)().push,i=(0,O.E)(),u=function(e){t(e),o(w._j.sourcesNew.path)},d=i?l.Tile:oe;return n.filter((0,ie.j)(a)).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){var t=e.name;return r(t,u,d)}))};se.propTypes={setSelectedType:Y().func.isRequired,mapper:Y().func.isRequired};const ce=se;var le=function(e,t,r){return{amazon:i().createElement(r,{isStacked:!0,key:e,title:"Amazon Web Services",onClick:function(){return t("amazon")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:i().createElement(ae,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/aws.svg",alt:"aws logo"})}),google:i().createElement(r,{isStacked:!0,key:e,title:"Google Cloud",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("google")},icon:i().createElement(ae,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg",alt:"google logo"})}),azure:i().createElement(r,{isStacked:!0,key:e,title:"Microsoft Azure",onClick:function(){return t("azure")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:i().createElement(ae,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",alt:"azure logo"})})}[e]};const ue=function(e){return i().createElement(ce,(0,ee.Z)({},e,{mapper:le}))};var de=function(e){var t=e.setSelectedType,r=(0,u.Z)();return i().createElement(l.Card,{className:"ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"},i().createElement(l.CardTitle,null,r.formatMessage({id:"cloud.emptystate.cardTitle",defaultMessage:"Get started by connecting to your public clouds"})),i().createElement(l.CardBody,null,i().createElement(l.Text,null,r.formatMessage({id:"cloud.emptystate.cardDescription",defaultMessage:"Select an available provider."})),i().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},i().createElement(ue,{setSelectedType:t}))),i().createElement(l.CardFooter,{className:"cloud-footer"},i().createElement(l.Text,{className:"catalog-link pf-u-mt-lg"},r.formatMessage({id:"cloud.emptystate.catalogLink",defaultMessage:"Looking for a different provider? <a>See all Red Hat Certified Cloud and Service Providers</a>"},{a:function(e){return i().createElement(l.Text,{key:"link",component:"a",href:"https://catalog.redhat.com/cloud",target:"_blank",rel:"noopener noreferrer"},e)}}))))};de.propTypes={setSelectedType:Y().func.isRequired};const pe=de;var fe=i().createElement(ae,{className:"redhat-icon",src:"/apps/frontend-assets/red-hat-logos/stacked.svg",alt:"red hat logo"}),me=function(e,t,r){return{openshift:i().createElement(r,{isStacked:!0,key:e,title:"OpenShift Container Platfrom",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("openshift")},icon:fe})}[e]};const ge=function(e){return i().createElement(ce,(0,ee.Z)({},e,{mapper:me}))};var ve=function(e){var t=e.setSelectedType,r=(0,u.Z)();return i().createElement(l.Card,{className:"ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"},i().createElement(l.CardTitle,null,r.formatMessage({id:"redhat.emptystate.cardTitle",defaultMessage:"Get started by connecting to your Red Hat applications"})),i().createElement(l.CardBody,null,i().createElement(l.Text,null,r.formatMessage({id:"redhat.emptystate.cardDescription",defaultMessage:"Select an available application."})),i().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},i().createElement(ge,{setSelectedType:t}))))};ve.propTypes={setSelectedType:Y().func.isRequired};const ye=ve;var be=r(64673),he=r(48716),Ee=r(39173),Se=r(10817),Me=r(46071);const Oe=function(){var e=(0,u.Z)(),t=(0,s.useDispatch)(),r=(0,s.useSelector)((function(e){return e.sources.activeVendor}));return i().createElement(l.Tabs,{activeKey:r,onSelect:function(e,r){return t((0,g.CB)(r))},className:"pf-u-mt-md"},i().createElement(l.Tab,{eventKey:$.JL,title:i().createElement(i().Fragment,null,i().createElement(l.TabTitleIcon,null,i().createElement(Me.ZP,null)),i().createElement(l.TabTitleText,null,e.formatMessage({id:"sources.cloudSources",defaultMessage:"Cloud sources"})))}),i().createElement(l.Tab,{eventKey:$.B0,title:i().createElement(i().Fragment,null,i().createElement(l.TabTitleIcon,null,i().createElement(Se.ZP,null)),i().createElement(l.TabTitleText,null,e.formatMessage({id:"sources.redhatSources",defaultMessage:"Red Hat sources"})))}))};var we=function(){var e=(0,u.Z)();return i().createElement(he.Z,{className:"pf-u-pb-0"},i().createElement(Ee.Z,{title:e.formatMessage({id:"sources.sources",defaultMessage:"Sources"})}),i().createElement(Oe,null))};const ke=i().memo(we),Te=function(e,t,r,n){var a;switch(e){case"applications":return t.map((function(e){var t,n=e.application_type_id;return null===(t=r.find((function(e){return e.id===n})))||void 0===t?void 0:t.display_name})).join(",");case"source_type_id":return null===(a=n.find((function(e){return e.id===t})))||void 0===a?void 0:a.product_name;default:return t}};function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ze=(0,o.lazy)((function(){return r.e(490).then(r.bind(r,55997))})),Ne=(0,o.lazy)((function(){return Promise.all([r.e(410),r.e(736),r.e(657),r.e(198),r.e(671),r.e(371),r.e(199)]).then(r.bind(r,58012)).then((function(e){return{default:e.AddSourceWizard}}))})),ze={filter:void 0,selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0},De=function(e,t){var r=t.type,n=t.value,a=t.selectedType,o=t.initialValues,i=t.initialState;switch(r){case"setFilterValue":return Ce(Ce({},e),{},{filter:n});case"setSelectedType":return Ce(Ce({},e),{},{selectedType:a});case"retryWizard":return Ce(Ce({},e),{},{wizardInitialState:i,wizardInitialValues:o});case"closeWizard":return Ce(Ce({},e),{},{selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0})}};const xe=function(){var e,t,r,y,E,S=(0,o.useReducer)(De,ze),k=(0,n.Z)(S,2),T=k[0],j=T.filter,_=T.selectedType,P=T.wizardInitialState,C=T.wizardInitialValues,Z=k[1],N=(0,M.W)(),D=(0,O.E)(),A=(0,c.useHistory)(),Q=(0,u.Z)(),Y=(e=(0,o.useState)((function(){return J()})),t=(0,n.Z)(e,2),r=t[0],y=t[1],E=(0,o.useRef)(r),(0,o.useEffect)((function(){function e(){var e=J();e!==E.current&&(E.current=e,y(e))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r),ee=(0,s.useSelector)((function(e){return e.sources}),s.shallowEqual),te=ee.filterValue,re=ee.numberOfEntities,ne=ee.appTypes,ae=ee.pageSize,oe=ee.pageNumber,se=ee.fetchingError,ce=ee.sourceTypes,le=ee.paginationClicked,ue=ee.appTypesLoaded,de=ee.sourceTypesLoaded,fe=ee.activeVendor,me=ee.entities,ge=N&&de&&ue,ve=(0,s.useDispatch)();(0,o.useEffect)((function(){j!==te.name&&Z({type:"setFilterValue",value:te.name})}),[te.name]);var he=function(e,t){return ve((0,g.zm)(t,ae))},Ee=Math.ceil(re/ae);(0,o.useEffect)((function(){ge&&re>0&&oe>Math.max(Ee,1)&&he(0,Ee)}));var Se,Me={itemCount:re,page:oe,perPage:ae,onSetPage:he,onPerPageSelect:function(e,t){return ve((0,g.zm)(1,t))},className:"top-pagination"},Oe=Ce(Ce({},Me),{},{dropDirection:"up",variant:"bottom",isCompact:!1,className:"bottom-pagination"}),we=!(ge&&ue&&de||le),je=ce.filter((0,ie.j)(fe,!0)),Pe=Q.formatMessage({id:"sources.addSource",defaultMessage:"Add source"}),xe=Q.formatMessage({id:"sources.notAdminAddButton",defaultMessage:"To add a source, you must be granted write permissions from your Organization Administrator."});U.indexOf(Y)<=U.indexOf("sm")&&(Se={dropdownProps:{position:"right"},actions:D?[{label:Pe,props:{to:w._j.sourcesNew.path,component:c.Link}}]:[{label:Pe,props:{component:"div",isDisabled:!0,tooltip:xe,className:"ins-c-sources__disabled-drodpown-item"}}]});var Be=Object.entries(te).map((function(e){var t=(0,n.Z)(e,2),r=(t[0],t[1]);return r&&(!Array.isArray(r)||Array.isArray(r)&&r.length>0)})).filter(Boolean).length>0,Le=ge&&0===re&&!Be,Ae=fe===$.JL&&!Le,Re=function(e){return Z({type:"setSelectedType",selectedType:e})};return i().createElement(i().Fragment,null,i().createElement(o.Suspense,{fallback:null},i().createElement(K.Z,{exact:!0,route:w._j.sourcesRemove,Component:Ze}),i().createElement(K.Z,{exact:!0,route:w._j.sourcesNew,Component:Ne,componentProps:{sourceTypes:G(ce,de),applicationTypes:G(ne,ue),isOpen:!0,onClose:function(){Z({type:"closeWizard"}),A.push(w._j.sources.path)},afterSuccess:function(e){return function(e){return e((0,g.il)(I))}(ve)},hideSourcesButton:!0,selectedType:_,submitCallback:function(e){return function(e,t,r,n,a){var o,s,c,u,d,p="sources-wizard-notification-".concat(Date.now());if(location.pathname.split("/").filter(Boolean).pop()!==w._j.sourcesNew.path.split("/").pop())if(e.isErrored){var f=e.wizardState,m=f.activeStep,v=f.activeStepIndex,y=f.maxStepIndex,b=f.prevSteps,h=f.registeredFieldsHistory;t((0,g.Hz)({title:n.formatMessage({id:"alert.error.title",defaultMessage:"Error adding source"}),description:n.formatMessage({id:"alert.error.description",defaultMessage:"There was a problem while trying to add source {name}. Please try again. If the error persists, open a support case."},{name:i().createElement("b",null,e.values.source.name)}),variant:"danger",id:p,actionLinks:i().createElement(l.AlertActionLink,{onClick:function(){a({type:"retryWizard",initialValues:e.values,initialState:{activeStep:m,activeStepIndex:v,maxStepIndex:y,prevSteps:b,registeredFieldsHistory:h}}),t((0,g.Gd)(p)),r(w._j.sourcesNew.path)}},n.formatMessage({id:"alert.error.link",defaultMessage:"Retry"}))}))}else switch((0,B.Z)(e.createdSource)){case"unavailable":t((0,g.Hz)({title:n.formatMessage({id:"alert.error.title",defaultMessage:"Source configuration unsuccessful"}),description:n.formatMessage({id:"error.notification",defaultMessage:"{error} [<b>{name}</b>]"},{error:(null===(o=e.createdSource.applications)||void 0===o||null===(s=o[0])||void 0===s?void 0:s.availability_status_error)||(null===(c=e.createdSource.endpoint)||void 0===c||null===(u=c[0])||void 0===u?void 0:u.availability_status_error)||n.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"}),name:e.createdSource.name,b:L.S}),variant:"danger",id:p,actionLinks:i().createElement(l.AlertActionLink,{onClick:function(){t((0,g.Gd)(p)),r((0,w.yS)(w._j.sourcesDetail.path,e.createdSource.id))}},n.formatMessage({id:"alert.unavailable.link",defaultMessage:"Edit source"}))}));break;case"timeout":t((0,g.Hz)({title:n.formatMessage({id:"alert.timeout.title",defaultMessage:"Source configuration in progress"}),description:n.formatMessage({id:"alert.timeout.description",defaultMessage:"We are still working to confirm credentials for source {name}. To track progress, check the Status column in the Sources table."},{name:i().createElement("b",null,e.createdSource.name)}),variant:"info"}));break;default:t((0,g.Hz)({title:n.formatMessage({id:"alert.success.title",defaultMessage:"{type} connection successful"},{type:null===(d=e.sourceTypes.find((function(t){return t.id===e.createdSource.source_type_id})))||void 0===d?void 0:d.product_name}),description:n.formatMessage({id:"alert.success.description",defaultMessage:"Source {name} was successfully added"},{name:i().createElement("b",null,e.createdSource.name)}),variant:"success",id:p,actionLinks:i().createElement(l.AlertActionLink,{onClick:function(){t((0,g.Gd)(p)),r((0,w.yS)(w._j.sourcesDetail.path,e.createdSource.id))}},n.formatMessage({id:"alert.success.link",defaultMessage:"View source details"}))}))}}(e,ve,A.push,Q,Z)},initialValues:C,initialWizardState:P,activeVendor:fe}})),i().createElement(ke,null),i().createElement(p.Z,{type:"content"},Ae&&i().createElement(X.Z,null),se&&i().createElement(f.Z,null),!se&&Le&&fe===$.JL&&i().createElement(pe,{setSelectedType:Re}),!se&&Le&&fe===$.B0&&i().createElement(ye,{setSelectedType:Re}),!se&&!Le&&i().createElement(i().Fragment,null,i().createElement(d.Z,{pagination:we?i().createElement(b.Xf,null):re>0?Me:void 0,actionsConfig:Se||{dropdownProps:{position:"right"},actions:D?[i().createElement(c.Link,{to:w._j.sourcesNew.path,key:"addSourceButton"},i().createElement(l.Button,{variant:"primary",id:"addSourceButton"},Pe))]:[i().createElement(l.Tooltip,{content:xe,key:"addSourceButton"},i().createElement("span",{tabIndex:"0"},i().createElement(l.Button,{variant:"primary",isDisabled:!0,id:"addSourceButton"},Pe)))]},filterConfig:{items:[{label:Q.formatMessage({id:"sources.name",defaultMessage:"Name"}),filterValues:{"aria-label":Q.formatMessage({id:"sources.filterByName",defaultMessage:"Filter by name"}),onChange:function(e,t){Z({type:"setFilterValue",value:t}),V((function(){return H("name",t,ve)}))},value:j}},{label:Q.formatMessage({id:"sources.type",defaultMessage:"Type"}),type:"checkbox",filterValues:{onChange:function(e,t){return H("source_type_id",t,ve)},items:F(je),value:te.source_type_id}},{label:Q.formatMessage({id:"sources.application",defaultMessage:"Application"}),type:"checkbox",filterValues:{onChange:function(e,t){return H("applications",t,ve)},items:W((null==ne?void 0:ne.filter((0,be.W)(je,fe)))||[]),value:te.applications}},{label:Q.formatMessage({id:"sources.availabilityStatus",defaultMessage:"Status"}),type:"checkbox",filterValues:{onChange:function(e,t,r){return H("availability_status",e.target.checked?[r]:[],ve)},items:[{label:Q.formatMessage({id:"sources.available",defaultMessage:"Available"}),value:x.Rl},{label:Q.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"}),value:x.nZ}],value:te.availability_status}}]},activeFiltersConfig:{filters:q(te,ce,ne,Q),onDelete:function(e,t,r){return ve((0,g.OU)(function(e,t,r){if(r)return Object.keys(t).reduce((function(e,t){return R(R({},e),{},(0,a.Z)({},t,void 0))}),{});var n=e[0];return R(R({},t),{},(0,a.Z)({},n.key,n.chips?t[n.key].filter((function(e){return e!==n.chips[0].value})):void 0))}(t,te,r)))}},exportConfig:{isDisabled:!ge,onSelect:function(e,t){var r="csv"===t?function(e,t,r,n){var a=(0,h.E)(t).filter((function(e){return!e.hidden}));return[a.map((function(e){return e.title}))].concat((0,v.Z)(e.map((function(e){return a.map((function(t){var a=t.value;return Te(a,e[a],r,n)})).map((function(e){return null!=e&&e.includes(",")?'"'.concat(e,'"'):e}))})))).map((function(e){return e.join(",")})).join("\n")}(me,Q,ne,ce):function(e,t,r,n){var o=(0,h.E)(t).filter((function(e){return!e.hidden})),i=e.map((function(e){return function(e,t,r,n){return e.reduce((function(e,o){return _e(_e({},e),{},(0,a.Z)({},o.title,Te(o.value,t[o.value],r,n)))}),{})}(o,e,r,n)}));return JSON.stringify(i,null,2)}(me,Q,ne,ce);(0,m.Sv)(r,"sources-".concat((new Date).toISOString()),t)}}}),i().createElement(z,null),i().createElement(d.Z,{pagination:we?i().createElement(b.Xf,null):re>0?Oe:void 0}))))}},78205:(e,t,r)=>{"use strict";r.d(t,{j:()=>o,Z:()=>i});var n=r(84866),a=[n.OH,n.N9],o=function(e,t){return function(r){var o=r.vendor,i=r.name;return e===n.JL?o!==n.B0:t?o===n.B0:o===n.B0&&!a.includes(i)}};const i=function(e){var t,r;return(null===(t=e.schema)||void 0===t?void 0:t.authentication)&&(null===(r=e.schema)||void 0===r?void 0:r.endpoint)}}}]);
//# sourceMappingURL=../sourcemaps/sourcesPage.9265c4795c02d10d3e79.js.map