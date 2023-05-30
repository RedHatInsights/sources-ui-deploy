"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[593],{93736:(e,t,r)=>{r.d(t,{a:()=>i});var a=r(49881),n=r(16959),i=function(){var e=(0,a.useNavigate)();return function(t,r){return e((0,n.n)(t,n.d),r)}}},75490:(e,t,r)=>{r.r(t),r.d(t,{default:()=>De});var a=r(29439),n=r(4942),i=r(92950),o=r.n(i),s=r(86706),c=r(28347),l=r(6848),u=r(86896),d=r(93736),p=r(7887),f=r(44873),m=r(2443),v=r(78596),g=r(11549),y=r(35240),b=r(89372),E=r(93433),h=r(4259),S=r(98583),M=r(30567),O=r(80810);const k=function(){var e=(0,u.Z)(),t=(0,s.I0)();return o().createElement(l.Bullseye,null,o().createElement(l.EmptyState,{variant:l.EmptyStateVariant.small},o().createElement(l.EmptyStateIcon,{icon:O.ZP}),o().createElement(l.Title,{headingLevel:"h2",size:"lg"},e.formatMessage({id:"sources.noResultsFoundTitle",defaultMessage:"No sources found"})),o().createElement(l.EmptyStateBody,null,e.formatMessage({id:"sources.noResultsFoundDescription",defaultMessage:"No sources match the filter criteria. Remove all filters or clear all filters to show sources."})),o().createElement(l.Button,{variant:"link",onClick:function(){return t((0,b.K5)())}},e.formatMessage({id:"sources.clearAllFilters",defaultMessage:"Clear all filters"}))))};var w=r(59824),T=r(58185),j=r(58192),Z=r(16946);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e,t,r,a){return t.filter((function(e){return e.title||e.hidden})).map((function(t){return{title:t.formatter?t.formatter(e[t.value],e,{sourceTypes:r,appTypes:a}):e[t.value]||""}}))},N=function(e,t,r,a,n){return e.filter((function(e){return!e.hidden})).reduce((function(e,i){var o=n.includes(i.id);return[].concat((0,E.Z)(e),[C(C({},i),{},{originalName:i.name,isOpen:!!i.expanded,cells:P(i,t,r,a),disableActions:o,isDeleting:o})])}),[])},z=function(e){return e.filter((function(e){return e.title||e.hidden})).map((function(e){return C({title:e.title||"",value:e.value,hidden:e.hidden,transforms:[h.wrappable]},e.sortable&&{transforms:[h.sortable,h.wrappable]})}))},D=function(e,t){return C(C(C({},e),t),{},{key:e.key+1})},A=function(e,t,r,a,n){return function(i){var o=(0,Z.Z)(e,n),s=[];return i.paused_at?s.push(C({title:e.formatMessage({id:"sources.resume",defaultMessage:"Resume"}),description:e.formatMessage({id:"sources.resume.description",defaultMessage:"Unpause data collection for this source"}),onClick:function(t,r,n){var o=n.id;return a((0,b.AX)(o,i.originalName,e))}},r?{component:"button"}:o)):s.push(C({title:e.formatMessage({id:"sources.pause",defaultMessage:"Pause"}),description:e.formatMessage({id:"sources.pause.description",defaultMessage:"Temporarily disable data collection"}),onClick:function(t,r,n){var o=n.id;return a((0,b.xz)(o,i.originalName,e))}},r?{component:"button"}:o)),s.push(C({title:e.formatMessage({id:"sources.remove",defaultMessage:"Remove"}),description:e.formatMessage({id:"sources.remove.description",defaultMessage:"Permanently delete this source and all collected data"}),onClick:function(e,r,a){var n=a.id;return t((0,j.yS)(j._j.sourcesRemove.path,n))}},r?{component:"button"}:o)),s.push(C({title:i.paused_at?e.formatMessage({id:"sources.viewDetails",defaultMessage:"View details"}):e.formatMessage({id:"sources.edit",defaultMessage:"Edit"}),onClick:function(e,r,a){var n=a.id;return t((0,j.yS)(j._j.sourcesDetail.path,n))}},r?{component:"button"}:o)),s}};const B=function(){var e,t=(0,d.a)(),r=(0,u.Z)(),n=(0,w.W)(),c=(0,T.E)(),l=(0,s.v9)((function(e){return e.user.isOrgAdmin})),p=(0,s.v9)((function(e){return e.sources}),s.wU),f=p.appTypes,m=p.entities,v=p.sourceTypes,g=p.sourceTypesLoaded,y=p.appTypesLoaded,E=p.sortBy,O=p.sortDirection,j=p.numberOfEntities,Z=p.removingSources,_=(0,s.I0)(),C=0===j||!n,P=(0,i.useReducer)(D,(e=(0,M.E)(r,C),{rows:[],sortBy:{},isLoaded:!1,cells:z(e),key:0})),B=(0,a.Z)(P,2),I=B[0],x=B[1],L=function(){var e=(0,M.E)(r,C);return x({rows:N(m,e,v,f,Z),cells:z(e)})};(0,i.useEffect)((function(){n&&g&&y?(x({isLoaded:!0}),L()):(x({isLoaded:!1}),function(){var e=(0,M.E)(r,C);x({cells:z(e)})}())}),[n,g,y]),(0,i.useEffect)((function(){I.isLoaded&&L()}),[m,Z]);var R=I.rows;return 0===j&&I.isLoaded?R=[{heightAuto:!0,cells:[{props:{colSpan:M.W},title:o().createElement(k,null)}]}]:n&&y&&g||(R=[{heightAuto:!0,cells:[{props:{colSpan:M.W,className:"sources-placeholder-row"},title:o().createElement(S.mI,null)}]}]),o().createElement(h.Table,{gridBreakPoint:"grid-lg","aria-label":r.formatMessage({id:"sources.list",defaultMessage:"List of Sources"}),onSort:function(e,t,r){return _((0,b.Bb)(I.cells[t].value,r))},sortBy:{index:I.cells.map((function(e){return e.hidden?"hidden":e.value})).indexOf(E),direction:O},key:I.key,rows:R,cells:I.cells,actionResolver:n&&j>0?A(r,t,c,_,l):void 0,rowWrapper:S.sk,className:0===j&&I.isLoaded?"ins-c-table-empty-state":""},o().createElement(h.TableHeader,null),o().createElement(h.TableBody,null))};var I=r(99166),x=r(4833),L=r(86482),R=r(36488);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=(0,I.Z)((function(e){return e()}),500),H={pageNumber:1,sortBy:"created_at",sortDirection:"desc"},U=function(e){return e.map((function(e){var t=e.id;return{label:e.product_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},G=function(e){return e.map((function(e){var t=e.id;return{label:e.display_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},q=function(e,t,r){return r((0,b.OU)((0,n.Z)({},e,t)))},J=function(e,t,r,a){return Object.keys(e).map((function(n){return e[n]&&e[n].length>0?function(e,t,r,a,n){return{name:function(){return{name:t[e],key:e}},source_type_id:function(){return{category:"Source Type",key:e,chips:t[e].map((function(e){var t=r.find((function(t){return t.id===e}));return{name:t?t.product_name:e,value:e}}))}},applications:function(){return{category:"Application",key:e,chips:t[e].map((function(e){var t=a.find((function(t){return t.id===e}));return{name:t?t.display_name:e,value:e}}))}},availability_status:function(){return{category:"Status",key:e,chips:[{value:t[e][0],name:t[e][0]===x.Rl?n.formatMessage({id:"sources.available",defaultMessage:"Available"}):n.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"})}]}}}[e]||function(){return{name:e}}}(n,e,t,r,a)():void 0})).filter(Boolean)},K=function(e,t){return t&&e.length>0?e:void 0},X=r(7995),$=r(84866),Q=r(45697),Y=r.n(Q),ee=r(87462),te=r(45987),re=["src"],ae=function(e){var t=e.src,r=(0,te.Z)(e,re),n=(0,i.useState)(!1),s=(0,a.Z)(n,2),c=s[0],l=s[1];return o().createElement(o().Fragment,null,!c&&o().createElement(S.aN,(0,ee.Z)({height:"40px",width:"110px"},r)),o().createElement("img",(0,ee.Z)({src:t,"data-testid":"ImageWithPlaceholder",onLoad:function(){return l(!0)},style:{display:c?"initial":"none"}},r)))};ae.propTypes={src:Y().string.isRequired};const ne=ae,ie=function(e){var t=(0,u.Z)(),r=(0,s.v9)((function(e){return e.user.isOrgAdmin})),a=(0,Z.$)(t,r);return o().createElement(l.Tooltip,{content:a},o().createElement("div",{className:"disabled-tile-with-tooltip"},o().createElement(l.Tile,(0,ee.Z)({},e,{isDisabled:!0}))))};var oe=r(78205),se=function(e){var t=e.setSelectedType,r=e.mapper,a=(0,s.v9)((function(e){return e.sources.sourceTypes}),s.wU),n=(0,s.v9)((function(e){return e.sources.activeCategory})),i=(0,d.a)(),o=(0,T.E)(),c=function(e){t(e),i(j._j.sourcesNew.path)},u=o?l.Tile:ie;return a.filter((0,oe.j)(n)).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){var t=e.name;return r(t,c,u)}))};se.propTypes={setSelectedType:Y().func.isRequired,mapper:Y().func.isRequired};const ce=se;var le=function(e,t,r){return{amazon:o().createElement(r,{isStacked:!0,key:e,title:"Amazon Web Services",onClick:function(){return t("amazon")},className:"tile pf-u-mr-md pf-u-mt-md",icon:o().createElement(ne,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/aws.svg",alt:"aws logo"})}),google:o().createElement(r,{isStacked:!0,key:e,title:"Google Cloud",className:"tile pf-u-mr-md pf-u-mt-md",onClick:function(){return t("google")},icon:o().createElement(ne,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg",alt:"google logo"})}),azure:o().createElement(r,{isStacked:!0,key:e,title:"Microsoft Azure",onClick:function(){return t("azure")},className:"tile pf-u-mr-md pf-u-mt-md",icon:o().createElement(ne,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",alt:"azure logo"})}),ibm:o().createElement(r,{isStacked:!0,key:e,title:"IBM Cloud",onClick:function(){return t("ibm")},className:"tile pf-u-mr-md pf-u-mt-md",icon:o().createElement(ne,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/ibm-cloud.svg",alt:"ibm logo"})}),"oracle-cloud-infrastructure":o().createElement(r,{isStacked:!0,key:e,title:"Oracle Cloud Infrastructure",onClick:function(){return t("oracle-cloud-infrastructure")},className:"tile pf-u-mr-md pf-u-mt-md",icon:o().createElement(ne,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/oracle-short.svg",alt:"oracle logo"})})}[e]};const ue=function(e){return o().createElement(ce,(0,ee.Z)({},e,{mapper:le}))};var de=function(e){var t=e.setSelectedType,r=(0,u.Z)();return o().createElement(l.Card,{className:"src-c-card__cloud-empty-state pf-u-mt-md pf-u-mt-0-on-md"},o().createElement(l.CardTitle,null,r.formatMessage({id:"cloud.emptystate.cardTitle",defaultMessage:"Get started by connecting to your public clouds"})),o().createElement(l.CardBody,null,o().createElement(l.Text,null,r.formatMessage({id:"cloud.emptystate.cardDescription",defaultMessage:"Select an available provider."})),o().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},o().createElement(ue,{setSelectedType:t}))),o().createElement(l.CardFooter,{className:"cloud-footer"},o().createElement(l.Text,{className:"catalog-link pf-u-mt-lg"},r.formatMessage({id:"cloud.emptystate.catalogLink",defaultMessage:"Looking for a different provider? <a>See all Red Hat Certified Cloud and Service Providers</a>"},{a:function(e){return o().createElement(l.Text,{key:"link",component:"a",href:"https://catalog.redhat.com/cloud",target:"_blank",rel:"noopener noreferrer"},e)}}))))};de.propTypes={setSelectedType:Y().func.isRequired};const pe=de;var fe=o().createElement(ne,{className:"redhat-icon",src:"/apps/frontend-assets/red-hat-logos/stacked.svg",alt:"red hat logo"}),me=function(e,t,r){return{openshift:o().createElement(r,{isStacked:!0,key:e,title:"OpenShift Container Platform",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("openshift")},icon:fe})}[e]};const ve=function(e){return o().createElement(ce,(0,ee.Z)({},e,{mapper:me}))};var ge=function(e){var t=e.setSelectedType,r=(0,u.Z)();return o().createElement(l.Card,{className:"src-c-card__cloud-empty-state pf-u-mt-md pf-u-mt-0-on-md"},o().createElement(l.CardTitle,null,r.formatMessage({id:"redhat.emptystate.cardTitle",defaultMessage:"Get started by connecting to your Red Hat applications"})),o().createElement(l.CardBody,null,o().createElement(l.Text,null,r.formatMessage({id:"redhat.emptystate.cardDescription",defaultMessage:"Select an available application."})),o().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},o().createElement(ve,{setSelectedType:t}))))};ge.propTypes={setSelectedType:Y().func.isRequired};const ye=ge;var be=r(64673),Ee=r(89376),he=r(39173),Se=r(10817),Me=r(46071);const Oe=function(){var e=(0,u.Z)(),t=(0,s.I0)(),r=(0,s.v9)((function(e){return e.sources.activeCategory}));return o().createElement(l.Tabs,{activeKey:r,onSelect:function(e,r){return t((0,b.Qr)(r))},className:"pf-u-mt-md"},o().createElement(l.Tab,{eventKey:$.JL,title:o().createElement(o().Fragment,null,o().createElement(l.TabTitleIcon,null,o().createElement(Me.ZP,{"aria-label":"Cloud Icon"})),o().createElement(l.TabTitleText,null,e.formatMessage({id:"sources.cloudSources",defaultMessage:"Cloud sources"})))}),o().createElement(l.Tab,{eventKey:$.B0,title:o().createElement(o().Fragment,null,o().createElement(l.TabTitleIcon,null,o().createElement(Se.ZP,{"aria-label":"Red Hat Icon"})),o().createElement(l.TabTitleText,null,e.formatMessage({id:"sources.redhatSources",defaultMessage:"Red Hat sources"})))}))};var ke=function(){var e=(0,u.Z)();return o().createElement(Ee.Z,{className:"pf-u-pb-0"},o().createElement(he.Z,{title:e.formatMessage({id:"sources.sources",defaultMessage:"Sources"})}),o().createElement(Oe,null))};const we=o().memo(ke),Te=function(e,t,r,a){var n;switch(e){case"applications":return t.map((function(e){var t,a=e.application_type_id;return null===(t=r.find((function(e){return e.id===a})))||void 0===t?void 0:t.display_name})).join(",");case"source_type_id":return null===(n=a.find((function(e){return e.id===t})))||void 0===n?void 0:n.product_name;default:return t}};function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Ze(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _e=r(49881);function Ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ne={filter:void 0,selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0},ze=function(e,t){var r=t.type,a=t.value,n=t.selectedType,i=t.initialValues,o=t.initialState;switch(r){case"setFilterValue":return Pe(Pe({},e),{},{filter:a});case"setSelectedType":return Pe(Pe({},e),{},{selectedType:n});case"retryWizard":return Pe(Pe({},e),{},{wizardInitialState:o,wizardInitialValues:i});case"closeWizard":return Pe(Pe({},e),{},{selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0})}};const De=function(){var e=(0,i.useReducer)(ze,Ne),t=(0,a.Z)(e,2),r=t[0],h=r.filter,O=r.selectedType,k=r.wizardInitialState,Z=r.wizardInitialValues,_=t[1],C=(0,w.W)(),P=(0,T.E)(),N=(0,s.v9)((function(e){return e.user.isOrgAdmin})),z=(0,d.a)(),D=(0,u.Z)(),A=(0,v.Z)(),I=(0,s.v9)((function(e){return e.sources}),s.wU),V=I.filterValue,Q=I.numberOfEntities,Y=I.appTypes,ee=I.pageSize,te=I.pageNumber,re=I.fetchingError,ae=I.sourceTypes,ne=I.paginationClicked,ie=I.appTypesLoaded,se=I.sourceTypesLoaded,ce=I.activeCategory,le=I.entities,ue=C&&se&&ie,de=(0,s.I0)();(0,i.useEffect)((function(){h!==V.name&&_({type:"setFilterValue",value:V.name})}),[V.name]);var fe=function(e,t){return de((0,b.zm)(t,ee))},me=Math.ceil(Q/ee);(0,i.useEffect)((function(){ue&&Q>0&&te>Math.max(me,1)&&fe(0,me)}));var ve,ge={itemCount:Q,page:te,perPage:ee,onSetPage:fe,onPerPageSelect:function(e,t){return de((0,b.zm)(1,t))},className:"top-pagination"},Ee=Pe(Pe({},ge),{},{dropDirection:"up",variant:"bottom",isCompact:!1,className:"bottom-pagination"}),he=!(ue&&ie&&se||ne),Se=ae.filter((0,oe.j)(ce,!0)),Me=D.formatMessage({id:"sources.addSource",defaultMessage:"Add source"}),Oe=N?D.formatMessage({id:"sources.notAdminAddButton",defaultMessage:"To add a source, you must add Sources Administrator permissions to your user."}):D.formatMessage({id:"sources.notPermissionsAddButton",defaultMessage:"To add a source, your Organization Administrator must grant you Sources Administrator permissions."});(0,g.Z)(A)&&(ve={dropdownProps:{position:"right"},actions:P?[{label:Me,props:{to:j._j.sourcesNew.path,component:c.Z}}]:[{label:Me,props:{component:"div",isDisabled:!0,tooltip:Oe,className:"src-m-dropdown-item-disabled"}}]});var ke=Object.entries(V).map((function(e){var t=(0,a.Z)(e,2),r=(t[0],t[1]);return r&&(!Array.isArray(r)||Array.isArray(r)&&r.length>0)})).filter(Boolean).length>0,je=ue&&0===Q&&!ke,Ce=ce===$.JL&&!je,De=function(e){return _({type:"setSelectedType",selectedType:e})};return o().createElement(o().Fragment,null,o().createElement(i.Suspense,{fallback:null},o().createElement(_e.Outlet,{context:{sourceTypes:K(ae,se),applicationTypes:K(Y,ie),isOpen:!0,onClose:function(){_({type:"closeWizard"}),z(j._j.sources.path)},afterSuccess:function(e){return function(e){return e((0,b.il)(H))}(de)},hideSourcesButton:!0,selectedType:O,submitCallback:function(e){return function(e,t,r,a,n){var i,s,c,u,d,p="sources-wizard-notification-".concat(Date.now());if(location.pathname.split("/").filter(Boolean).pop()!==j._j.sourcesNew.path.split("/").pop())if(e.isErrored){var f=e.wizardState,m=f.activeStep,v=f.activeStepIndex,g=f.maxStepIndex,y=f.prevSteps,E=f.registeredFieldsHistory;t((0,b.Hz)({title:a.formatMessage({id:"alert.error.title",defaultMessage:"Error adding source"}),description:a.formatMessage({id:"alert.error.description",defaultMessage:"There was a problem while trying to add source {name}. Please try again. If the error persists, open a support case."},{name:o().createElement("b",null,e.values.source.name)}),variant:"danger",id:p,actionLinks:o().createElement(l.AlertActionLink,{onClick:function(){n({type:"retryWizard",initialValues:e.values,initialState:{activeStep:m,activeStepIndex:v,maxStepIndex:g,prevSteps:y,registeredFieldsHistory:E}}),t((0,b.Gd)(p)),r(j._j.sourcesNew.path)}},a.formatMessage({id:"alert.error.link",defaultMessage:"Retry"}))}))}else switch((0,L.Z)(e.createdSource)){case"unavailable":t((0,b.Hz)({title:a.formatMessage({id:"alert.error.title",defaultMessage:"Source configuration unsuccessful"}),description:a.formatMessage({id:"error.notification",defaultMessage:"{error} [<b>{name}</b>]"},{error:(null===(i=e.createdSource.applications)||void 0===i||null===(s=i[0])||void 0===s?void 0:s.availability_status_error)||(null===(c=e.createdSource.endpoint)||void 0===c||null===(u=c[0])||void 0===u?void 0:u.availability_status_error)||a.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"}),name:e.createdSource.name,b:R.S}),variant:"danger",id:p,actionLinks:o().createElement(l.AlertActionLink,{onClick:function(){t((0,b.Gd)(p)),r((0,j.yS)(j._j.sourcesDetail.path,e.createdSource.id))}},a.formatMessage({id:"alert.unavailable.link",defaultMessage:"Edit source"}))}));break;case"timeout":t((0,b.Hz)({title:a.formatMessage({id:"alert.timeout.title",defaultMessage:"Source configuration in progress"}),description:a.formatMessage({id:"alert.timeout.description",defaultMessage:"We are still working to confirm credentials for source {name}. To track progress, check the Status column in the Sources table."},{name:o().createElement("b",null,e.createdSource.name)}),variant:"info"}));break;default:t((0,b.Hz)({title:a.formatMessage({id:"alert.success.title",defaultMessage:"{type} connection successful"},{type:null===(d=e.sourceTypes.find((function(t){return t.id===e.createdSource.source_type_id})))||void 0===d?void 0:d.product_name}),description:a.formatMessage({id:"alert.success.description",defaultMessage:"Source {name} was successfully added"},{name:o().createElement("b",null,e.createdSource.name)}),variant:"success",id:p,actionLinks:o().createElement(l.AlertActionLink,{onClick:function(){t((0,b.Gd)(p)),r((0,j.yS)(j._j.sourcesDetail.path,e.createdSource.id))}},a.formatMessage({id:"alert.success.link",defaultMessage:"View source details"}))}))}}(e,de,z,D,_)},initialValues:Z,initialWizardState:k,activeCategory:ce}})),o().createElement(we,null),o().createElement(f.Z,{type:"content"},Ce&&o().createElement(X.Z,null),re&&o().createElement(m.Z,null),!re&&je&&ce===$.JL&&o().createElement(pe,{setSelectedType:De}),!re&&je&&ce===$.B0&&o().createElement(ye,{setSelectedType:De}),!re&&!je&&o().createElement(o().Fragment,null,o().createElement(p.Z,{useMobileLayout:!0,pagination:he?o().createElement(S.Xf,null):Q>0?ge:void 0,actionsConfig:ve||{dropdownProps:{position:"right"},actions:P?[o().createElement(c.Z,{to:j._j.sourcesNew.path,key:"addSourceButton"},o().createElement(l.Button,{"data-hcc-index":"true","data-hcc-title":Me,"data-hcc-alt":"create source;add cloud provider",variant:"primary",id:"addSourceButton"},Me))]:[o().createElement(l.Tooltip,{content:Oe,key:"addSourceButton"},o().createElement("span",{tabIndex:"0"},o().createElement(l.Button,{variant:"primary",isDisabled:!0,id:"addSourceButton"},Me)))]},filterConfig:{items:[{label:D.formatMessage({id:"sources.name",defaultMessage:"Name"}),filterValues:{"aria-label":D.formatMessage({id:"sources.filterByName",defaultMessage:"Filter by name"}),onChange:function(e,t){_({type:"setFilterValue",value:t}),W((function(){return q("name",t,de)}))},value:h}},{label:D.formatMessage({id:"sources.type",defaultMessage:"Type"}),type:"checkbox",filterValues:{onChange:function(e,t){return q("source_type_id",t,de)},items:U(Se),value:V.source_type_id}},{label:D.formatMessage({id:"sources.application",defaultMessage:"Application"}),type:"checkbox",filterValues:{onChange:function(e,t){return q("applications",t,de)},items:G((null==Y?void 0:Y.filter((0,be.W)(Se,ce)))||[]),value:V.applications}},{label:D.formatMessage({id:"sources.availabilityStatus",defaultMessage:"Status"}),type:"checkbox",filterValues:{onChange:function(e,t,r){return q("availability_status",e.target.checked?[r]:[],de)},items:[{label:D.formatMessage({id:"sources.available",defaultMessage:"Available"}),value:x.Rl},{label:D.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"}),value:x.nZ}],value:V.availability_status}}]},activeFiltersConfig:{filters:J(V,ae,Y,D),onDelete:function(e,t,r){return de((0,b.OU)(function(e,t,r){if(r)return Object.keys(t).reduce((function(e,t){return F(F({},e),{},(0,n.Z)({},t,void 0))}),{});var a=e[0];return F(F({},t),{},(0,n.Z)({},a.key,a.chips?t[a.key].filter((function(e){return e!==a.chips[0].value})):void 0))}(t,V,r)))}},exportConfig:Pe(Pe({},g.Z&&{position:"right"}),{},{isDisabled:!ue,onSelect:function(e,t){var r="csv"===t?function(e,t,r,a){var n=(0,M.E)(t).filter((function(e){return!e.hidden}));return[n.map((function(e){return e.title}))].concat((0,E.Z)(e.map((function(e){return n.map((function(t){var n=t.value;return Te(n,e[n],r,a)})).map((function(e){return null!=e&&e.includes(",")?'"'.concat(e,'"'):e}))})))).map((function(e){return e.join(",")})).join("\n")}(le,D,Y,ae):function(e,t,r,a){var i=(0,M.E)(t).filter((function(e){return!e.hidden})),o=e.map((function(e){return function(e,t,r,a){return e.reduce((function(e,i){return Ze(Ze({},e),{},(0,n.Z)({},i.title,Te(i.value,t[i.value],r,a)))}),{})}(i,e,r,a)}));return JSON.stringify(o,null,2)}(le,D,Y,ae);(0,y.Sv)(r,"sources-".concat((new Date).toISOString()),t)}})}),o().createElement(B,null),o().createElement(p.Z,{pagination:he?o().createElement(S.Xf,null):Q>0?Ee:void 0}))))}},86482:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(93433);const n=function(e){var t,r,n,i=(null===(t=e.applications)||void 0===t?void 0:t.filter(Boolean).map((function(e){return e.availability_status||"timeout"})))||[],o=(null===(r=e.endpoint)||void 0===r?void 0:r.filter(Boolean).map((function(e){return e.availability_status||"timeout"})))||[],s=(null===(n=e.authentications)||void 0===n?void 0:n.filter(Boolean).map((function(e){return e.availability_status||"timeout"})))||[],c=[].concat((0,a.Z)(i),(0,a.Z)(o),(0,a.Z)(s));return c.includes("unavailable")?"unavailable":c.length>0&&c.every((function(e){return"available"===e}))?"available":c.includes("timeout")?"timeout":"finished"}},64673:(e,t,r)=>{r.d(t,{W:()=>n,Z:()=>i});var a=r(84866),n=function(e,t){return function(r){return r.supported_source_types.find((function(r){var a;return(null===(a=e.find((function(e){var t=e.name;return r===t})))||void 0===a?void 0:a.category)===t}))}};const i=function(e){return e.name!==a.M$}},78205:(e,t,r)=>{r.d(t,{Z:()=>o,j:()=>i});var a=r(84866),n=[a.OH,a.N9],i=function(e,t){return function(r){var a=r.category,i=r.name;return t?a===e:a===e&&!n.includes(i)}};const o=function(e){return e.schema}}}]);
//# sourceMappingURL=../sourcemaps/sourcesPage.c6618294e10d4ec541d826a1b8ff3c59.js.map