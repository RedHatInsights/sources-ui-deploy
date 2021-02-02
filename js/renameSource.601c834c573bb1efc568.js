(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["renameSource"],{

/***/ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/handleError.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/handleError.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var e=function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));__webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/cjs/interceptors */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/cjs/interceptors.js"),__webpack_require__(/*! ./constants.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/constants.js");var r=__webpack_require__(/*! ./index-b48bcf78.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/index-b48bcf78.js");exports.handleError=function handleError(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return t||(n="Undefined error"),n||"string"!=typeof t||(n=t),n||(n=e(t,"errors[0].detail",JSON.stringify(t,null,2))),o?r.getSourcesApi().deleteSource(o).then((function(){return n})).catch((function(r){var t=e(r,"errors[0].detail",JSON.stringify(r,null,2));return"".concat(n,". The source was not removed, try remove it later: ").concat(t)})):n};


/***/ }),

/***/ "./node_modules/awesome-debounce-promise/dist/index.es.js":
/*!****************************************************************!*\
  !*** ./node_modules/awesome-debounce-promise/dist/index.es.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debounce-promise */ "./node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var awesome_only_resolves_last_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! awesome-only-resolves-last-promise */ "./node_modules/awesome-only-resolves-last-promise/dist/index.es.js");



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var DefaultOptions = {
    // One distinct debounced function is created per key and added to an internal cache
    // By default, the key is null, which means that all the calls
    // will share the same debounced function
    key: function () {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        return null;
    },
    // By default, a debounced function will only resolve
    // the last promise it returned
    // Former calls will stay unresolved, so that you don't have
    // to handle concurrency issues in your code
    // Setting this to false means all returned promises will resolve to the last result
    onlyResolvesLast: true,
};
// We create a debouncing function cache, because when wrapping the original function,
// we may actually want to route the function call to different debounced functions depending function paameters
var DebounceCache = /** @class */ (function () {
    function DebounceCache(config) {
        this.config = config;
        this.debounceSingleton = null;
        this.debounceCache = {}; // when key feature is used
    }
    DebounceCache.prototype._createDebouncedFunction = function () {
        var debouncedFunc = debounce_promise__WEBPACK_IMPORTED_MODULE_0___default()(this.config.func, this.config.wait, this.config.options); // TODO TS
        if (this.config.options.onlyResolvesLast) {
            debouncedFunc = Object(awesome_only_resolves_last_promise__WEBPACK_IMPORTED_MODULE_1__["onlyResolvesLast"])(debouncedFunc);
        }
        return {
            func: debouncedFunc,
        };
    };
    DebounceCache.prototype.getDebouncedFunction = function (args) {
        var _a;
        var key = (_a = this.config.options).key.apply(_a, args);
        if (key === null || typeof key === 'undefined') {
            if (!this.debounceSingleton) {
                this.debounceSingleton = this._createDebouncedFunction();
            }
            return this.debounceSingleton;
        }
        else {
            if (!this.debounceCache[key]) {
                this.debounceCache[key] = this._createDebouncedFunction();
            }
            return this.debounceCache[key];
        }
    };
    return DebounceCache;
}());
function AwesomeDebouncePromise(func, wait, options) {
    var finalOptions = __assign({}, DefaultOptions, options);
    var debounceCache = new DebounceCache({
        func: func,
        wait: wait,
        options: finalOptions,
    });
    var AwesomeDebouncePromiseWrapper = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var debouncedFn = debounceCache.getDebouncedFunction(args).func;
        return debouncedFn.apply(void 0, args);
    }); // TODO fix TS
    /*
    AwesomeDebouncePromiseWrapper.cancel = (key?: string) => {
  
    };
    */
    return AwesomeDebouncePromiseWrapper;
}

/* harmony default export */ __webpack_exports__["default"] = (AwesomeDebouncePromise);
//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/awesome-imperative-promise/dist/index.es.js":
/*!******************************************************************!*\
  !*** ./node_modules/awesome-imperative-promise/dist/index.es.js ***!
  \******************************************************************/
/*! exports provided: createImperativePromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImperativePromise", function() { return createImperativePromise; });
function createImperativePromise(promiseArg) {
    var resolve = null;
    var reject = null;
    var wrappedPromise = new Promise(function (_resolve, _reject) {
        resolve = _resolve;
        reject = _reject;
    });
    promiseArg && promiseArg.then(function (val) {
        resolve && resolve(val);
    }, function (error) {
        reject && reject(error);
    });
    return {
        promise: wrappedPromise,
        resolve: function (value) {
            resolve && resolve(value);
        },
        reject: function (reason) {
            reject && reject(reason);
        },
        cancel: function () {
            resolve = null;
            reject = null;
        }
    };
}


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/awesome-only-resolves-last-promise/dist/index.es.js":
/*!**************************************************************************!*\
  !*** ./node_modules/awesome-only-resolves-last-promise/dist/index.es.js ***!
  \**************************************************************************/
