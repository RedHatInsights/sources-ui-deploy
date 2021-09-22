"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[593],{75490:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Be});var n=r(29439),a=r(4942),o=r(92950),i=r.n(o),s=r(44745),c=r(86235),l=r(80708),u=r(86896),d=r(66031),p=r(54213),f=r(43846),m=r(78596),g=r(11549),v=r(35240),y=r(98495),b=r(93433),h=r(75795),E=r(98583),S=r(30567),M=r(80810);const O=function(){var e=(0,u.Z)(),t=(0,s.useDispatch)();return i().createElement(l.Bullseye,null,i().createElement(l.EmptyState,{variant:l.EmptyStateVariant.small},i().createElement(l.EmptyStateIcon,{icon:M.ZP}),i().createElement(l.Title,{headingLevel:"h2",size:"lg"},e.formatMessage({id:"sources.noResultsFoundTitle",defaultMessage:"No sources found"})),i().createElement(l.EmptyStateBody,null,e.formatMessage({id:"sources.noResultsFoundDescription",defaultMessage:"No sources match the filter criteria. Remove all filters or clear all filters to show sources."})),i().createElement(l.Button,{variant:"link",onClick:function(){return t((0,y.K5)())}},e.formatMessage({id:"sources.clearAllFilters",defaultMessage:"Clear all filters"}))))};var w=r(59824),k=r(58185),T=r(60076),j=r(16946);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=function(e,t,r,n){return t.filter((function(e){return e.title||e.hidden})).map((function(t){return{title:t.formatter?t.formatter(e[t.value],e,{sourceTypes:r,appTypes:n}):e[t.value]||""}}))},C=function(e,t,r,n,a){return e.filter((function(e){return!e.hidden})).reduce((function(e,o){var i=a.includes(o.id);return[].concat((0,b.Z)(e),[P(P({},o),{},{originalName:o.name,isOpen:!!o.expanded,cells:Z(o,t,r,n),disableActions:i,isDeleting:i})])}),[])},N=function(e){return e.filter((function(e){return e.title||e.hidden})).map((function(e){return P({title:e.title||"",value:e.value,hidden:e.hidden,transforms:[h.wrappable]},e.sortable&&{transforms:[h.sortable,h.wrappable]})}))},D=function(e,t){return P(P({},e),t)},z=function(e,t,r,n){return function(a){var o=(0,j.Z)(e),i=[];return a.paused_at?i.push(P({title:e.formatMessage({id:"sources.resume",defaultMessage:"Resume"}),description:e.formatMessage({id:"sources.resume.description",defaultMessage:"Unpause data collection for this source"}),onClick:function(t,r,o){var i=o.id;return n((0,y.AX)(i,a.originalName,e))}},r?{component:"button"}:o)):i.push(P({title:e.formatMessage({id:"sources.pause",defaultMessage:"Pause"}),description:e.formatMessage({id:"sources.pause.description",defaultMessage:"Temporarily disable data collection"}),onClick:function(t,r,o){var i=o.id;return n((0,y.xz)(i,a.originalName,e))}},r?{component:"button"}:o)),i.push(P({title:e.formatMessage({id:"sources.remove",defaultMessage:"Remove"}),description:e.formatMessage({id:"sources.remove.description",defaultMessage:"Permanently delete this source and all collected data"}),onClick:function(e,r,n){var a=n.id;return t((0,T.yS)(T._j.sourcesRemove.path,a))}},r?{component:"button"}:o)),i.push(P({title:a.paused_at?e.formatMessage({id:"sources.viewDetails",defaultMessage:"View details"}):e.formatMessage({id:"sources.edit",defaultMessage:"Edit"}),onClick:function(e,r,n){var a=n.id;return t((0,T.yS)(T._j.sourcesDetail.path,a))}},r?{component:"button"}:o)),i}};const B=function(){var e,t=(0,c.useHistory)().push,r=(0,u.Z)(),a=(0,w.W)(),l=(0,k.E)(),d=(0,s.useSelector)((function(e){return e.sources}),s.shallowEqual),p=d.appTypes,f=d.entities,m=d.sourceTypes,g=d.sourceTypesLoaded,v=d.appTypesLoaded,b=d.sortBy,M=d.sortDirection,T=d.numberOfEntities,j=d.removingSources,_=(0,s.useDispatch)(),P=0===T||!a,Z=(0,o.useReducer)(D,(e=(0,S.E)(r,P),{rows:[],sortBy:{},isLoaded:!1,cells:N(e)})),B=(0,n.Z)(Z,2),L=B[0],A=B[1],x=function(){var e=(0,S.E)(r,P);return A({rows:C(f,e,m,p,j),cells:N(e)})};(0,o.useEffect)((function(){a&&g&&v?(A({isLoaded:!0}),x()):(A({isLoaded:!1}),function(){var e=(0,S.E)(r,P);A({cells:N(e)})}())}),[a,g,v]),(0,o.useEffect)((function(){L.isLoaded&&x()}),[f,j]);var V=L.rows;return 0===T&&L.isLoaded?V=[{heightAuto:!0,cells:[{props:{colSpan:S.W},title:i().createElement(O,null)}]}]:a&&v&&g||(V=[{heightAuto:!0,cells:[{props:{colSpan:S.W,className:"sources-placeholder-row"},title:i().createElement(E.mI,null)}]}]),i().createElement(h.Table,{gridBreakPoint:"grid-lg","aria-label":r.formatMessage({id:"sources.list",defaultMessage:"List of Sources"}),onSort:function(e,t,r){return _((0,y.Bb)(L.cells[t].value,r))},sortBy:{index:L.cells.map((function(e){return e.hidden?"hidden":e.value})).indexOf(b),direction:M},rows:V,cells:L.cells,actionResolver:a&&T>0?z(r,t,l,_):void 0,rowWrapper:E.sk,className:0===T&&L.isLoaded?"ins-c-table-empty-state":""},i().createElement(h.TableHeader,null),i().createElement(h.TableBody,null))};var L=r(99166),A=r(17570),x=r(86482),V=r(36488);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=(0,L.Z)((function(e){return e()}),500),H={pageNumber:1,sortBy:"created_at",sortDirection:"desc"},W=function(e){return e.map((function(e){var t=e.id;return{label:e.product_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},q=function(e){return e.map((function(e){var t=e.id;return{label:e.display_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},G=function(e,t,r){return r((0,y.OU)((0,a.Z)({},e,t)))},U=function(e,t,r,n){return Object.keys(e).map((function(a){return e[a]&&e[a].length>0?function(e,t,r,n,a){return{name:function(){return{name:t[e],key:e}},source_type_id:function(){return{category:"Source Type",key:e,chips:t[e].map((function(e){var t=r.find((function(t){return t.id===e}));return{name:t?t.product_name:e,value:e}}))}},applications:function(){return{category:"Application",key:e,chips:t[e].map((function(e){var t=n.find((function(t){return t.id===e}));return{name:t?t.display_name:e,value:e}}))}},availability_status:function(){return{category:"Status",key:e,chips:[{value:t[e][0],name:t[e][0]===A.Rl?a.formatMessage({id:"sources.available",defaultMessage:"Available"}):a.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"})}]}}}[e]||function(){return{name:e}}}(a,e,t,r,n)():void 0})).filter(Boolean)},J=function(e,t){return t&&e.length>0?e:void 0},K=r(80254),X=r(7995),$=r(84866),Q=r(45697),Y=r.n(Q),ee=r(87462),te=r(45987),re=["src"],ne=function(e){var t=e.src,r=(0,te.Z)(e,re),a=(0,o.useState)(!1),s=(0,n.Z)(a,2),c=s[0],l=s[1];return i().createElement(i().Fragment,null,!c&&i().createElement(E.aN,(0,ee.Z)({height:"40px",width:"110px"},r)),i().createElement("img",(0,ee.Z)({src:t,onLoad:function(){return l(!0)},style:{display:c?"initial":"none"}},r)))};ne.propTypes={src:Y().string.isRequired};const ae=ne,oe=function(e){var t=(0,u.Z)(),r=(0,j.$)(t);return i().createElement(l.Tooltip,{content:r},i().createElement("div",{className:"disabled-tile-with-tooltip"},i().createElement(l.Tile,(0,ee.Z)({},e,{isDisabled:!0}))))};var ie=r(78205),se=function(e){var t=e.setSelectedType,r=e.mapper,n=(0,s.useSelector)((function(e){return e.sources.sourceTypes}),s.shallowEqual),a=(0,s.useSelector)((function(e){return e.sources.activeVendor})),o=(0,c.useHistory)().push,i=(0,k.E)(),u=function(e){t(e),o(T._j.sourcesNew.path)},d=i?l.Tile:oe;return n.filter((0,ie.j)(a)).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){var t=e.name;return r(t,u,d)}))};se.propTypes={setSelectedType:Y().func.isRequired,mapper:Y().func.isRequired};const ce=se;var le=function(e,t,r){return{amazon:i().createElement(r,{isStacked:!0,key:e,title:"Amazon Web Services",onClick:function(){return t("amazon")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:i().createElement(ae,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/aws.svg",alt:"aws logo"})}),google:i().createElement(r,{isStacked:!0,key:e,title:"Google Cloud",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("google")},icon:i().createElement(ae,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg",alt:"google logo"})}),azure:i().createElement(r,{isStacked:!0,key:e,title:"Microsoft Azure",onClick:function(){return t("azure")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:i().createElement(ae,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",alt:"azure logo"})})}[e]};const ue=function(e){return i().createElement(ce,(0,ee.Z)({},e,{mapper:le}))};var de=function(e){var t=e.setSelectedType,r=(0,u.Z)();return i().createElement(l.Card,{className:"ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"},i().createElement(l.CardTitle,null,r.formatMessage({id:"cloud.emptystate.cardTitle",defaultMessage:"Get started by connecting to your public clouds"})),i().createElement(l.CardBody,null,i().createElement(l.Text,null,r.formatMessage({id:"cloud.emptystate.cardDescription",defaultMessage:"Select an available provider."})),i().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},i().createElement(ue,{setSelectedType:t}))),i().createElement(l.CardFooter,{className:"cloud-footer"},i().createElement(l.Text,{className:"catalog-link pf-u-mt-lg"},r.formatMessage({id:"cloud.emptystate.catalogLink",defaultMessage:"Looking for a different provider? <a>See all Red Hat Certified Cloud and Service Providers</a>"},{a:function(e){return i().createElement(l.Text,{key:"link",component:"a",href:"https://catalog.redhat.com/cloud",target:"_blank",rel:"noopener noreferrer"},e)}}))))};de.propTypes={setSelectedType:Y().func.isRequired};const pe=de;var fe=i().createElement(ae,{className:"redhat-icon",src:"/apps/frontend-assets/red-hat-logos/stacked.svg",alt:"red hat logo"}),me=function(e,t,r){return{openshift:i().createElement(r,{isStacked:!0,key:e,title:"OpenShift Container Platfrom",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("openshift")},icon:fe})}[e]};const ge=function(e){return i().createElement(ce,(0,ee.Z)({},e,{mapper:me}))};var ve=function(e){var t=e.setSelectedType,r=(0,u.Z)();return i().createElement(l.Card,{className:"ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"},i().createElement(l.CardTitle,null,r.formatMessage({id:"redhat.emptystate.cardTitle",defaultMessage:"Get started by connecting to your Red Hat applications"})),i().createElement(l.CardBody,null,i().createElement(l.Text,null,r.formatMessage({id:"redhat.emptystate.cardDescription",defaultMessage:"Select an available application."})),i().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},i().createElement(ge,{setSelectedType:t}))))};ve.propTypes={setSelectedType:Y().func.isRequired};const ye=ve;var be=r(64673),he=r(48716),Ee=r(39173),Se=r(10817),Me=r(46071);const Oe=function(){var e=(0,u.Z)(),t=(0,s.useDispatch)(),r=(0,s.useSelector)((function(e){return e.sources.activeVendor}));return i().createElement(l.Tabs,{activeKey:r,onSelect:function(e,r){return t((0,y.CB)(r))},className:"pf-u-mt-md"},i().createElement(l.Tab,{eventKey:$.JL,title:i().createElement(i().Fragment,null,i().createElement(l.TabTitleIcon,null,i().createElement(Me.ZP,null)),i().createElement(l.TabTitleText,null,e.formatMessage({id:"sources.cloudSources",defaultMessage:"Cloud sources"})))}),i().createElement(l.Tab,{eventKey:$.B0,title:i().createElement(i().Fragment,null,i().createElement(l.TabTitleIcon,null,i().createElement(Se.ZP,null)),i().createElement(l.TabTitleText,null,e.formatMessage({id:"sources.redhatSources",defaultMessage:"Red Hat sources"})))}))};var we=function(){var e=(0,u.Z)();return i().createElement(he.Z,{className:"pf-u-pb-0"},i().createElement(Ee.Z,{title:e.formatMessage({id:"sources.sources",defaultMessage:"Sources"})}),i().createElement(Oe,null))};const ke=i().memo(we),Te=function(e,t,r,n){var a;switch(e){case"applications":return t.map((function(e){var t,n=e.application_type_id;return null===(t=r.find((function(e){return e.id===n})))||void 0===t?void 0:t.display_name})).join(",");case"source_type_id":return null===(a=n.find((function(e){return e.id===t})))||void 0===a?void 0:a.product_name;default:return t}};function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ze(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ce=(0,o.lazy)((function(){return r.e(490).then(r.bind(r,55997))})),Ne=(0,o.lazy)((function(){return Promise.all([r.e(410),r.e(736),r.e(657),r.e(198),r.e(671),r.e(371),r.e(199)]).then(r.bind(r,58012)).then((function(e){return{default:e.AddSourceWizard}}))})),De={filter:void 0,selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0},ze=function(e,t){var r=t.type,n=t.value,a=t.selectedType,o=t.initialValues,i=t.initialState;switch(r){case"setFilterValue":return Ze(Ze({},e),{},{filter:n});case"setSelectedType":return Ze(Ze({},e),{},{selectedType:a});case"retryWizard":return Ze(Ze({},e),{},{wizardInitialState:i,wizardInitialValues:o});case"closeWizard":return Ze(Ze({},e),{},{selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0})}};const Be=function(){var e=(0,o.useReducer)(ze,De),t=(0,n.Z)(e,2),r=t[0],h=r.filter,M=r.selectedType,O=r.wizardInitialState,j=r.wizardInitialValues,_=t[1],P=(0,w.W)(),Z=(0,k.E)(),C=(0,c.useHistory)(),N=(0,u.Z)(),D=(0,m.Z)(),z=(0,s.useSelector)((function(e){return e.sources}),s.shallowEqual),L=z.filterValue,R=z.numberOfEntities,Q=z.appTypes,Y=z.pageSize,ee=z.pageNumber,te=z.fetchingError,re=z.sourceTypes,ne=z.paginationClicked,ae=z.appTypesLoaded,oe=z.sourceTypesLoaded,se=z.activeVendor,ce=z.entities,le=P&&oe&&ae,ue=(0,s.useDispatch)();(0,o.useEffect)((function(){h!==L.name&&_({type:"setFilterValue",value:L.name})}),[L.name]);var de=function(e,t){return ue((0,y.zm)(t,Y))},fe=Math.ceil(R/Y);(0,o.useEffect)((function(){le&&R>0&&ee>Math.max(fe,1)&&de(0,fe)}));var me,ge={itemCount:R,page:ee,perPage:Y,onSetPage:de,onPerPageSelect:function(e,t){return ue((0,y.zm)(1,t))},className:"top-pagination"},ve=Ze(Ze({},ge),{},{dropDirection:"up",variant:"bottom",isCompact:!1,className:"bottom-pagination"}),he=!(le&&ae&&oe||ne),Ee=re.filter((0,ie.j)(se,!0)),Se=N.formatMessage({id:"sources.addSource",defaultMessage:"Add source"}),Me=N.formatMessage({id:"sources.notAdminAddButton",defaultMessage:"To add a source, you must be granted Sources Administrator permissions from your Organization Administrator."});(0,g.Z)(D)&&(me={dropdownProps:{position:"right"},actions:Z?[{label:Se,props:{to:T._j.sourcesNew.path,component:c.Link}}]:[{label:Se,props:{component:"div",isDisabled:!0,tooltip:Me,className:"ins-c-sources__disabled-drodpown-item"}}]});var Oe=Object.entries(L).map((function(e){var t=(0,n.Z)(e,2),r=(t[0],t[1]);return r&&(!Array.isArray(r)||Array.isArray(r)&&r.length>0)})).filter(Boolean).length>0,we=le&&0===R&&!Oe,je=se===$.JL&&!we,Pe=function(e){return _({type:"setSelectedType",selectedType:e})};return i().createElement(i().Fragment,null,i().createElement(o.Suspense,{fallback:null},i().createElement(K.Z,{exact:!0,route:T._j.sourcesRemove,Component:Ce}),i().createElement(K.Z,{exact:!0,route:T._j.sourcesNew,Component:Ne,componentProps:{sourceTypes:J(re,oe),applicationTypes:J(Q,ae),isOpen:!0,onClose:function(){_({type:"closeWizard"}),C.push(T._j.sources.path)},afterSuccess:function(e){return function(e){return e((0,y.il)(H))}(ue)},hideSourcesButton:!0,selectedType:M,submitCallback:function(e){return function(e,t,r,n,a){var o,s,c,u,d,p="sources-wizard-notification-".concat(Date.now());if(location.pathname.split("/").filter(Boolean).pop()!==T._j.sourcesNew.path.split("/").pop())if(e.isErrored){var f=e.wizardState,m=f.activeStep,g=f.activeStepIndex,v=f.maxStepIndex,b=f.prevSteps,h=f.registeredFieldsHistory;t((0,y.Hz)({title:n.formatMessage({id:"alert.error.title",defaultMessage:"Error adding source"}),description:n.formatMessage({id:"alert.error.description",defaultMessage:"There was a problem while trying to add source {name}. Please try again. If the error persists, open a support case."},{name:i().createElement("b",null,e.values.source.name)}),variant:"danger",id:p,actionLinks:i().createElement(l.AlertActionLink,{onClick:function(){a({type:"retryWizard",initialValues:e.values,initialState:{activeStep:m,activeStepIndex:g,maxStepIndex:v,prevSteps:b,registeredFieldsHistory:h}}),t((0,y.Gd)(p)),r(T._j.sourcesNew.path)}},n.formatMessage({id:"alert.error.link",defaultMessage:"Retry"}))}))}else switch((0,x.Z)(e.createdSource)){case"unavailable":t((0,y.Hz)({title:n.formatMessage({id:"alert.error.title",defaultMessage:"Source configuration unsuccessful"}),description:n.formatMessage({id:"error.notification",defaultMessage:"{error} [<b>{name}</b>]"},{error:(null===(o=e.createdSource.applications)||void 0===o||null===(s=o[0])||void 0===s?void 0:s.availability_status_error)||(null===(c=e.createdSource.endpoint)||void 0===c||null===(u=c[0])||void 0===u?void 0:u.availability_status_error)||n.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"}),name:e.createdSource.name,b:V.S}),variant:"danger",id:p,actionLinks:i().createElement(l.AlertActionLink,{onClick:function(){t((0,y.Gd)(p)),r((0,T.yS)(T._j.sourcesDetail.path,e.createdSource.id))}},n.formatMessage({id:"alert.unavailable.link",defaultMessage:"Edit source"}))}));break;case"timeout":t((0,y.Hz)({title:n.formatMessage({id:"alert.timeout.title",defaultMessage:"Source configuration in progress"}),description:n.formatMessage({id:"alert.timeout.description",defaultMessage:"We are still working to confirm credentials for source {name}. To track progress, check the Status column in the Sources table."},{name:i().createElement("b",null,e.createdSource.name)}),variant:"info"}));break;default:t((0,y.Hz)({title:n.formatMessage({id:"alert.success.title",defaultMessage:"{type} connection successful"},{type:null===(d=e.sourceTypes.find((function(t){return t.id===e.createdSource.source_type_id})))||void 0===d?void 0:d.product_name}),description:n.formatMessage({id:"alert.success.description",defaultMessage:"Source {name} was successfully added"},{name:i().createElement("b",null,e.createdSource.name)}),variant:"success",id:p,actionLinks:i().createElement(l.AlertActionLink,{onClick:function(){t((0,y.Gd)(p)),r((0,T.yS)(T._j.sourcesDetail.path,e.createdSource.id))}},n.formatMessage({id:"alert.success.link",defaultMessage:"View source details"}))}))}}(e,ue,C.push,N,_)},initialValues:j,initialWizardState:O,activeVendor:se}})),i().createElement(ke,null),i().createElement(p.Z,{type:"content"},je&&i().createElement(X.Z,null),te&&i().createElement(f.Z,null),!te&&we&&se===$.JL&&i().createElement(pe,{setSelectedType:Pe}),!te&&we&&se===$.B0&&i().createElement(ye,{setSelectedType:Pe}),!te&&!we&&i().createElement(i().Fragment,null,i().createElement(d.Z,{useMobileLayout:!0,pagination:he?i().createElement(E.Xf,null):R>0?ge:void 0,actionsConfig:me||{dropdownProps:{position:"right"},actions:Z?[i().createElement(c.Link,{to:T._j.sourcesNew.path,key:"addSourceButton"},i().createElement(l.Button,{variant:"primary",id:"addSourceButton"},Se))]:[i().createElement(l.Tooltip,{content:Me,key:"addSourceButton"},i().createElement("span",{tabIndex:"0"},i().createElement(l.Button,{variant:"primary",isDisabled:!0,id:"addSourceButton"},Se)))]},filterConfig:{items:[{label:N.formatMessage({id:"sources.name",defaultMessage:"Name"}),filterValues:{"aria-label":N.formatMessage({id:"sources.filterByName",defaultMessage:"Filter by name"}),onChange:function(e,t){_({type:"setFilterValue",value:t}),F((function(){return G("name",t,ue)}))},value:h}},{label:N.formatMessage({id:"sources.type",defaultMessage:"Type"}),type:"checkbox",filterValues:{onChange:function(e,t){return G("source_type_id",t,ue)},items:W(Ee),value:L.source_type_id}},{label:N.formatMessage({id:"sources.application",defaultMessage:"Application"}),type:"checkbox",filterValues:{onChange:function(e,t){return G("applications",t,ue)},items:q((null==Q?void 0:Q.filter((0,be.W)(Ee,se)))||[]),value:L.applications}},{label:N.formatMessage({id:"sources.availabilityStatus",defaultMessage:"Status"}),type:"checkbox",filterValues:{onChange:function(e,t,r){return G("availability_status",e.target.checked?[r]:[],ue)},items:[{label:N.formatMessage({id:"sources.available",defaultMessage:"Available"}),value:A.Rl},{label:N.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"}),value:A.nZ}],value:L.availability_status}}]},activeFiltersConfig:{filters:U(L,re,Q,N),onDelete:function(e,t,r){return ue((0,y.OU)(function(e,t,r){if(r)return Object.keys(t).reduce((function(e,t){return I(I({},e),{},(0,a.Z)({},t,void 0))}),{});var n=e[0];return I(I({},t),{},(0,a.Z)({},n.key,n.chips?t[n.key].filter((function(e){return e!==n.chips[0].value})):void 0))}(t,L,r)))}},exportConfig:Ze(Ze({},g.Z&&{position:"right"}),{},{isDisabled:!le,onSelect:function(e,t){var r="csv"===t?function(e,t,r,n){var a=(0,S.E)(t).filter((function(e){return!e.hidden}));return[a.map((function(e){return e.title}))].concat((0,b.Z)(e.map((function(e){return a.map((function(t){var a=t.value;return Te(a,e[a],r,n)})).map((function(e){return null!=e&&e.includes(",")?'"'.concat(e,'"'):e}))})))).map((function(e){return e.join(",")})).join("\n")}(ce,N,Q,re):function(e,t,r,n){var o=(0,S.E)(t).filter((function(e){return!e.hidden})),i=e.map((function(e){return function(e,t,r,n){return e.reduce((function(e,o){return _e(_e({},e),{},(0,a.Z)({},o.title,Te(o.value,t[o.value],r,n)))}),{})}(o,e,r,n)}));return JSON.stringify(i,null,2)}(ce,N,Q,re);(0,v.Sv)(r,"sources-".concat((new Date).toISOString()),t)}})}),i().createElement(B,null),i().createElement(d.Z,{pagination:he?i().createElement(E.Xf,null):R>0?ve:void 0}))))}},78205:(e,t,r)=>{r.d(t,{j:()=>o,Z:()=>i});var n=r(84866),a=[n.OH,n.N9],o=function(e,t){return function(r){var o=r.vendor,i=r.name;return e===n.JL?o!==n.B0:t?o===n.B0:o===n.B0&&!a.includes(i)}};const i=function(e){var t,r;return(null===(t=e.schema)||void 0===t?void 0:t.authentication)&&(null===(r=e.schema)||void 0===r?void 0:r.endpoint)}}}]);
//# sourceMappingURL=../sourcemaps/sourcesPage.823545b6fde43350edc95b898225b1fb.js.map