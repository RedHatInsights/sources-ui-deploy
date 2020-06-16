(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sourcePage"],{

/***/ "./src/api/checkSourceStatus.js":
/*!**************************************!*\
  !*** ./src/api/checkSourceStatus.js ***!
  \**************************************/
/*! exports provided: checkSourceStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSourceStatus", function() { return checkSourceStatus; });
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities */ "./src/api/entities.js");

var checkSourceStatus = function checkSourceStatus(id) {
  return Object(_entities__WEBPACK_IMPORTED_MODULE_0__["getSourcesApi"])().checkAvailabilitySource(id)["catch"](function () {});
};

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
/* harmony import */ var _RedirectNotAdmin_RedirectNotAdmin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RedirectNotAdmin/RedirectNotAdmin */ "./src/components/RedirectNotAdmin/RedirectNotAdmin.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _RedirectNoId_RedirectNoId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RedirectNoId/RedirectNoId */ "./src/components/RedirectNoId/RedirectNoId.js");









var CustomRouteInternal = function CustomRouteInternal(_ref) {
  var route = _ref.route,
      children = _ref.children;
  var source = route.redirectNoId ? Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_6__["useSource"])() : undefined;

  if (!source && route.redirectNoId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_RedirectNoId_RedirectNoId__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, route.writeAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_RedirectNotAdmin_RedirectNotAdmin__WEBPACK_IMPORTED_MODULE_5__["default"], null), children);
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










var RedirectNoId = function RedirectNoId() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      id = _useParams.id;

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
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

        return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["addHiddenSource"])(source));
      }).then(function () {
        dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["addMessage"])(intl.formatMessage({
          id: 'sources.sourceNotFoundTitle',
          defaultMessage: 'Requested source was not found'
        }), 'danger', intl.formatMessage({
          id: 'sources.sourceNotFoundTitleDescription',
          defaultMessage: 'Source with { id } was not found. Try it again later.'
        }, {
          id: id
        })));
        setIsApplicationLoaded(true);
      });
    }
  }, [loaded, appTypesLoaded, sourceTypesLoaded]);

  if (applicationIsLoaded) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: _Routes__WEBPACK_IMPORTED_MODULE_8__["routes"].sources.path
    });
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (RedirectNoId);

/***/ }),

/***/ "./src/components/RedirectNotAdmin/RedirectNotAdmin.js":
/*!*************************************************************!*\
  !*** ./src/components/RedirectNotAdmin/RedirectNotAdmin.js ***!
  \*************************************************************/
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
/* harmony import */ var _hooks_useIsOrgAdmin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useIsOrgAdmin */ "./src/hooks/useIsOrgAdmin.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");








var RedirectNotAdmin = function RedirectNotAdmin() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["useIntl"])();
  var isOrgAdmin = Object(_hooks_useIsOrgAdmin__WEBPACK_IMPORTED_MODULE_5__["useIsOrgAdmin"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isOrgAdmin === false) {
      var title = intl.formatMessage({
        id: 'sources.insufficietnPerms',
        defaultMessage: 'Insufficient permissions'
      });
      var description = intl.formatMessage({
        id: 'sources.notAdminButton',
        defaultMessage: 'You do not have permission to perform this action.'
      });
      dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__["addMessage"])(title, 'danger', description));
    }
  }, []);

  if (isOrgAdmin === false) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: _Routes__WEBPACK_IMPORTED_MODULE_6__["routes"].sources.path
    });
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (RedirectNotAdmin);

/***/ }),

/***/ "./src/components/SourcesEmptyState.js":
/*!*********************************************!*\
  !*** ./src/components/SourcesEmptyState.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye/Bullseye */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_wrench_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/wrench-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/wrench-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_wrench_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_wrench_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Routes */ "./src/Routes.js");
/* harmony import */ var _hooks_useIsOrgAdmin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useIsOrgAdmin */ "./src/hooks/useIsOrgAdmin.js");














