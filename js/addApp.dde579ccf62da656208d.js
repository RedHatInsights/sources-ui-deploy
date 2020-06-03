(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addApp"],{

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
/* harmony import */ var _redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources */ "./node_modules/@redhat-cloud-services/frontend-components-sources/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./entities */ "./src/api/entities.js");
/* harmony import */ var _doUpdateSource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./doUpdateSource */ "./src/api/doUpdateSource.js");
/* harmony import */ var _components_AddApplication_steps_createProgressTextsApp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/AddApplication/steps/createProgressTextsApp */ "./src/components/AddApplication/steps/createProgressTextsApp.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








 // modification of https://stackoverflow.com/a/38340374

var removeEmpty = function removeEmpty(obj) {
  Object.keys(obj).forEach(function (key) {
    if (obj[key] && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_5___default()(obj[key]) === 'object') {
      if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(obj[key])) {
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
    var setState,
        intl,
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
        endpoint,
        authenticationData,
        _yield$Promise$all,
        _yield$Promise$all2,
        _sourceDataOut,
        _endpointDataOut,
        authenticationDataOut,
        applicationDataOut,
        authenticationId,
        promisesSecondRound,
        authAppData,
        isAttachingCostManagement,
        credentials,
        billing_source,
        data,
        errorMessage,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setState = _args.length > 4 && _args[4] !== undefined ? _args[4] : function () {};
            intl = _args.length > 5 && _args[5] !== undefined ? _args[5] : function () {};
            formState = formApi.getState();
            allFormValues = formState.values;
            selectedAuthId = allFormValues.authentication ? allFormValues.authentication.id : undefined;
            authInitialValues = selectedAuthId ? authenticationInitialValues.find(function (_ref2) {
              var id = _ref2.id;
              return id === selectedAuthId;
            }) : undefined;
            authentication = values.authentication, valuesWithoutAuth = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(values, ["authentication"]);
            newAddedValues = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_6__["addedDiff"])(initialValues, valuesWithoutAuth);
            updatedValues = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_6__["updatedDiff"])(initialValues, valuesWithoutAuth);
            newAddedAuthValues = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_6__["addedDiff"])(authInitialValues, authentication);
            updatedAuthValues = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_6__["updatedDiff"])(authInitialValues, authentication);
            filteredValues = removeEmpty(_objectSpread(_objectSpread({}, lodash_merge__WEBPACK_IMPORTED_MODULE_9___default()(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10___default()(newAddedValues), updatedValues)), {}, {
              authentication: _objectSpread({}, lodash_merge__WEBPACK_IMPORTED_MODULE_9___default()(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10___default()(newAddedAuthValues), updatedAuthValues))
            }));
            setState({
              type: 'setProgressTexts',
              progressTexts: Object(_components_AddApplication_steps_createProgressTextsApp__WEBPACK_IMPORTED_MODULE_13__["default"])(filteredValues, allFormValues, intl)
            });
            _context.prev = 13;

            if (!(!allFormValues.source || !allFormValues.source.id)) {
              _context.next = 16;
              break;
            }

            throw 'Missing source id';

          case 16:
            sourceId = allFormValues.source.id;
            endpointId = allFormValues.endpoint ? allFormValues.endpoint.id : undefined;
            promises = [];

            if (filteredValues.source && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(filteredValues.source)) {
              promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_11__["getSourcesApi"])().updateSource(sourceId, filteredValues.source));
            } else {
              promises.push(Promise.resolve(undefined));
            }

            hasModifiedEndpoint = filteredValues.endpoint && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(filteredValues.endpoint);
            hasModifiedUrl = filteredValues.url && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(filteredValues.url);

            if (!(hasModifiedEndpoint || hasModifiedUrl)) {
              _context.next = 39;
              break;
            }

            _urlOrHost = Object(_doUpdateSource__WEBPACK_IMPORTED_MODULE_12__["urlOrHost"])(filteredValues), scheme = _urlOrHost.scheme, host = _urlOrHost.host, port = _urlOrHost.port, path = _urlOrHost.path;
            endPointPort = parseInt(port, 10);
            endpointData = removeEmpty(_objectSpread(_objectSpread({}, filteredValues.endpoint), {}, {
              scheme: scheme,
              host: host,
              port: isNaN(endPointPort) ? undefined : endPointPort,
              path: path
            }));

            if (!endpointId) {
              _context.next = 30;
              break;
            }

            promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_11__["getSourcesApi"])().updateEndpoint(endpointId, endpointData));
            _context.next = 37;
            break;

          case 30:
            promises.push(Promise.resolve(undefined));
            createEndpointData = _objectSpread(_objectSpread({}, endpointData), {}, {
              "default": true,
              source_id: sourceId
            });
            _context.next = 34;
            return Object(_entities__WEBPACK_IMPORTED_MODULE_11__["getSourcesApi"])().createEndpoint(createEndpointData);

          case 34:
            endpoint = _context.sent;
            setState({
              type: 'increaseProgressStep'
            });
            endpointId = endpoint.id;

          case 37:
            _context.next = 40;
            break;

          case 39:
            promises.push(Promise.resolve(undefined));

          case 40:
            if (filteredValues.authentication && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(filteredValues.authentication)) {
              if (selectedAuthId) {
                promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_11__["getSourcesApi"])().updateAuthentication(selectedAuthId, filteredValues.authentication));
              } else if (endpointId) {
                authenticationData = _objectSpread(_objectSpread({}, filteredValues.authentication), {}, {
                  resource_id: endpointId,
                  resource_type: 'Endpoint'
                });
                promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_11__["getSourcesApi"])().createAuthentication(authenticationData));
              }
            } else {
              promises.push(Promise.resolve(undefined));
            }

            if (filteredValues.application && filteredValues.application.application_type_id) {
              promises.push(Object(_entities__WEBPACK_IMPORTED_MODULE_11__["doCreateApplication"])(sourceId, filteredValues.application.application_type_id));
            } else {
              promises.push(Promise.resolve(undefined));
            } // eslint-disable-next-line no-unused-vars


            _context.next = 44;
            return Promise.all(promises);

          case 44:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_yield$Promise$all, 4);
            _sourceDataOut = _yield$Promise$all2[0];
            _endpointDataOut = _yield$Promise$all2[1];
            authenticationDataOut = _yield$Promise$all2[2];
            applicationDataOut = _yield$Promise$all2[3];
            setState({
              type: 'increaseProgressStep'
            });
            authenticationId = selectedAuthId ? selectedAuthId : authenticationDataOut ? authenticationDataOut.id : undefined;
            promisesSecondRound = [];

            if (applicationDataOut && applicationDataOut.id && authenticationId) {
              authAppData = {
                application_id: applicationDataOut.id,
                authentication_id: authenticationId
              };
              promisesSecondRound.push(Object(_entities__WEBPACK_IMPORTED_MODULE_11__["getSourcesApi"])().createAuthApp(authAppData));
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
              promisesSecondRound.push(Object(_redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_7__["patchSource"])(_objectSpread({
                id: sourceId
              }, data)));
            }

            _context.next = 58;
            return Promise.all(promisesSecondRound);

          case 58:
            setState({
              type: 'increaseProgressStep'
            });
            _context.next = 67;
            break;

          case 61:
            _context.prev = 61;
            _context.t0 = _context["catch"](13);
            _context.next = 65;
            return Object(_redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_7__["handleError"])(_context.t0);

          case 65:
            errorMessage = _context.sent;
            throw errorMessage;

          case 67:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[13, 61]]);
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
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources */ "./node_modules/@redhat-cloud-services/frontend-components-sources/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/form-template.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utilities/SourcesFormRenderer */ "./src/utilities/SourcesFormRenderer.js");
/* harmony import */ var _AddApplicationSchema__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AddApplicationSchema */ "./src/components/AddApplication/AddApplicationSchema.js");
/* harmony import */ var _steps_LoadingStep__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./steps/LoadingStep */ "./src/components/AddApplication/steps/LoadingStep.js");
/* harmony import */ var _steps_ErroredStep__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./steps/ErroredStep */ "./src/components/AddApplication/steps/ErroredStep.js");
/* harmony import */ var _steps_FinishedStep__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./steps/FinishedStep */ "./src/components/AddApplication/steps/FinishedStep.js");
/* harmony import */ var _WizardBody__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./WizardBody */ "./src/components/AddApplication/WizardBody.js");
/* harmony import */ var _api_entities__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../api/entities */ "./src/api/entities.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _SourcesTable_formatters__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../SourcesTable/formatters */ "./src/components/SourcesTable/formatters.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _api_doAttachApp__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../api/doAttachApp */ "./src/api/doAttachApp.js");
/* harmony import */ var _api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../api/checkSourceStatus */ "./src/api/checkSourceStatus.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./reducer */ "./src/components/AddApplication/reducer.js");




























