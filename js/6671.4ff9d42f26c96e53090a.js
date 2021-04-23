(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[6671],{72623:(e,t,a)=>{"use strict";a.d(t,{lH:()=>o,$l:()=>r,UW:()=>s});var n=a(79829),o=function(){return(0,n.Rj)().listSourceTypes().then((function(e){return{sourceTypes:e.data}}))},r=function(){return(0,n.Rj)().doLoadAppTypes().then((function(e){return{applicationTypes:e.data}}))},s=function(e){return(0,n.Rj)().postGraphQL({query:'{ sources(filter: {name: "'.concat(e,'"})\n        { id, name }\n    }')})}},6671:(e,t,a)=>{"use strict";a.d(t,{AQ:()=>B,ZP:()=>oe});var n=a(96156),o=a(85061),r=a(92137),s=a(87757),i=a.n(s),c=a(92950),l=a.n(c),u=a(45697),p=a.n(u),d=a(86896),m=a(48880),f=a(96354),g=a(64124),y=a(32413),b=a(99166);var _=a(72623),v=a(32600),M=a(72317),h=a(92657),w=function(e){var t=e.sourceTypes,a=(0,m.default)(),n=a.renderForm,o=(0,a.getState)().values;return n((0,h.Z)(t,o.source_type))};w.propTypes={sourceTypes:p().array};const T=w,E=function(e,t){return{name:"configuration_step",title:e.formatMessage({id:"wizard.configurationStep",defaultMessage:"Select configuration"}),nextStep:function(e){var t,a,n=e.values;if(null!==(t=n.source)&&void 0!==t&&t.app_creation_workflow)return"account_authorization"===(null===(a=n.source)||void 0===a?void 0:a.app_creation_workflow)?"select_applications":"application_step"},fields:[{component:f.Z.PLAIN_TEXT,name:"conf-desc",label:"Configure your source manually or let us manage all necessary credentials by selecting Superkey configuration."},{component:f.Z.RADIO,name:"source.app_creation_workflow",label:e.formatMessage({id:"wizard.configurationMode",defaultMessage:"Select a configuration mode"}),isRequired:!0,options:[{label:l().createElement("span",{className:"ins-c-sources__wizard--rhel-mag-label"},e.formatMessage({id:"wizard.accountAuth",defaultMessage:"Account authorization"}),l().createElement(y.Label,{className:"pf-u-ml-sm",color:"purple"},e.formatMessage({id:"wizard.confMode.reccomended",defaultMessage:"Recommended"}))),description:e.formatMessage({id:"wizard.accountAuth.desc",defaultMessage:"A new automated source configuration method. Provide your AWS account credentials and let Red Hat configure and manage your source for you."}),value:"account_authorization"}],validate:[{type:g.Z.REQUIRED}]},{component:f.Z.SUB_FORM,name:"sub-form",fields:[{component:"description",name:"super-key-credentials",Content:T,sourceTypes:t}],condition:{when:"source.app_creation_workflow",is:"account_authorization"},className:"pf-u-ml-md"},{component:f.Z.RADIO,name:"source.app_creation_workflow",options:[{label:e.formatMessage({id:"wizard.manualAuth",defaultMessage:"Manual configuration"}),description:e.formatMessage({id:"wizard.manualAuth.desc",defaultMessage:"Configure and manage your source manually if you do not wish to provide Superkey credentials. You will set up sources the same way you do today."}),value:"manual_configuration"}]}]}};var z=a(81253),S=a(68778),k=function(e){var t=e.title,a=e.description,n=e.isEnabled,o=(0,z.Z)(e,["title","description","isEnabled"]);return l().createElement(y.StackItem,o,l().createElement(y.Flex,null,l().createElement(y.FlexItem,{spacer:{default:"spacerSm"}},l().createElement(S.ZP,{fill:n?"#3E8635":"#6A6E73"})),l().createElement(y.FlexItem,null,l().createElement(y.Text,{className:"pf-u-mb-xs ins-c-sources__wizard--rhel-desc-title"},t),l().createElement(y.Text,null,a))))};k.propTypes={title:p().string.isRequired,description:p().string.isRequired,isEnabled:p().bool};var A=function(e){var t,a,n=e.id,o=(0,d.Z)(),r=(0,(0,m.default)().getState)().values,s="account_authorization"===r.source.app_creation_workflow&&(null===(t=r.applications)||void 0===t?void 0:t.includes(n))||"account_authorization"!==r.source.app_creation_workflow&&(null===(a=r.application)||void 0===a?void 0:a.application_type_id)===n;return"azure"===r.source_type?l().createElement(y.Stack,null,l().createElement(k,{title:o.formatMessage({id:"rhelbundle.goldImages.title",defaultMessage:"Red Hat Gold Images"}),description:o.formatMessage({id:"rhelbundle.goldImages.azure.description",defaultMessage:"Unlock cloud images in Microsoft Azure and bring your own subscription instead of paying hourly."}),className:"pf-u-mb-sm",isEnabled:s}),l().createElement(k,{title:o.formatMessage({id:"rhelbundle.autoregistration.title",defaultMessage:"Autoregistration"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Cloud instances automatically connect to cloud.redhat.com when provisioned."}),isEnabled:s})):l().createElement(y.Stack,null,l().createElement(k,{title:o.formatMessage({id:"rhelbundle.goldImages.title",defaultMessage:"Red Hat Gold Images"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Unlock cloud images in AWS and bring your own subscription instead of paying hourly."}),className:"pf-u-mb-sm",isEnabled:s}),l().createElement(k,{title:o.formatMessage({id:"rhelbundle.subwatch.title",defaultMessage:"High precision subscription watch data"}),description:o.formatMessage({id:"rhelbundle.subwatch.description",defaultMessage:"View precise public cloud usage data in subscription watch."}),className:"pf-u-mb-sm",isEnabled:s}),l().createElement(k,{title:o.formatMessage({id:"rhelbundle.autoregistration.title",defaultMessage:"Autoregistration"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Cloud instances automatically connect to cloud.redhat.com when provisioned."}),isEnabled:s}))};A.propTypes={id:p().string.isRequired};const Z=A;var R=a(84866),x=function(e,t){var a;return(a={},(0,n.Z)(a,R.Qr,t.formatMessage({id:"cost.app.description",defaultMessage:"Analyze, forecast, and optimize your Red Hat OpenShift cluster costs in hybrid cloud environments."})),(0,n.Z)(a,R.fn,l().createElement(Z,{id:e.id})),a)[e.name]},I=function(e,t){return(0,n.Z)({},R.fn,l().createElement("span",{className:"ins-c-sources__wizard--rhel-mag-label"},"RHEL management"," ",l().createElement(y.Label,{className:"pf-u-ml-sm",color:"purple"},t.formatMessage({id:"sub.bundle",defaultMessage:"Bundle"}))))[e.name]},N=function(e,t,a){return[].concat((0,o.Z)(e.sort((function(e,t){return e.display_name.localeCompare(t.display_name)})).map((function(e){return{value:e.id,label:I(e,t)||e.display_name,description:x(e,t)}}))),(0,o.Z)(a!==R.B0?[{label:t.formatMessage({id:"wizard.noApplication",defaultMessage:"No application"}),value:M.Dt}]:[]))};const D=function(e,t){return{name:"select_applications",title:t.formatMessage({id:"applications.select",defaultMessage:"Select applications"}),nextStep:"summary",fields:[{component:f.Z.PLAIN_TEXT,name:"conf-desc",label:t.formatMessage({id:"applications.description",defaultMessage:"Configuring your cloud sources provides additional capabilities included with your subscription. You can turn these features on or off at any time after source creation."})},{component:"switch-group",name:"applications",label:t.formatMessage({id:"applications.availableApplications",defaultMessage:"Available applications"}),options:N(e,t),applicationTypes:e}]}};var O=a(36680),P=a(96845);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(){var e=(0,r.Z)(i().mark((function e(t){var a,n,o,r=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.length>1&&void 0!==r[1]?r[1]:void 0,n=r.length>2?r[2]:void 0,t){e.next=4;break}return e.abrupt("return",void 0);case 4:return e.prev=4,e.next=7,(0,_.UW)(t);case 7:o=e.sent,e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(4),console.error((0,P.Z)(e.t0)),e.abrupt("return",void 0);case 14:if(!o.data.sources.find((function(e){return e.id!==a}))){e.next=16;break}throw n.formatMessage({defaultMessage:"That name is taken. Try another.",id:"wizard.nameTaken"});case 16:return e.abrupt("return",void 0);case 17:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}(),H=!0,F=function(e){return H=e},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return(0,b.Z)(e,t,a)}(j),U=function(e){return(0,o.Z)(e.map((function(e){return L(L({},e),{},{product_name:"Red Hat"===e.vendor?e.product_name.replace("Red Hat ",""):e.product_name})})).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){return{value:e.name,label:e.product_name}})))},q=function(e){return function(t,a){var n=a.getState().values.source_type,o=e.find((function(e){return e.id===t.value}));if(!n||!o||o.supported_source_types.includes(n))return t}},X={amazon:"/apps/frontend-assets/partners-icons/aws.svg","ansible-tower":"/apps/frontend-assets/red-hat-logos/stacked.svg",azure:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",openshift:"/apps/frontend-assets/red-hat-logos/stacked.svg",satellite:"/apps/frontend-assets/red-hat-logos/stacked.svg",google:"/apps/frontend-assets/partners-icons/google-cloud-short.svg"},Q=function(e){return function(t){var a=e.find((function(e){return e.name===t}));return!a||a.icon_url&&!X[t]?null:function(){return l().createElement("img",{src:X[t]||a.icon_url,alt:a.product_name,className:"ins-c-sources__wizard--icon ".concat("Red Hat"===a.vendor?"redhat-icon":"pf-u-mb-sm")})}}},W=function(e){return function(t){var a=t.values,n=a.application,o=a.source_type;if(e)return"application_step";var r=n&&n.application_type_id!==M.Dt&&n.application_type_id;return r?"".concat(o,"-").concat(r):o}},Y=function(e){return function(t){var a,n=t.values;return(null==(a=e.find((function(e){return e.name===n.source_type})))?void 0:a.schema.authentication.find((function(e){return e.is_superkey})))?"configuration_step":"application_step"}},G=function(e){var t=e.intl,a=e.sourceTypes;return e.applicationTypes,{component:"card-select",name:"source_type",isRequired:!0,label:t.formatMessage({id:"wizard.selectYourSourceType",defaultMessage:"A. Select your source type"}),iconMapper:Q(a),validate:[{type:g.Z.REQUIRED}],options:U(a)}},V=function(e){var t=e.intl,a=e.sourceTypes,n=e.applicationTypes,o=e.disableAppSelection;return[G({intl:t,sourceTypes:a,applicationTypes:n}),{component:"enhanced-radio",name:"application.application_type_id",label:t.formatMessage({id:"wizard.selectApplication",defaultMessage:"B. Application"}),options:N(n,t,R.B0),mutator:q(n),isDisabled:o,isRequired:!0,validate:[{type:g.Z.REQUIRED}],condition:{when:"source_type",isNotEmpty:!0}}]},$=function(e,t,a){return{name:"application_step",title:t.formatMessage({id:"wizard.selectApplication",defaultMessage:"Select application"}),nextStep:W(),fields:[{component:f.Z.PLAIN_TEXT,name:"app-description",label:t.formatMessage({id:"wizard.applicationDescription",defaultMessage:"Select an application to connect to your source. You can connect additional applications after source creation."})},{component:"enhanced-radio",name:"application.application_type_id",options:N(e,t,a),mutator:q(e),menuIsPortal:!0},{component:f.Z.TEXT_FIELD,name:"source_type",hideField:!0}]}},J=function(e,t,a,n){return{title:n.formatMessage({id:"wizard.chooseAppAndType",defaultMessage:"Source type and application"}),name:"types_step",nextStep:"name_step",fields:[{component:f.Z.PLAIN_TEXT,name:"plain-text",label:n.formatMessage({id:"wizard.selectRedHatType",defaultMessage:"To import data for an application, you need to connect to a data source. Start by selecting your source type and application."})}].concat((0,o.Z)(V({intl:n,sourceTypes:e,applicationTypes:t,disableAppSelection:a})))}},K=function(e,t,a){return{title:a.formatMessage({id:"wizard.chooseAppAndType",defaultMessage:"Select source type"}),name:"types_step",nextStep:"name_step",fields:[{component:f.Z.PLAIN_TEXT,name:"plain-text",label:a.formatMessage({id:"wizard.selectCloudType",defaultMessage:"To import data for an application, you need to connect to a data source. Start by selecting your source type."})},L(L({},G({intl:a,sourceTypes:e,applicationTypes:t})),{},{label:a.formatMessage({id:"wizard.selectCloudProvider",defaultMessage:"Select a cloud provider"})})]}},ee=function(e){var t,a=e.sourceTypes,n=(0,d.Z)(),o=(0,m.default)().getState,r=null===(t=a.find((function(e){return e.name===o().values.source_type})))||void 0===t?void 0:t.product_name;return l().createElement(y.TextContent,{key:"step1"},l().createElement(y.Text,{component:y.TextVariants.p},n.formatMessage({id:"wizard.nameDescription",defaultMessage:"Enter a name for your {typeName} source."},{typeName:r})))};ee.propTypes={sourceTypes:p().array};var te=function(e,t,a,n){return{title:e.formatMessage({id:"wizard.nameSource",defaultMessage:"Name source"}),name:"name_step",nextStep:n===R.B0?W(t):Y(a),fields:[{component:"description",name:"description-summary",Content:ee,sourceTypes:a},{component:f.Z.TEXT_FIELD,name:"source.name",type:"text",label:e.formatMessage({id:"wizard.name",defaultMessage:"Name"}),placeholder:"Source_1",isRequired:!0,validate:[function(t){return function(e){return H?(F(!1),function(t,a){return t?j(t,a,e):void 0}):B}(e)(t,void 0,e)},{type:g.Z.REQUIRED}],resolveProps:O.Z}]}},ae=function(){var e=(0,d.Z)();return l().createElement(y.TextContent,null,l().createElement(y.Text,{component:y.TextVariants.p},e.formatMessage({id:"wizard.summaryDescription",defaultMessage:"Review the information below and click <b>Add</b> to add your source. To edit details in previous steps, click <b>Back</b>."},{b:function(e){return l().createElement("b",{key:"b-".concat(e.length,"-").concat(Math.floor(1e3*Math.random()))},e)}})))},ne=function(e,t,a){return{fields:[{component:"description",name:"description-summary",Content:ae},{name:"summary",component:"summary",sourceTypes:e,applicationTypes:t},{name:"source_type",component:f.Z.TEXT_FIELD,hideField:!0}],name:"summary",title:a.formatMessage({id:"wizard.reviewDetails",defaultMessage:"Review details"})}};const oe=function(e,t,a,n,r,s,i,c){return F(!0),{fields:[{component:f.Z.WIZARD,name:"wizard",className:"sources",title:(0,M.Z5)(c),inModal:!0,description:(0,M.A6)(c),buttonLabels:{submit:r.formatMessage({id:"sources.add",defaultMessage:"Add"}),back:r.formatMessage({id:"wizard.back",defaultMessage:"Back"}),cancel:r.formatMessage({id:"wizard.cancel",defaultMessage:"Cancel"}),next:r.formatMessage({id:"wizard.next",defaultMessage:"Next"})},container:n,showTitles:!0,initialState:i,crossroads:["application.application_type_id","source_type","auth_select","source.app_creation_workflow"],fields:[].concat((0,o.Z)(s?[]:c===R.B0?[J(e,t,a,r)]:[K(e,t,r)]),[te(r,s,e,c),E(r,e),D(t,r),$(t,r,c)],(0,o.Z)((0,v.dD)(e,t)),[ne(e,t,r)])}]}}}}]);
//# sourceMappingURL=../sourcemaps/6671.a4988233a5eeb3c674e7.js.map