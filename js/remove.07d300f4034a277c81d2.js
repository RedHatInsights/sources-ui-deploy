(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[8490],{2453:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>M});var a=n(28481),s=n(80150),l=n.n(s),o=n(45697),i=n.n(o),c=n(334),r=n(557),u=n(86896),d=n(4092),p=n(69957),m=n(39324),f=n(66187),h=n(11405),g=n(44012),v=n(75087),E=function(e,t){var n;return(null===(n=t.find((function(t){return t.id===e})))||void 0===n?void 0:n.display_name)||"Unknown"},k=[v.OH,v.N9],b=function(e,t){var n=t.name,a=t.count;return{noApps:l().createElement(g.Z,{id:"sources.deleteTextBodyNoApps",defaultMessage:"Removing { name } will permanently delete all data collected.",values:{name:l().createElement("b",null,n)}}),withApps:l().createElement(g.Z,{id:"sources.deleteTextBodyWithApps",defaultMessage:"Removing { name } detaches the following\n        connected {count, plural, one {application} other {applications}} from this source:",values:{name:l().createElement("b",null,n),count:a}}),withAppsExtendedText:l().createElement(g.Z,{id:"sources.deleteTextBodyWithAppsExtended",defaultMessage:"Removing { name } permanently deletes all collected data and detaches the following\n    connected {count, plural, one {application} other {applications}}:",values:{name:l().createElement("b",null,n),count:a}})}[e]},y=function(e){var t=e.applications,n=(0,r.useSelector)((function(e){return e.sources}),r.shallowEqual).appTypes;return 1===t.length?l().createElement(d.Text,{variant:d.TextVariants.p},E(t[0].application_type_id,n)):l().createElement(d.TextList,null,t.map((function(e){var t=e.id,a=e.application_type_id;return l().createElement(d.TextListItem,{key:t},E(a,n))})))};y.propTypes={applications:i().array};const T=y;var x=function(e){var t,n=e.backPath,o=(0,c.useHistory)().push,i=(0,s.useState)(!1),g=(0,a.Z)(i,2),v=g[0],E=g[1],y=(0,u.Z)(),x=(0,f.L)(),M=(0,r.useDispatch)(),w=(0,r.useSelector)((function(e){return e.sources}),r.shallowEqual).sourceTypes,C=function(){return o(n)},_=[l().createElement(d.Button,{id:"deleteSubmit",key:"submit",variant:"danger",type:"button",onClick:function(){o(h._j.sources.path),M((0,m.wZ)(x.id,y.formatMessage({id:"sources.notificationDeleteMessage",defaultMessage:"{title} was deleted successfully."},{title:x.name})))},isDisabled:!v},y.formatMessage({id:"sources.deleteConfirm",defaultMessage:"Remove source and its data"})),l().createElement(d.Button,{id:"deleteCancel",key:"cancel",variant:"link",type:"button",onClick:C},y.formatMessage({id:"sources.deleteCancel",defaultMessage:"Cancel"}))],A=null===(t=w.find((function(e){return e.id===x.source_type_id})))||void 0===t?void 0:t.name,Z=x.applications.filter((function(e){return!e.isDeleting})),D=l().createElement(d.TextContent,null,l().createElement(d.Text,{component:d.TextVariants.p},0===Z.length&&b("noApps",{name:x.name}),Z.length>0&&k.includes(A)&&b("withApps",{name:x.name,count:Z.length}),Z.length>0&&!k.includes(A)&&b("withAppsExtendedText",{name:x.name,count:Z.length})),Z.length>0&&l().createElement(T,{applications:Z}),l().createElement(d.Checkbox,{label:y.formatMessage({id:"sources.deleteCheckboxTitle",defaultMessage:"I acknowledge that this action cannot be undone."}),onChange:function(){return E((function(e){return!e}))},"aria-label":y.formatMessage({id:"sources.deleteCheckboxTitle",defaultMessage:"I acknowledge that this action cannot be undone."}),id:"acknowledgeDelete",name:"acknowledgeDelete",isChecked:v}));return l().createElement(d.Modal,{className:"sources","aria-label":y.formatMessage({id:"sources.deleteTitle",defaultMessage:"Remove source?"}),header:l().createElement(d.Title,{headingLevel:"h1",size:"2xl",className:"sources"},l().createElement(p.ZP,{size:"sm",className:"ins-m-alert ins-c-source__delete-icon pf-u-mr-sm"}),y.formatMessage({id:"sources.deleteTitle",defaultMessage:"Remove source?"})),isOpen:!0,variant:"small",onClose:C,actions:_},D)};x.propTypes={backPath:i().string},x.defaultProps={backPath:h._j.sources.path};const M=x}}]);
//# sourceMappingURL=remove.07d300f4034a277c81d2.js.map