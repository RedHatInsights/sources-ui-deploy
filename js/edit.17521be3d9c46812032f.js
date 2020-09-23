(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit"],{

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



var doLoadSourceForEdit = function doLoadSourceForEdit(source) {
  return Promise.all([Object(_entities__WEBPACK_IMPORTED_MODULE_4__["getSourcesApi"])().showSource(source.id), Object(_entities__WEBPACK_IMPORTED_MODULE_4__["getSourcesApi"])().listSourceEndpoints(source.id), Object(_entities__WEBPACK_IMPORTED_MODULE_4__["doLoadApplicationsForEdit"])(source.id), Object(_getCmValues__WEBPACK_IMPORTED_MODULE_5__["getCmValues"])(source.id)["catch"](function () {
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

/***/ "./src/components/ModalFormTemplate.js":
/*!*********************************************!*\
  !*** ./src/components/ModalFormTemplate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_form_spy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/form-spy */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/form-spy.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_form_spy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_form_spy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/form-template.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-form-api.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Modal */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_ActionGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Form/ActionGroup */ "./node_modules/@patternfly/react-core/dist/js/components/Form/ActionGroup.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_ActionGroup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Form_ActionGroup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Form/Form */ "./node_modules/@patternfly/react-core/dist/js/components/Form/Form.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_Form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Form_Form__WEBPACK_IMPORTED_MODULE_11__);













var CustomFormWrapper = function CustomFormWrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Form_Form__WEBPACK_IMPORTED_MODULE_11__["Form"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, props, {
    id: "modal-form"
  }));
};

var CustomButtons = function CustomButtons() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["useIntl"])();

  var _useFormApi = _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_7___default()(),
      onReset = _useFormApi.onReset,
      onCancel = _useFormApi.onCancel;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_data_driven_forms_react_form_renderer_dist_cjs_form_spy__WEBPACK_IMPORTED_MODULE_5___default.a, {
    subscription: {
      submitting: true,
      pristine: true,
      invalid: true,
      validating: true
    }
  }, function (_ref) {
    var pristine = _ref.pristine,
        invalid = _ref.invalid,
        validating = _ref.validating,
        submitting = _ref.submitting;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "pf-c-form"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Form_ActionGroup__WEBPACK_IMPORTED_MODULE_9__["ActionGroup"], {
      className: "pf-u-mt-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      variant: "primary",
      form: "modal-form",
      type: "submit",
      isDisabled: pristine || validating || submitting || invalid
    }, intl.formatMessage({
      id: 'sources.save',
      defaultMessage: 'Save'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      variant: "secondary",
      isDisabled: pristine,
      onClick: onReset,
      id: "reset-modal"
    }, intl.formatMessage({
      id: 'sources.reset',
      defaultMessage: 'Reset'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      variant: "link",
      onClick: onCancel,
      id: "cancel-modal"
    }, intl.formatMessage({
      id: 'sources.cancel',
      defaultMessage: 'Cancel'
    }))));
  });
};

var ModalFormTemplate = function ModalFormTemplate(_ref2) {
  var ModalProps = _ref2.ModalProps,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["ModalProps"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_8__["Modal"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, ModalProps, {
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomButtons, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_6___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, props, {
    showFormControls: false,
    FormWrapper: CustomFormWrapper
  })));
};

ModalFormTemplate.propTypes = {
  ModalProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (ModalFormTemplate);

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
/* harmony import */ var _WrapperModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WrapperModal */ "./src/components/SourceEditForm/WrapperModal.js");







var ErroredModal = function ErroredModal(_ref) {
  var onRetry = _ref.onRetry;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WrapperModal__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components_sources_cjs_ErroredStep__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClose: onRetry,
    customText: intl.formatMessage({
      id: 'sources.editErrorDescription',
      // eslint-disable-next-line max-len
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
  }));
};

ErroredModal.propTypes = {
  onRetry: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ErroredModal);

/***/ }),

/***/ "./src/components/SourceEditForm/Header.js":
/*!*************************************************!*\
  !*** ./src/components/SourceEditForm/Header.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__);







var Header = function Header(_ref) {
  var name = _ref.name;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_4__["GridItem"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    headingLevel: "h1",
    size: "3xl"
  }, intl.formatMessage({
    id: 'sources.editSource',
    defaultMessage: 'Edit source'
  }))), name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_4__["GridItem"], {
    xs: 12
  }, intl.formatMessage({
    id: 'sources.editSourceDescription',
    defaultMessage: 'Use the form fields below to make desired changes to source {name}.'
  }, {
    name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      key: "b"
    }, name)
  })));
};

Header.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/SourceEditForm/SourceEditModal.js":
/*!**********************************************************!*\
  !*** ./src/components/SourceEditForm/SourceEditModal.js ***!
  \**********************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Spinner */ "./node_modules/@patternfly/react-core/dist/js/components/Spinner/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Modal */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utilities/SourcesFormRenderer */ "./src/utilities/SourcesFormRenderer.js");
