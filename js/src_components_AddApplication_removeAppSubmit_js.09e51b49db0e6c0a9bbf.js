(self["webpackChunksources_ui"] = self["webpackChunksources_ui"] || []).push([["src_components_AddApplication_removeAppSubmit_js"],{

/***/ "./src/components/AddApplication/removeAppSubmit.js":
/*!**********************************************************!*\
  !*** ./src/components/AddApplication/removeAppSubmit.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  return dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_0__.removeApplication)(app.id, source.id, titleSuccess, titleError));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeAppSubmit);

/***/ })

}]);
//# sourceMappingURL=src_components_AddApplication_removeAppSubmit_js.09e51b49db0e6c0a9bbf.js.map