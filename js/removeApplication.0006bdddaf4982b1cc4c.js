(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[744],{76902:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var n=a(92950),i=a.n(n),s=a(45237),l=a(86896),o=a(334),r=a(30586),c=a(69957),p=a(60566),u=a(15185),d=a(60076);const m=function(){var e,t=(0,l.Z)(),a=(0,o.useHistory)().push,n=(0,o.useParams)().app_id,m=(0,p.L)(),f=(0,s.useSelector)((function(e){return e.sources.appTypes})),v=(0,s.useDispatch)(),_=null===(e=m.applications)||void 0===e?void 0:e.find((function(e){return e.id===n}));if(!_)return i().createElement(o.Redirect,{to:(0,d.yS)(d._j.sourcesDetail.path,m.id)});var g=f.find((function(e){return e.id===(null==_?void 0:_.application_type_id)})),y={id:n,display_name:null==g?void 0:g.display_name,dependent_applications:null==g?void 0:g.dependent_applications,sourceAppsNames:m.applications.map((function(e){var t,a=e.application_type_id;return null===(t=f.find((function(e){return e.id===a})))||void 0===t?void 0:t.display_name}))},h=function(){return a((0,d.yS)(d._j.sourcesDetail.path,m.id))},M=null==g?void 0:g.dependent_applications.map((function(e){var t,a=f.find((function(t){return t.name===e}));return(null==m||null===(t=m.applications)||void 0===t?void 0:t.find((function(e){return e.application_type_id===a.id})))&&(null==a?void 0:a.display_name)})).filter(Boolean);return i().createElement(r.Modal,{className:"sources",isOpen:!0,onClose:h,variant:"small","aria-label":t.formatMessage({id:"sources.deleteAppTitle",defaultMessage:"Remove application?"}),header:i().createElement(r.Title,{headingLevel:"h1",size:"2xl",className:"sources"},i().createElement(c.ZP,{size:"sm",className:"ins-m-alert ins-c-source__delete-icon pf-u-mr-sm"}),t.formatMessage({id:"sources.deleteAppTitle",defaultMessage:"Remove application?"})),actions:[i().createElement(r.Button,{id:"deleteSubmit",key:"submit",variant:"danger",type:"button",onClick:function(){return(0,u.Z)(y,t,h,v,m)}},t.formatMessage({id:"sources.remove",defaultMessage:"Remove"})),i().createElement(r.Button,{id:"deleteCancel",key:"cancel",variant:"link",type:"button",onClick:h},t.formatMessage({id:"sources.cancel",defaultMessage:"Cancel"}))]},i().createElement(r.TextContent,null,i().createElement(r.Text,{component:r.TextVariants.p},t.formatMessage({id:"sources.deleteAppWarning",defaultMessage:"{ appName } will be disconnected from this source."},{appName:i().createElement("b",{key:"b"},y.display_name)})),M.length>0&&i().createElement(r.Text,{component:r.TextVariants.p},t.formatMessage({id:"sources.deleteAppDetails",defaultMessage:"This change will affect these applications: { apps }."},{apps:M}))))}}}]);
//# sourceMappingURL=../sourcemaps/removeApplication.065ebd4274e004c32ca4.js.map