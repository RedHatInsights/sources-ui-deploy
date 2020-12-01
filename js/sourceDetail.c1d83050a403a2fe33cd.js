(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sourceDetail"],{

/***/ "./src/api/checkSourceStatus.js":
/*!**************************************!*\
  !*** ./src/api/checkSourceStatus.js ***!
  \**************************************/
/*! exports provided: checkSourceStatus, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSourceStatus", function() { return checkSourceStatus; });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./src/api/entities.js");

var checkSourceStatus = function checkSourceStatus(id) {
  return Object(_entities__WEBPACK_IMPORTED_MODULE_0__["getSourcesApi"])().checkAvailabilitySource(id)["catch"](function () {});
};
/* harmony default export */ __webpack_exports__["default"] = (checkSourceStatus);

/***/ }),

/***/ "./src/api/doLoadSourceForEdit.js":
/*!****************************************!*\
  !*** ./src/api/doLoadSourceForEdit.js ***!
  \****************************************/
/*! exports provided: doLoadSourceForEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLoadSourceForEdit", function() { return doLoadSourceForEdit; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities */ "./src/api/entities.js");
/* harmony import */ var _getCmValues__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getCmValues */ "./src/api/getCmValues.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var doLoadSourceForEdit = function doLoadSourceForEdit(source, hasCostManagement) {
  return Promise.all([Object(_entities__WEBPACK_IMPORTED_MODULE_4__["getSourcesApi"])().showSource(source.id), Object(_entities__WEBPACK_IMPORTED_MODULE_4__["getSourcesApi"])().listSourceEndpoints(source.id), Object(_entities__WEBPACK_IMPORTED_MODULE_4__["doLoadApplicationsForEdit"])(source.id), hasCostManagement && Object(_getCmValues__WEBPACK_IMPORTED_MODULE_5__["getCmValues"])(source.id)["catch"](function () {
    return undefined;
  })]).then( /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
      var _applications$sources;

      var _ref3, sourceData, endpoints, applications, costManagement, endpoint, apps, basicValues, promises, appAuths, addToApp, appAuthenticationIds;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 4), sourceData = _ref3[0], endpoints = _ref3[1], applications = _ref3[2], costManagement = _ref3[3];
              endpoint = endpoints && endpoints.data && endpoints.data[0];
              apps = (applications === null || applications === void 0 ? void 0 : (_applications$sources = applications.sources[0]) === null || _applications$sources === void 0 ? void 0 : _applications$sources.applications) || [];
              basicValues = {
                source: _objectSpread(_objectSpread({}, source), sourceData),
                applications: apps
              };

              if (costManagement) {
                basicValues = _objectSpread(_objectSpread({}, basicValues), {}, {
                  billing_source: costManagement.billing_source,
                  credentials: costManagement.authentication.credentials
                });
              }

              promises = [];
              addToApp = [];
              appAuthenticationIds = [];
              apps.forEach(function (app) {
                var _app$authentications;

                app === null || app === void 0 ? void 0 : (_app$authentications = app.authentications) === null || _app$authentications === void 0 ? void 0 : _app$authentications.forEach(function (auth) {
                  if (auth === null || auth === void 0 ? void 0 : auth.id) {
                    promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_4__["getSourcesApi"])().showAuthentication(auth.id));
                    addToApp.push(app.id);
                    appAuthenticationIds.push(auth.id);
                  }
                });
              });

              if (!(promises.length > 0)) {
                _context.next = 14;
                break;
              }

              _context.next = 12;
              return Promise.all(promises);

            case 12:
              appAuths = _context.sent;
              addToApp.forEach(function (id, index) {
                basicValues.applications.find(function (app) {
                  return app.id === id;
                }).authentications.push(appAuths[index]);
              });

            case 14:
              if (endpoint) {
                _context.next = 16;
                break;
              }

              return _context.abrupt("return", basicValues);

            case 16:
              return _context.abrupt("return", Object(_entities__WEBPACK_IMPORTED_MODULE_4__["getSourcesApi"])().listEndpointAuthentications(endpoint.id).then(function (authentications) {
                return _objectSpread(_objectSpread({}, basicValues), {}, {
                  endpoints: endpoints.data,
                  authentications: authentications.data.filter(function (_ref4) {
                    var id = _ref4.id;
                    return !appAuthenticationIds.includes(id);
                  })
                });
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
};

/***/ }),

/***/ "./src/api/doUpdateSource.js":
/*!***********************************!*\
  !*** ./src/api/doUpdateSource.js ***!
  \***********************************/
/*! exports provided: parseUrl, urlOrHost, doUpdateSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlOrHost", function() { return urlOrHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doUpdateSource", function() { return doUpdateSource; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/formatters */ "./src/views/formatters.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities */ "./src/api/entities.js");
/* harmony import */ var _patchCmValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patchCmValues */ "./src/api/patchCmValues.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var parseUrl = function parseUrl(url) {
  if (url === null) {
    return {
      scheme: null,
      host: null,
      port: null,
      path: null
    };
  }

  if (!url) {
    return {};
  }

  try {
    var u = new URL(url);
    var scheme = u.protocol.replace(/:$/, '');
    return {
      scheme: scheme,
      host: u.hostname,
      port: u.port === '' ? Object(_views_formatters__WEBPACK_IMPORTED_MODULE_1__["defaultPort"])(scheme) : u.port,
      path: u.pathname
    };
  } catch (error) {
    return {};
  }
};
var urlOrHost = function urlOrHost(formData) {
  return formData.url || formData.url === null ? parseUrl(formData.url) : formData.endpoint ? formData.endpoint : formData;
};
var doUpdateSource = function doUpdateSource(source, formData) {
  var promises = [];

  if (formData.source) {
    promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_2__["getSourcesApi"])().updateSource(source.source.id, formData.source));
  }

  if (formData.endpoint || formData.url || formData.url === null) {
    var _urlOrHost = urlOrHost(formData),
        scheme = _urlOrHost.scheme,
        host = _urlOrHost.host,
        port = _urlOrHost.port,
        path = _urlOrHost.path;

    var endPointPort = port === null ? null : parseInt(port, 10);

    var endpointData = _objectSpread({
      scheme: scheme,
      host: host,
      path: path,
      port: endPointPort === null ? null : isNaN(endPointPort) ? undefined : endPointPort
    }, formData.endpoint);

    promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_2__["getSourcesApi"])().updateEndpoint(source.endpoints[0].id, endpointData));
  }

  if (formData.authentications) {
    Object.keys(formData.authentications).forEach(function (key) {
      var idWithoutPrefix = key.replace('a', '');
      promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_2__["getSourcesApi"])().updateAuthentication(idWithoutPrefix, formData.authentications[key]));
    });
  }

  if (formData.billing_source || formData.credentials) {
    var cmDataOut = {};

    if (formData.credentials) {
      cmDataOut = {
        authentication: {
          credentials: formData.credentials
        }
      };
    }

    if (formData.billing_source) {
      cmDataOut = _objectSpread(_objectSpread({}, cmDataOut), {}, {
        billing_source: formData.billing_source
      });
    }

    promises.push(Object(_patchCmValues__WEBPACK_IMPORTED_MODULE_3__["patchCmValues"])(source.source.id, cmDataOut));
  }

  return Promise.all(promises);
};

/***/ }),

/***/ "./src/api/getCmValues.js":
/*!********************************!*\
  !*** ./src/api/getCmValues.js ***!
  \********************************/
/*! exports provided: getCmValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCmValues", function() { return getCmValues; });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./src/api/entities.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/api/constants.js");


var getCmValues = function getCmValues(id) {
  return _entities__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__["COST_MANAGEMENT_API_BASE"], "/sources/").concat(id, "/"));
};

/***/ }),

/***/ "./src/api/patchCmValues.js":
/*!**********************************!*\
  !*** ./src/api/patchCmValues.js ***!
  \**********************************/
/*! exports provided: patchCmValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchCmValues", function() { return patchCmValues; });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./src/api/entities.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/api/constants.js");


var patchCmValues = function patchCmValues(id, data) {
  return _entities__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].patch("".concat(_constants__WEBPACK_IMPORTED_MODULE_1__["COST_MANAGEMENT_API_BASE"], "/sources/").concat(id, "/"), data);
};

/***/ }),

