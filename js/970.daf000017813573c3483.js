"use strict";(self.webpackChunksources=self.webpackChunksources||[]).push([[970],{75629:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var i=a(66029),s=a.n(i),n=a(25387),r=a(86706),l=a(67187),o=a(36494),d=a(54602),c=a(97979),u=a(87281),m=a(35729),p=a(45697),f=a.n(p),g=a(76429),y=a(67850),h=a(48880),v=a(88431),M=a(46665);const C=e=>s().createElement(v.Form,{...e,id:"modal-form"}),E=()=>{const e=(0,n.YB)(),{onCancel:t}=(0,h.default)();return s().createElement(g.Z,{subscription:{submitting:!0,pristine:!0,invalid:!0,validating:!0}},(({pristine:a,invalid:i,validating:n,submitting:r})=>s().createElement("div",{className:"pf-v5-c-form"},s().createElement(v.ActionGroup,{className:"pf-v5-u-mt-0"},s().createElement(M.Button,{variant:"primary",form:"modal-form",type:"submit",isDisabled:a||n||r||i},e.formatMessage({id:"sources.submit",defaultMessage:"Submit"})),s().createElement(M.Button,{variant:"link",onClick:t,id:"cancel-modal"},e.formatMessage({id:"sources.cancel",defaultMessage:"Cancel"}))))))},w=({ModalProps:e,...t})=>s().createElement(o.Modal,{footer:s().createElement(E,null),...e},s().createElement(y.ZP,{...t,showFormControls:!1,FormWrapper:C}));w.propTypes={ModalProps:f().object};const b=w;var k=a(90573),_=a(31665),V=a(28495),z=a(84414);const B={loading:!0,initialValues:{}},F=(e,{type:t,values:a})=>{if("loaded"===t)return{...e,loading:!1,initialValues:{authentication:a}}},N=()=>{const e=(0,c.L)(),t=(0,z.a)(),a=(0,n.YB)(),p=(0,r.I0)(),f=(0,r.v9)((({sources:e})=>e.sourceTypes),r.wU),g=f.find((({id:t})=>t===e.source_type_id)).name,[{loading:y,initialValues:h},v]=(0,i.useReducer)(F,B),M=()=>t((0,u.yS)(u._j.sourcesDetail.path,e.id)),C=e.paused_at,E=C?a.formatMessage({id:"editCredentials.paused.title",defaultMessage:"View account authorization credentials"}):a.formatMessage({id:"editCredentials.title",defaultMessage:"Edit account authorization credentials"}),w=C?void 0:a.formatMessage({id:"editCredentials.description",defaultMessage:"Use the fields below to reset your account authorization credentials. It may take some time to validate new information."});return(0,i.useEffect)((()=>{(0,k.Rj)().listSourceAuthentications(e.id).then((({data:e})=>{const t=f.find((({name:e})=>e===g))?.schema.authentication.find((({is_superkey:e})=>e)),a=e.find((({authtype:e})=>e===t.type));v({type:"loaded",values:a})}))}),[]),y?s().createElement(o.Modal,{title:E,variant:"small",isOpen:!0,onClose:M},s().createElement(l.Bullseye,{className:"pf-v5-u-m-2xl"},s().createElement(d.Spinner,null))):s().createElement(m.Z,{clearedValue:null,schema:{fields:(0,V.Z)(f,g).map((t=>e.paused_at?{...t,isDisabled:!0}:t))},onSubmit:async({authentication:{tenant:e,source_id:t,id:i,authtype:s,resource_id:n,resource_type:r,...l}})=>{M();try{await(0,k.Rj)().updateAuthentication(i,l),p((0,_.Hz)({title:a.formatMessage({id:"editCredentials.alert.title",defaultMessage:"New credentials saved"}),description:a.formatMessage({id:"editCredentials.alert.description",defaultMessage:"It may take some time to validate your new credentials. Check this page for status updates."}),variant:"info"}))}catch(e){p((0,_.Hz)({title:a.formatMessage({id:"editCredentials.alert.warning.title",defaultMessage:"Error updating credentials"}),description:a.formatMessage({id:"editCredentials.alert.warning.description",defaultMessage:"There was a problem while trying to update credentials. Please try again. If the error persists, open a support case."}),variant:"danger"}))}},initialValues:h,FormTemplate:e=>s().createElement(b,{...e,ModalProps:{isOpen:!0,onClose:M,variant:"small",title:E,description:w,...C&&{footer:null}}}),onCancel:M})}},28495:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(58104);const s=(e,t)=>{const a=e.find((({name:e})=>e===t))?.schema.authentication.find((({is_superkey:e,type:t})=>e||"access_key_secret_key"===t)),s=(0,i.gF)(t,a.type);return[...(0,i.YD)(t,a.type),...(0,i.Ow)((0,i.sM)(a.fields,s),t,a.type)]}},84414:(e,t,a)=>{a.d(t,{a:()=>n});var i=a(48947),s=a(78116);const n=()=>{const e=(0,i.useNavigate)();return(t,a)=>e((0,s.n)(t,s.d),a)}}}]);
//# sourceMappingURL=../sourcemaps/970.a9c4257d1704cc4fee39fbffcdaa4610.js.map