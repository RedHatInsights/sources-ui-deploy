/*! For license information please see 728.69ddbb2fe0e7ff516c10.js.LICENSE.txt */
"use strict";(self.webpackChunksources=self.webpackChunksources||[]).push([[728],{99166:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(69496),o=a.n(n);var r=function(){return r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},i={key:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null},onlyResolvesLast:!0},s=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,t,a=o()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=a,t=null,a=function(){for(var a=[],n=0;n<arguments.length;n++)a[n]=arguments[n];t&&t();var o,r,i,s,c=(o=e.apply(void 0,a),r=null,i=null,s=new Promise((function(e,t){r=e,i=t})),o&&o.then((function(e){r&&r(e)}),(function(e){i&&i(e)})),{promise:s,resolve:function(e){r&&r(e)},reject:function(e){i&&i(e)},cancel:function(){r=null,i=null}});return t=c.cancel,c.promise}),{func:a}},e.prototype.getDebouncedFunction=function(e){var t,a=(t=this.config.options).key.apply(t,e);return null==a?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[a]||(this.debounceCache[a]=this._createDebouncedFunction()),this.debounceCache[a])},e}();const c=function(e,t,a){var n=r({},i,a),o=new s({func:e,wait:t,options:n});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o.getDebouncedFunction(e).func.apply(void 0,e)}}},72623:(e,t,a)=>{a.d(t,{$l:()=>r,UW:()=>i,lH:()=>o});var n=a(48815),o=function(){return(0,n.Rj)().listSourceTypes().then((function(e){return{sourceTypes:e.data.filter((function(e){return"rh-marketplace"!==e.name}))}}))},r=function(){return(0,n.Rj)().doLoadAppTypes().then((function(e){return{applicationTypes:e.data}}))},i=function(e){return(0,n.Rj)().postGraphQL({query:'{ sources(filter: {name: "name", value: "'.concat(e,'"})\n        { id, name }\n    }')})}},16728:(e,t,a)=>{a.d(t,{AQ:()=>V,ZP:()=>de});var n=a(4942),o=a(93433),r=a(15861),i=a(64687),s=a.n(i),c=a(92950),l=a.n(c),u=a(45697),d=a.n(u),p=a(86896),m=a(48880),f=a(96354),g=a(64124),y=a(6848),v=a(99166);var b=a(72623),h=a(32600),M=a(72317),_=a(94688),w=a(92657),E=function(e){var t=e.sourceTypes,a=(0,m.default)(),n=a.renderForm,o=(0,a.getState)().values;return n((0,w.Z)(t,o.source_type))};E.propTypes={sourceTypes:d().array};const T=E;var k=a(36488);const z=function(e,t){return{name:"configuration_step",title:e.formatMessage({id:"wizard.configurationStep",defaultMessage:"Select configuration"}),nextStep:function(e){var t,a,n=e.values;if(null!==(t=n.source)&&void 0!==t&&t.app_creation_workflow)return(null===(a=n.source)||void 0===a?void 0:a.app_creation_workflow)===_.b?"select_applications":"application_step"},fields:[{component:f.Z.PLAIN_TEXT,name:"conf-desc",label:e.formatMessage({id:"wizard.accountAuthDescription",defaultMessage:"Configure your source manually or let us manage all necessary credentials by selecting <b>account authorization</b> configuration."},{b:k.S})},{component:f.Z.RADIO,name:"source.app_creation_workflow",label:e.formatMessage({id:"wizard.configurationMode",defaultMessage:"Select a configuration mode"}),isRequired:!0,resolveProps:function(t,a,n){return{options:[{label:l().createElement("span",{className:"src-c-wizard__rhel-mag-label"},e.formatMessage({id:"wizard.accountAuth",defaultMessage:"Account authorization"}),l().createElement(y.Label,{className:"pf-u-ml-sm",color:"purple"},e.formatMessage({id:"wizard.confMode.reccomended",defaultMessage:"Recommended"}))),description:e.formatMessage({id:"wizard.accountAuth.desc",defaultMessage:"A new automated source configuration method. Provide your {type} account credentials and let Red Hat configure and manage your source for you."},{type:{amazon:"AWS",azure:"Azure"}[n.getState().values.source_type]||n.getState().values.source_type}),value:_.b}]}},validate:[{type:g.Z.REQUIRED}]},{component:f.Z.SUB_FORM,name:"sub-form",fields:[{component:"description",name:"super-key-credentials",Content:T,sourceTypes:t}],condition:{when:"source.app_creation_workflow",is:_.b},className:"pf-u-ml-md"},{component:f.Z.RADIO,name:"source.app_creation_workflow",options:[{label:e.formatMessage({id:"wizard.manualAuth",defaultMessage:"Manual configuration"}),description:e.formatMessage({id:"wizard.manualAuth.desc",defaultMessage:"Configure and manage your source manually if you do not wish to provide account authorization credentials. You will set up sources the same way you do today."}),value:_.M}]}]}};var S=a(45987),Z=a(68778),A=["title","description","isEnabled"],R=function(e){var t=e.title,a=e.description,n=e.isEnabled,o=(0,S.Z)(e,A);return l().createElement(y.StackItem,o,l().createElement(y.Flex,null,l().createElement(y.FlexItem,{spacer:{default:"spacerSm"}},l().createElement(Z.ZP,{fill:n?"#3E8635":"#6A6E73"})),l().createElement(y.FlexItem,null,l().createElement(y.Text,{className:"pf-u-mb-xs src-c-wizard__rhel-desc-title"},t),l().createElement(y.Text,null,a))))};R.propTypes={title:d().string.isRequired,description:d().string.isRequired,isEnabled:d().bool};const x=R;var D=function(e){var t,a,n=e.id,o=(0,p.Z)(),r=(0,(0,m.default)().getState)().values,i=r.source.app_creation_workflow===_.b&&(null===(t=r.applications)||void 0===t?void 0:t.includes(n))||r.source.app_creation_workflow!==_.b&&(null===(a=r.application)||void 0===a?void 0:a.application_type_id)===n;return"azure"===r.source_type?l().createElement(y.Stack,null,l().createElement(x,{title:o.formatMessage({id:"rhelbundle.goldImages.title",defaultMessage:"Red Hat gold images"}),description:o.formatMessage({id:"rhelbundle.goldImages.azure.description",defaultMessage:"Unlock cloud images in Microsoft Azure and bring your own subscription instead of paying hourly."}),className:"pf-u-mb-sm",isEnabled:i}),l().createElement(x,{title:o.formatMessage({id:"rhelbundle.autoregistration.title",defaultMessage:"Autoregistration"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Cloud instances automatically connect to console.redhat.com when provisioned."}),isEnabled:i})):"google"===r.source_type?l().createElement(y.Stack,null,l().createElement(x,{title:o.formatMessage({id:"rhelbundle.goldImages.title",defaultMessage:"Red Hat gold images"}),description:o.formatMessage({id:"rhelbundle.goldImages.google.description",defaultMessage:"Unlock cloud images in Google Cloud and bring your own subscription instead of paying hourly."}),className:"pf-u-mb-sm",isEnabled:i}),l().createElement(x,{title:o.formatMessage({id:"rhelbundle.autoregistration.title",defaultMessage:"Autoregistration"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Cloud instances automatically connect to console.redhat.com when provisioned."}),isEnabled:i})):l().createElement(y.Stack,null,l().createElement(x,{title:o.formatMessage({id:"rhelbundle.goldImages.title",defaultMessage:"Red Hat gold images"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Unlock cloud images in AWS and bring your own subscription instead of paying hourly."}),className:"pf-u-mb-sm",isEnabled:i}),l().createElement(x,{title:o.formatMessage({id:"rhelbundle.subwatch.title",defaultMessage:"High precision subscription watch data"}),description:o.formatMessage({id:"rhelbundle.subwatch.description",defaultMessage:"View precise public cloud usage data in subscription watch."}),className:"pf-u-mb-sm",isEnabled:i}),l().createElement(x,{title:o.formatMessage({id:"rhelbundle.autoregistration.title",defaultMessage:"Autoregistration"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Cloud instances automatically connect to console.redhat.com when provisioned."}),isEnabled:i}))};D.propTypes={id:d().string.isRequired};const I=D;var N=a(86706),O=function(e){var t,a,n=e.id,o=(0,p.Z)(),r=(0,m.default)().getState,i=(0,N.v9)((function(e){return e.sources.sourceTypes}),N.wU),s=r().values,u=(0,c.useMemo)((function(){var e,t;return s.source.app_creation_workflow===_.b&&(null===(e=s.applications)||void 0===e?void 0:e.includes(n))||s.source.app_creation_workflow!==_.b&&(null===(t=s.application)||void 0===t?void 0:t.application_type_id)===n}),[null===(t=s.application)||void 0===t?void 0:t.application_type_id]);return l().createElement(y.Stack,null,l().createElement(x,{title:o.formatMessage({id:"hcsbundle.track.title",defaultMessage:"Track Red Hat committed spend"}),description:o.formatMessage({id:"hcsbundle.track.description",defaultMessage:"Track spend through {application} and apply them to your Red Hat committed spend."},{application:null===(a=i.find((function(e){return e.name===s.source_type})))||void 0===a?void 0:a.product_name}),className:"pf-u-mb-sm",isEnabled:u}),l().createElement(x,{title:o.formatMessage({id:"cost.app.title",defaultMessage:"Cost management"}),description:o.formatMessage({id:"cost.app.description",defaultMessage:"Analyze, forecast, and optimize your Red Hat OpenShift cluster costs in hybrid cloud environments."}),isEnabled:u}))};O.propTypes={id:d().string.isRequired};const P=O;var C=a(84866),L=function(e,t,a){var o;return(o={},(0,n.Z)(o,C.Qr,a?l().createElement(P,{id:e.id}):t.formatMessage({id:"cost.app.description",defaultMessage:"Analyze, forecast, and optimize your Red Hat OpenShift cluster costs in hybrid cloud environments."})),(0,n.Z)(o,C.fn,l().createElement(I,{id:e.id})),(0,n.Z)(o,C._m,t.formatMessage({id:"provisioning.sources.description",defaultMessage:"Build and launch images with custom content as Virtual Machines in hybrid cloud environments."})),o)[e.name]},j=function(e,t,a){var o;return(o={},(0,n.Z)(o,C.fn,l().createElement("span",{className:"src-c-wizard__rhel-mag-label"},"RHEL management"," ",l().createElement(y.Label,{className:"pf-u-ml-sm",color:"purple"},t.formatMessage({id:"sub.bundle",defaultMessage:"Bundle"})))),(0,n.Z)(o,C._m,t.formatMessage({id:"provisioning.sources.label",defaultMessage:"Launch images"})),(0,n.Z)(o,C.Qr,a?l().createElement("span",{className:"src-c-wizard__rhel-mag-label"},"".concat(C.X0," "),l().createElement(y.Label,{className:"pf-u-ml-sm",color:"purple"},t.formatMessage({id:"sub.bundle",defaultMessage:"Bundle"}))):e.display_name),o)[e.name]},F=function(e,t,a,n){return[].concat((0,o.Z)(e.sort((function(e,t){return e.display_name.localeCompare(t.display_name)})).map((function(e){return{value:e.id,label:j(e,t,n)||e.display_name,description:L(e,t,n)}}))),(0,o.Z)(a!==C.B0?[{label:t.formatMessage({id:"wizard.noApplication",defaultMessage:"No application"}),value:M.Dt}]:[]))};const H=function(e,t){return{name:"select_applications",title:t.formatMessage({id:"applications.select",defaultMessage:"Select applications"}),nextStep:"summary",fields:[{component:f.Z.PLAIN_TEXT,name:"conf-desc",label:t.formatMessage({id:"applications.description",defaultMessage:"Configuring your cloud sources provides additional capabilities included with your subscription. You can turn these features on or off at any time after source creation."})},{component:"switch-group",name:"applications",label:t.formatMessage({id:"applications.availableApplications",defaultMessage:"Available applications"}),options:F(e,t,void 0),applicationTypes:e}]}};var B=a(36680),U=a(96845);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q=function(){var e=(0,r.Z)(s().mark((function e(t){var a,n,o,r=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.length>1&&void 0!==r[1]?r[1]:void 0,n=r.length>2?r[2]:void 0,t){e.next=4;break}return e.abrupt("return",void 0);case 4:return e.prev=4,e.next=7,(0,b.UW)(t);case 7:o=e.sent,e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(4),console.error((0,U.Z)(e.t0)),e.abrupt("return",void 0);case 14:if(!o.data.sources.find((function(e){return e.id!==a}))){e.next=16;break}throw n.formatMessage({defaultMessage:"That name is taken. Try another.",id:"wizard.nameTaken"});case 16:return e.abrupt("return",void 0);case 17:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}(),W=!0,Y=function(e){return W=e},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return(0,v.Z)(e,t,a)}(Q),G=function(e){return(0,o.Z)(e.map((function(e){return X(X({},e),{},{product_name:"Red Hat"===e.category?e.product_name.replace("Red Hat ",""):e.product_name})})).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){return{value:e.name,label:e.product_name}})))},$=function(e){return function(t,a){var n=a.getState().values.source_type,o=e.find((function(e){return e.id===t.value}));if(!n||!o||o.supported_source_types.includes(n))return t}},J={amazon:"/apps/frontend-assets/partners-icons/aws.svg","ansible-tower":"/apps/frontend-assets/red-hat-logos/stacked.svg",azure:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",openshift:"/apps/frontend-assets/red-hat-logos/stacked.svg",satellite:"/apps/frontend-assets/red-hat-logos/stacked.svg",google:"/apps/frontend-assets/partners-icons/google-cloud-short.svg"},K=function(e){return function(t){var a=e.find((function(e){return e.name===t}));return a&&(a.icon_url||J[t])?function(){return l().createElement("img",{src:J[t]||a.icon_url,alt:a.product_name,className:"src-c-wizard__icon ".concat("Red Hat"===a.category?"redhat-icon":"pf-u-mb-sm")})}:null}},ee=function(e){return function(t){var a=t.values,n=a.application,o=a.source_type;if(e)return"application_step";var r=n&&n.application_type_id!==M.Dt&&n.application_type_id;return r?"".concat(o,"-").concat(r):"".concat(o,"-generic")}},te=function(e){return function(t){var a,n=t.values;return(null==(a=e.find((function(e){return e.name===n.source_type})))?void 0:a.schema.authentication.find((function(e){return e.is_superkey})))?"configuration_step":"application_step"}},ae=function(e){var t=e.intl,a=e.sourceTypes;return e.applicationTypes,{component:"card-select",name:"source_type",isRequired:!0,label:t.formatMessage({id:"wizard.selectYourSourceType",defaultMessage:"A. Select your source type"}),iconMapper:K(a),validate:[{type:g.Z.REQUIRED}],options:G(a)}},ne=function(e){var t=e.intl,a=e.sourceTypes,n=e.applicationTypes,o=e.disableAppSelection;return[ae({intl:t,sourceTypes:a,applicationTypes:n}),{component:"enhanced-radio",name:"application.application_type_id",label:t.formatMessage({id:"wizard.selectApplication",defaultMessage:"B. Application"}),options:F(n,t,C.B0),mutator:$(n),isDisabled:o,isRequired:!0,validate:[{type:g.Z.REQUIRED}],condition:{when:"source_type",isNotEmpty:!0}}]},oe=function(e,t,a,n){return{name:"application_step",title:t.formatMessage({id:"wizard.selectApplication",defaultMessage:"Select application"}),nextStep:ee(),fields:[{component:f.Z.PLAIN_TEXT,name:"app-description",label:t.formatMessage({id:"wizard.applicationDescription",defaultMessage:"Select an application to connect to your source. You can connect additional applications after source creation."})},{component:"enhanced-radio",name:"application.application_type_id",options:F(e,t,a,n),mutator:$(e),menuIsPortal:!0},{component:f.Z.TEXT_FIELD,name:"source_type",hideField:!0}]}},re=function(e,t,a,n){return{title:n.formatMessage({id:"wizard.chooseAppAndType",defaultMessage:"Source type and application"}),name:"types_step",nextStep:"name_step",fields:[{component:f.Z.PLAIN_TEXT,name:"plain-text",label:n.formatMessage({id:"wizard.selectRedHatType",defaultMessage:"To import data for an application, you need to connect to a data source. Start by selecting your source type and application."})}].concat((0,o.Z)(ne({intl:n,sourceTypes:e,applicationTypes:t,disableAppSelection:a})))}},ie=function(e,t,a){return{title:a.formatMessage({id:"wizard.chooseAppAndType",defaultMessage:"Select source type"}),name:"types_step",nextStep:"name_step",fields:[{component:f.Z.PLAIN_TEXT,name:"plain-text",label:a.formatMessage({id:"wizard.selectCloudType",defaultMessage:"To import data for an application, you need to connect to a data source. Start by selecting your source type."})},X(X({},ae({intl:a,sourceTypes:e,applicationTypes:t})),{},{label:a.formatMessage({id:"wizard.selectCloudProvider",defaultMessage:"Select a cloud provider"})})]}},se=function(e){var t,a=e.sourceTypes,n=(0,p.Z)(),o=(0,m.default)().getState,r=null===(t=a.find((function(e){return e.name===o().values.source_type})))||void 0===t?void 0:t.product_name;return l().createElement(y.TextContent,{key:"step1"},l().createElement(y.Text,{component:y.TextVariants.p},n.formatMessage({id:"wizard.nameDescription",defaultMessage:"Enter a name for your {typeName} source."},{typeName:r})))};se.propTypes={sourceTypes:d().array};var ce=function(e,t,a,n){return{title:e.formatMessage({id:"wizard.nameSource",defaultMessage:"Name source"}),name:"name_step",nextStep:n===C.B0?ee(t):te(a),fields:[{component:"description",name:"description-summary",Content:se,sourceTypes:a},{component:f.Z.TEXT_FIELD,name:"source.name",type:"text",label:e.formatMessage({id:"wizard.name",defaultMessage:"Source name"}),placeholder:"source_name",isRequired:!0,validate:[function(t){return function(e){return W?(Y(!1),function(t,a){return t?Q(t,a,e):void 0}):V}(e)(t,void 0,e)},{type:g.Z.REQUIRED}],resolveProps:B.Z}]}},le=function(){var e=(0,p.Z)();return l().createElement(y.TextContent,null,l().createElement(y.Text,{component:y.TextVariants.p},e.formatMessage({id:"wizard.summaryDescription",defaultMessage:"Review the information below and click <b>Add</b> to add your source. To edit details in previous steps, click <b>Back</b>."},{b:k.S})))},ue=function(e,t,a){return{fields:[{component:"description",name:"description-summary",Content:le},{name:"summary",component:"summary",sourceTypes:e,applicationTypes:t},{name:"source_type",component:f.Z.TEXT_FIELD,hideField:!0}],name:"summary",title:a.formatMessage({id:"wizard.reviewDetails",defaultMessage:"Review details"})}};const de=function(e,t,a,n,r,i,s,c,l,u){return Y(!0),{fields:[{component:f.Z.WIZARD,name:"wizard",className:"sources",title:(0,M.Z5)(c),inModal:!0,description:(0,M.A6)(c),buttonLabels:{submit:r.formatMessage({id:"sources.add",defaultMessage:"Add"}),back:r.formatMessage({id:"wizard.back",defaultMessage:"Back"}),cancel:r.formatMessage({id:"wizard.cancel",defaultMessage:"Cancel"}),next:r.formatMessage({id:"wizard.next",defaultMessage:"Next"})},container:n,showTitles:!0,initialState:s,closeButtonAriaLabel:r.formatMessage({id:"wizard.close",defaultMessage:"Close wizard"}),crossroads:["application.application_type_id","source_type","auth_select","source.app_creation_workflow","application.extra.storage_only"],fields:[].concat((0,o.Z)(i?[]:c===C.B0?[re(e,t,a,r)]:[ie(e,t,r)]),[ce(r,i,e,c),z(r,e),H(t,r),oe(t,r,c,u)],(0,o.Z)((0,h.dD)(e,t,void 0,l,u)),[ue(e,t,r)])}]}}},92657:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(93433),o=a(32600);const r=function(e,t){var a,r=null===(a=e.find((function(e){return e.name===t})))||void 0===a?void 0:a.schema.authentication.find((function(e){var t=e.is_superkey,a=e.type;return t||"access_key_secret_key"===a})),i=(0,o.gF)(t,r.type);return[].concat((0,n.Z)((0,o.YD)(t,r.type)),(0,n.Z)((0,o.Ow)((0,o.sM)(r.fields,i),t,r.type)))}},69496:e=>{e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=void 0,o=void 0,r=void 0,i=[];return function(){var c=function(e){return"function"==typeof e?e():e}(t),l=(new Date).getTime(),u=!n||l-n>c;n=l;for(var d=arguments.length,p=Array(d),m=0;m<d;m++)p[m]=arguments[m];if(u&&a.leading)return a.accumulate?Promise.resolve(e.call(this,[p])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(p)));if(o?clearTimeout(r):o=function(){var e={};return e.promise=new Promise((function(t,a){e.resolve=t,e.reject=a})),e}(),i.push(p),r=setTimeout(s.bind(this),c),a.accumulate){var f=i.length-1;return o.promise.then((function(e){return e[f]}))}return o.promise};function s(){var t=o;clearTimeout(r),Promise.resolve(a.accumulate?e.call(this,i):e.apply(this,i[i.length-1])).then(t.resolve,t.reject),i=[],o=null}}}}]);