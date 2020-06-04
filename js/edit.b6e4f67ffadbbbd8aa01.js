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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities */ "./src/api/entities.js");
/* harmony import */ var _getCmValues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCmValues */ "./src/api/getCmValues.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var doLoadSourceForEdit = function doLoadSourceForEdit(source) {
  return Promise.all([Object(_entities__WEBPACK_IMPORTED_MODULE_2__["getSourcesApi"])().showSource(source.id), Object(_entities__WEBPACK_IMPORTED_MODULE_2__["getSourcesApi"])().listSourceEndpoints(source.id), Object(_entities__WEBPACK_IMPORTED_MODULE_2__["getSourcesApi"])().listSourceApplications(source.id), Object(_getCmValues__WEBPACK_IMPORTED_MODULE_3__["getCmValues"])(source.id)["catch"](function () {
    return undefined;
  })]).then(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 4),
        sourceData = _ref2[0],
        endpoints = _ref2[1],
        applications = _ref2[2],
        costManagement = _ref2[3];

    var endpoint = endpoints && endpoints.data && endpoints.data[0];
    var basicValues = {
      source: _objectSpread(_objectSpread({}, source), sourceData),
      applications: applications.data
    };

    if (costManagement) {
      basicValues = _objectSpread(_objectSpread({}, basicValues), {}, {
        billing_source: costManagement.billing_source,
        credentials: costManagement.authentication.credentials
      });
    }

    if (!endpoint) {
      // bail out
      return basicValues;
    }

    return Object(_entities__WEBPACK_IMPORTED_MODULE_2__["getSourcesApi"])().listEndpointAuthentications(endpoint.id).then(function (authentications) {
      return _objectSpread(_objectSpread({}, basicValues), {}, {
        endpoints: endpoints.data,
        authentications: authentications.data
      });
    });
  });
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

/***/ "./src/components/EditField/EditField.js":
/*!***********************************************!*\
  !*** ./src/components/EditField/EditField.js ***!
  \***********************************************/
/*! exports provided: EDIT_FIELD_NAME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_FIELD_NAME", function() { return EDIT_FIELD_NAME; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_pencil_alt_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/pencil-alt-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/pencil-alt-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_pencil_alt_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_pencil_alt_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Form/FormGroup */ "./node_modules/@patternfly/react-core/dist/js/components/Form/FormGroup.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SourceEditForm_sourceEditContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SourceEditForm/sourceEditContext */ "./src/components/SourceEditForm/sourceEditContext.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-form-api.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8__);









var EDIT_FIELD_NAME = 'edit-field';

var EditField = function EditField(_ref) {
  var isRequired = _ref.isRequired,
      label = _ref.label,
      helperText = _ref.helperText,
      hideLabel = _ref.hideLabel,
      name = _ref.name,
      type = _ref.type,
      isEditable = _ref.isEditable;

  var _useFormApi = _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_8___default()(),
      getFieldState = _useFormApi.getFieldState,
      getState = _useFormApi.getState;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_SourceEditForm_sourceEditContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      setState = _useContext.setState;

  var _ref2 = getFieldState(name) || {
    value: lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(getState().initialValues, name)
  },
      error = _ref2.error,
      touched = _ref2.touched,
      value = _ref2.value;

  var showError = touched && error;
  var isPassword = type === 'password' || name.includes('password');
  var emptyText = isPassword ? 'Click to edit' : 'Click to add';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Form_FormGroup__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    isRequired: isRequired,
    label: !hideLabel && label,
    fieldId: name,
    isValid: !showError,
    helperText: helperText,
    helperTextInvalid: error,
    tabIndex: 0,
    onKeyPress: function onKeyPress(e) {
      if (e.charCode === 32 && isEditable) {
        e.preventDefault();
        setState({
          type: 'setEdit',
          name: name
        });
      }
    }
  }, isEditable && {
    onClick: function onClick() {
      return setState({
        type: 'setEdit',
        name: name
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "pf-c-form__horizontal-group ins-c-sources__edit-field-group ".concat(isEditable ? 'clickable' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], {
    className: "ins-c-sources__edit-field-group-text-content ".concat(isEditable ? 'clickable' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ins-c-sources__edit-field-value pf-u-mr-sm"
  }, value ? value : isEditable ? emptyText : ''), isEditable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_icons_dist_js_icons_pencil_alt_icon__WEBPACK_IMPORTED_MODULE_4___default.a, null))));
};

