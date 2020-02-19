(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{280:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(275),o=n.n(r),a=n(0),i=n.n(a),c=n(2),s=n.n(c),u=n(406),l=n.n(u),p=n(37),d=n(309),f="edit-field",m=function(e){var t=e.isRequired,n=e.label,r=e.helperText,o=e.hideLabel,a=e.meta,c=e.input,s=e.type,u=e.setEdit,f=a.error,m=a.touched&&f,b=c.value;"boolean"==typeof b&&(b=b?"True":"False");var O="password"===s||c.name.includes("password")?"Click to edit":"Click to add";return i.a.createElement(d.FormGroup,{isRequired:t,label:!o&&n,fieldId:c.name,isValid:!m,helperText:r,helperTextInvalid:f,onClick:u?function(){return u(c.name)}:void 0,tabIndex:0,onKeyPress:function(e){32===e.charCode&&u&&(e.preventDefault(),u(c.name))}},i.a.createElement("div",{className:"pf-c-form__horizontal-group ins-c-sources__edit-field-group ".concat(u?"clickable":"")},i.a.createElement(p.TextContent,{className:"ins-c-sources__edit-field-group-text-content ".concat(u?"clickable":"")},i.a.createElement("span",{className:"ins-c-sources__edit-field-value pf-u-mr-sm"},b||(u?O:"")),u&&i.a.createElement(l.a,null))))};m.propTypes={label:s.a.string,isRequired:s.a.bool,helperText:s.a.string,meta:s.a.object.isRequired,FieldProvider:s.a.oneOfType([s.a.node,s.a.func]),input:s.a.shape({value:s.a.any,name:s.a.string.isRequired}).isRequired,hideLabel:s.a.bool,setEdit:s.a.func,type:s.a.string};var b=function(e){var t=e.FieldProvider,n=o()(e,["FieldProvider"]);return i.a.createElement(t,n,(function(e){return i.a.createElement(m,e)}))};b.propTypes={FieldProvider:s.a.oneOfType([s.a.node,s.a.func]).isRequired},t.b=b},349:function(e,t,n){"use strict";var r=n(287),o=n.n(r),a=n(1),i=n.n(a),c=n(0),s=n.n(c),u=n(269),l=n.n(u),p=n(308),d=n(274),f=n(280);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){return s.a.createElement(l.a,o()({layoutMapper:p.layoutMapper,formFieldsMapper:b({},p.formFieldsMapper,{},d.mapperExtension,{"edit-field":f.b})},e))}},572:function(e,t,n){var r=n(573);e.exports=function(e,t,n){return null==e?e:r(e,t,n)}},573:function(e,t,n){var r=n(351),o=n(407),a=n(353),i=n(270),c=n(409);e.exports=function(e,t,n,s){if(!i(e))return e;for(var u=-1,l=(t=o(t,e)).length,p=l-1,d=e;null!=d&&++u<l;){var f=c(t[u]),m=n;if(u!=p){var b=d[f];void 0===(m=s?s(b,f,d):void 0)&&(m=i(b)?b:a(t[u+1])?[]:{})}r(d,f,m),d=d[f]}return e}},631:function(e,t,n){"use strict";n.r(t);var r=n(33),o=n.n(r),a=n(1),i=n.n(a),c=n(0),s=n.n(c),u=n(28),l=n(27),p=n(266),d=n(411),f=n(308),m=n(317),b=n(349),O=n(22),y=n.n(O),h=n(10),g=n(269),v=n(274),j=n(280),E=function(e,t,n){return[{name:"source.name",label:s.a.createElement(h.a,{id:"sources.sourceName",defaultMessage:"Source name"}),component:e["source.name"]?g.componentTypes.TEXT_FIELD:j.a,setEdit:e["source.name"]?void 0:t,validate:[function(e){return Object(v.asyncValidator)(e,n)}],isRequired:!0},{name:"source_type",label:s.a.createElement(h.a,{id:"sources.sourceType",defaultMessage:"Source type"}),isReadOnly:!0,component:j.a}]},P=n(286),w=n.n(P),S=n(24),M=n(37);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e,t,n,r){return e.map((function(e){var o=e.name.startsWith("authentication")?function(e,t){return"authentications.a".concat(t,".").concat(e.replace("authentication.",""))}(e.name,t):e.name,a=n[o],i=D({},e,{name:o,component:a?e.component:j.a});return a||(i.setEdit=r),"password"===i.name.split(".").pop()&&(i.helperText=s.a.createElement(h.a,{id:"sources.passwordResetHelperText",defaultMessage:"Changing this resets your current { label }.",values:{label:i.label}}),i.isRequired=!1,i.validate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.filter((function(e){return e.type!==g.validatorTypes.REQUIRED}))}(i.validate)),i}))},R=function(e,t,n,r){return e&&0!==e.length&&t.schema&&t.schema.authentication?e.map((function(e){var o,a=t.schema.authentication.find((function(t){return t.type===e.authtype}));if(!a)return o=e.authtype,{component:"description",name:"".concat(o,"-unsupported"),Content:function(){return s.a.createElement(M.TextContent,null,s.a.createElement(S.Text,{component:S.TextVariants.p},s.a.createElement(h.a,{id:"sources.unsupportedAuthType",defaultMessage:"Authentication type of { type } is no longer supported.",values:{type:o}})))}};var i=function(e,t){return w()(v.hardcodedSchemas,[e,"authentication",t,"generic","includeStepKeyFields"],[])}(t.name,e.authtype),c=a.fields.filter((function(e){return!e.stepKey||i.includes(e.stepKey)})).map((function(n){return D({},n,{},function(e,t,n){return w()(v.hardcodedSchemas,[e,"authentication",t,"generic",n],{})}(t.name,e.authtype,n.name))}));return{component:g.componentTypes.SUB_FORM,title:a.name,name:a.name,fields:[_(c,e.id,n,r)]}})):[]};function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var C=[g.componentTypes.CHECKBOX,g.componentTypes.SWITCH],k=function(e,t,n){return e.map((function(e){var r=t[e.name],o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{component:r||C.includes(e.component)?e.component:j.a});return r||C.includes(e.component)||(o.setEdit=n),o}))};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var I=function(e,t,n){if(e.schema&&e.schema.endpoint&&!e.schema.endpoint.hidden){var r=e.schema.endpoint.fields.map((function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},function(e,t){return w()(v.hardcodedSchemas,[e,"endpoint",t],{})}(e.name,t.name))}));return{component:g.componentTypes.SUB_FORM,title:s.a.createElement(h.a,{id:"sources.endpoint",defaultMessage:"Endpoint"}),name:"endpoint",fields:k(r,t,n)}}};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V="/insights/platform/cost-management",N=["billing_source","credentials"],A=function(e){var t=e.name;return N.some((function(e){return t.startsWith(e)}))},B=function(e){return Object.keys(e).map((function(t){return e[t].fields.filter(A)})).flatMap((function(e){return e}))},K=function(e,t,n){var r=void 0;return n.forEach((function(n){var o=r?{}:w()(v.hardcodedSchemas,[e,"authentication",n],{});Object.keys(o).find((function(o){var a=w()(v.hardcodedSchemas,[e,"authentication",n,o,t],void 0);if(a)return r=a,!0}))})),r||{}},U=function(e,t,n){return"openshift"===n.name?[{name:"source.source_ref",label:s.a.createElement(h.a,{id:"sources.clusterIdentifier",defaultMessage:"Cluster identifier"}),isRequired:!0,setEdit:e["source.source_ref"]?void 0:t,validate:[{type:g.validatorTypes.REQUIRED}],component:e["source.source_ref"]?g.componentTypes.TEXT_FIELD:j.a}]:[]},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,i=o.find((function(e){return e.name===V}));if(i){var c=e.find((function(e){return e.application_type_id===i.id}));if(c){var s=B(t.schema.authentication),u=a.authentications?a.authentications.map((function(e){return e.authtype})):[],l=s.map((function(e){return q({},e,{},K(t.name,e.name,u))}));return{component:g.componentTypes.SUB_FORM,title:i.display_name,name:i.display_name,fields:[].concat(y()(k(l,n,r)),y()(U(n,r,t)))}}}},H=function(e,t,n,r,o,a){return[G(e,t,n,r,o,a)]},W=function(e,t,n,r,o){return{fields:[].concat(y()(E(t,n,e.source.id)),y()(R(e.authentications,r,t,n)),y()(H(e.applications,r,t,n,o,e)),[!!(e.endpoints&&e.endpoints.length>0)&&I(r,t,n)]).filter(Boolean)}},z=n(13),X=n(9);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=n(287),Z=n.n(Y),$=n(275),ee=n.n($),te=n(2),ne=n.n(te),re=n(400),oe=function(e){var t=e.children,n=ee()(e,["children"]);return s.a.createElement(re.Form,Z()({},n,{isHorizontal:!0}),t)};oe.propTypes={children:ne.a.node};var ae=oe,ie=n(293),ce=n(294),se=n(121),ue=function(){return s.a.createElement(ie.Grid,null,s.a.createElement(ce.GridItem,{xs:12},s.a.createElement(se.Title,{headingLevel:se.TitleLevel.h1,size:"3xl"},s.a.createElement(h.a,{id:"sources.editSource",defaultMessage:"Edit a source"}))),s.a.createElement(ce.GridItem,{xs:12},s.a.createElement(h.a,{id:"sources.editSourceDescription",defaultMessage:"You are editing a source."})))},le=n(572),pe=n.n(le),de=n(77);function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var me=function(e,t){var n,r,o=e.endpoints,a=e.authentications,c=ee()(e,["endpoints","authentications"]),s={};return a&&a.length>0&&a.forEach((function(e){s["a".concat(e.id)]=e})),o&&o.length>0&&(n=o[0]),n&&(r=n.scheme||n.host||n.path||n.port?Object(de.b)(n):void 0),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({source_type:t,endpoint:n,authentications:s,url:r},c)},be=n(40),Oe=n(72),ye=function(e,t,n,r,o,a){return n(Object(be.o)(r,function(e,t){var n={};return Object.keys(t).filter((function(e){return t[e]})).forEach((function(t){pe()(n,t,w()(e,t))})),n}(e,t),o.formatMessage({id:"sources.modifiedNotificationTitle",defaultMessage:'"{ name }" was modified successfully.'},{name:r.source.name}),o.formatMessage({id:"sources.modifiedNotificationDescription",defaultMessage:"The source was successfully modified."}),{authentication:o.formatMessage({id:"sources.sourceEditAuthFailure",defaultMessage:"Authentication update failure."}),source:o.formatMessage({id:"sources.sourceEditFailure",defaultMessage:"Source update failure."}),endpoint:o.formatMessage({id:"sources.sourceEditEndpointFailure",defaultMessage:"Endpoint update failure."}),costManagement:o.formatMessage({id:"sources.sourceCostmanagementFailure",defaultMessage:"Cost Management update failure."})})).then((function(){a(Oe.c.sources.path),n(Object(be.g)())}))};function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve={loading:!0,editing:{},source:void 0,initialValues:{},sourceType:void 0,schema:void 0},je=function(e,t){return ge({},e,{},t)};t.default=function(){var e=Object(c.useReducer)(je,ve),t=o()(e,2),n=t[0],r=t[1],a=Object(l.h)().id,O=Object(l.f)(),y=n.loading,h=n.editing,g=n.source,v=n.initialValues,j=n.sourceType,E=n.schema,P=Object(p.a)(),w=Object(u.useSelector)((function(e){return e.sources}),u.shallowEqual),S=w.sourceTypes,M=w.appTypes,T=w.sourceTypesLoaded,D=w.appTypesLoaded,_=Object(u.useDispatch)();Object(c.useEffect)((function(){(function(e){return Promise.all([Object(z.i)().showSource(e),Object(z.i)().listSourceEndpoints(e),Object(z.i)().listSourceApplications(e),(t=e,z.a.get("".concat(X.a,"/sources/").concat(t,"/"))).catch((function(){}))]).then((function(e){var t=o()(e,4),n=t[0],r=t[1],a=t[2],i=t[3],c=r&&r.data&&r.data[0],s={source:n,applications:a.data};return i&&(s=Q({},s,{billing_source:i.billing_source,credentials:i.authentication.credentials})),c?Object(z.i)().listEndpointAuthentications(c.id).then((function(e){return Q({},s,{endpoints:r.data,authentications:e.data})})):s}));var t})(a).then((function(e){e.source.imported&&function(e,t,n,r){e(Object(be.b)(t.formatMessage({id:"sources.importSourceCannotEdited",defaultMessage:"Source { name } is imported."},{name:r}),"danger",t.formatMessage({id:"sources.importedSourcesCannotEdited",defaultMessage:"Imported sources cannot be edited."}))),n.push(Oe.c.sources.path)}(_,P,O,e.source.name),r({source:e})}))}),[]);var R=function(e){return r({editing:ge({},h,i()({},e,!h[e]))})};Object(c.useEffect)((function(){if(g&&D&&T){var e=S.find((function(e){return e.id===g.source.source_type_id}));r({sourceType:e,initialValues:me(g,e.product_name),schema:W(g,h,R,e,M),loading:!1})}}),[D,g,T]),Object(c.useEffect)((function(){g&&!y&&r({schema:W(g,h,R,j,M)})}),[h]);var F=function(){return O.push(Oe.c.sources.path)};return!D||!T||y?s.a.createElement(m.Modal,{title:P.formatMessage({id:"sources.editSource",defaultMessage:"Edit a source."}),header:s.a.createElement(ue,null),isOpen:!0,isLarge:!0,onClose:F},s.a.createElement("div",{className:"ins-c-sources__dialog--spinnerContainer"},s.a.createElement(d.Spinner,null))):s.a.createElement(m.Modal,{title:P.formatMessage({id:"sources.editSource",defaultMessage:"Edit a source."}),header:s.a.createElement(ue,null),isOpen:!0,isLarge:!0,onClose:F},s.a.createElement(b.a,{onCancel:F,schema:E,onSubmit:function(e,t){return ye(e,t.getState().dirtyFields,_,g,P,O.push)},layoutMapper:ge({},f.layoutMapper,{FormWrapper:ae}),clearedValue:null,canReset:!0,disableSubmit:["submitting"],onReset:function(){return r({editing:{}})},initialValues:v,buttonsLabels:{submitLabel:P.formatMessage({id:"sources.save",defaultMessage:"Save"})}}))}}}]);
//# sourceMappingURL=../sourcemaps/edit.js.map