(self["webpackChunksources_ui"] = self["webpackChunksources_ui"] || []).push([["removeApplication"],{

/***/ "./src/components/AddApplication/RemoveAppModal.js":
/*!*********************************************************!*\
  !*** ./src/components/AddApplication/RemoveAppModal.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Modal/Modal */ "./node_modules/@patternfly/react-core/dist/esm/components/Modal/Modal.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _removeAppSubmit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeAppSubmit */ "./src/components/AddApplication/removeAppSubmit.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");














var RemoveAppModal = function RemoveAppModal() {
  var _source$applications;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.default)();

  var _useHistory = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)(),
      push = _useHistory.push;

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),
      app_id = _useParams.app_id;

  var source = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_3__.useSource)();
  var appTypes = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (_ref) {
    var sources = _ref.sources;
    return sources.appTypes;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var application = (_source$applications = source.applications) === null || _source$applications === void 0 ? void 0 : _source$applications.find(function (_ref2) {
    var id = _ref2.id;
    return id === app_id;
  });

  if (!application) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
      to: (0,_Routes__WEBPACK_IMPORTED_MODULE_5__.replaceRouteId)(_Routes__WEBPACK_IMPORTED_MODULE_5__.routes.sourcesDetail.path, source.id)
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
    return push((0,_Routes__WEBPACK_IMPORTED_MODULE_5__.replaceRouteId)(_Routes__WEBPACK_IMPORTED_MODULE_5__.routes.sourcesDetail.path, source.id));
  };

  var onSubmit = function onSubmit() {
    return (0,_removeAppSubmit__WEBPACK_IMPORTED_MODULE_4__.default)(app, intl, onCancel, dispatch, source);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__.Modal, {
    className: "ins-c-sources__dialog--warning",
    isOpen: true,
    onClose: onCancel,
    variant: "small",
    "aria-label": intl.formatMessage({
      id: 'sources.deleteAppTitle',
      defaultMessage: 'Remove application?'
    }),
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__.Title, {
      headingLevel: "h1",
      size: "2xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_esm_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_9__.default, {
      size: "sm",
      className: "ins-m-alert ins-c-source__delete-icon pf-u-mr-sm"
    }), intl.formatMessage({
      id: 'sources.deleteAppTitle',
      defaultMessage: 'Remove application?'
    })),
    actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_10__.Button, {
      id: "deleteSubmit",
      key: "submit",
      variant: "danger",
      type: "button",
      onClick: onSubmit
    }, intl.formatMessage({
      id: 'sources.remove',
      defaultMessage: 'Remove'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_10__.Button, {
      id: "deleteCancel",
      key: "cancel",
      variant: "link",
      type: "button",
      onClick: onCancel
    }, intl.formatMessage({
      id: 'sources.cancel',
      defaultMessage: 'Cancel'
    }))]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_11__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_12__.Text, {
    component: _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_12__.TextVariants.p
  }, intl.formatMessage({
    id: 'sources.deleteAppWarning',
    defaultMessage: '{ appName } will be disconnected from this source.'
  }, {
    appName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
      key: "b"
    }, app.display_name)
  })), dependentApps.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_12__.Text, {
    component: _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_12__.TextVariants.p
  }, intl.formatMessage({
    id: 'sources.deleteAppDetails',
    defaultMessage: 'This change will affect these applications: { apps }.'
  }, {
    apps: dependentApps
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveAppModal);

/***/ })

}]);
//# sourceMappingURL=removeApplication.e0c17d419b0277ecbd5c.js.map