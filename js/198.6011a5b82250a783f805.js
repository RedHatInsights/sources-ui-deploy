"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[198],{91447:(e,t,n)=>{n.d(t,{n:()=>r,Z:()=>i});var a=n(79829),r=function(e){return(0,a.Rj)().checkAvailabilitySource(e).catch((function(){}))};const i=r},72810:(e,t,n)=>{n.d(t,{h:()=>u});var a=n(4942),r=n(79829),i=function(e,t){return new Promise((function(n){setTimeout(n.bind(null,t),e)}))};function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"showApplication",o=arguments.length>4?arguments[4]:void 0;return new Promise((function(u,l){var s=Date.now();return function u(){return(0,r.Rj)()[a](e).then((function(e){if(Date.now()-s>=t)return o?c(c({},e),{},{availability_status:null,availability_status_error:null}):e;if("available"===e.availability_status||"unavailable"===e.availability_status){if(o&&new Date(e.last_checked_at||e.updated_at)>o)return e;if(!o)return e}return i(n).then((function(){return u()}))}))}().then((function(e){return u(e)})).catch((function(e){return l(e)}))}))}},32600:(e,t,n)=>{n.d(t,{Z$:()=>b,pD:()=>Z,QW:()=>E,G$:()=>w,gF:()=>O,zi:()=>T,GN:()=>M,sM:()=>S,Ow:()=>j,i7:()=>P,YD:()=>D,TC:()=>x,YV:()=>z,dD:()=>C});var a=n(93433),r=n(4942),i=n(45987),o=n(92950),c=n.n(o),u=n(44012),l=n(96354),s=n(64124),p=n(30411),d=n(27361),m=n.n(d),f=n(42812),h=["stepKey"];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e,t,n){return m()(p.Z,[e,"authentication",t,n],void 0)},b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"additionalSteps"],[])},Z=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"skipSelection"],!1)},E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"skipEndpoint"],!1)},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"customSteps"],!1)},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"includeStepKeyFields"],[])},_=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"onlyHiddenFields"],!1)},T=function(e,t){return e.filter((function(e){return e.stepKey===t})).map((function(e){return e.stepKey,(0,i.Z)(e,h)}))},M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"useApplicationAuth"],!1)},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.filter((function(e){return!e.stepKey||t.includes(e.stepKey)}))},j=function(e,t,n,a){return e.map((function(e){var r=m()(p.Z,[t,"authentication",n,a]),i=r?m()(r,e.name):m()(p.Z,[t,"authentication",n,"generic",e.name]),o=i?v(v({},e),i):e;return"authentication.password"===o.name&&(o.component="authentication"),o}))},P=function(e,t){return e.map((function(e){var n=m()(p.Z,[t,"endpoint",e.name]);return n?v(v({},e),n):e}))},D=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return m()(p.Z,[e,"authentication",t,n,"additionalFields"],[])},x=function(e,t){return v(v({},e),{},{fields:[].concat((0,a.Z)((n=t,m()(p.Z,[n,"endpoint","additionalFields"],[]))),(0,a.Z)(P(e.fields,t))),name:"".concat(t,"-endpoint"),nextStep:"summary"});var n},z=function(e,t,n,r,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"generic";return e.map((function(e){var c=e.name||"".concat(t,"-").concat(n,"-").concat(o,"-additional-step"),u=E(t,n,o),l=w(t,n,o);return v(v({name:c,nextStep:!r||u||l?"summary":"".concat(t,"-endpoint")},e),{},{fields:[].concat((0,a.Z)(j(e.fields,t,n,o)),(0,a.Z)(j(T(i,c),t,n,o)))})}))},C=function(e,t,n){var r=[];return e.forEach((function(e){var i=e.schema.endpoint.hidden?e.schema.endpoint.fields:[],o=0===i.length;r.push(function(e,t,n){var r=e.schema.authentication,i=r.length>1,o=(0,a.Z)(t),p={};if(i)return o=[],r.forEach((function(r){var i=O(e.name,r.type),c=E(e.name,r.type,"generic"),u=_(e.name,r.type),d=u?r.fields.filter((function(e){return e.hideField})):r.fields;o.push({component:"auth-select",name:"auth_select",label:r.name,authName:r.type,validate:[{type:s.Z.REQUIRED}],disableAuthType:n}),o.push({component:l.Z.SUB_FORM,name:"".concat(r.type,"-subform"),className:"pf-u-pl-md",fields:[].concat((0,a.Z)(M(e.name,r.type)?[]:t),(0,a.Z)(D(e.name,r.type)),(0,a.Z)(j(S(d,i),e.name,r.type))),condition:{when:"auth_select",is:r.type},hideField:u}),p[r.type]=b(e.name,r.type).length>0?"".concat(e.name,"-").concat(r.type,"-generic-additional-step"):0!==t.length||c?"summary":"".concat(e.name,"-endpoint")})),{name:e.name,title:c().createElement(u.Z,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:o,nextStep:{when:"auth_select",stepMapper:p}};var d=r[0],m="".concat(e.name,"-").concat(d.type,"-generic-additional-step"),f=E(e.name,d.type,"generic"),h=b(e.name,d.type).length>0?m:0!==t.length||f?"summary":"".concat(e.name,"-endpoint"),y=O(e.name,d.type),g=Z(e.name,d.type),w={};if(M(e.name,d.type)&&(o=[]),g){var P=b(e.name,d.type).find((function(e){return!e.name})),x=T(d.fields,m);w=v(v({},P),{},{fields:[].concat((0,a.Z)(o),(0,a.Z)(j([].concat((0,a.Z)(P.fields),(0,a.Z)(x)),e.name,d.type)))})}return v({name:e.name,title:c().createElement(u.Z,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:[].concat((0,a.Z)(o),(0,a.Z)(D(e.name,d.type)),(0,a.Z)(j(S(d.fields,y),e.name,d.type))),nextStep:h},w)}(e,i,n)),t.forEach((function(t){t.supported_source_types.includes(e.name)&&r.push(function(e,t,n,r){var i=e.schema.authentication,o=t.supported_authentication_types[e.name]||[f.Z.type],p=o.length>1,d=(0,a.Z)(n),m={};if(p)return d=[],i.filter((function(e){var t=e.type;return o.includes(t)})).forEach((function(i){var o,c=g(e.name,i.type,t.name)?t.name:"generic",u=E(e.name,i.type,c),p=w(e.name,i.type,c);o=b(e.name,i.type,t.name).length>0?"".concat(e.name,"-").concat(i.type,"-").concat(t.name,"-additional-step"):0!==n.length||u||p?"summary":"".concat(e.name,"-endpoint");var f=O(e.name,i.type,c),h=_(e.name,i.type,c),y=h?i.fields.filter((function(e){return e.hideField})):i.fields;d.push({component:"auth-select",name:"auth_select",label:i.name,authName:i.type,validate:[{type:s.Z.REQUIRED}],supportedAuthTypes:t.supported_authentication_types[e.name],disableAuthType:r}),d.push({component:l.Z.SUB_FORM,name:"".concat(i.type,"-subform"),className:"pf-u-pl-md",fields:[].concat((0,a.Z)(M(e.name,i.type,c)?[]:n),(0,a.Z)(D(e.name,i.type,c)),(0,a.Z)(j(S(y,f),e.name,i.type,c))),condition:{when:"auth_select",is:i.type},hideField:h}),m[i.type]=o})),{name:"".concat(e.name,"-").concat(t.id),title:c().createElement(u.Z,{id:"wizard.chooseAuthType",defaultMessage:"Choose authentication type"}),fields:d,nextStep:{when:"auth_select",stepMapper:m}};var h,y=[f.Z].concat((0,a.Z)(i)).find((function(e){var t=e.type;return o.includes(t)})),P=g(e.name,y.type,t.name)?t.name:"generic",x="".concat(e.name,"-").concat(y.type,"-").concat(t.name,"-additional-step"),z=E(e.name,y.type,P),C=w(e.name,y.type,P);M(e.name,y.type,P)&&(d=[]),h=b(e.name,y.type,P).length>0?x:0!==n.length||z?"summary":"".concat(e.name,"-endpoint");var k=O(e.name,y.type,P),R={};if(Z(e.name,y.type,P)){var A=b(e.name,y.type,P).find((function(e){return!e.name})),N=T(y.fields,x);h=A.nextStep?A.nextStep:0!==n.length||z||C?"summary":"".concat(e.name,"-endpoint"),R=v(v({},A),{},{fields:[].concat((0,a.Z)(d),(0,a.Z)(j([].concat((0,a.Z)(A.fields),(0,a.Z)(N)),e.name,y.type,P)))})}return v({name:"".concat(e.name,"-").concat(t.id),title:c().createElement(u.Z,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:[].concat((0,a.Z)(d),(0,a.Z)(D(e.name,y.type,P)),(0,a.Z)(j(S(y.fields,k),e.name,y.type,P))),nextStep:h},R)}(e,t,i,n))}));var p=e.schema.authentication;(function(e,t){return t.some((function(t){var n=t.supported_source_types,a=t.supported_authentication_types;return n.includes(e.name)&&(!a[e.name]||0===!a[e.name].length)}))})(e,t)&&p.push(f.Z),p.forEach((function(n){var i=b(e.name,n.type);i.length>0&&r.push.apply(r,(0,a.Z)(z(i,e.name,n.type,o,n.fields))),t.forEach((function(t){var i=b(e.name,n.type,t.name);i.length>0&&r.push.apply(r,(0,a.Z)(z(i,e.name,n.type,o,n.fields,t.name)))}))})),o&&r.push(x(e.schema.endpoint,e.name))})),r}},79433:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(92950),r=n.n(a),i=n(45697),o=n.n(i),c=n(44012),u=n(95995),l=n(43047),s=function(e){var t=e.onClose,n=e.returnButtonTitle,a=e.message,i=e.title,o=e.customText,c=e.primaryAction,s=e.secondaryActions,p=e.Component;return r().createElement(u.Bullseye,null,r().createElement(u.EmptyState,{variant:u.EmptyStateVariant.full,className:"pf-u-mt-4xl"},r().createElement(u.EmptyStateIcon,{icon:l.ZP,color:"var(--pf-global--danger-color--100)",className:"pf-u-mb-0"}),r().createElement(u.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},i),r().createElement(u.EmptyStateBody,{className:"src-c-wizard--step-text"},a||o),r().createElement(p,{variant:"primary",onClick:c||t},n),s&&r().createElement(u.EmptyStateSecondaryActions,{className:"pf-u-mt-sm"},s)))};s.propTypes={onClose:o().func.isRequired,returnButtonTitle:o().node,message:o().node,title:o().node,customText:o().node,primaryAction:o().func,secondaryActions:o().node,Component:o().elementType},s.defaultProps={title:r().createElement(c.Z,{id:"wizard.unsuccConfiguration",defaultMessage:"Something went wrong"}),customText:r().createElement(c.Z,{id:"wizard.errorText",defaultMessage:"There was a problem while trying to add your source. Please try again. If the error persists, open a support case."}),Component:u.Button};const p=s},52893:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(92950),r=n.n(a),i=n(45697),o=n.n(i),c=n(44012),u=n(95995),l=function(e){var t=e.onClose,n=e.customText,a=e.cancelTitle,i=e.description;return r().createElement(u.Bullseye,null,r().createElement(u.EmptyState,{variant:u.EmptyStateVariant.full,className:"pf-u-mt-4xl"},r().createElement(u.EmptyStateIcon,{icon:u.Spinner,className:"pf-u-mb-0"}),r().createElement(u.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},n),i&&r().createElement(u.EmptyStateBody,{className:"src-c-wizard--step-text"},i),t&&r().createElement(u.EmptyStateSecondaryActions,{className:"pf-u-mt-xl"},r().createElement(u.Button,{variant:"link",onClick:t},a))))};l.propTypes={onClose:o().func,customText:o().node,cancelTitle:o().node,description:o().node},l.defaultProps={customText:r().createElement(c.Z,{id:"wizard.loadingText",defaultMessage:"Loading, please wait."}),cancelTitle:r().createElement(c.Z,{id:"wizard.cancelText",defaultMessage:"Cancel"})};const s=l},90280:(e,t,n)=>{n.d(t,{Z:()=>ae});var a=n(87462),r=n(4942),i=n(45987),o=n(92950),c=n.n(o),u=n(45697),l=n.n(u),s=n(93025),p=n(67850),d=n(6812),m=n(29439),f=n(27361),h=n.n(f),y=n(95995),v=n(65412),g=n(48880),b=n(64124),Z=n(36680);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=n(93433),_=n(44012),T=n(86896),M=function(e){var t=e.label,n=e.value,a=(0,T.Z)();return c().createElement(y.Popover,{headerContent:t,bodyContent:n,position:"top",maxWidth:"80%"},c().createElement(y.Button,{variant:"link",isInline:!0,className:"src-c-wizard__summary-buttons"},a.formatMessage({id:"wizard.showMore",defaultMessage:"Show more"})))};M.propTypes={label:l().node,value:l().node};const S=M;var j=n(30411),P=n(84866),D=n(72317),x=n(32600),z=["term","description"],C=function(e){var t=e.term,n=e.description,a=(0,i.Z)(e,z);return c().createElement(y.DescriptionListGroup,a,c().createElement(y.DescriptionListTerm,null,t),c().createElement(y.DescriptionListDescription,null,n))};C.propTypes={term:l().node,description:l().node};var k=function(e){var t,n,a,r,i=e.sourceTypes,o=e.applicationTypes,u=e.showApp,l=e.showAuthType,s=(0,g.default)(),p=(0,T.Z)(),d=s.getState().values,m=i.find((function(e){return e.name===d.source_type||e.id===d.source.source_type_id})),f=d.authentication&&d.authentication.authtype?d.authentication.authtype:d.auth_select,v=[];f&&(a=m.schema.authentication.find((function(e){return e.type===f})),v=a&&a.fields?a.fields:[]),"account_authorization"===d.source.app_creation_workflow&&(r=d.applications.map((function(e){var t;return null===(t=o.find((function(t){return t.id===e})))||void 0===t?void 0:t.display_name})));var b=(d.application?o.find((function(e){return e.id===d.application.application_type_id})):void 0)||{},Z=b.display_name,E=void 0===Z?p.formatMessage({id:"wizard.notSelected",defaultMessage:"Not selected"}):Z,w=b.name,M=b.id,z=(0,x.QW)(m.name,f,w),k=m.schema.endpoint.fields;z&&(k=[],v=v.filter((function(e){return!e.name.includes("authentication.")})));var R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic",a=arguments.length>3?arguments[3]:void 0;return[].concat((0,O.Z)(h()(j.Z,[e,"authentication",t,n,"includeStepKeyFields"],[])),(0,O.Z)(h()(j.Z,[e,"authentication",t,n,"additionalSteps"],[]).map((function(e){return e.name}))),["".concat(e,"-").concat(t,"-").concat(n,"-additional-step"),"".concat(e,"-").concat(t,"-additional-step"),a?"".concat(e,"-").concat(a):void 0]).filter(Boolean)}(m.name,f,w,M),A=(0,x.Z$)(m.name,f,w),N=h()(j.Z,[m.name,"authentication",f,w,"customSteps"],!1);A.length>0&&(v=A.map((function(e){return[].concat((0,O.Z)(e.fields),(0,O.Z)(v.filter((function(t){var n=t.stepKey;return n&&e.name===n}))))})).flatMap((function(e){return e})).filter((function(e){var t=e.name;return t.startsWith("application.extra")||v.find((function(e){return e.name===t}))||N&&k.find((function(e){return e.name===t}))}))),N&&(k=[]),v=(0,x.Ow)(v,m.name,f,w||"generic"),k=(0,x.i7)(k,m.name);var F=function(e,t,n){return e.map((function(e){return function(e,t,n){var a=h()(t,e.name);if((!e.stepKey||n.includes(e.stepKey))&&!(e.condition&&h()(t,e.condition.when)!==e.condition.is||e.hideField))return a&&"password"===e.type&&(a="●●●●●●●●●●●●"),"boolean"==typeof a&&(a=a?c().createElement(y.Label,{color:"green"},c().createElement(_.Z,{id:"wizard.enabled",defaultMessage:"Enabled"})):c().createElement(y.Label,{color:"gray"},c().createElement(_.Z,{id:"wizard.disabled",defaultMessage:"Disabled"}))),!a&&"authentication.password"===e.name&&h()(t,"authentication.id")&&(a="●●●●●●●●●●●●"),{label:e["aria-label"]||e.label,value:a||"-"}}(e,t,n)})).filter(Boolean)}([].concat((0,O.Z)(v),(0,O.Z)(k)),d,R).map((function(e){var t=e.label,n=e.value;return c().createElement(C,{key:"".concat(t,"--").concat(n),term:t,description:n.toString().length>150?c().createElement(S,{label:t,value:n}):n})}));return c().createElement(c().Fragment,null,c().createElement(y.DescriptionList,{isHorizontal:!0,className:"src-c-wizard__summary-description-list"},c().createElement(C,{term:p.formatMessage({id:"wizard.name",defaultMessage:"Name"}),description:d.source.name}),c().createElement(C,{term:p.formatMessage({id:"wizard.sourceType",defaultMessage:"Source type"}),description:m.product_name}),u&&d.source.app_creation_workflow&&c().createElement(C,{term:p.formatMessage({id:"wizard.configurationMode",defaultMessage:"Configuration mode"}),description:"account_authorization"===d.source.app_creation_workflow?p.formatMessage({id:"wizard.accountAuth",defaultMessage:"Account authorization"}):p.formatMessage({id:"wizard.manualConfig",defaultMessage:"Manual configuration"})}),u&&"account_authorization"===d.source.app_creation_workflow&&c().createElement(C,{term:p.formatMessage({id:"wizard.applications",defaultMessage:"Applications"}),description:r.length?r.map((function(e){return c().createElement("div",{key:e},e)})):p.formatMessage({id:"none",defaultMessage:"None"})}),u&&"account_authorization"!==d.source.app_creation_workflow&&c().createElement(C,{term:p.formatMessage({id:"wizard.application",defaultMessage:"Application"}),description:E}),!z&&a&&l&&"account_authorization"!==d.source.app_creation_workflow&&(!(null!==(t=d.application)&&void 0!==t&&t.application_type_id)||(null===(n=d.application)||void 0===n?void 0:n.application_type_id)===D.Dt)&&c().createElement(C,{term:p.formatMessage({id:"wizard.authenticationType",defaultMessage:"Authentication type"}),description:a.name}),F),function(e,t,n){return e===P.Qr&&"google"!==t?c().createElement(y.Alert,{variant:"info",isInline:!0,title:n.formatMessage({id:"cost.rbacWarningTitle",defaultMessage:"Manage permissions in User Access"})},n.formatMessage({id:"cost.rbacWarningDescription",defaultMessage:"Make sure to manage permissions for this source in custom roles that contain permissions for Cost Management."})):e===P.fn&&"azure"===t?c().createElement(y.Alert,{variant:"info",isInline:!0,title:n.formatMessage({id:"azure.rhelWarningTitle",defaultMessage:"This source will not be monitored in Sources"})},n.formatMessage({id:"azure.rhelWarningDescription",defaultMessage:"This source will be represented in the Sources list, but will not reflect true status or resources."})):null}(w,m.name,p))};k.propTypes={sourceTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,product_name:l().string.isRequired,schema:l().shape({authentication:l().array,endpoint:l().object})})).isRequired,applicationTypes:l().arrayOf(l().shape({id:l().string.isRequired,name:l().string.isRequired,display_name:l().string.isRequired})).isRequired,showApp:l().bool,showAuthType:l().bool},k.defaultProps={showApp:!0,showAuthType:!0};const R=k;var A=["Content"],N=function(e){var t=e.Content,n=(0,i.Z)(e,A);return c().createElement(t,n)};N.propTypes={Content:l().oneOfType([l().element,l().func]).isRequired};const F=N;var I=n(41693),q=["isRequired","label","helperText","hideLabel","meta","input","options","mutator","DefaultIcon","iconMapper"],B=function(e){var t=(0,I.Z)(e),n=t.isRequired,r=t.label,u=t.helperText,l=t.hideLabel,s=t.meta,p=t.input,d=t.options,f=t.mutator,h=t.DefaultIcon,v=t.iconMapper,b=(0,i.Z)(t,q),Z=(0,g.default)(),E=(0,o.useState)((function(){var e={};return d.forEach((function(t){var n=t.value;return e[n]=v(n,h)})),e})),w=(0,m.Z)(E,1)[0],_=b.isMulti||b.multi,T=b.isDisabled||b.isReadOnly,M=p.value||[],S=function(e){T||(function(e){_?function(e){p.onChange(M.includes(e)?M.filter((function(t){return t!==e})):[].concat((0,O.Z)(M),[e]))}(e):function(e){p.onChange(M===e?void 0:e)}(e)}(e),p.onBlur())},j=s.error,P=s.touched&&j;return c().createElement(y.FormGroup,{isRequired:n,label:!l&&r,fieldId:p.name,helperText:u,helperTextInvalid:j,validated:P?"error":"default"},c().createElement(y.Grid,{hasGutter:!0,className:"pf-u-mb-md"},d.map((function(e){return f(e,Z)})).map((function(e){var t=e.value,n=e.label,r=e.isDisabled||T;if(t){var i=w[t];return c().createElement(y.GridItem,{sm:6,md:4,key:t},c().createElement(y.Tile,(0,a.Z)({className:"src-c-wizard__tile".concat(r?" disabled":""),onClick:function(){return S(t)},tabIndex:r?-1:0,onKeyPress:function(e){return function(e,t,n){32===e.charCode&&(e.preventDefault(),n(t))}(e,t,S)},isDisabled:r,title:n,isStacked:!0,isSelected:M.includes(t)},i&&{icon:c().createElement(i,null)})))}}))))};B.propTypes={multi:l().bool,isMulti:l().bool,label:l().node,isRequired:l().bool,helperText:l().node,description:l().node,hideLabel:l().bool,name:l().string.isRequired,mutator:l().func,options:l().array,DefaultIcon:l().oneOfType([l().node,l().func,l().element]),iconMapper:l().func,isDisabled:l().bool,isReadOnly:l().bool},B.defaultProps={options:[],iconMapper:function(e,t){return t},mutator:function(e){return e}};const G=B;var L=function(e){var t=(0,I.Z)(e),n=t.label,a=t.input,r=t.authName,i=t.supportedAuthTypes,o=t.disableAuthType,u=a.value===r;return a.value&&i&&!i.includes(a.value)&&a.onChange(void 0),c().createElement(y.Radio,{value:r,isChecked:u,name:a.name,onChange:function(){return a.onChange(r)},label:n,id:"".concat(a.name,"-").concat(r),isDisabled:o})};L.propTypes={label:l().string,authName:l().string.isRequired,disableAuthType:l().bool,supportedAuthTypes:l().arrayOf(l().string)},L.defaultProps={disableAuthType:!1};const K=L;var W=n(41626),Q=["options","mutator"],U=function(e){var t=e.options,n=e.mutator,r=(0,i.Z)(e,Q),u=(0,g.default)(),l=u.getState().values,s=l.source_type,p=h()(l,r.name),d=t.map((function(e){return n(e,u)})).filter(Boolean);return(0,o.useEffect)((function(){!s||p&&d.map((function(e){return e.value})).includes(p)||1!==d.filter((function(e){return e.value&&e.value!==D.Dt})).length?d.map((function(e){return e.value})).includes(p)||u.change(r.name,D.Dt):u.change(r.name,d[0].value)}),[s]),c().createElement(W.Z,(0,a.Z)({},r,{options:d,FormGroupProps:{className:"src-c-wizard__radio"}}))};U.propTypes={mutator:l().func.isRequired,options:l().array,name:l().string};const H=U;var V=n(69385),$=["Icon"],Y=function(e){var t=e.Icon,n=(0,i.Z)(e,$),r=(0,o.useRef)();return c().createElement("div",{className:"src-c-checkbox-with-icon"},c().createElement(V.Z,(0,a.Z)({},n,{type:"checkbox"})),c().createElement("span",{ref:r},c().createElement(t,{appendTo:r.current})))};Y.propTypes={Icon:l().elementType.isRequired};var J=["componentMapper"];function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te={"auth-select":K,description:F,"card-select":G,summary:R,"enhanced-radio":H,"switch-group":function(e){var t=(0,I.Z)(e),n=t.label,a=t.input,r=t.options,i=t.applicationTypes,u=(0,(0,g.default)().getState)().values.source_type,l=i.filter((function(e){return e.supported_source_types.includes(u)})).map((function(e){return e.id})),s=r.filter((function(e){var t=e.value;return l.includes(t)}));return(0,o.useEffect)((function(){a.value||a.onChange(s.map((function(e){return e.value})).filter(Boolean))}),[]),c().createElement(y.FormGroup,{label:n,fieldId:a.name},c().createElement(y.Stack,{hasGutter:!0},s.map((function(e){return c().createElement(y.StackItem,{key:e.value},c().createElement(y.Switch,{label:e.label,onChange:function(t){return function(e,t){return e?a.onChange([].concat((0,O.Z)(a.value),[t])):a.onChange(a.value.filter((function(e){return e!==t})))}(t,e.value)},isChecked:a.value.includes(e.value),id:e.value}),e.description&&c().createElement("div",{className:"pf-c-switch pf-u-mt-sm"},c().createElement("span",{className:"pf-c-switch__toggle src-m-wizard-hide-me"}),c().createElement("div",{className:"pf-c-switch__label src-c-wizard--switch-description"},e.description)))}))))},authentication:function(e){var t,n,r=(0,g.default)(),i=r.getState().values,u=(null==e||null===(t=e.name)||void 0===t?void 0:t.match(/\d+/))||[],l=(0,m.Z)(u,1)[0]||(null===(n=i.authentication)||void 0===n?void 0:n.id),s=h()(i,e.name),p=(0,o.useState)(!l||s),d=(0,m.Z)(p,2),f=d[0],E=d[1],O=(0,o.useRef)(!0),_=(0,o.useRef)(!1);(0,o.useEffect)((function(){_.current&&(!O.current&&r.getState().pristine&&(E(!1),O.current=!0),f&&(O.current=!1))})),(0,o.useEffect)((function(){_.current=!0}),[]);var T=e.validate&&e.validate.filter((function(e){return e.type!==b.Z.REQUIRED})),M=w(w({},e),l?{validate:T,resolveProps:Z.Z}:{});return e.isDisabled?c().createElement(y.FormGroup,{helperText:M.helperText,label:M.label,isRequired:!0},c().createElement(y.TextInput,{"aria-label":"pre-filled-authentication",value:"•••••••••••••",isDisabled:!0})):!f&&l?c().createElement(y.FormGroup,{helperText:M.helperText,label:M.label,onFocus:function(){return E(!0)},isRequired:!0},c().createElement(y.TextInput,{"aria-label":"pre-filled-authentication",value:"•••••••••••••"})):c().createElement(v.Z,(0,a.Z)({},M,{autoFocus:!0}))},"checkbox-with-icon":Y},ne=function(e){var t=e.componentMapper,n=(0,i.Z)(e,J);return c().createElement(s.Z,(0,a.Z)({FormTemplate:p.ZP,componentMapper:ee(ee(ee({},d.ZP),te),t)},n))};ne.propTypes={componentMapper:l().object};const ae=ne},45587:(e,t,n)=>{n.d(t,{Z:()=>a});const a=function(e){return"account_authorization"===(null==e?void 0:e.app_creation_workflow)}},36680:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(92950),r=n.n(a),i=n(45697),o=n.n(i),c=n(86896),u=n(95995),l=n(76429),s=function(e){var t=e.validating,n=(0,c.Z)();return r().createElement(u.FormHelperText,{isHidden:!t},r().createElement(u.Spinner,{size:"md",className:"pf-u-mr-md"}),n.formatMessage({id:"wizard.validating",defaultMessage:"Validating"}))};s.propTypes={validating:o().bool.isRequired};const p=function(e,t){var n=t.meta;return n.validating?{helperText:r().createElement(l.Z,null,(function(e){var t=e.validating;return r().createElement(s,{validating:t})}))}:n.valid?{validated:"success",FormGroupProps:{validated:"success"}}:{}}}}]);