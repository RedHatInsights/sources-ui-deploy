(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addApp~edit"],{

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
/* harmony import */ var _components_SourcesTable_formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SourcesTable/formatters */ "./src/components/SourcesTable/formatters.js");
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
      port: u.port === '' ? Object(_components_SourcesTable_formatters__WEBPACK_IMPORTED_MODULE_1__["defaultPort"])(scheme) : u.port,
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

  if (!edited) {
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
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-mapper */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-mapper.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_mapper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_mapper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/form-template.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/component-mapper */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/component-mapper.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_sourceFormRenderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/sourceFormRenderer */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/sourceFormRenderer.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_sourceFormRenderer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_sourceFormRenderer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Authentication__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Authentication */ "./src/components/Authentication.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var SourcesFormRenderer = function SourcesFormRenderer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_data_driven_forms_react_form_renderer_dist_cjs_form_renderer__WEBPACK_IMPORTED_MODULE_3___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    FormTemplate: _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7___default.a,
    componentMapper: _objectSpread(_objectSpread(_objectSpread({}, _data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_8___default.a), _redhat_cloud_services_frontend_components_sources_cjs_sourceFormRenderer__WEBPACK_IMPORTED_MODULE_9__["mapperExtension"]), {}, {
      authentication: _components_Authentication__WEBPACK_IMPORTED_MODULE_10__["default"],
      'switch-field': _data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_8___default.a[_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4___default.a.SWITCH]
    }),
    validatorMapper: {
      'required-validator': _data_driven_forms_react_form_renderer_dist_cjs_validator_mapper__WEBPACK_IMPORTED_MODULE_6___default.a[_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5___default.a.REQUIRED],
      'pattern-validator': _data_driven_forms_react_form_renderer_dist_cjs_validator_mapper__WEBPACK_IMPORTED_MODULE_6___default.a[_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5___default.a.PATTERN],
      'min-length-validator': _data_driven_forms_react_form_renderer_dist_cjs_validator_mapper__WEBPACK_IMPORTED_MODULE_6___default.a[_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5___default.a.MIN_LENGTH],
      'url-validator': _data_driven_forms_react_form_renderer_dist_cjs_validator_mapper__WEBPACK_IMPORTED_MODULE_6___default.a[_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5___default.a.URL]
    }
  }, props));
};

/* harmony default export */ __webpack_exports__["default"] = (SourcesFormRenderer);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/addApp~edit.js.map