/***/ "./src/components/Authentication.js":
/*!******************************************!*\
  !*** ./src/components/Authentication.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Form/FormGroup */ "./node_modules/@patternfly/react-core/dist/js/components/Form/FormGroup.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_TextInput_TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/TextInput/TextInput */ "./node_modules/@patternfly/react-core/dist/js/components/TextInput/TextInput.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_TextInput_TextInput__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_TextInput_TextInput__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_text_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/text-field */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/text-field.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_text_field__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_text_field__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-form-api.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_validated__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/validated */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/validated.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_validated__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_validated__WEBPACK_IMPORTED_MODULE_10__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Authentication = function Authentication(rest) {
  var _rest$name, _values$authenticatio;

  var formOptions = _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8___default()();
  var values = formOptions.getState().values;

  var _ref = (rest === null || rest === void 0 ? void 0 : (_rest$name = rest.name) === null || _rest$name === void 0 ? void 0 : _rest$name.match(/\d+/)) || [],
      _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 1),
      authenticationId = _ref2[0];

  var isEditing = authenticationId || ((_values$authenticatio = values.authentication) === null || _values$authenticatio === void 0 ? void 0 : _values$authenticatio.id); // If there is any value, the field is modified (password is always empty on start)

  var isModified = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(values, rest.name);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(!isEditing || isModified),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      edited = _useState2[0],
      setEdited = _useState2[1];

  var firstClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(true);
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (mounted.current) {
      // reset on restart
      if (!firstClick.current && formOptions.getState().pristine) {
        setEdited(false);
        firstClick.current = true;
      }

      if (edited) {
        firstClick.current = false;
      }
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    mounted.current = true;
  }, []);
  var doNotRequirePassword = rest.validate && rest.validate.filter(function (_ref3) {
    var type = _ref3.type;
    return type !== _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_9___default.a.REQUIRED;
  });

  var componentProps = _objectSpread(_objectSpread({}, rest), isEditing ? {
    validate: doNotRequirePassword,
    resolveProps: _redhat_cloud_services_frontend_components_sources_cjs_validated__WEBPACK_IMPORTED_MODULE_10___default.a
  } : {});

  if (!edited && isEditing) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
      helperText: componentProps.helperText,
      label: componentProps.label,
      onFocus: function onFocus() {
        return setEdited(true);
      },
      isRequired: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_components_TextInput_TextInput__WEBPACK_IMPORTED_MODULE_6__["TextInput"], {
      "aria-label": "pre-filled-authentication",
      value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_data_driven_forms_pf4_component_mapper_dist_cjs_text_field__WEBPACK_IMPORTED_MODULE_7___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentProps, {
    autoFocus: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Authentication);

/***/ }),

/***/ "./src/components/CustomRoute/CustomRoute.js":
/*!***************************************************!*\
  !*** ./src/components/CustomRoute/CustomRoute.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RedirectNoWriteAccess_RedirectNoWriteAccess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RedirectNoWriteAccess/RedirectNoWriteAccess */ "./src/components/RedirectNoWriteAccess/RedirectNoWriteAccess.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _RedirectNoId_RedirectNoId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RedirectNoId/RedirectNoId */ "./src/components/RedirectNoId/RedirectNoId.js");









var CustomRouteInternal = function CustomRouteInternal(_ref) {
  var route = _ref.route,
      children = _ref.children;
  var source = route.redirectNoId && Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_6__["useSource"])();

  if (!source && route.redirectNoId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_RedirectNoId_RedirectNoId__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, route.writeAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_RedirectNoWriteAccess_RedirectNoWriteAccess__WEBPACK_IMPORTED_MODULE_5__["default"], null), children);
};

CustomRouteInternal.propTypes = {
  route: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
    redirectNoId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    writeAccess: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
  }).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired
};

var CustomRoute = function CustomRoute(_ref2) {
  var route = _ref2.route,
      componentProps = _ref2.componentProps,
      Component = _ref2.Component,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["route", "componentProps", "Component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    path: route.path
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomRouteInternal, {
    route: route
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, componentProps)));
};

CustomRoute.propTypes = {
  route: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
    redirectNoId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    writeAccess: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
  }).isRequired,
  componentProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  Component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CustomRoute);

/***/ }),

/***/ "./src/components/RedirectNoId/RedirectNoId.js":
/*!*****************************************************!*\
  !*** ./src/components/RedirectNoId/RedirectNoId.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _api_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/entities */ "./src/api/entities.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");











var RedirectNoId = function RedirectNoId() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      id = _useParams.id;

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_9__["useSource"])();
  var loaded = Object(_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_7__["useIsLoaded"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref) {
    var sources = _ref.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]),
      appTypesLoaded = _useSelector.appTypesLoaded,
      sourceTypesLoaded = _useSelector.sourceTypesLoaded;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      applicationIsLoaded = _useState2[0],
      setIsApplicationLoaded = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (loaded && appTypesLoaded && sourceTypesLoaded) {
      Object(_api_entities__WEBPACK_IMPORTED_MODULE_6__["doLoadSource"])(id).then(function (_ref2) {
        var _ref2$sources = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2.sources, 1),
            source = _ref2$sources[0];

        dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["addHiddenSource"])(source));
        return source;
      }).then(function (source) {
        if (!source) {
          dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["addMessage"])(intl.formatMessage({
            id: 'sources.sourceNotFoundTitle',
            defaultMessage: 'Requested source was not found'
          }), 'danger', intl.formatMessage({
            id: 'sources.sourceNotFoundTitleDescription',
            defaultMessage: 'Source with { id } was not found. Try it again later.'
          }, {
            id: id
          })));
        }

        setIsApplicationLoaded(true);
      });
    }
  }, [loaded, appTypesLoaded, sourceTypesLoaded]);

  if (applicationIsLoaded && !source) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: _Routes__WEBPACK_IMPORTED_MODULE_8__["routes"].sources.path
    });
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (RedirectNoId);

/***/ }),

/***/ "./src/components/RedirectNoWriteAccess/RedirectNoWriteAccess.js":
/*!***********************************************************************!*\
  !*** ./src/components/RedirectNoWriteAccess/RedirectNoWriteAccess.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");








var RedirectNoWriteAccess = function RedirectNoWriteAccess() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["useIntl"])();
  var writePermissions = Object(_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_5__["useHasWritePermissions"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (writePermissions === false) {
      var title = intl.formatMessage({
        id: 'sources.insufficietnPerms',
        defaultMessage: 'Insufficient permissions'
      });
      var description = intl.formatMessage({
        id: 'sources.notAdminButton',
        defaultMessage: 'To perform this action, you must be granted write permissions from your Organization Administrator.'
      });
      dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__["addMessage"])(title, 'danger', description));
    }
  }, [writePermissions]);

  if (writePermissions === false) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: _Routes__WEBPACK_IMPORTED_MODULE_6__["routes"].sources.path
    });
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (RedirectNoWriteAccess);

/***/ }),

/***/ "./src/components/SourceDetail/ApplicationResourcesCard.js":
/*!*****************************************************************!*\
  !*** ./src/components/SourceDetail/ApplicationResourcesCard.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/Card */ "./node_modules/@patternfly/react-core/dist/js/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Card_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardBody */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardTitle */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NoApplications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NoApplications */ "./src/components/SourceDetail/NoApplications.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _NoPermissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NoPermissions */ "./src/components/SourceDetail/NoPermissions.js");
/* harmony import */ var _SourceEditForm_SourceEditModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SourceEditForm/SourceEditModal */ "./src/components/SourceEditForm/SourceEditModal.js");











var ApplicationResourcesCard = function ApplicationResourcesCard() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_7__["useSource"])();
  var hasRightAccess = Object(_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_6__["useHasWritePermissions"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Card_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "card pf-u-m-lg pf-u-mt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_4__["CardTitle"], null, intl.formatMessage({
    id: 'detail.resources.title',
    defaultMessage: 'Manage connected applications'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, !hasRightAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoPermissions__WEBPACK_IMPORTED_MODULE_8__["default"], null), hasRightAccess && source.applications.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoApplications__WEBPACK_IMPORTED_MODULE_5__["default"], null), hasRightAccess && source.applications.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SourceEditForm_SourceEditModal__WEBPACK_IMPORTED_MODULE_9__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (ApplicationResourcesCard);

/***/ }),

