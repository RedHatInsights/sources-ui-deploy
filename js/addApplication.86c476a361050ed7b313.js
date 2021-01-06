(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addApplication"],{

/***/ "./src/api/doAttachApp.js":
/*!********************************!*\
  !*** ./src/api/doAttachApp.js ***!
  \********************************/
/*! exports provided: removeEmpty, doAttachApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEmpty", function() { return removeEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doAttachApp", function() { return doAttachApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var deep_object_diff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! deep-object-diff */ "./node_modules/deep-object-diff/dist/index.js");
/* harmony import */ var deep_object_diff__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(deep_object_diff__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_costManagementAuthentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/costManagementAuthentication */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/costManagementAuthentication.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_costManagementAuthentication__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_costManagementAuthentication__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_handleError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/handleError */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/handleError.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_handleError__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_handleError__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_getApplicationStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/getApplicationStatus */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/getApplicationStatus.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_getApplicationStatus__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_getApplicationStatus__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/constants */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/constants.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_constants__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_constants__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./entities */ "./src/api/entities.js");
/* harmony import */ var _doUpdateSource__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./doUpdateSource */ "./src/api/doUpdateSource.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










 // modification of https://stackoverflow.com/a/38340374

var removeEmpty = function removeEmpty(obj) {
  Object.keys(obj).forEach(function (key) {
    if (obj[key] && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5___default()(obj[key]) === 'object') {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(obj[key])) {
        delete obj[key];
      } else {
        removeEmpty(obj[key]);
      }
    } else if (typeof obj[key] === 'undefined') {
      delete obj[key];
    }
  });
  return obj;
};
var doAttachApp = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, formApi, authenticationInitialValues, initialValues) {
    var _allFormValues$authen;

    var appTypes,
        appId,
        formState,
        allFormValues,
        selectedAuthId,
        authInitialValues,
        authentication,
        valuesWithoutAuth,
        newAddedValues,
        updatedValues,
        newAddedAuthValues,
        updatedAuthValues,
        filteredValues,
        _allFormValues$source,
        _allFormValues$endpoi,
        _filteredValues$appli,
        _authenticationDataOu,
        startDate,
        sourceId,
        endpointId,
        promises,
        hasModifiedEndpoint,
        hasModifiedUrl,
        _urlOrHost,
        scheme,
        host,
        port,
        path,
        endPointPort,
        endpointData,
        createEndpointData,
        applicationData,
        _yield$Promise$all,
        _yield$Promise$all2,
        _sourceDataOut,
        endpointDataOut,
        applicationDataOut,
        authenticationDataOut,
        authenticationData,
        authenticationId,
        promisesSecondRound,
        authAppData,
        isAttachingCostManagement,
        credentials,
        billing_source,
        data,
        endpoint,
        timeout,
        app,
        errorMessage,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            appTypes = _args.length > 4 && _args[4] !== undefined ? _args[4] : [];
            formState = formApi.getState();
            allFormValues = formState.values;
            selectedAuthId = (_allFormValues$authen = allFormValues.authentication) === null || _allFormValues$authen === void 0 ? void 0 : _allFormValues$authen.id;
            authInitialValues = selectedAuthId && authenticationInitialValues.find(function (_ref2) {
              var id = _ref2.id;
              return id === selectedAuthId;
            });
            authentication = values.authentication, valuesWithoutAuth = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(values, ["authentication"]);
            newAddedValues = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_6__["addedDiff"])(initialValues, valuesWithoutAuth);
            updatedValues = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_6__["updatedDiff"])(initialValues, valuesWithoutAuth);
            newAddedAuthValues = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_6__["addedDiff"])(authInitialValues, authentication);
            updatedAuthValues = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_6__["updatedDiff"])(authInitialValues, authentication);
            filteredValues = removeEmpty(_objectSpread(_objectSpread({}, lodash_merge__WEBPACK_IMPORTED_MODULE_12___default()(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_13___default()(newAddedValues), updatedValues)), {}, {
              authentication: _objectSpread({}, lodash_merge__WEBPACK_IMPORTED_MODULE_12___default()(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_13___default()(newAddedAuthValues), updatedAuthValues))
            }));
            _context.prev = 11;

            if (allFormValues !== null && allFormValues !== void 0 && (_allFormValues$source = allFormValues.source) !== null && _allFormValues$source !== void 0 && _allFormValues$source.id) {
              _context.next = 14;
              break;
            }

            throw 'Missing source id';

          case 14:
            startDate = new Date();
            sourceId = allFormValues.source.id;
            endpointId = allFormValues === null || allFormValues === void 0 ? void 0 : (_allFormValues$endpoi = allFormValues.endpoint) === null || _allFormValues$endpoi === void 0 ? void 0 : _allFormValues$endpoi.id;
            promises = [];

            if (filteredValues.source && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(filteredValues.source)) {
              promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_14__["getSourcesApi"])().updateSource(sourceId, filteredValues.source));
            } else {
              promises.push(Promise.resolve(undefined));
            }

            hasModifiedEndpoint = filteredValues.endpoint && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(filteredValues.endpoint);
            hasModifiedUrl = filteredValues.url && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(filteredValues.url);

            if (hasModifiedEndpoint || hasModifiedUrl) {
              _urlOrHost = Object(_doUpdateSource__WEBPACK_IMPORTED_MODULE_15__["urlOrHost"])(filteredValues), scheme = _urlOrHost.scheme, host = _urlOrHost.host, port = _urlOrHost.port, path = _urlOrHost.path;
              endPointPort = parseInt(port, 10);
              endpointData = removeEmpty(_objectSpread(_objectSpread({}, filteredValues.endpoint), {}, {
                scheme: scheme,
                host: host,
                port: isNaN(endPointPort) ? undefined : endPointPort,
                path: path
              }));

              if (endpointId) {
                promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_14__["getSourcesApi"])().updateEndpoint(endpointId, endpointData));
              } else {
                createEndpointData = _objectSpread(_objectSpread({}, endpointData), {}, {
                  "default": true,
                  source_id: sourceId
                });
                promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_14__["getSourcesApi"])().createEndpoint(createEndpointData));
              }
            } else {
              promises.push(Promise.resolve(undefined));
            }

            if ((_filteredValues$appli = filteredValues.application) !== null && _filteredValues$appli !== void 0 && _filteredValues$appli.application_type_id) {
              applicationData = _objectSpread(_objectSpread({}, filteredValues.application), {}, {
                source_id: sourceId
              });
              promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_14__["doCreateApplication"])(applicationData));
            } else {
              promises.push(Promise.resolve(undefined));
            } // eslint-disable-next-line no-unused-vars


            _context.next = 25;
            return Promise.all(promises);

          case 25:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_yield$Promise$all, 3);
            _sourceDataOut = _yield$Promise$all2[0];
            endpointDataOut = _yield$Promise$all2[1];
            applicationDataOut = _yield$Promise$all2[2];

            if (!(filteredValues.authentication && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_11___default()(filteredValues.authentication))) {
              _context.next = 41;
              break;
            }

            if (!selectedAuthId) {
              _context.next = 37;
              break;
            }

            _context.next = 34;
            return Object(_entities__WEBPACK_IMPORTED_MODULE_14__["getSourcesApi"])().updateAuthentication(selectedAuthId, filteredValues.authentication);

          case 34:
            authenticationDataOut = _context.sent;
            _context.next = 41;
            break;

          case 37:
            authenticationData = _objectSpread(_objectSpread({}, filteredValues.authentication), {}, {
              resource_id: (endpointDataOut === null || endpointDataOut === void 0 ? void 0 : endpointDataOut.id) || (applicationDataOut === null || applicationDataOut === void 0 ? void 0 : applicationDataOut.id),
              resource_type: endpointDataOut !== null && endpointDataOut !== void 0 && endpointDataOut.id ? 'Endpoint' : 'Application',
              source_id: sourceId
            });
            _context.next = 40;
            return Object(_entities__WEBPACK_IMPORTED_MODULE_14__["getSourcesApi"])().createAuthentication(authenticationData);

          case 40:
            authenticationDataOut = _context.sent;

          case 41:
            appId = applicationDataOut === null || applicationDataOut === void 0 ? void 0 : applicationDataOut.id;
            authenticationId = selectedAuthId || ((_authenticationDataOu = authenticationDataOut) === null || _authenticationDataOu === void 0 ? void 0 : _authenticationDataOu.id);
            promisesSecondRound = [];

            if (applicationDataOut !== null && applicationDataOut !== void 0 && applicationDataOut.id && authenticationId) {
              authAppData = {
                application_id: applicationDataOut.id,
                authentication_id: authenticationId
              };
              promisesSecondRound.push(Object(_entities__WEBPACK_IMPORTED_MODULE_14__["getSourcesApi"])().createAuthApp(authAppData));
            }

            isAttachingCostManagement = filteredValues.credentials || filteredValues.billing_source;

            if (isAttachingCostManagement) {
              credentials = filteredValues.credentials, billing_source = filteredValues.billing_source;
              data = {};
              data = credentials ? {
                authentication: {
                  credentials: credentials
                }
              } : {};
              data = billing_source ? _objectSpread(_objectSpread({}, data), {}, {
                billing_source: billing_source
              }) : data;
              promisesSecondRound.push(Object(_redhat_cloud_services_frontend_components_sources_cjs_costManagementAuthentication__WEBPACK_IMPORTED_MODULE_7__["patchSource"])(_objectSpread({
                id: sourceId
              }, data)));
            }

            _context.next = 49;
            return Promise.all(promisesSecondRound);

          case 49:
            if (!endpointId) {
              _context.next = 53;
              break;
            }

            _context.next = 52;
            return Object(_redhat_cloud_services_frontend_components_sources_cjs_getApplicationStatus__WEBPACK_IMPORTED_MODULE_9__["checkAppAvailability"])(endpointId, undefined, undefined, 'getEndpoint', startDate);

          case 52:
            endpoint = _context.sent;

          case 53:
            if (!applicationDataOut) {
              _context.next = 59;
              break;
            }

            timeout = Object(_redhat_cloud_services_frontend_components_sources_cjs_constants__WEBPACK_IMPORTED_MODULE_10__["timeoutedApps"])(appTypes).includes(applicationDataOut.application_type_id) ? 10000 : 0;
            _context.next = 57;
            return Object(_redhat_cloud_services_frontend_components_sources_cjs_getApplicationStatus__WEBPACK_IMPORTED_MODULE_9__["checkAppAvailability"])(applicationDataOut.id, timeout);

          case 57:
            app = _context.sent;
            return _context.abrupt("return", _objectSpread({
              id: app.id,
              applications: [app]
            }, endpoint && {
              endpoint: [endpoint]
            }));

          case 59:
            return _context.abrupt("return", {});

          case 62:
            _context.prev = 62;
            _context.t0 = _context["catch"](11);
            // eslint-disable-next-line no-console
            console.error(_context.t0);

            if (!appId) {
              _context.next = 68;
              break;
            }

            _context.next = 68;
            return Object(_entities__WEBPACK_IMPORTED_MODULE_14__["getSourcesApi"])().deleteApplication(appId);

          case 68:
            _context.next = 70;
            return Object(_redhat_cloud_services_frontend_components_sources_cjs_handleError__WEBPACK_IMPORTED_MODULE_8__["handleError"])(_context.t0);

          case 70:
            errorMessage = _context.sent;
            throw errorMessage;

          case 72:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 62]]);
  }));

  return function doAttachApp(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/components/AddApplication/AddApplication.js":
/*!*********************************************************!*\
  !*** ./src/components/AddApplication/AddApplication.js ***!
  \*********************************************************/
/*! exports provided: onSubmit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSubmit", function() { return onSubmit; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_filterApps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/filterApps */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/filterApps.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_filterApps__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_filterApps__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_CloseModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/CloseModal */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/CloseModal.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_CloseModal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_CloseModal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_LoadingStep__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/LoadingStep */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/LoadingStep.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_LoadingStep__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_LoadingStep__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_ErroredStep__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/ErroredStep */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/ErroredStep.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_ErroredStep__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_ErroredStep__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_FinishedStep__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/FinishedStep */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/FinishedStep.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_FinishedStep__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_FinishedStep__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_TimeoutStep__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/TimeoutStep */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/TimeoutStep.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_TimeoutStep__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_TimeoutStep__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_computeSourceStatus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/computeSourceStatus */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/computeSourceStatus.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_computeSourceStatus__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_computeSourceStatus__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_AmazonFinishedStep__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/AmazonFinishedStep */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/AmazonFinishedStep.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_AmazonFinishedStep__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_AmazonFinishedStep__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/form-template.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utilities/SourcesFormRenderer */ "./src/utilities/SourcesFormRenderer.js");
/* harmony import */ var _AddApplicationSchema__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AddApplicationSchema */ "./src/components/AddApplication/AddApplicationSchema.js");
/* harmony import */ var _WizardBody__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./WizardBody */ "./src/components/AddApplication/WizardBody.js");
/* harmony import */ var _api_entities__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../api/entities */ "./src/api/entities.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../views/formatters */ "./src/views/formatters.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _api_doAttachApp__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../api/doAttachApp */ "./src/api/doAttachApp.js");
/* harmony import */ var _api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../api/checkSourceStatus */ "./src/api/checkSourceStatus.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./reducer */ "./src/components/AddApplication/reducer.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _removeAppSubmit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./removeAppSubmit */ "./src/components/AddApplication/removeAppSubmit.js");
/* harmony import */ var deep_object_diff__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! deep-object-diff */ "./node_modules/deep-object-diff/dist/index.js");
/* harmony import */ var deep_object_diff__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(deep_object_diff__WEBPACK_IMPORTED_MODULE_34__);



































