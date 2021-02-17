(self["webpackChunksources_ui"] = self["webpackChunksources_ui"] || []).push([["sourceDetail"],{

/***/ "./src/api/checkSourceStatus.js":
/*!**************************************!*\
  !*** ./src/api/checkSourceStatus.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkSourceStatus": () => (/* binding */ checkSourceStatus),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./src/api/entities.js");

var checkSourceStatus = function checkSourceStatus(id) {
  return (0,_entities__WEBPACK_IMPORTED_MODULE_0__.getSourcesApi)().checkAvailabilitySource(id)["catch"](function () {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkSourceStatus);

/***/ }),

/***/ "./src/api/doLoadSourceForEdit.js":
/*!****************************************!*\
  !*** ./src/api/doLoadSourceForEdit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doLoadSourceForEdit": () => (/* binding */ doLoadSourceForEdit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities */ "./src/api/entities.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var doLoadSourceForEdit = function doLoadSourceForEdit(source, appTypes, sourceTypes) {
  return Promise.all([(0,_entities__WEBPACK_IMPORTED_MODULE_4__.getSourcesApi)().showSource(source.id), (0,_entities__WEBPACK_IMPORTED_MODULE_4__.getSourcesApi)().listSourceEndpoints(source.id), (0,_entities__WEBPACK_IMPORTED_MODULE_4__.doLoadApplicationsForEdit)(source.id, appTypes, sourceTypes)]).then( /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref) {
      var _applications$sources;

      var _ref3, sourceData, endpoints, applications, endpoint, apps, basicValues, promises, appAuths, addToApp, appAuthenticationIds;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 3), sourceData = _ref3[0], endpoints = _ref3[1], applications = _ref3[2];
              endpoint = endpoints && endpoints.data && endpoints.data[0];
              apps = (applications === null || applications === void 0 ? void 0 : (_applications$sources = applications.sources[0]) === null || _applications$sources === void 0 ? void 0 : _applications$sources.applications) || [];
              basicValues = {
                source: _objectSpread(_objectSpread({}, source), sourceData),
                applications: apps
              };
              promises = [];
              addToApp = [];
              appAuthenticationIds = [];
              apps.forEach(function (app) {
                var _app$authentications;

                app === null || app === void 0 ? void 0 : (_app$authentications = app.authentications) === null || _app$authentications === void 0 ? void 0 : _app$authentications.forEach(function (auth) {
                  if (auth !== null && auth !== void 0 && auth.id) {
                    promises.push((0,_entities__WEBPACK_IMPORTED_MODULE_4__.getSourcesApi)().showAuthentication(auth.id));
                    addToApp.push(app.id);
                    appAuthenticationIds.push(auth.id);
                  }
                });
              });

              if (!(promises.length > 0)) {
                _context.next = 13;
                break;
              }

              _context.next = 11;
              return Promise.all(promises);

            case 11:
              appAuths = _context.sent;
              addToApp.forEach(function (id, index) {
                basicValues.applications.find(function (app) {
                  return app.id === id;
                }).authentications.push(appAuths[index]);
              });

            case 13:
              if (endpoint) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", basicValues);

            case 15:
              return _context.abrupt("return", (0,_entities__WEBPACK_IMPORTED_MODULE_4__.getSourcesApi)().listEndpointAuthentications(endpoint.id).then(function (authentications) {
                return _objectSpread(_objectSpread({}, basicValues), {}, {
                  endpoints: endpoints.data,
                  authentications: authentications.data.filter(function (_ref4) {
                    var id = _ref4.id;
                    return !appAuthenticationIds.includes(id);
                  })
                });
              }));

            case 16:
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseUrl": () => (/* binding */ parseUrl),
/* harmony export */   "urlOrHost": () => (/* binding */ urlOrHost),
/* harmony export */   "doUpdateSource": () => (/* binding */ doUpdateSource)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/formatters */ "./src/views/formatters.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities */ "./src/api/entities.js");


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
      port: u.port === '' ? (0,_views_formatters__WEBPACK_IMPORTED_MODULE_1__.defaultPort)(scheme) : u.port,
      path: u.pathname
    };
  } catch (error) {
    return {};
  }
};
var urlOrHost = function urlOrHost(formData) {
  return formData.url || formData.url === null ? parseUrl(formData.url) : formData.endpoint ? formData.endpoint : formData;
};
var doUpdateSource = function doUpdateSource(source, formData, values) {
  var promises = [];

  if (formData.source) {
    promises.push((0,_entities__WEBPACK_IMPORTED_MODULE_2__.getSourcesApi)().updateSource(source.source.id, formData.source));
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

    promises.push((0,_entities__WEBPACK_IMPORTED_MODULE_2__.getSourcesApi)().updateEndpoint(source.endpoints[0].id, endpointData));
  }

  if (formData.authentications) {
    Object.keys(formData.authentications).forEach(function (key) {
      var idWithoutPrefix = key.replace('a', '');
      promises.push((0,_entities__WEBPACK_IMPORTED_MODULE_2__.getSourcesApi)().updateAuthentication(idWithoutPrefix, formData.authentications[key]));
    });
  }

  if (formData.applications) {
    Object.keys(formData.applications).forEach(function (key) {
      var idWithoutPrefix = key.replace('a', '');
      promises.push((0,_entities__WEBPACK_IMPORTED_MODULE_2__.getSourcesApi)().updateApplication(idWithoutPrefix, {
        extra: values.applications[key].extra
      }));
    });
  }

  return Promise.all(promises);
};

/***/ }),

