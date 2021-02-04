(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sourcesPage"],{

/***/ "./src/components/CloudTiles/CloudEmptyState.js":
/*!******************************************************!*\
  !*** ./src/components/CloudTiles/CloudEmptyState.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/Card */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardBody */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardTitle */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardFooter */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardFooter.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _CloudTiles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CloudTiles */ "./src/components/CloudTiles/CloudTiles.js");
/* eslint-disable react/display-name */









var CLOUD_CATALOG_HREF = 'https://catalog.redhat.com/cloud';

var CloudEmptyState = function CloudEmptyState(_ref) {
  var setSelectedType = _ref.setSelectedType;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], null, intl.formatMessage({
    id: 'cloud.emptystate.cardTitle',
    defaultMessage: 'Get started by connecting to your public clouds'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_4__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, intl.formatMessage({
    id: 'cloud.emptystate.cardDescription',
    defaultMessage: 'Select an available provider.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "provider-tiles pf-u-mt-md pf-u-mb-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CloudTiles__WEBPACK_IMPORTED_MODULE_8__["default"], {
    setSelectedType: setSelectedType
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Card_CardFooter__WEBPACK_IMPORTED_MODULE_6__["CardFooter"], {
    className: "cloud-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    className: "catalog-link pf-u-mt-lg"
  }, intl.formatMessage({
    id: 'cloud.emptystate.catalogLink',
    defaultMessage: 'Looking for a different provider? <a>See all Red Hat Certified Cloud and Service Providers</a>'
  }, {
    a: function a(chunks) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_7__["Text"], {
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
  setSelectedType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CloudEmptyState);

/***/ }),

/***/ "./src/components/CloudTiles/CloudTiles.js":
/*!*************************************************!*\
  !*** ./src/components/CloudTiles/CloudTiles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tile_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tile/Tile */ "./node_modules/@patternfly/react-core/dist/esm/components/Tile/Tile.js");
/* harmony import */ var _TilesShared_ImageWithPlaceholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TilesShared/ImageWithPlaceholder */ "./src/components/TilesShared/ImageWithPlaceholder.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _TilesShared_DisabledTile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TilesShared/DisabledTile */ "./src/components/TilesShared/DisabledTile.js");









var CloudTiles = function CloudTiles(_ref) {
  var setSelectedType = _ref.setSelectedType;

  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(),
      push = _useHistory.push;

  var hasWritePermissions = Object(_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_6__["useHasWritePermissions"])();

  var openWizard = function openWizard(type) {
    setSelectedType(type);
    push(_Routes__WEBPACK_IMPORTED_MODULE_3__["routes"].sourcesNew.path);
  };

  var TileComponent = hasWritePermissions ? _patternfly_react_core_dist_esm_components_Tile_Tile__WEBPACK_IMPORTED_MODULE_4__["Tile"] : _TilesShared_DisabledTile__WEBPACK_IMPORTED_MODULE_7__["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TileComponent, {
    isStacked: true,
    title: "Amazon Web Services",
    onClick: function onClick() {
      return openWizard('amazon');
    },
    className: "tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TilesShared_ImageWithPlaceholder__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "provider-icon pf-u-mb-sm",
      src: "/apps/frontend-assets/partners-icons/aws.svg",
      alt: "aws logo"
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TileComponent, {
    isStacked: true,
    title: "Google Cloud",
    className: "tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",
    onClick: function onClick() {
      return openWizard('google');
    },
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TilesShared_ImageWithPlaceholder__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "provider-icon pf-u-mb-sm disabled-icon",
      src: "/apps/frontend-assets/partners-icons/google-cloud-short.svg",
      alt: "google logo"
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TileComponent, {
    isStacked: true,
    title: "Microsoft Azure",
    onClick: function onClick() {
      return openWizard('azure');
    },
    className: "tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TilesShared_ImageWithPlaceholder__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "provider-icon pf-u-mb-sm",
      src: "/apps/frontend-assets/partners-icons/microsoft-azure-short.svg",
      alt: "azure logo"
    })
  }));
};

CloudTiles.propTypes = {
  setSelectedType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CloudTiles);

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
/* harmony import */ var _RedirectNoWriteAccess_RedirectNoWriteAccess__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RedirectNoWriteAccess/RedirectNoWriteAccess */ "./src/components/RedirectNoWriteAccess/RedirectNoWriteAccess.js");
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");
/* harmony import */ var _RedirectNoId_RedirectNoId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RedirectNoId/RedirectNoId */ "./src/components/RedirectNoId/RedirectNoId.js");









