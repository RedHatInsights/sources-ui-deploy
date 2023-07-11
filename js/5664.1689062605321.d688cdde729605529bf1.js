"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[5664],{74978:(e,t,n)=>{n.d(t,{dB:()=>r,Hy:()=>a,ZP:()=>l});var o=n(40400);const r={name:"ExportIcon",height:1024,width:1024,svgPath:"M975.8,636.9 L870.9,741.8 L457.9,328.6 C452.1,322.8 445.4,319.9 437.9,319.9 C430.4,319.9 423.7,322.8 417.9,328.6 L328.8,417.7 C323,423.5 320.1,430.2 320.1,437.7 C320.1,445.2 323,451.9 328.8,457.7 L742,870.7 L636.9,975.8 C610.5,1002.2 619.4,1024 656.8,1024 L956,1024 C1014.5,1024 1024,1013.7 1024,955.9 L1024,656.7 C1023.9,619.4 1002.2,610.5 975.8,636.9 Z M128,128 L896,128 L896,361.7 C896.007942,370.182681 899.389907,378.313788 905.4,384.3 L996.7,475.6 C1006.8,485.7 1024,478.5 1024,464.3 L1024,22.7 C1024,16.1 1021.9,10.7 1017.6,6.4 C1013.3,2.1 1007.9,0 1001.3,0 L22.7,0 C16.1,0 10.7,2.1 6.4,6.4 C2.1,10.7 0,16.1 0,22.7 L0,1001.3 C0,1007.9 2.1,1013.3 6.4,1017.6 C10.7,1021.9 16.1,1024 22.7,1024 L463.4,1024 C469.862884,1023.98894 475.684489,1020.0908 478.156232,1014.11925 C480.627976,1008.14769 479.264428,1001.27548 474.7,996.7 L383.4,905.4 C377.413788,899.389907 369.282681,896.007942 360.8,896 L128,896 L128,128 Z",yOffset:0,xOffset:0},a=(0,o.IU)(r),l=a},76889:(e,t,n)=>{n.d(t,{_t:()=>r,k1:()=>a,ZP:()=>l});var o=n(40400);const r={name:"FilterIcon",height:512,width:512,svgPath:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",yOffset:0,xOffset:0},a=(0,o.IU)(r),l=a},40472:(e,t)=>{t.__esModule=!0,t.global_breakpoint_2xl={name:"--pf-global--breakpoint--2xl",value:"1450px",var:"var(--pf-global--breakpoint--2xl)"},t.default=t.global_breakpoint_2xl},92732:(e,t)=>{t.__esModule=!0,t.global_breakpoint_lg={name:"--pf-global--breakpoint--lg",value:"992px",var:"var(--pf-global--breakpoint--lg)"},t.default=t.global_breakpoint_lg},78236:(e,t)=>{t.__esModule=!0,t.global_breakpoint_md={name:"--pf-global--breakpoint--md",value:"768px",var:"var(--pf-global--breakpoint--md)"},t.default=t.global_breakpoint_md},63242:(e,t)=>{t.__esModule=!0,t.global_breakpoint_xl={name:"--pf-global--breakpoint--xl",value:"1200px",var:"var(--pf-global--breakpoint--xl)"},t.default=t.global_breakpoint_xl},52918:(e,t,n)=>{n.d(t,{Z:()=>S});var o=n(93433),r=n(87462),a=n(45987),l=n(15671),i=n(43144),c=n(97326),u=n(60136),s=n(82963),p=n(61120),d=n(4942),f=n(92950),h=n.n(f),v=n(45697),b=n.n(v),g=n(94184),m=n.n(g),y=n(56787),Z=n(84457),k=n(75728),O=n(9571),C=n(93149),E=n(62472);var w=function(e){(0,u.Z)(b,e);var t,n,v=(t=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,p.Z)(t);if(n){var r=(0,p.Z)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return(0,s.Z)(this,e)});function b(){var e;(0,l.Z)(this,b);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=v.call.apply(v,[this].concat(n)),(0,d.Z)((0,c.Z)(e),"state",{isOpen:!1,hasError:!1,ouiaStateId:(0,E.ql)("RHI/BulkSelect")}),(0,d.Z)((0,c.Z)(e),"componentDidCatch",(function(){console.error("Above error is caused because you are using outdated PF react core library. Count will not be visible unless you update it."),e.setState({hasError:!0})})),(0,d.Z)((0,c.Z)(e),"onToggle",(function(t){e.setState({isOpen:t})})),e}return(0,i.Z)(b,[{key:"render",value:function(){var e=this,t=this.state,n=t.isOpen,l=t.hasError,i=this.props,c=i.id,u=i.isDisabled,s=i.items,p=i.onSelect,d=i.checked,v=i.toggleProps,b=i.count,g=i.className,E=i.ouiaId,w=i.ouiaSafe,S=(0,a.Z)(i,["id","isDisabled","items","onSelect","checked","toggleProps","count","className","ouiaId","ouiaSafe"]),P=void 0!==E?E:this.state.ouiaStateId;return h().createElement(f.Fragment,null,s&&s.length>0?h().createElement(y.L,(0,r.Z)({onSelect:function(){return e.onToggle(!1)}},S,{className:m()(g,"ins-c-bulk-select"),ouiaId:P,ouiaSafe:w,toggle:h().createElement(k.Z,(0,r.Z)({},v,{isDisabled:u,ouiaId:P,splitButtonItems:[h().createElement(f.Fragment,{key:"split-checkbox"},l?h().createElement(O.o,{id:c?"".concat(c,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:p,checked:d,ouiaId:P}):h().createElement(O.o,{id:c?"".concat(c,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:p,isChecked:d,ouiaId:P},b?"".concat(b," selected"):""))],onToggle:this.onToggle})),isOpen:n,dropdownItems:[].concat((0,o.Z)(void 0!==b&&b>0?[h().createElement(Z.h,{key:"count",isDisabled:!0,className:l?"":"ins-c-bulk-select__selected"},b," Selected")]:[]),(0,o.Z)(s.map((function(e,t){return h().createElement(Z.h,(0,r.Z)({component:"button",key:e.key||t,ouiaId:"".concat(P,"-").concat(e.key||t),onClick:function(n){return e.onClick&&e.onClick(n,e,t)}},null==e?void 0:e.props),e.title)}))))})):h().createElement(C.X,(0,r.Z)({},S,{className:m()(g,"ins-c-bulk-select"),id:"".concat(c,"-checkbox"),isChecked:d,onChange:p})))}}]),b}(f.Component);w.propTypes={count:b().number,className:b().string,items:b().arrayOf(b().shape({title:b().string,onClick:b().func})),checked:b().bool,id:b().string,onSelect:b().func,toggleProps:b().any,isDisabled:b().bool,ouiaId:b().string,ouiaSafe:b().bool},w.defaultProps={className:"",isDisabled:!1,items:[],checked:!1,onSelect:function(){},ouiaSafe:!0};const S=w},40787:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(45987),r=n(87462),a=n(93433),l=n(15671),i=n(43144),c=n(97326),u=n(60136),s=n(82963),p=n(61120),d=n(4942),f=n(92950),h=n.n(f),v=n(45697),b=n.n(v),g=n(54680),m=n(92694),y=n(64403),Z=n(68097),k=n(18446),O=n.n(k);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var E=function(e){(0,u.Z)(b,e);var t,n,v=(t=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,p.Z)(t);if(n){var r=(0,p.Z)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return(0,s.Z)(this,e)});function b(){var e;(0,l.Z)(this,b);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=v.call.apply(v,[this].concat(n)),(0,d.Z)((0,c.Z)(e),"state",{isExpanded:!1,selected:[]}),(0,d.Z)((0,c.Z)(e),"onToggle",(function(t){e.setState({isExpanded:t})})),(0,d.Z)((0,c.Z)(e),"calculateSelected",(function(){var t=e.state.selected,n=e.props.value;return Array.from(new Set([].concat((0,a.Z)(n&&n.length>0&&n.constructor===Array?n.map((function(e){return e.value||e})):[]),(0,a.Z)(t))))})),(0,d.Z)((0,c.Z)(e),"onSelect",(function(t,n){var o=e.props.onChange,r=e.calculateSelected();o(t,r=r.includes(n)?r.filter((function(e){return e!==n})):[].concat((0,a.Z)(r),[n]),n),e.setState({selected:r})})),e}return(0,i.Z)(b,[{key:"componentDidUpdate",value:function(e){var t=e.value,n=this.props.value;O()(t,n)||this.setState({selected:n})}},{key:"render",value:function(){var e=this.state.isExpanded,t=this.props,n=t.items,a=t.placeholder,l=t.isDisabled,i=t.className;return h().createElement(f.Fragment,null,!n||n&&n.length<=0?h().createElement(Z.Z,(0,r.Z)({},this.props,{value:"".concat(this.calculateSelected())})):h().createElement(g.P,{className:i,variant:y.TM.checkbox,"aria-label":"Select Input",onToggle:this.onToggle,isDisabled:l,onSelect:this.onSelect,selections:this.calculateSelected(),isOpen:e,placeholderText:a,ouiaId:a},n.map((function(e,t){var n=e.value,a=e.onClick,l=e.label,i=e.id,c=(0,o.Z)(e,["value","onClick","label","id"]);return h().createElement(m.$,(0,r.Z)({},c,{key:i||t,value:String(n||i||t),onClick:function(e){return a&&a(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({value:n,label:l,id:i},c),t)}}),l)}))))}}]),b}(f.Component);E.propTypes={onChange:b().func,value:b().arrayOf(b().oneOfType([b().string,b().shape({label:b().node,value:b().string})])),placeholder:b().string,items:b().arrayOf(b().shape({value:b().string,label:b().node,id:b().string,onClick:b().func})),isDisabled:b().bool,className:b().string},E.defaultProps={items:[],value:[],onChange:function(){},isDisabled:!1};const w=E},18213:(e,t,n)=>{n.d(t,{Z:()=>R});var o=n(45987),r=n(87462),a=n(15671),l=n(43144),i=n(97326),c=n(60136),u=n(82963),s=n(61120),p=n(4942),d=n(92950),f=n.n(d),h=n(56787),v=n(84457),b=n(75728),g=n(34512),m=n(79851),y=n(1595),Z=n(33109),k=n(12466),O=n(76889),C=n(78236),E=n(68097),w=n(87123),S=n(45697),P=n.n(S),x=n(94184),D=n.n(x);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){(0,c.Z)(P,e);var t,n,S=(t=P,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return(0,u.Z)(this,e)});function P(e){var t;return(0,a.Z)(this,P),e.useMobileLayout||console.warn('The prop "useMobileLayout" is set to false. You are using an outdated mobile layout of conditional filter.\n            Please switch to new layout by adding "useMobileLayout={true}" prop to the PrimaryToolbar or ConditionalFilter directly.\n            The new mobile layout will become the default in next minor release.'),t=S.call(this,e),(0,p.Z)((0,i.Z)(t),"dropdownToggle",(function(e){t.setState({isOpen:e})})),(0,p.Z)((0,i.Z)(t),"onChange",(function(e,n){t.setState({stateValue:n})})),(0,p.Z)((0,i.Z)(t),"getWrapper",(function(){return t.props.useMobileLayout&&t.state.isMobile?function(e){return f().createElement(k.R,(0,r.Z)({},e,{breakpoint:"md",toggleIcon:f().createElement(O.ZP,null)}))}:d.Fragment})),(0,p.Z)((0,i.Z)(t),"updateFilterViewport",(function(e){return e<=t.breakpointConstant})),t.breakpointConstant=parseInt(C.default.value.replace("px","")),t.state={isOpen:!1,stateValue:void 0,isMobile:t.updateFilterViewport(window.innerWidth)},t}return(0,l.Z)(P,[{key:"componentDidMount",value:function(){var e=this;this.resizeListener=window.addEventListener("resize",(function(t){e.setState((function(n){return T(T({},n),{},{isMobile:e.updateFilterViewport(t.target.innerWidth)})}))}))}},{key:"componentWillUnmount",value:function(){this.resizeListener&&window.removeEventListener(this.resizeListener)}},{key:"render",value:function(){var e=this,t=this.props,n=t.items,a=t.value,l=t.onChange,i=t.placeholder,c=t.hideLabel,u=t.isDisabled,s=t.useMobileLayout,p=(0,o.Z)(t,["items","value","onChange","placeholder","hideLabel","isDisabled","useMobileLayout"]),k=this.state,C=k.isOpen,S=k.stateValue,P=k.isMobile,x=l?a:S,j=n&&n.length&&(n.find((function(e,t){return e.value===x||t===x}))||n[0]),T=l||this.onChange,_=j&&(w.w[j.type]||w.w.text),I=function(e){return e[0].toUpperCase()+e.substring(1)},R=s&&P,L=this.getWrapper();return f().createElement(L,null,s&&P&&f().createElement(Z.k,{className:"ins-c-conditional-filter mobile"},n.map((function(e,t){var n=e&&(w.w[e.type]||w.w.text);return f().createElement(y.E,{key:t},f().createElement(n,(0,r.Z)({},e.type!==w.Y.custom&&{placeholder:i||e.placeholder||"Filter by ".concat(e.label),id:e.filterValues&&e.filterValues.id||x},e.filterValues)))}))),!R&&f().createElement(d.Fragment,null,!n||n&&n.length<=0?f().createElement("div",{className:D()("ins-c-conditional-filter",{desktop:s})},f().createElement(E.Z,(0,r.Z)({},p,{value:x,onChange:function(e){return T(e,e.target.value)},placeholder:i,"widget-type":"InsightsInput"}))):f().createElement(m.P,{className:D()("ins-c-conditional-filter",{desktop:s})},n.length>1&&f().createElement(g.J,null,f().createElement(h.L,{className:"ins-c-conditional-filter__group",onSelect:function(){return e.dropdownToggle(!1)},isOpen:C,ouiaId:"ConditionalFilter",toggle:f().createElement(b.Z,{onToggle:this.dropdownToggle,isDisabled:u,className:c?"ins-c-conditional-filter__no-label":"",ouiaId:"ConditionalFilter"},f().createElement(O.ZP,{size:"sm"}),!c&&f().createElement("span",{className:"ins-c-conditional-filter__value-selector"},j&&I(j.label))),dropdownItems:n.map((function(e,t){return f().createElement(v.h,{key:e.id?"".concat(e.id,"-dropdown"):t,component:"button",ouiaId:e.label,onClick:function(n){return T(n,e.value||t,e)},isHovered:j.label===e.label},I(e.label))}))})),_&&f().createElement(g.J,{isFilled:!0},f().createElement(_,(0,r.Z)({},j.type!==w.Y.custom&&{placeholder:i||j.placeholder||"Filter by ".concat(j.label),id:j.filterValues&&j.filterValues.id||x},j.filterValues))))))}}]),P}(d.Component),I={value:P().string,placeholder:P().string,onChange:P().func};_.propTypes=T(T({hideLabel:P().bool,items:P().arrayOf(P().shape({id:P().string,label:P().node,value:P().string,type:P().oneOf(["text","checkbox","radio","custom","group"]),filterValues:P().oneOfType([P().shape(I),P().shape(T(T({},I),{},{value:P().oneOfType([P().string,P().arrayOf(P().oneOfType([P().string,P().shape({label:P().node,value:P().string})])),P().shape((0,p.Z)({},P().string,P().any))]),items:P().arrayOf(P().shape({label:P().node,value:P().string}))}))])}))},I),{},{id:P().string,isDisabled:P().bool,useMobileLayout:P().bool}),_.defaultProps={value:"",items:[],hideLabel:!1,isDisabled:!1,id:"default-input",useMobileLayout:!1};const R=_},23820:(e,t,n)=>{n.d(t,{Z:()=>V});var o=n(4942),r=n(87462),a=n(29439),l=n(92950),i=n.n(l),c=n(45697),u=n.n(c),s=n(94184),p=n.n(s),d=n(92607),f=n(46820),h=n(49732),v=n(22025),b=n(93149),g=n(47173),m=n(23971),y=n(47680),Z=n(56726),k=n(69121),O=n(92504),C=n(86915),E=n(93433),w=n(45987),S=n(22137);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e,t,n,o,r,a){var l=x(x({},a),r);if(void 0===l[e])return!1;if(l[e][t]instanceof Object){if(l[e][t].isSelected){var i,c,u,s,p,d,f,h;if(null!==(i=l[e][t])&&void 0!==i&&null!==(c=i.item)&&void 0!==c&&c.id)return n===(null===(p=l[e][t])||void 0===p||null===(d=p.item)||void 0===d?void 0:d.id);if(null!==(u=l[e][t])&&void 0!==u&&null!==(s=u.item)&&void 0!==s&&s.tagValue)return o===(null===(f=l[e][t])||void 0===f||null===(h=f.item)||void 0===h?void 0:h.tagValue)}return l[e][t].isSelected}return Boolean(l[e][t])},j=function(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",a=arguments.length>5?arguments[5]:void 0,l=arguments.length>6?arguments[6]:void 0,i=arguments.length>7?arguments[7]:void 0,c=(null==e?void 0:e.map((function(c,u){return x(x({},c),{},{className:"".concat((null==c?void 0:c.className)||"pf-u-pl-sm"),key:c.id||c.value||u,value:String(c.value||c.id||u),onClick:function(u,s,p){var d,f=[u,n(o||c.type,r,(o||c.type)===S.Z.treeView?s:c.value,p),x({value:r,label:a||c.label,id:l||c.id,type:o||c.type,items:e},i||c),c,r,c.value];t.apply(void 0,f),null==c||null===(d=c.onClick)||void 0===d||d.call.apply(d,[c].concat(f))}})})))||[];return c.filter((function(e){return!e.noFilter}))},T=function e(t){return t.id=t.id||t.value,t.name=t.label||t.name,t.value=t.id,t.label=t.name,t.children?x(x({},t),{},{children:t.children.map((function(t){return e(t)}))}):t},_=function(e){return function(t,n,r,a){var l=null==e?void 0:e[n],i=t===S.Z.treeView&&[r].reduce((function e(t,n){return Array.isArray(n.children)?n.children.reduce(e,t):(t.push(n),t)}),[]),c=t===S.Z.treeView?i.map((function(e){return e.id})):[r];if(l){var u=e;return c.map((function(e){var r=u[n];u=t!==S.Z.radio&&(r[e]instanceof Object?r[e].isSelected:Boolean(r[e]))?x(x({},u),{},(0,o.Z)({},n,x(x({},r||{}),{},(0,o.Z)({},e,t===S.Z.treeView&&a)))):x(x({},u),{},(0,o.Z)({},n,x(x({},t!==S.Z.radio&&r||{}),{},(0,o.Z)({},e,!0))))})),u}return c.reduce((function(e,t){return x(x({},e),{},(0,o.Z)({},n,x(x({},null==e?void 0:e[n]),{},(0,o.Z)({},t,!0))))}),e)}},I=function e(t,n,o,r){return t.children?t.children.every((function(t){return e(t,n,o,r)})):D(n,t.id,void 0,void 0,o,r)},R=function e(t,n,o,r){return t.children?t.children.some((function(t){return e(t,n,o,r)})):D(n,t.id,void 0,void 0,o,r)},L=function e(t,n,o,r){var a=I(t,n,o,r);return t.checkProps={checked:!1},a?t.checkProps.checked=!0:R(t,n,o,r)&&(t.checkProps={checked:null}),t.children?x(x({},t),{},{children:t.children.map((function(t){return e(t,n,o,r)}))}):t},N=function(e){var t=e.placeholder,n=e.onShowMore,o=e.showMoreTitle,c=e.showMoreOptions,u=e.items,s=e.filterBy,P=e.onFilter,I=e.className,R=e.groups,N=void 0===R?[]:R,V=e.onChange,F=e.selected,M=e.isFilterable,B=(0,l.useState)({}),A=(0,a.Z)(B,2),z=A[0],q=A[1],Y=(0,l.useState)(""),U=(0,a.Z)(Y,2),W=U[0],H=U[1],J=(0,l.useState)(!1),G=(0,a.Z)(J,2),K=G[0],X=G[1],$=(0,l.useRef)(),Q=(0,l.useRef)(),ee=(0,l.useRef)();(0,l.useEffect)((function(){q(F)}),[F]),(0,l.useEffect)((function(){H(s)}),[s]);var te=function(e){K&&(ee.current.contains(e.target)||$.current.contains(e.target))&&("Escape"!==e.key&&"Enter"!==e.key||(X(!K),$.current.focus()))},ne=function(e){K&&!ee.current.contains(e.target)&&X(!1)};(0,l.useEffect)((function(){return window.addEventListener("keydown",te),window.addEventListener("click",ne),function(){window.removeEventListener("keydown",te),window.removeEventListener("click",ne)}}),[K,ee]);var oe=j(null==u?void 0:u.map((function(e){return e.type===S.Z.treeView?T(e):e})),V,_(F)),re=function(e,t,n){return e.map((function(e){var o=e.value,r=e.label,a=e.groupSelectable,l=e.id,i=e.type,c=e.items,u=(0,w.Z)(e,["value","label","groupSelectable","id","type","items"]),s=i===S.Z.treeView?c.map((function(e){return T(e)})):c;return{label:r,value:o,type:i,groupSelectable:a,items:j([].concat((0,E.Z)(a?[x({value:o,label:r,id:l,type:i,className:"pf-u-pl-xs"},u)]:[]),(0,E.Z)(s)),t,n,i,o,r,l,u)}})).filter((function(e){var t=e.noFilter,n=e.items;return!t||(void 0===n?[]:n).length>0}))}(N,V,_(F)),ae=function(e,t,n,o){return i().createElement(h.s,{itemId:t,key:"".concat(e.value,"-").concat(t,"-item"),className:null==e?void 0:e.className,onClick:e.onClick&&(n||e.type)===S.Z.checkbox?function(t){e.onClick(),t.preventDefault()}:void 0},(n||e.type)===S.Z.treeView?i().createElement(C.L,{data:[L(e,o,z,F)],onCheck:function(t,n){return function(e,t,n){var o;return n[0].onClick(e,t,null==e||null===(o=e.target)||void 0===o?void 0:o.checked)}(t,n,[e])},hasChecks:!0}):(n||e.type)===S.Z.checkbox?i().createElement(b.X,(0,r.Z)({},e,{label:null==e?void 0:e.label,isChecked:(null==e?void 0:e.isChecked)||D(o,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,z,F)||!1,onChange:function(t,n){var o;null==e||null===(o=e.onChange)||void 0===o||o.call(e,t,n)},onClick:e.onClick?function(t){e.onClick(),t.stopPropagation()}:void 0,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(o,"-").concat(t),id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(o,"-").concat(t)})):(n||e.type)===S.Z.radio?i().createElement(O.Y,(0,r.Z)({},e,{isChecked:(null==e?void 0:e.isChecked)||D((null==N?void 0:N.value)||o,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,z,F)||!1,onChange:function(t,n){var o;null==e||null===(o=e.onChange)||void 0===o||o.call(e,t,n)},value:(null==e?void 0:e.value)||t,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(o,"-").concat(t),label:(null==e?void 0:e.label)||"",id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(o,"-").concat(t)})):(n||e.type)===S.Z.button?i().createElement(g.zx,(0,r.Z)({},e,{className:"pf-c-select__option-button ".concat((null==e?void 0:e.className)||""),variant:null==e?void 0:e.variant,onClick:e.onClick}),null==e?void 0:e.label):(null==e?void 0:e.label)||"")},le=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.map((function(e,o){return(t||e.type)===S.Z.treeView?i().createElement("div",{key:"".concat(e.value,"-").concat(o,"-item"),className:"ins-c-tree-view"},ae(e,o,t,n)):ae(e,o,t,n)}))};return i().createElement("div",{ref:Q},i().createElement(k.r,{appendTo:Q.current,trigger:i().createElement(m.O,{ref:$,onClick:function(e){e.stopPropagation(),e.persist(),X(!K)},isExpanded:K,className:I},M||P?i().createElement(d.oi,{"aria-label":"input with dropdown and clear button",placeholder:t,value:W,tabIndex:0,onChange:function(e){H(e),null==P||P(e)},type:"search"}):t),popper:i().createElement(y.v,{ref:ee,className:p()("ins-c-menu__scrollable",I,{"pf-m-expanded":K})},i().createElement(Z.D,null,i().createElement(f.q,null,oe.length>0&&i().createElement(v.k,null,le(oe)),re.map((function(e,t){return i().createElement(v.k,{label:e.groupSelectable?void 0:e.label,key:"".concat(e.label,"-").concat(t,"-group")},le(e.items,e.type,e.value,e))})),n?i().createElement(h.s,(0,r.Z)({itemId:"loader",className:"ins-c-menu__show--more"},c,{onClick:function(e){return n(e)}}),o):i().createElement("span",{hidden:!0,value:""})))),isVisible:K}))};N.propTypes={placeholder:u().string,onShowMore:u().func,showMoreTitle:u().node,onShowMoreTitle:u().func,showMoreOptions:u().any,items:u().arrayOf(u().shape({id:u().string,value:u().string,label:u().node})),className:u().string,selected:u().shape((0,o.Z)({},u().string,u().shape((0,o.Z)({},u().string,u().shape((0,o.Z)({},u().string,u().any)))))),isFilterable:u().bool,filterBy:u().string,onFilter:u().func,groups:u().arrayOf(u().shape({groupSelectable:u().bool,type:u().oneOf(Object.keys(S.Z)),value:u().string,label:u().node,items:u().arrayOf(u().shape({id:u().string,tagKey:u().string}))})),onChange:u().func.isRequired,selectedTags:u().shape({})};const V=N},26154:(e,t,n)=>{n.d(t,{Z:()=>C});var o=n(45987),r=n(87462),a=n(15671),l=n(43144),i=n(97326),c=n(60136),u=n(82963),s=n(61120),p=n(4942),d=n(92950),f=n.n(d),h=n(45697),v=n.n(h),b=n(54680),g=n(92694),m=n(64403),y=n(92504),Z=n(68097);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var O=function(e){(0,c.Z)(v,e);var t,n,h=(t=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return(0,u.Z)(this,e)});function v(){var e;(0,a.Z)(this,v);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=h.call.apply(h,[this].concat(n)),(0,p.Z)((0,i.Z)(e),"state",{isExpanded:!1,checked:void 0}),(0,p.Z)((0,i.Z)(e),"onToggle",(function(t){e.setState({isExpanded:t})})),(0,p.Z)((0,i.Z)(e),"calculateSelected",(function(){var t=e.state.checked,n=e.props.value;return n&&(n.value||n)||t&&(t.value||t)})),(0,p.Z)((0,i.Z)(e),"onSelect",(function(t,n){(0,e.props.onChange)(t,n),e.setState({checked:n})})),e}return(0,l.Z)(v,[{key:"render",value:function(){var e=this.state.isExpanded,t=this.props,n=t.items,a=t.placeholder,l=t.isDisabled,i=t.className,c=this.calculateSelected();return f().createElement(d.Fragment,null,!n||n&&n.length<=0?f().createElement(Z.Z,(0,r.Z)({},this.props,{value:"".concat(this.calculateSelected())})):f().createElement(b.P,{className:i,variant:m.TM.single,"aria-label":"Select Input",isDisabled:l,onToggle:this.onToggle,onSelect:this.onSelect,isOpen:e,placeholderText:a,ouiaId:a},n.map((function(e,t){var n=e.value,a=e.isChecked,l=e.onChange,i=e.label,u=e.id,s=(0,o.Z)(e,["value","isChecked","onChange","label","id"]);return f().createElement(g.$,(0,r.Z)({},s,{key:u||t,value:n||""+t}),f().createElement(y.Y,(0,r.Z)({},s,{name:u||"".concat(t,"-radio"),label:i,value:n||t,isChecked:a||void 0!==c&&c===n||void 0!==c&&c===""+t||!1,onChange:function(e,o){return l&&l(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:u,label:i,value:n,isChecked:a},s),t)},id:u||"".concat(n,"-").concat(t)})))}))))}}]),v}(d.Component);O.propTypes={onChange:v().func,value:v().oneOfType([v().string,v().shape({label:v().node,value:v().string})]),placeholder:v().string,items:v().arrayOf(v().shape({value:v().string,label:v().node,id:v().string,isChecked:v().bool,onChange:v().func})),isDisabled:v().bool,className:v().string},O.defaultProps={items:[],onChange:function(){},isDisabled:!1};const C=O},68097:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(87462),r=n(45987),a=n(15671),l=n(43144),i=n(97326),c=n(60136),u=n(82963),s=n(61120),p=n(4942),d=n(92950),f=n.n(d),h=n(45697),v=n.n(h),b=n(92607),g=n(80810);var m=function(e){(0,c.Z)(v,e);var t,n,h=(t=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return(0,u.Z)(this,e)});function v(){var e;(0,a.Z)(this,v);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=h.call.apply(h,[this].concat(n)),(0,p.Z)((0,i.Z)(e),"state",{stateValue:""}),(0,p.Z)((0,i.Z)(e),"onChangeValue",(function(t,n){e.setState({stateValue:n})})),e}return(0,l.Z)(v,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onChange,a=e.onSubmit,l=e.id,i=e.icon,c=e.className,u=e.isDisabled,s=(0,r.Z)(e,["value","onChange","onSubmit","id","icon","className","isDisabled"]),p=i||g.ZP,h=this.state.stateValue,v=n||this.onChangeValue;return f().createElement(d.Fragment,null,f().createElement(b.oi,(0,o.Z)({},s,{className:"ins-c-conditional-filter ".concat(c||""),id:l,isDisabled:u,value:n?t:h,onChange:function(e,t){return v(t,t.target.value)},"widget-type":"InsightsInput",onKeyDown:function(e){return"Enter"===e.key&&a(e,t||h)},"data-ouia-component-type":"PF4/TextInput",ouiaId:"ConditionalFilter"})),f().createElement(p,{size:"sm",className:"ins-c-search-icon"}))}}]),v}(d.Component);m.propTypes={value:v().string,placeholder:v().string,onChange:v().func,onSubmit:v().func,isDisabled:v().bool,"aria-label":v().string,id:v().string,icon:v().elementType,className:v().string},m.defaultProps={value:"",onSubmit:function(){},isDisabled:!1,"aria-label":"text input"};const y=m},87123:(e,t,n)=>{n.d(t,{Y:()=>c,w:()=>u});var o=n(92950),r=n(68097),a=n(40787),l=n(26154),i=n(23820),c={text:"text",checkbox:"checkbox",radio:"radio",custom:"custom",group:"group"},u={text:r.Z,checkbox:a.Z,radio:l.Z,custom:o.Fragment,group:i.Z}},22137:(e,t,n)=>{n.d(t,{Z:()=>o});const o={treeView:"treeView",checkbox:"checkbox",radio:"radio",button:"button",plain:"plain"}},97138:(e,t,n)=>{n.d(t,{Z:()=>C});var o=n(87462),r=n(93433),a=n(45987),l=n(15671),i=n(43144),c=n(97326),u=n(60136),s=n(82963),p=n(61120),d=n(4942),f=n(56787),h=n(84457),v=n(75728),b=n(35224),g=n(92950),m=n.n(g),y=n(74978),Z=n(45697),k=n.n(Z);var O=function(e){(0,u.Z)(Z,e);var t,n,g=(t=Z,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,p.Z)(t);if(n){var r=(0,p.Z)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return(0,s.Z)(this,e)});function Z(){var e;(0,l.Z)(this,Z);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=g.call.apply(g,[this].concat(n)),(0,d.Z)((0,c.Z)(e),"state",{isOpen:!1}),(0,d.Z)((0,c.Z)(e),"onToggle",(function(t){e.setState({isOpen:t})})),(0,d.Z)((0,c.Z)(e),"onSelect",(function(){e.setState({isOpen:!e.state.isOpen})})),(0,d.Z)((0,c.Z)(e),"conditionallyTooltip",(function(t){var n=e.props.tooltipText;return m().createElement(m().Fragment,null,n?m().createElement(b.u,{content:n},t):t)})),e}return(0,i.Z)(Z,[{key:"render",value:function(){var e=this.state.isOpen,t=this.props,n=t.extraItems,l=t.onSelect,i=t.isDisabled,c=(t.tooltipText,(0,a.Z)(t,["extraItems","onSelect","isDisabled","tooltipText"]));return m().createElement(m().Fragment,null,this.conditionallyTooltip(m().createElement(f.L,(0,o.Z)({},c,{isPlain:!0,onSelect:this.onSelect,toggle:m().createElement(v.Z,{toggleIndicator:null,onToggle:this.onToggle,isDisabled:i,ouiaId:"Export"},m().createElement(y.ZP,{size:"sm"})),isOpen:e,ouiaId:"Export",dropdownItems:[m().createElement(h.h,{key:"download-csv",ouiaId:"DownloadCSV",component:"button",onClick:function(e){return l(e,"csv")},isDisabled:i},"Export to CSV"),m().createElement(h.h,{key:"download-json",ouiaId:"DownloadJSON",component:"button",onClick:function(e){return l(e,"json")},isDisabled:i},"Export to JSON")].concat((0,r.Z)(n))}))))}}]),Z}(g.Component);O.propTypes={extraItems:k().arrayOf(k().node),tooltipText:k().node,onSelect:k().func,isDisabled:k().bool},O.defaultProps={extraItems:[],onSelect:function(){}};const C=O},58511:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),r=n(4942),a=n(92950),l=n.n(a),i=n(45697),c=n.n(i),u=n(68425),s=n(21899),p=n(26391),d=n(47173),f=n(94184),h=n.n(f);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.className,n=e.filters,r=e.onDelete,a=e.deleteTitle,i=e.showDeleteButton,c=e.onDeleteGroup,f=n.filter((function(e){return Object.prototype.hasOwnProperty.call(e,"category")})),v=f.map((function(e,t){return l().createElement(p.Z,(0,o.Z)({key:"group_".concat(e.category),categoryName:String(e.category)||" "},c&&{isClosable:!0,onClick:function(n){n.stopPropagation(),c(n,[e],f.filter((function(e,n){return n!==t})))}}),e.chips.map((function(t){return l().createElement(s.A,{key:t.name,onClick:function(n){n.stopPropagation(),r(n,[b(b({},e),{},{chips:[t]})])}},t.name,t.count&&l().createElement(u.C,{key:"chip_badge_".concat(t.id),isRead:t.isRead},t.count))})))})),g=n.filter((function(e){return!Object.prototype.hasOwnProperty.call(e,"category")}));return l().createElement("span",{className:h()(t,"ins-c-chip-filters")},v,g&&g.map((function(e){return l().createElement(p.Z,{key:"group_plain_chip_".concat(e.name)},l().createElement(s.A,{onClick:function(t){t.stopPropagation(),r(t,[e])}},e.name,e.count&&l().createElement(u.C,{key:"chip_badge_".concat(e.id),isRead:e.isRead},e.count)))})),(!0===i||void 0===i&&n.length>0)&&l().createElement(d.zx,{variant:"link",ouiaId:"ClearFilters",onClick:function(e){return r(e,n,!0)}},a))};g.propTypes={className:c().string,filters:c().arrayOf(c().oneOfType([c().shape({category:c().string.isRequired,chips:c().arrayOf(c().shape({name:c().string.isRequired,isRead:c().bool,count:c().number})).isRequired}),c().shape({name:c().string.isRequired,isRead:c().bool,count:c().number})])),onDelete:c().func,onDeleteGroup:c().func,deleteTitle:c().node,showDeleteButton:c().bool},g.defaultProps={filters:[],onDelete:function(){},deleteTitle:"Clear filters"};const m=g}}]);
//# sourceMappingURL=../sourcemaps/5664.ffd22424933fd75d8660d2b3230b8b4d.js.map