/***/ "./src/components/Authentication.js":
/*!******************************************!*\
  !*** ./src/components/Authentication.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Form/FormGroup */ "./node_modules/@patternfly/react-core/dist/esm/components/Form/FormGroup.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_TextInput_TextInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/TextInput/TextInput */ "./node_modules/@patternfly/react-core/dist/esm/components/TextInput/TextInput.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_esm_text_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/esm/text-field */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/esm/text-field.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_esm_use_form_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/esm/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/esm/use-form-api.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_esm_validator_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/esm/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/esm/validator-types.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_validated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/validated */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/validated.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Authentication = function Authentication(rest) {
  var _rest$name, _values$authenticatio;

  var formOptions = (0,_data_driven_forms_react_form_renderer_dist_esm_use_form_api__WEBPACK_IMPORTED_MODULE_6__.default)();
  var values = formOptions.getState().values;

  var _ref = (rest === null || rest === void 0 ? void 0 : (_rest$name = rest.name) === null || _rest$name === void 0 ? void 0 : _rest$name.match(/\d+/)) || [],
      _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 1),
      authenticationId = _ref2[0];

  var isEditing = authenticationId || ((_values$authenticatio = values.authentication) === null || _values$authenticatio === void 0 ? void 0 : _values$authenticatio.id); // If there is any value, the field is modified (password is always empty on start)

  var isModified = lodash_get__WEBPACK_IMPORTED_MODULE_4___default()(values, rest.name);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(!isEditing || isModified),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      edited = _useState2[0],
      setEdited = _useState2[1];

  var firstClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(true);
  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
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
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    mounted.current = true;
  }, []);
  var doNotRequirePassword = rest.validate && rest.validate.filter(function (_ref3) {
    var type = _ref3.type;
    return type !== _data_driven_forms_react_form_renderer_dist_esm_validator_types__WEBPACK_IMPORTED_MODULE_7__.default.REQUIRED;
  });

  var componentProps = _objectSpread(_objectSpread({}, rest), isEditing ? {
    validate: doNotRequirePassword,
    resolveProps: _redhat_cloud_services_frontend_components_sources_esm_validated__WEBPACK_IMPORTED_MODULE_8__.default
  } : {});

  if (!edited && isEditing) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_9__.FormGroup, {
      helperText: componentProps.helperText,
      label: componentProps.label,
      onFocus: function onFocus() {
        return setEdited(true);
      },
      isRequired: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_TextInput_TextInput__WEBPACK_IMPORTED_MODULE_10__.TextInput, {
      "aria-label": "pre-filled-authentication",
      value: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_data_driven_forms_pf4_component_mapper_dist_esm_text_field__WEBPACK_IMPORTED_MODULE_5__.default, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, componentProps, {
    autoFocus: true
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Authentication);

/***/ }),

/***/ "./src/components/SourceDetail/ApplicationResourcesCard.js":
/*!*****************************************************************!*\
  !*** ./src/components/SourceDetail/ApplicationResourcesCard.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/Card */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardBody */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardTitle */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardTitle.js");
/* harmony import */ var _NoApplications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoApplications */ "./src/components/SourceDetail/NoApplications.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _NoPermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NoPermissions */ "./src/components/SourceDetail/NoPermissions.js");
/* harmony import */ var _SourceEditForm_SourceEditModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SourceEditForm/SourceEditModal */ "./src/components/SourceEditForm/SourceEditModal.js");











var ApplicationResourcesCard = function ApplicationResourcesCard() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.default)();
  var source = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_3__.useSource)();
  var hasRightAccess = (0,_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_2__.useHasWritePermissions)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_7__.Card, {
    className: "card pf-u-m-lg pf-u-mt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_8__.CardTitle, null, intl.formatMessage({
    id: 'detail.resources.title',
    defaultMessage: 'Manage connected applications'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_9__.CardBody, null, !hasRightAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NoPermissions__WEBPACK_IMPORTED_MODULE_4__.default, null), hasRightAccess && source.applications.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NoApplications__WEBPACK_IMPORTED_MODULE_1__.default, null), hasRightAccess && source.applications.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SourceEditForm_SourceEditModal__WEBPACK_IMPORTED_MODULE_5__.default, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationResourcesCard);

/***/ }),

/***/ "./src/components/SourceDetail/ApplicationStatusLabel.js":
/*!***************************************************************!*\
  !*** ./src/components/SourceDetail/ApplicationStatusLabel.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Label_Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Label/Label */ "./node_modules/@patternfly/react-core/dist/esm/components/Label/Label.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Popover_Popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Popover/Popover */ "./node_modules/@patternfly/react-core/dist/esm/components/Popover/Popover.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/formatters */ "./src/views/formatters.js");









var ApplicationStatusLabel = function ApplicationStatusLabel(_ref) {
  var app = _ref.app;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.default)();
  var source = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_3__.useSource)();
  var appTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (_ref2) {
    var sources = _ref2.sources;
    return sources.appTypes;
  });
  var finalApp = (0,_views_formatters__WEBPACK_IMPORTED_MODULE_4__.getAppStatus)(app, source, appTypes);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Popover_Popover__WEBPACK_IMPORTED_MODULE_6__.Popover, {
    showClose: false,
    "aria-label": "".concat(finalApp.display_name, " popover"),
    bodyContent: (0,_views_formatters__WEBPACK_IMPORTED_MODULE_4__.getStatusTooltipTextApp)(finalApp.availability_status, finalApp.availability_status_error, intl)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Label_Label__WEBPACK_IMPORTED_MODULE_7__.Label, {
    className: "pf-u-ml-sm clickable",
    color: (0,_views_formatters__WEBPACK_IMPORTED_MODULE_4__.getStatusColor)(finalApp.availability_status)
  }, (0,_views_formatters__WEBPACK_IMPORTED_MODULE_4__.getStatusText)(finalApp.availability_status)));
};

ApplicationStatusLabel.propTypes = {
  app: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    availability_status: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    availability_status_error: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    display_name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationStatusLabel);

/***/ }),

/***/ "./src/components/SourceDetail/ApplicationsCard.js":
/*!*********************************************************!*\
  !*** ./src/components/SourceDetail/ApplicationsCard.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/Card */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardBody */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardTitle */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Switch_Switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Switch/Switch */ "./node_modules/@patternfly/react-core/dist/esm/components/Switch/Switch.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Form/FormGroup */ "./node_modules/@patternfly/react-core/dist/esm/components/Form/FormGroup.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_filterApps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/filterApps */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/filterApps.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _ApplicationStatusLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ApplicationStatusLabel */ "./src/components/SourceDetail/ApplicationStatusLabel.js");
/* harmony import */ var _SourceEditForm_parser_application__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SourceEditForm/parser/application */ "./src/components/SourceEditForm/parser/application.js");

















var descriptionMapper = function descriptionMapper(name, intl) {
  var _APP_NAMES$COST_MANAG;

  return (_APP_NAMES$COST_MANAG = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_APP_NAMES$COST_MANAG, _SourceEditForm_parser_application__WEBPACK_IMPORTED_MODULE_9__.APP_NAMES.COST_MANAGAMENT, intl.formatMessage({
    id: 'cost.app.description',
    defaultMessage: 'Analyze, forecast, and optimize your Red Hat OpenShift cluster costs in hybrid cloud environments.'
  })), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_APP_NAMES$COST_MANAG, _SourceEditForm_parser_application__WEBPACK_IMPORTED_MODULE_9__.APP_NAMES.CLOUD_METER, intl.formatMessage({
    id: 'cost.app.description',
    defaultMessage: 'Includes access to Red Hat Gold Images, high precision subscription watch data, autoregistration, and Red Hat Connector.'
  })), _APP_NAMES$COST_MANAG)[name];
};

