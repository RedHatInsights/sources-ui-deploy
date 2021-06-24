(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[818],{34307:(e,t,a)=>{"use strict";a.d(t,{K_:()=>o,yH:()=>c});var n=a(96156),r=a(4833),i=a(79829);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var o=function(e){return e.url||null===e.url?function(e){if(null===e)return{scheme:null,host:null,port:null,path:null};if(!e)return{};try{var t=new URL(e),a=t.protocol.replace(/:$/,"");return{scheme:a,host:t.hostname,port:""===t.port?(0,r.bF)(a):t.port,path:t.pathname}}catch(e){return{}}}(e.url):e.endpoint?e.endpoint:e},c=function(e,t,a){var r=[];if(t.source&&r.push((0,i.Rj)().updateSource(e.source.id,t.source)),t.endpoint||t.url||null===t.url){var c=o(t),l=c.scheme,u=c.host,p=c.port,d=c.path,f=null===p?null:parseInt(p,10),m=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({scheme:l,host:u,path:d,port:null===f?null:isNaN(f)?void 0:f},t.endpoint);r.push((0,i.Rj)().updateEndpoint(e.endpoints[0].id,m))}return t.authentications&&Object.keys(t.authentications).forEach((function(e){var a=e.replace("a","");r.push((0,i.Rj)().updateAuthentication(a,t.authentications[e]))})),t.applications&&Object.keys(t.applications).forEach((function(e){var t=e.replace("a","");r.push((0,i.Rj)().updateApplication(t,{extra:a.applications[e].extra}))})),Promise.all(r)}},71641:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>pt});var n=a(92950),r=a.n(n),i=a(97066),s=a(86896),o=a(45237),c=a(45697),l=a.n(c),u=a(60566),p=a(4833),d=a(92137),f=a(28481),m=a(87757),g=a.n(m),b=a(7766),y=a(91447),h=a(98495);const v=function(){var e=(0,u.L)(),t=(0,s.Z)(),a=(0,o.useDispatch)(),c=(0,n.useState)(!1),l=(0,f.Z)(c,2),p=l[0],m=l[1];return r().createElement(i.Button,{variant:"plain","aria-label":t.formatMessage({id:"sources.checkavailability",defaultMessage:"Check source availability"}),onClick:(0,d.Z)(g().mark((function n(){return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),n.next=3,(0,y.Z)(e.id);case 3:m(!1),a((0,h.Hz)({title:t.formatMessage({id:"sources.checkavailability.notificationTitle",defaultMessage:"Request to check source status was sent"}),variant:"info",description:t.formatMessage({id:"sources.checkavailability.notificationDescription",defaultMessage:"Check this page later for updates"})}));case 5:case"end":return n.stop()}}),n)}))),isDisabled:p},!p&&r().createElement(b.ZP,null),p&&r().createElement(i.Spinner,{size:"md"}))};var E=function(e){var t=e.term,a=e.description;return r().createElement(i.DescriptionListGroup,null,r().createElement(i.DescriptionListTerm,null,t),r().createElement(i.DescriptionListDescription,null,a))};E.propTypes={term:l().node,description:l().node};const O=function(){var e,t=(0,s.Z)(),a=(0,u.L)(),n=(0,o.useSelector)((function(e){return e.sources.sourceTypes}),o.shallowEqual),c=n.find((function(e){return e.id===a.source_type_id}));if("amazon"===c.name){var l,d,f,m=null===(l=a.authentications)||void 0===l?void 0:l.find((function(e){return e.authtype.includes("arn")}));null!=m&&m.username&&(e=null===(d=m.username.match(/:\d+/))||void 0===d||null===(f=d[0])||void 0===f?void 0:f.replace(/:/g,""))}return r().createElement(i.Card,{className:"pf-m-selectable pf-m-selected card summary-card pf-u-m-lg pf-u-mr-sm-on-md"},r().createElement(i.CardTitle,null,t.formatMessage({id:"detail.summary.title",defaultMessage:"Source summary"})),r().createElement(i.CardBody,null,r().createElement(i.DescriptionList,{columnModifier:{default:"2Col"}},r().createElement(E,{term:t.formatMessage({id:"detail.summary.type",defaultMessage:"Source type"}),description:(0,p.P5)(a.source_type_id,void 0,{sourceTypes:n})}),r().createElement(E,{term:t.formatMessage({id:"detail.summary.lastChecked",defaultMessage:"Last availability check"}),description:r().createElement(r().Fragment,null,a.last_checked_at||a.last_available_at?(0,p.vh)(a.last_checked_at||a.last_available_at):t.formatMessage({id:"detail.summary.notChecked",defaultMessage:"Not checked yet"}),r().createElement(v,null))}),r().createElement(E,{term:t.formatMessage({id:"detail.summary.dateAdded",defaultMessage:"Date added"}),description:(0,p.vh)(a.created_at)}),r().createElement(E,{term:t.formatMessage({id:"detail.summary.lastModified",defaultMessage:"Last modified"}),description:(0,p.vh)(a.updated_at)}),a.app_creation_workflow&&r().createElement(E,{term:t.formatMessage({id:"detail.summary.configurationMode",defaultMessage:"Configuration mode"}),description:(0,p.Z3)(a.app_creation_workflow,a,{intl:t,sourceType:c})}),e&&r().createElement(E,{term:t.formatMessage({id:"detail.summary.awsAccountNumber",defaultMessage:"AWS account number"}),description:e}))))};var w=a(96156),M=a(334),j=a(17546),_=a(27957),P=a(60076),T=a(58185),k=a(45587),Z=a(79829),D=a(79477),S=a(64673),x=a(22122),A=a(16946);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){(0,w.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L=function(e){var t=e.app,a=e.removeApp,o=e.addApp,c=(0,n.useState)(!1),l=(0,f.Z)(c,2),p=l[0],d=l[1],m=(0,s.Z)(),g=(0,u.L)(),b=(0,M.useHistory)().push,y=(0,T.E)(),h=function(e){return function(){d(!1),e()}},v=(0,A.Z)(m),E=m.formatMessage({id:"sources.pausedSourceAction",defaultMessage:"You cannot perform this action on a paused source."}),O=R(R({},v),{},{tooltip:E}),w=t.paused_at?r().createElement(i.DropdownItem,(0,x.Z)({},g.paused_at&&O,!y&&v,{key:"resume",description:m.formatMessage({id:"app.kebab.resume.title",defaultMessage:"Resume data collection for this application."}),onClick:h(o)}),m.formatMessage({id:"app.kebab.resume.button",defaultMessage:"Resume"})):r().createElement(i.DropdownItem,(0,x.Z)({},g.paused_at&&O,!y&&v,{key:"pause",description:m.formatMessage({id:"app.kebab.pause.title",defaultMessage:"Temporarily stop this application from collecting data."}),onClick:h(a)}),m.formatMessage({id:"app.kebab.pause.button",defaultMessage:"Pause"})),j=r().createElement(i.DropdownItem,(0,x.Z)({},g.paused_at&&O,!y&&v,{key:"remove",description:m.formatMessage({id:"app.kebab.remove.title",defaultMessage:"Permanently stop data collection for this application."}),onClick:h((function(){return b((0,P.yS)(P._j.sourcesDetailRemoveApp.path,g.id).replace(":app_id",t.id))}))}),m.formatMessage({id:"app.kebab.pause.button",defaultMessage:"Remove"}));return r().createElement(i.Dropdown,{isPlain:!0,isOpen:p,position:"right",dropdownItems:[w,j],className:"ins-c-sources__application_kebab",toggle:r().createElement(i.KebabToggle,{onToggle:function(){return d((function(e){return!e}))}})})};L.propTypes={app:l().shape({id:l().string,paused_at:l().string}).isRequired,removeApp:l().func,addApp:l().func};const N=L;var I=a(96845),B=a(84569);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){(0,w.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H={selectedApps:{}},V=function(e,t){var a=t.type,n=t.id;switch(a){case"addApp":return F(F({},e),{},{selectedApps:F(F({},e.selectedApps),{},(0,w.Z)({},n,!0))});case"removeApp":return F(F({},e),{},{selectedApps:F(F({},e.selectedApps),{},(0,w.Z)({},n,!1))});case"clean":return F(F({},e),{},{selectedApps:F(F({},e.selectedApps),{},(0,w.Z)({},n,void 0))})}},q=function(e,t,a,n){var i,s=null===(i=n.find((function(t){return t.id===e})))||void 0===i?void 0:i.display_name;t((0,h.Hz)({title:a.formatMessage({id:"detail.applications.resumed.alert.title",defaultMessage:"{appName} connection resumed"},{appName:s}),variant:"default",customIcon:r().createElement(_.ZP,null)}))},G=function(e,t,a,n){var i,s=null===(i=n.find((function(t){return t.id===e})))||void 0===i?void 0:i.display_name;t((0,h.Hz)({title:a.formatMessage({id:"detail.applications.paused.alert.title",defaultMessage:"{appName} connection paused"},{appName:s}),description:a.formatMessage({id:"detail.applications.paused.alert.description",defaultMessage:"Your application will not reflect the most recent data until {appName} connection is resumed"},{appName:s}),variant:"default",customIcon:r().createElement(j.ZP,null)}))},W=function(e,t,a,n){var r={create:t.formatMessage({id:"detail.applications.add.error",defaultMessage:"Application create failed"}),pause:t.formatMessage({id:"detail.applications.pause.error",defaultMessage:"Application pause failed"}),resume:t.formatMessage({id:"detail.applications.resume.error",defaultMessage:"Application resume failed"})}[a];e((0,h.Hz)({title:r,description:(0,B.Z)(t,(0,I.Z)(n)),variant:"danger"}))};const K=function(){var e=(0,s.Z)(),t=(0,u.L)(),a=(0,M.useHistory)().push,c=(0,o.useSelector)((function(e){return e.sources.sourceTypes}),o.shallowEqual),l=(0,o.useSelector)((function(e){return e.sources.appTypes}),o.shallowEqual),m=(0,T.E)(),b=(0,o.useDispatch)(),y=(0,n.useReducer)(V,H),v=(0,f.Z)(y,2),E=v[0].selectedApps,O=v[1],j=c.find((function(e){return e.id===t.source_type_id})),_=null==j?void 0:j.name,x=l.filter((function(e){return e.supported_source_types.includes(_)})).filter(S.Z),A=function(){var n=(0,d.Z)(g().mark((function n(r,i){return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i){n.next=4;break}a((0,P.yS)(P._j.sourcesDetailAddApp.path,t.id).replace(":app_type_id",r)),n.next=18;break;case 4:if("boolean"==typeof E[r]){n.next=18;break}return O({type:"addApp",id:r}),n.prev=6,n.next=9,(0,Z.Rj)().unpauseApplication(i);case 9:return q(r,b,e,l),n.next=12,b((0,h.il)());case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(6),W(b,e,"resume",n.t0);case 17:O({type:"clean",id:r});case 18:case"end":return n.stop()}}),n,null,[[6,14]])})));return function(e,t){return n.apply(this,arguments)}}(),C=function(){var t=(0,d.Z)(g().mark((function t(a,n){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("boolean"==typeof E[n]){t.next=14;break}return O({type:"removeApp",id:n}),t.prev=2,t.next=5,(0,Z.Rj)().pauseApplication(a);case 5:return G(n,b,e,l),t.next=8,b((0,h.il)());case 8:t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),W(b,e,"pause",t.t0);case 13:O({type:"clean",id:n});case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,a){return t.apply(this,arguments)}}();return(0,k.Z)(t)&&(A=function(){var a=(0,d.Z)(g().mark((function a(n,r){return g().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("boolean"==typeof E[n]){a.next=27;break}if(O({type:"addApp",id:n}),!r){a.next=16;break}return a.prev=3,a.next=6,(0,Z.Rj)().unpauseApplication(r);case 6:return q(n,b,e,l),a.next=9,b((0,h.il)());case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),W(b,e,"resume",a.t0);case 14:a.next=26;break;case 16:return a.prev=16,a.next=19,(0,Z.Cu)({source_id:t.id,application_type_id:n});case 19:return a.next=21,b((0,h.il)());case 21:a.next=26;break;case 23:a.prev=23,a.t1=a.catch(16),W(b,e,"create",a.t1);case 26:O({type:"clean",id:n});case 27:case"end":return a.stop()}}),a,null,[[3,11],[16,23]])})));return function(e,t){return a.apply(this,arguments)}}()),r().createElement(i.Card,{className:"card applications-card pf-u-p-lg pf-u-pl-sm-on-md"},r().createElement(i.CardTitle,null,e.formatMessage({id:"detail.applications.title",defaultMessage:"Applications"})),r().createElement(i.CardBody,null,!m&&r().createElement("div",{className:"pf-u-mb-md",id:"no-permissions-applications"},e.formatMessage({id:"sources.notAdminButton",defaultMessage:"To perform this adding/removing applications, you must be granted write permissions from your Organization Administrator."})),r().createElement("div",{className:"pf-c-form"},x.map((function(a){var n=t.applications.find((function(e){return e.application_type_id===a.id})),s=function(e,t){var a;return(a={},(0,w.Z)(a,D.f.COST_MANAGAMENT,t.formatMessage({id:"cost.app.description",defaultMessage:"Analyze, forecast, and optimize your Red Hat OpenShift cluster costs in hybrid cloud environments."})),(0,w.Z)(a,D.f.CLOUD_METER,t.formatMessage({id:"cost.app.description",defaultMessage:"Includes access to Red Hat gold images, high precision subscription watch data, and autoregistration."})),a)[e]}(a.name,e),o=Boolean(n),c=Boolean(null==n?void 0:n.paused_at),l=!c&&o,u="boolean"==typeof E[a.id]?E[a.id]:l;return r().createElement(i.FormGroup,{key:a.id},r().createElement("div",{className:"ins-c-sources__application_flex"},r().createElement("div",null,r().createElement(i.Switch,{id:"app-switch-".concat(a.id),label:a.display_name,isChecked:u,isDisabled:(null==n?void 0:n.isDeleting)||!m||Boolean(t.paused_at),onChange:function(e){return e?A(a.id,null==n?void 0:n.id):C(n.id,a.id)}}),Boolean(n)&&r().createElement(p.c,{className:"pf-u-ml-sm clickable",app:n,showStatusText:!0}),s&&r().createElement("div",{className:"pf-c-switch pf-u-mt-sm ins-c-sources__application_fake_switch"},r().createElement("span",{className:"pf-c-switch__toggle ins-c-sources__hide-me"}),r().createElement("div",{className:"pf-c-switch__label ins-c-sources__switch-description"},s))),(c||o)&&r().createElement(N,{app:n,removeApp:function(){return C(n.id,a.id)},addApp:function(){return A(a.id,n.id)}})))})))))};var U=a(7081);const Y=function(){var e=(0,s.Z)();return r().createElement(i.EmptyState,null,r().createElement(i.EmptyStateIcon,{icon:U.ZP}),r().createElement(i.Title,{headingLevel:"h4",size:"lg"},e.formatMessage({id:"detail.noapplications.title",defaultMessage:"No connected applications"})),r().createElement(i.EmptyStateBody,{className:"empty-state-body"},e.formatMessage({id:"detail.noapplications.description",defaultMessage:"You have not connected any applications to this source. Use the switches above to add applications."})))};var X=a(8705);const $=function(){var e=(0,s.Z)();return r().createElement(i.EmptyState,null,r().createElement(i.EmptyStateIcon,{icon:X.ZP}),r().createElement(i.Title,{headingLevel:"h4",size:"lg"},e.formatMessage({id:"detail.nopermissions.title",defaultMessage:"Missing permissions"})),r().createElement(i.EmptyStateBody,{className:"empty-state-body"},(0,A.$)(e)))};var J=a(67850),Q=a(90280);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){(0,w.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae=function(e,t,a){return Promise.all([(0,Z.Rj)().showSource(e.id),(0,Z.Rj)().listSourceEndpoints(e.id),(0,Z.ye)(e.id,t,a)]).then(function(){var t=(0,d.Z)(g().mark((function t(a){var n,r,i,s,o,c,l,u,p,d,m,b;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=(0,f.Z)(a,3),i=r[0],s=r[1],o=r[2],c=s&&s.data&&s.data[0],l=(null==o||null===(n=o.sources[0])||void 0===n?void 0:n.applications)||[],u={source:te(te({},e),i),applications:l},p=[],m=[],b=[],l.forEach((function(e){var t;null==e||null===(t=e.authentications)||void 0===t||t.forEach((function(t){null!=t&&t.id&&(p.push((0,Z.Rj)().showAuthentication(t.id)),m.push(e.id),b.push(t.id))}))})),!(p.length>0)){t.next=13;break}return t.next=11,Promise.all(p);case 11:d=t.sent,m.forEach((function(e,t){u.applications.find((function(t){return t.id===e})).authentications.push(d[t])}));case 13:if(c){t.next=15;break}return t.abrupt("return",u);case 15:return t.abrupt("return",(0,Z.Rj)().listEndpointAuthentications(c.id).then((function(e){return te(te({},u),{},{endpoints:s.data,authentications:e.data.filter((function(e){var t=e.id;return!b.includes(t)}))})})));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},ne=a(85061),re=a(81253),ie=a(27361),se=a.n(ie),oe=a(36968),ce=a.n(oe),le=a(36488),ue=function(e,t){return{title:e.formatMessage({id:"wizard.pausedApplication",defaultMessage:"{application} is paused"},{application:t}),description:e.formatMessage({id:"wizard.pausedApplicationDescription",defaultMessage:"To resume data collection for this application, switch {application} on in the <b>Applications</b> section of this page."},{application:t,b:le.S}),variant:"default",customIcon:r().createElement(j.ZP,null)}},pe=["endpoints","authentications","applications"];function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?de(Object(a),!0).forEach((function(t){(0,w.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var me="check-endpoint",ge=function(e,t){var a={};return Object.keys(t).filter((function(e){return t[e]})).forEach((function(t){ce()(a,t,se()(e,t))})),a},be=function(e,t){var a,n,r=e.endpoints,i=e.authentications,s=e.applications,o=(0,re.Z)(e,pe),c={},l=[].concat((0,ne.Z)(i||[]),(0,ne.Z)((null==s?void 0:s.reduce((function(e,t){return[].concat((0,ne.Z)(e),(0,ne.Z)(t.authentications))}),[]))||[]));l.length>0&&l.forEach((function(e){c["a".concat(e.id)]=e})),r&&r.length>0&&(a=r[0]),a&&(n=a.scheme||a.host||a.path||a.port?(0,p.Fd)(a):void 0);var u={};return(null==s?void 0:s.length)>0&&s.forEach((function(e){e.extra&&Object.keys(e.extra).length>0&&(u["a".concat(e.id)]={extra:e.extra})})),fe(fe({source_type:t,endpoint:a,authentications:c,url:n},Object.keys(u).length&&{applications:u}),o)},ye=function(e,t){return!e.includes(t)&&e.push(t)},he=function(e,t){var a=[];return Object.keys(t).forEach((function(n){if(t[n]){var r,i,s=null===(r=n.match(/.a\d+/))||void 0===r||null===(i=r[0])||void 0===i?void 0:i.replace(".a","");n.startsWith("applications")&&ye(a,s),n.startsWith("authentications")&&e.applications.forEach((function(e){return e.authentications.forEach((function(t){var n=t.id,r=t.resource_type;return r&&n===s&&ye(a,"Application"===r?e.id:"".concat(me,"-").concat(e.id))}))})),(n.startsWith("url")||n.startsWith("endpoint"))&&e.applications.forEach((function(e){return e.authentications.forEach((function(t){return"Endpoint"===t.resource_type&&ye(a,"".concat(me,"-").concat(e.id))}))}))}})),a.filter(Boolean)},ve=a(34307),Ee=a(72810);function Oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function we(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(a),!0).forEach((function(t){(0,w.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Oe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Me=function(){var e=(0,d.Z)(g().mark((function e(t,a,n,r,i,s){var o,c,l,u,d;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"submit",values:t,editing:a}),o=new Date,e.prev=2,e.next=5,(0,ve.yH)(r,ge(t,a),t);case 5:e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(2),e.next=11,n((0,h.il)());case 11:return s({type:"submitFailed"}),e.abrupt("return");case 13:if((0,y.n)(r.source.id),c={},l=he(r,a),u=[],l.forEach((function(e){e.includes(me)?u.push((0,Ee.h)(r.endpoints[0].id,void 0,void 0,"getEndpoint",o).then((function(t){return we(we({},t),{},{id:e.replace("".concat(me,"-"),"")})}))):u.push((0,Ee.h)(e,void 0,void 0,void 0,o))})),!(u.length>0)){e.next=32;break}return e.prev=19,e.next=22,Promise.all(u);case 22:d=e.sent,e.next=31;break;case 25:return e.prev=25,e.t1=e.catch(19),e.next=29,n((0,h.il)());case 29:return s({type:"submitFailed"}),e.abrupt("return");case 31:d.forEach((function(e){var t=e.availability_status,a=e.availability_status_error,n=e.id;t===p.Rl&&(c[n]={title:i.formatMessage({id:"wizard.successEditToastTitle",defaultMessage:"Application credentials were edited successfully."}),description:a,variant:"success"}),t===p.nZ&&(c[n]={title:i.formatMessage({id:"wizard.failEditToastTitle",defaultMessage:"Edit application credentials failed."}),description:a,variant:"danger"}),t&&t!==p.Bj||(c[n]={title:i.formatMessage({id:"wizard.timeoutEditToastTitle",defaultMessage:"Edit in progress"}),description:i.formatMessage({id:"wizard.timeoutEditToastDescription",defaultMessage:"We are still working to confirm your updated credentials. Changes will be reflected in this table when complete."}),variant:"warning"})}));case 32:return e.next=34,n((0,h.il)());case 34:s({type:"submitFinished",messages:c});case 35:case"end":return e.stop()}}),e,null,[[2,7],[19,25]])})));return function(t,a,n,r,i,s){return e.apply(this,arguments)}}(),je=a(59824),_e=function(e,t,a,n){return{description:n.formatMessage({id:"sources.editFormDescripiton",defaultMessage:"Use the form fields to edit application credentials."}),fields:(0,D.J)(e.applications,t,a)}};function Pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(a),!0).forEach((function(t){(0,w.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Pe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ke={loading:!0,source:void 0,initialValues:{},sourceType:void 0,schema:void 0,isSubmitting:!1,initialLoad:!0,submitError:!1,submitMessages:void 0};const Ze=function(e,t){var a=t.type,n=t.source,r=t.sourceType,i=t.appTypes,s=t.intl,o=t.values,c=t.editing,l=t.messages;switch(a){case"createForm":return Te(Te({},e),{},{sourceType:r,initialValues:be(e.source,r.product_name),schema:_e(e.source,r,i,s),loading:!1});case"setSource":return Te(Te({},e),{},{messages:Te(Te({},l),e.submitMessages),source:n,initialLoad:!1,submitMessages:void 0});case"submit":return Te(Te({},e),{},{isSubmitting:!0,submitError:!1,values:o,editing:c});case"submitFinished":return Te(Te({},e),{},{isSubmitting:!1,source:n,submitMessages:l});case"submitFailed":return Te(Te({},e),{},{isSubmitting:!1,submitError:!0,messages:void 0});case"sourceChanged":return Te(Te({},e),{},{initialLoad:!0,loading:!0});default:return e}};var De=a(52893);const Se=function(){var e=(0,s.Z)();return r().createElement(De.Z,{customText:e.formatMessage({id:"sources.editSubmittingTitle",defaultMessage:"Validating edited source credentials"})})};var xe=a(79433),Ae=function(e){var t=e.onRetry,a=(0,s.Z)();return r().createElement(xe.Z,{onClose:t,customText:a.formatMessage({id:"sources.editErrorDescription",defaultMessage:"There was a problem while trying to edit your source. Please try again. If the error persists, open a support case."}),secondaryActions:r().createElement(i.Text,{component:"a",target:"_blank",href:"https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",rel:"noopener noreferrer"},a.formatMessage({id:"sources.openTicket",defaultMessage:"Open a support case"})),returnButtonTitle:a.formatMessage({id:"sources.retryText",defaultMessage:"Retry"})})};Ae.propTypes={onRetry:l().func.isRequired};const Ce=Ae;function Re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(a),!0).forEach((function(t){(0,w.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Re(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const Ne=function(){var e,t=(0,n.useReducer)(Ze,ke),a=(0,f.Z)(t,2),c=a[0],l=a[1],d=(0,u.L)(),m=(0,je.W)(),g=c.loading,b=c.editing,y=c.source,h=c.initialValues,v=c.schema,E=c.isSubmitting,O=c.initialLoad,w=c.message,M=c.messages,j=c.submitError,_=c.values,P=(0,s.Z)(),T=(0,o.useSelector)((function(e){return e.sources}),o.shallowEqual),k=T.sourceTypes,Z=T.appTypes,D=T.sourceTypesLoaded,S=T.appTypesLoaded,A=(0,o.useDispatch)();(0,n.useEffect)((function(){O||l({type:"sourceChanged"})}),[d,null==d||null===(e=d.applications)||void 0===e?void 0:e.length]),(0,n.useEffect)((function(){d&&O&&S&&ae(d,Z,k).then((function(e){var t=function(e,t,a){var n,r,i={};return e.applications.forEach((function(e){var n=e.id,r=e.application_type_id,s=e.availability_status_error,o=e.availability_status;if(e.paused_at){var c,l=(null===(c=a.find((function(e){return e.id===r})))||void 0===c?void 0:c.display_name)||n;i[n]=ue(t,l)}else o===p.nZ&&(i[n]={title:t.formatMessage({id:"wizard.failEditToastTitleBeforeEdit",defaultMessage:"This application is unavailable"}),description:s,variant:"danger"})})),null!==(n=e.endpoints)&&void 0!==n&&null!==(r=n[0])&&void 0!==r&&r.availability_status_error&&e.applications.map((function(e){return e.authentications.find((function(t){var a=t.resource_type;return!e.paused_at&&"Endpoint"===a}))?e.id:void 0})).filter(Boolean).forEach((function(a){var n,r;i[a]={title:t.formatMessage({id:"wizard.failEditToastTitleBeforeEdit",defaultMessage:"This application is unavailable"}),description:null===(n=e.endpoints)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.availability_status_error,variant:"danger"}})),i}(e,P,Z);l({type:"setSource",source:e,messages:t})}))}),[d,m,S,O]),(0,n.useEffect)((function(){if(y&&S&&D){var e=k.find((function(e){return e.id===y.source.source_type_id}));l({type:"createForm",sourceType:e,source:y,appTypes:Z,intl:P})}}),[S,y,D]);var C=!S||!D||g;if(j)return r().createElement(Ce,{onRetry:function(){return Me(_,b,A,y,P,l)}});if(E)return r().createElement(Se,null);if(C)return r().createElement(i.Bullseye,{className:"pf-u-m-2xl"},r().createElement(i.Spinner,null));var R=y.source.paused_at||y.applications.every((function(e){return e.paused_at}));return r().createElement(Q.Z,{schema:v,onSubmit:function(e,t){return Me(e,t.getState().dirtyFields,A,y,P,l)},FormTemplate:function(e){return r().createElement(J.ZP,(0,x.Z)({canReset:!0,showFormControls:!R,submitLabel:"Save changes",disableSubmit:["pristine","invalid"]},e))},clearedValue:null,initialValues:Le(Le(Le({},h),!d.paused_at&&{message:w}),!d.paused_at&&{messages:M})})},Ie=function(){var e=(0,s.Z)(),t=(0,u.L)(),a=(0,T.E)();return r().createElement(i.Card,{className:"card pf-u-m-lg pf-u-mt-0"},r().createElement(i.CardTitle,null,e.formatMessage({id:"detail.resources.title",defaultMessage:"Manage connected applications"})),r().createElement(i.CardBody,null,!a&&r().createElement($,null),a&&0===t.applications.length&&r().createElement(Y,null),a&&t.applications.length>0&&r().createElement(Ne,null)))};var Be=a(60409),ze=a(98583),Fe=a(80254),He=a(48716),Ve=["href"];const qe=function(){var e=(0,s.Z)(),t=(0,u.L)();return r().createElement(i.Breadcrumb,null,r().createElement(i.BreadcrumbItem,{component:function(e){var t=e.href,a=(0,re.Z)(e,Ve);return r().createElement(M.Link,(0,x.Z)({to:t},a))},to:P._j.sources.path},e.formatMessage({id:"sources.sources",defaultMessage:"Sources"})),r().createElement(i.BreadcrumbItem,{isActive:!0},t.name))};function Ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function We(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(a),!0).forEach((function(t){(0,w.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ge(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const Ke=function(){var e=(0,n.useState)(!1),t=(0,f.Z)(e,2),a=t[0],c=t[1],l=(0,s.Z)(),p=(0,M.useHistory)().push,d=(0,u.L)(),m=(0,T.E)(),g=(0,o.useDispatch)(),b=function(e){return function(){c(!1),e()}},y=l.formatMessage({id:"sources.pausedSourceAction",defaultMessage:"You cannot perform this action on a paused source."}),v=(0,A.Z)(l),E=We(We({},v),{},{tooltip:y});return r().createElement(i.Dropdown,{toggle:r().createElement(i.KebabToggle,{onToggle:function(){return c(!a)},id:"toggle-id-6"}),isOpen:a,isPlain:!0,position:"right",dropdownItems:[d.paused_at?r().createElement(i.DropdownItem,(0,x.Z)({},!m&&v,{key:"unpause",onClick:b((function(){return g((0,h.AX)(d.id,d.name,l))})),description:l.formatMessage({id:"detail.resume.description",defaultMessage:"Unpause data collection for this source"})}),l.formatMessage({id:"detail.resume.button",defaultMessage:"Resume"})):r().createElement(i.DropdownItem,(0,x.Z)({},!m&&v,{key:"pause",onClick:b((function(){return g((0,h.xz)(d.id,d.name,l))})),description:l.formatMessage({id:"detail.pause.description",defaultMessage:"Temporarily disable data collection"})}),l.formatMessage({id:"detail.pause.button",defaultMessage:"Pause"})),r().createElement(i.DropdownItem,(0,x.Z)({},!m&&v,{key:"remove",onClick:function(){return p((0,P.yS)(P._j.sourcesDetailRemove.path,d.id))},description:l.formatMessage({id:"detail.remove.description",defaultMessage:"Permanently delete this source and all collected data"})}),l.formatMessage({id:"detail.remove.button",defaultMessage:"Remove"})),r().createElement(i.DropdownItem,(0,x.Z)({},!m&&v,d.paused_at&&E,{key:"rename",onClick:function(){return p((0,P.yS)(P._j.sourcesDetailRename.path,d.id))}}),l.formatMessage({id:"detail.rename.button",defaultMessage:"Rename"}))]})},Ue=function(){var e=(0,s.Z)(),t=(0,u.L)(),a=(0,o.useSelector)((function(e){return e.sources.appTypes}),o.shallowEqual);return r().createElement(He.Z,null,r().createElement(qe,null),r().createElement(i.Flex,{className:"pf-u-mb-sm"},r().createElement(i.FlexItem,null,r().createElement(i.Title,{headingLevel:"h1",size:"2xl"},t.name)),r().createElement(i.FlexItem,null,(0,p.BN)(void 0,t,{appTypes:a})),r().createElement(i.FlexItem,{align:{default:"alignRight"}},r().createElement(Ke,null))),r().createElement(i.TextContent,null,r().createElement(i.Text,null,e.formatMessage({id:"detail.description",defaultMessage:"View details and manage connections for this source."}))))};var Ye=a(6877),Xe=a(5037),$e=a(84731),Je=["description"];function Qe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function et(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Qe(Object(a),!0).forEach((function(t){(0,w.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Qe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var tt=function(e){return[e.formatMessage({id:"resourceTable.resourceType",defaultMessage:"Resource type"}),e.formatMessage({id:"resourceTable.resourceValue",defaultMessage:"Value"})]},at=function(e,t,a){return e.applications.reduce((function(n,i){var s,o,c,l=t.find((function(e){return e.id===i.application_type_id})),u=(o=(0,Xe.Hx)(null===(s=i.authentications)||void 0===s?void 0:s.filter((function(e){return Object.keys(e).length>1})),a,null==l?void 0:l.name,i.id),c=be(e,a.product_name),o.flatMap((function(e){return e})).map((function(e){return!e.hideField&&[r().createElement(r().Fragment,{key:"label"},e.label),se()(c,e.name)]})).filter(Boolean));return et(et({},n),{},(0,w.Z)({},i.id,u))}),{})},nt=function(e,t){var a=t.type,n=t.intl,r=t.source,i=t.activeTab,s=t.appTypes,o=t.sourceType;switch(a){case"loaded":return et(et({},e),{},{columns:tt(n),applicationsRows:at(r,s,o),loading:!1,activeTab:r.applications[0].id});case"switchTab":return et(et({},e),{},{activeTab:i});case"setLoading":return et(et({},e),{},{loading:!0})}};const rt=function(){var e,t=(0,s.Z)(),a=(0,u.L)(),c=(0,je.W)(),l=(0,o.useSelector)((function(e){return e.sources}),o.shallowEqual),p=l.sourceTypes,d=l.appTypes,m=l.sourceTypesLoaded,g=l.appTypesLoaded,b=(0,n.useReducer)(nt,function(e){var t;return{loading:Boolean(null===(t=e.applications)||void 0===t?void 0:t.length),columns:[],applicationsRows:{},activeTab:0}}(a)),y=(0,f.Z)(b,2),h=y[0],v=h.activeTab,E=h.loading,O=h.columns,w=h.applicationsRows,M=y[1];return(0,n.useEffect)((function(){var e;a&&c&&g&&m&&null!=a&&null!==(e=a.applications)&&void 0!==e&&e.length&&(M({type:"setLoading"}),ae(a,d,p).then((function(e){var a=p.find((function(t){return t.id===e.source.source_type_id}));M({type:"loaded",source:e,intl:t,sourceType:a,appTypes:d})})))}),[null==a||null===(e=a.applications)||void 0===e?void 0:e.length,c,g,m]),r().createElement(i.Card,{className:"card pf-u-m-lg pf-u-mt-0"},r().createElement(i.CardTitle,null,t.formatMessage({id:"resourceTable.title",defaultMessage:"Connected application resources"})),r().createElement(i.CardBody,null,E&&r().createElement(i.Bullseye,{className:"pf-u-m-2xl"},r().createElement(i.Spinner,null)),!E&&!a.applications.length&&r().createElement(Y,null),!E&&a.applications.length>0&&r().createElement(r().Fragment,null,r().createElement(i.Text,{className:"pf-u-mb-md"},t.formatMessage({id:"resourceTable.description",defaultMessage:"View resources for your connected applications."})),r().createElement(i.Tabs,{isBox:!0,activeKey:v,onSelect:function(e,t){return M({type:"switchTab",activeTab:t})}},a.applications.map((function(e){var n,s,o=(null===(n=d.find((function(t){return t.id===e.application_type_id})))||void 0===n?void 0:n.display_name)||e.application_type_id,c=e.paused_at?ue(t,o):{},l=c.description,u=(0,re.Z)(c,Je);return r().createElement(i.Tab,{eventKey:e.id,key:e.id,title:r().createElement(i.TabTitleText,null,o)},e.paused_at&&!a.paused_at&&r().createElement(i.Alert,(0,x.Z)({isInline:!0,className:"pf-u-mt-lg"},u),l),null!==(s=w[e.id])&&void 0!==s&&s.length?r().createElement(Ye.Table,{"aria-label":t.formatMessage({id:"resourceTable.title",defaultMessage:"Connected application resources"}),variant:"compact",cells:O,rows:w[e.id],className:"pf-u-mt-md"},r().createElement(Ye.TableHeader,null),r().createElement(Ye.TableBody,null)):r().createElement($e.Z,{applicationName:o}))}))))))},it=function(){var e=(0,s.Z)(),t=(0,T.E)(),a=(0,o.useDispatch)(),n=(0,u.L)();return r().createElement(i.GridItem,{md:12,className:"pf-u-m-lg pf-u-mb-0"},r().createElement(i.Alert,{customIcon:r().createElement(j.ZP,null),variant:"default",isInline:!0,title:e.formatMessage({id:"source.detail.pausedTitle",defaultMessage:"Source paused"}),actionLinks:t?r().createElement(i.AlertActionLink,{onClick:function(){return a((0,h.AX)(n.id,n.name,e))}},e.formatMessage({id:"source.detail.resumeConnection",defaultMessage:"Resume connection"})):r().createElement(i.Tooltip,{content:(0,A.$)(e)},r().createElement(i.AlertActionLink,{isDisabled:!0},e.formatMessage({id:"source.detail.resumeConnection",defaultMessage:"Resume connection"})))},e.formatMessage({id:"source.detail.pausedDescription",defaultMessage:"No data is being collected for this source. Turn the source back on to reestablish connection and data collection. Previous credentials will be restored and application connections will continue as seen on this page."})))};var st=(0,n.lazy)((function(){return Promise.all([a.e(410),a.e(490)]).then(a.bind(a,55997))})),ot=(0,n.lazy)((function(){return Promise.all([a.e(410),a.e(736),a.e(371),a.e(482),a.e(185),a.e(180)]).then(a.bind(a,59622))})),ct=(0,n.lazy)((function(){return Promise.all([a.e(410),a.e(185),a.e(744)]).then(a.bind(a,76902))})),lt=(0,n.lazy)((function(){return Promise.all([a.e(410),a.e(736),a.e(657),a.e(671),a.e(291)]).then(a.bind(a,72498))})),ut=(0,n.lazy)((function(){return Promise.all([a.e(657),a.e(331)]).then(a.bind(a,524))}));const pt=function(){var e=(0,u.L)();if(!e)return r().createElement(r().Fragment,null,r().createElement(ze.X6,null),r().createElement(Be.Z,null));var t=(0,k.Z)(e);return r().createElement("div",{className:"ins-c-sources__detail-page"},r().createElement(n.Suspense,{fallback:null},r().createElement(Fe.Z,{exact:!0,route:P._j.sourcesDetailRemove,Component:st,componentProps:{backPath:(0,P.yS)(P._j.sourcesDetail.path,e.id)}}),r().createElement(Fe.Z,{exact:!0,route:P._j.sourcesDetailAddApp,Component:ot}),r().createElement(Fe.Z,{exact:!0,route:P._j.sourcesDetailRemoveApp,Component:ct}),r().createElement(Fe.Z,{exact:!0,route:P._j.sourcesDetailRename,Component:lt}),r().createElement(Fe.Z,{exact:!0,route:P._j.sourcesDetailEditCredentials,Component:ut})),r().createElement(Ue,null),e.paused_at&&r().createElement(it,null),r().createElement(i.Grid,null,r().createElement(i.GridItem,{md:"6"},r().createElement(O,null)),r().createElement(i.GridItem,{md:"6"},r().createElement(K,null)),r().createElement(i.GridItem,{md:"12"},t?r().createElement(rt,null):r().createElement(Ie,null))))}}}]);
//# sourceMappingURL=../sourcemaps/sourceDetail.df6598204b4bcdbadf99.js.map