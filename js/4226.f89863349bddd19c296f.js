(self.webpackChunksources=self.webpackChunksources||[]).push([[4226,5467],{75824:(t,e,o)=>{"use strict";o.d(e,{u:()=>k,D:()=>x});var i=o(65353),r=o(28416);o(49854);const n="pf-m-top",a="pf-m-top-left",l="pf-m-top-right",s="pf-m-bottom",p="pf-m-bottom-left",c="pf-m-bottom-right",m="pf-m-left",d="pf-m-left-top",u="pf-m-left-bottom",f="pf-m-right",b="pf-m-right-top",g="pf-m-right-bottom",h="pf-m-text-align-left";var v=o(38296);const y=t=>{var{className:e,children:o,isLeftAligned:n}=t,a=(0,i._T)(t,["className","children","isLeftAligned"]);return r.createElement("div",Object.assign({className:(0,v.i)("pf-v5-c-tooltip__content",n&&h,e)},a),o)};y.displayName="TooltipContent";const E=t=>{var{className:e}=t,o=(0,i._T)(t,["className"]);return r.createElement("div",Object.assign({className:(0,v.i)("pf-v5-c-tooltip__arrow",e)},o))};E.displayName="TooltipArrow";var T=o(1774);const N={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var x,D=o(69121);!function(t){t.auto="auto",t.top="top",t.bottom="bottom",t.left="left",t.right="right",t.topStart="top-start",t.topEnd="top-end",t.bottomStart="bottom-start",t.bottomEnd="bottom-end",t.leftStart="left-start",t.leftEnd="left-end",t.rightStart="right-start",t.rightEnd="right-end"}(x||(x={}));let R=1;const k=t=>{var{content:e,position:o="top",trigger:h="mouseenter focus",isVisible:x=!1,isContentLeftAligned:k=!1,enableFlip:W=!0,className:L="",entryDelay:M=300,exitDelay:_=300,appendTo:A=(()=>document.body),zIndex:C=9999,minWidth:S,maxWidth:w=N.value,distance:B=15,aria:F="describedby",flipBehavior:O=["top","right","bottom","left","top","right","bottom"],id:P="pf-tooltip-"+R++,children:j,animationDuration:z=300,triggerRef:I,"aria-live":V=(I?"polite":"off"),onTooltipHidden:H=(()=>{})}=t,K=(0,i._T)(t,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const q=h.includes("mouseenter"),G=h.includes("focus"),J=h.includes("click"),Q="manual"===h,[U,X]=r.useState(!1),[Y,Z]=r.useState(0),$=r.useRef(null),tt=r.useRef(null),et=r.useRef(null),ot=r.createRef(),it=r.useRef(),rt=t=>{t.forEach((t=>{t.current&&clearTimeout(t.current)}))};r.useEffect((()=>()=>{rt([$,et,tt])}),[]),r.useEffect((()=>{x?nt():at()}),[x]),r.useEffect((()=>{it.current<_&&(rt([$,et]),et.current=setTimeout((()=>{Z(0),$.current=setTimeout((()=>{X(!1),H()}),z)}),_)),it.current=_}),[_]);const nt=()=>{rt([$,et]),tt.current=setTimeout((()=>{X(!0),Z(1)}),M)},at=()=>{rt([tt]),et.current=setTimeout((()=>{Z(0),$.current=setTimeout((()=>{X(!1),H()}),z)}),_)},lt={top:n,bottom:s,left:m,right:f,"top-start":a,"top-end":l,"bottom-start":p,"bottom-end":c,"left-start":d,"left-end":u,"right-start":b,"right-end":g},st=w!==N.value,pt=r.createElement("div",Object.assign({"aria-live":V,className:(0,v.i)("pf-v5-c-tooltip",L),role:"tooltip",id:P,style:{maxWidth:st?w:null,opacity:Y,transition:(0,D.getOpacityTransition)(z)},ref:ot},K),r.createElement(E,null),r.createElement(y,{isLeftAligned:k},e));return r.createElement(D.Popper,{trigger:"none"!==F&&U?"describedby"===F&&j&&j.props&&!j.props["aria-describedby"]?r.cloneElement(j,{"aria-describedby":P}):"labelledby"===F&&j.props&&!j.props["aria-labelledby"]?r.cloneElement(j,{"aria-labelledby":P}):j:j,triggerRef:I,popper:pt,popperRef:ot,minWidth:void 0!==S?S:"revert",appendTo:A,isVisible:U,positionModifiers:lt,distance:B,placement:o,onMouseEnter:q&&nt,onMouseLeave:q&&at,onPopperMouseEnter:q&&nt,onPopperMouseLeave:q&&at,onFocus:G&&nt,onBlur:G&&at,onDocumentClick:J&&((t,e)=>{U?at():t.target===e&&nt()}),onDocumentKeyDown:Q?null:t=>{Q||t.key===T.yu.Escape&&U&&at()},onTriggerEnter:Q?null:t=>{t.key===T.yu.Enter&&(U?at():nt())},enableFlip:W,zIndex:C,flipBehavior:O})};k.displayName="Tooltip"},62359:(t,e,o)=>{"use strict";o.r(e),o.d(e,{Tooltip:()=>i.u,TooltipPosition:()=>i.D});var i=o(75824)},45467:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/4226.0d07e58bf0f72b4d0ba519a24a8062dc.js.map