var ApplicationsCard = function ApplicationsCard() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_10__.default)();
  var source = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_5__.useSource)();

  var _useHistory = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)(),
      push = _useHistory.push;

  var sourceTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (_ref) {
    var sources = _ref.sources;
    return sources.sourceTypes;
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__.shallowEqual);
  var appTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (_ref2) {
    var sources = _ref2.sources;
    return sources.appTypes;
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__.shallowEqual);
  var hasRightAccess = (0,_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_7__.useHasWritePermissions)();
  var sourceType = sourceTypes.find(function (type) {
    return type.id === source.source_type_id;
  });
  var sourceTypeName = sourceType === null || sourceType === void 0 ? void 0 : sourceType.name;
  var filteredAppTypes = appTypes.filter(function (type) {
    return type.supported_source_types.includes(sourceTypeName);
  }).filter(_redhat_cloud_services_frontend_components_sources_esm_filterApps__WEBPACK_IMPORTED_MODULE_4__.default);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_11__.Card, {
    className: "card applications-card pf-u-p-lg pf-u-pl-sm-on-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_12__.CardTitle, null, intl.formatMessage({
    id: 'detail.applications.title',
    defaultMessage: 'Applications'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_13__.CardBody, null, !hasRightAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "pf-u-mb-md",
    id: "no-permissions-applications"
  }, intl.formatMessage({
    id: 'sources.notAdminButton',
    defaultMessage: 'To perform this adding/removing applications, you must be granted write permissions from your Organization Administrator.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "pf-c-form"
  }, filteredAppTypes.map(function (app) {
    var connectedApp = source.applications.find(function (connectedApp) {
      return connectedApp.application_type_id === app.id;
    });
    var description = descriptionMapper(app.name, intl);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_14__.FormGroup, {
      key: app.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Switch_Switch__WEBPACK_IMPORTED_MODULE_15__.Switch, {
      id: "app-switch-".concat(app.id),
      label: app.display_name,
      isChecked: Boolean(connectedApp),
      isDisabled: (connectedApp === null || connectedApp === void 0 ? void 0 : connectedApp.isDeleting) || !hasRightAccess,
      onChange: function onChange(value) {
        return !value ? push((0,_Routes__WEBPACK_IMPORTED_MODULE_6__.replaceRouteId)(_Routes__WEBPACK_IMPORTED_MODULE_6__.routes.sourcesDetailRemoveApp.path, source.id).replace(':app_id', connectedApp.id)) : push((0,_Routes__WEBPACK_IMPORTED_MODULE_6__.replaceRouteId)(_Routes__WEBPACK_IMPORTED_MODULE_6__.routes.sourcesDetailAddApp.path, source.id).replace(':app_type_id', app.id));
      }
    }), Boolean(connectedApp) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_ApplicationStatusLabel__WEBPACK_IMPORTED_MODULE_8__.default, {
      app: connectedApp
    }), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "pf-c-switch pf-u-mt-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: "pf-c-switch__toggle ins-c-sources__hide-me"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "pf-c-switch__label ins-c-sources__switch-description"
    }, description)));
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplicationsCard);

/***/ }),

/***/ "./src/components/SourceDetail/AvailabilityChecker.js":
/*!************************************************************!*\
  !*** ./src/components/SourceDetail/AvailabilityChecker.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_redo_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/redo-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/redo-icon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Spinner/Spinner */ "./node_modules/@patternfly/react-core/dist/esm/components/Spinner/Spinner.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/checkSourceStatus */ "./src/api/checkSourceStatus.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");













var AvailabilityChecker = function AvailabilityChecker() {
  var source = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_5__.useSource)();
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.default)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__.Button, {
    variant: "plain",
    "aria-label": intl.formatMessage({
      id: 'sources.checkavailability',
      defaultMessage: 'Check source availability'
    }),
    onClick: /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.next = 3;
              return (0,_api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_6__.default)(source.id);

            case 3:
              setLoading(false);
              dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_7__.addMessage)({
                title: intl.formatMessage({
                  id: 'sources.checkavailability.notificationTitle',
                  defaultMessage: 'Request to check source status was sent'
                }),
                variant: 'info',
                description: intl.formatMessage({
                  id: 'sources.checkavailability.notificationDescription',
                  defaultMessage: 'Check this page later for updates'
                })
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    isDisabled: loading
  }, !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_icons_dist_esm_icons_redo_icon__WEBPACK_IMPORTED_MODULE_10__.default, null), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_11__.Spinner, {
    size: "md"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvailabilityChecker);

/***/ }),

/***/ "./src/components/SourceDetail/Breadcrumbs.js":
/*!****************************************************!*\
  !*** ./src/components/SourceDetail/Breadcrumbs.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Breadcrumb/Breadcrumb */ "./node_modules/@patternfly/react-core/dist/esm/components/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Breadcrumb/BreadcrumbItem */ "./node_modules/@patternfly/react-core/dist/esm/components/Breadcrumb/BreadcrumbItem.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");










var Breadcrumbs = function Breadcrumbs() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.default)();
  var source = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_5__.useSource)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__.Breadcrumb, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbItem, {
    component: function component(_ref) {
      var href = _ref.href,
          props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["href"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        to: href
      }, props));
    },
    to: _Routes__WEBPACK_IMPORTED_MODULE_4__.routes.sources.path
  }, intl.formatMessage({
    id: 'sources.sources',
    defaultMessage: 'Sources'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Breadcrumb_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbItem, {
    isActive: true
  }, source.name));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);

/***/ }),

/***/ "./src/components/SourceDetail/DetailHeader.js":
/*!*****************************************************!*\
  !*** ./src/components/SourceDetail/DetailHeader.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Flex_Flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Flex/Flex */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Flex/Flex.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Flex_FlexItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Flex/FlexItem */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Flex/FlexItem.js");
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/components/SourceDetail/Breadcrumbs.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/formatters */ "./src/views/formatters.js");
/* harmony import */ var _SourceKebab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourceKebab */ "./src/components/SourceDetail/SourceKebab.js");














