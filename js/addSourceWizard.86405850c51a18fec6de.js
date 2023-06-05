"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[791],{58012:(e,t,r)=>{r.r(t),r.d(t,{AddSourceButton:()=>Se,default:()=>we});var n=r(87462),i=r(45987),a=r(29439),o=r(4942),s=r(92950),c=r.n(s),u=r(45697),l=r.n(u),p=r(41609),d=r.n(p),f=r(44012),y=r(6848),m=r(86706),h=r(86896),g=r(67850),v=r(16728),b=r(72623),O=r(72317),S=r(64673),w=r(78205),T=r(96354),E=r(43112),j=r(48880),C=r(64124);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const P=function(e){var t=(0,h.Z)(),r=(0,j.default)().getState().values.authentication,n=e.validate&&e.validate.filter((function(e){return e.type!==C.Z.REQUIRED})),i=M(M({},e),r&&r.id?{isRequired:!1,helperText:t.formatMessage({id:"wizard.changeAuthHelper",defaultMessage:"Changing this resets your current {label}."},{label:e.label}),validate:n}:{}),a=E.ZP[T.Z.TEXT_FIELD];return c().createElement(a,i)};var _=r(90280),R=r(52893),k=r(49288);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B={schema:{},sourceTypes:[],isLoading:!0},q=function(e){return c().createElement(g.ZP,(0,n.Z)({},e,{showFormControls:!1}))},A=function(e){var t=e.sourceTypes,r=e.applicationTypes,n=e.disableAppSelection,i=e.isCancelling,o=e.onCancel,u=e.values,l=e.onSubmit,p=e.selectedType,d=e.initialWizardState,f=e.activeCategory,g=(0,k.useFlag)("sources.wizard.lighthouse"),T=(0,s.useReducer)((function(e,t){var r=t.type,n=t.sourceTypes,i=t.applicationTypes,a=t.container,o=t.disableAppSelection,s=t.intl,c=t.selectedType,u=t.initialWizardState,l=t.activeCategory,p=t.hcsEnrolled;if("loaded"===r)return z(z({},e),{},{schema:(0,v.ZP)(n.filter(w.Z).filter((0,w.j)(l)),i.filter(S.Z).filter((0,S.W)(n,l)),o,a,s,c,u,l,g,p),isLoading:!1,sourceTypes:n,applicationTypes:i,hcsEnrolled:p})}),B),E=(0,a.Z)(T,2),j=E[0],C=j.schema,Z=j.sourceTypes,M=j.applicationTypes,x=j.isLoading,A=E[1],D=(0,m.v9)((function(e){return e.sources.hcsEnrolled}),m.wU),F=(0,s.useRef)(!1),W=(0,s.useRef)(document.createElement("div")),N=(0,h.Z)();return(0,s.useEffect)((function(){F.current=!0;var e=[];return t||e.push((0,b.lH)()),r||e.push((0,b.$l)()),Promise.all(e).then((function(e){var i=e.find((function(e){return Object.prototype.hasOwnProperty.call(e,"sourceTypes")})),a=e.find((function(e){return Object.prototype.hasOwnProperty.call(e,"applicationTypes")}));F.current&&A({type:"loaded",sourceTypes:t||i.sourceTypes,applicationTypes:r||a.applicationTypes,hcsEnrolled:D,disableAppSelection:n,container:W.current,intl:N,selectedType:p,initialWizardState:d,activeCategory:f})})),function(){F.current=!1}}),[]),(0,s.useEffect)((function(){W.current.style.opacity=i?0:1}),[i]),x?c().createElement(y.Wizard,{className:"sources",isOpen:!0,onClose:o,title:(0,O.Z5)(f),description:(0,O.A6)(f),steps:[{name:"Loading",component:c().createElement(R.Z,{onClose:function(){return o()}}),isFinishedStep:!0}]}):c().createElement(_.Z,{initialValues:z(z({},u),p&&{source_type:p}),schema:C,onSubmit:function(e,t,r){return l(e,Z,r,M,D)},onCancel:o,FormTemplate:q,subscription:{values:!0},componentMapper:{authentication:P}})};A.propTypes={onCancel:l().func.isRequired,onSubmit:l().func.isRequired,sourceTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,product_name:l().string.isRequired,schema:l().shape({authentication:l().array,endpoint:l().object})})),applicationTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,display_name:l().string.isRequired})),values:l().object,disableAppSelection:l().bool,isCancelling:l().bool,selectedType:l().string,initialWizardState:l().object,activeCategory:l().string},A.defaultProps={values:{},disableAppSelection:!1};const D=A;var F=r(48815),W=r(86482),N=r(24160),L=r(28347),V=function(e){var t=e.id,r=(0,h.Z)().formatMessage({id:"wizard.editSource",defaultMessage:"Edit source"});return"sources"===insights.chrome.getApp()?c().createElement(L.Z,{to:"/detail/".concat(t)},c().createElement(y.Button,{variant:"primary",className:"pf-u-mt-xl"},r)):c().createElement(y.Button,{variant:"primary",className:"pf-u-mt-xl",component:"a",target:"_blank",href:"".concat((0,N.Z)(),"/detail/").concat(t),rel:"noopener noreferrer"},r)};V.propTypes={id:l().string.isRequired};const I=V;var U=r(5746),H=r(50063),Y=r(79433),X=r(4435),$=r(98824),G=r(84866),J=function(e){var t,r,i,o,u,l=e.afterSubmit,p=e.afterError,d=e.isFinished,m=e.isErrored,g=e.successfulMessage,v=e.hideSourcesButton,b=e.returnButtonTitle,S=e.reset,w=e.createdSource,T=void 0===w?{}:w,E=e.tryAgain,j=e.afterSuccess,C=e.sourceTypes,Z=e.activeCategory,M=(0,s.useState)(),P=(0,a.Z)(M,2),_=P[0],k=P[1],x=(0,s.useState)(),z=(0,a.Z)(x,2),B=z[0],q=z[1],A=null===(t=T.applications)||void 0===t?void 0:t.some((function(e){var t;return null==e||null===(t=e.extra)||void 0===t?void 0:t.storage_only})),D=null===(r=T.applications)||void 0===r?void 0:r.some((function(e){return(null==e?void 0:e.application_type_id)===G.sC})),N=null===(i=T.applications)||void 0===i?void 0:i.some((function(e){var t;return null==e||null===(t=e.extra)||void 0===t?void 0:t.hcs})),L=(0,h.Z)(),V=c().createElement(y.Button,{variant:"link",onClick:S},L.formatMessage({id:"wizard.addAnotherSource",defaultMessage:"Add another source"}));if(B)u=c().createElement(H.Z,{onClose:l,title:L.formatMessage({id:"wizard.removeSourceSuccessTitle",defaultMessage:"Removing successful"}),successfulMessage:L.formatMessage({id:"wizard.removeSourceSuccessDescription",defaultMessage:"Source was successfully removed."}),hideSourcesButton:v,returnButtonTitle:b,secondaryActions:V});else if(_)u=c().createElement(R.Z,{customText:L.formatMessage({id:"wizard.removingSource",defaultMessage:"Removing source"})});else if(d)switch((0,W.Z)(T)){case"unavailable":u=c().createElement(Y.Z,{onClose:l,secondaryActions:c().createElement(y.Button,{variant:"link",onClick:function(){return k(!0),(0,F.Rj)().deleteSource(T.id).then((function(){j&&j(),q(!0)})).catch((function(){return k(!1)}))}},L.formatMessage({id:"wizard.removeSource",defaultMessage:"Remove source"})),Component:function(){return c().createElement(I,{id:T.id})},message:(0,U.Z)(T,L),title:L.formatMessage({id:"wizard.configurationUnsuccessful",defaultMessage:"Configuration unsuccessful"})});break;case"timeout":u=c().createElement(X.Z,(0,n.Z)({onClose:l,returnButtonTitle:b,secondaryActions:V},D&&A&&{uuid:null==T?void 0:T.uid}));break;default:u=T.source_type_id===(null===(o=C.find((function(e){return"amazon"===e.name})))||void 0===o?void 0:o.id)?c().createElement($.Z,{onClose:l}):c().createElement(H.Z,(0,n.Z)({onClose:l,successfulMessage:D&&A?"You have chosen to manually customize the cost data set sent to ".concat(N?G.X0:"Cost Management",", you will still need to perform additional steps to complete the process."):g},D&&A&&{title:c().createElement(f.Z,{id:"wizard.waitTheresMore",defaultMessage:"Success, but wait there's more!"}),uuid:null==T?void 0:T.uid},{hideSourcesButton:v,returnButtonTitle:b,secondaryActions:V}))}else u=m?c().createElement(Y.Z,{onClose:p,primaryAction:E,secondaryActions:c().createElement(y.Text,{component:"a",target:"_blank",href:"https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",rel:"noopener noreferrer"},L.formatMessage({id:"wizard.openTicket",defaultMessage:"Open a support case"})),returnButtonTitle:L.formatMessage({id:"wizard.retryText",defaultMessage:"Retry"})}):c().createElement(R.Z,{customText:L.formatMessage({id:"wizard.loadingText",defaultMessage:"Validating credentials"}),description:c().createElement(y.TextContent,null,c().createElement(y.Text,{className:"pf-u-mb-md"},L.formatMessage({id:"wizard.loadingDescription-a",defaultMessage:"This might take some time. You'll receive a notification if you are still in the Sources application when the process completes. Otherwise, you can check the status in the main sources table at any time."})),c().createElement(y.Text,null,L.formatMessage({id:"wizard.loadingDescription-b",defaultMessage:"In the meantime, you can close this window while the validation process continues."}))),onClose:p,cancelTitle:L.formatMessage({id:"wizard.close",defaultMessage:"Close"})});var J=c().useMemo((function(){return document.querySelector(".pf-c-page.chr-c-page")}),[]);return c().createElement(y.Modal,{isOpen:!0,width:"58%",hasNoBodyWrapper:!0,appendTo:J,showClose:!1},c().createElement(y.Wizard,{className:"sources",onClose:d?l:p,title:(0,O.Z5)(Z),description:(0,O.A6)(Z),steps:[{name:"Finish",component:u,isFinishedStep:!0}]}))};J.propTypes={afterSubmit:l().func.isRequired,afterError:l().func.isRequired,isFinished:l().bool.isRequired,isErrored:l().bool.isRequired,successfulMessage:l().node.isRequired,hideSourcesButton:l().bool,returnButtonTitle:l().node.isRequired,errorMessage:l().node,reset:l().func,createdSource:l().object,tryAgain:l().func,afterSuccess:l().func,sourceTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired})),activeCategory:l().string};const Q=J;var K=r(45587),ee=r(15861),te=r(64687),re=r.n(te),ne=r(72810),ie=r(96845);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const se=function(){var e=(0,ee.Z)(re().mark((function e(t){var r,n,i;return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new Date,e.next=4,(0,F.Rj)().bulkCreate({sources:[oe(oe({},t.source),{},{source_type_name:t.source_type})],authentications:[oe(oe({},t.authentication),{},{resource_name:t.source.name,resource_type:"source"})],applications:t.applications.map((function(e){return{application_type_id:e,source_name:t.source.name}}))});case 4:return n=e.sent,e.next=7,(0,ne.h)(n.authentications[0].id,void 0,void 0,"showAuthentication",r);case 7:return i=e.sent,e.abrupt("return",oe(oe(oe({},n),n.sources[0]),{},{authentications:[i]}));case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,(0,ie.Z)(e.t0);case 15:throw e.sent;case 17:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();var ce=r(91447),ue=r(42812);function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var de=function(e){return e.url?function(e){if(!e)return{};try{var t=new URL(e);return{scheme:t.protocol.replace(/:$/,""),host:t.hostname,port:t.port,path:t.pathname}}catch(e){return console.log(e),{}}}(e.url):e},fe=function(){var e=(0,ee.Z)(re().mark((function e(t){var r,n,i,a,o,s,c,u,l,p,d,f,y,m,h,g,v,b,S,w,T,E,j,C,Z=arguments;return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Z.length>1&&void 0!==Z[1]?Z[1]:[],n=Z.length>2?Z[2]:void 0,e.prev=2,p={sources:[pe(pe({},t.source),{},{source_type_name:t.source_type})],endpoints:[],authentications:[],applications:[]},(d=t.url||t.endpoint)&&(f=de(t),y=f.scheme,m=f.host,h=f.port,g=f.path,v=parseInt(h,10),p.endpoints.push(pe(pe({},t.endpoint),{},{default:!0,source_name:t.source.name,scheme:y,host:m,port:isNaN(v)?void 0:v,path:g}))),(b=(null===(a=t.application)||void 0===a?void 0:a.application_type_id)&&(null===(o=t.application)||void 0===o?void 0:o.application_type_id)!==O.Dt)&&p.applications.push(pe(pe({},t.application),{},{source_name:t.source.name})),t.authentication&&t.authentication.authtype!==ue.Z.type&&p.authentications.push(pe(pe(pe({},t.authentication),{},{resource_type:d?"endpoint":b?"application":"source",resource_name:t.source.name},b&&{resource_name:null==n||null===(S=n.find((function(e){return e.id===t.application.application_type_id})))||void 0===S?void 0:S.name}),d&&{resource_name:de(t).host})),e.next=11,(0,F.Rj)().bulkCreate(p);case 11:if(w=e.sent,i=null===(s=w.sources)||void 0===s?void 0:s[0],T=null===(c=w.applications)||void 0===c?void 0:c[0],E=null===(u=w.endpoints)||void 0===u?void 0:u[0],j=null===(l=w.authentications)||void 0===l?void 0:l[0],!d||!b){e.next=19;break}return e.next=19,(0,F.Rj)().createAuthApp({application_id:T.id,authentication_id:j.id});case 19:return e.next=21,(0,ce.Z)(i.id);case 21:if(!T){e.next=26;break}return C=r.includes(T.application_type_id)?1e4:0,e.next=25,(0,ne.h)(T.id,C);case 25:T=e.sent;case 26:if(!E){e.next=30;break}return e.next=29,(0,ne.h)(E.id,void 0,void 0,"getEndpoint");case 29:E=e.sent;case 30:return e.abrupt("return",pe(pe({},i),{},{endpoint:[E].filter(Boolean),applications:[T].filter(Boolean)}));case 33:return e.prev=33,e.t0=e.catch(2),e.next=37,(0,ie.S)(e.t0,i?i.id:void 0);case 37:throw e.sent;case 39:case"end":return e.stop()}}),e,null,[[2,33]])})));return function(t){return e.apply(this,arguments)}}(),ye=r(66974),me=["isErrored","isFinished","isSubmitted","values","error","isCancelling","createdSource","activeCategory"];function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ve=function(e,t){return{isSubmitted:!1,isFinished:!1,isErrored:!1,isCancelling:!1,values:e,createdSource:{},error:void 0,activeCategory:t}},be=function(e,t){var r=t.type,n=t.values,i=t.data,a=t.error,o=t.initialValues,s=t.sourceTypes,c=t.applicationTypes;switch(r){case"reset":return ve(o,e.activeCategory);case"prepareSubmitState":return ge(ge({},e),{},{isFinished:!1,isErrored:!1,error:void 0,isSubmitted:!0,values:n,sourceTypes:s,applicationTypes:c});case"setSubmitted":return ge(ge({},e),{},{isFinished:!0,createdSource:i});case"setErrored":return ge(ge({},e),{},{isErrored:!0,error:a.toString()});case"onStay":return ge(ge({},e),{},{isCancelling:!1});case"showCancelModal":return ge(ge({},e),{},{isCancelling:!0,values:n})}},Oe=function(e){var t=e.successfulMessage,r=e.isOpen,n=e.sourceTypes,o=e.applicationTypes,u=e.disableAppSelection,l=e.hideSourcesButton,p=e.returnButtonTitle,f=e.initialValues,y=e.onClose,m=e.afterSuccess,h=e.selectedType,g=e.initialWizardState,v=e.submitCallback,b=e.activeCategory,O=(0,s.useReducer)(be,ve(f,b)),S=(0,a.Z)(O,2),w=S[0],T=w.isErrored,E=w.isFinished,j=w.isSubmitted,C=w.values,Z=w.error,M=w.isCancelling,P=w.createdSource,_=w.activeCategory,R=(0,i.Z)(w,me),k=S[1],x=function(e,t,r,n,i){var a;return k({type:"prepareSubmitState",values:e,sourceTypes:t,applicationTypes:n}),((0,K.Z)(e.source)?se:fe)(ge(ge({},e),{},{application:ge(ge({},e.application),{},{extra:ge(ge({},(null===(a=e.application)||void 0===a?void 0:a.extra)||{}),{},{hcs:!!i})})}),(0,G.T2)(n),n).then((function(e){m&&m(e),v&&v({isSubmitted:!0,createdSource:e,sourceTypes:t}),k({type:"setSubmitted",data:e})})).catch((function(n){v&&v({isErrored:!0,error:n,values:e,sourceTypes:t,wizardState:r}),k({type:"setErrored",error:n})}))},z=function(){return k({type:"reset",initialValues:f})};return r?j?c().createElement(Q,{afterSubmit:function(){y(void 0,P),z()},afterError:function(){return y({})},isFinished:E,isErrored:T,successfulMessage:t,hideSourcesButton:l,returnButtonTitle:p,errorMessage:Z,reset:z,createdSource:P,tryAgain:function(){return x(C,R.sourceTypes,void 0,R.applicationTypes)},afterSuccess:m,sourceTypes:R.sourceTypes,activeCategory:_}):c().createElement(c().Fragment,null,M&&c().createElement(ye.Z,{onExit:function(){return y(C)},onStay:function(){return k({type:"onStay"})}}),c().createElement(D,{isCancelling:M,values:C,onSubmit:x,onCancel:function(e){return d()(e)?y({}):k({type:"showCancelModal",values:e})},sourceTypes:n,applicationTypes:o,disableAppSelection:u,selectedType:h,initialWizardState:g,activeCategory:_})):null};Oe.propTypes={afterSuccess:l().func,sourceTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,product_name:l().string.isRequired,schema:l().shape({authentication:l().array,endpoint:l().object})})),applicationTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,display_name:l().string.isRequired})),onClose:l().func.isRequired,isOpen:l().bool.isRequired,successfulMessage:l().node,initialValues:l().shape((0,o.Z)({},l().string,l().oneOf([l().string,l().array,l().number,l().bool]))),disableAppSelection:l().bool,hideSourcesButton:l().bool,returnButtonTitle:l().node,selectedType:l().string,initialWizardState:l().object,submitCallback:l().func,activeCategory:l().oneOf([G.B0,G.JL])},Oe.defaultProps={successfulMessage:c().createElement(f.Z,{id:"wizard.successfulMessage",defaultMessage:"Your source was successfully added."}),initialValues:{},returnButtonTitle:c().createElement(f.Z,{id:"wizard.goBackToSources",defaultMessage:"Go back to Sources"})};var Se=function(e){var t=(0,s.useState)(!1),r=(0,a.Z)(t,2),i=r[0],o=r[1];return c().createElement(c().Fragment,null,c().createElement(y.Button,{variant:"primary",onClick:function(){return o(!0)}},(0,O.Z5)()),c().createElement(Oe,(0,n.Z)({isOpen:i,onClose:function(){return o(!1)}},e)))};const we=Oe},78205:(e,t,r)=>{r.d(t,{Z:()=>o,j:()=>a});var n=r(84866),i=[n.OH,n.N9],a=function(e,t){return function(r){var n=r.category,a=r.name;return t?n===e:n===e&&!i.includes(a)}};const o=function(e){return e.schema}},45587:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(94688);const i=function(e){return(null==e?void 0:e.app_creation_workflow)===n.b}}}]);