EditField.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  hideLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isEditable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (EditField);

/***/ }),

/***/ "./src/components/EditField/EditFieldWrapper.js":
/*!******************************************************!*\
  !*** ./src/components/EditField/EditFieldWrapper.js ***!
  \******************************************************/
/*! exports provided: NOT_CHANGING_COMPONENTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_CHANGING_COMPONENTS", function() { return NOT_CHANGING_COMPONENTS; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_renderer_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/renderer-context */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/renderer-context.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_renderer_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_renderer_context__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SourceEditForm_sourceEditContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SourceEditForm/sourceEditContext */ "./src/components/SourceEditForm/sourceEditContext.js");
/* harmony import */ var _EditField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EditField */ "./src/components/EditField/EditField.js");








var NOT_CHANGING_COMPONENTS = [_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_5___default.a.CHECKBOX, _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_5___default.a.SWITCH];

var EditFieldWrapper = function EditFieldWrapper(_ref) {
  var originalComponent = _ref.originalComponent,
      _ref$isEditable = _ref.isEditable,
      isEditable = _ref$isEditable === void 0 ? true : _ref$isEditable,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["originalComponent", "isEditable"]);

  var Component = _EditField__WEBPACK_IMPORTED_MODULE_7__["default"];
  var clearProps = {};

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_data_driven_forms_react_form_renderer_dist_cjs_renderer_context__WEBPACK_IMPORTED_MODULE_4___default.a),
      componentMapper = _useContext.componentMapper;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_SourceEditForm_sourceEditContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
      editing = _useContext2.editing;

  if (editing[props.name] || NOT_CHANGING_COMPONENTS.includes(originalComponent)) {
    Component = componentMapper[originalComponent];
  } else if (isEditable) {
    clearProps = {
      isEditable: true
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, clearProps));
};

EditFieldWrapper.propTypes = {
  originalComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  isEditable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (EditFieldWrapper);

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
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__);






var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    headingLevel: _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__["TitleLevel"].h1,
    size: "3xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "sources.editSource",
    defaultMessage: "Edit source"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "sources.editSourceDescription",
    defaultMessage: "You are editing a source."
  })));
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Spinner */ "./node_modules/@patternfly/react-core/dist/js/components/Spinner/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/form-template.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7__);
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
/* harmony import */ var _parser_RemoveAuth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./parser/RemoveAuth */ "./src/components/SourceEditForm/parser/RemoveAuth.js");





