var selectedApp = undefined; // this has to be not-state value, because it shouldn't re-render the component when changes

var saveSelectedApp = function saveSelectedApp(_ref) {
  var application = _ref.values.application;
  return selectedApp = application;
};

var onSubmit = function onSubmit(values, formApi, authenticationInitialValues, dispatch, setState, initialValues, intl) {
  setState({
    type: 'submit'
  });
  return Object(_api_doAttachApp__WEBPACK_IMPORTED_MODULE_25__["doAttachApp"])(values, formApi, authenticationInitialValues, initialValues, setState, intl).then( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Object(_api_checkSourceStatus__WEBPACK_IMPORTED_MODULE_26__["checkSourceStatus"])(initialValues.source.id);
            _context.next = 3;
            return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_13__["loadEntities"])());

          case 3:
            selectedApp = undefined;
            return _context.abrupt("return", setState({
              type: 'finish'
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })))["catch"](function (error) {
    return setState({
      type: 'error',
      error: error,
      values: values
    });
  });
};

var FormTemplateWrapper = function FormTemplateWrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_12___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, props, {
    showFormControls: false
  }));
};

var AddApplication = function AddApplication() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_8__["useIntl"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
  var loaded = Object(_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_22__["useIsLoaded"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (_ref3) {
    var sources = _ref3.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_7__["shallowEqual"]),
      appTypes = _useSelector.appTypes,
      sourceTypesLoaded = _useSelector.sourceTypesLoaded,
      appTypesLoaded = _useSelector.appTypesLoaded,
      sourceTypes = _useSelector.sourceTypes;

  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_21__["useSource"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_27__["default"], _reducer__WEBPACK_IMPORTED_MODULE_27__["initialState"]),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useReducer, 2),
      state = _useReducer2[0],
      setState = _useReducer2[1];

  var container = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(document.createElement('div'));
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    selectedApp = undefined;
  }, []);
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
          Object(_api_entities__WEBPACK_IMPORTED_MODULE_20__["getSourcesApi"])().listEndpointAuthentications(source.endpoints[0].id).then(function (_ref4) {
            var data = _ref4.data;
            return setState({
              type: 'loadAuthentications',
              authenticationsValues: data,
              initialValues: {
                source: source,
                endpoint: source.endpoints[0],
                url: Object(_SourcesTable_formatters__WEBPACK_IMPORTED_MODULE_23__["endpointToUrl"])(source.endpoints[0]),
                application: selectedApp
              },
              values: {}
            });
          });
        } else {
          setState({
            type: 'loadWithoutAuthentications',
            initialValues: {
              source: source,
              application: selectedApp
            },
            values: {}
          });
        }
      }
    }
  }, [source]);

  var goToSources = function goToSources() {
    return history.push(_Routes__WEBPACK_IMPORTED_MODULE_24__["routes"].sources.path);
  };

  if ((!appTypesLoaded || !sourceTypesLoaded || !loaded || state.state === 'loading') && state.state !== 'submitting') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_WizardBody__WEBPACK_IMPORTED_MODULE_19__["default"], {
      goToSources: goToSources,
      step: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_steps_LoadingStep__WEBPACK_IMPORTED_MODULE_16__["default"], null)
    });
  }

  if (state.state === 'submitting') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_WizardBody__WEBPACK_IMPORTED_MODULE_19__["default"], {
      goToSources: goToSources,
      step: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_steps_LoadingStep__WEBPACK_IMPORTED_MODULE_16__["default"], {
        progressStep: state.progressStep,
        progressTexts: state.progressTexts
      })
    });
  }

  var onReset = function onReset() {
    return setState({
      type: 'reset'
    });
  };

  if (state.state !== 'wizard') {
    var shownStep = state.state === 'finished' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_steps_FinishedStep__WEBPACK_IMPORTED_MODULE_18__["default"], {
      onReset: onReset,
      goToSources: goToSources,
      progressStep: state.progressStep,
      progressTexts: state.progressTexts
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_steps_ErroredStep__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onReset: onReset,
      goToSources: goToSources,
      error: state.error,
      progressStep: state.progressStep,
      progressTexts: state.progressTexts
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_WizardBody__WEBPACK_IMPORTED_MODULE_19__["default"], {
      goToSources: goToSources,
      step: shownStep
    });
  }

  var appIds = source.applications.filter(function (_ref5) {
    var isDeleting = _ref5.isDeleting;
    return !isDeleting;
  }).reduce(function (acc, app) {
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), [app.application_type_id]);
  }, []);
  var sourceType = sourceTypes.find(function (type) {
    return type.id === source.source_type_id;
  });
  var sourceTypeName = sourceType && sourceType.name;
  var filteredAppTypes = appTypes.filter(function (type) {
    return !appIds.includes(type.id) && type.supported_source_types.includes(sourceTypeName);
  }).filter(_redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_11__["filterApps"]);
  var availableAppTypes = filteredAppTypes.map(function (type) {
    var hasDeletingApp = source.applications.find(function (app) {
      return app.application_type_id === type.id;
    });
    var label = "".concat(type.display_name, " ").concat(hasDeletingApp ? "(".concat(intl.formatMessage({
      id: 'sources.currentlyRemoving',
      defaultMessage: 'Currently removing'
    }), ")") : '');
    return {
      value: type.id,
      label: label,
      isDisabled: hasDeletingApp ? true : false
    };
  });
  var schema = Object(_AddApplicationSchema__WEBPACK_IMPORTED_MODULE_15__["default"])(availableAppTypes, intl, sourceTypes, appTypes, state.authenticationsValues, source, state.values, container.current);

  var onSubmitWrapper = function onSubmitWrapper(values, formApi) {
    return onSubmit(values, formApi, state.authenticationsValues, dispatch, setState, state.initialValues, intl);
  };

  var hasAvailableApps = filteredAppTypes.length > 0;
  var onSubmitFinal = hasAvailableApps ? onSubmitWrapper : goToSources;
  var finalValues = lodash_merge__WEBPACK_IMPORTED_MODULE_9___default()(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_10___default()(state.initialValues), state.values);

  var onStay = function onStay() {
    container.current.hidden = false;
    setState({
      type: 'toggleCancelling'
    });
  };

  var cancelBeforeExit = function cancelBeforeExit(values) {
    if (values === null || values === void 0 ? void 0 : values.application) {
      container.current.hidden = true;
      setState({
        type: 'toggleCancelling',
        values: values
      });
    } else {
      goToSources();
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_11__["CloseModal"], {
    title: intl.formatMessage({
      id: 'sources.manageAppsCloseModalTitle',
      defaultMessage: 'Exit application adding?'
    }),
    isOpen: state.isCancelling,
    onStay: onStay,
    onExit: goToSources
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    schema: schema,
    showFormControls: false,
    onSubmit: onSubmitFinal,
    onCancel: cancelBeforeExit,
    initialValues: finalValues,
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

/***/ "./src/components/AddApplication/AddApplicationDescription.js":
/*!********************************************************************!*\
  !*** ./src/components/AddApplication/AddApplicationDescription.js ***!
  \********************************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/index */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _RemoveAppModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RemoveAppModal */ "./src/components/AddApplication/RemoveAppModal.js");
/* harmony import */ var _ApplicationsList_ApplicationList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ApplicationsList/ApplicationList */ "./src/components/ApplicationsList/ApplicationList.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");












var AddApplicationDescription = function AddApplicationDescription(_ref) {
  var container = _ref.container;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      removingApp = _useState2[0],
      setApplicationToRemove = _useState2[1];

  var sourceTypes = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (_ref2) {
    var sources = _ref2.sources;
    return sources.sourceTypes;
  });
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_10__["useSource"])();
  var sourceType = sourceTypes.find(function (type) {
    return type.id === source.source_type_id;
  });
  var apps = source.applications.filter(function (app) {
    return !app.isDeleting;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, removingApp.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RemoveAppModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    app: removingApp,
    onCancel: function onCancel() {
      if (container) {
        container.hidden = false;
      }

      return setApplicationToRemove({});
    },
    container: container
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_6__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    gutter: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
    md: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "sources.sourceName",
    defaultMessage: "Source name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
    md: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "sources.type",
    defaultMessage: "Type"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
    md: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "sources.apps",
    defaultMessage: "Applications"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
    md: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].p
  }, source.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
    md: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].p
  }, sourceType ? sourceType.product_name : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "sources.typeNotFound",
    defaultMessage: "Type not found"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_layouts_Grid_index__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
    md: 8
  }, apps.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApplicationsList_ApplicationList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    setApplicationToRemove: setApplicationToRemove
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "sources.noApps",
    defaultMessage: "No applications"
  })))));
};

