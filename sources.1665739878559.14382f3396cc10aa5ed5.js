var sources;(()=>{"use strict";var e,r,t,n,o,a,l,i,u,s,f,d,c,h,p,m,v,y,g,b={96990:(e,r,t)=>{var n={"./RootApp":()=>Promise.all([t.e(6942),t.e(1633),t.e(4942),t.e(3825),t.e(2867),t.e(2950),t.e(2181),t.e(6857),t.e(7317),t.e(8815),t.e(2046),t.e(1487),t.e(257)]).then((()=>()=>t(28412))),"./RecommendedServices":()=>Promise.all([t.e(4095),t.e(6942),t.e(1633),t.e(3825),t.e(4650),t.e(2950),t.e(6857),t.e(7317),t.e(8815),t.e(1298),t.e(3415)]).then((()=>()=>t(21298)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},w={};function S(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,S),t.loaded=!0,t.exports}S.m=b,S.c=w,S.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return S.d(r,{a:r}),r},S.d=(e,r)=>{for(var t in r)S.o(r,t)&&!S.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce(((r,t)=>(S.f[t](e,r),r)),[])),S.u=e=>"js/"+({593:"sourcesPage",1128:"removeSource",2199:"addSource",3744:"removeApplication",5180:"addApplication",6818:"sourceDetail",8291:"renameSource",8331:"credentialsForm",8490:"remove"}[e]||e)+".1665739878503."+S.h()+".js",S.miniCssF=e=>"css/"+({593:"sourcesPage",2199:"addSource",6818:"sourceDetail"}[e]||e)+"."+{257:"da8df508d54afcc6ee71",593:"0c6769d2c18725a277fb",2199:"79790d9eb1e0411625a4",3415:"accaf5e8c40afbb345fb",6818:"79790d9eb1e0411625a4"}[e]+".css",S.h=()=>"14382f3396cc10aa5ed5",S.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),S.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="sources-ui:",S.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var l,i;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){l=f;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,S.nc&&l.setAttribute("nonce",S.nc),l.setAttribute("data-webpack",r+o),l.src=t),e[t]=[n];var d=(r,n)=>{l.onerror=l.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),i&&document.head.appendChild(l)}},S.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),S.j=734,(()=>{S.S={};var e={},r={};S.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];S.o(S.S,t)||(S.S[t]={});var a=S.S[t],l="sources-ui",i=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:l>i.from))&&(o[r]={get:t,from:l,eager:!!n})},u=[];return"default"===t&&(i("@patternfly/react-core","4.250.1",(()=>Promise.all([S.e(8697),S.e(6135),S.e(167),S.e(5054),S.e(2950),S.e(2181),S.e(1335)]).then((()=>()=>S(17402))))),i("@patternfly/react-icons","4.92.6",(()=>Promise.all([S.e(2577),S.e(2950),S.e(8583)]).then((()=>()=>S(42577))))),i("@patternfly/react-table","4.111.4",(()=>Promise.all([S.e(8697),S.e(4095),S.e(6942),S.e(167),S.e(5993),S.e(2950),S.e(2181),S.e(6857),S.e(1721)]).then((()=>()=>S(85993))))),i("@unleash/proxy-client-react","3.3.0",(()=>Promise.all([S.e(913),S.e(2950)]).then((()=>()=>S(80913))))),i("axios","0.27.2",(()=>Promise.all([S.e(9669),S.e(4155)]).then((()=>()=>S(9669))))),i("react-dom","17.0.2",(()=>Promise.all([S.e(3935),S.e(2950)]).then((()=>()=>S(73935))))),i("react-router-dom","5.3.3",(()=>Promise.all([S.e(3338),S.e(2950),S.e(8961)]).then((()=>()=>S(23338))))),i("react","17.0.2",(()=>S.e(7294).then((()=>()=>S(67294))))),i("redux-promise-middleware","6.1.3",(()=>S.e(5068).then((()=>()=>S(5068)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),S.p="/beta/apps/sources/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var l=r[n],i=(typeof l)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=l)return o<l;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(i=e[a]))[0]?"-":(n>0?".":"")+(n=2,i);return t}var l=[];for(a=1;a<e.length;a++){var i=e[a];l.push(0===i?"not("+u()+")":1===i?"("+u()+" || "+u()+")":2===i?l.pop()+" "+l.pop():o(i))}return u();function u(){return l.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var l=0,i=1,u=!0;;i++,l++){var s,f,d=i<e.length?(typeof e[i])[0]:"";if(l>=r.length||"o"==(f=(typeof(s=r[l]))[0]))return!u||("u"==d?i>n&&!o:""==d!=o);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(i<=n){if(s!=e[i])return!1}else{if(o?s>e[i]:s<e[i])return!1;s!=e[i]&&(u=!1)}else if("s"!=d&&"n"!=d){if(o||i<=n)return!1;u=!1,i--}else{if(i<=n||f<d!=o)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,i--)}}var c=[],h=c.pop.bind(c);for(l=1;l<e.length;l++){var p=e[l];c.push(1==p?h()|h():2==p?h()&h():p?a(p,r):!h())}return!!h()},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},i=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=l(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(i(e,t,o,n)),f(e[t][o])},s=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},f=e=>(e.loaded=1,e.get()),c=(d=e=>function(r,t,n,o){var a=S.I(r);return a&&a.then?a.then(e.bind(e,r,S.S[r],t,n,o)):e(r,S.S[r],t,n,o)})(((e,r,t,n,o)=>r&&S.o(r,t)?u(r,0,t,n):o())),h=d(((e,r,t,n,o)=>{var a=r&&S.o(r,t)&&s(r,t,n);return a?f(a):o()})),p={},m={92950:()=>c("default","react",[1,17,0,2],(()=>S.e(7294).then((()=>()=>S(67294))))),12181:()=>c("default","react-dom",[1,17,0,2],(()=>S.e(3935).then((()=>()=>S(73935))))),76857:()=>h("default","@patternfly/react-core",[1,4,250,1],(()=>Promise.all([S.e(8697),S.e(6135),S.e(167),S.e(5054),S.e(2181),S.e(7745)]).then((()=>()=>S(17402))))),13678:()=>h("default","@patternfly/react-table",[1,4,111,4],(()=>Promise.all([S.e(8697),S.e(4095),S.e(167),S.e(5993),S.e(2181),S.e(8007)]).then((()=>()=>S(85993))))),38629:()=>h("default","@patternfly/react-icons",[1,4,90,0],(()=>S.e(2577).then((()=>()=>S(42577))))),78542:()=>h("default","axios",[4,0,27,2],(()=>S.e(9669).then((()=>()=>S(9669))))),86235:()=>h("default","react-router-dom",[1,5,3,0],(()=>S.e(3338).then((()=>()=>S(23338))))),57283:()=>h("default","redux-promise-middleware",[1,6,1,2],(()=>S.e(6816).then((()=>()=>S(5068))))),49288:()=>c("default","@unleash/proxy-client-react",[1,3,3,0],(()=>S.e(913).then((()=>()=>S(80913)))))},v={1487:[57283],2181:[12181],2950:[92950],6494:[49288],6857:[76857],7317:[13678,38629,78542,86235]},S.f.consumes=(e,r)=>{S.o(v,e)&&v[e].forEach((e=>{if(S.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,S.m[e]=t=>{delete S.c[e],t.exports=r()}},n=r=>{delete p[e],S.m[e]=t=>{throw delete S.c[e],r}};try{var o=m[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var l=t[n],i=(typeof l)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=l)return o<l;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(i=e[a]))[0]?"-":(o>0?".":"")+(o=2,i);return n}var l=[];for(a=1;a<e.length;a++){var i=e[a];l.push(0===i?"not("+u()+")":1===i?"("+u()+" || "+u()+")":2===i?l.pop()+" "+l.pop():t(i))}return u();function u(){return l.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var l=0,i=1,u=!0;;i++,l++){var s,f,d=i<r.length?(typeof r[i])[0]:"";if(l>=t.length||"o"==(f=(typeof(s=t[l]))[0]))return!u||("u"==d?i>o&&!a:""==d!=a);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(i<=o){if(s!=r[i])return!1}else{if(a?s>r[i]:s<r[i])return!1;s!=r[i]&&(u=!1)}else if("s"!=d&&"n"!=d){if(a||i<=o)return!1;u=!1,i--}else{if(i<=o||f<d!=a)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,i--)}}var c=[],h=c.pop.bind(c);for(l=1;l<r.length;l++){var p=r[l];c.push(1==p?h()|h():2==p?h()&h():p?n(p,t):!h())}return!!h()},o=(e,o,l,i)=>{var u=((e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)})(e,l);return n(i,u)||"undefined"!=typeof console&&console.warn&&console.warn(((e,r,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")")(e,l,u,i)),a(e[l][u])},a=e=>(e.loaded=1,e.get()),l=e=>function(r,t,n,o){var a=S.I(r);return a&&a.then?a.then(e.bind(e,r,S.S[r],t,n,o)):e(r,S.S[r],t,n,o)},i=l(((e,r,t,n,a)=>r&&S.o(r,t)?o(r,0,t,n):a())),u=l(((e,t,o,l,i)=>{var u=t&&S.o(t,o)&&((e,t,o)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!n(o,t)||e&&!r(e,t)?e:t),0))&&a[t]})(t,o,l);return u?a(u):i()})),s={},f={92950:()=>i("default","react",[1,17,0,2],(()=>S.e(7294).then((()=>()=>S(67294))))),12181:()=>i("default","react-dom",[1,17,0,2],(()=>S.e(3935).then((()=>()=>S(73935))))),76857:()=>u("default","@patternfly/react-core",[1,4,250,1],(()=>Promise.all([S.e(8697),S.e(6135),S.e(167),S.e(5054),S.e(2181),S.e(7745)]).then((()=>()=>S(17402))))),13678:()=>u("default","@patternfly/react-table",[1,4,111,4],(()=>Promise.all([S.e(8697),S.e(4095),S.e(167),S.e(5993),S.e(2181),S.e(8007)]).then((()=>()=>S(85993))))),38629:()=>u("default","@patternfly/react-icons",[1,4,90,0],(()=>S.e(2577).then((()=>()=>S(42577))))),78542:()=>u("default","axios",[4,0,27,2],(()=>S.e(9669).then((()=>()=>S(9669))))),86235:()=>u("default","react-router-dom",[1,5,3,0],(()=>S.e(3338).then((()=>()=>S(23338))))),57283:()=>u("default","redux-promise-middleware",[1,6,1,2],(()=>S.e(6816).then((()=>()=>S(5068))))),49288:()=>i("default","@unleash/proxy-client-react",[1,3,3,0],(()=>S.e(913).then((()=>()=>S(80913)))))},d={1487:[57283],2181:[12181],2950:[92950],6494:[49288],6857:[76857],7317:[13678,38629,78542,86235]};S.f.consumes=(e,r)=>{S.o(d,e)&&d[e].forEach((e=>{if(S.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,S.m[e]=t=>{delete S.c[e],t.exports=r()}},n=r=>{delete s[e],S.m[e]=t=>{throw delete S.c[e],r}};try{var o=f[e]();o.then?r.push(s[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))}})(),y=e=>new Promise(((r,t)=>{var n=S.miniCssF(e),o=S.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(l=t[n]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(o===e||o===r))return l}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var l;if((o=(l=a[n]).getAttribute("data-href"))===e||o===r)return l}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var l=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=l,u.request=i,o.parentNode.removeChild(o),n(u)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),g={734:0},S.f.miniCss=(e,r)=>{g[e]?r.push(g[e]):0!==g[e]&&{257:1,593:1,2199:1,3415:1,6818:1}[e]&&r.push(g[e]=y(e).then((()=>{g[e]=0}),(r=>{throw delete g[e],r})))},(()=>{var e={734:0};S.f.j=(r,t)=>{var n=S.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(2181|2950|3415|6857|7317)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=S.p+S.u(r),l=new Error;S.l(a,(t=>{if(S.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,l,i]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in l)S.o(l,n)&&(S.m[n]=l[n]);i&&i(S)}for(r&&r(t);u<a.length;u++)o=a[u],S.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunksources_ui=self.webpackChunksources_ui||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var x=S(96990);sources=x})();