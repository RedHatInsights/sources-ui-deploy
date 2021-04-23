(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[6818],{34307:(e,t,n)=>{"use strict";n.d(t,{K_:()=>s,yH:()=>c});var r=n(96156),a=n(4833),i=n(79829);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=function(e){return e.url||null===e.url?function(e){if(null===e)return{scheme:null,host:null,port:null,path:null};if(!e)return{};try{var t=new URL(e),n=t.protocol.replace(/:$/,"");return{scheme:n,host:t.hostname,port:""===t.port?(0,a.bF)(n):t.port,path:t.pathname}}catch(e){return{}}}(e.url):e.endpoint?e.endpoint:e},c=function(e,t,n){var a=[];if(t.source&&a.push((0,i.Rj)().updateSource(e.source.id,t.source)),t.endpoint||t.url||null===t.url){var c=s(t),l=c.scheme,u=c.host,p=c.port,d=c.path,f=null===p?null:parseInt(p,10),m=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({scheme:l,host:u,path:d,port:null===f?null:isNaN(f)?void 0:f},t.endpoint);a.push((0,i.Rj)().updateEndpoint(e.endpoints[0].id,m))}return t.authentications&&Object.keys(t.authentications).forEach((function(e){var n=e.replace("a","");a.push((0,i.Rj)().updateAuthentication(n,t.authentications[e]))})),t.applications&&Object.keys(t.applications).forEach((function(e){var t=e.replace("a","");a.push((0,i.Rj)().updateApplication(t,{extra:n.applications[e].extra}))})),Promise.all(a)}},77015:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$e});var r=n(92950),a=n.n(r),i=n(32413),o=n(86896),s=n(557),c=n(45697),l=n.n(c),u=n(60566),p=n(4833),d=n(92137),f=n(28481),m=n(87757),y=n.n(m),g=n(7766),b=n(91447),h=n(98495);const v=function(){var e=(0,u.L)(),t=(0,o.Z)(),n=(0,s.useDispatch)(),c=(0,r.useState)(!1),l=(0,f.Z)(c,2),p=l[0],m=l[1];return a().createElement(i.Button,{variant:"plain","aria-label":t.formatMessage({id:"sources.checkavailability",defaultMessage:"Check source availability"}),onClick:(0,d.Z)(y().mark((function r(){return y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return m(!0),r.next=3,(0,b.Z)(e.id);case 3:m(!1),n((0,h.Hz)({title:t.formatMessage({id:"sources.checkavailability.notificationTitle",defaultMessage:"Request to check source status was sent"}),variant:"info",description:t.formatMessage({id:"sources.checkavailability.notificationDescription",defaultMessage:"Check this page later for updates"})}));case 5:case"end":return r.stop()}}),r)}))),isDisabled:p},!p&&a().createElement(g.ZP,null),p&&a().createElement(i.Spinner,{size:"md"}))};var E=function(e){var t=e.term,n=e.description;return a().createElement(i.DescriptionListGroup,null,a().createElement(i.DescriptionListTerm,null,t),a().createElement(i.DescriptionListDescription,null,n))};E.propTypes={term:l().node,description:l().node};const O=function(){var e,t=(0,o.Z)(),n=(0,u.L)(),r=(0,s.useSelector)((function(e){return e.sources.sourceTypes}),s.shallowEqual),c=r.find((function(e){return e.id===n.source_type_id}));if("amazon"===c.name){var l,d,f,m=null===(l=n.authentications)||void 0===l?void 0:l.find((function(e){return e.authtype.includes("arn")}));null!=m&&m.username&&(e=null===(d=m.username.match(/:\d+/))||void 0===d||null===(f=d[0])||void 0===f?void 0:f.replace(/:/g,""))}return a().createElement(i.Card,{className:"pf-m-selectable pf-m-selected card summary-card pf-u-m-lg pf-u-mr-sm-on-md"},a().createElement(i.CardTitle,null,t.formatMessage({id:"detail.summary.title",defaultMessage:"Source summary"})),a().createElement(i.CardBody,null,a().createElement(i.DescriptionList,{columnModifier:{default:"2Col"}},a().createElement(E,{term:t.formatMessage({id:"detail.summary.type",defaultMessage:"Source type"}),description:(0,p.P5)(n.source_type_id,void 0,{sourceTypes:r})}),a().createElement(E,{term:t.formatMessage({id:"detail.summary.lastChecked",defaultMessage:"Last availability check"}),description:a().createElement(a().Fragment,null,n.last_checked_at||n.last_available_at?(0,p.vh)(n.last_checked_at||n.last_available_at):t.formatMessage({id:"detail.summary.notChecked",defaultMessage:"Not checked yet"}),a().createElement(v,null))}),a().createElement(E,{term:t.formatMessage({id:"detail.summary.dateAdded",defaultMessage:"Date added"}),description:(0,p.vh)(n.created_at)}),a().createElement(E,{term:t.formatMessage({id:"detail.summary.lastModified",defaultMessage:"Last modified"}),description:(0,p.vh)(n.updated_at)}),n.app_creation_workflow&&a().createElement(E,{term:t.formatMessage({id:"detail.summary.configurationMode",defaultMessage:"Configuration mode"}),description:(0,p.Z3)(n.app_creation_workflow,n,{intl:t,sourceType:c})}),e&&a().createElement(E,{term:t.formatMessage({id:"detail.summary.awsAccountNumber",defaultMessage:"AWS account number"}),description:e}))))};var w=n(96156),j=n(334),_=n(60076),M=n(58185),T=function(e){var t=e.app,n=(0,o.Z)(),r=(0,u.L)(),c=(0,s.useSelector)((function(e){return e.sources.appTypes})),l=(0,p.GH)(t,r,c);return a().createElement(i.Popover,{showClose:!1,"aria-label":"".concat(l.display_name," popover"),bodyContent:(0,p.dE)(l.availability_status,l.availability_status_error,n)},a().createElement(i.Label,{className:"pf-u-ml-sm clickable",color:(0,p.z2)(l.availability_status)},(0,p.li)(l.availability_status)))};T.propTypes={app:l().shape({availability_status:l().string,availability_status_error:l().string,display_name:l().string}).isRequired};const P=T;var Z=n(45587),D=n(79829),S=n(74016),k=n(64673);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R={selectedApps:{}},A=function(e,t){var n=t.type,r=t.id;switch(n){case"addApp":return C(C({},e),{},{selectedApps:C(C({},e.selectedApps),{},(0,w.Z)({},r,!0))});case"removeApp":return C(C({},e),{},{selectedApps:C(C({},e.selectedApps),{},(0,w.Z)({},r,!1))});case"clean":return C(C({},e),{},{selectedApps:C(C({},e.selectedApps),{},(0,w.Z)({},r,void 0))})}};const L=function(){var e=(0,o.Z)(),t=(0,u.L)(),n=(0,j.useHistory)().push,c=(0,s.useSelector)((function(e){return e.sources.sourceTypes}),s.shallowEqual),l=(0,s.useSelector)((function(e){return e.sources.appTypes}),s.shallowEqual),p=(0,M.E)(),m=(0,s.useDispatch)(),g=(0,r.useReducer)(A,R),b=(0,f.Z)(g,2),v=b[0].selectedApps,E=b[1],O=c.find((function(e){return e.id===t.source_type_id})),T=null==O?void 0:O.name,x=l.filter((function(e){return e.supported_source_types.includes(T)})).filter(k.Z),C=function(e){return n((0,_.yS)(_._j.sourcesDetailRemoveApp.path,t.id).replace(":app_id",e))},L=function(e){return n((0,_.yS)(_._j.sourcesDetailAddApp.path,t.id).replace(":app_type_id",e))};return(0,Z.Z)(t)&&(C=function(){var e=(0,d.Z)(y().mark((function e(t,n){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("boolean"==typeof v[n]){e.next=7;break}return E({type:"removeApp",id:n}),e.next=4,(0,D.Rj)().deleteApplication(t);case 4:return e.next=6,m((0,h.il)());case 6:E({type:"clean",id:n});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=(0,d.Z)(y().mark((function e(n){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("boolean"==typeof v[n]){e.next=7;break}return E({type:"addApp",id:n}),e.next=4,(0,D.Cu)({source_id:t.id,application_type_id:n});case 4:return e.next=6,m((0,h.il)());case 6:E({type:"clean",id:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a().createElement(i.Card,{className:"card applications-card pf-u-p-lg pf-u-pl-sm-on-md"},a().createElement(i.CardTitle,null,e.formatMessage({id:"detail.applications.title",defaultMessage:"Applications"})),a().createElement(i.CardBody,null,!p&&a().createElement("div",{className:"pf-u-mb-md",id:"no-permissions-applications"},e.formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this adding/removing applications, you must be granted write permissions from your Organization Administrator."})),a().createElement("div",{className:"pf-c-form"},x.map((function(n){var r=t.applications.find((function(e){return e.application_type_id===n.id})),o=function(e,t){var n;return(n={},(0,w.Z)(n,S.fB.COST_MANAGAMENT,t.formatMessage({id:"cost.app.description",defaultMessage:"Analyze, forecast, and optimize your Red Hat OpenShift cluster costs in hybrid cloud environments."})),(0,w.Z)(n,S.fB.CLOUD_METER,t.formatMessage({id:"cost.app.description",defaultMessage:"Includes access to Red Hat Gold Images, high precision subscription watch data, autoregistration, and Red Hat Connector."})),n)[e]}(n.name,e);return a().createElement(i.FormGroup,{key:n.id},a().createElement(i.Switch,{id:"app-switch-".concat(n.id),label:n.display_name,isChecked:"boolean"==typeof v[n.id]?v[n.id]:Boolean(r),isDisabled:(null==r?void 0:r.isDeleting)||!p,onChange:function(e){return e?L(n.id):C(r.id,n.id)}}),Boolean(r)&&a().createElement(P,{app:r}),o&&a().createElement("div",{className:"pf-c-switch pf-u-mt-sm ins-c-sources__application_fake_switch"},a().createElement("span",{className:"pf-c-switch__toggle ins-c-sources__hide-me"}),a().createElement("div",{className:"pf-c-switch__label ins-c-sources__switch-description"},o)))})))))};var B=n(7081);const N=function(){var e=(0,o.Z)();return a().createElement(i.EmptyState,null,a().createElement(i.EmptyStateIcon,{icon:B.ZP}),a().createElement(i.Title,{headingLevel:"h4",size:"lg"},e.formatMessage({id:"detail.noapplications.title",defaultMessage:"No connected applications"})),a().createElement(i.EmptyStateBody,{className:"empty-state-body"},e.formatMessage({id:"detail.noapplications.description",defaultMessage:"You have not connected any applications to this source. Use the switches above to add applications."})))};var F=n(8705);const z=function(){var e=(0,o.Z)();return a().createElement(i.EmptyState,null,a().createElement(i.EmptyStateIcon,{icon:F.ZP}),a().createElement(i.Title,{headingLevel:"h4",size:"lg"},e.formatMessage({id:"detail.nopermissions.title",defaultMessage:"Missing permissions"})),a().createElement(i.EmptyStateBody,{className:"empty-state-body"},e.formatMessage({id:"detail.nopermissions.description",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."})))};var I=n(22122),H=n(67850),q=n(90280);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e,t,n){return Promise.all([(0,D.Rj)().showSource(e.id),(0,D.Rj)().listSourceEndpoints(e.id),(0,D.ye)(e.id,t,n)]).then(function(){var t=(0,d.Z)(y().mark((function t(n){var r,a,i,o,s,c,l,u,p,d,m,g;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=(0,f.Z)(n,3),i=a[0],o=a[1],s=a[2],c=o&&o.data&&o.data[0],l=(null==s||null===(r=s.sources[0])||void 0===r?void 0:r.applications)||[],u={source:G(G({},e),i),applications:l},p=[],m=[],g=[],l.forEach((function(e){var t;null==e||null===(t=e.authentications)||void 0===t||t.forEach((function(t){null!=t&&t.id&&(p.push((0,D.Rj)().showAuthentication(t.id)),m.push(e.id),g.push(t.id))}))})),!(p.length>0)){t.next=13;break}return t.next=11,Promise.all(p);case 11:d=t.sent,m.forEach((function(e,t){u.applications.find((function(t){return t.id===e})).authentications.push(d[t])}));case 13:if(c){t.next=15;break}return t.abrupt("return",u);case 15:return t.abrupt("return",(0,D.Rj)().listEndpointAuthentications(c.id).then((function(e){return G(G({},u),{},{endpoints:o.data,authentications:e.data.filter((function(e){var t=e.id;return!g.includes(t)}))})})));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},W=n(85061),K=n(81253),J=n(27361),Q=n.n(J),X=n(36968),Y=n.n(X);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te="check-endpoint",ne=function(e,t){var n={};return Object.keys(t).filter((function(e){return t[e]})).forEach((function(t){Y()(n,t,Q()(e,t))})),n},re=function(e,t){var n,r,a=e.endpoints,i=e.authentications,o=e.applications,s=(0,K.Z)(e,["endpoints","authentications","applications"]),c={},l=[].concat((0,W.Z)(i||[]),(0,W.Z)((null==o?void 0:o.reduce((function(e,t){return[].concat((0,W.Z)(e),(0,W.Z)(t.authentications))}),[]))||[]));l.length>0&&l.forEach((function(e){c["a".concat(e.id)]=e})),a&&a.length>0&&(n=a[0]),n&&(r=n.scheme||n.host||n.path||n.port?(0,p.Fd)(n):void 0);var u={};return(null==o?void 0:o.length)>0&&o.forEach((function(e){e.extra&&Object.keys(e.extra).length>0&&(u["a".concat(e.id)]={extra:e.extra})})),ee(ee({source_type:t,endpoint:n,authentications:c,url:r},Object.keys(u).length&&{applications:u}),s)},ae=function(e,t){return!e.includes(t)&&e.push(t)},ie=function(e,t){var n=[];return Object.keys(t).forEach((function(r){if(t[r]){var a,i,o=null===(a=r.match(/.a\d+/))||void 0===a||null===(i=a[0])||void 0===i?void 0:i.replace(".a","");r.startsWith("applications")&&ae(n,o),r.startsWith("authentications")&&e.applications.forEach((function(e){return e.authentications.forEach((function(t){var r=t.id,a=t.resource_type;return a&&r===o&&ae(n,"Application"===a?e.id:"".concat(te,"-").concat(e.id))}))})),(r.startsWith("url")||r.startsWith("endpoint"))&&e.applications.forEach((function(e){return e.authentications.forEach((function(t){return"Endpoint"===t.resource_type&&ae(n,"".concat(te,"-").concat(e.id))}))}))}})),n.filter(Boolean)},oe=n(34307),se=n(72810);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=function(){var e=(0,d.Z)(y().mark((function e(t,n,r,a,i,o){var s,c,l,u,d;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o({type:"submit",values:t,editing:n}),s=new Date,e.prev=2,e.next=5,(0,oe.yH)(a,ne(t,n),t);case 5:e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(2),e.next=11,r((0,h.il)());case 11:return o({type:"submitFailed"}),e.abrupt("return");case 13:if((0,b.n)(a.source.id),c={},l=ie(a,n),u=[],l.forEach((function(e){e.includes(te)?u.push((0,se.h)(a.endpoints[0].id,void 0,void 0,"getEndpoint",s).then((function(t){return le(le({},t),{},{id:e.replace("".concat(te,"-"),"")})}))):u.push((0,se.h)(e,void 0,void 0,void 0,s))})),!(u.length>0)){e.next=32;break}return e.prev=19,e.next=22,Promise.all(u);case 22:d=e.sent,e.next=31;break;case 25:return e.prev=25,e.t1=e.catch(19),e.next=29,r((0,h.il)());case 29:return o({type:"submitFailed"}),e.abrupt("return");case 31:d.forEach((function(e){var t=e.availability_status,n=e.availability_status_error,r=e.id;t===p.Rl&&(c[r]={title:i.formatMessage({id:"wizard.successEditToastTitle",defaultMessage:"Application credentials were edited successfully."}),description:n,variant:"success"}),t===p.nZ&&(c[r]={title:i.formatMessage({id:"wizard.failEditToastTitle",defaultMessage:"Edit application credentials failed."}),description:n,variant:"danger"}),t||(c[r]={title:i.formatMessage({id:"wizard.timeoutEditToastTitle",defaultMessage:"Edit in progress"}),description:i.formatMessage({id:"wizard.timeoutEditToastDescription",defaultMessage:"We are still working to confirm your updated credentials. Changes will be reflected in this table when complete."}),variant:"warning"})}));case 32:return e.next=34,r((0,h.il)());case 34:o({type:"submitFinished",messages:c});case 35:case"end":return e.stop()}}),e,null,[[2,7],[19,25]])})));return function(t,n,r,a,i,o){return e.apply(this,arguments)}}(),pe=n(59824),de=n(96354),fe=n(64124),me=n(30411);function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var be=function(e){if(e.schema&&e.schema.endpoint&&!e.schema.endpoint.hidden){var t=e.schema.endpoint.fields.map((function(t){return ge(ge({},t),function(e,t){return Q()(me.Z,[e,"endpoint",t],{})}(e.name,t.name))})),n={component:de.Z.SUB_FORM,name:"endpoint"};if("ansible-tower"===e.name){var r,a=t.find((function(e){return"url"===e.name}));return ge(ge({},n),{},{fields:[{component:de.Z.SUB_FORM,name:"receptor_node_group",condition:{when:"endpoint.receptor_node",isNotEmpty:!0},fields:[ge(ge({},a),{},{isRequired:!1,validate:null==a||null===(r=a.validate)||void 0===r?void 0:r.filter((function(e){return e.type!==fe.Z.REQUIRED}))})]},{component:de.Z.SUB_FORM,name:"hostname_group",condition:{when:"endpoint.receptor_node",isEmpty:!0},fields:t}]})}return ge(ge({},n),{},{fields:t})}},he=function(e,t,n,r){return{description:r.formatMessage({id:"sources.editFormDescripiton",defaultMessage:"Use the form fields to edit application credentials."}),fields:[].concat((0,W.Z)((0,S.JT)(e.applications,t,n)),[!!(e.endpoints&&e.endpoints.length>0)&&be(t)]).filter(Boolean)}};function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Oe={loading:!0,source:void 0,initialValues:{},sourceType:void 0,schema:void 0,isSubmitting:!1,initialLoad:!0,submitError:!1};const we=function(e,t){var n=t.type,r=t.source,a=t.sourceType,i=t.appTypes,o=t.intl,s=t.values,c=t.editing,l=t.messages;switch(n){case"createForm":return Ee(Ee({},e),{},{sourceType:a,initialValues:re(e.source,a.product_name),schema:he(e.source,a,i,o),loading:!1});case"setSource":return Ee(Ee({},e),{},{messages:Ee(Ee({},l),e.messages),source:r,initialLoad:!1});case"submit":return Ee(Ee({},e),{},{isSubmitting:!0,submitError:!1,values:s,editing:c});case"submitFinished":return Ee(Ee({},e),{},{isSubmitting:!1,source:r,messages:l});case"submitFailed":return Ee(Ee({},e),{},{isSubmitting:!1,submitError:!0,messages:void 0});case"sourceChanged":return Ee(Ee({},e),{},{initialLoad:!0,loading:!0});default:return e}};var je=n(52893);const _e=function(){var e=(0,o.Z)();return a().createElement(je.Z,{customText:e.formatMessage({id:"sources.editSubmittingTitle",defaultMessage:"Validating edited source credentials"})})};var Me=n(79433),Te=function(e){var t=e.onRetry,n=(0,o.Z)();return a().createElement(Me.Z,{onClose:t,customText:n.formatMessage({id:"sources.editErrorDescription",defaultMessage:"There was a problem while trying to edit your source. Please try again. If the error persists, open a support case."}),secondaryActions:a().createElement(i.Text,{component:"a",target:"_blank",href:"https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",rel:"noopener noreferrer"},n.formatMessage({id:"sources.openTicket",defaultMessage:"Open a support case"})),returnButtonTitle:n.formatMessage({id:"sources.retryText",defaultMessage:"Retry"})})};Te.propTypes={onRetry:l().func.isRequired};const Pe=Te;function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Se=function(){var e,t=(0,r.useReducer)(we,Oe),n=(0,f.Z)(t,2),c=n[0],l=n[1],d=(0,u.L)(),m=(0,pe.W)(),y=c.loading,g=c.editing,b=c.source,h=c.initialValues,v=c.schema,E=c.isSubmitting,O=c.initialLoad,w=c.message,j=c.messages,_=c.submitError,M=c.values,T=(0,o.Z)(),P=(0,s.useSelector)((function(e){return e.sources}),s.shallowEqual),Z=P.sourceTypes,D=P.appTypes,S=P.sourceTypesLoaded,k=P.appTypesLoaded,x=(0,s.useDispatch)();(0,r.useEffect)((function(){O||l({type:"sourceChanged"})}),[d,null==d||null===(e=d.applications)||void 0===e?void 0:e.length]),(0,r.useEffect)((function(){d&&O&&k&&U(d,D,Z).then((function(e){var t=function(e,t){var n,r,a={};return e.applications.forEach((function(e){var n=e.id,r=e.availability_status_error;e.availability_status===p.nZ&&(a[n]={title:t.formatMessage({id:"wizard.failEditToastTitleBeforeEdit",defaultMessage:"This application is unavailable"}),description:r,variant:"danger"})})),null!==(n=e.endpoints)&&void 0!==n&&null!==(r=n[0])&&void 0!==r&&r.availability_status_error&&e.applications.map((function(e){return e.authentications.find((function(e){return"Endpoint"===e.resource_type}))?e.id:void 0})).filter(Boolean).forEach((function(n){var r,i;a[n]={title:t.formatMessage({id:"wizard.failEditToastTitleBeforeEdit",defaultMessage:"This application is unavailable"}),description:null===(r=e.endpoints)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.availability_status_error,variant:"danger"}})),a}(e,T);l({type:"setSource",source:e,messages:t})}))}),[d,m,k,O]),(0,r.useEffect)((function(){if(b&&k&&S){var e=Z.find((function(e){return e.id===b.source.source_type_id}));l({type:"createForm",sourceType:e,source:b,appTypes:D,intl:T})}}),[k,b,S]);var C=!k||!S||y;return _?a().createElement(Pe,{onRetry:function(){return ue(M,g,x,b,T,l)}}):E?a().createElement(_e,null):C?a().createElement(i.Bullseye,{className:"pf-u-m-2xl"},a().createElement(i.Spinner,null)):a().createElement(q.Z,{schema:v,onSubmit:function(e,t){return ue(e,t.getState().dirtyFields,x,b,T,l)},FormTemplate:function(e){return a().createElement(H.ZP,(0,I.Z)({canReset:!0,submitLabel:"Save changes",disableSubmit:["pristine","invalid"]},e))},clearedValue:null,initialValues:De(De({},h),{},{message:w,messages:j})})},ke=function(){var e=(0,o.Z)(),t=(0,u.L)(),n=(0,M.E)();return a().createElement(i.Card,{className:"card pf-u-m-lg pf-u-mt-0"},a().createElement(i.CardTitle,null,e.formatMessage({id:"detail.resources.title",defaultMessage:"Manage connected applications"})),a().createElement(i.CardBody,null,!n&&a().createElement(z,null),n&&0===t.applications.length&&a().createElement(N,null),n&&t.applications.length>0&&a().createElement(Se,null)))};var xe=n(60409),Ce=n(98583),Re=n(10743),Ae=n(48716);const Le=function(){var e=(0,o.Z)(),t=(0,u.L)();return a().createElement(i.Breadcrumb,null,a().createElement(i.BreadcrumbItem,{component:function(e){var t=e.href,n=(0,K.Z)(e,["href"]);return a().createElement(j.Link,(0,I.Z)({to:t},n))},to:_._j.sources.path},e.formatMessage({id:"sources.sources",defaultMessage:"Sources"})),a().createElement(i.BreadcrumbItem,{isActive:!0},t.name))},Be=function(){var e=(0,r.useState)(!1),t=(0,f.Z)(e,2),n=t[0],s=t[1],c=(0,o.Z)(),l=(0,j.useHistory)().push,p=(0,u.L)(),d=(0,M.E)(),m={tooltip:c.formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."}),isDisabled:!0,className:"ins-c-sources__disabled-drodpown-item"};return a().createElement(i.Dropdown,{toggle:a().createElement(i.KebabToggle,{onToggle:function(){return s(!n)},id:"toggle-id-6"}),isOpen:n,isPlain:!0,position:"right",dropdownItems:[a().createElement(i.DropdownItem,(0,I.Z)({},!d&&m,{key:"rename",onClick:function(){return l((0,_.yS)(_._j.sourcesDetailRename.path,p.id))}}),c.formatMessage({id:"detail.rename.button",defaultMessage:"Rename"})),a().createElement(i.DropdownItem,(0,I.Z)({},!d&&m,{key:"remove",onClick:function(){return l((0,_.yS)(_._j.sourcesDetailRemove.path,p.id))}}),c.formatMessage({id:"detail.remove.button",defaultMessage:"Remove"}))]})},Ne=function(){var e=(0,o.Z)(),t=(0,u.L)(),n=(0,s.useSelector)((function(e){return e.sources.appTypes}),s.shallowEqual);return a().createElement(Ae.Z,null,a().createElement(Le,null),a().createElement(i.Flex,{className:"pf-u-mb-sm"},a().createElement(i.FlexItem,null,a().createElement(i.Title,{headingLevel:"h1",size:"2xl"},t.name)),a().createElement(i.FlexItem,null,(0,p.BN)(void 0,t,{appTypes:n})),a().createElement(i.FlexItem,{align:{default:"alignRight"}},a().createElement(Be,null))),a().createElement(i.TextContent,null,a().createElement(i.Text,null,e.formatMessage({id:"detail.description",defaultMessage:"View details and manage connections for this source."}))))};var Fe=n(66543),ze=n(5037),Ie=n(84731);function He(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?He(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ve=function(e){return[e.formatMessage({id:"resourceTable.resourceType",defaultMessage:"Resource type"}),e.formatMessage({id:"resourceTable.resourceValue",defaultMessage:"Value"})]},Ge=function(e,t,n){return e.applications.reduce((function(r,i){var o,s,c,l=t.find((function(e){return e.id===i.application_type_id})),u=(s=(0,ze.Hx)(null===(o=i.authentications)||void 0===o?void 0:o.filter((function(e){return Object.keys(e).length>1})),n,null==l?void 0:l.name,i.id),c=re(e,n.product_name),s.flatMap((function(e){return e})).map((function(e){return!e.hideField&&[a().createElement(a().Fragment,{key:"label"},e.label),Q()(c,e.name)]})).filter(Boolean));return qe(qe({},r),{},(0,w.Z)({},i.id,u))}),{})},Ue=function(e,t){var n=t.type,r=t.intl,a=t.source,i=t.activeTab,o=t.appTypes,s=t.sourceType;switch(n){case"loaded":return qe(qe({},e),{},{columns:Ve(r),applicationsRows:Ge(a,o,s),loading:!1,activeTab:a.applications[0].id});case"switchTab":return qe(qe({},e),{},{activeTab:i});case"setLoading":return qe(qe({},e),{},{loading:!0})}};const We=function(){var e,t=(0,o.Z)(),n=(0,u.L)(),c=(0,pe.W)(),l=(0,s.useSelector)((function(e){return e.sources}),s.shallowEqual),p=l.sourceTypes,d=l.appTypes,m=l.sourceTypesLoaded,y=l.appTypesLoaded,g=(0,r.useReducer)(Ue,function(e){var t;return{loading:Boolean(null===(t=e.applications)||void 0===t?void 0:t.length),columns:[],applicationsRows:{},activeTab:0}}(n)),b=(0,f.Z)(g,2),h=b[0],v=h.activeTab,E=h.loading,O=h.columns,w=h.applicationsRows,j=b[1];return(0,r.useEffect)((function(){var e;n&&c&&y&&m&&null!=n&&null!==(e=n.applications)&&void 0!==e&&e.length&&(j({type:"setLoading"}),U(n,d,p).then((function(e){var n=p.find((function(t){return t.id===e.source.source_type_id}));j({type:"loaded",source:e,intl:t,sourceType:n,appTypes:d})})))}),[null==n||null===(e=n.applications)||void 0===e?void 0:e.length,c,y,m]),a().createElement(i.Card,{className:"card pf-u-m-lg pf-u-mt-0"},a().createElement(i.CardTitle,null,t.formatMessage({id:"resourceTable.title",defaultMessage:"Connected application resources"})),a().createElement(i.CardBody,null,E&&a().createElement(i.Bullseye,{className:"pf-u-m-2xl"},a().createElement(i.Spinner,null)),!E&&!n.applications.length&&a().createElement(N,null),!E&&n.applications.length>0&&a().createElement(a().Fragment,null,a().createElement(i.Text,{className:"pf-u-mb-md"},t.formatMessage({id:"resourceTable.description",defaultMessage:"View resources for your connected applications."})),a().createElement(i.Tabs,{isBox:!0,activeKey:v,onSelect:function(e,t){return j({type:"switchTab",activeTab:t})}},n.applications.map((function(e){var n,r,o=(null===(n=d.find((function(t){return t.id===e.application_type_id})))||void 0===n?void 0:n.display_name)||e.application_type_id;return a().createElement(i.Tab,{eventKey:e.id,key:e.id,title:a().createElement(i.TabTitleText,null,o)},null!==(r=w[e.id])&&void 0!==r&&r.length?a().createElement(Fe.Table,{"aria-label":t.formatMessage({id:"resourceTable.title",defaultMessage:"Connected application resources"}),variant:"compact",cells:O,rows:w[e.id],className:"pf-u-mt-md"},a().createElement(Fe.TableHeader,null),a().createElement(Fe.TableBody,null)):a().createElement(Ie.Z,{applicationName:o}))}))))))};var Ke=(0,r.lazy)((function(){return n.e(8490).then(n.bind(n,55997))})),Je=(0,r.lazy)((function(){return Promise.all([n.e(6090),n.e(9972),n.e(6845),n.e(3371),n.e(6482),n.e(5185),n.e(5180)]).then(n.bind(n,59622))})),Qe=(0,r.lazy)((function(){return Promise.all([n.e(5185),n.e(3744)]).then(n.bind(n,76902))})),Xe=(0,r.lazy)((function(){return Promise.all([n.e(9166),n.e(2657),n.e(6845),n.e(6671),n.e(8291)]).then(n.bind(n,72498))})),Ye=(0,r.lazy)((function(){return Promise.all([n.e(2657),n.e(8331)]).then(n.bind(n,524))}));const $e=function(){var e=(0,u.L)();if(!e)return a().createElement(a().Fragment,null,a().createElement(Ce.X6,null),a().createElement(xe.Z,null));var t=(0,Z.Z)(e);return a().createElement("div",{className:"ins-c-sources__detail-page"},a().createElement(r.Suspense,{fallback:null},a().createElement(Re.Z,{exact:!0,route:_._j.sourcesDetailRemove,Component:Ke,componentProps:{backPath:(0,_.yS)(_._j.sourcesDetail.path,e.id)}}),a().createElement(Re.Z,{exact:!0,route:_._j.sourcesDetailAddApp,Component:Je}),a().createElement(Re.Z,{exact:!0,route:_._j.sourcesDetailRemoveApp,Component:Qe}),a().createElement(Re.Z,{exact:!0,route:_._j.sourcesDetailRename,Component:Xe}),a().createElement(Re.Z,{exact:!0,route:_._j.sourcesDetailEditCredentials,Component:Ye})),a().createElement(Ne,null),a().createElement(i.Grid,null,a().createElement(i.GridItem,{md:"6"},a().createElement(O,null)),a().createElement(i.GridItem,{md:"6"},a().createElement(L,null)),a().createElement(i.GridItem,{md:"12"},t?a().createElement(We,null):a().createElement(ke,null))))}}}]);
//# sourceMappingURL=../sourcemaps/sourceDetail.342a93c0a53415fce664.js.map