AddApplicationDescription.propTypes = {
  container: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Element)
};
/* harmony default export */ __webpack_exports__["default"] = (AddApplicationDescription);

/***/ }),

/***/ "./src/components/AddApplication/AddApplicationSchema.js":
/*!***************************************************************!*\
  !*** ./src/components/AddApplication/AddApplicationSchema.js ***!
  \***************************************************************/
/*! exports provided: NoAvailableApplicationDescription, ApplicationSummary, SelectAuthenticationDescription, hasAlreadySupportedAuthType, selectAuthenticationStep, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAvailableApplicationDescription", function() { return NoAvailableApplicationDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSummary", function() { return ApplicationSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAuthenticationDescription", function() { return SelectAuthenticationDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAlreadySupportedAuthType", function() { return hasAlreadySupportedAuthType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthenticationStep", function() { return selectAuthenticationStep; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources */ "./node_modules/@redhat-cloud-services/frontend-components-sources/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AddApplicationDescription__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AddApplicationDescription */ "./src/components/AddApplication/AddApplicationDescription.js");
/* harmony import */ var _AuthTypeSetter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AuthTypeSetter */ "./src/components/AddApplication/AuthTypeSetter.js");
/* harmony import */ var _AuthTypeCleaner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AuthTypeCleaner */ "./src/components/AddApplication/AuthTypeCleaner.js");













