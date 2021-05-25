(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[6818],{34307:(e,t,n)=>{"use strict";n.d(t,{K_:()=>o,yH:()=>c});var a=n(96156),r=n(4833),i=n(79829);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var o=function(e){return e.url||null===e.url?function(e){if(null===e)return{scheme:null,host:null,port:null,path:null};if(!e)return{};try{var t=new URL(e),n=t.protocol.replace(/:$/,"");return{scheme:n,host:t.hostname,port:""===t.port?(0,r.bF)(n):t.port,path:t.pathname}}catch(e){return{}}}(e.url):e.endpoint?e.endpoint:e},c=function(e,t,n){var r=[];if(t.source&&r.push((0,i.Rj)().updateSource(e.source.id,t.source)),t.endpoint||t.url||null===t.url){var c=o(t),l=c.scheme,u=c.host,p=c.port,d=c.path,m=null===p?null:parseInt(p,10),f=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({scheme:l,host:u,path:d,port:null===m?null:isNaN(m)?void 0:m},t.endpoint);r.push((0,i.Rj)().updateEndpoint(e.endpoints[0].id,f))}return t.authentications&&Object.keys(t.authentications).forEach((function(e){var n=e.replace("a","");r.push((0,i.Rj)().updateAuthentication(n,t.authentications[e]))})),t.applications&&Object.keys(t.applications).forEach((function(e){var t=e.replace("a","");r.push((0,i.Rj)().updateApplication(t,{extra:n.applications[e].extra}))})),Promise.all(r)}},75829:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>$e});var a=n(92950),r=n.n(a),i=n(30586),s=n(86896),o=n(45237),c=n(45697),l=n.n(c),u=n(60566),p=n(4833),d=n(92137),m=n(28481),f=n(87757),g=n.n(f),y=n(7766),b=n(91447),h=n(98495);const v=function(){var e=(0,u.L)(),t=(0,s.Z)(),n=(0,o.useDispatch)(),c=(0,a.useState)(!1),l=(0,m.Z)(c,2),p=l[0],f=l[1];return r().createElement(i.Button,{variant:"plain","aria-label":t.formatMessage({id:"sources.checkavailability",defaultMessage:"Check source availability"}),onClick:(0,d.Z)(g().mark((function a(){return g().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return f(!0),a.next=3,(0,b.Z)(e.id);case 3:f(!1),n((0,h.Hz)({title:t.formatMessage({id:"sources.checkavailability.notificationTitle",defaultMessage:"Request to check source status was sent"}),variant:"info",description:t.formatMessage({id:"sources.checkavailability.notificationDescription",defaultMessage:"Check this page later for updates"})}));case 5:case"end":return a.stop()}}),a)}))),isDisabled:p},!p&&r().createElement(y.ZP,null),p&&r().createElement(i.Spinner,{size:"md"}))};var E=function(e){var t=e.term,n=e.description;return r().createElement(i.DescriptionListGroup,null,r().createElement(i.DescriptionListTerm,null,t),r().createElement(i.DescriptionListDescription,null,n))};E.propTypes={term:l().node,description:l().node};const O=function(){var e,t=(0,s.Z)(),n=(0,u.L)(),a=(0,o.useSelector)((function(e){return e.sources.sourceTypes}),o.shallowEqual),c=a.find((function(e){return e.id===n.source_type_id}));if("amazon"===c.name){var l,d,m,f=null===(l=n.authentications)||void 0===l?void 0:l.find((function(e){return e.authtype.includes("arn")}));null!=f&&f.username&&(e=null===(d=f.username.match(/:\d+/))||void 0===d||null===(m=d[0])||void 0===m?void 0:m.replace(/:/g,""))}return r().createElement(i.Card,{className:"pf-m-selectable pf-m-selected card summary-card pf-u-m-lg pf-u-mr-sm-on-md"},r().createElement(i.CardTitle,null,t.formatMessage({id:"detail.summary.title",defaultMessage:"Source summary"})),r().createElement(i.CardBody,null,r().createElement(i.DescriptionList,{columnModifier:{default:"2Col"}},r().createElement(E,{term:t.formatMessage({id:"detail.summary.type",defaultMessage:"Source type"}),description:(0,p.P5)(n.source_type_id,void 0,{sourceTypes:a})}),r().createElement(E,{term:t.formatMessage({id:"detail.summary.lastChecked",defaultMessage:"Last availability check"}),description:r().createElement(r().Fragment,null,n.last_checked_at||n.last_available_at?(0,p.vh)(n.last_checked_at||n.last_available_at):t.formatMessage({id:"detail.summary.notChecked",defaultMessage:"Not checked yet"}),r().createElement(v,null))}),r().createElement(E,{term:t.formatMessage({id:"detail.summary.dateAdded",defaultMessage:"Date added"}),description:(0,p.vh)(n.created_at)}),r().createElement(E,{term:t.formatMessage({id:"detail.summary.lastModified",defaultMessage:"Last modified"}),description:(0,p.vh)(n.updated_at)}),n.app_creation_workflow&&r().createElement(E,{term:t.formatMessage({id:"detail.summary.configurationMode",defaultMessage:"Configuration mode"}),description:(0,p.Z3)(n.app_creation_workflow,n,{intl:t,sourceType:c})}),e&&r().createElement(E,{term:t.formatMessage({id:"detail.summary.awsAccountNumber",defaultMessage:"AWS account number"}),description:e}))))};var w=n(96156),j=n(334),M=n(17546),_=n(27957),T=n(60076),P=n(58185),k=n(45587),Z=n(79829),D=n(79477),S=n(64673),x=n(22122),A=function(e){var t=e.app,n=e.removeApp,o=e.addApp,c=(0,a.useState)(!1),l=(0,m.Z)(c,2),p=l[0],d=l[1],f=(0,s.Z)(),g=(0,u.L)(),y=(0,j.useHistory)().push,b=(0,P.E)(),h=function(e){return function(){d(!1),e()}},v={tooltip:f.formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."}),isDisabled:!0,className:"ins-c-sources__disabled-drodpown-item"},E=t.paused_at?r().createElement(i.DropdownItem,(0,x.Z)({},!b&&v,{key:"resume",description:f.formatMessage({id:"app.kebab.resume.title",defaultMessage:"Resume data collection for this application."}),onClick:h(o)}),f.formatMessage({id:"app.kebab.resume.button",defaultMessage:"Resume"})):r().createElement(i.DropdownItem,(0,x.Z)({},!b&&v,{key:"pause",description:f.formatMessage({id:"app.kebab.pause.title",defaultMessage:"Temporarily stop this application from collecting data."}),onClick:h(n)}),f.formatMessage({id:"app.kebab.pause.button",defaultMessage:"Pause"})),O=r().createElement(i.DropdownItem,(0,x.Z)({},!b&&v,{key:"remove",description:f.formatMessage({id:"app.kebab.remove.title",defaultMessage:"Permanently stop data collection for this application."}),onClick:h((function(){return y((0,T.yS)(T._j.sourcesDetailRemoveApp.path,g.id).replace(":app_id",t.id))}))}),f.formatMessage({id:"app.kebab.pause.button",defaultMessage:"Remove"}));return r().createElement(i.Dropdown,{isPlain:!0,isOpen:p,position:"right",dropdownItems:[E,O],className:"ins-c-sources__application_kebab",toggle:r().createElement(i.KebabToggle,{onToggle:function(){return d((function(e){return!e}))}})})};A.propTypes={app:l().shape({id:l().string,paused_at:l().string}).isRequired,removeApp:l().func,addApp:l().func};const C=A;function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L={selectedApps:{}},B=function(e,t){var n=t.type,a=t.id;switch(n){case"addApp":return N(N({},e),{},{selectedApps:N(N({},e.selectedApps),{},(0,w.Z)({},a,!0))});case"removeApp":return N(N({},e),{},{selectedApps:N(N({},e.selectedApps),{},(0,w.Z)({},a,!1))});case"clean":return N(N({},e),{},{selectedApps:N(N({},e.selectedApps),{},(0,w.Z)({},a,void 0))})}},z=function(e,t,n,a){var i,s=null===(i=a.find((function(t){return t.id===e})))||void 0===i?void 0:i.display_name;t((0,h.Hz)({title:n.formatMessage({id:"detail.applications.resumed.alert.title",defaultMessage:"{appName} connection resumed"},{appName:s}),variant:"default",customIcon:r().createElement(_.ZP,null)}))},F=function(e,t,n,a){var i,s=null===(i=a.find((function(t){return t.id===e})))||void 0===i?void 0:i.display_name;t((0,h.Hz)({title:n.formatMessage({id:"detail.applications.paused.alert.title",defaultMessage:"{appName} connection paused"},{appName:s}),description:n.formatMessage({id:"detail.applications.paused.alert.description",defaultMessage:"Your application will not reflect the most recent data until {appName} connection is resumed"},{appName:s}),variant:"default",customIcon:r().createElement(M.ZP,null)}))};const I=function(){var e=(0,s.Z)(),t=(0,u.L)(),n=(0,j.useHistory)().push,c=(0,o.useSelector)((function(e){return e.sources.sourceTypes}),o.shallowEqual),l=(0,o.useSelector)((function(e){return e.sources.appTypes}),o.shallowEqual),f=(0,P.E)(),y=(0,o.useDispatch)(),b=(0,a.useReducer)(B,L),v=(0,m.Z)(b,2),E=v[0].selectedApps,O=v[1],M=c.find((function(e){return e.id===t.source_type_id})),_=null==M?void 0:M.name,x=l.filter((function(e){return e.supported_source_types.includes(_)})).filter(S.Z),A=function(){var a=(0,d.Z)(g().mark((function a(r,i){return g().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i){a.next=4;break}n((0,T.yS)(T._j.sourcesDetailAddApp.path,t.id).replace(":app_type_id",r)),a.next=12;break;case 4:if("boolean"==typeof E[r]){a.next=12;break}return O({type:"addApp",id:r}),a.next=8,(0,Z.Rj)().unpauseApplication(i);case 8:return z(r,y,e,l),a.next=11,y((0,h.il)());case 11:O({type:"clean",id:r});case 12:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),R=function(){var t=(0,d.Z)(g().mark((function t(n,a){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("boolean"==typeof E[a]){t.next=8;break}return O({type:"removeApp",id:a}),t.next=4,(0,Z.Rj)().pauseApplication(n);case 4:return F(a,y,e,l),t.next=7,y((0,h.il)());case 7:O({type:"clean",id:a});case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return(0,k.Z)(t)&&(A=function(){var n=(0,d.Z)(g().mark((function n(a,r){return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("boolean"==typeof E[a]){n.next=13;break}if(O({type:"addApp",id:a}),!r){n.next=8;break}return n.next=5,(0,Z.Rj)().unpauseApplication(r);case 5:z(a,y,e,l),n.next=10;break;case 8:return n.next=10,(0,Z.Cu)({source_id:t.id,application_type_id:a});case 10:return n.next=12,y((0,h.il)());case 12:O({type:"clean",id:a});case 13:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),r().createElement(i.Card,{className:"card applications-card pf-u-p-lg pf-u-pl-sm-on-md"},r().createElement(i.CardTitle,null,e.formatMessage({id:"detail.applications.title",defaultMessage:"Applications"})),r().createElement(i.CardBody,null,!f&&r().createElement("div",{className:"pf-u-mb-md",id:"no-permissions-applications"},e.formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this adding/removing applications, you must be granted write permissions from your Organization Administrator."})),r().createElement("div",{className:"pf-c-form"},x.map((function(n){var a=t.applications.find((function(e){return e.application_type_id===n.id})),s=function(e,t){var n;return(n={},(0,w.Z)(n,D.f.COST_MANAGAMENT,t.formatMessage({id:"cost.app.description",defaultMessage:"Analyze, forecast, and optimize your Red Hat OpenShift cluster costs in hybrid cloud environments."})),(0,w.Z)(n,D.f.CLOUD_METER,t.formatMessage({id:"cost.app.description",defaultMessage:"Includes access to Red Hat gold images, high precision subscription watch data, and autoregistration."})),n)[e]}(n.name,e),o=Boolean(a),c=Boolean(null==a?void 0:a.paused_at),l=!c&&o,u="boolean"==typeof E[n.id]?E[n.id]:l;return r().createElement(i.FormGroup,{key:n.id},r().createElement("div",{className:"ins-c-sources__application_flex"},r().createElement("div",null,r().createElement(i.Switch,{id:"app-switch-".concat(n.id),label:n.display_name,isChecked:u,isDisabled:(null==a?void 0:a.isDeleting)||!f,onChange:function(e){return e?A(n.id,null==a?void 0:a.id):R(a.id,n.id)}}),Boolean(a)&&r().createElement(p.c,{className:"pf-u-ml-sm clickable",app:a,showStatusText:!0}),s&&r().createElement("div",{className:"pf-c-switch pf-u-mt-sm ins-c-sources__application_fake_switch"},r().createElement("span",{className:"pf-c-switch__toggle ins-c-sources__hide-me"}),r().createElement("div",{className:"pf-c-switch__label ins-c-sources__switch-description"},s))),(c||o)&&r().createElement(C,{app:a,removeApp:function(){return R(a.id,n.id)},addApp:function(){return A(n.id,a.id)}})))})))))};var H=n(7081);const q=function(){var e=(0,s.Z)();return r().createElement(i.EmptyState,null,r().createElement(i.EmptyStateIcon,{icon:H.ZP}),r().createElement(i.Title,{headingLevel:"h4",size:"lg"},e.formatMessage({id:"detail.noapplications.title",defaultMessage:"No connected applications"})),r().createElement(i.EmptyStateBody,{className:"empty-state-body"},e.formatMessage({id:"detail.noapplications.description",defaultMessage:"You have not connected any applications to this source. Use the switches above to add applications."})))};var V=n(8705);const W=function(){var e=(0,s.Z)();return r().createElement(i.EmptyState,null,r().createElement(i.EmptyStateIcon,{icon:V.ZP}),r().createElement(i.Title,{headingLevel:"h4",size:"lg"},e.formatMessage({id:"detail.nopermissions.title",defaultMessage:"Missing permissions"})),r().createElement(i.EmptyStateBody,{className:"empty-state-body"},e.formatMessage({id:"detail.nopermissions.description",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."})))};var G=n(67850),K=n(90280);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e,t,n){return Promise.all([(0,Z.Rj)().showSource(e.id),(0,Z.Rj)().listSourceEndpoints(e.id),(0,Z.ye)(e.id,t,n)]).then(function(){var t=(0,d.Z)(g().mark((function t(n){var a,r,i,s,o,c,l,u,p,d,f,y;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=(0,m.Z)(n,3),i=r[0],s=r[1],o=r[2],c=s&&s.data&&s.data[0],l=(null==o||null===(a=o.sources[0])||void 0===a?void 0:a.applications)||[],u={source:Y(Y({},e),i),applications:l},p=[],f=[],y=[],l.forEach((function(e){var t;null==e||null===(t=e.authentications)||void 0===t||t.forEach((function(t){null!=t&&t.id&&(p.push((0,Z.Rj)().showAuthentication(t.id)),f.push(e.id),y.push(t.id))}))})),!(p.length>0)){t.next=13;break}return t.next=11,Promise.all(p);case 11:d=t.sent,f.forEach((function(e,t){u.applications.find((function(t){return t.id===e})).authentications.push(d[t])}));case 13:if(c){t.next=15;break}return t.abrupt("return",u);case 15:return t.abrupt("return",(0,Z.Rj)().listEndpointAuthentications(c.id).then((function(e){return Y(Y({},u),{},{endpoints:s.data,authentications:e.data.filter((function(e){var t=e.id;return!y.includes(t)}))})})));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},X=n(85061),$=n(81253),Q=n(27361),ee=n.n(Q),te=n(36968),ne=n.n(te),ae=n(50303);function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se="check-endpoint",oe=function(e,t){var n={};return Object.keys(t).filter((function(e){return t[e]})).forEach((function(t){ne()(n,t,ee()(e,t))})),n},ce=function(e,t){var n,a,r=e.endpoints,i=e.authentications,s=e.applications,o=(0,$.Z)(e,["endpoints","authentications","applications"]),c={},l=[].concat((0,X.Z)(i||[]),(0,X.Z)((null==s?void 0:s.reduce((function(e,t){return[].concat((0,X.Z)(e),(0,X.Z)(t.authentications))}),[]))||[]));l.length>0&&l.forEach((function(e){c["a".concat(e.id)]=e})),r&&r.length>0&&(n=r[0]),n&&(a=n.scheme||n.host||n.path||n.port?(0,p.Fd)(n):void 0);var u={};return(null==s?void 0:s.length)>0&&s.forEach((function(e){e.extra&&Object.keys(e.extra).length>0&&(u["a".concat(e.id)]={extra:e.extra})})),ie(ie({source_type:t,endpoint:n,authentications:c,url:a},Object.keys(u).length&&{applications:u}),o)},le=function(e,t){return!e.includes(t)&&e.push(t)},ue=function(e,t){var n=[];return Object.keys(t).forEach((function(a){if(t[a]){var r,i,s=null===(r=a.match(/.a\d+/))||void 0===r||null===(i=r[0])||void 0===i?void 0:i.replace(".a","");a.startsWith("applications")&&le(n,s),a.startsWith("authentications")&&e.applications.forEach((function(e){return e.authentications.forEach((function(t){var a=t.id,r=t.resource_type;return r&&a===s&&le(n,"Application"===r?e.id:"".concat(se,"-").concat(e.id))}))})),(a.startsWith("url")||a.startsWith("endpoint"))&&e.applications.forEach((function(e){return e.authentications.forEach((function(t){return"Endpoint"===t.resource_type&&le(n,"".concat(se,"-").concat(e.id))}))}))}})),n.filter(Boolean)},pe=n(34307),de=n(72810);function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=function(){var e=(0,d.Z)(g().mark((function e(t,n,a,r,i,s){var o,c,l,u,d;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"submit",values:t,editing:n}),o=new Date,e.prev=2,e.next=5,(0,pe.yH)(r,oe(t,n),t);case 5:e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(2),e.next=11,a((0,h.il)());case 11:return s({type:"submitFailed"}),e.abrupt("return");case 13:if((0,b.n)(r.source.id),c={},l=ue(r,n),u=[],l.forEach((function(e){e.includes(se)?u.push((0,de.h)(r.endpoints[0].id,void 0,void 0,"getEndpoint",o).then((function(t){return fe(fe({},t),{},{id:e.replace("".concat(se,"-"),"")})}))):u.push((0,de.h)(e,void 0,void 0,void 0,o))})),!(u.length>0)){e.next=32;break}return e.prev=19,e.next=22,Promise.all(u);case 22:d=e.sent,e.next=31;break;case 25:return e.prev=25,e.t1=e.catch(19),e.next=29,a((0,h.il)());case 29:return s({type:"submitFailed"}),e.abrupt("return");case 31:d.forEach((function(e){var t=e.availability_status,n=e.availability_status_error,a=e.id;t===p.Rl&&(c[a]={title:i.formatMessage({id:"wizard.successEditToastTitle",defaultMessage:"Application credentials were edited successfully."}),description:n,variant:"success"}),t===p.nZ&&(c[a]={title:i.formatMessage({id:"wizard.failEditToastTitle",defaultMessage:"Edit application credentials failed."}),description:n,variant:"danger"}),t&&t!==p.Bj||(c[a]={title:i.formatMessage({id:"wizard.timeoutEditToastTitle",defaultMessage:"Edit in progress"}),description:i.formatMessage({id:"wizard.timeoutEditToastDescription",defaultMessage:"We are still working to confirm your updated credentials. Changes will be reflected in this table when complete."}),variant:"warning"})}));case 32:return e.next=34,a((0,h.il)());case 34:s({type:"submitFinished",messages:c});case 35:case"end":return e.stop()}}),e,null,[[2,7],[19,25]])})));return function(t,n,a,r,i,s){return e.apply(this,arguments)}}(),ye=n(59824),be=function(e,t,n,a){return{description:a.formatMessage({id:"sources.editFormDescripiton",defaultMessage:"Use the form fields to edit application credentials."}),fields:(0,D.J)(e.applications,t,n)}};function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ee={loading:!0,source:void 0,initialValues:{},sourceType:void 0,schema:void 0,isSubmitting:!1,initialLoad:!0,submitError:!1,submitMessages:void 0};const Oe=function(e,t){var n=t.type,a=t.source,r=t.sourceType,i=t.appTypes,s=t.intl,o=t.values,c=t.editing,l=t.messages;switch(n){case"createForm":return ve(ve({},e),{},{sourceType:r,initialValues:ce(e.source,r.product_name),schema:be(e.source,r,i,s),loading:!1});case"setSource":return ve(ve({},e),{},{messages:ve(ve({},l),e.submitMessages),source:a,initialLoad:!1,submitMessages:void 0});case"submit":return ve(ve({},e),{},{isSubmitting:!0,submitError:!1,values:o,editing:c});case"submitFinished":return ve(ve({},e),{},{isSubmitting:!1,source:a,submitMessages:l});case"submitFailed":return ve(ve({},e),{},{isSubmitting:!1,submitError:!0,messages:void 0});case"sourceChanged":return ve(ve({},e),{},{initialLoad:!0,loading:!0});default:return e}};var we=n(52893);const je=function(){var e=(0,s.Z)();return r().createElement(we.Z,{customText:e.formatMessage({id:"sources.editSubmittingTitle",defaultMessage:"Validating edited source credentials"})})};var Me=n(79433),_e=function(e){var t=e.onRetry,n=(0,s.Z)();return r().createElement(Me.Z,{onClose:t,customText:n.formatMessage({id:"sources.editErrorDescription",defaultMessage:"There was a problem while trying to edit your source. Please try again. If the error persists, open a support case."}),secondaryActions:r().createElement(i.Text,{component:"a",target:"_blank",href:"https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",rel:"noopener noreferrer"},n.formatMessage({id:"sources.openTicket",defaultMessage:"Open a support case"})),returnButtonTitle:n.formatMessage({id:"sources.retryText",defaultMessage:"Retry"})})};_e.propTypes={onRetry:l().func.isRequired};const Te=_e;function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Ze=function(){var e,t=(0,a.useReducer)(Oe,Ee),n=(0,m.Z)(t,2),c=n[0],l=n[1],d=(0,u.L)(),f=(0,ye.W)(),g=c.loading,y=c.editing,b=c.source,h=c.initialValues,v=c.schema,E=c.isSubmitting,O=c.initialLoad,w=c.message,j=c.messages,M=c.submitError,_=c.values,T=(0,s.Z)(),P=(0,o.useSelector)((function(e){return e.sources}),o.shallowEqual),k=P.sourceTypes,Z=P.appTypes,D=P.sourceTypesLoaded,S=P.appTypesLoaded,A=(0,o.useDispatch)();(0,a.useEffect)((function(){O||l({type:"sourceChanged"})}),[d,null==d||null===(e=d.applications)||void 0===e?void 0:e.length]),(0,a.useEffect)((function(){d&&O&&S&&J(d,Z,k).then((function(e){var t=function(e,t,n){var a,r,i={};return e.applications.forEach((function(e){var a=e.id,r=e.application_type_id,s=e.availability_status_error,o=e.availability_status;if(e.paused_at){var c,l=(null===(c=n.find((function(e){return e.id===r})))||void 0===c?void 0:c.display_name)||a;i[a]=(0,ae.q)(t,l)}else o===p.nZ&&(i[a]={title:t.formatMessage({id:"wizard.failEditToastTitleBeforeEdit",defaultMessage:"This application is unavailable"}),description:s,variant:"danger"})})),null!==(a=e.endpoints)&&void 0!==a&&null!==(r=a[0])&&void 0!==r&&r.availability_status_error&&e.applications.map((function(e){return e.authentications.find((function(t){var n=t.resource_type;return!e.paused_at&&"Endpoint"===n}))?e.id:void 0})).filter(Boolean).forEach((function(n){var a,r;i[n]={title:t.formatMessage({id:"wizard.failEditToastTitleBeforeEdit",defaultMessage:"This application is unavailable"}),description:null===(a=e.endpoints)||void 0===a||null===(r=a[0])||void 0===r?void 0:r.availability_status_error,variant:"danger"}})),i}(e,T,Z);l({type:"setSource",source:e,messages:t})}))}),[d,f,S,O]),(0,a.useEffect)((function(){if(b&&S&&D){var e=k.find((function(e){return e.id===b.source.source_type_id}));l({type:"createForm",sourceType:e,source:b,appTypes:Z,intl:T})}}),[S,b,D]);var C=!S||!D||g;return M?r().createElement(Te,{onRetry:function(){return ge(_,y,A,b,T,l)}}):E?r().createElement(je,null):C?r().createElement(i.Bullseye,{className:"pf-u-m-2xl"},r().createElement(i.Spinner,null)):r().createElement(K.Z,{schema:v,onSubmit:function(e,t){return ge(e,t.getState().dirtyFields,A,b,T,l)},FormTemplate:function(e){return r().createElement(G.ZP,(0,x.Z)({canReset:!0,submitLabel:"Save changes",disableSubmit:["pristine","invalid"]},e))},clearedValue:null,initialValues:ke(ke({},h),{},{message:w,messages:j})})},De=function(){var e=(0,s.Z)(),t=(0,u.L)(),n=(0,P.E)();return r().createElement(i.Card,{className:"card pf-u-m-lg pf-u-mt-0"},r().createElement(i.CardTitle,null,e.formatMessage({id:"detail.resources.title",defaultMessage:"Manage connected applications"})),r().createElement(i.CardBody,null,!n&&r().createElement(W,null),n&&0===t.applications.length&&r().createElement(q,null),n&&t.applications.length>0&&r().createElement(Ze,null)))};var Se=n(60409),xe=n(98583),Ae=n(10743),Ce=n(48716);const Re=function(){var e=(0,s.Z)(),t=(0,u.L)();return r().createElement(i.Breadcrumb,null,r().createElement(i.BreadcrumbItem,{component:function(e){var t=e.href,n=(0,$.Z)(e,["href"]);return r().createElement(j.Link,(0,x.Z)({to:t},n))},to:T._j.sources.path},e.formatMessage({id:"sources.sources",defaultMessage:"Sources"})),r().createElement(i.BreadcrumbItem,{isActive:!0},t.name))},Ne=function(){var e=(0,a.useState)(!1),t=(0,m.Z)(e,2),n=t[0],o=t[1],c=(0,s.Z)(),l=(0,j.useHistory)().push,p=(0,u.L)(),d=(0,P.E)(),f={tooltip:c.formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this action, you must be granted write permissions from your Organization Administrator."}),isDisabled:!0,className:"ins-c-sources__disabled-drodpown-item"};return r().createElement(i.Dropdown,{toggle:r().createElement(i.KebabToggle,{onToggle:function(){return o(!n)},id:"toggle-id-6"}),isOpen:n,isPlain:!0,position:"right",dropdownItems:[r().createElement(i.DropdownItem,(0,x.Z)({},!d&&f,{key:"rename",onClick:function(){return l((0,T.yS)(T._j.sourcesDetailRename.path,p.id))}}),c.formatMessage({id:"detail.rename.button",defaultMessage:"Rename"})),r().createElement(i.DropdownItem,(0,x.Z)({},!d&&f,{key:"remove",onClick:function(){return l((0,T.yS)(T._j.sourcesDetailRemove.path,p.id))}}),c.formatMessage({id:"detail.remove.button",defaultMessage:"Remove"}))]})},Le=function(){var e=(0,s.Z)(),t=(0,u.L)(),n=(0,o.useSelector)((function(e){return e.sources.appTypes}),o.shallowEqual);return r().createElement(Ce.Z,null,r().createElement(Re,null),r().createElement(i.Flex,{className:"pf-u-mb-sm"},r().createElement(i.FlexItem,null,r().createElement(i.Title,{headingLevel:"h1",size:"2xl"},t.name)),r().createElement(i.FlexItem,null,(0,p.BN)(void 0,t,{appTypes:n})),r().createElement(i.FlexItem,{align:{default:"alignRight"}},r().createElement(Ne,null))),r().createElement(i.TextContent,null,r().createElement(i.Text,null,e.formatMessage({id:"detail.description",defaultMessage:"View details and manage connections for this source."}))))};var Be=n(24985),ze=n(5037),Fe=n(84731);function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var qe=function(e){return[e.formatMessage({id:"resourceTable.resourceType",defaultMessage:"Resource type"}),e.formatMessage({id:"resourceTable.resourceValue",defaultMessage:"Value"})]},Ve=function(e,t,n){return e.applications.reduce((function(a,i){var s,o,c,l=t.find((function(e){return e.id===i.application_type_id})),u=(o=(0,ze.Hx)(null===(s=i.authentications)||void 0===s?void 0:s.filter((function(e){return Object.keys(e).length>1})),n,null==l?void 0:l.name,i.id),c=ce(e,n.product_name),o.flatMap((function(e){return e})).map((function(e){return!e.hideField&&[r().createElement(r().Fragment,{key:"label"},e.label),ee()(c,e.name)]})).filter(Boolean));return He(He({},a),{},(0,w.Z)({},i.id,u))}),{})},We=function(e,t){var n=t.type,a=t.intl,r=t.source,i=t.activeTab,s=t.appTypes,o=t.sourceType;switch(n){case"loaded":return He(He({},e),{},{columns:qe(a),applicationsRows:Ve(r,s,o),loading:!1,activeTab:r.applications[0].id});case"switchTab":return He(He({},e),{},{activeTab:i});case"setLoading":return He(He({},e),{},{loading:!0})}};const Ge=function(){var e,t=(0,s.Z)(),n=(0,u.L)(),c=(0,ye.W)(),l=(0,o.useSelector)((function(e){return e.sources}),o.shallowEqual),p=l.sourceTypes,d=l.appTypes,f=l.sourceTypesLoaded,g=l.appTypesLoaded,y=(0,a.useReducer)(We,function(e){var t;return{loading:Boolean(null===(t=e.applications)||void 0===t?void 0:t.length),columns:[],applicationsRows:{},activeTab:0}}(n)),b=(0,m.Z)(y,2),h=b[0],v=h.activeTab,E=h.loading,O=h.columns,w=h.applicationsRows,j=b[1];return(0,a.useEffect)((function(){var e;n&&c&&g&&f&&null!=n&&null!==(e=n.applications)&&void 0!==e&&e.length&&(j({type:"setLoading"}),J(n,d,p).then((function(e){var n=p.find((function(t){return t.id===e.source.source_type_id}));j({type:"loaded",source:e,intl:t,sourceType:n,appTypes:d})})))}),[null==n||null===(e=n.applications)||void 0===e?void 0:e.length,c,g,f]),r().createElement(i.Card,{className:"card pf-u-m-lg pf-u-mt-0"},r().createElement(i.CardTitle,null,t.formatMessage({id:"resourceTable.title",defaultMessage:"Connected application resources"})),r().createElement(i.CardBody,null,E&&r().createElement(i.Bullseye,{className:"pf-u-m-2xl"},r().createElement(i.Spinner,null)),!E&&!n.applications.length&&r().createElement(q,null),!E&&n.applications.length>0&&r().createElement(r().Fragment,null,r().createElement(i.Text,{className:"pf-u-mb-md"},t.formatMessage({id:"resourceTable.description",defaultMessage:"View resources for your connected applications."})),r().createElement(i.Tabs,{isBox:!0,activeKey:v,onSelect:function(e,t){return j({type:"switchTab",activeTab:t})}},n.applications.map((function(e){var n,a,s=(null===(n=d.find((function(t){return t.id===e.application_type_id})))||void 0===n?void 0:n.display_name)||e.application_type_id;return r().createElement(i.Tab,{eventKey:e.id,key:e.id,title:r().createElement(i.TabTitleText,null,s)},null!==(a=w[e.id])&&void 0!==a&&a.length?r().createElement(Be.Table,{"aria-label":t.formatMessage({id:"resourceTable.title",defaultMessage:"Connected application resources"}),variant:"compact",cells:O,rows:w[e.id],className:"pf-u-mt-md"},r().createElement(Be.TableHeader,null),r().createElement(Be.TableBody,null)):r().createElement(Fe.Z,{applicationName:s,isPaused:e.paused_at}))}))))))};var Ke=(0,a.lazy)((function(){return Promise.all([n.e(6410),n.e(8490)]).then(n.bind(n,55997))})),Ue=(0,a.lazy)((function(){return Promise.all([n.e(6410),n.e(6090),n.e(9972),n.e(6845),n.e(3371),n.e(6482),n.e(5185),n.e(5180)]).then(n.bind(n,59622))})),Ye=(0,a.lazy)((function(){return Promise.all([n.e(6410),n.e(5185),n.e(3744)]).then(n.bind(n,76902))})),Je=(0,a.lazy)((function(){return Promise.all([n.e(6410),n.e(9166),n.e(2657),n.e(6845),n.e(6671),n.e(8291)]).then(n.bind(n,72498))})),Xe=(0,a.lazy)((function(){return Promise.all([n.e(2657),n.e(8331)]).then(n.bind(n,524))}));const $e=function(){var e=(0,u.L)();if(!e)return r().createElement(r().Fragment,null,r().createElement(xe.X6,null),r().createElement(Se.Z,null));var t=(0,k.Z)(e);return r().createElement("div",{className:"ins-c-sources__detail-page"},r().createElement(a.Suspense,{fallback:null},r().createElement(Ae.Z,{exact:!0,route:T._j.sourcesDetailRemove,Component:Ke,componentProps:{backPath:(0,T.yS)(T._j.sourcesDetail.path,e.id)}}),r().createElement(Ae.Z,{exact:!0,route:T._j.sourcesDetailAddApp,Component:Ue}),r().createElement(Ae.Z,{exact:!0,route:T._j.sourcesDetailRemoveApp,Component:Ye}),r().createElement(Ae.Z,{exact:!0,route:T._j.sourcesDetailRename,Component:Je}),r().createElement(Ae.Z,{exact:!0,route:T._j.sourcesDetailEditCredentials,Component:Xe})),r().createElement(Le,null),r().createElement(i.Grid,null,r().createElement(i.GridItem,{md:"6"},r().createElement(O,null)),r().createElement(i.GridItem,{md:"6"},r().createElement(I,null)),r().createElement(i.GridItem,{md:"12"},t?r().createElement(Ge,null):r().createElement(De,null))))}}}]);
//# sourceMappingURL=../sourcemaps/sourceDetail.3e54398be404f789ccc1.js.map