var CustomRouteInternal = function CustomRouteInternal(_ref) {
  var route = _ref.route,
      children = _ref.children;
  var source = route.redirectNoId && Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_6__["useSource"])();

  if (!source && route.redirectNoId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_RedirectNoId_RedirectNoId__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, route.writeAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_RedirectNoWriteAccess_RedirectNoWriteAccess__WEBPACK_IMPORTED_MODULE_5__["default"], null), children);
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

/***/ "./src/components/RedHatTiles/RedHatEmptyState.js":
/*!********************************************************!*\
  !*** ./src/components/RedHatTiles/RedHatEmptyState.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/Card */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardBody */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Card/CardTitle */ "./node_modules/@patternfly/react-core/dist/esm/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _RedHatTiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RedHatTiles */ "./src/components/RedHatTiles/RedHatTiles.js");
/* eslint-disable react/display-name */









var RedHatEmptyState = function RedHatEmptyState(_ref) {
  var setSelectedType = _ref.setSelectedType;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "ins-c-sources__cloud-empty-state-card pf-u-mt-md pf-u-mt-0-on-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Card_CardTitle__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], null, intl.formatMessage({
    id: 'redhat.emptystate.cardTitle',
    defaultMessage: 'Get started by connecting to your Red Hat applications'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Card_CardBody__WEBPACK_IMPORTED_MODULE_4__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, intl.formatMessage({
    id: 'redhat.emptystate.cardDescription',
    defaultMessage: 'Select an available application.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "provider-tiles pf-u-mt-md pf-u-mb-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RedHatTiles__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setSelectedType: setSelectedType
  }))));
};

RedHatEmptyState.propTypes = {
  setSelectedType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RedHatEmptyState);

/***/ }),

/***/ "./src/components/RedHatTiles/RedHatTiles.js":
/*!***************************************************!*\
  !*** ./src/components/RedHatTiles/RedHatTiles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tile_Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tile/Tile */ "./node_modules/@patternfly/react-core/dist/esm/components/Tile/Tile.js");
/* harmony import */ var _TilesShared_ImageWithPlaceholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TilesShared/ImageWithPlaceholder */ "./src/components/TilesShared/ImageWithPlaceholder.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _TilesShared_DisabledTile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TilesShared/DisabledTile */ "./src/components/TilesShared/DisabledTile.js");









var RedHatTiles = function RedHatTiles(_ref) {
  var setSelectedType = _ref.setSelectedType;

  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(),
      push = _useHistory.push;

  var hasWritePermissions = Object(_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_6__["useHasWritePermissions"])();

  var openWizard = function openWizard(type) {
    setSelectedType(type);
    push(_Routes__WEBPACK_IMPORTED_MODULE_3__["routes"].sourcesNew.path);
  };

  var TileComponent = hasWritePermissions ? _patternfly_react_core_dist_esm_components_Tile_Tile__WEBPACK_IMPORTED_MODULE_4__["Tile"] : _TilesShared_DisabledTile__WEBPACK_IMPORTED_MODULE_7__["default"];
  var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TilesShared_ImageWithPlaceholder__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "redhat-icon",
    src: "/apps/frontend-assets/red-hat-logos/stacked.svg",
    alt: "red hat logo"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TileComponent, {
    isStacked: true,
    title: "Ansible Automation Platform",
    onClick: function onClick() {
      return openWizard('ansible-tower');
    },
    className: "tile pf-u-mr-md-on-md pf-u-mt-md pf-u-mt-0-on-md",
    icon: icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TileComponent, {
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
  setSelectedType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RedHatTiles);

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
/* harmony import */ var _hooks_useSource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useSource */ "./src/hooks/useSource.js");











var RedirectNoId = function RedirectNoId() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      id = _useParams.id;

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["useIntl"])();
  var source = Object(_hooks_useSource__WEBPACK_IMPORTED_MODULE_9__["useSource"])();
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

        dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["addHiddenSource"])(source));
        return source;
      }).then(function (source) {
        if (!source) {
          dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["addMessage"])({
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: _Routes__WEBPACK_IMPORTED_MODULE_8__["routes"].sources.path
    });
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (RedirectNoId);

/***/ }),

/***/ "./src/components/RedirectNoWriteAccess/RedirectNoWriteAccess.js":
/*!***********************************************************************!*\
  !*** ./src/components/RedirectNoWriteAccess/RedirectNoWriteAccess.js ***!
  \***********************************************************************/
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
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");