var NoAvailableApplicationDescription = function NoAvailableApplicationDescription() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_6__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].p
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
    id: "sources.allApplicationsAssigned",
    defaultMessage: "All available applications have already been added to this source or there is no available application for this source type."
  })));
};
var ApplicationSummary = function ApplicationSummary() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_6__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].p
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
    id: "sources.reviewAddAppSummary",
    defaultMessage: "Review the information below and click Add to add the application to your source. Use the Back button to make changes."
  })));
};
var SelectAuthenticationDescription = function SelectAuthenticationDescription(_ref) {
  var applicationTypeName = _ref.applicationTypeName,
      authenticationTypeName = _ref.authenticationTypeName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_6__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].p
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
    id: "sources.selectAuthenticationDescription",
    defaultMessage: "Selected application { applicationTypeName } supports { authenticationTypeName } authentication type. You can use already defined authentication values or define new.",
    values: {
      applicationTypeName: applicationTypeName,
      authenticationTypeName: authenticationTypeName
    }
  })));
};
SelectAuthenticationDescription.propTypes = {
  applicationTypeName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  authenticationTypeName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
var hasAlreadySupportedAuthType = function hasAlreadySupportedAuthType() {
  var authValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var appType = arguments.length > 1 ? arguments[1] : undefined;
  var sourceTypeName = arguments.length > 2 ? arguments[2] : undefined;
  return authValues.find(function (_ref2) {
    var authtype = _ref2.authtype;
    return authtype === lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(appType, "supported_authentication_types.".concat(sourceTypeName, "[0]"));
  });
};

var generateAuthSelectionOptions = function generateAuthSelectionOptions(_ref3) {
  var source = _ref3.source,
      authenticationValues = _ref3.authenticationValues,
      applicationTypes = _ref3.applicationTypes,
      supportedAuthTypeName = _ref3.supportedAuthTypeName,
      supportedAuthType = _ref3.supportedAuthType;
  return authenticationValues.filter(function (_ref4) {
    var authtype = _ref4.authtype;
    return authtype === supportedAuthType;
  }).map(function (values) {
    var app = source.applications.find(function (_ref5) {
      var authentications = _ref5.authentications;
      return authentications.find(function (_ref6) {
        var id = _ref6.id;
        return id === values.id;
      });
    });
    var appType = app && app.application_type_id ? applicationTypes.find(function (_ref7) {
      var id = _ref7.id;
      return id === app.application_type_id;
    }) : '';
    var includeUsername = values.username ? "-".concat(values.username) : '';
    var includeAppName = appType ? "-".concat(appType.display_name) : "-unused-".concat(values.id);
    var label = "".concat(supportedAuthTypeName).concat(includeUsername).concat(includeAppName);
    return {
      label: label,
      value: values.id
    };
  });
};

var selectAuthenticationStep = function selectAuthenticationStep(_ref8) {
  var intl = _ref8.intl,
      source = _ref8.source,
      authenticationValues = _ref8.authenticationValues,
      sourceType = _ref8.sourceType,
      applicationTypes = _ref8.applicationTypes,
      modifiedValues = _ref8.modifiedValues;

  var nextStep = function nextStep(_ref9) {
    var application = _ref9.values.application;
    var app = application ? application : {};
    var appId = app.application_type_id ? app.application_type_id : '';
    return "".concat(sourceType.name, "-").concat(appId);
  };

  var fields = [{
    component: 'description',
    name: 'authtypesetter',
    Content: _AuthTypeSetter__WEBPACK_IMPORTED_MODULE_11__["AuthTypeSetter"],
    authenticationValues: authenticationValues,
    hideField: true,
    modifiedValues: modifiedValues
  }];
  applicationTypes.forEach(function (app) {
    var supportedAuthType = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(app, "supported_authentication_types[".concat(sourceType.name, "][0]"), '');

    if (supportedAuthType && hasAlreadySupportedAuthType(authenticationValues, app, sourceType.name)) {
      var supportedAuthTypeName = lodash_get__WEBPACK_IMPORTED_MODULE_9___default()(sourceType, "schema.authentication", {}).find(function (_ref10) {
        var type = _ref10.type;
        return type === supportedAuthType;
      }).name;
      fields.push({
        component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_3___default.a.SUB_FORM,
        name: "".concat(app.name, "-subform"),
        condition: {
          when: 'application.application_type_id',
          is: app.id
        },
        fields: [{
          name: "".concat(app.name, "-select-authentication-summary"),
          component: 'description',
          Content: SelectAuthenticationDescription,
          applicationTypeName: app.display_name,
          authenticationTypeName: supportedAuthTypeName
        }, {
          component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_3___default.a.RADIO,
          name: 'selectedAuthentication',
          label: intl.formatMessage({
            id: 'sources.selectAuthenticationTitle',
            defaultMessage: 'Select authentication'
          }),
          isRequired: true,
          validate: [{
            type: _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4___default.a.REQUIRED
          }],
          options: [{
            label: intl.formatMessage({
              id: 'sources.selectAuthenticationradioLabel',
              defaultMessage: 'Define new { supportedAuthTypeName }'
            }, {
              supportedAuthTypeName: supportedAuthTypeName
            }),
            value: 'new'
          }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(generateAuthSelectionOptions({
            authenticationValues: authenticationValues,
            source: source,
            applicationTypes: applicationTypes,
            supportedAuthTypeName: supportedAuthTypeName,
            supportedAuthType: supportedAuthType
          })))
        }]
      });
    }
  });
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

var fields = function fields() {
  var applications = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var intl = arguments.length > 1 ? arguments[1] : undefined;
  var sourceTypes = arguments.length > 2 ? arguments[2] : undefined;
  var applicationTypes = arguments.length > 3 ? arguments[3] : undefined;
  var authenticationValues = arguments.length > 4 ? arguments[4] : undefined;
  var source = arguments.length > 5 ? arguments[5] : undefined;
  var modifiedValues = arguments.length > 6 ? arguments[6] : undefined;
  var container = arguments.length > 7 ? arguments[7] : undefined;
  var hasAvailableApps = applications.length > 0;
  var nextStep = hasAvailableApps ? 'summary' : undefined;
  var authenticationFields = [];
  var sourceType = sourceTypes.find(function (_ref11) {
    var id = _ref11.id;
    return id === source.source_type_id;
  });

  if (!source.imported && hasAvailableApps) {
    var appendEndpoint = sourceType.schema.endpoint.hidden ? sourceType.schema.endpoint.fields : [];
    var hasEndpointStep = appendEndpoint.length === 0;
    applicationTypes.forEach(function (appType) {
      if (appType.supported_source_types.includes(sourceType.name)) {
        authenticationFields.push(_redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_8__["schemaBuilder"].createSpecificAuthTypeSelection(sourceType, appType, appendEndpoint, false));
      }
    });
    sourceType.schema.authentication.forEach(function (auth) {
      applicationTypes.forEach(function (appType) {
        if (appType.supported_source_types.includes(sourceType.name)) {
          var appAdditionalSteps = _redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_8__["schemaBuilder"].getAdditionalSteps(sourceType.name, auth.type, appType.name);

          if (appAdditionalSteps.length > 0) {
            authenticationFields.push.apply(authenticationFields, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_8__["schemaBuilder"].createAdditionalSteps(appAdditionalSteps, sourceType.name, auth.type, hasEndpointStep, auth.fields, appType.name)));
          }
        }
      });
    });

    if (hasEndpointStep) {
      authenticationFields.push(_redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_8__["schemaBuilder"].createEndpointStep(sourceType.schema.endpoint, sourceType.name));
    }

    nextStep = function nextStep(_ref12) {
      var application = _ref12.values.application;

      if (application) {
        if (hasAlreadySupportedAuthType(authenticationValues, applicationTypes.find(function (_ref13) {
          var id = _ref13.id;
          return id === application.application_type_id;
        }), sourceType.name)) {
          return 'selectAuthentication';
        }

        return "".concat(sourceType.name, "-").concat(application && application.application_type_id);
      }
    };
  }

  var applicationSelection = hasAvailableApps ? {
    component: 'card-select',
    name: 'application.application_type_id',
    options: applications,
    label: intl.formatMessage({
      id: 'sources.chooseAppToAdd',
      defaultMessage: 'Choose an application to add'
    }),
    DefaultIcon: null,
    isRequired: true,
    validate: [{
      type: _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4___default.a.REQUIRED
    }]
  } : {
    component: 'description',
    name: 'description-no-options',
    validate: [{
      type: _data_driven_forms_react_form_renderer_dist_cjs_validator_types__WEBPACK_IMPORTED_MODULE_4___default.a.REQUIRED
    }],
    Content: NoAvailableApplicationDescription
  };
  var selectionSteps = [];

  if (!source.imported && hasAvailableApps) {
    selectionSteps.push(selectAuthenticationStep({
      intl: intl,
      source: source,
      authenticationValues: authenticationValues,
      sourceType: sourceType,
      applicationTypes: applicationTypes,
      modifiedValues: modifiedValues
    }));
  }

  return {
    fields: [{
      component: _data_driven_forms_react_form_renderer_dist_cjs_component_types__WEBPACK_IMPORTED_MODULE_3___default.a.WIZARD,
      name: 'wizard',
      title: intl.formatMessage({
        id: 'sources.manageApps',
        defaultMessage: 'Manage applications'
      }),
      inModal: true,
      container: container,
      predictSteps: true,
      showTitles: true,
      crossroads: ['application.application_type_id', 'selectedAuthentication'],
      description: intl.formatMessage({
        id: 'sources.addAppDescription',
        defaultMessage: 'You are managing applications of this source.'
      }),
      buttonLabels: {
        submit: hasAvailableApps ? intl.formatMessage({
          id: 'sources.add',
          defaultMessage: 'Add'
        }) : intl.formatMessage({
          id: 'sources.close',
          defaultMessage: 'Close'
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
      fields: [{
        nextStep: nextStep,
        title: intl.formatMessage({
          id: 'sources.selectApp',
          defaultMessage: 'Select application'
        }),
        name: 'selectAppStep',
        fields: [{
          component: 'description',
          name: 'description',
          Content: _AddApplicationDescription__WEBPACK_IMPORTED_MODULE_10__["default"],
          container: container
        }, applicationSelection, {
          component: 'description',
          name: 'authtypesetter',
          Content: _AuthTypeCleaner__WEBPACK_IMPORTED_MODULE_12__["AuthTypeCleaner"],
          hideField: true,
          modifiedValues: modifiedValues
        }]
      }, {
        title: intl.formatMessage({
          id: 'sources.review',
          defaultMessage: 'Review'
        }),
        name: 'summary',
        fields: [{
          component: 'description',
          name: 'description-summary',
          Content: ApplicationSummary
        }, {
          component: 'summary',
          name: 'summary',
          sourceTypes: sourceTypes,
          applicationTypes: applicationTypes
        }]
      }].concat(selectionSteps, authenticationFields)
    }]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (fields);

/***/ }),

/***/ "./src/components/AddApplication/AuthTypeCleaner.js":
/*!**********************************************************!*\
  !*** ./src/components/AddApplication/AuthTypeCleaner.js ***!
  \**********************************************************/
/*! exports provided: AuthTypeCleaner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTypeCleaner", function() { return AuthTypeCleaner; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-form-api.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_4__);





var AuthTypeCleaner = function AuthTypeCleaner(_ref) {
  var modifiedValues = _ref.modifiedValues;
  var formOptions = _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_4___default()();
  var selectedAppId = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(formOptions.getState().values, 'application.application_type_id', '');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(selectedAppId),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      initialValue = _useState2[0],
      setInitialValue = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (initialValue !== selectedAppId) {
      var values = modifiedValues && modifiedValues.authentication ? modifiedValues.authentication : undefined;
      formOptions.batch(function () {
        formOptions.change('authentication', values);
        formOptions.change('selectedAuthentication', undefined);
      });
      setInitialValue(undefined);
    }
  }, [selectedAppId]);
  return null;
};
AuthTypeCleaner.propTypes = {
  modifiedValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

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
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-form-api.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_5__);






var innerSetter = function innerSetter(_ref) {
  var formOptions = _ref.formOptions,
      modifiedValues = _ref.modifiedValues,
      authenticationValues = _ref.authenticationValues,
      selectedAuthentication = _ref.selectedAuthentication;

  if (selectedAuthentication !== 'new') {
    var authentication = authenticationValues.find(function (_ref2) {
      var id = _ref2.id;
      return id === selectedAuthentication;
    });

    if (modifiedValues && modifiedValues.authentication) {
      var newAuthenticationValues = lodash_merge__WEBPACK_IMPORTED_MODULE_3___default()(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(authentication), modifiedValues.authentication);
      formOptions.change('authentication', newAuthenticationValues);
    } else {
      formOptions.change('authentication', authentication);
    }
  } else {
    if (modifiedValues && modifiedValues.authentication) {
      formOptions.change('authentication', modifiedValues.authentication);
    } else {
      formOptions.change('authentication', undefined);
    }
  }
};
var AuthTypeSetter = function AuthTypeSetter(_ref3) {
  var authenticationValues = _ref3.authenticationValues,
      modifiedValues = _ref3.modifiedValues;
  var formOptions = _data_driven_forms_react_form_renderer_dist_cjs_use_form_api__WEBPACK_IMPORTED_MODULE_5___default()();
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
        modifiedValues: modifiedValues,
        selectedAuthentication: selectedAuthentication
      });
      setInitialValue(undefined);
    }
  }, [selectedAuthentication]);
  return null;
};
AuthTypeSetter.propTypes = {
  authenticationValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
  modifiedValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

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
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Modal/Modal */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-triangle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_exclamation_triangle_icon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");













var RemoveAppModal = function RemoveAppModal(_ref) {
  var app = _ref.app,
      onCancel = _ref.onCancel,
      container = _ref.container;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["useIntl"])();
  var appTypes = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref2) {
    var sources = _ref2.sources;
    return sources.appTypes;
  });
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_11__["useSource"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (container) {
      container.hidden = true;
    }
  }, []);
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
    return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_10__["removeApplication"])(app.id, source.id, titleSuccess, titleError));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
    className: "ins-c-sources__dialog--warning",
    isOpen: true,
    onClose: onCancel,
    isFooterLeftAligned: true,
    isSmall: true,
    title: intl.formatMessage({
      id: 'sources.deleteAppTitle',
      defaultMessage: 'Remove application?'
    }),
    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__["Title"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      id: "sources.remove",
      defaultMessage: "Remove application"
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "sources.deleteAppWarning",
    defaultMessage: "Are you sure to remove { appName } from this source?",
    values: {
      appName: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, app.display_name)
    }
  })), dependentApps.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["TextVariants"].p
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    id: "sources.deleteAppDetails",
    defaultMessage: "This change will affect these applications: { apps }.",
    values: {
      apps: dependentApps
    }
  }))));
};

