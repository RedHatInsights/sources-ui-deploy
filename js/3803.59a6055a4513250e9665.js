(self.webpackChunksources=self.webpackChunksources||[]).push([[3803,5467,8681],{24396:(e,t,n)=>{"use strict";n.d(t,{FS:()=>l,Hl:()=>a,tL:()=>o});var i=n(28416),r=n(80164);const o=(e,t,n=(e=>document.activeElement.contains(e)),i=(e=>e),r=["A","BUTTON","INPUT"],o=!1,a=!1,l=!0,s=!0)=>{const c=document.activeElement,d=e.key;let g=null;if(!o&&["ArrowUp","ArrowDown"].includes(d)){e.preventDefault(),e.stopImmediatePropagation();let r=-1;t.forEach(((e,o)=>{if(n(e)){let e=0;for(;!g&&e<t.length&&-1*e<t.length;)"ArrowUp"===d?e--:e++,r=o+e,r>=t.length&&(r=0),r<0&&(r=t.length-1),g=i(t[r])}}))}if(!a&&["ArrowLeft","ArrowRight"].includes(d)){e.preventDefault(),e.stopImmediatePropagation();let i=-1;t.forEach(((o,a)=>{if(n(o)){const n=t[a].querySelectorAll(r.join(","));if(!n.length||s){let e=c;for(;e;)if(e="ArrowLeft"===d?e.previousElementSibling:e.nextElementSibling,e&&r.includes(e.tagName)){g=e;break}}else n.forEach(((t,r)=>{e.target===t&&(i=r+("ArrowLeft"===d?-1:1),i>=n.length&&(i=0),i<0&&(i=n.length-1),g=n[i])}))}}))}g&&(l&&(c.tabIndex=-1,g.tabIndex=0),g.focus())},a=e=>{e&&e.length>0&&(e.forEach((e=>{e.tabIndex=-1})),e[0].tabIndex=0)};class l extends i.Component{constructor(){super(...arguments),this.keyHandler=e=>{const{isEventFromContainer:t}=this.props;if(t?!t(e):!this._isEventFromContainer(e))return;const{isActiveElement:n,getFocusableElement:i,noVerticalArrowHandling:r,noHorizontalArrowHandling:a,noEnterHandling:l,noSpaceHandling:s,updateTabIndex:c,validSiblingTags:d,additionalKeyHandler:g,createNavigableElements:m,onlyTraverseSiblings:u}=this.props;g&&g(e);const h=m();if(!h)return void console.warn("No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.");const v=e.key;l||"Enter"===v&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),s||" "===v&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),o(e,h,n,i,d,r,a,c,u)},this._isEventFromContainer=e=>{const{containerRef:t}=this.props;return t.current&&t.current.contains(e.target)}}componentDidMount(){r.Nq&&window.addEventListener("keydown",this.keyHandler)}componentWillUnmount(){r.Nq&&window.removeEventListener("keydown",this.keyHandler)}render(){return null}}l.displayName="KeyboardHandler",l.defaultProps={containerRef:null,createNavigableElements:()=>null,isActiveElement:e=>document.activeElement===e,getFocusableElement:e=>e,validSiblingTags:["BUTTON","A"],onlyTraverseSiblings:!0,updateTabIndex:!0,noHorizontalArrowHandling:!1,noVerticalArrowHandling:!1,noEnterHandling:!1,noSpaceHandling:!1}},84709:(e,t,n)=>{"use strict";n.d(t,{p:()=>r});var i=n(80164);const r=(e,t,n)=>{let r;if(i.Nq){const{ResizeObserver:i}=window;if(e&&i){const o=new i((e=>{n?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&t()})):Array.isArray(e)&&e.length>0&&t()}));o.observe(e),r=()=>o.unobserve(e)}else window.addEventListener("resize",t),r=()=>window.removeEventListener("resize",t)}return()=>{r&&r()}}},40400:(e,t,n)=>{"use strict";n.d(t,{I:()=>a});var i=n(65353),r=n(28416);let o=0;function a({name:e,xOffset:t=0,yOffset:n=0,width:a,height:l,svgPath:s}){var c;return c=class extends r.Component{constructor(){super(...arguments),this.id="icon-title-"+o++}render(){const e=this.props,{title:o,className:c}=e,d=(0,i._T)(e,["title","className"]),g=c?`pf-v5-svg ${c}`:"pf-v5-svg",m=Boolean(o),u=[t,n,a,l].join(" ");return r.createElement("svg",Object.assign({className:g,viewBox:u,fill:"currentColor","aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img",width:"1em",height:"1em"},d),m&&r.createElement("title",{id:this.id},o),r.createElement("path",{d:s}))}},c.displayName=e,c}},93174:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AngleRightIcon:()=>o,AngleRightIconConfig:()=>r,default:()=>a});var i=n(40400);const r={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},o=(0,i.I)(r),a=o},43047:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ExclamationCircleIcon:()=>o,ExclamationCircleIconConfig:()=>r,default:()=>a});var i=n(40400);const r={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},o=(0,i.I)(r),a=o},45467:()=>{},11452:()=>{},34946:()=>{},32857:()=>{},90479:()=>{},8572:()=>{},98379:()=>{},46928:()=>{},66822:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/3803.786432aa83244a7090a834394f256394.js.map