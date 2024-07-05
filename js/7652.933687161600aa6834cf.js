"use strict";(self.webpackChunksources=self.webpackChunksources||[]).push([[7652],{45469:(e,t,r)=>{r.d(t,{Kx:()=>h,f:()=>a,lW:()=>i});var a,i,s=r(65353),n=r(28416),o=r(12455),l=r(38296),d=r(80164),u=r(1774),p=r(49644);!function(e){e.horizontal="horizontal",e.vertical="vertical",e.both="both"}(a||(a={})),function(e){e.default="default",e.plain="plain"}(i||(i={}));class c extends n.Component{constructor(e){super(e),this.inputRef=n.createRef(),this.setAutoHeight=e=>{const t=e.parentElement;t.style.setProperty("height","inherit");const r=window.getComputedStyle(e),a=parseInt(r.getPropertyValue("border-top-width"))+parseInt(r.getPropertyValue("padding-top"))+e.scrollHeight+parseInt(r.getPropertyValue("padding-bottom"))+parseInt(r.getPropertyValue("border-bottom-width"));t.style.setProperty("height",`${a}px`)},this.handleChange=e=>{const t=e.currentTarget;this.props.autoResize&&d.Nq&&this.setAutoHeight(t),this.props.onChange&&this.props.onChange(e,t.value)},e.id||e["aria-label"]||console.error("TextArea: TextArea requires either an id or aria-label to be specified")}componentDidMount(){const e=this.props.innerRef||this.inputRef;if(this.props.autoResize&&d.Nq){const t=e.current;this.setAutoHeight(t)}}render(){const e=this.props,{className:t,value:r,validated:a,isRequired:i,isDisabled:c,readOnlyVariant:h,resizeOrientation:f,innerRef:g,disabled:m,autoResize:b,onChange:R,onBlur:y,onFocus:C}=e,v=(0,s.__rest)(e,["className","value","validated","isRequired","isDisabled","readOnlyVariant","resizeOrientation","innerRef","disabled","autoResize","onChange","onBlur","onFocus"]),x=`resize${(0,d.kC)(f)}`,z=["success","error","warning"].includes(a);return n.createElement("span",{className:(0,l.i)(o.Z.formControl,h&&o.Z.modifiers.readonly,"plain"===h&&o.Z.modifiers.plain,f&&o.Z.modifiers[x],c&&o.Z.modifiers.disabled,z&&o.Z.modifiers[a],t)},n.createElement("textarea",Object.assign({onChange:this.handleChange,onFocus:C,onBlur:y},"string"!=typeof this.props.defaultValue&&{value:r},{"aria-invalid":a===u.LD.error,required:i,disabled:c||m,readOnly:!!h,ref:g||this.inputRef},v)),z&&n.createElement("span",{className:(0,l.i)(o.Z.formControlUtilities)},n.createElement(p.J,{status:a})))}}c.displayName="TextArea",c.defaultProps={innerRef:n.createRef(),className:"",isRequired:!1,isDisabled:!1,validated:"default",resizeOrientation:"both","aria-label":null};const h=n.forwardRef(((e,t)=>n.createElement(c,Object.assign({},e,{innerRef:t}))));h.displayName="TextArea"},55157:(e,t,r)=>{r.r(t),r.d(t,{TextAreResizeOrientation:()=>a.f,TextArea:()=>a.Kx,TextAreaReadOnlyVariant:()=>a.lW});var a=r(45469)}}]);
//# sourceMappingURL=../sourcemaps/7652.afbb2343e9e74d8155b25957fc21982c.js.map