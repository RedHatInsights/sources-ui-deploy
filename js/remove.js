(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{349:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Stack=void 0;var n=c(a(3)),r=function(e){if(e&&e.__esModule)return e;var t=o();if(t&&t.has(e))return t.get(e);var a={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}}a.default=e,t&&t.set(e,a);return a}(a(0)),i=c(a(411)),l=a(5),s=a(134);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=function(e){var t=e.gutter,a=void 0===t?null:t,n=e.className,o=void 0===n?"":n,c=e.children,p=void 0===c?null:c,m=e.component,f=void 0===m?"div":m,g=d(e,["gutter","className","children","component"]),v=f;return r.createElement(v,u({},g,{className:(0,l.css)(i.default.stack,a&&(0,s.getGutterModifier)(i.default,a,i.default.modifiers.gutter),o)}),p)};t.Stack=p,p.propTypes={gutter:n.default.oneOf(["sm","md","lg"]),children:n.default.node,className:n.default.string,component:n.default.node}},409:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(3),l=a.n(i),s=a(30),o=a(11),c=a(26),u=a(44),d=a(78),p=a(319),m=a(320),f=a(290),g=function(e){var t=e.setApplicationToRemove,a=e.breakpoints,n=e.namePrefix,i=Object(s.useSelector)((function(e){return e.sources.appTypes})),l=Object(f.a)(),g=l.applications.map((function(e){var t=e.application_type_id,a=i.find((function(e){return e.id===t}));return a?a.display_name:void 0}));return l.applications.filter((function(e){return!e.isDeleting})).map((function(e){var t=i.find((function(t){return t.id===e.application_type_id}));if(t)return{display_name:t.display_name,id:e.id,dependent_applications:t.dependent_applications}})).sort((function(e,t){return e.display_name.localeCompare(t.display_name)})).map((function(e){var i=e.display_name,l=e.id,s=e.dependent_applications;return r.a.createElement(u.TextContent,{key:l},r.a.createElement(p.Grid,null,r.a.createElement(m.GridItem,{md:a.display_name||4},r.a.createElement(c.Text,{component:c.TextVariants.p,style:{marginBottom:0}},n,i)),r.a.createElement(m.GridItem,{md:a.remove||8,className:"ins-c-sources__remove-app"},r.a.createElement(d.Button,{variant:d.ButtonVariant.link,isInline:!0,onClick:function(){return t({id:l,display_name:i,dependent_applications:s,sourceAppsNames:g})}},r.a.createElement(o.a,{id:"sources.remove",defaultMessage:"Remove"})))))}))};g.propTypes={setApplicationToRemove:l.a.func.isRequired,breakpoints:l.a.shape({display_name:l.a.number,remove:l.a.number}),namePrefix:l.a.node},g.defaultProps={breakpoints:{}},t.a=g},410:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(3),l=a.n(i),s=a(30),o=a(280),c=a(11),u=a(26),d=a(44),p=a(78),m=a(336),f=a(335),g=a(349),v=a(347),y=a(85),b=a.n(y),E=a(45),k=a(290),h=function(e){var t=e.app,a=e.onCancel,n=Object(o.a)(),i=Object(s.useSelector)((function(e){return e.sources.appTypes})),l=Object(k.a)(),y=Object(s.useDispatch)(),h=t.dependent_applications.map((function(e){var a=i.find((function(t){return t.name===e}));return a&&t.sourceAppsNames.includes(a.display_name)?a.display_name:void 0})).filter((function(e){return e}));return r.a.createElement(v.Modal,{className:"ins-c-sources__dialog--warning",title:"Remove ".concat(t.display_name," application"),isOpen:!0,isSmall:!0,onClose:a,isFooterLeftAligned:!0,actions:[r.a.createElement(p.Button,{id:"deleteSubmit",key:"submit",variant:"danger",type:"button",onClick:function(){var e=n.formatMessage({id:"sources.removeAppWarning",defaultMessage:"{ name } was removed from this source."},{name:t.display_name}),r=n.formatMessage({id:"sources.removeAppError",defaultMessage:"Removing of { name } application from this source was unsuccessful."},{name:t.display_name});return a(),y(Object(E.j)(t.id,l.id,e,r))}},r.a.createElement(c.a,{id:"sources.remove",defaultMessage:"Remove"})),r.a.createElement(p.Button,{id:"deleteCancel",key:"cancel",variant:"link",type:"button",onClick:a},r.a.createElement(c.a,{id:"sources.cancel",defaultMessage:"Cancel"}))]},r.a.createElement(m.Split,{gutter:"md"},r.a.createElement(f.SplitItem,null,r.a.createElement(b.a,{size:"xl",className:"ins-m-alert ins-c-source__delete-icon"})),r.a.createElement(f.SplitItem,{isFilled:!0},r.a.createElement(g.Stack,{gutter:"md"},r.a.createElement(d.TextContent,null,r.a.createElement(u.Text,{component:u.TextVariants.p},r.a.createElement(c.a,{id:"sources.deleteAppWarning",defaultMessage:"Are you sure to remove { appName } from this source?",values:{appName:t.display_name}})),h.length>0&&r.a.createElement(u.Text,{component:u.TextVariants.p},r.a.createElement(c.a,{id:"sources.deleteAppDetails",defaultMessage:"This change will affect these applications: { apps }.",values:{apps:h}})))))))};h.propTypes={app:l.a.shape({id:l.a.string.isRequired,display_name:l.a.string.isRequired,dependent_applications:l.a.arrayOf(l.a.string),sourceAppsNames:l.a.arrayOf(l.a.string)}).isRequired,onCancel:l.a.func.isRequired},t.a=h},411:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a(412),t.default={stack:"pf-l-stack",stackItem:"pf-l-stack__item",modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"}}},412:function(e,t,a){var n=a(12),r=a(413);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},l=(n(r,i),r.locals?r.locals:{});e.exports=l},413:function(e,t,a){(t=a(10)(!1)).push([e.i,".pf-l-stack{--pf-l-stack--m-gutter--MarginBottom: var(--pf-global--gutter);--pf-l-stack--m-gutter--md--MarginBottom: var(--pf-global--gutter--md);display:flex;flex-direction:column;height:100%}@media screen and (max-width: 768px){.pf-l-stack{--pf-l-stack--m-gutter--MarginBottom: var(--pf-l-stack--m-gutter--md--MarginBottom)}}.pf-l-stack__item.pf-m-fill{flex-grow:1}.pf-l-stack.pf-m-gutter>*:not(:last-child){margin-bottom:var(--pf-l-stack--m-gutter--MarginBottom)}\n",""]),e.exports=t},703:function(e,t,a){"use strict";a.r(t);var n=a(37),r=a.n(n),i=a(0),l=a.n(i),s=a(29),o=a(30),c=a(26),u=a(44),d=a(78),p=a(336),m=a(335),f=a(349),g=a(347),v=a(375),y=a(462),b=a(461),E=a(45),k=a(85),h=a.n(k),_=a(280),x=a(11),M=a(409),O=a(410),T=a(290),C=a(79);t.default=function(){var e=Object(s.f)().push,t=Object(i.useState)(!1),a=r()(t,2),n=a[0],k=a[1],j=Object(i.useState)({}),w=r()(j,2),A=w[0],S=w[1],B=Object(_.a)(),D=Object(T.a)(),I=Object(o.useDispatch)(),N=function(){return e(C.c.sources.path)},P=D.applications.some((function(e){return!e.isDeleting})),R=D.applications.length>0?[l.a.createElement(d.Button,{id:"deleteCancel",key:"cancel",variant:"link",type:"button",onClick:N},l.a.createElement(x.a,{id:"sources.close",defaultMessage:"Close"}))]:[l.a.createElement(d.Button,{id:"deleteSubmit",key:"submit",variant:"danger",type:"button",onClick:function(){N(),I(Object(E.l)(D.id,B.formatMessage({id:"sources.notificationDeleteMessage",defaultMessage:"{title} was deleted successfully."},{title:D.name})))},isDisabled:!n},l.a.createElement(x.a,{id:"sources.deleteConfirm",defaultMessage:"Delete this source and its data"})),l.a.createElement(d.Button,{id:"deleteCancel",key:"cancel",variant:"link",type:"button",onClick:N},l.a.createElement(x.a,{id:"sources.deleteCancel",defaultMessage:"Do not delete this source"}))],V=D.applications.length>0?l.a.createElement(l.a.Fragment,null,l.a.createElement(c.Text,{component:c.TextVariants.p},l.a.createElement(x.a,{id:"sources.deleteTextBodyWithApp",defaultMessage:"This action cannot be enacted until all assigned applications have been removed from this source."})),l.a.createElement(d.Button,{variant:"link",isInline:!0,onClick:function(t){return e(Object(C.b)(C.c.sourceManageApps.path,D.id))}},l.a.createElement(c.Text,{component:c.TextVariants.p,style:{marginBottom:0}},l.a.createElement(x.a,{id:"sources.connectedApps",defaultMessage:"Connected applications:"}))),P?l.a.createElement(M.a,{breakpoints:{display_name:8,remove:4},setApplicationToRemove:S,namePrefix:"- "}):l.a.createElement(c.Text,{component:c.TextVariants.p},l.a.createElement(x.a,{id:"sources.connectedApps",defaultMessage:"Connected applications are being removed."}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(c.Text,{component:c.TextVariants.p},l.a.createElement(x.a,{id:"sources.deleteTextBody",defaultMessage:'Are you sure that you want to delete "{ name }"?',values:{name:D.name}})),l.a.createElement(c.Text,{component:c.TextVariants.p},l.a.createElement(x.a,{id:"sources.delete-text-body-2",defaultMessage:"Deleting this source will permanently delete:"})),l.a.createElement(y.TextList,null,l.a.createElement(b.TextListItem,null,l.a.createElement(x.a,{id:"sources.deleteTextBody3",defaultMessage:"All data collected"})),l.a.createElement(b.TextListItem,null,l.a.createElement(x.a,{id:"sources.deleteTextBody4",defaultMessage:"Any and all historical data"}))),l.a.createElement(v.Checkbox,{label:B.formatMessage({id:"sources.deleteCheckboxTitle",defaultMessage:"I acknowledge that this action cannot be undone."}),onChange:function(){return k((function(e){return!e}))},"aria-label":B.formatMessage({id:"sources.deleteCheckboxTitle",defaultMessage:"I acknowledge that this action cannot be undone."}),id:"acknowledgeDelete",name:"acknowledgeDelete",isChecked:n}));return l.a.createElement(g.Modal,{className:"ins-c-sources__dialog--warning",title:B.formatMessage({id:"sources.deleteTitle",defaultMessage:"Delete {title}"},{title:D.name}),isOpen:!0,isSmall:!0,onClose:N,actions:R,isFooterLeftAligned:!0},A.id&&l.a.createElement(O.a,{app:A,onCancel:function(){return S({})}}),l.a.createElement(p.Split,{gutter:"md"},l.a.createElement(m.SplitItem,null,l.a.createElement(h.a,{size:"xl",className:"ins-m-alert ins-c-source__delete-icon"})),l.a.createElement(m.SplitItem,{isFilled:!0},l.a.createElement(f.Stack,{gutter:"md"},l.a.createElement(u.TextContent,null,V)))))}}}]);
//# sourceMappingURL=../sourcemaps/remove.js.map