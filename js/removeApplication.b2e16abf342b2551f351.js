"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[3744],{76902:(e,a,n)=>{n.r(a),n.d(a,{default:()=>m});var t=n(92950),s=n.n(t),i=n(42396),l=n(86896),o=n(86235),r=n(56976),c=n(69957),p=n(60566),u=n(15185),d=n(60076);const m=function(){var e,a=(0,l.Z)(),n=(0,o.useHistory)().push,t=(0,o.useParams)().app_id,m=(0,p.L)(),f=(0,i.v9)((function(e){return e.sources.appTypes})),v=(0,i.I0)(),g=null===(e=m.applications)||void 0===e?void 0:e.find((function(e){return e.id===t}));if(!g)return s().createElement(o.Redirect,{to:(0,d.yS)(d._j.sourcesDetail.path,m.id)});var _=f.find((function(e){return e.id===(null==g?void 0:g.application_type_id)})),y={id:t,display_name:null==_?void 0:_.display_name,dependent_applications:null==_?void 0:_.dependent_applications,sourceAppsNames:m.applications.map((function(e){var a,n=e.application_type_id;return null===(a=f.find((function(e){return e.id===n})))||void 0===a?void 0:a.display_name}))},M=function(){return n((0,d.yS)(d._j.sourcesDetail.path,m.id))},h=null==_?void 0:_.dependent_applications.map((function(e){var a,n=f.find((function(a){return a.name===e}));return(null==m||null===(a=m.applications)||void 0===a?void 0:a.find((function(e){return e.application_type_id===n.id})))&&(null==n?void 0:n.display_name)})).filter(Boolean);return s().createElement(r.Modal,{className:"sources",isOpen:!0,onClose:M,variant:"small","aria-label":a.formatMessage({id:"sources.deleteAppTitle",defaultMessage:"Remove application?"}),header:s().createElement(r.Title,{headingLevel:"h1",size:"2xl",className:"sources"},s().createElement(c.ZP,{size:"sm",className:"ins-m-alert src-c-delete-icon pf-u-mr-sm"}),a.formatMessage({id:"sources.deleteAppTitle",defaultMessage:"Remove application?"})),actions:[s().createElement(r.Button,{id:"deleteSubmit",key:"submit",variant:"danger",type:"button",onClick:function(){return(0,u.Z)(y,a,M,v,m)}},a.formatMessage({id:"sources.remove",defaultMessage:"Remove"})),s().createElement(r.Button,{id:"deleteCancel",key:"cancel",variant:"link",type:"button",onClick:M},a.formatMessage({id:"sources.cancel",defaultMessage:"Cancel"}))]},s().createElement(r.TextContent,null,s().createElement(r.Text,{component:r.TextVariants.p},a.formatMessage({id:"sources.deleteAppWarning",defaultMessage:"{ appName } will be disconnected from this source."},{appName:s().createElement("b",{key:"b"},y.display_name)})),h.length>0&&s().createElement(r.Text,{component:r.TextVariants.p},a.formatMessage({id:"sources.deleteAppDetails",defaultMessage:"This change will affect these applications: { apps }."},{apps:h}))))}},15185:(e,a,n)=>{n.d(a,{Z:()=>s});var t=n(11146);const s=function(e,a,n,s,i){var l=a.formatMessage({id:"sources.removeAppWarning",defaultMessage:"{ name } was removed from this source."},{name:e.display_name}),o=a.formatMessage({id:"sources.removeAppError",defaultMessage:"Removing of { name } application from this source was unsuccessful."},{name:e.display_name});return n&&n(),s((0,t.Yn)(e.id,i.id,l,o))}}}]);
//# sourceMappingURL=../sourcemaps/removeApplication.b5c304358b6b8ab969614bf2f537144a.js.map