/***/ "./src/components/SourceDetail/ApplicationsCard.js":
/*!*********************************************************!*\
  !*** ./src/components/SourceDetail/ApplicationsCard.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/Card */ "./node_modules/@patternfly/react-core/dist/js/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardBody */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardTitle */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Switch_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Switch/Switch */ "./node_modules/@patternfly/react-core/dist/js/components/Switch/Switch.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Switch_Switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Switch_Switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Form/FormGroup */ "./node_modules/@patternfly/react-core/dist/js/components/Form/FormGroup.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_filterApps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/filterApps */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/filterApps.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_filterApps__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_filterApps__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");














var ApplicationsCard = function ApplicationsCard() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_10__["useSource"])();

  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])(),
      push = _useHistory.push;

  var sourceTypes = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref) {
    var sources = _ref.sources;
    return sources.sourceTypes;
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
  var appTypes = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref2) {
    var sources = _ref2.sources;
    return sources.appTypes;
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
  var hasRightAccess = Object(_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_12__["useHasWritePermissions"])();
  var sourceType = sourceTypes.find(function (type) {
    return type.id === source.source_type_id;
  });
  var sourceTypeName = sourceType === null || sourceType === void 0 ? void 0 : sourceType.name;
  var filteredAppTypes = appTypes.filter(function (type) {
    return type.supported_source_types.includes(sourceTypeName);
  }).filter(_redhat_cloud_services_frontend_components_sources_cjs_filterApps__WEBPACK_IMPORTED_MODULE_9___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "card applications-card pf-u-p-lg pf-u-pl-sm-on-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_6__["CardTitle"], null, intl.formatMessage({
    id: 'detail.applications.title',
    defaultMessage: 'Applications'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_5__["CardBody"], null, !hasRightAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pf-u-mb-md",
    id: "no-permissions-applications"
  }, intl.formatMessage({
    id: 'sources.notAdminButton',
    defaultMessage: 'To perform this adding/removing applications, you must be granted write permissions from your Organization Administrator.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pf-c-form"
  }, filteredAppTypes.map(function (app) {
    var connectedApp = source.applications.find(function (connectedApp) {
      return connectedApp.application_type_id === app.id;
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_8__["FormGroup"], {
      key: app.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Switch_Switch__WEBPACK_IMPORTED_MODULE_7__["Switch"], {
      id: "app-switch-".concat(app.id),
      label: app.display_name,
      isChecked: Boolean(connectedApp),
      isDisabled: (connectedApp === null || connectedApp === void 0 ? void 0 : connectedApp.isDeleting) || !hasRightAccess,
      onChange: function onChange(value) {
        return !value ? push(Object(_Routes__WEBPACK_IMPORTED_MODULE_11__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_11__["routes"].sourcesDetailRemoveApp.path, source.id).replace(':app_id', connectedApp.id)) : push(Object(_Routes__WEBPACK_IMPORTED_MODULE_11__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_11__["routes"].sourcesDetailAddApp.path, source.id).replace(':app_type_id', app.id));
      }
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ApplicationsCard);

/***/ }),

/***/ "./src/components/SourceDetail/AvailabilityChecker.js":
/*!************************************************************!*\
  !*** ./src/components/SourceDetail/AvailabilityChecker.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_redo_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/redo-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/redo-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_redo_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_redo_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Spinner/Spinner */ "./node_modules/@patternfly/react-core/dist/js/components/Spinner/Spinner.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api/checkSourceStatus */ "./src/api/checkSourceStatus.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");













var AvailabilityChecker = function AvailabilityChecker() {
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_9__["useSource"])();
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "plain",
    "aria-label": intl.formatMessage({
      id: 'sources.checkavailability',
      defaultMessage: 'Check source availability'
    }),
    onClick: /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return Object(_api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_10__["default"])(source.id);

            case 3:
              setLoading(false);
              dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_11__["addMessage"])(intl.formatMessage({
                id: 'sources.checkavailability.notificationTitle',
                defaultMessage: 'Request to check source status was sent'
              }), 'info', intl.formatMessage({
                id: 'sources.checkavailability.notificationDescription',
                defaultMessage: 'Check this page later for updates'
              })));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    isDisabled: loading
  }, !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_icons_dist_js_icons_redo_icon__WEBPACK_IMPORTED_MODULE_6___default.a, null), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
    size: "md"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AvailabilityChecker);

/***/ }),

/***/ "./src/components/SourceDetail/Breadcrumbs.js":
/*!****************************************************!*\
  !*** ./src/components/SourceDetail/Breadcrumbs.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Breadcrumb/Breadcrumb */ "./node_modules/@patternfly/react-core/dist/js/components/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Breadcrumb/BreadcrumbItem */ "./node_modules/@patternfly/react-core/dist/js/components/Breadcrumb/BreadcrumbItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");










var Breadcrumbs = function Breadcrumbs() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_8__["useSource"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__["Breadcrumb"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    component: function component(_ref) {
      var href = _ref.href,
          props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["href"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        to: href
      }, props));
    },
    to: _Routes__WEBPACK_IMPORTED_MODULE_7__["routes"].sources.path
  }, intl.formatMessage({
    id: 'sources.sources',
    defaultMessage: 'Sources'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbItem"], {
    isActive: true
  }, source.name));
};

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumbs);

/***/ }),

/***/ "./src/components/SourceDetail/DetailHeader.js":
/*!*****************************************************!*\
  !*** ./src/components/SourceDetail/DetailHeader.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_cjs_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/components/cjs/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/components/cjs/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_cjs_PageHeader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_components_cjs_PageHeader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/Flex */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/Flex.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_Flex__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_FlexItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/FlexItem */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/FlexItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_FlexItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Flex_FlexItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/components/SourceDetail/Breadcrumbs.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/formatters */ "./src/views/formatters.js");
/* harmony import */ var _SourceKebab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SourceKebab */ "./src/components/SourceDetail/SourceKebab.js");














var DetailHeader = function DetailHeader() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_10__["useSource"])();
  var appTypes = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref) {
    var sources = _ref.sources;
    return sources.appTypes;
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components_components_cjs_PageHeader__WEBPACK_IMPORTED_MODULE_3__["PageHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Flex_Flex__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
    className: "pf-u-mb-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem__WEBPACK_IMPORTED_MODULE_8__["FlexItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    headingLevel: "h1",
    size: "2xl"
  }, source.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem__WEBPACK_IMPORTED_MODULE_8__["FlexItem"], null, Object(_views_formatters__WEBPACK_IMPORTED_MODULE_11__["availabilityFormatter"])(undefined, source, {
    appTypes: appTypes
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem__WEBPACK_IMPORTED_MODULE_8__["FlexItem"], {
    align: {
      "default": 'alignRight'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SourceKebab__WEBPACK_IMPORTED_MODULE_12__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, intl.formatMessage({
    id: 'detail.description',
    defaultMessage: 'View details and manage connections for this source.'
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailHeader);

/***/ }),

/***/ "./src/components/SourceDetail/NoApplications.js":
/*!*******************************************************!*\
  !*** ./src/components/SourceDetail/NoApplications.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_plus_circle_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/plus-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/plus-circle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_plus_circle_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_plus_circle_icon__WEBPACK_IMPORTED_MODULE_6__);








var NoApplications = function NoApplications() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__["EmptyStateIcon"], {
    icon: _patternfly_react_icons_dist_js_icons_plus_circle_icon__WEBPACK_IMPORTED_MODULE_6___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    headingLevel: "h4",
    size: "lg"
  }, intl.formatMessage({
    id: 'detail.noapplications.title',
    defaultMessage: 'No connected applications'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__["EmptyStateBody"], {
    className: "empty-state-body"
  }, intl.formatMessage({
    id: 'detail.noapplications.description',
    defaultMessage: 'You have not connected any applications to this source. Use the switches above to add applications.'
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NoApplications);

/***/ }),

/***/ "./src/components/SourceDetail/NoPermissions.js":
/*!******************************************************!*\
  !*** ./src/components/SourceDetail/NoPermissions.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_private_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/private-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/private-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_private_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_private_icon__WEBPACK_IMPORTED_MODULE_6__);








var NoPermissions = function NoPermissions() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__["EmptyStateIcon"], {
    icon: _patternfly_react_icons_dist_js_icons_private_icon__WEBPACK_IMPORTED_MODULE_6___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    headingLevel: "h4",
    size: "lg"
  }, intl.formatMessage({
    id: 'detail.nopermissions.title',
    defaultMessage: 'Missing permissions'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__["EmptyStateBody"], {
    className: "empty-state-body"
  }, intl.formatMessage({
    id: 'detail.nopermissions.description',
    defaultMessage: 'To perform this action, you must be granted write permissions from your Organization Administrator.'
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NoPermissions);

/***/ }),

