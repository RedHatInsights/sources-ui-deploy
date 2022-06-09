"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[1298],{67867:function(e,t,a){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)},n=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return l(t,e),t},i=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var r,n=0,l=t.length;n<l;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.actionPropsGenerator=t.overflowActionsMapper=void 0;var u=o(a(92950)),s=a(89624),d=a(25832),p=c(a(94184));function f(e){return void 0!==e.label}t.overflowActionsMapper=function(e,t){var a=e;return u.default.createElement(s.DropdownItem,r({},a.props,{className:"ins-c-primary-toolbar__overflow-actions",key:a.value||a.key||"".concat(t,"-overflow"),component:a.props&&a.props.component||u.default.isValidElement(a.label||e)?"div":"button",onClick:function(e){return a.onClick&&a.onClick(e,a,t)}}),a.label||e)},t.actionPropsGenerator=function(e,t){var a,n,l,o,i,c="object"==typeof e&&null!==typeof e&&"function"==typeof(null===(a=e)||void 0===a?void 0:a.onClick)?function(a){var r;return null===(r=e)||void 0===r?void 0:r.onClick(a,e,t)}:void 0;return r(r({},null===(n=e)||void 0===n?void 0:n.props),{onClick:c,component:(null===(o=null===(l=e)||void 0===l?void 0:l.props)||void 0===o?void 0:o.component)||(u.default.isValidElement(e.label||e)?"div":"button"),children:"object"==typeof e&&null!==typeof e?null===(i=e)||void 0===i?void 0:i.label:e})},t.default=function(e){var a,n=e.actions,l=void 0===n?[]:n,o=e.overflowActions,c=void 0===o?[]:o,m=e.onSelect,g=void 0===m?function(){}:m,b=e.dropdownProps,v=void 0===b?{}:b,y=e.kebabToggleProps,E=e.exportConfig,h=(0,u.useState)(!1),_=h[0],C=h[1],k=function(e){return C(e)},O=l[0],S=l.slice(1),P=i(i(i(i([],O?[u.default.createElement(s.DropdownItem,r({key:"first-action"},(0,t.actionPropsGenerator)(O,"first-action"),{className:(0,p.default)("ins-c-primary-toolbar__first-action",f(O)?null===(a=null==O?void 0:O.props)||void 0===a?void 0:a.className:void 0)}))]:[],!0),S.map((function(e,a){var n,l,o;return u.default.createElement(s.DropdownItem,r({key:(null===(n=e)||void 0===n?void 0:n.key)||(null===(o=null===(l=e)||void 0===l?void 0:l.props)||void 0===o?void 0:o.key)||a},(0,t.actionPropsGenerator)(e,a)))})),!0),l.length>0&&c.length>0?[u.default.createElement(s.DropdownSeparator,{key:"separator",className:"ins-c-primary-toolbar__overflow-actions-separator"})]:[],!0),c.map((function(e,a){return(0,t.overflowActionsMapper)(e,a)})),!0);return u.default.createElement(u.Fragment,null,O&&u.default.createElement(s.ToolbarItem,{className:"ins-c-primary-toolbar__first-action pf-m-spacer-sm"},f(O)?u.default.createElement(s.Button,r({ouiaId:"".concat(O.label)},O.props,{onClick:O.onClick||O.props&&O.props.onClick||void 0}),O.label):O),E&&(E.extraItems||E.onSelect)&&u.default.createElement(s.ToolbarItem,{className:"pf-m-spacer-sm"},u.default.createElement(d.DownloadButton,r({},E))),(l&&(null==l?void 0:l.length)>0||c.length>0)&&u.default.createElement(s.ToolbarItem,{className:"".concat(l.length<=1?"ins-m-actions--empty":""," ins-c-primary-toolbar__actions pf-m-spacer-sm")},u.default.createElement(s.Dropdown,r({},v,{isOpen:_,isPlain:!0,onSelect:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];g&&g.apply(void 0,e),k(!1)},ouiaId:"Actions",toggle:u.default.createElement(s.KebabToggle,r({},y,{onToggle:function(e){k(e)}})),dropdownItems:P}))))}},90111:function(e,t,a){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)},n=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},l=this&&this.__spreadArray||function(e,t,a){if(a||2===arguments.length)for(var r,n=0,l=t.length;n<l;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(a(92950)),c=a(89624),u=a(30058),s=a(31267),d=o(a(67867)),p=a(92053),f=a(2238),m=a(23670),g=o(a(51256));a(62354),t.default=function(e){var t,a=e.id,o=e.className,b=e.toggleIsExpanded,v=e.bulkSelect,y=e.filterConfig,E=e.dedicatedAction,h=e.actionsConfig,_=e.sortByConfig,C=e.pagination,k=e.activeFiltersConfig,O=e.children,S=e.exportConfig,P=e.expandAll,A=e.useMobileLayout,D=n(e,["id","className","toggleIsExpanded","bulkSelect","filterConfig","dedicatedAction","actionsConfig","sortByConfig","pagination","activeFiltersConfig","children","exportConfig","expandAll","useMobileLayout"]),w=l([],_?[{label:"Sort order ASC",props:{isDisabled:_.direction===s.SortByDirection.asc},onClick:function(e){return _.onSortChange&&_.onSortChange(e,s.SortByDirection.asc)}},{label:"Sort order DESC",props:{isDisabled:_.direction===s.SortByDirection.desc},onClick:function(e){return _.onSortChange&&_.onSortChange(e,s.SortByDirection.desc)}}]:[],!0);return i.default.createElement(c.Toolbar,r({},D,{className:"".concat(o||""," ins-c-primary-toolbar"),toggleIsExpanded:b,id:a?"".concat(a):"ins-primary-data-toolbar",ouiaId:"PrimaryToolbar"}),i.default.createElement(c.ToolbarContent,null,(P||v||y||E)&&i.default.createElement(c.ToolbarGroup,{className:"ins-c-primary-toolbar__group-filter pf-m-spacer-md pf-m-space-items-lg",variant:"filter-group"},P&&i.default.createElement(c.ToolbarItem,null,(t=P,i.default.isValidElement(t)?P:i.default.createElement(c.Button,r({},P.buttonProps,{variant:"plain","aria-label":"".concat(P.isAllExpanded?"Collapse":"Expand"," all"),onClick:function(e){return P.onClick(e,!P.isAllExpanded)},ouiaId:"ExpandCollapseAll",isDisabled:P.isDisabled}),i.default.createElement(c.ToolbarExpandIconWrapper,null,P.isAllExpanded?i.default.createElement(u.AngleDownIcon,null):i.default.createElement(u.AngleRightIcon,null))))),v&&i.default.createElement(c.ToolbarItem,null,i.default.isValidElement(v)?v:i.default.createElement(p.BulkSelect,r({ouiaId:"BulkSelect"},v))),y&&i.default.createElement(c.ToolbarItem,{className:"ins-c-primary-toolbar__filter"},i.default.isValidElement(y)?y:i.default.createElement(f.ConditionalFilter,r({useMobileLayout:A},y))),E&&i.default.createElement(c.ToolbarItem,null,E)),i.default.isValidElement(h)?h:(h&&h.actions&&h.actions.length>0||_||S)&&i.default.createElement(d.default,r({},h||{},{exportConfig:S,overflowActions:w})),_&&i.default.createElement(c.ToolbarItem,{className:"ins-c-primary-toolbar__sort-by"},i.default.isValidElement(_)?_:i.default.createElement(g.default,r({},_))),O,C&&i.default.createElement(c.ToolbarItem,{className:"ins-c-primary-toolbar__pagination"},i.default.isValidElement(C)?C:i.default.createElement(c.Pagination,r({isCompact:!0,ouiaId:"CompactPagination"},C)))),k&&i.default.isValidElement(k)?i.default.createElement(c.ToolbarContent,null,i.default.createElement(c.ToolbarItem,null,k)):void 0!==(null==k?void 0:k.filters)&&(k.filters.length>0||!0===k.showDeleteButton)&&i.default.createElement(c.ToolbarContent,null,i.default.createElement(c.ToolbarItem,null,i.default.createElement(m.FilterChips,r({},k)))))}},51256:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.flipDirection=void 0;var n=r(a(92950)),l=a(31267),o=a(89624),i=a(30058);function c(e){return e===l.SortByDirection.asc?l.SortByDirection.desc:l.SortByDirection.asc}t.flipDirection=c,t.default=function(e){var t=e.direction,a=void 0===t?l.SortByDirection.asc:t,r=e.onSortChange,u=void 0===r?function(){}:r;return n.default.createElement(o.Button,{variant:"plain",onClick:function(e){return u(e,c(a))}},a===l.SortByDirection.asc?n.default.createElement(i.SortAmountUpIcon,{size:"sm"}):n.default.createElement(i.SortAmountDownIcon,{size:"sm"}))}},92053:(e,t,a)=>{a.r(t),a.d(t,{BulkSelect:()=>r.Z,default:()=>r.Z});var r=a(48799)},2238:(e,t,a)=>{a.r(t),a.d(t,{CheckboxFilter:()=>l.Z,ConditionalFilter:()=>r.Z,GroupFilter:()=>n.Z,RadioFilter:()=>o.Z,TextFilter:()=>i.Z,conditionalFilterType:()=>u.Y,default:()=>r.Z,groupType:()=>c.Z,typeMapper:()=>u.w});var r=a(18213),n=a(21556),l=a(40787),o=a(26154),i=a(68097),c=a(22137),u=a(87123)},25832:(e,t,a)=>{a.r(t),a.d(t,{DownloadButton:()=>r.Z,default:()=>r.Z});var r=a(97138)},23670:(e,t,a)=>{a.r(t),a.d(t,{FilterChips:()=>r.Z,default:()=>r.Z});var r=a(51812)},56638:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(87462),n=a(29439),l=a(45987),o=a(92950),i=a.n(o),c=a(45697),u=a.n(c),s=a(98583),d=["src"],p=function(e){var t=e.src,a=(0,l.Z)(e,d),c=(0,o.useState)(!1),u=(0,n.Z)(c,2),p=u[0],f=u[1];return i().createElement(i().Fragment,null,!p&&i().createElement(s.aN,(0,r.Z)({height:"40px",width:"110px"},a)),i().createElement("img",(0,r.Z)({src:t,"data-testid":"ImageWithPlaceholder",onLoad:function(){return f(!0)},style:{display:p?"initial":"none"}},a)))};p.propTypes={src:u().string.isRequired};const f=p},21298:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var r=a(29439),n=a(92950),l=a.n(n),o=a(89624),i=a(30058),c=a(56638);const u=function(e){return l().createElement(o.Card,{isFlat:!0,className:"marketplace-card"},l().createElement(o.CardTitle,{className:"pf-u-pl-md pf-u-pr-md"},l().createElement(c.Z,{src:e.logo_url,className:"marketplace-card-icon"}),l().createElement("br",null),e.title,l().createElement("br",null),l().createElement(o.Label,{className:"pf-u-mt-sm marketplace-label",icon:l().createElement(i.DatabaseIcon,null)},e.primary_category.display_name)),l().createElement(o.CardBody,{className:"marketplace-card-body pf-u-mb-md pf-u-pl-md pf-u-pr-md",isFilled:!0},e.description_short),l().createElement(o.CardFooter,{className:"pf-u-pl-md pf-u-pr-md pf-u-pb-md"},l().createElement(o.Button,{variant:"link",isInline:!0,icon:l().createElement(i.ExternalLinkAltIcon,null),iconPosition:"right",component:"a",href:e.product_page_url,rel:"noopener noreferrer",target:"_blank"},"Add"," ")))};var s=a(15861),d=a(87757),p=a.n(d),f=a(48815),m="/api/marketplace-gateway/v1",g=function(){var e=(0,s.Z)(p().mark((function e(){var t,a=arguments;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{perPage:10,page:1},e.abrupt("return",f.be.get("".concat(m,"/unstable"),{params:{limit:t.perPage,offset:(t.page-1)*t.perPage}}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=(0,s.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.be.get("".concat(m,"/categories")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=a(45697),y=a.n(v),E=a(87462),h=a(4942),_=a(90111),C=a.n(_);const k=function(){return l().createElement(o.Card,{isFlat:!0,className:"marketplace-card"},l().createElement(o.CardTitle,null,l().createElement(o.Skeleton,{role:"progressbar"})),l().createElement(o.CardBody,null,l().createElement(o.Skeleton,{role:"progressbar"})),l().createElement(o.CardFooter,null,l().createElement(o.Skeleton,{role:"progressbar"})))};function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){(0,h.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){return{page:1,perPage:10,itemCount:(null==e?void 0:e.length)||0,filters:{type:["database"]},categories:null,isLoading:!0,data:e,loaded:0}},A=function(e,t){var a=t.type,r=t.payload,n=t.meta;switch(a){case"SET_PAGE":return S(S({},e),{},{page:r});case"SET_PER_PAGE":return S(S({},e),{},{page:1,perPage:r});case"LOAD_CATEGORIES":return S(S({},e),{},{categories:r,isLoading:!1});case"SET_LOADING_DATA":return S(S({},e),{},{loaded:e.loaded+1});case"LOAD_DATA":return S(S({},e),{},{loaded:Math.max(e.loaded-1,0),data:r,itemCount:n.count})}},D=function(e){return{database:"Database"}[e]||e},w=function(e){var t,a=e.data,c=e.isOpen,s=e.onClose,d=(0,n.useReducer)(A,a,P),p=(0,r.Z)(d,2),f=p[0],m=p[1],v=f.loaded>0;return(0,n.useEffect)((function(){c&&b().then((function(e){var t=e.data;return m({type:"LOAD_CATEGORIES",payload:t})}))}),[c]),(0,n.useEffect)((function(){c&&(m({type:"SET_LOADING_DATA"}),g({perPage:f.perPage,page:f.page}).then((function(e){var t=e.data,a=e.meta;return m({type:"LOAD_DATA",payload:t,meta:a})})))}),[f.page,f.perPage]),l().createElement(o.Modal,{className:"sources",onClose:s,isOpen:c,title:"Browse catalog",description:l().createElement("span",null,"A curated selection of offerings available for purchase from"," ",l().createElement("a",{href:"https://sandbox.marketplace.redhat.com",target:"_blank",rel:"noopener noreferrer"},"Red Hat Marketplace ",l().createElement(i.ExternalLinkAltIcon,null))),variant:"large"},f.isLoading&&l().createElement("div",{className:"pf-u-mb-md marketplace-flex"},l().createElement(k,null),l().createElement(k,null)),!f.isLoading&&l().createElement(l().Fragment,null,l().createElement(C(),{useMobileLayout:!0,className:"marketplace-modal-toolbar",pagination:{itemCount:f.itemCount,page:f.page,perPage:f.perPage,onSetPage:function(e,t){return m({type:"SET_PAGE",payload:t})},onPerPageSelect:function(e,t){return m({type:"SET_PER_PAGE",payload:t})},"data-testid":"pagination"},filterConfig:{items:[{label:"Type",placeholder:"Filter by product type",type:"checkbox",filterValues:{value:["database"],items:f.categories.map((function(e){return{label:e.display_name,value:e.page_name,isDisabled:!0}}))}}]},activeFiltersConfig:{showDeleteButton:!1,filters:(t=f.filters,Object.keys(t).map((function(e){var a;return t[e]&&0!==(null===(a=t[e])||void 0===a?void 0:a.length)?function(e,t){return{type:{category:"Type",chips:t.map((function(e){return{name:D(e)}}))}}[e]||{category:e,chips:t.map((function(e){return{name:e}}))}}(e,t[e]):null})).filter(Boolean))}}),l().createElement("div",{className:"pf-u-mb-md marketplace-flex"},!v&&a.map((function(e){return l().createElement(u,(0,E.Z)({key:e.id},e))})),v&&l().createElement(l().Fragment,null,l().createElement(k,null),l().createElement(k,null)))))};w.propTypes={data:y().array,isOpen:y().bool,onClose:y().func};const T=w;var I=function(e){var t=e.data,a=(0,n.useState)(!1),i=(0,r.Z)(a,2),c=i[0],u=i[1];return l().createElement(l().Fragment,null,l().createElement(T,{onClose:function(){return u(!1)},data:t,isOpen:c}),l().createElement(o.Card,{isFlat:!0,className:"marketplace-card marketplace-seemore-card"},l().createElement(o.CardBody,{isFilled:!0,className:"pf-u-pl-md pf-u-pr-md card-text"},"Not what you’re looking for? Browse the catalog to see more offerings from Red Hat Marketplace."),l().createElement(o.CardFooter,{className:"pf-u-pl-md pf-u-pr-md pf-u-pb-md"},l().createElement(o.Button,{variant:"primary",onClick:function(){return u(!0)}},"See more databases"))))};I.propTypes={data:y().array};const N=I,x=function(){var e=(0,n.useState)(),t=(0,r.Z)(e,2),a=t[0],i=t[1];return(0,n.useEffect)((function(){g().then((function(e){var t=e.data;return i(t)}))}),[]),a?l().createElement("div",{className:"sources"},l().createElement(o.Title,{headingLevel:"h4",size:"xl",className:"pf-u-mb-md"},"Recommended services"),l().createElement("div",{className:"pf-u-mb-md marketplace-flex"},l().createElement(u,a.find((function(e){return"mongodb-enterprise-advanced"===(null==e?void 0:e.product_page_name)}))||a[0]),l().createElement(N,{data:a}))):l().createElement("div",{className:"pf-u-mb-md marketplace-flex"},l().createElement(k,null),l().createElement(k,null))}},62354:(e,t,a)=>{a.r(t)}}]);
//# sourceMappingURL=../sourcemaps/1298.6f1dac714f92fe1fdef6de1120645aa2.js.map