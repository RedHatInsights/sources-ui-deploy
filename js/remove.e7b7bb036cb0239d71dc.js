(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["remove"],{

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Backdrop/Backdrop.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Backdrop/Backdrop.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Backdrop = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
const backdrop_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Backdrop/backdrop */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/components/Backdrop/backdrop.js"));
exports.Backdrop = (_a) => {
    var { children = null, className = '' } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({}, props, { className: react_styles_1.css(backdrop_1.default.backdrop, className) }), children));
};
exports.Backdrop.displayName = 'Backdrop';
//# sourceMappingURL=Backdrop.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextList.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Text/TextList.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TextList = exports.TextListVariants = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
var TextListVariants;
(function (TextListVariants) {
    TextListVariants["ul"] = "ul";
    TextListVariants["ol"] = "ol";
    TextListVariants["dl"] = "dl";
})(TextListVariants = exports.TextListVariants || (exports.TextListVariants = {}));
exports.TextList = (_a) => {
    var { children = null, className = '', component = TextListVariants.ul } = _a, props = tslib_1.__rest(_a, ["children", "className", "component"]);
    const Component = component;
    return (React.createElement(Component, Object.assign({}, props, { "data-pf-content": true, className: react_styles_1.css(className) }), children));
};
exports.TextList.displayName = 'TextList';
//# sourceMappingURL=TextList.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextListItem.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Text/TextListItem.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TextListItem = exports.TextListItemVariants = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
var TextListItemVariants;
(function (TextListItemVariants) {
    TextListItemVariants["li"] = "li";
    TextListItemVariants["dt"] = "dt";
    TextListItemVariants["dd"] = "dd";
})(TextListItemVariants = exports.TextListItemVariants || (exports.TextListItemVariants = {}));
exports.TextListItem = (_a) => {
    var { children = null, className = '', component = TextListItemVariants.li } = _a, props = tslib_1.__rest(_a, ["children", "className", "component"]);
    const Component = component;
    return (React.createElement(Component, Object.assign({}, props, { "data-pf-content": true, className: react_styles_1.css(className) }), children));
};
exports.TextListItem.displayName = 'TextListItem';
//# sourceMappingURL=TextListItem.js.map

/***/ }),

/***/ "./src/components/SourceRemoveModal/AppListInRemoval.js":
/*!**************************************************************!*\
  !*** ./src/components/SourceRemoveModal/AppListInRemoval.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextList */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextList.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextListItem */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextListItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers */ "./src/components/SourceRemoveModal/helpers.js");








var AppListInRemoval = function AppListInRemoval(_ref) {
  var applications = _ref.applications;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref2) {
    var sources = _ref2.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__["shallowEqual"]),
      appTypes = _useSelector.appTypes;

  if (applications.length === 1) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["Text"], {
      variant: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].p
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["idToName"])(applications[0].application_type_id, appTypes));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextList__WEBPACK_IMPORTED_MODULE_3__["TextList"], null, applications.map(function (_ref3) {
    var id = _ref3.id,
        application_type_id = _ref3.application_type_id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextListItem__WEBPACK_IMPORTED_MODULE_4__["TextListItem"], {
      key: id
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["idToName"])(application_type_id, appTypes));
  }));
};

AppListInRemoval.propTypes = {
  applications: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (AppListInRemoval);

/***/ }),

/***/ "./src/components/SourceRemoveModal/SourceRemoveModal.js":
/*!***************************************************************!*\
  !*** ./src/components/SourceRemoveModal/SourceRemoveModal.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Modal/Modal */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Checkbox/Checkbox */ "./node_modules/@patternfly/react-core/dist/js/components/Checkbox/Checkbox.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-triangle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers */ "./src/components/SourceRemoveModal/helpers.js");
/* harmony import */ var _AppListInRemoval__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AppListInRemoval */ "./src/components/SourceRemoveModal/AppListInRemoval.js");



















