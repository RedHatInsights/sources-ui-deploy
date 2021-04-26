(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[593],{36194:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Ze});var a=r(28481),n=r(96156),o=r(92950),s=r.n(o),i=r(557),l=r(334),c=r(32413),u=r(86896),d=r(57277),m=r(54213),p=r(98495),f=r(85061),g=r(66543),v=r(98583),y=r(30567),b=r(80810);const E=function(){var e=(0,u.Z)(),t=(0,i.useDispatch)();return s().createElement(c.Bullseye,null,s().createElement(c.EmptyState,{variant:c.EmptyStateVariant.small},s().createElement(c.EmptyStateIcon,{icon:b.ZP}),s().createElement(c.Title,{headingLevel:"h2",size:"lg"},e.formatMessage({id:"sources.noResultsFoundTitle",defaultMessage:"No sources found"})),s().createElement(c.EmptyStateBody,null,e.formatMessage({id:"sources.noResultsFoundDescription",defaultMessage:"No sources match the filter criteria. Remove all filters or clear all filters to show sources."})),s().createElement(c.Button,{variant:"link",onClick:function(){return t((0,p.K5)())}},e.formatMessage({id:"sources.clearAllFilters",defaultMessage:"Clear all filters"}))))};var h=r(59824),S=r(58185),M=r(60076);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=function(e,t,r,a){return t.filter((function(e){return e.title||e.hidden})).map((function(t){return{title:t.formatter?t.formatter(e[t.value],e,{sourceTypes:r,appTypes:a}):e[t.value]||""}}))},O=function(e,t,r,a,n){return e.filter((function(e){return!e.hidden})).reduce((function(e,o){var s=n.includes(o.id);return[].concat((0,f.Z)(e),[T(T({},o),{},{isOpen:!!o.expanded,cells:k(o,t,r,a),disableActions:s,isDeleting:s})])}),[])},j=function(e){return e.filter((function(e){return e.title||e.hidden})).map((function(e){return T({title:e.title||"",value:e.value,hidden:e.hidden,transforms:[g.wrappable]},e.sortable&&{transforms:[g.sortable,g.wrappable]})}))},_=function(e,t){return T(T({},e),t)},Z=function(e,t,r){return function(a){var n={tooltip:e.formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."}),isDisabled:!0,className:"ins-c-sources__disabled-drodpown-item"},o=[];return!a.imported&&function(e,t,r,a,n){e.splice(1,0,T({title:t.formatMessage({id:"sources.edit",defaultMessage:"Edit"}),onClick:function(e,t,a){var n=a.id;return r((0,M.yS)(M._j.sourcesDetail.path,n))}},a?{component:"button"}:n))}(o,e,t,r,n),o.push(T({title:e.formatMessage({id:"sources.remove",defaultMessage:"Remove"}),onClick:function(e,r,a){var n=a.id;return t((0,M.yS)(M._j.sourcesRemove.path,n))}},r?{component:"button"}:n)),o}};const C=function(){var e,t=(0,l.useHistory)().push,r=(0,u.Z)(),n=(0,h.W)(),c=(0,S.E)(),d=(0,i.useSelector)((function(e){return e.sources}),i.shallowEqual),m=d.appTypes,f=d.entities,b=d.sourceTypes,M=d.sourceTypesLoaded,w=d.appTypesLoaded,T=d.sortBy,k=d.sortDirection,C=d.numberOfEntities,z=d.removingSources,P=(0,i.useDispatch)(),N=0===C||!n,B=(0,o.useReducer)(_,(e=(0,y.E)(r,N),{rows:[],sortBy:{},isLoaded:!1,cells:j(e)})),D=(0,a.Z)(B,2),A=D[0],x=D[1],L=function(){var e=(0,y.E)(r,N);return x({rows:O(f,e,b,m,z),cells:j(e)})};(0,o.useEffect)((function(){n&&M&&w?(x({isLoaded:!0}),L()):(x({isLoaded:!1}),function(){var e=(0,y.E)(r,N);x({cells:j(e)})}())}),[n,M,w]),(0,o.useEffect)((function(){A.isLoaded&&L()}),[f,z]);var R=A.rows;return 0===C&&A.isLoaded?R=[{heightAuto:!0,cells:[{props:{colSpan:y.W},title:s().createElement(E,null)}]}]:n&&w&&M||(R=[{heightAuto:!0,cells:[{props:{colSpan:y.W,className:"sources-placeholder-row"},title:s().createElement(v.mI,null)}]}]),s().createElement(g.Table,{gridBreakPoint:"grid-lg","aria-label":r.formatMessage({id:"sources.list",defaultMessage:"List of Sources"}),onSort:function(e,t,r){return P((0,p.Bb)(A.cells[t].value,r))},sortBy:{index:A.cells.map((function(e){return e.hidden?"hidden":e.value})).indexOf(T),direction:k},rows:R,cells:A.cells,actionResolver:n&&C>0?Z(r,t,c):void 0,rowWrapper:v.sk},s().createElement(g.TableHeader,null),s().createElement(g.TableBody,null))};var z=r(43047);const P=function(){var e=(0,u.Z)();return s().createElement(c.Bullseye,null,s().createElement(c.EmptyState,{className:"ins-c-sources__empty-state"},s().createElement(c.EmptyStateIcon,{icon:z.ZP,color:"var(--pf-global--danger-color--100)"}),s().createElement(c.Title,{headingLevel:"h5",size:"lg"},e.formatMessage({id:"sources.errorStateTitle",defaultMessage:"Something went wrong"})),s().createElement(c.EmptyStateBody,null,e.formatMessage({id:"sources.errorStateBody",defaultMessage:"There was a problem processing the request. Try refreshing the page. If the problem persists, contact <a>Red Hat support.</a>"},{a:function(e){return s().createElement(c.Text,{key:"link",component:"a",href:"https://access.redhat.com/support",target:"_blank",rel:"noopener noreferrer"},e)}})),s().createElement(c.Button,{className:"pf-u-mt-xl",variant:"primary",component:"a",href:window.location.href},e.formatMessage({id:"sources.retry",defaultMessage:"Retry"}))))};var N=r(99166),B=r(4833),D=r(86482);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=(0,N.Z)((function(e){return e()}),500),R={pageNumber:1,sortBy:"created_at",sortDirection:"desc"},V=function(e){return e.map((function(e){var t=e.id;return{label:e.product_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},I=function(e){return e.map((function(e){var t=e.id;return{label:e.display_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},F=function(e,t,r){return r((0,p.OU)((0,n.Z)({},e,t)))},W=function(e,t,r,a){return Object.keys(e).map((function(n){return e[n]&&e[n].length>0?function(e,t,r,a,n){return{name:function(){return{name:t[e],key:e}},source_type_id:function(){return{category:"Source Type",key:e,chips:t[e].map((function(e){var t=r.find((function(t){return t.id===e}));return{name:t?t.product_name:e,value:e}}))}},applications:function(){return{category:"Application",key:e,chips:t[e].map((function(e){var t=a.find((function(t){return t.id===e}));return{name:t?t.display_name:e,value:e}}))}},availability_status:function(){return{category:"Status",key:e,chips:[{value:t[e][0],name:t[e][0]===B.Rl?n.formatMessage({id:"sources.available",defaultMessage:"Available"}):n.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"})}]}}}[e]||function(){return{name:e}}}(n,e,t,r,a)():void 0})).filter(Boolean)},H=function(e,t){return t&&e.length>0?e:void 0},q=["xs","sm","md","lg","2xl"],G=function(){var e=window.innerWidth;return e<=576?q[0]:e<=768?q[1]:e<=992?q[2]:e<=1200?q[3]:q[4]};var U=r(10743),J=r(38136),K=r(84866),X=r(45697),Q=r.n(X),Y=r(22122),$=r(81253),ee=function(e){var t=e.src,r=(0,$.Z)(e,["src"]),n=(0,o.useState)(!1),i=(0,a.Z)(n,2),l=i[0],c=i[1];return s().createElement(s().Fragment,null,!l&&s().createElement(v.aN,(0,Y.Z)({height:"40px",width:"110px"},r)),s().createElement("img",(0,Y.Z)({src:t,onLoad:function(){return c(!0)},style:{display:l?"initial":"none"}},r)))};ee.propTypes={src:Q().string.isRequired};const te=ee,re=function(e){var t=(0,u.Z)().formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."});return s().createElement(c.Tooltip,{content:t},s().createElement("div",{className:"disabled-tile-with-tooltip"},s().createElement(c.Tile,(0,Y.Z)({},e,{isDisabled:!0}))))};var ae=r(78205),ne=function(e){var t=e.setSelectedType,r=e.mapper,a=(0,i.useSelector)((function(e){return e.sources.sourceTypes}),i.shallowEqual),n=(0,i.useSelector)((function(e){return e.sources.activeVendor})),o=(0,l.useHistory)().push,s=(0,S.E)(),u=function(e){t(e),o(M._j.sourcesNew.path)},d=s?c.Tile:re;return a.filter((0,ae.j)(n)).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){var t=e.name;return r(t,u,d)}))};ne.propTypes={setSelectedType:Q().func.isRequired,mapper:Q().func.isRequired};const oe=ne;var se=function(e,t,r){return{amazon:s().createElement(r,{isStacked:!0,key:e,title:"Amazon Web Services",onClick:function(){return t("amazon")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:s().createElement(te,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/aws.svg",alt:"aws logo"})}),google:s().createElement(r,{isStacked:!0,key:e,title:"Google Cloud",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("google")},icon:s().createElement(te,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg",alt:"google logo"})}),azure:s().createElement(r,{isStacked:!0,key:e,title:"Microsoft Azure",onClick:function(){return t("azure")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:s().createElement(te,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",alt:"azure logo"})})}[e]};const ie=function(e){return s().createElement(oe,(0,Y.Z)({},e,{mapper:se}))};var le=function(e){var t=e.setSelectedType,r=(0,u.Z)();return s().createElement(c.Card,{className:"ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"},s().createElement(c.CardTitle,null,r.formatMessage({id:"cloud.emptystate.cardTitle",defaultMessage:"Get started by connecting to your public clouds"})),s().createElement(c.CardBody,null,s().createElement(c.Text,null,r.formatMessage({id:"cloud.emptystate.cardDescription",defaultMessage:"Select an available provider."})),s().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},s().createElement(ie,{setSelectedType:t}))),s().createElement(c.CardFooter,{className:"cloud-footer"},s().createElement(c.Text,{className:"catalog-link pf-u-mt-lg"},r.formatMessage({id:"cloud.emptystate.catalogLink",defaultMessage:"Looking for a different provider? <a>See all Red Hat Certified Cloud and Service Providers</a>"},{a:function(e){return s().createElement(c.Text,{key:"link",component:"a",href:"https://catalog.redhat.com/cloud",target:"_blank",rel:"noopener noreferrer"},e)}}))))};le.propTypes={setSelectedType:Q().func.isRequired};const ce=le;var ue=s().createElement(te,{className:"redhat-icon",src:"/apps/frontend-assets/red-hat-logos/stacked.svg",alt:"red hat logo"}),de=function(e,t,r){var a;return(a={},(0,n.Z)(a,"ansible-tower",s().createElement(r,{isStacked:!0,key:e,title:"Ansible Automation Platform",onClick:function(){return t("ansible-tower")},className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",icon:ue})),(0,n.Z)(a,"openshift",s().createElement(r,{isStacked:!0,key:e,title:"OpenShift Container Platfrom",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("openshift")},icon:ue})),a)[e]};const me=function(e){return s().createElement(oe,(0,Y.Z)({},e,{mapper:de}))};var pe=function(e){var t=e.setSelectedType,r=(0,u.Z)();return s().createElement(c.Card,{className:"ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"},s().createElement(c.CardTitle,null,r.formatMessage({id:"redhat.emptystate.cardTitle",defaultMessage:"Get started by connecting to your Red Hat applications"})),s().createElement(c.CardBody,null,s().createElement(c.Text,null,r.formatMessage({id:"redhat.emptystate.cardDescription",defaultMessage:"Select an available application."})),s().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},s().createElement(me,{setSelectedType:t}))))};pe.propTypes={setSelectedType:Q().func.isRequired};const fe=pe;var ge=r(64673),ve=r(48716),ye=r(39173),be=r(10817),Ee=r(46071);const he=function(){var e=(0,u.Z)(),t=(0,i.useDispatch)(),r=(0,i.useSelector)((function(e){return e.sources.activeVendor}));return s().createElement(c.Tabs,{activeKey:r,onSelect:function(e,r){return t((0,p.CB)(r))},className:"pf-u-mt-md"},s().createElement(c.Tab,{eventKey:K.JL,title:s().createElement(s().Fragment,null,s().createElement(c.TabTitleIcon,null,s().createElement(Ee.ZP,null)),s().createElement(c.TabTitleText,null,e.formatMessage({id:"sources.cloudSources",defaultMessage:"Cloud sources"})))}),s().createElement(c.Tab,{eventKey:K.B0,title:s().createElement(s().Fragment,null,s().createElement(c.TabTitleIcon,null,s().createElement(be.ZP,null)),s().createElement(c.TabTitleText,null,e.formatMessage({id:"sources.redhatSources",defaultMessage:"Red Hat sources"})))}))};var Se=function(){var e=(0,u.Z)();return s().createElement(ve.Z,{className:"pf-u-pb-0"},s().createElement(ye.Z,{title:e.formatMessage({id:"sources.sources",defaultMessage:"Sources"})}),s().createElement(he,null))};const Me=s().memo(Se);function we(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?we(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ke=(0,o.lazy)((function(){return r.e(8490).then(r.bind(r,55997))})),Oe=(0,o.lazy)((function(){return Promise.all([r.e(6410),r.e(4291),r.e(1788),r.e(5713),r.e(2657),r.e(6845),r.e(9198),r.e(6671),r.e(3371),r.e(2199)]).then(r.bind(r,58012)).then((function(e){return{default:e.AddSourceWizard}}))})),je={filter:void 0,selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0},_e=function(e,t){var r=t.type,a=t.value,n=t.selectedType,o=t.initialValues,s=t.initialState;switch(r){case"setFilterValue":return Te(Te({},e),{},{filter:a});case"setSelectedType":return Te(Te({},e),{},{selectedType:n});case"retryWizard":return Te(Te({},e),{},{wizardInitialState:s,wizardInitialValues:o});case"closeWizard":return Te(Te({},e),{},{selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0})}};const Ze=function(){var e,t,r,f,g,y=(0,o.useReducer)(_e,je),b=(0,a.Z)(y,2),E=b[0],w=E.filter,T=E.selectedType,k=E.wizardInitialState,O=E.wizardInitialValues,j=b[1],_=(0,h.W)(),Z=(0,S.E)(),z=(0,l.useHistory)(),N=(0,u.Z)(),A=(e=(0,o.useState)((function(){return G()})),t=(0,a.Z)(e,2),r=t[0],f=t[1],g=(0,o.useRef)(r),(0,o.useEffect)((function(){function e(){var e=G();e!==g.current&&(g.current=e,f(e))}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r),X=(0,i.useSelector)((function(e){return e.sources}),i.shallowEqual),Q=X.filterValue,Y=X.numberOfEntities,$=X.appTypes,ee=X.pageSize,te=X.pageNumber,re=X.fetchingError,ne=X.sourceTypes,oe=X.paginationClicked,se=X.appTypesLoaded,ie=X.sourceTypesLoaded,le=X.activeVendor,ue=_&&ie&&se,de=(0,i.useDispatch)();(0,o.useEffect)((function(){w!==Q.name&&j({type:"setFilterValue",value:Q.name})}),[Q.name]);var me=function(e,t){return de((0,p.zm)(t,ee))},pe=Math.ceil(Y/ee);(0,o.useEffect)((function(){ue&&Y>0&&te>Math.max(pe,1)&&me(0,pe)}));var ve,ye={itemCount:Y,page:te,perPage:ee,onSetPage:me,onPerPageSelect:function(e,t){return de((0,p.zm)(1,t))},className:"top-pagination"},be=Te(Te({},ye),{},{dropDirection:"up",variant:"bottom",isCompact:!1,className:"bottom-pagination"}),Ee=!(ue&&se&&ie||oe),he=ne.filter((0,ae.j)(le)),Se=N.formatMessage({id:"sources.addSource",defaultMessage:"Add source"}),we=N.formatMessage({id:"sources.notAdminAddButton",defaultMessage:"To add a source, you must be granted write permissions from your Organization Administrator."});q.indexOf(A)<=q.indexOf("sm")&&(ve={dropdownProps:{position:"right"},actions:Z?[{label:Se,props:{to:M._j.sourcesNew.path,component:l.Link}}]:[{label:Se,props:{component:"div",isDisabled:!0,tooltip:we,className:"ins-c-sources__disabled-drodpown-item"}}]});var Ze=Object.entries(Q).map((function(e){var t=(0,a.Z)(e,2),r=(t[0],t[1]);return r&&(!Array.isArray(r)||Array.isArray(r)&&r.length>0)})).filter(Boolean).length>0,Ce=ue&&0===Y&&!Ze,ze=le===K.JL&&!Ce,Pe=function(e){return j({type:"setSelectedType",selectedType:e})};return s().createElement(s().Fragment,null,s().createElement(o.Suspense,{fallback:null},s().createElement(U.Z,{exact:!0,route:M._j.sourcesRemove,Component:ke}),s().createElement(U.Z,{exact:!0,route:M._j.sourcesNew,Component:Oe,componentProps:{sourceTypes:H(ne,ie),applicationTypes:H($,se),isOpen:!0,onClose:function(){j({type:"closeWizard"}),z.push(M._j.sources.path)},afterSuccess:function(e){return function(e){return e((0,p.il)(R))}(de)},hideSourcesButton:!0,selectedType:T,submitCallback:function(e){return function(e,t,r,a,n){var o,i,l,u,d,m="sources-wizard-notification-".concat(Date.now());if(location.pathname.split("/").filter(Boolean).pop()!==M._j.sourcesNew.path.split("/").pop())if(e.isErrored){var f=e.wizardState,g=f.activeStep,v=f.activeStepIndex,y=f.maxStepIndex,b=f.prevSteps,E=f.registeredFieldsHistory;t((0,p.Hz)({title:a.formatMessage({id:"alert.error.title",defaultMessage:"Error adding source"}),description:a.formatMessage({id:"alert.error.description",defaultMessage:"There was a problem while trying to add source {name}. Please try again. If the error persists, open a support case."},{name:s().createElement("b",null,e.values.source.name)}),variant:"danger",id:m,actionLinks:s().createElement(c.AlertActionLink,{onClick:function(){n({type:"retryWizard",initialValues:e.values,initialState:{activeStep:g,activeStepIndex:v,maxStepIndex:y,prevSteps:b,registeredFieldsHistory:E}}),t((0,p.Gd)(m)),r(M._j.sourcesNew.path)}},a.formatMessage({id:"alert.error.link",defaultMessage:"Retry"}))}))}else switch((0,D.Z)(e.createdSource)){case"unavailable":t((0,p.Hz)({title:a.formatMessage({id:"alert.error.title",defaultMessage:"Source configuration unsuccessful"}),description:s().createElement(s().Fragment,null,(null===(o=e.createdSource.applications)||void 0===o||null===(i=o[0])||void 0===i?void 0:i.availability_status_error)||(null===(l=e.createdSource.endpoint)||void 0===l||null===(u=l[0])||void 0===u?void 0:u.availability_status_error)||a.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"})," [",s().createElement("b",null,e.createdSource.name),"]"),variant:"danger",id:m,actionLinks:s().createElement(c.AlertActionLink,{onClick:function(){t((0,p.Gd)(m)),r((0,M.yS)(M._j.sourcesDetail.path,e.createdSource.id))}},a.formatMessage({id:"alert.unavailable.link",defaultMessage:"Edit source"}))}));break;case"timeout":t((0,p.Hz)({title:a.formatMessage({id:"alert.timeout.title",defaultMessage:"Source configuration in progress"}),description:a.formatMessage({id:"alert.timeout.description",defaultMessage:"We are still working to confirm credentials for source {name}. To track progress, check the Status column in the Sources table."},{name:s().createElement("b",null,e.createdSource.name)}),variant:"info"}));break;default:t((0,p.Hz)({title:a.formatMessage({id:"alert.success.title",defaultMessage:"{type} connection successful"},{type:null===(d=e.sourceTypes.find((function(t){return t.id===e.createdSource.source_type_id})))||void 0===d?void 0:d.product_name}),description:a.formatMessage({id:"alert.success.description",defaultMessage:"Source {name} was successfully added"},{name:s().createElement("b",null,e.createdSource.name)}),variant:"success",id:m,actionLinks:s().createElement(c.AlertActionLink,{onClick:function(){t((0,p.Gd)(m)),r((0,M.yS)(M._j.sourcesDetail.path,e.createdSource.id))}},a.formatMessage({id:"alert.success.link",defaultMessage:"View source details"}))}))}}(e,de,z.push,N,j)},initialValues:O,initialWizardState:k,activeVendor:le}})),s().createElement(Me,null),s().createElement(m.Z,{type:"content"},ze&&s().createElement(J.Z,null),re&&s().createElement(P,null),!re&&Ce&&le===K.JL&&s().createElement(ce,{setSelectedType:Pe}),!re&&Ce&&le===K.B0&&s().createElement(fe,{setSelectedType:Pe}),!re&&!Ce&&s().createElement(s().Fragment,null,s().createElement(d.Z,{pagination:Ee?s().createElement(v.Xf,null):Y>0?ye:void 0,actionsConfig:ve||{dropdownProps:{position:"right"},actions:Z?[s().createElement(l.Link,{to:M._j.sourcesNew.path,key:"addSourceButton"},s().createElement(c.Button,{variant:"primary",id:"addSourceButton"},Se))]:[s().createElement(c.Tooltip,{content:we,key:"addSourceButton"},s().createElement("span",{tabIndex:"0"},s().createElement(c.Button,{variant:"primary",isDisabled:!0,id:"addSourceButton"},Se)))]},filterConfig:{items:[{label:N.formatMessage({id:"sources.name",defaultMessage:"Name"}),filterValues:{"aria-label":N.formatMessage({id:"sources.filterByName",defaultMessage:"Filter by name"}),onChange:function(e,t){j({type:"setFilterValue",value:t}),L((function(){return F("name",t,de)}))},value:w}},{label:N.formatMessage({id:"sources.type",defaultMessage:"Type"}),type:"checkbox",filterValues:{onChange:function(e,t){return F("source_type_id",t,de)},items:V(he),value:Q.source_type_id}},{label:N.formatMessage({id:"sources.application",defaultMessage:"Application"}),type:"checkbox",filterValues:{onChange:function(e,t){return F("applications",t,de)},items:I((null==$?void 0:$.filter((0,ge.W)(he,le)))||[]),value:Q.applications}},{label:N.formatMessage({id:"sources.availabilityStatus",defaultMessage:"Status"}),type:"checkbox",filterValues:{onChange:function(e,t,r){return F("availability_status",e.target.checked?[r]:[],de)},items:[{label:N.formatMessage({id:"sources.available",defaultMessage:"Available"}),value:B.Rl},{label:N.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"}),value:B.nZ}],value:Q.availability_status}}]},activeFiltersConfig:{filters:W(Q,ne,$,N),onDelete:function(e,t,r){return de((0,p.OU)(function(e,t,r){if(r)return Object.keys(t).reduce((function(e,t){return x(x({},e),{},(0,n.Z)({},t,void 0))}),{});var a=e[0];return x(x({},t),{},(0,n.Z)({},a.key,a.chips?t[a.key].filter((function(e){return e!==a.chips[0].value})):void 0))}(t,Q,r)))}}}),s().createElement(C,null),s().createElement(d.Z,{pagination:Ee?s().createElement(v.Xf,null):Y>0?be:void 0}))))}},78205:(e,t,r)=>{"use strict";r.d(t,{j:()=>n,Z:()=>o});var a=r(84866),n=function(e){return function(t){var r=t.vendor,n=t.name;return e===a.JL?r!==a.B0:r===a.B0&&"satellite"!==n}};const o=function(e){var t,r;return(null===(t=e.schema)||void 0===t?void 0:t.authentication)&&(null===(r=e.schema)||void 0===r?void 0:r.endpoint)}}}]);
//# sourceMappingURL=../sourcemaps/sourcesPage.6f52bbb8566a81b0326c.js.map