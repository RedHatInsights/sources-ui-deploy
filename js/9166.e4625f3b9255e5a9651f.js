/*! For license information please see 9166.e4625f3b9255e5a9651f.js.LICENSE.txt */
(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[9166],{99166:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var o=t(69496),i=t.n(o);function r(n){var e=null,t=null,o=new Promise((function(n,o){e=n,t=o}));return n&&n.then((function(n){e&&e(n)}),(function(n){t&&t(n)})),{promise:o,resolve:function(n){e&&e(n)},reject:function(n){t&&t(n)},cancel:function(){e=null,t=null}}}var u=function(){return(u=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},c={key:function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return null},onlyResolvesLast:!0},s=function(){function n(n){this.config=n,this.debounceSingleton=null,this.debounceCache={}}return n.prototype._createDebouncedFunction=function(){var n,e,t=i()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(n=t,e=null,t=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];e&&e();var i=r(n.apply(void 0,t)),u=i.promise,c=i.cancel;return e=c,u}),{func:t}},n.prototype.getDebouncedFunction=function(n){var e,t=(e=this.config.options).key.apply(e,n);return null==t?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[t]||(this.debounceCache[t]=this._createDebouncedFunction()),this.debounceCache[t])},n}();const l=function(n,e,t){var o=u({},c,t),i=new s({func:n,wait:e,options:o});return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=i.getDebouncedFunction(n).func;return t.apply(void 0,n)}}},69496:n=>{"use strict";function e(n){return"function"==typeof n?n():n}function t(){var n={};return n.promise=new Promise((function(e,t){n.resolve=e,n.reject=t})),n}n.exports=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=void 0,u=void 0,c=void 0,s=[];return function(){var a=e(o),f=(new Date).getTime(),h=!r||f-r>a;r=f;for(var p=arguments.length,v=Array(p),g=0;g<p;g++)v[g]=arguments[g];if(h&&i.leading)return i.accumulate?Promise.resolve(n.call(this,[v])).then((function(n){return n[0]})):Promise.resolve(n.call.apply(n,[this].concat(v)));if(u?clearTimeout(c):u=t(),s.push(v),c=setTimeout(l.bind(this),a),i.accumulate){var d=s.length-1;return u.promise.then((function(n){return n[d]}))}return u.promise};function l(){var e=u;clearTimeout(c),Promise.resolve(i.accumulate?n.call(this,s):n.apply(this,s[s.length-1])).then(e.resolve,e.reject),s=[],u=null}}}}]);
//# sourceMappingURL=9166.e4625f3b9255e5a9651f.js.map