/* harmony import */ var _api_doLoadSourceForEdit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api/doLoadSourceForEdit */ "./src/api/doLoadSourceForEdit.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Header */ "./src/components/SourceEditForm/Header.js");
/* harmony import */ var _onSubmit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./onSubmit */ "./src/components/SourceEditForm/onSubmit.js");
/* harmony import */ var _importedRedirect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./importedRedirect */ "./src/components/SourceEditForm/importedRedirect.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reducer */ "./src/components/SourceEditForm/reducer.js");
/* harmony import */ var _sourceEditContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sourceEditContext */ "./src/components/SourceEditForm/sourceEditContext.js");
/* harmony import */ var _ModalFormTemplate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ModalFormTemplate */ "./src/components/ModalFormTemplate.js");
/* harmony import */ var _SubmittingModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SubmittingModal */ "./src/components/SourceEditForm/SubmittingModal.js");
/* harmony import */ var _TimeoutedModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./TimeoutedModal */ "./src/components/SourceEditForm/TimeoutedModal.js");
/* harmony import */ var _ErroredModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ErroredModal */ "./src/components/SourceEditForm/ErroredModal.js");
/* harmony import */ var _parser_RemoveAuth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./parser/RemoveAuth */ "./src/components/SourceEditForm/parser/RemoveAuth.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }























var SourceEditModal = function SourceEditModal() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_17__["default"], _reducer__WEBPACK_IMPORTED_MODULE_17__["initialState"]),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useReducer, 2),
      state = _useReducer2[0],
      setState = _useReducer2[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  var sourceRedux = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_15__["useSource"])();
  var isLoaded = Object(_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_16__["useIsLoaded"])();
  var loading = state.loading,
      editing = state.editing,
      source = state.source,
      initialValues = state.initialValues,
      schema = state.schema,
      isSubmitting = state.isSubmitting,
      initialLoad = state.initialLoad,
      message = state.message,
      submitError = state.submitError,
      isTimeouted = state.isTimeouted,
      values = state.values,
      sourceType = state.sourceType,
      isAuthRemoving = state.isAuthRemoving;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["useIntl"])();

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
    if (sourceRedux && initialLoad) {
      Object(_api_doLoadSourceForEdit__WEBPACK_IMPORTED_MODULE_10__["doLoadSourceForEdit"])(sourceRedux).then(function (source) {
        if (source.source.imported) {
          Object(_importedRedirect__WEBPACK_IMPORTED_MODULE_13__["redirectWhenImported"])(dispatch, intl, history, source.source.name);
        }

        setState({
          type: 'setSource',
          source: source
        });
      });
    }
  }, [sourceRedux, isLoaded]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (source && appTypesLoaded && sourceTypesLoaded) {
      var _sourceType = sourceTypes.find(function (_ref2) {
        var id = _ref2.id;
        return id === source.source.source_type_id;
      });

      setState({
        type: 'createForm',
        sourceType: _sourceType,
        source: source,
        appTypes: appTypes,
        intl: intl
      });
    }
  }, [appTypesLoaded, source, sourceTypesLoaded]);
  var isLoading = !appTypesLoaded || !sourceTypesLoaded || loading;

  var returnToSources = function returnToSources() {
    return history.push(_Routes__WEBPACK_IMPORTED_MODULE_14__["routes"].sources.path);
  };

  if (isTimeouted) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TimeoutedModal__WEBPACK_IMPORTED_MODULE_21__["default"], null);
  }

  if (submitError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ErroredModal__WEBPACK_IMPORTED_MODULE_22__["default"], {
      onRetry: function onRetry() {
        return Object(_onSubmit__WEBPACK_IMPORTED_MODULE_12__["onSubmit"])(values, editing, dispatch, source, intl, setState);
      }
    });
  }

  if (isSubmitting) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SubmittingModal__WEBPACK_IMPORTED_MODULE_20__["default"], null);
  }

  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
      "aria-label": intl.formatMessage({
        id: 'sources.editSource',
        defaultMessage: 'Edit source.'
      }),
      header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_11__["default"], null),
      isOpen: true,
      variant: "large",
      onClose: returnToSources
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "ins-c-sources__dialog--spinnerContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_7__["Spinner"], null)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_sourceEditContext__WEBPACK_IMPORTED_MODULE_18__["default"].Provider, {
    value: {
      setState: setState,
      source: source,
      sourceType: sourceType
    }
  }, isAuthRemoving && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_parser_RemoveAuth__WEBPACK_IMPORTED_MODULE_23__["default"], {
    authId: isAuthRemoving
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onCancel: returnToSources,
    schema: schema,
    onSubmit: function onSubmit(values, formApi) {
      return Object(_onSubmit__WEBPACK_IMPORTED_MODULE_12__["onSubmit"])(values, formApi.getState().dirtyFields, dispatch, source, intl, setState);
    },
    FormTemplate: function FormTemplate(props) {
      var _ref3;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ModalFormTemplate__WEBPACK_IMPORTED_MODULE_19__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        ModalProps: (_ref3 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 'aria-label', intl.formatMessage({
          id: 'sources.editSource',
          defaultMessage: 'Edit source.'
        })), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, "header", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
          name: source.source.name
        })), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, "variant", 'large'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, "isOpen", !isAuthRemoving), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, "onClose", returnToSources), _ref3)
      }, props));
    },
    clearedValue: null,
    initialValues: _objectSpread(_objectSpread({}, initialValues), {}, {
      message: message
    })
  }));
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
/* harmony import */ var _WrapperModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WrapperModal */ "./src/components/SourceEditForm/WrapperModal.js");