var onSubmit = function onSubmit(values, formApi, authenticationInitialValues, dispatch, setState, initialValues, appTypes, setSelectedApp) {
  setState({
    type: 'submit',
    values: values,
    formApi: formApi
  });
  return Object(_api_doAttachApp__WEBPACK_IMPORTED_MODULE_28__["doAttachApp"])(values, formApi, authenticationInitialValues, initialValues, appTypes).then( /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(_api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_29__["checkSourceStatus"])(initialValues.source.id);
              _context.next = 3;
              return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_19__["loadEntities"])());

            case 3:
              setSelectedApp({
                values: {
                  application: null
                }
              });
              return _context.abrupt("return", setState({
                type: 'finish',
                data: data
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }())["catch"](function (error) {
    return setState({
      type: 'error',
      error: error
    });
  });
};

var FormTemplateWrapper = function FormTemplateWrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_18___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, props, {
    showFormControls: false
  }));
};

var AddApplication = function AddApplication() {
  var _state$data$applicati, _state$data$applicati2, _state$data$endpoint, _state$data$endpoint$;

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_8__["useIntl"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
  var selectedApp = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();

  var saveSelectedApp = function saveSelectedApp(_ref2) {
    var application = _ref2.values.application;
    return selectedApp.current = application;
  };

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useParams"])(),
      app_type_id = _useParams.app_type_id;

  var loaded = Object(_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_25__["useIsLoaded"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (_ref3) {
    var sources = _ref3.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_7__["shallowEqual"]),
      appTypes = _useSelector.appTypes,
      sourceTypesLoaded = _useSelector.sourceTypesLoaded,
      appTypesLoaded = _useSelector.appTypesLoaded,
      sourceTypes = _useSelector.sourceTypes;

  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_24__["useSource"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_30__["default"], _reducer__WEBPACK_IMPORTED_MODULE_30__["initialState"]),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useReducer, 2),
      state = _useReducer2[0],
      setState = _useReducer2[1];

  var container = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(document.createElement('div'));
  var applicationType = appTypes.find(function (_ref4) {
    var id = _ref4.id;
    return id === app_type_id;
  });

  var removeApp = function removeApp() {
    var _state$data, _appTypes$find;

    setState({
      type: 'reset'
    });
    return Object(_removeAppSubmit__WEBPACK_IMPORTED_MODULE_33__["default"])({
      id: (_state$data = state.data) === null || _state$data === void 0 ? void 0 : _state$data.id,
      display_name: (_appTypes$find = appTypes.find(function (_ref5) {
        var _state$data2;

        var id = _ref5.id;
        return id === ((_state$data2 = state.data) === null || _state$data2 === void 0 ? void 0 : _state$data2.application_type_id);
      })) === null || _appTypes$find === void 0 ? void 0 : _appTypes$find.display_name
    }, intl, undefined, dispatch, source);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (source) {
      // When app is only removed, there is no need to reload values
      var removeAppAction = state.sourceAppsLength >= source.applications.length && state.sourceAppsLength > 0;
      setState({
        type: 'setSourceAppslength',
        length: source.applications.length
      });

      if (!removeAppAction) {
        if (source.endpoints && source.endpoints[0]) {
          Object(_api_entities__WEBPACK_IMPORTED_MODULE_23__["getSourcesApi"])().listEndpointAuthentications(source.endpoints[0].id).then(function (_ref6) {
            var data = _ref6.data;
            return setState({
              type: 'loadAuthentications',
              authenticationsValues: data,
              initialValues: {
                source: source,
                endpoint: source.endpoints[0],
                url: Object(_views_formatters__WEBPACK_IMPORTED_MODULE_26__["endpointToUrl"])(source.endpoints[0]),
                application: selectedApp.current
              },
              values: {}
            });
          });
        } else {
          setState({
            type: 'loadWithoutAuthentications',
            initialValues: {
              source: source,
              application: selectedApp.current
            },
            values: {}
          });
        }
      }
    }
  }, [source]);

  var goToSources = function goToSources() {
    return history.push(Object(_Routes__WEBPACK_IMPORTED_MODULE_27__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_27__["routes"].sourcesDetail.path, source.id));
  };

  var title = intl.formatMessage({
    id: 'sources.addApplicationNameTitle',
    defaultMessage: 'Connect {appName}'
  }, {
    appName: (applicationType === null || applicationType === void 0 ? void 0 : applicationType.display_name) || 'application'
  });
  var description = intl.formatMessage({
    id: 'sources.addApplicationNameDescription',
    defaultMessage: 'Configure {appName} for this source.'
  }, {
    appName: (applicationType === null || applicationType === void 0 ? void 0 : applicationType.display_name) || 'application'
  });

  if ((!appTypesLoaded || !sourceTypesLoaded || !loaded || state.state === 'loading') && state.state !== 'submitting') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_WizardBody__WEBPACK_IMPORTED_MODULE_22__["default"], {
      goToSources: goToSources,
      title: title,
      description: description,
      step: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components_sources_cjs_LoadingStep__WEBPACK_IMPORTED_MODULE_12___default.a, {
        customText: intl.formatMessage({
          id: 'sources.loading',
          defaultMessage: 'Loading, please wait.'
        }),
        cancelTitle: intl.formatMessage({
          id: 'sources.close',
          defaultMessage: 'Close'
        }),
        onClose: goToSources
      })
    });
  }

  var onSubmitWrapper = function onSubmitWrapper(values, formApi) {
    return onSubmit(values, formApi, state.authenticationsValues, dispatch, setState, state.initialValues, appTypes, saveSelectedApp);
  };

  if (state.state === 'submitting') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_WizardBody__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: title,
      description: description,
      goToSources: goToSources,
      step: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components_sources_cjs_LoadingStep__WEBPACK_IMPORTED_MODULE_12___default.a, {
        cancelTitle: intl.formatMessage({
          id: 'sources.close',
          defaultMessage: 'Close'
        }),
        onClose: goToSources,
        customText: intl.formatMessage({
          id: 'wizard.loadingText',
          defaultMessage: 'Validating credentials'
        }),
        description: intl.formatMessage({
          id: 'wizard.loadingDescription',
          defaultMessage: 'This could take a minute. If you prefer not to wait, close this dialog and the process will continue.'
        })
      })
    });
  }

  var onReset = function onReset() {
    return setState({
      type: 'reset'
    });
  };

  var sourceType = sourceTypes.find(function (type) {
    return type.id === source.source_type_id;
  });

  if (state.state !== 'wizard') {
    var shownStep;

    if (state.state !== 'finished') {
      shownStep = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components_sources_cjs_ErroredStep__WEBPACK_IMPORTED_MODULE_13___default.a, {
        onRetry: onReset,
        onClose: goToSources,
        returnButtonTitle: intl.formatMessage({
          id: 'sources.retry',
          defaultMessage: 'Retry'
        }),
        primaryAction: function primaryAction() {
          return onSubmitWrapper(state.values, state.formApi);
        },
        secondaryActions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core_dist_js_components_Text__WEBPACK_IMPORTED_MODULE_32__["Text"], {
          component: "a",
          target: "_blank",
          href: "https://access.redhat.com/support/cases/#/case/new/open-case?caseCreate=true",
          rel: "noopener noreferrer"
        }, intl.formatMessage({
          id: 'wizard.openTicket',
          defaultMessage: 'Open a support case'
        }))
      });
    } else {
      switch (_redhat_cloud_services_frontend_components_sources_cjs_computeSourceStatus__WEBPACK_IMPORTED_MODULE_16___default()(state.data)) {
        default:
          if (sourceType.name === 'amazon') {
            shownStep = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components_sources_cjs_AmazonFinishedStep__WEBPACK_IMPORTED_MODULE_17___default.a, {
              onClose: goToSources
            });
          } else {
            shownStep = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components_sources_cjs_FinishedStep__WEBPACK_IMPORTED_MODULE_14___default.a, {
              title: intl.formatMessage({
                id: 'sources.configurationSuccessful',
                defaultMessage: 'Configuration successful'
              }),
              hideSourcesButton: true,
              onClose: goToSources,
              returnButtonTitle: intl.formatMessage({
                id: 'sources.exit',
                defaultMessage: 'Exit'
              }),
              successfulMessage: intl.formatMessage({
                id: 'sources.successAddApp',
                defaultMessage: 'Your application was successfully added.'
              })
            });
          }

          break;

        case 'unavailable':
          shownStep = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components_sources_cjs_ErroredStep__WEBPACK_IMPORTED_MODULE_13___default.a, {
            onRetry: onReset,
            onClose: goToSources,
            message: ((_state$data$applicati = state.data.applications) === null || _state$data$applicati === void 0 ? void 0 : (_state$data$applicati2 = _state$data$applicati[0]) === null || _state$data$applicati2 === void 0 ? void 0 : _state$data$applicati2.availability_status_error) || ((_state$data$endpoint = state.data.endpoint) === null || _state$data$endpoint === void 0 ? void 0 : (_state$data$endpoint$ = _state$data$endpoint[0]) === null || _state$data$endpoint$ === void 0 ? void 0 : _state$data$endpoint$.availability_status_error) || intl.formatMessage({
              id: 'wizard.unknownError',
              defaultMessage: 'Unknown error'
            }),
            title: intl.formatMessage({
              id: 'sources.configurationSuccessful',
              defaultMessage: 'Configuration unsuccessful'
            }),
            secondaryActions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_31__["Button"], {
              variant: "link",
              onClick: removeApp
            }, intl.formatMessage({
              id: 'wizard.removeApp',
              defaultMessage: 'Remove application'
            })),
            Component: function Component() {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
                to: Object(_Routes__WEBPACK_IMPORTED_MODULE_27__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_27__["routes"].sourcesDetail.path, source.id)
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_patternfly_react_core_dist_js_components_Button__WEBPACK_IMPORTED_MODULE_31__["Button"], {
                variant: "primary",
                className: "pf-u-mt-xl"
              }, intl.formatMessage({
                id: 'wizard.editSource',
                defaultMessage: 'Edit source'
              })));
            }
          });
          break;

        case 'timeout':
          shownStep = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components_sources_cjs_TimeoutStep__WEBPACK_IMPORTED_MODULE_15___default.a, {
            returnButtonTitle: intl.formatMessage({
              id: 'sources.exit',
              defaultMessage: 'Exit'
            }),
            onClose: goToSources
          });
          break;
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_WizardBody__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: title,
      description: description,
      goToSources: goToSources,
      step: shownStep
    });
  }

  var sourceTypeName = sourceType && sourceType.name;
  var filteredAppTypes = appTypes.filter(function (type) {
    return type.supported_source_types.includes(sourceTypeName);
  }).filter(_redhat_cloud_services_frontend_components_sources_cjs_filterApps__WEBPACK_IMPORTED_MODULE_10___default.a).map(function (type) {
    return {
      value: type.id,
      label: type.display_name
    };
  });

  if (!applicationType || source.applications.find(function (_ref7) {
    var application_type_id = _ref7.application_type_id;
    return application_type_id === app_type_id;
  }) || !applicationType.supported_source_types.includes(sourceType.name)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
      to: Object(_Routes__WEBPACK_IMPORTED_MODULE_27__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_27__["routes"].sourcesDetail.path, source.id)
    });
  }

  var schema = Object(_AddApplicationSchema__WEBPACK_IMPORTED_MODULE_21__["default"])(intl, sourceType, applicationType, state.authenticationsValues, source, container.current, title, description, appTypes);
  var hasAvailableApps = filteredAppTypes.length > 0;
  var onSubmitFinal = hasAvailableApps ? onSubmitWrapper : goToSources;

  var onStay = function onStay() {
    container.current.hidden = false;
    setState({
      type: 'toggleCancelling'
    });
  };

  var cancelBeforeExit = function cancelBeforeExit(values) {
    // eslint-disable-next-line no-unused-vars
    var _state$initialValues = state.initialValues,
        _a = _state$initialValues.application,
        initialValues = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_state$initialValues, ["application"]); // eslint-disable-next-line no-unused-vars


    var _a1 = values.application,
        newValues = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(values, ["application"]);

    var isChanged = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_34__["diff"])(initialValues, newValues));

    if (isChanged) {
      container.current.hidden = true;
      setState({
        type: 'toggleCancelling',
        values: values
      });
    } else {
      goToSources();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components_sources_cjs_CloseModal__WEBPACK_IMPORTED_MODULE_11___default.a, {
    title: intl.formatMessage({
      id: 'sources.manageAppsCloseModalTitle',
      defaultMessage: 'Exit application adding?'
    }),
    isOpen: state.isCancelling,
    onStay: onStay,
    onExit: goToSources
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_20__["default"], {
    schema: schema,
    showFormControls: false,
    onSubmit: onSubmitFinal,
    onCancel: cancelBeforeExit,
    initialValues: state.initialValues,
    subscription: {
      values: true
    },
    debug: saveSelectedApp,
    clearedValue: null,
    FormTemplate: FormTemplateWrapper
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AddApplication);

/***/ }),