var SourcesEmptyState = function SourcesEmptyState(_ref) {
  var title = _ref.title,
      body = _ref.body;
  var isOrgAdmin = Object(_hooks_useIsOrgAdmin__WEBPACK_IMPORTED_MODULE_12__["useIsOrgAdmin"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_7__["Bullseye"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4__["EmptyState"], {
    className: "ins-c-sources__empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5__["EmptyStateIcon"], {
    icon: _patternfly_react_icons_dist_js_icons_wrench_icon__WEBPACK_IMPORTED_MODULE_9___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__["Title"], {
    headingLevel: "h5",
    size: "lg"
  }, title ? title : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "sources.emptyStateTitle",
    defaultMessage: "No sources"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__["EmptyStateBody"], null, body ? body : isOrgAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "sources.emptyStateBody",
    defaultMessage: "No sources have been defined. To start define a source."
  }), !isOrgAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "sources.emptyStateBodyNotAdmin",
    defaultMessage: "You do not have permission to define sources."
  }))), isOrgAdmin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], {
    to: _Routes__WEBPACK_IMPORTED_MODULE_11__["routes"].sourcesNew.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      marginTop: 'var(--pf-c-empty-state--c-button--MarginTop)'
    },
    variant: "primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "sources.emptyStateButton",
    defaultMessage: "Add source"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      marginTop: 'var(--pf-c-empty-state--c-button--MarginTop)'
    },
    variant: "primary",
    isDisabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "sources.emptyStateButton",
    defaultMessage: "Add source"
  }))));
};

SourcesEmptyState.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (SourcesEmptyState);

/***/ }),

/***/ "./src/components/SourcesTable/EmptyStateTable.js":
/*!********************************************************!*\
  !*** ./src/components/SourcesTable/EmptyStateTable.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye/Bullseye */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_search_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/search-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/search-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_search_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_search_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");












var EmptyStateTable = function EmptyStateTable() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_5__["Bullseye"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], {
    variant: _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__["EmptyStateVariant"].small
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__["EmptyStateIcon"], {
    icon: _patternfly_react_icons_dist_js_icons_search_icon__WEBPACK_IMPORTED_MODULE_7___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_6__["Title"], {
    headingLevel: "h2",
    size: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
    defaultMessage: "No sources found",
    id: "sources.noResultsFoundTitle"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__["EmptyStateBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
    defaultMessage: "No sources match the filter criteria. Remove all filters or clear all filters to show sources.",
    id: "sources.noResultsFoundDescription"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "link",
    onClick: function onClick() {
      return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_10__["clearFilters"])());
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
    defaultMessage: "Clear all filters",
    id: "sources.clearAllFilters"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyStateTable);

/***/ }),

/***/ "./src/components/SourcesTable/SourcesTable.js":
/*!*****************************************************!*\
  !*** ./src/components/SourcesTable/SourcesTable.js ***!
  \*****************************************************/
/*! exports provided: prepareColumnsCells, insertEditAction, actionResolver, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareColumnsCells", function() { return prepareColumnsCells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertEditAction", function() { return insertEditAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionResolver", function() { return actionResolver; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _formatters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formatters */ "./src/components/SourcesTable/formatters.js");
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loaders */ "./src/components/SourcesTable/loaders.js");
/* harmony import */ var _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../views/sourcesViewDefinition */ "./src/views/sourcesViewDefinition.js");
/* harmony import */ var _EmptyStateTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EmptyStateTable */ "./src/components/SourcesTable/EmptyStateTable.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _hooks_useIsOrgAdmin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/useIsOrgAdmin */ "./src/hooks/useIsOrgAdmin.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var itemToCells = function itemToCells(item, columns, sourceTypes, appTypes) {
  return columns.filter(function (column) {
    return column.title || column.hidden;
  }).map(function (col) {
    return {
      title: col.formatter ? Object(_formatters__WEBPACK_IMPORTED_MODULE_9__["formatters"])(col.formatter)(item[col.value], item, {
        sourceTypes: sourceTypes,
        appTypes: appTypes
      }) : item[col.value] || ''
    };
  });
};

var renderSources = function renderSources(entities, columns, sourceTypes, appTypes) {
  return entities.filter(function (_ref) {
    var hidden = _ref.hidden;
    return !hidden;
  }).reduce(function (acc, item) {
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(acc), [_objectSpread(_objectSpread({}, item), {}, {
      isOpen: !!item.expanded,
      cells: itemToCells(item, columns, sourceTypes, appTypes),
      disableActions: !!item.isDeleting
    })]);
  }, []);
};

var prepareColumnsCells = function prepareColumnsCells(columns) {
  return columns.filter(function (column) {
    return column.title || column.hidden;
  }).map(function (column) {
    return _objectSpread({
      title: column.title || '',
      value: column.value,
      hidden: column.hidden
    }, column.sortable && {
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"]]
    });
  });
};