var SubmittingModal = function SubmittingModal() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WrapperModal__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_redhat_cloud_services_frontend_components_sources_cjs_LoadingStep__WEBPACK_IMPORTED_MODULE_2___default.a, {
    customText: intl.formatMessage({
      id: 'sources.editSubmittingTitle',
      defaultMessage: 'Validating edited source credentials'
    })
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SubmittingModal);

/***/ }),

/***/ "./src/components/SourceEditForm/TimeoutedModal.js":
/*!*********************************************************!*\
  !*** ./src/components/SourceEditForm/TimeoutedModal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_wrench_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/wrench-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/wrench-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_wrench_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_wrench_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _WrapperModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WrapperModal */ "./src/components/SourceEditForm/WrapperModal.js");









var TimeoutedModal = function TimeoutedModal() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WrapperModal__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_3__["Bullseye"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState__WEBPACK_IMPORTED_MODULE_4__["EmptyState"], {
    variant: _patternfly_react_core_dist_js_components_EmptyState__WEBPACK_IMPORTED_MODULE_4__["EmptyStateVariant"].full,
    className: "pf-u-mt-4xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5__["EmptyStateIcon"], {
    icon: _patternfly_react_icons_dist_js_icons_wrench_icon__WEBPACK_IMPORTED_MODULE_6___default.a,
    color: "var(--pf-global--Color--200)",
    className: "pf-u-mb-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    headingLevel: "h2",
    size: "xl",
    className: "pf-u-mt-xl"
  }, intl.formatMessage({
    id: 'sources.editTimetoutedTitle',
    defaultMessage: 'Edit source not yet complete'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState__WEBPACK_IMPORTED_MODULE_4__["EmptyStateBody"], null, intl.formatMessage({
    id: 'sources.editTimetoutedDescription',
    // eslint-disable-next-line max-len
    defaultMessage: 'We are still working to confirm your updated credentials and app settings.{newLine}To track progress, check the Status column in the Sources table.'
  }, {
    newLine: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      key: "br"
    })
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TimeoutedModal);

/***/ }),

/***/ "./src/components/SourceEditForm/WrapperModal.js":
/*!*******************************************************!*\
  !*** ./src/components/SourceEditForm/WrapperModal.js ***!
  \*******************************************************/
/*! exports provided: FakeFooter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeFooter", function() { return FakeFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Modal */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_ActionGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Form/ActionGroup */ "./node_modules/@patternfly/react-core/dist/js/components/Form/ActionGroup.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_ActionGroup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Form_ActionGroup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Header */ "./src/components/SourceEditForm/Header.js");










var FakeFooter = function FakeFooter() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["useIntl"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pf-c-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Form_ActionGroup__WEBPACK_IMPORTED_MODULE_6__["ActionGroup"], {
    className: "pf-u-mt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "primary",
    isDisabled: true
  }, intl.formatMessage({
    id: 'sources.save',
    defaultMessage: 'Save'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "secondary",
    isDisabled: true
  }, intl.formatMessage({
    id: 'sources.reset',
    defaultMessage: 'Reset'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "link",
    onClick: function onClick() {
      return history.push(_Routes__WEBPACK_IMPORTED_MODULE_8__["routes"].sources.path);
    }
  }, intl.formatMessage({
    id: 'sources.cancel',
    defaultMessage: 'Cancel'
  }))));
};

var WrapperModal = function WrapperModal(_ref) {
  var children = _ref.children;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  var sourceRedux = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_4__["useSource"])();
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    "aria-label": intl.formatMessage({
      id: 'sources.editSource',
      defaultMessage: 'Edit source.'
    }),
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
      name: sourceRedux.name
    }),
    variant: "large",
    isOpen: true,
    onClose: function onClose() {
      return history.push(_Routes__WEBPACK_IMPORTED_MODULE_8__["routes"].sources.path);
    },
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FakeFooter, null)
  }, children);
};

WrapperModal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WrapperModal);

/***/ }),

/***/ "./src/components/SourceEditForm/helpers.js":
/*!**************************************************!*\
  !*** ./src/components/SourceEditForm/helpers.js ***!
  \**************************************************/
/*! exports provided: selectOnlyEditedValues, prepareInitialValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOnlyEditedValues", function() { return selectOnlyEditedValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareInitialValues", function() { return prepareInitialValues; });
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
/* harmony import */ var _SourcesTable_formatters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SourcesTable/formatters */ "./src/components/SourcesTable/formatters.js");




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
    url = endpoint.scheme || endpoint.host || endpoint.path || endpoint.port ? Object(_SourcesTable_formatters__WEBPACK_IMPORTED_MODULE_5__["endpointToUrl"])(endpoint) : undefined;
  }

  return _objectSpread({
    source_type: sourceTypeName,
    endpoint: endpoint,
    authentications: auhenticationsFinal,
    url: url
  }, rest);
};

