(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[4650],{78236:(e,t)=>{"use strict";t.k2={name:"--pf-global--breakpoint--md",value:"768px",var:"var(--pf-global--breakpoint--md)"},t.ZP=t.k2},48799:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(92950),o=n.n(r),l=n(94184),a=n.n(l),i=n(22938),c=n(62472),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)},s=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,l=t.length;o<l;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};const d=function(e){var t=e.id,n=e.isDisabled,l=void 0!==n&&n,d=e.items,p=void 0===d?[]:d,v=e.onSelect,f=void 0===v?function(){}:v,b=e.checked,m=void 0!==b&&b,g=e.toggleProps,y=e.count,h=e.className,w=void 0===h?"":h,k=e.ouiaId,E=e.ouiaSafe,x=void 0===E||E,j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["id","isDisabled","items","onSelect","checked","toggleProps","count","className","ouiaId","ouiaSafe"]),O=(0,r.useState)(!1),C=O[0],S=O[1],I=(0,r.useRef)(!1).current,D=(0,r.useRef)((0,c.ql)("RHI/BulkSelect")).current,P=function(e){return S(e)},N=void 0!==k?k:D;return o().createElement(r.Fragment,null,p&&p.length>0?o().createElement(i.Dropdown,u({onSelect:function(){return P(!1)}},j,{className:a()(w,"ins-c-bulk-select"),ouiaId:N,ouiaSafe:x,toggle:o().createElement(i.DropdownToggle,u({},g,{isDisabled:l,ouiaId:N,splitButtonItems:[o().createElement(r.Fragment,{key:"split-checkbox"},I?o().createElement(i.DropdownToggleCheckbox,{id:t?"".concat(t,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:f,checked:m,ouiaId:N}):o().createElement(i.DropdownToggleCheckbox,{id:t?"".concat(t,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:f,isChecked:m,ouiaId:N},y?"".concat(y," selected"):""))],onToggle:P})),isOpen:C,dropdownItems:s(s([],void 0!==y&&y>0?[o().createElement(i.DropdownItem,{key:"count",isDisabled:!0,className:a()({"ins-c-bulk-select__selected":!I})},y," Selected")]:[],!0),p.map((function(e,t){return o().createElement(i.DropdownItem,u({component:"button",key:e.key||t,ouiaId:"".concat(N,"-").concat(e.key||t),onClick:function(n){return e.onClick&&e.onClick(n,e,t)}},null==e?void 0:e.props),e.title)})),!0)})):o().createElement(i.Checkbox,u({},j,{"aria-label":"Select all",className:a()(w,"ins-c-bulk-select"),id:"".concat(t,"-checkbox"),isChecked:m,onChange:f})))}},40787:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(92950),o=n.n(r),l=n(22938),a=n(18446),i=n.n(a),c=n(57557),u=n.n(c),s=n(68097),d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d.apply(this,arguments)},p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,l=t.length;o<l;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};const f=function(e){var t=e.items,n=void 0===t?[]:t,a=e.value,c=void 0===a?[]:a,f=e.onChange,b=void 0===f?function(){}:f,m=e.isDisabled,g=void 0!==m&&m,y=p(e,["items","value","onChange","isDisabled"]),h=y.placeholder,w=y.className,k=(0,r.useState)(!1),E=k[0],x=k[1],j=(0,r.useState)([]),O=j[0],C=j[1],S=(0,r.useRef)(O),I=function(e){S.current=O,C(e)};(0,r.useEffect)((function(){!i()(S.current,c)&&c&&I(c)}),[O,c]);var D=function(){return Array.from(new Set(v(v([],c&&c.length>0&&c.constructor===Array?c.map((function(e){return(0,s.P)(e)?e.value:e})):[],!0),O,!0)))};return o().createElement(r.Fragment,null,!n||n&&n.length<=0?o().createElement(s.Z,d({},y,{onChange:b,isDisabled:g,value:"".concat(D())})):o().createElement(l.Select,{className:w,variant:l.SelectVariant.checkbox,"aria-label":"Select Input",onToggle:function(e){return x(e)},isDisabled:g,onSelect:function(e,t){return function(e,t){var n=D();n=n.includes(t)?n.filter((function(e){return e!==t})):v(v([],n,!0),[t],!1),null==b||b(e,n,t),I(n)}(e,t)},selections:D(),isOpen:E,placeholderText:h,ouiaId:h},n.map((function(e,t){var n=e.value,r=e.onClick,a=e.label,i=e.id,c=p(e,["value","onClick","label","id"]);return o().createElement(l.SelectOption,d({},u()(c,"onChange"),{key:i||t,value:String(n||i||t),onClick:function(e){return null==r?void 0:r(e,d({value:n,label:a,id:i},c),t)}}),a)}))))}},18213:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(92950),o=n.n(r),l=n(94184),a=n.n(l),i=n(78236),c=n(22938),u=n(76139),s=n(68097),d=n(87123),p=(n(74131),function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p.apply(this,arguments)});const v=function(e){var t=e.hideLabel,n=void 0!==t&&t,l=e.id,v=void 0===l?"default-input":l,f=e.isDisabled,b=void 0!==f&&f,m=e.items,g=void 0===m?[]:m,y=e.onChange,h=e.placeholder,w=e.useMobileLayout,k=void 0!==w&&w,E=e.value,x=void 0===E?"":E,j=parseInt(i.ZP.value.replace("px","")),O=function(e){return e<=j},C=(0,r.useState)(!1),S=C[0],I=C[1],D=(0,r.useState)(),P=D[0],N=D[1],A=(0,r.useState)(O(window.innerWidth)),F=A[0],Z=A[1],T=(0,r.useRef)((function(e){Z(O((null==e?void 0:e.target).innerWidth))}));(0,r.useEffect)((function(){return k||console.warn('The prop "useMobileLayout" is set to false. You are using an outdated mobile layout of conditional filter.\n    Please switch to new layout by adding "useMobileLayout={true}" prop to the PrimaryToolbar or ConditionalFilter directly.\n    The new mobile layout will become the default in next minor release.'),window.addEventListener("resize",T.current),function(){T.current&&window.removeEventListener("resize",T.current)}}),[]);var V=y?x:P,_=g&&g.length&&(g.find((function(e,t){return e.value===V||t===Number(V)}))||g[0]),M=y||function(e,t){return N(t)},R=k&&F,B=function(e){return e[0].toUpperCase()+e.substring(1)},L=_&&(d.w[_.type]||d.w.text),G=k&&F?function(e){return o().createElement(c.ToolbarToggleGroup,p({},e,{breakpoint:"md",toggleIcon:o().createElement(u.FilterIcon,null)}))}:r.Fragment;return o().createElement(G,null,k&&F&&o().createElement(c.ToolbarGroup,{className:"ins-c-conditional-filter mobile"},g.map((function(e,t){var n=e&&(d.w[e.type]||d.w.text);return o().createElement(c.ToolbarItem,{key:t},o().createElement(n,p({},e.type!==d.Y.custom&&{placeholder:h||e.placeholder||"Filter by ".concat(e.label),id:e.filterValues?e.filterValues.id:V?String(V):void 0},e.filterValues)))}))),!R&&o().createElement(r.Fragment,null,!g||g&&g.length<=0?o().createElement("div",{className:a()("ins-c-conditional-filter",{desktop:k})},o().createElement(s.Z,{id:v,isDisabled:b,onChange:function(e){return M(e,e.target.value)},placeholder:h,value:V?String(V):void 0,"widget-type":"InsightsInput"})):o().createElement(c.Split,{className:a()("ins-c-conditional-filter",{desktop:k})},g.length>1&&o().createElement(c.SplitItem,null,o().createElement(c.Dropdown,{className:"ins-c-conditional-filter__group",onSelect:function(){return I(!1)},isOpen:S,ouiaId:"ConditionalFilter",toggle:o().createElement(c.DropdownToggle,{"aria-label":"Conditional filter",onToggle:I,isDisabled:b,className:n?"ins-c-conditional-filter__no-label":"",ouiaId:"ConditionalFilter"},o().createElement(u.FilterIcon,{size:"sm"}),!n&&o().createElement("span",{className:"ins-c-conditional-filter__value-selector"},_&&B(String(_.label)))),dropdownItems:g.map((function(e,t){return o().createElement(c.DropdownItem,{key:e.id?"".concat(e.id,"-dropdown"):t,component:"button",ouiaId:String(e.label),onClick:function(n){return M(n,e.value||t)},isHovered:_.label===e.label},B(String(e.label)))}))})),L&&o().createElement(c.SplitItem,{isFilled:!0},o().createElement(L,p({},_.type!==d.Y.custom&&{placeholder:h||_.placeholder||"Filter by ".concat(_.label),id:_.filterValues&&_.filterValues.id||V?String(V):void 0},_.filterValues))))))}},21556:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(92950),o=n.n(r),l=n(94184),a=n.n(l),i=n(22938),c=n(22137),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)},s=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,l=t.length;o<l;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},d=function(e,t,n,r,o,l){var a,i,c,s,d=u(u({},l),o);if(void 0===d[e])return!1;if(function(e){var t;return void 0!==(null===(t=e)||void 0===t?void 0:t.items)}(d[e][t])){var p=d[e][t];if(p.isSelected){if(null===(a=null==p?void 0:p.item)||void 0===a?void 0:a.id)return n===(null===(i=null==p?void 0:p.item)||void 0===i?void 0:i.id);if(null===(c=null==p?void 0:p.item)||void 0===c?void 0:c.tagValue)return r===(null===(s=null==p?void 0:p.item)||void 0===s?void 0:s.tagValue)}return Boolean(p.isSelected)}return Boolean(d[e][t])},p=function(e,t,n,r,o,l,a,i){return void 0===o&&(o=""),((null==e?void 0:e.map((function(s,d){return u(u({},s),{className:"".concat((null==s?void 0:s.className)||"pf-u-pl-sm"),key:s.id||s.value||d,value:String(s.value||s.id||d),onClick:function(d,p,v){var f,b=[d,n(r||s.type,o,(r||s.type)===c.Z.treeView?p:s.value,v),u({value:o,label:l||s.label,id:a||s.id,type:r||s.type,items:e},i||s),s,o,s.value];null==t||t.apply(void 0,b),null===(f=null==s?void 0:s.onClick)||void 0===f||f.call(s,d,u(u({},s),{label:"string"==typeof s.label?s.label:""}),void 0,v)}})})))||[]).filter((function(e){return!e.noFilter}))},v=function(e){return e.id=e.id||e.value,e.name=e.label||e.name,e.value=e.id,e.label=e.name||"",e.children?u(u({},e),{children:e.children.map((function(e){return v(e)}))}):e},f=function(e){return function(t,n,r,o){void 0===t&&(t=c.Z.button),void 0===n&&(n=""),void 0===r&&(r=""),void 0===o&&(o=!1);var l=null==e?void 0:e[n],a=t===c.Z.treeView?[r].reduce((function e(t,n){return Array.isArray(null==n?void 0:n.children)?n.children.reduce(e,t)||[]:(t.push(n),t)}),[]):[],i=t===c.Z.treeView?a.map((function(e){return e.id})):[String(r)];if(l){var s=e;return i.map((function(e){var r,l,a,i;void 0===e&&(e="");var d=s[n];s=t!==c.Z.radio&&(d[e]instanceof Object?d[e].isSelected:Boolean(d[e]))?u(u({},s),((r={})[n]=u(u({},d||{}),((l={})[e]=t===c.Z.treeView&&o,l)),r)):u(u({},s),((a={})[n]=u(u({},t!==c.Z.radio&&d||{}),((i={})[e]=!0,i)),a))})),s}return i.reduce((function(e,t){var r,o;return u(u({},e),((r={})[n]=u(u({},null==e?void 0:e[n]),((o={})[t||""]=!0,o)),r))}),e)}},b=function(e,t,n,r){return e.children?e.children.every((function(e){return b(e,t,n,r)})):d(t,e.id||"",void 0,void 0,n,r)},m=function(e,t,n,r){return e.children?e.children.some((function(e){return m(e,t,n,r)})):d(t,e.id||"",void 0,void 0,n,r)},g=function(e,t,n,r){var o=b(e,t,n,r);return e.checkProps={checked:!1},o?e.checkProps.checked=!0:m(e,t,n,r)&&(e.checkProps={checked:null}),e.children?u(u({},e),{children:e.children.map((function(e){return g(e,t,n,r)}))}):e},y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},y.apply(this,arguments)};const h=function(e){var t=e.className,n=e.filterBy,l=void 0===n?"":n,b=e.groups,m=void 0===b?[]:b,h=e.items,w=e.isFilterable,k=e.onFilter,E=e.onChange,x=e.onShowMore,j=e.placeholder,O=e.selected,C=e.showMoreTitle,S=e.showMoreOptions,I=(0,r.useState)({}),D=I[0],P=I[1],N=(0,r.useState)(""),A=N[0],F=N[1],Z=(0,r.useState)(!1),T=Z[0],V=Z[1],_=(0,r.useRef)(null),M=(0,r.useRef)(null),R=(0,r.useRef)(null);(0,r.useEffect)((function(){O&&P(O)}),[O]),(0,r.useEffect)((function(){F(l)}),[l]);var B=function(e){var t,n,r;T&&((null===(t=R.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=_.current)||void 0===n?void 0:n.contains(e.target)))&&("Escape"!==e.key&&"Enter"!==e.key||(V(!T),null===(r=_.current)||void 0===r||r.focus()))},L=function(e){var t;T&&!(null===(t=R.current)||void 0===t?void 0:t.contains(e.target))&&V(!1)};(0,r.useEffect)((function(){return window.addEventListener("keydown",B),window.addEventListener("click",L),function(){window.removeEventListener("keydown",B),window.removeEventListener("click",L)}}),[T,R]);var G=p((null==h?void 0:h.map((function(e){return e.type===c.Z.treeView?v(e):e})))||[],E,f(O||{})),U=function(e,t,n){return e.map((function(e){var r=e.value,o=e.label,l=e.groupSelectable,a=e.id,i=e.type,d=e.items,f=e.noFilter,b=i===c.Z.treeView?d.map((function(e){return v(e)})):d;return{label:o,noFilter:f,value:r,type:i,groupSelectable:l,items:p(s(s([],l?[u({value:r||"",label:o||"",id:a||"",type:i,className:"pf-u-pl-xs"},e)]:[],!0),b,!0),t,n,i,r,o,a,e)}})).filter((function(e){var t=e.noFilter,n=e.items;return!t||(void 0===n?[]:n).length>0}))}(m,E,f(O||{})),z=function(e,t,n,r){return void 0===r&&(r=""),o().createElement(i.MenuItem,{itemId:t,key:"".concat(e.value,"-").concat(t,"-item"),className:null==e?void 0:e.className,onClick:e.onClick&&(n||e.type)===c.Z.checkbox?function(t){e.onClick&&e.onClick(),t.preventDefault()}:void 0},(n||e.type)===c.Z.treeView?o().createElement(i.TreeView,{data:[g(e,r,D,O||{})],onCheck:function(t,n){return function(e,t,n){var r,o,l;return null===(o=(r=n[0]).onClick)||void 0===o?void 0:o.call(r,e,t,void 0,null===(l=null==e?void 0:e.target)||void 0===l?void 0:l.checked)}(t,n,[e])},hasChecks:!0}):(n||e.type)===c.Z.checkbox?o().createElement(i.Checkbox,y({},e,{label:null==e?void 0:e.label,isChecked:(null==e?void 0:e.isChecked)||d(r,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,D,O||{})||!1,onChange:function(t,n){var r;null===(r=null==e?void 0:e.onChange)||void 0===r||r.call(e,t,n)},onClick:e.onClick?function(t){e.onClick&&e.onClick(),t.stopPropagation()}:void 0,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(r,"-").concat(t),id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(r,"-").concat(t)})):(n||e.type)===c.Z.radio?o().createElement(i.Radio,y({},e,{isChecked:(null==e?void 0:e.isChecked)||d(r,(null==e?void 0:e.value)||t,null==e?void 0:e.id,null==e?void 0:e.tagValue,D,O||{})||!1,onChange:function(t,n){var r;null===(r=null==e?void 0:e.onChange)||void 0===r||r.call(e,t,n)},value:(null==e?void 0:e.value)||t,name:(null==e?void 0:e.name)||(null==e?void 0:e.value)||"".concat(r,"-").concat(t),label:(null==e?void 0:e.label)||"",id:(null==e?void 0:e.id)||(null==e?void 0:e.value)||"".concat(r,"-").concat(t)})):(n||e.type)===c.Z.button?o().createElement(i.Button,{id:e.id,className:"pf-c-select__option-button ".concat((null==e?void 0:e.className)||""),variant:null==e?void 0:e.variant,onClick:e.onClick},null==e?void 0:e.label):(null==e?void 0:e.label)||"")},Y=function(e,t,n){return void 0===n&&(n=""),e.map((function(e,r){return(t||e.type)===c.Z.treeView?o().createElement("div",{key:"".concat(e.value,"-").concat(r,"-item"),className:"ins-c-tree-view"},z(e,r,t,n)):z(e,r,t,n)}))};return o().createElement("div",{ref:M},o().createElement(i.Popper,{appendTo:M.current,trigger:o().createElement(i.MenuToggle,{"aria-label":"Group filter",ref:_,onClick:function(e){e.stopPropagation(),e.persist(),V(!T)},isExpanded:T,className:t},w||k?o().createElement(i.TextInput,{"aria-label":"input with dropdown and clear button",placeholder:j,value:A,tabIndex:0,onChange:function(e){F(e),null==k||k(e)},type:"search"}):j),popper:o().createElement(i.Menu,{ref:R,className:a()("ins-c-menu__scrollable",t,{"pf-m-expanded":T})},o().createElement(i.MenuContent,null,o().createElement(i.MenuList,{"aria-label":"Group filter"},G.length>0&&o().createElement(i.MenuGroup,null,Y(G)),U.map((function(e,t){return o().createElement(i.MenuGroup,{label:e.groupSelectable&&"string"==typeof e.label?e.label:void 0,key:"".concat(e.label,"-").concat(t,"-group")},Y(e.items,e.type,e.value))})),x?o().createElement(i.MenuItem,y({itemId:"loader",className:"ins-c-menu__show--more"},S,{onClick:function(e){return x(e)}}),C):o().createElement("span",{hidden:!0,value:""})))),isVisible:T}))}},26154:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(92950),o=n.n(r),l=n(22938),a=n(68097),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const u=function(e){var t=e.items,n=void 0===t?[]:t,u=e.onChange,s=void 0===u?function(){}:u,d=e.isDisabled,p=void 0!==d&&d,v=c(e,["items","onChange","isDisabled"]),f=v.placeholder,b=v.className,m=v.value,g=(0,r.useState)(!1),y=g[0],h=g[1],w=(0,r.useState)(),k=w[0],E=w[1],x=function(){return m?(0,a.P)(m)?m.value:m:k?(0,a.P)(k)?k.value:k:void 0},j=x();return o().createElement(r.Fragment,null,!n||n&&n.length<=0?o().createElement(a.Z,i({},v,{onChange:s,isDisabled:p,value:"".concat(x())})):o().createElement(l.Select,{className:b,variant:l.SelectVariant.single,"aria-label":"Select Input",isDisabled:p,onToggle:function(e){return h(e)},onSelect:function(e,t){return function(e,t){null==s||s(e,t),E(t)}(e,t)},isOpen:y,placeholderText:f,ouiaId:f},n.map((function(e,t){var n=e.value,r=e.isChecked,a=e.onChange,u=e.label,s=e.id,d=c(e,["value","isChecked","onChange","label","id"]);return o().createElement(l.SelectOption,i({},d,{key:s||t,value:n||""+t}),o().createElement(l.Radio,{name:s||"".concat(t,"-radio"),label:u,value:n||t,isChecked:r||void 0!==j&&j===n||void 0!==j&&j===""+t||!1,onChange:function(e,o){return null==a?void 0:a(o,i({id:s,label:u,value:n,isChecked:r},d),t)},id:s||"".concat(n,"-").concat(t)}))}))))}},68097:(e,t,n)=>{"use strict";n.d(t,{P:()=>c,Z:()=>u});var r=n(92950),o=n.n(r),l=n(22938),a=n(76139),i=(n(74131),function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n});function c(e){return void 0!==e.value}const u=function(e){var t=e.icon,n=e.id,c=e.isDisabled,u=void 0!==c&&c,s=e.className,d=e.onChange,p=e.onSubmit,v=void 0===p?function(){}:p,f=e.value,b=void 0===f?"":f,m=e.placeholder,g=i(e,["icon","id","isDisabled","className","onChange","onSubmit","value","placeholder"]),y=(0,r.useState)(""),h=y[0],w=y[1],k=t||a.SearchIcon;return o().createElement(r.Fragment,null,o().createElement(l.TextInput,{"aria-label":g["aria-label"]||"text input",className:"ins-c-conditional-filter ".concat(s||""),"data-ouia-component-type":"PF4/TextInput",id:n,isDisabled:u,value:d?"string"==typeof b?b:b.value:h,onChange:function(e,t){return function(e,t){return d?d(e,t):w(t)}(t,t.target.value)},onKeyDown:function(e){return"Enter"===e.key&&(null==v?void 0:v(e,("string"==typeof b?b:b.value)||h))},ouiaId:"ConditionalFilter",placeholder:m,"widget-type":"InsightsInput"}),o().createElement(k,{size:"sm",className:"ins-c-search-icon"}))}},87123:(e,t,n)=>{"use strict";n.d(t,{Y:()=>c,w:()=>u});var r=n(92950),o=n(68097),l=n(40787),a=n(26154),i=n(21556),c={text:"text",checkbox:"checkbox",radio:"radio",custom:"custom",group:"group"},u={text:o.Z,checkbox:l.Z,radio:a.Z,custom:r.Fragment,group:i.Z}},22137:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={treeView:"treeView",checkbox:"checkbox",radio:"radio",button:"button",plain:"plain"}},97138:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(22938),o=n(92950),l=n.n(o),a=n(76139),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,l=t.length;o<l;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};const u=function(e){var t,n=e.extraItems,u=void 0===n?[]:n,s=e.onSelect,d=void 0===s?function(){}:s,p=e.isDisabled,v=e.tooltipText,f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["extraItems","onSelect","isDisabled","tooltipText"]),b=(0,o.useState)(!1),m=b[0],g=b[1];return l().createElement(l().Fragment,null,(t=l().createElement(r.Dropdown,i({isPlain:!0},f,{onSelect:function(){return g((function(e){return!e}))},toggle:l().createElement(r.DropdownToggle,{"aria-label":"Export",toggleIndicator:null,onToggle:function(e){return g(e)},isDisabled:p,ouiaId:"Export"},l().createElement(a.ExportIcon,{size:"sm"})),isOpen:m,ouiaId:"Export",dropdownItems:c([l().createElement(r.DropdownItem,{key:"download-csv",ouiaId:"DownloadCSV",component:"button",onClick:function(e){return d(e,"csv")},isDisabled:p},"Export to CSV"),l().createElement(r.DropdownItem,{key:"download-json",ouiaId:"DownloadJSON",component:"button",onClick:function(e){return d(e,"json")},isDisabled:p},"Export to JSON")],u,!0)})),l().createElement(l().Fragment,null,v?l().createElement(r.Tooltip,{content:v},t):t)))}},51812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(92950),o=n.n(r),l=n(22938),a=n(94184),i=n.n(a),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};function u(e){return Object.prototype.hasOwnProperty.call(e,"category")}function s(e){return!u(e)}const d=function(e){var t=e.className,n=e.filters,r=void 0===n?[]:n,a=e.onDelete,d=void 0===a?function(){}:a,p=e.deleteTitle,v=void 0===p?"Clear filters":p,f=e.showDeleteButton,b=e.onDeleteGroup,m=r.filter(u),g=m.map((function(e,t){return o().createElement(l.ChipGroup,c({key:"group_".concat(e.category),categoryName:String(e.category)||" "},b&&{isClosable:!0,onClick:function(n){n.stopPropagation(),b(n,[e],m.filter((function(e,n){return n!==t})))}}),e.chips.map((function(t){return o().createElement(l.Chip,{key:t.name,onClick:function(n){n.stopPropagation(),d(n,[c(c({},e),{chips:[t]})])}},t.name,t.count&&o().createElement(l.Badge,{key:"chip_badge_".concat(t.id),isRead:t.isRead},t.count))})))})),y=r.filter(s);return o().createElement("span",{className:i()(t,"ins-c-chip-filters")},g,y&&y.map((function(e){return o().createElement(l.ChipGroup,{key:"group_plain_chip_".concat(e.name)},o().createElement(l.Chip,{onClick:function(t){t.stopPropagation(),d(t,[e])}},e.name,e.count&&o().createElement(l.Badge,{key:"chip_badge_".concat(e.id),isRead:e.isRead},e.count)))})),(!0===f||void 0===f&&r.length>0)&&o().createElement(l.Button,{variant:"link",ouiaId:"ClearFilters",onClick:function(e){return d(e,r,!0)}},v))}},96874:e=>{e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},77412:e=>{e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},44037:(e,t,n)=>{var r=n(98363),o=n(3674);e.exports=function(e,t){return e&&r(t,o(t),e)}},63886:(e,t,n)=>{var r=n(98363),o=n(81704);e.exports=function(e,t){return e&&r(t,o(t),e)}},85990:(e,t,n)=>{var r=n(46384),o=n(77412),l=n(34865),a=n(44037),i=n(63886),c=n(64626),u=n(278),s=n(18805),d=n(1911),p=n(58234),v=n(46904),f=n(64160),b=n(43824),m=n(29148),g=n(38517),y=n(1469),h=n(44144),w=n(56688),k=n(13218),E=n(72928),x=n(3674),j=n(81704),O="[object Arguments]",C="[object Function]",S="[object Object]",I={};I[O]=I["[object Array]"]=I["[object ArrayBuffer]"]=I["[object DataView]"]=I["[object Boolean]"]=I["[object Date]"]=I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Map]"]=I["[object Number]"]=I[S]=I["[object RegExp]"]=I["[object Set]"]=I["[object String]"]=I["[object Symbol]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I["[object Error]"]=I[C]=I["[object WeakMap]"]=!1,e.exports=function e(t,n,D,P,N,A){var F,Z=1&n,T=2&n,V=4&n;if(D&&(F=N?D(t,P,N,A):D(t)),void 0!==F)return F;if(!k(t))return t;var _=y(t);if(_){if(F=b(t),!Z)return u(t,F)}else{var M=f(t),R=M==C||"[object GeneratorFunction]"==M;if(h(t))return c(t,Z);if(M==S||M==O||R&&!N){if(F=T||R?{}:g(t),!Z)return T?d(t,i(F,t)):s(t,a(F,t))}else{if(!I[M])return N?t:{};F=m(t,M,Z)}}A||(A=new r);var B=A.get(t);if(B)return B;A.set(t,F),E(t)?t.forEach((function(r){F.add(e(r,n,D,r,t,A))})):w(t)&&t.forEach((function(r,o){F.set(o,e(r,n,D,o,t,A))}));var L=_?void 0:(V?T?v:p:T?j:x)(t);return o(L||t,(function(r,o){L&&(r=t[o=r]),l(F,o,e(r,n,D,o,t,A))})),F}},21078:(e,t,n)=>{var r=n(62488),o=n(37285);e.exports=function e(t,n,l,a,i){var c=-1,u=t.length;for(l||(l=o),i||(i=[]);++c<u;){var s=t[c];n>0&&l(s)?n>1?e(s,n-1,l,a,i):r(i,s):a||(i[i.length]=s)}return i}},25588:(e,t,n)=>{var r=n(64160),o=n(37005);e.exports=function(e){return o(e)&&"[object Map]"==r(e)}},29221:(e,t,n)=>{var r=n(64160),o=n(37005);e.exports=function(e){return o(e)&&"[object Set]"==r(e)}},56560:(e,t,n)=>{var r=n(75703),o=n(38777),l=n(6557),a=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:l;e.exports=a},14259:e=>{e.exports=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var l=Array(o);++r<o;)l[r]=e[r+t];return l}},57406:(e,t,n)=>{var r=n(71811),o=n(10928),l=n(40292),a=n(40327);e.exports=function(e,t){return t=r(t,e),null==(e=l(e,t))||delete e[a(o(t))]}},57157:(e,t,n)=>{var r=n(74318);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}},93147:e=>{var t=/\w*$/;e.exports=function(e){var n=new e.constructor(e.source,t.exec(e));return n.lastIndex=e.lastIndex,n}},40419:(e,t,n)=>{var r=n(62705),o=r?r.prototype:void 0,l=o?o.valueOf:void 0;e.exports=function(e){return l?Object(l.call(e)):{}}},18805:(e,t,n)=>{var r=n(98363),o=n(99551);e.exports=function(e,t){return r(e,o(e),t)}},1911:(e,t,n)=>{var r=n(98363),o=n(92833);e.exports=function(e,t){return r(e,o(e),t)}},60696:(e,t,n)=>{var r=n(68630);e.exports=function(e){return r(e)?void 0:e}},99021:(e,t,n)=>{var r=n(85564),o=n(45357),l=n(30061);e.exports=function(e){return l(o(e,void 0,r),e+"")}},46904:(e,t,n)=>{var r=n(68866),o=n(92833),l=n(81704);e.exports=function(e){return r(e,l,o)}},92833:(e,t,n)=>{var r=n(62488),o=n(85924),l=n(99551),a=n(70479),i=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)r(t,l(e)),e=o(e);return t}:a;e.exports=i},43824:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e){var n=e.length,r=new e.constructor(n);return n&&"string"==typeof e[0]&&t.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},29148:(e,t,n)=>{var r=n(74318),o=n(57157),l=n(93147),a=n(40419),i=n(77133);e.exports=function(e,t,n){var c=e.constructor;switch(t){case"[object ArrayBuffer]":return r(e);case"[object Boolean]":case"[object Date]":return new c(+e);case"[object DataView]":return o(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return i(e,n);case"[object Map]":case"[object Set]":return new c;case"[object Number]":case"[object String]":return new c(e);case"[object RegExp]":return l(e);case"[object Symbol]":return a(e)}}},37285:(e,t,n)=>{var r=n(62705),o=n(35694),l=n(1469),a=r?r.isConcatSpreadable:void 0;e.exports=function(e){return l(e)||o(e)||!!(a&&e&&e[a])}},45357:(e,t,n)=>{var r=n(96874),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var l=arguments,a=-1,i=o(l.length-t,0),c=Array(i);++a<i;)c[a]=l[t+a];a=-1;for(var u=Array(t+1);++a<t;)u[a]=l[a];return u[t]=n(c),r(e,this,u)}}},40292:(e,t,n)=>{var r=n(97786),o=n(14259);e.exports=function(e,t){return t.length<2?e:r(e,o(t,0,-1))}},30061:(e,t,n)=>{var r=n(56560),o=n(21275)(r);e.exports=o},21275:e=>{var t=Date.now;e.exports=function(e){var n=0,r=0;return function(){var o=t(),l=16-(o-r);if(r=o,l>0){if(++n>=800)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}},75703:e=>{e.exports=function(e){return function(){return e}}},85564:(e,t,n)=>{var r=n(21078);e.exports=function(e){return null!=e&&e.length?r(e,1):[]}},6557:e=>{e.exports=function(e){return e}},56688:(e,t,n)=>{var r=n(25588),o=n(7518),l=n(31167),a=l&&l.isMap,i=a?o(a):r;e.exports=i},68630:(e,t,n)=>{var r=n(44239),o=n(85924),l=n(37005),a=Function.prototype,i=Object.prototype,c=a.toString,u=i.hasOwnProperty,s=c.call(Object);e.exports=function(e){if(!l(e)||"[object Object]"!=r(e))return!1;var t=o(e);if(null===t)return!0;var n=u.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==s}},72928:(e,t,n)=>{var r=n(29221),o=n(7518),l=n(31167),a=l&&l.isSet,i=a?o(a):r;e.exports=i},10928:e=>{e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},57557:(e,t,n)=>{var r=n(29932),o=n(85990),l=n(57406),a=n(71811),i=n(98363),c=n(60696),u=n(99021),s=n(46904),d=u((function(e,t){var n={};if(null==e)return n;var u=!1;t=r(t,(function(t){return t=a(t,e),u||(u=t.length>1),t})),i(e,s(e),n),u&&(n=o(n,7,c));for(var d=t.length;d--;)l(n,t[d]);return n}));e.exports=d},74131:()=>{}}]);