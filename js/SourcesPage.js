(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SourcesPage"],{

/***/ "./src/components/SourceExpandedView.js":
/*!**********************************************!*\
  !*** ./src/components/SourceExpandedView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");









var SourceExpandedView =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SourceExpandedView, _Component);

  function SourceExpandedView() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SourceExpandedView);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SourceExpandedView).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SourceExpandedView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
        sm: 6,
        md: 4,
        lg: 4,
        xl: 4
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dl", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dt", null, "Access Key ID (User ID)"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("dd", null, "TO BE ADDED"))));
    }
  }]);

  return SourceExpandedView;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SourceExpandedView.propTypes = {
  source: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SourceExpandedView);

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
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");


 // FIXME: different icon

var SourcesEmptyState = function SourcesEmptyState() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Card"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Bullseye"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateIcon"], {
    icon: _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_2__["CubesIcon"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    headingLevel: "h5",
    size: "lg"
  }, "No Sources"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["EmptyStateBody"], null, "No Sources have been defined. To start define a Source."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    component: "a",
    href: "/new",
    target: "_blank",
    variant: "primary"
  }, "Add a Source")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SourcesEmptyState);

/***/ }),

/***/ "./src/components/SourcesFilter.js":
/*!*****************************************!*\
  !*** ./src/components/SourcesFilter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__);










var SourcesFilter =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SourcesFilter, _Component);

  function SourcesFilter(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SourcesFilter);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(SourcesFilter).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_8__["SimpleTableFilter"], {
        options: {
          title: 'Filter By',
          items: _this.props.columns
        },
        onOptionSelect: _this.props.onFilterSelect,
        onButtonClick: _this.props.onFilter
      });
    });

    return _this;
  }

  return SourcesFilter;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SourcesFilter.propTypes = {
  columns: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
  })).isRequired,
  onFilter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  onFilterSelect: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SourcesFilter);

/***/ }),

/***/ "./src/components/SourcesSimpleView.js":
/*!*********************************************!*\
  !*** ./src/components/SourcesSimpleView.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var _SourceExpandedView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SourceExpandedView */ "./src/components/SourceExpandedView.js");
/* harmony import */ var _redux_actions_providers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../redux/actions/providers */ "./src/redux/actions/providers.js");




















var RowLoader = function RowLoader(props) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_16__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_7___default()({
    height: 20,
    width: 480
  }, props), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "30",
    y: "0",
    rx: "3",
    ry: "3",
    width: "250",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "300",
    y: "0",
    rx: "3",
    ry: "3",
    width: "70",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "385",
    y: "0",
    rx: "3",
    ry: "3",
    width: "95",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "50",
    y: "12",
    rx: "3",
    ry: "3",
    width: "80",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "150",
    y: "12",
    rx: "3",
    ry: "3",
    width: "200",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "360",
    y: "12",
    rx: "3",
    ry: "3",
    width: "120",
    height: "7"
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "20",
    height: "20"
  }));
};