/***/ }),

/***/ "./src/components/SourceEditForm/importedRedirect.js":
/*!***********************************************************!*\
  !*** ./src/components/SourceEditForm/importedRedirect.js ***!
  \***********************************************************/
/*! exports provided: redirectWhenImported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectWhenImported", function() { return redirectWhenImported; });
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");


var redirectWhenImported = function redirectWhenImported(dispatch, intl, history, name) {
  dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_1__["addMessage"])(intl.formatMessage({
    id: 'sources.importSourceCannotEdited',
    defaultMessage: 'Source { name } is imported.'
  }, {
    name: name
  }), 'danger', intl.formatMessage({
    id: 'sources.importedSourcesCannotEdited',
    defaultMessage: 'Imported sources cannot be edited.'
  })));
  history.push(_Routes__WEBPACK_IMPORTED_MODULE_0__["routes"].sources.path);
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
/* harmony import */ var _api_doLoadSourceForEdit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/doLoadSourceForEdit */ "./src/api/doLoadSourceForEdit.js");
/* harmony import */ var _api_doUpdateSource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/doUpdateSource */ "./src/api/doUpdateSource.js");
/* harmony import */ var _SourcesTable_formatters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SourcesTable/formatters */ "./src/components/SourcesTable/formatters.js");









var onSubmit = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, editing, dispatch, source, intl, setState) {
    var _source$applications;

    var message, sourceData, promises, statusResults, unavailableApp, anyTimetouted;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setState({
              type: 'submit',
              values: values,
              editing: editing
            });
            _context.prev = 1;
            _context.next = 4;
            return Object(_api_doUpdateSource__WEBPACK_IMPORTED_MODULE_7__["doUpdateSource"])(source, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["selectOnlyEditedValues"])(values, editing));

          case 4:
            _context.next = 10;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            setState({
              type: 'submitFailed'
            });
            return _context.abrupt("return");

          case 10:
            Object(_api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_5__["checkSourceStatus"])(source.source.id);
            dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__["loadEntities"])());
            _context.next = 14;
            return Object(_api_doLoadSourceForEdit__WEBPACK_IMPORTED_MODULE_6__["doLoadSourceForEdit"])({
              id: source.source.id
            });

          case 14:
            sourceData = _context.sent;
            promises = ((_source$applications = source.applications) === null || _source$applications === void 0 ? void 0 : _source$applications.map(function (_ref2) {
              var id = _ref2.id;
              return Object(_redhat_cloud_services_frontend_components_sources_cjs_getApplicationStatus__WEBPACK_IMPORTED_MODULE_2__["checkAppAvailability"])(id);
            })) || [];

            if (!(promises.length > 0)) {
              _context.next = 36;
              break;
            }

            _context.prev = 17;
            _context.next = 20;
            return Promise.all(promises);

          case 20:
            statusResults = _context.sent;
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t1 = _context["catch"](17);
            setState({
              type: 'submitFailed'
            });
            return _context.abrupt("return");

          case 27:
            unavailableApp = statusResults.find(function (_ref3) {
              var availability_status = _ref3.availability_status;
              return availability_status === _SourcesTable_formatters__WEBPACK_IMPORTED_MODULE_8__["UNAVAILABLE"];
            });

            if (!unavailableApp) {
              _context.next = 32;
              break;
            }

            message = {
              title: intl.formatMessage({
                id: 'wizard.failEditToastTitle',
                defaultMessage: 'Edit source failed'
              }),
              description: unavailableApp.availability_status_error,
              variant: 'danger'
            };
            setState({
              type: 'submitFinished',
              source: sourceData,
              message: message
            });
            return _context.abrupt("return");

          case 32:
            anyTimetouted = statusResults.some(function (_ref4) {
              var availability_status = _ref4.availability_status;
              return !availability_status;
            });

            if (!anyTimetouted) {
              _context.next = 36;
              break;
            }

            setState({
              type: 'submitTimetouted'
            });
            return _context.abrupt("return");

          case 36:
            message = {
              title: intl.formatMessage({
                id: 'wizard.successEditToastTitle',
                defaultMessage: 'Source ‘{name}’ was edited successfully.'
              }, {
                name: source.source.name
              }),
              variant: 'success'
            };
            setState({
              type: 'submitFinished',
              source: sourceData,
              message: message
            });

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6], [17, 23]]);
  }));

  return function onSubmit(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/components/SourceEditForm/parser/AdditionalInfoBar.js":
/*!*******************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/AdditionalInfoBar.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/index */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_6__);