/*! exports provided: onlyResolvesLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyResolvesLast", function() { return onlyResolvesLast; });
/* harmony import */ var awesome_imperative_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! awesome-imperative-promise */ "./node_modules/awesome-imperative-promise/dist/index.es.js");


// see https://stackoverflow.com/a/54825370/82609
function onlyResolvesLast(asyncFunction) {
    var cancelPrevious = null;
    var wrappedFunction = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        cancelPrevious && cancelPrevious();
        var initialPromise = asyncFunction.apply(void 0, args);
        var _a = Object(awesome_imperative_promise__WEBPACK_IMPORTED_MODULE_0__["createImperativePromise"])(initialPromise), promise = _a.promise, cancel = _a.cancel;
        cancelPrevious = cancel;
        return promise;
    };
    return wrappedFunction; // TODO fix TS
}


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/debounce-promise/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/debounce-promise/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global setTimeout, clearTimeout */

module.exports = function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var lastCallAt = void 0;
  var deferred = void 0;
  var timer = void 0;
  var pendingArgs = [];
  return function debounced() {
    var currentWait = getWait(wait);
    var currentTime = new Date().getTime();

    var isCold = !lastCallAt || currentTime - lastCallAt > currentWait;

    lastCallAt = currentTime;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isCold && options.leading) {
      return options.accumulate ? Promise.resolve(fn.call(this, [args])).then(function (result) {
        return result[0];
      }) : Promise.resolve(fn.call.apply(fn, [this].concat(args)));
    }

    if (deferred) {
      clearTimeout(timer);
    } else {
      deferred = defer();
    }

    pendingArgs.push(args);
    timer = setTimeout(flush.bind(this), currentWait);

    if (options.accumulate) {
      var argsIndex = pendingArgs.length - 1;
      return deferred.promise.then(function (results) {
        return results[argsIndex];
      });
    }

    return deferred.promise;
  };

  function flush() {
    var thisDeferred = deferred;
    clearTimeout(timer);

    Promise.resolve(options.accumulate ? fn.call(this, pendingArgs) : fn.apply(this, pendingArgs[pendingArgs.length - 1])).then(thisDeferred.resolve, thisDeferred.reject);

    pendingArgs = [];
    deferred = null;
  }
};

function getWait(wait) {
  return typeof wait === 'function' ? wait() : wait;
}

function defer() {
  var deferred = {};
  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/components/SourceDetail/SourceRenameModal.js":
/*!**********************************************************!*\
  !*** ./src/components/SourceDetail/SourceRenameModal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Modal/Modal */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_SourceAddSchema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/SourceAddSchema */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/SourceAddSchema.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_SourceAddSchema__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_SourceAddSchema__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/form-template.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_validated__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/validated */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/validated.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_validated__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_validated__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/SourcesFormRenderer */ "./src/utilities/SourcesFormRenderer.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
















var SourceRenameModal = function SourceRenameModal() {
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_11__["useSource"])();
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])(),
      push = _useHistory.push;

  var returnToSource = function returnToSource() {
    return push(Object(_Routes__WEBPACK_IMPORTED_MODULE_13__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_13__["routes"].sourcesDetail.path, source.id));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    title: intl.formatMessage({
      id: 'sources.renameTitle',
      defaultMessage: 'Rename source'
    }),
    description: intl.formatMessage({
      id: 'sources.renameDescription',
      defaultMessage: 'Enter a new name for your source.'
    }),
    onClose: returnToSource,
    isOpen: true,
    variant: "medium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    FormTemplate: function FormTemplate(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_9___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        disableSubmit: ['pristine', 'validating', 'invalid'],
        submitLabel: intl.formatMessage({
          id: 'sources.save',
          defaultMessage: 'Save'
        })
      }));
    },
    onSubmit: function onSubmit(_ref) {
      var name = _ref.name;
      returnToSource();
      return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_14__["renameSource"])(source.id, name, intl.formatMessage({
        id: 'sources.renameError',
        defaultMessage: 'Renaming was unsuccessful'
      })));
    },
    onCancel: returnToSource,
    schema: {
      fields: [{
        name: 'name',
        label: intl.formatMessage({
          id: 'sources.name',
          defaultMessage: 'Name'
        }),
        component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_6___default.a.TEXT_FIELD,
        validate: [function (value) {
          return Object(_redhat_cloud_services_frontend_components_sources_cjs_SourceAddSchema__WEBPACK_IMPORTED_MODULE_7__["asyncValidatorDebounced"])(value, source.id, intl);
        }, {
          type: _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_8___default.a.REQUIRED
        }],
        isRequired: true,
        resolveProps: _redhat_cloud_services_frontend_components_sources_cjs_validated__WEBPACK_IMPORTED_MODULE_10___default.a,
        initialValue: source.name
      }]
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SourceRenameModal);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/renameSource.js.map