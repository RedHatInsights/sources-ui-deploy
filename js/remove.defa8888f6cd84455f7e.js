(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[8490],{2453:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var a=n(63038),s=n.n(a),l=n(80150),o=n.n(l),c=n(45697),i=n.n(c),r=n(334),u=n(61084),d=n(86896),p=n(68340),m=n(68774),f=n(47173),h=n(80236),g=n(93149),v=n(60485),E=n(69957),k=n(39324),y=n(66187),b=n(11405),w=n(44012),M=n(75087),x=function(e,t){var n;return(null===(n=t.find((function(t){return t.id===e})))||void 0===n?void 0:n.display_name)||"Unknown"},T=[M.OH,M.N9],C=function(e,t){var n=t.name,a=t.count;return{noApps:o().createElement(w.Z,{id:"sources.deleteTextBodyNoApps",defaultMessage:"Removing { name } will permanently delete all data collected.",values:{name:o().createElement("b",null,n)}}),withApps:o().createElement(w.Z,{id:"sources.deleteTextBodyWithApps",defaultMessage:"Removing { name } detaches the following\n        connected {count, plural, one {application} other {applications}} from this source:",values:{name:o().createElement("b",null,n),count:a}}),withAppsExtendedText:o().createElement(w.Z,{id:"sources.deleteTextBodyWithAppsExtended",defaultMessage:"Removing { name } permanently deletes all collected data and detaches the following\n    connected {count, plural, one {application} other {applications}}:",values:{name:o().createElement("b",null,n),count:a}})}[e]},_=n(25834),A=n(45454),D=function(e){var t=e.applications,n=(0,u.useSelector)((function(e){return e.sources}),u.shallowEqual).appTypes;return 1===t.length?o().createElement(p.x,{variant:p.q.p},x(t[0].application_type_id,n)):o().createElement(_.G,null,t.map((function(e){var t=e.id,a=e.application_type_id;return o().createElement(A.T,{key:t},x(a,n))})))};D.propTypes={applications:i().array};const R=D;var Z=function(e){var t,n=e.backPath,a=(0,r.useHistory)().push,c=(0,l.useState)(!1),i=s()(c,2),w=i[0],M=i[1],x=(0,d.Z)(),_=(0,y.L)(),A=(0,u.useDispatch)(),D=(0,u.useSelector)((function(e){return e.sources}),u.shallowEqual).sourceTypes,Z=function(){return a(n)},N=[o().createElement(f.zx,{id:"deleteSubmit",key:"submit",variant:"danger",type:"button",onClick:function(){a(b._j.sources.path),A((0,k.wZ)(_.id,x.formatMessage({id:"sources.notificationDeleteMessage",defaultMessage:"{title} was deleted successfully."},{title:_.name})))},isDisabled:!w},x.formatMessage({id:"sources.deleteConfirm",defaultMessage:"Remove source and its data"})),o().createElement(f.zx,{id:"deleteCancel",key:"cancel",variant:"link",type:"button",onClick:Z},x.formatMessage({id:"sources.deleteCancel",defaultMessage:"Cancel"}))],P=null===(t=D.find((function(e){return e.id===_.source_type_id})))||void 0===t?void 0:t.name,q=_.applications.filter((function(e){return!e.isDeleting})),z=o().createElement(m.D,null,o().createElement(p.x,{component:p.q.p},0===q.length&&C("noApps",{name:_.name}),q.length>0&&T.includes(P)&&C("withApps",{name:_.name,count:q.length}),q.length>0&&!T.includes(P)&&C("withAppsExtendedText",{name:_.name,count:q.length})),q.length>0&&o().createElement(R,{applications:q}),o().createElement(g.X,{label:x.formatMessage({id:"sources.deleteCheckboxTitle",defaultMessage:"I acknowledge that this action cannot be undone."}),onChange:function(){return M((function(e){return!e}))},"aria-label":x.formatMessage({id:"sources.deleteCheckboxTitle",defaultMessage:"I acknowledge that this action cannot be undone."}),id:"acknowledgeDelete",name:"acknowledgeDelete",isChecked:w}));return o().createElement(h.u,{className:"sources","aria-label":x.formatMessage({id:"sources.deleteTitle",defaultMessage:"Remove source?"}),header:o().createElement(v.D,{headingLevel:"h1",size:"2xl",className:"sources"},o().createElement(E.ZP,{size:"sm",className:"ins-m-alert ins-c-source__delete-icon pf-u-mr-sm"}),x.formatMessage({id:"sources.deleteTitle",defaultMessage:"Remove source?"})),isOpen:!0,variant:"small",onClose:Z,actions:N},z)};Z.propTypes={backPath:i().string},Z.defaultProps={backPath:b._j.sources.path};const N=Z}}]);
//# sourceMappingURL=remove.defa8888f6cd84455f7e.js.map