(self["webpackChunksources_ui"] = self["webpackChunksources_ui"] || []).push([["sourcesPage"],{

/***/ "./src/components/CloudTiles/CloudEmptyState.js":
/*!******************************************************!*\
  !*** ./src/components/CloudTiles/CloudEmptyState.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/Card */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardBody */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardTitle */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardFooter */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardFooter.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _CloudTiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CloudTiles */ "./src/components/CloudTiles/CloudTiles.js");
/* eslint-disable react/display-name */









var CLOUD_CATALOG_HREF = 'https://catalog.redhat.com/cloud';

var CloudEmptyState = function CloudEmptyState(_ref) {
  var setSelectedType = _ref.setSelectedType;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__.Card, {
    className: "ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_5__.CardTitle, null, intl.formatMessage({
    id: 'cloud.emptystate.cardTitle',
    defaultMessage: 'Get started by connecting to your public clouds'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_6__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__.Text, null, intl.formatMessage({
    id: 'cloud.emptystate.cardDescription',
    defaultMessage: 'Select an available provider.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "provider-tiles pf-u-mt-md pf-u-mb-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CloudTiles__WEBPACK_IMPORTED_MODULE_2__.default, {
    setSelectedType: setSelectedType
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_CardFooter__WEBPACK_IMPORTED_MODULE_8__.CardFooter, {
    className: "cloud-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__.Text, {
    className: "catalog-link pf-u-mt-lg"
  }, intl.formatMessage({
    id: 'cloud.emptystate.catalogLink',
    defaultMessage: 'Looking for a different provider? <a>See all Red Hat Certified Cloud and Service Providers</a>'
  }, {
    a: function a(chunks) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__.Text, {
        key: "link",
        component: "a",
        href: CLOUD_CATALOG_HREF,
        target: "_blank",
        rel: "noopener noreferrer"
      }, chunks);
    }
  }))));
};

CloudEmptyState.propTypes = {
  setSelectedType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloudEmptyState);

/***/ }),

/***/ "./src/components/CloudTiles/CloudTiles.js":
/*!*************************************************!*\
  !*** ./src/components/CloudTiles/CloudTiles.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tile_Tile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tile/Tile */ "./node_modules/@patternfly/react-core/dist/esm/components/Tile/Tile.js");
/* harmony import */ var _TilesShared_ImageWithPlaceholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TilesShared/ImageWithPlaceholder */ "./src/components/TilesShared/ImageWithPlaceholder.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _TilesShared_DisabledTile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TilesShared/DisabledTile */ "./src/components/TilesShared/DisabledTile.js");










var mapper = function mapper(type, openWizard, TileComponent) {
  return {
    amazon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TileComponent, {
      isStacked: true,
      key: type,
      title: "Amazon Web Services",
      onClick: function onClick() {
        return openWizard('amazon');
      },
      className: "tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TilesShared_ImageWithPlaceholder__WEBPACK_IMPORTED_MODULE_5__.default, {
        className: "provider-icon pf-u-mb-sm",
        src: "/apps/frontend-assets/partners-icons/aws.svg",
        alt: "aws logo"
      })
    }),
    google: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TileComponent, {
      isStacked: true,
      key: type,
      title: "Google Cloud",
      className: "tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",
      onClick: function onClick() {
        return openWizard('google');
      },
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TilesShared_ImageWithPlaceholder__WEBPACK_IMPORTED_MODULE_5__.default, {
        className: "provider-icon pf-u-mb-sm disabled-icon",
        src: "/apps/frontend-assets/partners-icons/google-cloud-short.svg",
        alt: "google logo"
      })
    }),
    azure: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TileComponent, {
      isStacked: true,
      key: type,
      title: "Microsoft Azure",
      onClick: function onClick() {
        return openWizard('azure');
      },
      className: "tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TilesShared_ImageWithPlaceholder__WEBPACK_IMPORTED_MODULE_5__.default, {
        className: "provider-icon pf-u-mb-sm",
        src: "/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",
        alt: "azure logo"
      })
    })
  }[type];
};

var CloudTiles = function CloudTiles(_ref) {
  var setSelectedType = _ref.setSelectedType;

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref2) {
    var sources = _ref2.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_3__.shallowEqual),
      sourceTypes = _useSelector.sourceTypes;

  var _useHistory = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)(),
      push = _useHistory.push;

  var hasWritePermissions = (0,_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_6__.useHasWritePermissions)();

  var openWizard = function openWizard(type) {
    setSelectedType(type);
    push(_Routes__WEBPACK_IMPORTED_MODULE_4__.routes.sourcesNew.path);
  };

  var TileComponent = hasWritePermissions ? _patternfly_react_core_dist_esm_components_Tile_Tile__WEBPACK_IMPORTED_MODULE_8__.Tile : _TilesShared_DisabledTile__WEBPACK_IMPORTED_MODULE_7__.default;
  return sourceTypes.sort(function (a, b) {
    return a.product_name.localeCompare(b.product_name);
  }).map(function (_ref3) {
    var name = _ref3.name;
    return mapper(name, openWizard, TileComponent);
  });
};

CloudTiles.propTypes = {
  setSelectedType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloudTiles);

/***/ }),

