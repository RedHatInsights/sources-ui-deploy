"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[331],{524:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var n=a(87462),r=a(45987),i=a(15861),s=a(29439),o=a(4942),u=a(87757),l=a.n(u),c=a(96985),d=a.n(c),f=a(86896),p=a(42396),m=a(34018),v=a(46731),g=a(60566),y=a(60076),h=a(90280),b=a(45697),M=a.n(b),w=a(76429),O=a(67850),E=a(48880),Z=["ModalProps"],C=function(e){return d().createElement(v.Form,(0,n.Z)({},e,{id:"modal-form"}))},k=function(){var e=(0,f.Z)(),t=(0,E.default)().onCancel;return d().createElement(w.Z,{subscription:{submitting:!0,pristine:!0,invalid:!0,validating:!0}},(function(a){var n=a.pristine,r=a.invalid,i=a.validating,s=a.submitting;return d().createElement("div",{className:"pf-c-form"},d().createElement(v.ActionGroup,{className:"pf-u-mt-0"},d().createElement(v.Button,{variant:"primary",form:"modal-form",type:"submit",isDisabled:n||i||s||r},e.formatMessage({id:"sources.submit",defaultMessage:"Submit"})),d().createElement(v.Button,{variant:"link",onClick:t,id:"cancel-modal"},e.formatMessage({id:"sources.cancel",defaultMessage:"Cancel"}))))}))},_=function(e){var t=e.ModalProps,a=(0,r.Z)(e,Z);return d().createElement(v.Modal,(0,n.Z)({footer:d().createElement(k,null)},t),d().createElement(O.ZP,(0,n.Z)({},a,{showFormControls:!1,FormWrapper:C})))};_.propTypes={ModalProps:M().object};const j=_;var P=a(48815),D=a(11146),S=a(92657),V=["tenant","source_id","id","authtype","resource_id"];function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){(0,o.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x={loading:!0,initialValues:{}},I=function(e,t){var a=t.type,n=t.values;if("loaded"===a)return F(F({},e),{},{loading:!1,initialValues:{authentication:n}})};const N=function(){var e=(0,g.L)(),t=(0,m.useHistory)(),a=(0,f.Z)(),o=(0,p.I0)(),u=(0,p.v9)((function(e){return e.sources.sourceTypes}),p.wU),b=u.find((function(t){return t.id===e.source_type_id})).name,M=(0,c.useReducer)(I,x),w=(0,s.Z)(M,2),O=w[0],E=O.loading,Z=O.initialValues,C=w[1],k=function(){return t.push((0,y.yS)(y._j.sourcesDetail.path,e.id))},_=e.paused_at,z=_?a.formatMessage({id:"editCredentials.paused.title",defaultMessage:"View account authorization credentials"}):a.formatMessage({id:"editCredentials.title",defaultMessage:"Edit account authorization credentials"}),N=_?void 0:a.formatMessage({id:"editCredentials.description",defaultMessage:"Use the fields below to reset your account authorization credentials. It may take some time to validate new information."});return(0,c.useEffect)((function(){(0,P.Rj)().listSourceAuthentications(e.id).then((function(e){var t,a=e.data,n=null===(t=u.find((function(e){return e.name===b})))||void 0===t?void 0:t.schema.authentication.find((function(e){return e.is_superkey})),r=a.find((function(e){return e.authtype===n.type}));C({type:"loaded",values:r})}))}),[]),E?d().createElement(v.Modal,{title:z,variant:"small",isOpen:!0,onClose:k},d().createElement(v.Bullseye,{className:"pf-u-m-2xl"},d().createElement(v.Spinner,null))):d().createElement(h.Z,{clearedValue:null,schema:{fields:(0,S.Z)(u,b).map((function(t){return e.paused_at?F(F({},t),{},{isDisabled:!0}):t}))},onSubmit:function(){var e=(0,i.Z)(l().mark((function e(t){var n,i,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.authentication).tenant,n.source_id,i=n.id,n.authtype,n.resource_id,s=(0,r.Z)(n,V),k(),e.prev=2,e.next=5,(0,P.Rj)().updateAuthentication(i,s);case 5:o((0,D.Hz)({title:a.formatMessage({id:"editCredentials.alert.title",defaultMessage:"New credentials saved"}),description:a.formatMessage({id:"editCredentials.alert.description",defaultMessage:"It may take some time to validate your new credentials. Check this page for status updates."}),variant:"info"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),o((0,D.Hz)({title:a.formatMessage({id:"editCredentials.alert.warning.title",defaultMessage:"Error updating credentials"}),description:a.formatMessage({id:"editCredentials.alert.warning.description",defaultMessage:"There was a problem while trying to update credentials. Please try again. If the error persists, open a support case."}),variant:"danger"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),initialValues:Z,FormTemplate:function(e){return d().createElement(j,(0,n.Z)({},e,{ModalProps:F({isOpen:!0,onClose:k,variant:"small",title:z,description:N},_&&{footer:null})}))},onCancel:k})}},92657:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(93433),r=a(32600);const i=function(e,t){var a,i=null===(a=e.find((function(e){return e.name===t})))||void 0===a?void 0:a.schema.authentication.find((function(e){var t=e.is_superkey,a=e.type;return t||"access_key_secret_key"===a})),s=(0,r.gF)(t,i.type);return[].concat((0,n.Z)((0,r.YD)(t,i.type)),(0,n.Z)((0,r.Ow)((0,r.sM)(i.fields,s),t,i.type)))}}}]);
//# sourceMappingURL=../sourcemaps/credentialsForm.18a7a635ed43ed48591ab1497f3edb0e.js.map