var RedirectNoWriteAccess = function RedirectNoWriteAccess() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["useIntl"])();
  var writePermissions = Object(_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_5__["useHasWritePermissions"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (writePermissions === false) {
      var title = intl.formatMessage({
        id: 'sources.insufficietnPerms',
        defaultMessage: 'Insufficient permissions'
      });
      var description = intl.formatMessage({
        id: 'sources.notAdminButton',
        defaultMessage: 'To perform this action, you must be granted write permissions from your Organization Administrator.'
      });
      dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_4__["addMessage"])({
        title: title,
        variant: 'danger',
        description: description
      }));
    }
  }, [writePermissions]);

  if (writePermissions === false) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: _Routes__WEBPACK_IMPORTED_MODULE_6__["routes"].sources.path
    });
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (RedirectNoWriteAccess);

/***/ }),

/***/ "./src/components/SourcesErrorState.js":
/*!*********************************************!*\
  !*** ./src/components/SourcesErrorState.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Text/Text */ "./node_modules/@patternfly/react-core/dist/esm/components/Text/Text.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/exclamation-circle-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon.js");











var SourcesErrorState = function SourcesErrorState() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_6__["Bullseye"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_3__["EmptyState"], {
    className: "ins-c-sources__empty-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_4__["EmptyStateIcon"], {
    icon: _patternfly_react_icons_dist_esm_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_9__["default"],
    color: "var(--pf-global--danger-color--100)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_7__["Title"], {
    headingLevel: "h5",
    size: "lg"
  }, intl.formatMessage({
    id: 'sources.errorStateTitle',
    defaultMessage: 'Something went wrong'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_5__["EmptyStateBody"], null, intl.formatMessage({
    id: 'sources.errorStateBody',
    defaultMessage: 'There was a problem processing the request. Try refreshing the page. If the problem persists, contact <a>Red Hat support.</a>'
  }, {
    // eslint-disable-next-line react/display-name
    a: function a(chunks) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Text_Text__WEBPACK_IMPORTED_MODULE_8__["Text"], {
        key: "link",
        component: "a",
        href: "https://access.redhat.com/support",
        target: "_blank",
        rel: "noopener noreferrer"
      }, chunks);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "pf-u-mt-xl",
    variant: "primary",
    component: "a",
    href: window.location.href
  }, intl.formatMessage({
    id: 'sources.retry',
    defaultMessage: 'Retry'
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SourcesErrorState);

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
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyState */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/esm/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye */ "./node_modules/@patternfly/react-core/dist/esm/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Title/Title */ "./node_modules/@patternfly/react-core/dist/esm/components/Title/Title.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_search_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/search-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/search-icon.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");












var EmptyStateTable = function EmptyStateTable() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_8__["useIntl"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_layouts_Bullseye_Bullseye__WEBPACK_IMPORTED_MODULE_5__["Bullseye"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], {
    variant: _patternfly_react_core_dist_esm_components_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_2__["EmptyStateVariant"].small
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateIcon__WEBPACK_IMPORTED_MODULE_3__["EmptyStateIcon"], {
    icon: _patternfly_react_icons_dist_esm_icons_search_icon__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Title_Title__WEBPACK_IMPORTED_MODULE_6__["Title"], {
    headingLevel: "h2",
    size: "lg"
  }, intl.formatMessage({
    id: 'sources.noResultsFoundTitle',
    defaultMessage: 'No sources found'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_EmptyState_EmptyStateBody__WEBPACK_IMPORTED_MODULE_4__["EmptyStateBody"], null, intl.formatMessage({
    id: 'sources.noResultsFoundDescription',
    defaultMessage: 'No sources match the filter criteria. Remove all filters or clear all filters to show sources.'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "link",
    onClick: function onClick() {
      return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_10__["clearFilters"])());
    }
  }, intl.formatMessage({
    id: 'sources.clearAllFilters',
    defaultMessage: 'Clear all filters'
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
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loaders */ "./src/components/SourcesTable/loaders.js");
/* harmony import */ var _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../views/sourcesViewDefinition */ "./src/views/sourcesViewDefinition.js");
/* harmony import */ var _EmptyStateTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EmptyStateTable */ "./src/components/SourcesTable/EmptyStateTable.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");




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
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["wrappable"]]
    }, column.sortable && {
      transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["sortable"], _patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["wrappable"]]
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
      return push(Object(_Routes__WEBPACK_IMPORTED_MODULE_14__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_14__["routes"].sourcesDetail.path, id));
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
        return push(Object(_Routes__WEBPACK_IMPORTED_MODULE_14__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_14__["routes"].sourcesRemove.path, id));
      }
    }, !isOrgAdmin ? disabledProps : {
      component: 'button'
    }));
    return actions;
  };
};