var AdditionalInfoBar = function AdditionalInfoBar(_ref) {
  var sourceType = _ref.sourceType,
      applications = _ref.applications;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  var appTypes = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (_ref2) {
    var sources = _ref2.sources;
    return sources.appTypes;
  });
  var sourceAppsNames = applications === null || applications === void 0 ? void 0 : applications.map(function (_ref3) {
    var _appTypes$find;

    var application_type_id = _ref3.application_type_id;
    return appTypes === null || appTypes === void 0 ? void 0 : (_appTypes$find = appTypes.find(function (_ref4) {
      var id = _ref4.id;
      return id === application_type_id;
    })) === null || _appTypes$find === void 0 ? void 0 : _appTypes$find.display_name;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    hasGutter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_6__["GridItem"], {
    md: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].h4
  }, intl.formatMessage({
    id: 'sources.sourceType',
    defaultMessage: 'Source type'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p,
    id: "source-edit-type"
  }, sourceType.product_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_6__["GridItem"], {
    md: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].h4
  }, intl.formatMessage({
    id: 'sources.apps',
    defaultMessage: 'Applications'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p,
    id: "source-edit-apps"
  }, sourceAppsNames.length > 0 ? sourceAppsNames.join(', ') : intl.formatMessage({
    id: 'sources.none',
    defaultMessage: 'None'
  })))));
};

AdditionalInfoBar.propTypes = {
  sourceType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    product_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }),
  applications: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    application_type_id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (AdditionalInfoBar);

/***/ }),

/***/ "./src/components/SourceEditForm/parser/AuthenticationId.js":
/*!******************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/AuthenticationId.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Form/FormGroup */ "./node_modules/@patternfly/react-core/dist/js/components/Form/FormGroup.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__);







var AuthenticationId = function AuthenticationId(_ref) {
  var id = _ref.id;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    label: intl.formatMessage({
      id: 'sources.authId',
      defaultMessage: 'Authentication ID'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    variant: "p"
  }, id)));
};

AuthenticationId.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AuthenticationId);

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
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-form-api.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Alert/Alert */ "./node_modules/@patternfly/react-core/dist/js/components/Alert/Alert.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_2__);




var EditAlert = function EditAlert() {
  var formOptions = _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_1___default()();
  var message = formOptions.getState().values.message;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Alert_Alert__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    variant: message === null || message === void 0 ? void 0 : message.variant,
    isInline: true,
    title: message === null || message === void 0 ? void 0 : message.title
  }, message === null || message === void 0 ? void 0 : message.description);
};

/* harmony default export */ __webpack_exports__["default"] = (EditAlert);

/***/ }),

/***/ "./src/components/SourceEditForm/parser/GridLayout.js":
/*!************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/GridLayout.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_trash_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/trash-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/trash-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_trash_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_trash_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-form-api.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AuthenticationId__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AuthenticationId */ "./src/components/SourceEditForm/parser/AuthenticationId.js");
/* harmony import */ var _sourceEditContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sourceEditContext */ "./src/components/SourceEditForm/sourceEditContext.js");
/* harmony import */ var _RemoveAuthPlaceholder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RemoveAuthPlaceholder */ "./src/components/SourceEditForm/parser/RemoveAuthPlaceholder.js");













var GridLayout = function GridLayout(_ref) {
  var _source$authenticatio, _source$authenticatio2;

  var id = _ref.id,
      fields = _ref.fields;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();

  var _useFormApi = _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8___default()(),
      renderForm = _useFormApi.renderForm;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_sourceEditContext__WEBPACK_IMPORTED_MODULE_10__["default"]),
      setState = _useContext.setState,
      source = _useContext.source;

  var setAuthRemoving = function setAuthRemoving() {
    return setState({
      type: 'setAuthRemoving',
      removingAuth: id
    });
  };

  var isDeleting = source === null || source === void 0 ? void 0 : (_source$authenticatio = source.authentications) === null || _source$authenticatio === void 0 ? void 0 : (_source$authenticatio2 = _source$authenticatio.find(function (auth) {
    return auth.id === id;
  })) === null || _source$authenticatio2 === void 0 ? void 0 : _source$authenticatio2.isDeleting;

  if (isDeleting) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RemoveAuthPlaceholder__WEBPACK_IMPORTED_MODULE_11__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_4__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["GridItem"], {
    md: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_3__["Flex"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_3__["FlexItem"], {
    className: "pf-u-mr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "plain",
    "aria-label": intl.formatMessage({
      id: 'sources.removeAuthAriaLabel',
      defaultMessage: 'Remove authentication with id {id}'
    }, {
      id: id
    }),
    onClick: setAuthRemoving
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_icons_dist_js_icons_trash_icon__WEBPACK_IMPORTED_MODULE_7___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Flex__WEBPACK_IMPORTED_MODULE_3__["Flex"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthenticationId__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: id
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_5__["GridItem"], {
    md: 10
  }, renderForm(fields)));
};

GridLayout.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  fields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (GridLayout);

/***/ }),

/***/ "./src/components/SourceEditForm/parser/RemoveAuth.js":
/*!************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/RemoveAuth.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Modal */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-triangle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _sourceEditContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sourceEditContext */ "./src/components/SourceEditForm/sourceEditContext.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _api_entities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../api/entities */ "./src/api/entities.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_handleError__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/handleError */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/handleError.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_handleError__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_handleError__WEBPACK_IMPORTED_MODULE_13__);