/***/ "./src/components/AddApplication/AddApplicationSchema.js":
/*!***************************************************************!*\
  !*** ./src/components/AddApplication/AddApplicationSchema.js ***!
  \***************************************************************/
/*! exports provided: ApplicationSummary, hasAlreadySupportedAuthType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSummary", function() { return ApplicationSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAlreadySupportedAuthType", function() { return hasAlreadySupportedAuthType; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/schemaBuilder */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/schemaBuilder.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _schema_authenticationSelectionStep__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./schema/authenticationSelectionStep */ "./src/components/AddApplication/schema/authenticationSelectionStep.js");
/* harmony import */ var _schema_generateFirstAuthStep__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schema/generateFirstAuthStep */ "./src/components/AddApplication/schema/generateFirstAuthStep.js");
/* harmony import */ var _schema_selectAuthenticationStep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./schema/selectAuthenticationStep */ "./src/components/AddApplication/schema/selectAuthenticationStep.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var ApplicationSummary = function ApplicationSummary() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p
  }, intl.formatMessage({
    id: 'sources.reviewAddAppSummary',
    defaultMessage: 'Review the information below and click Add to add the application to your source. Use the Back button to make changes.'
  })));
};
var hasAlreadySupportedAuthType = function hasAlreadySupportedAuthType() {
  var authValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var appType = arguments.length > 1 ? arguments[1] : undefined;
  var sourceTypeName = arguments.length > 2 ? arguments[2] : undefined;
  return authValues.find(function (_ref) {
    var authtype = _ref.authtype;
    return authtype === lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(appType, "supported_authentication_types.".concat(sourceTypeName, "[0]"));
  });
};

