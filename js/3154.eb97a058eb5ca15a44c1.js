(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[3154],{3154:(e,t,n)=>{"use strict";n.d(t,{AQ:()=>X,ZP:()=>de});var a=n(59713),r=n.n(a),i=n(319),s=n.n(i),o=n(87757),c=n.n(o),l=n(48926),p=n.n(l),u=n(80150),d=n.n(u),m=n(86896),f=n(87242),g=n(24154),y=n(68340),b=n(68774),v=n(99166),h=n(57061),_=n(96951),M=n(57210),w=n(45697),E=n.n(w),T=n(58860),S=function(e){var t=e.name,n=(0,T.Z)();return(0,u.useEffect)((function(){return setTimeout((function(){return n.change(t,"1")})),function(){return n.change(t,"")}}),[]),null};S.propTypes={name:E().string.isRequired};const z=S;var k=n(81240),R=n(9481),A=n(48897),D=n(69174),x=n(6479),O=n.n(x),Z=n(49739),N=n(83826),P=n(28191),I=n(92298),j=n(68778),C=function(e){var t=e.title,n=e.description,a=e.isEnabled,r=O()(e,["title","description","isEnabled"]);return d().createElement(N.v,r,d().createElement(P.k,null,d().createElement(I.B,{spacer:{default:"spacerSm"}},d().createElement(j.ZP,{fill:a?"#3E8635":"#6A6E73"})),d().createElement(I.B,null,d().createElement(y.x,{className:"pf-u-mb-xs ins-c-sources__wizard--rhel-desc-title"},t),d().createElement(y.x,null,n))))};C.propTypes={title:E().string.isRequired,description:E().string.isRequired,isEnabled:E().bool};var q=function(e){var t,n=e.id,a=(0,m.Z)(),r=(null===(t=(0,(0,T.Z)().getState)().values.application)||void 0===t?void 0:t.application_type_id)===n;return d().createElement(Z.K,null,d().createElement(C,{title:a.formatMessage({id:"rhelbundle.goldImages.title",defaultMessage:"Red Hat Gold Images"}),description:a.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Unlock cloud images in AWS and bring your own subscription instead of paying hourly."}),className:"pf-u-mb-sm",isEnabled:r}),d().createElement(C,{title:a.formatMessage({id:"rhelbundle.subwatch.title",defaultMessage:"High precision subscription watch data"}),description:a.formatMessage({id:"rhelbundle.subwatch.description",defaultMessage:"View precise public cloud usage data in subscription watch."}),className:"pf-u-mb-sm",isEnabled:r}),d().createElement(C,{title:a.formatMessage({id:"rhelbundle.autoregistration.title",defaultMessage:"Autoregistration"}),description:a.formatMessage({id:"rhelbundle.goldImages.description",defaultMessage:"Cloud instances automatically connect to cloud.redhat.com when provisioned."}),className:"pf-u-mb-sm",isEnabled:r}),d().createElement(C,{title:a.formatMessage({id:"rhelbundle.redhatconnector.title",defaultMessage:"Red Hat Connector"}),description:a.formatMessage({id:"rhelbundle.redhatconnector.description",defaultMessage:"Simplified set up and registration of connected hosts."}),isEnabled:r}))};q.propTypes={id:E().string.isRequired};const B=q;var H=n(75087);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(){var e=p()(c().mark((function e(t){var n,a,r,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]?i[1]:void 0,a=i.length>2?i[2]:void 0,t){e.next=4;break}return e.abrupt("return",void 0);case 4:return e.prev=4,e.next=7,(0,h.UW)(t);case 7:r=e.sent,e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(4),console.error((0,k.S)(e.t0)),e.abrupt("return",void 0);case 14:if(!r.data.sources.find((function(e){return e.id!==n}))){e.next=16;break}throw a.formatMessage({defaultMessage:"That name is taken. Try another.",id:"wizard.nameTaken"});case 16:return e.abrupt("return",void 0);case 17:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}(),F=!0,W=function(e){return F=e},X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return(0,v.Z)(e,t,n)}(U),Y=function(e){return s()(e.map((function(e){return Q(Q({},e),{},{product_name:"Red Hat"===e.vendor?e.product_name.replace("Red Hat ",""):e.product_name})})).sort((function(e,t){return e.product_name.localeCompare(t.product_name)})).map((function(e){return{value:e.name,label:e.product_name}})))},G=function(e,t){var n;return(n={},r()(n,A.Qr,t.formatMessage({id:"cost.app.description",defaultMessage:"Analyze, forecast, and optimize your Red Hat OpenShift cluster costs in hybrid cloud environments."})),r()(n,A.fn,d().createElement(B,{id:e.id})),n)[e.name]},K=function(e,t){return r()({},A.fn,d().createElement("span",{className:"ins-c-sources__wizard--rhel-mag-label"},"RHEL management"," ",d().createElement(D._,{className:"pf-u-ml-sm",color:"purple"},t.formatMessage({id:"sub.bundle",defaultMessage:"Bundle"}))))[e.name]},V=function(e,t){return[].concat(s()(e.sort((function(e,t){return e.display_name.localeCompare(t.display_name)})).map((function(e){return{value:e.id,label:K(e,t)||e.display_name,description:G(e,t)}}))),s()((0,H._t)()!==H.B0?[{label:t.formatMessage({id:"wizard.noApplication",defaultMessage:"No application"}),value:M.Dt}]:[]))},J=function(e){return function(t,n){var a=n.getState().values.source_type,r=e.find((function(e){return e.id===t.value}));if(!a||!r||r.supported_source_types.includes(a))return t}},$=function(e,t){return function(n,a){var r=a.getState().values.application?a.getState().values.application.application_type_id:void 0,i=e.find((function(e){return e.id===r})),s=!i||i.supported_source_types.includes(t.find((function(e){return e.product_name===n.label})).name);return Q(Q({},n),{},{isDisabled:!s})}},ee={amazon:"/apps/frontend-assets/partners-icons/aws.svg","ansible-tower":"/apps/frontend-assets/red-hat-logos/stacked.svg",azure:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",openshift:"/apps/frontend-assets/red-hat-logos/stacked.svg",satellite:"/apps/frontend-assets/red-hat-logos/stacked.svg",google:"/apps/frontend-assets/partners-icons/google-cloud-short.svg"},te=function(e){return function(t){var n=e.find((function(e){return e.name===t}));return!n||n.icon_url&&!ee[t]?null:function(){return d().createElement("img",{src:ee[t]||n.icon_url,alt:n.product_name,className:"ins-c-sources__wizard--icon ".concat("Red Hat"===n.vendor?"redhat-icon":"pf-u-mb-sm")})}}},ne=function(e){var t=e.values,n=t.application,a=t.source_type,r=n&&n.application_type_id!==M.Dt&&n.application_type_id;return r?"".concat(a,"-").concat(r):a},ae=function(e){var t=e.intl,n=e.sourceTypes;return e.applicationTypes,{component:"card-select",name:"source_type",isRequired:!0,label:t.formatMessage({id:"wizard.selectYourSourceType",defaultMessage:"A. Select your source type"}),iconMapper:te(n),validate:[{type:g.Z.REQUIRED}],options:Y(n)}},re=function(e){var t=e.intl,n=e.sourceTypes,a=e.applicationTypes,r=e.disableAppSelection;return[Q(Q({},ae({intl:t,sourceTypes:n,applicationTypes:a})),{},{mutator:$(a,n)}),{component:"enhanced-radio",name:"application.application_type_id",label:t.formatMessage({id:"wizard.selectYourApplication",defaultMessage:"B. Select an application"}),options:V(a,t),mutator:J(a),isDisabled:r,placeholder:t.formatMessage({id:"wizard.chooseApp",defaultMessage:"Choose application"}),menuIsPortal:!0}]},ie=function(e){var t=e.intl,n=e.sourceTypes,a=e.applicationTypes,r=e.disableAppSelection;return[ae({intl:t,sourceTypes:n,applicationTypes:a}),{component:"enhanced-radio",name:"application.application_type_id",label:t.formatMessage({id:"wizard.selectApplication",defaultMessage:"B. Application"}),options:V(a,t),mutator:J(a),isDisabled:r,isRequired:!0,validate:[{type:g.Z.REQUIRED}],condition:{when:"source_type",isNotEmpty:!0}}]},se=function(e,t,n){return{name:"types_step",title:n.formatMessage({id:"wizard.selectApplication",defaultMessage:"Select application"}),nextStep:ne,fields:[{component:f.Z.PLAIN_TEXT,name:"app-description",label:n.formatMessage({id:"wizard.applicationDescription",defaultMessage:"Select an application to connect to your source. You can connect additional applications after source creation."})},{component:"enhanced-radio",name:"application.application_type_id",options:V(e.filter((function(e){return e.supported_source_types.includes(t)})),n),mutator:J(e),menuIsPortal:!0},{component:f.Z.TEXT_FIELD,name:"source_type",hideField:!0}]}},oe=function(e,t,n,a){return{title:a.formatMessage({id:"wizard.chooseAppAndType",defaultMessage:"Source type and application"}),name:"types_step",nextStep:ne,fields:[].concat(s()((0,H._t)()===H.B0?ie({intl:a,sourceTypes:e,applicationTypes:t,disableAppSelection:n}):re({intl:a,sourceTypes:e,applicationTypes:t,disableAppSelection:n})),[{component:"description",name:"fixasyncvalidation",Content:z}])}},ce=function(){var e=(0,m.Z)();return d().createElement(b.D,{key:"step1"},d().createElement(y.x,{component:y.q.p},e.formatMessage({id:"wizard.nameDescription",defaultMessage:"To import data for an application, you need to connect to a data source. Enter a name, then proceed to select your application and source type."})))},le=function(e){return{title:e.formatMessage({id:"wizard.nameSource",defaultMessage:"Name source"}),name:"name_step",nextStep:"types_step",fields:[{component:"description",name:"description-summary",Content:ce},{component:f.Z.TEXT_FIELD,name:"source.name",type:"text",label:e.formatMessage({id:"wizard.name",defaultMessage:"Name"}),placeholder:"Source_1",isRequired:!0,validate:[function(t){return function(e){return F?(W(!1),function(t,n){return t?U(t,n,e):void 0}):X}(e)(t,void 0,e)},{type:g.Z.REQUIRED}],resolveProps:R.Z}]}},pe=function(){var e=(0,m.Z)();return d().createElement(b.D,null,d().createElement(y.x,{component:y.q.p},e.formatMessage({id:"wizard.summaryDescription",defaultMessage:"Review the information below and click <b>Add</b> to add your source. To edit details in previous steps, click <b>Back</b>."},{b:function(e){return d().createElement("b",{key:"b-".concat(e.length,"-").concat(Math.floor(1e3*Math.random()))},e)}})))},ue=function(e,t,n){return{fields:[{component:"description",name:"description-summary",Content:pe},{name:"summary",component:"summary",sourceTypes:e,applicationTypes:t}],name:"summary",title:n.formatMessage({id:"wizard.reviewDetails",defaultMessage:"Review details"})}};const de=function(e,t,n,a,r,i,o){return W(!0),{fields:[{component:f.Z.WIZARD,name:"wizard",className:"sources",title:(0,M.Z5)(),inModal:!0,description:(0,M.A6)(),buttonLabels:{submit:r.formatMessage({id:"sources.add",defaultMessage:"Add"}),back:r.formatMessage({id:"wizard.back",defaultMessage:"Back"}),cancel:r.formatMessage({id:"wizard.cancel",defaultMessage:"Cancel"}),next:r.formatMessage({id:"wizard.next",defaultMessage:"Next"})},container:a,showTitles:!0,initialState:o,crossroads:["application.application_type_id","source_type","auth_select"],fields:[le(r),i?se(t,i,r):oe(e,t,n,r)].concat(s()((0,_.dD)(e,t)),[ue(e,t,r)])}]}}}}]);
//# sourceMappingURL=3154.eb97a058eb5ca15a44c1.js.map