/***/ "./src/components/SourceDetail/SourceKebab.js":
/*!****************************************************!*\
  !*** ./src/components/SourceDetail/SourceKebab.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Dropdown/Dropdown */ "./node_modules/@patternfly/react-core/dist/js/components/Dropdown/Dropdown.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Dropdown/DropdownItem */ "./node_modules/@patternfly/react-core/dist/js/components/Dropdown/DropdownItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Dropdown_KebabToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Dropdown/KebabToggle */ "./node_modules/@patternfly/react-core/dist/js/components/Dropdown/KebabToggle.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Dropdown_KebabToggle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Dropdown_KebabToggle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");












var SourceKebab = function SourceKebab() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["useIntl"])();

  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])(),
      push = _useHistory.push;

  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_9__["useSource"])();
  var hasRightAccess = Object(_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_10__["useHasWritePermissions"])();
  var tooltip = intl.formatMessage({
    id: 'sources.notAdminButton',
    defaultMessage: 'To perform this action, you must be granted write permissions from your Organization Administrator.'
  });
  var disabledProps = {
    tooltip: tooltip,
    isDisabled: true,
    className: 'ins-c-sources__disabled-drodpown-item'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
    toggle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Dropdown_KebabToggle__WEBPACK_IMPORTED_MODULE_7__["KebabToggle"], {
      onToggle: function onToggle() {
        return setOpen(!isOpen);
      },
      id: "toggle-id-6"
    }),
    isOpen: isOpen,
    isPlain: true,
    position: "right",
    dropdownItems: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, !hasRightAccess && disabledProps, {
      key: "rename",
      onClick: function onClick() {
        return push(Object(_Routes__WEBPACK_IMPORTED_MODULE_8__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_8__["routes"].sourcesDetailRename.path, source.id));
      }
    }), intl.formatMessage({
      id: 'detail.rename.button',
      defaultMessage: 'Rename'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_6__["DropdownItem"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, !hasRightAccess && disabledProps, {
      key: "remove",
      onClick: function onClick() {
        return push(Object(_Routes__WEBPACK_IMPORTED_MODULE_8__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_8__["routes"].sourcesDetailRemove.path, source.id));
      }
    }), intl.formatMessage({
      id: 'detail.remove.button',
      defaultMessage: 'Remove'
    }))]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SourceKebab);

/***/ }),

/***/ "./src/components/SourceDetail/SourceSummaryCard.js":
/*!**********************************************************!*\
  !*** ./src/components/SourceDetail/SourceSummaryCard.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/Card */ "./node_modules/@patternfly/react-core/dist/js/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardBody */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardTitle */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_DescriptionList_DescriptionList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/DescriptionList/DescriptionList */ "./node_modules/@patternfly/react-core/dist/js/components/DescriptionList/DescriptionList.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_DescriptionList_DescriptionList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_DescriptionList_DescriptionListGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/DescriptionList/DescriptionListGroup */ "./node_modules/@patternfly/react-core/dist/js/components/DescriptionList/DescriptionListGroup.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_DescriptionList_DescriptionListGroup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListGroup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_components_DescriptionList_DescriptionListTerm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/DescriptionList/DescriptionListTerm */ "./node_modules/@patternfly/react-core/dist/js/components/DescriptionList/DescriptionListTerm.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_DescriptionList_DescriptionListTerm__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListTerm__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_js_components_DescriptionList_DescriptionListDescription__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/DescriptionList/DescriptionListDescription */ "./node_modules/@patternfly/react-core/dist/js/components/DescriptionList/DescriptionListDescription.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_DescriptionList_DescriptionListDescription__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListDescription__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/formatters */ "./src/views/formatters.js");
/* harmony import */ var _AvailabilityChecker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AvailabilityChecker */ "./src/components/SourceDetail/AvailabilityChecker.js");














var SourceSummaryCard = function SourceSummaryCard() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_10__["useSource"])();
  var sourceTypes = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref) {
    var sources = _ref.sources;
    return sources.sourceTypes;
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "pf-m-selectable pf-m-selected card summary-card pf-u-m-lg pf-u-mr-sm-on-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], null, intl.formatMessage({
    id: 'detail.summary.title',
    defaultMessage: 'Source summary'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_4__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionList__WEBPACK_IMPORTED_MODULE_6__["DescriptionList"], {
    columnModifier: {
      "default": '2Col'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListGroup__WEBPACK_IMPORTED_MODULE_7__["DescriptionListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListTerm__WEBPACK_IMPORTED_MODULE_8__["DescriptionListTerm"], null, intl.formatMessage({
    id: 'detail.summary.type',
    defaultMessage: 'Source type'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListDescription__WEBPACK_IMPORTED_MODULE_9__["DescriptionListDescription"], null, Object(_views_formatters__WEBPACK_IMPORTED_MODULE_11__["sourceTypeFormatter"])(source.source_type_id, undefined, {
    sourceTypes: sourceTypes
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListGroup__WEBPACK_IMPORTED_MODULE_7__["DescriptionListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListTerm__WEBPACK_IMPORTED_MODULE_8__["DescriptionListTerm"], null, intl.formatMessage({
    id: 'detail.summary.lastChecked',
    defaultMessage: 'Last availability check'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListDescription__WEBPACK_IMPORTED_MODULE_9__["DescriptionListDescription"], null, source.last_checked_at || source.last_available_at ? Object(_views_formatters__WEBPACK_IMPORTED_MODULE_11__["dateFormatter"])(source.last_checked_at || source.last_available_at) : intl.formatMessage({
    id: 'detail.summary.notChecked',
    defaultMessage: 'Not checked yet'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AvailabilityChecker__WEBPACK_IMPORTED_MODULE_12__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListGroup__WEBPACK_IMPORTED_MODULE_7__["DescriptionListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListTerm__WEBPACK_IMPORTED_MODULE_8__["DescriptionListTerm"], null, intl.formatMessage({
    id: 'detail.summary.dateAdded',
    defaultMessage: 'Date added'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListDescription__WEBPACK_IMPORTED_MODULE_9__["DescriptionListDescription"], null, Object(_views_formatters__WEBPACK_IMPORTED_MODULE_11__["dateFormatter"])(source.created_at))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListGroup__WEBPACK_IMPORTED_MODULE_7__["DescriptionListGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListTerm__WEBPACK_IMPORTED_MODULE_8__["DescriptionListTerm"], null, intl.formatMessage({
    id: 'detail.summary.lastModified',
    defaultMessage: 'Last modified'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_DescriptionList_DescriptionListDescription__WEBPACK_IMPORTED_MODULE_9__["DescriptionListDescription"], null, Object(_views_formatters__WEBPACK_IMPORTED_MODULE_11__["dateFormatter"])(source.updated_at))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SourceSummaryCard);

/***/ }),

/***/ "./src/components/SourceEditForm/ErroredModal.js":
/*!*******************************************************!*\
  !*** ./src/components/SourceEditForm/ErroredModal.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_ErroredStep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/ErroredStep */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/ErroredStep.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_ErroredStep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_ErroredStep__WEBPACK_IMPORTED_MODULE_4__);






var ErroredModal = function ErroredModal(_ref) {
  var onRetry = _ref.onRetry;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components_sources_cjs_ErroredStep__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClose: onRetry,
    customText: intl.formatMessage({
      id: 'sources.editErrorDescription',
      defaultMessage: 'There was a problem while trying to edit your source. Please try again. If the error persists, open a support case.'
    }),
    secondaryActions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      component: "a",
      target: "_blank",
      href: "https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",
      rel: "noopener noreferrer"
    }, intl.formatMessage({
      id: 'sources.openTicket',
      defaultMessage: 'Open a support case'
    })),
    returnButtonTitle: intl.formatMessage({
      id: 'sources.retryText',
      defaultMessage: 'Retry'
    })
  });
};

ErroredModal.propTypes = {
  onRetry: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ErroredModal);

/***/ }),