var fields = function fields(intl, sourceType, appType, authenticationValues, source, container, title, description, applicationTypes) {
  var authenticationFields = [];
  var firstStep;
  var hasMultipleAuthTypes;
  var hasAlreadyType;

  if (!source.imported) {
    var _appType$supported_au;

    var appendEndpoint = sourceType.schema.endpoint.hidden ? sourceType.schema.endpoint.fields : [];
    var hasEndpointStep = appendEndpoint.length === 0;

    if (appType.supported_source_types.includes(sourceType.name)) {
      appType.supported_authentication_types[sourceType.name].forEach(function (authtype) {
        authenticationFields.push(Object(_schema_generateFirstAuthStep__WEBPACK_IMPORTED_MODULE_10__["default"])(sourceType, appType, appendEndpoint, authtype, intl));
      });
    }

    sourceType.schema.authentication.forEach(function (auth) {
      if (appType.supported_source_types.includes(sourceType.name)) {
        var appAdditionalSteps = _redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_7__["getAdditionalSteps"](sourceType.name, auth.type, appType.name);

        if (appAdditionalSteps.length > 0) {
          authenticationFields.push.apply(authenticationFields, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_7__["createAdditionalSteps"](appAdditionalSteps, sourceType.name, auth.type, hasEndpointStep, auth.fields, appType.name)));
        }
      }
    });

    if (hasEndpointStep) {
      authenticationFields.push(_redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_7__["createEndpointStep"](sourceType.schema.endpoint, sourceType.name));
    }

    firstStep = authenticationFields[0];
    hasMultipleAuthTypes = (appType === null || appType === void 0 ? void 0 : (_appType$supported_au = appType.supported_authentication_types[sourceType.name]) === null || _appType$supported_au === void 0 ? void 0 : _appType$supported_au.length) > 1;

    if (hasMultipleAuthTypes) {
      firstStep = Object(_schema_authenticationSelectionStep__WEBPACK_IMPORTED_MODULE_9__["default"])(sourceType, appType, intl, authenticationValues);
    }

    hasAlreadyType = hasAlreadySupportedAuthType(authenticationValues, appType, sourceType.name);

    if (hasAlreadyType) {
      firstStep = Object(_schema_selectAuthenticationStep__WEBPACK_IMPORTED_MODULE_11__["default"])({
        intl: intl,
        source: source,
        authenticationValues: authenticationValues,
        sourceType: sourceType,
        app: appType,
        applicationTypes: applicationTypes
      });
    }
  }

  var appTypeSetter = {
    component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_3___default.a.TEXT_FIELD,
    name: 'application.application_type_id',
    hideField: true,
    initialValue: appType.id
  };
  return {
    fields: [{
      component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_3___default.a.WIZARD,
      name: 'wizard',
      title: title,
      inModal: true,
      container: container,
      showTitles: true,
      crossroads: ['selectedAuthentication', 'authtype'],
      description: description,
      buttonLabels: {
        submit: intl.formatMessage({
          id: 'sources.add',
          defaultMessage: 'Add'
        }),
        cancel: intl.formatMessage({
          id: 'sources.cancel',
          defaultMessage: 'Cancel'
        }),
        back: intl.formatMessage({
          id: 'sources.back',
          defaultMessage: 'Back'
        })
      },
      fields: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(source.imported ? [] : [_objectSpread(_objectSpread({}, firstStep), {}, {
        fields: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(firstStep.fields), [appTypeSetter])
      })]), [{
        title: intl.formatMessage({
          id: 'sources.reviewDetails',
          defaultMessage: 'Review details'
        }),
        name: 'summary',
        fields: [{
          component: 'description',
          name: 'description-summary',
          Content: ApplicationSummary
        }, {
          component: 'summary',
          name: 'summary',
          sourceTypes: [sourceType],
          applicationTypes: [appType]
        }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(source.imported ? [appTypeSetter] : []))
      }], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(hasAlreadyType || hasMultipleAuthTypes ? authenticationFields : authenticationFields.splice(1)))
    }]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (fields);

