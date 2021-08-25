(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[180],{59622:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ae,onSubmit:()=>Ze});var a=n(81253),i=n(28481),r=n(22122),o=n(92137),s=n(87757),c=n.n(s),u=n(92950),p=n.n(u),l=n(334),d=n(45237),f=n(86896),m=n(41609),h=n.n(m),y=n(67850),g=n(98495),v=n(90280),b=n(96156),O=n(85061),T=n(96354),_=n(97066),w=n(32600),M=n(27361),Z=n.n(M),j=n(64124);var A=n(42812);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=n(45697),x=n.n(S),C=n(48880),D=function(e){var t=e.authenticationValues,n=(0,C.default)(),a=n.getState().values.selectedAuthentication,r=(0,u.useState)(a),o=(0,i.Z)(r,2),s=o[0],c=o[1];return(0,u.useEffect)((function(){s!==a&&(function(e){var t=e.formOptions,n=e.authenticationValues,a=e.selectedAuthentication;if(a.startsWith("new-")){var i=a.replace("new-","");t.change("authentication",{authtype:i})}else{var r=n.find((function(e){return e.id===a}));t.change("authentication",r)}}({formOptions:n,authenticationValues:t,selectedAuthentication:a}),c(void 0))}),[a]),null};D.propTypes={authenticationValues:x().arrayOf(x().object)};var k=function(e){var t=e.applicationTypeName,n=e.authenticationTypeName,a=(0,f.Z)();return p().createElement(_.TextContent,null,p().createElement(_.Text,{component:_.TextVariants.p},a.formatMessage({id:"sources.selectAuthenticationDescription",defaultMessage:"Selected application { applicationTypeName } supports { authenticationTypeName } authentication type. You can use already defined authentication values or define new."},{applicationTypeName:t,authenticationTypeName:n})))};k.propTypes={applicationTypeName:x().string,authenticationTypeName:x().string};var V=function(e){var t=e.authenticationValues,n=e.supportedAuthTypeName,a=e.supportedAuthType,i=e.applicationTypes,r=e.source;return t.filter((function(e){return e.authtype===a})).map((function(e){var t=e.username?"-".concat(e.username):"",a=r.applications.find((function(t){return t.authentications.find((function(t){return t.id===e.id}))})),o=a&&a.application_type_id?i.find((function(e){return e.id===a.application_type_id})):"",s=o?"-".concat(o.display_name):"-unused-".concat(e.id);return{label:"".concat(n).concat(t).concat(s),value:e.id}}))};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(){var e=(0,f.Z)();return p().createElement(_.TextContent,null,p().createElement(_.Text,{component:_.TextVariants.p},e.formatMessage({id:"sources.reviewAddAppSummary",defaultMessage:"Review the information below and click Add to add the application to your source. Use the Back button to make changes."})))};const F=function(e,t,n,a,i,r,o,s,c){var u,p,l,d=[];if(!i.imported){var f,m=t.schema.endpoint.hidden?t.schema.endpoint.fields:[],h=0===m.length,y=!n.supported_authentication_types[t.name]||0===n.supported_authentication_types[t.name].length,g=y?[A.Z.type]:n.supported_authentication_types[t.name],v=y?[A.Z]:t.schema.authentication;n.supported_source_types.includes(t.name)&&g.forEach((function(a){d.push(function(e,t,n,a,i,r){var o=(0,O.Z)(n);w.GN(e.name,a,t.name)&&(o=[]);var s,c=[].concat((0,O.Z)(e.schema.authentication),[r?A.Z:void 0]).find((function(e){return e.type===a})),u="".concat(e.name,"-").concat(a,"-").concat(t.name,"-additional-step"),p=w.QW(e.name,a,t.name),l=w.G$(e.name,a,t.name);s=w.Z$(e.name,a,t.name).length>0?u:0!==n.length||p?"summary":"".concat(e.name,"-endpoint");var d=w.gF(e.name,a,t.name),f={};if(w.pD(e.name,a,t.name)){var m=w.Z$(e.name,a,t.name).find((function(e){return!e.name})),h=w.zi(c.fields,u);s=m.nextStep?m.nextStep:0!==n.length||p||l?"summary":"".concat(e.name,"-endpoint"),f=P(P({},m),{},{fields:[].concat((0,O.Z)(o),(0,O.Z)(w.Ow([].concat((0,O.Z)(m.fields),(0,O.Z)(h)),e.name,a,t.name)))})}return P({name:"".concat(e.name,"-").concat(t.id,"-").concat(a),title:i.formatMessage({id:"sources.configureCredentials",defaultMessage:"Configure credentials"}),fields:[].concat((0,O.Z)(o),(0,O.Z)(w.YD(e.name,a,t.name)),(0,O.Z)(w.Ow(w.sM(c.fields,d),e.name,a,t.name))),nextStep:s},f)}(t,n,m,a,e,y))})),v.forEach((function(e){if(n.supported_source_types.includes(t.name)){var a=w.Z$(t.name,e.type,n.name);a.length>0&&d.push.apply(d,(0,O.Z)(w.YV(a,t.name,e.type,h,e.fields,n.name)))}})),h&&d.push(w.TC(t.schema.endpoint,t.name)),u=d[0],(p=(null==n||null===(f=n.supported_authentication_types[t.name])||void 0===f?void 0:f.length)>1)&&(u=function(e,t,n,a){return{name:"selectAuthType-".concat(t.id),title:n.formatMessage({id:"sources.selectAuthenticationTitle",defaultMessage:"Select authentication type"}),fields:[{component:T.Z.RADIO,name:"authtype",options:t.supported_authentication_types[e.name].map((function(t){var n;return{value:t,label:(null===(n=e.schema.authentication.find((function(e){return e.type===t})))||void 0===n?void 0:n.name)||"Unknown type"}})),isRequired:!0,validate:[{type:j.Z.REQUIRED}]}],nextStep:function(t){var n=t.values,i=n.application,r=n.authtype;if(r)return a.find((function(e){return e.authtype===r}))?"selectAuthentication":"".concat(e.name,"-").concat(i&&i.application_type_id,"-").concat(r)}}}(t,n,e,a)),(l=function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).find((function(n){return n.authtype===Z()(e,"supported_authentication_types.".concat(t,"[0]"))}))}(a,n,t.name))&&(u=function(e){var t,n=e.intl,a=e.source,i=e.authenticationValues,r=e.sourceType,o=e.app,s=e.applicationTypes,c=[{component:"description",name:"authtypesetter",Content:D,authenticationValues:i,hideField:!0}],u=o.supported_source_types.includes(r.name),p=!(null!==(t=a.applications)&&void 0!==t&&t.find((function(e){return e.application_type_id===o.id})));return u&&p&&Z()(o,"supported_authentication_types[".concat(r.name,"]"),[]).forEach((function(e){if(i.find((function(t){return t.authtype===e}))){var t=Z()(r,"schema.authentication",{}).find((function(t){return t.type===e})).name;c.push({component:T.Z.SUB_FORM,name:"".concat(o.name,"-subform"),fields:[{name:"".concat(o.name,"-select-authentication-summary"),component:"description",Content:k,applicationTypeName:o.display_name,authenticationTypeName:t},{component:T.Z.RADIO,name:"selectedAuthentication",label:n.formatMessage({id:"sources.selectAuthenticationTitle",defaultMessage:"Select authentication"}),isRequired:!0,validate:[{type:j.Z.REQUIRED}],options:[{label:n.formatMessage({id:"sources.selectAuthenticationradioLabel",defaultMessage:"Define new { supportedAuthTypeName }"},{supportedAuthTypeName:t}),value:"new-".concat(e)}].concat((0,O.Z)(V({authenticationValues:i,supportedAuthTypeName:t,supportedAuthType:e,applicationTypes:s,source:a})))}]})}})),{name:"selectAuthentication",title:n.formatMessage({id:"sources.selectAuthenticationTitle",defaultMessage:"Select authentication"}),fields:c,nextStep:function(e){var t=e.values,n=t.authtype,a=t.authentication;return"".concat(r.name,"-").concat(o.id,"-").concat(n||(null==a?void 0:a.authtype))}}}({intl:e,source:i,authenticationValues:a,sourceType:t,app:n,applicationTypes:c}))}var b={component:T.Z.TEXT_FIELD,name:"application.application_type_id",hideField:!0,initialValue:n.id};return{fields:[{component:T.Z.WIZARD,className:"sources",name:"wizard",title:o,inModal:!0,container:r,showTitles:!0,crossroads:["selectedAuthentication","authtype"],description:s,buttonLabels:{submit:e.formatMessage({id:"sources.add",defaultMessage:"Add"}),cancel:e.formatMessage({id:"sources.cancel",defaultMessage:"Cancel"}),back:e.formatMessage({id:"sources.back",defaultMessage:"Back"})},fields:[].concat((0,O.Z)(i.imported?[]:[N(N({},u),{},{fields:[].concat((0,O.Z)(u.fields),[b])})]),[{title:e.formatMessage({id:"sources.reviewDetails",defaultMessage:"Review details"}),name:"summary",fields:[{component:"description",name:"description-summary",Content:z},{component:"summary",name:"summary",sourceTypes:[t],applicationTypes:[n]}].concat((0,O.Z)(i.imported?[b]:[]))}],(0,O.Z)(l||p?d:d.splice(1)))}]}};var L=function(e){var t=e.step,n=e.goToSources,a=e.title,i=e.description;return p().createElement(_.Wizard,{isOpen:!0,onClose:n,title:a,description:i,steps:[{name:"Finish",component:t,isFinishedStep:!0}]})};L.propTypes={step:S.PropTypes.node.isRequired,goToSources:S.PropTypes.func.isRequired,title:S.PropTypes.string,description:S.PropTypes.string};const B=L;var I=n(79829),W=n(60566),q=n(59824),U=n(4833),Y=n(60076),$=n(90484),Q=n(70190),G=n(82492),H=n.n(G),K=n(50361),X=n.n(K),J=n(34307),ee=n(72810),te=n(96845),ne=n(84866),ae=["authentication"];function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe=function e(t){return Object.keys(t).forEach((function(n){t[n]&&"object"===(0,$.Z)(t[n])?h()(t[n])?delete t[n]:e(t[n]):void 0===t[n]&&delete t[n]})),t},se=function(){var e=(0,o.Z)(c().mark((function e(t,n,r,o){var s,u,p,l,d,f,m,y,g,v,b,O,T,_,w,M,Z,j,E,P,S,x,C,D,k,V,R,N,z,F,L,B,W,q,U,Y,$,G,K,ie,se,ce,ue,pe,le=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=le.length>4&&void 0!==le[4]?le[4]:[],l=n.getState(),d=l.values,f=null===(s=d.authentication)||void 0===s?void 0:s.id,m=f&&r.find((function(e){return e.id===f})),y=t.authentication,g=(0,a.Z)(t,ae),v=(0,Q.addedDiff)(o,g),b=(0,Q.updatedDiff)(o,g),O=(0,Q.addedDiff)(m,y),T=(0,Q.updatedDiff)(m,y),_=oe(re(re({},H()(X()(v),b)),{},{authentication:re({},H()(X()(O),T))})),e.prev=11,null!=d&&null!==(w=d.source)&&void 0!==w&&w.id){e.next=14;break}throw"Missing source id";case 14:return E=new Date,P=d.source.id,S=null==d||null===(M=d.endpoint)||void 0===M?void 0:M.id,x=[],_.source&&!h()(_.source)?x.push((0,I.Rj)().updateSource(P,_.source)):x.push(Promise.resolve(void 0)),C=_.endpoint&&!h()(_.endpoint),D=_.url&&!h()(_.url),C||D?(k=(0,J.K_)(_),V=k.scheme,R=k.host,N=k.port,z=k.path,F=parseInt(N,10),L=oe(re(re({},_.endpoint),{},{scheme:V,host:R,port:isNaN(F)?void 0:F,path:z})),S?x.push((0,I.Rj)().updateEndpoint(S,L)):(B=re(re({},L),{},{default:!0,source_id:P}),x.push((0,I.Rj)().createEndpoint(B)))):x.push(Promise.resolve(void 0)),null!==(Z=_.application)&&void 0!==Z&&Z.application_type_id?(W=re(re({},_.application),{},{source_id:P}),x.push((0,I.Cu)(W))):x.push(Promise.resolve(void 0)),e.next=25,Promise.all(x);case 25:if(q=e.sent,(U=(0,i.Z)(q,3))[0],Y=U[1],$=U[2],!_.authentication||h()(_.authentication)||_.authentication.authtype===A.Z.type){e.next=41;break}if(!f){e.next=37;break}return e.next=34,(0,I.Rj)().updateAuthentication(f,_.authentication);case 34:G=e.sent,e.next=41;break;case 37:return K=re(re({},_.authentication),{},{resource_id:(null==Y?void 0:Y.id)||(null==$?void 0:$.id),resource_type:null!=Y&&Y.id?"Endpoint":"Application",source_id:P}),e.next=40,(0,I.Rj)().createAuthentication(K);case 40:G=e.sent;case 41:if(p=null==$?void 0:$.id,ie=f||(null===(j=G)||void 0===j?void 0:j.id),null==$||!$.id||!ie){e.next=47;break}return se={application_id:$.id,authentication_id:ie},e.next=47,(0,I.Rj)().createAuthApp(se);case 47:if(!S){e.next=51;break}return e.next=50,(0,ee.h)(S,void 0,void 0,"getEndpoint",E);case 50:ce=e.sent;case 51:if(!$){e.next=57;break}return ue=(0,ne.T2)(u).includes($.application_type_id)?1e4:0,e.next=55,(0,ee.h)($.id,ue);case 55:return pe=e.sent,e.abrupt("return",re({id:pe.id,applications:[pe]},ce&&{endpoint:[ce]}));case 57:return e.abrupt("return",{});case 60:if(e.prev=60,e.t0=e.catch(11),console.error(e.t0),!p){e.next=66;break}return e.next=66,(0,I.Rj)().deleteApplication(p);case 66:return e.next=68,(0,te.Z)(e.t0);case 68:throw e.sent;case 70:case"end":return e.stop()}}),e,null,[[11,60]])})));return function(t,n,a,i){return e.apply(this,arguments)}}(),ce=n(91447);function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le={state:"loading",error:"",values:{},authenticationsValues:[],sourceAppsLength:0,initialValues:{},isCancelling:!1};const de=function(e,t){var n=t.type,a=t.length,i=t.authenticationsValues,r=t.initialValues,o=t.error,s=t.values,c=t.data,u=t.formApi;switch(n){case"setSourceAppslength":return pe(pe({},e),{},{sourceAppsLength:a});case"loadAuthentications":return pe(pe({},e),{},{authenticationsValues:i,initialValues:r,values:{},state:"loading"===e.state?"wizard":e.state});case"loadWithoutAuthentications":return pe(pe({},e),{},{initialValues:r,values:{},state:"loading"===e.state?"wizard":e.state});case"reset":return pe(pe({},e),{},{state:"wizard"});case"submit":return pe(pe({},e),{},{values:s,formApi:u,state:"submitting"});case"finish":return pe(pe({},e),{},{state:"finished",data:c});case"error":return pe(pe({},e),{},{state:"errored",error:o});case"toggleCancelling":return pe(pe({},e),{},{isCancelling:!e.isCancelling},s&&{values:s});default:return e}};var fe=n(15185),me=n(52893),he=n(79433),ye=n(98824),ge=n(50063),ve=n(4435),be=n(86482),Oe=n(64673),Te=n(5746),_e=n(66974),we=["application"],Me=["application"],Ze=function(e,t,n,a,i,r,s,u){return i({type:"submit",values:e,formApi:t}),se(e,t,n,r,s).then(function(){var e=(0,o.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,ce.n)(r.source.id),e.next=3,a((0,g.il)());case 3:return u({values:{application:null}}),e.abrupt("return",i({type:"finish",data:t}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return i({type:"error",error:e})}))},je=function(e){return p().createElement(y.ZP,(0,r.Z)({},e,{showFormControls:!1}))};const Ae=function(){var e=(0,f.Z)(),t=(0,l.useHistory)(),n=(0,u.useRef)(),r=function(e){var t=e.values.application;return n.current=t},o=(0,l.useParams)().app_type_id,s=(0,q.W)(),c=(0,d.useSelector)((function(e){return e.sources}),d.shallowEqual),m=c.appTypes,y=c.sourceTypesLoaded,g=c.appTypesLoaded,b=c.sourceTypes,O=(0,W.L)(),T=(0,d.useDispatch)(),w=(0,u.useReducer)(de,le),M=(0,i.Z)(w,2),Z=M[0],j=M[1],A=(0,u.useRef)(document.createElement("div")),E=m.find((function(e){return e.id===o}));(0,u.useEffect)((function(){if(O){var e=Z.sourceAppsLength>=O.applications.length&&Z.sourceAppsLength>0;j({type:"setSourceAppslength",length:O.applications.length}),e||(O.endpoints&&O.endpoints[0]?(0,I.Rj)().listEndpointAuthentications(O.endpoints[0].id).then((function(e){var t=e.data;return j({type:"loadAuthentications",authenticationsValues:t,initialValues:{source:O,endpoint:O.endpoints[0],url:(0,U.Fd)(O.endpoints[0]),application:n.current},values:{}})})):j({type:"loadWithoutAuthentications",initialValues:{source:O,application:n.current},values:{}}))}}),[O]);var P=function(){return t.push((0,Y.yS)(Y._j.sourcesDetail.path,O.id))},S=e.formatMessage({id:"sources.addApplicationNameTitle",defaultMessage:"Connect {appName}"},{appName:(null==E?void 0:E.display_name)||"application"}),x=e.formatMessage({id:"sources.addApplicationNameDescription",defaultMessage:"Configure {appName} for this source."},{appName:(null==E?void 0:E.display_name)||"application"});if(!(g&&y&&s&&"loading"!==Z.state||"submitting"===Z.state))return p().createElement(B,{goToSources:P,title:S,description:x,step:p().createElement(me.Z,{customText:e.formatMessage({id:"sources.loading",defaultMessage:"Loading, please wait."}),cancelTitle:e.formatMessage({id:"sources.close",defaultMessage:"Close"}),onClose:P})});var C=function(e,t){return Ze(e,t,Z.authenticationsValues,T,j,Z.initialValues,m,r)};if("submitting"===Z.state)return p().createElement(B,{title:S,description:x,goToSources:P,step:p().createElement(me.Z,{cancelTitle:e.formatMessage({id:"sources.close",defaultMessage:"Close"}),onClose:P,customText:e.formatMessage({id:"wizard.loadingText",defaultMessage:"Validating credentials"}),description:e.formatMessage({id:"wizard.loadingDescription",defaultMessage:"This could take a minute. If you prefer not to wait, close this dialog and the process will continue."})})});var D=function(){return j({type:"reset"})},k=b.find((function(e){return e.id===O.source_type_id}));if("wizard"!==Z.state){var V;if("finished"!==Z.state)V=p().createElement(he.Z,{onRetry:D,onClose:P,returnButtonTitle:e.formatMessage({id:"sources.retry",defaultMessage:"Retry"}),primaryAction:function(){return C(Z.values,Z.formApi)},secondaryActions:p().createElement(_.Text,{component:"a",target:"_blank",href:"https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",rel:"noopener noreferrer"},e.formatMessage({id:"wizard.openTicket",defaultMessage:"Open a support case"}))});else switch((0,be.Z)(Z.data)){default:V="amazon"===k.name?p().createElement(ye.Z,{onClose:P}):p().createElement(ge.Z,{title:e.formatMessage({id:"sources.configurationSuccessful",defaultMessage:"Configuration successful"}),hideSourcesButton:!0,onClose:P,returnButtonTitle:e.formatMessage({id:"sources.exit",defaultMessage:"Exit"}),successfulMessage:e.formatMessage({id:"sources.successAddApp",defaultMessage:"Your application was successfully added."})});break;case"unavailable":V=p().createElement(he.Z,{onRetry:D,onClose:P,message:(0,Te.Z)(Z.data,e),title:e.formatMessage({id:"sources.configurationSuccessful",defaultMessage:"Configuration unsuccessful"}),secondaryActions:p().createElement(_.Button,{variant:"link",onClick:function(){var t,n;return j({type:"reset"}),(0,fe.Z)({id:null===(t=Z.data)||void 0===t?void 0:t.id,display_name:null===(n=m.find((function(e){var t;return e.id===(null===(t=Z.data)||void 0===t?void 0:t.application_type_id)})))||void 0===n?void 0:n.display_name},e,void 0,T,O)}},e.formatMessage({id:"wizard.removeApp",defaultMessage:"Remove application"})),Component:function(){return p().createElement(l.Link,{to:(0,Y.yS)(Y._j.sourcesDetail.path,O.id)},p().createElement(_.Button,{variant:"primary",className:"pf-u-mt-xl"},e.formatMessage({id:"wizard.editSource",defaultMessage:"Edit source"})))}});break;case"timeout":V=p().createElement(ve.Z,{returnButtonTitle:e.formatMessage({id:"sources.exit",defaultMessage:"Exit"}),onClose:P})}return p().createElement(B,{title:S,description:x,goToSources:P,step:V})}var R=k&&k.name,N=m.filter((function(e){return e.supported_source_types.includes(R)})).filter(Oe.Z).map((function(e){return{value:e.id,label:e.display_name}}));if(!E||O.applications.find((function(e){return e.application_type_id===o}))||!E.supported_source_types.includes(k.name))return p().createElement(l.Redirect,{to:(0,Y.yS)(Y._j.sourcesDetail.path,O.id)});var z=F(e,k,E,Z.authenticationsValues,O,A.current,S,x,m),L=N.length>0?C:P;return p().createElement(p().Fragment,null,Z.isCancelling&&p().createElement(_e.Z,{title:e.formatMessage({id:"sources.manageAppsCloseModalTitle",defaultMessage:"Exit application adding?"}),onStay:function(){A.current.style.opacity=1,j({type:"toggleCancelling"})},onExit:P}),p().createElement(v.Z,{schema:z,showFormControls:!1,onSubmit:L,onCancel:function(e){var t=Z.initialValues,n=(t.application,(0,a.Z)(t,we)),i=(e.application,(0,a.Z)(e,Me));h()((0,Q.diff)(n,i))?P():(A.current.style.opacity=0,j({type:"toggleCancelling",values:e}))},initialValues:Z.initialValues,subscription:{values:!0},debug:r,clearedValue:null,FormTemplate:je}))}}}]);
//# sourceMappingURL=../sourcemaps/addApplication.3295d71decd91a7e0236.js.map