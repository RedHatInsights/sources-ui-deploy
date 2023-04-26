"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[199],{66974:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(92950),a=r.n(n),i=r(45697),s=r.n(i),o=r(86896),c=r(44012),l=r(6848),u=r(69957),d=function(e){var t=e.onExit,r=e.onStay,i=e.title,s=e.exitTitle,c=e.stayTitle,d=e.description,p=(0,o.Z)(),m=(0,n.useRef)(!1);return a().createElement(l.Modal,{onEscapePress:function(e){m.current&&r(e),m.current=!0},className:"sources",variant:"small",title:i,"aria-label":p.formatMessage({id:"wizard.closeAriaLabel",defaultMessage:"Close add source wizard"}),header:a().createElement(l.Title,{headingLevel:"h1",size:"2xl"},a().createElement(u.ZP,{size:"sm",className:"src-c-warning-icon","aria-label":"Exclamation icon"}),i),isOpen:!0,onClose:r,actions:[a().createElement(l.Button,{key:"confirm",variant:"primary",id:"on-exit-button",onClick:t},s),a().createElement(l.Button,{key:"cancel",variant:"link",id:"on-stay-button",onClick:r},c)]},d)};d.propTypes={onExit:s().func.isRequired,onStay:s().func.isRequired,title:s().node,exitTitle:s().node,stayTitle:s().node,description:s().node},d.defaultProps={title:a().createElement(c.Z,{id:"wizard.closeTitle",defaultMessage:"Exit source creation?"}),exitTitle:a().createElement(c.Z,{id:"wizard.exitText",defaultMessage:"Exit"}),stayTitle:a().createElement(c.Z,{id:"wizard.stayText",defaultMessage:"Stay"}),description:a().createElement(c.Z,{id:"wizard.closeWarning",defaultMessage:"All inputs will be discarded."})};const p=d},58012:(e,t,r)=>{r.r(t),r.d(t,{AddSourceButton:()=>Se,AddSourceWizard:()=>Ee});var n=r(87462),a=r(45987),i=r(29439),s=r(4942),o=r(92950),c=r.n(o),l=r(45697),u=r.n(l),d=r(41609),p=r.n(d),m=r(44012),f=r(6848),y=r(86706),g=r(86896),h=r(67850),v=r(16728),b=r(72623),E=r(72317),S=r(64673),w=r(78205),T=r(96354),O=r(83022),M=r(48880),C=r(64124);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const x=function(e){var t=(0,g.Z)(),r=(0,M.default)().getState().values.authentication,n=e.validate&&e.validate.filter((function(e){return e.type!==C.Z.REQUIRED})),a=j(j({},e),r&&r.id?{isRequired:!1,helperText:t.formatMessage({id:"wizard.changeAuthHelper",defaultMessage:"Changing this resets your current {label}."},{label:e.label}),validate:n}:{}),i=O.ZP[T.Z.TEXT_FIELD];return c().createElement(i,a)};var k=r(90280),P=r(52893),_=r(49288);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z={schema:{},sourceTypes:[],isLoading:!0},A=function(e){return c().createElement(h.ZP,(0,n.Z)({},e,{showFormControls:!1}))},q=function(e){var t=e.sourceTypes,r=e.applicationTypes,n=e.disableAppSelection,a=e.isCancelling,s=e.onCancel,l=e.values,u=e.onSubmit,d=e.selectedType,p=e.initialWizardState,m=e.activeCategory,h=(0,_.useFlag)("sources.wizard.lighthouse"),T=(0,o.useReducer)((function(e,t){var r=t.type,n=t.sourceTypes,a=t.applicationTypes,i=t.container,s=t.disableAppSelection,o=t.intl,c=t.selectedType,l=t.initialWizardState,u=t.activeCategory,d=t.hcsEnrolled;if("loaded"===r)return B(B({},e),{},{schema:(0,v.ZP)(n.filter(w.Z).filter((0,w.j)(u)),a.filter(S.Z).filter((0,S.W)(n,u)),s,i,o,c,l,u,h,d),isLoading:!1,sourceTypes:n,applicationTypes:a,hcsEnrolled:d})}),z),O=(0,i.Z)(T,2),M=O[0],C=M.schema,Z=M.sourceTypes,j=M.applicationTypes,R=M.isLoading,q=O[1],D=(0,y.v9)((function(e){return e.sources.hcsEnrolled}),y.wU),N=(0,o.useRef)(!1),F=(0,o.useRef)(document.createElement("div")),I=(0,g.Z)();return(0,o.useEffect)((function(){N.current=!0;var e=[];return t||e.push((0,b.lH)()),r||e.push((0,b.$l)()),Promise.all(e).then((function(e){var a=e.find((function(e){return Object.prototype.hasOwnProperty.call(e,"sourceTypes")})),i=e.find((function(e){return Object.prototype.hasOwnProperty.call(e,"applicationTypes")}));N.current&&q({type:"loaded",sourceTypes:t||a.sourceTypes,applicationTypes:r||i.applicationTypes,hcsEnrolled:D,disableAppSelection:n,container:F.current,intl:I,selectedType:d,initialWizardState:p,activeCategory:m})})),function(){N.current=!1}}),[]),(0,o.useEffect)((function(){F.current.style.opacity=a?0:1}),[a]),R?c().createElement(f.Wizard,{className:"sources",isOpen:!0,onClose:s,title:(0,E.Z5)(m),description:(0,E.A6)(m),steps:[{name:"Loading",component:c().createElement(P.Z,{onClose:function(){return s()}}),isFinishedStep:!0}]}):c().createElement(k.Z,{initialValues:B(B({},l),d&&{source_type:d}),schema:C,onSubmit:function(e,t,r){return u(e,Z,r,j,D)},onCancel:s,FormTemplate:A,subscription:{values:!0},componentMapper:{authentication:x}})};q.propTypes={onCancel:u().func.isRequired,onSubmit:u().func.isRequired,sourceTypes:u().arrayOf(u().shape({id:u().string.isRequired,name:u().string.isRequired,product_name:u().string.isRequired,schema:u().shape({authentication:u().array,endpoint:u().object})})),applicationTypes:u().arrayOf(u().shape({id:u().string.isRequired,name:u().string.isRequired,display_name:u().string.isRequired})),values:u().object,disableAppSelection:u().bool,isCancelling:u().bool,selectedType:u().string,initialWizardState:u().object,activeCategory:u().string},q.defaultProps={values:{},disableAppSelection:!1};const D=q;var N=r(48815),F=r(86482),I=r(86235),L=r(24160),W=function(e){var t=e.id,r=(0,g.Z)().formatMessage({id:"wizard.editSource",defaultMessage:"Edit source"});return"sources"===insights.chrome.getApp()?c().createElement(I.Link,{to:"/sources/detail/".concat(t)},c().createElement(f.Button,{variant:"primary",className:"pf-u-mt-xl"},r)):c().createElement(f.Button,{variant:"primary",className:"pf-u-mt-xl",component:"a",target:"_blank",href:"".concat((0,L.Z)(),"/detail/").concat(t),rel:"noopener noreferrer"},r)};W.propTypes={id:u().string.isRequired};const U=W;var V=r(5746),G=r(50063),H=r(79433),Y=r(4435),X=r(98824),$=r(84866),J=function(e){var t,r,a,s,l,u=e.afterSubmit,d=e.afterError,p=e.isFinished,y=e.isErrored,h=e.successfulMessage,v=e.hideSourcesButton,b=e.returnButtonTitle,S=e.reset,w=e.createdSource,T=void 0===w?{}:w,O=e.tryAgain,M=e.afterSuccess,C=e.sourceTypes,Z=e.activeCategory,j=(0,o.useState)(),x=(0,i.Z)(j,2),k=x[0],_=x[1],R=(0,o.useState)(),B=(0,i.Z)(R,2),z=B[0],A=B[1],q=null===(t=T.applications)||void 0===t?void 0:t.some((function(e){var t;return null==e||null===(t=e.extra)||void 0===t?void 0:t.storage_only})),D=null===(r=T.applications)||void 0===r?void 0:r.some((function(e){return(null==e?void 0:e.application_type_id)===$.sC})),I=null===(a=T.applications)||void 0===a?void 0:a.some((function(e){var t;return null==e||null===(t=e.extra)||void 0===t?void 0:t.hcs})),L=(0,g.Z)(),W=c().createElement(f.Button,{variant:"link",onClick:S},L.formatMessage({id:"wizard.addAnotherSource",defaultMessage:"Add another source"}));if(z)l=c().createElement(G.Z,{onClose:u,title:L.formatMessage({id:"wizard.removeSourceSuccessTitle",defaultMessage:"Removing successful"}),successfulMessage:L.formatMessage({id:"wizard.removeSourceSuccessDescription",defaultMessage:"Source was successfully removed."}),hideSourcesButton:v,returnButtonTitle:b,secondaryActions:W});else if(k)l=c().createElement(P.Z,{customText:L.formatMessage({id:"wizard.removingSource",defaultMessage:"Removing source"})});else if(p)switch((0,F.Z)(T)){case"unavailable":l=c().createElement(H.Z,{onClose:u,secondaryActions:c().createElement(f.Button,{variant:"link",onClick:function(){return _(!0),(0,N.Rj)().deleteSource(T.id).then((function(){M&&M(),A(!0)})).catch((function(){return _(!1)}))}},L.formatMessage({id:"wizard.removeSource",defaultMessage:"Remove source"})),Component:function(){return c().createElement(U,{id:T.id})},message:(0,V.Z)(T,L),title:L.formatMessage({id:"wizard.configurationUnsuccessful",defaultMessage:"Configuration unsuccessful"})});break;case"timeout":l=c().createElement(Y.Z,(0,n.Z)({onClose:u,returnButtonTitle:b,secondaryActions:W},D&&q&&{uuid:null==T?void 0:T.uid}));break;default:l=T.source_type_id===(null===(s=C.find((function(e){return"amazon"===e.name})))||void 0===s?void 0:s.id)?c().createElement(X.Z,{onClose:u}):c().createElement(G.Z,(0,n.Z)({onClose:u,successfulMessage:D&&q?"You have chosen to manually customize the cost data set sent to ".concat(I?$.X0:"Cost Management",", you will still need to perform additional steps to complete the process."):h},D&&q&&{title:c().createElement(m.Z,{id:"wizard.waitTheresMore",defaultMessage:"Success, but wait there's more!"}),uuid:null==T?void 0:T.uid},{hideSourcesButton:v,returnButtonTitle:b,secondaryActions:W}))}else l=y?c().createElement(H.Z,{onClose:d,primaryAction:O,secondaryActions:c().createElement(f.Text,{component:"a",target:"_blank",href:"https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",rel:"noopener noreferrer"},L.formatMessage({id:"wizard.openTicket",defaultMessage:"Open a support case"})),returnButtonTitle:L.formatMessage({id:"wizard.retryText",defaultMessage:"Retry"})}):c().createElement(P.Z,{customText:L.formatMessage({id:"wizard.loadingText",defaultMessage:"Validating credentials"}),description:c().createElement(f.TextContent,null,c().createElement(f.Text,{className:"pf-u-mb-md"},L.formatMessage({id:"wizard.loadingDescription-a",defaultMessage:"This might take some time. You'll receive a notification if you are still in the Sources application when the process completes. Otherwise, you can check the status in the main sources table at any time."})),c().createElement(f.Text,null,L.formatMessage({id:"wizard.loadingDescription-b",defaultMessage:"In the meantime, you can close this window while the validation process continues."}))),onClose:d,cancelTitle:L.formatMessage({id:"wizard.close",defaultMessage:"Close"})});var J=c().useMemo((function(){return document.querySelector(".pf-c-page.chr-c-page")}),[]);return c().createElement(f.Modal,{isOpen:!0,modalVariant:f.ModalVariant.large,hasNoBodyWrapper:!0,appendTo:J,showClose:!1},c().createElement(f.Wizard,{className:"sources",onClose:p?u:d,title:(0,E.Z5)(Z),description:(0,E.A6)(Z),steps:[{name:"Finish",component:l,isFinishedStep:!0}]}))};J.propTypes={afterSubmit:u().func.isRequired,afterError:u().func.isRequired,isFinished:u().bool.isRequired,isErrored:u().bool.isRequired,successfulMessage:u().node.isRequired,hideSourcesButton:u().bool,returnButtonTitle:u().node.isRequired,errorMessage:u().node,reset:u().func,createdSource:u().object,tryAgain:u().func,afterSuccess:u().func,sourceTypes:u().arrayOf(u().shape({id:u().string.isRequired,name:u().string.isRequired})),activeCategory:u().string};const Q=J;var K=r(45587),ee=r(15861),te=r(64687),re=r.n(te),ne=r(72810),ae=r(96845);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const oe=function(){var e=(0,ee.Z)(re().mark((function e(t){var r,n,a;return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new Date,e.next=4,(0,N.Rj)().bulkCreate({sources:[se(se({},t.source),{},{source_type_name:t.source_type})],authentications:[se(se({},t.authentication),{},{resource_name:t.source.name,resource_type:"source"})],applications:t.applications.map((function(e){return{application_type_id:e,source_name:t.source.name}}))});case 4:return n=e.sent,e.next=7,(0,ne.h)(n.authentications[0].id,void 0,void 0,"showAuthentication",r);case 7:return a=e.sent,e.abrupt("return",se(se(se({},n),n.sources[0]),{},{authentications:[a]}));case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,(0,ae.Z)(e.t0);case 15:throw e.sent;case 17:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();var ce=r(91447),le=r(42812);function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pe=function(e){return e.url?function(e){if(!e)return{};try{var t=new URL(e);return{scheme:t.protocol.replace(/:$/,""),host:t.hostname,port:t.port,path:t.pathname}}catch(e){return console.log(e),{}}}(e.url):e},me=function(){var e=(0,ee.Z)(re().mark((function e(t){var r,n,a,i,s,o,c,l,u,d,p,m,f,y,g,h,v,b,S,w,T,O,M,C,Z=arguments;return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Z.length>1&&void 0!==Z[1]?Z[1]:[],n=Z.length>2?Z[2]:void 0,e.prev=2,d={sources:[de(de({},t.source),{},{source_type_name:t.source_type})],endpoints:[],authentications:[],applications:[]},(p=t.url||t.endpoint)&&(m=pe(t),f=m.scheme,y=m.host,g=m.port,h=m.path,v=parseInt(g,10),d.endpoints.push(de(de({},t.endpoint),{},{default:!0,source_name:t.source.name,scheme:f,host:y,port:isNaN(v)?void 0:v,path:h}))),(b=(null===(i=t.application)||void 0===i?void 0:i.application_type_id)&&(null===(s=t.application)||void 0===s?void 0:s.application_type_id)!==E.Dt)&&d.applications.push(de(de({},t.application),{},{source_name:t.source.name})),t.authentication&&t.authentication.authtype!==le.Z.type&&d.authentications.push(de(de(de({},t.authentication),{},{resource_type:p?"endpoint":b?"application":"source",resource_name:t.source.name},b&&{resource_name:null==n||null===(S=n.find((function(e){return e.id===t.application.application_type_id})))||void 0===S?void 0:S.name}),p&&{resource_name:pe(t).host})),e.next=11,(0,N.Rj)().bulkCreate(d);case 11:if(w=e.sent,a=null===(o=w.sources)||void 0===o?void 0:o[0],T=null===(c=w.applications)||void 0===c?void 0:c[0],O=null===(l=w.endpoints)||void 0===l?void 0:l[0],M=null===(u=w.authentications)||void 0===u?void 0:u[0],!p||!b){e.next=19;break}return e.next=19,(0,N.Rj)().createAuthApp({application_id:T.id,authentication_id:M.id});case 19:return e.next=21,(0,ce.Z)(a.id);case 21:if(!T){e.next=26;break}return C=r.includes(T.application_type_id)?1e4:0,e.next=25,(0,ne.h)(T.id,C);case 25:T=e.sent;case 26:if(!O){e.next=30;break}return e.next=29,(0,ne.h)(O.id,void 0,void 0,"getEndpoint");case 29:O=e.sent;case 30:return e.abrupt("return",de(de({},a),{},{endpoint:[O].filter(Boolean),applications:[T].filter(Boolean)}));case 33:return e.prev=33,e.t0=e.catch(2),e.next=37,(0,ae.S)(e.t0,a?a.id:void 0);case 37:throw e.sent;case 39:case"end":return e.stop()}}),e,null,[[2,33]])})));return function(t){return e.apply(this,arguments)}}(),fe=r(66974),ye=["isErrored","isFinished","isSubmitted","values","error","isCancelling","createdSource","activeCategory"];function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ve=function(e,t){return{isSubmitted:!1,isFinished:!1,isErrored:!1,isCancelling:!1,values:e,createdSource:{},error:void 0,activeCategory:t}},be=function(e,t){var r=t.type,n=t.values,a=t.data,i=t.error,s=t.initialValues,o=t.sourceTypes,c=t.applicationTypes;switch(r){case"reset":return ve(s,e.activeCategory);case"prepareSubmitState":return he(he({},e),{},{isFinished:!1,isErrored:!1,error:void 0,isSubmitted:!0,values:n,sourceTypes:o,applicationTypes:c});case"setSubmitted":return he(he({},e),{},{isFinished:!0,createdSource:a});case"setErrored":return he(he({},e),{},{isErrored:!0,error:i.toString()});case"onStay":return he(he({},e),{},{isCancelling:!1});case"showCancelModal":return he(he({},e),{},{isCancelling:!0,values:n})}},Ee=function(e){var t=e.successfulMessage,r=e.isOpen,n=e.sourceTypes,s=e.applicationTypes,l=e.disableAppSelection,u=e.hideSourcesButton,d=e.returnButtonTitle,m=e.initialValues,f=e.onClose,y=e.afterSuccess,g=e.selectedType,h=e.initialWizardState,v=e.submitCallback,b=e.activeCategory,E=(0,o.useReducer)(be,ve(m,b)),S=(0,i.Z)(E,2),w=S[0],T=w.isErrored,O=w.isFinished,M=w.isSubmitted,C=w.values,Z=w.error,j=w.isCancelling,x=w.createdSource,k=w.activeCategory,P=(0,a.Z)(w,ye),_=S[1],R=function(e,t,r,n,a){var i;return _({type:"prepareSubmitState",values:e,sourceTypes:t,applicationTypes:n}),((0,K.Z)(e.source)?oe:me)(he(he({},e),{},{application:he(he({},e.application),{},{extra:he(he({},(null===(i=e.application)||void 0===i?void 0:i.extra)||{}),{},{hcs:!!a})})}),(0,$.T2)(n),n).then((function(e){y&&y(e),v&&v({isSubmitted:!0,createdSource:e,sourceTypes:t}),_({type:"setSubmitted",data:e})})).catch((function(n){v&&v({isErrored:!0,error:n,values:e,sourceTypes:t,wizardState:r}),_({type:"setErrored",error:n})}))},B=function(){return _({type:"reset",initialValues:m})};return r?M?c().createElement(Q,{afterSubmit:function(){f(void 0,x),B()},afterError:function(){return f({})},isFinished:O,isErrored:T,successfulMessage:t,hideSourcesButton:u,returnButtonTitle:d,errorMessage:Z,reset:B,createdSource:x,tryAgain:function(){return R(C,P.sourceTypes,void 0,P.applicationTypes)},afterSuccess:y,sourceTypes:P.sourceTypes,activeCategory:k}):c().createElement(c().Fragment,null,j&&c().createElement(fe.Z,{onExit:function(){return f(C)},onStay:function(){return _({type:"onStay"})}}),c().createElement(D,{isCancelling:j,values:C,onSubmit:R,onCancel:function(e){return p()(e)?f({}):_({type:"showCancelModal",values:e})},sourceTypes:n,applicationTypes:s,disableAppSelection:l,selectedType:g,initialWizardState:h,activeCategory:k})):null};Ee.propTypes={afterSuccess:u().func,sourceTypes:u().arrayOf(u().shape({id:u().string.isRequired,name:u().string.isRequired,product_name:u().string.isRequired,schema:u().shape({authentication:u().array,endpoint:u().object})})),applicationTypes:u().arrayOf(u().shape({id:u().string.isRequired,name:u().string.isRequired,display_name:u().string.isRequired})),onClose:u().func.isRequired,isOpen:u().bool.isRequired,successfulMessage:u().node,initialValues:u().shape((0,s.Z)({},u().string,u().oneOf([u().string,u().array,u().number,u().bool]))),disableAppSelection:u().bool,hideSourcesButton:u().bool,returnButtonTitle:u().node,selectedType:u().string,initialWizardState:u().object,submitCallback:u().func,activeCategory:u().oneOf([$.B0,$.JL])},Ee.defaultProps={successfulMessage:c().createElement(m.Z,{id:"wizard.successfulMessage",defaultMessage:"Your source was successfully added."}),initialValues:{},returnButtonTitle:c().createElement(m.Z,{id:"wizard.goBackToSources",defaultMessage:"Go back to Sources"})};var Se=function(e){var t=(0,o.useState)(!1),r=(0,i.Z)(t,2),a=r[0],s=r[1];return c().createElement(c().Fragment,null,c().createElement(f.Button,{variant:"primary",onClick:function(){return s(!0)}},(0,E.Z5)()),c().createElement(Ee,(0,n.Z)({isOpen:a,onClose:function(){return s(!1)}},e)))}},98824:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(92950),a=r.n(n),i=r(45697),s=r.n(i),o=r(86896),c=r(6848),l=r(68778),u=function(e){var t=e.href,r=e.children;return a().createElement(a().Fragment,null,a().createElement(l.ZP,{className:"pf-u-mr-sm",fill:"var(--pf-global--success-color--100)"}),a().createElement(c.Text,{component:"a",href:t,target:"_blank",rel:"noopener noreferrer"},r))};u.propTypes={href:s().string.isRequired,children:s().node.isRequired};var d=insights.chrome.isBeta()?"beta/":"",p="/".concat(d,"subscriptions"),m="/".concat(d,"insights"),f="/".concat(d,"cost-management"),y=function(e){var t=e.onClose,r=(0,o.Z)();return a().createElement(n.Fragment,null,a().createElement(c.Alert,{variant:"info",isInline:!0,title:r.formatMessage({id:"aws.alertTitle",defaultMessage:"Allow 24 hours for full activation"})},r.formatMessage({id:"aws.alertDescription",defaultMessage:"Manage connections for this source at any time in Settings > Sources."})),a().createElement(c.Bullseye,null,a().createElement(c.EmptyState,{variant:c.EmptyStateVariant.full,className:"pf-u-mt-md"},a().createElement(c.EmptyStateIcon,{icon:l.ZP,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),a().createElement(c.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},r.formatMessage({id:"aws.successTitle",defaultMessage:"Amazon Web Services connection established"})),a().createElement(c.EmptyStateBody,null,r.formatMessage({id:"aws.successDescription",defaultMessage:"Discover the benefits of your connection or exit to manage your new source."}),a().createElement(c.Grid,{hasGutter:!0,className:"src-c-aws-grid pf-u-mt-md"},a().createElement(c.GridItem,{md:"6"},a().createElement(u,{href:"https://access.redhat.com/management/cloud"},r.formatMessage({id:"aws.goldImages",defaultMessage:"View enabled AWS gold images"}))),a().createElement(c.GridItem,{md:"6"},a().createElement(u,{href:p},r.formatMessage({id:"aws.subwtachUsage",defaultMessage:"Subscription Watch usage"}))),a().createElement(c.GridItem,{md:"6"},a().createElement(u,{href:m},r.formatMessage({id:"aws.insights",defaultMessage:"Get started with Red Hat Insights"}))),a().createElement(c.GridItem,{md:"6"},a().createElement(u,{href:f},r.formatMessage({id:"aws.costLink",defaultMessage:"Cost Management reporting"}))))),a().createElement(c.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},r.formatMessage({id:"exit",defaultMessage:"Exit"})),a().createElement(c.EmptyStateSecondaryActions,null,a().createElement(c.Text,{component:"a",href:"https://access.redhat.com/public-cloud/aws",target:"_blank",rel:"noopener noreferrer"},r.formatMessage({id:"aws.learnMore",defaultMessage:"Learn more about this Cloud"}))))))};y.propTypes={onClose:s().func.isRequired};const g=y},50063:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(92950),a=r.n(n),i=r(45697),s=r.n(i),o=r(44012),c=r(6848),l=r(68778),u=r(24160),d=function(e){var t=e.onClose,r=e.successfulMessage,n=e.hideSourcesButton,i=e.returnButtonTitle,s=e.title,d=e.linkText,p=e.secondaryActions,m=e.uuid;return a().createElement(c.Bullseye,null,a().createElement(c.EmptyState,{variant:c.EmptyStateVariant.full,className:"pf-u-mt-4xl"},a().createElement(c.EmptyStateIcon,{icon:l.ZP,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),a().createElement(c.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},s),a().createElement(c.EmptyStateBody,{className:"src-c-wizard--step-text"},r),m&&a().createElement(c.Form,{className:"src-c-uuid"},a().createElement(c.FormGroup,{label:a().createElement(o.Z,{id:"wizard.sourcesUid",defaultMessage:"Source UUID"}),fieldId:"source-uuid"},a().createElement(c.ClipboardCopy,{id:"source-uuid",isReadOnly:!0,hoverTip:"Source UUID",clickTip:"Copied",className:"pf-u-mt-md"},m))),a().createElement(c.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},i),!n&&a().createElement(c.EmptyStateSecondaryActions,null,a().createElement(c.Button,{variant:"link",component:"a",target:"_blank",rel:"noopener noreferrer",href:(0,u.Z)()},d)),p&&a().createElement(c.EmptyStateSecondaryActions,null,p)))};d.propTypes={onClose:s().func.isRequired,successfulMessage:s().node.isRequired,hideSourcesButton:s().bool,returnButtonTitle:s().node.isRequired,title:s().node,linkText:s().node,secondaryActions:s().node,uuid:s().string},d.defaultProps={title:a().createElement(o.Z,{id:"wizard.succConfiguration",defaultMessage:"Configuration successful"}),linkText:a().createElement(o.Z,{id:"wizard.toSources",defaultMessage:"Take me to sources"})};const p=d},4435:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(92950),a=r.n(n),i=r(45697),s=r.n(i),o=r(86896),c=r(44012),l=r(6848),u=r(5913),d=function(e){var t=e.onClose,r=e.returnButtonTitle,n=e.title,i=e.secondaryActions,s=e.uuid,c=(0,o.Z)();return a().createElement(l.Bullseye,null,a().createElement(l.EmptyState,{variant:l.EmptyStateVariant.full,className:"pf-u-mt-4xl"},a().createElement(l.EmptyStateIcon,{icon:u.ZP,color:"var(--pf-global--Color--200)",className:"pf-u-mb-0"}),a().createElement(l.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},n),a().createElement(l.EmptyStateBody,null,c.formatMessage({id:"wizard.uncompleteConfigurationDescription",defaultMessage:"We are still working to confirm credentials and app settings.{newLine}To track progress, check the Status column in the Sources table."},{newLine:a().createElement("br",{key:"br"})}),null!=s?s:a().createElement(l.ClipboardCopy,{isReadOnly:!0,hoverTip:"Source UUID",clickTip:"Copied",className:"pf-u-mt-md"},s)),a().createElement(l.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},r),i&&a().createElement(l.EmptyStateSecondaryActions,null,i)))};d.propTypes={onClose:s().func.isRequired,returnButtonTitle:s().node.isRequired,title:s().node,secondaryActions:s().node,uuid:s().string},d.defaultProps={title:a().createElement(c.Z,{id:"wizard.uncompleteConfigurationTitle",defaultMessage:"Configuration in progress"})};const p=d},5746:(e,t,r)=>{r.d(t,{Z:()=>n});const n=function(e,t){var r,n,a,i,s,o;return(null===(r=e.applications)||void 0===r||null===(n=r.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===n?void 0:n.availability_status_error)||(null===(a=e.endpoint)||void 0===a||null===(i=a.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===i?void 0:i.availability_status_error)||(null===(s=e.authentications)||void 0===s||null===(o=s.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===o?void 0:o.availability_status_error)||t.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"})}},24160:(e,t,r)=>{r.d(t,{Z:()=>n});const n=function(){return insights.chrome.isBeta()?"/beta/settings/sources":"/settings/sources"}}}]);
//# sourceMappingURL=../sourcemaps/addSource.f29856553f561be2fc2bedf094131176.js.map