/***/ "./src/components/SourceEditForm/SourceEditModal.js":
/*!**********************************************************!*\
  !*** ./src/components/SourceEditForm/SourceEditModal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Spinner */ "./node_modules/@patternfly/react-core/dist/js/components/Spinner/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/form-template.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/SourcesFormRenderer */ "./src/utilities/SourcesFormRenderer.js");
/* harmony import */ var _api_doLoadSourceForEdit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api/doLoadSourceForEdit */ "./src/api/doLoadSourceForEdit.js");
/* harmony import */ var _onSubmit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./onSubmit */ "./src/components/SourceEditForm/onSubmit.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reducer */ "./src/components/SourceEditForm/reducer.js");
/* harmony import */ var _SubmittingModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SubmittingModal */ "./src/components/SourceEditForm/SubmittingModal.js");
/* harmony import */ var _ErroredModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ErroredModal */ "./src/components/SourceEditForm/ErroredModal.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers */ "./src/components/SourceEditForm/helpers.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















var SourceEditModal = function SourceEditModal() {
  var _sourceRedux$applicat;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_14__["default"], _reducer__WEBPACK_IMPORTED_MODULE_14__["initialState"]),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useReducer, 2),
      state = _useReducer2[0],
      setState = _useReducer2[1];

  var sourceRedux = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_12__["useSource"])();
  var isLoaded = Object(_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_13__["useIsLoaded"])();
  var loading = state.loading,
      editing = state.editing,
      source = state.source,
      initialValues = state.initialValues,
      schema = state.schema,
      isSubmitting = state.isSubmitting,
      initialLoad = state.initialLoad,
      message = state.message,
      messages = state.messages,
      submitError = state.submitError,
      values = state.values;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["useIntl"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (_ref) {
    var sources = _ref.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]),
      sourceTypes = _useSelector.sourceTypes,
      appTypes = _useSelector.appTypes,
      sourceTypesLoaded = _useSelector.sourceTypesLoaded,
      appTypesLoaded = _useSelector.appTypesLoaded;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!initialLoad) {
      setState({
        type: 'sourceChanged'
      });
    }
  }, [sourceRedux, sourceRedux === null || sourceRedux === void 0 ? void 0 : (_sourceRedux$applicat = sourceRedux.applications) === null || _sourceRedux$applicat === void 0 ? void 0 : _sourceRedux$applicat.length]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (sourceRedux && initialLoad && appTypesLoaded) {
      Object(_api_doLoadSourceForEdit__WEBPACK_IMPORTED_MODULE_10__["doLoadSourceForEdit"])(sourceRedux, Object(_helpers__WEBPACK_IMPORTED_MODULE_17__["hasCostManagement"])(sourceRedux, appTypes)).then(function (source) {
        setState({
          type: 'setSource',
          source: source
        });
      });
    }
  }, [sourceRedux, isLoaded, appTypesLoaded, initialLoad]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (source && appTypesLoaded && sourceTypesLoaded) {
      var sourceType = sourceTypes.find(function (_ref2) {
        var id = _ref2.id;
        return id === source.source.source_type_id;
      });
      setState({
        type: 'createForm',
        sourceType: sourceType,
        source: source,
        appTypes: appTypes,
        intl: intl
      });
    }
  }, [appTypesLoaded, source, sourceTypesLoaded]);
  var isLoading = !appTypesLoaded || !sourceTypesLoaded || loading;

  if (submitError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ErroredModal__WEBPACK_IMPORTED_MODULE_16__["default"], {
      onRetry: function onRetry() {
        return Object(_onSubmit__WEBPACK_IMPORTED_MODULE_11__["onSubmit"])(values, editing, dispatch, source, intl, setState);
      }
    });
  }

  if (isSubmitting) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SubmittingModal__WEBPACK_IMPORTED_MODULE_15__["default"], null);
  }

  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_7__["Bullseye"], {
      className: "pf-u-m-2xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_6__["Spinner"], null));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    schema: schema,
    onSubmit: function onSubmit(values, formApi) {
      return Object(_onSubmit__WEBPACK_IMPORTED_MODULE_11__["onSubmit"])(values, formApi.getState().dirtyFields, dispatch, source, intl, setState);
    },
    FormTemplate: function FormTemplate(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_8___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        canReset: true,
        submitLabel: "Save changes",
        disableSubmit: ['pristine', 'invalid']
      }, props));
    },
    clearedValue: null,
    initialValues: _objectSpread(_objectSpread({}, initialValues), {}, {
      message: message,
      messages: messages
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SourceEditModal);

/***/ }),

/***/ "./src/components/SourceEditForm/SubmittingModal.js":
/*!**********************************************************!*\
  !*** ./src/components/SourceEditForm/SubmittingModal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_LoadingStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/LoadingStep */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/LoadingStep.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_LoadingStep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_LoadingStep__WEBPACK_IMPORTED_MODULE_2__);




var SubmittingModal = function SubmittingModal() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components_sources_cjs_LoadingStep__WEBPACK_IMPORTED_MODULE_2___default.a, {
    customText: intl.formatMessage({
      id: 'sources.editSubmittingTitle',
      defaultMessage: 'Validating edited source credentials'
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SubmittingModal);

/***/ }),

/***/ "./src/components/SourceEditForm/helpers.js":
/*!**************************************************!*\
  !*** ./src/components/SourceEditForm/helpers.js ***!
  \**************************************************/
/*! exports provided: selectOnlyEditedValues, prepareInitialValues, hasCostManagement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOnlyEditedValues", function() { return selectOnlyEditedValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareInitialValues", function() { return prepareInitialValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCostManagement", function() { return hasCostManagement; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/formatters */ "./src/views/formatters.js");
/* harmony import */ var _parser_application__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parser/application */ "./src/components/SourceEditForm/parser/application.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var selectOnlyEditedValues = function selectOnlyEditedValues(values, editing) {
  var filteredValues = {};
  Object.keys(editing).filter(function (key) {
    return editing[key];
  }).forEach(function (key) {
    lodash_set__WEBPACK_IMPORTED_MODULE_4___default()(filteredValues, key, lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(values, key));
  });
  return filteredValues;
};
var prepareInitialValues = function prepareInitialValues(_ref, sourceTypeName) {
  var endpoints = _ref.endpoints,
      authentications = _ref.authentications,
      applications = _ref.applications,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["endpoints", "authentications", "applications"]);

  var auhenticationsFinal = {};
  var mergeAuths = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(authentications || []), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()((applications === null || applications === void 0 ? void 0 : applications.reduce(function (acc, curr) {
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(acc), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(curr.authentications));
  }, [])) || []));

  if (mergeAuths.length > 0) {
    mergeAuths.forEach(function (auth) {
      auhenticationsFinal["a".concat(auth.id)] = auth;
    });
  }

  var endpoint;
  var url;

  if (endpoints && endpoints.length > 0) {
    endpoint = endpoints[0];
  }

  if (endpoint) {
    url = endpoint.scheme || endpoint.host || endpoint.path || endpoint.port ? Object(_views_formatters__WEBPACK_IMPORTED_MODULE_5__["endpointToUrl"])(endpoint) : undefined;
  }

  return _objectSpread({
    source_type: sourceTypeName,
    endpoint: endpoint,
    authentications: auhenticationsFinal,
    url: url
  }, rest);
};
var hasCostManagement = function hasCostManagement(source, appTypes) {
  var _appTypes$find;

  return source.applications.map(function (_ref2) {
    var application_type_id = _ref2.application_type_id;
    return application_type_id;
  }).includes((_appTypes$find = appTypes.find(function (_ref3) {
    var name = _ref3.name;
    return name === _parser_application__WEBPACK_IMPORTED_MODULE_6__["APP_NAMES"].COST_MANAGAMENT;
  })) === null || _appTypes$find === void 0 ? void 0 : _appTypes$find.id);
};

/***/ }),

/***/ "./src/components/SourceEditForm/onSubmit.js":
/*!***************************************************!*\
  !*** ./src/components/SourceEditForm/onSubmit.js ***!
  \***************************************************/
/*! exports provided: onSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSubmit", function() { return onSubmit; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_getApplicationStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/getApplicationStatus */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/getApplicationStatus.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_getApplicationStatus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_getApplicationStatus__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/components/SourceEditForm/helpers.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/checkSourceStatus */ "./src/api/checkSourceStatus.js");
/* harmony import */ var _api_doUpdateSource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/doUpdateSource */ "./src/api/doUpdateSource.js");
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/formatters */ "./src/views/formatters.js");