var SourceRemoveModal = function SourceRemoveModal(_ref) {
  var _sourceTypes$find;

  var backPath = _ref.backPath;

  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])(),
      push = _useHistory.push;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      acknowledge = _useState2[0],
      setAcknowledge = _useState2[1];

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["useIntl"])();
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_14__["useSource"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (_ref2) {
    var sources = _ref2.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]),
      sourceTypes = _useSelector.sourceTypes;

  var returnToSources = function returnToSources() {
    return push(backPath);
  };

  var onSubmit = function onSubmit() {
    push(_Routes__WEBPACK_IMPORTED_MODULE_15__["routes"].sources.path);
    dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_13__["removeSource"])(source.id, intl.formatMessage({
      id: 'sources.notificationDeleteMessage',
      defaultMessage: "{title} was deleted successfully."
    }, {
      title: source.name
    })));
  };

  var actions = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    id: "deleteSubmit",
    key: "submit",
    variant: "danger",
    type: "button",
    onClick: onSubmit,
    isDisabled: !acknowledge
  }, intl.formatMessage({
    id: 'sources.deleteConfirm',
    defaultMessage: 'Remove source and its data'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    id: "deleteCancel",
    key: "cancel",
    variant: "link",
    type: "button",
    onClick: returnToSources
  }, intl.formatMessage({
    id: 'sources.deleteCancel',
    defaultMessage: 'Cancel'
  }))];
  var sourceType = (_sourceTypes$find = sourceTypes.find(function (_ref3) {
    var id = _ref3.id;
    return id === source.source_type_id;
  })) === null || _sourceTypes$find === void 0 ? void 0 : _sourceTypes$find.name;
  var filteredApps = source.applications.filter(function (_ref4) {
    var isDeleting = _ref4.isDeleting;
    return !isDeleting;
  });
  var body = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_7__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__["TextVariants"].p
  }, filteredApps.length === 0 && Object(_helpers__WEBPACK_IMPORTED_MODULE_16__["bodyVariants"])('noApps', {
    name: source.name
  }), filteredApps.length > 0 && _helpers__WEBPACK_IMPORTED_MODULE_16__["typesWithExtendedText"].includes(sourceType) && Object(_helpers__WEBPACK_IMPORTED_MODULE_16__["bodyVariants"])('withApps', {
    name: source.name,
    count: filteredApps.length
  }), filteredApps.length > 0 && !_helpers__WEBPACK_IMPORTED_MODULE_16__["typesWithExtendedText"].includes(sourceType) && Object(_helpers__WEBPACK_IMPORTED_MODULE_16__["bodyVariants"])('withAppsExtendedText', {
    name: source.name,
    count: filteredApps.length
  })), filteredApps.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AppListInRemoval__WEBPACK_IMPORTED_MODULE_17__["default"], {
    applications: filteredApps
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], {
    label: intl.formatMessage({
      id: 'sources.deleteCheckboxTitle',
      defaultMessage: "I acknowledge that this action cannot be undone."
    }),
    onChange: function onChange() {
      return setAcknowledge(function (value) {
        return !value;
      });
    },
    "aria-label": intl.formatMessage({
      id: 'sources.deleteCheckboxTitle',
      defaultMessage: "I acknowledge that this action cannot be undone."
    }),
    id: "acknowledgeDelete",
    name: "acknowledgeDelete",
    isChecked: acknowledge
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    className: "ins-c-sources__dialog--warning",
    "aria-label": intl.formatMessage({
      id: 'sources.deleteTitle',
      defaultMessage: "Remove source?"
    }),
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_11__["Title"], {
      headingLevel: "h1",
      size: "2xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_12___default.a, {
      size: "sm",
      className: "ins-m-alert ins-c-source__delete-icon pf-u-mr-sm"
    }), intl.formatMessage({
      id: 'sources.deleteTitle',
      defaultMessage: "Remove source?"
    })),
    isOpen: true,
    variant: "small",
    onClose: returnToSources,
    actions: actions
  }, body);
};

SourceRemoveModal.propTypes = {
  backPath: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
SourceRemoveModal.defaultProps = {
  backPath: _Routes__WEBPACK_IMPORTED_MODULE_15__["routes"].sources.path
};
/* harmony default export */ __webpack_exports__["default"] = (SourceRemoveModal);

/***/ }),

/***/ "./src/components/SourceRemoveModal/helpers.js":
/*!*****************************************************!*\
  !*** ./src/components/SourceRemoveModal/helpers.js ***!
  \*****************************************************/
/*! exports provided: idToName, typesWithExtendedText, bodyVariants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idToName", function() { return idToName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typesWithExtendedText", function() { return typesWithExtendedText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bodyVariants", function() { return bodyVariants; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");



var idToName = function idToName(id, appTypes) {
  var _appTypes$find;

  return ((_appTypes$find = appTypes.find(function (app) {
    return app.id === id;
  })) === null || _appTypes$find === void 0 ? void 0 : _appTypes$find.display_name) || 'Unknown';
};
var typesWithExtendedText = [_utilities_constants__WEBPACK_IMPORTED_MODULE_2__["SATELLITE_NAME"], _utilities_constants__WEBPACK_IMPORTED_MODULE_2__["ANSIBLE_TOWER_NAME"]];
var bodyVariants = function bodyVariants(variant, _ref) {
  var name = _ref.name,
      count = _ref.count;
  return {
    noApps: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "sources.deleteTextBodyNoApps",
      defaultMessage: "Removing { name } will permanently delete all data collected.",
      values: {
        name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, name)
      }
    }),
    withApps: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "sources.deleteTextBodyWithApps",
      defaultMessage: "Removing { name } detaches the following\n        connected {count, plural, one {application} other {applications}} from this source:",
      values: {
        name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, name),
        count: count
      }
    }),
    withAppsExtendedText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "sources.deleteTextBodyWithAppsExtended",
      defaultMessage: "Removing { name } permanently deletes all collected data and detaches the following\n    connected {count, plural, one {application} other {applications}}:",
      values: {
        name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, name),
        count: count
      }
    })
  }[variant];
};

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/remove.js.map