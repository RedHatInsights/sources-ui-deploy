(self.webpackChunksources=self.webpackChunksources||[]).push([[5190,8714],{68809:(e,r,a)=>{"use strict";a.d(r,{W:()=>s});var t=a(65353),l=a(28416),i=a(11924),o=a(38296);const s=e=>{var{children:r=null,className:a=""}=e,s=(0,t._T)(e,["children","className"]);const n=(0,o.i)(i.Z.formGroup,i.Z.modifiers.action,a),c=l.createElement("div",{className:(0,o.i)(i.Z.formActions)},r);return l.createElement("div",Object.assign({},s,{className:n}),l.createElement("div",{className:(0,o.i)(i.Z.formGroupControl)},c))};s.displayName="ActionGroup"},83115:(e,r,a)=>{"use strict";a.d(r,{l:()=>n});var t=a(65353),l=a(28416),i=a(11924),o=a(38296);const s=e=>{var{children:r=null,className:a="",isHorizontal:s=!1,isWidthLimited:n=!1,maxWidth:c="",innerRef:d}=e,m=(0,t._T)(e,["children","className","isHorizontal","isWidthLimited","maxWidth","innerRef"]);return l.createElement("form",Object.assign({noValidate:!0},c&&{style:Object.assign({"--pf-v5-c-form--m-limit-width--MaxWidth":c},m.style)},m,{className:(0,o.i)(i.Z.form,s&&i.Z.modifiers.horizontal,(n||c)&&i.Z.modifiers.limitWidth,a),ref:d}),r)},n=l.forwardRef(((e,r)=>l.createElement(s,Object.assign({innerRef:r},e))));n.displayName="Form"},59775:(e,r,a)=>{"use strict";a.d(r,{c:()=>c});var t=a(65353),l=a(28416),i=a(11924),o=a(11888),s=a(38296),n=a(41724);const c=e=>{var{children:r=null,className:a="",label:c,labelInfo:d,labelIcon:m,isRequired:p=!1,isInline:f=!1,hasNoPaddingTop:u=!1,isStack:g=!1,fieldId:h,role:b}=e,v=(0,t._T)(e,["children","className","label","labelInfo","labelIcon","isRequired","isInline","hasNoPaddingTop","isStack","fieldId","role"]);const N="group"===b||"radiogroup"===b,_=N?"span":"label",E=l.createElement(l.Fragment,null,l.createElement(_,Object.assign({className:(0,s.i)(i.Z.formLabel)},!N&&{htmlFor:h}),l.createElement("span",{className:(0,s.i)(i.Z.formLabelText)},c),p&&l.createElement("span",{className:(0,s.i)(i.Z.formLabelRequired),"aria-hidden":"true"}," ",o.t))," ",l.isValidElement(m)&&m);return l.createElement(n.w,null,(e=>l.createElement("div",Object.assign({className:(0,s.i)(i.Z.formGroup,a)},b&&{role:b},N&&{"aria-labelledby":`${h||e}-legend`},v),c&&l.createElement("div",Object.assign({className:(0,s.i)(i.Z.formGroupLabel,d&&i.Z.modifiers.info,u&&i.Z.modifiers.noPaddingTop)},N&&{id:`${h||e}-legend`}),d&&l.createElement(l.Fragment,null,l.createElement("div",{className:(0,s.i)(i.Z.formGroupLabelMain)},E),l.createElement("div",{className:(0,s.i)(i.Z.formGroupLabelInfo)},d)),!d&&E),l.createElement("div",{className:(0,s.i)(i.Z.formGroupControl,f&&i.Z.modifiers.inline,g&&i.Z.modifiers.stack)},r))))};c.displayName="FormGroup"},88714:(e,r,a)=>{"use strict";a.r(r),a.d(r,{ActionGroup:()=>t.W,Form:()=>l.l,FormAlert:()=>c,FormContextConsumer:()=>F,FormContextProvider:()=>T,FormFieldGroup:()=>h,FormFieldGroupExpandable:()=>b,FormFieldGroupHeader:()=>v,FormGroup:()=>N.c,FormHelperText:()=>_,FormSection:()=>E,useFormContext:()=>G});var t=a(68809),l=a(83115),i=a(65353),o=a(28416),s=a.n(o),n=a(38296);const c=e=>{var{children:r=null,className:a=""}=e,t=(0,i._T)(e,["children","className"]);return o.createElement("div",Object.assign({},t,{className:(0,n.i)("pf-v5-c-form__alert",a)}),r)};c.displayName="FormAlert";var d=a(11924),m=a(93174),p=a(47173);const f=e=>{var{className:r,onToggle:a,isExpanded:t,"aria-label":l,"aria-labelledby":s,toggleId:c}=e,f=(0,i._T)(e,["className","onToggle","isExpanded","aria-label","aria-labelledby","toggleId"]);return o.createElement("div",Object.assign({className:(0,n.i)(d.Z.formFieldGroupToggle,r)},f),o.createElement("div",{className:(0,n.i)(d.Z.formFieldGroupToggleButton)},o.createElement(p.zx,{variant:"plain","aria-label":l,onClick:a,"aria-expanded":t,"aria-labelledby":s,id:c},o.createElement("span",{className:(0,n.i)(d.Z.formFieldGroupToggleIcon)},o.createElement(m.default,{"aria-hidden":"true"})))))};f.displayName="FormFieldGroupToggle";var u=a(41724);const g=e=>{var{children:r,className:a,header:t,isExpandable:l,isExpanded:s,onToggle:c,toggleAriaLabel:m}=e,p=(0,i._T)(e,["children","className","header","isExpandable","isExpanded","onToggle","toggleAriaLabel"]);const g=t?t.props.titleText:null;return!l||m||g||console.error("FormFieldGroupExpandable:","toggleAriaLabel or the titleText prop of FormFieldGroupHeader is required to make the toggle button accessible"),o.createElement("div",Object.assign({className:(0,n.i)(d.Z.formFieldGroup,s&&l&&d.Z.modifiers.expanded,a),role:"group"},g&&{"aria-labelledby":`${t.props.titleText.id}`},p),l&&o.createElement(u.w,{prefix:"form-field-group-toggle"},(e=>o.createElement(f,Object.assign({onToggle:c,isExpanded:s,"aria-label":m,toggleId:e},g&&{"aria-labelledby":`${t.props.titleText.id} ${e}`})))),t&&t,(!l||l&&s)&&o.createElement("div",{className:(0,n.i)(d.Z.formFieldGroupBody)},r))};g.displayName="InternalFormFieldGroup";const h=e=>{var{children:r,className:a,header:t}=e,l=(0,i._T)(e,["children","className","header"]);return o.createElement(g,Object.assign({className:a,header:t},l),r)};h.displayName="FormFieldGroup";const b=e=>{var{children:r,className:a,header:t,isExpanded:l=!1,toggleAriaLabel:s}=e,n=(0,i._T)(e,["children","className","header","isExpanded","toggleAriaLabel"]);const[c,d]=(0,o.useState)(l);return o.createElement(g,Object.assign({className:a,header:t,isExpandable:!0,isExpanded:c,toggleAriaLabel:s,onToggle:()=>d(!c)},n),r)};b.displayName="FormFieldGroupExpandable";const v=e=>{var{className:r,titleText:a,titleDescription:t,actions:l}=e,s=(0,i._T)(e,["className","titleText","titleDescription","actions"]);return o.createElement("div",Object.assign({className:(0,n.i)(d.Z.formFieldGroupHeader,r)},s),o.createElement("div",{className:(0,n.i)(d.Z.formFieldGroupHeaderMain)},a&&o.createElement("div",{className:(0,n.i)(d.Z.formFieldGroupHeaderTitle)},o.createElement("div",{className:(0,n.i)(d.Z.formFieldGroupHeaderTitleText),id:a.id},a.text)),t&&o.createElement("div",{className:(0,n.i)(d.Z.formFieldGroupHeaderDescription)},t)),o.createElement("div",{className:(0,n.i)(d.Z.formFieldGroupHeaderActions)},l&&l))};v.displayName="FormFieldGroupHeader";var N=a(59775);const _=e=>{var{children:r=null,className:a=""}=e,t=(0,i._T)(e,["children","className"]);return o.createElement("div",Object.assign({className:(0,n.i)(d.Z.formHelperText,a)},t),r)};_.displayName="FormHelperText";const E=e=>{var{className:r="",children:a,title:t="",titleElement:l="div"}=e,s=(0,i._T)(e,["className","children","title","titleElement"]);return o.createElement(u.w,{prefix:"pf-form-section-title"},(e=>o.createElement("section",Object.assign({className:(0,n.i)(d.Z.formSection,r),role:"group"},t&&{"aria-labelledby":e},s),t&&o.createElement(l,{id:e,className:(0,n.i)(d.Z.formSectionTitle,r)},t),a)))};E.displayName="FormSection";const x=s().createContext({}),F=x.Consumer,T=({initialValues:e,children:r})=>{var a;const[t,l]=s().useState(e||{}),[o,n]=s().useState({}),[c,d]=s().useState({}),[m,p]=s().useState({}),f=0===(null===(a=Object.keys(o))||void 0===a?void 0:a.length);return s().createElement(x.Provider,{value:{values:t,errors:o,touched:m,isValid:f,setValues:l,setErrors:n,getValue:e=>Object.entries(t).reduce(((r,[a,t])=>a===e?t:r),""),setValue:(e,r,a=!0)=>{var i;t[e]!==r&&(l((a=>Object.assign(Object.assign({},a),{[e]:r}))),a&&(null===(i=c[e])||void 0===i||i.call(c,r)))},getError:e=>Object.entries(o).reduce(((r,[a,t])=>a===e?t:r),""),setError:(e,r)=>o[e]!==r&&n((a=>{var t=e,l=(a[t],(0,i._T)(a,["symbol"==typeof t?t:t+""]));return Object.assign(Object.assign({},l),!!r&&{[e]:r})})),validate:()=>{var e;return null===(e=Object.entries(c))||void 0===e?void 0:e.reduce(((e,[r,a])=>{const l=a(t[r]);return l&&(e[r]=l),e}),{})},setValidator:(e,r)=>c[e]!==r&&d((a=>Object.assign(Object.assign({},a),{[e]:r}))),isTouched:e=>Object.entries(m).reduce(((r,[a,t])=>a===e?t:r),!1),setTouched:(e,r)=>m[e]!==r&&p((a=>{var t=e,l=(a[t],(0,i._T)(a,["symbol"==typeof t?t:t+""]));return Object.assign(Object.assign({},l),r&&{[e]:r})}))}},"function"==typeof r?s().createElement(x.Consumer,null,(e=>r(e))):r)},G=()=>s().useContext(x)},41724:(e,r,a)=>{"use strict";a.d(r,{w:()=>i});var t=a(28416);let l=0;class i extends t.Component{constructor(){super(...arguments),this.id=`${this.props.prefix}${l++}`}render(){return this.props.children(this.id)}}i.displayName="GenerateId",i.defaultProps={prefix:"pf-random-id-"}},11888:(e,r,a)=>{"use strict";a.d(r,{t:()=>t});const t="*"},40400:(e,r,a)=>{"use strict";a.d(r,{I:()=>o});var t=a(65353),l=a(28416);let i=0;function o({name:e,xOffset:r=0,yOffset:a=0,width:o,height:s,svgPath:n}){var c;return c=class extends l.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{title:i,className:c}=e,d=(0,t._T)(e,["title","className"]),m=c?`pf-v5-svg ${c}`:"pf-v5-svg",p=Boolean(i),f=[r,a,o,s].join(" ");return l.createElement("svg",Object.assign({className:m,viewBox:f,fill:"currentColor","aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img",width:"1em",height:"1em"},d),p&&l.createElement("title",{id:this.id},i),l.createElement("path",{d:n}))}},c.displayName=e,c}},93174:(e,r,a)=>{"use strict";a.r(r),a.d(r,{AngleRightIcon:()=>i,AngleRightIconConfig:()=>l,default:()=>o});var t=a(40400);const l={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},i=(0,t.I)(l),o=i},11924:(e,r,a)=>{"use strict";a.d(r,{Z:()=>t}),a(78752);const t={form:"pf-v5-c-form",formActions:"pf-v5-c-form__actions",formFieldGroup:"pf-v5-c-form__field-group",formFieldGroupBody:"pf-v5-c-form__field-group-body",formFieldGroupHeader:"pf-v5-c-form__field-group-header",formFieldGroupHeaderActions:"pf-v5-c-form__field-group-header-actions",formFieldGroupHeaderDescription:"pf-v5-c-form__field-group-header-description",formFieldGroupHeaderMain:"pf-v5-c-form__field-group-header-main",formFieldGroupHeaderTitle:"pf-v5-c-form__field-group-header-title",formFieldGroupHeaderTitleText:"pf-v5-c-form__field-group-header-title-text",formFieldGroupToggle:"pf-v5-c-form__field-group-toggle",formFieldGroupToggleButton:"pf-v5-c-form__field-group-toggle-button",formFieldGroupToggleIcon:"pf-v5-c-form__field-group-toggle-icon",formFieldset:"pf-v5-c-form__fieldset",formGroup:"pf-v5-c-form__group",formGroupControl:"pf-v5-c-form__group-control",formGroupLabel:"pf-v5-c-form__group-label",formGroupLabelHelp:"pf-v5-c-form__group-label-help",formGroupLabelInfo:"pf-v5-c-form__group-label-info",formGroupLabelMain:"pf-v5-c-form__group-label-main",formHelperText:"pf-v5-c-form__helper-text",formHelperTextIcon:"pf-v5-c-form__helper-text-icon",formLabel:"pf-v5-c-form__label",formLabelRequired:"pf-v5-c-form__label-required",formLabelText:"pf-v5-c-form__label-text",formSection:"pf-v5-c-form__section",formSectionTitle:"pf-v5-c-form__section-title",modifiers:{horizontal:"pf-m-horizontal",alignRight:"pf-m-align-right",noPaddingTop:"pf-m-no-padding-top",horizontalOnXs:"pf-m-horizontal-on-xs",horizontalOnSm:"pf-m-horizontal-on-sm",horizontalOnMd:"pf-m-horizontal-on-md",horizontalOnLg:"pf-m-horizontal-on-lg",horizontalOnXl:"pf-m-horizontal-on-xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",limitWidth:"pf-m-limit-width",action:"pf-m-action",info:"pf-m-info",disabled:"pf-m-disabled",inline:"pf-m-inline",stack:"pf-m-stack",error:"pf-m-error",success:"pf-m-success",warning:"pf-m-warning",inactive:"pf-m-inactive",hidden:"pf-m-hidden",expanded:"pf-m-expanded"},themeDark:"pf-v5-theme-dark"}},38296:(e,r,a)=>{"use strict";function t(...e){const r=[],a={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const l=typeof e;if("string"===l||"number"===l)r.push(e);else if(Array.isArray(e)&&e.length){const a=t(...e);a&&r.push(a)}else if("object"===l)for(const t in e)a.call(e,t)&&e[t]&&r.push(t)})),r.join(" ")}a.d(r,{i:()=>t})},11452:()=>{},34946:()=>{},78752:()=>{},66822:()=>{}}]);
//# sourceMappingURL=../sourcemaps/5190.f962ca2eeb166b16d756eaca20f969f2.js.map