var onSubmit = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, editing, dispatch, source, intl, setState) {
    var _source$applications, _source$endpoints, _source$endpoints$;

    var startDate, message, messages, promises, statusResults;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setState({
              type: 'submit',
              values: values,
              editing: editing
            });
            startDate = new Date();
            _context.prev = 2;
            _context.next = 5;
            return Object(_api_doUpdateSource__WEBPACK_IMPORTED_MODULE_6__["doUpdateSource"])(source, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["selectOnlyEditedValues"])(values, editing));

          case 5:
            _context.next = 13;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);
            _context.next = 11;
            return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__["loadEntities"])());

          case 11:
            setState({
              type: 'submitFailed'
            });
            return _context.abrupt("return");

          case 13:
            Object(_api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_5__["checkSourceStatus"])(source.source.id);
            message = {};
            messages = {};
            promises = ((_source$applications = source.applications) === null || _source$applications === void 0 ? void 0 : _source$applications.map(function (_ref2) {
              var id = _ref2.id;
              return Object(_redhat_cloud_services_frontend_components_sources_cjs_getApplicationStatus__WEBPACK_IMPORTED_MODULE_2__["checkAppAvailability"])(id, undefined, undefined, undefined, startDate);
            })) || [];

            if ((_source$endpoints = source.endpoints) === null || _source$endpoints === void 0 ? void 0 : (_source$endpoints$ = _source$endpoints[0]) === null || _source$endpoints$ === void 0 ? void 0 : _source$endpoints$.id) {
              promises.push(Object(_redhat_cloud_services_frontend_components_sources_cjs_getApplicationStatus__WEBPACK_IMPORTED_MODULE_2__["checkAppAvailability"])(source.endpoints[0].id, undefined, undefined, 'getEndpoint', startDate));
            }

            if (!(promises.length > 0)) {
              _context.next = 32;
              break;
            }

            _context.prev = 19;
            _context.next = 22;
            return Promise.all(promises);

          case 22:
            statusResults = _context.sent;
            _context.next = 31;
            break;

          case 25:
            _context.prev = 25;
            _context.t1 = _context["catch"](19);
            _context.next = 29;
            return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__["loadEntities"])());

          case 29:
            setState({
              type: 'submitFailed'
            });
            return _context.abrupt("return");

          case 31:
            statusResults.forEach(function (_ref3) {
              var availability_status = _ref3.availability_status,
                  availability_status_error = _ref3.availability_status_error,
                  id = _ref3.id,
                  isEndpoint = _ref3.role;
              var updatedMessage;

              if (availability_status === _views_formatters__WEBPACK_IMPORTED_MODULE_7__["UNAVAILABLE"]) {
                updatedMessage = {
                  title: intl.formatMessage({
                    id: 'wizard.failEditToastTitle',
                    defaultMessage: 'Edit application credentials failed'
                  }),
                  description: availability_status_error,
                  variant: 'danger'
                };
              }

              if (!availability_status) {
                updatedMessage = {
                  title: intl.formatMessage({
                    id: 'wizard.timeoutEditToastTitle',
                    defaultMessage: 'Edit in progress'
                  }),
                  description: intl.formatMessage({
                    id: 'wizard.timeoutEditToastDescription',
                    defaultMessage: 'We are still working to confirm your updated credentials. Changes will be reflected in this table when complete.'
                  }),
                  variant: 'warning'
                };
              }

              if (updatedMessage && isEndpoint) {
                message = updatedMessage;
              } else if (updatedMessage) {
                messages[id] = updatedMessage;
              }
            });

          case 32:
            if (Object.keys(message).length === 0 && Object.keys(messages).length === 0) {
              message = {
                title: intl.formatMessage({
                  id: 'wizard.successEditToastTitle',
                  defaultMessage: 'Source ‘{name}’ was edited successfully.'
                }, {
                  name: source.source.name
                }),
                variant: 'success'
              };
            }

            _context.next = 35;
            return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__["loadEntities"])());

          case 35:
            setState({
              type: 'submitFinished',
              message: message,
              messages: messages
            });

          case 36:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 7], [19, 25]]);
  }));

  return function onSubmit(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/components/SourceEditForm/parser/EditAlert.js":
/*!***********************************************************!*\
  !*** ./src/components/SourceEditForm/parser/EditAlert.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-form-api.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Alert/Alert */ "./node_modules/@patternfly/react-core/dist/js/components/Alert/Alert.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_4__);






var EditAlert = function EditAlert(_ref) {
  var name = _ref.name;
  var formOptions = _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_3___default()();

  var _get = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(formOptions.getState().values, name),
      variant = _get.variant,
      title = _get.title,
      description = _get.description;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    variant: variant,
    isInline: true,
    title: title
  }, description);
};

EditAlert.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EditAlert);

/***/ }),

/***/ "./src/components/SourceEditForm/parser/application.js":
/*!*************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/application.js ***!
  \*************************************************************/
/*! exports provided: APP_NAMES, appendClusterIdentifier, applicationsFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAMES", function() { return APP_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendClusterIdentifier", function() { return appendClusterIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationsFields", function() { return applicationsFields; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication */ "./src/components/SourceEditForm/parser/authentication.js");
/* harmony import */ var _EditAlert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditAlert */ "./src/components/SourceEditForm/parser/EditAlert.js");







var APP_NAMES = {
  COST_MANAGAMENT: '/insights/platform/cost-management'
};
var appendClusterIdentifier = function appendClusterIdentifier(sourceType) {
  return sourceType.name === 'openshift' ? [{
    name: 'source.source_ref',
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "sources.clusterIdentifier",
      defaultMessage: "Cluster identifier"
    }),
    isRequired: true,
    validate: [{
      type: _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_3___default.a.REQUIRED
    }],
    component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2___default.a.TEXT_FIELD
  }] : [];
};

var createOneAppFields = function createOneAppFields(appType, sourceType, app) {
  var _app$authentications;

  return [{
    name: "messages.".concat(app.id),
    component: 'description',
    Content: _EditAlert__WEBPACK_IMPORTED_MODULE_6__["default"],
    condition: {
      when: function when(_ref) {
        var name = _ref.name;
        return name;
      },
      isNotEmpty: true
    }
  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_authentication__WEBPACK_IMPORTED_MODULE_5__["authenticationFields"])((_app$authentications = app.authentications) === null || _app$authentications === void 0 ? void 0 : _app$authentications.filter(function (auth) {
    return Object.keys(auth).length > 1;
  }), sourceType, appType === null || appType === void 0 ? void 0 : appType.name)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()((appType === null || appType === void 0 ? void 0 : appType.name) === APP_NAMES.COST_MANAGAMENT ? appendClusterIdentifier(sourceType) : []));
};

var applicationsFields = function applicationsFields(applications, sourceType, appTypes) {
  return [{
    component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2___default.a.TABS,
    name: 'app-tabs',
    isBox: true,
    fields: _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(applications.map(function (app) {
      var appType = appTypes.find(function (_ref2) {
        var id = _ref2.id;
        return id === app.application_type_id;
      });
      return {
        name: appType === null || appType === void 0 ? void 0 : appType.id,
        title: appType === null || appType === void 0 ? void 0 : appType.display_name,
        fields: createOneAppFields(appType, sourceType, app)
      };
    }))
  }];
};

/***/ }),

/***/ "./src/components/SourceEditForm/parser/authentication.js":
/*!****************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/authentication.js ***!
  \****************************************************************/
