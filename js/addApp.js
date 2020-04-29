(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{297:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),i=a.n(n),r=a(3),s=a.n(r),o=a(465),c=a.n(o),u=a(41),p=a(277),l=a(276),d=a.n(l),m="edit-field",f=function(e){var t=d()(e),a=t.isRequired,n=t.label,r=t.helperText,s=t.hideLabel,o=t.meta,l=t.input,m=t.type,f=t.setEdit,g=o.error,h=o.touched&&g,y=l.value;"boolean"==typeof y&&(y=y?"True":"False");var v="password"===m||l.name.includes("password")?"Click to edit":"Click to add";return i.a.createElement(p.FormGroup,{isRequired:a,label:!s&&n,fieldId:l.name,isValid:!h,helperText:r,helperTextInvalid:g,onClick:f?function(){return f(l.name)}:void 0,tabIndex:0,onKeyPress:function(e){32===e.charCode&&f&&(e.preventDefault(),f(l.name))}},i.a.createElement("div",{className:"pf-c-form__horizontal-group ins-c-sources__edit-field-group ".concat(f?"clickable":"")},i.a.createElement(u.TextContent,{className:"ins-c-sources__edit-field-group-text-content ".concat(f?"clickable":"")},i.a.createElement("span",{className:"ins-c-sources__edit-field-value pf-u-mr-sm"},y||(f?v:"")),f&&i.a.createElement(c.a,null))))};f.propTypes={label:s.a.node,isRequired:s.a.bool,helperText:s.a.node,hideLabel:s.a.bool,setEdit:s.a.func,type:s.a.string},t.b=f},383:function(e,t,a){"use strict";var n=a(301),i=a.n(n),r=a(1),s=a.n(r),o=a(0),c=a.n(o),u=a(384),p=a.n(u),l=a(295),d=a.n(l),m=a(327),f=a.n(m),g=a(342),h=a.n(g),y=a(323),v=a.n(y),b=a(387),E=a.n(b),T=a(281),_=a(297);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(e){return c.a.createElement(p.a,i()({FormTemplate:v.a,componentMapper:O({},E.a,{},T.mapperExtension,{"edit-field":_.b,"switch-field":E.a[d.a.SWITCH]}),validatorMapper:{"required-validator":h.a[f.a.REQUIRED],"pattern-validator":h.a[f.a.PATTERN],"min-length-validator":h.a[f.a.MIN_LENGTH],"url-validator":h.a[f.a.URL]}},e))}},407:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(3),s=a.n(r),o=a(29),c=a(11),u=a(25),p=a(41),l=a(76),d=a(284),m=a(285),f=a(283),g=function(e){var t=e.setApplicationToRemove,a=e.breakpoints,n=e.namePrefix,r=Object(o.useSelector)((function(e){return e.sources.appTypes})),s=Object(f.a)(),g=s.applications.map((function(e){var t=e.application_type_id,a=r.find((function(e){return e.id===t}));return a?a.display_name:void 0}));return s.applications.filter((function(e){return!e.isDeleting})).map((function(e){var t=r.find((function(t){return t.id===e.application_type_id}));if(t)return{display_name:t.display_name,id:e.id,dependent_applications:t.dependent_applications}})).sort((function(e,t){return e.display_name.localeCompare(t.display_name)})).map((function(e){var r=e.display_name,s=e.id,o=e.dependent_applications;return i.a.createElement(p.TextContent,{key:s},i.a.createElement(d.Grid,null,i.a.createElement(m.GridItem,{md:a.display_name||4},i.a.createElement(u.Text,{component:u.TextVariants.p,style:{marginBottom:0}},n,r)),i.a.createElement(m.GridItem,{md:a.remove||8,className:"ins-c-sources__remove-app"},i.a.createElement(l.Button,{variant:l.ButtonVariant.link,isInline:!0,onClick:function(){return t({id:s,display_name:r,dependent_applications:o,sourceAppsNames:g})}},i.a.createElement(c.a,{id:"sources.remove",defaultMessage:"Remove"})))))}))};g.propTypes={setApplicationToRemove:s.a.func.isRequired,breakpoints:s.a.shape({display_name:s.a.number,remove:s.a.number}),namePrefix:s.a.node},g.defaultProps={breakpoints:{}},t.a=g},408:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(3),s=a.n(r),o=a(29),c=a(743),u=a(11),p=a(25),l=a(41),d=a(76),m=a(318),f=a(317),g=a(330),h=a(329),y=a(61),v=a.n(y),b=a(77),E=a(283),T=function(e){var t=e.app,a=e.onCancel,n=Object(c.a)(),r=Object(o.useSelector)((function(e){return e.sources.appTypes})),s=Object(E.a)(),y=Object(o.useDispatch)(),T=t.dependent_applications.map((function(e){var a=r.find((function(t){return t.name===e}));return a&&t.sourceAppsNames.includes(a.display_name)?a.display_name:void 0})).filter((function(e){return e}));return i.a.createElement(h.Modal,{className:"ins-c-sources__dialog--warning",title:"Remove ".concat(t.display_name," application"),isOpen:!0,isSmall:!0,onClose:a,isFooterLeftAligned:!0,actions:[i.a.createElement(d.Button,{id:"deleteSubmit",key:"submit",variant:"danger",type:"button",onClick:function(){var e=n.formatMessage({id:"sources.removeAppWarning",defaultMessage:"{ name } was removed from this source."},{name:t.display_name}),i=n.formatMessage({id:"sources.removeAppError",defaultMessage:"Removing of { name } application from this source was unsuccessful."},{name:t.display_name});return a(),y(Object(b.i)(t.id,s.id,e,i))}},i.a.createElement(u.a,{id:"sources.remove",defaultMessage:"Remove"})),i.a.createElement(d.Button,{id:"deleteCancel",key:"cancel",variant:"link",type:"button",onClick:a},i.a.createElement(u.a,{id:"sources.cancel",defaultMessage:"Cancel"}))]},i.a.createElement(m.Split,{gutter:"md"},i.a.createElement(f.SplitItem,null,i.a.createElement(v.a,{size:"xl",className:"ins-m-alert ins-c-source__delete-icon"})),i.a.createElement(f.SplitItem,{isFilled:!0},i.a.createElement(g.Stack,{gutter:"md"},i.a.createElement(l.TextContent,null,i.a.createElement(p.Text,{component:p.TextVariants.p},i.a.createElement(u.a,{id:"sources.deleteAppWarning",defaultMessage:"Are you sure to remove { appName } from this source?",values:{appName:t.display_name}})),T.length>0&&i.a.createElement(p.Text,{component:p.TextVariants.p},i.a.createElement(u.a,{id:"sources.deleteAppDetails",defaultMessage:"This change will affect these applications: { apps }.",values:{apps:T}})))))))};T.propTypes={app:s.a.shape({id:s.a.string.isRequired,display_name:s.a.string.isRequired,dependent_applications:s.a.arrayOf(s.a.string),sourceAppsNames:s.a.arrayOf(s.a.string)}).isRequired,onCancel:s.a.func.isRequired},t.a=T},746:function(e,t,a){"use strict";a.r(t),a.d(t,"onSubmit",(function(){return We}));var n=a(23),i=a.n(n),r=a(36),s=a.n(r),o=a(301),c=a.n(o),u=a(67),p=a.n(u),l=a(85),d=a.n(l),m=a(0),f=a.n(m),g=a(28),h=a(29),y=a(743),v=a(409),b=a.n(v),E=a(416),T=a.n(E),_=a(281),S=a(323),O=a.n(S),j=a(77),x=a(383),M=a(3),A=a.n(M),P=a(300),C=a(25),w=a(41),R=a(11),V=a(298),k=a.n(V),N=a(406),D=a(408),I=a(407),B=a(283),q=function(){var e=Object(m.useState)({}),t=s()(e,2),a=t[0],n=t[1],i=Object(h.useSelector)((function(e){return e.sources.sourceTypes})),r=Object(B.a)(),o=i.find((function(e){return e.id===r.source_type_id})),c=r.applications.filter((function(e){return!e.isDeleting}));return f.a.createElement(f.a.Fragment,null,a.id&&f.a.createElement(D.a,{app:a,onCancel:function(){return n({})}}),f.a.createElement(w.TextContent,null,f.a.createElement(N.Grid,{gutter:"md"},f.a.createElement(N.GridItem,{md:2},f.a.createElement(C.Text,{component:C.TextVariants.h4},f.a.createElement(R.a,{id:"sources.sourceName",defaultMessage:"Source name"}))),f.a.createElement(N.GridItem,{md:2},f.a.createElement(C.Text,{component:C.TextVariants.h4},f.a.createElement(R.a,{id:"sources.type",defaultMessage:"Type"}))),f.a.createElement(N.GridItem,{md:8},f.a.createElement(C.Text,{component:C.TextVariants.h4},f.a.createElement(R.a,{id:"sources.apps",defaultMessage:"Applications"}))),f.a.createElement(N.GridItem,{md:2},f.a.createElement(C.Text,{component:C.TextVariants.p},r.name)),f.a.createElement(N.GridItem,{md:2},f.a.createElement(C.Text,{component:C.TextVariants.p},o?o.product_name:f.a.createElement(R.a,{id:"sources.typeNotFound",defaultMessage:"Type not found"}))),f.a.createElement(N.GridItem,{md:8},c.length>0?f.a.createElement(I.a,{setApplicationToRemove:n}):f.a.createElement(R.a,{id:"sources.noApps",defaultMessage:"No applications"})))))},F=a(279),L=a.n(F),G=function(e){var t=e.authenticationValues,a=e.modifiedValues,n=L()(),i=n.getState().values.selectedAuthentication,r=Object(m.useState)(i),o=s()(r,2),c=o[0],u=o[1];return Object(m.useEffect)((function(){c!==i&&(!function(e){var t=e.formOptions,a=e.modifiedValues,n=e.authenticationValues,i=e.selectedAuthentication;if("new"!==i){var r=n.find((function(e){return e.id===i}));if(a&&a.authentication){var s=b()(T()(r),a.authentication);t.change("authentication",s)}else t.change("authentication",r)}else a&&a.authentication?t.change("authentication",a.authentication):t.change("authentication",void 0)}({formOptions:n,authenticationValues:t,modifiedValues:a,selectedAuthentication:i}),u(void 0))}),[i]),null};G.propTypes={authenticationValues:A.a.arrayOf(A.a.object),modifiedValues:A.a.object};var z=function(e){var t=e.modifiedValues,a=L()(),n=k()(a.getState().values,"application.application_type_id",""),i=Object(m.useState)(n),r=s()(i,2),o=r[0],c=r[1];return Object(m.useEffect)((function(){if(o!==n){var e=t&&t.authentication?t.authentication:void 0;a.batch((function(){a.change("authentication",e),a.change("selectedAuthentication",void 0)})),c(void 0)}}),[n]),null};z.propTypes={modifiedValues:A.a.object};var U=function(){return f.a.createElement(w.TextContent,null,f.a.createElement(C.Text,{component:C.TextVariants.p},f.a.createElement(R.a,{id:"sources.allApplicationsAssigned",defaultMessage:"All available applications have already been added to this source or there is no available application for this source type."})))},W=function(){return f.a.createElement(w.TextContent,null,f.a.createElement(C.Text,{component:C.TextVariants.p},f.a.createElement(R.a,{id:"sources.reviewAddAppSummary",defaultMessage:"Review the information below and click Add to add the application to your source. Use the Back button to make changes."})))},Y=function(e){var t=e.applicationTypeName,a=e.authenticationTypeName;return f.a.createElement(w.TextContent,null,f.a.createElement(C.Text,{component:C.TextVariants.p},f.a.createElement(R.a,{id:"sources.selectAuthenticationDescription",defaultMessage:"Selected application { applicationTypeName } supports { authenticationTypeName } authentication type. You can use already defined authentication values or define new.",values:{applicationTypeName:t,authenticationTypeName:a}})))};Y.propTypes={applicationTypeName:A.a.string,authenticationTypeName:A.a.string};var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;return e.find((function(e){return e.authtype===k()(t,"supported_authentication_types.".concat(a,"[0]"))}))},Q=function(e){var t=e.source,a=e.authenticationValues,n=e.applicationTypes,i=e.supportedAuthTypeName,r=e.supportedAuthType;return a.filter((function(e){return e.authtype===r})).map((function(e){var a=t.applications.find((function(t){return t.authentications.find((function(t){return t.id===e.id}))})),r=a&&a.application_type_id?n.find((function(e){return e.id===a.application_type_id})):"",s=e.username?"-".concat(e.username):"",o=r?"-".concat(r.display_name):"-unused-".concat(e.id);return{label:"".concat(i).concat(s).concat(o),value:e.id}}))},H=function(e){var t=e.intl,a=e.source,n=e.authenticationValues,r=e.sourceType,s=e.applicationTypes,o=e.modifiedValues,c=[{component:"description",name:"authtypesetter",Content:G,authenticationValues:n,hideField:!0,modifiedValues:o}];return s.forEach((function(e){var o=k()(e,"supported_authentication_types[".concat(r.name,"][0]"),"");if(o&&K(n,e,r.name)){var u=k()(r,"schema.authentication",{}).find((function(e){return e.type===o})).name;c.push({component:P.componentTypes.SUB_FORM,name:"".concat(e.name,"-subform"),condition:{when:"application.application_type_id",is:e.id},fields:[{name:"".concat(e.name,"-select-authentication-summary"),component:"description",Content:Y,applicationTypeName:e.display_name,authenticationTypeName:u},{component:P.componentTypes.RADIO,name:"selectedAuthentication",label:t.formatMessage({id:"sources.selectAuthenticationTitle",defaultMessage:"Select authentication"}),isRequired:!0,validate:[{type:P.validatorTypes.REQUIRED}],options:[{label:t.formatMessage({id:"sources.selectAuthenticationradioLabel",defaultMessage:"Define new { supportedAuthTypeName }"},{supportedAuthTypeName:u}),value:"new"}].concat(i()(Q({authenticationValues:n,source:a,applicationTypes:s,supportedAuthTypeName:u,supportedAuthType:o})))}]})}})),{stepKey:"selectAuthentication",name:"selectAuthentication",title:t.formatMessage({id:"sources.selectAuthenticationTitle",defaultMessage:"Select authentication"}),fields:c,nextStep:function(e){var t=e.values.application,a=t||{},n=a.application_type_id?a.application_type_id:"";return"".concat(r.name,"-").concat(n)}}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,o=arguments.length>6?arguments[6]:void 0,c=arguments.length>7?arguments[7]:void 0,u=e.length>0,p=u?"summary":void 0,l=[],d=a.find((function(e){return e.id===s.source_type_id}));if(!s.imported&&u){var m=d.schema.endpoint.hidden?d.schema.endpoint.fields:[],f=0===m.length;n.forEach((function(e){e.supported_source_types.includes(d.name)&&l.push(_.schemaBuilder.createSpecificAuthTypeSelection(d,e,m,!1))})),d.schema.authentication.forEach((function(e){n.forEach((function(t){if(t.supported_source_types.includes(d.name)){var a=_.schemaBuilder.getAdditionalSteps(d.name,e.type,t.name);a.length>0&&l.push.apply(l,i()(_.schemaBuilder.createAdditionalSteps(a,d.name,e.type,f,e.fields,t.name)))}}))})),f&&l.push(_.schemaBuilder.createEndpointStep(d.schema.endpoint,d.name)),p=function(e){var t=e.values.application;if(t)return K(r,n.find((function(e){return e.id===t.application_type_id})),d.name)?"selectAuthentication":"".concat(d.name,"-").concat(t&&t.application_type_id)}}var g=u?{component:"card-select",name:"application.application_type_id",options:e,label:t.formatMessage({id:"sources.chooseAppToAdd",defaultMessage:"Choose an application to add"}),DefaultIcon:null,isRequired:!0,validate:[{type:P.validatorTypes.REQUIRED}]}:{component:"description",name:"description-no-options",validate:[{type:P.validatorTypes.REQUIRED}],Content:U},h=[];return!s.imported&&u&&h.push(H({intl:t,source:s,authenticationValues:r,sourceType:d,applicationTypes:n,modifiedValues:o})),{fields:[{component:P.componentTypes.WIZARD,name:"wizard",title:t.formatMessage({id:"sources.manageApps",defaultMessage:"Manage applications"}),inModal:!0,container:c,predictSteps:!0,showTitles:!0,crossroads:["application.application_type_id","selectedAuthentication"],description:t.formatMessage({id:"sources.addAppDescription",defaultMessage:"You are managing applications of this source."}),buttonLabels:{submit:u?t.formatMessage({id:"sources.add",defaultMessage:"Add"}):t.formatMessage({id:"sources.close",defaultMessage:"Close"}),cancel:t.formatMessage({id:"sources.cancel",defaultMessage:"Cancel"}),back:t.formatMessage({id:"sources.back",defaultMessage:"Back"})},fields:[{nextStep:p,title:t.formatMessage({id:"sources.selectApp",defaultMessage:"Select application"}),stepKey:1,name:"selectAppStep",fields:[{component:"description",name:"description",Content:q},g,{component:"description",name:"authtypesetter",Content:z,hideField:!0,modifiedValues:o}]},{title:t.formatMessage({id:"sources.review",defaultMessage:"Review"}),stepKey:"summary",name:"summary",fields:[{component:"description",name:"description-summary",Content:W},{component:"summary",name:"summary",sourceTypes:a,applicationTypes:n}]}].concat(h,l)}]}},Z=a(76),X=a(302),$=a(304),ee=a(346),te=a(78),ae=a(303),ne=a(313),ie=a(347),re=function(e){var t=e.onClose,a=e.customText,n=e.progressStep,i=e.progressTexts;return f.a.createElement(te.Bullseye,null,f.a.createElement(X.EmptyState,{variant:X.EmptyStateVariant.full,className:"ins-c-sources__empty-state"},f.a.createElement(ae.EmptyStateIcon,{icon:ne.Spinner,color:"var(--pf-global--success-color--100)"}),f.a.createElement($.EmptyStateBody,null,i?f.a.createElement(ie.Progress,{value:n,min:0,max:i.length-1,title:" ",label:i[n],valueText:i[n],className:"pf-u-mb-md ins-c-sources__progress"}):a),t&&f.a.createElement(ee.EmptyStateSecondaryActions,null,f.a.createElement(Z.Button,{variant:"link",onClick:t},f.a.createElement(R.a,{id:"sources.cancel",defaultMessage:"Cancel"})))))};re.propTypes={onClose:A.a.func,customText:A.a.node,progressStep:A.a.number,progressTexts:A.a.arrayOf(A.a.string)},re.defaultProps={customText:f.a.createElement(R.a,{id:"sources.loading",defaultMessage:"Loading, please wait."})};var se=re,oe=a(126),ce=a(80),ue=a.n(ce),pe=function(e){var t=e.onReset,a=e.goToSources,n=e.error,i=e.progressStep,r=e.progressTexts;return f.a.createElement(te.Bullseye,null,f.a.createElement(X.EmptyState,{variant:X.EmptyStateVariant.full,className:"ins-c-sources__empty-state"},f.a.createElement(ae.EmptyStateIcon,{icon:ue.a,color:"var(--pf-global--danger-color--100)"}),f.a.createElement(oe.Title,{headingLevel:"h5",size:"lg"},f.a.createElement(R.a,{id:"sources.configurationSuccessful",defaultMessage:"Configuration unsuccessful"})),f.a.createElement($.EmptyStateBody,null,f.a.createElement(ie.Progress,{className:"pf-u-mb-md ins-c-sources__progress",value:i,min:0,title:" ",max:r.length-1,label:r[i],valueText:r[i],variant:"danger"}),f.a.createElement(f.a.Fragment,null,f.a.createElement(R.a,{id:"sources.successAddApp",defaultMessage:"Your application has not been successfully added:"}),f.a.createElement("br",null),f.a.createElement(w.TextContent,null,f.a.createElement(C.Text,{component:C.TextVariants.h6},n)))),f.a.createElement(Z.Button,{variant:"primary",onClick:a},f.a.createElement(R.a,{id:"sources.backToSources",defaultMessage:"Back to Sources"})),f.a.createElement(ee.EmptyStateSecondaryActions,null,f.a.createElement(Z.Button,{variant:"link",onClick:t},f.a.createElement(R.a,{id:"sources.retry",defaultMessage:"Retry"})))))};pe.propTypes={onReset:M.PropTypes.func.isRequired,goToSources:M.PropTypes.func.isRequired,error:M.PropTypes.string.isRequired,progressStep:M.PropTypes.number.isRequired,progressTexts:M.PropTypes.arrayOf(M.PropTypes.string).isRequired};var le=pe,de=a(62),me=a.n(de),fe=function(e){var t=e.goToSources,a=e.onReset,n=e.progressStep,i=e.progressTexts;return f.a.createElement(te.Bullseye,null,f.a.createElement(X.EmptyState,{variant:X.EmptyStateVariant.full,className:"ins-c-sources__empty-state"},f.a.createElement(ae.EmptyStateIcon,{icon:me.a,color:"var(--pf-global--success-color--100)"}),f.a.createElement(oe.Title,{headingLevel:"h5",size:"lg"},f.a.createElement(R.a,{id:"sources.configurationSuccessful",defaultMessage:"Configuration successful"})),f.a.createElement($.EmptyStateBody,null,f.a.createElement(ie.Progress,{className:"pf-u-mb-md ins-c-sources__progress",value:n,min:0,title:" ",max:i.length-1,label:i[n],valueText:i[n],variant:"success"}),f.a.createElement(R.a,{id:"sources.successAddApp",defaultMessage:"Your application has been successfully added."})),f.a.createElement(Z.Button,{variant:"primary",onClick:t},f.a.createElement(R.a,{id:"sources.backToSources",defaultMessage:"Back to Sources"})),f.a.createElement(ee.EmptyStateSecondaryActions,null,f.a.createElement(Z.Button,{variant:"link",onClick:a},f.a.createElement(R.a,{id:"sources.continueManageApp",defaultMessage:"Continue managing applications"})))))};fe.propTypes={onReset:M.PropTypes.func.isRequired,goToSources:M.PropTypes.func.isRequired,progressStep:M.PropTypes.number.isRequired,progressTexts:M.PropTypes.arrayOf(M.PropTypes.string).isRequired};var ge=fe,he=a(456),ye=function(e){var t=e.step,a=e.goToSources,n=Object(y.a)();return f.a.createElement(he.Wizard,{isOpen:!0,onClose:a,title:n.formatMessage({id:"sources.manageApps",defaultMessage:"Manage applications"}),description:n.formatMessage({id:"sources.addAppDescription",defaultMessage:"You are managing applications of this source."}),steps:[{name:"Finish",component:t,isFinishedStep:!0}]})};ye.propTypes={step:M.PropTypes.node.isRequired,goToSources:M.PropTypes.func.isRequired};var ve=ye,be=a(14),Ee=a(314),Te=a(83),_e=a(79),Se=a(1),Oe=a.n(Se),je=a(312),xe=a.n(je),Me=a(152),Ae=a.n(Me),Pe=a(736),Ce=a(492),we=a.n(Ce),Re=a(111),Ve=function(e,t,a){var n=[],i=0;return!e.endpoint||we()(e.endpoint)||k()(t,"endpoint.id",!1)||n.push(a.formatMessage({id:"sources.authProgressEndpoint",defaultMessage:"Step { step }: creating endpoint"},{step:++i})),n.push(a.formatMessage({id:"sources.authProgressValues",defaultMessage:"Step { step }: updating values and creating application"},{step:++i})),n.push(a.formatMessage({id:"sources.authConnectingApplication",defaultMessage:"Step { step }: connecting application and authentication"},{step:++i})),n.push(a.formatMessage({id:"sources.authReloadData",defaultMessage:"Step { step }: reloading data"},{step:++i})),n.push(a.formatMessage({id:"sources.authCompleted",defaultMessage:"Completed"})),n};function ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(a),!0).forEach((function(t){Oe()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ke(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var De=function e(t){return Object.keys(t).forEach((function(a){t[a]&&"object"===Ae()(t[a])?we()(t[a])?delete t[a]:e(t[a]):void 0===t[a]&&delete t[a]})),t},Ie=function(){var e=d()(p.a.mark((function e(t,a,n,i){var r,o,c,u,l,d,m,f,g,h,y,v,E,S,O,j,x,M,A,P,C,w,R,V,k,N,D,I,B,q,F,L,G,z,U,W,Y,K,Q=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Q.length>4&&void 0!==Q[4]?Q[4]:function(){},o=Q.length>5&&void 0!==Q[5]?Q[5]:function(){},c=a.getState(),u=c.values,l=u.authentication?u.authentication.id:void 0,d=l?n.find((function(e){return e.id===l})):void 0,m=t.authentication,f=xe()(t,["authentication"]),g=Object(Pe.addedDiff)(i,f),h=Object(Pe.updatedDiff)(i,f),y=Object(Pe.addedDiff)(d,m),v=Object(Pe.updatedDiff)(d,m),E=De(Ne({},b()(T()(g),h),{authentication:Ne({},b()(T()(y),v))})),r({type:"setProgressTexts",progressTexts:Ve(E,u,o)}),e.prev=13,u.source&&u.source.id){e.next=16;break}throw"Missing source id";case 16:if(S=u.source.id,O=u.endpoint?u.endpoint.id:void 0,j=[],E.source&&!we()(E.source)?j.push(Object(be.j)().updateSource(S,E.source)):j.push(Promise.resolve(void 0)),x=E.endpoint&&!we()(E.endpoint),M=E.url&&!we()(E.url),!x&&!M){e.next=39;break}if(A=Object(Re.b)(E),P=A.scheme,C=A.host,w=A.port,R=A.path,V=parseInt(w,10),k=De(Ne({},E.endpoint,{scheme:P,host:C,port:isNaN(V)?void 0:V,path:R})),!O){e.next=30;break}j.push(Object(be.j)().updateEndpoint(O,k)),e.next=37;break;case 30:return j.push(Promise.resolve(void 0)),N=Ne({},k,{default:!0,source_id:S}),e.next=34,Object(be.j)().createEndpoint(N);case 34:D=e.sent,r({type:"increaseProgressStep"}),O=D.id;case 37:e.next=40;break;case 39:j.push(Promise.resolve(void 0));case 40:return E.authentication&&!we()(E.authentication)?l?j.push(Object(be.j)().updateAuthentication(l,E.authentication)):O&&(I=Ne({},E.authentication,{resource_id:O,resource_type:"Endpoint"}),j.push(Object(be.j)().createAuthentication(I))):j.push(Promise.resolve(void 0)),E.application&&E.application.application_type_id?j.push(Object(be.b)(S,E.application.application_type_id)):j.push(Promise.resolve(void 0)),e.next=44,Promise.all(j);case 44:return B=e.sent,q=s()(B,4),q[0],q[1],F=q[2],L=q[3],r({type:"increaseProgressStep"}),G=l||(F?F.id:void 0),z=[],L&&L.id&&G&&(U={application_id:L.id,authentication_id:G},z.push(Object(be.j)().createAuthApp(U))),(E.credentials||E.billing_source)&&(W=E.credentials,Y=E.billing_source,K={},K=W?{authentication:{credentials:W}}:{},K=Y?Ne({},K,{billing_source:Y}):K,z.push(Object(_.patchSource)(Ne({id:S},K)))),e.next=58,Promise.all(z);case 58:r({type:"increaseProgressStep"}),e.next=67;break;case 61:return e.prev=61,e.t0=e.catch(13),e.next=65,Object(_.handleError)(e.t0);case 65:throw e.sent;case 67:case"end":return e.stop()}}),e,null,[[13,61]])})));return function(t,a,n,i){return e.apply(this,arguments)}}(),Be=a(372);function qe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?qe(Object(a),!0).forEach((function(t){Oe()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):qe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Le={state:"loading",error:"",values:{},authenticationsValues:[],sourceAppsLength:0,initialValues:{},progressStep:0,progressTexts:[],isCancelling:!1},Ge=function(e,t){var a=t.type,n=t.length,i=t.authenticationsValues,r=t.initialValues,s=t.error,o=t.values,c=t.progressTexts;switch(a){case"setSourceAppslength":return Fe({},e,{sourceAppsLength:n});case"loadAuthentications":return Fe({},e,{authenticationsValues:i,initialValues:r,values:{},state:"loading"===e.state?"wizard":e.state});case"loadWithoutAuthentications":return Fe({},e,{initialValues:r,values:{},state:"loading"===e.state?"wizard":e.state});case"reset":return Fe({},e,{state:"wizard"});case"submit":return Fe({},e,{state:"submitting",progressStep:0,progressTexts:["Preparing"]});case"finish":return Fe({},e,{state:"finished",progressStep:++e.progressStep});case"error":return Fe({},e,{state:"errored",error:s,values:o});case"setProgressTexts":return Fe({},e,{progressTexts:c});case"increaseProgressStep":return Fe({},e,{progressStep:++e.progressStep});case"toggleCancelling":return Fe({},e,{isCancelling:!e.isCancelling},o&&{values:o});default:return e}},ze=void 0,Ue=function(e){var t=e.values.application;return ze=t},We=function(e,t,a,n,i,r,s){return i({type:"submit"}),Ie(e,t,a,r,i,s).then(d()(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(Be.a)(r.source.id),e.next=3,n(Object(j.f)());case 3:return ze=void 0,e.abrupt("return",i({type:"finish"}));case 5:case"end":return e.stop()}}),e)})))).catch((function(t){return i({type:"error",error:t,values:e})}))},Ye=function(e){return f.a.createElement(O.a,c()({},e,{showFormControls:!1}))};t.default=function(){var e=Object(y.a)(),t=Object(g.f)(),a=Object(Ee.a)(),n=Object(h.useSelector)((function(e){return e.sources}),h.shallowEqual),r=n.appTypes,o=n.sourceTypesLoaded,c=n.appTypesLoaded,u=n.sourceTypes,p=Object(B.a)(),l=Object(h.useDispatch)(),d=Object(m.useReducer)(Ge,Le),v=s()(d,2),E=v[0],S=v[1],O=Object(m.useRef)(document.createElement("div"));Object(m.useEffect)((function(){ze=void 0}),[]),Object(m.useEffect)((function(){if(p){var e=E.sourceAppsLength>=p.applications.length&&E.sourceAppsLength>0;S({type:"setSourceAppslength",length:p.applications.length}),e||(p.endpoints&&p.endpoints[0]?Object(be.j)().listEndpointAuthentications(p.endpoints[0].id).then((function(e){var t=e.data;return S({type:"loadAuthentications",authenticationsValues:t,initialValues:{source:p,endpoint:p.endpoints[0],url:Object(Te.b)(p.endpoints[0]),application:ze},values:{}})})):S({type:"loadWithoutAuthentications",initialValues:{source:p,application:ze},values:{}}))}}),[p]);var j=function(){return t.push(_e.c.sources.path)};if(!(c&&o&&a&&"loading"!==E.state||"submitting"===E.state))return f.a.createElement(ve,{goToSources:j,step:f.a.createElement(se,null)});if("submitting"===E.state)return f.a.createElement(ve,{goToSources:j,step:f.a.createElement(se,{progressStep:E.progressStep,progressTexts:E.progressTexts})});var M=function(){return S({type:"reset"})};if("wizard"!==E.state){var A="finished"===E.state?f.a.createElement(ge,{onReset:M,goToSources:j,progressStep:E.progressStep,progressTexts:E.progressTexts}):f.a.createElement(le,{onReset:M,goToSources:j,error:E.error,progressStep:E.progressStep,progressTexts:E.progressTexts});return f.a.createElement(ve,{goToSources:j,step:A})}var P=p.applications.filter((function(e){return!e.isDeleting})).reduce((function(e,t){return[].concat(i()(e),[t.application_type_id])}),[]),C=u.find((function(e){return e.id===p.source_type_id})),w=C&&C.name,R=r.filter((function(e){return!P.includes(e.id)&&e.supported_source_types.includes(w)})).filter(_.filterApps),V=R.map((function(t){var a=p.applications.find((function(e){return e.application_type_id===t.id})),n="".concat(t.display_name," ").concat(a?"(".concat(e.formatMessage({id:"sources.currentlyRemoving",defaultMessage:"Currently removing"}),")"):"");return{value:t.id,label:n,isDisabled:!!a}})),k=J(V,e,u,r,E.authenticationsValues,p,E.values,O.current),N=R.length>0?function(t,a){return We(t,a,E.authenticationsValues,l,S,E.initialValues,e)}:j,D=b()(T()(E.initialValues),E.values);return f.a.createElement(f.a.Fragment,null,f.a.createElement(_.CloseModal,{title:e.formatMessage({id:"sources.manageAppsCloseModalTitle",defaultMessage:"Exit application adding?"}),isOpen:E.isCancelling,onStay:function(){O.current.hidden=!1,S({type:"toggleCancelling"})},onExit:j}),f.a.createElement(x.a,{schema:k,showFormControls:!1,onSubmit:N,onCancel:function(e){(null==e?void 0:e.application)?(O.current.hidden=!0,S({type:"toggleCancelling",values:e})):j()},initialValues:D,subscription:{values:!0},debug:Ue,clearedValue:null,FormTemplate:Ye}))}}}]);
//# sourceMappingURL=../sourcemaps/addApp.js.map