(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{263:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(33),o=n.n(c),s=n(0),u=n.n(s),i=n(28),l=n(27),d=n(51),f=n(40),p=n(71),m=n(266),b=n(10),O=n(480),g=n(541),y=n(542),j=n(22),h=n.n(j),v=n(377),E=n(284),w=n(436),S=n(435),P=n(77),M=n(289),T=n.n(M),D=n(276),k=n.n(D),C=n(2),B=n.n(C),N=n(327),R=n(445),A=n(81),L=n(375),_=n(326),q=function(){return u.a.createElement(_.Bullseye,{className:"ins-c-sources__sources-placeholder-loader"},u.a.createElement(L.Spinner,{size:"xl"}))},x=function(e){var t=e.row,n=t.isDeleting,r=k()(t,["isDeleting"]),a=k()(e,["row"]);return n?u.a.createElement("tr",null,u.a.createElement("td",{colSpan:A.a},u.a.createElement(R.RowLoader,null))):u.a.createElement(N.a,T()({},a,{row:r,className:"ins-c-sources__row-vertical-centered"}))};x.propTypes={row:B.a.object.isRequired};var I=n(282),z=n(290),F=n(283),V=n(73),W=n(121),H=n(376),J=n.n(H),U=function(){var e=Object(i.useDispatch)();return u.a.createElement(V.Bullseye,null,u.a.createElement(I.EmptyState,{variant:I.EmptyStateVariant.small},u.a.createElement(z.EmptyStateIcon,{icon:J.a}),u.a.createElement(W.Title,{headingLevel:"h2",size:"lg"},u.a.createElement(b.a,{defaultMessage:"No sources found",id:"sources.noResultsFoundTitle"})),u.a.createElement(F.EmptyStateBody,null,u.a.createElement(b.a,{defaultMessage:"No sources match the filter criteria. Remove all filters or clear all filters to show sources.",id:"sources.noResultsFoundDescription"})),u.a.createElement(p.Button,{variant:"link",onClick:function(){return e(Object(f.d)())}},u.a.createElement(b.a,{defaultMessage:"Clear all filters",id:"sources.clearAllFilters"}))))},Y=n(301),G=function(){return Object(i.useSelector)((function(e){return e.user.isOrgAdmin}))},K=n(72);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e,t,n,r){return t.filter((function(e){return e.title||e.hidden})).map((function(t){return{title:t.formatter?Object(P.c)(t.formatter)(e[t.value],e,{sourceTypes:n,appTypes:r}):e[t.value]||""}}))},$=function(e,t,n,r){return e.filter((function(e){return!e.hidden})).reduce((function(e,a){return[].concat(h()(e),[X({},a,{isOpen:!!a.expanded,cells:Z(a,t,n,r),disableActions:!!a.isDeleting})])}),[])},ee=function(e){return e.filter((function(e){return e.title||e.hidden})).map((function(e){return X({title:e.title||"",value:e.value},e.sortable&&{transforms:[v.a]})}))},te=function(e,t){return X({},e,{},t)},ne=function(e,t){return function(n){var r=[{title:e.formatMessage({id:"sources.manageApps",defaultMessage:"Manage applications"}),onClick:function(e,n,r){var a=r.id;return t(Object(K.b)(K.c.sourceManageApps.path,a))},component:"button"},{style:{color:"var(--pf-global--danger-color--100)"},title:e.formatMessage({id:"sources.delete",defaultMessage:"Delete"}),onClick:function(e,n,r){var a=r.id;return t(Object(K.b)(K.c.sourcesRemove.path,a))},component:"button"}];return!n.imported&&function(e,t,n){e.splice(1,0,{title:t.formatMessage({id:"sources.edit",defaultMessage:"Edit"}),onClick:function(e,t,r){var a=r.id;return n(Object(K.b)(K.c.sourcesEdit.path,a))},component:"button"})}(r,e,t),r}},re=function(){var e,t=Object(l.f)().push,n=Object(m.a)(),r=Object(Y.a)(),a=G(),c=Object(i.useSelector)((function(e){return e.sources}),i.shallowEqual),d=c.appTypes,p=c.entities,b=c.sourceTypes,O=c.sourceTypesLoaded,g=c.appTypesLoaded,y=c.sortBy,j=c.sortDirection,h=c.numberOfEntities,v=Object(i.useDispatch)(),P=0===h||!r,M=Object(s.useReducer)(te,(e=Object(A.b)(n,P),{rows:[],sortBy:{},isLoaded:!1,cells:ee(e)})),T=o()(M,2),D=T[0],k=T[1],C=function(){var e=Object(A.b)(n,P);return k({rows:$(p,e,b,d),cells:ee(e)})};Object(s.useEffect)((function(){r&&O&&g?(k({isLoaded:!0}),C()):(k({isLoaded:!1}),function(){var e=Object(A.b)(n,P);k({cells:ee(e)})}())}),[r,O,g]),Object(s.useEffect)((function(){D.isLoaded&&C()}),[p]);var B=D.rows;return 0===h&&D.isLoaded?B=[{heightAuto:!0,cells:[{props:{colSpan:A.a},title:u.a.createElement(U,null)}]}]:r&&g&&O||(B=[{heightAuto:!0,cells:[{props:{colSpan:A.a,className:"sources-placeholder-row"},title:u.a.createElement(q,null)}]}]),u.a.createElement(E.b,{gridBreakPoint:"grid-lg","aria-label":n.formatMessage({id:"sources.list",defaultMessage:"List of Sources"}),onSort:function(e,t,n){return v(Object(f.m)(D.cells[t].value,n))},sortBy:{index:D.cells.map((function(e){return e.value})).indexOf(y),direction:j},rows:B,cells:D.cells,actionResolver:r&&a&&h>0?ne(n,t):void 0,rowWrapper:x},u.a.createElement(w.a,null),u.a.createElement(S.a,null))},ae=n(131),ce=n(132),oe=n(464),se=n.n(oe),ue=function(e){var t=e.title,n=e.body,r=G();return u.a.createElement(ae.Card,null,u.a.createElement(ce.CardBody,null,u.a.createElement(V.Bullseye,null,u.a.createElement(I.EmptyState,null,u.a.createElement(z.EmptyStateIcon,{icon:se.a}),u.a.createElement(W.Title,{headingLevel:"h5",size:"lg"},t||u.a.createElement(b.a,{id:"sources.emptyStateTitle",defaultMessage:"No sources"})),u.a.createElement(F.EmptyStateBody,null,n||r&&u.a.createElement(b.a,{id:"sources.emptyStateBody",defaultMessage:"No sources have been defined. To start define a source."}),!r&&u.a.createElement(b.a,{id:"sources.emptyStateBodyNotAdmin",defaultMessage:"To define a source, you have to be an organisation admin."})),r&&u.a.createElement(d.b,{to:K.c.sourcesNew.path},u.a.createElement(p.Button,{style:{marginTop:"var(--pf-c-empty-state--c-button--MarginTop)"},variant:"primary"},u.a.createElement(b.a,{id:"sources.emptyStateButton",defaultMessage:"Add a source"})))))))};ue.propTypes={title:B.a.node,body:B.a.node};var ie=ue,le=n(660),de=n(383),fe=n.n(de),pe=n(437),me=n(13);function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=Object(le.a)((function(e){return e()}),500),ye={pageNumber:1,sortBy:"created_at",sortDirection:"desc"},je=function(e,t){var n;n=t.id,Object(me.i)().checkAvailabilitySource(n).catch((function(){})),e(Object(f.c)()),e(Object(f.g)(ye))},he=function(e){return e.map((function(e){var t=e.id;return{label:e.product_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},ve=function(e,t,n){return n(Object(f.e)(a()({},e,t)))},Ee=function(e,t){return Object.keys(e).map((function(n){return e[n]&&e[n].length>0?function(e,t,n){return{name:function(){return{name:t[e],key:e}},source_type_id:function(){return{category:"Source Type",key:e,chips:t[e].map((function(e){var t=n.find((function(t){return t.id===e}));return{name:t?t.product_name:e,value:e}}))}}}[e]||function(){return{name:e}}}(n,e,t)():void 0})).filter(Boolean)},we=function(e,t){return t&&e.length>0?e:void 0},Se=n(94),Pe=function(){return u.a.createElement("div",{className:"ins-c-sources__pagination-loader-wrapper"},u.a.createElement(Se.a,{height:30,width:200,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},u.a.createElement("rect",{x:"0",y:"0",rx:"6",ry:"6",width:"200",height:"30"})))},Me=function(){var e=Object(m.a)(),t=G(),n=Object(i.useDispatch)();if(!1===t){var r=e.formatMessage({id:"sources.insufficietnPerms",defaultMessage:"Insufficient permissions"}),a=e.formatMessage({id:"sources.insufficietnPermsDesc",defaultMessage:"You have to be an organisation admin to be able to do this action"});return n(Object(f.b)(r,"danger",a)),u.a.createElement(l.a,{to:K.c.sources.path})}return null},Te=n(272),De=function(){var e=Object(l.h)().id,t=Object(m.a)(),n=Object(Y.a)(),r=Object(i.useSelector)((function(e){return e.sources}),i.shallowEqual),a=r.appTypesLoaded,c=r.sourceTypesLoaded,d=Object(i.useDispatch)(),p=Object(s.useState)(!1),b=o()(p,2),O=b[0],g=b[1];return Object(s.useEffect)((function(){n&&a&&c&&Object(me.g)(e).then((function(e){var t=o()(e.sources,1)[0];return d(Object(f.a)(t))})).then((function(){g(!0)}))}),[n,a,c]),O?(d(Object(f.b)(t.formatMessage({id:"sources.sourceNotFoundTitle",defaultMessage:"Requested source was not found"}),"danger",t.formatMessage({id:"sources.sourceNotFoundTitleDescription",defaultMessage:"Source with { id } was not found. Try it again later."},{id:e}))),u.a.createElement(l.a,{to:K.c.sources.path})):null},ke=function(e){var t=e.route,n=e.children;return!(t.redirectNoId?Object(Te.a)():void 0)&&t.redirectNoId?u.a.createElement(De,null):u.a.createElement(u.a.Fragment,null,t.writeAccess&&u.a.createElement(Me,null),n)};ke.propTypes={route:B.a.shape({path:B.a.string.isRequired,redirectNoId:B.a.bool,writeAccess:B.a.bool}).isRequired,children:B.a.node.isRequired};var Ce=function(e){var t=e.route,n=e.componentProps,r=e.Component,a=k()(e,["route","componentProps","Component"]);return u.a.createElement(l.b,T()({},a,{path:t.path}),u.a.createElement(ke,{route:t},u.a.createElement(r,n)))};Ce.propTypes={route:B.a.shape({path:B.a.string.isRequired,redirectNoId:B.a.bool,writeAccess:B.a.bool}).isRequired,componentProps:B.a.any,Component:B.a.oneOfType([B.a.func,B.a.object]).isRequired};var Be=Ce,Ne=n(105);function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Ae=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(6)]).then(n.bind(null,666))})),Le=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(7)]).then(n.bind(null,665))})),_e=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(5)]).then(n.bind(null,667))})),qe=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.t.bind(null,275,7)).then((function(e){return{default:e.AddSourceWizard}}))}));t.default=function(){var e=Object(s.useState)(!1),t=o()(e,2),n=t[0],r=t[1],c=Object(s.useState)(!1),j=o()(c,2),h=j[0],v=j[1],E=Object(s.useState)(),w=o()(E,2),S=w[0],P=w[1],M=Object(Y.a)(),T=G(),D=Object(l.f)(),k=Object(l.g)(),C=Object(m.a)(),B=Object(i.useSelector)((function(e){return e.sources}),i.shallowEqual),N=B.filterValue,R=B.numberOfEntities,A=B.appTypes,L=B.pageSize,_=B.pageNumber,q=B.fetchingError,x=B.undoValues,I=B.sourceTypes,z=B.paginationClicked,F=B.appTypesLoaded,V=B.sourceTypesLoaded,W=Object(i.useDispatch)();Object(s.useEffect)((function(){Promise.all([W(Object(f.h)()),W(Object(f.f)()),W(Object(f.g)(Object(Ne.a)()))]).then((function(){return v(!0)}))}),[]);var H=Object.entries(N).map((function(e){var t=o()(e,2);t[0];return t[1]})).filter(Boolean).length>0;Object(s.useEffect)((function(){h&&(r(M&&0===R&&!H),Object(Ne.b)(B))}),[k,h]),Object(s.useEffect)((function(){S!==N.name&&P(N.name)}),[N.name]),Object(s.useEffect)((function(){h&&M&&r(0===R&&!H)}),[N,M]);var J=function(e,t){return W(Object(f.i)(t,L))},U=Math.ceil(R/L);M&&R>0&&_>Math.max(U,1)&&J(0,U);var Q={itemCount:R,page:_,perPage:L,onSetPage:J,onPerPageSelect:function(e,t){return W(Object(f.i)(1,t))}},X=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Q,{dropDirection:"up",variant:"bottom",isCompact:!1}),Z=!(M&&F&&V||z);return u.a.createElement(u.a.Fragment,null,u.a.createElement(s.Suspense,{fallback:null},u.a.createElement(Be,{exact:!0,route:K.c.sourceManageApps,Component:_e}),u.a.createElement(Be,{exact:!0,route:K.c.sourcesRemove,Component:Le}),u.a.createElement(Be,{exact:!0,route:K.c.sourcesNew,Component:qe,componentProps:{sourceTypes:we(I,V),applicationTypes:we(A,F),isOpen:!0,onClose:function(e){return function(e){var t=e.values,n=e.dispatch,r=e.history,a=e.intl;if(t&&!fe()(t)){var c=Date.now();n(Object(f.b)(a.formatMessage({id:"sources.addWizardCanceled",defaultMessage:"Adding a source was cancelled"}),"success",u.a.createElement(b.a,{id:"sources.undoMistake",defaultMessage:"{undo} if this was a mistake.",values:{undo:u.a.createElement(pe.a,{messageId:c,values:t})}}),c))}n(Object(f.c)()),r.push(K.c.sources.path)}({values:e,dispatch:W,history:D,intl:C})},afterSuccess:function(e){return je(W,e)},hideSourcesButton:!0,initialValues:x}}),u.a.createElement(Be,{exact:!0,route:K.c.sourcesEdit,Component:Ae})),u.a.createElement(g.PageHeader,null,u.a.createElement(g.PageHeaderTitle,{title:C.formatMessage({id:"sources.sources",defaultMessage:"Sources"})})),u.a.createElement(y.Section,{type:"content"},n||q?u.a.createElement(ie,{title:q?q.title:void 0,body:q?q.detail:void 0}):u.a.createElement(u.a.Fragment,null,u.a.createElement(O.PrimaryToolbar,{pagination:Z?u.a.createElement(Pe,null):R>0?Q:void 0,actionsConfig:T?{actions:[u.a.createElement(d.b,{to:K.c.sourcesNew.path,key:"addSourceButton"},u.a.createElement(p.Button,{variant:"primary"},u.a.createElement(b.a,{id:"sources.addSource",defaultMessage:"Add a source"})))]}:void 0,filterConfig:{items:[{label:C.formatMessage({id:"sources.name",defaultMessage:"Name"}),filterValues:{"aria-label":C.formatMessage({id:"sources.filterByName",defaultMessage:"Filter by name"}),onChange:function(e,t){P(t),ge((function(){return ve("name",t,W)}))},value:S}},{label:C.formatMessage({id:"sources.type",defaultMessage:"Type"}),type:"checkbox",filterValues:{onChange:function(e,t){return ve("source_type_id",t,W)},items:he(I||[]),value:N.source_type_id}}]},activeFiltersConfig:{filters:Ee(N,I),onDelete:function(e,t,n){return W(Object(f.e)(function(e,t,n){if(n)return Object.keys(t).reduce((function(e,t){return Oe({},e,a()({},t,void 0))}),{});var r=e[0];return Oe({},t,a()({},r.key,r.chips?t[r.key].filter((function(e){return e!==r.chips[0].value})):void 0))}(t,N,n)))}}}),u.a.createElement(re,null),u.a.createElement(O.PrimaryToolbar,{pagination:Z?u.a.createElement(Pe,null):R>0?X:void 0}))))}},272:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(28),a=n(27),c=function(){var e=Object(a.h)().id;return Object(r.useSelector)((function(t){return t.sources.entities.find((function(t){return t.id===e}))}))}},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(28),a=function(){return Object(r.useSelector)((function(e){return e.sources.loaded}))<=0}},437:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(2),o=n.n(c),s=n(71),u=n(28),i=n(27),l=n(10),d=n(40),f=n(72),p=function(e){var t=e.messageId,n=e.values,r=e.path,c=Object(i.f)(),o=Object(u.useDispatch)(),p=Object(u.useSelector)((function(e){return e.notifications}));return a.a.createElement(s.Button,{variant:"link",isInline:!0,onClick:function(){var e=p.find((function(e){return e.customId===t}));e&&o(Object(d.k)(e.id)),o(Object(d.n)(n)),c.location.pathname===r?function(e){e.push(f.c.sources.path),e.goBack()}(c):c.push(r)}},a.a.createElement(l.a,{id:"sources.undo",defaultMessage:"Undo"}))};p.propTypes={messageId:o.a.number.isRequired,values:o.a.object.isRequired,path:o.a.string},p.defaultProps={path:f.c.sourcesNew.path};t.a=p}}]);
//# sourceMappingURL=../sourcemaps/sourcePage.js.map