(self.webpackChunksources=self.webpackChunksources||[]).push([[994],{34307:(e,t,n)=>{"use strict";n.d(t,{K_:()=>s,yH:()=>c});var a=n(4942),r=n(4833),i=n(48815);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var s=function(e){return e.url||null===e.url?function(e){if(null===e)return{scheme:null,host:null,port:null,path:null};if(!e)return{};try{var t=new URL(e),n=t.protocol.replace(/:$/,"");return{scheme:n,host:t.hostname,port:""===t.port?(0,r.bF)(n):t.port,path:t.pathname}}catch(e){return{}}}(e.url):e.endpoint?e.endpoint:e},c=function(e,t,n){var r=[];if(t.source&&r.push((0,i.Rj)().updateSource(e.source.id,t.source)),t.endpoint||t.url||null===t.url){var c=s(t),u=c.scheme,p=c.host,l=c.port,d=c.path,f=null===l?null:parseInt(l,10),m=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({scheme:u,host:p,path:d,port:null===f?null:isNaN(f)?void 0:f},t.endpoint);r.push((0,i.Rj)().updateEndpoint(e.endpoints[0].id,m))}return t.authentications&&Object.keys(t.authentications).forEach((function(e){var n=e.replace("a","");r.push((0,i.Rj)().updateAuthentication(n,t.authentications[e]))})),t.applications&&Object.keys(t.applications).forEach((function(e){var t=e.replace("a","");r.push((0,i.Rj)().updateApplication(t,{extra:n.applications[e].extra}))})),Promise.all(r)}},13508:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Be,onSubmit:()=>Fe});var a=n(45987),r=n(29439),i=n(87462),o=n(15861),s=n(64687),c=n.n(s),u=n(92950),p=n.n(u),l=n(49881),d=n(86706),f=n(86896),m=n(41609),h=n.n(m),v=n(49288),y=n(67850),g=n(89372),b=n(90280),O=n(4942),j=n(93433),w=n(96354),_=n(6848),M=n(32600),T=n(27361),Z=n.n(T),A=n(64124);var x=n(42812);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=n(45697),k=n.n(S),C=n(48880),D=function(e){var t=e.authenticationValues,n=(0,C.default)(),a=n.getState().values.selectedAuthentication,i=(0,u.useState)(a),o=(0,r.Z)(i,2),s=o[0],c=o[1];return(0,u.useEffect)((function(){s!==a&&(function(e){var t=e.formOptions,n=e.authenticationValues,a=e.selectedAuthentication;if(a.startsWith("new-")){var r=a.replace("new-","");t.change("authentication",{authtype:r})}else{var i=n.find((function(e){return e.id===a}));t.change("authentication",i)}}({formOptions:n,authenticationValues:t,selectedAuthentication:a}),c(void 0))}),[a]),null};D.propTypes={authenticationValues:k().arrayOf(k().object)};var R=function(e){var t=e.applicationTypeName,n=e.authenticationTypeName,a=(0,f.Z)();return p().createElement(_.TextContent,null,p().createElement(_.Text,{component:_.TextVariants.p},a.formatMessage({id:"sources.selectAuthenticationDescription",defaultMessage:"Selected application { applicationTypeName } supports { authenticationTypeName } authentication type. You can use already defined authentication values or define new."},{applicationTypeName:t,authenticationTypeName:n})))};R.propTypes={applicationTypeName:k().string,authenticationTypeName:k().string};var V=function(e){var t=e.authenticationValues,n=e.supportedAuthTypeName,a=e.supportedAuthType,r=e.applicationTypes,i=e.source;return t.filter((function(e){return e.authtype===a})).map((function(e){var t=e.username?"-".concat(e.username):"",a=i.applications.find((function(t){return t.authentications.find((function(t){return t.id===e.id}))})),o=a&&a.application_type_id?r.find((function(e){return e.id===a.application_type_id})):"",s=o?"-".concat(o.display_name):"-unused-".concat(e.id);return{label:"".concat(n).concat(t).concat(s),value:e.id}}))};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(){var e=(0,f.Z)();return p().createElement(_.TextContent,null,p().createElement(_.Text,{component:_.TextVariants.p},e.formatMessage({id:"sources.reviewAddAppSummary",defaultMessage:"Review the information below and click Add to add the application to your source. Use the Back button to make changes."})))};const L=function(e,t,n,a,r,i,o,s,c,u){var p,l,d,f=[];if(!r.imported){var m,h,v,y=null!==(m=t.schema.endpoint)&&void 0!==m&&m.hidden?null===(h=t.schema.endpoint)||void 0===h?void 0:h.fields:[],g=void 0!==t.schema.endpoint&&0===y.length,b=!n.supported_authentication_types[t.name]||0===n.supported_authentication_types[t.name].length,O=b?[x.Z.type]:n.supported_authentication_types[t.name],_=b?[x.Z]:t.schema.authentication;n.supported_source_types.includes(t.name)&&O.forEach((function(a){f.push(function(e,t,n,a,r,i,o){var s,c=(0,j.Z)(n),u=e.schema.endpoint&&!(null!==(s=e.schema.enpoint)&&void 0!==s&&s.hidden);M.GN(e.name,a,t.name)&&(c=[]);var p,l=[].concat((0,j.Z)(e.schema.authentication),[i?x.Z:void 0]).find((function(e){return e.type===a})),d="".concat(e.name,"-").concat(a,"-").concat(t.name,"-additional-step"),f=M.QW(e.name,a,t.name),m=M.G$(e.name,a,t.name);p=M.Z$(e.name,a,t.name,o).length>0?d:0===n.length&&!f&&u?"".concat(e.name,"-endpoint"):"summary";var h=M.gF(e.name,a,t.name),v={};if(M.pD(e.name,a,t.name)){var y=M.Z$(e.name,a,t.name,o).find((function(e){return!e.name})),g=M.zi(l.fields,d);p=y.nextStep?y.nextStep:0!==n.length||f||m||!u?"summary":"".concat(e.name,"-endpoint"),v=P(P({},y),{},{fields:[].concat((0,j.Z)(c),(0,j.Z)(M.Ow([].concat((0,j.Z)(y.fields),(0,j.Z)(g)),e.name,a,t.name)))})}return P({name:"".concat(e.name,"-").concat(t.id,"-").concat(a),title:r.formatMessage({id:"sources.configureCredentials",defaultMessage:"Configure credentials"}),fields:[].concat((0,j.Z)(c),(0,j.Z)(M.YD(e.name,a,t.name)),(0,j.Z)(M.Ow(M.sM(l.fields,h),e.name,a,t.name))),nextStep:p},v)}(t,n,y,a,e,b,u))})),_.forEach((function(e){if(n.supported_source_types.includes(t.name)){var a=M.Z$(t.name,e.type,n.name,u);a.length>0&&f.push.apply(f,(0,j.Z)(M.YV(a,t.name,e.type,g,e.fields,n.name)))}})),g&&f.push(M.TC(t.schema.endpoint,t.name)),p=f[0],(l=(null==n||null===(v=n.supported_authentication_types[t.name])||void 0===v?void 0:v.length)>1)&&(p=function(e,t,n,a){return{name:"selectAuthType-".concat(t.id),title:n.formatMessage({id:"sources.selectAuthenticationTitle",defaultMessage:"Select authentication type"}),fields:[{component:w.Z.RADIO,name:"authtype",options:t.supported_authentication_types[e.name].map((function(t){var n;return{value:t,label:(null===(n=e.schema.authentication.find((function(e){return e.type===t})))||void 0===n?void 0:n.name)||"Unknown type"}})),isRequired:!0,validate:[{type:A.Z.REQUIRED}]}],nextStep:function(t){var n=t.values,r=n.application,i=n.authtype;if(i)return a.find((function(e){return e.authtype===i}))?"selectAuthentication":"".concat(e.name,"-").concat(r&&r.application_type_id,"-").concat(i)}}}(t,n,e,a)),d=function(){var e=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).find((function(n){return n.authtype===Z()(e,"supported_authentication_types.".concat(t,"[0]"))}))}(a,n,t.name),d&&(p=function(e){var t,n=e.intl,a=e.source,r=e.authenticationValues,i=e.sourceType,o=e.app,s=e.applicationTypes,c=[{component:"description",name:"authtypesetter",Content:D,authenticationValues:r,hideField:!0}],u=o.supported_source_types.includes(i.name),p=!(null!==(t=a.applications)&&void 0!==t&&t.find((function(e){return e.application_type_id===o.id})));return u&&p&&Z()(o,"supported_authentication_types[".concat(i.name,"]"),[]).forEach((function(e){if(r.find((function(t){return t.authtype===e}))){var t=Z()(i,"schema.authentication",{}).find((function(t){return t.type===e})).name;c.push({component:w.Z.SUB_FORM,name:"".concat(o.name,"-subform"),fields:[{name:"".concat(o.name,"-select-authentication-summary"),component:"description",Content:R,applicationTypeName:o.display_name,authenticationTypeName:t},{component:w.Z.RADIO,name:"selectedAuthentication",label:n.formatMessage({id:"sources.selectAuthenticationTitle",defaultMessage:"Select authentication"}),isRequired:!0,validate:[{type:A.Z.REQUIRED}],options:[{label:n.formatMessage({id:"sources.selectAuthenticationradioLabel",defaultMessage:"Define new { supportedAuthTypeName }"},{supportedAuthTypeName:t}),value:"new-".concat(e)}].concat((0,j.Z)(V({authenticationValues:r,supportedAuthTypeName:t,supportedAuthType:e,applicationTypes:s,source:a})))}]})}})),{name:"selectAuthentication",title:n.formatMessage({id:"sources.selectAuthenticationTitle",defaultMessage:"Select authentication"}),fields:c,nextStep:function(e){var t=e.values,n=t.authtype,a=t.authentication;return"".concat(i.name,"-").concat(o.id,"-").concat(n||(null==a?void 0:a.authtype))}}}({intl:e,source:r,authenticationValues:a,sourceType:t,app:n,applicationTypes:c}))}var T={component:w.Z.TEXT_FIELD,name:"application.application_type_id",hideField:!0,initialValue:n.id};return{fields:[{component:w.Z.WIZARD,className:"sources",name:"wizard",title:o,inModal:!0,container:i,showTitles:!0,crossroads:["selectedAuthentication","authtype"],description:s,closeButtonAriaLabel:e.formatMessage({id:"wizard.close",defaultMessage:"Close wizard"}),buttonLabels:{submit:e.formatMessage({id:"sources.add",defaultMessage:"Add"}),cancel:e.formatMessage({id:"sources.cancel",defaultMessage:"Cancel"}),back:e.formatMessage({id:"sources.back",defaultMessage:"Back"})},fields:[].concat((0,j.Z)(r.imported?[]:[z(z({},p),{},{fields:[].concat((0,j.Z)(p.fields),[T])})]),[{title:e.formatMessage({id:"sources.reviewDetails",defaultMessage:"Review details"}),name:"summary",fields:[{component:"description",name:"description-summary",Content:F},{component:"summary",name:"summary",sourceTypes:[t],applicationTypes:[n]}].concat((0,j.Z)(r.imported?[T]:[]))}],(0,j.Z)(d||l?f:f.splice(1)))}]}};var B=function(e){var t=e.step,n=e.goToSources,a=e.title,r=e.description;return p().createElement(_.Wizard,{isOpen:!0,onClose:n,title:a,description:r,steps:[{name:"Finish",component:t,isFinishedStep:!0}]})};B.propTypes={step:S.PropTypes.node.isRequired,goToSources:S.PropTypes.func.isRequired,title:S.PropTypes.string,description:S.PropTypes.string};const I=B;var W=n(48815),U=n(60566),Y=n(59824),$=n(4833),q=n(58192),Q=n(71002);const G=e=>e instanceof Date,K=e=>0===Object.keys(e).length,H=e=>null!=e&&"object"==typeof e,X=(e,...t)=>Object.prototype.hasOwnProperty.call(e,...t),J=e=>H(e)&&K(e),ee=(e,t)=>{if(e===t||!H(e)||!H(t))return{};const n=e,a=t;return Object.keys(a).reduce(((e,t)=>{if(X(n,t)){const r=ee(n[t],a[t]);return H(r)&&K(r)||(e[t]=r),e}return e[t]=a[t],e}),{})},te=ee,ne=(e,t)=>{if(e===t)return{};if(!H(e)||!H(t))return t;const n=e,a=t;return G(n)||G(a)?n.valueOf()==a.valueOf()?{}:a:Object.keys(a).reduce(((e,t)=>{if(X(n,t)){const r=ne(n[t],a[t]);return!J(r)||G(r)||!J(n[t])&&J(a[t])?(e[t]=r,e):e}return e}),{})},ae=ne;var re=n(82492),ie=n.n(re),oe=n(50361),se=n.n(oe),ce=n(34307),ue=n(72810),pe=n(96845),le=n(84866),de=["authentication"];function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he=function e(t){return Object.keys(t).forEach((function(n){t[n]&&"object"===(0,Q.Z)(t[n])?h()(t[n])?delete t[n]:e(t[n]):void 0===t[n]&&delete t[n]})),t},ve=function(){var e=(0,o.Z)(c().mark((function e(t,n,i,o){var s,u,p,l,d,f,m,v,y,g,b,O,j,w,_,M,T,Z,A,E,P,S,k,C,D,R,V,N,z,F,L,B,I,U,Y,$,q,Q,G,K,H,X,J,ee,ne=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=ne.length>4&&void 0!==ne[4]?ne[4]:[],l=n.getState(),d=l.values,f=null===(s=d.authentication)||void 0===s?void 0:s.id,m=f&&i.find((function(e){return e.id===f})),v=t.authentication,y=(0,a.Z)(t,de),g=te(o,y),b=ae(o,y),O=te(m,v),j=ae(m,v),w=he(me(me({},ie()(se()(g),b)),{},{authentication:me({},ie()(se()(O),j))})),e.prev=11,null!=d&&null!==(_=d.source)&&void 0!==_&&_.id){e.next=14;break}throw"Missing source id";case 14:return A=new Date,E=d.source.id,P=null==d||null===(M=d.endpoint)||void 0===M?void 0:M.id,S=[],w.source&&!h()(w.source)?S.push((0,W.Rj)().updateSource(E,w.source)):S.push(Promise.resolve(void 0)),k=w.endpoint&&!h()(w.endpoint),C=w.url&&!h()(w.url),k||C?(D=(0,ce.K_)(w),R=D.scheme,V=D.host,N=D.port,z=D.path,F=parseInt(N,10),L=he(me(me({},w.endpoint),{},{scheme:R,host:V,port:isNaN(F)?void 0:F,path:z})),P?S.push((0,W.Rj)().updateEndpoint(P,L)):(B=me(me({},L),{},{default:!0,source_id:E}),S.push((0,W.Rj)().createEndpoint(B)))):S.push(Promise.resolve(void 0)),null!==(T=w.application)&&void 0!==T&&T.application_type_id?(I=me(me({},w.application),{},{source_id:E}),S.push((0,W.Cu)(I))):S.push(Promise.resolve(void 0)),e.next=25,Promise.all(S);case 25:if(U=e.sent,(Y=(0,r.Z)(U,3))[0],$=Y[1],q=Y[2],p=null==q?void 0:q.id,!w.authentication||h()(w.authentication)||w.authentication.authtype===x.Z.type){e.next=42;break}if(!f){e.next=38;break}return e.next=35,(0,W.Rj)().updateAuthentication(f,w.authentication);case 35:Q=e.sent,e.next=42;break;case 38:return G=me(me({},w.authentication),{},{resource_id:(null==$?void 0:$.id)||(null==q?void 0:q.id),resource_type:null!=$&&$.id?"Endpoint":"Application"}),e.next=41,(0,W.Rj)().createAuthentication(G);case 41:Q=e.sent;case 42:if(K=f||(null===(Z=Q)||void 0===Z?void 0:Z.id),null==q||!q.id||!K){e.next=47;break}return H={application_id:q.id,authentication_id:K},e.next=47,(0,W.Rj)().createAuthApp(H);case 47:if(!P){e.next=51;break}return e.next=50,(0,ue.h)(P,void 0,void 0,"getEndpoint",A);case 50:X=e.sent;case 51:if(!q){e.next=57;break}return J=(0,le.T2)(u).includes(q.application_type_id)?1e4:0,e.next=55,(0,ue.h)(q.id,J);case 55:return ee=e.sent,e.abrupt("return",me({id:ee.id,applications:[ee]},X&&{endpoint:[X]}));case 57:return e.abrupt("return",{});case 60:if(e.prev=60,e.t0=e.catch(11),console.error(e.t0),!p){e.next=66;break}return e.next=66,(0,W.Rj)().deleteApplication(p);case 66:return e.next=68,(0,pe.Z)(e.t0);case 68:throw e.sent;case 70:case"end":return e.stop()}}),e,null,[[11,60]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ye=n(91447);function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){(0,O.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Oe={state:"loading",error:"",values:{},authenticationsValues:[],sourceAppsLength:0,initialValues:{},isCancelling:!1};const je=function(e,t){var n=t.type,a=t.length,r=t.authenticationsValues,i=t.initialValues,o=t.error,s=t.values,c=t.data,u=t.formApi;switch(n){case"setSourceAppslength":return be(be({},e),{},{sourceAppsLength:a});case"loadAuthentications":return be(be({},e),{},{authenticationsValues:r,initialValues:i,values:{},state:"loading"===e.state?"wizard":e.state});case"loadWithoutAuthentications":return be(be({},e),{},{initialValues:i,values:{},state:"loading"===e.state?"wizard":e.state});case"reset":return be(be({},e),{},{state:"wizard"});case"submit":return be(be({},e),{},{values:s,formApi:u,state:"submitting"});case"finish":return be(be({},e),{},{state:"finished",data:c});case"error":return be(be({},e),{},{state:"errored",error:o});case"toggleCancelling":return be(be({},e),{},{isCancelling:!e.isCancelling},s&&{values:s});default:return e}};var we=n(15185);const _e=(e,t)=>{if(e===t)return{};if(!H(e)||!H(t))return t;const n=e,a=t,r=Object.keys(n).reduce(((e,t)=>(X(a,t)||(e[t]=void 0),e)),{});return G(n)||G(a)?n.valueOf()==a.valueOf()?{}:a:Object.keys(a).reduce(((e,t)=>{if(!X(n,t))return e[t]=a[t],e;const r=_e(n[t],a[t]);return!J(r)||G(r)||!J(n[t])&&J(a[t])?(e[t]=r,e):e}),r)},Me=_e;var Te=n(52893),Ze=n(79433),Ae=n(98824),xe=n(50063),Ee=n(4435),Pe=n(86482),Se=n(64673),ke=n(5746),Ce=n(66974),De=n(93736),Re=n(28347),Ve=n(91011),Ne=["application"],ze=["application"],Fe=function(e,t,n,a,r,i,s,u){return r({type:"submit",values:e,formApi:t}),ve(e,t,n,i,s).then(function(){var e=(0,o.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,ye.n)(i.source.id),e.next=3,a((0,g.il)());case 3:return u({values:{application:null}}),e.abrupt("return",r({type:"finish",data:t}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return r({type:"error",error:e})}))},Le=function(e){return p().createElement(y.ZP,(0,i.Z)({},e,{showFormControls:!1}))};const Be=function(){var e=(0,f.Z)(),t=(0,De.a)(),n=(0,u.useRef)(),i=(0,v.useFlag)("sources.wizard.lighthouse"),o=function(e){var t=e.values.application;return n.current=t},s=(0,l.useParams)().app_type_id,c=(0,Y.W)(),m=(0,d.v9)((function(e){return e.sources}),d.wU),y=m.appTypes,g=m.sourceTypesLoaded,O=m.appTypesLoaded,j=m.sourceTypes,w=(0,U.L)(),M=(0,d.I0)(),T=(0,u.useReducer)(je,Oe),Z=(0,r.Z)(T,2),A=Z[0],x=Z[1],E=(0,u.useRef)(document.createElement("div")),P=y.find((function(e){return e.id===s}));(0,u.useEffect)((function(){if(w){var e=A.sourceAppsLength>=w.applications.length&&A.sourceAppsLength>0;x({type:"setSourceAppslength",length:w.applications.length}),e||(w.endpoints&&w.endpoints[0]?(0,W.Rj)().listEndpointAuthentications(w.endpoints[0].id).then((function(e){var t=e.data;return x({type:"loadAuthentications",authenticationsValues:t,initialValues:{source:w,endpoint:w.endpoints[0],url:(0,$.Fd)(w.endpoints[0]),application:n.current},values:{}})})):x({type:"loadWithoutAuthentications",initialValues:{source:w,application:n.current},values:{}}))}}),[w]);var S=function(){return t((0,q.yS)(q._j.sourcesDetail.path,w.id))},k=e.formatMessage({id:"sources.addApplicationNameTitle",defaultMessage:"Connect {appName}"},{appName:(null==P?void 0:P.display_name)||"application"}),C=e.formatMessage({id:"sources.addApplicationNameDescription",defaultMessage:"Configure {appName} for this source."},{appName:(null==P?void 0:P.display_name)||"application"});if(!(O&&g&&c&&"loading"!==A.state||"submitting"===A.state))return p().createElement(I,{goToSources:S,title:k,description:C,step:p().createElement(Te.Z,{customText:e.formatMessage({id:"sources.loading",defaultMessage:"Loading, please wait."}),cancelTitle:e.formatMessage({id:"sources.close",defaultMessage:"Close"}),onClose:S})});var D=function(e,t){return Fe(e,t,A.authenticationsValues,M,x,A.initialValues,y,o)};if("submitting"===A.state)return p().createElement(I,{title:k,description:C,goToSources:S,step:p().createElement(Te.Z,{cancelTitle:e.formatMessage({id:"sources.close",defaultMessage:"Close"}),onClose:S,customText:e.formatMessage({id:"wizard.loadingText",defaultMessage:"Validating credentials"}),description:e.formatMessage({id:"wizard.loadingDescription",defaultMessage:"This could take a minute. If you prefer not to wait, close this dialog and the process will continue."})})});var R=function(){return x({type:"reset"})},V=j.find((function(e){return e.id===w.source_type_id}));if("wizard"!==A.state){var N;if("finished"!==A.state)N=p().createElement(Ze.Z,{onRetry:R,onClose:S,returnButtonTitle:e.formatMessage({id:"sources.retry",defaultMessage:"Retry"}),primaryAction:function(){return D(A.values,A.formApi)},secondaryActions:p().createElement(_.Text,{component:"a",target:"_blank",href:"https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",rel:"noopener noreferrer"},e.formatMessage({id:"wizard.openTicket",defaultMessage:"Open a support case"}))});else switch((0,Pe.Z)(A.data)){default:N="amazon"===V.name?p().createElement(Ae.Z,{onClose:S}):p().createElement(xe.Z,{title:e.formatMessage({id:"sources.configurationSuccessful",defaultMessage:"Configuration successful"}),hideSourcesButton:!0,onClose:S,returnButtonTitle:e.formatMessage({id:"sources.exit",defaultMessage:"Exit"}),successfulMessage:e.formatMessage({id:"sources.successAddApp",defaultMessage:"Your application was successfully added."})});break;case"unavailable":N=p().createElement(Ze.Z,{onRetry:R,onClose:S,message:(0,ke.Z)(A.data,e),title:e.formatMessage({id:"sources.configurationSuccessful",defaultMessage:"Configuration unsuccessful"}),secondaryActions:p().createElement(_.Button,{variant:"link",onClick:function(){var t,n;return x({type:"reset"}),(0,we.Z)({id:null===(t=A.data)||void 0===t?void 0:t.id,display_name:null===(n=y.find((function(e){var t,n,a;return e.id===(null===(t=A.data)||void 0===t||null===(n=t.applications)||void 0===n||null===(a=n[0])||void 0===a?void 0:a.application_type_id)})))||void 0===n?void 0:n.display_name},e,void 0,M,w)}},e.formatMessage({id:"wizard.removeApp",defaultMessage:"Remove application"})),Component:function(){return p().createElement(Re.Z,{to:(0,q.yS)(q._j.sourcesDetail.path,w.id)},p().createElement(_.Button,{variant:"primary",className:"pf-u-mt-xl"},e.formatMessage({id:"wizard.editSource",defaultMessage:"Edit source"})))}});break;case"timeout":N=p().createElement(Ee.Z,{returnButtonTitle:e.formatMessage({id:"sources.exit",defaultMessage:"Exit"}),onClose:S})}return p().createElement(I,{title:k,description:C,goToSources:S,step:N})}var z=V&&V.name,F=y.filter((function(e){return e.supported_source_types.includes(z)})).filter(Se.Z).map((function(e){return{value:e.id,label:e.display_name}}));if(!P||w.applications.find((function(e){return e.application_type_id===s}))||!P.supported_source_types.includes(V.name))return p().createElement(Ve.Z,{to:"/"+(0,q.yS)(q._j.sourcesDetail.path,w.id)});var B=L(e,V,P,A.authenticationsValues,w,E.current,k,C,y,i),Q=F.length>0?D:S;return p().createElement(p().Fragment,null,A.isCancelling&&p().createElement(Ce.Z,{title:e.formatMessage({id:"sources.manageAppsCloseModalTitle",defaultMessage:"Exit application adding?"}),onStay:function(){E.current.style.opacity=1,E.current.setAttribute("aria-hidden","false"),x({type:"toggleCancelling"})},onExit:S}),p().createElement(b.Z,{schema:B,showFormControls:!1,onSubmit:Q,onCancel:function(e){var t=A.initialValues,n=(t.application,(0,a.Z)(t,Ne)),r=(e.application,(0,a.Z)(e,ze));h()(Me(n,r))?S():(E.current.style.opacity=0,E.current.setAttribute("aria-hidden","true"),x({type:"toggleCancelling",values:e}))},initialValues:A.initialValues,subscription:{values:!0},debug:o,clearedValue:null,FormTemplate:Le}))}},15185:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(89372);const r=function(e,t,n,r,i){var o=t.formatMessage({id:"sources.removeAppWarning",defaultMessage:"{ name } was removed from this source."},{name:e.display_name}),s=t.formatMessage({id:"sources.removeAppError",defaultMessage:"Removing of { name } application from this source was unsuccessful."},{name:e.display_name});return n&&n(),r((0,a.Yn)(e.id,i.id,o,s))}},93736:(e,t,n)=>{"use strict";n.d(t,{a:()=>i});var a=n(49881),r=n(16959),i=function(){var e=(0,a.useNavigate)();return function(t,n){return e((0,r.n)(t,r.d),n)}}},96874:e=>{e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},86556:(e,t,n)=>{var a=n(89465),r=n(77813);e.exports=function(e,t,n){(void 0!==n&&!r(e[t],n)||void 0===n&&!(t in e))&&a(e,t,n)}},28483:(e,t,n)=>{var a=n(25063)();e.exports=a},42980:(e,t,n)=>{var a=n(46384),r=n(86556),i=n(28483),o=n(59783),s=n(13218),c=n(81704),u=n(36390);e.exports=function e(t,n,p,l,d){t!==n&&i(n,(function(i,c){if(d||(d=new a),s(i))o(t,n,c,p,e,l,d);else{var f=l?l(u(t,c),i,c+"",t,n,d):void 0;void 0===f&&(f=i),r(t,c,f)}}),c)}},59783:(e,t,n)=>{var a=n(86556),r=n(64626),i=n(77133),o=n(278),s=n(38517),c=n(35694),u=n(1469),p=n(29246),l=n(44144),d=n(23560),f=n(13218),m=n(68630),h=n(36719),v=n(36390),y=n(59881);e.exports=function(e,t,n,g,b,O,j){var w=v(e,n),_=v(t,n),M=j.get(_);if(M)a(e,n,M);else{var T=O?O(w,_,n+"",e,t,j):void 0,Z=void 0===T;if(Z){var A=u(_),x=!A&&l(_),E=!A&&!x&&h(_);T=_,A||x||E?u(w)?T=w:p(w)?T=o(w):x?(Z=!1,T=r(_,!0)):E?(Z=!1,T=i(_,!0)):T=[]:m(_)||c(_)?(T=w,c(w)?T=y(w):f(w)&&!d(w)||(T=s(_))):Z=!1}Z&&(j.set(_,T),b(T,_,g,O,j),j.delete(_)),a(e,n,T)}}},5976:(e,t,n)=>{var a=n(6557),r=n(45357),i=n(30061);e.exports=function(e,t){return i(r(e,t,a),e+"")}},56560:(e,t,n)=>{var a=n(75703),r=n(38777),i=n(6557),o=r?function(e,t){return r(e,"toString",{configurable:!0,enumerable:!1,value:a(t),writable:!0})}:i;e.exports=o},21463:(e,t,n)=>{var a=n(5976),r=n(16612);e.exports=function(e){return a((function(t,n){var a=-1,i=n.length,o=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(o=e.length>3&&"function"==typeof o?(i--,o):void 0,s&&r(n[0],n[1],s)&&(o=i<3?void 0:o,i=1),t=Object(t);++a<i;){var c=n[a];c&&e(t,c,a,o)}return t}))}},25063:e=>{e.exports=function(e){return function(t,n,a){for(var r=-1,i=Object(t),o=a(t),s=o.length;s--;){var c=o[e?s:++r];if(!1===n(i[c],c,i))break}return t}}},16612:(e,t,n)=>{var a=n(77813),r=n(98612),i=n(65776),o=n(13218);e.exports=function(e,t,n){if(!o(n))return!1;var s=typeof t;return!!("number"==s?r(n)&&i(t,n.length):"string"==s&&t in n)&&a(n[t],e)}},45357:(e,t,n)=>{var a=n(96874),r=Math.max;e.exports=function(e,t,n){return t=r(void 0===t?e.length-1:t,0),function(){for(var i=arguments,o=-1,s=r(i.length-t,0),c=Array(s);++o<s;)c[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(c),a(e,this,u)}}},36390:e=>{e.exports=function(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}},30061:(e,t,n)=>{var a=n(56560),r=n(21275)(a);e.exports=r},21275:e=>{var t=Date.now;e.exports=function(e){var n=0,a=0;return function(){var r=t(),i=16-(r-a);if(a=r,i>0){if(++n>=800)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}},75703:e=>{e.exports=function(e){return function(){return e}}},6557:e=>{e.exports=function(e){return e}},29246:(e,t,n)=>{var a=n(98612),r=n(37005);e.exports=function(e){return r(e)&&a(e)}},68630:(e,t,n)=>{var a=n(44239),r=n(85924),i=n(37005),o=Function.prototype,s=Object.prototype,c=o.toString,u=s.hasOwnProperty,p=c.call(Object);e.exports=function(e){if(!i(e)||"[object Object]"!=a(e))return!1;var t=r(e);if(null===t)return!0;var n=u.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==p}},82492:(e,t,n)=>{var a=n(42980),r=n(21463)((function(e,t,n){a(e,t,n)}));e.exports=r},59881:(e,t,n)=>{var a=n(98363),r=n(81704);e.exports=function(e){return a(e,r(e))}}}]);
//# sourceMappingURL=../sourcemaps/994.4fe9dd25124d268cf9b4f77962ddfdd4.js.map