var DetailHeader = function DetailHeader() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.default)();
  var source = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_3__.useSource)();
  var appTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (_ref) {
    var sources = _ref.sources;
    return sources.appTypes;
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_layouts_Flex_Flex__WEBPACK_IMPORTED_MODULE_8__.Flex, {
    className: "pf-u-mb-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_layouts_Flex_FlexItem__WEBPACK_IMPORTED_MODULE_9__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_10__.Title, {
    headingLevel: "h1",
    size: "2xl"
  }, source.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_layouts_Flex_FlexItem__WEBPACK_IMPORTED_MODULE_9__.FlexItem, null, (0,_views_formatters__WEBPACK_IMPORTED_MODULE_4__.availabilityFormatter)(undefined, source, {
    appTypes: appTypes
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_layouts_Flex_FlexItem__WEBPACK_IMPORTED_MODULE_9__.FlexItem, {
    align: {
      "default": 'alignRight'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SourceKebab__WEBPACK_IMPORTED_MODULE_5__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_11__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_12__.Text, null, intl.formatMessage({
    id: 'detail.description',
    defaultMessage: 'View details and manage connections for this source.'
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailHeader);

/***/ }),

/***/ "./src/components/SourceDetail/NoApplications.js":
/*!*******************************************************!*\
  !*** ./src/components/SourceDetail/NoApplications.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_plus_circle_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/plus-circle-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/plus-circle-icon.js");








var NoApplications = function NoApplications() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__.EmptyState, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__.EmptyStateIcon, {
    icon: _patternfly_react_icons_dist_esm_icons_plus_circle_icon__WEBPACK_IMPORTED_MODULE_4__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__.Title, {
    headingLevel: "h4",
    size: "lg"
  }, intl.formatMessage({
    id: 'detail.noapplications.title',
    defaultMessage: 'No connected applications'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__.EmptyStateBody, {
    className: "empty-state-body"
  }, intl.formatMessage({
    id: 'detail.noapplications.description',
    defaultMessage: 'You have not connected any applications to this source. Use the switches above to add applications.'
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoApplications);

/***/ }),

/***/ "./src/components/SourceDetail/NoPermissions.js":
/*!******************************************************!*\
  !*** ./src/components/SourceDetail/NoPermissions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_private_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/private-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/private-icon.js");








var NoPermissions = function NoPermissions() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__.EmptyState, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__.EmptyStateIcon, {
    icon: _patternfly_react_icons_dist_esm_icons_private_icon__WEBPACK_IMPORTED_MODULE_4__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__.Title, {
    headingLevel: "h4",
    size: "lg"
  }, intl.formatMessage({
    id: 'detail.nopermissions.title',
    defaultMessage: 'Missing permissions'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__.EmptyStateBody, {
    className: "empty-state-body"
  }, intl.formatMessage({
    id: 'detail.nopermissions.description',
    defaultMessage: 'To perform this action, you must be granted write permissions from your Organization Administrator.'
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoPermissions);

/***/ }),

/***/ "./src/components/SourceDetail/SourceKebab.js":
/*!****************************************************!*\
  !*** ./src/components/SourceDetail/SourceKebab.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Dropdown/Dropdown */ "./node_modules/@patternfly/react-core/dist/esm/components/Dropdown/Dropdown.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Dropdown/DropdownItem */ "./node_modules/@patternfly/react-core/dist/esm/components/Dropdown/DropdownItem.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Dropdown_KebabToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Dropdown/KebabToggle */ "./node_modules/@patternfly/react-core/dist/esm/components/Dropdown/KebabToggle.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");












var SourceKebab = function SourceKebab() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.default)();

  var _useHistory = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)(),
      push = _useHistory.push;

  var source = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_5__.useSource)();
  var hasRightAccess = (0,_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_6__.useHasWritePermissions)();
  var tooltip = intl.formatMessage({
    id: 'sources.notAdminButton',
    defaultMessage: 'To perform this action, you must be granted write permissions from your Organization Administrator.'
  });
  var disabledProps = {
    tooltip: tooltip,
    isDisabled: true,
    className: 'ins-c-sources__disabled-drodpown-item'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, {
    toggle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Dropdown_KebabToggle__WEBPACK_IMPORTED_MODULE_9__.KebabToggle, {
      onToggle: function onToggle() {
        return setOpen(!isOpen);
      },
      id: "toggle-id-6"
    }),
    isOpen: isOpen,
    isPlain: true,
    position: "right",
    dropdownItems: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_10__.DropdownItem, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, !hasRightAccess && disabledProps, {
      key: "rename",
      onClick: function onClick() {
        return push((0,_Routes__WEBPACK_IMPORTED_MODULE_4__.replaceRouteId)(_Routes__WEBPACK_IMPORTED_MODULE_4__.routes.sourcesDetailRename.path, source.id));
      }
    }), intl.formatMessage({
      id: 'detail.rename.button',
      defaultMessage: 'Rename'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Dropdown_DropdownItem__WEBPACK_IMPORTED_MODULE_10__.DropdownItem, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, !hasRightAccess && disabledProps, {
      key: "remove",
      onClick: function onClick() {
        return push((0,_Routes__WEBPACK_IMPORTED_MODULE_4__.replaceRouteId)(_Routes__WEBPACK_IMPORTED_MODULE_4__.routes.sourcesDetailRemove.path, source.id));
      }
    }), intl.formatMessage({
      id: 'detail.remove.button',
      defaultMessage: 'Remove'
    }))]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SourceKebab);

/***/ }),

/***/ "./src/components/SourceDetail/SourceSummaryCard.js":
/*!**********************************************************!*\
  !*** ./src/components/SourceDetail/SourceSummaryCard.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/Card */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardBody */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardTitle */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_DescriptionList_DescriptionList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/DescriptionList/DescriptionList */ "./node_modules/@patternfly/react-core/dist/esm/components/DescriptionList/DescriptionList.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/DescriptionList/DescriptionListGroup */ "./node_modules/@patternfly/react-core/dist/esm/components/DescriptionList/DescriptionListGroup.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListTerm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/DescriptionList/DescriptionListTerm */ "./node_modules/@patternfly/react-core/dist/esm/components/DescriptionList/DescriptionListTerm.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListDescription__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/DescriptionList/DescriptionListDescription */ "./node_modules/@patternfly/react-core/dist/esm/components/DescriptionList/DescriptionListDescription.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/formatters */ "./src/views/formatters.js");
/* harmony import */ var _AvailabilityChecker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AvailabilityChecker */ "./src/components/SourceDetail/AvailabilityChecker.js");