RemoveAppModal.propTypes = {
  app: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    display_name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    dependent_applications: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
    sourceAppsNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
  }).isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  container: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Element)
};
/* harmony default export */ __webpack_exports__["default"] = (RemoveAppModal);

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
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Wizard_Wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Wizard/Wizard */ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/Wizard.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Wizard_Wizard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Wizard_Wizard__WEBPACK_IMPORTED_MODULE_3__);





var WizardBodyAttach = function WizardBodyAttach(_ref) {
  var step = _ref.step,
      goToSources = _ref.goToSources;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Wizard_Wizard__WEBPACK_IMPORTED_MODULE_3__["Wizard"], {
    isOpen: true,
    onClose: goToSources,
    title: intl.formatMessage({
      id: 'sources.manageApps',
      defaultMessage: 'Manage applications'
    }),
    description: intl.formatMessage({
      id: 'sources.addAppDescription',
      defaultMessage: 'You are managing applications of this source.'
    }),
    steps: [{
      name: 'Finish',
      component: step,
      isFinishedStep: true
    }]
  });
};

WizardBodyAttach.propTypes = {
  step: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].node.isRequired,
  goToSources: prop_types__WEBPACK_IMPORTED_MODULE_1__["PropTypes"].func.isRequired
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
  progressStep: 0,
  progressTexts: [],
  isCancelling: false
};