/***/ }),

/***/ "./src/components/AddApplication/AuthTypeSetter.js":
/*!*********************************************************!*\
  !*** ./src/components/AddApplication/AuthTypeSetter.js ***!
  \*********************************************************/
/*! exports provided: innerSetter, AuthTypeSetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerSetter", function() { return innerSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTypeSetter", function() { return AuthTypeSetter; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-form-api.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_3__);




var innerSetter = function innerSetter(_ref) {
  var formOptions = _ref.formOptions,
      authenticationValues = _ref.authenticationValues,
      selectedAuthentication = _ref.selectedAuthentication;

  if (!selectedAuthentication.startsWith('new-')) {
    var authentication = authenticationValues.find(function (_ref2) {
      var id = _ref2.id;
      return id === selectedAuthentication;
    });
    formOptions.change('authentication', authentication);
  } else {
    var authtype = selectedAuthentication.replace('new-', '');
    formOptions.change('authentication', {
      authtype: authtype
    });
  }
};
var AuthTypeSetter = function AuthTypeSetter(_ref3) {
  var authenticationValues = _ref3.authenticationValues;
  var formOptions = _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_3___default()();
  var selectedAuthentication = formOptions.getState().values.selectedAuthentication;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(selectedAuthentication),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      initialValue = _useState2[0],
      setInitialValue = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (initialValue !== selectedAuthentication) {
      innerSetter({
        formOptions: formOptions,
        authenticationValues: authenticationValues,
        selectedAuthentication: selectedAuthentication
      });
      setInitialValue(undefined);
    }
  }, [selectedAuthentication]);
  return null;
};
AuthTypeSetter.propTypes = {
  authenticationValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
};

/***/ }),

