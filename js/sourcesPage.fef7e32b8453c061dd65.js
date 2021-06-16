(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[593],{66569:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Pe});var a=r(28481),n=r(96156),s=r(92950),o=r.n(s),i=r(45237),l=r(334),c=r(489),u=r(86896),d=r(57277),p=r(54213),m=r(43846),f=r(98495),g=r(85061),v=r(62691),y=r(98583),b=r(30567),E=r(80810);const h=function(){var e=(0,u.Z)(),t=(0,i.useDispatch)();return o().createElement(c.Bullseye,null,o().createElement(c.EmptyState,{variant:c.EmptyStateVariant.small},o().createElement(c.EmptyStateIcon,{icon:E.ZP}),o().createElement(c.Title,{headingLevel:"h2",size:"lg"},e.formatMessage({id:"sources.noResultsFoundTitle",defaultMessage:"No sources found"})),o().createElement(c.EmptyStateBody,null,e.formatMessage({id:"sources.noResultsFoundDescription",defaultMessage:"No sources match the filter criteria. Remove all filters or clear all filters to show sources."})),o().createElement(c.Button,{variant:"link",onClick:function(){return t((0,f.K5)())}},e.formatMessage({id:"sources.clearAllFilters",defaultMessage:"Clear all filters"}))))};var S=r(59824),M=r(58185),w=r(60076),T=r(16946);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e,t,r,a){return t.filter((function(e){return e.title||e.hidden})).map((function(t){return{title:t.formatter?t.formatter(e[t.value],e,{sourceTypes:r,appTypes:a}):e[t.value]||""}}))},_=function(e,t,r,a,n){return e.filter((function(e){return!e.hidden})).reduce((function(e,s){var o=n.includes(s.id);return[].concat((0,g.Z)(e),[O(O({},s),{},{originalName:s.name,isOpen:!!s.expanded,cells:j(s,t,r,a),disableActions:o,isDeleting:o})])}),[])},C=function(e){return e.filter((function(e){return e.title||e.hidden})).map((function(e){return O({title:e.title||"",value:e.value,hidden:e.hidden,transforms:[v.wrappable]},e.sortable&&{transforms:[v.sortable,v.wrappable]})}))},Z=function(e,t){return O(O({},e),t)},P=function(e,t,r,a){return function(n){var s=(0,T.Z)(e),o=[];return n.paused_at?o.push(O({title:e.formatMessage({id:"sources.resume",defaultMessage:"Resume"}),description:e.formatMessage({id:"sources.resume.description",defaultMessage:"Unpause data collection for this source"}),onClick:function(t,r,s){var o=s.id;return a((0,f.AX)(o,n.originalName,e))}},r?{component:"button"}:s)):o.push(O({title:e.formatMessage({id:"sources.pause",defaultMessage:"Pause"}),description:e.formatMessage({id:"sources.pause.description",defaultMessage:"Temporarily disable data collection"}),onClick:function(t,r,s){var o=s.id;return a((0,f.xz)(o,n.originalName,e))}},r?{component:"button"}:s)),o.push(O({title:e.formatMessage({id:"sources.remove",defaultMessage:"Remove"}),description:e.formatMessage({id:"sources.remove.description",defaultMessage:"Permanently delete this source and all collected data"}),onClick:function(e,r,a){var n=a.id;return t((0,w.yS)(w._j.sourcesRemove.path,n))}},r?{component:"button"}:s)),o.push(O({title:n.paused_at?e.formatMessage({id:"sources.viewDetails",defaultMessage:"View details"}):e.formatMessage({id:"sources.edit",defaultMessage:"Edit"}),onClick:function(e,r,a){var n=a.id;return t((0,w.yS)(w._j.sourcesDetail.path,n))}},r?{component:"button"}:s)),o}};const z=function(){var e,t=(0,l.useHistory)().push,r=(0,u.Z)(),n=(0,S.W)(),c=(0,M.E)(),d=(0,i.useSelector)((function(e){return e.sources}),i.shallowEqual),p=d.appTypes,m=d.entities,g=d.sourceTypes,E=d.sourceTypesLoaded,w=d.appTypesLoaded,T=d.sortBy,k=d.sortDirection,O=d.numberOfEntities,j=d.removingSources,z=(0,i.useDispatch)(),N=0===O||!n,D=(0,s.useReducer)(Z,(e=(0,b.E)(r,N),{rows:[],sortBy:{},isLoaded:!1,cells:C(e)})),B=(0,a.Z)(D,2),x=B[0],L=B[1],A=function(){var e=(0,b.E)(r,N);return L({rows:_(m,e,g,p,j),cells:C(e)})};(0,s.useEffect)((function(){n&&E&&w?(L({isLoaded:!0}),A()):(L({isLoaded:!1}),function(){var e=(0,b.E)(r,N);L({cells:C(e)})}())}),[n,E,w]),(0,s.useEffect)((function(){x.isLoaded&&A()}),[m,j]);var R=x.rows;return 0===O&&x.isLoaded?R=[{heightAuto:!0,cells:[{props:{colSpan:b.W},title:o().createElement(h,null)}]}]:n&&w&&E||(R=[{heightAuto:!0,cells:[{props:{colSpan:b.W,className:"sources-placeholder-row"},title:o().createElement(y.mI,null)}]}]),o().createElement(v.Table,{gridBreakPoint:"grid-lg","aria-label":r.formatMessage({id:"sources.list",defaultMessage:"List of Sources"}),onSort:function(e,t,r){return z((0,f.Bb)(x.cells[t].value,r))},sortBy:{index:x.cells.map((function(e){return e.hidden?"hidden":e.value})).indexOf(T),direction:k},rows:R,cells:x.cells,actionResolver:n&&O>0?P(r,t,c,z):void 0,rowWrapper:y.sk,className:0===O&&x.isLoaded?"ins-c-table-empty-state":""},o().createElement(v.TableHeader,null),o().createElement(v.TableBody,null))};var N=r(99166),D=r(4833),B=r(86482),x=r(36488);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=(0,N.Z)((function(e){return e()}),500),V={pageNumber:1,sortBy:"created_at",sortDirection:"desc"},I=function(e){return e.map((function(e){var t=e.id;return{label:e.product_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},F=function(e){return e.map((function(e){var t=e.id;return{label:e.display_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},W=function(e,t,r){return r((0,f.OU)((0,n.Z)({},e,t)))},H=function(e,t,r,a){return Object.keys(e).map((function(n){return e[n]&&e[n].length>0?function(e,t,r,a,n){return{name:function(){return{name:t[e],key:e}},source_type_id:function(){return{category:"Source Type",key:e,chips:t[e].map((function(e){var t=r.find((function(t){return t.id===e}));return{name:t?t.product_name:e,value:e}}))}},applications:function(){return{category:"Application",key:e,chips:t[e].map((function(e){var t=a.find((function(t){return t.id===e}));return{name:t?t.display_name:e,value:e}}))}},availability_status:function(){return{category:"Status",key:e,chips:[{value:t[e][0],name:t[e][0]===D.Rl?n.formatMessage({id:"sources.available",defaultMessage:"Available"}):n.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"})}]}}}[e]||function(){return{name:e}}}(n,e,t,r,a)():void 0})).filter(Boolean)},q=function(e,t){return t&&e.length>0?e:void 0},G=["xs","sm","md","lg","2xl"],U=function(){var e=window.innerWidth;return e<=576?G[0]:e<=768?G[1]:e<=992?G[2]:e<=1200?G[3]:G[4]};var J=r(80254),K=r(69061),X=r(84866),$=r(45697),Q=r.n($),Y=r(22122),ee=r(81253),te=["src"],re=function(e){var t=e.src,r=(0,ee.Z)(e,te),n=(0,s.useState)(!1),i=(0,a.Z)(n,2),l=i[0],c=i[1];return o().createElement(o().Fragment,null,!l&&o().createElement(y.aN,(0,Y.Z)({height:"40px",width:"110px"},r)),o().createElement("img",(0,Y.Z)({src:t,onLoad:function(){return c(!0)},style:{display:l?"initial":"none"}},r)))};re.propTypes={src:Q().string.isRequired};const ae=re,ne=function(e){var t=(0,u.Z)(),r=(0,T.$)(t);return o().createElement(c.Tooltip,{content:r},o().createElement("div",{className:"disabled-tile-with-tooltip"},o().createElement(c.Tile,(0,Y.Z)({},e,{isDisabled:!0}))))};var se=r(78205),oe=function(e){var t=e.setSelectedType,r=e.mapper,a=(0,i.useSelector)((function(e){return e.sources.sourceTypes}),i.shallowEqual),n=(0,i.useSelector)((function(e){return e.sources.activeVendor})),s=(0,l.useHistory)().push,o=(0,M.E)(),u=function(e){t(e),s(w._j.sourcesNew.path)},d=o?c.Tile:ne;return a.filter((0,se.j)(n)).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){var t=e.name;return r(t,u,d)}))};oe.propTypes={setSelectedType:Q().func.isRequired,mapper:Q().func.isRequired};const ie=oe;var le=function(e,t,r){return{amazon:o().createElement(r,{isStacked:!0,key:e,title:"Amazon Web Services",onClick:function(){return t("amazon")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:o().createElement(ae,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/aws.svg",alt:"aws logo"})}),google:o().createElement(r,{isStacked:!0,key:e,title:"Google Cloud",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("google")},icon:o().createElement(ae,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg",alt:"google logo"})}),azure:o().createElement(r,{isStacked:!0,key:e,title:"Microsoft Azure",onClick:function(){return t("azure")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:o().createElement(ae,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",alt:"azure logo"})})}[e]};const ce=function(e){return o().createElement(ie,(0,Y.Z)({},e,{mapper:le}))};var ue=function(e){var t=e.setSelectedType,r=(0,u.Z)();return o().createElement(c.Card,{className:"ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"},o().createElement(c.CardTitle,null,r.formatMessage({id:"cloud.emptystate.cardTitle",defaultMessage:"Get started by connecting to your public clouds"})),o().createElement(c.CardBody,null,o().createElement(c.Text,null,r.formatMessage({id:"cloud.emptystate.cardDescription",defaultMessage:"Select an available provider."})),o().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},o().createElement(ce,{setSelectedType:t}))),o().createElement(c.CardFooter,{className:"cloud-footer"},o().createElement(c.Text,{className:"catalog-link pf-u-mt-lg"},r.formatMessage({id:"cloud.emptystate.catalogLink",defaultMessage:"Looking for a different provider? <a>See all Red Hat Certified Cloud and Service Providers</a>"},{a:function(e){return o().createElement(c.Text,{key:"link",component:"a",href:"https://catalog.redhat.com/cloud",target:"_blank",rel:"noopener noreferrer"},e)}}))))};ue.propTypes={setSelectedType:Q().func.isRequired};const de=ue;var pe=o().createElement(ae,{className:"redhat-icon",src:"/apps/frontend-assets/red-hat-logos/stacked.svg",alt:"red hat logo"}),me=function(e,t,r){return{openshift:o().createElement(r,{isStacked:!0,key:e,title:"OpenShift Container Platfrom",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("openshift")},icon:pe})}[e]};const fe=function(e){return o().createElement(ie,(0,Y.Z)({},e,{mapper:me}))};var ge=function(e){var t=e.setSelectedType,r=(0,u.Z)();return o().createElement(c.Card,{className:"ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"},o().createElement(c.CardTitle,null,r.formatMessage({id:"redhat.emptystate.cardTitle",defaultMessage:"Get started by connecting to your Red Hat applications"})),o().createElement(c.CardBody,null,o().createElement(c.Text,null,r.formatMessage({id:"redhat.emptystate.cardDescription",defaultMessage:"Select an available application."})),o().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},o().createElement(fe,{setSelectedType:t}))))};ge.propTypes={setSelectedType:Q().func.isRequired};const ve=ge;var ye=r(64673),be=r(48716),Ee=r(39173),he=r(10817),Se=r(46071);const Me=function(){var e=(0,u.Z)(),t=(0,i.useDispatch)(),r=(0,i.useSelector)((function(e){return e.sources.activeVendor}));return o().createElement(c.Tabs,{activeKey:r,onSelect:function(e,r){return t((0,f.CB)(r))},className:"pf-u-mt-md"},o().createElement(c.Tab,{eventKey:X.JL,title:o().createElement(o().Fragment,null,o().createElement(c.TabTitleIcon,null,o().createElement(Se.ZP,null)),o().createElement(c.TabTitleText,null,e.formatMessage({id:"sources.cloudSources",defaultMessage:"Cloud sources"})))}),o().createElement(c.Tab,{eventKey:X.B0,title:o().createElement(o().Fragment,null,o().createElement(c.TabTitleIcon,null,o().createElement(he.ZP,null)),o().createElement(c.TabTitleText,null,e.formatMessage({id:"sources.redhatSources",defaultMessage:"Red Hat sources"})))}))};var we=function(){var e=(0,u.Z)();return o().createElement(be.Z,{className:"pf-u-pb-0"},o().createElement(Ee.Z,{title:e.formatMessage({id:"sources.sources",defaultMessage:"Sources"})}),o().createElement(Me,null))};const Te=o().memo(we);function ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je=(0,s.lazy)((function(){return r.e(490).then(r.bind(r,55997))})),_e=(0,s.lazy)((function(){return Promise.all([r.e(410),r.e(736),r.e(657),r.e(198),r.e(671),r.e(371),r.e(199)]).then(r.bind(r,58012)).then((function(e){return{default:e.AddSourceWizard}}))})),Ce={filter:void 0,selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0},Ze=function(e,t){var r=t.type,a=t.value,n=t.selectedType,s=t.initialValues,o=t.initialState;switch(r){case"setFilterValue":return Oe(Oe({},e),{},{filter:a});case"setSelectedType":return Oe(Oe({},e),{},{selectedType:n});case"retryWizard":return Oe(Oe({},e),{},{wizardInitialState:o,wizardInitialValues:s});case"closeWizard":return Oe(Oe({},e),{},{selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0})}};const Pe=function(){var e,t,r,g,v,b=(0,s.useReducer)(Ze,Ce),E=(0,a.Z)(b,2),h=E[0],T=h.filter,k=h.selectedType,O=h.wizardInitialState,j=h.wizardInitialValues,_=E[1],C=(0,S.W)(),Z=(0,M.E)(),P=(0,l.useHistory)(),N=(0,u.Z)(),L=(e=(0,s.useState)((function(){return U()})),t=(0,a.Z)(e,2),r=t[0],g=t[1],v=(0,s.useRef)(r),(0,s.useEffect)((function(){function e(){var e=U();e!==v.current&&(v.current=e,g(e))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r),$=(0,i.useSelector)((function(e){return e.sources}),i.shallowEqual),Q=$.filterValue,Y=$.numberOfEntities,ee=$.appTypes,te=$.pageSize,re=$.pageNumber,ae=$.fetchingError,ne=$.sourceTypes,oe=$.paginationClicked,ie=$.appTypesLoaded,le=$.sourceTypesLoaded,ce=$.activeVendor,ue=C&&le&&ie,pe=(0,i.useDispatch)();(0,s.useEffect)((function(){T!==Q.name&&_({type:"setFilterValue",value:Q.name})}),[Q.name]);var me=function(e,t){return pe((0,f.zm)(t,te))},fe=Math.ceil(Y/te);(0,s.useEffect)((function(){ue&&Y>0&&re>Math.max(fe,1)&&me(0,fe)}));var ge,be={itemCount:Y,page:re,perPage:te,onSetPage:me,onPerPageSelect:function(e,t){return pe((0,f.zm)(1,t))},className:"top-pagination"},Ee=Oe(Oe({},be),{},{dropDirection:"up",variant:"bottom",isCompact:!1,className:"bottom-pagination"}),he=!(ue&&ie&&le||oe),Se=ne.filter((0,se.j)(ce,!0)),Me=N.formatMessage({id:"sources.addSource",defaultMessage:"Add source"}),we=N.formatMessage({id:"sources.notAdminAddButton",defaultMessage:"To add a source, you must be granted write permissions from your Organization Administrator."});G.indexOf(L)<=G.indexOf("sm")&&(ge={dropdownProps:{position:"right"},actions:Z?[{label:Me,props:{to:w._j.sourcesNew.path,component:l.Link}}]:[{label:Me,props:{component:"div",isDisabled:!0,tooltip:we,className:"ins-c-sources__disabled-drodpown-item"}}]});var ke=Object.entries(Q).map((function(e){var t=(0,a.Z)(e,2),r=(t[0],t[1]);return r&&(!Array.isArray(r)||Array.isArray(r)&&r.length>0)})).filter(Boolean).length>0,Pe=ue&&0===Y&&!ke,ze=ce===X.JL&&!Pe,Ne=function(e){return _({type:"setSelectedType",selectedType:e})};return o().createElement(o().Fragment,null,o().createElement(s.Suspense,{fallback:null},o().createElement(J.Z,{exact:!0,route:w._j.sourcesRemove,Component:je}),o().createElement(J.Z,{exact:!0,route:w._j.sourcesNew,Component:_e,componentProps:{sourceTypes:q(ne,le),applicationTypes:q(ee,ie),isOpen:!0,onClose:function(){_({type:"closeWizard"}),P.push(w._j.sources.path)},afterSuccess:function(e){return function(e){return e((0,f.il)(V))}(pe)},hideSourcesButton:!0,selectedType:k,submitCallback:function(e){return function(e,t,r,a,n){var s,i,l,u,d,p="sources-wizard-notification-".concat(Date.now());if(location.pathname.split("/").filter(Boolean).pop()!==w._j.sourcesNew.path.split("/").pop())if(e.isErrored){var m=e.wizardState,g=m.activeStep,v=m.activeStepIndex,y=m.maxStepIndex,b=m.prevSteps,E=m.registeredFieldsHistory;t((0,f.Hz)({title:a.formatMessage({id:"alert.error.title",defaultMessage:"Error adding source"}),description:a.formatMessage({id:"alert.error.description",defaultMessage:"There was a problem while trying to add source {name}. Please try again. If the error persists, open a support case."},{name:o().createElement("b",null,e.values.source.name)}),variant:"danger",id:p,actionLinks:o().createElement(c.AlertActionLink,{onClick:function(){n({type:"retryWizard",initialValues:e.values,initialState:{activeStep:g,activeStepIndex:v,maxStepIndex:y,prevSteps:b,registeredFieldsHistory:E}}),t((0,f.Gd)(p)),r(w._j.sourcesNew.path)}},a.formatMessage({id:"alert.error.link",defaultMessage:"Retry"}))}))}else switch((0,B.Z)(e.createdSource)){case"unavailable":t((0,f.Hz)({title:a.formatMessage({id:"alert.error.title",defaultMessage:"Source configuration unsuccessful"}),description:a.formatMessage({id:"error.notification",defaultMessage:"{error} [<b>{name}</b>]"},{error:(null===(s=e.createdSource.applications)||void 0===s||null===(i=s[0])||void 0===i?void 0:i.availability_status_error)||(null===(l=e.createdSource.endpoint)||void 0===l||null===(u=l[0])||void 0===u?void 0:u.availability_status_error)||a.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"}),name:e.createdSource.name,b:x.S}),variant:"danger",id:p,actionLinks:o().createElement(c.AlertActionLink,{onClick:function(){t((0,f.Gd)(p)),r((0,w.yS)(w._j.sourcesDetail.path,e.createdSource.id))}},a.formatMessage({id:"alert.unavailable.link",defaultMessage:"Edit source"}))}));break;case"timeout":t((0,f.Hz)({title:a.formatMessage({id:"alert.timeout.title",defaultMessage:"Source configuration in progress"}),description:a.formatMessage({id:"alert.timeout.description",defaultMessage:"We are still working to confirm credentials for source {name}. To track progress, check the Status column in the Sources table."},{name:o().createElement("b",null,e.createdSource.name)}),variant:"info"}));break;default:t((0,f.Hz)({title:a.formatMessage({id:"alert.success.title",defaultMessage:"{type} connection successful"},{type:null===(d=e.sourceTypes.find((function(t){return t.id===e.createdSource.source_type_id})))||void 0===d?void 0:d.product_name}),description:a.formatMessage({id:"alert.success.description",defaultMessage:"Source {name} was successfully added"},{name:o().createElement("b",null,e.createdSource.name)}),variant:"success",id:p,actionLinks:o().createElement(c.AlertActionLink,{onClick:function(){t((0,f.Gd)(p)),r((0,w.yS)(w._j.sourcesDetail.path,e.createdSource.id))}},a.formatMessage({id:"alert.success.link",defaultMessage:"View source details"}))}))}}(e,pe,P.push,N,_)},initialValues:j,initialWizardState:O,activeVendor:ce}})),o().createElement(Te,null),o().createElement(p.Z,{type:"content"},ze&&o().createElement(K.Z,null),ae&&o().createElement(m.Z,null),!ae&&Pe&&ce===X.JL&&o().createElement(de,{setSelectedType:Ne}),!ae&&Pe&&ce===X.B0&&o().createElement(ve,{setSelectedType:Ne}),!ae&&!Pe&&o().createElement(o().Fragment,null,o().createElement(d.Z,{pagination:he?o().createElement(y.Xf,null):Y>0?be:void 0,actionsConfig:ge||{dropdownProps:{position:"right"},actions:Z?[o().createElement(l.Link,{to:w._j.sourcesNew.path,key:"addSourceButton"},o().createElement(c.Button,{variant:"primary",id:"addSourceButton"},Me))]:[o().createElement(c.Tooltip,{content:we,key:"addSourceButton"},o().createElement("span",{tabIndex:"0"},o().createElement(c.Button,{variant:"primary",isDisabled:!0,id:"addSourceButton"},Me)))]},filterConfig:{items:[{label:N.formatMessage({id:"sources.name",defaultMessage:"Name"}),filterValues:{"aria-label":N.formatMessage({id:"sources.filterByName",defaultMessage:"Filter by name"}),onChange:function(e,t){_({type:"setFilterValue",value:t}),R((function(){return W("name",t,pe)}))},value:T}},{label:N.formatMessage({id:"sources.type",defaultMessage:"Type"}),type:"checkbox",filterValues:{onChange:function(e,t){return W("source_type_id",t,pe)},items:I(Se),value:Q.source_type_id}},{label:N.formatMessage({id:"sources.application",defaultMessage:"Application"}),type:"checkbox",filterValues:{onChange:function(e,t){return W("applications",t,pe)},items:F((null==ee?void 0:ee.filter((0,ye.W)(Se,ce)))||[]),value:Q.applications}},{label:N.formatMessage({id:"sources.availabilityStatus",defaultMessage:"Status"}),type:"checkbox",filterValues:{onChange:function(e,t,r){return W("availability_status",e.target.checked?[r]:[],pe)},items:[{label:N.formatMessage({id:"sources.available",defaultMessage:"Available"}),value:D.Rl},{label:N.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"}),value:D.nZ}],value:Q.availability_status}}]},activeFiltersConfig:{filters:H(Q,ne,ee,N),onDelete:function(e,t,r){return pe((0,f.OU)(function(e,t,r){if(r)return Object.keys(t).reduce((function(e,t){return A(A({},e),{},(0,n.Z)({},t,void 0))}),{});var a=e[0];return A(A({},t),{},(0,n.Z)({},a.key,a.chips?t[a.key].filter((function(e){return e!==a.chips[0].value})):void 0))}(t,Q,r)))}}}),o().createElement(z,null),o().createElement(d.Z,{pagination:he?o().createElement(y.Xf,null):Y>0?Ee:void 0}))))}},78205:(e,t,r)=>{"use strict";r.d(t,{j:()=>s,Z:()=>o});var a=r(84866),n=[a.OH,a.N9],s=function(e,t){return function(r){var s=r.vendor,o=r.name;return e===a.JL?s!==a.B0:t?s===a.B0:s===a.B0&&!n.includes(o)}};const o=function(e){var t,r;return(null===(t=e.schema)||void 0===t?void 0:t.authentication)&&(null===(r=e.schema)||void 0===r?void 0:r.endpoint)}}}]);
//# sourceMappingURL=../sourcemaps/sourcesPage.df61620707961fabc5fb.js.map