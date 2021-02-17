(self["webpackChunksources_ui"] = self["webpackChunksources_ui"] || []).push([["src_components_CustomRoute_CustomRoute_js"],{

/***/ "./src/components/CustomRoute/CustomRoute.js":
/*!***************************************************!*\
  !*** ./src/components/CustomRoute/CustomRoute.js ***!
  \***************************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _RedirectNoWriteAccess_RedirectNoWriteAccess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RedirectNoWriteAccess/RedirectNoWriteAccess */ "./src/components/RedirectNoWriteAccess/RedirectNoWriteAccess.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _RedirectNoId_RedirectNoId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RedirectNoId/RedirectNoId */ "./src/components/RedirectNoId/RedirectNoId.js");









var CustomRouteInternal = function CustomRouteInternal(_ref) {
  var route = _ref.route,
      children = _ref.children;
  var source = route.redirectNoId && (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_6__.useSource)();

  if (!source && route.redirectNoId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_RedirectNoId_RedirectNoId__WEBPACK_IMPORTED_MODULE_7__.default, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, route.writeAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_RedirectNoWriteAccess_RedirectNoWriteAccess__WEBPACK_IMPORTED_MODULE_5__.default, null), children);
};

CustomRouteInternal.propTypes = {
  route: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    path: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    redirectNoId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
    writeAccess: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
  }).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired)
};

var CustomRoute = function CustomRoute(_ref2) {
  var route = _ref2.route,
      componentProps = _ref2.componentProps,
      Component = _ref2.Component,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["route", "componentProps", "Component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    path: route.path
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(CustomRouteInternal, {
    route: route
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Component, componentProps)));
};

CustomRoute.propTypes = {
  route: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    path: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
    redirectNoId: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
    writeAccess: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
  }).isRequired,
  componentProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),
  Component: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)]).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomRoute);

/***/ }),

/***/ "./src/components/RedirectNoId/RedirectNoId.js":
/*!*****************************************************!*\
  !*** ./src/components/RedirectNoId/RedirectNoId.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _api_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/entities */ "./src/api/entities.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");











var RedirectNoId = function RedirectNoId() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
      id = _useParams.id;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.default)();
  var source = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_8__.useSource)();
  var loaded = (0,_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_6__.useIsLoaded)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (_ref) {
    var sources = _ref.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_2__.shallowEqual),
      appTypesLoaded = _useSelector.appTypesLoaded,
      sourceTypesLoaded = _useSelector.sourceTypesLoaded;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      applicationIsLoaded = _useState2[0],
      setIsApplicationLoaded = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (loaded && appTypesLoaded && sourceTypesLoaded) {
      (0,_api_entities__WEBPACK_IMPORTED_MODULE_5__.doLoadSource)(id).then(function (_ref2) {
        var _ref2$sources = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2.sources, 1),
            source = _ref2$sources[0];

        dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__.addHiddenSource)(source));
        return source;
      }).then(function (source) {
        if (!source) {
          dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__.addMessage)({
            title: intl.formatMessage({
              id: 'sources.sourceNotFoundTitle',
              defaultMessage: 'Requested source was not found'
            }),
            variant: 'danger',
            description: intl.formatMessage({
              id: 'sources.sourceNotFoundTitleDescription',
              defaultMessage: 'Source with { id } was not found. Try it again later.'
            }, {
              id: id
            })
          }));
        }

        setIsApplicationLoaded(true);
      });
    }
  }, [loaded, appTypesLoaded, sourceTypesLoaded]);

  if (applicationIsLoaded && !source) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
      to: _Routes__WEBPACK_IMPORTED_MODULE_7__.routes.sources.path
    });
  }

  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedirectNoId);

/***/ }),

/***/ "./src/components/RedirectNoWriteAccess/RedirectNoWriteAccess.js":
/*!***********************************************************************!*\
  !*** ./src/components/RedirectNoWriteAccess/RedirectNoWriteAccess.js ***!
  \***********************************************************************/
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");








var RedirectNoWriteAccess = function RedirectNoWriteAccess() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.default)();
  var writePermissions = (0,_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_4__.useHasWritePermissions)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (writePermissions === false) {
      var title = intl.formatMessage({
        id: 'sources.insufficietnPerms',
        defaultMessage: 'Insufficient permissions'
      });
      var description = intl.formatMessage({
        id: 'sources.notAdminButton',
        defaultMessage: 'To perform this action, you must be granted write permissions from your Organization Administrator.'
      });
      dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_3__.addMessage)({
        title: title,
        variant: 'danger',
        description: description
      }));
    }
  }, [writePermissions]);

  if (writePermissions === false) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
      to: _Routes__WEBPACK_IMPORTED_MODULE_5__.routes.sources.path
    });
  }

  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedirectNoWriteAccess);

/***/ }),

/***/ "./src/hooks/useHasWritePermissions.js":
/*!*********************************************!*\
  !*** ./src/hooks/useHasWritePermissions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHasWritePermissions": () => (/* binding */ useHasWritePermissions)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

var useHasWritePermissions = function useHasWritePermissions() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (_ref) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsLoaded": () => (/* binding */ useIsLoaded)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

var useIsLoaded = function useIsLoaded() {
  var isLoaded = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (_ref) {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSource": () => (/* binding */ useSource)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


var useSource = function useSource() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
      id = _useParams.id;

  var source = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function (_ref) {
    var sources = _ref.sources;
    return sources.entities.find(function (source) {
      return source.id === id;
    });
  });
  return source;
};

/***/ })

}]);
//# sourceMappingURL=src_components_CustomRoute_CustomRoute_js.968088ab3f8eee0a112c.js.map