"use strict";(self.webpackChunksources=self.webpackChunksources||[]).push([[8100,31],{88100:(e,t,a)=>{a.r(t),a.d(t,{TreeView:()=>_,TreeViewSearch:()=>y});var n=a(65353),s=a(28416),i=a.n(s),o=a(38296),c=a(15627);const l=e=>{var{isNested:t=!1,toolbar:a,children:i}=e,l=(0,n._T)(e,["isNested","toolbar","children"]);return s.createElement(s.Fragment,null,a&&s.createElement(s.Fragment,null,a,s.createElement(c.i,null)),s.createElement("ul",Object.assign({className:(0,o.i)("pf-v5-c-tree-view__list"),role:t?"group":"tree"},l),i))};l.displayName="TreeViewList",a(38024);const r="pf-m-compact",d="pf-m-guides",m="pf-m-expanded",p="pf-m-no-background",h="pf-m-current",v="pf-m-selectable",u="pf-v5-c-tree-view__node-count",f="pf-v5-c-tree-view__node-text";var b=a(93174),g=a(68425),x=a(41724);const E=i().memo((({name:e,title:t,id:a,isExpanded:n,defaultExpanded:c=!1,children:l=null,onSelect:r,onCheck:d,hasCheckbox:p=!1,checkProps:E={checked:!1},hasBadge:N=!1,customBadgeContent:C,badgeProps:k={isRead:!0},isSelectable:I=!1,isCompact:_,activeItems:S=[],itemData:w,parentItem:y,icon:B,expandedIcon:P,action:T,compareItems:L,useMemo:R})=>{const[D,A]=(0,s.useState)(c);(0,s.useEffect)((()=>{null!=n?A(n):null!=c&&A(D||c)}),[n,c]);let O="button";p?O="label":I&&(O="div");const j=p||I?"button":"span",z=i().createElement("span",{className:(0,o.i)("pf-v5-c-tree-view__node-icon")},!D&&B,D&&(P||B)),M=i().createElement(i().Fragment,null,N&&l&&i().createElement("span",{className:(0,o.i)(u)},i().createElement(g.C,Object.assign({},k),C||l.props.data.length)),N&&!l&&void 0!==C&&i().createElement("span",{className:(0,o.i)(u)},i().createElement(g.C,Object.assign({},k),C)));return i().createElement("li",Object.assign({id:a,className:(0,o.i)("pf-v5-c-tree-view__list-item",D&&m)},D&&{"aria-expanded":"true"},{role:"treeitem",tabIndex:-1}),i().createElement("div",{className:(0,o.i)("pf-v5-c-tree-view__content")},i().createElement(x.w,{prefix:I?"selectable-id":"checkbox-id"},(a=>i().createElement(O,Object.assign({className:(0,o.i)("pf-v5-c-tree-view__node",l&&(I||p)&&v,(!l||I)&&S&&S.length>0&&S.some((e=>L&&e&&L(e,w)))?h:""),onClick:e=>{p||(r&&r(e,w,y),!I&&l&&!0!==e.isDefaultPrevented()&&A(!D))}},p&&{htmlFor:a},(p||I&&l)&&{id:`label-${a}`}),i().createElement("span",{className:(0,o.i)("pf-v5-c-tree-view__node-container")},l&&(e=>i().createElement(j,Object.assign({className:(0,o.i)("pf-v5-c-tree-view__node-toggle"),onClick:e=>{(I||p)&&A(!D),I&&e.stopPropagation()}},(p||I)&&{"aria-labelledby":`label-${e}`},{tabIndex:-1}),i().createElement("span",{className:(0,o.i)("pf-v5-c-tree-view__node-toggle-icon")},i().createElement(b.default,{"aria-hidden":"true"}))))(a),p&&(e=>i().createElement("span",{className:(0,o.i)("pf-v5-c-tree-view__node-check")},i().createElement("input",Object.assign({type:"checkbox",onChange:e=>d&&d(e,w,y),onClick:e=>e.stopPropagation(),ref:e=>e&&(e.indeterminate=null===E.checked)},E,{checked:null!==E.checked&&E.checked,id:e,tabIndex:-1}))))(a),B&&z,(()=>{const a=i().createElement(i().Fragment,null,_&&t&&i().createElement("span",{className:(0,o.i)("pf-v5-c-tree-view__node-title")},t),I?i().createElement("button",{tabIndex:-1,className:(0,o.i)(f)},e):i().createElement("span",{className:(0,o.i)(f)},e));return _?i().createElement("span",{className:(0,o.i)("pf-v5-c-tree-view__node-content")},a):a})(),M)))),T&&i().createElement("div",{className:(0,o.i)("pf-v5-c-tree-view__action")},T)),D&&l)}),((e,t)=>{if(!t.useMemo)return!1;const a=e.activeItems&&e.activeItems.length>0&&e.activeItems.some((t=>e.compareItems&&t&&e.compareItems(t,e.itemData))),n=t.activeItems&&t.activeItems.length>0&&t.activeItems.some((e=>t.compareItems&&e&&t.compareItems(e,t.itemData)));return!a&&!n&&e.name===t.name&&e.title===t.title&&e.id===t.id&&e.isExpanded===t.isExpanded&&e.defaultExpanded===t.defaultExpanded&&e.onSelect===t.onSelect&&e.onCheck===t.onCheck&&e.hasCheckbox===t.hasCheckbox&&e.checkProps===t.checkProps&&e.hasBadge===t.hasBadge&&e.customBadgeContent===t.customBadgeContent&&e.badgeProps===t.badgeProps&&e.isCompact===t.isCompact&&e.icon===t.icon&&e.expandedIcon===t.expandedIcon&&e.action===t.action&&e.parentItem===t.parentItem&&e.itemData===t.itemData}));E.displayName="TreeViewListItem";var N=a(80164),C=a(24396),k=a(1774);class I extends s.Component{constructor(){super(...arguments),this.displayName="TreeViewRoot",this.treeRef=s.createRef(),this.handleKeys=e=>{var t,a,n,s,i,o,c;if(!this.treeRef.current.contains(e.target)||!e.target.classList.contains("pf-v5-c-tree-view__node"))return;const l=document.activeElement,r=e.key,d=Array.from(null===(t=this.treeRef.current)||void 0===t?void 0:t.getElementsByClassName("pf-v5-c-tree-view__node")).filter((e=>!e.classList.contains("pf-m-disabled")));if(r===k.yu.Space&&(l.click(),e.preventDefault()),(0,C.tL)(e,d,(e=>l===e),void 0,[],void 0,!0,!0),["ArrowLeft","ArrowRight"].includes(r)){const t=null===(n=null===(a=null==l?void 0:l.firstElementChild)||void 0===a?void 0:a.firstElementChild)||void 0===n?void 0:n.classList.contains("pf-v5-c-tree-view__node-toggle"),d=null===(s=null==l?void 0:l.closest("li"))||void 0===s?void 0:s.classList.contains("pf-m-expanded");if("ArrowLeft"===r)if(t&&d)l.click();else{const e=null===(i=null==l?void 0:l.closest("ul"))||void 0===i?void 0:i.parentElement;if("DIV"!==(null==e?void 0:e.tagName)){const t=null==e?void 0:e.querySelector("button");l.tabIndex=-1,t&&(t.tabIndex=0,t.focus())}}else if(t&&!d){l.tabIndex=-1,l.click();const e=null===(c=null===(o=null==l?void 0:l.closest("li"))||void 0===o?void 0:o.querySelector("ul > li"))||void 0===c?void 0:c.querySelector("button");e&&(e.tabIndex=0,e.focus())}e.preventDefault()}},this.handleKeysCheckbox=e=>{var t,a,n,s,i;if(!this.treeRef.current.contains(e.target))return;const o=document.activeElement,c=e.key;c===k.yu.Space&&(o.click(),e.preventDefault());const l=Array.from(null===(t=this.treeRef.current)||void 0===t?void 0:t.getElementsByClassName("pf-v5-c-tree-view__node"));(0,C.tL)(e,l,(e=>e.contains(o)),(e=>e.querySelector("button,input")),[],void 0,!0,!0),["ArrowLeft","ArrowRight"].includes(c)&&("ArrowLeft"===c?"INPUT"===(null==o?void 0:o.tagName)?(null===(a=null==o?void 0:o.parentElement)||void 0===a?void 0:a.previousSibling)&&o.parentElement.previousSibling.focus():(null==o?void 0:o.previousSibling)&&("SPAN"===(null===(n=o.previousElementSibling)||void 0===n?void 0:n.tagName)?o.previousSibling.firstChild.focus():o.previousSibling.focus()):"INPUT"===(null==o?void 0:o.tagName)?(null===(s=o.parentElement)||void 0===s?void 0:s.nextSibling)&&o.parentElement.nextSibling.focus():(null==o?void 0:o.nextSibling)&&("SPAN"===(null===(i=o.nextElementSibling)||void 0===i?void 0:i.tagName)?o.nextSibling.firstChild.focus():o.nextSibling.focus()),e.preventDefault())},this.variantStyleModifiers={default:"",compact:r,compactNoBackground:[r,p]}}componentDidMount(){var e;if(N.Nq&&window.addEventListener("keydown",this.props.hasCheckboxes||this.props.hasSelectableNodes?this.handleKeysCheckbox:this.handleKeys),this.props.hasCheckboxes||this.props.hasSelectableNodes){const e=this.treeRef.current.getElementsByClassName("pf-v5-c-tree-view__node-toggle")[0];if(e&&(e.tabIndex=0),this.props.hasCheckboxes){const e=this.treeRef.current.getElementsByTagName("INPUT")[0];e&&(e.tabIndex=0)}if(this.props.hasSelectableNodes){const e=this.treeRef.current.getElementsByClassName("pf-v5-c-tree-view__node-text")[0];e&&(e.tabIndex=0)}}else(null===(e=this.treeRef.current)||void 0===e?void 0:e.getElementsByClassName("pf-v5-c-tree-view__node")[0]).tabIndex=0}componentWillUnmount(){N.Nq&&window.removeEventListener("keydown",this.props.hasCheckboxes||this.props.hasSelectableNodes?this.handleKeysCheckbox:this.handleKeys)}render(){const e=this.props,{children:t,hasCheckboxes:a,hasGuides:i,variant:c,className:l,hasSelectableNodes:r}=e,m=(0,n._T)(e,["children","hasCheckboxes","hasGuides","variant","className","hasSelectableNodes"]);return s.createElement("div",Object.assign({className:(0,o.i)("pf-v5-c-tree-view",i&&d,this.variantStyleModifiers[c],l),ref:this.treeRef},m),t)}}const _=e=>{var{data:t,isNested:a=!1,hasCheckboxes:i=!1,hasBadges:o=!1,hasGuides:c=!1,hasSelectableNodes:r=!1,variant:d="default",defaultAllExpanded:m=!1,allExpanded:p,icon:h,expandedIcon:v,parentItem:u,onSelect:f,onCheck:b,toolbar:g,activeItems:x,compareItems:N=((e,t)=>e.id===t.id),className:C,useMemo:k}=e,S=(0,n._T)(e,["data","isNested","hasCheckboxes","hasBadges","hasGuides","hasSelectableNodes","variant","defaultAllExpanded","allExpanded","icon","expandedIcon","parentItem","onSelect","onCheck","toolbar","activeItems","compareItems","className","useMemo"]);const w=s.createElement(l,{isNested:a,toolbar:g},t.map((e=>{var t,a;return s.createElement(E,Object.assign({key:(null===(t=e.id)||void 0===t?void 0:t.toString())||(null===(a=e.name)||void 0===a?void 0:a.toString()),name:e.name,title:e.title,id:e.id,isExpanded:p,isSelectable:r,defaultExpanded:void 0!==e.defaultExpanded?e.defaultExpanded:m,onSelect:f,onCheck:b,hasCheckbox:void 0!==e.hasCheckbox?e.hasCheckbox:i,checkProps:e.checkProps,hasBadge:void 0!==e.hasBadge?e.hasBadge:o,customBadgeContent:e.customBadgeContent,badgeProps:e.badgeProps,activeItems:x,parentItem:u,itemData:e,icon:void 0!==e.icon?e.icon:h,expandedIcon:void 0!==e.expandedIcon?e.expandedIcon:v,action:e.action,compareItems:N,isCompact:"compact"===d||"compactNoBackground"===d,useMemo:k},e.children&&{children:s.createElement(_,{data:e.children,isNested:!0,parentItem:e,hasCheckboxes:i,hasBadges:o,hasGuides:c,hasSelectableNodes:r,variant:d,allExpanded:p,defaultAllExpanded:m,onSelect:f,onCheck:b,activeItems:x,icon:h,expandedIcon:v})}))})));return s.createElement(s.Fragment,null,u?w:s.createElement(I,Object.assign({hasSelectableNodes:r,hasCheckboxes:i,hasGuides:c,variant:d,className:C},S),w))};_.displayName="TreeView";var S=a(12455),w=a(80810);const y=e=>{var{className:t,onSearch:a,id:i,name:c,"aria-label":l}=e,r=(0,n._T)(e,["className","onSearch","id","name","aria-label"]);return s.createElement("div",{className:(0,o.i)("pf-v5-c-tree-view__search",t)},s.createElement("div",{className:(0,o.i)(S.Z.formControl,S.Z.modifiers.icon)},s.createElement("input",Object.assign({onChange:a,id:i,name:c,"aria-label":l,type:"search"},r)),s.createElement("div",{className:(0,o.i)(S.Z.formControlUtilities)},s.createElement("div",{className:(0,o.i)(S.Z.formControlIcon)},s.createElement(w.default,null)))))};y.displayName="TreeViewSearch"},80810:(e,t,a)=>{a.r(t),a.d(t,{SearchIcon:()=>i,SearchIconConfig:()=>s,default:()=>o});var n=a(40400);const s={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},i=(0,n.I)(s),o=i},12455:(e,t,a)=>{a.d(t,{Z:()=>n}),a(90479);const n={formControl:"pf-v5-c-form-control",formControlIcon:"pf-v5-c-form-control__icon",formControlToggleIcon:"pf-v5-c-form-control__toggle-icon",formControlUtilities:"pf-v5-c-form-control__utilities",modifiers:{readonly:"pf-m-readonly",success:"pf-m-success",warning:"pf-m-warning",error:"pf-m-error",plain:"pf-m-plain",expanded:"pf-m-expanded",disabled:"pf-m-disabled",icon:"pf-m-icon",placeholder:"pf-m-placeholder",resizeVertical:"pf-m-resize-vertical",resizeHorizontal:"pf-m-resize-horizontal",resizeBoth:"pf-m-resize-both",status:"pf-m-status"},themeDark:"pf-v5-theme-dark"}}}]);
//# sourceMappingURL=../sourcemaps/8100.9963837854e149dcf7fa61f217390184.js.map