var SourcesTable = function SourcesTable() {
  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])(),
      push = _useHistory.push;

  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_7__["useIntl"])();
  var loaded = Object(_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_12__["useIsLoaded"])();
  var writePermissions = Object(_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_13__["useHasWritePermissions"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (_ref4) {
    var sources = _ref4.sources;
    return sources;
  }, react_redux__WEBPACK_IMPORTED_MODULE_4__["shallowEqual"]),
      appTypes = _useSelector.appTypes,
      entities = _useSelector.entities,
      sourceTypes = _useSelector.sourceTypes,
      sourceTypesLoaded = _useSelector.sourceTypesLoaded,
      appTypesLoaded = _useSelector.appTypesLoaded,
      sortBy = _useSelector.sortBy,
      sortDirection = _useSelector.sortDirection,
      numberOfEntities = _useSelector.numberOfEntities,
      removingSources = _useSelector.removingSources;

  var reduxDispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var notSortable = numberOfEntities === 0 || !loaded;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, initialState(Object(_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_10__["sourcesColumns"])(intl, notSortable))),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var refreshColumns = function refreshColumns() {
    var columns = Object(_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_10__["sourcesColumns"])(intl, notSortable);
    return dispatch({
      cells: prepareColumnsCells(columns)
    });
  };

  var refreshSources = function refreshSources() {
    var columns = Object(_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_10__["sourcesColumns"])(intl, notSortable);
    return dispatch({
      rows: renderSources(entities, columns, sourceTypes, appTypes, removingSources),
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
  }, [entities, removingSources]);
  var shownRows = state.rows;

  if (numberOfEntities === 0 && state.isLoaded) {
    shownRows = [{
      heightAuto: true,
      cells: [{
        props: {
          colSpan: _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_10__["COLUMN_COUNT"]
        },
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_EmptyStateTable__WEBPACK_IMPORTED_MODULE_11__["default"], null)
      }]
    }];
  } else if (!loaded || !appTypesLoaded || !sourceTypesLoaded) {
    shownRows = [{
      heightAuto: true,
      cells: [{
        props: {
          colSpan: _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_10__["COLUMN_COUNT"],
          className: 'sources-placeholder-row'
        },
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_loaders__WEBPACK_IMPORTED_MODULE_9__["PlaceHolderTable"], null)
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
    actionResolver: loaded && numberOfEntities > 0 ? actionResolver(intl, push, writePermissions) : undefined,
    rowWrapper: _loaders__WEBPACK_IMPORTED_MODULE_9__["RowWrapperLoader"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["TableHeader"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_6__["TableBody"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (SourcesTable);

/***/ }),

/***/ "./src/components/TabNavigation.js":
/*!*****************************************!*\
  !*** ./src/components/TabNavigation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/Tabs */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/Tabs.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/Tab */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/Tab.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_TabTitleIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/TabTitleIcon */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/TabTitleIcon.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tabs_TabTitleText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tabs/TabTitleText */ "./node_modules/@patternfly/react-core/dist/esm/components/Tabs/TabTitleText.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_redhat_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/redhat-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/redhat-icon.js");
/* harmony import */ var _patternfly_react_icons_dist_esm_icons_cloud_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-icons/dist/esm/icons/cloud-icon */ "./node_modules/@patternfly/react-icons/dist/esm/icons/cloud-icon.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/constants */ "./src/utilities/constants.js");












var TabNavigation = function TabNavigation() {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["useIntl"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var activeVendor = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref) {
    var sources = _ref.sources;
    return sources.activeVendor;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    activeKey: activeVendor,
    onSelect: function onSelect(_e, key) {
      return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_9__["setActiveVendor"])(key));
    },
    className: "pf-u-mt-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Tabs_Tab__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    eventKey: _utilities_constants__WEBPACK_IMPORTED_MODULE_10__["CLOUD_VENDOR"],
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Tabs_TabTitleIcon__WEBPACK_IMPORTED_MODULE_5__["TabTitleIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_icons_dist_esm_icons_cloud_icon__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Tabs_TabTitleText__WEBPACK_IMPORTED_MODULE_6__["TabTitleText"], null, intl.formatMessage({
      id: 'sources.cloudSources',
      defaultMessage: 'Cloud sources'
    })))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Tabs_Tab__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    eventKey: _utilities_constants__WEBPACK_IMPORTED_MODULE_10__["REDHAT_VENDOR"],
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Tabs_TabTitleIcon__WEBPACK_IMPORTED_MODULE_5__["TabTitleIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_icons_dist_esm_icons_redhat_icon__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core_dist_esm_components_Tabs_TabTitleText__WEBPACK_IMPORTED_MODULE_6__["TabTitleText"], null, intl.formatMessage({
      id: 'sources.redhatSources',
      defaultMessage: 'Red Hat sources'
    })))
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TabNavigation);