var SourceSummaryCard = function SourceSummaryCard() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.default)();
  var source = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_2__.useSource)();
  var sourceTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (_ref) {
    var sources = _ref.sources;
    return sources.sourceTypes;
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_6__.Card, {
    className: "pf-m-selectable pf-m-selected card summary-card pf-u-m-lg pf-u-mr-sm-on-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_7__.CardTitle, null, intl.formatMessage({
    id: 'detail.summary.title',
    defaultMessage: 'Source summary'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_8__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionList__WEBPACK_IMPORTED_MODULE_9__.DescriptionList, {
    columnModifier: {
      "default": '2Col'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListGroup__WEBPACK_IMPORTED_MODULE_10__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListTerm__WEBPACK_IMPORTED_MODULE_11__.DescriptionListTerm, null, intl.formatMessage({
    id: 'detail.summary.type',
    defaultMessage: 'Source type'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListDescription__WEBPACK_IMPORTED_MODULE_12__.DescriptionListDescription, null, (0,_views_formatters__WEBPACK_IMPORTED_MODULE_3__.sourceTypeFormatter)(source.source_type_id, undefined, {
    sourceTypes: sourceTypes
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListGroup__WEBPACK_IMPORTED_MODULE_10__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListTerm__WEBPACK_IMPORTED_MODULE_11__.DescriptionListTerm, null, intl.formatMessage({
    id: 'detail.summary.lastChecked',
    defaultMessage: 'Last availability check'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListDescription__WEBPACK_IMPORTED_MODULE_12__.DescriptionListDescription, null, source.last_checked_at || source.last_available_at ? (0,_views_formatters__WEBPACK_IMPORTED_MODULE_3__.dateFormatter)(source.last_checked_at || source.last_available_at) : intl.formatMessage({
    id: 'detail.summary.notChecked',
    defaultMessage: 'Not checked yet'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AvailabilityChecker__WEBPACK_IMPORTED_MODULE_4__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListGroup__WEBPACK_IMPORTED_MODULE_10__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListTerm__WEBPACK_IMPORTED_MODULE_11__.DescriptionListTerm, null, intl.formatMessage({
    id: 'detail.summary.dateAdded',
    defaultMessage: 'Date added'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListDescription__WEBPACK_IMPORTED_MODULE_12__.DescriptionListDescription, null, (0,_views_formatters__WEBPACK_IMPORTED_MODULE_3__.dateFormatter)(source.created_at))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListGroup__WEBPACK_IMPORTED_MODULE_10__.DescriptionListGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListTerm__WEBPACK_IMPORTED_MODULE_11__.DescriptionListTerm, null, intl.formatMessage({
    id: 'detail.summary.lastModified',
    defaultMessage: 'Last modified'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_DescriptionList_DescriptionListDescription__WEBPACK_IMPORTED_MODULE_12__.DescriptionListDescription, null, (0,_views_formatters__WEBPACK_IMPORTED_MODULE_3__.dateFormatter)(source.updated_at))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SourceSummaryCard);

/***/ }),

/***/ "./src/components/SourceEditForm/ErroredModal.js":
/*!*******************************************************!*\
  !*** ./src/components/SourceEditForm/ErroredModal.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_ErroredStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/ErroredStep */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/ErroredStep.js");






var ErroredModal = function ErroredModal(_ref) {
  var onRetry = _ref.onRetry;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_sources_esm_ErroredStep__WEBPACK_IMPORTED_MODULE_2__.default, {
    onClose: onRetry,
    customText: intl.formatMessage({
      id: 'sources.editErrorDescription',
      defaultMessage: 'There was a problem while trying to edit your source. Please try again. If the error persists, open a support case.'
    }),
    secondaryActions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__.Text, {
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
  onRetry: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErroredModal);

/***/ }),

/***/ "./src/components/SourceEditForm/SourceEditModal.js":
/*!**********************************************************!*\
  !*** ./src/components/SourceEditForm/SourceEditModal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Spinner */ "./node_modules/@patternfly/react-core/dist/esm/components/Spinner/Spinner.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Bullseye */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_esm_form_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/esm/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/esm/form-template.js");
/* harmony import */ var _utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/SourcesFormRenderer */ "./src/utilities/SourcesFormRenderer.js");
/* harmony import */ var _api_doLoadSourceForEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/doLoadSourceForEdit */ "./src/api/doLoadSourceForEdit.js");
/* harmony import */ var _onSubmit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./onSubmit */ "./src/components/SourceEditForm/onSubmit.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducer */ "./src/components/SourceEditForm/reducer.js");
/* harmony import */ var _SubmittingModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SubmittingModal */ "./src/components/SourceEditForm/SubmittingModal.js");
/* harmony import */ var _ErroredModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ErroredModal */ "./src/components/SourceEditForm/ErroredModal.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers */ "./src/components/SourceEditForm/helpers.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

















var SourceEditModal = function SourceEditModal() {
  var _sourceRedux$applicat;

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_11__.default, _reducer__WEBPACK_IMPORTED_MODULE_11__.initialState),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useReducer, 2),
      state = _useReducer2[0],
      setState = _useReducer2[1];

  var sourceRedux = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_9__.useSource)();
  var isLoaded = (0,_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_10__.useIsLoaded)();
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
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_15__.default)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (_ref) {
    var sources = _ref.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__.shallowEqual),
      sourceTypes = _useSelector.sourceTypes,
      appTypes = _useSelector.appTypes,
      sourceTypesLoaded = _useSelector.sourceTypesLoaded,
      appTypesLoaded = _useSelector.appTypesLoaded;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!initialLoad) {
      setState({
        type: 'sourceChanged'
      });
    }
  }, [sourceRedux, sourceRedux === null || sourceRedux === void 0 ? void 0 : (_sourceRedux$applicat = sourceRedux.applications) === null || _sourceRedux$applicat === void 0 ? void 0 : _sourceRedux$applicat.length]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (sourceRedux && initialLoad && appTypesLoaded) {
      (0,_api_doLoadSourceForEdit__WEBPACK_IMPORTED_MODULE_7__.doLoadSourceForEdit)(sourceRedux, appTypes, sourceTypes).then(function (source) {
        var messages = (0,_helpers__WEBPACK_IMPORTED_MODULE_14__.prepareMessages)(source, intl);
        setState({
          type: 'setSource',
          source: source,
          messages: messages
        });
      });
    }
  }, [sourceRedux, isLoaded, appTypesLoaded, initialLoad]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_ErroredModal__WEBPACK_IMPORTED_MODULE_13__.default, {
      onRetry: function onRetry() {
        return (0,_onSubmit__WEBPACK_IMPORTED_MODULE_8__.onSubmit)(values, editing, dispatch, source, intl, setState);
      }
    });
  }

  if (isSubmitting) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_SubmittingModal__WEBPACK_IMPORTED_MODULE_12__.default, null);
  }

  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_16__.Bullseye, {
      className: "pf-u-m-2xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_core_dist_esm_components_Spinner__WEBPACK_IMPORTED_MODULE_17__.Spinner, null));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_6__.default, {
    schema: schema,
    onSubmit: function onSubmit(values, formApi) {
      return (0,_onSubmit__WEBPACK_IMPORTED_MODULE_8__.onSubmit)(values, formApi.getState().dirtyFields, dispatch, source, intl, setState);
    },
    FormTemplate: function FormTemplate(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_data_driven_forms_pf4_component_mapper_dist_esm_form_template__WEBPACK_IMPORTED_MODULE_5__.default, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SourceEditModal);

/***/ }),

