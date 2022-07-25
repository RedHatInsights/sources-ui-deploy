window.loadPluginEntry("sources@1.1.0",(()=>{"use strict";var e,r,t,n,o,a,i,l,u,s,f,d,c,h,p,v,m,y,g,b,w,P={14058:(e,r,t)=>{var n={RecommendedServices:()=>Promise.all([t.e(4095),t.e(6942),t.e(7692),t.e(4650),t.e(2950),t.e(3477),t.e(5648),t.e(1298),t.e(746)]).then((()=>()=>t(21298)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},S={};function j(e){var r=S[e];if(void 0!==r)return r.exports;var t=S[e]={id:e,loaded:!1,exports:{}};return P[e].call(t.exports,t,t.exports,j),t.loaded=!0,t.exports}return j.m=P,j.c=S,j.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return j.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,j.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);j.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,j.d(o,a),o},j.d=(e,r)=>{for(var t in r)j.o(r,t)&&!j.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},j.f={},j.e=e=>Promise.all(Object.keys(j.f).reduce(((r,t)=>(j.f[t](e,r),r)),[])),j.u=e=>"js/"+({593:"sourcesPage",1128:"removeSource",2199:"addSource",3744:"removeApplication",5180:"addApplication",6818:"sourceDetail",8291:"renameSource",8331:"credentialsForm",8490:"remove"}[e]||e)+".1658763299571."+j.h()+".js",j.miniCssF=e=>"css/"+({593:"sourcesPage",2199:"addSource",6818:"sourceDetail"}[e]||e)+"."+{593:"0c6769d2c18725a277fb",746:"fb6cf06e8e463514c903",2199:"79790d9eb1e0411625a4",6818:"79790d9eb1e0411625a4"}[e]+".css",j.h=()=>"ce9e6d27c0abf75f7c28",j.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),j.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),j.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="sources-ui:",j.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+o){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,j.nc&&i.setAttribute("nonce",j.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},j.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),j.j=3534,(()=>{j.S={};var e={},r={};j.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];j.o(j.S,t)||(j.S[t]={});var a=j.S[t],i="sources-ui",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@patternfly/react-core","4.224.1",(()=>Promise.all([j.e(5944),j.e(2681),j.e(7123),j.e(123),j.e(2950),j.e(2181),j.e(3635)]).then((()=>()=>j(10362))))),l("@patternfly/react-icons","4.75.1",(()=>Promise.all([j.e(2577),j.e(2950),j.e(8583)]).then((()=>()=>j(42577))))),l("@patternfly/react-table","4.93.1",(()=>Promise.all([j.e(5944),j.e(4095),j.e(6942),j.e(7123),j.e(5993),j.e(2950),j.e(2181),j.e(3477),j.e(6329)]).then((()=>()=>j(85993))))),l("axios","0.27.2",(()=>Promise.all([j.e(9669),j.e(4155)]).then((()=>()=>j(9669))))),l("react-dom","17.0.2",(()=>Promise.all([j.e(3935),j.e(2950)]).then((()=>()=>j(73935))))),l("react-router-dom","5.3.3",(()=>Promise.all([j.e(3338),j.e(2950),j.e(8961)]).then((()=>()=>j(23338))))),l("react","17.0.2",(()=>j.e(7294).then((()=>()=>j(67294))))),l("redux-promise-middleware","6.1.2",(()=>j.e(5068).then((()=>()=>j(5068)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),j.p="/beta/apps/sources/",o=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},a=(e,r)=>{e=o(e),r=o(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],a=(typeof n)[0];if(t>=r.length)return"u"==a;var i=r[t],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;t++}},i=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var a=[];for(o=1;o<e.length;o++){var l=e[o];a.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?a.pop()+" "+a.pop():i(l))}return u();function u(){return a.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,r)=>{if(0 in e){r=o(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var a=0,i=1,u=!0;;i++,a++){var s,f,d=i<e.length?(typeof e[i])[0]:"";if(a>=r.length||"o"==(f=(typeof(s=r[a]))[0]))return!u||("u"==d?i>t&&!n:""==d!=n);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(i<=t){if(s!=e[i])return!1}else{if(n?s>e[i]:s<e[i])return!1;s!=e[i]&&(u=!1)}else if("s"!=d&&"n"!=d){if(n||i<=t)return!1;u=!1,i--}else{if(i<=t||f<d!=n)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,i--)}}var c=[],h=c.pop.bind(c);for(a=1;a<e.length;a++){var p=e[a];c.push(1==p?h()|h():2==p?h()&h():p?l(p,r):!h())}return!!h()},u=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},s=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+i(n)+")",f=(e,r,t,n)=>{var o=u(e,t);return l(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(s(e,t,o,n)),c(e[t][o])},d=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!l(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},c=e=>(e.loaded=1,e.get()),p=(h=e=>function(r,t,n,o){var a=j.I(r);return a&&a.then?a.then(e.bind(e,r,j.S[r],t,n,o)):e(r,j.S[r],t,n,o)})(((e,r,t,n,o)=>r&&j.o(r,t)?f(r,0,t,n):o())),v=h(((e,r,t,n,o)=>{var a=r&&j.o(r,t)&&d(r,t,n);return a?c(a):o()})),m={},y={92950:()=>p("default","react",[1,17,0,2],(()=>j.e(7294).then((()=>()=>j(67294))))),12181:()=>p("default","react-dom",[1,17,0,2],(()=>j.e(3935).then((()=>()=>j(73935))))),14938:()=>v("default","@patternfly/react-core",[1,4,221,3],(()=>Promise.all([j.e(5944),j.e(2681),j.e(7123),j.e(123),j.e(2181),j.e(5467)]).then((()=>()=>j(10362))))),52017:()=>v("default","@patternfly/react-icons",[1,4,72,3],(()=>j.e(2577).then((()=>()=>j(42577))))),56645:()=>v("default","@patternfly/react-table",[1,4,93,1],(()=>Promise.all([j.e(5944),j.e(4095),j.e(7123),j.e(5993),j.e(2181),j.e(9477)]).then((()=>()=>j(85993))))),78542:()=>v("default","axios",[4,0,27,2],(()=>j.e(9669).then((()=>()=>j(9669))))),86235:()=>v("default","react-router-dom",[1,5,3,0],(()=>j.e(3338).then((()=>()=>j(23338)))))},g={2181:[12181],2950:[92950],3477:[14938],5648:[52017,56645,78542,86235]},j.f.consumes=(e,r)=>{j.o(g,e)&&g[e].forEach((e=>{if(j.o(m,e))return r.push(m[e]);var t=r=>{m[e]=0,j.m[e]=t=>{delete j.c[e],t.exports=r()}},n=r=>{delete m[e],j.m[e]=t=>{throw delete j.c[e],r}};try{var o=y[e]();o.then?r.push(m[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(l=e[a]))[0]?"-":(o>0?".":"")+(o=2,l);return n}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():t(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,l=1,u=!0;;l++,i++){var s,f,d=l<r.length?(typeof r[l])[0]:"";if(i>=t.length||"o"==(f=(typeof(s=t[i]))[0]))return!u||("u"==d?l>o&&!a:""==d!=a);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(l<=o){if(s!=r[l])return!1}else{if(a?s>r[l]:s<r[l])return!1;s!=r[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(a||l<=o)return!1;u=!1,l--}else{if(l<=o||f<d!=a)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<r.length;i++){var p=r[i];c.push(1==p?h()|h():2==p?h()&h():p?n(p,t):!h())}return!!h()},o=(e,o,i,l)=>{var u=((e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)})(e,i);return n(l,u)||"undefined"!=typeof console&&console.warn&&console.warn(((e,r,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(e,i,u,l)),a(e[i][u])},a=e=>(e.loaded=1,e.get()),i=e=>function(r,t,n,o){var a=j.I(r);return a&&a.then?a.then(e.bind(e,r,j.S[r],t,n,o)):e(r,j.S[r],t,n,o)},l=i(((e,r,t,n,a)=>r&&j.o(r,t)?o(r,0,t,n):a())),u=i(((e,t,o,i,l)=>{var u=t&&j.o(t,o)&&((e,t,o)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!n(o,t)||e&&!r(e,t)?e:t),0))&&a[t]})(t,o,i);return u?a(u):l()})),s={},f={92950:()=>l("default","react",[1,17,0,2],(()=>j.e(7294).then((()=>()=>j(67294))))),12181:()=>l("default","react-dom",[1,17,0,2],(()=>j.e(3935).then((()=>()=>j(73935))))),14938:()=>u("default","@patternfly/react-core",[1,4,221,3],(()=>Promise.all([j.e(5944),j.e(2681),j.e(7123),j.e(123),j.e(2181),j.e(5467)]).then((()=>()=>j(10362))))),52017:()=>u("default","@patternfly/react-icons",[1,4,72,3],(()=>j.e(2577).then((()=>()=>j(42577))))),56645:()=>u("default","@patternfly/react-table",[1,4,93,1],(()=>Promise.all([j.e(5944),j.e(4095),j.e(7123),j.e(5993),j.e(2181),j.e(9477)]).then((()=>()=>j(85993))))),78542:()=>u("default","axios",[4,0,27,2],(()=>j.e(9669).then((()=>()=>j(9669))))),86235:()=>u("default","react-router-dom",[1,5,3,0],(()=>j.e(3338).then((()=>()=>j(23338)))))},d={2181:[12181],2950:[92950],3477:[14938],5648:[52017,56645,78542,86235]};j.f.consumes=(e,r)=>{j.o(d,e)&&d[e].forEach((e=>{if(j.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,j.m[e]=t=>{delete j.c[e],t.exports=r()}},n=r=>{delete s[e],j.m[e]=t=>{throw delete j.c[e],r}};try{var o=f[e]();o.then?r.push(s[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))}})(),b=e=>new Promise(((r,t)=>{var n=j.miniCssF(e),o=j.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,o.parentNode.removeChild(o),n(u)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),w={3534:0},j.f.miniCss=(e,r)=>{w[e]?r.push(w[e]):0!==w[e]&&{593:1,746:1,2199:1,6818:1}[e]&&r.push(w[e]=b(e).then((()=>{w[e]=0}),(r=>{throw delete w[e],r})))},(()=>{var e={3534:0};j.f.j=(r,t)=>{var n=j.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(2181|2950|3477|5648)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=j.p+j.u(r),i=new Error;j.l(a,(t=>{if(j.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)j.o(i,n)&&(j.m[n]=i[n]);l&&l(j)}for(r&&r(t);u<a.length;u++)o=a[u],j.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunksources_ui=self.webpackChunksources_ui||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),j(14058)})());