var SourceEditModal = function SourceEditModal() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_17__["default"], _reducer__WEBPACK_IMPORTED_MODULE_17__["initialState"]),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useReducer, 2),
      state = _useReducer2[0],
      setState = _useReducer2[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var sourceRedux = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_15__["useSource"])();
  var isLoaded = Object(_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_16__["useIsLoaded"])();
  var loading = state.loading,
      editing = state.editing,
      source = state.source,
      initialValues = state.initialValues,
      schema = state.schema;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["useIntl"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (_ref) {
    var sources = _ref.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]),
      sourceTypes = _useSelector.sourceTypes,
      appTypes = _useSelector.appTypes,
      sourceTypesLoaded = _useSelector.sourceTypesLoaded,
      appTypesLoaded = _useSelector.appTypesLoaded;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (sourceRedux) {
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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (source && appTypesLoaded && sourceTypesLoaded) {
      var sourceType = sourceTypes.find(function (_ref2) {
        var id = _ref2.id;
        return id === source.source.source_type_id;
      });
      setState({
        type: 'createForm',
        sourceType: sourceType,
        source: source,
        appTypes: appTypes
      });
    }
  }, [appTypesLoaded, source, sourceTypesLoaded]);
  var isLoading = !appTypesLoaded || !sourceTypesLoaded || loading;

  var returnToSources = function returnToSources() {
    return history.push(_Routes__WEBPACK_IMPORTED_MODULE_14__["routes"].sources.path);
  };

  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
      title: intl.formatMessage({
        id: 'sources.editSource',
        defaultMessage: 'Edit source.'
      }),
      header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_11__["default"], null),
      isOpen: true,
      isLarge: true,
      onClose: returnToSources
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "ins-c-sources__dialog--spinnerContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_6__["Spinner"], null)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_sourceEditContext__WEBPACK_IMPORTED_MODULE_18__["default"].Provider, {
    value: {
      setState: setState,
      source: source,
      editing: editing
    }
  }, state.isAuthRemoving && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_parser_RemoveAuth__WEBPACK_IMPORTED_MODULE_19__["default"], state.isAuthRemoving), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    title: intl.formatMessage({
      id: 'sources.editSource',
      defaultMessage: 'Edit source.'
    }),
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_11__["default"], null),
    isOpen: !state.isAuthRemoving,
    isLarge: true,
    onClose: returnToSources
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onCancel: returnToSources,
    schema: schema,
    onSubmit: function onSubmit(values, formApi) {
      return Object(_onSubmit__WEBPACK_IMPORTED_MODULE_12__["onSubmit"])(values, formApi.getState().dirtyFields, dispatch, source, intl, history.push);
    },
    FormTemplate: function FormTemplate(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        formWrapperProps: {
          isHorizontal: true
        },
        canReset: true,
        disableSubmit: ['submitting'],
        submitLabel: intl.formatMessage({
          id: 'sources.save',
          defaultMessage: 'Save'
        })
      }));
    },
    clearedValue: null,
    onReset: function onReset() {
      return setState({
        type: 'reset'
      });
    },
    initialValues: initialValues
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SourceEditModal);

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
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SourcesTable_formatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SourcesTable/formatters */ "./src/components/SourcesTable/formatters.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var selectOnlyEditedValues = function selectOnlyEditedValues(values, editing) {
  var filteredValues = {};
  Object.keys(editing).filter(function (key) {
    return editing[key];
  }).forEach(function (key) {
    lodash_set__WEBPACK_IMPORTED_MODULE_3___default()(filteredValues, key, lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(values, key));
  });
  return filteredValues;
};
var prepareInitialValues = function prepareInitialValues(_ref, sourceTypeName) {
  var endpoints = _ref.endpoints,
      authentications = _ref.authentications,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["endpoints", "authentications"]);

  var auhenticationsFinal = {};

  if (authentications && authentications.length > 0) {
    authentications.forEach(function (auth) {
      auhenticationsFinal["a".concat(auth.id)] = auth;
    });
  }

  var endpoint;
  var url;

  if (endpoints && endpoints.length > 0) {
    endpoint = endpoints[0];
  }

  if (endpoint) {
    url = endpoint.scheme || endpoint.host || endpoint.path || endpoint.port ? Object(_SourcesTable_formatters__WEBPACK_IMPORTED_MODULE_4__["endpointToUrl"])(endpoint) : undefined;
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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/components/SourceEditForm/helpers.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/checkSourceStatus */ "./src/api/checkSourceStatus.js");




var onSubmit = function onSubmit(values, editing, dispatch, source, intl, push) {
  return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_1__["updateSource"])(source, Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["selectOnlyEditedValues"])(values, editing), intl.formatMessage({
    id: 'sources.modifiedNotificationTitle',
    defaultMessage: "\"{ name }\" was modified successfully."
  }, {
    name: source.source.name
  }), intl.formatMessage({
    id: 'sources.modifiedNotificationDescription',
    defaultMessage: 'The source was successfully modified.'
  }), {
    authentication: intl.formatMessage({
      id: 'sources.sourceEditAuthFailure',
      defaultMessage: 'Authentication update failure.'
    }),
    source: intl.formatMessage({
      id: 'sources.sourceEditFailure',
      defaultMessage: 'Source update failure.'
    }),
    endpoint: intl.formatMessage({
      id: 'sources.sourceEditEndpointFailure',
      defaultMessage: 'Endpoint update failure.'
    }),
    costManagement: intl.formatMessage({
      id: 'sources.sourceCostmanagementFailure',
      defaultMessage: 'Cost Management update failure.'
    })
  })).then(function () {
    Object(_api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_3__["checkSourceStatus"])(source.source.id);
    push(_Routes__WEBPACK_IMPORTED_MODULE_2__["routes"].sources.path);
    dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_1__["loadEntities"])());
  });
};

