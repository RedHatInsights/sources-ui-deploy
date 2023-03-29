/*! For license information please see renameSource.1cd652209d462175d852.js.LICENSE.txt */
"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[291],{99166:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(69496),r=t.n(o);function i(e){var n=null,t=null,o=new Promise((function(e,o){n=e,t=o}));return e&&e.then((function(e){n&&n(e)}),(function(e){t&&t(e)})),{promise:o,resolve:function(e){n&&n(e)},reject:function(e){t&&t(e)},cancel:function(){n=null,t=null}}}var u=function(){return u=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},u.apply(this,arguments)},s={key:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return null},onlyResolvesLast:!0},a=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,n,t=r()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=t,n=null,t=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];n&&n();var r=i(e.apply(void 0,t)),u=r.promise,s=r.cancel;return n=s,u}),{func:t}},e.prototype.getDebouncedFunction=function(e){var n,t=(n=this.config.options).key.apply(n,e);return null==t?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[t]||(this.debounceCache[t]=this._createDebouncedFunction()),this.debounceCache[t])},e}();const c=function(e,n,t){var o=u({},s,t),r=new a({func:e,wait:n,options:o});return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=r.getDebouncedFunction(e).func;return t.apply(void 0,e)}}},72498:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var o=t(87462),r=t(92950),i=t.n(r),u=t(86896),s=t(86706),a=t(86235),c=t(6848),l=t(96354),f=t(64124),d=t(67850),h=t(60566),m=t(90280),p=t(60076),v=t(89372),g=t(16728),b=t(36680);const y=function(){var e=(0,h.L)(),n=(0,u.Z)(),t=(0,s.I0)(),r=(0,a.useHistory)().push,y=function(){return r((0,p.yS)(p._j.sourcesDetail.path,e.id))};return i().createElement(c.Modal,{title:n.formatMessage({id:"sources.renameTitle",defaultMessage:"Rename source"}),description:n.formatMessage({id:"sources.renameDescription",defaultMessage:"Enter a new name for your source."}),onClose:y,isOpen:!0,variant:"medium",className:"sources"},i().createElement(m.Z,{FormTemplate:function(e){return i().createElement(d.ZP,(0,o.Z)({},e,{disableSubmit:["pristine","validating","invalid"],submitLabel:n.formatMessage({id:"sources.save",defaultMessage:"Save"})}))},onSubmit:function(o){var r=o.name;return y(),t((0,v.d4)(e.id,r,n.formatMessage({id:"sources.renameError",defaultMessage:"Renaming was unsuccessful"})))},onCancel:y,schema:{fields:[{name:"name",label:n.formatMessage({id:"sources.name",defaultMessage:"Name"}),component:l.Z.TEXT_FIELD,validate:[function(t){return(0,g.AQ)(t,e.id,n)},{type:f.Z.REQUIRED}],isRequired:!0,resolveProps:b.Z,initialValue:e.name}]}}))}},69496:e=>{function n(e){return"function"==typeof e?e():e}function t(){var e={};return e.promise=new Promise((function(n,t){e.resolve=n,e.reject=t})),e}e.exports=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0,u=void 0,s=void 0,a=[];return function(){var l=n(o),f=(new Date).getTime(),d=!i||f-i>l;i=f;for(var h=arguments.length,m=Array(h),p=0;p<h;p++)m[p]=arguments[p];if(d&&r.leading)return r.accumulate?Promise.resolve(e.call(this,[m])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(m)));if(u?clearTimeout(s):u=t(),a.push(m),s=setTimeout(c.bind(this),l),r.accumulate){var v=a.length-1;return u.promise.then((function(e){return e[v]}))}return u.promise};function c(){var n=u;clearTimeout(s),Promise.resolve(r.accumulate?e.call(this,a):e.apply(this,a[a.length-1])).then(n.resolve,n.reject),a=[],u=null}}}}]);
//# sourceMappingURL=../sourcemaps/renameSource.96986a85a4df69612ab54a86cf52b7ca.js.map