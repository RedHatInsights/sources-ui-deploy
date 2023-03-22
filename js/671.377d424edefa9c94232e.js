"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[671],{72623:(e,t,a)=>{a.d(t,{$l:()=>s,UW:()=>r,lH:()=>o});var n=a(48815),o=function(){return(0,n.Rj)().listSourceTypes().then((function(e){return{sourceTypes:e.data}}))},s=function(){return(0,n.Rj)().doLoadAppTypes().then((function(e){return{applicationTypes:e.data}}))},r=function(e){return(0,n.Rj)().postGraphQL({query:'{ sources(filter: {name: "name", value: "'.concat(e,'"})\n        { id, name }\n    }')})}},6671:(e,t,a)=>{a.d(t,{AQ:()=>X,ZP:()=>ie});var n=a(4942),o=a(93433),s=a(15861),r=a(64687),i=a.n(r),c=a(92950),l=a.n(c),u=a(45697),d=a.n(u),p=a(86896),m=a(48880),f=a(96354),g=a(64124),y=a(48335),b=a(99166);var M=a(72623),v=a(32600),_=a(72317),h=a(94688),w=a(92657),E=function(e){var t=e.sourceTypes,a=(0,m.default)(),n=a.renderForm,o=(0,a.getState)().values;return n((0,w.Z)(t,o.source_type))};E.propTypes={sourceTypes:d().array};const T=E;var z=a(36488);const S=function(e,t){return{name:"configuration_step",title:e.formatMessage({id:"wizard.configurationStep",defaultMessage:"Select configuration"}),nextStep:function(e){var t,a,n=e.values;if(null!==(t=n.source)&&void 0!==t&&t.app_creation_workflow)return(null===(a=n.source)||void 0===a?void 0:a.app_creation_workflow)===h.b?"select_applications":"application_step"},fields:[{component:f.Z.PLAIN_TEXT,name:"conf-desc",label:e.formatMessage({id:"wizard.accountAuthDescription",defaultMessage:"Configure your source manually or let us manage all necessary credentials by selecting <b>account authorization</b> configuration."},{b:z.S})},{component:f.Z.RADIO,name:"source.app_creation_workflow",label:e.formatMessage({id:"wizard.configurationMode",defaultMessage:"Select a configuration mode"}),isRequired:!0,resolveProps:function(t,a,n){return{options:[{label:l().createElement("span",{className:"src-c-wizard__rhel-mag-label"},e.formatMessage({id:"wizard.accountAuth",defaultMessage:"Account authorization"}),l().createElement(y.Label,{className:"pf-u-ml-sm",color:"purple"},e.formatMessage({id:"wizard.confMode.reccomended",defaultMessage:"Recommended"}))),description:e.formatMessage({id:"wizard.accountAuth.desc",defaultMessage:"A new automated source configuration method. Provide your {type} account credentials and let Red Hat configure and manage your source for you."},{type:{amazon:"AWS",azure:"Azure"}[n.getState().values.source_type]||n.getState().values.source_type}),value:h.b}]}},validate:[{type:g.Z.REQUIRED}]},{component:f.Z.SUB_FORM,name:"sub-form",fields:[{component:"description",name:"super-key-credentials",Content:T,sourceTypes:t}],condition:{when:"source.app_creation_workflow",is:h.b},className:"pf-u-ml-md"},{component:f.Z.RADIO,name:"source.app_creation_workflow",options:[{label:e.formatMessage({id:"wizard.manualAuth",defaultMessage:"Manual configuration"}),description:e.formatMessage({id:"wizard.manualAuth.desc",defaultMessage:"Configure and manage your source manually if you do not wish to provide account authorization credentials. You will set up sources the same way you do today."}),value:h.M}]}]}};var Z=a(45987),A=a(68778),k=["title","description","isEnabled"],R=function(e){var t=e.title,a=e.description,n=e.isEnabled,o=(0,Z.Z)(e,k);return l().createElement(y.StackItem,o,l().createElement(y.Flex,null,l().createElement(y.FlexItem,{spacer:{default:"spacerSm"}},l().createElement(A.ZP,{fill:n?"#3E8635":"#6A6E73"})),l().createElement(y.FlexItem,null,l().createElement(y.Text,{className:"pf-u-mb-xs src-c-wizard__rhel-desc-title"},t),l().createElement(y.Text,null,a))))};R.propTypes={title:d().string.isRequired,description:d().string.isRequired,isEnabled:d().bool};var x=function(e){var t,a,n=e.id,o=(0,p.Z)(),s=(0,(0,m.default)().getState)().values,r=s.source.app_creation_workflow===h.b&&(null===(t=s.applications)||void 0===t?void 0:t.includes(n))||s.source.app_creation_workflow!==h.b&&(null===(a=s.application)||void 0===a?void 0:a.application_type_id)===n;return"azure"===s.source_type?l().createElement(y.Stack,null,l().createElement(R,{title:o.formatMessage({id:"rhelbundle.goldImages.title",defaultMessage:"Red Hat gold images"}),description:o.formatMessage({id:"rhelbundle.goldImages.azure.description",defaultMessage:"Unlock cloud images in Microsoft Azure and bring your own subscription instead of paying hourly."}),className:"pf-u-mb-sm",isEnabled:r}),l().createElement(R,{title:o.formatMessage({id:"rhelbundle.autoregistration.title",defaultMessage:"Autoregistration"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Cloud instances automatically connect to console.redhat.com when provisioned."}),isEnabled:r})):"google"===s.source_type?l().createElement(y.Stack,null,l().createElement(R,{title:o.formatMessage({id:"rhelbundle.goldImages.title",defaultMessage:"Red Hat gold images"}),description:o.formatMessage({id:"rhelbundle.goldImages.google.description",defaultMessage:"Unlock cloud images in Google Cloud and bring your own subscription instead of paying hourly."}),className:"pf-u-mb-sm",isEnabled:r}),l().createElement(R,{title:o.formatMessage({id:"rhelbundle.autoregistration.title",defaultMessage:"Autoregistration"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Cloud instances automatically connect to console.redhat.com when provisioned."}),isEnabled:r})):l().createElement(y.Stack,null,l().createElement(R,{title:o.formatMessage({id:"rhelbundle.goldImages.title",defaultMessage:"Red Hat gold images"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Unlock cloud images in AWS and bring your own subscription instead of paying hourly."}),className:"pf-u-mb-sm",isEnabled:r}),l().createElement(R,{title:o.formatMessage({id:"rhelbundle.subwatch.title",defaultMessage:"High precision subscription watch data"}),description:o.formatMessage({id:"rhelbundle.subwatch.description",defaultMessage:"View precise public cloud usage data in subscription watch."}),className:"pf-u-mb-sm",isEnabled:r}),l().createElement(R,{title:o.formatMessage({id:"rhelbundle.autoregistration.title",defaultMessage:"Autoregistration"}),description:o.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Cloud instances automatically connect to console.redhat.com when provisioned."}),isEnabled:r}))};x.propTypes={id:d().string.isRequired};const I=x;var D=a(84866),N=function(e,t){var a;return(a={},(0,n.Z)(a,D.Qr,t.formatMessage({id:"cost.app.description",defaultMessage:"Analyze, forecast, and optimize your Red Hat OpenShift cluster costs in hybrid cloud environments."})),(0,n.Z)(a,D.fn,l().createElement(I,{id:e.id})),(0,n.Z)(a,D._m,t.formatMessage({id:"provisioning.sources.description",defaultMessage:"Build and launch images with custom content as Virtual Machines in hybrid cloud environments."})),a)[e.name]},O=function(e,t){var a;return(a={},(0,n.Z)(a,D.fn,l().createElement("span",{className:"src-c-wizard__rhel-mag-label"},"RHEL management"," ",l().createElement(y.Label,{className:"pf-u-ml-sm",color:"purple"},t.formatMessage({id:"sub.bundle",defaultMessage:"Bundle"})))),(0,n.Z)(a,D._m,t.formatMessage({id:"provisioning.sources.label",defaultMessage:"Launch images"})),a)[e.name]},C=function(e,t,a){return[].concat((0,o.Z)(e.sort((function(e,t){return e.display_name.localeCompare(t.display_name)})).map((function(e){return{value:e.id,label:O(e,t)||e.display_name,description:N(e,t)}}))),(0,o.Z)(a!==D.B0?[{label:t.formatMessage({id:"wizard.noApplication",defaultMessage:"No application"}),value:_.Dt}]:[]))};const P=function(e,t){return{name:"select_applications",title:t.formatMessage({id:"applications.select",defaultMessage:"Select applications"}),nextStep:"summary",fields:[{component:f.Z.PLAIN_TEXT,name:"conf-desc",label:t.formatMessage({id:"applications.description",defaultMessage:"Configuring your cloud sources provides additional capabilities included with your subscription. You can turn these features on or off at any time after source creation."})},{component:"switch-group",name:"applications",label:t.formatMessage({id:"applications.availableApplications",defaultMessage:"Available applications"}),options:C(e,t),applicationTypes:e}]}};var L=a(36680),j=a(96845);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F=function(){var e=(0,s.Z)(i().mark((function e(t){var a,n,o,s=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=s.length>1&&void 0!==s[1]?s[1]:void 0,n=s.length>2?s[2]:void 0,t){e.next=4;break}return e.abrupt("return",void 0);case 4:return e.prev=4,e.next=7,(0,M.UW)(t);case 7:o=e.sent,e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(4),console.error((0,j.Z)(e.t0)),e.abrupt("return",void 0);case 14:if(!o.data.sources.find((function(e){return e.id!==a}))){e.next=16;break}throw n.formatMessage({defaultMessage:"That name is taken. Try another.",id:"wizard.nameTaken"});case 16:return e.abrupt("return",void 0);case 17:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}(),U=!0,q=function(e){return U=e},X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return(0,b.Z)(e,t,a)}(F),Q=function(e){return(0,o.Z)(e.map((function(e){return B(B({},e),{},{product_name:"Red Hat"===e.category?e.product_name.replace("Red Hat ",""):e.product_name})})).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){return{value:e.name,label:e.product_name}})))},W=function(e){return function(t,a){var n=a.getState().values.source_type,o=e.find((function(e){return e.id===t.value}));if(!n||!o||o.supported_source_types.includes(n))return t}},Y={amazon:"/apps/frontend-assets/partners-icons/aws.svg","ansible-tower":"/apps/frontend-assets/red-hat-logos/stacked.svg",azure:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",openshift:"/apps/frontend-assets/red-hat-logos/stacked.svg",satellite:"/apps/frontend-assets/red-hat-logos/stacked.svg",google:"/apps/frontend-assets/partners-icons/google-cloud-short.svg"},V=function(e){return function(t){var a=e.find((function(e){return e.name===t}));return a&&(a.icon_url||Y[t])?function(){return l().createElement("img",{src:Y[t]||a.icon_url,alt:a.product_name,className:"src-c-wizard__icon ".concat("Red Hat"===a.category?"redhat-icon":"pf-u-mb-sm")})}:null}},G=function(e){return function(t){var a=t.values,n=a.application,o=a.source_type;if(e)return"application_step";var s=n&&n.application_type_id!==_.Dt&&n.application_type_id;return s?"".concat(o,"-").concat(s):"".concat(o,"-generic")}},$=function(e){return function(t){var a,n=t.values;return(null==(a=e.find((function(e){return e.name===n.source_type})))?void 0:a.schema.authentication.find((function(e){return e.is_superkey})))?"configuration_step":"application_step"}},J=function(e){var t=e.intl,a=e.sourceTypes;return e.applicationTypes,{component:"card-select",name:"source_type",isRequired:!0,label:t.formatMessage({id:"wizard.selectYourSourceType",defaultMessage:"A. Select your source type"}),iconMapper:V(a),validate:[{type:g.Z.REQUIRED}],options:Q(a)}},K=function(e){var t=e.intl,a=e.sourceTypes,n=e.applicationTypes,o=e.disableAppSelection;return[J({intl:t,sourceTypes:a,applicationTypes:n}),{component:"enhanced-radio",name:"application.application_type_id",label:t.formatMessage({id:"wizard.selectApplication",defaultMessage:"B. Application"}),options:C(n,t,D.B0),mutator:W(n),isDisabled:o,isRequired:!0,validate:[{type:g.Z.REQUIRED}],condition:{when:"source_type",isNotEmpty:!0}}]},ee=function(e,t,a){return{name:"application_step",title:t.formatMessage({id:"wizard.selectApplication",defaultMessage:"Select application"}),nextStep:G(),fields:[{component:f.Z.PLAIN_TEXT,name:"app-description",label:t.formatMessage({id:"wizard.applicationDescription",defaultMessage:"Select an application to connect to your source. You can connect additional applications after source creation."})},{component:"enhanced-radio",name:"application.application_type_id",options:C(e,t,a),mutator:W(e),menuIsPortal:!0},{component:f.Z.TEXT_FIELD,name:"source_type",hideField:!0}]}},te=function(e,t,a,n){return{title:n.formatMessage({id:"wizard.chooseAppAndType",defaultMessage:"Source type and application"}),name:"types_step",nextStep:"name_step",fields:[{component:f.Z.PLAIN_TEXT,name:"plain-text",label:n.formatMessage({id:"wizard.selectRedHatType",defaultMessage:"To import data for an application, you need to connect to a data source. Start by selecting your source type and application."})}].concat((0,o.Z)(K({intl:n,sourceTypes:e,applicationTypes:t,disableAppSelection:a})))}},ae=function(e,t,a){return{title:a.formatMessage({id:"wizard.chooseAppAndType",defaultMessage:"Select source type"}),name:"types_step",nextStep:"name_step",fields:[{component:f.Z.PLAIN_TEXT,name:"plain-text",label:a.formatMessage({id:"wizard.selectCloudType",defaultMessage:"To import data for an application, you need to connect to a data source. Start by selecting your source type."})},B(B({},J({intl:a,sourceTypes:e,applicationTypes:t})),{},{label:a.formatMessage({id:"wizard.selectCloudProvider",defaultMessage:"Select a cloud provider"})})]}},ne=function(e){var t,a=e.sourceTypes,n=(0,p.Z)(),o=(0,m.default)().getState,s=null===(t=a.find((function(e){return e.name===o().values.source_type})))||void 0===t?void 0:t.product_name;return l().createElement(y.TextContent,{key:"step1"},l().createElement(y.Text,{component:y.TextVariants.p},n.formatMessage({id:"wizard.nameDescription",defaultMessage:"Enter a name for your {typeName} source."},{typeName:s})))};ne.propTypes={sourceTypes:d().array};var oe=function(e,t,a,n){return{title:e.formatMessage({id:"wizard.nameSource",defaultMessage:"Name source"}),name:"name_step",nextStep:n===D.B0?G(t):$(a),fields:[{component:"description",name:"description-summary",Content:ne,sourceTypes:a},{component:f.Z.TEXT_FIELD,name:"source.name",type:"text",label:e.formatMessage({id:"wizard.name",defaultMessage:"Source name"}),placeholder:"source_name",isRequired:!0,validate:[function(t){return function(e){return U?(q(!1),function(t,a){return t?F(t,a,e):void 0}):X}(e)(t,void 0,e)},{type:g.Z.REQUIRED}],resolveProps:L.Z}]}},se=function(){var e=(0,p.Z)();return l().createElement(y.TextContent,null,l().createElement(y.Text,{component:y.TextVariants.p},e.formatMessage({id:"wizard.summaryDescription",defaultMessage:"Review the information below and click <b>Add</b> to add your source. To edit details in previous steps, click <b>Back</b>."},{b:z.S})))},re=function(e,t,a){return{fields:[{component:"description",name:"description-summary",Content:se},{name:"summary",component:"summary",sourceTypes:e,applicationTypes:t},{name:"source_type",component:f.Z.TEXT_FIELD,hideField:!0}],name:"summary",title:a.formatMessage({id:"wizard.reviewDetails",defaultMessage:"Review details"})}};const ie=function(e,t,a,n,s,r,i,c,l){return q(!0),{fields:[{component:f.Z.WIZARD,name:"wizard",className:"sources",title:(0,_.Z5)(c),inModal:!0,description:(0,_.A6)(c),buttonLabels:{submit:s.formatMessage({id:"sources.add",defaultMessage:"Add"}),back:s.formatMessage({id:"wizard.back",defaultMessage:"Back"}),cancel:s.formatMessage({id:"wizard.cancel",defaultMessage:"Cancel"}),next:s.formatMessage({id:"wizard.next",defaultMessage:"Next"})},container:n,showTitles:!0,initialState:i,closeButtonAriaLabel:s.formatMessage({id:"wizard.close",defaultMessage:"Close wizard"}),crossroads:["application.application_type_id","source_type","auth_select","source.app_creation_workflow"],fields:[].concat((0,o.Z)(r?[]:c===D.B0?[te(e,t,a,s)]:[ae(e,t,s)]),[oe(s,r,e,c),S(s,e),P(t,s),ee(t,s,c)],(0,o.Z)((0,v.dD)(e,t,void 0,l)),[re(e,t,s)])}]}}},92657:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(93433),o=a(32600);const s=function(e,t){var a,s=null===(a=e.find((function(e){return e.name===t})))||void 0===a?void 0:a.schema.authentication.find((function(e){var t=e.is_superkey,a=e.type;return t||"access_key_secret_key"===a})),r=(0,o.gF)(t,s.type);return[].concat((0,n.Z)((0,o.YD)(t,s.type)),(0,n.Z)((0,o.Ow)((0,o.sM)(s.fields,r),t,s.type)))}}}]);