/***/ }),

/***/ "./src/components/SourceEditForm/parser/AuthenticationManagement.js":
/*!**************************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/AuthenticationManagement.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_trash_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/trash-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/trash-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_trash_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_trash_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sourceEditContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sourceEditContext */ "./src/components/SourceEditForm/sourceEditContext.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");











var AuthenticationManagement = function AuthenticationManagement(_ref) {
  var schemaAuth = _ref.schemaAuth,
      auth = _ref.auth,
      appTypes = _ref.appTypes,
      isDeleting = _ref.isDeleting;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_sourceEditContext__WEBPACK_IMPORTED_MODULE_8__["default"]),
      source = _useContext.source,
      setState = _useContext.setState;

  var attachedAppTypes = source.source.applications.filter(function (_ref2) {
    var authentications = _ref2.authentications;
    return authentications.find(function (_ref3) {
      var id = _ref3.id;
      return id === auth.id;
    });
  });
  var appNames = attachedAppTypes.map(function (_ref4) {
    var application_type_id = _ref4.application_type_id;
    return application_type_id ? appTypes.find(function (_ref5) {
      var id = _ref5.id;
      return id === application_type_id;
    }) : undefined;
  }).filter(Boolean).map(function (app) {
    return app.display_name;
  });

  var setAuthRemoving = function setAuthRemoving() {
    return setState({
      type: 'setAuthRemoving',
      removingAuth: {
        auth: auth,
        appNames: appNames,
        schemaAuth: schemaAuth
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    size: "xl"
  }, schemaAuth.name, "\xA0", !isDeleting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "plain",
    "aria-label": "Remove authentication",
    onClick: setAuthRemoving
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_icons_dist_js_icons_trash_icon__WEBPACK_IMPORTED_MODULE_7___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__["TextVariants"].small,
    className: "pf-u-mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
    id: "sources.removeAuthDescription",
    defaultMessage: "id: {authid} { appNames}",
    values: {
      authid: auth.id,
      appNames: appNames.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        id: "sources.removeAuthWithApps",
        defaultMessage: "used by {appNames}",
        values: {
          appNames: appNames.join(', ')
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
        id: "sources.removeAuthNoApps",
        defaultMessage: "not used by any app"
      })
    }
  }))));
};

AuthenticationManagement.propTypes = {
  isDeleting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  appTypes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  schemaAuth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  auth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AuthenticationManagement);

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
  var appNames = _ref.appNames,
      schemaAuth = _ref.schemaAuth,
      auth = _ref.auth;
  var hasAttachedApp = appNames.length > 0;
  var body;
  var actions;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_8__["useIntl"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_sourceEditContext__WEBPACK_IMPORTED_MODULE_10__["default"]),
      setState = _useContext.setState;

  var onClose = function onClose() {
    return setState({
      type: 'closeAuthRemoving'
    });
  };

  var onRemove = function onRemove() {
    setState({
      type: 'removeAuthPending',
      authId: auth.id
    });
    onClose();
    return Object(_api_entities__WEBPACK_IMPORTED_MODULE_12__["doDeleteAuthentication"])(auth.id).then(function () {
      setState({
        type: 'removeAuthFulfill',
        authId: auth.id
      });
      dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_11__["addMessage"])(intl.formatMessage({
        id: 'sources.authRemoveFullfil',
        defaultMessage: 'Authentication was deleted successfully.'
      }), 'success'));
    })["catch"](function (error) {
      setState({
        type: 'removeAuthRejected',
        authId: auth.id
      });
      dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_11__["addMessage"])(intl.formatMessage({
        id: 'sources.authRemoveRejected',
        defaultMessage: 'Authentication was not deleted successfully.'
      }), 'danger', Object(_redhat_cloud_services_frontend_components_sources_cjs_handleError__WEBPACK_IMPORTED_MODULE_13__["handleError"])(error)));
    });
  };

  if (hasAttachedApp) {
    body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: "sources.removeAuthWarningApps",
      defaultMessage: "To remove {authname} authentication you have to remove attached {count, plural, one {application} other {applications}}: { appNames }.",
      values: {
        appNames: appNames.join(', '),
        count: appNames.length,
        authname: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, schemaAuth.name)
      }
    });
    actions = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      id: "deleteCancel",
      key: "cancel",
      variant: "link",
      type: "button",
      onClick: onClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: "sources.close",
      defaultMessage: "Close"
    }))];
  } else {
    body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: "sources.removeAuthWarning",
      defaultMessage: "Do you really want to remove {auth} authentication?",
      values: {
        auth: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, schemaAuth.name)
      }
    });
    actions = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      id: "deleteSubmit",
      key: "submit",
      variant: "danger",
      type: "button",
      onClick: onRemove
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: "sources.deleteConfirm",
      defaultMessage: "Remove authentication"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      id: "deleteCancel",
      key: "cancel",
      variant: "link",
      type: "button",
      onClick: onClose
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: "sources.deleteCancel",
      defaultMessage: "Cancel"
    }))];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Modal__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    isOpen: true,
    className: "ins-c-sources__dialog--warning",
    isFooterLeftAligned: true,
    onClose: onClose,
    actions: actions,
    isSmall: true,
    title: intl.formatMessage({
      id: 'sources.deleteAuthTitle',
      defaultMessage: 'Remove authentication?'
    }),
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_6__["Title"], {
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
  }, body)));
};