/***/ "./src/components/RedHatTiles/RedHatEmptyState.js":
/*!********************************************************!*\
  !*** ./src/components/RedHatTiles/RedHatEmptyState.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/Card */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardBody */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardTitle */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _RedHatTiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RedHatTiles */ "./src/components/RedHatTiles/RedHatTiles.js");
/* eslint-disable react/display-name */









var RedHatEmptyState = function RedHatEmptyState(_ref) {
  var setSelectedType = _ref.setSelectedType;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__.Card, {
    className: "ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_5__.CardTitle, null, intl.formatMessage({
    id: 'redhat.emptystate.cardTitle',
    defaultMessage: 'Get started by connecting to your Red Hat applications'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_6__.CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__.Text, null, intl.formatMessage({
    id: 'redhat.emptystate.cardDescription',
    defaultMessage: 'Select an available application.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "provider-tiles pf-u-mt-md pf-u-mb-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RedHatTiles__WEBPACK_IMPORTED_MODULE_2__.default, {
    setSelectedType: setSelectedType
  }))));
};

RedHatEmptyState.propTypes = {
  setSelectedType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedHatEmptyState);

/***/ }),

/***/ "./src/components/RedHatTiles/RedHatTiles.js":
/*!***************************************************!*\
  !*** ./src/components/RedHatTiles/RedHatTiles.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tile_Tile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tile/Tile */ "./node_modules/@patternfly/react-core/dist/esm/components/Tile/Tile.js");
/* harmony import */ var _TilesShared_ImageWithPlaceholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TilesShared/ImageWithPlaceholder */ "./src/components/TilesShared/ImageWithPlaceholder.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _TilesShared_DisabledTile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TilesShared/DisabledTile */ "./src/components/TilesShared/DisabledTile.js");









var RedHatTiles = function RedHatTiles(_ref) {
  var setSelectedType = _ref.setSelectedType;

  var _useHistory = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)(),
      push = _useHistory.push;

  var hasWritePermissions = (0,_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_5__.useHasWritePermissions)();

  var openWizard = function openWizard(type) {
    setSelectedType(type);
    push(_Routes__WEBPACK_IMPORTED_MODULE_3__.routes.sourcesNew.path);
  };

  var TileComponent = hasWritePermissions ? _patternfly_react_core_dist_esm_components_Tile_Tile__WEBPACK_IMPORTED_MODULE_7__.Tile : _TilesShared_DisabledTile__WEBPACK_IMPORTED_MODULE_6__.default;
  var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TilesShared_ImageWithPlaceholder__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: "redhat-icon",
    src: "/apps/frontend-assets/red-hat-logos/stacked.svg",
    alt: "red hat logo"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TileComponent, {
    isStacked: true,
    title: "Ansible Automation Platform",
    onClick: function onClick() {
      return openWizard('ansible-tower');
    },
    className: "tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",
    icon: icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TileComponent, {
    isStacked: true,
    title: "OpenShift Container Platfrom",
    className: "tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",
    onClick: function onClick() {
      return openWizard('openshift');
    },
    icon: icon
  }));
};

RedHatTiles.propTypes = {
  setSelectedType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedHatTiles);

/***/ }),

/***/ "./src/components/SourcesErrorState.js":
/*!*********************************************!*\
  !*** ./src/components/SourcesErrorState.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/exclamation-circle-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon.js");











var SourcesErrorState = function SourcesErrorState() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_2__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_3__.EmptyState, {
    className: "ins-c-sources__empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_4__.EmptyStateIcon, {
    icon: _patternfly_react_icons_dist_esm_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_5__.default,
    color: "var(--pf-global--danger-color--100)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_6__.Title, {
    headingLevel: "h5",
    size: "lg"
  }, intl.formatMessage({
    id: 'sources.errorStateTitle',
    defaultMessage: 'Something went wrong'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_7__.EmptyStateBody, null, intl.formatMessage({
    id: 'sources.errorStateBody',
    defaultMessage: 'There was a problem processing the request. Try refreshing the page. If the problem persists, contact <a>Red Hat support.</a>'
  }, {
    // eslint-disable-next-line react/display-name
    a: function a(chunks) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_8__.Text, {
        key: "link",
        component: "a",
        href: "https://access.redhat.com/support",
        target: "_blank",
        rel: "noopener noreferrer"
      }, chunks);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__.Button, {
    className: "pf-u-mt-xl",
    variant: "primary",
    component: "a",
    href: window.location.href
  }, intl.formatMessage({
    id: 'sources.retry',
    defaultMessage: 'Retry'
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SourcesErrorState);

/***/ }),

/***/ "./src/components/SourcesTable/EmptyStateTable.js":
/*!********************************************************!*\
  !*** ./src/components/SourcesTable/EmptyStateTable.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_search_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/search-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/search-icon.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");












var EmptyStateTable = function EmptyStateTable() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.default)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_4__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_5__.EmptyState, {
    variant: _patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_5__.EmptyStateVariant.small
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_6__.EmptyStateIcon, {
    icon: _patternfly_react_icons_dist_esm_icons_search_icon__WEBPACK_IMPORTED_MODULE_7__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_8__.Title, {
    headingLevel: "h2",
    size: "lg"
  }, intl.formatMessage({
    id: 'sources.noResultsFoundTitle',
    defaultMessage: 'No sources found'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_9__.EmptyStateBody, null, intl.formatMessage({
    id: 'sources.noResultsFoundDescription',
    defaultMessage: 'No sources match the filter criteria. Remove all filters or clear all filters to show sources.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_10__.Button, {
    variant: "link",
    onClick: function onClick() {
      return dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_2__.clearFilters)());
    }
  }, intl.formatMessage({
    id: 'sources.clearAllFilters',
    defaultMessage: 'Clear all filters'
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyStateTable);

/***/ }),

