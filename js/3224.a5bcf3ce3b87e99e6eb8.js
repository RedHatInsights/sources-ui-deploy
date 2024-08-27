"use strict";(self.webpackChunksources=self.webpackChunksources||[]).push([[3224],{93224:(e,t,a)=>{a.r(t),a.d(t,{Label:()=>w,LabelGroup:()=>A});var i=a(65353),l=a(66029);a(82014);const n="pf-v5-c-label__content",o="pf-m-compact",s="pf-m-blue",r="pf-m-green",c="pf-m-orange",p="pf-m-red",d="pf-m-purple",m="pf-m-cyan",u="pf-m-gold",f="pf-m-outline",b="pf-m-overflow",g="pf-m-editable-active",h="pf-m-disabled";a(24620);const v="pf-v5-c-label-group__label",E="pf-v5-c-label-group__list-item",y="pf-m-category",C="pf-m-vertical",x="pf-m-editable",L="pf-m-textarea";var N=a(47173),_=a(75824),O=a(38296),k=a(24307),T=a(6551);const P="--pf-v5-c-label__text--MaxWidth",R={blue:s,cyan:m,green:r,orange:c,purple:d,red:p,gold:u,grey:""},w=e=>{var{children:t,className:a="",color:s="grey",variant:r="filled",isCompact:c=!1,isDisabled:p=!1,isEditable:d=!1,editableProps:m,textMaxWidth:u,tooltipPosition:v,icon:E,onClose:y,onClick:C,onEditCancel:L,onEditComplete:w,closeBtn:D,closeBtnAriaLabel:I,closeBtnProps:j,href:A,isOverflowLabel:W,render:B}=e,M=(0,i.__rest)(e,["children","className","color","variant","isCompact","isDisabled","isEditable","editableProps","textMaxWidth","tooltipPosition","icon","onClose","onClick","onEditCancel","onEditComplete","closeBtn","closeBtnAriaLabel","closeBtnProps","href","isOverflowLabel","render"]);const[S,V]=(0,l.useState)(!1),[z,F]=(0,l.useState)(t),$=l.useRef(),H=l.useRef();l.useEffect((()=>(document.addEventListener("mousedown",U),document.addEventListener("keydown",G),()=>{document.removeEventListener("mousedown",U),document.removeEventListener("keydown",G)}))),l.useEffect((()=>{C&&A?console.warn("Link labels cannot have onClick passed, this results in invalid HTML. Please remove either the href or onClick prop."):C&&d&&console.warn("Editable labels cannot have onClick passed, clicking starts the label edit process. Please remove either the isEditable or onClick prop.")}),[C,A,d]);const U=e=>{S&&H&&H.current&&!H.current.contains(e.target)&&(H.current.value&&w&&w(e,H.current.value),V(!1))},G=e=>{var a,i;const l=e.key;if((S||$&&$.current&&$.current.contains(e.target))&&(!S||H&&H.current&&H.current.contains(e.target))&&(!S||"Enter"!==l&&"Tab"!==l||(e.preventDefault(),e.stopImmediatePropagation(),H.current.value&&w&&w(e,H.current.value),V(!1),null===(a=null==$?void 0:$.current)||void 0===a||a.focus()),S&&"Escape"===l&&(e.preventDefault(),e.stopImmediatePropagation(),H.current.value&&(H.current.value=t,L&&L(e,t)),V(!1),null===(i=null==$?void 0:$.current)||void 0===i||i.focus()),!S&&"Enter"===l)){e.preventDefault(),e.stopImmediatePropagation(),V(!0);const t=e.target,a=document.createRange(),i=window.getSelection();a.selectNodeContents(t),a.collapse(!1),i.removeAllRanges(),i.addRange(a)}},q=(A||C)&&p,K=l.createElement(N.zx,Object.assign({type:"button",variant:"plain",onClick:y,"aria-label":I||`Close ${t}`},q&&{isDisabled:!0},j),l.createElement(k.ZP,null)),Z=l.createElement("span",{className:(0,O.i)("pf-v5-c-label__actions")},D||K),J=l.createRef(),Q=l.useRef(),[X,Y]=l.useState(!1);(0,T.L)((()=>{const e=d?$:J;S||Y(e.current&&e.current.offsetWidth<e.current.scrollWidth)}),[S]);const ee=l.createElement(l.Fragment,null,E&&l.createElement("span",{className:(0,O.i)("pf-v5-c-label__icon")},E),l.createElement("span",Object.assign({ref:J,className:(0,O.i)("pf-v5-c-label__text")},u&&{style:{[P]:u}}),t));l.useEffect((()=>{S&&H&&H.current&&H.current.focus()}),[H,S]);let te="span";A?te="a":(d||C&&!W)&&(te="button");const ae={type:"button",onClick:C},ie="button"===te,le=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({className:(0,O.i)(n)},X&&{tabIndex:0}),A&&{href:A}),A&&p&&{onClick:e=>e.preventDefault()}),ie&&ae),d&&Object.assign({ref:$,onClick:e=>{V(!0),e.stopPropagation()}},m)),q&&ie&&{disabled:!0}),q&&A&&{tabindex:-1,"aria-disabled":!0});let ne=l.createElement(te,Object.assign({},le),ee);B?ne=l.createElement(l.Fragment,null,X&&l.createElement(_.u,{triggerRef:Q,content:t,position:v}),B({className:n,content:ee,componentRef:Q})):X&&(ne=l.createElement(_.u,{content:t,position:v},ne));const oe=W?"button":"span";return l.createElement(oe,Object.assign({},M,{className:(0,O.i)("pf-v5-c-label",q&&h,R[s],"outline"===r&&f,W&&b,c&&o,d&&x,S&&g,a),onClick:W?C:void 0}),!S&&ne,!S&&y&&Z,S&&l.createElement("input",Object.assign({className:(0,O.i)(n),type:"text",id:"editable-input",ref:H,value:z,onChange:()=>{F(H.current.value)}},m)))};w.displayName="Label";var D=a(72781),I=a(80164),j=a(41724);class A extends l.Component{constructor(e){super(e),this.headingRef=l.createRef(),this.toggleCollapse=()=>{this.setState((e=>({isOpen:!e.isOpen,isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})))},this.state={isOpen:this.props.defaultIsOpen,isTooltipVisible:!1}}componentDidMount(){this.setState({isTooltipVisible:Boolean(this.headingRef.current&&this.headingRef.current.offsetWidth<this.headingRef.current.scrollWidth)})}renderLabel(e){const{categoryName:t,tooltipPosition:a}=this.props,{isTooltipVisible:i}=this.state;return i?l.createElement(_.u,{position:a,content:t},l.createElement("span",{tabIndex:0,ref:this.headingRef,className:(0,O.i)(v)},l.createElement("span",{"aria-hidden":"true",id:e},t))):l.createElement("span",{ref:this.headingRef,className:(0,O.i)(v),"aria-hidden":"true",id:e},t)}render(){const e=this.props,{categoryName:t,children:a,className:n,isClosable:s,isCompact:r,closeBtnAriaLabel:c,"aria-label":p,onClick:d,numLabels:m,expandedText:u,collapsedText:f,defaultIsOpen:b,tooltipPosition:g,isVertical:h,isEditable:v,hasEditableTextArea:_,editableTextAreaProps:k,addLabelControl:T}=e,P=(0,i.__rest)(e,["categoryName","children","className","isClosable","isCompact","closeBtnAriaLabel","aria-label","onClick","numLabels","expandedText","collapsedText","defaultIsOpen","tooltipPosition","isVertical","isEditable","hasEditableTextArea","editableTextAreaProps","addLabelControl"]),{isOpen:R}=this.state,A=l.Children.toArray(a),W=A.length,B=(0,I.tJ)(f,{remaining:W-m}),M=e=>{const a=R?A:A.slice(0,m),i=l.createElement(l.Fragment,null,t&&this.renderLabel(e),l.createElement("ul",Object.assign({className:(0,O.i)("pf-v5-c-label-group__list")},t&&{"aria-labelledby":e},!t&&{"aria-label":p},{role:"list"},P),a.map(((e,t)=>l.createElement("li",{className:(0,O.i)(E),key:t},e))),W>m&&l.createElement("li",{className:(0,O.i)(E)},l.createElement(w,{isOverflowLabel:!0,onClick:this.toggleCollapse,className:(0,O.i)(r&&o)},R?u:B)),T&&l.createElement("li",{className:(0,O.i)(E)},T),v&&_&&l.createElement("li",{className:(0,O.i)(E,L)},l.createElement("textarea",Object.assign({className:(0,O.i)("pf-v5-c-label-group__textarea"),rows:1,tabIndex:0},k))))),f=l.createElement("div",{className:(0,O.i)("pf-v5-c-label-group__close")},l.createElement(N.zx,{variant:"plain","aria-label":c,onClick:d,id:`remove_group_${e}`,"aria-labelledby":`remove_group_${e} ${e}`},l.createElement(D.default,{"aria-hidden":"true"})));return l.createElement("div",{className:(0,O.i)("pf-v5-c-label-group",n,t&&y,h&&C,v&&x)},l.createElement("div",{className:(0,O.i)("pf-v5-c-label-group__main")},i),s&&f)};return 0===W&&void 0===T?null:l.createElement(j.w,null,(e=>M(this.props.id||e)))}}A.displayName="LabelGroup",A.defaultProps={expandedText:"Show Less",collapsedText:"${remaining} more",categoryName:"",defaultIsOpen:!1,numLabels:3,isClosable:!1,isCompact:!1,onClick:e=>{},closeBtnAriaLabel:"Close label group",tooltipPosition:"top","aria-label":"Label group category",isVertical:!1,isEditable:!1,hasEditableTextArea:!1}},75824:(e,t,a)=>{a.d(t,{u:()=>O,D:()=>L});var i=a(65353),l=a(66029);a(49854);const n="pf-m-top",o="pf-m-top-left",s="pf-m-top-right",r="pf-m-bottom",c="pf-m-bottom-left",p="pf-m-bottom-right",d="pf-m-left",m="pf-m-left-top",u="pf-m-left-bottom",f="pf-m-right",b="pf-m-right-top",g="pf-m-right-bottom",h="pf-m-text-align-left";var v=a(38296);const E=e=>{var{className:t,children:a,isLeftAligned:n}=e,o=(0,i.__rest)(e,["className","children","isLeftAligned"]);return l.createElement("div",Object.assign({className:(0,v.i)("pf-v5-c-tooltip__content",n&&h,t)},o),a)};E.displayName="TooltipContent";const y=e=>{var{className:t}=e,a=(0,i.__rest)(e,["className"]);return l.createElement("div",Object.assign({className:(0,v.i)("pf-v5-c-tooltip__arrow",t)},a))};y.displayName="TooltipArrow";var C=a(1774);const x={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var L,N=a(69121);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(L||(L={}));let _=1;const O=e=>{var{content:t,position:a="top",trigger:h="mouseenter focus",isVisible:L=!1,isContentLeftAligned:O=!1,enableFlip:k=!0,className:T="",entryDelay:P=300,exitDelay:R=300,appendTo:w=(()=>document.body),zIndex:D=9999,minWidth:I,maxWidth:j=x.value,distance:A=15,aria:W="describedby",flipBehavior:B=["top","right","bottom","left","top","right","bottom"],id:M="pf-tooltip-"+_++,children:S,animationDuration:V=300,triggerRef:z,"aria-live":F=(z?"polite":"off"),onTooltipHidden:$=(()=>{})}=e,H=(0,i.__rest)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const U=h.includes("mouseenter"),G=h.includes("focus"),q=h.includes("click"),K="manual"===h,[Z,J]=l.useState(!1),Q=l.createRef();l.useEffect((()=>{L?X():Y()}),[L]);const X=()=>{J(!0)},Y=()=>{J(!1)},ee={top:n,bottom:r,left:d,right:f,"top-start":o,"top-end":s,"bottom-start":c,"bottom-end":p,"left-start":m,"left-end":u,"right-start":b,"right-end":g},te=j!==x.value,ae=l.createElement("div",Object.assign({"aria-live":F,className:(0,v.i)("pf-v5-c-tooltip",T),role:"tooltip",id:M,style:{maxWidth:te?j:null},ref:Q},H),l.createElement(y,null),l.createElement(E,{isLeftAligned:O},t));return l.createElement(N.Popper,{trigger:"none"!==W&&Z?"describedby"===W&&S&&S.props&&!S.props["aria-describedby"]?l.cloneElement(S,{"aria-describedby":M}):"labelledby"===W&&S.props&&!S.props["aria-labelledby"]?l.cloneElement(S,{"aria-labelledby":M}):S:S,triggerRef:z,popper:ae,popperRef:Q,minWidth:void 0!==I?I:"revert",appendTo:w,isVisible:Z,positionModifiers:ee,distance:A,placement:a,onMouseEnter:U&&X,onMouseLeave:U&&Y,onPopperMouseEnter:U&&X,onPopperMouseLeave:U&&Y,onFocus:G&&X,onBlur:G&&Y,onDocumentClick:q&&((e,t)=>{Z?Y():e.target===t&&X()}),onDocumentKeyDown:K?null:e=>{K||e.key===C.yu.Escape&&Z&&Y()},onTriggerEnter:K?null:e=>{e.key===C.yu.Enter&&(Z?Y():X())},enableFlip:k,zIndex:D,flipBehavior:B,animationDuration:V,entryDelay:P,exitDelay:R,onHidden:$})};O.displayName="Tooltip"},41724:(e,t,a)=>{a.d(t,{w:()=>o});var i=a(66029),l=a(80164);let n=0;class o extends i.Component{constructor(){super(...arguments),this.uniqueElement=this.props.isRandom?"undefined"!=typeof crypto&&crypto.randomUUID?crypto.randomUUID():(0,l.Ki)():n++,this.id=`${this.props.prefix}${this.uniqueElement}`}render(){return this.props.children(this.id)}}o.displayName="GenerateId",o.defaultProps={prefix:"pf-random-id-",isRandom:!1}},72781:(e,t,a)=>{a.r(t),a.d(t,{TimesCircleIcon:()=>n,TimesCircleIconConfig:()=>l,default:()=>o});var i=a(40400);const l={name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0},n=(0,i.I)(l),o=n},24307:(e,t,a)=>{a.d(t,{ZP:()=>i});const i=(0,a(40400).I)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})}}]);
//# sourceMappingURL=../sourcemaps/3224.8387e854680ac9dca7d259f24bde33cc.js.map