/***/ "./src/components/AddApplication/WizardBody.js":
/*!*****************************************************!*\
  !*** ./src/components/AddApplication/WizardBody.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Wizard_Wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Wizard/Wizard */ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/Wizard.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Wizard_Wizard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Wizard_Wizard__WEBPACK_IMPORTED_MODULE_2__);




var WizardBodyAttach = function WizardBodyAttach(_ref) {
  var step = _ref.step,
      goToSources = _ref.goToSources,
      title = _ref.title,
      description = _ref.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Wizard_Wizard__WEBPACK_IMPORTED_MODULE_2__["Wizard"], {
    isOpen: true,
    onClose: goToSources,
    title: title,
    description: description,
    steps: [{
      name: 'Finish',
      component: step,
      isFinishedStep: true
    }]
  });
};

WizardBodyAttach.propTypes = {
  step: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].node.isRequired,
  goToSources: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].string
};
/* harmony default export */ __webpack_exports__["default"] = (WizardBodyAttach);

/***/ }),

/***/ "./src/components/AddApplication/reducer.js":
/*!**************************************************!*\
  !*** ./src/components/AddApplication/reducer.js ***!
  \**************************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  state: 'loading',
  error: '',
  values: {},
  authenticationsValues: [],
  sourceAppsLength: 0,
  initialValues: {},
  isCancelling: false
};

var reducer = function reducer(state, _ref) {
  var type = _ref.type,
      length = _ref.length,
      authenticationsValues = _ref.authenticationsValues,
      initialValues = _ref.initialValues,
      error = _ref.error,
      values = _ref.values,
      data = _ref.data,
      formApi = _ref.formApi;

  switch (type) {
    case 'setSourceAppslength':
      return _objectSpread(_objectSpread({}, state), {}, {
        sourceAppsLength: length
      });

    case 'loadAuthentications':
      return _objectSpread(_objectSpread({}, state), {}, {
        authenticationsValues: authenticationsValues,
        initialValues: initialValues,
        values: {},
        state: state.state === 'loading' ? 'wizard' : state.state
      });

    case 'loadWithoutAuthentications':
      return _objectSpread(_objectSpread({}, state), {}, {
        initialValues: initialValues,
        values: {},
        state: state.state === 'loading' ? 'wizard' : state.state
      });

    case 'reset':
      return _objectSpread(_objectSpread({}, state), {}, {
        state: 'wizard'
      });

    case 'submit':
      return _objectSpread(_objectSpread({}, state), {}, {
        values: values,
        formApi: formApi,
        state: 'submitting'
      });

    case 'finish':
      return _objectSpread(_objectSpread({}, state), {}, {
        state: 'finished',
        data: data
      });

    case 'error':
      return _objectSpread(_objectSpread({}, state), {}, {
        state: 'errored',
        error: error
      });

    case 'toggleCancelling':
      return _objectSpread(_objectSpread({}, state), {}, {
        isCancelling: !state.isCancelling
      }, values && {
        values: values
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/***/ }),

