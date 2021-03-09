(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[2827],{93323:(e,t,n)=>{"use strict";n.d(t,{n:()=>r,Z:()=>i});var a=n(45857),r=function(e){return(0,a.Rj)().checkAvailabilitySource(e).catch((function(){}))};const i=r},80582:(e,t,n)=>{"use strict";n.d(t,{h:()=>s});var a=n(59713),r=n.n(a),i=n(45857),o=function(e,t){return new Promise((function(n){setTimeout(n.bind(null,t),e)}))};function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"getApplication",r=arguments.length>4?arguments[4]:void 0;return new Promise((function(c,s){var l=Date.now();return function c(){return(0,i.Rj)()[a](e).then((function(e){if(Date.now()-l>=t)return r?u(u({},e),{},{availability_status:null,availability_status_error:null}):e;if("available"===e.availability_status||"unavailable"===e.availability_status){if(r&&new Date(e.last_checked_at||e.updated_at)>r)return e;if(!r)return e}return o(n).then((function(){return c()}))}))}().then((function(e){return c(e)})).catch((function(e){return s(e)}))}))}},61570:(e,t,n)=>{"use strict";n.d(t,{Z$:()=>w,pD:()=>E,QW:()=>_,G$:()=>O,gF:()=>M,zi:()=>Z,GN:()=>j,sM:()=>P,Ow:()=>z,i7:()=>D,YD:()=>x,TC:()=>S,YV:()=>C,dD:()=>k});var a=n(319),r=n.n(a),i=n(59713),o=n.n(i),c=n(6479),u=n.n(c),s=n(80150),l=n.n(s),p=n(44012),d=n(87242),m=n(24154),f=n(1507),h=n(27361),y=n.n(h);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e,t,n){return y()(f.Z,[e,"authentication",t,n],void 0)},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"additionalSteps"],[])},E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"skipSelection"],!1)},_=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"skipEndpoint"],!1)},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"customSteps"],!1)},M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"includeStepKeyFields"],[])},T=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"onlyHiddenFields"],!1)},Z=function(e,t){return e.filter((function(e){return e.stepKey===t})).map((function(e){return e.stepKey,u()(e,["stepKey"])}))},j=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"useApplicationAuth"],!1)},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.filter((function(e){return!e.stepKey||t.includes(e.stepKey)}))},z=function(e,t,n,a){return e.map((function(e){var r=y()(f.Z,[t,"authentication",n,a]),i=r?y()(r,e.name):y()(f.Z,[t,"authentication",n,"generic",e.name]),o=i?g(g({},e),i):e;return"authentication.password"===o.name&&(o.component="authentication"),o}))},D=function(e,t){return e.map((function(e){var n=y()(f.Z,[t,"endpoint",e.name]);return n?g(g({},e),n):e}))},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"additionalFields"],[])},S=function(e,t){return g(g({},e),{},{fields:[].concat(r()((n=t,y()(f.Z,[n,"endpoint","additionalFields"],[]))),r()(D(e.fields,t))),name:"".concat(t,"-endpoint"),nextStep:"summary"});var n},C=function(e,t,n,a,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"generic";return e.map((function(e){var c=e.name||"".concat(t,"-").concat(n,"-").concat(o,"-additional-step"),u=_(t,n,o),s=O(t,n,o);return g(g({name:c,nextStep:!a||u||s?"summary":"".concat(t,"-endpoint")},e),{},{fields:[].concat(r()(z(e.fields,t,n,o)),r()(z(Z(i,c),t,n,o)))})}))},k=function(e,t,n){var a=[];return e.forEach((function(e){var i=e.schema.endpoint.hidden?e.schema.endpoint.fields:[],o=0===i.length;a.push(function(e,t,n){var a=e.schema.authentication,i=a.length>1,o=r()(t),c={};if(i)return a.forEach((function(a){var i=M(e.name,a.type),u=_(e.name,a.type,"generic"),s=T(e.name,a.type),l=s?a.fields.filter((function(e){return e.hideField})):a.fields;j(e.name,a.type)&&(o=[]),o.push({component:"auth-select",name:"auth_select",label:a.name,authName:a.type,validate:[{type:m.Z.REQUIRED}],disableAuthType:n}),o.push({component:d.Z.SUB_FORM,name:"".concat(a.type,"-subform"),className:"pf-u-pl-md",fields:[].concat(r()(x(e.name,a.type)),r()(z(P(l,i),e.name,a.type))),condition:{when:"auth_select",is:a.type},hideField:s}),c[a.type]=w(e.name,a.type).length>0?"".concat(e.name,"-").concat(a.type,"-generic-additional-step"):0!==t.length||u?"summary":"".concat(e.name,"-endpoint")})),{name:e.name,title:l().createElement(p.Z,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:o,nextStep:{when:"auth_select",stepMapper:c}};var u=a[0],s="".concat(e.name,"-").concat(u.type,"-generic-additional-step"),f=_(e.name,u.type,"generic"),h=w(e.name,u.type).length>0?s:0!==t.length||f?"summary":"".concat(e.name,"-endpoint"),y=M(e.name,u.type),v=E(e.name,u.type),b={};if(j(e.name,u.type)&&(o=[]),v){var O=w(e.name,u.type).find((function(e){return!e.name})),D=Z(u.fields,s);b=g(g({},O),{},{fields:[].concat(r()(o),r()(z([].concat(r()(O.fields),r()(D)),e.name,u.type)))})}return g({name:e.name,title:l().createElement(p.Z,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:[].concat(r()(o),r()(x(e.name,u.type)),r()(z(P(u.fields,y),e.name,u.type))),nextStep:h},b)}(e,i,n)),t.forEach((function(t){t.supported_source_types.includes(e.name)&&a.push(function(e,t,n,a){var i=e.schema.authentication,o=t.supported_authentication_types[e.name],c=o.length>1,u=r()(n),s={};if(c)return i.filter((function(e){var t=e.type;return o.includes(t)})).forEach((function(i){var o=b(e.name,i.type,t.name)?t.name:"generic";j(e.name,i.type,o)&&(u=[]);var c,l=_(e.name,i.type,o),p=O(e.name,i.type,o);c=w(e.name,i.type,t.name).length>0?"".concat(e.name,"-").concat(i.type,"-").concat(t.name,"-additional-step"):0!==n.length||l||p?"summary":"".concat(e.name,"-endpoint");var f=M(e.name,i.type,o),h=T(e.name,i.type,o),y=h?i.fields.filter((function(e){return e.hideField})):i.fields;u.push({component:"auth-select",name:"auth_select",label:i.name,authName:i.type,validate:[{type:m.Z.REQUIRED}],supportedAuthTypes:t.supported_authentication_types[e.name],disableAuthType:a}),u.push({component:d.Z.SUB_FORM,name:"".concat(i.type,"-subform"),className:"pf-u-pl-md",fields:[].concat(r()(x(e.name,i.type,o)),r()(z(P(y,f),e.name,i.type,o))),condition:{when:"auth_select",is:i.type},hideField:h}),s[i.type]=c})),{name:"".concat(e.name,"-").concat(t.id),title:l().createElement(p.Z,{id:"wizard.chooseAuthType",defaultMessage:"Choose authentication type"}),fields:u,nextStep:{when:"auth_select",stepMapper:s}};var f,h=i.find((function(e){var t=e.type;return o.includes(t)})),y=b(e.name,h.type,t.name)?t.name:"generic",v="".concat(e.name,"-").concat(h.type,"-").concat(t.name,"-additional-step"),D=_(e.name,h.type,y),S=O(e.name,h.type,y);j(e.name,h.type,y)&&(u=[]),f=w(e.name,h.type,y).length>0?v:0!==n.length||D?"summary":"".concat(e.name,"-endpoint");var C=M(e.name,h.type,y),k={};if(E(e.name,h.type,y)){var R=w(e.name,h.type,y).find((function(e){return!e.name})),A=Z(h.fields,v);f=R.nextStep?R.nextStep:0!==n.length||D||S?"summary":"".concat(e.name,"-endpoint"),k=g(g({},R),{},{fields:[].concat(r()(u),r()(z([].concat(r()(R.fields),r()(A)),e.name,h.type,y)))})}return g({name:"".concat(e.name,"-").concat(t.id),title:l().createElement(p.Z,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:[].concat(r()(u),r()(x(e.name,h.type,y)),r()(z(P(h.fields,C),e.name,h.type,y))),nextStep:f},k)}(e,t,i,n))})),e.schema.authentication.forEach((function(n){var i=w(e.name,n.type);i.length>0&&a.push.apply(a,r()(C(i,e.name,n.type,o,n.fields))),t.forEach((function(t){var i=w(e.name,n.type,t.name);i.length>0&&a.push.apply(a,r()(C(i,e.name,n.type,o,n.fields,t.name)))}))})),o&&a.push(S(e.schema.endpoint,e.name))})),a}},58541:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(80150),r=n.n(a),i=n(45697),o=n.n(i),c=n(44012),u=n(47173),s=n(9947),l=n(38424),p=n(75106),d=n(35293),m=n(52643),f=n(60485),h=n(43047),y=function(e){var t=e.onClose,n=e.returnButtonTitle,a=e.message,i=e.title,o=e.customText,c=e.primaryAction,u=e.secondaryActions,y=e.Component;return r().createElement(m.b,null,r().createElement(s.u,{variant:s.I.full,className:"pf-u-mt-4xl"},r().createElement(l.k,{icon:h.ZP,color:"var(--pf-global--danger-color--100)",className:"pf-u-mb-0"}),r().createElement(f.D,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},i),r().createElement(p.B,{className:"ins-c-sources__wizard--step-text"},a||o),r().createElement(y,{variant:"primary",onClick:c||t},n),u&&r().createElement(d.i,{className:"pf-u-mt-sm"},u)))};y.propTypes={onClose:o().func.isRequired,returnButtonTitle:o().node,message:o().node,title:o().node,customText:o().node,primaryAction:o().func,secondaryActions:o().node,Component:o().elementType},y.defaultProps={title:r().createElement(c.Z,{id:"wizard.unsuccConfiguration",defaultMessage:"Something went wrong"}),customText:r().createElement(c.Z,{id:"wizard.errorText",defaultMessage:"There was a problem while trying to add your source. Please try again. If the error persists, open a support case."}),Component:u.zx};const v=y},14303:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(80150),r=n.n(a),i=n(45697),o=n.n(i),c=n(44012),u=n(47173),s=n(9947),l=n(38424),p=n(75106),d=n(35293),m=n(52643),f=n(60485),h=n(2372),y=function(e){var t=e.onClose,n=e.customText,a=e.cancelTitle,i=e.description;return r().createElement(m.b,null,r().createElement(s.u,{variant:s.I.full,className:"pf-u-mt-4xl"},r().createElement(l.k,{icon:h.$,className:"pf-u-mb-0"}),r().createElement(f.D,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},n),i&&r().createElement(p.B,{className:"ins-c-sources__wizard--step-text"},i),t&&r().createElement(d.i,{className:"pf-u-mt-xl"},r().createElement(u.zx,{variant:"link",onClick:t},a))))};y.propTypes={onClose:o().func,customText:o().node,cancelTitle:o().node,description:o().node},y.defaultProps={customText:r().createElement(c.Z,{id:"wizard.loadingText",defaultMessage:"Loading, please wait."}),cancelTitle:r().createElement(c.Z,{id:"wizard.cancelText",defaultMessage:"Cancel"})};const v=y},7505:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ye});var a=n(67154),r=n.n(a),i=n(59713),o=n.n(i),c=n(6479),u=n.n(c),s=n(80150),l=n.n(s),p=n(45697),d=n.n(p),m=n(98917),f=n(81554),h=n(83862),y=n(63038),v=n.n(y),g=n(27361),b=n.n(g),w=n(59775),E=n(92607),_=n(28517),O=n(58860),M=n(24154),T=n(62106);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=n(319),z=n.n(P),D=n(44012),x=n(86896),S=n(69174),C=n(43547),k=n(91921),R=n(3025),A=n(58844),N=n(10550),q=n(47173),F=n(37377),I=function(e){var t=e.label,n=e.value,a=(0,x.Z)();return l().createElement(F.J,{headerContent:t,bodyContent:n,position:"top",maxWidth:"80%"},l().createElement(q.zx,{variant:"link",isInline:!0,className:"ins-c-sources__wizard--summary-buttonss"},a.formatMessage({id:"wizard.showMore",defaultMessage:"Show more"})))};I.propTypes={label:d().node,value:d().node};const K=I;var B=n(1507),Q=n(75087),G=n(38307),L=n(61570),U=function(e){var t=e.term,n=e.description,a=u()(e,["term","description"]);return l().createElement(A.g,a,l().createElement(N.M,null,t),l().createElement(R.b,null,n))};U.propTypes={term:d().node,description:d().node};var W=function(e){var t,n,a,r,i=e.sourceTypes,o=e.applicationTypes,c=e.showApp,u=e.showAuthType,s=(0,O.Z)(),p=(0,x.Z)(),d=s.getState().values,m=i.find((function(e){return e.name===d.source_type||e.id===d.source.source_type_id})),f=d.authentication&&d.authentication.authtype?d.authentication.authtype:d.auth_select,h=[];f&&(a=m.schema.authentication.find((function(e){return e.type===f})),h=a&&a.fields?a.fields:[]),"account_authorization"===d.source.app_creation_workflow&&(r=d.applications.map((function(e){var t;return null===(t=o.find((function(t){return t.id===e})))||void 0===t?void 0:t.display_name})));var y=(d.application?o.find((function(e){return e.id===d.application.application_type_id})):void 0)||{},v=y.display_name,g=void 0===v?p.formatMessage({id:"wizard.notSelected",defaultMessage:"Not selected"}):v,w=y.name,E=y.id,_=(0,L.QW)(m.name,f,w),M=m.schema.endpoint.fields;_&&(M=[],h=h.filter((function(e){return!e.name.includes("authentication.")})));var T=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic",a=arguments.length>3?arguments[3]:void 0;return[].concat(z()(b()(B.Z,[e,"authentication",t,n,"includeStepKeyFields"],[])),z()(b()(B.Z,[e,"authentication",t,n,"additionalSteps"],[]).map((function(e){return e.name}))),["".concat(e,"-").concat(t,"-").concat(n,"-additional-step"),"".concat(e,"-").concat(t,"-additional-step"),a?"".concat(e,"-").concat(a):void 0]).filter(Boolean)}(m.name,f,w,E),Z=(0,L.Z$)(m.name,f,w),j=b()(B.Z,[m.name,"authentication",f,w,"customSteps"],!1);Z.length>0&&(h=Z.map((function(e){return[].concat(z()(e.fields),z()(h.filter((function(t){var n=t.stepKey;return n&&e.name===n}))))})).flatMap((function(e){return e})).filter((function(e){var t=e.name;return t.startsWith("application.extra")||h.find((function(e){return e.name===t}))||j&&M.find((function(e){return e.name===t}))}))),j&&(M=[]),h=(0,L.Ow)(h,m.name,f,w||"generic"),M=(0,L.i7)(M,m.name);var P=function(e,t,n){return e.map((function(e){return function(e,t,n){var a=b()(t,e.name);if((!e.stepKey||n.includes(e.stepKey))&&!(e.condition&&b()(t,e.condition.when)!==e.condition.is||e.hideField))return a&&"password"===e.type&&(a="●●●●●●●●●●●●"),"boolean"==typeof a&&(a=a?l().createElement(S._,{color:"green"},l().createElement(D.Z,{id:"wizard.enabled",defaultMessage:"Enabled"})):l().createElement(S._,{color:"gray"},l().createElement(D.Z,{id:"wizard.disabled",defaultMessage:"Disabled"}))),!a&&"authentication.password"===e.name&&b()(t,"authentication.id")&&(a="●●●●●●●●●●●●"),{label:e["aria-label"]||e.label,value:a||"-"}}(e,t,n)})).filter(Boolean)}([].concat(z()(h),z()(M)),d,T).map((function(e){var t=e.label,n=e.value;return l().createElement(U,{key:"".concat(t,"--").concat(n),term:t,description:n.toString().length>150?l().createElement(K,{label:t,value:n}):n})}));return l().createElement(l().Fragment,null,l().createElement(k.o,{isHorizontal:!0,className:"ins-c-sources__wizard--summary-description-list"},l().createElement(U,{term:p.formatMessage({id:"wizard.name",defaultMessage:"Name"}),description:d.source.name}),l().createElement(U,{term:p.formatMessage({id:"wizard.sourceType",defaultMessage:"Source type"}),description:m.product_name}),c&&d.source.app_creation_workflow&&l().createElement(U,{term:p.formatMessage({id:"wizard.configurationMode",defaultMessage:"Configuration mode"}),description:"account_authorization"===d.source.app_creation_workflow?p.formatMessage({id:"wizard.accountAuth",defaultMessage:"Account authorization"}):p.formatMessage({id:"wizard.manualConfig",defaultMessage:"Manual configuration"})}),c&&"account_authorization"===d.source.app_creation_workflow&&l().createElement(U,{term:p.formatMessage({id:"wizard.applications",defaultMessage:"Applications"}),description:r.length?r.map((function(e){return l().createElement("div",{key:e},e)})):p.formatMessage({id:"none",defaultMessage:"None"})}),c&&"account_authorization"!==d.source.app_creation_workflow&&l().createElement(U,{term:p.formatMessage({id:"wizard.application",defaultMessage:"Application"}),description:g}),!_&&a&&u&&"account_authorization"!==d.source.app_creation_workflow&&(!(null!==(t=d.application)&&void 0!==t&&t.application_type_id)||(null===(n=d.application)||void 0===n?void 0:n.application_type_id)===G.Dt)&&l().createElement(U,{term:p.formatMessage({id:"wizard.authenticationType",defaultMessage:"Authentication type"}),description:a.name}),P),function(e,t,n){return e===Q.Qr&&"google"!==t?l().createElement(C.b,{variant:"info",isInline:!0,title:n.formatMessage({id:"cost.rbacWarningTitle",defaultMessage:"Manage permissions in User Access"})},n.formatMessage({id:"cost.rbacWarningDescription",defaultMessage:"Make sure to manage permissions for this source in custom roles that contain permissions for Cost Management."})):null}(w,m.name,p))};W.propTypes={sourceTypes:d().arrayOf(d().shape({id:d().string.isRequired,name:d().string.isRequired,product_name:d().string.isRequired,schema:d().shape({authentication:d().array,endpoint:d().object})})).isRequired,applicationTypes:d().arrayOf(d().shape({id:d().string.isRequired,name:d().string.isRequired,display_name:d().string.isRequired})).isRequired,showApp:d().bool,showAuthType:d().bool},W.defaultProps={showApp:!0,showAuthType:!0};const $=W;var H=function(e){var t=e.Content,n=u()(e,["Content"]);return l().createElement(t,n)};H.propTypes={Content:d().oneOfType([d().element,d().func]).isRequired};const Y=H;var V=n(16475),J=n(4649),X=n(50693),ee=n(8785),te=function(e){var t=(0,ee.Z)(e),n=t.isRequired,a=t.label,i=t.helperText,o=t.hideLabel,c=t.meta,p=t.input,d=t.options,m=t.mutator,f=t.DefaultIcon,h=t.iconMapper,y=u()(t,["isRequired","label","helperText","hideLabel","meta","input","options","mutator","DefaultIcon","iconMapper"]),g=(0,O.Z)(),b=(0,s.useState)((function(){var e={};return d.forEach((function(t){var n=t.value;return e[n]=h(n,f)})),e})),E=v()(b,1)[0],_=y.isMulti||y.multi,M=y.isDisabled||y.isReadOnly,T=p.value||[],Z=function(e){M||(function(e){_?function(e){p.onChange(T.includes(e)?T.filter((function(t){return t!==e})):[].concat(z()(T),[e]))}(e):function(e){p.onChange(T===e?void 0:e)}(e)}(e),p.onBlur())},j=c.error,P=c.touched&&j;return l().createElement(w.c,{isRequired:n,label:!o&&a,fieldId:p.name,helperText:i,helperTextInvalid:j,validated:P?"error":"default"},l().createElement(X.r,{hasGutter:!0,className:"pf-u-mb-md"},d.map((function(e){return m(e,g)})).map((function(e){var t=e.value,n=e.label,a=e.isDisabled||M;if(t){var i=E[t];return l().createElement(V.P,{sm:6,md:4,key:t},l().createElement(J.n,r()({className:"ins-c-sources__wizard--tile".concat(a?" disabled":""),onClick:function(){return Z(t)},tabIndex:a?-1:0,onKeyPress:function(e){return function(e,t,n){32===e.charCode&&(e.preventDefault(),n(t))}(e,t,Z)},isDisabled:a,title:n,isStacked:!0,isSelected:T.includes(t)},i&&{icon:l().createElement(i,null)})))}}))))};te.propTypes={multi:d().bool,isMulti:d().bool,label:d().node,isRequired:d().bool,helperText:d().node,description:d().node,hideLabel:d().bool,name:d().string.isRequired,mutator:d().func,options:d().array,DefaultIcon:d().oneOfType([d().node,d().func,d().element]),iconMapper:d().func,isDisabled:d().bool,isReadOnly:d().bool},te.defaultProps={options:[],iconMapper:function(e,t){return t},mutator:function(e){return e}};const ne=te;var ae=n(92504),re=function(e){var t=(0,ee.Z)(e),n=t.label,a=t.input,r=t.authName,i=t.supportedAuthTypes,o=t.disableAuthType,c=a.value===r;return a.value&&i&&!i.includes(a.value)&&a.onChange(void 0),l().createElement(ae.Y,{value:r,isChecked:c,name:a.name,onChange:function(){return a.onChange(r)},label:n,id:"".concat(a.name,"-").concat(r),isDisabled:o})};re.propTypes={label:d().string,authName:d().string.isRequired,disableAuthType:d().bool,supportedAuthTypes:d().arrayOf(d().string)},re.defaultProps={disableAuthType:!1};const ie=re;var oe=n(38883),ce=function(e){var t=e.options,n=e.mutator,a=u()(e,["options","mutator"]),i=(0,O.Z)(),o=i.getState().values,c=o.source_type,p=b()(o,a.name),d=t.map((function(e){return n(e,i)})).filter(Boolean);return(0,s.useEffect)((function(){!c||p&&d.map((function(e){return e.value})).includes(p)||1!==d.filter((function(e){return e.value&&e.value!==G.Dt})).length?d.map((function(e){return e.value})).includes(p)||i.change(a.name,G.Dt):i.change(a.name,d[0].value)}),[c]),l().createElement(oe.Z,r()({},a,{options:d,FormGroupProps:{className:"ins-c-sources__wizard--radio"}}))};ce.propTypes={mutator:d().func.isRequired,options:d().array,name:d().string};const ue=ce;var se=n(13946),le=n(49739),pe=n(83826);function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe={"auth-select":ie,description:Y,"card-select":ne,summary:$,"enhanced-radio":ue,"switch-group":function(e){var t=(0,ee.Z)(e),n=t.label,a=t.input,r=t.options,i=t.applicationTypes,o=(0,(0,O.Z)().getState)().values.source_type,c=i.filter((function(e){return e.supported_source_types.includes(o)})).map((function(e){return e.id})),u=r.filter((function(e){var t=e.value;return c.includes(t)}));return(0,s.useEffect)((function(){a.value||a.onChange(u.map((function(e){return e.value})).filter(Boolean))}),[]),l().createElement(w.c,{label:n,fieldId:a.name},l().createElement(le.K,{hasGutter:!0},u.map((function(e){return l().createElement(pe.v,{key:e.value},l().createElement(se.r,{label:e.label,onChange:function(t){return function(e,t){return e?a.onChange([].concat(z()(a.value),[t])):a.onChange(a.value.filter((function(e){return e!==t})))}(t,e.value)},isChecked:a.value.includes(e.value),id:e.value}),e.description&&l().createElement("div",{className:"pf-c-switch pf-u-mt-sm"},l().createElement("span",{className:"pf-c-switch__toggle ins-c-sources__wizard--hide-me"}),l().createElement("div",{className:"pf-c-switch__label ins-c-sources__wizard--switch-description"},e.description)))}))))},authentication:function(e){var t,n,a=(0,O.Z)(),i=a.getState().values,o=(null==e||null===(t=e.name)||void 0===t?void 0:t.match(/\d+/))||[],c=v()(o,1)[0]||(null===(n=i.authentication)||void 0===n?void 0:n.id),u=b()(i,e.name),p=(0,s.useState)(!c||u),d=v()(p,2),m=d[0],f=d[1],h=(0,s.useRef)(!0),y=(0,s.useRef)(!1);(0,s.useEffect)((function(){y.current&&(!h.current&&a.getState().pristine&&(f(!1),h.current=!0),m&&(h.current=!1))})),(0,s.useEffect)((function(){y.current=!0}),[]);var g=e.validate&&e.validate.filter((function(e){return e.type!==M.Z.REQUIRED})),Z=j(j({},e),c?{validate:g,resolveProps:T.Z}:{});return!m&&c?l().createElement(w.c,{helperText:Z.helperText,label:Z.label,onFocus:function(){return f(!0)},isRequired:!0},l().createElement(E.oi,{"aria-label":"pre-filled-authentication",value:"•••••••••••••"})):l().createElement(_.Z,r()({},Z,{autoFocus:!0}))}},he=function(e){var t=e.componentMapper,n=u()(e,["componentMapper"]);return l().createElement(m.Z,r()({FormTemplate:f.ZP,componentMapper:me(me(me({},h.ZP),fe),t)},n))};he.propTypes={componentMapper:d().object};const ye=he},56855:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=function(e){return"account_authorization"===e.app_creation_workflow}},62106:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(80150),r=n.n(a),i=n(45697),o=n.n(i),c=n(86896),u=n(2372),s=n(87828),l=n(25607),p=function(e){var t=e.validating,n=(0,c.Z)();return r().createElement(s.Q,{isHidden:!t},r().createElement(u.$,{size:"md",className:"pf-u-mr-md"}),n.formatMessage({id:"wizard.validating",defaultMessage:"Validating"}))};p.propTypes={validating:o().bool.isRequired};const d=function(e,t){var n=t.meta;return n.validating?{helperText:r().createElement(l.Z,null,(function(e){var t=e.validating;return r().createElement(p,{validating:t})}))}:n.valid?{validated:"success",FormGroupProps:{validated:"success"}}:{}}}}]);
//# sourceMappingURL=2827.760903cf57f3ba0629ee.js.map