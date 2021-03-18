(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[593],{95604:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>je});var a=r(28481),n=r(96156),s=r(80150),o=r.n(s),i=r(61084),l=r(334),c=r(4092),u=r(86896),d=r(57277),m=r(54213),p=r(39324),f=r(85061),g=r(43349),y=r(97752),v=r(98639),b=r(80810);const E=function(){var e=(0,u.Z)(),t=(0,i.useDispatch)();return o().createElement(c.Bullseye,null,o().createElement(c.EmptyState,{variant:c.EmptyStateVariant.small},o().createElement(c.EmptyStateIcon,{icon:b.ZP}),o().createElement(c.Title,{headingLevel:"h2",size:"lg"},e.formatMessage({id:"sources.noResultsFoundTitle",defaultMessage:"No sources found"})),o().createElement(c.EmptyStateBody,null,e.formatMessage({id:"sources.noResultsFoundDescription",defaultMessage:"No sources match the filter criteria. Remove all filters or clear all filters to show sources."})),o().createElement(c.Button,{variant:"link",onClick:function(){return t((0,p.K5)())}},e.formatMessage({id:"sources.clearAllFilters",defaultMessage:"Clear all filters"}))))};var h=r(17254),S=r(29499),M=r(11405);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e,t,r,a){return t.filter((function(e){return e.title||e.hidden})).map((function(t){return{title:t.formatter?t.formatter(e[t.value],e,{sourceTypes:r,appTypes:a}):e[t.value]||""}}))},O=function(e,t,r,a,n){return e.filter((function(e){return!e.hidden})).reduce((function(e,s){var o=n.includes(s.id);return[].concat((0,f.Z)(e),[k(k({},s),{},{isOpen:!!s.expanded,cells:w(s,t,r,a),disableActions:o,isDeleting:o})])}),[])},j=function(e){return e.filter((function(e){return e.title||e.hidden})).map((function(e){return k({title:e.title||"",value:e.value,hidden:e.hidden,transforms:[g.wrappable]},e.sortable&&{transforms:[g.sortable,g.wrappable]})}))},_=function(e,t){return k(k({},e),t)},C=function(e,t,r){return function(a){var n={tooltip:e.formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."}),isDisabled:!0,className:"ins-c-sources__disabled-drodpown-item"},s=[];return!a.imported&&function(e,t,r,a,n){e.splice(1,0,k({title:t.formatMessage({id:"sources.edit",defaultMessage:"Edit"}),onClick:function(e,t,a){var n=a.id;return r((0,M.yS)(M._j.sourcesDetail.path,n))}},a?{component:"button"}:n))}(s,e,t,r,n),s.push(k({title:e.formatMessage({id:"sources.remove",defaultMessage:"Remove"}),onClick:function(e,r,a){var n=a.id;return t((0,M.yS)(M._j.sourcesRemove.path,n))}},r?{component:"button"}:n)),s}};const Z=function(){var e,t=(0,l.useHistory)().push,r=(0,u.Z)(),n=(0,h.W)(),c=(0,S.E)(),d=(0,i.useSelector)((function(e){return e.sources}),i.shallowEqual),m=d.appTypes,f=d.entities,b=d.sourceTypes,M=d.sourceTypesLoaded,T=d.appTypesLoaded,k=d.sortBy,w=d.sortDirection,Z=d.numberOfEntities,z=d.removingSources,P=(0,i.useDispatch)(),N=0===Z||!n,B=(0,s.useReducer)(_,(e=(0,v.E)(r,N),{rows:[],sortBy:{},isLoaded:!1,cells:j(e)})),A=(0,a.Z)(B,2),D=A[0],x=A[1],L=function(){var e=(0,v.E)(r,N);return x({rows:O(f,e,b,m,z),cells:j(e)})};(0,s.useEffect)((function(){n&&M&&T?(x({isLoaded:!0}),L()):(x({isLoaded:!1}),function(){var e=(0,v.E)(r,N);x({cells:j(e)})}())}),[n,M,T]),(0,s.useEffect)((function(){D.isLoaded&&L()}),[f,z]);var R=D.rows;return 0===Z&&D.isLoaded?R=[{heightAuto:!0,cells:[{props:{colSpan:v.W},title:o().createElement(E,null)}]}]:n&&T&&M||(R=[{heightAuto:!0,cells:[{props:{colSpan:v.W,className:"sources-placeholder-row"},title:o().createElement(y.mI,null)}]}]),o().createElement(g.Table,{gridBreakPoint:"grid-lg","aria-label":r.formatMessage({id:"sources.list",defaultMessage:"List of Sources"}),onSort:function(e,t,r){return P((0,p.Bb)(D.cells[t].value,r))},sortBy:{index:D.cells.map((function(e){return e.hidden?"hidden":e.value})).indexOf(k),direction:w},rows:R,cells:D.cells,actionResolver:n&&Z>0?C(r,t,c):void 0,rowWrapper:y.sk},o().createElement(g.TableHeader,null),o().createElement(g.TableBody,null))};var z=r(43047);const P=function(){var e=(0,u.Z)();return o().createElement(c.Bullseye,null,o().createElement(c.EmptyState,{className:"ins-c-sources__empty-state"},o().createElement(c.EmptyStateIcon,{icon:z.ZP,color:"var(--pf-global--danger-color--100)"}),o().createElement(c.Title,{headingLevel:"h5",size:"lg"},e.formatMessage({id:"sources.errorStateTitle",defaultMessage:"Something went wrong"})),o().createElement(c.EmptyStateBody,null,e.formatMessage({id:"sources.errorStateBody",defaultMessage:"There was a problem processing the request. Try refreshing the page. If the problem persists, contact <a>Red Hat support.</a>"},{a:function(e){return o().createElement(c.Text,{key:"link",component:"a",href:"https://access.redhat.com/support",target:"_blank",rel:"noopener noreferrer"},e)}})),o().createElement(c.Button,{className:"pf-u-mt-xl",variant:"primary",component:"a",href:window.location.href},e.formatMessage({id:"sources.retry",defaultMessage:"Retry"}))))};var N=r(99166),B=r(26351),A=r(46563);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=(0,N.Z)((function(e){return e()}),500),R={pageNumber:1,sortBy:"created_at",sortDirection:"desc"},V=function(e){return e.map((function(e){var t=e.id;return{label:e.product_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},I=function(e){return e.map((function(e){var t=e.id;return{label:e.display_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},F=function(e,t,r){return r((0,p.OU)((0,n.Z)({},e,t)))},H=function(e,t,r,a){return Object.keys(e).map((function(n){return e[n]&&e[n].length>0?function(e,t,r,a,n){return{name:function(){return{name:t[e],key:e}},source_type_id:function(){return{category:"Source Type",key:e,chips:t[e].map((function(e){var t=r.find((function(t){return t.id===e}));return{name:t?t.product_name:e,value:e}}))}},applications:function(){return{category:"Application",key:e,chips:t[e].map((function(e){var t=a.find((function(t){return t.id===e}));return{name:t?t.display_name:e,value:e}}))}},availability_status:function(){return{category:"Status",key:e,chips:[{value:t[e][0],name:t[e][0]===B.Rl?n.formatMessage({id:"sources.available",defaultMessage:"Available"}):n.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"})}]}}}[e]||function(){return{name:e}}}(n,e,t,r,a)():void 0})).filter(Boolean)},W=function(e,t){return t&&e.length>0?e:void 0},q=r(99338),G=r(97542),U=r(75087),J=r(45697),K=r.n(J),X=r(22122),Q=r(81253),Y=function(e){var t=e.src,r=(0,Q.Z)(e,["src"]),n=(0,s.useState)(!1),i=(0,a.Z)(n,2),l=i[0],c=i[1];return o().createElement(o().Fragment,null,!l&&o().createElement(y.aN,(0,X.Z)({height:"40px",width:"110px"},r)),o().createElement("img",(0,X.Z)({src:t,onLoad:function(){return c(!0)},style:{display:l?"initial":"none"}},r)))};Y.propTypes={src:K().string.isRequired};const $=Y,ee=function(e){var t=(0,u.Z)().formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."});return o().createElement(c.Tooltip,{content:t},o().createElement("div",{className:"disabled-tile-with-tooltip"},o().createElement(c.Tile,(0,X.Z)({},e,{isDisabled:!0}))))};var te=r(56758),re=function(e){var t=e.setSelectedType,r=e.mapper,a=(0,i.useSelector)((function(e){return e.sources.sourceTypes}),i.shallowEqual),n=(0,i.useSelector)((function(e){return e.sources.activeVendor})),s=(0,l.useHistory)().push,o=(0,S.E)(),u=function(e){t(e),s(M._j.sourcesNew.path)},d=o?c.Tile:ee;return a.filter((0,te.j)(n)).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){var t=e.name;return r(t,u,d)}))};re.propTypes={setSelectedType:K().func.isRequired,mapper:K().func.isRequired};const ae=re;var ne=function(e,t,r){return{amazon:o().createElement(r,{isStacked:!0,key:e,title:"Amazon Web Services",onClick:function(){return t("amazon")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:o().createElement($,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/aws.svg",alt:"aws logo"})}),google:o().createElement(r,{isStacked:!0,key:e,title:"Google Cloud",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("google")},icon:o().createElement($,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg",alt:"google logo"})}),azure:o().createElement(r,{isStacked:!0,key:e,title:"Microsoft Azure",onClick:function(){return t("azure")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:o().createElement($,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",alt:"azure logo"})})}[e]};const se=function(e){return o().createElement(ae,(0,X.Z)({},e,{mapper:ne}))};var oe=function(e){var t=e.setSelectedType,r=(0,u.Z)();return o().createElement(c.Card,{className:"ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"},o().createElement(c.CardTitle,null,r.formatMessage({id:"cloud.emptystate.cardTitle",defaultMessage:"Get started by connecting to your public clouds"})),o().createElement(c.CardBody,null,o().createElement(c.Text,null,r.formatMessage({id:"cloud.emptystate.cardDescription",defaultMessage:"Select an available provider."})),o().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},o().createElement(se,{setSelectedType:t}))),o().createElement(c.CardFooter,{className:"cloud-footer"},o().createElement(c.Text,{className:"catalog-link pf-u-mt-lg"},r.formatMessage({id:"cloud.emptystate.catalogLink",defaultMessage:"Looking for a different provider? <a>See all Red Hat Certified Cloud and Service Providers</a>"},{a:function(e){return o().createElement(c.Text,{key:"link",component:"a",href:"https://catalog.redhat.com/cloud",target:"_blank",rel:"noopener noreferrer"},e)}}))))};oe.propTypes={setSelectedType:K().func.isRequired};const ie=oe;var le=o().createElement($,{className:"redhat-icon",src:"/apps/frontend-assets/red-hat-logos/stacked.svg",alt:"red hat logo"}),ce=function(e,t,r){var a;return(a={},(0,n.Z)(a,"ansible-tower",o().createElement(r,{isStacked:!0,key:e,title:"Ansible Automation Platform",onClick:function(){return t("ansible-tower")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:le})),(0,n.Z)(a,"openshift",o().createElement(r,{isStacked:!0,key:e,title:"OpenShift Container Platfrom",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("openshift")},icon:le})),a)[e]};const ue=function(e){return o().createElement(ae,(0,X.Z)({},e,{mapper:ce}))};var de=function(e){var t=e.setSelectedType,r=(0,u.Z)();return o().createElement(c.Card,{className:"ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"},o().createElement(c.CardTitle,null,r.formatMessage({id:"redhat.emptystate.cardTitle",defaultMessage:"Get started by connecting to your Red Hat applications"})),o().createElement(c.CardBody,null,o().createElement(c.Text,null,r.formatMessage({id:"redhat.emptystate.cardDescription",defaultMessage:"Select an available application."})),o().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},o().createElement(ue,{setSelectedType:t}))))};de.propTypes={setSelectedType:K().func.isRequired};const me=de;var pe=r(72959),fe=r(48716),ge=r(39173),ye=r(10817),ve=r(46071);const be=function(){var e=(0,u.Z)(),t=(0,i.useDispatch)(),r=(0,i.useSelector)((function(e){return e.sources.activeVendor}));return o().createElement(c.Tabs,{activeKey:r,onSelect:function(e,r){return t((0,p.CB)(r))},className:"pf-u-mt-md"},o().createElement(c.Tab,{eventKey:U.JL,title:o().createElement(o().Fragment,null,o().createElement(c.TabTitleIcon,null,o().createElement(ve.ZP,null)),o().createElement(c.TabTitleText,null,e.formatMessage({id:"sources.cloudSources",defaultMessage:"Cloud sources"})))}),o().createElement(c.Tab,{eventKey:U.B0,title:o().createElement(o().Fragment,null,o().createElement(c.TabTitleIcon,null,o().createElement(ye.ZP,null)),o().createElement(c.TabTitleText,null,e.formatMessage({id:"sources.redhatSources",defaultMessage:"Red Hat sources"})))}))};var Ee=function(){var e=(0,u.Z)();return o().createElement(fe.Z,{className:"pf-u-pb-0"},o().createElement(ge.Z,{title:e.formatMessage({id:"sources.sources",defaultMessage:"Sources"})}),o().createElement(be,null))};const he=o().memo(Ee);function Se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Te=(0,s.lazy)((function(){return r.e(8490).then(r.bind(r,2453))})),ke=(0,s.lazy)((function(){return Promise.all([r.e(6410),r.e(1788),r.e(173),r.e(300),r.e(6224),r.e(2827),r.e(5289),r.e(8774),r.e(2199)]).then(r.bind(r,35577)).then((function(e){return{default:e.AddSourceWizard}}))})),we={filter:void 0,selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0},Oe=function(e,t){var r=t.type,a=t.value,n=t.selectedType,s=t.initialValues,o=t.initialState;switch(r){case"setFilterValue":return Me(Me({},e),{},{filter:a});case"setSelectedType":return Me(Me({},e),{},{selectedType:n});case"retryWizard":return Me(Me({},e),{},{wizardInitialState:o,wizardInitialValues:s});case"closeWizard":return Me(Me({},e),{},{selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0})}};const je=function(){var e=(0,s.useReducer)(Oe,we),t=(0,a.Z)(e,2),r=t[0],f=r.filter,g=r.selectedType,v=r.wizardInitialState,b=r.wizardInitialValues,E=t[1],T=(0,h.W)(),k=(0,S.E)(),w=(0,l.useHistory)(),O=(0,u.Z)(),j=(0,i.useSelector)((function(e){return e.sources}),i.shallowEqual),_=j.filterValue,C=j.numberOfEntities,z=j.appTypes,N=j.pageSize,D=j.pageNumber,J=j.fetchingError,K=j.sourceTypes,X=j.paginationClicked,Q=j.appTypesLoaded,Y=j.sourceTypesLoaded,$=j.activeVendor,ee=T&&Y&&Q,re=(0,i.useDispatch)();(0,s.useEffect)((function(){f!==_.name&&E({type:"setFilterValue",value:_.name})}),[_.name]);var ae=function(e,t){return re((0,p.zm)(t,N))},ne=Math.ceil(C/N);(0,s.useEffect)((function(){ee&&C>0&&D>Math.max(ne,1)&&ae(0,ne)}));var se={itemCount:C,page:D,perPage:N,onSetPage:ae,onPerPageSelect:function(e,t){return re((0,p.zm)(1,t))},className:"top-pagination"},oe=Me(Me({},se),{},{dropDirection:"up",variant:"bottom",isCompact:!1,className:"bottom-pagination"}),le=!(ee&&Q&&Y||X),ce=K.filter((0,te.j)($)),ue=Object.entries(_).map((function(e){var t=(0,a.Z)(e,2),r=(t[0],t[1]);return r&&(!Array.isArray(r)||Array.isArray(r)&&r.length>0)})).filter(Boolean).length>0,de=ee&&0===C&&!ue,fe=$===U.JL&&!de,ge=function(e){return E({type:"setSelectedType",selectedType:e})};return o().createElement(o().Fragment,null,o().createElement(s.Suspense,{fallback:null},o().createElement(q.Z,{exact:!0,route:M._j.sourcesRemove,Component:Te}),o().createElement(q.Z,{exact:!0,route:M._j.sourcesNew,Component:ke,componentProps:{sourceTypes:W(K,Y),applicationTypes:W(z,Q),isOpen:!0,onClose:function(){E({type:"closeWizard"}),w.push(M._j.sources.path)},afterSuccess:function(e){return function(e){return e((0,p.il)(R))}(re)},hideSourcesButton:!0,selectedType:g,submitCallback:function(e){return function(e,t,r,a,n){var s,i,l,u,d,m="sources-wizard-notification-".concat(Date.now());if(location.pathname.split("/").filter(Boolean).pop()!==M._j.sourcesNew.path.split("/").pop())if(e.isErrored){var f=e.wizardState,g=f.activeStep,y=f.activeStepIndex,v=f.maxStepIndex,b=f.prevSteps,E=f.registeredFieldsHistory;t((0,p.Hz)({title:a.formatMessage({id:"alert.error.title",defaultMessage:"Error adding source"}),description:a.formatMessage({id:"alert.error.description",defaultMessage:"There was a problem while trying to add source {name}. Please try again. If the error persists, open a support case."},{name:o().createElement("b",null,e.values.source.name)}),variant:"danger",id:m,actionLinks:o().createElement(c.AlertActionLink,{onClick:function(){n({type:"retryWizard",initialValues:e.values,initialState:{activeStep:g,activeStepIndex:y,maxStepIndex:v,prevSteps:b,registeredFieldsHistory:E}}),t((0,p.Gd)(m)),r(M._j.sourcesNew.path)}},a.formatMessage({id:"alert.error.link",defaultMessage:"Retry"}))}))}else switch((0,A.Z)(e.createdSource)){case"unavailable":t((0,p.Hz)({title:a.formatMessage({id:"alert.error.title",defaultMessage:"Source configuration unsuccessful"}),description:o().createElement(o().Fragment,null,(null===(s=e.createdSource.applications)||void 0===s||null===(i=s[0])||void 0===i?void 0:i.availability_status_error)||(null===(l=e.createdSource.endpoint)||void 0===l||null===(u=l[0])||void 0===u?void 0:u.availability_status_error)||a.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"})," [",o().createElement("b",null,e.createdSource.name),"]"),variant:"danger",id:m,actionLinks:o().createElement(c.AlertActionLink,{onClick:function(){t((0,p.Gd)(m)),r((0,M.yS)(M._j.sourcesDetail.path,e.createdSource.id))}},a.formatMessage({id:"alert.unavailable.link",defaultMessage:"Edit source"}))}));break;case"timeout":t((0,p.Hz)({title:a.formatMessage({id:"alert.timeout.title",defaultMessage:"Source configuration in progress"}),description:a.formatMessage({id:"alert.timeout.description",defaultMessage:"We are still working to confirm credentials for source {name}. To track progress, check the Status column in the Sources table."},{name:o().createElement("b",null,e.createdSource.name)}),variant:"info"}));break;default:t((0,p.Hz)({title:a.formatMessage({id:"alert.success.title",defaultMessage:"{type} connection successful"},{type:null===(d=e.sourceTypes.find((function(t){return t.id===e.createdSource.source_type_id})))||void 0===d?void 0:d.product_name}),description:a.formatMessage({id:"alert.success.description",defaultMessage:"Source {name} was successfully added"},{name:o().createElement("b",null,e.createdSource.name)}),variant:"success",id:m,actionLinks:o().createElement(c.AlertActionLink,{onClick:function(){t((0,p.Gd)(m)),r((0,M.yS)(M._j.sourcesDetail.path,e.createdSource.id))}},a.formatMessage({id:"alert.success.link",defaultMessage:"View source details"}))}))}}(e,re,w.push,O,E)},initialValues:b,initialWizardState:v,activeVendor:$}})),o().createElement(he,null),o().createElement(m.Z,{type:"content"},fe&&o().createElement(G.Z,null),J&&o().createElement(P,null),!J&&de&&$===U.JL&&o().createElement(ie,{setSelectedType:ge}),!J&&de&&$===U.B0&&o().createElement(me,{setSelectedType:ge}),!J&&!de&&o().createElement(o().Fragment,null,o().createElement(d.Z,{pagination:le?o().createElement(y.Xf,null):C>0?se:void 0,actionsConfig:k?{actions:[o().createElement(l.Link,{to:M._j.sourcesNew.path,key:"addSourceButton"},o().createElement(c.Button,{variant:"primary",id:"addSourceButton"},O.formatMessage({id:"sources.addSource",defaultMessage:"Add source"})))]}:{actions:[o().createElement(c.Tooltip,{content:O.formatMessage({id:"sources.notAdminAddButton",defaultMessage:"To add a source, you must be granted write permissions from your Organization Administrator."}),key:"addSourceButton"},o().createElement("span",{tabIndex:"0"},o().createElement(c.Button,{variant:"primary",isDisabled:!0,id:"addSourceButton"},O.formatMessage({id:"sources.addSource",defaultMessage:"Add source"}))))]},filterConfig:{items:[{label:O.formatMessage({id:"sources.name",defaultMessage:"Name"}),filterValues:{"aria-label":O.formatMessage({id:"sources.filterByName",defaultMessage:"Filter by name"}),onChange:function(e,t){E({type:"setFilterValue",value:t}),L((function(){return F("name",t,re)}))},value:f}},{label:O.formatMessage({id:"sources.type",defaultMessage:"Type"}),type:"checkbox",filterValues:{onChange:function(e,t){return F("source_type_id",t,re)},items:V(ce),value:_.source_type_id}},{label:O.formatMessage({id:"sources.application",defaultMessage:"Application"}),type:"checkbox",filterValues:{onChange:function(e,t){return F("applications",t,re)},items:I((null==z?void 0:z.filter((0,pe.W)(ce,$)))||[]),value:_.applications}},{label:O.formatMessage({id:"sources.availabilityStatus",defaultMessage:"Status"}),type:"checkbox",filterValues:{onChange:function(e,t,r){return F("availability_status",e.target.checked?[r]:[],re)},items:[{label:O.formatMessage({id:"sources.available",defaultMessage:"Available"}),value:B.Rl},{label:O.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"}),value:B.nZ}],value:_.availability_status}}]},activeFiltersConfig:{filters:H(_,K,z,O),onDelete:function(e,t,r){return re((0,p.OU)(function(e,t,r){if(r)return Object.keys(t).reduce((function(e,t){return x(x({},e),{},(0,n.Z)({},t,void 0))}),{});var a=e[0];return x(x({},t),{},(0,n.Z)({},a.key,a.chips?t[a.key].filter((function(e){return e!==a.chips[0].value})):void 0))}(t,_,r)))}}}),o().createElement(Z,null),o().createElement(d.Z,{pagination:le?o().createElement(y.Xf,null):C>0?oe:void 0}))))}},56758:(e,t,r)=>{"use strict";r.d(t,{j:()=>n,Z:()=>s});var a=r(75087),n=function(e){return function(t){var r=t.vendor,n=t.name;return e===a.JL?r!==a.B0:r===a.B0&&"satellite"!==n}};const s=function(e){var t,r;return(null===(t=e.schema)||void 0===t?void 0:t.authentication)&&(null===(r=e.schema)||void 0===r?void 0:r.endpoint)}}}]);
//# sourceMappingURL=sourcesPage.d868004c43ccd9277771.js.map