var SourcesSimpleView =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SourcesSimpleView, _React$Component);

  function SourcesSimpleView(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SourcesSimpleView);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SourcesSimpleView).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onItemSelect", function (_event, key, checked) {
      return _this.props.selectEntity(key, checked);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onSort", function (_event, key, direction) {
      _this.props.sortEntities(_this.filteredColumns[key].value, direction);

      _this.setState({
        sortBy: {
          index: key,
          direction: direction
        }
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onCollapse", function (_event, i, isOpen) {
      return _this.props.expandEntity(_this.sourceIndexToId(i), isOpen);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "sourceIndexToId", function (i) {
      return _this.props.entities[i / 2].id;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "renderActions", function () {
      return [{
        title: 'Remove Source',
        onClick: function onClick(_ev, i) {
          _this.props.removeSource(_this.sourceIndexToId(i)).then(function () {
            _this.props.loadEntities();
          });
        }
      }];
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "sourceTypeFormatter", function (sourceType) {
      return _this.sourceTypeMap.get(sourceType) || sourceType || '';
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "itemToCells", function (item) {
      return _this.filteredColumns.map(function (col) {
        return col.formatter ? _this[col.formatter](item[col.value]) : item[col.value] || '';
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "render", function () {
      var _this$props = _this.props,
          entities = _this$props.entities,
          loaded = _this$props.loaded,
          sourceTypes = _this$props.sourceTypes;
      var rowData = lodash_flatten__WEBPACK_IMPORTED_MODULE_14___default()(entities.map(function (item, index) {
        return [_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
          isOpen: !!item.expanded,
          cells: _this.itemToCells(item)
        }), {
          // expanded content
          id: item.id + '_detail',
          parent: index * 2,
          cells: [item.expanded ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_SourceExpandedView__WEBPACK_IMPORTED_MODULE_17__["default"], {
            sourceId: item.id
          }) : 'collapsed content']
        }];
      }));
      _this.sourceTypeMap = new Map(sourceTypes.map(function (t) {
        return [t.id, t.name];
      }));

      if (loaded) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__["Table"], {
          "aria-label": "List of Sources",
          onCollapse: _this.onCollapse,
          onSort: _this.onSort,
          sortBy: _this.state.sortBy,
          rows: rowData,
          cells: _this.headers,
          actions: _this.renderActions()
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__["TableHeader"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__["TableBody"], null));
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
        className: "sources-placeholder-table pf-m-compact ins-entity-table"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(RowLoader, null))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(RowLoader, null)))));
    });

    _this.filteredColumns = lodash_filter__WEBPACK_IMPORTED_MODULE_15___default()(_this.props.columns, function (c) {
      return c.title;
    });
    _this.headers = _this.filteredColumns.map(function (col) {
      return {
        title: col.title,
        transforms: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_13__["sortable"]]
      };
    });
    _this.state = {
      sortBy: {}
    };
    return _this;
  }

  return SourcesSimpleView;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

;
SourcesSimpleView.propTypes = {
  columns: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
  })).isRequired,
  loadEntities: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  selectEntity: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  expandEntity: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  removeSource: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  sortEntities: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  entities: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any),
  numberOfEntities: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  sourceTypes: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any),
  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any.isRequired
};
SourcesSimpleView.defaultProps = {
  entities: [],
  numberOfEntities: 0,
  loaded: false,
  sourceTypes: []
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])({
    loadEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_18__["loadEntities"],
    selectEntity: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_18__["selectEntity"],
    expandEntity: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_18__["expandEntity"],
    sortEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_18__["sortEntities"],
    removeSource: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_18__["removeSource"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$providers = _ref.providers,
      entities = _ref$providers.entities,
      loaded = _ref$providers.loaded,
      numberOfEntities = _ref$providers.numberOfEntities,
      sourceTypes = _ref$providers.sourceTypes;
  return {
    entities: entities,
    loaded: loaded,
    numberOfEntities: numberOfEntities,
    sourceTypes: sourceTypes
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(SourcesSimpleView)));

/***/ }),

/***/ "./src/pages/SourcesPage.js":
/*!**********************************!*\
  !*** ./src/pages/SourcesPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/providers */ "./src/redux/actions/providers.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_SourcesSimpleView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/SourcesSimpleView */ "./src/components/SourcesSimpleView.js");
/* harmony import */ var _components_SourcesFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/SourcesFilter */ "./src/components/SourcesFilter.js");
/* harmony import */ var _components_SourcesEmptyState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/SourcesEmptyState */ "./src/components/SourcesEmptyState.js");
/* harmony import */ var _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/sourcesViewDefinition */ "./src/views/sourcesViewDefinition.js");
/* harmony import */ var _SmartComponents_ProviderPage_providerForm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../SmartComponents/ProviderPage/providerForm */ "./src/SmartComponents/ProviderPage/providerForm.js");
/* harmony import */ var _Utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Utilities/SourcesFormRenderer */ "./src/Utilities/SourcesFormRenderer.js");























/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */

var SourcesPage =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SourcesPage, _Component);

  function SourcesPage(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SourcesPage);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(SourcesPage).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "componentDidMount", function () {
      _this.props.loadSourceTypes();

      _this.props.loadEntities();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "submitProvider", function (values, _formState) {
      _this.props.createSource(values, _this.props.sourceTypes).then(function () {
        _this.props.history.replace('/');

        _this.props.loadEntities();
      }).catch(function (error) {
        console.log('CATCH:');
        console.log(error);

        _this.props.history.replace('/');
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onFilter", function (filterValue) {
      console.log('onFilter', filterValue);

      _this.props.filterProviders(filterValue);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onFilterSelect", function (_component, column) {
      console.log('onFilter', column);

      _this.props.setProviderFilterColumn(column.value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onSetPage", function (number) {
      _this.setState({
        onPage: number
      });

      _this.props.pageAndSize(number, _this.state.itemsPerPage);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "onPerPageSelect", function (count) {
      _this.setState({
        onPage: 1,
        itemsPerPage: count
      });

      _this.props.pageAndSize(1, count);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "renderMainContent", function () {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Card"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["CardHeader"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SourcesFilter__WEBPACK_IMPORTED_MODULE_16__["default"], {
        columns: lodash_filter__WEBPACK_IMPORTED_MODULE_14___default()(_views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_18__["sourcesViewDefinition"].columns, function (c) {
          return c.searchable;
        }),
        onFilter: _this.onFilter,
        onFilterSelect: _this.onFilterSelect
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SourcesSimpleView__WEBPACK_IMPORTED_MODULE_15__["default"], {
        columns: _views_sourcesViewDefinition__WEBPACK_IMPORTED_MODULE_18__["sourcesViewDefinition"].columns
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["CardFooter"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Pagination"], {
        itemsPerPage: _this.state.itemsPerPage,
        page: _this.state.onPage,
        direction: "up",
        onSetPage: _this.onSetPage,
        onPerPageSelect: _this.onPerPageSelect,
        numberOfItems: _this.props.numberOfEntities || 0
      })));
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)), "render", function () {
      var numberOfEntities = _this.props.numberOfEntities;
      var form = Object(_SmartComponents_ProviderPage_providerForm__WEBPACK_IMPORTED_MODULE_19__["wizardForm"])(_this.props.sourceTypes || []);
      var displayEmptyState = _this.props.loaded && !_this.props.filterValue && (!numberOfEntities || numberOfEntities === 0);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
        title: "Add a New Source",
        isOpen: _this.props.location.pathname === '/new',
        onClose: _this.props.history.goBack,
        isLarge: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Utilities_SourcesFormRenderer__WEBPACK_IMPORTED_MODULE_20__["default"], {
        initialValues: form.initialValues,
        schemaType: form.schemaType,
        schema: form.schema,
        uiSchema: form.uiSchema,
        showFormControls: form.showFormControls,
        onSubmit: _this.submitProvider
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["PageHeaderTitle"], {
        title: "Sources"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
        to: "/new"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        className: "pull-right",
        variant: "secondary"
      }, " Add a New Source "))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_11__["Section"], {
        type: "content"
      }, displayEmptyState ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SourcesEmptyState__WEBPACK_IMPORTED_MODULE_17__["default"], null) : _this.renderMainContent()));
    });

    _this.state = {
      itemsPerPage: 10,
      onPage: 1
    };
    return _this;
  }

  return SourcesPage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(SourcesPage, "propTypes", {
  addProvider: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  createSource: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  filterProviders: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  setProviderFilterColumn: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  loadEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  loadSourceTypes: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  pageAndSize: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  filterValue: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired,
  numberOfEntities: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired,
  sourceTypes: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any),
  location: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    addProvider: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["addProvider"],
    createSource: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["createSource"],
    filterProviders: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["filterProviders"],
    loadEntities: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["loadEntities"],
    loadSourceTypes: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["loadSourceTypes"],
    pageAndSize: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["pageAndSize"],
    setProviderFilterColumn: _redux_actions_providers__WEBPACK_IMPORTED_MODULE_12__["setProviderFilterColumn"]
  }, dispatch);
};

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$providers = _ref.providers,
      filterValue = _ref$providers.filterValue,
      loaded = _ref$providers.loaded,
      numberOfEntities = _ref$providers.numberOfEntities,
      sourceTypes = _ref$providers.sourceTypes;
  return {
    filterValue: filterValue,
    loaded: loaded,
    numberOfEntities: numberOfEntities,
    sourceTypes: sourceTypes
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(SourcesPage)));

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/SourcesPage.js.map