/***/ "./src/components/AddApplication/schema/authenticationSelectionStep.js":
/*!*****************************************************************************!*\
  !*** ./src/components/AddApplication/schema/authenticationSelectionStep.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_1__);



var authenticationSelectionStep = function authenticationSelectionStep(sourceType, appType, intl, authenticationValues) {
  var nextStep = function nextStep(_ref) {
    var _ref$values = _ref.values,
        application = _ref$values.application,
        authtype = _ref$values.authtype;

    if (authtype) {
      var hasSupportedAuthType = authenticationValues.find(function (auth) {
        return auth.authtype === authtype;
      });

      if (hasSupportedAuthType) {
        return 'selectAuthentication';
      }

      return "".concat(sourceType.name, "-").concat(application && application.application_type_id, "-").concat(authtype);
    }
  };

  return {
    name: "selectAuthType-".concat(appType.id),
    title: intl.formatMessage({
      id: 'sources.selectAuthenticationTitle',
      defaultMessage: 'Select authentication type'
    }),
    fields: [{
      component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_0___default.a.RADIO,
      name: 'authtype',
      options: appType.supported_authentication_types[sourceType.name].map(function (type) {
        var _sourceType$schema$au;

        return {
          value: type,
          label: ((_sourceType$schema$au = sourceType.schema.authentication.find(function (authtype) {
            return authtype.type === type;
          })) === null || _sourceType$schema$au === void 0 ? void 0 : _sourceType$schema$au.name) || 'Unknown type'
        };
      }),
      isRequired: true,
      validate: [{
        type: _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_1___default.a.REQUIRED
      }]
    }],
    nextStep: nextStep
  };
};

/* harmony default export */ __webpack_exports__["default"] = (authenticationSelectionStep);

/***/ }),

/***/ "./src/components/AddApplication/schema/generateFirstAuthStep.js":
/*!***********************************************************************!*\
  !*** ./src/components/AddApplication/schema/generateFirstAuthStep.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/cjs/schemaBuilder */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/schemaBuilder.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var generateFirstAuthStep = function generateFirstAuthStep(type, appType, endpointFields, authtype, intl) {
  var fields = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(endpointFields);

  if (_redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__["shouldUseAppAuth"](type.name, authtype, appType.name)) {
    fields = [];
  }

  var auth = type.schema.authentication.find(function (_ref) {
    var type = _ref.type;
    return type === authtype;
  });
  var additionalStepName = "".concat(type.name, "-").concat(authtype, "-").concat(appType.name, "-additional-step");
  var skipEndpoint = _redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__["shouldSkipEndpoint"](type.name, authtype, appType.name);
  var customSteps = _redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__["hasCustomSteps"](type.name, authtype, appType.name);
  var nextStep;

  if (_redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__["getAdditionalSteps"](type.name, authtype, appType.name).length > 0) {
    nextStep = additionalStepName;
  } else if (endpointFields.length === 0 && !skipEndpoint) {
    nextStep = "".concat(type.name, "-endpoint");
  } else {
    nextStep = 'summary';
  }

  var additionalIncludesStepKeys = _redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__["getAdditionalStepKeys"](type.name, authtype, appType.name);
  var hasCustomStep = _redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__["shouldSkipSelection"](type.name, authtype, appType.name);
  var stepProps = {};

  if (hasCustomStep) {
    var firstAdditonalStep = _redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__["getAdditionalSteps"](type.name, authtype, appType.name).find(function (_ref2) {
      var name = _ref2.name;
      return !name;
    });
    var additionalFields = _redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__["getAdditionalStepFields"](auth.fields, additionalStepName);

    if (firstAdditonalStep.nextStep) {
      nextStep = firstAdditonalStep.nextStep;
    } else if (endpointFields.length === 0 && !skipEndpoint && !customSteps) {
      nextStep = "".concat(type.name, "-endpoint");
    } else {
      nextStep = 'summary';
    }

    stepProps = _objectSpread(_objectSpread({}, firstAdditonalStep), {}, {
      fields: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(fields), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__["injectAuthFieldsInfo"]([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(firstAdditonalStep.fields), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(additionalFields)), type.name, authtype, appType.name)))
    });
  }

  return _objectSpread({
    name: "".concat(type.name, "-").concat(appType.id, "-").concat(authtype),
    title: intl.formatMessage({
      id: 'sources.configureCredentials',
      defaultMessage: 'Configure credentials'
    }),
    fields: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(fields), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__["getAdditionalAuthFields"](type.name, authtype, appType.name)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__["injectAuthFieldsInfo"](_redhat_cloud_services_frontend_components_sources_cjs_schemaBuilder__WEBPACK_IMPORTED_MODULE_2__["getNoStepsFields"](auth.fields, additionalIncludesStepKeys), type.name, authtype, appType.name))),
    nextStep: nextStep
  }, stepProps);
};