var reducer = function reducer(state, _ref) {
  var type = _ref.type,
      length = _ref.length,
      authenticationsValues = _ref.authenticationsValues,
      initialValues = _ref.initialValues,
      error = _ref.error,
      values = _ref.values,
      progressTexts = _ref.progressTexts;

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
        state: 'submitting',
        progressStep: 0,
        progressTexts: ['Preparing']
      });

    case 'finish':
      return _objectSpread(_objectSpread({}, state), {}, {
        state: 'finished',
        progressStep: ++state.progressStep
      });

    case 'error':
      return _objectSpread(_objectSpread({}, state), {}, {
        state: 'errored',
        error: error,
        values: values
      });

    case 'setProgressTexts':
      return _objectSpread(_objectSpread({}, state), {}, {
        progressTexts: progressTexts
      });

    case 'increaseProgressStep':
      return _objectSpread(_objectSpread({}, state), {}, {
        progressStep: ++state.progressStep
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

/***/ "./src/components/AddApplication/steps/ErroredStep.js":
/*!************************************************************!*\
  !*** ./src/components/AddApplication/steps/ErroredStep.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye/Bullseye */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Progress/Progress */ "./node_modules/@patternfly/react-core/dist/js/components/Progress/Progress.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_times_circle_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/times-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/times-circle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_times_circle_icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_times_circle_icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_13__);















var ErroredStepAttach = function ErroredStepAttach(_ref) {
  var onReset = _ref.onReset,
      goToSources = _ref.goToSources,
      error = _ref.error,
      progressStep = _ref.progressStep,
      progressTexts = _ref.progressTexts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_8__["Bullseye"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4__["EmptyState"], {
    variant: _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4__["EmptyStateVariant"].full,
    className: "ins-c-sources__empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5__["EmptyStateIcon"], {
    icon: _patternfly_react_icons_dist_js_icons_times_circle_icon__WEBPACK_IMPORTED_MODULE_11___default.a,
    color: "var(--pf-global--danger-color--100)",
    className: "pf-u-mb-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_9__["Title"], {
    headingLevel: "h5",
    size: "lg",
    className: "pf-u-mt-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "sources.configurationSuccessful",
    defaultMessage: "Configuration unsuccessful"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__["EmptyStateBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_10__["Progress"], {
    className: "pf-u-mb-md ins-c-sources__progress",
    value: progressStep,
    min: 0,
    title: " ",
    max: progressTexts.length - 1,
    label: progressTexts[progressStep],
    valueText: progressTexts[progressStep],
    variant: "danger"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "sources.successAddApp",
    defaultMessage: "Your application has not been successfully added:"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_TextContent__WEBPACK_IMPORTED_MODULE_13__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
    component: _patternfly_react_core_dist_js_components_Text_Text__WEBPACK_IMPORTED_MODULE_12__["TextVariants"].h6
  }, error)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    onClick: goToSources
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "sources.backToSources",
    defaultMessage: "Back to Sources"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions__WEBPACK_IMPORTED_MODULE_7__["EmptyStateSecondaryActions"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "link",
    onClick: onReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "sources.retry",
    defaultMessage: "Retry"
  })))));
};

