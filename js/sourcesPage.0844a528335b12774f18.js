(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[593],{66569:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Ze});var a=r(28481),n=r(96156),s=r(92950),o=r.n(s),i=r(45237),l=r(334),c=r(489),u=r(86896),d=r(57277),p=r(54213),m=r(43846),f=r(98495),g=r(85061),v=r(62691),y=r(98583),b=r(30567),h=r(80810);const E=function(){var e=(0,u.Z)(),t=(0,i.useDispatch)();return o().createElement(c.Bullseye,null,o().createElement(c.EmptyState,{variant:c.EmptyStateVariant.small},o().createElement(c.EmptyStateIcon,{icon:h.ZP}),o().createElement(c.Title,{headingLevel:"h2",size:"lg"},e.formatMessage({id:"sources.noResultsFoundTitle",defaultMessage:"No sources found"})),o().createElement(c.EmptyStateBody,null,e.formatMessage({id:"sources.noResultsFoundDescription",defaultMessage:"No sources match the filter criteria. Remove all filters or clear all filters to show sources."})),o().createElement(c.Button,{variant:"link",onClick:function(){return t((0,f.K5)())}},e.formatMessage({id:"sources.clearAllFilters",defaultMessage:"Clear all filters"}))))};var S=r(59824),M=r(58185),w=r(60076);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e,t,r,a){return t.filter((function(e){return e.title||e.hidden})).map((function(t){return{title:t.formatter?t.formatter(e[t.value],e,{sourceTypes:r,appTypes:a}):e[t.value]||""}}))},j=function(e,t,r,a,n){return e.filter((function(e){return!e.hidden})).reduce((function(e,s){var o=n.includes(s.id);return[].concat((0,g.Z)(e),[k(k({},s),{},{originalName:s.name,isOpen:!!s.expanded,cells:O(s,t,r,a),disableActions:o,isDeleting:o})])}),[])},_=function(e){return e.filter((function(e){return e.title||e.hidden})).map((function(e){return k({title:e.title||"",value:e.value,hidden:e.hidden,transforms:[v.wrappable]},e.sortable&&{transforms:[v.sortable,v.wrappable]})}))},C=function(e,t){return k(k({},e),t)},Z=function(e,t,r,a){return function(n){var s={tooltip:e.formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."}),isDisabled:!0,className:"ins-c-sources__disabled-drodpown-item"},o=[];return n.paused_at?o.push(k({title:e.formatMessage({id:"sources.resume",defaultMessage:"Resume"}),description:e.formatMessage({id:"sources.resume.description",defaultMessage:"Unpause data collection for this source"}),onClick:function(t,r,s){var o=s.id;return a((0,f.AX)(o,n.originalName,e))}},r?{component:"button"}:s)):o.push(k({title:e.formatMessage({id:"sources.pause",defaultMessage:"Pause"}),description:e.formatMessage({id:"sources.pause.description",defaultMessage:"Temporarily disable data collection"}),onClick:function(t,r,s){var o=s.id;return a((0,f.xz)(o,n.originalName,e))}},r?{component:"button"}:s)),o.push(k({title:e.formatMessage({id:"sources.remove",defaultMessage:"Remove"}),description:e.formatMessage({id:"sources.remove.description",defaultMessage:"Permanently delete this source and all collected data"}),onClick:function(e,r,a){var n=a.id;return t((0,w.yS)(w._j.sourcesRemove.path,n))}},r?{component:"button"}:s)),o.push(k({title:n.paused_at?e.formatMessage({id:"sources.viewDetails",defaultMessage:"View details"}):e.formatMessage({id:"sources.edit",defaultMessage:"Edit"}),onClick:function(e,r,a){var n=a.id;return t((0,w.yS)(w._j.sourcesDetail.path,n))}},r?{component:"button"}:s)),o}};const z=function(){var e,t=(0,l.useHistory)().push,r=(0,u.Z)(),n=(0,S.W)(),c=(0,M.E)(),d=(0,i.useSelector)((function(e){return e.sources}),i.shallowEqual),p=d.appTypes,m=d.entities,g=d.sourceTypes,h=d.sourceTypesLoaded,w=d.appTypesLoaded,T=d.sortBy,k=d.sortDirection,O=d.numberOfEntities,z=d.removingSources,P=(0,i.useDispatch)(),N=0===O||!n,D=(0,s.useReducer)(C,(e=(0,b.E)(r,N),{rows:[],sortBy:{},isLoaded:!1,cells:_(e)})),B=(0,a.Z)(D,2),A=B[0],x=B[1],L=function(){var e=(0,b.E)(r,N);return x({rows:j(m,e,g,p,z),cells:_(e)})};(0,s.useEffect)((function(){n&&h&&w?(x({isLoaded:!0}),L()):(x({isLoaded:!1}),function(){var e=(0,b.E)(r,N);x({cells:_(e)})}())}),[n,h,w]),(0,s.useEffect)((function(){A.isLoaded&&L()}),[m,z]);var R=A.rows;return 0===O&&A.isLoaded?R=[{heightAuto:!0,cells:[{props:{colSpan:b.W},title:o().createElement(E,null)}]}]:n&&w&&h||(R=[{heightAuto:!0,cells:[{props:{colSpan:b.W,className:"sources-placeholder-row"},title:o().createElement(y.mI,null)}]}]),o().createElement(v.Table,{gridBreakPoint:"grid-lg","aria-label":r.formatMessage({id:"sources.list",defaultMessage:"List of Sources"}),onSort:function(e,t,r){return P((0,f.Bb)(A.cells[t].value,r))},sortBy:{index:A.cells.map((function(e){return e.hidden?"hidden":e.value})).indexOf(T),direction:k},rows:R,cells:A.cells,actionResolver:n&&O>0?Z(r,t,c,P):void 0,rowWrapper:y.sk},o().createElement(v.TableHeader,null),o().createElement(v.TableBody,null))};var P=r(99166),N=r(4833),D=r(86482),B=r(36488);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=(0,P.Z)((function(e){return e()}),500),R={pageNumber:1,sortBy:"created_at",sortDirection:"desc"},V=function(e){return e.map((function(e){var t=e.id;return{label:e.product_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},I=function(e){return e.map((function(e){var t=e.id;return{label:e.display_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},F=function(e,t,r){return r((0,f.OU)((0,n.Z)({},e,t)))},W=function(e,t,r,a){return Object.keys(e).map((function(n){return e[n]&&e[n].length>0?function(e,t,r,a,n){return{name:function(){return{name:t[e],key:e}},source_type_id:function(){return{category:"Source Type",key:e,chips:t[e].map((function(e){var t=r.find((function(t){return t.id===e}));return{name:t?t.product_name:e,value:e}}))}},applications:function(){return{category:"Application",key:e,chips:t[e].map((function(e){var t=a.find((function(t){return t.id===e}));return{name:t?t.display_name:e,value:e}}))}},availability_status:function(){return{category:"Status",key:e,chips:[{value:t[e][0],name:t[e][0]===N.Rl?n.formatMessage({id:"sources.available",defaultMessage:"Available"}):n.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"})}]}}}[e]||function(){return{name:e}}}(n,e,t,r,a)():void 0})).filter(Boolean)},H=function(e,t){return t&&e.length>0?e:void 0},q=["xs","sm","md","lg","2xl"],G=function(){var e=window.innerWidth;return e<=576?q[0]:e<=768?q[1]:e<=992?q[2]:e<=1200?q[3]:q[4]};var U=r(80254),J=r(38136),K=r(84866),X=r(45697),Q=r.n(X),Y=r(22122),$=r(81253),ee=["src"],te=function(e){var t=e.src,r=(0,$.Z)(e,ee),n=(0,s.useState)(!1),i=(0,a.Z)(n,2),l=i[0],c=i[1];return o().createElement(o().Fragment,null,!l&&o().createElement(y.aN,(0,Y.Z)({height:"40px",width:"110px"},r)),o().createElement("img",(0,Y.Z)({src:t,onLoad:function(){return c(!0)},style:{display:l?"initial":"none"}},r)))};te.propTypes={src:Q().string.isRequired};const re=te,ae=function(e){var t=(0,u.Z)().formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."});return o().createElement(c.Tooltip,{content:t},o().createElement("div",{className:"disabled-tile-with-tooltip"},o().createElement(c.Tile,(0,Y.Z)({},e,{isDisabled:!0}))))};var ne=r(78205),se=function(e){var t=e.setSelectedType,r=e.mapper,a=(0,i.useSelector)((function(e){return e.sources.sourceTypes}),i.shallowEqual),n=(0,i.useSelector)((function(e){return e.sources.activeVendor})),s=(0,l.useHistory)().push,o=(0,M.E)(),u=function(e){t(e),s(w._j.sourcesNew.path)},d=o?c.Tile:ae;return a.filter((0,ne.j)(n)).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){var t=e.name;return r(t,u,d)}))};se.propTypes={setSelectedType:Q().func.isRequired,mapper:Q().func.isRequired};const oe=se;var ie=function(e,t,r){return{amazon:o().createElement(r,{isStacked:!0,key:e,title:"Amazon Web Services",onClick:function(){return t("amazon")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:o().createElement(re,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/aws.svg",alt:"aws logo"})}),google:o().createElement(r,{isStacked:!0,key:e,title:"Google Cloud",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("google")},icon:o().createElement(re,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg",alt:"google logo"})}),azure:o().createElement(r,{isStacked:!0,key:e,title:"Microsoft Azure",onClick:function(){return t("azure")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:o().createElement(re,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",alt:"azure logo"})})}[e]};const le=function(e){return o().createElement(oe,(0,Y.Z)({},e,{mapper:ie}))};var ce=function(e){var t=e.setSelectedType,r=(0,u.Z)();return o().createElement(c.Card,{className:"ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"},o().createElement(c.CardTitle,null,r.formatMessage({id:"cloud.emptystate.cardTitle",defaultMessage:"Get started by connecting to your public clouds"})),o().createElement(c.CardBody,null,o().createElement(c.Text,null,r.formatMessage({id:"cloud.emptystate.cardDescription",defaultMessage:"Select an available provider."})),o().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},o().createElement(le,{setSelectedType:t}))),o().createElement(c.CardFooter,{className:"cloud-footer"},o().createElement(c.Text,{className:"catalog-link pf-u-mt-lg"},r.formatMessage({id:"cloud.emptystate.catalogLink",defaultMessage:"Looking for a different provider? <a>See all Red Hat Certified Cloud and Service Providers</a>"},{a:function(e){return o().createElement(c.Text,{key:"link",component:"a",href:"https://catalog.redhat.com/cloud",target:"_blank",rel:"noopener noreferrer"},e)}}))))};ce.propTypes={setSelectedType:Q().func.isRequired};const ue=ce;var de=o().createElement(re,{className:"redhat-icon",src:"/apps/frontend-assets/red-hat-logos/stacked.svg",alt:"red hat logo"}),pe=function(e,t,r){return{openshift:o().createElement(r,{isStacked:!0,key:e,title:"OpenShift Container Platfrom",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("openshift")},icon:de})}[e]};const me=function(e){return o().createElement(oe,(0,Y.Z)({},e,{mapper:pe}))};var fe=function(e){var t=e.setSelectedType,r=(0,u.Z)();return o().createElement(c.Card,{className:"ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"},o().createElement(c.CardTitle,null,r.formatMessage({id:"redhat.emptystate.cardTitle",defaultMessage:"Get started by connecting to your Red Hat applications"})),o().createElement(c.CardBody,null,o().createElement(c.Text,null,r.formatMessage({id:"redhat.emptystate.cardDescription",defaultMessage:"Select an available application."})),o().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},o().createElement(me,{setSelectedType:t}))))};fe.propTypes={setSelectedType:Q().func.isRequired};const ge=fe;var ve=r(64673),ye=r(48716),be=r(39173),he=r(10817),Ee=r(46071);const Se=function(){var e=(0,u.Z)(),t=(0,i.useDispatch)(),r=(0,i.useSelector)((function(e){return e.sources.activeVendor}));return o().createElement(c.Tabs,{activeKey:r,onSelect:function(e,r){return t((0,f.CB)(r))},className:"pf-u-mt-md"},o().createElement(c.Tab,{eventKey:K.JL,title:o().createElement(o().Fragment,null,o().createElement(c.TabTitleIcon,null,o().createElement(Ee.ZP,null)),o().createElement(c.TabTitleText,null,e.formatMessage({id:"sources.cloudSources",defaultMessage:"Cloud sources"})))}),o().createElement(c.Tab,{eventKey:K.B0,title:o().createElement(o().Fragment,null,o().createElement(c.TabTitleIcon,null,o().createElement(he.ZP,null)),o().createElement(c.TabTitleText,null,e.formatMessage({id:"sources.redhatSources",defaultMessage:"Red Hat sources"})))}))};var Me=function(){var e=(0,u.Z)();return o().createElement(ye.Z,{className:"pf-u-pb-0"},o().createElement(be.Z,{title:e.formatMessage({id:"sources.sources",defaultMessage:"Sources"})}),o().createElement(Se,null))};const we=o().memo(Me);function Te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Oe=(0,s.lazy)((function(){return r.e(490).then(r.bind(r,55997))})),je=(0,s.lazy)((function(){return Promise.all([r.e(410),r.e(736),r.e(657),r.e(198),r.e(671),r.e(371),r.e(199)]).then(r.bind(r,58012)).then((function(e){return{default:e.AddSourceWizard}}))})),_e={filter:void 0,selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0},Ce=function(e,t){var r=t.type,a=t.value,n=t.selectedType,s=t.initialValues,o=t.initialState;switch(r){case"setFilterValue":return ke(ke({},e),{},{filter:a});case"setSelectedType":return ke(ke({},e),{},{selectedType:n});case"retryWizard":return ke(ke({},e),{},{wizardInitialState:o,wizardInitialValues:s});case"closeWizard":return ke(ke({},e),{},{selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0})}};const Ze=function(){var e,t,r,g,v,b=(0,s.useReducer)(Ce,_e),h=(0,a.Z)(b,2),E=h[0],T=E.filter,k=E.selectedType,O=E.wizardInitialState,j=E.wizardInitialValues,_=h[1],C=(0,S.W)(),Z=(0,M.E)(),P=(0,l.useHistory)(),A=(0,u.Z)(),X=(e=(0,s.useState)((function(){return G()})),t=(0,a.Z)(e,2),r=t[0],g=t[1],v=(0,s.useRef)(r),(0,s.useEffect)((function(){function e(){var e=G();e!==v.current&&(v.current=e,g(e))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r),Q=(0,i.useSelector)((function(e){return e.sources}),i.shallowEqual),Y=Q.filterValue,$=Q.numberOfEntities,ee=Q.appTypes,te=Q.pageSize,re=Q.pageNumber,ae=Q.fetchingError,se=Q.sourceTypes,oe=Q.paginationClicked,ie=Q.appTypesLoaded,le=Q.sourceTypesLoaded,ce=Q.activeVendor,de=C&&le&&ie,pe=(0,i.useDispatch)();(0,s.useEffect)((function(){T!==Y.name&&_({type:"setFilterValue",value:Y.name})}),[Y.name]);var me=function(e,t){return pe((0,f.zm)(t,te))},fe=Math.ceil($/te);(0,s.useEffect)((function(){de&&$>0&&re>Math.max(fe,1)&&me(0,fe)}));var ye,be={itemCount:$,page:re,perPage:te,onSetPage:me,onPerPageSelect:function(e,t){return pe((0,f.zm)(1,t))},className:"top-pagination"},he=ke(ke({},be),{},{dropDirection:"up",variant:"bottom",isCompact:!1,className:"bottom-pagination"}),Ee=!(de&&ie&&le||oe),Se=se.filter((0,ne.j)(ce,!0)),Me=A.formatMessage({id:"sources.addSource",defaultMessage:"Add source"}),Te=A.formatMessage({id:"sources.notAdminAddButton",defaultMessage:"To add a source, you must be granted write permissions from your Organization Administrator."});q.indexOf(X)<=q.indexOf("sm")&&(ye={dropdownProps:{position:"right"},actions:Z?[{label:Me,props:{to:w._j.sourcesNew.path,component:l.Link}}]:[{label:Me,props:{component:"div",isDisabled:!0,tooltip:Te,className:"ins-c-sources__disabled-drodpown-item"}}]});var Ze=Object.entries(Y).map((function(e){var t=(0,a.Z)(e,2),r=(t[0],t[1]);return r&&(!Array.isArray(r)||Array.isArray(r)&&r.length>0)})).filter(Boolean).length>0,ze=de&&0===$&&!Ze,Pe=ce===K.JL&&!ze,Ne=function(e){return _({type:"setSelectedType",selectedType:e})};return o().createElement(o().Fragment,null,o().createElement(s.Suspense,{fallback:null},o().createElement(U.Z,{exact:!0,route:w._j.sourcesRemove,Component:Oe}),o().createElement(U.Z,{exact:!0,route:w._j.sourcesNew,Component:je,componentProps:{sourceTypes:H(se,le),applicationTypes:H(ee,ie),isOpen:!0,onClose:function(){_({type:"closeWizard"}),P.push(w._j.sources.path)},afterSuccess:function(e){return function(e){return e((0,f.il)(R))}(pe)},hideSourcesButton:!0,selectedType:k,submitCallback:function(e){return function(e,t,r,a,n){var s,i,l,u,d,p="sources-wizard-notification-".concat(Date.now());if(location.pathname.split("/").filter(Boolean).pop()!==w._j.sourcesNew.path.split("/").pop())if(e.isErrored){var m=e.wizardState,g=m.activeStep,v=m.activeStepIndex,y=m.maxStepIndex,b=m.prevSteps,h=m.registeredFieldsHistory;t((0,f.Hz)({title:a.formatMessage({id:"alert.error.title",defaultMessage:"Error adding source"}),description:a.formatMessage({id:"alert.error.description",defaultMessage:"There was a problem while trying to add source {name}. Please try again. If the error persists, open a support case."},{name:o().createElement("b",null,e.values.source.name)}),variant:"danger",id:p,actionLinks:o().createElement(c.AlertActionLink,{onClick:function(){n({type:"retryWizard",initialValues:e.values,initialState:{activeStep:g,activeStepIndex:v,maxStepIndex:y,prevSteps:b,registeredFieldsHistory:h}}),t((0,f.Gd)(p)),r(w._j.sourcesNew.path)}},a.formatMessage({id:"alert.error.link",defaultMessage:"Retry"}))}))}else switch((0,D.Z)(e.createdSource)){case"unavailable":t((0,f.Hz)({title:a.formatMessage({id:"alert.error.title",defaultMessage:"Source configuration unsuccessful"}),description:a.formatMessage({id:"error.notification",defaultMessage:"{error} [<b>{name}</b>]"},{error:(null===(s=e.createdSource.applications)||void 0===s||null===(i=s[0])||void 0===i?void 0:i.availability_status_error)||(null===(l=e.createdSource.endpoint)||void 0===l||null===(u=l[0])||void 0===u?void 0:u.availability_status_error)||a.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"}),name:e.createdSource.name,b:B.S}),variant:"danger",id:p,actionLinks:o().createElement(c.AlertActionLink,{onClick:function(){t((0,f.Gd)(p)),r((0,w.yS)(w._j.sourcesDetail.path,e.createdSource.id))}},a.formatMessage({id:"alert.unavailable.link",defaultMessage:"Edit source"}))}));break;case"timeout":t((0,f.Hz)({title:a.formatMessage({id:"alert.timeout.title",defaultMessage:"Source configuration in progress"}),description:a.formatMessage({id:"alert.timeout.description",defaultMessage:"We are still working to confirm credentials for source {name}. To track progress, check the Status column in the Sources table."},{name:o().createElement("b",null,e.createdSource.name)}),variant:"info"}));break;default:t((0,f.Hz)({title:a.formatMessage({id:"alert.success.title",defaultMessage:"{type} connection successful"},{type:null===(d=e.sourceTypes.find((function(t){return t.id===e.createdSource.source_type_id})))||void 0===d?void 0:d.product_name}),description:a.formatMessage({id:"alert.success.description",defaultMessage:"Source {name} was successfully added"},{name:o().createElement("b",null,e.createdSource.name)}),variant:"success",id:p,actionLinks:o().createElement(c.AlertActionLink,{onClick:function(){t((0,f.Gd)(p)),r((0,w.yS)(w._j.sourcesDetail.path,e.createdSource.id))}},a.formatMessage({id:"alert.success.link",defaultMessage:"View source details"}))}))}}(e,pe,P.push,A,_)},initialValues:j,initialWizardState:O,activeVendor:ce}})),o().createElement(we,null),o().createElement(p.Z,{type:"content"},Pe&&o().createElement(J.Z,null),ae&&o().createElement(m.Z,null),!ae&&ze&&ce===K.JL&&o().createElement(ue,{setSelectedType:Ne}),!ae&&ze&&ce===K.B0&&o().createElement(ge,{setSelectedType:Ne}),!ae&&!ze&&o().createElement(o().Fragment,null,o().createElement(d.Z,{pagination:Ee?o().createElement(y.Xf,null):$>0?be:void 0,actionsConfig:ye||{dropdownProps:{position:"right"},actions:Z?[o().createElement(l.Link,{to:w._j.sourcesNew.path,key:"addSourceButton"},o().createElement(c.Button,{variant:"primary",id:"addSourceButton"},Me))]:[o().createElement(c.Tooltip,{content:Te,key:"addSourceButton"},o().createElement("span",{tabIndex:"0"},o().createElement(c.Button,{variant:"primary",isDisabled:!0,id:"addSourceButton"},Me)))]},filterConfig:{items:[{label:A.formatMessage({id:"sources.name",defaultMessage:"Name"}),filterValues:{"aria-label":A.formatMessage({id:"sources.filterByName",defaultMessage:"Filter by name"}),onChange:function(e,t){_({type:"setFilterValue",value:t}),L((function(){return F("name",t,pe)}))},value:T}},{label:A.formatMessage({id:"sources.type",defaultMessage:"Type"}),type:"checkbox",filterValues:{onChange:function(e,t){return F("source_type_id",t,pe)},items:V(Se),value:Y.source_type_id}},{label:A.formatMessage({id:"sources.application",defaultMessage:"Application"}),type:"checkbox",filterValues:{onChange:function(e,t){return F("applications",t,pe)},items:I((null==ee?void 0:ee.filter((0,ve.W)(Se,ce)))||[]),value:Y.applications}},{label:A.formatMessage({id:"sources.availabilityStatus",defaultMessage:"Status"}),type:"checkbox",filterValues:{onChange:function(e,t,r){return F("availability_status",e.target.checked?[r]:[],pe)},items:[{label:A.formatMessage({id:"sources.available",defaultMessage:"Available"}),value:N.Rl},{label:A.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"}),value:N.nZ}],value:Y.availability_status}}]},activeFiltersConfig:{filters:W(Y,se,ee,A),onDelete:function(e,t,r){return pe((0,f.OU)(function(e,t,r){if(r)return Object.keys(t).reduce((function(e,t){return x(x({},e),{},(0,n.Z)({},t,void 0))}),{});var a=e[0];return x(x({},t),{},(0,n.Z)({},a.key,a.chips?t[a.key].filter((function(e){return e!==a.chips[0].value})):void 0))}(t,Y,r)))}}}),o().createElement(z,null),o().createElement(d.Z,{pagination:Ee?o().createElement(y.Xf,null):$>0?he:void 0}))))}},78205:(e,t,r)=>{"use strict";r.d(t,{j:()=>s,Z:()=>o});var a=r(84866),n=[a.OH,a.N9],s=function(e,t){return function(r){var s=r.vendor,o=r.name;return e===a.JL?s!==a.B0:t?s===a.B0:s===a.B0&&!n.includes(o)}};const o=function(e){var t,r;return(null===(t=e.schema)||void 0===t?void 0:t.authentication)&&(null===(r=e.schema)||void 0===r?void 0:r.endpoint)}}}]);
//# sourceMappingURL=../sourcemaps/sourcesPage.0a48b16bbd7735221659.js.map