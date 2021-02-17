(self["webpackChunksources_ui"] = self["webpackChunksources_ui"] || []).push([["src_bootstrap-dev_js"],{

/***/ "./src/bootstrap-dev.js":
/*!******************************!*\
  !*** ./src/bootstrap-dev.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppEntry */ "./src/AppEntry.js");
/* harmony import */ var _utilities_getDevStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/getDevStore */ "./src/utilities/getDevStore.js");




var root = document.getElementById('root');
react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AppEntry__WEBPACK_IMPORTED_MODULE_2__.default, {
  store: (0,_utilities_getDevStore__WEBPACK_IMPORTED_MODULE_3__.getDevStore)()
}), root, function () {
  return root.setAttribute('data-ouia-safe', true);
});

/***/ }),

/***/ "./src/utilities/getDevStore.js":
/*!**************************************!*\
  !*** ./src/utilities/getDevStore.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDevStore": () => (/* binding */ getDevStore)
/* harmony export */ });
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_sources_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/sources/actionTypes */ "./src/redux/sources/actionTypes.js");
/* harmony import */ var _redux_user_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/user/actionTypes */ "./src/redux/user/actionTypes.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/utilities/store.js");
/* eslint-disable no-console */




var getDevStore = function getDevStore() {
  var store = (0,_store__WEBPACK_IMPORTED_MODULE_3__.getStore)([redux_logger__WEBPACK_IMPORTED_MODULE_0__.logger]);

  var removePermissions = function removePermissions() {
    store.dispatch({
      type: _redux_user_actionTypes__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_ORG_ADMIN_FULFILLED,
      payload: false
    });
    store.dispatch({
      type: _redux_user_actionTypes__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_WRITE_PERMISSIONS_FULFILLED,
      payload: false
    });
  };

  var setPermissions = function setPermissions() {
    store.dispatch({
      type: _redux_user_actionTypes__WEBPACK_IMPORTED_MODULE_2__.ACTION_TYPES.SET_ORG_ADMIN_FULFILLED,
      payload: true
    });
  };

  var setCount = function setCount(count) {
    return store.dispatch({
      type: _redux_sources_actionTypes__WEBPACK_IMPORTED_MODULE_1__.SET_COUNT,
      payload: {
        count: count
      }
    });
  };

  window.sourcesDebug = {};

  window.sourcesDebug.showEmptyState = function () {
    return setCount(0);
  };

  window.sourcesDebug.removePermissions = removePermissions;
  window.sourcesDebug.setCount = setCount;
  window.sourcesDebug.setPermissions = setPermissions;
  console.log('%cYou are using DEV version of Sources.', 'color: red; background: yellow');
  console.log('%cYou can call several functions from console:', 'color: red; background: yellow');
  console.log('%c  - sourcesDebug.showEmptyState', 'color: red; background: yellow');
  console.log('%c  - sourcesDebug.changeCount', 'color: red; background: yellow');
  console.log('%c  - sourcesDebug.removePermissions', 'color: red; background: yellow');
  console.log('%c  - sourcesDebug.setPermissions', 'color: red; background: yellow');
  return store;
};

/***/ })

}]);
//# sourceMappingURL=src_bootstrap-dev_js.250af0cb798e475075db.js.map