var RemoveAuth = function RemoveAuth(_ref) {
  var _sourceType$schema, _sourceType$schema$au;

  var authId = _ref.authId;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_sourceEditContext__WEBPACK_IMPORTED_MODULE_10__["default"]),
      setState = _useContext.setState,
      source = _useContext.source,
      sourceType = _useContext.sourceType;

  var schemaAuth = sourceType === null || sourceType === void 0 ? void 0 : (_sourceType$schema = sourceType.schema) === null || _sourceType$schema === void 0 ? void 0 : (_sourceType$schema$au = _sourceType$schema.authentication) === null || _sourceType$schema$au === void 0 ? void 0 : _sourceType$schema$au.find(function (_ref2) {
    var _source$authenticatio, _source$authenticatio2;

    var type = _ref2.type;
    return type === (source === null || source === void 0 ? void 0 : (_source$authenticatio = source.authentications) === null || _source$authenticatio === void 0 ? void 0 : (_source$authenticatio2 = _source$authenticatio.find(function (auth) {
      return (auth === null || auth === void 0 ? void 0 : auth.id) === authId;
    })) === null || _source$authenticatio2 === void 0 ? void 0 : _source$authenticatio2.authtype);
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_8__["useIntl"])();

  var onClose = function onClose() {
    return setState({
      type: 'closeAuthRemoving'
    });
  };

  var onRemove = function onRemove() {
    setState({
      type: 'removeAuthPending',
      authId: authId
    });
    onClose();
    return Object(_api_entities__WEBPACK_IMPORTED_MODULE_12__["doDeleteAuthentication"])(authId).then(function () {
      setState({
        type: 'removeAuthFulfill',
        authId: authId
      });
      dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_11__["addMessage"])(intl.formatMessage({
        id: 'sources.authRemoveFullfil',
        defaultMessage: 'Authentication was deleted successfully.'
      }), 'success'));
    })["catch"](function (error) {
      setState({
        type: 'removeAuthRejected',
        authId: authId
      });
      dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_11__["addMessage"])(intl.formatMessage({
        id: 'sources.authRemoveRejected',
        defaultMessage: 'Authentication was not deleted successfully.'
      }), 'danger', Object(_redhat_cloud_services_frontend_components_sources_cjs_handleError__WEBPACK_IMPORTED_MODULE_13__["handleError"])(error)));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: true,
    className: "ins-c-sources__dialog--warning",
    onClose: onClose,
    actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      id: "deleteSubmit",
      key: "submit",
      variant: "danger",
      type: "button",
      onClick: onRemove
    }, intl.formatMessage({
      id: 'sources.deleteConfirm',
      defaultMessage: 'Remove authentication'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      id: "deleteCancel",
      key: "cancel",
      variant: "link",
      type: "button",
      onClick: onClose
    }, intl.formatMessage({
      id: 'sources.deleteCancel',
      defaultMessage: 'Cancel'
    }))],
    variant: "small",
    "aria-label": intl.formatMessage({
      id: 'sources.deleteAuthTitle',
      defaultMessage: 'Remove authentication?'
    }),
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_6__["Title"], {
      headingLevel: "h1",
      size: "2xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
      size: "sm",
      className: "ins-m-alert ins-c-source__delete-icon pf-u-mr-sm"
    }), intl.formatMessage({
      id: 'sources.deleteAppTitle',
      defaultMessage: 'Remove authentication?'
    }))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_4__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    variant: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].p
  }, intl.formatMessage({
    id: 'sources.removeAuthWarning',
    defaultMessage: 'This action will permanently remove {auth} from this source.'
  }, {
    auth: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      key: "b"
    }, schemaAuth === null || schemaAuth === void 0 ? void 0 : schemaAuth.name)
  }))));
};

RemoveAuth.propTypes = {
  authId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RemoveAuth);

/***/ }),

/***/ "./src/components/SourceEditForm/parser/RemoveAuthPlaceholder.js":
/*!***********************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/RemoveAuthPlaceholder.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Spinner */ "./node_modules/@patternfly/react-core/dist/js/components/Spinner/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__);








var RemoveAuthPlaceholder = function RemoveAuthPlaceholder() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_2__["Bullseye"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    size: "lg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_2__["Bullseye"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__["TextVariants"].small,
    className: "pf-u-mt-md"
  }, intl.formatMessage({
    id: 'sources.removingAuthMessage',
    defaultMessage: 'This authentication is being removed...'
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (RemoveAuthPlaceholder);

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

  return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_authentication__WEBPACK_IMPORTED_MODULE_5__["authenticationFields"])((_app$authentications = app.authentications) === null || _app$authentications === void 0 ? void 0 : _app$authentications.filter(function (auth) {
    return Object.keys(auth).length > 1;
  }), sourceType, appType === null || appType === void 0 ? void 0 : appType.name)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()((appType === null || appType === void 0 ? void 0 : appType.name) === APP_NAMES.COST_MANAGAMENT ? appendClusterIdentifier(sourceType) : []));
};

var unusedAuthsWarning = function unusedAuthsWarning(length) {
  return {
    component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2___default.a.PLAIN_TEXT,
    name: 'unused-auth-warning',
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "sources.authNotUsed" // eslint-disable-next-line max-len
      ,
      defaultMessage: "The following {length, plural, one {authentication is not} other {authentications are not}} used by any application.",
      values: {
        length: length
      }
    })
  };
};