/***/ "./src/components/SourcesTable/SourcesTable.js":
/*!*****************************************************!*\
  !*** ./src/components/SourcesTable/SourcesTable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareColumnsCells": () => (/* binding */ prepareColumnsCells),
/* harmony export */   "insertEditAction": () => (/* binding */ insertEditAction),
/* harmony export */   "actionResolver": () => (/* binding */ actionResolver),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-table */ "webpack/sharing/consume/default/@patternfly/react-table/@patternfly/react-table");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loaders */ "./src/components/SourcesTable/loaders.js");
/* harmony import */ var _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../views/sourcesViewDefinition */ "./src/views/sourcesViewDefinition.js");
/* harmony import */ var _EmptyStateTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EmptyStateTable */ "./src/components/SourcesTable/EmptyStateTable.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var itemToCells = function itemToCells(item, columns, sourceTypes, appTypes) {
  return columns.filter(function (column) {
    return column.title || column.hidden;
  }).map(function (col) {
    return {
      title: col.formatter ? col.formatter(item[col.value], item, {
        sourceTypes: sourceTypes,
        appTypes: appTypes
      }) : item[col.value] || ''
    };
  });
};

var renderSources = function renderSources(entities, columns, sourceTypes, appTypes, removingSources) {
  return entities.filter(function (_ref) {
    var hidden = _ref.hidden;
    return !hidden;
  }).reduce(function (acc, item) {
    var isDeleting = removingSources.includes(item.id);
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(acc), [_objectSpread(_objectSpread({}, item), {}, {
      isOpen: !!item.expanded,
      cells: itemToCells(item, columns, sourceTypes, appTypes),
      disableActions: isDeleting,
      isDeleting: isDeleting
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
      hidden: column.hidden,
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.wrappable]
    }, column.sortable && {
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.sortable, _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.wrappable]
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
      return push((0,_Routes__WEBPACK_IMPORTED_MODULE_13__.replaceRouteId)(_Routes__WEBPACK_IMPORTED_MODULE_13__.routes.sourcesDetail.path, id));
    }
  }, !isOrgAdmin ? disabledProps : {
    component: 'button'
  }));
};
var actionResolver = function actionResolver(intl, push, isOrgAdmin) {
  return function (rowData) {
    var tooltip = intl.formatMessage({
      id: 'sources.notAdminButton',
      defaultMessage: 'To perform this action, you must be granted write permissions from your Organization Administrator.'
    });
    var disabledProps = {
      tooltip: tooltip,
      isDisabled: true,
      className: 'ins-c-sources__disabled-drodpown-item'
    };
    var actions = [];
    var isSourceEditable = !rowData.imported;

    if (isSourceEditable) {
      insertEditAction(actions, intl, push, isOrgAdmin, disabledProps);
    }

    actions.push(_objectSpread({
      title: intl.formatMessage({
        id: 'sources.remove',
        defaultMessage: 'Remove'
      }),
      onClick: function onClick(_ev, _i, _ref3) {
        var id = _ref3.id;
        return push((0,_Routes__WEBPACK_IMPORTED_MODULE_13__.replaceRouteId)(_Routes__WEBPACK_IMPORTED_MODULE_13__.routes.sourcesRemove.path, id));
      }
    }, !isOrgAdmin ? disabledProps : {
      component: 'button'
    }));
    return actions;
  };
};

