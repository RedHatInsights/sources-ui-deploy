"use strict";(self.webpackChunksources=self.webpackChunksources||[]).push([[7038],{36621:(e,t,i)=>{i.d(t,{p:()=>o});var s=i(65353),n=i(28416),r=i(49945),a=i(38296);const o=e=>{var{children:t,className:i,component:o="div",id:l,isLiveRegion:c=!1,"aria-label":p}=e,d=(0,s.__rest)(e,["children","className","component","id","isLiveRegion","aria-label"]);const m=o;return n.createElement(m,Object.assign({id:l,className:(0,a.i)(r.Z.helperText,i)},c&&{"aria-live":"polite"},"ul"===o&&{role:"list","aria-label":p},d),t)};o.displayName="HelperText"},2628:(e,t,i)=>{i.d(t,{u:()=>m});var s=i(65353),n=i(28416),r=i(49945),a=i(38296);const o=(0,i(40400).I)({name:"MinusIcon",height:512,width:448,svgPath:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0});var l=i(69957),c=i(68778),p=i(43047);const d={default:"",indeterminate:r.Z.modifiers.indeterminate,warning:r.Z.modifiers.warning,success:r.Z.modifiers.success,error:r.Z.modifiers.error},m=e=>{var{children:t,className:i,component:m="div",variant:u="default",icon:h,isDynamic:f=!1,hasIcon:g=f,id:v,screenReaderText:x=`${u} status`}=e,T=(0,s.__rest)(e,["children","className","component","variant","icon","isDynamic","hasIcon","id","screenReaderText"]);const I=m;return n.createElement(I,Object.assign({className:(0,a.i)(r.Z.helperTextItem,d[u],f&&r.Z.modifiers.dynamic,i),id:v},T),h&&n.createElement("span",{className:(0,a.i)(r.Z.helperTextItemIcon),"aria-hidden":!0},h),g&&!h&&n.createElement("span",{className:(0,a.i)(r.Z.helperTextItemIcon),"aria-hidden":!0},("default"===u||"indeterminate"===u)&&n.createElement(o,null),"warning"===u&&n.createElement(l.default,null),"success"===u&&n.createElement(c.default,null),"error"===u&&n.createElement(p.default,null)),n.createElement("span",{className:(0,a.i)(r.Z.helperTextItemText)},t,f&&n.createElement("span",{className:"pf-v5-screen-reader"},": ",x,";")))};m.displayName="HelperTextItem"},65802:(e,t,i)=>{i.d(t,{B:()=>l,y:()=>o});var s=i(65353),n=i(28416),r=i(12276),a=i(38296);const o=e=>{var{className:t,children:i,innerRef:o}=e,l=(0,s.__rest)(e,["className","children","innerRef"]);const c=n.useRef(null),p=o||c;return n.createElement("div",Object.assign({ref:p,className:(0,a.i)(r.Z.inputGroup,t)},l),i)};o.displayName="InputGroupBase";const l=n.forwardRef(((e,t)=>n.createElement(o,Object.assign({innerRef:t},e))));l.displayName="InputGroup"},43446:(e,t,i)=>{i.d(t,{o:()=>o});var s=i(65353),n=i(28416),r=i(12276),a=i(38296);const o=e=>{var{className:t,children:i,isFill:o=!1,isBox:l=!1,isPlain:c,isDisabled:p}=e,d=(0,s.__rest)(e,["className","children","isFill","isBox","isPlain","isDisabled"]);return n.createElement("div",Object.assign({className:(0,a.i)(r.Z.inputGroupItem,o&&r.Z.modifiers.fill,l&&r.Z.modifiers.box,c&&r.Z.modifiers.plain,p&&r.Z.modifiers.disabled,t)},d),i)};o.displayName="InputGroupItem"},7038:(e,t,i)=>{i.r(t),i.d(t,{TimePicker:()=>w});var s=i(65353),n=i(28416),r=i(38296),a=i(31438),o=i(47376),l=i(80164),c=i(69121),p=i(47680),d=i(69579),m=i(46820),u=i(49732),h=i(65802),f=i(43446),g=i(92607),v=i(1774);const x=" AM",T=" PM",I=(e,t,i,s,n)=>{const r=new Date(e);if(!isNaN(r.getDate())&&(e instanceof Date||e.includes("T"))){const e=s?`${r.getHours()>12?r.getHours()-12:r.getHours()}`:`${r.getHours()}`.padStart(2,"0"),t=`${r.getMinutes()}`.padStart(2,"0"),a=n?`${r.getSeconds()}`.padStart(2,"0"):"",o=a?`${i}${a}`:"";let l="";return s&&r.getHours()>11?l=T:s&&(l=x),`${e}${i}${t}${o}${l}`}if("string"==typeof e&&""!==(e=e.trim())&&$(e,t,i,s)){const[,r,a,o,l=""]=t.exec(e),c=n?`${i}${null!=o?o:"00"}`:"";let p="";if(s){const e=l.toUpperCase();p=e===x.toUpperCase().trim()?x:e===T.toUpperCase().trim()||(new Date).getHours()>11?T:x}return`${r}${i}${a}${c}${p}`}return e.toString()},$=(e,t,i,s)=>{const n=new Date(e);if(!isNaN(n.getDate())&&e.includes("T"))return!0;const r=parseInt(e.split(i)[0]),a=r>=(s?1:0)&&r<=(s?12:23);return""===e||t.test(e)&&a},S=(e,t)=>{const i=e.match(t);return i&&i.length?/pm/i.test(i[4])?12===parseInt(i[1])?parseInt(i[1]):parseInt(i[1])+12:/am/i.test(i[4])&&12===parseInt(i[1])?0:parseInt(i[1]):null},E=(e,t)=>{const i=e.match(t);return i&&i.length?parseInt(i[2]):null},R=(e,t)=>{var i;const s=null===(i=e.match(t))||void 0===i?void 0:i[3];return s?parseInt(s):null},k=(e,t,i,s,n)=>{if(""===i.trim())return!0;const r=y(e,s,n),a=y(i,s,n),o=y(t,s,n);return r<=a&&a<=o},y=(e,t,i)=>{const s=new RegExp(`^\\s*(\\d\\d?)${t}([0-5]\\d)${t}?([0-5]\\d)?\\s*([AaPp][Mm])?\\s*$`).exec(e);if(!s||!s.length)return;let n=s[1].padStart(2,"0");const r=s[2];let a=s[3]?`${t}${s[3]}`:"";!a&&i&&(a=`${t}00`);const o=s[4]||"";return"PM"===o.toUpperCase()&&"12"!==n?n=`${parseInt(n)+12}`:"AM"===o.toUpperCase()&&"12"===n&&(n="00"),`${n}${t}${r}${a}`};var O=i(36621),C=i(2628);const b=(0,i(40400).I)({name:"OutlinedClockIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",yOffset:0,xOffset:0}),D="--pf-v5-c-date-picker__input--c-form-control--Width";class w extends n.Component{constructor(e){super(e),this.baseComponentRef=n.createRef(),this.toggleRef=n.createRef(),this.inputRef=n.createRef(),this.menuRef=n.createRef(),this.onDocClick=e=>{var t,i,s,n;const r=null===(i=null===(t=this.toggleRef)||void 0===t?void 0:t.current)||void 0===i?void 0:i.contains(e.target),a=null===(n=null===(s=this.menuRef)||void 0===s?void 0:s.current)||void 0===n?void 0:n.contains(e.target);!this.state.isTimeOptionsOpen||r||a||this.onToggle(!1)},this.handleGlobalKeys=e=>{var t,i,s,n;const{isTimeOptionsOpen:r,focusedIndex:a,scrollIndex:o}=this.state;(null===(i=null===(t=this.inputRef)||void 0===t?void 0:t.current)||void 0===i?void 0:i.contains(e.target))?r||e.key===v.yu.Tab||e.key===v.yu.Escape?r&&(e.key===v.yu.Escape||e.key===v.yu.Tab?this.onToggle(!1):e.key===v.yu.Enter?null!==a?(this.focusSelection(a),e.stopPropagation()):this.onToggle(!1):e.key!==v.yu.ArrowDown&&e.key!==v.yu.ArrowUp||(this.focusSelection(o),this.updateFocusedIndex(0),e.preventDefault())):this.onToggle(!0):(null===(n=null===(s=this.menuRef)||void 0===s?void 0:s.current)||void 0===n?void 0:n.contains(e.target))&&(e.key===v.yu.ArrowDown?(this.updateFocusedIndex(1),e.preventDefault()):e.key===v.yu.ArrowUp?(this.updateFocusedIndex(-1),e.preventDefault()):e.key!==v.yu.Escape&&e.key!==v.yu.Tab||(this.inputRef.current.focus(),this.onToggle(!1)))},this.updateFocusedIndex=e=>{this.setState((t=>{const i=this.getOptions().length-1;let s=null!==t.focusedIndex?t.focusedIndex+e:t.scrollIndex+e;return s<0?s=i:s>i&&(s=0),this.scrollToIndex(s),{focusedIndex:s}}))},this.getIndexToScroll=e=>"inline"===this.props.menuAppendTo?e>0?e-1:0:e,this.scrollToIndex=e=>{this.getOptions()[e].closest(`.${o.Z.menuContent}`).scrollTop=this.getOptions()[this.getIndexToScroll(e)].offsetTop},this.focusSelection=e=>{var t;const i=-1!==e?e:0;(null===(t=this.menuRef)||void 0===t?void 0:t.current)&&this.getOptions()[i].querySelector(`.${o.Z.menuItem}`).focus()},this.scrollToSelection=e=>{const{delimiter:t,is24Hour:i}=this.props;let s=e.split(this.props.delimiter),n=null;if(s.length<2?s=(e=`${e}${t}00`).split(t):s.length>2&&(s=(e=I(e,this.state.timeRegex,t,!i,!1)).split(t)),!i&&s.length>1&&s[1].length<2){const i=0===s[1].length?"00":s[1]+"0";e=`${s[0]}${t}${i}${(new Date).getHours()>11?T:x}`}else!i&&s.length>1&&2===s[1].length&&!e.toUpperCase().includes(x.toUpperCase().trim())&&!e.toUpperCase().includes(T.toUpperCase().trim())&&(e=`${e}${(new Date).getHours()>11?T:x}`);let r=this.getOptions().findIndex((t=>t.textContent===e));if(-1!==r)this.scrollToIndex(r),n=r;else if(2===s.length){let n="";i||(s[1].toUpperCase().includes("P")?n=T:s[1].toUpperCase().includes("A")&&(n=x)),e=`${s[0]}${t}00${n}`,r=this.getOptions().findIndex((t=>t.textContent===e)),-1!==r&&this.scrollToIndex(r)}this.setState({focusedIndex:n,scrollIndex:r})},this.getRegExp=(e=!0)=>{const{is24Hour:t,delimiter:i}=this.props;let s=`\\s*(\\d\\d?)${i}([0-5]\\d)`;return e&&(s+=`${i}?([0-5]\\d)?`),new RegExp(`^${s}${t?"":"\\s*([AaPp][Mm])?"}\\s*$`)},this.getOptions=()=>{var e;return(null===(e=this.menuRef)||void 0===e?void 0:e.current)?Array.from(this.menuRef.current.querySelectorAll(`.${o.Z.menuListItem}`)):[]},this.isValidFormat=e=>{if(this.props.validateTime)return this.props.validateTime(e);const{delimiter:t,is24Hour:i,includeSeconds:s}=this.props;return $(e,this.getRegExp(s),t,!i)},this.isValidTime=e=>{const{delimiter:t,includeSeconds:i}=this.props,{minTimeState:s,maxTimeState:n}=this.state;return k(s,n,e,t,i)},this.isValid=e=>this.isValidFormat(e)&&this.isValidTime(e),this.onToggle=e=>{this.setState((t=>{const{timeRegex:i,isInvalid:s,timeState:n}=t,{delimiter:r,is24Hour:a,includeSeconds:o,onChange:l}=this.props,c=I(n,i,r,!a,o);return l&&!e&&c!==n&&l(null,c,S(c,i),E(c,i),R(c,i),this.isValid(c)),{isTimeOptionsOpen:e,timeState:c,isInvalid:e?s:!this.isValid(c)}})),this.props.setIsOpen(e),e||this.inputRef.current.focus()},this.onSelect=e=>{const{timeRegex:t,timeState:i}=this.state,{delimiter:s,is24Hour:n,includeSeconds:r,setIsOpen:a}=this.props,o=I(e.target.textContent,t,s,!n,r);o!==i&&this.onInputChange(e,o),this.inputRef.current.focus(),this.setState({isTimeOptionsOpen:!1,isInvalid:!1}),a(!1)},this.onInputClick=e=>{this.state.isTimeOptionsOpen||this.onToggle(!0),e.stopPropagation()},this.onInputChange=(e,t)=>{const{onChange:i}=this.props,{timeRegex:s}=this.state;i&&i(e,t,S(t,s),E(t,s),R(t,s),this.isValid(t)),this.scrollToSelection(t),this.setState({timeState:t})};const{is24Hour:t,delimiter:i,time:s,includeSeconds:r,isOpen:a}=this.props;let{minTime:l,maxTime:c}=this.props;if(""===l){const e=r?`${i}00`:"";l=t?`00${i}00${e}`:`12${i}00${e} AM`}if(""===c){const e=r?`${i}59`:"";c=t?`23${i}59${e}`:`11${i}59${e} PM`}const p=this.getRegExp();this.state={isInvalid:!1,isTimeOptionsOpen:a,timeState:I(s,p,i,!t,r),focusedIndex:null,scrollIndex:0,timeRegex:p,minTimeState:I(l,p,i,!t,r),maxTimeState:I(c,p,i,!t,r)}}componentDidMount(){document.addEventListener("mousedown",this.onDocClick),document.addEventListener("touchstart",this.onDocClick),document.addEventListener("keydown",this.handleGlobalKeys),this.setState({isInvalid:!this.isValid(this.state.timeState)})}componentWillUnmount(){document.removeEventListener("mousedown",this.onDocClick),document.removeEventListener("touchstart",this.onDocClick),document.removeEventListener("keydown",this.handleGlobalKeys)}componentDidUpdate(e,t){const{timeState:i,isTimeOptionsOpen:s,isInvalid:n,timeRegex:r}=this.state,{time:a,is24Hour:o,delimiter:l,includeSeconds:c,isOpen:p,minTime:d,maxTime:m}=this.props;if(e.isOpen!==p&&this.onToggle(p),s&&!t.isTimeOptionsOpen&&i&&!n&&this.scrollToSelection(i),l!==e.delimiter&&this.setState({timeRegex:this.getRegExp()}),""!==a&&a!==e.time){const e=I(a,r,l,!o,c);this.setState({timeState:e,isInvalid:!this.isValid(e)})}""!==d&&d!==e.minTime&&this.setState({minTimeState:I(d,r,l,!o,c)}),""!==m&&m!==e.maxTime&&this.setState({maxTimeState:I(m,r,l,!o,c)})}render(){const e=this.props,{"aria-label":t,isDisabled:i,className:o,placeholder:v,id:I,menuAppendTo:$,is24Hour:S,invalidFormatErrorMessage:E,invalidMinMaxErrorMessage:R,stepMinutes:y,width:w,delimiter:M,inputProps:N,onChange:_,setIsOpen:H,isOpen:P,time:Z,validateTime:A,minTime:U,maxTime:V,includeSeconds:F,zIndex:G}=e,L=(0,s.__rest)(e,["aria-label","isDisabled","className","placeholder","id","menuAppendTo","is24Hour","invalidFormatErrorMessage","invalidMinMaxErrorMessage","stepMinutes","width","delimiter","inputProps","onChange","setIsOpen","isOpen","time","validateTime","minTime","maxTime","includeSeconds","zIndex"]),{timeState:z,isTimeOptionsOpen:j,isInvalid:B,minTimeState:K,maxTimeState:q}=this.state,W={[D]:w},J=((e,t,i,s,n,r)=>{const a=[],o=new Date((new Date).setHours(0,0,0,0)),l=o.getDay();for(;o.getDay()===l;){let l=o.getHours(),c=x;t&&(0===l?l=12:l>=12&&(c=T),l>12&&(l%=12)),l=t?l.toString():l.toString().padStart(2,"0");const p=`${l}${i}${o.getMinutes().toString().padStart(2,"0")}${t?c:""}`;k(s,n,p,i,r)&&a.push(p),o.setMinutes(o.getMinutes()+e)}return a})(y,!S,M,K,q,F),Q=this.isValidFormat(z),X=I||(0,l.Ki)("time-picker"),Y=()=>this.baseComponentRef&&this.baseComponentRef.current?this.baseComponentRef.current.parentElement:null,ee=n.createElement(p.v,{ref:this.menuRef,isScrollable:!0},n.createElement(d.D,{maxMenuHeight:"200px"},n.createElement(m.q,{"aria-label":t},J.map(((e,t)=>n.createElement(u.s,{onClick:this.onSelect,key:e,id:`${X}-option-${t}`},e)))))),te=n.createElement(g.oi,Object.assign({"aria-haspopup":"menu",id:`${X}-input`,"aria-label":t,validated:B?"error":"default",placeholder:v,value:z||"",type:"text",customIcon:n.createElement(b,null),onClick:this.onInputClick,onChange:this.onInputChange,autoComplete:"off",isDisabled:i,isExpanded:j,ref:this.inputRef},N));let ie;switch($){case"inline":ie=()=>this.toggleRef.current;break;case"parent":ie=Y;break;default:ie=$}return n.createElement("div",{ref:this.baseComponentRef,className:(0,r.i)(a.Z.datePicker,o)},n.createElement("div",Object.assign({className:(0,r.i)(a.Z.datePickerInput),style:W},L),n.createElement(h.B,null,n.createElement(f.o,null,n.createElement("div",{id:X},n.createElement("div",{ref:this.toggleRef,style:{paddingLeft:"0"}},n.createElement(c.Popper,{appendTo:ie,trigger:te,triggerRef:this.toggleRef,popper:ee,popperRef:this.menuRef,isVisible:j,zIndex:G}))))),B&&n.createElement("div",{className:(0,r.i)(a.Z.datePickerHelperText)},n.createElement(O.p,null,n.createElement(C.u,{variant:"error"},Q?R:E)))))}}w.displayName="TimePicker",w.defaultProps={className:"",isDisabled:!1,time:"",is24Hour:!1,invalidFormatErrorMessage:"Invalid time format",invalidMinMaxErrorMessage:"Invalid time entered",placeholder:"hh:mm",delimiter:":","aria-label":"Time picker",width:"150px",menuAppendTo:"inline",stepMinutes:30,inputProps:{},minTime:"",maxTime:"",isOpen:!1,setIsOpen:()=>{},zIndex:9999}},31438:(e,t,i)=>{i.d(t,{Z:()=>s}),i(54476);const s={datePicker:"pf-v5-c-date-picker",datePickerCalendar:"pf-v5-c-date-picker__calendar",datePickerHelperText:"pf-v5-c-date-picker__helper-text",datePickerInput:"pf-v5-c-date-picker__input",formControl:"pf-v5-c-form-control",modifiers:{alignRight:"pf-m-align-right",top:"pf-m-top",static:"pf-m-static"},themeDark:"pf-v5-theme-dark"}},49945:(e,t,i)=>{i.d(t,{Z:()=>s}),i(71338);const s={helperText:"pf-v5-c-helper-text",helperTextItem:"pf-v5-c-helper-text__item",helperTextItemIcon:"pf-v5-c-helper-text__item-icon",helperTextItemText:"pf-v5-c-helper-text__item-text",modifiers:{hidden:"pf-m-hidden",indeterminate:"pf-m-indeterminate",warning:"pf-m-warning",success:"pf-m-success",error:"pf-m-error",dynamic:"pf-m-dynamic"},themeDark:"pf-v5-theme-dark"}},12276:(e,t,i)=>{i.d(t,{Z:()=>s}),i(74282);const s={inputGroup:"pf-v5-c-input-group",inputGroupItem:"pf-v5-c-input-group__item",inputGroupText:"pf-v5-c-input-group__text",modifiers:{box:"pf-m-box",plain:"pf-m-plain",disabled:"pf-m-disabled",fill:"pf-m-fill"},themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/7038.281bfd5c2159f4dd2dca2aaab6c30824.js.map