var unusedAuthentications = function unusedAuthentications(authentications, sourceType, appsLength) {
  var _sourceType$schema, _sourceType$schema$au, _sourceType$schema$au2;

  if (!authentications || authentications.length === 0) {
    return [];
  }

  var authenticationsInputs = sourceType === null || sourceType === void 0 ? void 0 : (_sourceType$schema = sourceType.schema) === null || _sourceType$schema === void 0 ? void 0 : (_sourceType$schema$au = _sourceType$schema.authentication) === null || _sourceType$schema$au === void 0 ? void 0 : (_sourceType$schema$au2 = _sourceType$schema$au.reduce(function (acc, _ref) {
    var type = _ref.type;
    var auths = authentications.filter(function (_ref2) {
      var authtype = _ref2.authtype;
      return type === authtype;
    });

    if ((auths === null || auths === void 0 ? void 0 : auths.length) > 0) {
      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_authentication__WEBPACK_IMPORTED_MODULE_5__["authenticationFields"])(auths, sourceType)));
    }

    return acc;
  }, [])) === null || _sourceType$schema$au2 === void 0 ? void 0 : _sourceType$schema$au2.filter(Boolean);
  var transformToTabs = appsLength !== 0;

  if (transformToTabs) {
    authenticationsInputs = [{
      fields: [unusedAuthsWarning(authenticationsInputs.length)].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(authenticationsInputs)),
      title: sourceType.product_name,
      name: 'unused-auths-tab'
    }];
  } else {
    authenticationsInputs = [{
      fields: [unusedAuthsWarning(authenticationsInputs.length)].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(authenticationsInputs)),
      component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2___default.a.SUB_FORM,
      name: 'unused-auths-group'
    }];
  }

  return authenticationsInputs;
};

var applicationsFields = function applicationsFields(applications, sourceType, appTypes, authentications) {
  var authenticationTypesFormGroups = unusedAuthentications(authentications, sourceType, applications === null || applications === void 0 ? void 0 : applications.length);

  if (!applications || applications.length === 0) {
    return authenticationTypesFormGroups;
  } else if (applications.length === 1 && authenticationTypesFormGroups.length === 0) {
    var appType = appTypes.find(function (_ref3) {
      var id = _ref3.id;
      return id === applications[0].application_type_id;
    });
    return createOneAppFields(appType, sourceType, applications[0]);
  } else {
    return [{
      component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2___default.a.TABS,
      name: 'app-tabs',
      isBox: true,
      fields: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(applications.map(function (app) {
        var appType = appTypes.find(function (_ref4) {
          var id = _ref4.id;
          return id === app.application_type_id;
        });
        return {
          name: appType === null || appType === void 0 ? void 0 : appType.id,
          title: appType === null || appType === void 0 ? void 0 : appType.display_name,
          fields: createOneAppFields(appType, sourceType, app)
        };
      })), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(authenticationTypesFormGroups))
    }];
  }
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
/* harmony import */ var _GridLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GridLayout */ "./src/components/SourceEditForm/parser/GridLayout.js");



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

    if (!appName) {
      return [{
        name: "authentication-".concat(auth.id),
        component: 'description',
        id: auth.id,
        Content: _GridLayout__WEBPACK_IMPORTED_MODULE_5__["default"],
        fields: modifyAuthSchemas(enhancedFields, auth.id)
      }];
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

/***/ "./src/components/SourceEditForm/parser/genericInfo.js":
/*!*************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/genericInfo.js ***!
  \*************************************************************/
/*! exports provided: genericInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genericInfo", function() { return genericInfo; });
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_SourceAddSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/SourceAddSchema */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/SourceAddSchema.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_SourceAddSchema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_SourceAddSchema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_validated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/validated */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/validated.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_validated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_validated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AdditionalInfoBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AdditionalInfoBar */ "./src/components/SourceEditForm/parser/AdditionalInfoBar.js");
/* harmony import */ var _EditAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditAlert */ "./src/components/SourceEditForm/parser/EditAlert.js");






var genericInfo = function genericInfo(sourceId, intl, sourceType, applications) {
  return [{
    name: 'alert',
    component: 'description',
    Content: _EditAlert__WEBPACK_IMPORTED_MODULE_5__["default"],
    condition: {
      when: 'message',
      isNotEmpty: true
    }
  }, {
    name: 'source.name',
    label: intl.formatMessage({
      id: 'sources.sourceName',
      defaultMessage: 'Source name'
    }),
    component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_0___default.a.TEXT_FIELD,
    validate: [function (value) {
      return Object(_redhat_cloud_services_frontend_components_sources_cjs_SourceAddSchema__WEBPACK_IMPORTED_MODULE_1__["asyncValidatorDebounced"])(value, sourceId, intl);
    }, {
      type: _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_2___default.a.REQUIRED
    }],
    isRequired: true,
    resolveProps: _redhat_cloud_services_frontend_components_sources_cjs_validated__WEBPACK_IMPORTED_MODULE_3___default.a
  }, {
    name: 'additional_info',
    Content: _AdditionalInfoBar__WEBPACK_IMPORTED_MODULE_4__["default"],
    component: 'description',
    sourceType: sourceType,
    applications: applications
  }];
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
/* harmony import */ var _genericInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genericInfo */ "./src/components/SourceEditForm/parser/genericInfo.js");
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endpoint */ "./src/components/SourceEditForm/parser/endpoint.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application */ "./src/components/SourceEditForm/parser/application.js");
/* harmony import */ var _titleField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./titleField */ "./src/components/SourceEditForm/parser/titleField.js");





