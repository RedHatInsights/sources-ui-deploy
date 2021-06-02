(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[662],{80254:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(22122),s=r(81253),o=r(92950),u=r.n(o),i=r(334),a=r(45697),c=r.n(a),d=r(60566),l=r(45237),f=r(86896),p=r(98495),m=r(58185),v=r(60076);const g=function(){var e=(0,f.Z)(),t=(0,m.E)(),r=(0,l.useDispatch)();return(0,o.useEffect)((function(){if(!1===t){var n=e.formatMessage({id:"sources.insufficietnPerms",defaultMessage:"Insufficient permissions"}),s=e.formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."});r((0,p.Hz)({title:n,variant:"danger",description:s}))}}),[t]),!1===t?u().createElement(i.Redirect,{to:v._j.sources.path}):null};var h=r(60409);const E=function(){var e=(0,f.Z)(),t=(0,d.L)(),r=(0,l.useDispatch)();return(0,o.useEffect)((function(){t.paused_at&&r((0,p.Hz)({title:e.formatMessage({id:"sources.sourcePausedRedirect",defaultMessage:"Source is paused"}),variant:"danger",description:e.formatMessage({id:"sources.sourcePausedRedirectDescription",defaultMessage:"You cannot perform this action on a paused source."})}))}),[t.paused_at]),t.paused_at?u().createElement(i.Redirect,{to:(0,v.yS)(v._j.sourcesDetail.path,t.id)}):null};var P=function(e){var t=e.route,r=e.children;return t.redirectNoId&&(0,d.L)()||!t.redirectNoId?u().createElement(u().Fragment,null,t.noPaused&&u().createElement(E,null),t.writeAccess&&u().createElement(g,null),r):u().createElement(h.Z,null)};P.propTypes={route:c().shape({path:c().string.isRequired,redirectNoId:c().bool,writeAccess:c().bool,noPaused:c().bool}).isRequired,children:c().node.isRequired};var w=function(e){var t=e.route,r=e.componentProps,o=e.Component,a=(0,s.Z)(e,["route","componentProps","Component"]);return u().createElement(i.Route,(0,n.Z)({},a,{path:t.path}),u().createElement(P,{route:t},u().createElement(o,r)))};w.propTypes={route:c().shape({path:c().string.isRequired,redirectNoId:c().bool,writeAccess:c().bool,noPaused:c().bool}).isRequired,componentProps:c().any,Component:c().oneOfType([c().func,c().object]).isRequired};const y=w},60409:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(28481),s=r(92950),o=r.n(s),u=r(45237),i=r(334),a=r(86896),c=r(98495),d=r(79829),l=r(59824),f=r(60076),p=r(60566);const m=function(){var e=(0,i.useParams)().id,t=(0,a.Z)(),r=(0,p.L)(),m=(0,l.W)(),v=(0,u.useSelector)((function(e){return e.sources}),u.shallowEqual),g=v.appTypesLoaded,h=v.sourceTypesLoaded,E=(0,u.useDispatch)(),P=(0,s.useState)(!1),w=(0,n.Z)(P,2),y=w[0],M=w[1];return(0,s.useEffect)((function(){m&&g&&h&&(0,d.oI)(e).then((function(e){var t=(0,n.Z)(e.sources,1)[0];return E((0,c._B)(t)),t})).then((function(r){r||E((0,c.Hz)({title:t.formatMessage({id:"sources.sourceNotFoundTitle",defaultMessage:"Requested source was not found"}),variant:"danger",description:t.formatMessage({id:"sources.sourceNotFoundTitleDescription",defaultMessage:"Source with { id } was not found. Try it again later."},{id:e})})),M(!0)}))}),[m,g,h]),y&&!r?o().createElement(i.Redirect,{to:f._j.sources.path}):null}},58185:(e,t,r)=>{"use strict";r.d(t,{E:()=>s});var n=r(45237),s=function(){var e=(0,n.useSelector)((function(e){var t=e.user;return{orgAdmin:null==t?void 0:t.isOrgAdmin,writePermissions:null==t?void 0:t.writePermissions}})),t=e.orgAdmin,r=e.writePermissions;if("boolean"==typeof t||"boolean"==typeof r)return!!t||!!r}},59824:(e,t,r)=>{"use strict";r.d(t,{W:()=>s});var n=r(45237),s=function(){return(0,n.useSelector)((function(e){return e.sources.loaded}))<=0}},60566:(e,t,r)=>{"use strict";r.d(t,{L:()=>o});var n=r(45237),s=r(334),o=function(){var e=(0,s.useParams)().id;return(0,n.useSelector)((function(t){return t.sources.entities.find((function(t){return t.id===e}))}))}},64673:(e,t,r)=>{"use strict";r.d(t,{W:()=>s,Z:()=>o});var n=r(84866),s=function(e,t){return function(r){return r.supported_source_types.find((function(r){var s,o;return t===n.JL?((null===(s=e.find((function(e){var t=e.name;return r===t})))||void 0===s?void 0:s.vendor)||n.B0)!==n.B0:(null===(o=e.find((function(e){var t=e.name;return r===t})))||void 0===o?void 0:o.vendor)===n.B0}))}};const o=function(e){return e.name!==n.M$}}}]);
//# sourceMappingURL=../sourcemaps/662.94ff77f83143a6794819.js.map