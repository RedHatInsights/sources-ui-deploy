"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[331],{524:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var n=a(87462),r=a(45987),i=a(15861),s=a(29439),o=a(4942),l=a(87757),u=a.n(l),c=a(92950),d=a.n(c),p=a(86896),f=a(28216),m=a(86235),g=a(15040),v=a(60566),h=a(60076),y=a(90280),b=a(45697),M=a.n(b),w=a(76429),E=a(67850),O=a(48880),C=["ModalProps"],j=function(e){return d().createElement(g.Form,(0,n.Z)({},e,{id:"modal-form"}))},Z=function(){var e=(0,p.Z)(),t=(0,O.default)().onCancel;return d().createElement(w.Z,{subscription:{submitting:!0,pristine:!0,invalid:!0,validating:!0}},(function(a){var n=a.pristine,r=a.invalid,i=a.validating,s=a.submitting;return d().createElement("div",{className:"pf-c-form"},d().createElement(g.ActionGroup,{className:"pf-u-mt-0"},d().createElement(g.Button,{variant:"primary",form:"modal-form",type:"submit",isDisabled:n||i||s||r},e.formatMessage({id:"sources.submit",defaultMessage:"Submit"})),d().createElement(g.Button,{variant:"link",onClick:t,id:"cancel-modal"},e.formatMessage({id:"sources.cancel",defaultMessage:"Cancel"}))))}))},P=function(e){var t=e.ModalProps,a=(0,r.Z)(e,C);return d().createElement(g.Modal,(0,n.Z)({footer:d().createElement(Z,null)},t),d().createElement(E.ZP,(0,n.Z)({},a,{showFormControls:!1,FormWrapper:j})))};P.propTypes={ModalProps:M().object};const k=P;var _=a(79829),D=a(98495),S=a(92657),V=["tenant","source_id","id","authtype","resource_id"];function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){(0,o.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F={loading:!0,initialValues:{}},I=function(e,t){var a=t.type,n=t.values;if("loaded"===a)return x(x({},e),{},{loading:!1,initialValues:{authentication:n}})};const N=function(){var e=(0,v.L)(),t=(0,m.useHistory)(),a=(0,p.Z)(),o=(0,f.I0)(),l=(0,f.v9)((function(e){return e.sources.sourceTypes}),f.wU),b=l.find((function(t){return t.id===e.source_type_id})).name,M=(0,c.useReducer)(I,F),w=(0,s.Z)(M,2),E=w[0],O=E.loading,C=E.initialValues,j=w[1],Z=function(){return t.push((0,h.yS)(h._j.sourcesDetail.path,e.id))},P=e.paused_at,z=P?a.formatMessage({id:"editCredentials.paused.title",defaultMessage:"View account authorization credentials"}):a.formatMessage({id:"editCredentials.title",defaultMessage:"Edit account authorization credentials"}),N=P?void 0:a.formatMessage({id:"editCredentials.description",defaultMessage:"Use the fields below to reset your account authorization credentials. It may take some time to validate new information."});return(0,c.useEffect)((function(){(0,_.Rj)().listSourceAuthentications(e.id).then((function(e){var t,a=e.data,n=null===(t=l.find((function(e){return e.name===b})))||void 0===t?void 0:t.schema.authentication.find((function(e){return e.is_superkey})),r=a.find((function(e){return e.authtype===n.type}));j({type:"loaded",values:r})}))}),[]),O?d().createElement(g.Modal,{title:z,variant:"small",isOpen:!0,onClose:Z},d().createElement(g.Bullseye,{className:"pf-u-m-2xl"},d().createElement(g.Spinner,null))):d().createElement(y.Z,{clearedValue:null,schema:{fields:(0,S.Z)(l,b).map((function(t){return e.paused_at?x(x({},t),{},{isDisabled:!0}):t}))},onSubmit:function(){var e=(0,i.Z)(u().mark((function e(t){var n,i,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.authentication).tenant,n.source_id,i=n.id,n.authtype,n.resource_id,s=(0,r.Z)(n,V),Z(),e.prev=2,e.next=5,(0,_.Rj)().updateAuthentication(i,s);case 5:o((0,D.Hz)({title:a.formatMessage({id:"editCredentials.alert.title",defaultMessage:"New credentials saved"}),description:a.formatMessage({id:"editCredentials.alert.description",defaultMessage:"It may take some time to validate your new credentials. Check this page for status updates."}),variant:"info"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),o((0,D.Hz)({title:a.formatMessage({id:"editCredentials.alert.warning.title",defaultMessage:"Error updating credentials"}),description:a.formatMessage({id:"editCredentials.alert.warning.description",defaultMessage:"There was a problem while trying to update credentials. Please try again. If the error persists, open a support case."}),variant:"danger"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),initialValues:C,FormTemplate:function(e){return d().createElement(k,(0,n.Z)({},e,{ModalProps:x({isOpen:!0,onClose:Z,variant:"small",title:z,description:N},P&&{footer:null})}))},onCancel:Z})}}}]);
//# sourceMappingURL=../sourcemaps/credentialsForm.1bd39d421fbbfb9d667651be65db95c5.js.map