var parseSourceToSchema = function parseSourceToSchema(source, sourceType, appTypes, intl) {
  return {
    fields: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_genericInfo__WEBPACK_IMPORTED_MODULE_1__["genericInfo"])(source.source.id, intl, sourceType, source.applications)), [Object(_titleField__WEBPACK_IMPORTED_MODULE_4__["default"])(source.applications, sourceType, appTypes, intl, source.authentications)], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_application__WEBPACK_IMPORTED_MODULE_3__["applicationsFields"])(source.applications, sourceType, appTypes, source.authentications)), [source.endpoints && source.endpoints.length > 0 ? Object(_endpoint__WEBPACK_IMPORTED_MODULE_2__["endpointFields"])(sourceType) : false]).filter(Boolean)
  };
};

/***/ }),

/***/ "./src/components/SourceEditForm/parser/titleField.js":
/*!************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/titleField.js ***!
  \************************************************************/
/*! exports provided: TitleAndDescription, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleAndDescription", function() { return TitleAndDescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__);





var TitleAndDescription = function TitleAndDescription(_ref) {
  var title = _ref.title,
      description = _ref.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    headingLevel: "h2",
    className: "pf-u-mb-0"
  }, title), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    variant: "p"
  }, description));
};
TitleAndDescription.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

var titleField = function titleField(applications, sourceType, appTypes, intl, authentications) {
  var title;
  var description;

  if (applications.length === 0) {
    title = intl.formatMessage({
      id: 'source.editTitleNoApp',
      defaultMessage: '{type} credentials'
    }, {
      type: sourceType === null || sourceType === void 0 ? void 0 : sourceType.product_name
    });
  } else if (applications.length === 1) {
    var app = appTypes.find(function (_ref2) {
      var id = _ref2.id;
      return id === applications[0].application_type_id;
    });
    title = intl.formatMessage({
      id: 'source.editTitleOneApp',
      defaultMessage: '{type} & {app} credentials'
    }, {
      type: sourceType === null || sourceType === void 0 ? void 0 : sourceType.product_name,
      app: app === null || app === void 0 ? void 0 : app.display_name
    });
  } else {
    title = intl.formatMessage({
      id: 'source.editTitleMoreApps',
      defaultMessage: '{type} & application credentials'
    }, {
      type: sourceType === null || sourceType === void 0 ? void 0 : sourceType.product_name
    });
    description = intl.formatMessage({
      id: 'source.editDescriptionMoreApps',
      defaultMessage: 'Use the tabs below to view and edit credentials for connected applications.'
    });
  }

  return {
    component: 'description',
    name: 'edit-title',
    Content: TitleAndDescription,
    title: title,
    description: description,
    hideField: (applications === null || applications === void 0 ? void 0 : applications.length) === 0 && (authentications === null || authentications === void 0 ? void 0 : authentications.length) === 0
  };
};

/* harmony default export */ __webpack_exports__["default"] = (titleField);

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
  submitError: false,
  isTimeouted: false
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
      removingAuth = _ref.removingAuth,
      authId = _ref.authId;

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
        message: message
      });

    case 'submitFailed':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSubmitting: false,
        submitError: true
      });

    case 'submitTimetouted':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSubmitting: false,
        isTimeouted: true
      });

    case 'removeAuthPending':
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthRemoving: null,
        source: _objectSpread(_objectSpread({}, state.source), {}, {
          authentications: state.source.authentications.map(function (auth) {
            return auth.id === authId ? _objectSpread(_objectSpread({}, auth), {}, {
              isDeleting: true
            }) : auth;
          })
        })
      });

    case 'removeAuthRejected':
      return _objectSpread(_objectSpread({}, state), {}, {
        source: _objectSpread(_objectSpread({}, state.source), {}, {
          authentications: state.source.authentications.map(function (auth) {
            return auth.id === authId ? _objectSpread(_objectSpread({}, auth), {}, {
              isDeleting: false
            }) : auth;
          })
        })
      });

    case 'removeAuthFulfill':
      return _objectSpread(_objectSpread({}, state), {}, {
        source: _objectSpread(_objectSpread({}, state.source), {}, {
          authentications: state.source.authentications.filter(function (auth) {
            return auth.id !== authId;
          })
        })
      });

    case 'setAuthRemoving':
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthRemoving: removingAuth
      });

    case 'closeAuthRemoving':
      return _objectSpread(_objectSpread({}, state), {}, {
        isAuthRemoving: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/components/SourceEditForm/sourceEditContext.js":
/*!************************************************************!*\
  !*** ./src/components/SourceEditForm/sourceEditContext.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var sourceEditContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (sourceEditContext);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/edit.js.map