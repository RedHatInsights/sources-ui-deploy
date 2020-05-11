(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["remove"],{

/***/ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/Stack.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/layouts/Stack/Stack.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stack = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _stack = _interopRequireDefault(__webpack_require__(/*! @patternfly/react-styles/css/layouts/Stack/stack */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/layouts/Stack/stack.js"));

var _reactStyles = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");

var _gutters = __webpack_require__(/*! ../../styles/gutters */ "./node_modules/@patternfly/react-core/dist/js/styles/gutters.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Stack = function Stack(_ref) {
  var _ref$gutter = _ref.gutter,
      gutter = _ref$gutter === void 0 ? null : _ref$gutter,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'div' : _ref$component,
      props = _objectWithoutProperties(_ref, ["gutter", "className", "children", "component"]);

  var Component = component;
  return React.createElement(Component, _extends({}, props, {
    className: (0, _reactStyles.css)(_stack["default"].stack, gutter && (0, _gutters.getGutterModifier)(_stack["default"], gutter, _stack["default"].modifiers.gutter), className)
  }), children);
};

exports.Stack = Stack;
Stack.propTypes = {
  gutter: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['sm']), _propTypes["default"].oneOf(['md']), _propTypes["default"].oneOf(['lg']), _propTypes["default"].any]),
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  component: _propTypes["default"].node
};
//# sourceMappingURL=Stack.js.map

/***/ }),

/***/ "./src/components/AddApplication/RemoveAppModal.js":
/*!*********************************************************!*\
  !*** ./src/components/AddApplication/RemoveAppModal.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Split_Split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Split/Split */ "./node_modules/@patternfly/react-core/dist/js/layouts/Split/Split.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Split_Split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Split_Split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Split_SplitItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Split/SplitItem */ "./node_modules/@patternfly/react-core/dist/js/layouts/Split/SplitItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Split_SplitItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Split_SplitItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/Stack */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/Stack.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_Stack__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Stack_Stack__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Modal/Modal */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-triangle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");















var RemoveAppModal = function RemoveAppModal(_ref) {
  var app = _ref.app,
      onCancel = _ref.onCancel;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["useIntl"])();
  var appTypes = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref2) {
    var sources = _ref2.sources;
    return sources.appTypes;
  });
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_13__["useSource"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var dependentApps = app.dependent_applications.map(function (appName) {
    var appType = appTypes.find(function (_ref3) {
      var name = _ref3.name;
      return name === appName;
    });
    return appType ? app.sourceAppsNames.includes(appType.display_name) ? appType.display_name : undefined : undefined;
  }).filter(function (x) {
    return x;
  });

  var onSubmit = function onSubmit() {
    var titleSuccess = intl.formatMessage({
      id: 'sources.removeAppWarning',
      defaultMessage: "{ name } was removed from this source."
    }, {
      name: app.display_name
    });
    var titleError = intl.formatMessage({
      id: 'sources.removeAppError',
      defaultMessage: "Removing of { name } application from this source was unsuccessful."
    }, {
      name: app.display_name
    });
    onCancel();
    return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_12__["removeApplication"])(app.id, source.id, titleSuccess, titleError));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
    className: "ins-c-sources__dialog--warning",
    title: "Remove ".concat(app.display_name, " application"),
    isOpen: true,
    isSmall: true,
    onClose: onCancel,
    isFooterLeftAligned: true,
    actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      id: "deleteSubmit",
      key: "submit",
      variant: "danger",
      type: "button",
      onClick: onSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "sources.remove",
      defaultMessage: "Remove"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      id: "deleteCancel",
      key: "cancel",
      variant: "link",
      type: "button",
      onClick: onCancel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "sources.cancel",
      defaultMessage: "Cancel"
    }))]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Split_Split__WEBPACK_IMPORTED_MODULE_7__["Split"], {
    gutter: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Split_SplitItem__WEBPACK_IMPORTED_MODULE_8__["SplitItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
    size: "xl",
    className: "ins-m-alert ins-c-source__delete-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Split_SplitItem__WEBPACK_IMPORTED_MODULE_8__["SplitItem"], {
    isFilled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Stack_Stack__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
    gutter: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "sources.deleteAppWarning",
    defaultMessage: "Are you sure to remove { appName } from this source?",
    values: {
      appName: app.display_name
    }
  })), dependentApps.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "sources.deleteAppDetails",
    defaultMessage: "This change will affect these applications: { apps }.",
    values: {
      apps: dependentApps
    }
  })))))));
};

