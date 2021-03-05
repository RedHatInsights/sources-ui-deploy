(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[6887],{96951:(e,t,n)=>{"use strict";n.d(t,{Z$:()=>w,pD:()=>E,QW:()=>_,G$:()=>O,gF:()=>Z,zi:()=>M,GN:()=>P,sM:()=>j,Ow:()=>z,i7:()=>D,YD:()=>C,TC:()=>x,YV:()=>S,dD:()=>R});var a=n(319),r=n.n(a),i=n(59713),o=n.n(i),c=n(6479),s=n.n(c),u=n(80150),l=n.n(u),p=n(44012),d=n(87242),m=n(24154),f=n(99584),h=n(27361),y=n.n(h);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e,t,n){return y()(f.Z,[e,"authentication",t,n],void 0)},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"additionalSteps"],[])},E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"skipSelection"],!1)},_=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"skipEndpoint"],!1)},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"customSteps"],!1)},Z=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"includeStepKeyFields"],[])},T=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"onlyHiddenFields"],!1)},M=function(e,t){return e.filter((function(e){return e.stepKey===t})).map((function(e){return e.stepKey,s()(e,["stepKey"])}))},P=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"useApplicationAuth"],!1)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.filter((function(e){return!e.stepKey||t.includes(e.stepKey)}))},z=function(e,t,n,a){return e.map((function(e){var r=y()(f.Z,[t,"authentication",n,a]),i=r?y()(r,e.name):y()(f.Z,[t,"authentication",n,"generic",e.name]),o=i?g(g({},e),i):e;return"authentication.password"===o.name&&(o.component="authentication"),o}))},D=function(e,t){return e.map((function(e){var n=y()(f.Z,[t,"endpoint",e.name]);return n?g(g({},e),n):e}))},C=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return y()(f.Z,[e,"authentication",t,n,"additionalFields"],[])},x=function(e,t){return g(g({},e),{},{fields:[].concat(r()((n=t,y()(f.Z,[n,"endpoint","additionalFields"],[]))),r()(D(e.fields,t))),name:"".concat(t,"-endpoint"),nextStep:"summary"});var n},S=function(e,t,n,a,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"generic";return e.map((function(e){var c=e.name||"".concat(t,"-").concat(n,"-").concat(o,"-additional-step"),s=_(t,n,o),u=O(t,n,o);return g(g({name:c,nextStep:!a||s||u?"summary":"".concat(t,"-endpoint")},e),{},{fields:[].concat(r()(z(e.fields,t,n,o)),r()(z(M(i,c),t,n,o)))})}))},R=function(e,t,n){var a=[];return e.forEach((function(e){var i=e.schema.endpoint.hidden?e.schema.endpoint.fields:[],o=0===i.length;a.push(function(e,t,n){var a=e.schema.authentication,i=a.length>1,o=r()(t),c={};if(i)return a.forEach((function(a){var i=Z(e.name,a.type),s=_(e.name,a.type,"generic"),u=T(e.name,a.type),l=u?a.fields.filter((function(e){return e.hideField})):a.fields;P(e.name,a.type)&&(o=[]),o.push({component:"auth-select",name:"auth_select",label:a.name,authName:a.type,validate:[{type:m.Z.REQUIRED}],disableAuthType:n}),o.push({component:d.Z.SUB_FORM,name:"".concat(a.type,"-subform"),className:"pf-u-pl-md",fields:[].concat(r()(C(e.name,a.type)),r()(z(j(l,i),e.name,a.type))),condition:{when:"auth_select",is:a.type},hideField:u}),c[a.type]=w(e.name,a.type).length>0?"".concat(e.name,"-").concat(a.type,"-generic-additional-step"):0!==t.length||s?"summary":"".concat(e.name,"-endpoint")})),{name:e.name,title:l().createElement(p.Z,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:o,nextStep:{when:"auth_select",stepMapper:c}};var s=a[0],u="".concat(e.name,"-").concat(s.type,"-generic-additional-step"),f=_(e.name,s.type,"generic"),h=w(e.name,s.type).length>0?u:0!==t.length||f?"summary":"".concat(e.name,"-endpoint"),y=Z(e.name,s.type),v=E(e.name,s.type),b={};if(P(e.name,s.type)&&(o=[]),v){var O=w(e.name,s.type).find((function(e){return!e.name})),D=M(s.fields,u);b=g(g({},O),{},{fields:[].concat(r()(o),r()(z([].concat(r()(O.fields),r()(D)),e.name,s.type)))})}return g({name:e.name,title:l().createElement(p.Z,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:[].concat(r()(o),r()(C(e.name,s.type)),r()(z(j(s.fields,y),e.name,s.type))),nextStep:h},b)}(e,i,n)),t.forEach((function(t){t.supported_source_types.includes(e.name)&&a.push(function(e,t,n,a){var i=e.schema.authentication,o=t.supported_authentication_types[e.name],c=o.length>1,s=r()(n),u={};if(c)return i.filter((function(e){var t=e.type;return o.includes(t)})).forEach((function(i){var o=b(e.name,i.type,t.name)?t.name:"generic";P(e.name,i.type,o)&&(s=[]);var c,l=_(e.name,i.type,o),p=O(e.name,i.type,o);c=w(e.name,i.type,t.name).length>0?"".concat(e.name,"-").concat(i.type,"-").concat(t.name,"-additional-step"):0!==n.length||l||p?"summary":"".concat(e.name,"-endpoint");var f=Z(e.name,i.type,o),h=T(e.name,i.type,o),y=h?i.fields.filter((function(e){return e.hideField})):i.fields;s.push({component:"auth-select",name:"auth_select",label:i.name,authName:i.type,validate:[{type:m.Z.REQUIRED}],supportedAuthTypes:t.supported_authentication_types[e.name],disableAuthType:a}),s.push({component:d.Z.SUB_FORM,name:"".concat(i.type,"-subform"),className:"pf-u-pl-md",fields:[].concat(r()(C(e.name,i.type,o)),r()(z(j(y,f),e.name,i.type,o))),condition:{when:"auth_select",is:i.type},hideField:h}),u[i.type]=c})),{name:"".concat(e.name,"-").concat(t.id),title:l().createElement(p.Z,{id:"wizard.chooseAuthType",defaultMessage:"Choose authentication type"}),fields:s,nextStep:{when:"auth_select",stepMapper:u}};var f,h=i.find((function(e){var t=e.type;return o.includes(t)})),y=b(e.name,h.type,t.name)?t.name:"generic",v="".concat(e.name,"-").concat(h.type,"-").concat(t.name,"-additional-step"),D=_(e.name,h.type,y),x=O(e.name,h.type,y);P(e.name,h.type,y)&&(s=[]),f=w(e.name,h.type,y).length>0?v:0!==n.length||D?"summary":"".concat(e.name,"-endpoint");var S=Z(e.name,h.type,y),R={};if(E(e.name,h.type,y)){var k=w(e.name,h.type,y).find((function(e){return!e.name})),N=M(h.fields,v);f=k.nextStep?k.nextStep:0!==n.length||D||x?"summary":"".concat(e.name,"-endpoint"),R=g(g({},k),{},{fields:[].concat(r()(s),r()(z([].concat(r()(k.fields),r()(N)),e.name,h.type,y)))})}return g({name:"".concat(e.name,"-").concat(t.id),title:l().createElement(p.Z,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:[].concat(r()(s),r()(C(e.name,h.type,y)),r()(z(j(h.fields,S),e.name,h.type,y))),nextStep:f},R)}(e,t,i,n))})),e.schema.authentication.forEach((function(n){var i=w(e.name,n.type);i.length>0&&a.push.apply(a,r()(S(i,e.name,n.type,o,n.fields))),t.forEach((function(t){var i=w(e.name,n.type,t.name);i.length>0&&a.push.apply(a,r()(S(i,e.name,n.type,o,n.fields,t.name)))}))})),o&&a.push(x(e.schema.endpoint,e.name))})),a}},76690:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(80150),r=n.n(a),i=n(45697),o=n.n(i),c=n(44012),s=n(47173),u=n(9947),l=n(38424),p=n(75106),d=n(35293),m=n(52643),f=n(60485),h=n(43047),y=function(e){var t=e.onClose,n=e.returnButtonTitle,a=e.message,i=e.title,o=e.customText,c=e.primaryAction,s=e.secondaryActions,y=e.Component;return r().createElement(m.b,null,r().createElement(u.u,{variant:u.I.full,className:"pf-u-mt-4xl"},r().createElement(l.k,{icon:h.ZP,color:"var(--pf-global--danger-color--100)",className:"pf-u-mb-0"}),r().createElement(f.D,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},i),r().createElement(p.B,{className:"ins-c-sources__wizard--step-text"},a||o),r().createElement(y,{variant:"primary",onClick:c||t},n),s&&r().createElement(d.i,{className:"pf-u-mt-sm"},s)))};y.propTypes={onClose:o().func.isRequired,returnButtonTitle:o().node,message:o().node,title:o().node,customText:o().node,primaryAction:o().func,secondaryActions:o().node,Component:o().elementType},y.defaultProps={title:r().createElement(c.Z,{id:"wizard.unsuccConfiguration",defaultMessage:"Something went wrong"}),customText:r().createElement(c.Z,{id:"wizard.errorText",defaultMessage:"There was a problem while trying to add your source. Please try again. If the error persists, open a support case."}),Component:s.zx};const v=y},97864:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(80150),r=n.n(a),i=n(45697),o=n.n(i),c=n(44012),s=n(47173),u=n(9947),l=n(38424),p=n(75106),d=n(35293),m=n(52643),f=n(60485),h=n(2372),y=function(e){var t=e.onClose,n=e.customText,a=e.cancelTitle,i=e.description;return r().createElement(m.b,null,r().createElement(u.u,{variant:u.I.full,className:"pf-u-mt-4xl"},r().createElement(l.k,{icon:h.$,className:"pf-u-mb-0"}),r().createElement(f.D,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},n),i&&r().createElement(p.B,{className:"ins-c-sources__wizard--step-text"},i),t&&r().createElement(d.i,{className:"pf-u-mt-xl"},r().createElement(s.zx,{variant:"link",onClick:t},a))))};y.propTypes={onClose:o().func,customText:o().node,cancelTitle:o().node,description:o().node},y.defaultProps={customText:r().createElement(c.Z,{id:"wizard.loadingText",defaultMessage:"Loading, please wait."}),cancelTitle:r().createElement(c.Z,{id:"wizard.cancelText",defaultMessage:"Cancel"})};const v=y},8772:(e,t,n)=>{"use strict";n.d(t,{h:()=>u});var a=n(59713),r=n.n(a),i=n(57061),o=function(e,t){return new Promise((function(n){setTimeout(n.bind(null,t),e)}))};function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"getApplication",r=arguments.length>4?arguments[4]:void 0;return new Promise((function(c,u){var l=Date.now();return function c(){return(0,i.Rj)()[a](e).then((function(e){if(Date.now()-l>=t)return r?s(s({},e),{},{availability_status:null,availability_status_error:null}):e;if("available"===e.availability_status||"unavailable"===e.availability_status){if(r&&new Date(e.last_checked_at||e.updated_at)>r)return e;if(!r)return e}return o(n).then((function(){return c()}))}))}().then((function(e){return c(e)})).catch((function(e){return u(e)}))}))}},34686:(e,t,n)=>{"use strict";n.d(t,{Z:()=>he,x:()=>me});var a=n(59713),r=n.n(a),i=n(67154),o=n.n(i),c=n(80150),s=n.n(c),u=n(97593),l=n(87242),p=n(24154),d=n(90516),m=n(81554),f=n(83862),h=n(6479),y=n.n(h),v=n(319),g=n.n(v),b=n(45697),w=n.n(b),E=n(44012),_=n(86896),O=n(69174),Z=n(43547),T=n(91921),M=n(3025),P=n(58844),j=n(10550),z=n(27361),D=n.n(z),C=n(99584),x=n(96951),S=n(47173),R=n(37377),k=function(e){var t=e.label,n=e.value,a=(0,_.Z)();return s().createElement(R.J,{headerContent:t,bodyContent:n,position:"top",maxWidth:"80%"},s().createElement(S.zx,{variant:"link",isInline:!0,className:"ins-c-sources__wizard--summary-buttonss"},a.formatMessage({id:"wizard.showMore",defaultMessage:"Show more"})))};k.propTypes={label:w().node,value:w().node};const N=k;var A=n(58860),q=n(48897),F=n(57210),I=function(e){var t=e.term,n=e.description,a=y()(e,["term","description"]);return s().createElement(P.g,a,s().createElement(j.M,null,t),s().createElement(M.b,null,n))};I.propTypes={term:w().node,description:w().node};var K=function(e){var t,n,a,r,i=e.sourceTypes,o=e.applicationTypes,c=e.showApp,u=e.showAuthType,l=(0,A.Z)(),p=(0,_.Z)(),d=l.getState().values,m=i.find((function(e){return e.name===d.source_type||e.id===d.source.source_type_id})),f=d.authentication&&d.authentication.authtype?d.authentication.authtype:d.auth_select,h=[];f&&(a=m.schema.authentication.find((function(e){return e.type===f})),h=a&&a.fields?a.fields:[]),"account_authorization"===d.source.app_creation_workflow&&(r=d.applications.map((function(e){var t;return null===(t=o.find((function(t){return t.id===e})))||void 0===t?void 0:t.display_name})));var y=(d.application?o.find((function(e){return e.id===d.application.application_type_id})):void 0)||{},v=y.display_name,b=void 0===v?p.formatMessage({id:"wizard.notSelected",defaultMessage:"Not selected"}):v,w=y.name,M=y.id,P=(0,x.QW)(m.name,f,w),j=m.schema.endpoint.fields;P&&(j=[],h=h.filter((function(e){return!e.name.includes("authentication.")})));var z=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic",a=arguments.length>3?arguments[3]:void 0;return[].concat(g()(D()(C.Z,[e,"authentication",t,n,"includeStepKeyFields"],[])),g()(D()(C.Z,[e,"authentication",t,n,"additionalSteps"],[]).map((function(e){return e.name}))),["".concat(e,"-").concat(t,"-").concat(n,"-additional-step"),"".concat(e,"-").concat(t,"-additional-step"),a?"".concat(e,"-").concat(a):void 0]).filter(Boolean)}(m.name,f,w,M),S=(0,x.Z$)(m.name,f,w),R=D()(C.Z,[m.name,"authentication",f,w,"customSteps"],!1);S.length>0&&(h=S.map((function(e){return[].concat(g()(e.fields),g()(h.filter((function(t){var n=t.stepKey;return n&&e.name===n}))))})).flatMap((function(e){return e})).filter((function(e){var t=e.name;return t.startsWith("application.extra")||h.find((function(e){return e.name===t}))||R&&j.find((function(e){return e.name===t}))}))),R&&(j=[]),h=(0,x.Ow)(h,m.name,f,w||"generic"),j=(0,x.i7)(j,m.name);var k=function(e,t,n){return e.map((function(e){return function(e,t,n){var a=D()(t,e.name);if((!e.stepKey||n.includes(e.stepKey))&&!(e.condition&&D()(t,e.condition.when)!==e.condition.is||e.hideField))return a&&"password"===e.type&&(a="●●●●●●●●●●●●"),"boolean"==typeof a&&(a=a?s().createElement(O._,{color:"green"},s().createElement(E.Z,{id:"wizard.enabled",defaultMessage:"Enabled"})):s().createElement(O._,{color:"gray"},s().createElement(E.Z,{id:"wizard.disabled",defaultMessage:"Disabled"}))),!a&&"authentication.password"===e.name&&D()(t,"authentication.id")&&(a="●●●●●●●●●●●●"),{label:e["aria-label"]||e.label,value:a||"-"}}(e,t,n)})).filter(Boolean)}([].concat(g()(h),g()(j)),d,z).map((function(e){var t=e.label,n=e.value;return s().createElement(I,{key:"".concat(t,"--").concat(n),term:t,description:n.toString().length>150?s().createElement(N,{label:t,value:n}):n})}));return s().createElement(s().Fragment,null,s().createElement(T.o,{isHorizontal:!0,className:"ins-c-sources__wizard--summary-description-list"},s().createElement(I,{term:p.formatMessage({id:"wizard.name",defaultMessage:"Name"}),description:d.source.name}),s().createElement(I,{term:p.formatMessage({id:"wizard.sourceType",defaultMessage:"Source type"}),description:m.product_name}),c&&d.source.app_creation_workflow&&s().createElement(I,{term:p.formatMessage({id:"wizard.configurationMode",defaultMessage:"Configuration mode"}),description:"account_authorization"===d.source.app_creation_workflow?p.formatMessage({id:"wizard.accountAuth",defaultMessage:"Account authorization"}):p.formatMessage({id:"wizard.manualConfig",defaultMessage:"Manual configuration"})}),c&&"account_authorization"===d.source.app_creation_workflow&&s().createElement(I,{term:p.formatMessage({id:"wizard.applications",defaultMessage:"Applications"}),description:r.length?r.map((function(e){return s().createElement("div",{key:e},e)})):p.formatMessage({id:"none",defaultMessage:"None"})}),c&&"account_authorization"!==d.source.app_creation_workflow&&s().createElement(I,{term:p.formatMessage({id:"wizard.application",defaultMessage:"Application"}),description:b}),!P&&a&&u&&"account_authorization"!==d.source.app_creation_workflow&&(!(null!==(t=d.application)&&void 0!==t&&t.application_type_id)||(null===(n=d.application)||void 0===n?void 0:n.application_type_id)===F.Dt)&&s().createElement(I,{term:p.formatMessage({id:"wizard.authenticationType",defaultMessage:"Authentication type"}),description:a.name}),k),function(e,t,n){return e===q.Qr&&"google"!==t?s().createElement(Z.b,{variant:"info",isInline:!0,title:n.formatMessage({id:"cost.rbacWarningTitle",defaultMessage:"Manage permissions in User Access"})},n.formatMessage({id:"cost.rbacWarningDescription",defaultMessage:"Make sure to manage permissions for this source in custom roles that contain permissions for Cost Management."})):null}(w,m.name,p))};K.propTypes={sourceTypes:w().arrayOf(w().shape({id:w().string.isRequired,name:w().string.isRequired,product_name:w().string.isRequired,schema:w().shape({authentication:w().array,endpoint:w().object})})).isRequired,applicationTypes:w().arrayOf(w().shape({id:w().string.isRequired,name:w().string.isRequired,display_name:w().string.isRequired})).isRequired,showApp:w().bool,showAuthType:w().bool},K.defaultProps={showApp:!0,showAuthType:!0};const B=K;var L=function(e){var t=e.Content,n=y()(e,["Content"]);return s().createElement(t,n)};L.propTypes={Content:w().oneOfType([w().element,w().func]).isRequired};const Q=L;var U=n(63038),G=n.n(U),W=n(59775),H=n(16475),$=n(4649),Y=n(50693),V=n(8785),J=function(e){var t=(0,V.Z)(e),n=t.isRequired,a=t.label,r=t.helperText,i=t.hideLabel,u=t.meta,l=t.input,p=t.options,d=t.mutator,m=t.DefaultIcon,f=t.iconMapper,h=y()(t,["isRequired","label","helperText","hideLabel","meta","input","options","mutator","DefaultIcon","iconMapper"]),v=(0,A.Z)(),b=(0,c.useState)((function(){var e={};return p.forEach((function(t){var n=t.value;return e[n]=f(n,m)})),e})),w=G()(b,1)[0],E=h.isMulti||h.multi,_=h.isDisabled||h.isReadOnly,O=l.value||[],Z=function(e){_||(function(e){E?function(e){l.onChange(O.includes(e)?O.filter((function(t){return t!==e})):[].concat(g()(O),[e]))}(e):function(e){l.onChange(O===e?void 0:e)}(e)}(e),l.onBlur())},T=u.error,M=u.touched&&T;return s().createElement(W.c,{isRequired:n,label:!i&&a,fieldId:l.name,helperText:r,helperTextInvalid:T,validated:M?"error":"default"},s().createElement(Y.r,{hasGutter:!0,className:"pf-u-mb-md"},p.map((function(e){return d(e,v)})).map((function(e){var t=e.value,n=e.label,a=e.isDisabled||_;if(t){var r=w[t];return s().createElement(H.P,{sm:6,md:4,key:t},s().createElement($.n,o()({className:"ins-c-sources__wizard--tile".concat(a?" disabled":""),onClick:function(){return Z(t)},tabIndex:a?-1:0,onKeyPress:function(e){return function(e,t,n){32===e.charCode&&(e.preventDefault(),n(t))}(e,t,Z)},isDisabled:a,title:n,isStacked:!0,isSelected:O.includes(t)},r&&{icon:s().createElement(r,null)})))}}))))};J.propTypes={multi:w().bool,isMulti:w().bool,label:w().node,isRequired:w().bool,helperText:w().node,description:w().node,hideLabel:w().bool,name:w().string.isRequired,mutator:w().func,options:w().array,DefaultIcon:w().oneOfType([w().node,w().func,w().element]),iconMapper:w().func,isDisabled:w().bool,isReadOnly:w().bool},J.defaultProps={options:[],iconMapper:function(e,t){return t},mutator:function(e){return e}};const X=J;var ee=n(92504),te=function(e){var t=(0,V.Z)(e),n=t.label,a=t.input,r=t.authName,i=t.supportedAuthTypes,o=t.disableAuthType,c=a.value===r;return a.value&&i&&!i.includes(a.value)&&a.onChange(void 0),s().createElement(ee.Y,{value:r,isChecked:c,name:a.name,onChange:function(){return a.onChange(r)},label:n,id:"".concat(a.name,"-").concat(r),isDisabled:o})};te.propTypes={label:w().string,authName:w().string.isRequired,disableAuthType:w().bool,supportedAuthTypes:w().arrayOf(w().string)},te.defaultProps={disableAuthType:!1};const ne=te;function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie=n(38883),oe=function(e){var t=e.options,n=e.mutator,a=y()(e,["options","mutator"]),r=(0,A.Z)(),i=r.getState().values,u=i.source_type,l=D()(i,a.name),p=t.map((function(e){return n(e,r)})).filter(Boolean);return(0,c.useEffect)((function(){!u||l&&p.map((function(e){return e.value})).includes(l)||1!==p.filter((function(e){return e.value&&e.value!==F.Dt})).length?p.map((function(e){return e.value})).includes(l)||r.change(a.name,F.Dt):r.change(a.name,p[0].value)}),[u]),s().createElement(ie.Z,o()({},a,{options:p,FormGroupProps:{className:"ins-c-sources__wizard--radio"}}))};oe.propTypes={mutator:w().func.isRequired,options:w().array,name:w().string};const ce=oe;var se=n(13946),ue=n(49739),le=n(83826);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me={"auth-select":ne,description:Q,"card-select":X,summary:B,authentication:function(e){var t=(0,_.Z)(),n=(0,A.Z)().getState().values.authentication,a=e.validate&&e.validate.filter((function(e){return e.type!==p.Z.REQUIRED})),r=re(re({},e),n&&n.id?{isRequired:!1,helperText:t.formatMessage({id:"wizard.changeAuthHelper",defaultMessage:"Changing this resets your current {label}."},{label:e.label}),validate:a}:{}),i=f.ZP[l.Z.TEXT_FIELD];return s().createElement(i,r)},"enhanced-radio":ce,"switch-group":function(e){var t=(0,V.Z)(e),n=t.label,a=t.input,r=t.options,i=t.applicationTypes,o=(0,(0,A.Z)().getState)().values.source_type,u=i.filter((function(e){return e.supported_source_types.includes(o)})).map((function(e){return e.id})),l=r.filter((function(e){var t=e.value;return u.includes(t)}));return(0,c.useEffect)((function(){a.value||a.onChange(l.map((function(e){return e.value})).filter(Boolean))}),[]),s().createElement(W.c,{label:n,fieldId:a.name},s().createElement(ue.K,{hasGutter:!0},l.map((function(e){return s().createElement(le.v,{key:e.value},s().createElement(se.r,{label:e.label,onChange:function(t){return function(e,t){return e?a.onChange([].concat(g()(a.value),[t])):a.onChange(a.value.filter((function(e){return e!==t})))}(t,e.value)},isChecked:a.value.includes(e.value),id:e.value}),e.description&&s().createElement("div",{className:"pf-c-switch pf-u-mt-sm"},s().createElement("span",{className:"pf-c-switch__toggle ins-c-sources__wizard--hide-me"}),s().createElement("div",{className:"pf-c-switch__label ins-c-sources__wizard--switch-description"},e.description)))}))))}},fe=function(e){return s().createElement(m.ZP,o()({},e,{showFormControls:!1}))};const he=function(e){return s().createElement(u.Z,o()({componentMapper:de(de(de({},f.ZP),me),{},{"switch-field":f.ZP[l.Z.SWITCH]}),validatorMapper:{"required-validator":d.Z[p.Z.REQUIRED],"pattern-validator":d.Z[p.Z.PATTERN],"min-length-validator":d.Z[p.Z.MIN_LENGTH],"url-validator":d.Z[p.Z.URL]},FormTemplate:fe,subscription:{values:!0}},e))}},9481:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(80150),r=n.n(a),i=n(45697),o=n.n(i),c=n(86896),s=n(2372),u=n(87828),l=n(25607),p=function(e){var t=e.validating,n=(0,c.Z)();return r().createElement(u.Q,{isHidden:!t},r().createElement(s.$,{size:"md",className:"pf-u-mr-md"}),n.formatMessage({id:"wizard.validating",defaultMessage:"Validating"}))};p.propTypes={validating:o().bool.isRequired};const d=function(e,t){var n=t.meta;return n.validating?{helperText:r().createElement(l.Z,null,(function(e){var t=e.validating;return r().createElement(p,{validating:t})}))}:n.valid?{validated:"success",FormGroupProps:{validated:"success"}}:{}}},93323:(e,t,n)=>{"use strict";n.d(t,{n:()=>r,Z:()=>i});var a=n(45857),r=function(e){return(0,a.Rj)().checkAvailabilitySource(e).catch((function(){}))};const i=r},56855:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=function(e){return"account_authorization"===e.app_creation_workflow}}}]);
//# sourceMappingURL=6887.1c2766843adb24e8eb31.js.map