/* harmony default export */ __webpack_exports__["default"] = (generateFirstAuthStep);

/***/ }),

/***/ "./src/components/AddApplication/schema/selectAuthenticationStep.js":
/*!**************************************************************************!*\
  !*** ./src/components/AddApplication/schema/selectAuthenticationStep.js ***!
  \**************************************************************************/
/*! exports provided: SelectAuthenticationDescription, generateAuthSelectionOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAuthenticationDescription", function() { return SelectAuthenticationDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateAuthSelectionOptions", function() { return generateAuthSelectionOptions; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AuthTypeSetter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../AuthTypeSetter */ "./src/components/AddApplication/AuthTypeSetter.js");










var SelectAuthenticationDescription = function SelectAuthenticationDescription(_ref) {
  var applicationTypeName = _ref.applicationTypeName,
      authenticationTypeName = _ref.authenticationTypeName;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_8__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__["TextVariants"].p
  }, intl.formatMessage({
    id: 'sources.selectAuthenticationDescription',
    defaultMessage: 'Selected application { applicationTypeName } supports { authenticationTypeName } authentication type. You can use already defined authentication values or define new.'
  }, {
    applicationTypeName: applicationTypeName,
    authenticationTypeName: authenticationTypeName
  })));
};
SelectAuthenticationDescription.propTypes = {
  applicationTypeName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  authenticationTypeName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
var generateAuthSelectionOptions = function generateAuthSelectionOptions(_ref2) {
  var authenticationValues = _ref2.authenticationValues,
      supportedAuthTypeName = _ref2.supportedAuthTypeName,
      supportedAuthType = _ref2.supportedAuthType,
      applicationTypes = _ref2.applicationTypes,
      source = _ref2.source;
  return authenticationValues.filter(function (_ref3) {
    var authtype = _ref3.authtype;
    return authtype === supportedAuthType;
  }).map(function (values) {
    var includeUsername = values.username ? "-".concat(values.username) : '';
    var app = source.applications.find(function (_ref4) {
      var authentications = _ref4.authentications;
      return authentications.find(function (_ref5) {
        var id = _ref5.id;
        return id === values.id;
      });
    });
    var appType = app && app.application_type_id ? applicationTypes.find(function (_ref6) {
      var id = _ref6.id;
      return id === app.application_type_id;
    }) : '';
    var includeAppName = appType ? "-".concat(appType.display_name) : "-unused-".concat(values.id);
    var label = "".concat(supportedAuthTypeName).concat(includeUsername).concat(includeAppName);
    return {
      label: label,
      value: values.id
    };
  });
};

var selectAuthenticationStep = function selectAuthenticationStep(_ref7) {
  var _source$applications;

  var intl = _ref7.intl,
      source = _ref7.source,
      authenticationValues = _ref7.authenticationValues,
      sourceType = _ref7.sourceType,
      app = _ref7.app,
      applicationTypes = _ref7.applicationTypes;

  var nextStep = function nextStep(_ref8) {
    var _ref8$values = _ref8.values,
        authtype = _ref8$values.authtype,
        authentication = _ref8$values.authentication;
    return "".concat(sourceType.name, "-").concat(app.id, "-").concat(authtype || (authentication === null || authentication === void 0 ? void 0 : authentication.authtype));
  };

  var fields = [{
    component: 'description',
    name: 'authtypesetter',
    Content: _AuthTypeSetter__WEBPACK_IMPORTED_MODULE_9__["AuthTypeSetter"],
    authenticationValues: authenticationValues,
    hideField: true
  }];
  var ifAppSupported = app.supported_source_types.includes(sourceType.name);
  var isAppAvailable = !((_source$applications = source.applications) !== null && _source$applications !== void 0 && _source$applications.find(function (_ref9) {
    var application_type_id = _ref9.application_type_id;
    return application_type_id === app.id;
  }));

  if (ifAppSupported && isAppAvailable) {
    var supportedAuthTypes = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(app, "supported_authentication_types[".concat(sourceType.name, "]"), []);
    supportedAuthTypes.forEach(function (supportedAuthType) {
      var hasAvailableAuthentications = authenticationValues.find(function (_ref10) {
        var authtype = _ref10.authtype;
        return authtype === supportedAuthType;
      });

      if (hasAvailableAuthentications) {
        var supportedAuthTypeName = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(sourceType, "schema.authentication", {}).find(function (_ref11) {
          var type = _ref11.type;
          return type === supportedAuthType;
        }).name;
        fields.push({
          component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_5___default.a.SUB_FORM,
          name: "".concat(app.name, "-subform"),
          fields: [{
            name: "".concat(app.name, "-select-authentication-summary"),
            component: 'description',
            Content: SelectAuthenticationDescription,
            applicationTypeName: app.display_name,
            authenticationTypeName: supportedAuthTypeName
          }, {
            component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_5___default.a.RADIO,
            name: 'selectedAuthentication',
            label: intl.formatMessage({
              id: 'sources.selectAuthenticationTitle',
              defaultMessage: 'Select authentication'
            }),
            isRequired: true,
            validate: [{
              type: _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_6___default.a.REQUIRED
            }],
            options: [{
              label: intl.formatMessage({
                id: 'sources.selectAuthenticationradioLabel',
                defaultMessage: 'Define new { supportedAuthTypeName }'
              }, {
                supportedAuthTypeName: supportedAuthTypeName
              }),
              value: "new-".concat(supportedAuthType)
            }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(generateAuthSelectionOptions({
              authenticationValues: authenticationValues,
              supportedAuthTypeName: supportedAuthTypeName,
              supportedAuthType: supportedAuthType,
              applicationTypes: applicationTypes,
              source: source
            })))
          }]
        });
      }
    });
  }

  return {
    name: 'selectAuthentication',
    title: intl.formatMessage({
      id: 'sources.selectAuthenticationTitle',
      defaultMessage: 'Select authentication'
    }),
    fields: fields,
    nextStep: nextStep
  };
};

/* harmony default export */ __webpack_exports__["default"] = (selectAuthenticationStep);

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/addApplication.js.map