var SourcesTable = function SourcesTable() {
  var _useHistory = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)(),
      push = _useHistory.push;

  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_14__.default)();
  var loaded = (0,_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_11__.useIsLoaded)();
  var writePermissions = (0,_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_12__.useHasWritePermissions)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (_ref4) {
    var sources = _ref4.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__.shallowEqual),
      appTypes = _useSelector.appTypes,
      entities = _useSelector.entities,
      sourceTypes = _useSelector.sourceTypes,
      sourceTypesLoaded = _useSelector.sourceTypesLoaded,
      appTypesLoaded = _useSelector.appTypesLoaded,
      sortBy = _useSelector.sortBy,
      sortDirection = _useSelector.sortDirection,
      numberOfEntities = _useSelector.numberOfEntities,
      removingSources = _useSelector.removingSources;

  var reduxDispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var notSortable = numberOfEntities === 0 || !loaded;

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(reducer, initialState((0,_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_9__.sourcesColumns)(intl, notSortable))),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var refreshColumns = function refreshColumns() {
    var columns = (0,_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_9__.sourcesColumns)(intl, notSortable);
    return dispatch({
      cells: prepareColumnsCells(columns)
    });
  };

  var refreshSources = function refreshSources() {
    var columns = (0,_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_9__.sourcesColumns)(intl, notSortable);
    return dispatch({
      rows: renderSources(entities, columns, sourceTypes, appTypes, removingSources),
      cells: prepareColumnsCells(columns)
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
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
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (state.isLoaded) {
      refreshSources();
    }
  }, [entities, removingSources]);
  var shownRows = state.rows;

  if (numberOfEntities === 0 && state.isLoaded) {
    shownRows = [{
      heightAuto: true,
      cells: [{
        props: {
          colSpan: _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_9__.COLUMN_COUNT
        },
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_EmptyStateTable__WEBPACK_IMPORTED_MODULE_10__.default, null)
      }]
    }];
  } else if (!loaded || !appTypesLoaded || !sourceTypesLoaded) {
    shownRows = [{
      heightAuto: true,
      cells: [{
        props: {
          colSpan: _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_9__.COLUMN_COUNT,
          className: 'sources-placeholder-row'
        },
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_loaders__WEBPACK_IMPORTED_MODULE_8__.PlaceHolderTable, null)
      }]
    }];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.Table, {
    gridBreakPoint: "grid-lg",
    "aria-label": intl.formatMessage({
      id: 'sources.list',
      defaultMessage: 'List of Sources'
    }),
    onSort: function onSort(_event, key, direction) {
      return reduxDispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_7__.sortEntities)(state.cells[key].value, direction));
    },
    sortBy: {
      index: state.cells.map(function (cell) {
        return cell.hidden ? 'hidden' : cell.value;
      }).indexOf(sortBy),
      direction: sortDirection
    },
    rows: shownRows,
    cells: state.cells,
    actionResolver: loaded && numberOfEntities > 0 ? actionResolver(intl, push, writePermissions) : undefined,
    rowWrapper: _loaders__WEBPACK_IMPORTED_MODULE_8__.RowWrapperLoader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.TableHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__.TableBody, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SourcesTable);

/***/ }),

/***/ "./src/components/TabNavigation.js":
/*!*****************************************!*\
  !*** ./src/components/TabNavigation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/Tabs */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/Tabs.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/Tab */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/Tab.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_TabTitleIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/TabTitleIcon */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/TabTitleIcon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_TabTitleText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/TabTitleText */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/TabTitleText.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_redhat_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/redhat-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/redhat-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_cloud_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/cloud-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/cloud-icon.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/constants */ "./src/utilities/constants.js");












var TabNavigation = function TabNavigation() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.default)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var activeVendor = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (_ref) {
    var sources = _ref.sources;
    return sources.activeVendor;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_5__.Tabs, {
    activeKey: activeVendor,
    onSelect: function onSelect(_e, key) {
      return dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_2__.setActiveVendor)(key));
    },
    className: "pf-u-mt-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_Tab__WEBPACK_IMPORTED_MODULE_6__.Tab, {
    eventKey: _utilities_constants__WEBPACK_IMPORTED_MODULE_3__.CLOUD_VENDOR,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_TabTitleIcon__WEBPACK_IMPORTED_MODULE_7__.TabTitleIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_esm_icons_cloud_icon__WEBPACK_IMPORTED_MODULE_8__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_TabTitleText__WEBPACK_IMPORTED_MODULE_9__.TabTitleText, null, intl.formatMessage({
      id: 'sources.cloudSources',
      defaultMessage: 'Cloud sources'
    })))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_Tab__WEBPACK_IMPORTED_MODULE_6__.Tab, {
    eventKey: _utilities_constants__WEBPACK_IMPORTED_MODULE_3__.REDHAT_VENDOR,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_TabTitleIcon__WEBPACK_IMPORTED_MODULE_7__.TabTitleIcon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_icons_dist_esm_icons_redhat_icon__WEBPACK_IMPORTED_MODULE_10__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_patternfly_react_core_dist_esm_components_Tabs_TabTitleText__WEBPACK_IMPORTED_MODULE_9__.TabTitleText, null, intl.formatMessage({
      id: 'sources.redhatSources',
      defaultMessage: 'Red Hat sources'
    })))
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabNavigation);

/***/ }),

/***/ "./src/components/TilesShared/DisabledTile.js":
/*!****************************************************!*\
  !*** ./src/components/TilesShared/DisabledTile.js ***!
  \****************************************************/
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
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tile_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tile/Tile */ "./node_modules/@patternfly/react-core/dist/esm/components/Tile/Tile.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tooltip/Tooltip */ "./node_modules/@patternfly/react-core/dist/esm/components/Tooltip/Tooltip.js");






var DisabledTile = function DisabledTile(props) {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.default)();
  var tooltip = intl.formatMessage({
    id: 'sources.notAdminButton',
    defaultMessage: 'To perform this action, you must be granted write permissions from your Organization Administrator.'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    content: tooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "disabled-tile-with-tooltip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Tile_Tile__WEBPACK_IMPORTED_MODULE_4__.Tile, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    isDisabled: true
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisabledTile);

/***/ }),

/***/ "./src/components/TilesShared/ImageWithPlaceholder.js":
/*!************************************************************!*\
  !*** ./src/components/TilesShared/ImageWithPlaceholder.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SourcesTable/loaders */ "./src/components/SourcesTable/loaders.js");







var ImageWithPlaceholder = function ImageWithPlaceholder(_ref) {
  var src = _ref.src,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["src"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, !loaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_5__.Loader, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: "40px",
    width: "110px"
  }, rest)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    src: src,
    onLoad: function onLoad() {
      return setLoaded(true);
    },
    style: {
      display: loaded ? 'initial' : 'none'
    }
  }, rest)));
};