var reducer = function reducer(state, payload) {
  return _objectSpread(_objectSpread({}, state), payload);
};

var initialState = function initialState(columns) {
  return {
    rows: [],
    sortBy: {},
    isLoaded: false,
    cells: prepareColumnsCells(columns)
  };
};

var insertEditAction = function insertEditAction(actions, intl, push, isOrgAdmin, disabledProps) {
  return actions.splice(1, 0, _objectSpread({
    title: intl.formatMessage({
      id: 'sources.edit',
      defaultMessage: 'Edit'
    }),
    onClick: function onClick(_ev, _i, _ref2) {
      var id = _ref2.id;
      return push(Object(_Routes__WEBPACK_IMPORTED_MODULE_15__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_15__["routes"].sourcesEdit.path, id));
    }
  }, !isOrgAdmin ? disabledProps : {
    component: 'button'
  }));
};
var actionResolver = function actionResolver(intl, push, isOrgAdmin) {
  return function (rowData) {
    var tooltip = intl.formatMessage({
      id: 'sources.notAdminButton',
      defaultMessage: 'You do not have permission to perform this action.'
    });
    var disabledProps = {
      tooltip: tooltip,
      isDisabled: true,
      className: 'ins-c-sources__disabled-drodpown-item'
    };
    var actions = [_objectSpread({
      title: intl.formatMessage({
        id: 'sources.manageApps',
        defaultMessage: 'Manage applications'
      }),
      onClick: function onClick(_ev, _i, _ref3) {
        var id = _ref3.id;
        return push(Object(_Routes__WEBPACK_IMPORTED_MODULE_15__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_15__["routes"].sourceManageApps.path, id));
      }
    }, !isOrgAdmin ? disabledProps : {
      component: 'button'
    }), _objectSpread({
      title: intl.formatMessage({
        id: 'sources.delete',
        defaultMessage: 'Delete'
      }),
      onClick: function onClick(_ev, _i, _ref4) {
        var id = _ref4.id;
        return push(Object(_Routes__WEBPACK_IMPORTED_MODULE_15__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_15__["routes"].sourcesRemove.path, id));
      }
    }, !isOrgAdmin ? disabledProps : {
      component: 'button'
    })];
    var isSourceEditable = !rowData.imported;

    if (isSourceEditable) {
      insertEditAction(actions, intl, push, isOrgAdmin, disabledProps);
    }

    return actions;
  };
};

