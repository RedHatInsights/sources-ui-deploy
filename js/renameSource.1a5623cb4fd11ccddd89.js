(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[291],{72498:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>b});var r=a(22122),n=a(92950),t=a.n(n),i=a(86896),u=a(45237),o=a(334),c=a(97066),l=a(96354),m=a(64124),d=a(67850),f=a(60566),p=a(90280),g=a(60076),M=a(98495),v=a(6671),E=a(36680);const b=function(){var e=(0,f.L)(),s=(0,i.Z)(),a=(0,u.useDispatch)(),n=(0,o.useHistory)().push,b=function(){return n((0,g.yS)(g._j.sourcesDetail.path,e.id))};return t().createElement(c.Modal,{title:s.formatMessage({id:"sources.renameTitle",defaultMessage:"Rename source"}),description:s.formatMessage({id:"sources.renameDescription",defaultMessage:"Enter a new name for your source."}),onClose:b,isOpen:!0,variant:"medium",className:"sources"},t().createElement(p.Z,{FormTemplate:function(e){return t().createElement(d.ZP,(0,r.Z)({},e,{disableSubmit:["pristine","validating","invalid"],submitLabel:s.formatMessage({id:"sources.save",defaultMessage:"Save"})}))},onSubmit:function(r){var n=r.name;return b(),a((0,M.d4)(e.id,n,s.formatMessage({id:"sources.renameError",defaultMessage:"Renaming was unsuccessful"})))},onCancel:b,schema:{fields:[{name:"name",label:s.formatMessage({id:"sources.name",defaultMessage:"Name"}),component:l.Z.TEXT_FIELD,validate:[function(a){return(0,v.AQ)(a,e.id,s)},{type:m.Z.REQUIRED}],isRequired:!0,resolveProps:E.Z,initialValue:e.name}]}}))}}}]);
//# sourceMappingURL=../sourcemaps/renameSource.9265c4795c02d10d3e79.js.map