ErroredStepAttach.propTypes = {
  onReset: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func.isRequired,
  goToSources: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string.isRequired,
  progressStep: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number.isRequired,
  progressTexts: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ErroredStepAttach);

/***/ }),

/***/ "./src/components/AddApplication/steps/FinishedStep.js":
/*!*************************************************************!*\
  !*** ./src/components/AddApplication/steps/FinishedStep.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye/Bullseye */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Progress/Progress */ "./node_modules/@patternfly/react-core/dist/js/components/Progress/Progress.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_icons_dist_js_icons_check_circle_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/check-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/check-circle-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_check_circle_icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_icons_dist_js_icons_check_circle_icon__WEBPACK_IMPORTED_MODULE_11__);













var FinishedStepAttach = function FinishedStepAttach(_ref) {
  var goToSources = _ref.goToSources,
      onReset = _ref.onReset,
      progressStep = _ref.progressStep,
      progressTexts = _ref.progressTexts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_8__["Bullseye"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4__["EmptyState"], {
    variant: _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_4__["EmptyStateVariant"].full,
    className: "ins-c-sources__empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_5__["EmptyStateIcon"], {
    icon: _patternfly_react_icons_dist_js_icons_check_circle_icon__WEBPACK_IMPORTED_MODULE_11___default.a,
    color: "var(--pf-global--success-color--200)",
    className: "pf-u-mb-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Title_Title__WEBPACK_IMPORTED_MODULE_9__["Title"], {
    headingLevel: "h5",
    size: "lg",
    className: "pf-u-mt-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "sources.configurationSuccessful",
    defaultMessage: "Configuration successful"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_6__["EmptyStateBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_10__["Progress"], {
    className: "pf-u-mb-md ins-c-sources__progress ins-c-sources__progress-success",
    value: progressStep,
    min: 0,
    title: " ",
    max: progressTexts.length - 1,
    label: progressTexts[progressStep],
    valueText: progressTexts[progressStep],
    variant: "success"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "sources.successAddApp",
    defaultMessage: "Your application has been successfully added."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    onClick: goToSources,
    className: "pf-u-mt-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "sources.backToSources",
    defaultMessage: "Back to Sources"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions__WEBPACK_IMPORTED_MODULE_7__["EmptyStateSecondaryActions"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "link",
    onClick: onReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
    id: "sources.continueManageApp",
    defaultMessage: "Continue managing applications"
  })))));
};