var SourcesTable = function SourcesTable() {
  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])(),
      push = _useHistory.push;

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["useIntl"])();
  var loaded = Object(_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_13__["useIsLoaded"])();
  var isOrgAdmin = Object(_hooks_useIsOrgAdmin__WEBPACK_IMPORTED_MODULE_14__["useIsOrgAdmin"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (_ref5) {
    var sources = _ref5.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]),
      appTypes = _useSelector.appTypes,
      entities = _useSelector.entities,
      sourceTypes = _useSelector.sourceTypes,
      sourceTypesLoaded = _useSelector.sourceTypesLoaded,
      appTypesLoaded = _useSelector.appTypesLoaded,
      sortBy = _useSelector.sortBy,
      sortDirection = _useSelector.sortDirection,
      numberOfEntities = _useSelector.numberOfEntities;

  var reduxDispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var notSortable = numberOfEntities === 0 || !loaded;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, initialState(Object(_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_11__["sourcesColumns"])(intl, notSortable))),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var refreshColumns = function refreshColumns() {
    var columns = Object(_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_11__["sourcesColumns"])(intl, notSortable);
    return dispatch({
      cells: prepareColumnsCells(columns)
    });
  };

  var refreshSources = function refreshSources() {
    var columns = Object(_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_11__["sourcesColumns"])(intl, notSortable);
    return dispatch({
      rows: renderSources(entities, columns, sourceTypes, appTypes),
      cells: prepareColumnsCells(columns)
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (loaded && sourceTypesLoaded && appTypesLoaded) {
      dispatch({
        isLoaded: true
      });
      refreshSources();
    } else {
      dispatch({
        isLoaded: false
      });
      refreshColumns();
    }
  }, [loaded, sourceTypesLoaded, appTypesLoaded]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (state.isLoaded) {
      refreshSources();
    }
  }, [entities]);
  var shownRows = state.rows;

  if (numberOfEntities === 0 && state.isLoaded) {
    shownRows = [{
      heightAuto: true,
      cells: [{
        props: {
          colSpan: _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_11__["COLUMN_COUNT"]
        },
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_EmptyStateTable__WEBPACK_IMPORTED_MODULE_12__["default"], null)
      }]
    }];
  } else if (!loaded || !appTypesLoaded || !sourceTypesLoaded) {
    shownRows = [{
      heightAuto: true,
      cells: [{
        props: {
          colSpan: _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_11__["COLUMN_COUNT"],
          className: 'sources-placeholder-row'
        },
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_loaders__WEBPACK_IMPORTED_MODULE_10__["PlaceHolderTable"], null)
      }]
    }];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["Table"], {
    gridBreakPoint: "grid-lg",
    "aria-label": intl.formatMessage({
      id: 'sources.list',
      defaultMessage: 'List of Sources'
    }),
    onSort: function onSort(_event, key, direction) {
      return reduxDispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_8__["sortEntities"])(state.cells[key].value, direction));
    },
    sortBy: {
      index: state.cells.map(function (cell) {
        return cell.hidden ? 'hidden' : cell.value;
      }).indexOf(sortBy),
      direction: sortDirection
    },
    rows: shownRows,
    cells: state.cells,
    actionResolver: loaded && numberOfEntities > 0 ? actionResolver(intl, push, isOrgAdmin) : undefined,
    rowWrapper: _loaders__WEBPACK_IMPORTED_MODULE_10__["RowWrapperLoader"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["TableHeader"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["TableBody"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (SourcesTable);

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

/***/ "./src/hooks/useIsOrgAdmin.js":
/*!************************************!*\
  !*** ./src/hooks/useIsOrgAdmin.js ***!
  \************************************/
/*! exports provided: useIsOrgAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsOrgAdmin", function() { return useIsOrgAdmin; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var useIsOrgAdmin = function useIsOrgAdmin() {
  var isOrgAdmin = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (_ref) {
    var user = _ref.user;
    return user.isOrgAdmin;
  });
  return isOrgAdmin;
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

/***/ "./src/pages/Sources.js":
/*!******************************!*\
  !*** ./src/pages/Sources.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_cjs_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/components/cjs/PrimaryToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/components/cjs/PrimaryToolbar.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_cjs_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_components_cjs_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redhat_cloud_services_frontend_components_components_cjs_PageHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/components/cjs/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/components/cjs/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_cjs_PageHeader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_components_cjs_PageHeader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redhat_cloud_services_frontend_components_components_cjs_Section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/components/cjs/Section */ "./node_modules/@redhat-cloud-services/frontend-components/components/cjs/Section.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_components_cjs_Section__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_components_cjs_Section__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_SourcesTable_SourcesTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SourcesTable/SourcesTable */ "./src/components/SourcesTable/SourcesTable.js");
/* harmony import */ var _components_SourcesEmptyState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SourcesEmptyState */ "./src/components/SourcesEmptyState.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Routes */ "./src/Routes.js");
/* harmony import */ var _Sources_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Sources/helpers */ "./src/pages/Sources/helpers.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _hooks_useIsOrgAdmin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../hooks/useIsOrgAdmin */ "./src/hooks/useIsOrgAdmin.js");
/* harmony import */ var _components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/CustomRoute/CustomRoute */ "./src/components/CustomRoute/CustomRoute.js");
/* harmony import */ var _utilities_urlQuery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utilities/urlQuery */ "./src/utilities/urlQuery.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Tooltip/Tooltip */ "./node_modules/@patternfly/react-core/dist/js/components/Tooltip/Tooltip.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/SourcesTable/loaders */ "./src/components/SourcesTable/loaders.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var SourceEditModal = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/*! import() | edit */[__webpack_require__.e("vendors~addApp~addSource~edit~remove"), __webpack_require__.e("vendors~addApp~addSource~edit"), __webpack_require__.e("vendors~addSource~edit"), __webpack_require__.e("vendors~edit"), __webpack_require__.e("edit")]).then(__webpack_require__.bind(null, /*! ../components/SourceEditForm/SourceEditModal */ "./src/components/SourceEditForm/SourceEditModal.js"));
});
var SourceRemoveModal = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/*! import() | remove */[__webpack_require__.e("vendors~addApp~addSource~edit~remove"), __webpack_require__.e("remove")]).then(__webpack_require__.bind(null, /*! ../components/SourceRemoveModal/SourceRemoveModal */ "./src/components/SourceRemoveModal/SourceRemoveModal.js"));
});
var AddApplication = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/*! import() | addApp */[__webpack_require__.e("vendors~addApp~addSource~edit~remove"), __webpack_require__.e("vendors~addApp~addSource~edit"), __webpack_require__.e("vendors~addApp~addSource"), __webpack_require__.e("vendors~addApp"), __webpack_require__.e("addApp")]).then(__webpack_require__.bind(null, /*! ../components/AddApplication/AddApplication */ "./src/components/AddApplication/AddApplication.js"));
});
var AddSourceWizard = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/*! import() | addSource */[__webpack_require__.e("vendors~addApp~addSource~edit~remove"), __webpack_require__.e("vendors~addApp~addSource~edit"), __webpack_require__.e("vendors~addApp~addSource"), __webpack_require__.e("vendors~addSource~edit"), __webpack_require__.e("vendors~addSource")]).then(__webpack_require__.t.bind(null, /*! @redhat-cloud-services/frontend-components-sources/cjs/addSourceWizard */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/addSourceWizard.js", 7)).then(function (module) {
    return {
      "default": module.AddSourceWizard
    };
  });
});








