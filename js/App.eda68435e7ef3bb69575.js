(()=>{var e,r,t,n,o,a,l,i,s,u,d,c,f,h,p,m,v,g,y,b={31288:(e,r,t)=>{document.getElementById("root").classList.add("sources"),window.insights&&window.insights.chrome&&window.insights.chrome.isChrome2||Promise.all([t.e(324),t.e(342),t.e(10),t.e(561),t.e(950),t.e(181),t.e(848),t.e(957),t.e(868)]).then(t.bind(t,36491))}},w={};function P(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,P),t.loaded=!0,t.exports}P.m=b,P.c=w,P.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return P.d(r,{a:r}),r},P.d=(e,r)=>{for(var t in r)P.o(r,t)&&!P.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},P.f={},P.e=e=>Promise.all(Object.keys(P.f).reduce(((r,t)=>(P.f[t](e,r),r)),[])),P.u=e=>"js/"+({128:"removeSource",180:"addApplication",199:"addSource",291:"renameSource",331:"credentialsForm",490:"remove",593:"sourcesPage",744:"removeApplication",818:"sourceDetail"}[e]||e)+"."+P.h()+".js",P.miniCssF=e=>"css/"+({199:"addSource",593:"sourcesPage",818:"sourceDetail"}[e]||e)+"."+{199:"79790d9eb1e0411625a4",593:"eb5a994b917be80c4658",818:"79790d9eb1e0411625a4",868:"4db0013d426ee9066247"}[e]+".css",P.h=()=>"eda68435e7ef3bb69575",P.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),P.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),P.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="sources-ui:",P.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var l,i;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){l=d;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,P.nc&&l.setAttribute("nonce",P.nc),l.setAttribute("data-webpack",r+o),l.src=t),e[t]=[n];var c=(r,n)=>{l.onerror=l.onload=null,clearTimeout(f);var o=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),r)return r(n)},f=setTimeout(c.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=c.bind(null,l.onerror),l.onload=c.bind(null,l.onload),i&&document.head.appendChild(l)}},P.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{P.S={};var e={},r={};P.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];P.o(P.S,t)||(P.S[t]={});var a=P.S[t],l="sources-ui",i=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:l>i.from))&&(o[r]={get:t,from:l,eager:!!n})},s=[];return"default"===t&&(i("@patternfly/react-core","4.276.8",(()=>Promise.all([P.e(697),P.e(135),P.e(167),P.e(692),P.e(950),P.e(181),P.e(335)]).then((()=>()=>P(69410))))),i("@patternfly/react-icons","4.93.6",(()=>Promise.all([P.e(76),P.e(950),P.e(920)]).then((()=>()=>P(53076))))),i("@patternfly/react-table","4.112.39",(()=>Promise.all([P.e(697),P.e(324),P.e(167),P.e(342),P.e(993),P.e(950),P.e(181),P.e(848),P.e(7)]).then((()=>()=>P(85993))))),i("@scalprum/react-core","0.5.1",(()=>Promise.all([P.e(324),P.e(10),P.e(981),P.e(950)]).then((()=>()=>P(93981))))),i("@unleash/proxy-client-react","3.3.0",(()=>Promise.all([P.e(913),P.e(950)]).then((()=>()=>P(80913))))),i("axios","0.27.2",(()=>Promise.all([P.e(669),P.e(155)]).then((()=>()=>P(9669))))),i("react-dom","17.0.2",(()=>Promise.all([P.e(935),P.e(950)]).then((()=>()=>P(73935))))),i("react-router-dom","5.3.3",(()=>Promise.all([P.e(338),P.e(950),P.e(667)]).then((()=>()=>P(23338))))),i("react","17.0.2",(()=>P.e(294).then((()=>()=>P(67294))))),i("redux-promise-middleware","6.1.3",(()=>P.e(816).then((()=>()=>P(5068)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),P.p="/beta/apps/sources/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var l=r[n],i=(typeof l)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=l)return o<l;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(i=e[a]))[0]?"-":(n>0?".":"")+(n=2,i);return t}var l=[];for(a=1;a<e.length;a++){var i=e[a];l.push(0===i?"not("+s()+")":1===i?"("+s()+" || "+s()+")":2===i?l.pop()+" "+l.pop():o(i))}return s();function s(){return l.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var l=0,i=1,s=!0;;i++,l++){var u,d,c=i<e.length?(typeof e[i])[0]:"";if(l>=r.length||"o"==(d=(typeof(u=r[l]))[0]))return!s||("u"==c?i>n&&!o:""==c!=o);if("u"==d){if(!s||"u"!=c)return!1}else if(s)if(c==d)if(i<=n){if(u!=e[i])return!1}else{if(o?u>e[i]:u<e[i])return!1;u!=e[i]&&(s=!1)}else if("s"!=c&&"n"!=c){if(o||i<=n)return!1;s=!1,i--}else{if(i<=n||d<c!=o)return!1;s=!1}else"s"!=c&&"n"!=c&&(s=!1,i--)}}var f=[],h=f.pop.bind(f);for(l=1;l<e.length;l++){var p=e[l];f.push(1==p?h()|h():2==p?h()&h():p?a(p,r):!h())}return!!h()},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},i=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",s=(e,r,t,n)=>{var o=l(e,t);return a(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(i(e,t,o,n)),d(e[t][o])},u=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},d=e=>(e.loaded=1,e.get()),f=(c=e=>function(r,t,n,o){var a=P.I(r);return a&&a.then?a.then(e.bind(e,r,P.S[r],t,n,o)):e(r,P.S[r],t,n,o)})(((e,r,t,n,o)=>r&&P.o(r,t)?s(r,0,t,n):o())),h=c(((e,r,t,n,o)=>{var a=r&&P.o(r,t)&&u(r,t,n);return a?d(a):o()})),p={},m={92950:()=>f("default","react",[1,17,0,2],(()=>P.e(294).then((()=>()=>P(67294))))),12181:()=>f("default","react-dom",[1,17,0,2],(()=>P.e(935).then((()=>()=>P(73935))))),6848:()=>h("default","@patternfly/react-core",[1,4,276,8],(()=>Promise.all([P.e(697),P.e(135),P.e(167),P.e(692),P.e(745)]).then((()=>()=>P(69410))))),4259:()=>h("default","@patternfly/react-table",[1,4,112,39],(()=>Promise.all([P.e(697),P.e(167),P.e(993),P.e(549)]).then((()=>()=>P(85993))))),54025:()=>f("default","@scalprum/react-core",[0],(()=>P.e(981).then((()=>()=>P(93981))))),57283:()=>h("default","redux-promise-middleware",[1,6,1,2],(()=>P.e(68).then((()=>()=>P(5068))))),74041:()=>h("default","@patternfly/react-icons",[1,4,93,0],(()=>P.e(76).then((()=>()=>P(53076))))),78542:()=>h("default","axios",[4,0,27,2],(()=>P.e(669).then((()=>()=>P(9669))))),86235:()=>h("default","react-router-dom",[1,5,3,0],(()=>P.e(338).then((()=>()=>P(23338))))),49288:()=>f("default","@unleash/proxy-client-react",[1,3,3,0],(()=>P.e(913).then((()=>()=>P(80913)))))},v={181:[12181],494:[49288],848:[6848],950:[92950],957:[4259,54025,57283,74041,78542,86235]},P.f.consumes=(e,r)=>{P.o(v,e)&&v[e].forEach((e=>{if(P.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,P.m[e]=t=>{delete P.c[e],t.exports=r()}},n=r=>{delete p[e],P.m[e]=t=>{throw delete P.c[e],r}};try{var o=m[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},g=e=>new Promise(((r,t)=>{var n=P.miniCssF(e),o=P.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(l=t[n]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(o===e||o===r))return l}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var l;if((o=(l=a[n]).getAttribute("data-href"))===e||o===r)return l}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var l=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=i,o.parentNode.removeChild(o),n(s)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),y={768:0},P.f.miniCss=(e,r)=>{y[e]?r.push(y[e]):0!==y[e]&&{199:1,593:1,818:1,868:1}[e]&&r.push(y[e]=g(e).then((()=>{y[e]=0}),(r=>{throw delete y[e],r})))},(()=>{var e={768:0};P.f.j=(r,t)=>{var n=P.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(181|848|950)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=P.p+P.u(r),l=new Error;P.l(a,(t=>{if(P.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,l,i]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in l)P.o(l,n)&&(P.m[n]=l[n]);i&&i(P)}for(r&&r(t);s<a.length;s++)o=a[s],P.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunksources_ui=self.webpackChunksources_ui||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),P(31288)})();