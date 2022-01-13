(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[593],{2043:(e,t,r)=>{"use strict";r.d(t,{l:()=>a});var n=r(4138),a=function(){return(0,n.Rj)().listSourceTypes().then((function(e){return e.data}))}},80254:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(87462),a=r(45987),o=r(92950),i=r.n(o),s=r(86235),c=r(45697),u=r.n(c),l=r(60566),d=r(42396),f=r(86896),p=r(11146),m=r(58185),v=r(60076),g=r(16946);const y=function(){var e=(0,f.Z)(),t=(0,m.E)(),r=(0,d.I0)();return(0,o.useEffect)((function(){if(!1===t){var n=e.formatMessage({id:"sources.insufficietnPerms",defaultMessage:"Insufficient permissions"}),a=(0,g.$)(e);r((0,p.Hz)({title:n,variant:"danger",description:a}))}}),[t]),!1===t?i().createElement(s.Redirect,{to:v._j.sources.path}):null};var b=r(60409);const h=function(){var e=(0,f.Z)(),t=(0,l.L)(),r=(0,d.I0)();return(0,o.useEffect)((function(){t.paused_at&&r((0,p.Hz)({title:e.formatMessage({id:"sources.sourcePausedRedirect",defaultMessage:"Source is paused"}),variant:"danger",description:e.formatMessage({id:"sources.sourcePausedRedirectDescription",defaultMessage:"You cannot perform this action on a paused source."})}))}),[t.paused_at]),t.paused_at?i().createElement(s.Redirect,{to:(0,v.yS)(v._j.sourcesDetail.path,t.id)}):null};var E=["route","componentProps","Component"],S=function(e){var t=e.route,r=e.children;return t.redirectNoId&&(0,l.L)()||!t.redirectNoId?i().createElement(i().Fragment,null,t.noPaused&&i().createElement(h,null),t.writeAccess&&i().createElement(y,null),r):i().createElement(b.Z,null)};S.propTypes={route:u().shape({path:u().string.isRequired,redirectNoId:u().bool,writeAccess:u().bool,noPaused:u().bool}).isRequired,children:u().node.isRequired};var M=function(e){var t=e.route,r=e.componentProps,o=e.Component,c=(0,a.Z)(e,E);return i().createElement(s.Route,(0,n.Z)({},c,{path:t.path}),i().createElement(S,{route:t},i().createElement(o,r)))};M.propTypes={route:u().shape({path:u().string.isRequired,redirectNoId:u().bool,writeAccess:u().bool,noPaused:u().bool}).isRequired,componentProps:u().any,Component:u().oneOfType([u().func,u().object]).isRequired};const w=M},60409:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(29439),a=r(92950),o=r.n(a),i=r(42396),s=r(86235),c=r(86896),u=r(11146),l=r(4138),d=r(59824),f=r(60076),p=r(60566);const m=function(){var e=(0,s.useParams)().id,t=(0,c.Z)(),r=(0,p.L)(),m=(0,d.W)(),v=(0,i.v9)((function(e){return e.sources}),i.wU),g=v.appTypesLoaded,y=v.sourceTypesLoaded,b=(0,i.I0)(),h=(0,a.useState)(!1),E=(0,n.Z)(h,2),S=E[0],M=E[1];return(0,a.useEffect)((function(){m&&g&&y&&(0,l.oI)(e).then((function(e){var t=(0,n.Z)(e.sources,1)[0];return b((0,u._B)(t)),t})).then((function(r){r||b((0,u.Hz)({title:t.formatMessage({id:"sources.sourceNotFoundTitle",defaultMessage:"Requested source was not found"}),variant:"danger",description:t.formatMessage({id:"sources.sourceNotFoundTitleDescription",defaultMessage:"Source with { id } was not found. Try it again later."},{id:e})})),M(!0)}))}),[m,g,y]),S&&!r?o().createElement(s.Redirect,{to:f._j.sources.path}):null}},56638:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(87462),a=r(29439),o=r(45987),i=r(92950),s=r.n(i),c=r(45697),u=r.n(c),l=r(98583),d=["src"],f=function(e){var t=e.src,r=(0,o.Z)(e,d),c=(0,i.useState)(!1),u=(0,a.Z)(c,2),f=u[0],p=u[1];return s().createElement(s().Fragment,null,!f&&s().createElement(l.aN,(0,n.Z)({height:"40px",width:"110px"},r)),s().createElement("img",(0,n.Z)({src:t,onLoad:function(){return p(!0)},style:{display:f?"initial":"none"}},r)))};f.propTypes={src:u().string.isRequired};const p=f},58185:(e,t,r)=>{"use strict";r.d(t,{E:()=>a});var n=r(42396),a=function(){var e=(0,n.v9)((function(e){var t=e.user;return null==t?void 0:t.writePermissions}));if("boolean"==typeof e)return!!e}},59824:(e,t,r)=>{"use strict";r.d(t,{W:()=>a});var n=r(42396),a=function(){return(0,n.v9)((function(e){return e.sources.loaded}))<=0}},60566:(e,t,r)=>{"use strict";r.d(t,{L:()=>o});var n=r(42396),a=r(86235),o=function(){var e=(0,a.useParams)().id;return(0,n.v9)((function(t){return t.sources.entities.find((function(t){return t.id===e}))}))}},24080:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Ne});var n=r(29439),a=r(4942),o=r(92950),i=r.n(o),s=r(42396),c=r(86235),u=r(56976),l=r(86896),d=r(48114),f=r(54213),p=r(43846),m=r(78596),v=r(11549),g=r(35240),y=r(11146),b=r(93433),h=r(89091),E=r(98583),S=r(30567),M=r(80810);const w=function(){var e=(0,l.Z)(),t=(0,s.I0)();return i().createElement(u.Bullseye,null,i().createElement(u.EmptyState,{variant:u.EmptyStateVariant.small},i().createElement(u.EmptyStateIcon,{icon:M.ZP}),i().createElement(u.Title,{headingLevel:"h2",size:"lg"},e.formatMessage({id:"sources.noResultsFoundTitle",defaultMessage:"No sources found"})),i().createElement(u.EmptyStateBody,null,e.formatMessage({id:"sources.noResultsFoundDescription",defaultMessage:"No sources match the filter criteria. Remove all filters or clear all filters to show sources."})),i().createElement(u.Button,{variant:"link",onClick:function(){return t((0,y.K5)())}},e.formatMessage({id:"sources.clearAllFilters",defaultMessage:"Clear all filters"}))))};var O=r(59824),T=r(58185),k=r(60076),j=r(16946);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e,t,r,n){return t.filter((function(e){return e.title||e.hidden})).map((function(t){return{title:t.formatter?t.formatter(e[t.value],e,{sourceTypes:r,appTypes:n}):e[t.value]||""}}))},C=function(e,t,r,n,a){return e.filter((function(e){return!e.hidden})).reduce((function(e,o){var i=a.includes(o.id);return[].concat((0,b.Z)(e),[_(_({},o),{},{originalName:o.name,isOpen:!!o.expanded,cells:P(o,t,r,n),disableActions:i,isDeleting:i})])}),[])},N=function(e){return e.filter((function(e){return e.title||e.hidden})).map((function(e){return _({title:e.title||"",value:e.value,hidden:e.hidden,transforms:[h.wrappable]},e.sortable&&{transforms:[h.sortable,h.wrappable]})}))},z=function(e,t){return _(_({},e),t)},B=function(e,t,r,n){return function(a){var o=(0,j.Z)(e),i=[];return a.paused_at?i.push(_({title:e.formatMessage({id:"sources.resume",defaultMessage:"Resume"}),description:e.formatMessage({id:"sources.resume.description",defaultMessage:"Unpause data collection for this source"}),onClick:function(t,r,o){var i=o.id;return n((0,y.AX)(i,a.originalName,e))}},r?{component:"button"}:o)):i.push(_({title:e.formatMessage({id:"sources.pause",defaultMessage:"Pause"}),description:e.formatMessage({id:"sources.pause.description",defaultMessage:"Temporarily disable data collection"}),onClick:function(t,r,o){var i=o.id;return n((0,y.xz)(i,a.originalName,e))}},r?{component:"button"}:o)),i.push(_({title:e.formatMessage({id:"sources.remove",defaultMessage:"Remove"}),description:e.formatMessage({id:"sources.remove.description",defaultMessage:"Permanently delete this source and all collected data"}),onClick:function(e,r,n){var a=n.id;return t((0,k.yS)(k._j.sourcesRemove.path,a))}},r?{component:"button"}:o)),i.push(_({title:a.paused_at?e.formatMessage({id:"sources.viewDetails",defaultMessage:"View details"}):e.formatMessage({id:"sources.edit",defaultMessage:"Edit"}),onClick:function(e,r,n){var a=n.id;return t((0,k.yS)(k._j.sourcesDetail.path,a))}},r?{component:"button"}:o)),i}};const D=function(){var e,t=(0,c.useHistory)().push,r=(0,l.Z)(),a=(0,O.W)(),u=(0,T.E)(),d=(0,s.v9)((function(e){return e.sources}),s.wU),f=d.appTypes,p=d.entities,m=d.sourceTypes,v=d.sourceTypesLoaded,g=d.appTypesLoaded,b=d.sortBy,M=d.sortDirection,k=d.numberOfEntities,j=d.removingSources,Z=(0,s.I0)(),_=0===k||!a,P=(0,o.useReducer)(z,(e=(0,S.E)(r,_),{rows:[],sortBy:{},isLoaded:!1,cells:N(e)})),D=(0,n.Z)(P,2),L=D[0],R=D[1],A=function(){var e=(0,S.E)(r,_);return R({rows:C(p,e,m,f,j),cells:N(e)})};(0,o.useEffect)((function(){a&&v&&g?(R({isLoaded:!0}),A()):(R({isLoaded:!1}),function(){var e=(0,S.E)(r,_);R({cells:N(e)})}())}),[a,v,g]),(0,o.useEffect)((function(){L.isLoaded&&A()}),[p,j]);var I=L.rows;return 0===k&&L.isLoaded?I=[{heightAuto:!0,cells:[{props:{colSpan:S.W},title:i().createElement(w,null)}]}]:a&&g&&v||(I=[{heightAuto:!0,cells:[{props:{colSpan:S.W,className:"sources-placeholder-row"},title:i().createElement(E.mI,null)}]}]),i().createElement(h.Table,{gridBreakPoint:"grid-lg","aria-label":r.formatMessage({id:"sources.list",defaultMessage:"List of Sources"}),onSort:function(e,t,r){return Z((0,y.Bb)(L.cells[t].value,r))},sortBy:{index:L.cells.map((function(e){return e.hidden?"hidden":e.value})).indexOf(b),direction:M},rows:I,cells:L.cells,actionResolver:a&&k>0?B(r,t,u,Z):void 0,rowWrapper:E.sk,className:0===k&&L.isLoaded?"ins-c-table-empty-state":""},i().createElement(h.TableHeader,null),i().createElement(h.TableBody,null))};var L=r(99166),R=r(4833),A=r(86482),I=r(36488);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=(0,L.Z)((function(e){return e()}),500),H={pageNumber:1,sortBy:"created_at",sortDirection:"desc"},W=function(e){return e.map((function(e){var t=e.id;return{label:e.product_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},q=function(e){return e.map((function(e){var t=e.id;return{label:e.display_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},U=function(e,t,r){return r((0,y.OU)((0,a.Z)({},e,t)))},G=function(e,t,r,n){return Object.keys(e).map((function(a){return e[a]&&e[a].length>0?function(e,t,r,n,a){return{name:function(){return{name:t[e],key:e}},source_type_id:function(){return{category:"Source Type",key:e,chips:t[e].map((function(e){var t=r.find((function(t){return t.id===e}));return{name:t?t.product_name:e,value:e}}))}},applications:function(){return{category:"Application",key:e,chips:t[e].map((function(e){var t=n.find((function(t){return t.id===e}));return{name:t?t.display_name:e,value:e}}))}},availability_status:function(){return{category:"Status",key:e,chips:[{value:t[e][0],name:t[e][0]===R.Rl?a.formatMessage({id:"sources.available",defaultMessage:"Available"}):a.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"})}]}}}[e]||function(){return{name:e}}}(a,e,t,r,n)():void 0})).filter(Boolean)},J=function(e,t){return t&&e.length>0?e:void 0},K=r(80254),$=r(7995),X=r(84866),Y=r(45697),Q=r.n(Y),ee=r(87462),te=r(56638);const re=function(e){var t=(0,l.Z)(),r=(0,j.$)(t);return i().createElement(u.Tooltip,{content:r},i().createElement("div",{className:"disabled-tile-with-tooltip"},i().createElement(u.Tile,(0,ee.Z)({},e,{isDisabled:!0}))))};var ne=r(78205),ae=function(e){var t=e.setSelectedType,r=e.mapper,n=(0,s.v9)((function(e){return e.sources.sourceTypes}),s.wU),a=(0,s.v9)((function(e){return e.sources.activeVendor})),o=(0,c.useHistory)().push,i=(0,T.E)(),l=function(e){t(e),o(k._j.sourcesNew.path)},d=i?u.Tile:re;return n.filter((0,ne.j)(a)).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){var t=e.name;return r(t,l,d)}))};ae.propTypes={setSelectedType:Q().func.isRequired,mapper:Q().func.isRequired};const oe=ae;var ie=function(e,t,r){return{amazon:i().createElement(r,{isStacked:!0,key:e,title:"Amazon Web Services",onClick:function(){return t("amazon")},className:"tile pf-u-mr-md pf-u-mt-md",icon:i().createElement(te.Z,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/aws.svg",alt:"aws logo"})}),google:i().createElement(r,{isStacked:!0,key:e,title:"Google Cloud",className:"tile pf-u-mr-md pf-u-mt-md",onClick:function(){return t("google")},icon:i().createElement(te.Z,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg",alt:"google logo"})}),azure:i().createElement(r,{isStacked:!0,key:e,title:"Microsoft Azure",onClick:function(){return t("azure")},className:"tile pf-u-mr-md pf-u-mt-md",icon:i().createElement(te.Z,{className:"provider-icon pf-u-mb-sm",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",alt:"azure logo"})})}[e]};const se=function(e){return i().createElement(oe,(0,ee.Z)({},e,{mapper:ie}))};var ce=function(e){var t=e.setSelectedType,r=(0,l.Z)();return i().createElement(u.Card,{className:"src-c-card__cloud-empty-state pf-u-mt-md pf-u-mt-0-on-md"},i().createElement(u.CardTitle,null,r.formatMessage({id:"cloud.emptystate.cardTitle",defaultMessage:"Get started by connecting to your public clouds"})),i().createElement(u.CardBody,null,i().createElement(u.Text,null,r.formatMessage({id:"cloud.emptystate.cardDescription",defaultMessage:"Select an available provider."})),i().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},i().createElement(se,{setSelectedType:t}))),i().createElement(u.CardFooter,{className:"cloud-footer"},i().createElement(u.Text,{className:"catalog-link pf-u-mt-lg"},r.formatMessage({id:"cloud.emptystate.catalogLink",defaultMessage:"Looking for a different provider? <a>See all Red Hat Certified Cloud and Service Providers</a>"},{a:function(e){return i().createElement(u.Text,{key:"link",component:"a",href:"https://catalog.redhat.com/cloud",target:"_blank",rel:"noopener noreferrer"},e)}}))))};ce.propTypes={setSelectedType:Q().func.isRequired};const ue=ce;var le=i().createElement(te.Z,{className:"redhat-icon",src:"/apps/frontend-assets/red-hat-logos/stacked.svg",alt:"red hat logo"}),de=function(e,t,r){return{openshift:i().createElement(r,{isStacked:!0,key:e,title:"OpenShift Container Platfrom",className:"tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",onClick:function(){return t("openshift")},icon:le})}[e]};const fe=function(e){return i().createElement(oe,(0,ee.Z)({},e,{mapper:de}))};var pe=function(e){var t=e.setSelectedType,r=(0,l.Z)();return i().createElement(u.Card,{className:"src-c-card__cloud-empty-state pf-u-mt-md pf-u-mt-0-on-md"},i().createElement(u.CardTitle,null,r.formatMessage({id:"redhat.emptystate.cardTitle",defaultMessage:"Get started by connecting to your Red Hat applications"})),i().createElement(u.CardBody,null,i().createElement(u.Text,null,r.formatMessage({id:"redhat.emptystate.cardDescription",defaultMessage:"Select an available application."})),i().createElement("div",{className:"provider-tiles pf-u-mt-md pf-u-mb-lg"},i().createElement(fe,{setSelectedType:t}))))};pe.propTypes={setSelectedType:Q().func.isRequired};const me=pe;var ve=r(64673),ge=r(48716),ye=r(39173),be=r(10817),he=r(46071);const Ee=function(){var e=(0,l.Z)(),t=(0,s.I0)(),r=(0,s.v9)((function(e){return e.sources.activeVendor}));return i().createElement(u.Tabs,{activeKey:r,onSelect:function(e,r){return t((0,y.CB)(r))},className:"pf-u-mt-md"},i().createElement(u.Tab,{eventKey:X.JL,title:i().createElement(i().Fragment,null,i().createElement(u.TabTitleIcon,null,i().createElement(he.ZP,null)),i().createElement(u.TabTitleText,null,e.formatMessage({id:"sources.cloudSources",defaultMessage:"Cloud sources"})))}),i().createElement(u.Tab,{eventKey:X.B0,title:i().createElement(i().Fragment,null,i().createElement(u.TabTitleIcon,null,i().createElement(be.ZP,null)),i().createElement(u.TabTitleText,null,e.formatMessage({id:"sources.redhatSources",defaultMessage:"Red Hat sources"})))}))};var Se=function(){var e=(0,l.Z)();return i().createElement(ge.Z,{className:"pf-u-pb-0"},i().createElement(ye.Z,{title:e.formatMessage({id:"sources.sources",defaultMessage:"Sources"})}),i().createElement(Ee,null))};const Me=i().memo(Se),we=function(e,t,r,n){var a;switch(e){case"applications":return t.map((function(e){var t,n=e.application_type_id;return null===(t=r.find((function(e){return e.id===n})))||void 0===t?void 0:t.display_name})).join(",");case"source_type_id":return null===(a=n.find((function(e){return e.id===t})))||void 0===a?void 0:a.product_name;default:return t}};function Oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ze=(0,o.lazy)((function(){return r.e(8490).then(r.bind(r,55997))})),_e=(0,o.lazy)((function(){return Promise.all([r.e(4291),r.e(210),r.e(9199),r.e(3068),r.e(6671),r.e(2199)]).then(r.bind(r,58012)).then((function(e){return{default:e.AddSourceWizard}}))})),Pe={filter:void 0,selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0},Ce=function(e,t){var r=t.type,n=t.value,a=t.selectedType,o=t.initialValues,i=t.initialState;switch(r){case"setFilterValue":return je(je({},e),{},{filter:n});case"setSelectedType":return je(je({},e),{},{selectedType:a});case"retryWizard":return je(je({},e),{},{wizardInitialState:i,wizardInitialValues:o});case"closeWizard":return je(je({},e),{},{selectedType:void 0,wizardInitialState:void 0,wizardInitialValues:void 0})}};const Ne=function(){var e=(0,o.useReducer)(Ce,Pe),t=(0,n.Z)(e,2),r=t[0],h=r.filter,M=r.selectedType,w=r.wizardInitialState,j=r.wizardInitialValues,Z=t[1],_=(0,O.W)(),P=(0,T.E)(),C=(0,c.useHistory)(),N=(0,l.Z)(),z=(0,m.Z)(),B=(0,s.v9)((function(e){return e.sources}),s.wU),L=B.filterValue,x=B.numberOfEntities,Y=B.appTypes,Q=B.pageSize,ee=B.pageNumber,te=B.fetchingError,re=B.sourceTypes,ae=B.paginationClicked,oe=B.appTypesLoaded,ie=B.sourceTypesLoaded,se=B.activeVendor,ce=B.entities,le=_&&ie&&oe,de=(0,s.I0)();(0,o.useEffect)((function(){h!==L.name&&Z({type:"setFilterValue",value:L.name})}),[L.name]);var fe=function(e,t){return de((0,y.zm)(t,Q))},pe=Math.ceil(x/Q);(0,o.useEffect)((function(){le&&x>0&&ee>Math.max(pe,1)&&fe(0,pe)}));var ge,ye={itemCount:x,page:ee,perPage:Q,onSetPage:fe,onPerPageSelect:function(e,t){return de((0,y.zm)(1,t))},className:"top-pagination"},be=je(je({},ye),{},{dropDirection:"up",variant:"bottom",isCompact:!1,className:"bottom-pagination"}),he=!(le&&oe&&ie||ae),Ee=re.filter((0,ne.j)(se,!0)),Se=N.formatMessage({id:"sources.addSource",defaultMessage:"Add source"}),Oe=N.formatMessage({id:"sources.notAdminAddButton",defaultMessage:"To add a source, you must be granted Sources Administrator permissions from your Organization Administrator."});(0,v.Z)(z)&&(ge={dropdownProps:{position:"right"},actions:P?[{label:Se,props:{to:k._j.sourcesNew.path,component:c.Link}}]:[{label:Se,props:{component:"div",isDisabled:!0,tooltip:Oe,className:"src-m-dropdown-item-disabled"}}]});var ke=Object.entries(L).map((function(e){var t=(0,n.Z)(e,2),r=(t[0],t[1]);return r&&(!Array.isArray(r)||Array.isArray(r)&&r.length>0)})).filter(Boolean).length>0,Ne=le&&0===x&&!ke,ze=se===X.JL&&!Ne,Be=function(e){return Z({type:"setSelectedType",selectedType:e})};return i().createElement(i().Fragment,null,i().createElement(o.Suspense,{fallback:null},i().createElement(K.Z,{exact:!0,route:k._j.sourcesRemove,Component:Ze}),i().createElement(K.Z,{exact:!0,route:k._j.sourcesNew,Component:_e,componentProps:{sourceTypes:J(re,ie),applicationTypes:J(Y,oe),isOpen:!0,onClose:function(){Z({type:"closeWizard"}),C.push(k._j.sources.path)},afterSuccess:function(e){return function(e){return e((0,y.il)(H))}(de)},hideSourcesButton:!0,selectedType:M,submitCallback:function(e){return function(e,t,r,n,a){var o,s,c,l,d,f="sources-wizard-notification-".concat(Date.now());if(location.pathname.split("/").filter(Boolean).pop()!==k._j.sourcesNew.path.split("/").pop())if(e.isErrored){var p=e.wizardState,m=p.activeStep,v=p.activeStepIndex,g=p.maxStepIndex,b=p.prevSteps,h=p.registeredFieldsHistory;t((0,y.Hz)({title:n.formatMessage({id:"alert.error.title",defaultMessage:"Error adding source"}),description:n.formatMessage({id:"alert.error.description",defaultMessage:"There was a problem while trying to add source {name}. Please try again. If the error persists, open a support case."},{name:i().createElement("b",null,e.values.source.name)}),variant:"danger",id:f,actionLinks:i().createElement(u.AlertActionLink,{onClick:function(){a({type:"retryWizard",initialValues:e.values,initialState:{activeStep:m,activeStepIndex:v,maxStepIndex:g,prevSteps:b,registeredFieldsHistory:h}}),t((0,y.Gd)(f)),r(k._j.sourcesNew.path)}},n.formatMessage({id:"alert.error.link",defaultMessage:"Retry"}))}))}else switch((0,A.Z)(e.createdSource)){case"unavailable":t((0,y.Hz)({title:n.formatMessage({id:"alert.error.title",defaultMessage:"Source configuration unsuccessful"}),description:n.formatMessage({id:"error.notification",defaultMessage:"{error} [<b>{name}</b>]"},{error:(null===(o=e.createdSource.applications)||void 0===o||null===(s=o[0])||void 0===s?void 0:s.availability_status_error)||(null===(c=e.createdSource.endpoint)||void 0===c||null===(l=c[0])||void 0===l?void 0:l.availability_status_error)||n.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"}),name:e.createdSource.name,b:I.S}),variant:"danger",id:f,actionLinks:i().createElement(u.AlertActionLink,{onClick:function(){t((0,y.Gd)(f)),r((0,k.yS)(k._j.sourcesDetail.path,e.createdSource.id))}},n.formatMessage({id:"alert.unavailable.link",defaultMessage:"Edit source"}))}));break;case"timeout":t((0,y.Hz)({title:n.formatMessage({id:"alert.timeout.title",defaultMessage:"Source configuration in progress"}),description:n.formatMessage({id:"alert.timeout.description",defaultMessage:"We are still working to confirm credentials for source {name}. To track progress, check the Status column in the Sources table."},{name:i().createElement("b",null,e.createdSource.name)}),variant:"info"}));break;default:t((0,y.Hz)({title:n.formatMessage({id:"alert.success.title",defaultMessage:"{type} connection successful"},{type:null===(d=e.sourceTypes.find((function(t){return t.id===e.createdSource.source_type_id})))||void 0===d?void 0:d.product_name}),description:n.formatMessage({id:"alert.success.description",defaultMessage:"Source {name} was successfully added"},{name:i().createElement("b",null,e.createdSource.name)}),variant:"success",id:f,actionLinks:i().createElement(u.AlertActionLink,{onClick:function(){t((0,y.Gd)(f)),r((0,k.yS)(k._j.sourcesDetail.path,e.createdSource.id))}},n.formatMessage({id:"alert.success.link",defaultMessage:"View source details"}))}))}}(e,de,C.push,N,Z)},initialValues:j,initialWizardState:w,activeVendor:se}})),i().createElement(Me,null),i().createElement(f.Z,{type:"content"},ze&&i().createElement($.Z,null),te&&i().createElement(p.Z,null),!te&&Ne&&se===X.JL&&i().createElement(ue,{setSelectedType:Be}),!te&&Ne&&se===X.B0&&i().createElement(me,{setSelectedType:Be}),!te&&!Ne&&i().createElement(i().Fragment,null,i().createElement(d.Z,{useMobileLayout:!0,pagination:he?i().createElement(E.Xf,null):x>0?ye:void 0,actionsConfig:ge||{dropdownProps:{position:"right"},actions:P?[i().createElement(c.Link,{to:k._j.sourcesNew.path,key:"addSourceButton"},i().createElement(u.Button,{variant:"primary",id:"addSourceButton"},Se))]:[i().createElement(u.Tooltip,{content:Oe,key:"addSourceButton"},i().createElement("span",{tabIndex:"0"},i().createElement(u.Button,{variant:"primary",isDisabled:!0,id:"addSourceButton"},Se)))]},filterConfig:{items:[{label:N.formatMessage({id:"sources.name",defaultMessage:"Name"}),filterValues:{"aria-label":N.formatMessage({id:"sources.filterByName",defaultMessage:"Filter by name"}),onChange:function(e,t){Z({type:"setFilterValue",value:t}),F((function(){return U("name",t,de)}))},value:h}},{label:N.formatMessage({id:"sources.type",defaultMessage:"Type"}),type:"checkbox",filterValues:{onChange:function(e,t){return U("source_type_id",t,de)},items:W(Ee),value:L.source_type_id}},{label:N.formatMessage({id:"sources.application",defaultMessage:"Application"}),type:"checkbox",filterValues:{onChange:function(e,t){return U("applications",t,de)},items:q((null==Y?void 0:Y.filter((0,ve.W)(Ee,se)))||[]),value:L.applications}},{label:N.formatMessage({id:"sources.availabilityStatus",defaultMessage:"Status"}),type:"checkbox",filterValues:{onChange:function(e,t,r){return U("availability_status",e.target.checked?[r]:[],de)},items:[{label:N.formatMessage({id:"sources.available",defaultMessage:"Available"}),value:R.Rl},{label:N.formatMessage({id:"sources.unavailable",defaultMessage:"Unavailable"}),value:R.nZ}],value:L.availability_status}}]},activeFiltersConfig:{filters:G(L,re,Y,N),onDelete:function(e,t,r){return de((0,y.OU)(function(e,t,r){if(r)return Object.keys(t).reduce((function(e,t){return V(V({},e),{},(0,a.Z)({},t,void 0))}),{});var n=e[0];return V(V({},t),{},(0,a.Z)({},n.key,n.chips?t[n.key].filter((function(e){return e!==n.chips[0].value})):void 0))}(t,L,r)))}},exportConfig:je(je({},v.Z&&{position:"right"}),{},{isDisabled:!le,onSelect:function(e,t){var r="csv"===t?function(e,t,r,n){var a=(0,S.E)(t).filter((function(e){return!e.hidden}));return[a.map((function(e){return e.title}))].concat((0,b.Z)(e.map((function(e){return a.map((function(t){var a=t.value;return we(a,e[a],r,n)})).map((function(e){return null!=e&&e.includes(",")?'"'.concat(e,'"'):e}))})))).map((function(e){return e.join(",")})).join("\n")}(ce,N,Y,re):function(e,t,r,n){var o=(0,S.E)(t).filter((function(e){return!e.hidden})),i=e.map((function(e){return function(e,t,r,n){return e.reduce((function(e,o){return Te(Te({},e),{},(0,a.Z)({},o.title,we(o.value,t[o.value],r,n)))}),{})}(o,e,r,n)}));return JSON.stringify(i,null,2)}(ce,N,Y,re);(0,g.Sv)(r,"sources-".concat((new Date).toISOString()),t)}})}),i().createElement(D,null),i().createElement(d.Z,{pagination:he?i().createElement(E.Xf,null):x>0?be:void 0}))))}},86482:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(93433);const a=function(e){var t,r,a,o=(null===(t=e.applications)||void 0===t?void 0:t.filter(Boolean).map((function(e){return e.availability_status||"timeout"})))||[],i=(null===(r=e.endpoint)||void 0===r?void 0:r.filter(Boolean).map((function(e){return e.availability_status||"timeout"})))||[],s=(null===(a=e.authentications)||void 0===a?void 0:a.filter(Boolean).map((function(e){return e.availability_status||"timeout"})))||[],c=[].concat((0,n.Z)(o),(0,n.Z)(i),(0,n.Z)(s));return c.includes("unavailable")?"unavailable":c.length>0&&c.every((function(e){return"available"===e}))?"available":c.includes("timeout")?"timeout":"finished"}},16946:(e,t,r)=>{"use strict";r.d(t,{$:()=>n,Z:()=>a});var n=function(e){return e.formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this action, you must be granted Sources Administrator permissions from your Organization Administrator."})};const a=function(e){return{tooltip:n(e),isDisabled:!0,className:"src-m-dropdown-item-disabled"}}},64673:(e,t,r)=>{"use strict";r.d(t,{W:()=>a,Z:()=>o});var n=r(84866),a=function(e,t){return function(r){return r.supported_source_types.find((function(r){var a,o;return t===n.JL?((null===(a=e.find((function(e){var t=e.name;return r===t})))||void 0===a?void 0:a.vendor)||n.B0)!==n.B0:(null===(o=e.find((function(e){var t=e.name;return r===t})))||void 0===o?void 0:o.vendor)===n.B0}))}};const o=function(e){return e.name!==n.M$}},78205:(e,t,r)=>{"use strict";r.d(t,{j:()=>o,Z:()=>i});var n=r(84866),a=[n.OH,n.N9],o=function(e,t){return function(r){var o=r.vendor,i=r.name;return e===n.JL?o!==n.B0:t?o===n.B0:o===n.B0&&!a.includes(i)}};const i=function(e){var t,r;return(null===(t=e.schema)||void 0===t?void 0:t.authentication)&&(null===(r=e.schema)||void 0===r?void 0:r.endpoint)}},11452:()=>{},32857:()=>{},93818:()=>{},94498:()=>{},28992:()=>{},81320:()=>{},90479:()=>{},78752:()=>{},8572:()=>{},98379:()=>{},99624:()=>{},36974:()=>{},97236:()=>{},38024:()=>{},16166:()=>{},53519:()=>{}}]);
//# sourceMappingURL=../sourcemaps/sourcesPage.a9989af533b1d0863f1b6b48f79ea25f.js.map