var SourcesPage = function SourcesPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      showEmptyState = _useState2[0],
      setShowEmptyState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      checkEmptyState = _useState4[0],
      setCheckEmptyState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      filter = _useState6[0],
      setFilterValue = _useState6[1];

  var loaded = Object(_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_15__["useIsLoaded"])();
  var isOrgAdmin = Object(_hooks_useIsOrgAdmin__WEBPACK_IMPORTED_MODULE_16__["useIsOrgAdmin"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"])();
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["useIntl"])();
  var sources = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (_ref) {
    var sources = _ref.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_3__["shallowEqual"]);
  var filterValue = sources.filterValue,
      numberOfEntities = sources.numberOfEntities,
      appTypes = sources.appTypes,
      pageSize = sources.pageSize,
      pageNumber = sources.pageNumber,
      fetchingError = sources.fetchingError,
      sourceTypes = sources.sourceTypes,
      paginationClicked = sources.paginationClicked,
      appTypesLoaded = sources.appTypesLoaded,
      sourceTypesLoaded = sources.sourceTypesLoaded;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    Promise.all([dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["loadSourceTypes"])()), dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["loadAppTypes"])()), dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["loadEntities"])(Object(_utilities_urlQuery__WEBPACK_IMPORTED_MODULE_18__["parseQuery"])()))]).then(function () {
      return setCheckEmptyState(true);
    });
  }, []);
  var hasSomeFilter = Object.entries(filterValue).map(function (_ref2) {
    var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, 2),
        _key = _ref3[0],
        value = _ref3[1];

    return value;
  }).filter(Boolean).length > 0;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (checkEmptyState) {
      setShowEmptyState(loaded && numberOfEntities === 0 && !hasSomeFilter);
      Object(_utilities_urlQuery__WEBPACK_IMPORTED_MODULE_18__["updateQuery"])(sources);
    }
  }, [location, checkEmptyState]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (filter !== filterValue.name) {
      setFilterValue(filterValue.name);
    }
  }, [filterValue.name]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (checkEmptyState && loaded) {
      setShowEmptyState(numberOfEntities === 0 && !hasSomeFilter);
    }
  }, [loaded]);

  var onSetPage = function onSetPage(_e, page) {
    return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["pageAndSize"])(page, pageSize));
  };

  var onPerPageSelect = function onPerPageSelect(_e, perPage) {
    return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["pageAndSize"])(1, perPage));
  };

  var maximumPageNumber = Math.ceil(numberOfEntities / pageSize);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (loaded && numberOfEntities > 0 && pageNumber > Math.max(maximumPageNumber, 1)) {
      onSetPage({}, maximumPageNumber);
    }
  });
  var paginationConfig = {
    itemCount: numberOfEntities,
    page: pageNumber,
    perPage: pageSize,
    onSetPage: onSetPage,
    onPerPageSelect: onPerPageSelect
  };

  var paginationConfigBottom = _objectSpread(_objectSpread({}, paginationConfig), {}, {
    dropDirection: 'up',
    variant: 'bottom',
    isCompact: false
  });

  var showPaginationLoader = (!loaded || !appTypesLoaded || !sourceTypesLoaded) && !paginationClicked;

  var mainContent = function mainContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components_components_cjs_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_8__["PrimaryToolbar"], {
      pagination: showPaginationLoader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_20__["PaginationLoader"], null) : numberOfEntities > 0 ? paginationConfig : undefined,
      actionsConfig: isOrgAdmin ? {
        actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          to: _Routes__WEBPACK_IMPORTED_MODULE_13__["routes"].sourcesNew.path,
          key: "addSourceButton"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          variant: "primary",
          id: "addSourceButton"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          id: "sources.addSource",
          defaultMessage: "Add source"
        })))]
      } : {
        actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_19__["Tooltip"], {
          content: intl.formatMessage({
            id: 'sources.notAdminButton',
            defaultMessage: 'You do not have permission to perform this action.'
          }),
          key: "addSourceButton"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          tabIndex: "0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          variant: "primary",
          isDisabled: true,
          id: "addSourceButton"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
          id: "sources.addSource",
          defaultMessage: "Add source"
        }))))]
      },
      filterConfig: {
        items: [{
          label: intl.formatMessage({
            id: 'sources.name',
            defaultMessage: 'Name'
          }),
          filterValues: {
            'aria-label': intl.formatMessage({
              id: 'sources.filterByName',
              defaultMessage: 'Filter by name'
            }),
            onChange: function onChange(_event, value) {
              setFilterValue(value);
              Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_14__["debouncedFiltering"])(function () {
                return Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_14__["setFilter"])('name', value, dispatch);
              });
            },
            value: filter
          }
        }, {
          label: intl.formatMessage({
            id: 'sources.type',
            defaultMessage: 'Type'
          }),
          type: 'checkbox',
          filterValues: {
            onChange: function onChange(_event, value) {
              return Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_14__["setFilter"])('source_type_id', value, dispatch);
            },
            items: Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_14__["prepareSourceTypeSelection"])(sourceTypes || []),
            value: filterValue.source_type_id
          }
        }, {
          label: intl.formatMessage({
            id: 'sources.application',
            defaultMessage: 'Application'
          }),
          type: 'checkbox',
          filterValues: {
            onChange: function onChange(_event, value) {
              return Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_14__["setFilter"])('applications', value, dispatch);
            },
            items: Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_14__["prepareApplicationTypeSelection"])(appTypes || []),
            value: filterValue.applications
          }
        }]
      },
      activeFiltersConfig: {
        filters: Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_14__["prepareChips"])(filterValue, sourceTypes, appTypes),
        onDelete: function onDelete(_event, chips, deleteAll) {
          return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["filterSources"])(Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_14__["removeChips"])(chips, filterValue, deleteAll)));
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SourcesTable_SourcesTable__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components_components_cjs_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_8__["PrimaryToolbar"], {
      pagination: showPaginationLoader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_20__["PaginationLoader"], null) : numberOfEntities > 0 ? paginationConfigBottom : undefined
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Suspense"], {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_17__["default"], {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_13__["routes"].sourceManageApps,
    Component: AddApplication
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_17__["default"], {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_13__["routes"].sourcesRemove,
    Component: SourceRemoveModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_17__["default"], {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_13__["routes"].sourcesNew,
    Component: AddSourceWizard,
    componentProps: {
      sourceTypes: Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_14__["loadedTypes"])(sourceTypes, sourceTypesLoaded),
      applicationTypes: Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_14__["loadedTypes"])(appTypes, appTypesLoaded),
      isOpen: true,
      onClose: function onClose() {
        return history.push(_Routes__WEBPACK_IMPORTED_MODULE_13__["routes"].sources.path);
      },
      afterSuccess: function afterSuccess(source) {
        return Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_14__["afterSuccess"])(dispatch, source);
      },
      hideSourcesButton: true
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_17__["default"], {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_13__["routes"].sourcesEdit,
    Component: SourceEditModal
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components_components_cjs_PageHeader__WEBPACK_IMPORTED_MODULE_9__["PageHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components_components_cjs_PageHeader__WEBPACK_IMPORTED_MODULE_9__["PageHeaderTitle"], {
    title: intl.formatMessage({
      id: 'sources.sources',
      defaultMessage: 'Sources'
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components_components_cjs_Section__WEBPACK_IMPORTED_MODULE_10__["Section"], {
    type: "content"
  }, showEmptyState || fetchingError ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SourcesEmptyState__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: fetchingError ? fetchingError.title : undefined,
    body: fetchingError ? fetchingError.detail : undefined
  }) : mainContent()));
};