ImageWithPlaceholder.propTypes = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageWithPlaceholder);

/***/ }),

/***/ "./src/pages/Sources.js":
/*!******************************!*\
  !*** ./src/pages/Sources.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PrimaryToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PrimaryToolbar/PrimaryToolbar.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeader.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/PageHeaderTitle.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Section */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Section/Section.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_filterApps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/filterApps */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/filterApps.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_filterTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/filterTypes */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/filterTypes.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _components_SourcesTable_SourcesTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SourcesTable/SourcesTable */ "./src/components/SourcesTable/SourcesTable.js");
/* harmony import */ var _components_SourcesErrorState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SourcesErrorState */ "./src/components/SourcesErrorState.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Routes */ "./src/Routes.js");
/* harmony import */ var _Sources_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Sources/helpers */ "./src/pages/Sources/helpers.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/CustomRoute/CustomRoute */ "./src/components/CustomRoute/CustomRoute.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tooltip/Tooltip */ "./node_modules/@patternfly/react-core/dist/esm/components/Tooltip/Tooltip.js");
/* harmony import */ var _components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/SourcesTable/loaders */ "./src/components/SourcesTable/loaders.js");
/* harmony import */ var _components_TabNavigation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/TabNavigation */ "./src/components/TabNavigation.js");
/* harmony import */ var _components_CloudTiles_CloudCards__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/CloudTiles/CloudCards */ "./src/components/CloudTiles/CloudCards.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utilities/constants */ "./src/utilities/constants.js");
/* harmony import */ var _components_CloudTiles_CloudEmptyState__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/CloudTiles/CloudEmptyState */ "./src/components/CloudTiles/CloudEmptyState.js");
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/formatters */ "./src/views/formatters.js");
/* harmony import */ var _components_RedHatTiles_RedHatEmptyState__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/RedHatTiles/RedHatEmptyState */ "./src/components/RedHatTiles/RedHatEmptyState.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var SourceRemoveModal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return Promise.all(/*! import() | remove */[__webpack_require__.e("pfVendor"), __webpack_require__.e("remove")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/SourceRemoveModal/SourceRemoveModal */ "./src/components/SourceRemoveModal/SourceRemoveModal.js"));
});
var AddSourceWizard = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(function () {
  return Promise.all(/*! import() | addSource */[__webpack_require__.e("pfVendor"), __webpack_require__.e("rhcsVendor"), __webpack_require__.e("vendors-node_modules_data-driven-forms_pf4-component-mapper_dist_esm_component-mapper_js-node-f945cd"), __webpack_require__.e("addSource")]).then(__webpack_require__.bind(__webpack_require__, /*! @redhat-cloud-services/frontend-components-sources/esm/addSourceWizard */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/addSourceWizard.js")).then(function (module) {
    return {
      "default": module.AddSourceWizard
    };
  });
});












var initialState = {
  filter: undefined,
  selectedType: undefined,
  wizardInitialState: undefined,
  wizardInitialValues: undefined
};

var reducer = function reducer(state, _ref) {
  var type = _ref.type,
      value = _ref.value,
      selectedType = _ref.selectedType,
      initialValues = _ref.initialValues,
      initialState = _ref.initialState;

  switch (type) {
    case 'setFilterValue':
      return _objectSpread(_objectSpread({}, state), {}, {
        filter: value
      });

    case 'setSelectedType':
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedType: selectedType
      });

    case 'retryWizard':
      return _objectSpread(_objectSpread({}, state), {}, {
        wizardInitialState: initialState,
        wizardInitialValues: initialValues
      });

    case 'closeWizard':
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedType: undefined,
        wizardInitialState: undefined,
        wizardInitialValues: undefined
      });
  }
};