RemoveAuth.propTypes = {
  appNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  schemaAuth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  auth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_2__["Bullseye"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    size: "lg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Bullseye__WEBPACK_IMPORTED_MODULE_2__["Bullseye"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__["TextVariants"].small,
    className: "pf-u-mt-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "sources.removingAuthMessage",
    defaultMessage: "This authentication is being removed..."
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (RemoveAuthPlaceholder);

/***/ }),

/***/ "./src/components/SourceEditForm/parser/application.js":
/*!*************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/application.js ***!
  \*************************************************************/
/*! exports provided: APP_NAMES, cmFieldsPrefixes, isCMField, getCMFields, getEnhancedCMField, appendClusterIdentifier, costManagementFields, applicationsFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAMES", function() { return APP_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cmFieldsPrefixes", function() { return cmFieldsPrefixes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCMField", function() { return isCMField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCMFields", function() { return getCMFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnhancedCMField", function() { return getEnhancedCMField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendClusterIdentifier", function() { return appendClusterIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "costManagementFields", function() { return costManagementFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationsFields", function() { return applicationsFields; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./src/components/SourceEditForm/parser/helpers.js");
/* harmony import */ var _EditField_EditField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../EditField/EditField */ "./src/components/EditField/EditField.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var APP_NAMES = {
  COST_MANAGAMENT: '/insights/platform/cost-management'
};
var cmFieldsPrefixes = ['billing_source', 'credentials'];
var isCMField = function isCMField(_ref) {
  var name = _ref.name;
  return cmFieldsPrefixes.some(function (prefix) {
    return name.startsWith(prefix);
  });
};
var getCMFields = function getCMFields(authentication) {
  return Object.keys(authentication).map(function (key) {
    return authentication[key].fields.filter(isCMField);
  }).flatMap(function (x) {
    return x;
  });
};
var getEnhancedCMField = function getEnhancedCMField(sourceType, name, authenticationsTypes) {
  var field = undefined;
  authenticationsTypes.forEach(function (type) {
    var apps = field ? {} : lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_6___default.a, [sourceType, 'authentication', type], {});
    Object.keys(apps).find(function (key) {
      var hasAppField = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_6___default.a, [sourceType, 'authentication', type, key, name], undefined);

      if (hasAppField) {
        field = hasAppField;
        return true;
      }
    });
  });
  return field ? field : {};
};
var appendClusterIdentifier = function appendClusterIdentifier(sourceType) {
  return sourceType.name === 'openshift' ? [{
    name: 'source.source_ref',
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
      id: "sources.clusterIdentifier",
      defaultMessage: "Cluster identifier"
    }),
    isRequired: true,
    validate: [{
      type: _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5___default.a.REQUIRED
    }],
    originalComponent: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4___default.a.TEXT_FIELD,
    component: _EditField_EditField__WEBPACK_IMPORTED_MODULE_9__["EDIT_FIELD_NAME"]
  }] : [];
};
var costManagementFields = function costManagementFields() {
  var applications = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var sourceType = arguments.length > 1 ? arguments[1] : undefined;
  var appTypes = arguments.length > 2 ? arguments[2] : undefined;
  var source = arguments.length > 3 ? arguments[3] : undefined;
  var costManagementApp = appTypes.find(function (_ref2) {
    var name = _ref2.name;
    return name === APP_NAMES.COST_MANAGAMENT;
  });

  if (!costManagementApp) {
    return undefined;
  }

  var hasCostManagement = applications.find(function (_ref3) {
    var application_type_id = _ref3.application_type_id;
    return application_type_id === costManagementApp.id;
  });

  if (!hasCostManagement) {
    return undefined;
  }

  var billingSourceFields = getCMFields(sourceType.schema.authentication);
  var authenticationsTypes = source.authentications ? source.authentications.map(function (_ref4) {
    var authtype = _ref4.authtype;
    return authtype;
  }) : [];
  var enhandcedFields = billingSourceFields.map(function (field) {
    return _objectSpread(_objectSpread({}, field), getEnhancedCMField(sourceType.name, field.name, authenticationsTypes));
  });
  return {
    component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4___default.a.SUB_FORM,
    title: costManagementApp.display_name,
    name: costManagementApp.display_name,
    fields: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["modifyFields"])(enhandcedFields)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(appendClusterIdentifier(sourceType)))
  };
};
var applicationsFields = function applicationsFields(applications, sourceType, appTypes, source) {
  return [costManagementFields(applications, sourceType, appTypes, source)];
};