/***/ "./src/components/SourceEditForm/SubmittingModal.js":
/*!**********************************************************!*\
  !*** ./src/components/SourceEditForm/SubmittingModal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_LoadingStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/LoadingStep */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/LoadingStep.js");




var SubmittingModal = function SubmittingModal() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_redhat_cloud_services_frontend_components_sources_esm_LoadingStep__WEBPACK_IMPORTED_MODULE_1__.default, {
    customText: intl.formatMessage({
      id: 'sources.editSubmittingTitle',
      defaultMessage: 'Validating edited source credentials'
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmittingModal);

/***/ }),

/***/ "./src/components/SourceEditForm/helpers.js":
/*!**************************************************!*\
  !*** ./src/components/SourceEditForm/helpers.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHECK_ENDPOINT_COMMAND": () => (/* binding */ CHECK_ENDPOINT_COMMAND),
/* harmony export */   "selectOnlyEditedValues": () => (/* binding */ selectOnlyEditedValues),
/* harmony export */   "prepareInitialValues": () => (/* binding */ prepareInitialValues),
/* harmony export */   "getEditedApplications": () => (/* binding */ getEditedApplications),
/* harmony export */   "prepareMessages": () => (/* binding */ prepareMessages)
/* harmony export */ });
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




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var CHECK_ENDPOINT_COMMAND = 'check-endpoint';
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
    url = endpoint.scheme || endpoint.host || endpoint.path || endpoint.port ? (0,_views_formatters__WEBPACK_IMPORTED_MODULE_5__.endpointToUrl)(endpoint) : undefined;
  }

  var applicationsFinal = {};

  if ((applications === null || applications === void 0 ? void 0 : applications.length) > 0) {
    applications.forEach(function (app) {
      if (app.extra && Object.keys(app.extra).length > 0) {
        applicationsFinal["a".concat(app.id)] = {
          extra: app.extra
        };
      }
    });
  }

  return _objectSpread(_objectSpread({
    source_type: sourceTypeName,
    endpoint: endpoint,
    authentications: auhenticationsFinal,
    url: url
  }, Object.keys(applicationsFinal).length && {
    applications: applicationsFinal
  }), rest);
};

var addIfUnique = function addIfUnique(array, item) {
  return !array.includes(item) && array.push(item);
};

var getEditedApplications = function getEditedApplications(source, editing) {
  var editedApplications = [];
  var editedFields = Object.keys(editing);
  editedFields.forEach(function (key) {
    if (editing[key]) {
      var _key$match, _key$match$;

      var editedId = (_key$match = key.match(/.a\d+/)) === null || _key$match === void 0 ? void 0 : (_key$match$ = _key$match[0]) === null || _key$match$ === void 0 ? void 0 : _key$match$.replace('.a', '');

      if (key.startsWith('applications')) {
        addIfUnique(editedApplications, editedId);
      }

      if (key.startsWith('authentications')) {
        source.applications.forEach(function (app) {
          return app.authentications.forEach(function (_ref2) {
            var id = _ref2.id,
                resource_type = _ref2.resource_type;
            return resource_type && id === editedId && addIfUnique(editedApplications, resource_type === 'Application' ? app.id : "".concat(CHECK_ENDPOINT_COMMAND, "-").concat(app.id));
          });
        });
      }

      if (key.startsWith('url') || key.startsWith('endpoint')) {
        source.applications.forEach(function (app) {
          return app.authentications.forEach(function (_ref3) {
            var resource_type = _ref3.resource_type;
            return resource_type === 'Endpoint' && addIfUnique(editedApplications, "".concat(CHECK_ENDPOINT_COMMAND, "-").concat(app.id));
          });
        });
      }
    }
  });
  return editedApplications.filter(Boolean);
};
var prepareMessages = function prepareMessages(source, intl) {
  var _source$endpoints, _source$endpoints$;

  var messages = {};
  source.applications.forEach(function (_ref4) {
    var id = _ref4.id,
        availability_status_error = _ref4.availability_status_error,
        availability_status = _ref4.availability_status;

    if (availability_status === _views_formatters__WEBPACK_IMPORTED_MODULE_5__.UNAVAILABLE) {
      messages[id] = {
        title: intl.formatMessage({
          id: 'wizard.failEditToastTitleBeforeEdit',
          defaultMessage: 'This application is unavailable'
        }),
        description: availability_status_error,
        variant: 'danger'
      };
    }
  });

  if ((_source$endpoints = source.endpoints) !== null && _source$endpoints !== void 0 && (_source$endpoints$ = _source$endpoints[0]) !== null && _source$endpoints$ !== void 0 && _source$endpoints$.availability_status_error) {
    var applicationsUsingEndpoint = source.applications.map(function (app) {
      return app.authentications.find(function (_ref5) {
        var resource_type = _ref5.resource_type;
        return resource_type === 'Endpoint';
      }) ? app.id : undefined;
    }).filter(Boolean);
    applicationsUsingEndpoint.forEach(function (id) {
      var _source$endpoints2, _source$endpoints2$;

      messages[id] = {
        title: intl.formatMessage({
          id: 'wizard.failEditToastTitleBeforeEdit',
          defaultMessage: 'This application is unavailable'
        }),
        description: (_source$endpoints2 = source.endpoints) === null || _source$endpoints2 === void 0 ? void 0 : (_source$endpoints2$ = _source$endpoints2[0]) === null || _source$endpoints2$ === void 0 ? void 0 : _source$endpoints2$.availability_status_error,
        variant: 'danger'
      };
    });
  }

  return messages;
};

/***/ }),