/***/ }),

/***/ "./src/components/TilesShared/DisabledTile.js":
/*!****************************************************!*\
  !*** ./src/components/TilesShared/DisabledTile.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tile_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tile/Tile */ "./node_modules/@patternfly/react-core/dist/esm/components/Tile/Tile.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tooltip/Tooltip */ "./node_modules/@patternfly/react-core/dist/esm/components/Tooltip/Tooltip.js");






var DisabledTile = function DisabledTile(props) {
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  var tooltip = intl.formatMessage({
    id: 'sources.notAdminButton',
    defaultMessage: 'To perform this action, you must be granted write permissions from your Organization Administrator.'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    content: tooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "disabled-tile-with-tooltip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_esm_components_Tile_Tile__WEBPACK_IMPORTED_MODULE_3__["Tile"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    isDisabled: true
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DisabledTile);

/***/ }),

/***/ "./src/components/TilesShared/ImageWithPlaceholder.js":
/*!************************************************************!*\
  !*** ./src/components/TilesShared/ImageWithPlaceholder.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SourcesTable/loaders */ "./src/components/SourcesTable/loaders.js");







var ImageWithPlaceholder = function ImageWithPlaceholder(_ref) {
  var src = _ref.src,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["src"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, !loaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_5__["Loader"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: "40px",
    width: "110px"
  }, rest)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
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
  src: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImageWithPlaceholder);

/***/ }),

/***/ "./src/hooks/useHasWritePermissions.js":
/*!*********************************************!*\
  !*** ./src/hooks/useHasWritePermissions.js ***!
  \*********************************************/