var SourcesPage = function SourcesPage() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      filter = _useReducer2$.filter,
      selectedType = _useReducer2$.selectedType,
      wizardInitialState = _useReducer2$.wizardInitialState,
      wizardInitialValues = _useReducer2$.wizardInitialValues,
      stateDispatch = _useReducer2[1];

  var entitiesLoaded = (0,_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_12__.useIsLoaded)();
  var hasWritePermissions = (0,_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_13__.useHasWritePermissions)();
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_22__.default)();
  var sources = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref2) {
    var sources = _ref2.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_3__.shallowEqual);
  var filterValue = sources.filterValue,
      numberOfEntities = sources.numberOfEntities,
      appTypes = sources.appTypes,
      pageSize = sources.pageSize,
      pageNumber = sources.pageNumber,
      fetchingError = sources.fetchingError,
      sourceTypes = sources.sourceTypes,
      paginationClicked = sources.paginationClicked,
      appTypesLoaded = sources.appTypesLoaded,
      sourceTypesLoaded = sources.sourceTypesLoaded,
      activeVendor = sources.activeVendor;
  var loaded = entitiesLoaded && sourceTypesLoaded && appTypesLoaded;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (filter !== filterValue.name) {
      stateDispatch({
        type: 'setFilterValue',
        value: filterValue.name
      });
    }
  }, [filterValue.name]);

  var onSetPage = function onSetPage(_e, page) {
    return dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_7__.pageAndSize)(page, pageSize));
  };

  var onPerPageSelect = function onPerPageSelect(_e, perPage) {
    return dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_7__.pageAndSize)(1, perPage));
  };

  var maximumPageNumber = Math.ceil(numberOfEntities / pageSize);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (loaded && numberOfEntities > 0 && pageNumber > Math.max(maximumPageNumber, 1)) {
      onSetPage({}, maximumPageNumber);
    }
  });
  var paginationConfig = {
    itemCount: numberOfEntities,
    page: pageNumber,
    perPage: pageSize,
    onSetPage: onSetPage,
    onPerPageSelect: onPerPageSelect,
    className: 'top-pagination'
  };

  var paginationConfigBottom = _objectSpread(_objectSpread({}, paginationConfig), {}, {
    dropDirection: 'up',
    variant: 'bottom',
    isCompact: false,
    className: 'bottom-pagination'
  });

  var showPaginationLoader = (!loaded || !appTypesLoaded || !sourceTypesLoaded) && !paginationClicked;
  var filteredSourceTypes = sourceTypes.filter(_redhat_cloud_services_frontend_components_sources_esm_filterTypes__WEBPACK_IMPORTED_MODULE_6__.filterVendorTypes);

  var mainContent = function mainContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_23__.default, {
      pagination: showPaginationLoader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_15__.PaginationLoader, null) : numberOfEntities > 0 ? paginationConfig : undefined,
      actionsConfig: hasWritePermissions ? {
        actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
          to: _Routes__WEBPACK_IMPORTED_MODULE_10__.routes.sourcesNew.path,
          key: "addSourceButton"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_24__.Button, {
          variant: "primary",
          id: "addSourceButton"
        }, intl.formatMessage({
          id: 'sources.addSource',
          defaultMessage: 'Add source'
        })))]
      } : {
        actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_25__.Tooltip, {
          content: intl.formatMessage({
            id: 'sources.notAdminAddButton',
            defaultMessage: 'To add a source, you must be granted write permissions from your Organization Administrator.'
          }),
          key: "addSourceButton"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
          tabIndex: "0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_24__.Button, {
          variant: "primary",
          isDisabled: true,
          id: "addSourceButton"
        }, intl.formatMessage({
          id: 'sources.addSource',
          defaultMessage: 'Add source'
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
              stateDispatch({
                type: 'setFilterValue',
                value: value
              });
              (0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.debouncedFiltering)(function () {
                return (0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.setFilter)('name', value, dispatch);
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
              return (0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.setFilter)('source_type_id', value, dispatch);
            },
            items: (0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.prepareSourceTypeSelection)(filteredSourceTypes),
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
              return (0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.setFilter)('applications', value, dispatch);
            },
            items: (0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.prepareApplicationTypeSelection)((appTypes === null || appTypes === void 0 ? void 0 : appTypes.filter((0,_redhat_cloud_services_frontend_components_sources_esm_filterApps__WEBPACK_IMPORTED_MODULE_5__.filterVendorAppTypes)(filteredSourceTypes))) || []),
            value: filterValue.applications
          }
        }, {
          label: intl.formatMessage({
            id: 'sources.availabilityStatus',
            defaultMessage: 'Status'
          }),
          type: 'checkbox',
          filterValues: {
            onChange: function onChange(event, _value, selectedValue) {
              return (0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.setFilter)('availability_status', event.target.checked ? [selectedValue] : [], dispatch);
            },
            items: [{
              label: intl.formatMessage({
                id: 'sources.available',
                defaultMessage: 'Available'
              }),
              value: _views_formatters__WEBPACK_IMPORTED_MODULE_20__.AVAILABLE
            }, {
              label: intl.formatMessage({
                id: 'sources.unavailable',
                defaultMessage: 'Unavailable'
              }),
              value: _views_formatters__WEBPACK_IMPORTED_MODULE_20__.UNAVAILABLE
            }],
            value: filterValue.availability_status
          }
        }]
      },
      activeFiltersConfig: {
        filters: (0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.prepareChips)(filterValue, sourceTypes, appTypes, intl),
        onDelete: function onDelete(_event, chips, deleteAll) {
          return dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_7__.filterSources)((0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.removeChips)(chips, filterValue, deleteAll)));
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_SourcesTable_SourcesTable__WEBPACK_IMPORTED_MODULE_8__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_23__.default, {
      pagination: showPaginationLoader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_15__.PaginationLoader, null) : numberOfEntities > 0 ? paginationConfigBottom : undefined
    }));
  };

  var hasSomeFilter = Object.entries(filterValue).map(function (_ref3) {
    var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 2),
        _key = _ref4[0],
        value = _ref4[1];

    return value && (!Array.isArray(value) || Array.isArray(value) && value.length > 0);
  }).filter(Boolean).length > 0;
  var showEmptyState = loaded && numberOfEntities === 0 && !hasSomeFilter;
  var showInfoCards = activeVendor === _utilities_constants__WEBPACK_IMPORTED_MODULE_18__.CLOUD_VENDOR && !showEmptyState;

  var setSelectedType = function setSelectedType(selectedType) {
    return stateDispatch({
      type: 'setSelectedType',
      selectedType: selectedType
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_14__.default, {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_10__.routes.sourcesRemove,
    Component: SourceRemoveModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_14__.default, {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_10__.routes.sourcesNew,
    Component: AddSourceWizard,
    componentProps: {
      sourceTypes: (0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.loadedTypes)(sourceTypes, sourceTypesLoaded),
      applicationTypes: (0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.loadedTypes)(appTypes, appTypesLoaded),
      isOpen: true,
      onClose: function onClose() {
        stateDispatch({
          type: 'closeWizard'
        });
        history.push(_Routes__WEBPACK_IMPORTED_MODULE_10__.routes.sources.path);
      },
      afterSuccess: function afterSuccess(source) {
        return (0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.afterSuccess)(dispatch, source);
      },
      hideSourcesButton: true,
      selectedType: selectedType,
      submitCallback: function submitCallback(state) {
        return (0,_Sources_helpers__WEBPACK_IMPORTED_MODULE_11__.checkSubmit)(state, dispatch, history.push, intl, stateDispatch);
      },
      initialValues: wizardInitialValues,
      initialWizardState: wizardInitialState
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_26__.default, {
    className: "pf-u-pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_27__.default, {
    title: intl.formatMessage({
      id: 'sources.sources',
      defaultMessage: 'Sources'
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_TabNavigation__WEBPACK_IMPORTED_MODULE_16__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_28__.default, {
    type: "content"
  }, showInfoCards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_CloudTiles_CloudCards__WEBPACK_IMPORTED_MODULE_17__.default, null), fetchingError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_SourcesErrorState__WEBPACK_IMPORTED_MODULE_9__.default, null), !fetchingError && showEmptyState && activeVendor === _utilities_constants__WEBPACK_IMPORTED_MODULE_18__.CLOUD_VENDOR && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_CloudTiles_CloudEmptyState__WEBPACK_IMPORTED_MODULE_19__.default, {
    setSelectedType: setSelectedType
  }), !fetchingError && showEmptyState && activeVendor === _utilities_constants__WEBPACK_IMPORTED_MODULE_18__.REDHAT_VENDOR && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_RedHatTiles_RedHatEmptyState__WEBPACK_IMPORTED_MODULE_21__.default, {
    setSelectedType: setSelectedType
  }), !fetchingError && !showEmptyState && mainContent()));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SourcesPage);

/***/ }),

