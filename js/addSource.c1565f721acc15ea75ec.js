"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[199],{66974:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(92950),a=r.n(n),i=r(45697),s=r.n(i),o=r(86896),c=r(44012),u=r(6848),l=r(69957),d=function(e){var t=e.onExit,r=e.onStay,i=e.title,s=e.exitTitle,c=e.stayTitle,d=e.description,p=(0,o.Z)(),f=(0,n.useRef)(!1);return a().createElement(u.Modal,{onEscapePress:function(e){f.current&&r(e),f.current=!0},className:"sources",variant:"small",title:i,"aria-label":p.formatMessage({id:"wizard.closeAriaLabel",defaultMessage:"Close add source wizard"}),header:a().createElement(u.Title,{headingLevel:"h1",size:"2xl"},a().createElement(l.ZP,{size:"sm",className:"src-c-warning-icon","aria-label":"Exclamation icon"}),i),isOpen:!0,onClose:r,actions:[a().createElement(u.Button,{key:"confirm",variant:"primary",id:"on-exit-button",onClick:t},s),a().createElement(u.Button,{key:"cancel",variant:"link",id:"on-stay-button",onClick:r},c)]},d)};d.propTypes={onExit:s().func.isRequired,onStay:s().func.isRequired,title:s().node,exitTitle:s().node,stayTitle:s().node,description:s().node},d.defaultProps={title:a().createElement(c.Z,{id:"wizard.closeTitle",defaultMessage:"Exit source creation?"}),exitTitle:a().createElement(c.Z,{id:"wizard.exitText",defaultMessage:"Exit"}),stayTitle:a().createElement(c.Z,{id:"wizard.stayText",defaultMessage:"Stay"}),description:a().createElement(c.Z,{id:"wizard.closeWarning",defaultMessage:"All inputs will be discarded."})};const p=d},58012:(e,t,r)=>{r.r(t),r.d(t,{AddSourceButton:()=>Se,AddSourceWizard:()=>Ee});var n=r(87462),a=r(45987),i=r(29439),s=r(4942),o=r(92950),c=r.n(o),u=r(45697),l=r.n(u),d=r(41609),p=r.n(d),f=r(44012),m=r(6848),y=r(86706),g=r(86896),h=r(67850),v=r(16728),b=r(72623),E=r(72317),S=r(64673),T=r(78205),w=r(96354),O=r(83022),C=r(48880),M=r(64124);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const x=function(e){var t=(0,g.Z)(),r=(0,C.default)().getState().values.authentication,n=e.validate&&e.validate.filter((function(e){return e.type!==M.Z.REQUIRED})),a=j(j({},e),r&&r.id?{isRequired:!1,helperText:t.formatMessage({id:"wizard.changeAuthHelper",defaultMessage:"Changing this resets your current {label}."},{label:e.label}),validate:n}:{}),i=O.ZP[w.Z.TEXT_FIELD];return c().createElement(i,a)};var k=r(90280),P=r(52893),R=r(49288);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z={schema:{},sourceTypes:[],isLoading:!0},A=function(e){return c().createElement(h.ZP,(0,n.Z)({},e,{showFormControls:!1}))},q=function(e){var t=e.sourceTypes,r=e.applicationTypes,n=e.disableAppSelection,a=e.isCancelling,s=e.onCancel,u=e.values,l=e.onSubmit,d=e.selectedType,p=e.initialWizardState,f=e.activeCategory,h=(0,R.useFlag)("sources.wizard.lighthouse"),w=(0,o.useReducer)((function(e,t){var r=t.type,n=t.sourceTypes,a=t.applicationTypes,i=t.container,s=t.disableAppSelection,o=t.intl,c=t.selectedType,u=t.initialWizardState,l=t.activeCategory,d=t.hcsEnrolled;if("loaded"===r)return B(B({},e),{},{schema:(0,v.ZP)(n.filter(T.Z).filter((0,T.j)(l)),a.filter(S.Z).filter((0,S.W)(n,l)),s,i,o,c,u,l,h,d),isLoading:!1,sourceTypes:n,applicationTypes:a,hcsEnrolled:d})}),z),O=(0,i.Z)(w,2),C=O[0],M=C.schema,Z=C.sourceTypes,j=C.applicationTypes,_=C.isLoading,q=O[1],D=(0,y.v9)((function(e){return e.sources.hcsEnrolled}),y.wU),N=(0,o.useRef)(!1),F=(0,o.useRef)(document.createElement("div")),L=(0,g.Z)();return(0,o.useEffect)((function(){N.current=!0;var e=[];return t||e.push((0,b.lH)()),r||e.push((0,b.$l)()),Promise.all(e).then((function(e){var a=e.find((function(e){return Object.prototype.hasOwnProperty.call(e,"sourceTypes")})),i=e.find((function(e){return Object.prototype.hasOwnProperty.call(e,"applicationTypes")}));N.current&&q({type:"loaded",sourceTypes:t||a.sourceTypes,applicationTypes:r||i.applicationTypes,hcsEnrolled:D,disableAppSelection:n,container:F.current,intl:L,selectedType:d,initialWizardState:p,activeCategory:f})})),function(){N.current=!1}}),[]),(0,o.useEffect)((function(){F.current.style.opacity=a?0:1}),[a]),_?c().createElement(m.Wizard,{className:"sources",isOpen:!0,onClose:s,title:(0,E.Z5)(f),description:(0,E.A6)(f),steps:[{name:"Loading",component:c().createElement(P.Z,{onClose:function(){return s()}}),isFinishedStep:!0}]}):c().createElement(k.Z,{initialValues:B(B({},u),d&&{source_type:d}),schema:M,onSubmit:function(e,t,r){return l(e,Z,r,j,D)},onCancel:s,FormTemplate:A,subscription:{values:!0},componentMapper:{authentication:x}})};q.propTypes={onCancel:l().func.isRequired,onSubmit:l().func.isRequired,sourceTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,product_name:l().string.isRequired,schema:l().shape({authentication:l().array,endpoint:l().object})})),applicationTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,display_name:l().string.isRequired})),values:l().object,disableAppSelection:l().bool,isCancelling:l().bool,selectedType:l().string,initialWizardState:l().object,activeCategory:l().string},q.defaultProps={values:{},disableAppSelection:!1};const D=q;var N=r(48815),F=r(86482),L=r(86235),I=r(24160),W=function(e){var t=e.id,r=(0,g.Z)().formatMessage({id:"wizard.editSource",defaultMessage:"Edit source"});return"sources"===insights.chrome.getApp()?c().createElement(L.Link,{to:"/sources/detail/".concat(t)},c().createElement(m.Button,{variant:"primary",className:"pf-u-mt-xl"},r)):c().createElement(m.Button,{variant:"primary",className:"pf-u-mt-xl",component:"a",target:"_blank",href:"".concat((0,I.Z)(),"/detail/").concat(t),rel:"noopener noreferrer"},r)};W.propTypes={id:l().string.isRequired};const U=W;var V=r(5746),G=r(50063),H=r(79433),Y=r(4435),$=r(98824),J=function(e){var t,r,n=e.afterSubmit,a=e.afterError,s=e.isFinished,u=e.isErrored,l=e.successfulMessage,d=e.hideSourcesButton,p=e.returnButtonTitle,f=e.reset,y=e.createdSource,h=void 0===y?{}:y,v=e.tryAgain,b=e.afterSuccess,S=e.sourceTypes,T=e.activeCategory,w=e.sourceUuid,O=(0,o.useState)(),C=(0,i.Z)(O,2),M=C[0],Z=C[1],j=(0,o.useState)(),x=(0,i.Z)(j,2),k=x[0],R=x[1],_=(0,g.Z)(),B=c().createElement(m.Button,{variant:"link",onClick:f},_.formatMessage({id:"wizard.addAnotherSource",defaultMessage:"Add another source"}));if(k)r=c().createElement(G.Z,{onClose:n,title:_.formatMessage({id:"wizard.removeSourceSuccessTitle",defaultMessage:"Removing successful"}),successfulMessage:_.formatMessage({id:"wizard.removeSourceSuccessDescription",defaultMessage:"Source was successfully removed."}),hideSourcesButton:d,returnButtonTitle:p,secondaryActions:B});else if(M)r=c().createElement(P.Z,{customText:_.formatMessage({id:"wizard.removingSource",defaultMessage:"Removing source"})});else if(s)switch((0,F.Z)(h)){case"unavailable":r=c().createElement(H.Z,{onClose:n,secondaryActions:c().createElement(m.Button,{variant:"link",onClick:function(){return Z(!0),(0,N.Rj)().deleteSource(h.id).then((function(){b&&b(),R(!0)})).catch((function(){return Z(!1)}))}},_.formatMessage({id:"wizard.removeSource",defaultMessage:"Remove source"})),Component:function(){return c().createElement(U,{id:h.id})},message:(0,V.Z)(h,_),title:_.formatMessage({id:"wizard.configurationUnsuccessful",defaultMessage:"Configuration unsuccessful"})});break;case"timeout":r=c().createElement(Y.Z,{onClose:n,returnButtonTitle:p,secondaryActions:B,uuid:w});break;default:r=h.source_type_id===(null===(t=S.find((function(e){return"amazon"===e.name})))||void 0===t?void 0:t.id)?c().createElement($.Z,{onClose:n}):c().createElement(G.Z,{onClose:n,successfulMessage:l,hideSourcesButton:d,returnButtonTitle:p,secondaryActions:B,uuid:w})}else r=u?c().createElement(H.Z,{onClose:a,primaryAction:v,secondaryActions:c().createElement(m.Text,{component:"a",target:"_blank",href:"https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",rel:"noopener noreferrer"},_.formatMessage({id:"wizard.openTicket",defaultMessage:"Open a support case"})),returnButtonTitle:_.formatMessage({id:"wizard.retryText",defaultMessage:"Retry"})}):c().createElement(P.Z,{customText:_.formatMessage({id:"wizard.loadingText",defaultMessage:"Validating credentials"}),description:c().createElement(m.TextContent,null,c().createElement(m.Text,{className:"pf-u-mb-md"},_.formatMessage({id:"wizard.loadingDescription-a",defaultMessage:"This might take some time. You'll receive a notification if you are still in the Sources application when the process completes. Otherwise, you can check the status in the main sources table at any time."})),c().createElement(m.Text,null,_.formatMessage({id:"wizard.loadingDescription-b",defaultMessage:"In the meantime, you can close this window while the validation process continues."}))),onClose:a,cancelTitle:_.formatMessage({id:"wizard.close",defaultMessage:"Close"})});return c().createElement(m.Wizard,{className:"sources",isOpen:!0,onClose:s?n:a,title:(0,E.Z5)(T),description:(0,E.A6)(T),steps:[{name:"Finish",component:r,isFinishedStep:!0}]})};J.propTypes={afterSubmit:l().func.isRequired,afterError:l().func.isRequired,isFinished:l().bool.isRequired,isErrored:l().bool.isRequired,successfulMessage:l().node.isRequired,hideSourcesButton:l().bool,returnButtonTitle:l().node.isRequired,errorMessage:l().node,reset:l().func,createdSource:l().object,tryAgain:l().func,afterSuccess:l().func,sourceTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired})),activeCategory:l().string,sourceUuid:l().string};const Q=J;var X=r(45587),K=r(84866),ee=r(15861),te=r(64687),re=r.n(te),ne=r(72810),ae=r(96845);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const oe=function(){var e=(0,ee.Z)(re().mark((function e(t){var r,n,a;return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new Date,e.next=4,(0,N.Rj)().bulkCreate({sources:[se(se({},t.source),{},{source_type_name:t.source_type})],authentications:[se(se({},t.authentication),{},{resource_name:t.source.name,resource_type:"source"})],applications:t.applications.map((function(e){return{application_type_id:e,source_name:t.source.name}}))});case 4:return n=e.sent,e.next=7,(0,ne.h)(n.authentications[0].id,void 0,void 0,"showAuthentication",r);case 7:return a=e.sent,e.abrupt("return",se(se(se({},n),n.sources[0]),{},{authentications:[a]}));case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,(0,ae.Z)(e.t0);case 15:throw e.sent;case 17:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();var ce=r(91447),ue=r(42812);function le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?le(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):le(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pe=function(e){return e.url?function(e){if(!e)return{};try{var t=new URL(e);return{scheme:t.protocol.replace(/:$/,""),host:t.hostname,port:t.port,path:t.pathname}}catch(e){return console.log(e),{}}}(e.url):e},fe=function(){var e=(0,ee.Z)(re().mark((function e(t){var r,n,a,i,s,o,c,u,l,d,p,f,m,y,g,h,v,b,S,T,w,O,C,M,Z=arguments;return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Z.length>1&&void 0!==Z[1]?Z[1]:[],n=Z.length>2?Z[2]:void 0,e.prev=2,d={sources:[de(de({},t.source),{},{source_type_name:t.source_type})],endpoints:[],authentications:[],applications:[]},(p=t.url||t.endpoint)&&(f=pe(t),m=f.scheme,y=f.host,g=f.port,h=f.path,v=parseInt(g,10),d.endpoints.push(de(de({},t.endpoint),{},{default:!0,source_name:t.source.name,scheme:m,host:y,port:isNaN(v)?void 0:v,path:h}))),(b=(null===(i=t.application)||void 0===i?void 0:i.application_type_id)&&(null===(s=t.application)||void 0===s?void 0:s.application_type_id)!==E.Dt)&&d.applications.push(de(de({},t.application),{},{source_name:t.source.name})),t.authentication&&t.authentication.authtype!==ue.Z.type&&d.authentications.push(de(de(de({},t.authentication),{},{resource_type:p?"endpoint":b?"application":"source",resource_name:t.source.name},b&&{resource_name:null==n||null===(S=n.find((function(e){return e.id===t.application.application_type_id})))||void 0===S?void 0:S.name}),p&&{resource_name:pe(t).host})),e.next=11,(0,N.Rj)().bulkCreate(d);case 11:if(T=e.sent,a=null===(o=T.sources)||void 0===o?void 0:o[0],w=null===(c=T.applications)||void 0===c?void 0:c[0],O=null===(u=T.endpoints)||void 0===u?void 0:u[0],C=null===(l=T.authentications)||void 0===l?void 0:l[0],!p||!b){e.next=19;break}return e.next=19,(0,N.Rj)().createAuthApp({application_id:w.id,authentication_id:C.id});case 19:return e.next=21,(0,ce.Z)(a.id);case 21:if(!w){e.next=26;break}return M=r.includes(w.application_type_id)?1e4:0,e.next=25,(0,ne.h)(w.id,M);case 25:w=e.sent;case 26:if(!O){e.next=30;break}return e.next=29,(0,ne.h)(O.id,void 0,void 0,"getEndpoint");case 29:O=e.sent;case 30:return e.abrupt("return",de(de({},a),{},{endpoint:[O].filter(Boolean),applications:[w].filter(Boolean)}));case 33:return e.prev=33,e.t0=e.catch(2),e.next=37,(0,ae.S)(e.t0,a?a.id:void 0);case 37:throw e.sent;case 39:case"end":return e.stop()}}),e,null,[[2,33]])})));return function(t){return e.apply(this,arguments)}}(),me=r(66974),ye=["isErrored","isFinished","isSubmitted","values","error","isCancelling","createdSource","activeCategory"];function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ve=function(e,t){return{isSubmitted:!1,isFinished:!1,isErrored:!1,isCancelling:!1,values:e,createdSource:{},error:void 0,activeCategory:t}},be=function(e,t){var r=t.type,n=t.values,a=t.data,i=t.error,s=t.initialValues,o=t.sourceTypes,c=t.applicationTypes;switch(r){case"reset":return ve(s,e.activeCategory);case"prepareSubmitState":return he(he({},e),{},{isFinished:!1,isErrored:!1,error:void 0,isSubmitted:!0,values:n,sourceTypes:o,applicationTypes:c});case"setSubmitted":return he(he({},e),{},{isFinished:!0,createdSource:a});case"setErrored":return he(he({},e),{},{isErrored:!0,error:i.toString()});case"onStay":return he(he({},e),{},{isCancelling:!1});case"showCancelModal":return he(he({},e),{},{isCancelling:!0,values:n})}},Ee=function(e){var t=e.successfulMessage,r=e.isOpen,n=e.sourceTypes,s=e.applicationTypes,u=e.disableAppSelection,l=e.hideSourcesButton,d=e.returnButtonTitle,f=e.initialValues,m=e.onClose,y=e.afterSuccess,g=e.selectedType,h=e.initialWizardState,v=e.submitCallback,b=e.activeCategory,E=(0,o.useReducer)(be,ve(f,b)),S=(0,i.Z)(E,2),T=S[0],w=T.isErrored,O=T.isFinished,C=T.isSubmitted,M=T.values,Z=T.error,j=T.isCancelling,x=T.createdSource,k=T.activeCategory,P=(0,a.Z)(T,ye),R=S[1],_=function(e,t,r,n,a){var i;return R({type:"prepareSubmitState",values:e,sourceTypes:t,applicationTypes:n}),((0,X.Z)(e.source)?oe:fe)(he(he({},e),{},{application:he(he({},e.application),{},{extra:he(he({},(null===(i=e.application)||void 0===i?void 0:i.extra)||{}),{},{hcs:!!a})})}),(0,K.T2)(n),n).then((function(e){y&&y(e),v&&v({isSubmitted:!0,createdSource:e,sourceTypes:t}),R({type:"setSubmitted",data:e})})).catch((function(n){v&&v({isErrored:!0,error:n,values:e,sourceTypes:t,wizardState:r}),R({type:"setErrored",error:n})}))},B=function(){return R({type:"reset",initialValues:f})};return r?C?c().createElement(Q,{afterSubmit:function(){m(void 0,x),B()},afterError:function(){return m({})},isFinished:O,isErrored:w,successfulMessage:t,hideSourcesButton:l,returnButtonTitle:d,errorMessage:Z,reset:B,createdSource:x,tryAgain:function(){return _(M,P.sourceTypes,void 0,P.applicationTypes)},afterSuccess:y,sourceTypes:P.sourceTypes,activeCategory:k,sourceUuid:null==x?void 0:x.uid}):c().createElement(c().Fragment,null,j&&c().createElement(me.Z,{onExit:function(){return m(M)},onStay:function(){return R({type:"onStay"})}}),c().createElement(D,{isCancelling:j,values:M,onSubmit:_,onCancel:function(e){return p()(e)?m({}):R({type:"showCancelModal",values:e})},sourceTypes:n,applicationTypes:s,disableAppSelection:u,selectedType:g,initialWizardState:h,activeCategory:k})):null};Ee.propTypes={afterSuccess:l().func,sourceTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,product_name:l().string.isRequired,schema:l().shape({authentication:l().array,endpoint:l().object})})),applicationTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,display_name:l().string.isRequired})),onClose:l().func.isRequired,isOpen:l().bool.isRequired,successfulMessage:l().node,initialValues:l().shape((0,s.Z)({},l().string,l().oneOf([l().string,l().array,l().number,l().bool]))),disableAppSelection:l().bool,hideSourcesButton:l().bool,returnButtonTitle:l().node,selectedType:l().string,initialWizardState:l().object,submitCallback:l().func,activeCategory:l().oneOf([K.B0,K.JL])},Ee.defaultProps={successfulMessage:c().createElement(f.Z,{id:"wizard.successfulMessage",defaultMessage:"Your source was successfully added."}),initialValues:{},returnButtonTitle:c().createElement(f.Z,{id:"wizard.goBackToSources",defaultMessage:"Go back to Sources"})};var Se=function(e){var t=(0,o.useState)(!1),r=(0,i.Z)(t,2),a=r[0],s=r[1];return c().createElement(c().Fragment,null,c().createElement(m.Button,{variant:"primary",onClick:function(){return s(!0)}},(0,E.Z5)()),c().createElement(Ee,(0,n.Z)({isOpen:a,onClose:function(){return s(!1)}},e)))}},98824:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(92950),a=r.n(n),i=r(45697),s=r.n(i),o=r(86896),c=r(6848),u=r(68778),l=function(e){var t=e.href,r=e.children;return a().createElement(a().Fragment,null,a().createElement(u.ZP,{className:"pf-u-mr-sm",fill:"var(--pf-global--success-color--100)"}),a().createElement(c.Text,{component:"a",href:t,target:"_blank",rel:"noopener noreferrer"},r))};l.propTypes={href:s().string.isRequired,children:s().node.isRequired};var d=insights.chrome.isBeta()?"beta/":"",p="/".concat(d,"subscriptions"),f="/".concat(d,"insights"),m="/".concat(d,"cost-management"),y=function(e){var t=e.onClose,r=(0,o.Z)();return a().createElement(n.Fragment,null,a().createElement(c.Alert,{variant:"info",isInline:!0,title:r.formatMessage({id:"aws.alertTitle",defaultMessage:"Allow 24 hours for full activation"})},r.formatMessage({id:"aws.alertDescription",defaultMessage:"Manage connections for this source at any time in Settings > Sources."})),a().createElement(c.Bullseye,null,a().createElement(c.EmptyState,{variant:c.EmptyStateVariant.full,className:"pf-u-mt-md"},a().createElement(c.EmptyStateIcon,{icon:u.ZP,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),a().createElement(c.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},r.formatMessage({id:"aws.successTitle",defaultMessage:"Amazon Web Services connection established"})),a().createElement(c.EmptyStateBody,null,r.formatMessage({id:"aws.successDescription",defaultMessage:"Discover the benefits of your connection or exit to manage your new source."}),a().createElement(c.Grid,{hasGutter:!0,className:"src-c-aws-grid pf-u-mt-md"},a().createElement(c.GridItem,{md:"6"},a().createElement(l,{href:"https://access.redhat.com/management/cloud"},r.formatMessage({id:"aws.goldImages",defaultMessage:"View enabled AWS gold images"}))),a().createElement(c.GridItem,{md:"6"},a().createElement(l,{href:p},r.formatMessage({id:"aws.subwtachUsage",defaultMessage:"Subscription Watch usage"}))),a().createElement(c.GridItem,{md:"6"},a().createElement(l,{href:f},r.formatMessage({id:"aws.insights",defaultMessage:"Get started with Red Hat Insights"}))),a().createElement(c.GridItem,{md:"6"},a().createElement(l,{href:m},r.formatMessage({id:"aws.costLink",defaultMessage:"Cost Management reporting"}))))),a().createElement(c.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},r.formatMessage({id:"exit",defaultMessage:"Exit"})),a().createElement(c.EmptyStateSecondaryActions,null,a().createElement(c.Text,{component:"a",href:"https://access.redhat.com/public-cloud/aws",target:"_blank",rel:"noopener noreferrer"},r.formatMessage({id:"aws.learnMore",defaultMessage:"Learn more about this Cloud"}))))))};y.propTypes={onClose:s().func.isRequired};const g=y},50063:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(92950),a=r.n(n),i=r(45697),s=r.n(i),o=r(44012),c=r(6848),u=r(68778),l=r(24160),d=function(e){var t=e.onClose,r=e.successfulMessage,n=e.hideSourcesButton,i=e.returnButtonTitle,s=e.title,o=e.linkText,d=e.secondaryActions,p=e.uuid;return a().createElement(c.Bullseye,null,a().createElement(c.EmptyState,{variant:c.EmptyStateVariant.full,className:"pf-u-mt-4xl"},a().createElement(c.EmptyStateIcon,{icon:u.ZP,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),a().createElement(c.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},s),null!=p?p:a().createElement(c.ClipboardCopy,{isReadOnly:!0,hoverTip:"Source UUID",clickTip:"Copied",className:"pf-u-mt-md"},p),a().createElement(c.EmptyStateBody,{className:"src-c-wizard--step-text"},r),a().createElement(c.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},i),!n&&a().createElement(c.EmptyStateSecondaryActions,null,a().createElement(c.Button,{variant:"link",component:"a",target:"_blank",rel:"noopener noreferrer",href:(0,l.Z)()},o)),d&&a().createElement(c.EmptyStateSecondaryActions,null,d)))};d.propTypes={onClose:s().func.isRequired,successfulMessage:s().node.isRequired,hideSourcesButton:s().bool,returnButtonTitle:s().node.isRequired,title:s().node,linkText:s().node,secondaryActions:s().node,uuid:s().string},d.defaultProps={title:a().createElement(o.Z,{id:"wizard.succConfiguration",defaultMessage:"Configuration successful"}),linkText:a().createElement(o.Z,{id:"wizard.toSources",defaultMessage:"Take me to sources"})};const p=d},4435:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(92950),a=r.n(n),i=r(45697),s=r.n(i),o=r(86896),c=r(44012),u=r(6848),l=r(5913),d=function(e){var t=e.onClose,r=e.returnButtonTitle,n=e.title,i=e.secondaryActions,s=e.uuid,c=(0,o.Z)();return a().createElement(u.Bullseye,null,a().createElement(u.EmptyState,{variant:u.EmptyStateVariant.full,className:"pf-u-mt-4xl"},a().createElement(u.EmptyStateIcon,{icon:l.ZP,color:"var(--pf-global--Color--200)",className:"pf-u-mb-0"}),a().createElement(u.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},n),a().createElement(u.EmptyStateBody,null,c.formatMessage({id:"wizard.uncompleteConfigurationDescription",defaultMessage:"We are still working to confirm credentials and app settings.{newLine}To track progress, check the Status column in the Sources table."},{newLine:a().createElement("br",{key:"br"})}),null!=s?s:a().createElement(u.ClipboardCopy,{isReadOnly:!0,hoverTip:"Source UUID",clickTip:"Copied",className:"pf-u-mt-md"},s)),a().createElement(u.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},r),i&&a().createElement(u.EmptyStateSecondaryActions,null,i)))};d.propTypes={onClose:s().func.isRequired,returnButtonTitle:s().node.isRequired,title:s().node,secondaryActions:s().node,uuid:s().string},d.defaultProps={title:a().createElement(c.Z,{id:"wizard.uncompleteConfigurationTitle",defaultMessage:"Configuration in progress"})};const p=d},5746:(e,t,r)=>{r.d(t,{Z:()=>n});const n=function(e,t){var r,n,a,i,s,o;return(null===(r=e.applications)||void 0===r||null===(n=r.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===n?void 0:n.availability_status_error)||(null===(a=e.endpoint)||void 0===a||null===(i=a.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===i?void 0:i.availability_status_error)||(null===(s=e.authentications)||void 0===s||null===(o=s.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===o?void 0:o.availability_status_error)||t.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"})}},24160:(e,t,r)=>{r.d(t,{Z:()=>n});const n=function(){return insights.chrome.isBeta()?"/beta/settings/sources":"/settings/sources"}}}]);
//# sourceMappingURL=../sourcemaps/addSource.82180fc4c8332624e76d5625aed671fa.js.map