/***/ "./src/components/SourceEditForm/onSubmit.js":
/*!***************************************************!*\
  !*** ./src/components/SourceEditForm/onSubmit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onSubmit": () => (/* binding */ onSubmit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_getApplicationStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/getApplicationStatus */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/getApplicationStatus.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./src/components/SourceEditForm/helpers.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/checkSourceStatus */ "./src/api/checkSourceStatus.js");
/* harmony import */ var _api_doUpdateSource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/doUpdateSource */ "./src/api/doUpdateSource.js");
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../views/formatters */ "./src/views/formatters.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var onSubmit = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values, editing, dispatch, source, intl, setState) {
    var startDate, messages, checkApplications, promises, statusResults;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
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
            return (0,_api_doUpdateSource__WEBPACK_IMPORTED_MODULE_7__.doUpdateSource)(source, (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.selectOnlyEditedValues)(values, editing), values);

          case 5:
            _context.next = 13;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);
            _context.next = 11;
            return dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__.loadEntities)());

          case 11:
            setState({
              type: 'submitFailed'
            });
            return _context.abrupt("return");

          case 13:
            (0,_api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_6__.checkSourceStatus)(source.source.id);
            messages = {};
            checkApplications = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getEditedApplications)(source, editing);
            promises = [];
            checkApplications.forEach(function (checkInfo) {
              if (checkInfo.includes(_helpers__WEBPACK_IMPORTED_MODULE_4__.CHECK_ENDPOINT_COMMAND)) {
                promises.push((0,_redhat_cloud_services_frontend_components_sources_esm_getApplicationStatus__WEBPACK_IMPORTED_MODULE_3__.checkAppAvailability)(source.endpoints[0].id, undefined, undefined, 'getEndpoint', startDate).then(function (data) {
                  return _objectSpread(_objectSpread({}, data), {}, {
                    id: checkInfo.replace("".concat(_helpers__WEBPACK_IMPORTED_MODULE_4__.CHECK_ENDPOINT_COMMAND, "-"), '')
                  });
                }));
              } else {
                promises.push((0,_redhat_cloud_services_frontend_components_sources_esm_getApplicationStatus__WEBPACK_IMPORTED_MODULE_3__.checkAppAvailability)(checkInfo, undefined, undefined, undefined, startDate));
              }
            });

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
            return dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__.loadEntities)());

          case 29:
            setState({
              type: 'submitFailed'
            });
            return _context.abrupt("return");

          case 31:
            statusResults.forEach(function (_ref2) {
              var availability_status = _ref2.availability_status,
                  availability_status_error = _ref2.availability_status_error,
                  id = _ref2.id;

              if (availability_status === _views_formatters__WEBPACK_IMPORTED_MODULE_8__.AVAILABLE) {
                messages[id] = {
                  title: intl.formatMessage({
                    id: 'wizard.successEditToastTitle',
                    defaultMessage: 'Application credentials were edited successfully.'
                  }),
                  description: availability_status_error,
                  variant: 'success'
                };
              }

              if (availability_status === _views_formatters__WEBPACK_IMPORTED_MODULE_8__.UNAVAILABLE) {
                messages[id] = {
                  title: intl.formatMessage({
                    id: 'wizard.failEditToastTitle',
                    defaultMessage: 'Edit application credentials failed.'
                  }),
                  description: availability_status_error,
                  variant: 'danger'
                };
              }

              if (!availability_status) {
                messages[id] = {
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
            });

          case 32:
            _context.next = 34;
            return dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__.loadEntities)());

          case 34:
            setState({
              type: 'submitFinished',
              messages: messages
            });

          case 35:
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

/***/ "./src/components/SourceEditForm/parser/endpoint.js":
/*!**********************************************************!*\
  !*** ./src/components/SourceEditForm/parser/endpoint.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEnhancedEndpointField": () => (/* binding */ getEnhancedEndpointField),
/* harmony export */   "endpointFields": () => (/* binding */ endpointFields)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_esm_component_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/esm/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/esm/component-types.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/hardcodedSchemas */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/hardcodedSchemas.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_esm_validator_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/esm/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/esm/validator-types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var getEnhancedEndpointField = function getEnhancedEndpointField(sourceType, name) {
  return lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(_redhat_cloud_services_frontend_components_sources_esm_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_3__.default, [sourceType, 'endpoint', name], {});
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
    component: _data_driven_forms_react_form_renderer_dist_esm_component_types__WEBPACK_IMPORTED_MODULE_2__.default.SUB_FORM,
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
        component: _data_driven_forms_react_form_renderer_dist_esm_component_types__WEBPACK_IMPORTED_MODULE_2__.default.SUB_FORM,
        name: 'receptor_node_group',
        condition: {
          when: 'endpoint.receptor_node',
          isNotEmpty: true
        },
        fields: [_objectSpread(_objectSpread({}, url), {}, {
          isRequired: false,
          validate: url === null || url === void 0 ? void 0 : (_url$validate = url.validate) === null || _url$validate === void 0 ? void 0 : _url$validate.filter(function (validation) {
            return validation.type !== _data_driven_forms_react_form_renderer_dist_esm_validator_types__WEBPACK_IMPORTED_MODULE_4__.default.REQUIRED;
          })
        })]
      }, {
        component: _data_driven_forms_react_form_renderer_dist_esm_component_types__WEBPACK_IMPORTED_MODULE_2__.default.SUB_FORM,
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseSourceToSchema": () => (/* binding */ parseSourceToSchema)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoint */ "./src/components/SourceEditForm/parser/endpoint.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application */ "./src/components/SourceEditForm/parser/application.js");



var parseSourceToSchema = function parseSourceToSchema(source, sourceType, appTypes, intl) {
  return {
    description: intl.formatMessage({
      id: 'sources.editFormDescripiton',
      defaultMessage: 'Use the form fields to edit application credentials.'
    }),
    fields: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()((0,_application__WEBPACK_IMPORTED_MODULE_2__.applicationsFields)(source.applications, sourceType, appTypes)), [source.endpoints && source.endpoints.length > 0 ? (0,_endpoint__WEBPACK_IMPORTED_MODULE_1__.endpointFields)(sourceType) : false]).filter(Boolean)
  };
};

/***/ }),