RemoveAppModal.propTypes = {
  app: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    display_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    dependent_applications: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
    sourceAppsNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
  }).isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RemoveAppModal);

/***/ }),

/***/ "./src/components/ApplicationsList/ApplicationList.js":
/*!************************************************************!*\
  !*** ./src/components/ApplicationsList/ApplicationList.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");











var ApplicationList = function ApplicationList(_ref) {
  var setApplicationToRemove = _ref.setApplicationToRemove,
      breakpoints = _ref.breakpoints,
      namePrefix = _ref.namePrefix;
  var appTypes = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref2) {
    var sources = _ref2.sources;
    return sources.appTypes;
  });
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_9__["useSource"])();
  var sourceAppsNames = source.applications.map(function (_ref3) {
    var application_type_id = _ref3.application_type_id;
    var appType = appTypes.find(function (_ref4) {
      var id = _ref4.id;
      return id === application_type_id;
    });
    return appType ? appType.display_name : undefined;
  });
  return source.applications.filter(function (app) {
    return !app.isDeleting;
  }).map(function (app) {
    var type = appTypes.find(function (appType) {
      return appType.id === app.application_type_id;
    });

    if (type) {
      return {
        display_name: type.display_name,
        id: app.id,
        dependent_applications: type.dependent_applications
      };
    }
  }).sort(function (a, b) {
    return a.display_name.localeCompare(b.display_name);
  }).map(function (_ref5) {
    var display_name = _ref5.display_name,
        id = _ref5.id,
        dependent_applications = _ref5.dependent_applications;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid__WEBPACK_IMPORTED_MODULE_7__["Grid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
      md: breakpoints.display_name || 4
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p,
      style: {
        marginBottom: 0
      }
    }, namePrefix, display_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
      md: breakpoints.remove || 8,
      className: "ins-c-sources__remove-app"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      variant: _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["ButtonVariant"].link,
      isInline: true,
      onClick: function onClick() {
        return setApplicationToRemove({
          id: id,
          display_name: display_name,
          dependent_applications: dependent_applications,
          sourceAppsNames: sourceAppsNames
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "sources.remove",
      defaultMessage: "Remove"
    })))));
  });
};

ApplicationList.propTypes = {
  setApplicationToRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  breakpoints: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    display_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    remove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),
  namePrefix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
ApplicationList.defaultProps = {
  breakpoints: {}
};
/* harmony default export */ __webpack_exports__["default"] = (ApplicationList);

/***/ }),

/***/ "./src/components/SourceRemoveModal.js":
/*!*********************************************!*\
  !*** ./src/components/SourceRemoveModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Split_Split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Split/Split */ "./node_modules/@patternfly/react-core/dist/js/layouts/Split/Split.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Split_Split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Split_Split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Split_SplitItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Split/SplitItem */ "./node_modules/@patternfly/react-core/dist/js/layouts/Split/SplitItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Split_SplitItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Split_SplitItem__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_Stack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/Stack */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/Stack.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_Stack__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Stack_Stack__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Modal/Modal */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Checkbox/Checkbox */ "./node_modules/@patternfly/react-core/dist/js/components/Checkbox/Checkbox.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextList */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextList.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextListItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextListItem */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextListItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextListItem__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextListItem__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-triangle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _ApplicationsList_ApplicationList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ApplicationsList/ApplicationList */ "./src/components/ApplicationsList/ApplicationList.js");
/* harmony import */ var _AddApplication_RemoveAppModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AddApplication/RemoveAppModal */ "./src/components/AddApplication/RemoveAppModal.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Routes */ "./src/Routes.js");






