/***/ }),

/***/ "./src/components/SourceEditForm/parser/authentication.js":
/*!****************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/authentication.js ***!
  \****************************************************************/
/*! exports provided: createAuthFieldName, getLastPartOfName, removeRequiredValidator, getEnhancedAuthField, getAdditionalAuthSteps, modifyAuthSchemas, authenticationFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAuthFieldName", function() { return createAuthFieldName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastPartOfName", function() { return getLastPartOfName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRequiredValidator", function() { return removeRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnhancedAuthField", function() { return getEnhancedAuthField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdditionalAuthSteps", function() { return getAdditionalAuthSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyAuthSchemas", function() { return modifyAuthSchemas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticationFields", function() { return authenticationFields; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _unsupportedAuthType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./unsupportedAuthType */ "./src/components/SourceEditForm/parser/unsupportedAuthType.js");
/* harmony import */ var _AuthenticationManagement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AuthenticationManagement */ "./src/components/SourceEditForm/parser/AuthenticationManagement.js");
/* harmony import */ var _RemoveAuthPlaceholder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RemoveAuthPlaceholder */ "./src/components/SourceEditForm/parser/RemoveAuthPlaceholder.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers */ "./src/components/SourceEditForm/parser/helpers.js");



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
    return validation.type !== _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_5___default.a.REQUIRED && validation.type !== 'required-validator';
  });
};
var getEnhancedAuthField = function getEnhancedAuthField(sourceType, authtype, name) {
  return lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_6___default.a, [sourceType, 'authentication', authtype, 'generic', name], {});
};
var getAdditionalAuthSteps = function getAdditionalAuthSteps(sourceType, authtype) {
  return lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_6___default.a, [sourceType, 'authentication', authtype, 'generic', 'includeStepKeyFields'], []);
};
var modifyAuthSchemas = function modifyAuthSchemas(fields, id) {
  return fields.map(function (field) {
    var editedName = field.name.startsWith('authentication') ? createAuthFieldName(field.name, id) : field.name;

    var finalField = _objectSpread(_objectSpread({}, field), {}, {
      name: editedName
    });

    var isPassword = getLastPartOfName(finalField.name) === 'password';

    if (isPassword) {
      finalField.helperText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "sources.passwordResetHelperText",
        defaultMessage: "Changing this resets your current { label }.",
        values: {
          label: finalField.label
        }
      });
      finalField.isRequired = false;
      finalField.validate = removeRequiredValidator(finalField.validate);
    }

    return finalField;
  });
};
var authenticationFields = function authenticationFields(authentications, sourceType, appTypes) {
  if (!authentications || authentications.length === 0 || !sourceType.schema || !sourceType.schema.authentication) {
    return [];
  }

  return authentications.map(function (_ref) {
    var isDeleting = _ref.isDeleting,
        auth = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["isDeleting"]);

    var schemaAuth = sourceType.schema.authentication.find(function (_ref2) {
      var type = _ref2.type;
      return type === auth.authtype;
    });

    if (!schemaAuth) {
      return Object(_unsupportedAuthType__WEBPACK_IMPORTED_MODULE_8__["unsupportedAuthTypeField"])(auth.authtype);
    }

    var additionalStepKeys = getAdditionalAuthSteps(sourceType.name, auth.authtype);
    var enhancedFields = schemaAuth.fields.filter(function (field) {
      return !field.stepKey || additionalStepKeys.includes(field.stepKey);
    }).map(function (field) {
      return _objectSpread(_objectSpread({}, field), getEnhancedAuthField(sourceType.name, auth.authtype, field.name));
    });
    return {
      component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4___default.a.SUB_FORM,
      name: schemaAuth.name,
      fields: [{
        component: 'description',
        name: "".concat(auth.id, "-authentication-management"),
        Content: _AuthenticationManagement__WEBPACK_IMPORTED_MODULE_9__["default"],
        schemaAuth: schemaAuth,
        appTypes: appTypes,
        auth: auth,
        isDeleting: isDeleting
      }, isDeleting ? {
        component: 'description',
        name: "".concat(auth.id, "-remove-spinner"),
        Content: _RemoveAuthPlaceholder__WEBPACK_IMPORTED_MODULE_10__["default"]
      } : Object(_helpers__WEBPACK_IMPORTED_MODULE_11__["modifyFields"])(modifyAuthSchemas(enhancedFields, auth.id))]
    };
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers */ "./src/components/SourceEditForm/parser/helpers.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var getEnhancedEndpointField = function getEnhancedEndpointField(sourceType, name) {
  return lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(_redhat_cloud_services_frontend_components_sources_cjs_hardcodedSchemas__WEBPACK_IMPORTED_MODULE_5___default.a, [sourceType, 'endpoint', name], {});
};
var endpointFields = function endpointFields(sourceType) {
  if (!sourceType.schema || !sourceType.schema.endpoint || sourceType.schema.endpoint.hidden) {
    return undefined;
  }

  var schemaAuth = sourceType.schema.endpoint;
  var enhancedFields = schemaAuth.fields.map(function (field) {
    return _objectSpread(_objectSpread({}, field), getEnhancedEndpointField(sourceType.name, field.name));
  });
  return {
    component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_4___default.a.SUB_FORM,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "sources.endpoint",
      defaultMessage: "Endpoint"
    }),
    name: 'endpoint',
    fields: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["modifyFields"])(enhancedFields)
  };
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_SourceAddSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/SourceAddSchema */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/SourceAddSchema.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_SourceAddSchema__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_SourceAddSchema__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EditField_EditField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../EditField/EditField */ "./src/components/EditField/EditField.js");






