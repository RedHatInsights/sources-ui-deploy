(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[9198],{91447:(e,t,n)=>{"use strict";n.d(t,{n:()=>r,Z:()=>i});var a=n(79829),r=function(e){return(0,a.Rj)().checkAvailabilitySource(e).catch((function(){}))};const i=r},72810:(e,t,n)=>{"use strict";n.d(t,{h:()=>u});var a=n(96156),r=n(79829),i=function(e,t){return new Promise((function(n){setTimeout(n.bind(null,t),e)}))};function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"showApplication",o=arguments.length>4?arguments[4]:void 0;return new Promise((function(u,s){var l=Date.now();return function u(){return(0,r.Rj)()[a](e).then((function(e){if(Date.now()-l>=t)return o?c(c({},e),{},{availability_status:null,availability_status_error:null}):e;if("available"===e.availability_status||"unavailable"===e.availability_status){if(o&&new Date(e.last_checked_at||e.updated_at)>o)return e;if(!o)return e}return i(n).then((function(){return u()}))}))}().then((function(e){return u(e)})).catch((function(e){return s(e)}))}))}},32600:(e,t,n)=>{"use strict";n.d(t,{Z$:()=>g,pD:()=>b,QW:()=>Z,G$:()=>w,gF:()=>E,zi:()=>O,GN:()=>T,sM:()=>M,Ow:()=>S,i7:()=>j,YD:()=>P,TC:()=>D,YV:()=>z,dD:()=>x});var a=n(85061),r=n(96156),i=n(81253),o=n(92950),c=n.n(o),u=n(44012),s=n(96354),l=n(64124),p=n(30411),d=n(27361),m=n.n(d),f=n(42812);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e,t,n){return m()(p.Z,[e,"authentication",t,n],void 0)},g=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"additionalSteps"],[])},b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"skipSelection"],!1)},Z=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"skipEndpoint"],!1)},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"customSteps"],!1)},E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"includeStepKeyFields"],[])},_=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"onlyHiddenFields"],!1)},O=function(e,t){return e.filter((function(e){return e.stepKey===t})).map((function(e){return e.stepKey,(0,i.Z)(e,["stepKey"])}))},T=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"useApplicationAuth"],!1)},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.filter((function(e){return!e.stepKey||t.includes(e.stepKey)}))},S=function(e,t,n,a){return e.map((function(e){var r=m()(p.Z,[t,"authentication",n,a]),i=r?m()(r,e.name):m()(p.Z,[t,"authentication",n,"generic",e.name]),o=i?y(y({},e),i):e;return"authentication.password"===o.name&&(o.component="authentication"),o}))},j=function(e,t){return e.map((function(e){var n=m()(p.Z,[t,"endpoint",e.name]);return n?y(y({},e),n):e}))},P=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"additionalFields"],[])},D=function(e,t){return y(y({},e),{},{fields:[].concat((0,a.Z)((n=t,m()(p.Z,[n,"endpoint","additionalFields"],[]))),(0,a.Z)(j(e.fields,t))),name:"".concat(t,"-endpoint"),nextStep:"summary"});var n},z=function(e,t,n,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"generic";return e.map((function(e){var c=e.name||"".concat(t,"-").concat(n,"-").concat(o,"-additional-step"),u=Z(t,n,o),s=w(t,n,o);return y(y({name:c,nextStep:!r||u||s?"summary":"".concat(t,"-endpoint")},e),{},{fields:[].concat((0,a.Z)(S(e.fields,t,n,o)),(0,a.Z)(S(O(i,c),t,n,o)))})}))},x=function(e,t,n){var r=[];return e.forEach((function(e){var i=e.schema.endpoint.hidden?e.schema.endpoint.fields:[],o=0===i.length;r.push(function(e,t,n){var r=e.schema.authentication,i=r.length>1,o=(0,a.Z)(t),p={};if(i)return o=[],r.forEach((function(r){var i=E(e.name,r.type),c=Z(e.name,r.type,"generic"),u=_(e.name,r.type),d=u?r.fields.filter((function(e){return e.hideField})):r.fields;o.push({component:"auth-select",name:"auth_select",label:r.name,authName:r.type,validate:[{type:l.Z.REQUIRED}],disableAuthType:n}),o.push({component:s.Z.SUB_FORM,name:"".concat(r.type,"-subform"),className:"pf-u-pl-md",fields:[].concat((0,a.Z)(T(e.name,r.type)?[]:t),(0,a.Z)(P(e.name,r.type)),(0,a.Z)(S(M(d,i),e.name,r.type))),condition:{when:"auth_select",is:r.type},hideField:u}),p[r.type]=g(e.name,r.type).length>0?"".concat(e.name,"-").concat(r.type,"-generic-additional-step"):0!==t.length||c?"summary":"".concat(e.name,"-endpoint")})),{name:e.name,title:c().createElement(u.Z,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:o,nextStep:{when:"auth_select",stepMapper:p}};var d=r[0],m="".concat(e.name,"-").concat(d.type,"-generic-additional-step"),f=Z(e.name,d.type,"generic"),h=g(e.name,d.type).length>0?m:0!==t.length||f?"summary":"".concat(e.name,"-endpoint"),v=E(e.name,d.type),w=b(e.name,d.type),j={};if(T(e.name,d.type)&&(o=[]),w){var D=g(e.name,d.type).find((function(e){return!e.name})),z=O(d.fields,m);j=y(y({},D),{},{fields:[].concat((0,a.Z)(o),(0,a.Z)(S([].concat((0,a.Z)(D.fields),(0,a.Z)(z)),e.name,d.type)))})}return y({name:e.name,title:c().createElement(u.Z,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:[].concat((0,a.Z)(o),(0,a.Z)(P(e.name,d.type)),(0,a.Z)(S(M(d.fields,v),e.name,d.type))),nextStep:h},j)}(e,i,n)),t.forEach((function(t){t.supported_source_types.includes(e.name)&&r.push(function(e,t,n,r){var i=e.schema.authentication,o=t.supported_authentication_types[e.name]||[f.Z.type],p=o.length>1,d=(0,a.Z)(n),m={};if(p)return d=[],i.filter((function(e){var t=e.type;return o.includes(t)})).forEach((function(i){var o,c=v(e.name,i.type,t.name)?t.name:"generic",u=Z(e.name,i.type,c),p=w(e.name,i.type,c);o=g(e.name,i.type,t.name).length>0?"".concat(e.name,"-").concat(i.type,"-").concat(t.name,"-additional-step"):0!==n.length||u||p?"summary":"".concat(e.name,"-endpoint");var f=E(e.name,i.type,c),h=_(e.name,i.type,c),y=h?i.fields.filter((function(e){return e.hideField})):i.fields;d.push({component:"auth-select",name:"auth_select",label:i.name,authName:i.type,validate:[{type:l.Z.REQUIRED}],supportedAuthTypes:t.supported_authentication_types[e.name],disableAuthType:r}),d.push({component:s.Z.SUB_FORM,name:"".concat(i.type,"-subform"),className:"pf-u-pl-md",fields:[].concat((0,a.Z)(T(e.name,i.type,c)?[]:n),(0,a.Z)(P(e.name,i.type,c)),(0,a.Z)(S(M(y,f),e.name,i.type,c))),condition:{when:"auth_select",is:i.type},hideField:h}),m[i.type]=o})),{name:"".concat(e.name,"-").concat(t.id),title:c().createElement(u.Z,{id:"wizard.chooseAuthType",defaultMessage:"Choose authentication type"}),fields:d,nextStep:{when:"auth_select",stepMapper:m}};var h,j=[f.Z].concat((0,a.Z)(i)).find((function(e){var t=e.type;return o.includes(t)})),D=v(e.name,j.type,t.name)?t.name:"generic",z="".concat(e.name,"-").concat(j.type,"-").concat(t.name,"-additional-step"),x=Z(e.name,j.type,D),C=w(e.name,j.type,D);T(e.name,j.type,D)&&(d=[]),h=g(e.name,j.type,D).length>0?z:0!==n.length||x?"summary":"".concat(e.name,"-endpoint");var k=E(e.name,j.type,D),R={};if(b(e.name,j.type,D)){var A=g(e.name,j.type,D).find((function(e){return!e.name})),N=O(j.fields,z);h=A.nextStep?A.nextStep:0!==n.length||x||C?"summary":"".concat(e.name,"-endpoint"),R=y(y({},A),{},{fields:[].concat((0,a.Z)(d),(0,a.Z)(S([].concat((0,a.Z)(A.fields),(0,a.Z)(N)),e.name,j.type,D)))})}return y({name:"".concat(e.name,"-").concat(t.id),title:c().createElement(u.Z,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:[].concat((0,a.Z)(d),(0,a.Z)(P(e.name,j.type,D)),(0,a.Z)(S(M(j.fields,k),e.name,j.type,D))),nextStep:h},R)}(e,t,i,n))}));var p=e.schema.authentication;(function(e,t){return t.some((function(t){var n=t.supported_source_types,a=t.supported_authentication_types;return n.includes(e.name)&&(!a[e.name]||0===!a[e.name].length)}))})(e,t)&&p.push(f.Z),p.forEach((function(n){var i=g(e.name,n.type);i.length>0&&r.push.apply(r,(0,a.Z)(z(i,e.name,n.type,o,n.fields))),t.forEach((function(t){var i=g(e.name,n.type,t.name);i.length>0&&r.push.apply(r,(0,a.Z)(z(i,e.name,n.type,o,n.fields,t.name)))}))})),o&&r.push(D(e.schema.endpoint,e.name))})),r}},79433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(92950),r=n.n(a),i=n(45697),o=n.n(i),c=n(44012),u=n(30586),s=n(43047),l=function(e){var t=e.onClose,n=e.returnButtonTitle,a=e.message,i=e.title,o=e.customText,c=e.primaryAction,l=e.secondaryActions,p=e.Component;return r().createElement(u.Bullseye,null,r().createElement(u.EmptyState,{variant:u.EmptyStateVariant.full,className:"pf-u-mt-4xl"},r().createElement(u.EmptyStateIcon,{icon:s.ZP,color:"var(--pf-global--danger-color--100)",className:"pf-u-mb-0"}),r().createElement(u.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},i),r().createElement(u.EmptyStateBody,{className:"ins-c-sources__wizard--step-text"},a||o),r().createElement(p,{variant:"primary",onClick:c||t},n),l&&r().createElement(u.EmptyStateSecondaryActions,{className:"pf-u-mt-sm"},l)))};l.propTypes={onClose:o().func.isRequired,returnButtonTitle:o().node,message:o().node,title:o().node,customText:o().node,primaryAction:o().func,secondaryActions:o().node,Component:o().elementType},l.defaultProps={title:r().createElement(c.Z,{id:"wizard.unsuccConfiguration",defaultMessage:"Something went wrong"}),customText:r().createElement(c.Z,{id:"wizard.errorText",defaultMessage:"There was a problem while trying to add your source. Please try again. If the error persists, open a support case."}),Component:u.Button};const p=l},52893:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(92950),r=n.n(a),i=n(45697),o=n.n(i),c=n(44012),u=n(30586),s=function(e){var t=e.onClose,n=e.customText,a=e.cancelTitle,i=e.description;return r().createElement(u.Bullseye,null,r().createElement(u.EmptyState,{variant:u.EmptyStateVariant.full,className:"pf-u-mt-4xl"},r().createElement(u.EmptyStateIcon,{icon:u.Spinner,className:"pf-u-mb-0"}),r().createElement(u.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},n),i&&r().createElement(u.EmptyStateBody,{className:"ins-c-sources__wizard--step-text"},i),t&&r().createElement(u.EmptyStateSecondaryActions,{className:"pf-u-mt-xl"},r().createElement(u.Button,{variant:"link",onClick:t},a))))};s.propTypes={onClose:o().func,customText:o().node,cancelTitle:o().node,description:o().node},s.defaultProps={customText:r().createElement(c.Z,{id:"wizard.loadingText",defaultMessage:"Loading, please wait."}),cancelTitle:r().createElement(c.Z,{id:"wizard.cancelText",defaultMessage:"Cancel"})};const l=s},90280:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Y});var a=n(22122),r=n(96156),i=n(81253),o=n(92950),c=n.n(o),u=n(45697),s=n.n(u),l=n(85975),p=n(67850),d=n(6812),m=n(28481),f=n(27361),h=n.n(f),y=n(30586),v=n(65412),g=n(48880),b=n(64124),Z=n(36680);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=n(85061),O=n(44012),T=n(86896),M=function(e){var t=e.label,n=e.value,a=(0,T.Z)();return c().createElement(y.Popover,{headerContent:t,bodyContent:n,position:"top",maxWidth:"80%"},c().createElement(y.Button,{variant:"link",isInline:!0,className:"ins-c-sources__wizard--summary-buttonss"},a.formatMessage({id:"wizard.showMore",defaultMessage:"Show more"})))};M.propTypes={label:s().node,value:s().node};const S=M;var j=n(30411),P=n(84866),D=n(72317),z=n(32600),x=function(e){var t=e.term,n=e.description,a=(0,i.Z)(e,["term","description"]);return c().createElement(y.DescriptionListGroup,a,c().createElement(y.DescriptionListTerm,null,t),c().createElement(y.DescriptionListDescription,null,n))};x.propTypes={term:s().node,description:s().node};var C=function(e){var t,n,a,r,i=e.sourceTypes,o=e.applicationTypes,u=e.showApp,s=e.showAuthType,l=(0,g.default)(),p=(0,T.Z)(),d=l.getState().values,m=i.find((function(e){return e.name===d.source_type||e.id===d.source.source_type_id})),f=d.authentication&&d.authentication.authtype?d.authentication.authtype:d.auth_select,v=[];f&&(a=m.schema.authentication.find((function(e){return e.type===f})),v=a&&a.fields?a.fields:[]),"account_authorization"===d.source.app_creation_workflow&&(r=d.applications.map((function(e){var t;return null===(t=o.find((function(t){return t.id===e})))||void 0===t?void 0:t.display_name})));var b=(d.application?o.find((function(e){return e.id===d.application.application_type_id})):void 0)||{},Z=b.display_name,w=void 0===Z?p.formatMessage({id:"wizard.notSelected",defaultMessage:"Not selected"}):Z,E=b.name,M=b.id,C=(0,z.QW)(m.name,f,E),k=m.schema.endpoint.fields;C&&(k=[],v=v.filter((function(e){return!e.name.includes("authentication.")})));var R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic",a=arguments.length>3?arguments[3]:void 0;return[].concat((0,_.Z)(h()(j.Z,[e,"authentication",t,n,"includeStepKeyFields"],[])),(0,_.Z)(h()(j.Z,[e,"authentication",t,n,"additionalSteps"],[]).map((function(e){return e.name}))),["".concat(e,"-").concat(t,"-").concat(n,"-additional-step"),"".concat(e,"-").concat(t,"-additional-step"),a?"".concat(e,"-").concat(a):void 0]).filter(Boolean)}(m.name,f,E,M),A=(0,z.Z$)(m.name,f,E),N=h()(j.Z,[m.name,"authentication",f,E,"customSteps"],!1);A.length>0&&(v=A.map((function(e){return[].concat((0,_.Z)(e.fields),(0,_.Z)(v.filter((function(t){var n=t.stepKey;return n&&e.name===n}))))})).flatMap((function(e){return e})).filter((function(e){var t=e.name;return t.startsWith("application.extra")||v.find((function(e){return e.name===t}))||N&&k.find((function(e){return e.name===t}))}))),N&&(k=[]),v=(0,z.Ow)(v,m.name,f,E||"generic"),k=(0,z.i7)(k,m.name);var F=function(e,t,n){return e.map((function(e){return function(e,t,n){var a=h()(t,e.name);if((!e.stepKey||n.includes(e.stepKey))&&!(e.condition&&h()(t,e.condition.when)!==e.condition.is||e.hideField))return a&&"password"===e.type&&(a="●●●●●●●●●●●●"),"boolean"==typeof a&&(a=a?c().createElement(y.Label,{color:"green"},c().createElement(O.Z,{id:"wizard.enabled",defaultMessage:"Enabled"})):c().createElement(y.Label,{color:"gray"},c().createElement(O.Z,{id:"wizard.disabled",defaultMessage:"Disabled"}))),!a&&"authentication.password"===e.name&&h()(t,"authentication.id")&&(a="●●●●●●●●●●●●"),{label:e["aria-label"]||e.label,value:a||"-"}}(e,t,n)})).filter(Boolean)}([].concat((0,_.Z)(v),(0,_.Z)(k)),d,R).map((function(e){var t=e.label,n=e.value;return c().createElement(x,{key:"".concat(t,"--").concat(n),term:t,description:n.toString().length>150?c().createElement(S,{label:t,value:n}):n})}));return c().createElement(c().Fragment,null,c().createElement(y.DescriptionList,{isHorizontal:!0,className:"ins-c-sources__wizard--summary-description-list"},c().createElement(x,{term:p.formatMessage({id:"wizard.name",defaultMessage:"Name"}),description:d.source.name}),c().createElement(x,{term:p.formatMessage({id:"wizard.sourceType",defaultMessage:"Source type"}),description:m.product_name}),u&&d.source.app_creation_workflow&&c().createElement(x,{term:p.formatMessage({id:"wizard.configurationMode",defaultMessage:"Configuration mode"}),description:"account_authorization"===d.source.app_creation_workflow?p.formatMessage({id:"wizard.accountAuth",defaultMessage:"Account authorization"}):p.formatMessage({id:"wizard.manualConfig",defaultMessage:"Manual configuration"})}),u&&"account_authorization"===d.source.app_creation_workflow&&c().createElement(x,{term:p.formatMessage({id:"wizard.applications",defaultMessage:"Applications"}),description:r.length?r.map((function(e){return c().createElement("div",{key:e},e)})):p.formatMessage({id:"none",defaultMessage:"None"})}),u&&"account_authorization"!==d.source.app_creation_workflow&&c().createElement(x,{term:p.formatMessage({id:"wizard.application",defaultMessage:"Application"}),description:w}),!C&&a&&s&&"account_authorization"!==d.source.app_creation_workflow&&(!(null!==(t=d.application)&&void 0!==t&&t.application_type_id)||(null===(n=d.application)||void 0===n?void 0:n.application_type_id)===D.Dt)&&c().createElement(x,{term:p.formatMessage({id:"wizard.authenticationType",defaultMessage:"Authentication type"}),description:a.name}),F),function(e,t,n){return e===P.Qr&&"google"!==t?c().createElement(y.Alert,{variant:"info",isInline:!0,title:n.formatMessage({id:"cost.rbacWarningTitle",defaultMessage:"Manage permissions in User Access"})},n.formatMessage({id:"cost.rbacWarningDescription",defaultMessage:"Make sure to manage permissions for this source in custom roles that contain permissions for Cost Management."})):e===P.fn&&"azure"===t?c().createElement(y.Alert,{variant:"info",isInline:!0,title:n.formatMessage({id:"azure.rhelWarningTitle",defaultMessage:"This source will not be monitored in Sources"})},n.formatMessage({id:"azure.rhelWarningDescription",defaultMessage:"This source will be represented in the Sources list, but will not reflect true status or resources."})):null}(E,m.name,p))};C.propTypes={sourceTypes:s().arrayOf(s().shape({id:s().string.isRequired,name:s().string.isRequired,product_name:s().string.isRequired,schema:s().shape({authentication:s().array,endpoint:s().object})})).isRequired,applicationTypes:s().arrayOf(s().shape({id:s().string.isRequired,name:s().string.isRequired,display_name:s().string.isRequired})).isRequired,showApp:s().bool,showAuthType:s().bool},C.defaultProps={showApp:!0,showAuthType:!0};const k=C;var R=function(e){var t=e.Content,n=(0,i.Z)(e,["Content"]);return c().createElement(t,n)};R.propTypes={Content:s().oneOfType([s().element,s().func]).isRequired};const A=R;var N=n(41693),F=function(e){var t=(0,N.Z)(e),n=t.isRequired,r=t.label,u=t.helperText,s=t.hideLabel,l=t.meta,p=t.input,d=t.options,f=t.mutator,h=t.DefaultIcon,v=t.iconMapper,b=(0,i.Z)(t,["isRequired","label","helperText","hideLabel","meta","input","options","mutator","DefaultIcon","iconMapper"]),Z=(0,g.default)(),w=(0,o.useState)((function(){var e={};return d.forEach((function(t){var n=t.value;return e[n]=v(n,h)})),e})),E=(0,m.Z)(w,1)[0],O=b.isMulti||b.multi,T=b.isDisabled||b.isReadOnly,M=p.value||[],S=function(e){T||(function(e){O?function(e){p.onChange(M.includes(e)?M.filter((function(t){return t!==e})):[].concat((0,_.Z)(M),[e]))}(e):function(e){p.onChange(M===e?void 0:e)}(e)}(e),p.onBlur())},j=l.error,P=l.touched&&j;return c().createElement(y.FormGroup,{isRequired:n,label:!s&&r,fieldId:p.name,helperText:u,helperTextInvalid:j,validated:P?"error":"default"},c().createElement(y.Grid,{hasGutter:!0,className:"pf-u-mb-md"},d.map((function(e){return f(e,Z)})).map((function(e){var t=e.value,n=e.label,r=e.isDisabled||T;if(t){var i=E[t];return c().createElement(y.GridItem,{sm:6,md:4,key:t},c().createElement(y.Tile,(0,a.Z)({className:"ins-c-sources__wizard--tile".concat(r?" disabled":""),onClick:function(){return S(t)},tabIndex:r?-1:0,onKeyPress:function(e){return function(e,t,n){32===e.charCode&&(e.preventDefault(),n(t))}(e,t,S)},isDisabled:r,title:n,isStacked:!0,isSelected:M.includes(t)},i&&{icon:c().createElement(i,null)})))}}))))};F.propTypes={multi:s().bool,isMulti:s().bool,label:s().node,isRequired:s().bool,helperText:s().node,description:s().node,hideLabel:s().bool,name:s().string.isRequired,mutator:s().func,options:s().array,DefaultIcon:s().oneOfType([s().node,s().func,s().element]),iconMapper:s().func,isDisabled:s().bool,isReadOnly:s().bool},F.defaultProps={options:[],iconMapper:function(e,t){return t},mutator:function(e){return e}};const I=F;var q=function(e){var t=(0,N.Z)(e),n=t.label,a=t.input,r=t.authName,i=t.supportedAuthTypes,o=t.disableAuthType,u=a.value===r;return a.value&&i&&!i.includes(a.value)&&a.onChange(void 0),c().createElement(y.Radio,{value:r,isChecked:u,name:a.name,onChange:function(){return a.onChange(r)},label:n,id:"".concat(a.name,"-").concat(r),isDisabled:o})};q.propTypes={label:s().string,authName:s().string.isRequired,disableAuthType:s().bool,supportedAuthTypes:s().arrayOf(s().string)},q.defaultProps={disableAuthType:!1};const B=q;var G=n(41626),L=function(e){var t=e.options,n=e.mutator,r=(0,i.Z)(e,["options","mutator"]),u=(0,g.default)(),s=u.getState().values,l=s.source_type,p=h()(s,r.name),d=t.map((function(e){return n(e,u)})).filter(Boolean);return(0,o.useEffect)((function(){!l||p&&d.map((function(e){return e.value})).includes(p)||1!==d.filter((function(e){return e.value&&e.value!==D.Dt})).length?d.map((function(e){return e.value})).includes(p)||u.change(r.name,D.Dt):u.change(r.name,d[0].value)}),[l]),c().createElement(G.Z,(0,a.Z)({},r,{options:d,FormGroupProps:{className:"ins-c-sources__wizard--radio"}}))};L.propTypes={mutator:s().func.isRequired,options:s().array,name:s().string};const K=L;var W=n(69385),Q=function(e){var t=e.Icon,n=(0,i.Z)(e,["Icon"]),r=(0,o.useRef)();return c().createElement("div",{className:"ins-c-sources__checkbox-with-icon"},c().createElement(W.Z,(0,a.Z)({},n,{type:"checkbox"})),c().createElement("span",{ref:r},c().createElement(t,{appendTo:r.current})))};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Q.propTypes={Icon:s().elementType.isRequired};var V={"auth-select":B,description:A,"card-select":I,summary:k,"enhanced-radio":K,"switch-group":function(e){var t=(0,N.Z)(e),n=t.label,a=t.input,r=t.options,i=t.applicationTypes,u=(0,(0,g.default)().getState)().values.source_type,s=i.filter((function(e){return e.supported_source_types.includes(u)})).map((function(e){return e.id})),l=r.filter((function(e){var t=e.value;return s.includes(t)}));return(0,o.useEffect)((function(){a.value||a.onChange(l.map((function(e){return e.value})).filter(Boolean))}),[]),c().createElement(y.FormGroup,{label:n,fieldId:a.name},c().createElement(y.Stack,{hasGutter:!0},l.map((function(e){return c().createElement(y.StackItem,{key:e.value},c().createElement(y.Switch,{label:e.label,onChange:function(t){return function(e,t){return e?a.onChange([].concat((0,_.Z)(a.value),[t])):a.onChange(a.value.filter((function(e){return e!==t})))}(t,e.value)},isChecked:a.value.includes(e.value),id:e.value}),e.description&&c().createElement("div",{className:"pf-c-switch pf-u-mt-sm"},c().createElement("span",{className:"pf-c-switch__toggle ins-c-sources__wizard--hide-me"}),c().createElement("div",{className:"pf-c-switch__label ins-c-sources__wizard--switch-description"},e.description)))}))))},authentication:function(e){var t,n,r=(0,g.default)(),i=r.getState().values,u=(null==e||null===(t=e.name)||void 0===t?void 0:t.match(/\d+/))||[],s=(0,m.Z)(u,1)[0]||(null===(n=i.authentication)||void 0===n?void 0:n.id),l=h()(i,e.name),p=(0,o.useState)(!s||l),d=(0,m.Z)(p,2),f=d[0],w=d[1],_=(0,o.useRef)(!0),O=(0,o.useRef)(!1);(0,o.useEffect)((function(){O.current&&(!_.current&&r.getState().pristine&&(w(!1),_.current=!0),f&&(_.current=!1))})),(0,o.useEffect)((function(){O.current=!0}),[]);var T=e.validate&&e.validate.filter((function(e){return e.type!==b.Z.REQUIRED})),M=E(E({},e),s?{validate:T,resolveProps:Z.Z}:{});return!f&&s?c().createElement(y.FormGroup,{helperText:M.helperText,label:M.label,onFocus:function(){return w(!0)},isRequired:!0},c().createElement(y.TextInput,{"aria-label":"pre-filled-authentication",value:"•••••••••••••"})):c().createElement(v.Z,(0,a.Z)({},M,{autoFocus:!0}))},"checkbox-with-icon":Q},$=function(e){var t=e.componentMapper,n=(0,i.Z)(e,["componentMapper"]);return c().createElement(l.Z,(0,a.Z)({FormTemplate:p.ZP,componentMapper:H(H(H({},d.ZP),V),t)},n))};$.propTypes={componentMapper:s().object};const Y=$},45587:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=function(e){return"account_authorization"===(null==e?void 0:e.app_creation_workflow)}},36680:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(92950),r=n.n(a),i=n(45697),o=n.n(i),c=n(86896),u=n(30586),s=n(76429),l=function(e){var t=e.validating,n=(0,c.Z)();return r().createElement(u.FormHelperText,{isHidden:!t},r().createElement(u.Spinner,{size:"md",className:"pf-u-mr-md"}),n.formatMessage({id:"wizard.validating",defaultMessage:"Validating"}))};l.propTypes={validating:o().bool.isRequired};const p=function(e,t){var n=t.meta;return n.validating?{helperText:r().createElement(s.Z,null,(function(e){var t=e.validating;return r().createElement(l,{validating:t})}))}:n.valid?{validated:"success",FormGroupProps:{validated:"success"}}:{}}}}]);
//# sourceMappingURL=../sourcemaps/9198.c89931a102eb1d4dea46.js.map