var SourceRemoveModal = function SourceRemoveModal() {
  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(),
      push = _useHistory.push;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      acknowledge = _useState2[0],
      setAcknowledge = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      removingApp = _useState4[0],
      setApplicationToRemove = _useState4[1];

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_16__["useIntl"])();
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_19__["useSource"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var returnToSources = function returnToSources() {
    return push(_Routes__WEBPACK_IMPORTED_MODULE_20__["routes"].sources.path);
  };

  var onSubmit = function onSubmit() {
    returnToSources();
    dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_14__["removeSource"])(source.id, intl.formatMessage({
      id: 'sources.notificationDeleteMessage',
      defaultMessage: "{title} was deleted successfully."
    }, {
      title: source.name
    })));
  };

  var sourceHasActiveApp = source.applications.some(function (app) {
    return !app.isDeleting;
  });
  var actions = source.applications.length > 0 ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    id: "deleteCancel",
    key: "cancel",
    variant: "link",
    type: "button",
    onClick: returnToSources
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], {
    id: "sources.close",
    defaultMessage: "Close"
  }))] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    id: "deleteSubmit",
    key: "submit",
    variant: "danger",
    type: "button",
    onClick: onSubmit,
    isDisabled: !acknowledge
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], {
    id: "sources.deleteConfirm",
    defaultMessage: "Delete this source and its data"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    id: "deleteCancel",
    key: "cancel",
    variant: "link",
    type: "button",
    onClick: returnToSources
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], {
    id: "sources.deleteCancel",
    defaultMessage: "Do not delete this source"
  }))];
  var body = source.applications.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], {
    id: "sources.deleteTextBodyWithApp",
    defaultMessage: "This action cannot be enacted until all assigned applications have been removed from this source."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "link",
    isInline: true,
    onClick: function onClick(_ev) {
      return push(Object(_Routes__WEBPACK_IMPORTED_MODULE_20__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_20__["routes"].sourceManageApps.path, source.id));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p,
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], {
    id: "sources.connectedApps",
    defaultMessage: "Connected applications:"
  }))), sourceHasActiveApp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApplicationsList_ApplicationList__WEBPACK_IMPORTED_MODULE_17__["default"], {
    breakpoints: {
      display_name: 8,
      remove: 4
    },
    setApplicationToRemove: setApplicationToRemove,
    namePrefix: "- "
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], {
    id: "sources.connectedApps",
    defaultMessage: "Connected applications are being removed."
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], {
    id: "sources.deleteTextBody",
    defaultMessage: "Are you sure that you want to delete \"{ name }\"?",
    values: {
      name: source.name
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], {
    id: "sources.delete-text-body-2",
    defaultMessage: "Deleting this source will permanently delete:"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextList__WEBPACK_IMPORTED_MODULE_12__["TextList"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextListItem__WEBPACK_IMPORTED_MODULE_13__["TextListItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], {
    id: "sources.deleteTextBody3",
    defaultMessage: "All data collected"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextListItem__WEBPACK_IMPORTED_MODULE_13__["TextListItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_16__["FormattedMessage"], {
    id: "sources.deleteTextBody4",
    defaultMessage: "Any and all historical data"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_11__["Checkbox"], {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
    className: "ins-c-sources__dialog--warning",
    title: intl.formatMessage({
      id: 'sources.deleteTitle',
      defaultMessage: "Delete {title}"
    }, {
      title: source.name
    }),
    isOpen: true,
    isSmall: true,
    onClose: returnToSources,
    actions: actions,
    isFooterLeftAligned: true
  }, removingApp.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddApplication_RemoveAppModal__WEBPACK_IMPORTED_MODULE_18__["default"], {
    app: removingApp,
    onCancel: function onCancel() {
      return setApplicationToRemove({});
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_layouts_Split_Split__WEBPACK_IMPORTED_MODULE_7__["Split"], {
    gutter: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_layouts_Split_SplitItem__WEBPACK_IMPORTED_MODULE_8__["SplitItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_15___default.a, {
    size: "xl",
    className: "ins-m-alert ins-c-source__delete-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_layouts_Split_SplitItem__WEBPACK_IMPORTED_MODULE_8__["SplitItem"], {
    isFilled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_layouts_Stack_Stack__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
    gutter: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, body)))));
};

/* harmony default export */ __webpack_exports__["default"] = (SourceRemoveModal);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/remove.js.map