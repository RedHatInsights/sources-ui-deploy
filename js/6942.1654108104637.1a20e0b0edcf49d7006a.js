(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[6942],{40400:(t,e,r)=>{"use strict";r.d(e,{IU:()=>i,Jh:()=>o});var o,n=r(70655),s=r(92950);!function(t){t.sm="sm",t.md="md",t.lg="lg",t.xl="xl"}(o||(o={}));let a=0;function i({name:t,xOffset:e=0,yOffset:r=0,width:i,height:c,svgPath:u}){var p;return p=class extends s.Component{constructor(){super(...arguments),this.id="icon-title-"+a++}render(){const t=this.props,{size:a,color:p,title:l,noVerticalAlign:h}=t,v=(0,n._T)(t,["size","color","title","noVerticalAlign"]),f=Boolean(l),_=(t=>{switch(t){case o.sm:return"1em";case o.md:return"1.5em";case o.lg:return"2em";case o.xl:return"3em";default:return"1em"}})(a),d=-.125*Number.parseFloat(_),y=h?null:{verticalAlign:`${d}em`},x=[e,r,i,c].join(" ");return s.createElement("svg",Object.assign({style:y,fill:p,height:_,width:_,viewBox:x,"aria-labelledby":f?this.id:null,"aria-hidden":!f||null,role:"img"},v),f&&s.createElement("title",{id:this.id},l),s.createElement("path",{d:u}))}},p.displayName=t,p.defaultProps={color:"currentColor",size:o.sm,noVerticalAlign:!1},p}},1989:(t,e,r)=>{var o=r(51789),n=r(80401),s=r(57667),a=r(21327),i=r(81866);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=s,c.prototype.has=a,c.prototype.set=i,t.exports=c},38407:(t,e,r)=>{var o=r(27040),n=r(14125),s=r(82117),a=r(67518),i=r(54705);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=s,c.prototype.has=a,c.prototype.set=i,t.exports=c},57071:(t,e,r)=>{var o=r(10852)(r(55639),"Map");t.exports=o},83369:(t,e,r)=>{var o=r(24785),n=r(11285),s=r(96e3),a=r(49916),i=r(95265);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}c.prototype.clear=o,c.prototype.delete=n,c.prototype.get=s,c.prototype.has=a,c.prototype.set=i,t.exports=c},62705:(t,e,r)=>{var o=r(55639).Symbol;t.exports=o},18470:(t,e,r)=>{var o=r(77813);t.exports=function(t,e){for(var r=t.length;r--;)if(o(t[r][0],e))return r;return-1}},44239:(t,e,r)=>{var o=r(62705),n=r(89607),s=r(2333),a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?n(t):s(t)}},9454:(t,e,r)=>{var o=r(44239),n=r(37005);t.exports=function(t){return n(t)&&"[object Arguments]"==o(t)}},28458:(t,e,r)=>{var o=r(23560),n=r(15346),s=r(13218),a=r(80346),i=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,p=c.toString,l=u.hasOwnProperty,h=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!s(t)||n(t))&&(o(t)?h:i).test(a(t))}},14429:(t,e,r)=>{var o=r(55639)["__core-js_shared__"];t.exports=o},31957:(t,e,r)=>{var o="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=o},45050:(t,e,r)=>{var o=r(37019);t.exports=function(t,e){var r=t.__data__;return o(e)?r["string"==typeof e?"string":"hash"]:r.map}},10852:(t,e,r)=>{var o=r(28458),n=r(47801);t.exports=function(t,e){var r=n(t,e);return o(r)?r:void 0}},89607:(t,e,r)=>{var o=r(62705),n=Object.prototype,s=n.hasOwnProperty,a=n.toString,i=o?o.toStringTag:void 0;t.exports=function(t){var e=s.call(t,i),r=t[i];try{t[i]=void 0;var o=!0}catch(t){}var n=a.call(t);return o&&(e?t[i]=r:delete t[i]),n}},47801:t=>{t.exports=function(t,e){return null==t?void 0:t[e]}},51789:(t,e,r)=>{var o=r(94536);t.exports=function(){this.__data__=o?o(null):{},this.size=0}},80401:t=>{t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},57667:(t,e,r)=>{var o=r(94536),n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(o){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return n.call(e,t)?e[t]:void 0}},21327:(t,e,r)=>{var o=r(94536),n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return o?void 0!==e[t]:n.call(e,t)}},81866:(t,e,r)=>{var o=r(94536);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=o&&void 0===e?"__lodash_hash_undefined__":e,this}},65776:t=>{var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var o=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==o||"symbol"!=o&&e.test(t))&&t>-1&&t%1==0&&t<r}},37019:t=>{t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},15346:(t,e,r)=>{var o,n=r(14429),s=(o=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";t.exports=function(t){return!!s&&s in t}},27040:t=>{t.exports=function(){this.__data__=[],this.size=0}},14125:(t,e,r)=>{var o=r(18470),n=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=o(e,t);return!(r<0||(r==e.length-1?e.pop():n.call(e,r,1),--this.size,0))}},82117:(t,e,r)=>{var o=r(18470);t.exports=function(t){var e=this.__data__,r=o(e,t);return r<0?void 0:e[r][1]}},67518:(t,e,r)=>{var o=r(18470);t.exports=function(t){return o(this.__data__,t)>-1}},54705:(t,e,r)=>{var o=r(18470);t.exports=function(t,e){var r=this.__data__,n=o(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}},24785:(t,e,r)=>{var o=r(1989),n=r(38407),s=r(57071);t.exports=function(){this.size=0,this.__data__={hash:new o,map:new(s||n),string:new o}}},11285:(t,e,r)=>{var o=r(45050);t.exports=function(t){var e=o(this,t).delete(t);return this.size-=e?1:0,e}},96e3:(t,e,r)=>{var o=r(45050);t.exports=function(t){return o(this,t).get(t)}},49916:(t,e,r)=>{var o=r(45050);t.exports=function(t){return o(this,t).has(t)}},95265:(t,e,r)=>{var o=r(45050);t.exports=function(t,e){var r=o(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}},94536:(t,e,r)=>{var o=r(10852)(Object,"create");t.exports=o},2333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},55639:(t,e,r)=>{var o=r(31957),n="object"==typeof self&&self&&self.Object===Object&&self,s=o||n||Function("return this")();t.exports=s},80346:t=>{var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},77813:t=>{t.exports=function(t,e){return t===e||t!=t&&e!=e}},35694:(t,e,r)=>{var o=r(9454),n=r(37005),s=Object.prototype,a=s.hasOwnProperty,i=s.propertyIsEnumerable,c=o(function(){return arguments}())?o:function(t){return n(t)&&a.call(t,"callee")&&!i.call(t,"callee")};t.exports=c},1469:t=>{var e=Array.isArray;t.exports=e},23560:(t,e,r)=>{var o=r(44239),n=r(13218);t.exports=function(t){if(!n(t))return!1;var e=o(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},41780:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},13218:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},37005:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}}}]);
//# sourceMappingURL=../sourcemaps/6942.6424ba2980a991373b32dc7dc9c826da.js.map