/* harmony default export */ __webpack_exports__["default"] = (SourcesPage);

/***/ }),

/***/ "./src/pages/Sources/helpers.js":
/*!**************************************!*\
  !*** ./src/pages/Sources/helpers.js ***!
  \**************************************/
/*! exports provided: debouncedFiltering, afterSuccessLoadParameters, afterSuccess, prepareSourceTypeSelection, prepareApplicationTypeSelection, setFilter, chipsFormatters, prepareChips, removeChips, loadedTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debouncedFiltering", function() { return debouncedFiltering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterSuccessLoadParameters", function() { return afterSuccessLoadParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterSuccess", function() { return afterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareSourceTypeSelection", function() { return prepareSourceTypeSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareApplicationTypeSelection", function() { return prepareApplicationTypeSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilter", function() { return setFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chipsFormatters", function() { return chipsFormatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareChips", function() { return prepareChips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChips", function() { return removeChips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadedTypes", function() { return loadedTypes; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/dist/index.es.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/checkSourceStatus */ "./src/api/checkSourceStatus.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var debouncedFiltering = Object(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_1__["default"])(function (refresh) {
  return refresh();
}, 500);
var afterSuccessLoadParameters = {
  pageNumber: 1,
  sortBy: 'created_at',
  sortDirection: 'desc'
};
var afterSuccess = function afterSuccess(dispatch, source) {
  Object(_api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_3__["checkSourceStatus"])(source.id);
  dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_2__["loadEntities"])(afterSuccessLoadParameters));
};
var prepareSourceTypeSelection = function prepareSourceTypeSelection(sourceTypes) {
  return sourceTypes.map(function (_ref) {
    var id = _ref.id,
        product_name = _ref.product_name;
    return {
      label: product_name,
      value: id
    };
  }).sort(function (a, b) {
    return a.label.localeCompare(b.label);
  });
};
var prepareApplicationTypeSelection = function prepareApplicationTypeSelection(appTypes) {
  return appTypes.map(function (_ref2) {
    var id = _ref2.id,
        display_name = _ref2.display_name;
    return {
      label: display_name,
      value: id
    };
  }).sort(function (a, b) {
    return a.label.localeCompare(b.label);
  });
};
var setFilter = function setFilter(column, value, dispatch) {
  return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_2__["filterSources"])(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, column, value)));
};
var chipsFormatters = function chipsFormatters(key, filterValue, sourceTypes, appTypes) {
  return {
    name: function name() {
      return {
        name: filterValue[key],
        key: key
      };
    },
    source_type_id: function source_type_id() {
      return {
        category: 'Source Type',
        key: key,
        chips: filterValue[key].map(function (id) {
          var sourceType = sourceTypes.find(function (type) {
            return type.id === id;
          });
          return {
            name: sourceType ? sourceType.product_name : id,
            value: id
          };
        })
      };
    },
    applications: function applications() {
      return {
        category: 'Application',
        key: key,
        chips: filterValue[key].map(function (id) {
          var appType = appTypes.find(function (type) {
            return type.id === id;
          });
          return {
            name: appType ? appType.display_name : id,
            value: id
          };
        })
      };
    }
  }[key] || function () {
    return {
      name: key
    };
  };
};
var prepareChips = function prepareChips(filterValue, sourceTypes, appTypes) {
  return Object.keys(filterValue).map(function (key) {
    return filterValue[key] && filterValue[key].length > 0 ? chipsFormatters(key, filterValue, sourceTypes, appTypes)() : undefined;
  }).filter(Boolean);
};
var removeChips = function removeChips(chips, filterValue, deleteAll) {
  if (deleteAll) {
    return Object.keys(filterValue).reduce(function (acc, curr) {
      return _objectSpread(_objectSpread({}, acc), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, curr, undefined));
    }, {});
  }

  var chip = chips[0];
  return _objectSpread(_objectSpread({}, filterValue), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, chip.key, chip.chips ? filterValue[chip.key].filter(function (value) {
    return value !== chip.chips[0].value;
  }) : undefined));
};
var loadedTypes = function loadedTypes(types, loaded) {
  return loaded && types.length > 0 ? types : undefined;
};

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/sourcePage.js.map