/*! exports provided: createAuthFieldName, getLastPartOfName, removeRequiredValidator, getEnhancedAuthField, getAdditionalAuthSteps, getAdditionalAuthStepsKeys, getAdditionalFields, modifyAuthSchemas, authenticationFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAuthFieldName", function() { return createAuthFieldName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastPartOfName", function() { return getLastPartOfName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRequiredValidator", function() { return removeRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnhancedAuthField", function() { return getEnhancedAuthField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdditionalAuthSteps", function() { return getAdditionalAuthSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdditionalAuthStepsKeys", function() { return getAdditionalAuthStepsKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdditionalFields", function() { return getAdditionalFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyAuthSchemas", function() { return modifyAuthSchemas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticationFields", function() { return authenticationFields; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var createAuthFieldName = function createAuthFieldName(fieldName, id) {
  return "authentications.a".concat(id, ".").concat(fieldName.replace('authentication.', ''));
};
var getLastPartOfName = function getLastPartOfName(fieldName) {
  return fieldName.split('.').pop();
};
var removeRequiredValidator = function removeRequiredValidator() {
  var validate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return validate.filter(function (validation) {
    return validation.type !== _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_3___default.a.REQUIRED && validation.type !== 'required-validator';
  });
};
var getEnhancedAuthField = function getEnhancedAuthField(sourceType, authtype, name) {
  var appName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'generic';
  return lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_4___default.a, [sourceType, 'authentication', authtype, appName, name], {});
};
var getAdditionalAuthSteps = function getAdditionalAuthSteps(sourceType, authtype) {
  var appName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'generic';
  return lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_4___default.a, [sourceType, 'authentication', authtype, appName, 'additionalSteps'], []);
};
var getAdditionalAuthStepsKeys = function getAdditionalAuthStepsKeys(sourceType, authtype) {
  var appName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'generic';
  return lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_4___default.a, [sourceType, 'authentication', authtype, appName, 'includeStepKeyFields'], []);
};
var getAdditionalFields = function getAdditionalFields(auth, stepKey) {
  var _auth$fields;

  return (auth === null || auth === void 0 ? void 0 : (_auth$fields = auth.fields) === null || _auth$fields === void 0 ? void 0 : _auth$fields.filter(function (field) {
    return field.stepKey === stepKey;
  })) || [];
};
var modifyAuthSchemas = function modifyAuthSchemas(fields, id) {
  return fields.map(function (field) {
    var editedName = field.name.startsWith('authentication') ? createAuthFieldName(field.name, id) : field.name;

    var finalField = _objectSpread(_objectSpread({}, field), {}, {
      name: editedName
    });

    var isPassword = getLastPartOfName(finalField.name) === 'password';

    if (isPassword) {
      finalField.component = 'authentication';
    }

    return finalField;
  });
};

var specialModifierAWS = function specialModifierAWS(field, authtype) {
  if (getLastPartOfName(field.name) !== 'password') {
    return field;
  }

  if (authtype === 'arn') {
    return _objectSpread(_objectSpread({}, field), {}, {
      label: 'Cost Management ARN'
    });
  }

  if (authtype === 'cloud-meter-arn') {
    return _objectSpread(_objectSpread({}, field), {}, {
      label: 'Subscription Watch ARN'
    });
  }

  return field;
};

var authenticationFields = function authenticationFields(authentications, sourceType, appName) {
  if (!authentications || authentications.length === 0 || !sourceType.schema || !sourceType.schema.authentication) {
    return [];
  }

  return authentications.map(function (auth) {
    var _sourceType$schema, _sourceType$schema$au, _getAdditionalAuthSte;

    var schemaAuth = sourceType === null || sourceType === void 0 ? void 0 : (_sourceType$schema = sourceType.schema) === null || _sourceType$schema === void 0 ? void 0 : (_sourceType$schema$au = _sourceType$schema.authentication) === null || _sourceType$schema$au === void 0 ? void 0 : _sourceType$schema$au.find(function (_ref) {
      var type = _ref.type;
      return type === auth.authtype;
    });

    if (!schemaAuth) {
      return [];
    }

    var additionalStepKeys = getAdditionalAuthStepsKeys(sourceType.name, auth.authtype, appName);
    var additionalStepsFields = (_getAdditionalAuthSte = getAdditionalAuthSteps(sourceType.name, auth.authtype, appName)) === null || _getAdditionalAuthSte === void 0 ? void 0 : _getAdditionalAuthSte.map(function (step) {
      return _objectSpread(_objectSpread({}, step), {}, {
        fields: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(step.fields), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(getAdditionalFields(schemaAuth, step.name)))
      });
    }).map(function (_ref2) {
      var fields = _ref2.fields;
      return fields.map(function (_ref3) {
        var name = _ref3.name;
        return name;
      });
    }).flatMap(function (x) {
      return x;
    });
    var enhancedFields = schemaAuth.fields.filter(function (field) {
      return additionalStepsFields.includes(field.name) || !field.stepKey || field.stepKey && additionalStepKeys.includes(field.stepKey);
    }).map(function (field) {
      return _objectSpread(_objectSpread({}, field), getEnhancedAuthField(sourceType.name, auth.authtype, field.name, appName));
    });

    if (!appName && sourceType.name === 'amazon') {
      enhancedFields = enhancedFields.map(function (field) {
        return specialModifierAWS(field, auth.authtype);
      });
    }

    return modifyAuthSchemas(enhancedFields, auth.id);
  });
};

/***/ }),

/***/ "./src/components/SourceEditForm/parser/endpoint.js":
/*!**********************************************************!*\
  !*** ./src/components/SourceEditForm/parser/endpoint.js ***!
  \**********************************************************/
/*! exports provided: getEnhancedEndpointField, endpointFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnhancedEndpointField", function() { return getEnhancedEndpointField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpointFields", function() { return endpointFields; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var getEnhancedEndpointField = function getEnhancedEndpointField(sourceType, name) {
  return lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_3___default.a, [sourceType, 'endpoint', name], {});
};
var endpointFields = function endpointFields(sourceType) {
  if (!sourceType.schema || !sourceType.schema.endpoint || sourceType.schema.endpoint.hidden) {
    return undefined;
  }

  var schemaAuth = sourceType.schema.endpoint;
  var enhancedFields = schemaAuth.fields.map(function (field) {
    return _objectSpread(_objectSpread({}, field), getEnhancedEndpointField(sourceType.name, field.name));
  });
  var modifiedFields = enhancedFields;
  var subForm = {
    component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2___default.a.SUB_FORM,
    name: 'endpoint'
  };

  if (sourceType.name === 'ansible-tower') {
    var _url$validate;

    var url = modifiedFields.find(function (_ref) {
      var name = _ref.name;
      return name === 'url';
    });
    return _objectSpread(_objectSpread({}, subForm), {}, {
      fields: [{
        component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2___default.a.SUB_FORM,
        name: 'receptor_node_group',
        condition: {
          when: 'endpoint.receptor_node',
          isNotEmpty: true
        },
        fields: [_objectSpread(_objectSpread({}, url), {}, {
          isRequired: false,
          validate: url === null || url === void 0 ? void 0 : (_url$validate = url.validate) === null || _url$validate === void 0 ? void 0 : _url$validate.filter(function (validation) {
            return validation.type !== _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4___default.a.REQUIRED;
          })
        })]
      }, {
        component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2___default.a.SUB_FORM,
        name: 'hostname_group',
        condition: {
          when: 'endpoint.receptor_node',
          isEmpty: true
        },
        fields: modifiedFields
      }]
    });
  }

  return _objectSpread(_objectSpread({}, subForm), {}, {
    fields: modifiedFields
  });
};

/***/ }),

/***/ "./src/components/SourceEditForm/parser/parseSourceToSchema.js":
/*!*********************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/parseSourceToSchema.js ***!
  \*********************************************************************/
/*! exports provided: parseSourceToSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSourceToSchema", function() { return parseSourceToSchema; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoint */ "./src/components/SourceEditForm/parser/endpoint.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application */ "./src/components/SourceEditForm/parser/application.js");
/* harmony import */ var _EditAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditAlert */ "./src/components/SourceEditForm/parser/EditAlert.js");




var parseSourceToSchema = function parseSourceToSchema(source, sourceType, appTypes, intl) {
  return {
    description: intl.formatMessage({
      id: 'sources.editFormDescripiton',
      defaultMessage: 'Use the form fields to edit application credentials.'
    }),
    fields: [{
      name: 'message',
      component: 'description',
      Content: _EditAlert__WEBPACK_IMPORTED_MODULE_3__["default"],
      condition: {
        when: 'message',
        isNotEmpty: true
      }
    }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_application__WEBPACK_IMPORTED_MODULE_2__["applicationsFields"])(source.applications, sourceType, appTypes)), [source.endpoints && source.endpoints.length > 0 ? Object(_endpoint__WEBPACK_IMPORTED_MODULE_1__["endpointFields"])(sourceType) : false]).filter(Boolean)
  };
};

/***/ }),