var genericInfo = function genericInfo(sourceId) {
  return [{
    name: 'source.name',
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "sources.sourceName",
      defaultMessage: "Source name"
    }),
    originalComponent: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_2___default.a.TEXT_FIELD,
    component: _EditField_EditField__WEBPACK_IMPORTED_MODULE_5__["EDIT_FIELD_NAME"],
    validate: [function (value) {
      return Object(_redhat_cloud_services_frontend_components_sources_cjs_SourceAddSchema__WEBPACK_IMPORTED_MODULE_3__["asyncValidatorDebounced"])(value, sourceId);
    }, {
      type: _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4___default.a.REQUIRED
    }],
    isRequired: true
  }, {
    name: 'source_type',
    label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "sources.sourceType",
      defaultMessage: "Source type"
    }),
    isReadOnly: true,
    component: _EditField_EditField__WEBPACK_IMPORTED_MODULE_5__["EDIT_FIELD_NAME"],
    isEditable: false
  }];
};

/***/ }),

/***/ "./src/components/SourceEditForm/parser/helpers.js":
/*!*********************************************************!*\
  !*** ./src/components/SourceEditForm/parser/helpers.js ***!
  \*********************************************************/
/*! exports provided: modifyFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifyFields", function() { return modifyFields; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EditField_EditField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../EditField/EditField */ "./src/components/EditField/EditField.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var modifyFields = function modifyFields(fields) {
  return fields.map(function (field) {
    return _objectSpread(_objectSpread({}, field), {}, {
      originalComponent: field.component,
      component: _EditField_EditField__WEBPACK_IMPORTED_MODULE_1__["EDIT_FIELD_NAME"]
    });
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
/* harmony import */ var _genericInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genericInfo */ "./src/components/SourceEditForm/parser/genericInfo.js");
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication */ "./src/components/SourceEditForm/parser/authentication.js");
/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./endpoint */ "./src/components/SourceEditForm/parser/endpoint.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application */ "./src/components/SourceEditForm/parser/application.js");