/*! exports provided: useHasWritePermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHasWritePermissions", function() { return useHasWritePermissions; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var useHasWritePermissions = function useHasWritePermissions() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (_ref) {
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Button/Button */ "./node_modules/@patternfly/react-core/dist/esm/components/Button/Button.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PrimaryToolbar */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PrimaryToolbar/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/PageHeader */ "./node_modules/@redhat-cloud-services/frontend-components/esm/PageHeader/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Section */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Section/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_filterApps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/filterApps */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/filterApps.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_filterTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/filterTypes */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/filterTypes.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _components_SourcesTable_SourcesTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SourcesTable/SourcesTable */ "./src/components/SourcesTable/SourcesTable.js");
/* harmony import */ var _components_SourcesErrorState__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/SourcesErrorState */ "./src/components/SourcesErrorState.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Routes */ "./src/Routes.js");
/* harmony import */ var _Sources_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Sources/helpers */ "./src/pages/Sources/helpers.js");
/* harmony import */ var _hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hooks/useIsLoaded */ "./src/hooks/useIsLoaded.js");
/* harmony import */ var _hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../hooks/useHasWritePermissions */ "./src/hooks/useHasWritePermissions.js");
/* harmony import */ var _components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/CustomRoute/CustomRoute */ "./src/components/CustomRoute/CustomRoute.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Tooltip/Tooltip */ "./node_modules/@patternfly/react-core/dist/esm/components/Tooltip/Tooltip.js");
/* harmony import */ var _components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/SourcesTable/loaders */ "./src/components/SourcesTable/loaders.js");
/* harmony import */ var _components_TabNavigation__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/TabNavigation */ "./src/components/TabNavigation.js");
/* harmony import */ var _components_CloudTiles_CloudCards__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/CloudTiles/CloudCards */ "./src/components/CloudTiles/CloudCards.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../utilities/constants */ "./src/utilities/constants.js");
/* harmony import */ var _components_CloudTiles_CloudEmptyState__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/CloudTiles/CloudEmptyState */ "./src/components/CloudTiles/CloudEmptyState.js");
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../views/formatters */ "./src/views/formatters.js");
/* harmony import */ var _components_RedHatTiles_RedHatEmptyState__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/RedHatTiles/RedHatEmptyState */ "./src/components/RedHatTiles/RedHatEmptyState.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var SourceRemoveModal = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return __webpack_require__.e(/*! import() | remove */ "remove").then(__webpack_require__.bind(null, /*! ../components/SourceRemoveModal/SourceRemoveModal */ "./src/components/SourceRemoveModal/SourceRemoveModal.js"));
});
var AddSourceWizard = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/*! import() | addSource */[__webpack_require__.e("vendors~addSource~sourceDetail"), __webpack_require__.e("vendors~addSource~renameSource"), __webpack_require__.e("vendors~addApplication~addSource"), __webpack_require__.e("vendors~addSource")]).then(__webpack_require__.bind(null, /*! @redhat-cloud-services/frontend-components-sources/esm/addSourceWizard */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/addSourceWizard.js")).then(function (module) {
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
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      filter = _useReducer2$.filter,
      selectedType = _useReducer2$.selectedType,
      wizardInitialState = _useReducer2$.wizardInitialState,
      wizardInitialValues = _useReducer2$.wizardInitialValues,
      stateDispatch = _useReducer2[1];

  var entitiesLoaded = Object(_hooks_useIsLoaded__WEBPACK_IMPORTED_MODULE_17__["useIsLoaded"])();
  var hasWritePermissions = Object(_hooks_useHasWritePermissions__WEBPACK_IMPORTED_MODULE_18__["useHasWritePermissions"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_6__["useIntl"])();
  var sources = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (_ref2) {
    var sources = _ref2.sources;
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
      sourceTypesLoaded = sources.sourceTypesLoaded,
      activeVendor = sources.activeVendor;
  var loaded = entitiesLoaded && sourceTypesLoaded && appTypesLoaded;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (filter !== filterValue.name) {
      stateDispatch({
        type: 'setFilterValue',
        value: filterValue.name
      });
    }
  }, [filterValue.name]);

  var onSetPage = function onSetPage(_e, page) {
    return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_12__["pageAndSize"])(page, pageSize));
  };

  var onPerPageSelect = function onPerPageSelect(_e, perPage) {
    return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_12__["pageAndSize"])(1, perPage));
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
  var filteredSourceTypes = sourceTypes.filter(_redhat_cloud_services_frontend_components_sources_esm_filterTypes__WEBPACK_IMPORTED_MODULE_11__["filterVendorTypes"]);

  var mainContent = function mainContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_7__["PrimaryToolbar"], {
      pagination: showPaginationLoader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_21__["PaginationLoader"], null) : numberOfEntities > 0 ? paginationConfig : undefined,
      actionsConfig: hasWritePermissions ? {
        actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
          to: _Routes__WEBPACK_IMPORTED_MODULE_15__["routes"].sourcesNew.path,
          key: "addSourceButton"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          variant: "primary",
          id: "addSourceButton"
        }, intl.formatMessage({
          id: 'sources.addSource',
          defaultMessage: 'Add source'
        })))]
      } : {
        actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_esm_components_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_20__["Tooltip"], {
          content: intl.formatMessage({
            id: 'sources.notAdminAddButton',
            defaultMessage: 'To add a source, you must be granted write permissions from your Organization Administrator.'
          }),
          key: "addSourceButton"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          tabIndex: "0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_patternfly_react_core_dist_esm_components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
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
              Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["debouncedFiltering"])(function () {
                return Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["setFilter"])('name', value, dispatch);
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
              return Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["setFilter"])('source_type_id', value, dispatch);
            },
            items: Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["prepareSourceTypeSelection"])(filteredSourceTypes),
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
              return Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["setFilter"])('applications', value, dispatch);
            },
            items: Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["prepareApplicationTypeSelection"])((appTypes === null || appTypes === void 0 ? void 0 : appTypes.filter(Object(_redhat_cloud_services_frontend_components_sources_esm_filterApps__WEBPACK_IMPORTED_MODULE_10__["filterVendorAppTypes"])(filteredSourceTypes))) || []),
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
              return Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["setFilter"])('availability_status', event.target.checked ? [selectedValue] : [], dispatch);
            },
            items: [{
              label: intl.formatMessage({
                id: 'sources.available',
                defaultMessage: 'Available'
              }),
              value: _views_formatters__WEBPACK_IMPORTED_MODULE_26__["AVAILABLE"]
            }, {
              label: intl.formatMessage({
                id: 'sources.unavailable',
                defaultMessage: 'Unavailable'
              }),
              value: _views_formatters__WEBPACK_IMPORTED_MODULE_26__["UNAVAILABLE"]
            }],
            value: filterValue.availability_status
          }
        }]
      },
      activeFiltersConfig: {
        filters: Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["prepareChips"])(filterValue, sourceTypes, appTypes, intl),
        onDelete: function onDelete(_event, chips, deleteAll) {
          return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_12__["filterSources"])(Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["removeChips"])(chips, filterValue, deleteAll)));
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SourcesTable_SourcesTable__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components_PrimaryToolbar__WEBPACK_IMPORTED_MODULE_7__["PrimaryToolbar"], {
      pagination: showPaginationLoader ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SourcesTable_loaders__WEBPACK_IMPORTED_MODULE_21__["PaginationLoader"], null) : numberOfEntities > 0 ? paginationConfigBottom : undefined
    }));
  };

  var hasSomeFilter = Object.entries(filterValue).map(function (_ref3) {
    var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 2),
        _key = _ref4[0],
        value = _ref4[1];

    return value && (!Array.isArray(value) || Array.isArray(value) && value.length > 0);
  }).filter(Boolean).length > 0;
  var showEmptyState = loaded && numberOfEntities === 0 && !hasSomeFilter;
  var showInfoCards = activeVendor === _utilities_constants__WEBPACK_IMPORTED_MODULE_24__["CLOUD_VENDOR"] && !showEmptyState;

  var setSelectedType = function setSelectedType(selectedType) {
    return stateDispatch({
      type: 'setSelectedType',
      selectedType: selectedType
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Suspense"], {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_19__["default"], {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_15__["routes"].sourcesRemove,
    Component: SourceRemoveModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CustomRoute_CustomRoute__WEBPACK_IMPORTED_MODULE_19__["default"], {
    exact: true,
    route: _Routes__WEBPACK_IMPORTED_MODULE_15__["routes"].sourcesNew,
    Component: AddSourceWizard,
    componentProps: {
      sourceTypes: Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["loadedTypes"])(sourceTypes, sourceTypesLoaded),
      applicationTypes: Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["loadedTypes"])(appTypes, appTypesLoaded),
      isOpen: true,
      onClose: function onClose() {
        stateDispatch({
          type: 'closeWizard'
        });
        history.push(_Routes__WEBPACK_IMPORTED_MODULE_15__["routes"].sources.path);
      },
      afterSuccess: function afterSuccess(source) {
        return Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["afterSuccess"])(dispatch, source);
      },
      hideSourcesButton: true,
      selectedType: selectedType,
      submitCallback: function submitCallback(state) {
        return Object(_Sources_helpers__WEBPACK_IMPORTED_MODULE_16__["checkSubmit"])(state, dispatch, history.push, intl, stateDispatch);
      },
      initialValues: wizardInitialValues,
      initialWizardState: wizardInitialState
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], {
    className: "pf-u-pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components_PageHeader__WEBPACK_IMPORTED_MODULE_8__["PageHeaderTitle"], {
    title: intl.formatMessage({
      id: 'sources.sources',
      defaultMessage: 'Sources'
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_TabNavigation__WEBPACK_IMPORTED_MODULE_22__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_9__["Section"], {
    type: "content"
  }, showInfoCards && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CloudTiles_CloudCards__WEBPACK_IMPORTED_MODULE_23__["default"], null), fetchingError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SourcesErrorState__WEBPACK_IMPORTED_MODULE_14__["default"], null), !fetchingError && showEmptyState && activeVendor === _utilities_constants__WEBPACK_IMPORTED_MODULE_24__["CLOUD_VENDOR"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CloudTiles_CloudEmptyState__WEBPACK_IMPORTED_MODULE_25__["default"], {
    setSelectedType: setSelectedType
  }), !fetchingError && showEmptyState && activeVendor === _utilities_constants__WEBPACK_IMPORTED_MODULE_24__["REDHAT_VENDOR"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RedHatTiles_RedHatEmptyState__WEBPACK_IMPORTED_MODULE_27__["default"], {
    setSelectedType: setSelectedType
  }), !fetchingError && !showEmptyState && mainContent()));
};

