(self["webpackChunksources_ui"] = self["webpackChunksources_ui"] || []).push([["renameSource"],{

/***/ "./src/components/SourceDetail/SourceRenameModal.js":
/*!**********************************************************!*\
  !*** ./src/components/SourceDetail/SourceRenameModal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Modal/Modal */ "./node_modules/@patternfly/react-core/dist/esm/components/Modal/Modal.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_esm_component_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/esm/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/esm/component-types.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_SourceAddSchema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/SourceAddSchema */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/SourceAddSchema.js");
/* harmony import */ var _data_driven_forms_react_form_renderer_dist_esm_validator_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/esm/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/esm/validator-types.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper_dist_esm_form_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/esm/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/esm/form-template.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_validated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/validated */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/validated.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utilities/SourcesFormRenderer */ "./src/utilities/SourcesFormRenderer.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
















var SourceRenameModal = function SourceRenameModal() {
  var source = (0,_hooks_useSource__WEBPACK_IMPORTED_MODULE_9__.useSource)();
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_13__.default)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useHistory = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)(),
      push = _useHistory.push;

  var returnToSource = function returnToSource() {
    return push((0,_Routes__WEBPACK_IMPORTED_MODULE_11__.replaceRouteId)(_Routes__WEBPACK_IMPORTED_MODULE_11__.routes.sourcesDetail.path, source.id));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_14__.Modal, {
    title: intl.formatMessage({
      id: 'sources.renameTitle',
      defaultMessage: 'Rename source'
    }),
    description: intl.formatMessage({
      id: 'sources.renameDescription',
      defaultMessage: 'Enter a new name for your source.'
    }),
    onClose: returnToSource,
    isOpen: true,
    variant: "medium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_10__.default, {
    FormTemplate: function FormTemplate(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_data_driven_forms_pf4_component_mapper_dist_esm_form_template__WEBPACK_IMPORTED_MODULE_7__.default, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        disableSubmit: ['pristine', 'validating', 'invalid'],
        submitLabel: intl.formatMessage({
          id: 'sources.save',
          defaultMessage: 'Save'
        })
      }));
    },
    onSubmit: function onSubmit(_ref) {
      var name = _ref.name;
      returnToSource();
      return dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_12__.renameSource)(source.id, name, intl.formatMessage({
        id: 'sources.renameError',
        defaultMessage: 'Renaming was unsuccessful'
      })));
    },
    onCancel: returnToSource,
    schema: {
      fields: [{
        name: 'name',
        label: intl.formatMessage({
          id: 'sources.name',
          defaultMessage: 'Name'
        }),
        component: _data_driven_forms_react_form_renderer_dist_esm_component_types__WEBPACK_IMPORTED_MODULE_4__.default.TEXT_FIELD,
        validate: [function (value) {
          return (0,_redhat_cloud_services_frontend_components_sources_esm_SourceAddSchema__WEBPACK_IMPORTED_MODULE_5__.asyncValidatorDebounced)(value, source.id, intl);
        }, {
          type: _data_driven_forms_react_form_renderer_dist_esm_validator_types__WEBPACK_IMPORTED_MODULE_6__.default.REQUIRED
        }],
        isRequired: true,
        resolveProps: _redhat_cloud_services_frontend_components_sources_esm_validated__WEBPACK_IMPORTED_MODULE_8__.default,
        initialValue: source.name
      }]
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SourceRenameModal);

/***/ })

}]);
//# sourceMappingURL=renameSource.35a947af3b5e0ac421f7.js.map