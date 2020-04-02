(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{274:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(37),o=n.n(c),u=n(0),s=n.n(u),i=n(30),l=n(29),f=n(60),d=n(45),p=n(78),m=n(280),b=n(11),O=n(530),g=n(594),y=n(595),j=n(24),h=n.n(j),v=n(424),E=n(305),w=n(487),S=n(486),P=n(83),M=n(310),T=n.n(M),D=n(295),k=n.n(D),C=n(3),B=n.n(C),N=n(353),R=n(495),A=n(89),L=n(323),_=n(352),q=function(){return s.a.createElement(_.Bullseye,{className:"ins-c-sources__sources-placeholder-loader"},s.a.createElement(L.Spinner,{size:"xl"}))},x=function(e){var t=e.row,n=t.isDeleting,r=k()(t,["isDeleting"]),a=k()(e,["row"]);return n?s.a.createElement("tr",null,s.a.createElement("td",{colSpan:A.a},s.a.createElement(R.RowLoader,null))):s.a.createElement(N.a,T()({},a,{row:r,className:"ins-c-sources__row-vertical-centered"}))};x.propTypes={row:B.a.object.isRequired};var I=n(303),F=n(311),z=n(304),V=n(80),W=n(129),H=n(354),J=n.n(H),U=function(){var e=Object(i.useDispatch)();return s.a.createElement(V.Bullseye,null,s.a.createElement(I.EmptyState,{variant:I.EmptyStateVariant.small},s.a.createElement(F.EmptyStateIcon,{icon:J.a}),s.a.createElement(W.Title,{headingLevel:"h2",size:"lg"},s.a.createElement(b.a,{defaultMessage:"No sources found",id:"sources.noResultsFoundTitle"})),s.a.createElement(z.EmptyStateBody,null,s.a.createElement(b.a,{defaultMessage:"No sources match the filter criteria. Remove all filters or clear all filters to show sources.",id:"sources.noResultsFoundDescription"})),s.a.createElement(p.Button,{variant:"link",onClick:function(){return e(Object(d.d)())}},s.a.createElement(b.a,{defaultMessage:"Clear all filters",id:"sources.clearAllFilters"}))))},Y=n(326),G=function(){return Object(i.useSelector)((function(e){return e.user.isOrgAdmin}))},K=n(79);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e,t,n,r){return t.filter((function(e){return e.title||e.hidden})).map((function(t){return{title:t.formatter?Object(P.c)(t.formatter)(e[t.value],e,{sourceTypes:n,appTypes:r}):e[t.value]||""}}))},$=function(e,t,n,r){return e.filter((function(e){return!e.hidden})).reduce((function(e,a){return[].concat(h()(e),[X({},a,{isOpen:!!a.expanded,cells:Z(a,t,n,r),disableActions:!!a.isDeleting})])}),[])},ee=function(e){return e.filter((function(e){return e.title||e.hidden})).map((function(e){return X({title:e.title||"",value:e.value},e.sortable&&{transforms:[v.a]})}))},te=function(e,t){return X({},e,{},t)},ne=function(e,t){return function(n){var r=[{title:e.formatMessage({id:"sources.manageApps",defaultMessage:"Manage applications"}),onClick:function(e,n,r){var a=r.id;return t(Object(K.b)(K.c.sourceManageApps.path,a))},component:"button"},{style:{color:"var(--pf-global--danger-color--100)"},title:e.formatMessage({id:"sources.delete",defaultMessage:"Delete"}),onClick:function(e,n,r){var a=r.id;return t(Object(K.b)(K.c.sourcesRemove.path,a))},component:"button"}];return!n.imported&&function(e,t,n){e.splice(1,0,{title:t.formatMessage({id:"sources.edit",defaultMessage:"Edit"}),onClick:function(e,t,r){var a=r.id;return n(Object(K.b)(K.c.sourcesEdit.path,a))},component:"button"})}(r,e,t),r}},re=function(){var e,t=Object(l.f)().push,n=Object(m.a)(),r=Object(Y.a)(),a=G(),c=Object(i.useSelector)((function(e){return e.sources}),i.shallowEqual),f=c.appTypes,p=c.entities,b=c.sourceTypes,O=c.sourceTypesLoaded,g=c.appTypesLoaded,y=c.sortBy,j=c.sortDirection,h=c.numberOfEntities,v=Object(i.useDispatch)(),P=0===h||!r,M=Object(u.useReducer)(te,(e=Object(A.b)(n,P),{rows:[],sortBy:{},isLoaded:!1,cells:ee(e)})),T=o()(M,2),D=T[0],k=T[1],C=function(){var e=Object(A.b)(n,P);return k({rows:$(p,e,b,f),cells:ee(e)})};Object(u.useEffect)((function(){r&&O&&g?(k({isLoaded:!0}),C()):(k({isLoaded:!1}),function(){var e=Object(A.b)(n,P);k({cells:ee(e)})}())}),[r,O,g]),Object(u.useEffect)((function(){D.isLoaded&&C()}),[p]);var B=D.rows;return 0===h&&D.isLoaded?B=[{heightAuto:!0,cells:[{props:{colSpan:A.a},title:s.a.createElement(U,null)}]}]:r&&g&&O||(B=[{heightAuto:!0,cells:[{props:{colSpan:A.a,className:"sources-placeholder-row"},title:s.a.createElement(q,null)}]}]),s.a.createElement(E.b,{gridBreakPoint:"grid-lg","aria-label":n.formatMessage({id:"sources.list",defaultMessage:"List of Sources"}),onSort:function(e,t,n){return v(Object(d.m)(D.cells[t].value,n))},sortBy:{index:D.cells.map((function(e){return e.value})).indexOf(y),direction:j},rows:B,cells:D.cells,actionResolver:r&&a&&h>0?ne(n,t):void 0,rowWrapper:x},s.a.createElement(w.a,null),s.a.createElement(S.a,null))},ae=n(136),ce=n(137),oe=n(514),ue=n.n(oe),se=function(e){var t=e.title,n=e.body,r=G();return s.a.createElement(ae.Card,null,s.a.createElement(ce.CardBody,null,s.a.createElement(V.Bullseye,null,s.a.createElement(I.EmptyState,null,s.a.createElement(F.EmptyStateIcon,{icon:ue.a}),s.a.createElement(W.Title,{headingLevel:"h5",size:"lg"},t||s.a.createElement(b.a,{id:"sources.emptyStateTitle",defaultMessage:"No sources"})),s.a.createElement(z.EmptyStateBody,null,n||r&&s.a.createElement(b.a,{id:"sources.emptyStateBody",defaultMessage:"No sources have been defined. To start define a source."}),!r&&s.a.createElement(s.a.Fragment,null,s.a.createElement("br",null),s.a.createElement(b.a,{id:"sources.emptyStateBodyNotAdmin",defaultMessage:"To define a source, you have to be an organisation admin."}))),r&&s.a.createElement(f.b,{to:K.c.sourcesNew.path},s.a.createElement(p.Button,{style:{marginTop:"var(--pf-c-empty-state--c-button--MarginTop)"},variant:"primary"},s.a.createElement(b.a,{id:"sources.emptyStateButton",defaultMessage:"Add source"})))))))};se.propTypes={title:B.a.node,body:B.a.node};var ie=se,le=n(699),fe=n(430),de=n.n(fe),pe=n(488),me=n(370);function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=Object(le.a)((function(e){return e()}),500),ye={pageNumber:1,sortBy:"created_at",sortDirection:"desc"},je=function(e){return e.map((function(e){var t=e.id;return{label:e.product_name,value:t}})).sort((function(e,t){return e.label.localeCompare(t.label)}))},he=function(e,t,n){return n(Object(d.e)(a()({},e,t)))},ve=function(e,t){return Object.keys(e).map((function(n){return e[n]&&e[n].length>0?function(e,t,n){return{name:function(){return{name:t[e],key:e}},source_type_id:function(){return{category:"Source Type",key:e,chips:t[e].map((function(e){var t=n.find((function(t){return t.id===e}));return{name:t?t.product_name:e,value:e}}))}}}[e]||function(){return{name:e}}}(n,e,t)():void 0})).filter(Boolean)},Ee=function(e,t){return t&&e.length>0?e:void 0},we=n(102),Se=function(){return s.a.createElement("div",{className:"ins-c-sources__pagination-loader-wrapper"},s.a.createElement(we.a,{height:30,width:200,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},s.a.createElement("rect",{x:"0",y:"0",rx:"6",ry:"6",width:"200",height:"30"})))},Pe=function(){var e=Object(m.a)(),t=G(),n=Object(i.useDispatch)();if(!1===t){var r=e.formatMessage({id:"sources.insufficietnPerms",defaultMessage:"Insufficient permissions"}),a=e.formatMessage({id:"sources.insufficietnPermsDesc",defaultMessage:"You have to be an organisation admin to be able to do this action"});return n(Object(d.b)(r,"danger",a)),s.a.createElement(l.a,{to:K.c.sources.path})}return null},Me=n(290),Te=n(13),De=function(){var e=Object(l.h)().id,t=Object(m.a)(),n=Object(Y.a)(),r=Object(i.useSelector)((function(e){return e.sources}),i.shallowEqual),a=r.appTypesLoaded,c=r.sourceTypesLoaded,f=Object(i.useDispatch)(),p=Object(u.useState)(!1),b=o()(p,2),O=b[0],g=b[1];return Object(u.useEffect)((function(){n&&a&&c&&Object(Te.g)(e).then((function(e){var t=o()(e.sources,1)[0];return f(Object(d.a)(t))})).then((function(){g(!0)}))}),[n,a,c]),O?(f(Object(d.b)(t.formatMessage({id:"sources.sourceNotFoundTitle",defaultMessage:"Requested source was not found"}),"danger",t.formatMessage({id:"sources.sourceNotFoundTitleDescription",defaultMessage:"Source with { id } was not found. Try it again later."},{id:e}))),s.a.createElement(l.a,{to:K.c.sources.path})):null},ke=function(e){var t=e.route,n=e.children;return!(t.redirectNoId?Object(Me.a)():void 0)&&t.redirectNoId?s.a.createElement(De,null):s.a.createElement(s.a.Fragment,null,t.writeAccess&&s.a.createElement(Pe,null),n)};ke.propTypes={route:B.a.shape({path:B.a.string.isRequired,redirectNoId:B.a.bool,writeAccess:B.a.bool}).isRequired,children:B.a.node.isRequired};var Ce=function(e){var t=e.route,n=e.componentProps,r=e.Component,a=k()(e,["route","componentProps","Component"]);return s.a.createElement(l.b,T()({},a,{path:t.path}),s.a.createElement(ke,{route:t},s.a.createElement(r,n)))};Ce.propTypes={route:B.a.shape({path:B.a.string.isRequired,redirectNoId:B.a.bool,writeAccess:B.a.bool}).isRequired,componentProps:B.a.any,Component:B.a.oneOfType([B.a.func,B.a.object]).isRequired};var Be=Ce,Ne=n(113);function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Ae=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(9),n.e(5)]).then(n.bind(null,704))})),Le=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(6)]).then(n.bind(null,703))})),_e=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(8),n.e(4)]).then(n.bind(null,705))})),qe=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.t.bind(null,291,7)).then((function(e){return{default:e.AddSourceWizard}}))}));t.default=function(){var e=Object(u.useState)(!1),t=o()(e,2),n=t[0],r=t[1],c=Object(u.useState)(!1),j=o()(c,2),h=j[0],v=j[1],E=Object(u.useState)(),w=o()(E,2),S=w[0],P=w[1],M=Object(Y.a)(),T=G(),D=Object(l.f)(),k=Object(l.g)(),C=Object(m.a)(),B=Object(i.useSelector)((function(e){return e.sources}),i.shallowEqual),N=B.filterValue,R=B.numberOfEntities,A=B.appTypes,L=B.pageSize,_=B.pageNumber,q=B.fetchingError,x=B.undoValues,I=B.sourceTypes,F=B.paginationClicked,z=B.appTypesLoaded,V=B.sourceTypesLoaded,W=Object(i.useDispatch)();Object(u.useEffect)((function(){Promise.all([W(Object(d.h)()),W(Object(d.f)()),W(Object(d.g)(Object(Ne.a)()))]).then((function(){return v(!0)}))}),[]);var H=Object.entries(N).map((function(e){var t=o()(e,2);t[0];return t[1]})).filter(Boolean).length>0;Object(u.useEffect)((function(){h&&(r(M&&0===R&&!H),Object(Ne.b)(B))}),[k,h]),Object(u.useEffect)((function(){S!==N.name&&P(N.name)}),[N.name]),Object(u.useEffect)((function(){h&&M&&r(0===R&&!H)}),[M]);var J=function(e,t){return W(Object(d.i)(t,L))},U=Math.ceil(R/L);Object(u.useEffect)((function(){M&&R>0&&_>Math.max(U,1)&&J(0,U)}));var Q={itemCount:R,page:_,perPage:L,onSetPage:J,onPerPageSelect:function(e,t){return W(Object(d.i)(1,t))}},X=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Q,{dropDirection:"up",variant:"bottom",isCompact:!1}),Z=!(M&&z&&V||F);return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.Suspense,{fallback:null},s.a.createElement(Be,{exact:!0,route:K.c.sourceManageApps,Component:_e}),s.a.createElement(Be,{exact:!0,route:K.c.sourcesRemove,Component:Le}),s.a.createElement(Be,{exact:!0,route:K.c.sourcesNew,Component:qe,componentProps:{sourceTypes:Ee(I,V),applicationTypes:Ee(A,z),isOpen:!0,onClose:function(e){return function(e){var t=e.values,n=e.dispatch,r=e.history,a=e.intl;if(t&&!de()(t)){var c=Date.now();n(Object(d.b)(a.formatMessage({id:"sources.addWizardCanceled",defaultMessage:"Adding a source was cancelled"}),"success",s.a.createElement(b.a,{id:"sources.undoMistake",defaultMessage:"{undo} if this was a mistake.",values:{undo:s.a.createElement(pe.a,{messageId:c,values:t})}}),c))}n(Object(d.c)()),r.push(K.c.sources.path)}({values:e,dispatch:W,history:D,intl:C})},afterSuccess:function(e){return function(e,t){Object(me.a)(t.id),e(Object(d.c)()),e(Object(d.g)(ye))}(W,e)},hideSourcesButton:!0,initialValues:x}}),s.a.createElement(Be,{exact:!0,route:K.c.sourcesEdit,Component:Ae})),s.a.createElement(g.PageHeader,null,s.a.createElement(g.PageHeaderTitle,{title:C.formatMessage({id:"sources.sources",defaultMessage:"Sources"})})),s.a.createElement(y.Section,{type:"content"},n||q?s.a.createElement(ie,{title:q?q.title:void 0,body:q?q.detail:void 0}):s.a.createElement(s.a.Fragment,null,s.a.createElement(O.PrimaryToolbar,{pagination:Z?s.a.createElement(Se,null):R>0?Q:void 0,actionsConfig:T?{actions:[s.a.createElement(f.b,{to:K.c.sourcesNew.path,key:"addSourceButton"},s.a.createElement(p.Button,{variant:"primary"},s.a.createElement(b.a,{id:"sources.addSource",defaultMessage:"Add source"})))]}:void 0,filterConfig:{items:[{label:C.formatMessage({id:"sources.name",defaultMessage:"Name"}),filterValues:{"aria-label":C.formatMessage({id:"sources.filterByName",defaultMessage:"Filter by name"}),onChange:function(e,t){P(t),ge((function(){return he("name",t,W)}))},value:S}},{label:C.formatMessage({id:"sources.type",defaultMessage:"Type"}),type:"checkbox",filterValues:{onChange:function(e,t){return he("source_type_id",t,W)},items:je(I||[]),value:N.source_type_id}}]},activeFiltersConfig:{filters:ve(N,I),onDelete:function(e,t,n){return W(Object(d.e)(function(e,t,n){if(n)return Object.keys(t).reduce((function(e,t){return Oe({},e,a()({},t,void 0))}),{});var r=e[0];return Oe({},t,a()({},r.key,r.chips?t[r.key].filter((function(e){return e!==r.chips[0].value})):void 0))}(t,N,n)))}}}),s.a.createElement(re,null),s.a.createElement(O.PrimaryToolbar,{pagination:Z?s.a.createElement(Se,null):R>0?X:void 0}))))}},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(30),a=n(29),c=function(){var e=Object(a.h)().id;return Object(r.useSelector)((function(t){return t.sources.entities.find((function(t){return t.id===e}))}))}},326:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(30),a=function(){return Object(r.useSelector)((function(e){return e.sources.loaded}))<=0}},370:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(13),a=function(e){return Object(r.i)().checkAvailabilitySource(e).catch((function(){}))}},488:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(3),o=n.n(c),u=n(78),s=n(30),i=n(29),l=n(11),f=n(45),d=n(79),p=function(e){var t=e.messageId,n=e.values,r=e.path,c=Object(i.f)(),o=Object(s.useDispatch)(),p=Object(s.useSelector)((function(e){return e.notifications}));return a.a.createElement(u.Button,{variant:"link",isInline:!0,onClick:function(){var e=p.find((function(e){return e.customId===t}));e&&o(Object(f.k)(e.id)),o(Object(f.n)(n)),c.location.pathname===r?function(e){e.push(d.c.sources.path),e.goBack()}(c):c.push(r)}},a.a.createElement(l.a,{id:"sources.undo",defaultMessage:"Undo"}))};p.propTypes={messageId:o.a.number.isRequired,values:o.a.object.isRequired,path:o.a.string},p.defaultProps={path:d.c.sourcesNew.path};t.a=p}}]);
//# sourceMappingURL=../sourcemaps/sourcePage.js.map