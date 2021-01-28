(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["removeApplication"],{

/***/ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.ExclamationTriangleIconConfig = {
  name: 'ExclamationTriangleIcon',
  height: 512,
  width: 576,
  svgPath: 'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
  yOffset: 0,
  xOffset: 0,
};
exports.ExclamationTriangleIcon = __webpack_require__(/*! ../createIcon */ "./node_modules/@patternfly/react-icons/dist/js/createIcon.js").createIcon(exports.ExclamationTriangleIconConfig);
exports["default"] = exports.ExclamationTriangleIcon;

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Modal/Modal */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-triangle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _removeAppSubmit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./removeAppSubmit */ "./src/components/AddApplication/removeAppSubmit.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");














var RemoveAppModal = function RemoveAppModal() {
  var _source$applications;

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();

  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])(),
      push = _useHistory.push;

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      app_id = _useParams.app_id;

  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_10__["useSource"])();
  var appTypes = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (_ref) {
    var sources = _ref.sources;
    return sources.appTypes;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var application = (_source$applications = source.applications) === null || _source$applications === void 0 ? void 0 : _source$applications.find(function (_ref2) {
    var id = _ref2.id;
    return id === app_id;
  });

  if (!application) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: Object(_Routes__WEBPACK_IMPORTED_MODULE_12__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_12__["routes"].sourcesDetail.path, source.id)
    });
  }

  var appType = appTypes.find(function (_ref3) {
    var id = _ref3.id;
    return id === (application === null || application === void 0 ? void 0 : application.application_type_id);
  });
  var app = {
    id: app_id,
    display_name: appType === null || appType === void 0 ? void 0 : appType.display_name,
    dependent_applications: appType === null || appType === void 0 ? void 0 : appType.dependent_applications,
    sourceAppsNames: source.applications.map(function (_ref4) {
      var _appTypes$find;

      var application_type_id = _ref4.application_type_id;
      return (_appTypes$find = appTypes.find(function (_ref5) {
        var id = _ref5.id;
        return id === application_type_id;
      })) === null || _appTypes$find === void 0 ? void 0 : _appTypes$find.display_name;
    })
  };

  var onCancel = function onCancel() {
    return push(Object(_Routes__WEBPACK_IMPORTED_MODULE_12__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_12__["routes"].sourcesDetail.path, source.id));
  };

  var onSubmit = function onSubmit() {
    return Object(_removeAppSubmit__WEBPACK_IMPORTED_MODULE_11__["default"])(app, intl, onCancel, dispatch, source);
  };

  var dependentApps = appType === null || appType === void 0 ? void 0 : appType.dependent_applications.map(function (appName) {
    var _source$applications2;

    var appType = appTypes.find(function (_ref6) {
      var name = _ref6.name;
      return name === appName;
    });
    return (source === null || source === void 0 ? void 0 : (_source$applications2 = source.applications) === null || _source$applications2 === void 0 ? void 0 : _source$applications2.find(function (_ref7) {
      var application_type_id = _ref7.application_type_id;
      return application_type_id === appType.id;
    })) && (appType === null || appType === void 0 ? void 0 : appType.display_name);
  }).filter(Boolean);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
    className: "ins-c-sources__dialog--warning",
    isOpen: true,
    onClose: onCancel,
    variant: "small",
    "aria-label": intl.formatMessage({
      id: 'sources.deleteAppTitle',
      defaultMessage: 'Remove application?'
    }),
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__["Title"], {
      headingLevel: "h1",
      size: "2xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_9___default.a, {
      size: "sm",
      className: "ins-m-alert ins-c-source__delete-icon pf-u-mr-sm"
    }), intl.formatMessage({
      id: 'sources.deleteAppTitle',
      defaultMessage: 'Remove application?'
    })),
    actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      id: "deleteSubmit",
      key: "submit",
      variant: "danger",
      type: "button",
      onClick: onSubmit
    }, intl.formatMessage({
      id: 'sources.remove',
      defaultMessage: 'Remove'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      id: "deleteCancel",
      key: "cancel",
      variant: "link",
      type: "button",
      onClick: onCancel
    }, intl.formatMessage({
      id: 'sources.cancel',
      defaultMessage: 'Cancel'
    }))]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p
  }, intl.formatMessage({
    id: 'sources.deleteAppWarning',
    defaultMessage: '{ appName } will be disconnected from this source.'
  }, {
    appName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      key: "b"
    }, app.display_name)
  })), dependentApps.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p
  }, intl.formatMessage({
    id: 'sources.deleteAppDetails',
    defaultMessage: 'This change will affect these applications: { apps }.'
  }, {
    apps: dependentApps
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RemoveAppModal);

/***/ }),

/***/ "./src/components/AddApplication/removeAppSubmit.js":
/*!**********************************************************!*\
  !*** ./src/components/AddApplication/removeAppSubmit.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");


var removeAppSubmit = function removeAppSubmit(app, intl, onCancel, dispatch, source) {
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
  onCancel && onCancel();
  return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_0__["removeApplication"])(app.id, source.id, titleSuccess, titleError));
};

/* harmony default export */ __webpack_exports__["default"] = (removeAppSubmit);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/removeApplication.js.map