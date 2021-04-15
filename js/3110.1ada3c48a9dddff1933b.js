(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[3110],{10743:(e,r,t)=>{"use strict";t.d(r,{Z:()=>y});var n=t(22122),o=t(81253),s=t(92950),i=t.n(s),u=t(334),c=t(45697),a=t.n(c),d=t(557),f=t(86896),l=t(98495),p=t(58185),m=t(60076);const v=function(){var e=(0,f.Z)(),r=(0,p.E)(),t=(0,d.useDispatch)();return(0,s.useEffect)((function(){if(!1===r){var n=e.formatMessage({id:"sources.insufficietnPerms",defaultMessage:"Insufficient permissions"}),o=e.formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."});t((0,l.Hz)({title:n,variant:"danger",description:o}))}}),[r]),!1===r?i().createElement(u.Redirect,{to:m._j.sources.path}):null};var h=t(60566),g=t(60409),w=function(e){var r=e.route,t=e.children;return r.redirectNoId&&(0,h.L)()||!r.redirectNoId?i().createElement(i().Fragment,null,r.writeAccess&&i().createElement(v,null),t):i().createElement(g.Z,null)};w.propTypes={route:a().shape({path:a().string.isRequired,redirectNoId:a().bool,writeAccess:a().bool}).isRequired,children:a().node.isRequired};var E=function(e){var r=e.route,t=e.componentProps,s=e.Component,c=(0,o.Z)(e,["route","componentProps","Component"]);return i().createElement(u.Route,(0,n.Z)({},c,{path:r.path}),i().createElement(w,{route:r},i().createElement(s,t)))};E.propTypes={route:a().shape({path:a().string.isRequired,redirectNoId:a().bool,writeAccess:a().bool}).isRequired,componentProps:a().any,Component:a().oneOfType([a().func,a().object]).isRequired};const y=E},60409:(e,r,t)=>{"use strict";t.d(r,{Z:()=>m});var n=t(28481),o=t(92950),s=t.n(o),i=t(557),u=t(334),c=t(86896),a=t(98495),d=t(79829),f=t(59824),l=t(60076),p=t(60566);const m=function(){var e=(0,u.useParams)().id,r=(0,c.Z)(),t=(0,p.L)(),m=(0,f.W)(),v=(0,i.useSelector)((function(e){return e.sources}),i.shallowEqual),h=v.appTypesLoaded,g=v.sourceTypesLoaded,w=(0,i.useDispatch)(),E=(0,o.useState)(!1),y=(0,n.Z)(E,2),b=y[0],R=y[1];return(0,o.useEffect)((function(){m&&h&&g&&(0,d.oI)(e).then((function(e){var r=(0,n.Z)(e.sources,1)[0];return w((0,a._B)(r)),r})).then((function(t){t||w((0,a.Hz)({title:r.formatMessage({id:"sources.sourceNotFoundTitle",defaultMessage:"Requested source was not found"}),variant:"danger",description:r.formatMessage({id:"sources.sourceNotFoundTitleDescription",defaultMessage:"Source with { id } was not found. Try it again later."},{id:e})})),R(!0)}))}),[m,h,g]),b&&!t?s().createElement(u.Redirect,{to:l._j.sources.path}):null}},58185:(e,r,t)=>{"use strict";t.d(r,{E:()=>o});var n=t(557),o=function(){var e=(0,n.useSelector)((function(e){var r=e.user;return{orgAdmin:null==r?void 0:r.isOrgAdmin,writePermissions:null==r?void 0:r.writePermissions}})),r=e.orgAdmin,t=e.writePermissions;if("boolean"==typeof r||"boolean"==typeof t)return!!r||!!t}},59824:(e,r,t)=>{"use strict";t.d(r,{W:()=>o});var n=t(557),o=function(){return(0,n.useSelector)((function(e){return e.sources.loaded}))<=0}},60566:(e,r,t)=>{"use strict";t.d(r,{L:()=>s});var n=t(557),o=t(334),s=function(){var e=(0,o.useParams)().id;return(0,n.useSelector)((function(r){return r.sources.entities.find((function(r){return r.id===e}))}))}},64673:(e,r,t)=>{"use strict";t.d(r,{W:()=>o,Z:()=>s});var n=t(84866),o=function(e,r){return function(t){return t.supported_source_types.find((function(t){var o,s;return r===n.JL?((null===(o=e.find((function(e){var r=e.name;return t===r})))||void 0===o?void 0:o.vendor)||n.B0)!==n.B0:(null===(s=e.find((function(e){var r=e.name;return t===r})))||void 0===s?void 0:s.vendor)===n.B0}))}};const s=function(e){return e.name!==n.M$}}}]);