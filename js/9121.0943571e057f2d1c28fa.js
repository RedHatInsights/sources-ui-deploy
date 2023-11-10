"use strict";(self.webpackChunksources=self.webpackChunksources||[]).push([[9121],{69121:(e,t,n)=>{n.r(t),n.d(t,{Popper:()=>be,getLanguageDirection:()=>ge,getOpacityTransition:()=>he});var o=n(28416),r=n(31051);function s(e){const t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function i(e){if("[object Window]"!==e.toString()){const t=e.ownerDocument;return t?t.defaultView:window}return e}function a(e){const t=i(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function c(e){return e instanceof i(e).Element||e instanceof Element}function p(e){return e instanceof i(e).HTMLElement||e instanceof HTMLElement}function l(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return(c(e)?e.ownerDocument:e.document).documentElement}function u(e){return s(f(e)).left+a(e).scrollLeft}function d(e){return i(e).getComputedStyle(e)}function m(e){const{overflow:t,overflowX:n,overflowY:o}=d(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function h(e,t,n=!1){const o=f(t),r=s(e),c=p(t);let d={scrollLeft:0,scrollTop:0},h={x:0,y:0};var g,b;return(c||!c&&!n)&&(("body"!==l(t)||m(o))&&(d=(g=t)!==i(g)&&p(g)?{scrollLeft:(b=g).scrollLeft,scrollTop:b.scrollTop}:a(g)),p(t)?(h=s(t),h.x+=t.clientLeft,h.y+=t.clientTop):o&&(h.x=u(o))),{x:r.left+d.scrollLeft-h.x,y:r.top+d.scrollTop-h.y,width:r.width,height:r.height}}function g(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function b(e){return"html"===l(e)?e:e.assignedSlot||e.parentNode||e.host||f(e)}function y(e){return["html","body","#document"].indexOf(l(e))>=0?e.ownerDocument.body:p(e)&&m(e)?e:y(b(e))}function O(e,t=[]){const n=y(e),o="body"===l(n),r=i(n),s=o?[r].concat(r.visualViewport||[],m(n)?n:[]):n,a=t.concat(s);return o?a:a.concat(O(b(s)))}function w(e){return["table","td","th"].indexOf(l(e))>=0}function x(e){if(!p(e)||"fixed"===d(e).position)return null;const t=e.offsetParent;if(t){const e=f(t);if("body"===l(t)&&"static"===d(t).position&&"static"!==d(e).position)return e}return t}function v(e){const t=i(e);let n=x(e);for(;n&&w(n)&&"static"===d(n).position;)n=x(n);return n&&"body"===l(n)&&"static"===d(n).position?t:n||function(e){let t=b(e);for(;p(t)&&["html","body"].indexOf(l(t))<0;){const e=d(t);if("none"!==e.transform||"none"!==e.perspective||e.willChange&&"auto"!==e.willChange)return t;t=t.parentNode}return null}(e)||t}const j="top",E="bottom",M="right",k="left",D="auto",L=[j,E,M,k],P="start",S="end",W="clippingParents",$="viewport",T="popper",B=L.reduce(((e,t)=>e.concat([`${t}-${P}`,`${t}-${S}`])),[]),R=[...L,D].reduce(((e,t)=>e.concat([t,`${t}-${P}`,`${t}-${S}`])),[]),C=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function H(e){const t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[...e.requires||[],...e.requiresIfExists||[]].forEach((e=>{if(!n.has(e)){const n=t.get(e);n&&r(n)}})),o.push(e)}return e.forEach((e=>{t.set(e.name,e)})),e.forEach((e=>{n.has(e.name)||r(e)})),o}function A(e){let t;return()=>(t||(t=new Promise((n=>{Promise.resolve().then((()=>{t=void 0,n(e())}))}))),t)}const q={placement:"bottom",modifiers:[],strategy:"absolute"};function N(...e){return!e.some((e=>!(e&&"function"==typeof e.getBoundingClientRect)))}function U(e={}){const{defaultModifiers:t=[],defaultOptions:n=q}=e;return function(e,o,r=n){let s={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},q),n),modifiersData:{},elements:{reference:e,popper:o},attributes:{},styles:{}},i=[],a=!1;const p={state:s,setOptions(r){l(),s.options=Object.assign(Object.assign(Object.assign({},n),s.options),r),s.scrollParents={reference:c(e)?O(e):e.contextElement?O(e.contextElement):[],popper:O(o)};const a=function(e){const t=H(e);return C.reduce(((e,n)=>e.concat(t.filter((e=>e.phase===n)))),[])}(function(e){const t=e.reduce(((e,t)=>{const n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((e=>t[e]))}([...t,...s.options.modifiers]));return s.orderedModifiers=a.filter((e=>e.enabled)),s.orderedModifiers.forEach((({name:e,options:t={},effect:n})=>{if("function"==typeof n){const o=n({state:s,name:e,instance:p,options:t}),r=()=>{};i.push(o||r)}})),p.update()},forceUpdate(){if(a)return;const{reference:e,popper:t}=s.elements;if(N(e,t)){s.rects={reference:h(e,v(t),"fixed"===s.options.strategy),popper:g(t)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((e=>s.modifiersData[e.name]=Object.assign({},e.data)));for(let e=0;e<s.orderedModifiers.length;e++){if(!0===s.reset){s.reset=!1,e=-1;continue}const{fn:t,options:n={},name:o}=s.orderedModifiers[e];"function"==typeof t&&(s=t({state:s,options:n,name:o,instance:p})||s)}}},update:A((()=>new Promise((e=>{p.forceUpdate(),e(s)})))),destroy(){l(),a=!0}};if(!N(e,o))return p;function l(){i.forEach((e=>e())),i=[]}return p.setOptions(r).then((e=>{!a&&r.onFirstUpdate&&r.onFirstUpdate(e)})),p}}U();const I={passive:!0};function F(e){return e.split("-")[0]}function V(e){return e.split("-")[1]}function _(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function z({reference:e,element:t,placement:n}){const o=n?F(n):null,r=n?V(n):null,s=e.x+e.width/2-t.width/2,i=e.y+e.height/2-t.height/2;let a;switch(o){case j:a={x:s,y:e.y-t.height};break;case E:a={x:s,y:e.y+e.height};break;case M:a={x:e.x+e.width,y:i};break;case k:a={x:e.x-t.width,y:i};break;default:a={x:e.x,y:e.y}}const c=o?_(o):null;if(null!=c){const n="y"===c?"height":"width";switch(r){case P:a[c]=Math.floor(a[c])-Math.floor(e[n]/2-t[n]/2);break;case S:a[c]=Math.floor(a[c])+Math.ceil(e[n]/2-t[n]/2)}}return a}const J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function X({popper:e,popperRect:t,placement:n,offsets:o,position:r,gpuAcceleration:s,adaptive:a}){let{x:c,y:p}=function({x:e,y:t}){const n=window.devicePixelRatio||1;return{x:Math.round(e*n)/n||0,y:Math.round(t*n)/n||0}}(o);const l=o.hasOwnProperty("x"),u=o.hasOwnProperty("y");let d=k,m=j;const h=window;if(a){let o=v(e);o===i(e)&&(o=f(e)),n===j&&(m=E,p-=o.clientHeight-t.height,p*=s?1:-1),n===k&&(d=M,c-=o.clientWidth-t.width,c*=s?1:-1)}const g=Object.assign({position:r},a&&J);return s?Object.assign(Object.assign({},g),{[m]:u?"0":"",[d]:l?"0":"",transform:(h.devicePixelRatio||1)<2?`translate(${c}px, ${p}px)`:`translate3d(${c}px, ${p}px, 0)`}):Object.assign(Object.assign({},g),{[m]:u?`${p}px`:"",[d]:l?`${c}px`:"",transform:""})}const Y={left:"right",right:"left",bottom:"top",top:"bottom"};function K(e){return e.replace(/left|right|bottom|top/g,(e=>Y[e]))}const G={start:"end",end:"start"};function Q(e){return e.replace(/start|end/g,(e=>G[e]))}function Z(e,t){const n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){let n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function ee(e){return Object.assign(Object.assign({},e),{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function te(e,t){return t===$?ee(function(e){const t=i(e),n=f(e),o=t.visualViewport;let r=n.clientWidth,s=n.clientHeight,a=0,c=0;return o&&(r=o.width,s=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,c=o.offsetTop)),{width:r,height:s,x:a+u(e),y:c}}(e)):p(t)?function(e){const t=s(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ee(function(e){const t=f(e),n=a(e),o=e.ownerDocument.body,r=Math.max(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=Math.max(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0);let i=-n.scrollLeft+u(e);const c=-n.scrollTop;return"rtl"===d(o||t).direction&&(i+=Math.max(t.clientWidth,o?o.clientWidth:0)-r),{width:r,height:s,x:i,y:c}}(f(e)))}function ne(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function oe(e,t){return t.reduce(((t,n)=>(t[n]=e,t)),{})}function re(e,t={}){const{placement:n=e.placement,boundary:o=W,rootBoundary:r=$,elementContext:i=T,altBoundary:a=!1,padding:u=0}=t,m=ne("number"!=typeof u?u:oe(u,L)),h=i===T?"reference":T,g=e.elements.reference,y=e.rects.popper,w=e.elements[a?h:i],x=function(e,t,n){const o="clippingParents"===t?function(e){const t=O(b(e)),n=["absolute","fixed"].indexOf(d(e).position)>=0&&p(e)?v(e):e;return c(n)?t.filter((e=>c(e)&&Z(e,n)&&"body"!==l(e))):[]}(e):[].concat(t),r=[...o,n],s=r[0],i=r.reduce(((t,n)=>{const o=te(e,n);return t.top=Math.max(o.top,t.top),t.right=Math.min(o.right,t.right),t.bottom=Math.min(o.bottom,t.bottom),t.left=Math.max(o.left,t.left),t}),te(e,s));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}(c(w)?w:w.contextElement||f(e.elements.popper),o,r),k=s(g),D=z({reference:k,element:y,strategy:"absolute",placement:n}),P=ee(Object.assign(Object.assign({},y),D)),S=i===T?P:k,B={top:x.top-S.top+m.top,bottom:S.bottom-x.bottom+m.bottom,left:x.left-S.left+m.left,right:S.right-x.right+m.right},R=e.modifiersData.offset;if(i===T&&R){const e=R[n];Object.keys(B).forEach((t=>{const n=[M,E].indexOf(t)>=0?1:-1,o=[j,E].indexOf(t)>=0?"y":"x";B[t]+=e[o]*n}))}return B}function se(e,t,n){return Math.max(e,Math.min(t,n))}function ie(e,t,n={x:0,y:0}){return{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ae(e){return[j,M,E,k].some((t=>e[t]>=0))}const ce=U({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:()=>{},effect:function({state:e,instance:t,options:n}){const{scroll:o=!0,resize:r=!0}=n,s=i(e.elements.popper),a=[...e.scrollParents.reference,...e.scrollParents.popper];return o&&a.forEach((e=>{e.addEventListener("scroll",t.update,I)})),r&&s.addEventListener("resize",t.update,I),()=>{o&&a.forEach((e=>{e.removeEventListener("scroll",t.update,I)})),r&&s.removeEventListener("resize",t.update,I)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function({state:e,name:t}){e.modifiersData[t]=z({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function({state:e,options:t}){const{gpuAcceleration:n=!0,adaptive:o=!0}=t,r={placement:F(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign(Object.assign({},e.styles.popper),X(Object.assign(Object.assign({},r),{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign(Object.assign({},e.styles.arrow),X(Object.assign(Object.assign({},r),{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1})))),e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function({state:e}){Object.keys(e.elements).forEach((t=>{const n=e.styles[t]||{},o=e.attributes[t]||{},r=e.elements[t];p(r)&&l(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((e=>{const t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function({state:e}){const t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),()=>{Object.keys(e.elements).forEach((n=>{const o=e.elements[n],r=e.attributes[n]||{},s=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]).reduce(((e,t)=>(e[t]="",e)),{});p(o)&&l(o)&&(Object.assign(o.style,s),Object.keys(r).forEach((e=>{o.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function({state:e,options:t,name:n}){const{offset:o=[0,0]}=t,r=R.reduce(((t,n)=>(t[n]=function(e,t,n){const o=F(e),r=[k,j].indexOf(o)>=0?-1:1;let[s,i]="function"==typeof n?n(Object.assign(Object.assign({},t),{placement:e})):n;return s=s||0,i=(i||0)*r,[k,M].indexOf(o)>=0?{x:i,y:s}:{x:s,y:i}}(n,e.rects,o),t)),{}),{x:s,y:i}=r[e.placement];null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=i),e.modifiersData[n]=r}},{name:"flip",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){if(e.modifiersData[n]._skip)return;const{mainAxis:o=!0,altAxis:r=!0,fallbackPlacements:s,padding:i,boundary:a,rootBoundary:c,altBoundary:p,flipVariations:l=!0,allowedAutoPlacements:f}=t,u=e.options.placement,d=F(u),m=[u,...s||(d!==u&&l?function(e){if(F(e)===D)return[];const t=K(e);return[Q(e),t,Q(t)]}(u):[K(u)])].reduce(((t,n)=>t.concat(F(n)===D?function(e,t={}){const{placement:n,boundary:o,rootBoundary:r,padding:s,flipVariations:i,allowedAutoPlacements:a=R}=t,c=V(n),p=c?i?B:B.filter((e=>V(e)===c)):L;let l=p.filter((e=>a.indexOf(e)>=0));0===l.length&&(l=p);const f=l.reduce(((t,n)=>(t[n]=re(e,{placement:n,boundary:o,rootBoundary:r,padding:s})[F(n)],t)),{});return Object.keys(f).sort(((e,t)=>f[e]-f[t]))}(e,{placement:n,boundary:a,rootBoundary:c,padding:i,flipVariations:l,allowedAutoPlacements:f}):n)),[]),h=e.rects.reference,g=e.rects.popper,b=new Map;let y=!0,O=m[0];for(let t=0;t<m.length;t++){const n=m[t],s=F(n),l=V(n)===P,f=[j,E].indexOf(s)>=0,u=f?"width":"height",d=re(e,{placement:n,boundary:a,rootBoundary:c,altBoundary:p,padding:i});let w=f?l?M:k:l?E:j;h[u]>g[u]&&(w=K(w));const x=K(w),v=[];if(o&&v.push(d[s]<=0),r&&v.push(d[w]<=0,d[x]<=0),v.every((e=>e))){O=n,y=!1;break}b.set(n,v)}if(y)for(let e=l?3:1;e>0;e--){const t=m.find((t=>{const n=b.get(t);if(n)return n.slice(0,e).every((e=>e))}));if(t){O=t;break}}e.placement!==O&&(e.modifiersData[n]._skip=!0,e.placement=O,e.reset=!0)},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function({state:e,options:t,name:n}){const{mainAxis:o=!0,altAxis:r=!1,boundary:s,rootBoundary:i,altBoundary:a,padding:c,tether:p=!0,tetherOffset:l=0}=t,f=re(e,{boundary:s,rootBoundary:i,padding:c,altBoundary:a}),u=F(e.placement),d=V(e.placement),m=!d,h=_(u),b="x"===h?"y":"x",y=e.modifiersData.popperOffsets,O=e.rects.reference,w=e.rects.popper,x="function"==typeof l?l(Object.assign(Object.assign({},e.rects),{placement:e.placement})):l,D={x:0,y:0};if(y){if(o){const t="y"===h?j:k,n="y"===h?E:M,o="y"===h?"height":"width",r=y[h],s=y[h]+f[t],i=y[h]-f[n],a=p?-w[o]/2:0,c=d===P?O[o]:w[o],l=d===P?-w[o]:-O[o],u=e.elements.arrow,b=p&&u?g(u):{width:0,height:0},L=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},S=L[t],W=L[n],$=se(0,O[o],b[o]),T=m?O[o]/2-a-$-S-x:c-$-S-x,B=m?-O[o]/2+a+$+W+x:l+$+W+x,R=e.elements.arrow&&v(e.elements.arrow),C=R?"y"===h?R.clientTop||0:R.clientLeft||0:0,H=e.modifiersData.offset?e.modifiersData.offset[e.placement][h]:0,A=y[h]+T-H-C,q=y[h]+B-H,N=se(p?Math.min(s,A):s,r,p?Math.max(i,q):i);y[h]=N,D[h]=N-r}if(r){const e="x"===h?j:k,t="x"===h?E:M,n=y[b],o=se(n+f[e],n,n-f[t]);y[b]=o,D[b]=o-n}e.modifiersData[n]=D}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function({state:e,name:t}){const n=e.elements.arrow,o=e.modifiersData.popperOffsets,r=F(e.placement),s=_(r),i=[k,M].indexOf(r)>=0?"height":"width";if(!n||!o)return;const a=e.modifiersData[`${t}#persistent`].padding,c=g(n),p="y"===s?j:k,l="y"===s?E:M,f=e.rects.reference[i]+e.rects.reference[s]-o[s]-e.rects.popper[i],u=o[s]-e.rects.reference[s],d=v(n),m=d?"y"===s?d.clientHeight||0:d.clientWidth||0:0,h=f/2-u/2,b=a[p],y=m-c[i]-a[l],O=m/2-c[i]/2+h,w=se(b,O,y),x=s;e.modifiersData[t]={[x]:w,centerOffset:w-O}},effect:function({state:e,options:t,name:n}){let{element:o="[data-popper-arrow]",padding:r=0}=t;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o),o))&&Z(e.elements.popper,o)&&(e.elements.arrow=o,e.modifiersData[`${n}#persistent`]={padding:ne("number"!=typeof r?r:oe(r,L))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function({state:e,name:t}){const n=e.rects.reference,o=e.rects.popper,r=e.modifiersData.preventOverflow,s=re(e,{elementContext:"reference"}),i=re(e,{altBoundary:!0}),a=ie(s,n),c=ie(i,o,r),p=ae(a),l=ae(c);e.modifiersData[t]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:l},e.attributes.popper=Object.assign(Object.assign({},e.attributes.popper),{"data-popper-reference-hidden":p,"data-popper-escaped":l})}}]});var pe=n(6551);const le=e=>e.reduce(((e,[t,n])=>(e[t]=n,e)),{}),fe=[];var ue=n(80164),de=n(38296);n(45467);const me={left:"right",right:"left",bottom:"top",top:"bottom","top-start":"bottom-end","top-end":"bottom-start","bottom-start":"top-end","bottom-end":"top-start","left-start":"right-end","left-end":"right-start","right-start":"left-end","right-end":"left-start"},he=e=>`opacity ${e}ms cubic-bezier(.54, 1.5, .38, 1.11)`,ge=e=>{let t="ltr";return e&&(t=getComputedStyle(e).getPropertyValue("direction")),["ltr","rtl"].includes(t)?t:"ltr"},be=({trigger:e,popper:t,direction:n="down",position:s="start",placement:i,width:a,minWidth:c="trigger",maxWidth:p,appendTo:l="inline",zIndex:f=9999,isVisible:u=!0,positionModifiers:d,distance:m=0,onMouseEnter:h,onMouseLeave:g,onFocus:b,onBlur:y,onDocumentClick:O,onTriggerClick:w,onTriggerEnter:x,onPopperClick:v,onPopperMouseEnter:j,onPopperMouseLeave:E,onDocumentKeyDown:M,enableFlip:k=!0,flipBehavior:D="flip",triggerRef:L,popperRef:P,animationDuration:S=0,entryDelay:W=0,exitDelay:$=0,onHidden:T=(()=>{}),onHide:B=(()=>{}),onMount:R=(()=>{}),onShow:C=(()=>{}),onShown:H=(()=>{})})=>{var A;const[q,N]=o.useState(null),[U,I]=o.useState(null),[F,V]=o.useState(null),[_,z]=o.useState(null),[J,X]=o.useState(!1),[Y,K]=o.useState(0),[G,Q]=o.useState(u),Z=o.useRef(null),ee=o.useRef(null),te=o.useRef(null),ne=o.useRef(),oe=U||q,re=u||G,se=null===(A=(null==L?void 0:L.current)||q)||void 0===A?void 0:A.parentElement,ie=ge(se),ae=o.useMemo((()=>{const e={left:"left",right:"right",center:"center"};return{ltr:Object.assign({start:"left",end:"right"},e),rtl:Object.assign({start:"right",end:"left"},e)}[ie][s]}),[s,ie]),be=o.useCallback((e=>O(e,oe,F)),[re,q,U,F,O]);o.useEffect((()=>{X(!0),R()}),[]),o.useEffect((()=>()=>{(0,ue.I_)([Z,te,ee])}),[]),o.useEffect((()=>{L&&(L.current?I(L.current):"function"==typeof L&&I(L()))}),[L]),o.useEffect((()=>{P&&(P.current?V(P.current):"function"==typeof P&&V(P()))}),[re,P]),o.useEffect((()=>{const e=new MutationObserver((()=>{ke&&ke()}));return F&&e.observe(F,{attributes:!0,childList:!0,subtree:!0}),()=>{e.disconnect()}}),[F]);const ye=(e,t,n,o=!1)=>{e&&t&&t.addEventListener(n,e,{capture:o})},Oe=(e,t,n,o=!1)=>{e&&t&&t.removeEventListener(n,e,{capture:o})};o.useEffect((()=>(ye(h,oe,"mouseenter"),ye(g,oe,"mouseleave"),ye(b,oe,"focus"),ye(y,oe,"blur"),ye(w,oe,"click"),ye(x,oe,"keydown"),ye(v,F,"click"),ye(j,F,"mouseenter"),ye(E,F,"mouseleave"),O&&ye(be,document,"click",!0),ye(M,document,"keydown",!0),()=>{Oe(h,oe,"mouseenter"),Oe(g,oe,"mouseleave"),Oe(b,oe,"focus"),Oe(y,oe,"blur"),Oe(w,oe,"click"),Oe(x,oe,"keydown"),Oe(v,F,"click"),Oe(j,F,"mouseenter"),Oe(E,F,"mouseleave"),O&&Oe(be,document,"click",!0),Oe(M,document,"keydown",!0)})),[q,F,h,g,b,y,w,x,v,j,E,O,M,U]);const we=()=>{if(i)return i;let e="up"===n?"top":"bottom";return"center"!==ae&&(e=`${e}-${"right"===ae?"end":"start"}`),e},xe=o.useMemo(we,[n,ae,i]),ve=o.useMemo((()=>(e=>e.replace(/left|right|bottom|top|top-start|top-end|bottom-start|bottom-end|right-start|right-end|left-start|left-end/g,(e=>me[e])))(we())),[n,ae,i]),je=o.useMemo((()=>({name:"widthMods",enabled:void 0!==a||void 0!==c||void 0!==p,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{const t=e.rects.reference.width;a&&(e.styles.popper.width="trigger"===a?`${t}px`:a),c&&(e.styles.popper.minWidth="trigger"===c?`${t}px`:c),p&&(e.styles.popper.maxWidth="trigger"===p?`${t}px`:p)},effect:({state:e})=>{const t=e.elements.reference.offsetWidth;return a&&(e.elements.popper.style.width="trigger"===a?`${t}px`:a),c&&(e.elements.popper.style.minWidth="trigger"===c?`${t}px`:c),p&&(e.elements.popper.style.maxWidth="trigger"===p?`${t}px`:p),()=>{}}})),[a,c,p]),{styles:Ee,attributes:Me,update:ke,forceUpdate:De}=((e,t,n={})=>{const r=o.useRef(null),s={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||fe},[i,a]=o.useState({styles:{popper:{position:s.strategy,left:"0",top:"0"}},attributes:{}}),c=o.useMemo((()=>({name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=Object.keys(e.elements);a({styles:le(t.map((t=>[t,e.styles[t]||{}]))),attributes:le(t.map((t=>[t,e.attributes[t]])))})},requires:["computeStyles"]})),[]),p=o.useMemo((()=>{const e={onFirstUpdate:s.onFirstUpdate,placement:s.placement,strategy:s.strategy,modifiers:[...s.modifiers,c,{name:"applyStyles",enabled:!1}]};return t=r.current,n=e,JSON.stringify(t)===JSON.stringify(n)?r.current||e:(r.current=e,e);var t,n}),[s.onFirstUpdate,s.placement,s.strategy,s.modifiers,c]),l=o.useRef();return(0,pe.L)((()=>{l&&l.current&&l.current.setOptions(p)}),[p]),(0,pe.L)((()=>{if(null==e||null==t)return;const o=(n.createPopper||ce)(e,t,p);return l.current=o,()=>{o.destroy(),l.current=null}}),[e,t,n.createPopper]),{state:l.current?l.current.state:null,styles:i.styles,attributes:i.attributes,update:l.current?l.current.update:null,forceUpdate:l.current?l.current.forceUpdate:null}})(oe,F,{placement:xe,modifiers:[{name:"offset",options:{offset:[0,m]}},{name:"preventOverflow",enabled:!1},{name:"hide",enabled:!0},{name:"flip",enabled:xe.startsWith("auto")||k,options:{fallbackPlacements:"flip"===D?[ve]:D}},je]});o.useEffect((()=>{var e,n,o;const r=null===(o=null===(n=null===(e=null==t?void 0:t.props)||void 0===e?void 0:e.children[1])||void 0===n?void 0:n.props)||void 0===o?void 0:o.children;z(r),r&&_&&r!==_&&De&&De()}),[t]),o.useEffect((()=>{ne.current<$&&((0,ue.I_)([Z,te]),te.current=setTimeout((()=>{Z.current=setTimeout((()=>{Q(!1)}),S)}),$)),ne.current=$}),[$]),o.useEffect((()=>{u?(C(),(0,ue.I_)([Z,te]),ee.current=setTimeout((()=>{Q(!0),K(1),H()}),W)):(B(),(0,ue.I_)([ee]),te.current=setTimeout((()=>{K(0),Z.current=setTimeout((()=>{Q(!1),T()}),S)}),$))}),[u]);const Le=Object.assign({className:(0,de.i)(t.props&&t.props.className,d&&(()=>{if(Me&&Me.popper&&Me.popper["data-popper-placement"]){const e=Me.popper["data-popper-placement"];return d[e]}return d.top})()),style:Object.assign(Object.assign(Object.assign({},t.props&&t.props.style||{}),Ee.popper),{zIndex:f,opacity:Y,transition:he(S)})},Me.popper),Pe=()=>{const e=o.cloneElement(t,Le);return P?e:o.createElement("div",{style:{display:"contents"},ref:e=>V(null==e?void 0:e.firstElementChild)},e)};return o.createElement(o.Fragment,null,!L&&e&&o.isValidElement(e)&&o.createElement("div",{style:{display:"contents"},ref:e=>N(null==e?void 0:e.firstElementChild)},e),L&&e&&o.isValidElement(e)&&e,J&&re&&(()=>{if("inline"===l)return Pe();{const e="function"==typeof l?l():l;return r.createPortal(Pe(),e)}})())};be.displayName="Popper"},6551:(e,t,n)=>{n.d(t,{L:()=>r});var o=n(28416);const r=n(80164).Nq?o.useLayoutEffect:o.useEffect}}]);
//# sourceMappingURL=../sourcemaps/9121.caf13653a43d110cd262d499f4de20e7.js.map