/***/ "./src/components/SourceEditForm/reducer.js":
/*!**************************************************!*\
  !*** ./src/components/SourceEditForm/reducer.js ***!
  \**************************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parser_parseSourceToSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser/parseSourceToSchema */ "./src/components/SourceEditForm/parser/parseSourceToSchema.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/components/SourceEditForm/helpers.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  loading: true,
  source: undefined,
  initialValues: {},
  sourceType: undefined,
  schema: undefined,
  isSubmitting: false,
  initialLoad: true,
  submitError: false
};

var reducer = function reducer(state, _ref) {
  var type = _ref.type,
      source = _ref.source,
      sourceType = _ref.sourceType,
      appTypes = _ref.appTypes,
      intl = _ref.intl,
      message = _ref.message,
      values = _ref.values,
      editing = _ref.editing,
      messages = _ref.messages;

  switch (type) {
    case 'createForm':
      return _objectSpread(_objectSpread({}, state), {}, {
        sourceType: sourceType,
        initialValues: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["prepareInitialValues"])(state.source, sourceType.product_name),
        schema: Object(_parser_parseSourceToSchema__WEBPACK_IMPORTED_MODULE_1__["parseSourceToSchema"])(state.source, sourceType, appTypes, intl),
        loading: false
      });

    case 'setSource':
      return _objectSpread(_objectSpread({}, state), {}, {
        source: source,
        initialLoad: false
      });

    case 'submit':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSubmitting: true,
        submitError: false,
        values: values,
        editing: editing
      });

    case 'submitFinished':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSubmitting: false,
        source: source,
        message: message,
        messages: messages
      });

    case 'submitFailed':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSubmitting: false,
        submitError: true,
        message: undefined,
        messages: undefined
      });

    case 'sourceChanged':
      return _objectSpread(_objectSpread({}, state), {}, {
        initialLoad: true,
        loading: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/hooks/useHasWritePermissions.js":
/*!*********************************************!*\
  !*** ./src/hooks/useHasWritePermissions.js ***!
  \*********************************************/
/*! exports provided: useHasWritePermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHasWritePermissions", function() { return useHasWritePermissions; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var useHasWritePermissions = function useHasWritePermissions() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (_ref) {
    var user = _ref.user;
    return {
      orgAdmin: user === null || user === void 0 ? void 0 : user.isOrgAdmin,
      writePermissions: user === null || user === void 0 ? void 0 : user.writePermissions
    };
  }),
      orgAdmin = _useSelector.orgAdmin,
      writePermissions = _useSelector.writePermissions;

  if (typeof orgAdmin !== 'boolean' && typeof writePermissions !== 'boolean') {
    return undefined;
  }

  return !!orgAdmin || !!writePermissions;
};

/***/ }),

/***/ "./src/hooks/useIsLoaded.js":
/*!**********************************!*\
  !*** ./src/hooks/useIsLoaded.js ***!
  \**********************************/
/*! exports provided: useIsLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsLoaded", function() { return useIsLoaded; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var useIsLoaded = function useIsLoaded() {
  var isLoaded = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (_ref) {
    var sources = _ref.sources;
    return sources.loaded;
  });
  return isLoaded <= 0;
};

/***/ }),

/***/ "./src/hooks/useSource.js":
/*!********************************!*\
  !*** ./src/hooks/useSource.js ***!
  \********************************/
/*! exports provided: useSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSource", function() { return useSource; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


var useSource = function useSource() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
      id = _useParams.id;

  var source = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (_ref) {
    var sources = _ref.sources;
    return sources.entities.find(function (source) {
      return source.id === id;
    });
  });
  return source;
};

/***/ }),

/***/ "./src/pages/Detail.js":
/*!*****************************!*\
  !*** ./src/pages/Detail.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SourceDetail_SourceSummaryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SourceDetail/SourceSummaryCard */ "./src/components/SourceDetail/SourceSummaryCard.js");
/* harmony import */ var _components_SourceDetail_ApplicationsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SourceDetail/ApplicationsCard */ "./src/components/SourceDetail/ApplicationsCard.js");
/* harmony import */ var _components_SourceDetail_ApplicationResourcesCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SourceDetail/ApplicationResourcesCard */ "./src/components/SourceDetail/ApplicationResourcesCard.js");
/* harmony import */ var _components_RedirectNoId_RedirectNoId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/RedirectNoId/RedirectNoId */ "./src/components/RedirectNoId/RedirectNoId.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SourcesTable/loaders */ "./src/components/SourcesTable/loaders.js");
/* harmony import */ var _components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CustomRoute/CustomRoute */ "./src/components/CustomRoute/CustomRoute.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Routes */ "./src/Routes.js");
/* harmony import */ var _components_SourceDetail_DetailHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SourceDetail/DetailHeader */ "./src/components/SourceDetail/DetailHeader.js");












var SourceRemoveModal = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() | removeSource */[__webpack_require__.e("vendors~addApplication~addSource~remove~removeApplication~removeSource~renameSource"), __webpack_require__.e("removeSource")]).then(__webpack_require__.bind(null, /*! ../components/SourceRemoveModal/SourceRemoveModal */ "./src/components/SourceRemoveModal/SourceRemoveModal.js"));
});
var AddApplication = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() | addApplication */[__webpack_require__.e("vendors~addApplication~addSource~remove~removeApplication~removeSource~renameSource"), __webpack_require__.e("vendors~addApplication~addSource"), __webpack_require__.e("vendors~addApplication"), __webpack_require__.e("addApplication")]).then(__webpack_require__.bind(null, /*! ../components/AddApplication/AddApplication */ "./src/components/AddApplication/AddApplication.js"));
});
var RemoveAppModal = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() | removeApplication */[__webpack_require__.e("vendors~addApplication~addSource~remove~removeApplication~removeSource~renameSource"), __webpack_require__.e("removeApplication")]).then(__webpack_require__.bind(null, /*! ../components/AddApplication/RemoveAppModal */ "./src/components/AddApplication/RemoveAppModal.js"));
});
var SourceRenameModal = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() | renameSource */[__webpack_require__.e("vendors~addApplication~addSource~remove~removeApplication~removeSource~renameSource"), __webpack_require__.e("vendors~addSource~renameSource"), __webpack_require__.e("renameSource")]).then(__webpack_require__.bind(null, /*! ../components/SourceDetail/SourceRenameModal */ "./src/components/SourceDetail/SourceRenameModal.js"));
});

var Detail = function Detail() {
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_7__["useSource"])();

  if (!source) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_8__["DetailLoader"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RedirectNoId_RedirectNoId__WEBPACK_IMPORTED_MODULE_6__["default"], null));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ins-c-sources__detail-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_9__["default"], {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_10__["routes"].sourcesDetailRemove,
    Component: SourceRemoveModal,
    componentProps: {
      backPath: Object(_Routes__WEBPACK_IMPORTED_MODULE_10__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_10__["routes"].sourcesDetail.path, source.id)
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_9__["default"], {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_10__["routes"].sourcesDetailAddApp,
    Component: AddApplication
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_9__["default"], {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_10__["routes"].sourcesDetailRemoveApp,
    Component: RemoveAppModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_9__["default"], {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_10__["routes"].sourcesDetailRename,
    Component: SourceRenameModal
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SourceDetail_DetailHeader__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    md: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SourceDetail_SourceSummaryCard__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    md: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SourceDetail_ApplicationsCard__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
    md: "12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SourceDetail_ApplicationResourcesCard__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ }),

/***/ "./src/utilities/SourcesFormRenderer.js":
/*!**********************************************!*\
  !*** ./src/utilities/SourcesFormRenderer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_form_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/form-renderer.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_form_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_form_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/form-template.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/component-mapper */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/component-mapper.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_sourceFormRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/sourceFormRenderer */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/sourceFormRenderer.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_sourceFormRenderer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_sourceFormRenderer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Authentication */ "./src/components/Authentication.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var SourcesFormRenderer = function SourcesFormRenderer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_data_driven_forms_react_form_renderer_dist_cjs_form_renderer__WEBPACK_IMPORTED_MODULE_3___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    FormTemplate: _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_4___default.a,
    componentMapper: _objectSpread(_objectSpread(_objectSpread({}, _data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_5___default.a), _redhat_cloud_services_frontend_components_sources_cjs_sourceFormRenderer__WEBPACK_IMPORTED_MODULE_6__["mapperExtension"]), {}, {
      authentication: _components_Authentication__WEBPACK_IMPORTED_MODULE_7__["default"]
    })
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (SourcesFormRenderer);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/sourceDetail.js.map