/***/ "./src/components/SourceEditForm/reducer.js":
/*!**************************************************!*\
  !*** ./src/components/SourceEditForm/reducer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
      values = _ref.values,
      editing = _ref.editing,
      messages = _ref.messages;

  switch (type) {
    case 'createForm':
      return _objectSpread(_objectSpread({}, state), {}, {
        sourceType: sourceType,
        initialValues: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.prepareInitialValues)(state.source, sourceType.product_name),
        schema: (0,_parser_parseSourceToSchema__WEBPACK_IMPORTED_MODULE_1__.parseSourceToSchema)(state.source, sourceType, appTypes, intl),
        loading: false
      });

    case 'setSource':
      return _objectSpread(_objectSpread({}, state), {}, {
        messages: _objectSpread(_objectSpread({}, messages), state.messages),
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
        messages: messages
      });

    case 'submitFailed':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSubmitting: false,
        submitError: true,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./src/pages/Detail.js":
/*!*****************************!*\
  !*** ./src/pages/Detail.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Grid/Grid */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Grid/GridItem */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Grid/GridItem.js");
/* harmony import */ var _components_SourceDetail_SourceSummaryCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SourceDetail/SourceSummaryCard */ "./src/components/SourceDetail/SourceSummaryCard.js");
/* harmony import */ var _components_SourceDetail_ApplicationsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SourceDetail/ApplicationsCard */ "./src/components/SourceDetail/ApplicationsCard.js");
/* harmony import */ var _components_SourceDetail_ApplicationResourcesCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SourceDetail/ApplicationResourcesCard */ "./src/components/SourceDetail/ApplicationResourcesCard.js");
/* harmony import */ var _components_RedirectNoId_RedirectNoId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RedirectNoId/RedirectNoId */ "./src/components/RedirectNoId/RedirectNoId.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SourcesTable/loaders */ "./src/components/SourcesTable/loaders.js");
/* harmony import */ var _components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CustomRoute/CustomRoute */ "./src/components/CustomRoute/CustomRoute.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Routes */ "./src/Routes.js");
/* harmony import */ var _components_SourceDetail_DetailHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SourceDetail/DetailHeader */ "./src/components/SourceDetail/DetailHeader.js");












var SourceRemoveModal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() | removeSource */[__webpack_require__.e("pfVendor"), __webpack_require__.e("remove")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/SourceRemoveModal/SourceRemoveModal */ "./src/components/SourceRemoveModal/SourceRemoveModal.js"));
});
var AddApplication = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() | addApplication */[__webpack_require__.e("pfVendor"), __webpack_require__.e("rhcsVendor"), __webpack_require__.e("vendors-node_modules_lodash__Stack_js-node_modules_lodash__Uint8Array_js-node_modules_lodash_-728c19"), __webpack_require__.e("vendors-node_modules_lodash__baseMerge_js-node_modules_lodash__createAssigner_js"), __webpack_require__.e("addSource"), __webpack_require__.e("vendors-node_modules_deep-object-diff_dist_index_js-node_modules_lodash_cloneDeep_js-node_mod-bffc70"), __webpack_require__.e("src_components_AddApplication_removeAppSubmit_js"), __webpack_require__.e("addApplication")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/AddApplication/AddApplication */ "./src/components/AddApplication/AddApplication.js"));
});
var RemoveAppModal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() | removeApplication */[__webpack_require__.e("pfVendor"), __webpack_require__.e("src_components_AddApplication_removeAppSubmit_js"), __webpack_require__.e("removeApplication")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/AddApplication/RemoveAppModal */ "./src/components/AddApplication/RemoveAppModal.js"));
});
var SourceRenameModal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() | renameSource */[__webpack_require__.e("pfVendor"), __webpack_require__.e("rhcsVendor"), __webpack_require__.e("vendors-node_modules_awesome-debounce-promise_dist_index_es_js"), __webpack_require__.e("renameSource")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/SourceDetail/SourceRenameModal */ "./src/components/SourceDetail/SourceRenameModal.js"));
});

var Detail = function Detail() {
  var source = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_5__.useSource)();

  if (!source) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_6__.DetailLoader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_RedirectNoId_RedirectNoId__WEBPACK_IMPORTED_MODULE_4__.default, null));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ins-c-sources__detail-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_7__.default, {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_8__.routes.sourcesDetailRemove,
    Component: SourceRemoveModal,
    componentProps: {
      backPath: (0,_Routes__WEBPACK_IMPORTED_MODULE_8__.replaceRouteId)(_Routes__WEBPACK_IMPORTED_MODULE_8__.routes.sourcesDetail.path, source.id)
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_7__.default, {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_8__.routes.sourcesDetailAddApp,
    Component: AddApplication
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_7__.default, {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_8__.routes.sourcesDetailRemoveApp,
    Component: RemoveAppModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_7__.default, {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_8__.routes.sourcesDetailRename,
    Component: SourceRenameModal
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SourceDetail_DetailHeader__WEBPACK_IMPORTED_MODULE_9__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_10__.Grid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_11__.GridItem, {
    md: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SourceDetail_SourceSummaryCard__WEBPACK_IMPORTED_MODULE_1__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_11__.GridItem, {
    md: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SourceDetail_ApplicationsCard__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_11__.GridItem, {
    md: "12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SourceDetail_ApplicationResourcesCard__WEBPACK_IMPORTED_MODULE_3__.default, null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);

/***/ }),

/***/ "./src/utilities/SourcesFormRenderer.js":
/*!**********************************************!*\
  !*** ./src/utilities/SourcesFormRenderer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_esm_form_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/esm/form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/esm/form-renderer.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_esm_form_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/esm/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/esm/form-template.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_esm_component_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/esm/component-mapper */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/esm/component-mapper.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_sourceFormRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/sourceFormRenderer */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/sourceFormRenderer.js");
/* harmony import */ var _components_Authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Authentication */ "./src/components/Authentication.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var SourcesFormRenderer = function SourcesFormRenderer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_data_driven_forms_react_form_renderer_dist_esm_form_renderer__WEBPACK_IMPORTED_MODULE_3__.default, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    FormTemplate: _data_driven_forms_pf4_component_mapper_dist_esm_form_template__WEBPACK_IMPORTED_MODULE_4__.default,
    componentMapper: _objectSpread(_objectSpread(_objectSpread({}, _data_driven_forms_pf4_component_mapper_dist_esm_component_mapper__WEBPACK_IMPORTED_MODULE_5__.default), _redhat_cloud_services_frontend_components_sources_esm_sourceFormRenderer__WEBPACK_IMPORTED_MODULE_6__.mapperExtension), {}, {
      authentication: _components_Authentication__WEBPACK_IMPORTED_MODULE_7__.default
    })
  }, props));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SourcesFormRenderer);

/***/ })

}]);
//# sourceMappingURL=sourceDetail.fcec1f911b05d281a992.js.map