var parseSourceToSchema = function parseSourceToSchema(source, sourceType, appTypes) {
  return {
    fields: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_genericInfo__WEBPACK_IMPORTED_MODULE_1__["genericInfo"])(source.source.id)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_authentication__WEBPACK_IMPORTED_MODULE_2__["authenticationFields"])(source.authentications, sourceType, appTypes)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(_application__WEBPACK_IMPORTED_MODULE_4__["applicationsFields"])(source.applications, sourceType, appTypes, source)), [source.endpoints && source.endpoints.length > 0 ? Object(_endpoint__WEBPACK_IMPORTED_MODULE_3__["endpointFields"])(sourceType) : false]).filter(Boolean)
  };
};

/***/ }),

/***/ "./src/components/SourceEditForm/parser/unsupportedAuthType.js":
/*!*********************************************************************!*\
  !*** ./src/components/SourceEditForm/parser/unsupportedAuthType.js ***!
  \*********************************************************************/
/*! exports provided: unsupportedAuthTypeField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsupportedAuthTypeField", function() { return unsupportedAuthTypeField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_3__);




var unsupportedAuthTypeField = function unsupportedAuthTypeField(type) {
  return {
    component: 'description',
    name: "".concat(type, "-unsupported"),
    // eslint-disable-next-line react/display-name
    Content: function Content() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_3__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].p
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "sources.unsupportedAuthType",
        defaultMessage: "Authentication type of { type } is no longer supported.",
        values: {
          type: type
        }
      })));
    }
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
  editing: {},
  source: undefined,
  initialValues: {},
  sourceType: undefined,
  schema: undefined,
  isAuthRemoving: null
};

var reducer = function reducer(state, _ref) {
  var type = _ref.type,
      source = _ref.source,
      name = _ref.name,
      sourceType = _ref.sourceType,
      appTypes = _ref.appTypes,
      authId = _ref.authId,
      removingAuth = _ref.removingAuth;

  switch (type) {
    case 'createForm':
      return _objectSpread(_objectSpread({}, state), {}, {
        sourceType: sourceType,
        initialValues: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["prepareInitialValues"])(state.source, sourceType.product_name),
        schema: Object(_parser_parseSourceToSchema__WEBPACK_IMPORTED_MODULE_1__["parseSourceToSchema"])(state.source, sourceType, appTypes),
        loading: false
      });

    case 'setSource':
      return _objectSpread(_objectSpread({}, state), {}, {
        source: source
      });

    case 'reset':
      return _objectSpread(_objectSpread({}, state), {}, {
        editing: {}
      });

    case 'setEdit':
      return _objectSpread(_objectSpread({}, state), {}, {
        editing: _objectSpread(_objectSpread({}, state.editing), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, !state.editing[name]))
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

var sourceEditContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (sourceEditContext);

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
/* harmony import */ var _components_EditField_EditFieldWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/EditField/EditFieldWrapper */ "./src/components/EditField/EditFieldWrapper.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var SourcesFormRenderer = function SourcesFormRenderer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_data_driven_forms_react_form_renderer_dist_cjs_form_renderer__WEBPACK_IMPORTED_MODULE_3___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    FormTemplate: _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7___default.a,
    componentMapper: _objectSpread(_objectSpread(_objectSpread({}, _data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_8___default.a), _redhat_cloud_services_frontend_components_sources_cjs_sourceFormRenderer__WEBPACK_IMPORTED_MODULE_9__["mapperExtension"]), {}, {
      'edit-field': _components_EditField_EditFieldWrapper__WEBPACK_IMPORTED_MODULE_10__["default"],
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
//# sourceMappingURL=../sourcemaps/edit.js.map