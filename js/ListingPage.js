(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{444:function(e,t){e.exports=function(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}},445:function(e,t){var n=Array.prototype.join;e.exports=function(e,t){return null==e?"":n.call(e,t)}},456:function(e,t,n){"use strict";n.r(t);var o=n(51),a=n.n(o),r=n(52),i=n.n(r),s=n(53),c=n.n(s),l=n(54),u=n.n(l),p=n(101),d=n.n(p),m=n(7),f=n.n(m),g=n(1),w=n.n(g),v=n(116),h=n(253),S=n(45),y=n(141),E=n(142),P=n(251),D=n(143),T=function(e){function t(e){var n;return a()(this,t),n=i()(this,c()(t).call(this,e)),f()(d()(d()(n)),"onToggle",function(e){return n.setState({isOpen:e})}),f()(d()(d()(n)),"onSelect",function(e){return n.setState(function(e){return{isOpen:!e.isOpen}})}),f()(d()(d()(n)),"dropdownItems",function(){return[w.a.createElement(y.a,null,"Link"),w.a.createElement(y.a,{component:"button"},"Action"),w.a.createElement(y.a,{isDisabled:!0},"Disabled Link"),w.a.createElement(y.a,{isDisabled:!0,component:"button"},"Disabled Action"),w.a.createElement(E.a,null),w.a.createElement(y.a,null,"Separated Link"),w.a.createElement(y.a,{component:"button"},"Separated Action")]}),f()(d()(d()(n)),"render",function(){return w.a.createElement(P.a,{onToggle:n.onToggle,onSelect:n.onSelect,toggle:w.a.createElement(D.a,{onToggle:n.onToggle},"All"),isOpen:n.state.isOpen,dropdownItems:n.dropdownItems()})}),n.state={isOpen:!1},n}return u()(t,e),t}(g.Component),b=n(140),I=n(111),O=n(0),A=n.n(O),R=n(56),L=n(11),k=n(100),C=n.n(k),j=n(49);n(444),n(445);var q=function(e,t){return{type:j.a.LOAD_LISTING_DATA,payload:function(e,t){console.log("doLoadListingData",t);var n=e.url.replace(/:id/,t);return fetch(n).then(function(e){if(e.ok||"opaque"===e.type)return e.json();throw new Error("Unexpected response code ".concat(e.status))})}(e,t)}},B=function(e,t){return{type:j.c,payload:{column:e,direction:t}}},N=function(e,t){return{type:j.b,payload:{page:e,size:t}}},x=function(e){function t(e){var n;return a()(this,t),n=i()(this,c()(t).call(this,e)),f()(d()(d()(n)),"state",{itemsPerPage:10,onPage:1,sortBy:{}}),f()(d()(d()(n)),"componentDidMount",function(){return n.props.loadListingData(n.props.viewDefinition,n.props.sourceId)}),f()(d()(d()(n)),"onSort",function(e,t,o){n.props.sortListingData(n.filteredColumns[t].value,o),n.setState({sortBy:{index:t,direction:o}})}),f()(d()(d()(n)),"mapDataToRows",function(e){return e.map(function(e){return{id:e.id,cells:n.filteredColumns.map(function(t){return e[t.value]||""})}})}),f()(d()(d()(n)),"onSetPage",function(e){n.setState({onPage:e}),n.props.pageAndSize(e,n.state.itemsPerPage)}),f()(d()(d()(n)),"onPerPageSelect",function(e){n.setState({onPage:1,itemsPerPage:e}),n.props.pageAndSize(1,e)}),f()(d()(d()(n)),"render",function(){return n.props.loaded?w.a.createElement(S.Table,{sortBy:n.state.sortBy,header:n.headers,onSort:n.onSort,rows:n.mapDataToRows(n.props.listingRows),footer:w.a.createElement(S.Pagination,{itemsPerPage:n.state.itemsPerPage,page:n.state.onPage,direction:"up",onSetPage:n.onSetPage,onPerPageSelect:n.onPerPageSelect,numberOfItems:n.props.rawRows?n.props.rawRows.length:0})}):w.a.createElement("div",null,"Loading data...")}),n.filteredColumns=C()(n.props.viewDefinition.columns,function(e){return e.title}),n.headers=n.filteredColumns.map(function(e){return e.title}),n}return u()(t,e),t}(g.Component);f()(x,"propTypes",{sourceId:A.a.number.isRequired,viewDefinition:A.a.any.isRequired});var z=Object(L.connect)(function(e){var t=e.listing,n=t.loaded,o=void 0!==n&&n,a=t.listingRows,r=void 0===a?[]:a,i=t.rawRows;return{loaded:o,listingRows:r,rawRows:void 0===i?[]:i}},function(e){return Object(R.bindActionCreators)({loadListingData:q,sortListingData:B,pageAndSize:N},e)})(Object(h.a)(x)),_=n(57),H=n.n(_),J=n(12),U=n(256),F=function(e){function t(){var e,n;a()(this,t);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return n=i()(this,(e=c()(t)).call.apply(e,[this].concat(r))),f()(d()(d()(n)),"state",{isOpen:!1}),f()(d()(d()(n)),"onToggle",function(e){return n.setState({isOpen:e})}),n}return u()(t,e),H()(t,[{key:"render",value:function(){return w.a.createElement(P.a,{position:J.d.right,toggle:w.a.createElement(U.a,{onToggle:this.onToggle}),isOpen:this.state.isOpen,dropdownItems:this.props.dropdownItems})}}]),t}(g.Component);f()(F,"propTypes",{dropdownItems:A.a.any.isRequired});var G=n(124),M=function(e){function t(e){var n;return a()(this,t),n=i()(this,c()(t).call(this,e)),f()(d()(d()(n)),"onNavigate",function(e,t,o){n.props.history.push(t)}),f()(d()(d()(n)),"loadDefinition",function(){return G.a[n.props.location.pathname.split("/").pop()]}),f()(d()(d()(n)),"parseSourceId",function(){var e=n.props.location.pathname.split("/");return parseInt(e[e.length-2],10)}),f()(d()(d()(n)),"locationToState",function(){return{viewDefinition:n.loadDefinition(),sourceId:n.parseSourceId()}}),f()(d()(d()(n)),"componentDidUpdate",function(e,t){n.props.location.pathname!==e.location.pathname&&n.setState(n.locationToState())}),f()(d()(d()(n)),"render",function(){return w.a.createElement(w.a.Fragment,null,w.a.createElement(S.PageHeader,null,w.a.createElement(S.PageHeaderTitle,{title:"Providers"}),w.a.createElement(S.Breadcrumbs,{items:[{title:"Sources",navigate:"/"}],current:n.state.viewDefinition.displayName,onNavigate:n.onNavigate})),w.a.createElement(S.Section,{type:"content"},w.a.createElement("div",{className:"pf-c-input-group"},w.a.createElement(T,null),w.a.createElement(b.a,{id:"filter_text",value:""}),w.a.createElement(I.c,null,"Action"),w.a.createElement(F,{dropdownItems:[w.a.createElement(y.a,{key:"foo",component:"div"},w.a.createElement(v.a,{to:"/"},"Back to Sources"))]})),w.a.createElement(z,{viewDefinition:n.state.viewDefinition,sourceId:n.state.sourceId})))}),n.state=n.locationToState(),n}return u()(t,e),t}(g.Component);f()(M,"propTypes",{location:A.a.any.isRequired,history:A.a.any.isRequired});t.default=Object(h.a)(M)}}]);
//# sourceMappingURL=../sourcemaps/ListingPage.js.map