/* harmony default export */ __webpack_exports__["default"] = (SourcesPage);

/***/ }),

/***/ "./src/pages/Sources/helpers.js":
/*!**************************************!*\
  !*** ./src/pages/Sources/helpers.js ***!
  \**************************************/
/*! exports provided: debouncedFiltering, afterSuccessLoadParameters, afterSuccess, prepareSourceTypeSelection, prepareApplicationTypeSelection, setFilter, chipsFormatters, prepareChips, removeChips, loadedTypes, checkSubmit */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSubmit", function() { return checkSubmit; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/dist/index.es.js");
/* harmony import */ var _patternfly_react_core_dist_esm_components_Alert_AlertActionLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/esm/components/Alert/AlertActionLink */ "./node_modules/@patternfly/react-core/dist/esm/components/Alert/AlertActionLink.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_sources_esm_computeSourceStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-sources/esm/computeSourceStatus */ "./node_modules/@redhat-cloud-services/frontend-components-sources/esm/computeSourceStatus.js");
/* harmony import */ var _redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/sources/actions */ "./src/redux/sources/actions.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Routes */ "./src/Routes.js");
/* harmony import */ var _views_formatters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/formatters */ "./src/views/formatters.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var debouncedFiltering = Object(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_2__["default"])(function (refresh) {
  return refresh();
}, 500);
var afterSuccessLoadParameters = {
  pageNumber: 1,
  sortBy: 'created_at',
  sortDirection: 'desc'
};
var afterSuccess = function afterSuccess(dispatch) {
  return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["loadEntities"])(afterSuccessLoadParameters));
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
  return dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["filterSources"])(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, column, value)));
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
          name: filterValue[key][0] === _views_formatters__WEBPACK_IMPORTED_MODULE_7__["AVAILABLE"] ? intl.formatMessage({
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

  if (location.pathname.split('/').filter(Boolean).pop() !== _Routes__WEBPACK_IMPORTED_MODULE_6__["routes"].sourcesNew.path.split('/').pop()) {
    if (state.isErrored) {
      var _state$wizardState = state.wizardState,
          activeStep = _state$wizardState.activeStep,
          activeStepIndex = _state$wizardState.activeStepIndex,
          maxStepIndex = _state$wizardState.maxStepIndex,
          prevSteps = _state$wizardState.prevSteps,
          registeredFieldsHistory = _state$wizardState.registeredFieldsHistory;
      dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["addMessage"])({
        title: intl.formatMessage({
          id: 'alert.error.title',
          defaultMessage: 'Error adding source'
        }),
        description: intl.formatMessage({
          id: 'alert.error.description',
          defaultMessage: 'There was a problem while trying to add source {name}. Please try again. If the error persists, open a support case.'
        }, {
          name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, state.values.source.name)
        }),
        variant: 'danger',
        id: id,
        actionLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_esm_components_Alert_AlertActionLink__WEBPACK_IMPORTED_MODULE_3__["AlertActionLink"], {
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
            dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["removeMessage"])(id));
            push(_Routes__WEBPACK_IMPORTED_MODULE_6__["routes"].sourcesNew.path);
          }
        }, intl.formatMessage({
          id: 'alert.error.link',
          defaultMessage: 'Retry'
        }))
      }));
    } else {
      switch (Object(_redhat_cloud_services_frontend_components_sources_esm_computeSourceStatus__WEBPACK_IMPORTED_MODULE_4__["default"])(state.createdSource)) {
        case 'unavailable':
          dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["addMessage"])({
            title: intl.formatMessage({
              id: 'alert.error.title',
              defaultMessage: 'Source configuration unsuccessful'
            }),
            description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, ((_state$createdSource$ = state.createdSource.applications) === null || _state$createdSource$ === void 0 ? void 0 : (_state$createdSource$2 = _state$createdSource$[0]) === null || _state$createdSource$2 === void 0 ? void 0 : _state$createdSource$2.availability_status_error) || ((_state$createdSource$3 = state.createdSource.endpoint) === null || _state$createdSource$3 === void 0 ? void 0 : (_state$createdSource$4 = _state$createdSource$3[0]) === null || _state$createdSource$4 === void 0 ? void 0 : _state$createdSource$4.availability_status_error) || intl.formatMessage({
              id: 'wizard.unknownError',
              defaultMessage: 'Unknown error'
            }), "\xA0[", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, state.createdSource.name), "]"),
            variant: 'danger',
            id: id,
            actionLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_esm_components_Alert_AlertActionLink__WEBPACK_IMPORTED_MODULE_3__["AlertActionLink"], {
              onClick: function onClick() {
                dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["removeMessage"])(id));
                push(Object(_Routes__WEBPACK_IMPORTED_MODULE_6__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_6__["routes"].sourcesDetail.path, state.createdSource.id));
              }
            }, intl.formatMessage({
              id: 'alert.unavailable.link',
              defaultMessage: 'Edit source'
            }))
          }));
          break;

        case 'timeout':
          dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["addMessage"])({
            title: intl.formatMessage({
              id: 'alert.timeout.title',
              defaultMessage: 'Source configuration in progress'
            }),
            description: intl.formatMessage({
              id: 'alert.timeout.description',
              defaultMessage: 'We are still working to confirm credentials for source {name}. To track progress, check the Status column in the Sources table.'
            }, {
              name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, state.createdSource.name)
            }),
            variant: 'info'
          }));
          break;

        default:
          dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["addMessage"])({
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
              name: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, state.createdSource.name)
            }),
            variant: 'success',
            id: id,
            actionLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core_dist_esm_components_Alert_AlertActionLink__WEBPACK_IMPORTED_MODULE_3__["AlertActionLink"], {
              onClick: function onClick() {
                dispatch(Object(_redux_sources_actions__WEBPACK_IMPORTED_MODULE_5__["removeMessage"])(id));
                push(Object(_Routes__WEBPACK_IMPORTED_MODULE_6__["replaceRouteId"])(_Routes__WEBPACK_IMPORTED_MODULE_6__["routes"].sourcesDetail.path, state.createdSource.id));
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
//# sourceMappingURL=../sourcemaps/sourcesPage.js.map