/***/ "./src/pages/Sources/helpers.js":
/*!**************************************!*\
  !*** ./src/pages/Sources/helpers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debouncedFiltering": () => (/* binding */ debouncedFiltering),
/* harmony export */   "afterSuccessLoadParameters": () => (/* binding */ afterSuccessLoadParameters),
/* harmony export */   "afterSuccess": () => (/* binding */ afterSuccess),
/* harmony export */   "prepareSourceTypeSelection": () => (/* binding */ prepareSourceTypeSelection),
/* harmony export */   "prepareApplicationTypeSelection": () => (/* binding */ prepareApplicationTypeSelection),
/* harmony export */   "setFilter": () => (/* binding */ setFilter),
/* harmony export */   "chipsFormatters": () => (/* binding */ chipsFormatters),
/* harmony export */   "prepareChips": () => (/* binding */ prepareChips),
/* harmony export */   "removeChips": () => (/* binding */ removeChips),
/* harmony export */   "loadedTypes": () => (/* binding */ loadedTypes),
/* harmony export */   "checkSubmit": () => (/* binding */ checkSubmit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/dist/index.es.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Alert_AlertActionLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Alert/AlertActionLink */ "./node_modules/@patternfly/react-core/dist/esm/components/Alert/AlertActionLink.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_computeSourceStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/computeSourceStatus */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/computeSourceStatus.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/formatters */ "./src/views/formatters.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var debouncedFiltering = (0,awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_2__.default)(function (refresh) {
  return refresh();
}, 500);
var afterSuccessLoadParameters = {
  pageNumber: 1,
  sortBy: 'created_at',
  sortDirection: 'desc'
};
var afterSuccess = function afterSuccess(dispatch) {
  return dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__.loadEntities)(afterSuccessLoadParameters));
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
  return dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__.filterSources)(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, column, value)));
};
var chipsFormatters = function chipsFormatters(key, filterValue, sourceTypes, appTypes, intl) {
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
    },
    availability_status: function availability_status() {
      return {
        category: 'Status',
        key: key,
        chips: [{
          value: filterValue[key][0],
          name: filterValue[key][0] === _views_formatters__WEBPACK_IMPORTED_MODULE_6__.AVAILABLE ? intl.formatMessage({
            id: 'sources.available',
            defaultMessage: 'Available'
          }) : intl.formatMessage({
            id: 'sources.unavailable',
            defaultMessage: 'Unavailable'
          })
        }]
      };
    }
  }[key] || function () {
    return {
      name: key
    };
  };
};
var prepareChips = function prepareChips(filterValue, sourceTypes, appTypes, intl) {
  return Object.keys(filterValue).map(function (key) {
    return filterValue[key] && filterValue[key].length > 0 ? chipsFormatters(key, filterValue, sourceTypes, appTypes, intl)() : undefined;
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
var checkSubmit = function checkSubmit(state, dispatch, push, intl, stateDispatch) {
  var _state$createdSource$, _state$createdSource$2, _state$createdSource$3, _state$createdSource$4, _state$sourceTypes$fi;

  var id = "sources-wizard-notification-".concat(Date.now());

  if (location.pathname.split('/').filter(Boolean).pop() !== _Routes__WEBPACK_IMPORTED_MODULE_5__.routes.sourcesNew.path.split('/').pop()) {
    if (state.isErrored) {
      var _state$wizardState = state.wizardState,
          activeStep = _state$wizardState.activeStep,
          activeStepIndex = _state$wizardState.activeStepIndex,
          maxStepIndex = _state$wizardState.maxStepIndex,
          prevSteps = _state$wizardState.prevSteps,
          registeredFieldsHistory = _state$wizardState.registeredFieldsHistory;
      dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__.addMessage)({
        title: intl.formatMessage({
          id: 'alert.error.title',
          defaultMessage: 'Error adding source'
        }),
        description: intl.formatMessage({
          id: 'alert.error.description',
          defaultMessage: 'There was a problem while trying to add source {name}. Please try again. If the error persists, open a support case.'
        }, {
          name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, state.values.source.name)
        }),
        variant: 'danger',
        id: id,
        actionLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Alert_AlertActionLink__WEBPACK_IMPORTED_MODULE_7__.AlertActionLink, {
          onClick: function onClick() {
            stateDispatch({
              type: 'retryWizard',
              initialValues: state.values,
              initialState: {
                activeStep: activeStep,
                activeStepIndex: activeStepIndex,
                maxStepIndex: maxStepIndex,
                prevSteps: prevSteps,
                registeredFieldsHistory: registeredFieldsHistory
              }
            });
            dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__.removeMessage)(id));
            push(_Routes__WEBPACK_IMPORTED_MODULE_5__.routes.sourcesNew.path);
          }
        }, intl.formatMessage({
          id: 'alert.error.link',
          defaultMessage: 'Retry'
        }))
      }));
    } else {
      switch ((0,_redhat_cloud_services_frontend_components_sources_esm_computeSourceStatus__WEBPACK_IMPORTED_MODULE_3__.default)(state.createdSource)) {
        case 'unavailable':
          dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__.addMessage)({
            title: intl.formatMessage({
              id: 'alert.error.title',
              defaultMessage: 'Source configuration unsuccessful'
            }),
            description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, ((_state$createdSource$ = state.createdSource.applications) === null || _state$createdSource$ === void 0 ? void 0 : (_state$createdSource$2 = _state$createdSource$[0]) === null || _state$createdSource$2 === void 0 ? void 0 : _state$createdSource$2.availability_status_error) || ((_state$createdSource$3 = state.createdSource.endpoint) === null || _state$createdSource$3 === void 0 ? void 0 : (_state$createdSource$4 = _state$createdSource$3[0]) === null || _state$createdSource$4 === void 0 ? void 0 : _state$createdSource$4.availability_status_error) || intl.formatMessage({
              id: 'wizard.unknownError',
              defaultMessage: 'Unknown error'
            }), "\xA0[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, state.createdSource.name), "]"),
            variant: 'danger',
            id: id,
            actionLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Alert_AlertActionLink__WEBPACK_IMPORTED_MODULE_7__.AlertActionLink, {
              onClick: function onClick() {
                dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__.removeMessage)(id));
                push((0,_Routes__WEBPACK_IMPORTED_MODULE_5__.replaceRouteId)(_Routes__WEBPACK_IMPORTED_MODULE_5__.routes.sourcesDetail.path, state.createdSource.id));
              }
            }, intl.formatMessage({
              id: 'alert.unavailable.link',
              defaultMessage: 'Edit source'
            }))
          }));
          break;

        case 'timeout':
          dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__.addMessage)({
            title: intl.formatMessage({
              id: 'alert.timeout.title',
              defaultMessage: 'Source configuration in progress'
            }),
            description: intl.formatMessage({
              id: 'alert.timeout.description',
              defaultMessage: 'We are still working to confirm credentials for source {name}. To track progress, check the Status column in the Sources table.'
            }, {
              name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, state.createdSource.name)
            }),
            variant: 'info'
          }));
          break;

        default:
          dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__.addMessage)({
            title: intl.formatMessage({
              id: 'alert.success.title',
              defaultMessage: '{type} connection successful'
            }, {
              type: (_state$sourceTypes$fi = state.sourceTypes.find(function (_ref3) {
                var id = _ref3.id;
                return id === state.createdSource.source_type_id;
              })) === null || _state$sourceTypes$fi === void 0 ? void 0 : _state$sourceTypes$fi.product_name
            }),
            description: intl.formatMessage({
              id: 'alert.success.description',
              defaultMessage: 'Source {name} was successfully added'
            }, {
              name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, state.createdSource.name)
            }),
            variant: 'success',
            id: id,
            actionLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_patternfly_react_core_dist_esm_components_Alert_AlertActionLink__WEBPACK_IMPORTED_MODULE_7__.AlertActionLink, {
              onClick: function onClick() {
                dispatch((0,_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__.removeMessage)(id));
                push((0,_Routes__WEBPACK_IMPORTED_MODULE_5__.replaceRouteId)(_Routes__WEBPACK_IMPORTED_MODULE_5__.routes.sourcesDetail.path, state.createdSource.id));
              }
            }, intl.formatMessage({
              id: 'alert.success.link',
              defaultMessage: 'View source details'
            }))
          }));
          break;
      }
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=sourcesPage.5d16fa163daa9c2f990b.js.map