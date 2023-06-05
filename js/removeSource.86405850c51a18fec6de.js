"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[128],{69957:(e,t,n)=>{n.d(t,{LP:()=>l,RI:()=>s,ZP:()=>c});var a=n(40400);const s={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},l=(0,a.IU)(s),c=l},55997:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(29439),s=n(92950),l=n.n(s),c=n(45697),i=n.n(c),o=n(86706),r=n(86896),u=n(6848),d=n(69957),m=n(89372),p=n(60566),f=n(93736),h=n(58192),g=n(44012),v=n(84866),E=function(e,t){var n;return(null===(n=t.find((function(t){return t.id===e})))||void 0===n?void 0:n.display_name)||"Unknown"},T=[v.OH,v.N9],k=function(e,t){var n=t.name,a=t.count;return{noApps:l().createElement(g.Z,{id:"sources.deleteTextBodyNoApps",defaultMessage:"Removing { name } will permanently delete all data collected.",values:{name:l().createElement("b",null,n)}}),withApps:l().createElement(g.Z,{id:"sources.deleteTextBodyWithApps",defaultMessage:"Removing { name } detaches the following\n        connected {count, plural, one {application} other {applications}} from this source:",values:{name:l().createElement("b",null,n),count:a}}),withAppsExtendedText:l().createElement(g.Z,{id:"sources.deleteTextBodyWithAppsExtended",defaultMessage:"Removing { name } permanently deletes all collected data and detaches the following\n    connected {count, plural, one {application} other {applications}}:",values:{name:l().createElement("b",null,n),count:a}})}[e]},x=function(e){var t=e.applications,n=(0,o.v9)((function(e){return e.sources}),o.wU).appTypes;return 1===t.length?l().createElement(u.Text,{variant:u.TextVariants.p},E(t[0].application_type_id,n)):l().createElement(u.TextList,null,t.map((function(e){var t=e.id,a=e.application_type_id;return l().createElement(u.TextListItem,{key:t},E(a,n))})))};x.propTypes={applications:i().array};const y=x;var M=function(e){var t,n=e.backPath,c=void 0===n?"/":n,i=(0,f.a)(),g=(0,s.useState)(!1),v=(0,a.Z)(g,2),E=v[0],x=v[1],M=(0,r.Z)(),b=(0,p.L)(),w=(0,o.I0)(),C=(0,o.v9)((function(e){return e.sources}),o.wU).sourceTypes,_=function(){return i(c)},A=[l().createElement(u.Button,{id:"deleteSubmit",key:"submit",variant:"danger",type:"button",onClick:function(){i(h._j.sources.path),w((0,m.wZ)(b.id,M.formatMessage({id:"sources.notificationDeleteMessage",defaultMessage:"{title} was deleted successfully."},{title:b.name})))},isDisabled:!E},M.formatMessage({id:"sources.deleteConfirm",defaultMessage:"Remove source and its data"})),l().createElement(u.Button,{id:"deleteCancel",key:"cancel",variant:"link",type:"button",onClick:_},M.formatMessage({id:"sources.deleteCancel",defaultMessage:"Cancel"}))],Z=null===(t=C.find((function(e){return e.id===b.source_type_id})))||void 0===t?void 0:t.name,I=b.applications.filter((function(e){return!e.isDeleting})),R=l().createElement(u.TextContent,null,l().createElement(u.Text,{component:u.TextVariants.p},0===I.length&&k("noApps",{name:b.name}),I.length>0&&T.includes(Z)&&k("withApps",{name:b.name,count:I.length}),I.length>0&&!T.includes(Z)&&k("withAppsExtendedText",{name:b.name,count:I.length})),I.length>0&&l().createElement(y,{applications:I}),l().createElement(u.Checkbox,{label:M.formatMessage({id:"sources.deleteCheckboxTitle",defaultMessage:"I acknowledge that this action cannot be undone."}),onChange:function(){return x((function(e){return!e}))},"aria-label":M.formatMessage({id:"sources.deleteCheckboxTitle",defaultMessage:"I acknowledge that this action cannot be undone."}),id:"acknowledgeDelete",name:"acknowledgeDelete",isChecked:E}));return l().createElement(u.Modal,{className:"sources","aria-label":M.formatMessage({id:"sources.deleteTitle",defaultMessage:"Remove source?"}),header:l().createElement(u.Title,{headingLevel:"h1",size:"2xl",className:"sources"},l().createElement(d.ZP,{size:"sm",className:"ins-m-alert src-c-delete-icon pf-u-mr-sm"}),M.formatMessage({id:"sources.deleteTitle",defaultMessage:"Remove source?"})),isOpen:!0,variant:"small",onClose:_,actions:A},R)};M.propTypes={backPath:i().string};const b=M},93736:(e,t,n)=>{n.d(t,{a:()=>l});var a=n(49881),s=n(16959),l=function(){var e=(0,a.useNavigate)();return function(t,n){return e((0,s.n)(t,s.d),n)}}}}]);