FinishedStepAttach.propTypes = {
  onReset: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func.isRequired,
  goToSources: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].func.isRequired,
  progressStep: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].number.isRequired,
  progressTexts: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].string).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FinishedStepAttach);

/***/ }),

/***/ "./src/components/AddApplication/steps/LoadingStep.js":
/*!************************************************************!*\
  !*** ./src/components/AddApplication/steps/LoadingStep.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye/Bullseye */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Spinner */ "./node_modules/@patternfly/react-core/dist/js/components/Spinner/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core_dist_js_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Progress/Progress */ "./node_modules/@patternfly/react-core/dist/js/components/Progress/Progress.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_core_dist_js_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");












var LoadingStep = function LoadingStep(_ref) {
  var onClose = _ref.onClose,
      customText = _ref.customText,
      progressStep = _ref.progressStep,
      progressTexts = _ref.progressTexts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_6__["Bullseye"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_3__["EmptyState"], {
    variant: _patternfly_react_core_dist_js_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_3__["EmptyStateVariant"].full,
    className: "ins-c-sources__empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_7__["EmptyStateIcon"], {
    icon: _patternfly_react_core_dist_js_components_Spinner__WEBPACK_IMPORTED_MODULE_8__["Spinner"],
    color: "var(--pf-global--success-color--100)",
    className: "pf-u-mb-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__["EmptyStateBody"], null, progressTexts ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Progress_Progress__WEBPACK_IMPORTED_MODULE_9__["Progress"], {
    value: progressStep,
    min: 0,
    max: progressTexts.length - 1,
    title: " ",
    label: progressTexts[progressStep],
    valueText: progressTexts[progressStep],
    className: "pf-u-mb-0 ins-c-sources__progress"
  }) : customText), onClose && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateSecondaryActions__WEBPACK_IMPORTED_MODULE_5__["EmptyStateSecondaryActions"], {
    className: "pf-u-mt-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_js_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "link",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
    id: "sources.cancel",
    defaultMessage: "Cancel"
  })))));
};

LoadingStep.propTypes = {
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  customText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  progressStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  progressTexts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
};
LoadingStep.defaultProps = {
  customText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
    id: "sources.loading",
    defaultMessage: "Loading, please wait."
  })
};
/* harmony default export */ __webpack_exports__["default"] = (LoadingStep);

/***/ }),

/***/ "./src/components/AddApplication/steps/createProgressTextsApp.js":
/*!***********************************************************************!*\
  !*** ./src/components/AddApplication/steps/createProgressTextsApp.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);



var createProgressTextsApp = function createProgressTextsApp(filteredValues, allFormValues, intl) {
  var progressText = [];
  var step = 0;

  if (filteredValues.endpoint && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(filteredValues.endpoint) && !lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(allFormValues, 'endpoint.id', false)) {
    progressText.push(intl.formatMessage({
      id: 'sources.authProgressEndpoint',
      defaultMessage: 'Step { step }: creating endpoint'
    }, {
      step: ++step
    }));
  }

  progressText.push(intl.formatMessage({
    id: 'sources.authProgressValues',
    defaultMessage: 'Step { step }: updating values and creating application'
  }, {
    step: ++step
  }));
  progressText.push(intl.formatMessage({
    id: 'sources.authConnectingApplication',
    defaultMessage: 'Step { step }: connecting application and authentication'
  }, {
    step: ++step
  }));
  progressText.push(intl.formatMessage({
    id: 'sources.authReloadData',
    defaultMessage: 'Step { step }: reloading data'
  }, {
    step: ++step
  }));
  progressText.push(intl.formatMessage({
    id: 'sources.authCompleted',
    defaultMessage: 'Completed'
  }));
  return progressText;
};

/* harmony default export */ __webpack_exports__["default"] = (createProgressTextsApp);

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
/* harmony import */ var _redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources */ "./node_modules/@redhat-cloud-services/frontend-components-sources/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_EditField_EditFieldWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/EditField/EditFieldWrapper */ "./src/components/EditField/EditFieldWrapper.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var SourcesFormRenderer = function SourcesFormRenderer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_data_driven_forms_react_form_renderer_dist_cjs_form_renderer__WEBPACK_IMPORTED_MODULE_3___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    FormTemplate: _data_driven_forms_pf4_component_mapper_dist_cjs_form_template__WEBPACK_IMPORTED_MODULE_7___default.a,
    componentMapper: _objectSpread(_objectSpread(_objectSpread({}, _data_driven_forms_pf4_component_mapper_dist_cjs_component_mapper__WEBPACK_IMPORTED_MODULE_8___default.a), _redhat_cloud_services_frontend_components_sources__WEBPACK_IMPORTED_MODULE_9__["mapperExtension"]), {}, {
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
//# sourceMappingURL=../sourcemaps/addApp.js.map