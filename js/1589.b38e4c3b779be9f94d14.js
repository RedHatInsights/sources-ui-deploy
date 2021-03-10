(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[1589],{67601:(e,t,a)=>{"use strict";a.d(t,{lH:()=>o,$l:()=>r,UW:()=>i});var n=a(45857),o=function(){return(0,n.Rj)().listSourceTypes().then((function(e){return{sourceTypes:e.data}}))},r=function(){return(0,n.Rj)().doLoadAppTypes().then((function(e){return{applicationTypes:e.data}}))},i=function(e){return(0,n.Rj)().postGraphQL({query:'{ sources(filter: {name: "'.concat(e,'"})\n        { id, name }\n    }')})}},41589:(e,t,a)=>{"use strict";a.d(t,{AQ:()=>ee,ZP:()=>ye});var n=a(59713),o=a.n(n),r=a(319),i=a.n(r),s=a(87757),c=a.n(s),u=a(48926),l=a.n(u),p=a(80150),d=a.n(p),f=a(86896),m=a(87242),g=a(24154),y=a(68340),_=a(68774),v=a(99166);var b=a(67601),h=a(61570),M=a(38307),w=a(45697),E=a.n(w),T=a(58860),z=function(e){var t=e.name,a=(0,T.Z)();return(0,p.useEffect)((function(){return setTimeout((function(){return a.change(t,"1")})),function(){return a.change(t,"")}}),[]),null};z.propTypes={name:E().string.isRequired};const k=z;var S=a(69174),A=a(90300),R=function(e){var t=e.sourceTypes,a=(0,T.Z)(),n=a.renderForm,o=(0,a.getState)().values;return n((0,A.Z)(t,o.source_type))};R.propTypes={sourceTypes:E().array};const Z=R,x=function(e,t){return{name:"configuration_step",title:e.formatMessage({id:"wizard.configurationStep",defaultMessage:"Select configuration"}),nextStep:function(e){var t,a,n=e.values;if(null!==(t=n.source)&&void 0!==t&&t.app_creation_workflow)return"account_authorization"===(null===(a=n.source)||void 0===a?void 0:a.app_creation_workflow)?"select_applications":"application_step"},fields:[{component:m.Z.PLAIN_TEXT,name:"conf-desc",label:"Configure your source manually or let us manage all necessary credentials by selecting Superkey configuration."},{component:m.Z.RADIO,name:"source.app_creation_workflow",label:e.formatMessage({id:"wizard.configurationMode",defaultMessage:"Select a configuration mode"}),isRequired:!0,options:[{label:d().createElement("span",{className:"ins-c-sources__wizard--rhel-mag-label"},e.formatMessage({id:"wizard.accountAuth",defaultMessage:"Account authorization"}),d().createElement(S._,{className:"pf-u-ml-sm",color:"purple"},e.formatMessage({id:"wizard.confMode.reccomended",defaultMessage:"Recommended"}))),description:e.formatMessage({id:"wizard.accountAuth.desc",defaultMessage:"A new automated source configuration method. Provide your AWS account credentials and let Red Hat configure and manage your source for you."}),value:"account_authorization"}],validate:[{type:g.Z.REQUIRED}]},{component:m.Z.SUB_FORM,name:"sub-form",fields:[{component:"description",name:"super-key-credentials",Content:Z,sourceTypes:t}],condition:{when:"source.app_creation_workflow",is:"account_authorization"},className:"pf-u-ml-md"},{component:m.Z.RADIO,name:"source.app_creation_workflow",options:[{label:e.formatMessage({id:"wizard.manualAuth",defaultMessage:"Manual configuration"}),description:e.formatMessage({id:"wizard.manualAuth.desc",defaultMessage:"Configure and manage your source manually if you do not wish to provide Superkey credentials. You will set up sources the same way you do today."}),value:"manual_configuration"}]}]}};var D=a(6479),O=a.n(D),N=a(49739),I=a(83826),P=a(28191),C=a(92298),j=a(68778),q=function(e){var t=e.title,a=e.description,n=e.isEnabled,o=O()(e,["title","description","isEnabled"]);return d().createElement(I.v,o,d().createElement(P.k,null,d().createElement(C.B,{spacer:{default:"spacerSm"}},d().createElement(j.ZP,{fill:n?"#3E8635":"#6A6E73"})),d().createElement(C.B,null,d().createElement(y.x,{className:"pf-u-mb-xs ins-c-sources__wizard--rhel-desc-title"},t),d().createElement(y.x,null,a))))};q.propTypes={title:E().string.isRequired,description:E().string.isRequired,isEnabled:E().bool};var H=function(e){var t,a,n=e.id,o=(0,f.Z)(),r=(0,(0,T.Z)().getState)().values,i="account_authorization"===r.source.app_creation_workflow&&(null===(t=r.applications)||void 0===t?void 0:t.includes(n))||"account_authorization"!==r.source.app_creation_workflow&&(null===(a=r.application)||void 0===a?void 0:a.application_type_id)===n;return d().createElement(N.K,null,d().createElement(q,{title:o.formatMessage({id:"rhelbundle.goldImages.title",defaultMessage:"Red Hat Gold Images"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Unlock cloud images in AWS and bring your own subscription instead of paying hourly."}),className:"pf-u-mb-sm",isEnabled:i}),d().createElement(q,{title:o.formatMessage({id:"rhelbundle.subwatch.title",defaultMessage:"High precision subscription watch data"}),description:o.formatMessage({id:"rhelbundle.subwatch.description",defaultMessage:"View precise public cloud usage data in subscription watch."}),className:"pf-u-mb-sm",isEnabled:i}),d().createElement(q,{title:o.formatMessage({id:"rhelbundle.autoregistration.title",defaultMessage:"Autoregistration"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Cloud instances automatically connect to cloud.redhat.com when provisioned."}),className:"pf-u-mb-sm",isEnabled:i}),d().createElement(q,{title:o.formatMessage({id:"rhelbundle.redhatconnector.title",defaultMessage:"Red Hat Connector"}),description:o.formatMessage({id:"rhelbundle.redhatconnector.description",defaultMessage:"Simplified set up and registration of connected hosts."}),isEnabled:i}))};H.propTypes={id:E().string.isRequired};const L=H;var B=a(75087),U=function(e,t){var a;return(a={},o()(a,B.Qr,t.formatMessage({id:"cost.app.description",defaultMessage:"Analyze, forecast, and optimize your Red Hat OpenShift cluster costs in hybrid cloud environments."})),o()(a,B.fn,d().createElement(L,{id:e.id})),a)[e.name]},Q=function(e,t){return o()({},B.fn,d().createElement("span",{className:"ins-c-sources__wizard--rhel-mag-label"},"RHEL management"," ",d().createElement(S._,{className:"pf-u-ml-sm",color:"purple"},t.formatMessage({id:"sub.bundle",defaultMessage:"Bundle"}))))[e.name]},X=function(e,t){return[].concat(i()(e.sort((function(e,t){return e.display_name.localeCompare(t.display_name)})).map((function(e){return{value:e.id,label:Q(e,t)||e.display_name,description:U(e,t)}}))),i()((0,B._t)()!==B.B0?[{label:t.formatMessage({id:"wizard.noApplication",defaultMessage:"No application"}),value:M.Dt}]:[]))};const F=function(e,t){return{name:"select_applications",title:t.formatMessage({id:"applications.select",defaultMessage:"Select applications"}),nextStep:"summary",fields:[{component:m.Z.PLAIN_TEXT,name:"conf-desc",label:t.formatMessage({id:"applications.description",defaultMessage:"Configuring your cloud sources provides additional capabilities included with your subscription. You can turn these features on or off at any time after source creation."})},{component:"switch-group",name:"applications",label:t.formatMessage({id:"applications.availableApplications",defaultMessage:"Available applications"}),options:X(e,t),applicationTypes:e}]}};var W=a(62106),Y=a(76224);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function K(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=function(){var e=l()(c().mark((function e(t){var a,n,o,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.length>1&&void 0!==r[1]?r[1]:void 0,n=r.length>2?r[2]:void 0,t){e.next=4;break}return e.abrupt("return",void 0);case 4:return e.prev=4,e.next=7,(0,b.UW)(t);case 7:o=e.sent,e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(4),console.error((0,Y.Z)(e.t0)),e.abrupt("return",void 0);case 14:if(!o.data.sources.find((function(e){return e.id!==a}))){e.next=16;break}throw n.formatMessage({defaultMessage:"That name is taken. Try another.",id:"wizard.nameTaken"});case 16:return e.abrupt("return",void 0);case 17:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}(),$=!0,J=function(e){return $=e},ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return(0,v.Z)(e,t,a)}(V),te=function(e){return i()(e.map((function(e){return K(K({},e),{},{product_name:"Red Hat"===e.vendor?e.product_name.replace("Red Hat ",""):e.product_name})})).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){return{value:e.name,label:e.product_name}})))},ae=function(e){return function(t,a){var n=a.getState().values.source_type,o=e.find((function(e){return e.id===t.value}));if(!n||!o||o.supported_source_types.includes(n))return t}},ne={amazon:"/apps/frontend-assets/partners-icons/aws.svg","ansible-tower":"/apps/frontend-assets/red-hat-logos/stacked.svg",azure:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",openshift:"/apps/frontend-assets/red-hat-logos/stacked.svg",satellite:"/apps/frontend-assets/red-hat-logos/stacked.svg",google:"/apps/frontend-assets/partners-icons/google-cloud-short.svg"},oe=function(e){return function(t){var a=e.find((function(e){return e.name===t}));return!a||a.icon_url&&!ne[t]?null:function(){return d().createElement("img",{src:ne[t]||a.icon_url,alt:a.product_name,className:"ins-c-sources__wizard--icon ".concat("Red Hat"===a.vendor?"redhat-icon":"pf-u-mb-sm")})}}},re=function(e){var t=e.values,a=t.application,n=t.source_type,o=a&&a.application_type_id!==M.Dt&&a.application_type_id;return o?"".concat(n,"-").concat(o):n},ie=function(e){var t=e.intl,a=e.sourceTypes;return e.applicationTypes,{component:"card-select",name:"source_type",isRequired:!0,label:t.formatMessage({id:"wizard.selectYourSourceType",defaultMessage:"A. Select your source type"}),iconMapper:oe(a),validate:[{type:g.Z.REQUIRED}],options:te(a)}},se=function(e){var t=e.intl,a=e.sourceTypes,n=e.applicationTypes,o=e.disableAppSelection;return[ie({intl:t,sourceTypes:a,applicationTypes:n}),{component:"enhanced-radio",name:"application.application_type_id",label:t.formatMessage({id:"wizard.selectApplication",defaultMessage:"B. Application"}),options:X(n,t),mutator:ae(n),isDisabled:o,isRequired:!0,validate:[{type:g.Z.REQUIRED}],condition:{when:"source_type",isNotEmpty:!0}}]},ce=function(e,t){return{name:"application_step",title:t.formatMessage({id:"wizard.selectApplication",defaultMessage:"Select application"}),nextStep:re,fields:[{component:m.Z.PLAIN_TEXT,name:"app-description",label:t.formatMessage({id:"wizard.applicationDescription",defaultMessage:"Select an application to connect to your source. You can connect additional applications after source creation."})},{component:"enhanced-radio",name:"application.application_type_id",options:X(e,t),mutator:ae(e),menuIsPortal:!0},{component:m.Z.TEXT_FIELD,name:"source_type",hideField:!0}]}},ue=function(e,t,a,n){return{title:n.formatMessage({id:"wizard.chooseAppAndType",defaultMessage:"Source type and application"}),name:"types_step",nextStep:re,fields:[].concat(i()(se({intl:n,sourceTypes:e,applicationTypes:t,disableAppSelection:a})),[{component:"description",name:"fixasyncvalidation",Content:k}])}},le=function(e){return null==e?void 0:e.schema.authentication.find((function(e){var t=e.is_superkey,a=e.type;return t||"access_key_secret_key"===a}))},pe=function(e,t,a){return{title:a.formatMessage({id:"wizard.chooseAppAndType",defaultMessage:"Select source type"}),name:"types_step",nextStep:function(t){var a=t.values;if(a.source_type){var n=e.find((function(e){return e.name===a.source_type}));return le(n)?"configuration_step":"application_step"}},fields:[{component:m.Z.PLAIN_TEXT,name:"plain-text",label:a.formatMessage({id:"wizard.selectCloudType",defaultMessage:"Select a cloud provider to connect to your Red Hat account."})},K(K({},ie({intl:a,sourceTypes:e,applicationTypes:t})),{},{label:a.formatMessage({id:"wizard.selectCloudProvider",defaultMessage:"Select a cloud provider"})}),{component:"description",name:"fixasyncvalidation",Content:k}]}},de=function(){var e=(0,f.Z)();return d().createElement(_.D,{key:"step1"},d().createElement(y.x,{component:y.q.p},e.formatMessage({id:"wizard.nameDescription",defaultMessage:"To import data for an application, you need to connect to a data source. Enter a name, then proceed to select your application and source type."})))},fe=function(e,t,a){return{title:e.formatMessage({id:"wizard.nameSource",defaultMessage:"Name source"}),name:"name_step",nextStep:function(){return t?le(a.find((function(e){return e.name===t})))?"configuration_step":"application_step":"types_step"},fields:[{component:"description",name:"description-summary",Content:de},{component:m.Z.TEXT_FIELD,name:"source.name",type:"text",label:e.formatMessage({id:"wizard.name",defaultMessage:"Name"}),placeholder:"Source_1",isRequired:!0,validate:[function(t){return function(e){return $?(J(!1),function(t,a){return t?V(t,a,e):void 0}):ee}(e)(t,void 0,e)},{type:g.Z.REQUIRED}],resolveProps:W.Z}]}},me=function(){var e=(0,f.Z)();return d().createElement(_.D,null,d().createElement(y.x,{component:y.q.p},e.formatMessage({id:"wizard.summaryDescription",defaultMessage:"Review the information below and click <b>Add</b> to add your source. To edit details in previous steps, click <b>Back</b>."},{b:function(e){return d().createElement("b",{key:"b-".concat(e.length,"-").concat(Math.floor(1e3*Math.random()))},e)}})))},ge=function(e,t,a){return{fields:[{component:"description",name:"description-summary",Content:me},{name:"summary",component:"summary",sourceTypes:e,applicationTypes:t}],name:"summary",title:a.formatMessage({id:"wizard.reviewDetails",defaultMessage:"Review details"})}};const ye=function(e,t,a,n,o,r,s){return J(!0),{fields:[{component:m.Z.WIZARD,name:"wizard",className:"sources",title:(0,M.Z5)(),inModal:!0,description:(0,M.A6)(),buttonLabels:{submit:o.formatMessage({id:"sources.add",defaultMessage:"Add"}),back:o.formatMessage({id:"wizard.back",defaultMessage:"Back"}),cancel:o.formatMessage({id:"wizard.cancel",defaultMessage:"Cancel"}),next:o.formatMessage({id:"wizard.next",defaultMessage:"Next"})},container:n,showTitles:!0,initialState:s,crossroads:["application.application_type_id","source_type","auth_select","source.app_creation_workflow"],fields:[fe(o,r,e),r||(0,B._t)()!==B.B0?pe(e,t,o):ue(e,t,a,o),x(o,e),F(t,o),ce(t,o)].concat(i()((0,h.dD)(e,t)),[ge(e,t,o)])}]}}}}]);
//# sourceMappingURL=1589.b38e4c3b779be9f94d14.js.map