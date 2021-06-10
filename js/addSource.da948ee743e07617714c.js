(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[199],{58012:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AddSourceButton:()=>Se,AddSourceWizard:()=>Oe});var n=r(22122),i=r(81253),s=r(28481),a=r(96156),o=r(92950),c=r.n(o),u=r(45697),l=r.n(u),p=r(41609),d=r.n(p),f=r(44012),m=r(489),y=r(86896),h=r(67850),g=r(6671),b=r(72623),v=r(72317),O=r(64673),S=r(78205),T=r(96354),w=r(6812),j=r(48880),E=r(64124);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const M=function(e){var t=(0,y.Z)(),r=(0,j.default)().getState().values.authentication,n=e.validate&&e.validate.filter((function(e){return e.type!==E.Z.REQUIRED})),i=P(P({},e),r&&r.id?{isRequired:!1,helperText:t.formatMessage({id:"wizard.changeAuthHelper",defaultMessage:"Changing this resets your current {label}."},{label:e.label}),validate:n}:{}),s=w.ZP[T.Z.TEXT_FIELD];return c().createElement(s,i)};var C=r(90280),R=r(52893);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A={schema:{},sourceTypes:[],isLoading:!0},z=function(e,t){var r=t.type,n=t.sourceTypes,i=t.applicationTypes,s=t.container,a=t.disableAppSelection,o=t.intl,c=t.selectedType,u=t.initialWizardState,l=t.activeVendor;switch(r){case"loaded":return k(k({},e),{},{schema:(0,g.ZP)(n.filter(S.Z).filter((0,S.j)(l)),i.filter(O.Z).filter((0,O.W)(n,l)),a,s,o,c,u,l),isLoading:!1,sourceTypes:n,applicationTypes:i})}},x=function(e){return c().createElement(h.ZP,(0,n.Z)({},e,{showFormControls:!1}))},B=function(e){var t=e.sourceTypes,r=e.applicationTypes,n=e.disableAppSelection,i=e.isCancelling,a=e.onCancel,u=e.values,l=e.onSubmit,p=e.selectedType,d=e.initialWizardState,f=e.activeVendor,h=(0,o.useReducer)(z,A),g=(0,s.Z)(h,2),O=g[0],S=O.schema,T=O.sourceTypes,w=O.applicationTypes,j=O.isLoading,E=g[1],Z=(0,o.useRef)(!1),P=(0,o.useRef)(document.createElement("div")),_=(0,y.Z)();return(0,o.useEffect)((function(){Z.current=!0;var e=[];return t||e.push((0,b.lH)()),r||e.push((0,b.$l)()),Promise.all(e).then((function(e){var i=e.find((function(e){return Object.prototype.hasOwnProperty.call(e,"sourceTypes")})),s=e.find((function(e){return Object.prototype.hasOwnProperty.call(e,"applicationTypes")}));Z.current&&E({type:"loaded",sourceTypes:t||i.sourceTypes,applicationTypes:r||s.applicationTypes,disableAppSelection:n,container:P.current,intl:_,selectedType:p,initialWizardState:d,activeVendor:f})})),function(){Z.current=!1}}),[]),(0,o.useEffect)((function(){P.current.style.opacity=i?0:1}),[i]),j?c().createElement(m.Wizard,{className:"sources",isOpen:!0,onClose:a,title:(0,v.Z5)(f),description:(0,v.A6)(f),steps:[{name:"Loading",component:c().createElement(R.Z,{onClose:function(){return a()}}),isFinishedStep:!0}]}):c().createElement(C.Z,{initialValues:k(k({},u),p&&{source_type:p}),schema:S,onSubmit:function(e,t,r){return l(e,T,r,w)},onCancel:a,FormTemplate:x,subscription:{values:!0},componentMapper:{authentication:M}})};B.propTypes={onCancel:l().func.isRequired,onSubmit:l().func.isRequired,sourceTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,product_name:l().string.isRequired,schema:l().shape({authentication:l().array,endpoint:l().object})})),applicationTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,display_name:l().string.isRequired})),values:l().object,disableAppSelection:l().bool,isCancelling:l().bool,selectedType:l().string,initialWizardState:l().object,activeVendor:l().string},B.defaultProps={values:{},disableAppSelection:!1};const D=B;var q=r(79829),V=r(86482),F=r(334),W=r(24160),L=function(e){var t=e.id,r=(0,y.Z)().formatMessage({id:"wizard.editSource",defaultMessage:"Edit source"});return"sources"===insights.chrome.getApp()?c().createElement(F.Link,{to:"/sources/detail/".concat(t)},c().createElement(m.Button,{variant:"primary",className:"pf-u-mt-xl"},r)):c().createElement(m.Button,{variant:"primary",className:"pf-u-mt-xl",component:"a",target:"_blank",href:"".concat((0,W.Z)(),"/detail/").concat(t),rel:"noopener noreferrer"},r)};L.propTypes={id:l().string.isRequired};const N=L;var I=r(5746),U=r(50063),H=r(79433),Y=r(4435),$=r(98824),G=function(e){var t,r,n=e.afterSubmit,i=e.afterError,a=e.isFinished,u=e.isErrored,l=e.successfulMessage,p=e.hideSourcesButton,d=e.returnButtonTitle,f=e.reset,h=e.createdSource,g=void 0===h?{}:h,b=e.tryAgain,O=e.afterSuccess,S=e.sourceTypes,T=e.activeVendor,w=(0,o.useState)(),j=(0,s.Z)(w,2),E=j[0],Z=j[1],P=(0,o.useState)(),M=(0,s.Z)(P,2),C=M[0],_=M[1],k=(0,y.Z)(),A=c().createElement(m.Button,{variant:"link",onClick:f},k.formatMessage({id:"wizard.addAnotherSource",defaultMessage:"Add another source"}));if(C)r=c().createElement(U.Z,{onClose:n,title:k.formatMessage({id:"wizard.removeSourceSuccessTitle",defaultMessage:"Removing successful"}),successfulMessage:k.formatMessage({id:"wizard.removeSourceSuccessDescription",defaultMessage:"Source was successfully removed."}),hideSourcesButton:p,returnButtonTitle:d,secondaryActions:A});else if(E)r=c().createElement(R.Z,{customText:k.formatMessage({id:"wizard.removingSource",defaultMessage:"Removing source"})});else if(a)switch((0,V.Z)(g)){case"unavailable":r=c().createElement(H.Z,{onClose:n,secondaryActions:c().createElement(m.Button,{variant:"link",onClick:function(){return Z(!0),(0,q.Rj)().deleteSource(g.id).then((function(){O&&O(),_(!0)})).catch((function(){return Z(!1)}))}},k.formatMessage({id:"wizard.removeSource",defaultMessage:"Remove source"})),Component:function(){return c().createElement(N,{id:g.id})},message:(0,I.Z)(g,k),title:k.formatMessage({id:"wizard.configurationUnsuccessful",defaultMessage:"Configuration unsuccessful"})});break;case"timeout":r=c().createElement(Y.Z,{onClose:n,returnButtonTitle:d,secondaryActions:A});break;default:r=g.source_type_id===(null===(t=S.find((function(e){return"amazon"===e.name})))||void 0===t?void 0:t.id)?c().createElement($.Z,{onClose:n}):c().createElement(U.Z,{onClose:n,successfulMessage:l,hideSourcesButton:p,returnButtonTitle:d,secondaryActions:A})}else r=u?c().createElement(H.Z,{onClose:i,primaryAction:b,secondaryActions:c().createElement(m.Text,{component:"a",target:"_blank",href:"https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",rel:"noopener noreferrer"},k.formatMessage({id:"wizard.openTicket",defaultMessage:"Open a support case"})),returnButtonTitle:k.formatMessage({id:"wizard.retryText",defaultMessage:"Retry"})}):c().createElement(R.Z,{customText:k.formatMessage({id:"wizard.loadingText",defaultMessage:"Validating credentials"}),description:c().createElement(m.TextContent,null,c().createElement(m.Text,{className:"pf-u-mb-md"},k.formatMessage({id:"wizard.loadingDescription-a",defaultMessage:"This might take some time. You'll receive a notification if you are still in the Sources application when the process completes. Otherwise, you can check the status in the main sources table at any time."})),c().createElement(m.Text,null,k.formatMessage({id:"wizard.loadingDescription-b",defaultMessage:"In the meantime, you can close this window while the validation process continues."}))),onClose:i,cancelTitle:k.formatMessage({id:"wizard.close",defaultMessage:"Close"})});return c().createElement(m.Wizard,{className:"sources",isOpen:!0,onClose:a?n:i,title:(0,v.Z5)(T),description:(0,v.A6)(T),steps:[{name:"Finish",component:r,isFinishedStep:!0}]})};G.propTypes={afterSubmit:l().func.isRequired,afterError:l().func.isRequired,isFinished:l().bool.isRequired,isErrored:l().bool.isRequired,successfulMessage:l().node.isRequired,hideSourcesButton:l().bool,returnButtonTitle:l().node.isRequired,errorMessage:l().node,reset:l().func,createdSource:l().object,tryAgain:l().func,afterSuccess:l().func,sourceTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired})),activeVendor:l().string};const J=G;var Q=r(45587),X=r(84866),K=r(99809),ee=r(92137),te=r(87757),re=r.n(te),ne=r(91447),ie=r(72810),se=r(96845);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ce=function(){var e=(0,ee.Z)(re().mark((function e(t){var r,n,i,s,a,o,c;return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new Date,e.next=4,(0,q.Rj)().bulkCreate({sources:[oe(oe({},t.source),{},{source_type_name:t.source_type})],authentications:[oe(oe({},t.authentication),{},{resource_name:t.source.name,resource_type:"source"})],applications:t.applications.map((function(e){return{application_type_id:e,source_name:t.source.name}}))});case 4:return n=e.sent,e.next=7,(0,ne.Z)(n.sources[0].id);case 7:return(i=[]).push((0,ie.h)(n.authentications[0].id,void 0,void 0,"showAuthentication",r)),n.applications.forEach((function(e){var t=e.id;return i.push((0,ie.h)(t,void 0,void 0,"showApplication",r))})),e.next=12,Promise.all(i);case 12:return s=e.sent,a=(0,K.Z)(s),o=a[0],c=a.slice(1),e.abrupt("return",oe(oe(oe({},n),n.sources[0]),{},{authentications:[o],applications:c}));case 19:return e.prev=19,e.t0=e.catch(0),e.next=23,(0,se.Z)(e.t0);case 23:throw e.sent;case 25:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}();var ue=r(42812);function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var de=function(e){return e.url?function(e){if(!e)return{};try{var t=new URL(e);return{scheme:t.protocol.replace(/:$/,""),host:t.hostname,port:t.port,path:t.pathname}}catch(e){return console.log(e),{}}}(e.url):e},fe=function(){var e=(0,ee.Z)(re().mark((function e(t){var r,n,i,s,a,o,c,u,l,p,d,f,m,y,h,g,b,O,S,T,w,j,E,Z,P=arguments;return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=P.length>1&&void 0!==P[1]?P[1]:[],n=P.length>2?P[2]:void 0,e.prev=2,p={sources:[pe(pe({},t.source),{},{source_type_name:t.source_type})],endpoints:[],authentications:[],applications:[]},(d=t.url||t.endpoint)&&(f=de(t),m=f.scheme,y=f.host,h=f.port,g=f.path,b=parseInt(h,10),p.endpoints.push(pe(pe({},t.endpoint),{},{default:!0,source_name:t.source.name,scheme:m,host:y,port:isNaN(b)?void 0:b,path:g}))),(O=(null===(s=t.application)||void 0===s?void 0:s.application_type_id)&&(null===(a=t.application)||void 0===a?void 0:a.application_type_id)!==v.Dt)&&p.applications.push(pe(pe({},t.application),{},{source_name:t.source.name})),t.authentication&&t.authentication.authtype!==ue.Z.type&&p.authentications.push(pe(pe(pe({},t.authentication),{},{resource_type:d?"endpoint":O?"application":"source",resource_name:t.source.name},O&&{resource_name:null==n||null===(S=n.find((function(e){return e.id===t.application.application_type_id})))||void 0===S?void 0:S.name}),d&&{resource_name:de(t).host})),e.next=11,(0,q.Rj)().bulkCreate(p);case 11:if(T=e.sent,i=null===(o=T.sources)||void 0===o?void 0:o[0],w=null===(c=T.applications)||void 0===c?void 0:c[0],j=null===(u=T.endpoints)||void 0===u?void 0:u[0],E=null===(l=T.authentications)||void 0===l?void 0:l[0],!d||!O){e.next=19;break}return e.next=19,(0,q.Rj)().createAuthApp({application_id:w.id,authentication_id:E.id});case 19:return e.next=21,(0,ne.Z)(i.id);case 21:if(!w){e.next=26;break}return Z=r.includes(w.application_type_id)?1e4:0,e.next=25,(0,ie.h)(w.id,Z);case 25:w=e.sent;case 26:if(!j){e.next=30;break}return e.next=29,(0,ie.h)(j.id,void 0,void 0,"getEndpoint");case 29:j=e.sent;case 30:return e.abrupt("return",pe(pe({},i),{},{endpoint:[j].filter(Boolean),applications:[w].filter(Boolean)}));case 33:return e.prev=33,e.t0=e.catch(2),e.next=37,(0,se.S)(e.t0,i?i.id:void 0);case 37:throw e.sent;case 39:case"end":return e.stop()}}),e,null,[[2,33]])})));return function(t){return e.apply(this,arguments)}}(),me=r(66974),ye=["isErrored","isFinished","isSubmitted","values","error","isCancelling","createdSource","activeVendor"];function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var be=function(e,t){return{isSubmitted:!1,isFinished:!1,isErrored:!1,isCancelling:!1,values:e,createdSource:{},error:void 0,activeVendor:t}},ve=function(e,t){var r=t.type,n=t.values,i=t.data,s=t.error,a=t.initialValues,o=t.sourceTypes,c=t.applicationTypes;switch(r){case"reset":return be(a);case"prepareSubmitState":return ge(ge({},e),{},{isFinished:!1,isErrored:!1,error:void 0,isSubmitted:!0,values:n,sourceTypes:o,applicationTypes:c});case"setSubmitted":return ge(ge({},e),{},{isFinished:!0,createdSource:i});case"setErrored":return ge(ge({},e),{},{isErrored:!0,error:s.toString()});case"onStay":return ge(ge({},e),{},{isCancelling:!1});case"showCancelModal":return ge(ge({},e),{},{isCancelling:!0,values:n})}},Oe=function(e){var t=e.successfulMessage,r=e.isOpen,n=e.sourceTypes,a=e.applicationTypes,u=e.disableAppSelection,l=e.hideSourcesButton,p=e.returnButtonTitle,f=e.initialValues,m=e.onClose,y=e.afterSuccess,h=e.selectedType,g=e.initialWizardState,b=e.submitCallback,v=e.activeVendor,O=(0,o.useReducer)(ve,be(f,v)),S=(0,s.Z)(O,2),T=S[0],w=T.isErrored,j=T.isFinished,E=T.isSubmitted,Z=T.values,P=T.error,M=T.isCancelling,C=T.createdSource,R=T.activeVendor,_=(0,i.Z)(T,ye),k=S[1],A=function(e,t,r,n){return k({type:"prepareSubmitState",values:e,sourceTypes:t,applicationTypes:n}),((0,Q.Z)(e.source)?ce:fe)(e,(0,X.T2)(n),n).then((function(e){y&&y(e),b&&b({isSubmitted:!0,createdSource:e,sourceTypes:t}),k({type:"setSubmitted",data:e})})).catch((function(n){b&&b({isErrored:!0,error:n,values:e,sourceTypes:t,wizardState:r}),k({type:"setErrored",error:n})}))},z=function(){return k({type:"reset",initialValues:f})};return r?E?c().createElement(J,{afterSubmit:function(){m(void 0,C),z()},afterError:function(){return m({})},isFinished:j,isErrored:w,successfulMessage:t,hideSourcesButton:l,returnButtonTitle:p,errorMessage:P,reset:z,createdSource:C,tryAgain:function(){return A(Z,_.sourceTypes,void 0,_.applicationTypes)},afterSuccess:y,sourceTypes:_.sourceTypes,activeVendor:R}):c().createElement(c().Fragment,null,M&&c().createElement(me.Z,{onExit:function(){return m(Z)},onStay:function(){return k({type:"onStay"})}}),c().createElement(D,{isCancelling:M,values:Z,onSubmit:A,onCancel:function(e){return d()(e)?m({}):k({type:"showCancelModal",values:e})},sourceTypes:n,applicationTypes:a,disableAppSelection:u,selectedType:h,initialWizardState:g,activeVendor:R})):null};Oe.propTypes={afterSuccess:l().func,sourceTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,product_name:l().string.isRequired,schema:l().shape({authentication:l().array,endpoint:l().object})})),applicationTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,display_name:l().string.isRequired})),onClose:l().func.isRequired,isOpen:l().bool.isRequired,successfulMessage:l().node,initialValues:l().shape((0,a.Z)({},l().string,l().oneOf([l().string,l().array,l().number,l().bool]))),disableAppSelection:l().bool,hideSourcesButton:l().bool,returnButtonTitle:l().node,selectedType:l().string,initialWizardState:l().object,submitCallback:l().func,activeVendor:l().oneOf([X.B0,X.JL])},Oe.defaultProps={successfulMessage:c().createElement(f.Z,{id:"wizard.successfulMessage",defaultMessage:"Your source was successfully added."}),initialValues:{},returnButtonTitle:c().createElement(f.Z,{id:"wizard.goBackToSources",defaultMessage:"Go back to Sources"})};var Se=function(e){var t=(0,o.useState)(!1),r=(0,s.Z)(t,2),i=r[0],a=r[1];return c().createElement(c().Fragment,null,c().createElement(m.Button,{variant:"primary",onClick:function(){return a(!0)}},(0,v.Z5)()),c().createElement(Oe,(0,n.Z)({isOpen:i,onClose:function(){return a(!1)}},e)))}}}]);
//# sourceMappingURL=../sourcemaps/addSource.35a104e06cd07e80dad0.js.map