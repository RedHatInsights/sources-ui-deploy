"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[5180],{59622:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce,onSubmit:()=>xe});var a=n(45987),i=n(29439),r=n(87462),o=n(15861),s=n(64687),c=n.n(s),u=n(92950),l=n.n(u),p=n(86235),d=n(5935),m=n(86896),f=n(41609),h=n.n(f),g=n(67850),y=n(11146),v=n(90280),b=n(4942),E=n(93433),w=n(96354),M=n(55138),T=n(32600),Z=n(27361),_=n.n(Z),O=n(64124);var A=n(42812);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=n(45697),j=n.n(C),k=n(48880),P=function(e){var t=e.authenticationValues,n=(0,k.default)(),a=n.getState().values.selectedAuthentication,r=(0,u.useState)(a),o=(0,i.Z)(r,2),s=o[0],c=o[1];return(0,u.useEffect)((function(){s!==a&&(function(e){var t=e.formOptions,n=e.authenticationValues,a=e.selectedAuthentication;if(a.startsWith("new-")){var i=a.replace("new-","");t.change("authentication",{authtype:i})}else{var r=n.find((function(e){return e.id===a}));t.change("authentication",r)}}({formOptions:n,authenticationValues:t,selectedAuthentication:a}),c(void 0))}),[a]),null};P.propTypes={authenticationValues:j().arrayOf(j().object)};var R=function(e){var t=e.applicationTypeName,n=e.authenticationTypeName,a=(0,m.Z)();return l().createElement(M.TextContent,null,l().createElement(M.Text,{component:M.TextVariants.p},a.formatMessage({id:"sources.selectAuthenticationDescription",defaultMessage:"Selected application { applicationTypeName } supports { authenticationTypeName } authentication type. You can use already defined authentication values or define new."},{applicationTypeName:t,authenticationTypeName:n})))};R.propTypes={applicationTypeName:j().string,authenticationTypeName:j().string};var N=function(e){var t=e.authenticationValues,n=e.supportedAuthTypeName,a=e.supportedAuthType,i=e.applicationTypes,r=e.source;return t.filter((function(e){return e.authtype===a})).map((function(e){var t=e.username?"-".concat(e.username):"",a=r.applications.find((function(t){return t.authentications.find((function(t){return t.id===e.id}))})),o=a&&a.application_type_id?i.find((function(e){return e.id===a.application_type_id})):"",s=o?"-".concat(o.display_name):"-unused-".concat(e.id);return{label:"".concat(n).concat(t).concat(s),value:e.id}}))};var D=n(49288);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(){var e=(0,m.Z)();return l().createElement(M.TextContent,null,l().createElement(M.Text,{component:M.TextVariants.p},e.formatMessage({id:"sources.reviewAddAppSummary",defaultMessage:"Review the information below and click Add to add the application to your source. Use the Back button to make changes."})))};const L=function(e,t,n,a,i,r,o,s,c){var u,l,p,d=[],m=(0,D.useFlag)("sources.wizard.lighthouse");if(!i.imported){var f,h,g,y=null!==(f=t.schema.endpoint)&&void 0!==f&&f.hidden?null===(h=t.schema.endpoint)||void 0===h?void 0:h.fields:[],v=void 0!==t.schema.endpoint&&0===y.length,b=!n.supported_authentication_types[t.name]||0===n.supported_authentication_types[t.name].length,M=b?[A.Z.type]:n.supported_authentication_types[t.name],Z=b?[A.Z]:t.schema.authentication;n.supported_source_types.includes(t.name)&&M.forEach((function(a){d.push(function(e,t,n,a,i,r){var o,s=(0,E.Z)(n),c=e.schema.endpoint&&!(null!==(o=e.schema.enpoint)&&void 0!==o&&o.hidden);T.GN(e.name,a,t.name)&&(s=[]);var u,l=[].concat((0,E.Z)(e.schema.authentication),[r?A.Z:void 0]).find((function(e){return e.type===a})),p="".concat(e.name,"-").concat(a,"-").concat(t.name,"-additional-step"),d=T.QW(e.name,a,t.name),m=T.G$(e.name,a,t.name);u=T.Z$(e.name,a,t.name).length>0?p:0===n.length&&!d&&c?"".concat(e.name,"-endpoint"):"summary";var f=T.gF(e.name,a,t.name),h={};if(T.pD(e.name,a,t.name)){var g=T.Z$(e.name,a,t.name).find((function(e){return!e.name})),y=T.zi(l.fields,p);u=g.nextStep?g.nextStep:0!==n.length||d||m||!c?"summary":"".concat(e.name,"-endpoint"),h=S(S({},g),{},{fields:[].concat((0,E.Z)(s),(0,E.Z)(T.Ow([].concat((0,E.Z)(g.fields),(0,E.Z)(y)),e.name,a,t.name)))})}return S({name:"".concat(e.name,"-").concat(t.id,"-").concat(a),title:i.formatMessage({id:"sources.configureCredentials",defaultMessage:"Configure credentials"}),fields:[].concat((0,E.Z)(s),(0,E.Z)(T.YD(e.name,a,t.name)),(0,E.Z)(T.Ow(T.sM(l.fields,f),e.name,a,t.name))),nextStep:u},h)}(t,n,y,a,e,b))})),Z.forEach((function(e){if(n.supported_source_types.includes(t.name)){var a=T.Z$(t.name,e.type,n.name,m);a.length>0&&d.push.apply(d,(0,E.Z)(T.YV(a,t.name,e.type,v,e.fields,n.name)))}})),v&&d.push(T.TC(t.schema.endpoint,t.name)),u=d[0],(l=(null==n||null===(g=n.supported_authentication_types[t.name])||void 0===g?void 0:g.length)>1)&&(u=function(e,t,n,a){return{name:"selectAuthType-".concat(t.id),title:n.formatMessage({id:"sources.selectAuthenticationTitle",defaultMessage:"Select authentication type"}),fields:[{component:w.Z.RADIO,name:"authtype",options:t.supported_authentication_types[e.name].map((function(t){var n;return{value:t,label:(null===(n=e.schema.authentication.find((function(e){return e.type===t})))||void 0===n?void 0:n.name)||"Unknown type"}})),isRequired:!0,validate:[{type:O.Z.REQUIRED}]}],nextStep:function(t){var n=t.values,i=n.application,r=n.authtype;if(r)return a.find((function(e){return e.authtype===r}))?"selectAuthentication":"".concat(e.name,"-").concat(i&&i.application_type_id,"-").concat(r)}}}(t,n,e,a)),p=function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).find((function(n){return n.authtype===_()(e,"supported_authentication_types.".concat(t,"[0]"))}))}(a,n,t.name),p&&(u=function(e){var t,n=e.intl,a=e.source,i=e.authenticationValues,r=e.sourceType,o=e.app,s=e.applicationTypes,c=[{component:"description",name:"authtypesetter",Content:P,authenticationValues:i,hideField:!0}],u=o.supported_source_types.includes(r.name),l=!(null!==(t=a.applications)&&void 0!==t&&t.find((function(e){return e.application_type_id===o.id})));return u&&l&&_()(o,"supported_authentication_types[".concat(r.name,"]"),[]).forEach((function(e){if(i.find((function(t){return t.authtype===e}))){var t=_()(r,"schema.authentication",{}).find((function(t){return t.type===e})).name;c.push({component:w.Z.SUB_FORM,name:"".concat(o.name,"-subform"),fields:[{name:"".concat(o.name,"-select-authentication-summary"),component:"description",Content:R,applicationTypeName:o.display_name,authenticationTypeName:t},{component:w.Z.RADIO,name:"selectedAuthentication",label:n.formatMessage({id:"sources.selectAuthenticationTitle",defaultMessage:"Select authentication"}),isRequired:!0,validate:[{type:O.Z.REQUIRED}],options:[{label:n.formatMessage({id:"sources.selectAuthenticationradioLabel",defaultMessage:"Define new { supportedAuthTypeName }"},{supportedAuthTypeName:t}),value:"new-".concat(e)}].concat((0,E.Z)(N({authenticationValues:i,supportedAuthTypeName:t,supportedAuthType:e,applicationTypes:s,source:a})))}]})}})),{name:"selectAuthentication",title:n.formatMessage({id:"sources.selectAuthenticationTitle",defaultMessage:"Select authentication"}),fields:c,nextStep:function(e){var t=e.values,n=t.authtype,a=t.authentication;return"".concat(r.name,"-").concat(o.id,"-").concat(n||(null==a?void 0:a.authtype))}}}({intl:e,source:i,authenticationValues:a,sourceType:t,app:n,applicationTypes:c}))}var x={component:w.Z.TEXT_FIELD,name:"application.application_type_id",hideField:!0,initialValue:n.id};return{fields:[{component:w.Z.WIZARD,className:"sources",name:"wizard",title:o,inModal:!0,container:r,showTitles:!0,crossroads:["selectedAuthentication","authtype"],description:s,closeButtonAriaLabel:e.formatMessage({id:"wizard.close",defaultMessage:"Close wizard"}),buttonLabels:{submit:e.formatMessage({id:"sources.add",defaultMessage:"Add"}),cancel:e.formatMessage({id:"sources.cancel",defaultMessage:"Cancel"}),back:e.formatMessage({id:"sources.back",defaultMessage:"Back"})},fields:[].concat((0,E.Z)(i.imported?[]:[V(V({},u),{},{fields:[].concat((0,E.Z)(u.fields),[x])})]),[{title:e.formatMessage({id:"sources.reviewDetails",defaultMessage:"Review details"}),name:"summary",fields:[{component:"description",name:"description-summary",Content:z},{component:"summary",name:"summary",sourceTypes:[t],applicationTypes:[n]}].concat((0,E.Z)(i.imported?[x]:[]))}],(0,E.Z)(p||l?d:d.splice(1)))}]}};var I=function(e){var t=e.step,n=e.goToSources,a=e.title,i=e.description;return l().createElement(M.Wizard,{isOpen:!0,onClose:n,title:a,description:i,steps:[{name:"Finish",component:t,isFinishedStep:!0}]})};I.propTypes={step:C.PropTypes.node.isRequired,goToSources:C.PropTypes.func.isRequired,title:C.PropTypes.string,description:C.PropTypes.string};const F=I;var q=n(48815),W=n(60566),G=n(59824),U=n(4833),Y=n(60076),$=n(71002),Q=n(23389),H=n(91922),K=n(82492),X=n.n(K),J=n(50361),ee=n.n(J),te=n(34307),ne=n(72810),ae=n(96845),ie=n(84866),re=["authentication"];function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce=function e(t){return Object.keys(t).forEach((function(n){t[n]&&"object"===(0,$.Z)(t[n])?h()(t[n])?delete t[n]:e(t[n]):void 0===t[n]&&delete t[n]})),t},ue=function(){var e=(0,o.Z)(c().mark((function e(t,n,r,o){var s,u,l,p,d,m,f,g,y,v,b,E,w,M,T,Z,_,O,x,S,C,j,k,P,R,N,D,B,V,z,L,I,F,W,G,U,Y,$,K,J,oe,ue,le,pe,de=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=de.length>4&&void 0!==de[4]?de[4]:[],p=n.getState(),d=p.values,m=null===(s=d.authentication)||void 0===s?void 0:s.id,f=m&&r.find((function(e){return e.id===m})),g=t.authentication,y=(0,a.Z)(t,re),v=(0,Q.Z)(o,y),b=(0,H.Z)(o,y),E=(0,Q.Z)(f,g),w=(0,H.Z)(f,g),M=ce(se(se({},X()(ee()(v),b)),{},{authentication:se({},X()(ee()(E),w))})),e.prev=11,null!=d&&null!==(T=d.source)&&void 0!==T&&T.id){e.next=14;break}throw"Missing source id";case 14:return x=new Date,S=d.source.id,C=null==d||null===(Z=d.endpoint)||void 0===Z?void 0:Z.id,j=[],M.source&&!h()(M.source)?j.push((0,q.Rj)().updateSource(S,M.source)):j.push(Promise.resolve(void 0)),k=M.endpoint&&!h()(M.endpoint),P=M.url&&!h()(M.url),k||P?(R=(0,te.K_)(M),N=R.scheme,D=R.host,B=R.port,V=R.path,z=parseInt(B,10),L=ce(se(se({},M.endpoint),{},{scheme:N,host:D,port:isNaN(z)?void 0:z,path:V})),C?j.push((0,q.Rj)().updateEndpoint(C,L)):(I=se(se({},L),{},{default:!0,source_id:S}),j.push((0,q.Rj)().createEndpoint(I)))):j.push(Promise.resolve(void 0)),null!==(_=M.application)&&void 0!==_&&_.application_type_id?(F=se(se({},M.application),{},{source_id:S}),j.push((0,q.Cu)(F))):j.push(Promise.resolve(void 0)),e.next=25,Promise.all(j);case 25:if(W=e.sent,(G=(0,i.Z)(W,3))[0],U=G[1],Y=G[2],l=null==Y?void 0:Y.id,!M.authentication||h()(M.authentication)||M.authentication.authtype===A.Z.type){e.next=42;break}if(!m){e.next=38;break}return e.next=35,(0,q.Rj)().updateAuthentication(m,M.authentication);case 35:$=e.sent,e.next=42;break;case 38:return K=se(se({},M.authentication),{},{resource_id:(null==U?void 0:U.id)||(null==Y?void 0:Y.id),resource_type:null!=U&&U.id?"Endpoint":"Application"}),e.next=41,(0,q.Rj)().createAuthentication(K);case 41:$=e.sent;case 42:if(J=m||(null===(O=$)||void 0===O?void 0:O.id),null==Y||!Y.id||!J){e.next=47;break}return oe={application_id:Y.id,authentication_id:J},e.next=47,(0,q.Rj)().createAuthApp(oe);case 47:if(!C){e.next=51;break}return e.next=50,(0,ne.h)(C,void 0,void 0,"getEndpoint",x);case 50:ue=e.sent;case 51:if(!Y){e.next=57;break}return le=(0,ie.T2)(u).includes(Y.application_type_id)?1e4:0,e.next=55,(0,ne.h)(Y.id,le);case 55:return pe=e.sent,e.abrupt("return",se({id:pe.id,applications:[pe]},ue&&{endpoint:[ue]}));case 57:return e.abrupt("return",{});case 60:if(e.prev=60,e.t0=e.catch(11),console.error(e.t0),!l){e.next=66;break}return e.next=66,(0,q.Rj)().deleteApplication(l);case 66:return e.next=68,(0,ae.Z)(e.t0);case 68:throw e.sent;case 70:case"end":return e.stop()}}),e,null,[[11,60]])})));return function(t,n,a,i){return e.apply(this,arguments)}}(),le=n(91447);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me={state:"loading",error:"",values:{},authenticationsValues:[],sourceAppsLength:0,initialValues:{},isCancelling:!1};const fe=function(e,t){var n=t.type,a=t.length,i=t.authenticationsValues,r=t.initialValues,o=t.error,s=t.values,c=t.data,u=t.formApi;switch(n){case"setSourceAppslength":return de(de({},e),{},{sourceAppsLength:a});case"loadAuthentications":return de(de({},e),{},{authenticationsValues:i,initialValues:r,values:{},state:"loading"===e.state?"wizard":e.state});case"loadWithoutAuthentications":return de(de({},e),{},{initialValues:r,values:{},state:"loading"===e.state?"wizard":e.state});case"reset":return de(de({},e),{},{state:"wizard"});case"submit":return de(de({},e),{},{values:s,formApi:u,state:"submitting"});case"finish":return de(de({},e),{},{state:"finished",data:c});case"error":return de(de({},e),{},{state:"errored",error:o});case"toggleCancelling":return de(de({},e),{},{isCancelling:!e.isCancelling},s&&{values:s});default:return e}};var he=n(15185),ge=n(31623),ye=n(52893),ve=n(79433),be=n(98824),Ee=n(50063),we=n(4435),Me=n(86482),Te=n(64673),Ze=n(5746),_e=n(66974),Oe=["application"],Ae=["application"],xe=function(e,t,n,a,i,r,s,u){return i({type:"submit",values:e,formApi:t}),ue(e,t,n,r,s).then(function(){var e=(0,o.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,le.n)(r.source.id),e.next=3,a((0,y.il)());case 3:return u({values:{application:null}}),e.abrupt("return",i({type:"finish",data:t}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return i({type:"error",error:e})}))},Se=function(e){return l().createElement(g.ZP,(0,r.Z)({},e,{showFormControls:!1}))};const Ce=function(){var e=(0,m.Z)(),t=(0,p.useHistory)(),n=(0,u.useRef)(),r=function(e){var t=e.values.application;return n.current=t},o=(0,p.useParams)().app_type_id,s=(0,G.W)(),c=(0,d.v9)((function(e){return e.sources}),d.wU),f=c.appTypes,g=c.sourceTypesLoaded,y=c.appTypesLoaded,b=c.sourceTypes,E=(0,W.L)(),w=(0,d.I0)(),T=(0,u.useReducer)(fe,me),Z=(0,i.Z)(T,2),_=Z[0],O=Z[1],A=(0,u.useRef)(document.createElement("div")),x=f.find((function(e){return e.id===o}));(0,u.useEffect)((function(){if(E){var e=_.sourceAppsLength>=E.applications.length&&_.sourceAppsLength>0;O({type:"setSourceAppslength",length:E.applications.length}),e||(E.endpoints&&E.endpoints[0]?(0,q.Rj)().listEndpointAuthentications(E.endpoints[0].id).then((function(e){var t=e.data;return O({type:"loadAuthentications",authenticationsValues:t,initialValues:{source:E,endpoint:E.endpoints[0],url:(0,U.Fd)(E.endpoints[0]),application:n.current},values:{}})})):O({type:"loadWithoutAuthentications",initialValues:{source:E,application:n.current},values:{}}))}}),[E]);var S=function(){return t.push((0,Y.yS)(Y._j.sourcesDetail.path,E.id))},C=e.formatMessage({id:"sources.addApplicationNameTitle",defaultMessage:"Connect {appName}"},{appName:(null==x?void 0:x.display_name)||"application"}),j=e.formatMessage({id:"sources.addApplicationNameDescription",defaultMessage:"Configure {appName} for this source."},{appName:(null==x?void 0:x.display_name)||"application"});if(!(y&&g&&s&&"loading"!==_.state||"submitting"===_.state))return l().createElement(F,{goToSources:S,title:C,description:j,step:l().createElement(ye.Z,{customText:e.formatMessage({id:"sources.loading",defaultMessage:"Loading, please wait."}),cancelTitle:e.formatMessage({id:"sources.close",defaultMessage:"Close"}),onClose:S})});var k=function(e,t){return xe(e,t,_.authenticationsValues,w,O,_.initialValues,f,r)};if("submitting"===_.state)return l().createElement(F,{title:C,description:j,goToSources:S,step:l().createElement(ye.Z,{cancelTitle:e.formatMessage({id:"sources.close",defaultMessage:"Close"}),onClose:S,customText:e.formatMessage({id:"wizard.loadingText",defaultMessage:"Validating credentials"}),description:e.formatMessage({id:"wizard.loadingDescription",defaultMessage:"This could take a minute. If you prefer not to wait, close this dialog and the process will continue."})})});var P=function(){return O({type:"reset"})},R=b.find((function(e){return e.id===E.source_type_id}));if("wizard"!==_.state){var N;if("finished"!==_.state)N=l().createElement(ve.Z,{onRetry:P,onClose:S,returnButtonTitle:e.formatMessage({id:"sources.retry",defaultMessage:"Retry"}),primaryAction:function(){return k(_.values,_.formApi)},secondaryActions:l().createElement(M.Text,{component:"a",target:"_blank",href:"https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",rel:"noopener noreferrer"},e.formatMessage({id:"wizard.openTicket",defaultMessage:"Open a support case"}))});else switch((0,Me.Z)(_.data)){default:N="amazon"===R.name?l().createElement(be.Z,{onClose:S}):l().createElement(Ee.Z,{title:e.formatMessage({id:"sources.configurationSuccessful",defaultMessage:"Configuration successful"}),hideSourcesButton:!0,onClose:S,returnButtonTitle:e.formatMessage({id:"sources.exit",defaultMessage:"Exit"}),successfulMessage:e.formatMessage({id:"sources.successAddApp",defaultMessage:"Your application was successfully added."})});break;case"unavailable":N=l().createElement(ve.Z,{onRetry:P,onClose:S,message:(0,Ze.Z)(_.data,e),title:e.formatMessage({id:"sources.configurationSuccessful",defaultMessage:"Configuration unsuccessful"}),secondaryActions:l().createElement(M.Button,{variant:"link",onClick:function(){var t,n;return O({type:"reset"}),(0,he.Z)({id:null===(t=_.data)||void 0===t?void 0:t.id,display_name:null===(n=f.find((function(e){var t,n,a;return e.id===(null===(t=_.data)||void 0===t||null===(n=t.applications)||void 0===n||null===(a=n[0])||void 0===a?void 0:a.application_type_id)})))||void 0===n?void 0:n.display_name},e,void 0,w,E)}},e.formatMessage({id:"wizard.removeApp",defaultMessage:"Remove application"})),Component:function(){return l().createElement(p.Link,{to:(0,Y.yS)(Y._j.sourcesDetail.path,E.id)},l().createElement(M.Button,{variant:"primary",className:"pf-u-mt-xl"},e.formatMessage({id:"wizard.editSource",defaultMessage:"Edit source"})))}});break;case"timeout":N=l().createElement(we.Z,{returnButtonTitle:e.formatMessage({id:"sources.exit",defaultMessage:"Exit"}),onClose:S})}return l().createElement(F,{title:C,description:j,goToSources:S,step:N})}var D=R&&R.name,B=f.filter((function(e){return e.supported_source_types.includes(D)})).filter(Te.Z).map((function(e){return{value:e.id,label:e.display_name}}));if(!x||E.applications.find((function(e){return e.application_type_id===o}))||!x.supported_source_types.includes(R.name))return l().createElement(p.Redirect,{to:(0,Y.yS)(Y._j.sourcesDetail.path,E.id)});var V=L(e,R,x,_.authenticationsValues,E,A.current,C,j,f),z=B.length>0?k:S;return l().createElement(l().Fragment,null,_.isCancelling&&l().createElement(_e.Z,{title:e.formatMessage({id:"sources.manageAppsCloseModalTitle",defaultMessage:"Exit application adding?"}),onStay:function(){A.current.style.opacity=1,A.current.setAttribute("aria-hidden","false"),O({type:"toggleCancelling"})},onExit:S}),l().createElement(v.Z,{schema:V,showFormControls:!1,onSubmit:z,onCancel:function(e){var t=_.initialValues,n=(t.application,(0,a.Z)(t,Oe)),i=(e.application,(0,a.Z)(e,Ae));h()((0,ge.Z)(n,i))?S():(A.current.style.opacity=0,A.current.setAttribute("aria-hidden","true"),O({type:"toggleCancelling",values:e}))},initialValues:_.initialValues,subscription:{values:!0},debug:r,clearedValue:null,FormTemplate:Se}))}},15185:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(11146);const i=function(e,t,n,i,r){var o=t.formatMessage({id:"sources.removeAppWarning",defaultMessage:"{ name } was removed from this source."},{name:e.display_name}),s=t.formatMessage({id:"sources.removeAppError",defaultMessage:"Removing of { name } application from this source was unsuccessful."},{name:e.display_name});return n&&n(),i((0,a.Yn)(e.id,r.id,o,s))}},66974:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(92950),i=n.n(a),r=n(45697),o=n.n(r),s=n(86896),c=n(44012),u=n(55138),l=n(69957),p=function(e){var t=e.onExit,n=e.onStay,r=e.title,o=e.exitTitle,c=e.stayTitle,p=e.description,d=(0,s.Z)(),m=(0,a.useRef)(!1);return i().createElement(u.Modal,{onEscapePress:function(e){m.current&&n(e),m.current=!0},className:"sources",variant:"small",title:r,"aria-label":d.formatMessage({id:"wizard.closeAriaLabel",defaultMessage:"Close add source wizard"}),header:i().createElement(u.Title,{headingLevel:"h1",size:"2xl"},i().createElement(l.ZP,{size:"sm",className:"src-c-warning-icon","aria-label":"Exclamation icon"}),r),isOpen:!0,onClose:n,actions:[i().createElement(u.Button,{key:"confirm",variant:"primary",id:"on-exit-button",onClick:t},o),i().createElement(u.Button,{key:"cancel",variant:"link",id:"on-stay-button",onClick:n},c)]},p)};p.propTypes={onExit:o().func.isRequired,onStay:o().func.isRequired,title:o().node,exitTitle:o().node,stayTitle:o().node,description:o().node},p.defaultProps={title:i().createElement(c.Z,{id:"wizard.closeTitle",defaultMessage:"Exit source creation?"}),exitTitle:i().createElement(c.Z,{id:"wizard.exitText",defaultMessage:"Exit"}),stayTitle:i().createElement(c.Z,{id:"wizard.stayText",defaultMessage:"Stay"}),description:i().createElement(c.Z,{id:"wizard.closeWarning",defaultMessage:"All inputs will be discarded."})};const d=p},98824:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(92950),i=n.n(a),r=n(45697),o=n.n(r),s=n(86896),c=n(55138),u=n(68778),l=function(e){var t=e.href,n=e.children;return i().createElement(i().Fragment,null,i().createElement(u.ZP,{className:"pf-u-mr-sm",fill:"var(--pf-global--success-color--100)"}),i().createElement(c.Text,{component:"a",href:t,target:"_blank",rel:"noopener noreferrer"},n))};l.propTypes={href:o().string.isRequired,children:o().node.isRequired};var p=insights.chrome.isBeta()?"beta/":"",d="/".concat(p,"subscriptions"),m="/".concat(p,"insights"),f="/".concat(p,"cost-management"),h=function(e){var t=e.onClose,n=(0,s.Z)();return i().createElement(a.Fragment,null,i().createElement(c.Alert,{variant:"info",isInline:!0,title:n.formatMessage({id:"aws.alertTitle",defaultMessage:"Allow 24 hours for full activation"})},n.formatMessage({id:"aws.alertDescription",defaultMessage:"Manage connections for this source at any time in Settings > Sources."})),i().createElement(c.Bullseye,null,i().createElement(c.EmptyState,{variant:c.EmptyStateVariant.full,className:"pf-u-mt-md"},i().createElement(c.EmptyStateIcon,{icon:u.ZP,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),i().createElement(c.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},n.formatMessage({id:"aws.successTitle",defaultMessage:"Amazon Web Services connection established"})),i().createElement(c.EmptyStateBody,null,n.formatMessage({id:"aws.successDescription",defaultMessage:"Discover the benefits of your connection or exit to manage your new source."}),i().createElement(c.Grid,{hasGutter:!0,className:"src-c-aws-grid pf-u-mt-md"},i().createElement(c.GridItem,{md:"6"},i().createElement(l,{href:"https://access.redhat.com/management/cloud"},n.formatMessage({id:"aws.goldImages",defaultMessage:"View enabled AWS gold images"}))),i().createElement(c.GridItem,{md:"6"},i().createElement(l,{href:d},n.formatMessage({id:"aws.subwtachUsage",defaultMessage:"Subscription Watch usage"}))),i().createElement(c.GridItem,{md:"6"},i().createElement(l,{href:m},n.formatMessage({id:"aws.insights",defaultMessage:"Get started with Red Hat Insights"}))),i().createElement(c.GridItem,{md:"6"},i().createElement(l,{href:f},n.formatMessage({id:"aws.costLink",defaultMessage:"Cost Management reporting"}))))),i().createElement(c.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},n.formatMessage({id:"exit",defaultMessage:"Exit"})),i().createElement(c.EmptyStateSecondaryActions,null,i().createElement(c.Text,{component:"a",href:"https://access.redhat.com/public-cloud/aws",target:"_blank",rel:"noopener noreferrer"},n.formatMessage({id:"aws.learnMore",defaultMessage:"Learn more about this Cloud"}))))))};h.propTypes={onClose:o().func.isRequired};const g=h},50063:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(92950),i=n.n(a),r=n(45697),o=n.n(r),s=n(44012),c=n(55138),u=n(68778),l=n(24160),p=function(e){var t=e.onClose,n=e.successfulMessage,a=e.hideSourcesButton,r=e.returnButtonTitle,o=e.title,s=e.linkText,p=e.secondaryActions;return i().createElement(c.Bullseye,null,i().createElement(c.EmptyState,{variant:c.EmptyStateVariant.full,className:"pf-u-mt-4xl"},i().createElement(c.EmptyStateIcon,{icon:u.ZP,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),i().createElement(c.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},o),i().createElement(c.EmptyStateBody,{className:"src-c-wizard--step-text"},n),i().createElement(c.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},r),!a&&i().createElement(c.EmptyStateSecondaryActions,null,i().createElement(c.Button,{variant:"link",component:"a",target:"_blank",rel:"noopener noreferrer",href:(0,l.Z)()},s)),p&&i().createElement(c.EmptyStateSecondaryActions,null,p)))};p.propTypes={onClose:o().func.isRequired,successfulMessage:o().node.isRequired,hideSourcesButton:o().bool,returnButtonTitle:o().node.isRequired,title:o().node,linkText:o().node,secondaryActions:o().node},p.defaultProps={title:i().createElement(s.Z,{id:"wizard.succConfiguration",defaultMessage:"Configuration successful"}),linkText:i().createElement(s.Z,{id:"wizard.toSources",defaultMessage:"Take me to sources"})};const d=p},4435:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(92950),i=n.n(a),r=n(45697),o=n.n(r),s=n(86896),c=n(44012),u=n(55138),l=n(5913),p=function(e){var t=e.onClose,n=e.returnButtonTitle,a=e.title,r=e.secondaryActions,o=(0,s.Z)();return i().createElement(u.Bullseye,null,i().createElement(u.EmptyState,{variant:u.EmptyStateVariant.full,className:"pf-u-mt-4xl"},i().createElement(u.EmptyStateIcon,{icon:l.ZP,color:"var(--pf-global--Color--200)",className:"pf-u-mb-0"}),i().createElement(u.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},a),i().createElement(u.EmptyStateBody,null,o.formatMessage({id:"wizard.uncompleteConfigurationDescription",defaultMessage:"We are still working to confirm credentials and app settings.{newLine}To track progress, check the Status column in the Sources table."},{newLine:i().createElement("br",{key:"br"})})),i().createElement(u.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},n),r&&i().createElement(u.EmptyStateSecondaryActions,null,r)))};p.propTypes={onClose:o().func.isRequired,returnButtonTitle:o().node.isRequired,title:o().node,secondaryActions:o().node},p.defaultProps={title:i().createElement(c.Z,{id:"wizard.uncompleteConfigurationTitle",defaultMessage:"Configuration in progress"})};const d=p},5746:(e,t,n)=>{n.d(t,{Z:()=>a});const a=function(e,t){var n,a,i,r,o,s;return(null===(n=e.applications)||void 0===n||null===(a=n.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===a?void 0:a.availability_status_error)||(null===(i=e.endpoint)||void 0===i||null===(r=i.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===r?void 0:r.availability_status_error)||(null===(o=e.authentications)||void 0===o||null===(s=o.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===s?void 0:s.availability_status_error)||t.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"})}},86482:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(93433);const i=function(e){var t,n,i,r=(null===(t=e.applications)||void 0===t?void 0:t.filter(Boolean).map((function(e){return e.availability_status||"timeout"})))||[],o=(null===(n=e.endpoint)||void 0===n?void 0:n.filter(Boolean).map((function(e){return e.availability_status||"timeout"})))||[],s=(null===(i=e.authentications)||void 0===i?void 0:i.filter(Boolean).map((function(e){return e.availability_status||"timeout"})))||[],c=[].concat((0,a.Z)(r),(0,a.Z)(o),(0,a.Z)(s));return c.includes("unavailable")?"unavailable":c.length>0&&c.every((function(e){return"available"===e}))?"available":c.includes("timeout")?"timeout":"finished"}},24160:(e,t,n)=>{n.d(t,{Z:()=>a});const a=function(){return insights.chrome.isBeta()?"/beta/settings/sources":"/settings/sources"}}}]);