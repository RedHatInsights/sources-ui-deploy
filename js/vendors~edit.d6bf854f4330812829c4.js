(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~edit"],{

/***/ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStatePrimary.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStatePrimary.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const empty_state_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/EmptyState/empty-state */ "./node_modules/@patternfly/react-styles/css/components/EmptyState/empty-state.js"));
exports.EmptyStatePrimary = (_a) => {
    var { children, className = '' } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: react_styles_1.css(empty_state_1.default.emptyStatePrimary, className) }, props), children));
};
exports.EmptyStatePrimary.displayName = 'EmptyStatePrimary';
//# sourceMappingURL=EmptyStatePrimary.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/EmptyState/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./EmptyState */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./EmptyStateBody */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./EmptyStateIcon */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./EmptyStateSecondaryActions */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./EmptyStatePrimary */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStatePrimary.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/Flex.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/layouts/Flex/Flex.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const flex_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/layouts/Flex/flex */ "./node_modules/@patternfly/react-styles/css/layouts/Flex/flex.js"));
const util_1 = __webpack_require__(/*! ../../helpers/util */ "./node_modules/@patternfly/react-core/dist/js/helpers/util.js");
exports.Flex = (_a) => {
    var { children = null, className = '', spacer, spaceItems, grow, shrink, flex, direction, alignItems, alignContent, alignSelf, align, justifyContent, display, fullWidth, flexWrap } = _a, props = tslib_1.__rest(_a, ["children", "className", "spacer", "spaceItems", "grow", "shrink", "flex", "direction", "alignItems", "alignContent", "alignSelf", "align", "justifyContent", "display", "fullWidth", "flexWrap"]);
    return (React.createElement("div", Object.assign({ className: react_styles_1.css(flex_1.default.flex, util_1.formatBreakpointMods(spacer, flex_1.default), util_1.formatBreakpointMods(spaceItems, flex_1.default), util_1.formatBreakpointMods(grow, flex_1.default), util_1.formatBreakpointMods(shrink, flex_1.default), util_1.formatBreakpointMods(flex, flex_1.default), util_1.formatBreakpointMods(direction, flex_1.default), util_1.formatBreakpointMods(alignItems, flex_1.default), util_1.formatBreakpointMods(alignContent, flex_1.default), util_1.formatBreakpointMods(alignSelf, flex_1.default), util_1.formatBreakpointMods(align, flex_1.default), util_1.formatBreakpointMods(justifyContent, flex_1.default), util_1.formatBreakpointMods(display, flex_1.default), util_1.formatBreakpointMods(fullWidth, flex_1.default), util_1.formatBreakpointMods(flexWrap, flex_1.default), className) }, props), children));
};
exports.Flex.displayName = 'Flex';
//# sourceMappingURL=Flex.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/FlexItem.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/layouts/Flex/FlexItem.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const flex_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/layouts/Flex/flex */ "./node_modules/@patternfly/react-styles/css/layouts/Flex/flex.js"));
const util_1 = __webpack_require__(/*! ../../helpers/util */ "./node_modules/@patternfly/react-core/dist/js/helpers/util.js");
exports.FlexItem = (_a) => {
    var { children = null, className = '', spacer, grow, shrink, flex, alignSelf, align, fullWidth } = _a, props = tslib_1.__rest(_a, ["children", "className", "spacer", "grow", "shrink", "flex", "alignSelf", "align", "fullWidth"]);
    return (React.createElement("div", Object.assign({}, props, { className: react_styles_1.css(util_1.formatBreakpointMods(spacer, flex_1.default), util_1.formatBreakpointMods(grow, flex_1.default), util_1.formatBreakpointMods(shrink, flex_1.default), util_1.formatBreakpointMods(flex, flex_1.default), util_1.formatBreakpointMods(alignSelf, flex_1.default), util_1.formatBreakpointMods(align, flex_1.default), util_1.formatBreakpointMods(fullWidth, flex_1.default), className) }), children));
};
exports.FlexItem.displayName = 'FlexItem';
//# sourceMappingURL=FlexItem.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/layouts/Flex/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./Flex */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/Flex.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./FlexItem */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/FlexItem.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/layouts/Grid/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./Grid */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./GridItem */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-icons/dist/js/icons/trash-icon.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@patternfly/react-icons/dist/js/icons/trash-icon.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.TrashIconConfig = {
  name: 'TrashIcon',
  height: 512,
  width: 448,
  svgPath: 'M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z',
  yOffset: 0,
  xOffset: 0,
};
exports.TrashIcon = __webpack_require__(/*! ../createIcon */ "./node_modules/@patternfly/react-icons/dist/js/createIcon.js").createIcon(exports.TrashIconConfig);
exports["default"] = exports.TrashIcon;

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(/*! ./slicedToArray-a77d6bb6.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/slicedToArray-a77d6bb6.js"),__webpack_require__(/*! ./defineProperty-cf06dcaa.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/defineProperty-cf06dcaa.js"),__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js"),__webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js"),__webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextListItem.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextListItem.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextList.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextList.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Form/FormHelperText.js */ "./node_modules/@patternfly/react-core/dist/js/components/Form/FormHelperText.js"),__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/question-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/question-circle-icon.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Popover/Popover.js */ "./node_modules/@patternfly/react-core/dist/js/components/Popover/Popover.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");var hardcodedSchemas=__webpack_require__(/*! ./hardcodedSchemas-66d10e58.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas-66d10e58.js");__webpack_require__(/*! @patternfly/react-core/dist/js/components/ClipboardCopy/ClipboardCopy.js */ "./node_modules/@patternfly/react-core/dist/js/components/ClipboardCopy/ClipboardCopy.js"),__webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-form-api.js"),__webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/cjs/interceptors */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/cjs/interceptors.js"),__webpack_require__(/*! ./constants.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/constants.js"),__webpack_require__(/*! ./index-1dfedd03.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/index-1dfedd03.js"),exports.default=hardcodedSchemas.hardcodedSchemas;


/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/sourceFormRenderer.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/sourceFormRenderer.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(/*! ./_commonjsHelpers-32c5d30b.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/_commonjsHelpers-32c5d30b.js");var sourceFormRenderer=__webpack_require__(/*! ./index-7a94dba9.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/index-7a94dba9.js");__webpack_require__(/*! ./objectWithoutProperties-9e2b4e81.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/objectWithoutProperties-9e2b4e81.js"),__webpack_require__(/*! ./slicedToArray-a77d6bb6.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/slicedToArray-a77d6bb6.js"),__webpack_require__(/*! ./defineProperty-cf06dcaa.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/defineProperty-cf06dcaa.js"),__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button.js */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js"),__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js"),__webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/form-renderer.js"),__webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/component-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/component-types.js"),__webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-types */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-types.js"),__webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/validator-mapper */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/validator-mapper.js"),__webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/form-template */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/form-template.js"),__webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/component-mapper */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/component-mapper.js"),__webpack_require__(/*! ./toConsumableArray-b90a35b5.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/toConsumableArray-b90a35b5.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextListItem.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextListItem.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextList.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextList.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Alert/Alert.js */ "./node_modules/@patternfly/react-core/dist/js/components/Alert/Alert.js"),__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Form/FormHelperText.js */ "./node_modules/@patternfly/react-core/dist/js/components/Form/FormHelperText.js"),__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/question-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/question-circle-icon.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Popover/Popover.js */ "./node_modules/@patternfly/react-core/dist/js/components/Popover/Popover.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js"),__webpack_require__(/*! ./hardcodedSchemas-66d10e58.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/hardcodedSchemas-66d10e58.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/ClipboardCopy/ClipboardCopy.js */ "./node_modules/@patternfly/react-core/dist/js/components/ClipboardCopy/ClipboardCopy.js"),__webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-form-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-form-api.js"),__webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/cjs/interceptors */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/cjs/interceptors.js"),__webpack_require__(/*! ./constants.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/constants.js"),__webpack_require__(/*! ./index-1dfedd03.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/index-1dfedd03.js"),__webpack_require__(/*! ./schemaBuilder-d7349a39.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/schemaBuilder-d7349a39.js"),__webpack_require__(/*! ./SourceWizardSummary.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/SourceWizardSummary.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/Card.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/Card.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardBody.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardBody.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Form/FormGroup.js */ "./node_modules/@patternfly/react-core/dist/js/components/Form/FormGroup.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardTitle.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardTitle.js"),__webpack_require__(/*! @data-driven-forms/react-form-renderer/dist/cjs/use-field-api */ "./node_modules/@data-driven-forms/react-form-renderer/dist/cjs/use-field-api.js"),__webpack_require__(/*! ./CardSelect.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/CardSelect.js"),__webpack_require__(/*! @patternfly/react-core/dist/js/components/Radio/Radio.js */ "./node_modules/@patternfly/react-core/dist/js/components/Radio/Radio.js"),__webpack_require__(/*! ./AuthSelect.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/AuthSelect.js"),__webpack_require__(/*! @data-driven-forms/pf4-component-mapper/dist/cjs/select */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/cjs/select.js"),exports.default=sourceFormRenderer.SourcesFormRenderer,exports.mapperExtension=sourceFormRenderer.mapperExtension;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js");

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ })

}]);
//# sourceMappingURL=../sourcemaps/vendors~edit.js.map