(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~sourceDetail~sourcesPage"],{

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Checkbox/Checkbox.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Checkbox/Checkbox.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const check_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Check/check */ "./node_modules/@patternfly/react-styles/css/components/Check/check.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
// tslint:disable-next-line:no-empty
const defaultOnChange = () => { };
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            this.props.onChange(event.currentTarget.checked, event);
        };
    }
    render() {
        const _a = this.props, { 'aria-label': ariaLabel, className, onChange, isValid, isDisabled, isChecked, label, checked, defaultChecked, description } = _a, props = tslib_1.__rest(_a, ['aria-label', "className", "onChange", "isValid", "isDisabled", "isChecked", "label", "checked", "defaultChecked", "description"]);
        if (!props.id) {
            // eslint-disable-next-line no-console
            console.error('Checkbox:', 'id is required to make input accessible');
        }
        const checkedProps = {};
        if ([true, false].includes(checked) || isChecked === true) {
            checkedProps.checked = checked || isChecked;
        }
        if (onChange !== defaultOnChange) {
            checkedProps.checked = isChecked;
        }
        if ([false, true].includes(defaultChecked)) {
            checkedProps.defaultChecked = defaultChecked;
        }
        checkedProps.checked = checkedProps.checked === null ? false : checkedProps.checked;
        return (React.createElement("div", { className: react_styles_1.css(check_1.default.check, className) },
            React.createElement("input", Object.assign({}, props, { className: react_styles_1.css(check_1.default.checkInput), type: "checkbox", onChange: this.handleChange, "aria-invalid": !isValid, "aria-label": ariaLabel, disabled: isDisabled, ref: elem => elem && (elem.indeterminate = isChecked === null) }, checkedProps)),
            label && (React.createElement("label", { className: react_styles_1.css(check_1.default.checkLabel, isDisabled && check_1.default.modifiers.disabled), htmlFor: props.id }, label)),
            description && React.createElement("div", { className: react_styles_1.css(check_1.default.checkDescription) }, description)));
    }
}
exports.Checkbox = Checkbox;
Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
    className: '',
    isValid: true,
    isDisabled: false,
    isChecked: false,
    onChange: defaultOnChange
};
//# sourceMappingURL=Checkbox.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyState = exports.EmptyStateVariant = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const empty_state_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/EmptyState/empty-state */ "./node_modules/@patternfly/react-styles/css/components/EmptyState/empty-state.js"));
var EmptyStateVariant;
(function (EmptyStateVariant) {
    EmptyStateVariant["xs"] = "xs";
    EmptyStateVariant["small"] = "small";
    EmptyStateVariant["large"] = "large";
    EmptyStateVariant["xl"] = "xl";
    EmptyStateVariant["full"] = "full";
})(EmptyStateVariant = exports.EmptyStateVariant || (exports.EmptyStateVariant = {}));
exports.EmptyState = (_a) => {
    var { children, className = '', variant = EmptyStateVariant.full, isFullHeight } = _a, props = tslib_1.__rest(_a, ["children", "className", "variant", "isFullHeight"]);
    return (React.createElement("div", Object.assign({ className: react_styles_1.css(empty_state_1.default.emptyState, variant === 'xs' && empty_state_1.default.modifiers.xs, variant === 'small' && empty_state_1.default.modifiers.sm, variant === 'large' && empty_state_1.default.modifiers.lg, variant === 'xl' && empty_state_1.default.modifiers.xl, isFullHeight && empty_state_1.default.modifiers.fullHeight, className) }, props),
        React.createElement("div", { className: react_styles_1.css(empty_state_1.default.emptyStateContent) }, children)));
};
exports.EmptyState.displayName = 'EmptyState';
//# sourceMappingURL=EmptyState.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyStateBody = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const empty_state_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/EmptyState/empty-state */ "./node_modules/@patternfly/react-styles/css/components/EmptyState/empty-state.js"));
exports.EmptyStateBody = (_a) => {
    var { children, className = '' } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: react_styles_1.css(empty_state_1.default.emptyStateBody, className) }, props), children));
};
exports.EmptyStateBody.displayName = 'EmptyStateBody';
//# sourceMappingURL=EmptyStateBody.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyStateIcon = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const empty_state_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/EmptyState/empty-state */ "./node_modules/@patternfly/react-styles/css/components/EmptyState/empty-state.js"));
exports.EmptyStateIcon = (_a) => {
    var { className = '', icon: IconComponent, component: AnyComponent, variant = 'icon' } = _a, props = tslib_1.__rest(_a, ["className", "icon", "component", "variant"]);
    const classNames = react_styles_1.css(empty_state_1.default.emptyStateIcon, className);
    return variant === 'icon' ? (React.createElement(IconComponent, Object.assign({ className: classNames }, props, { "aria-hidden": "true" }))) : (React.createElement("div", { className: classNames },
        React.createElement(AnyComponent, null)));
};
exports.EmptyStateIcon.displayName = 'EmptyStateIcon';
//# sourceMappingURL=EmptyStateIcon.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Radio/Radio.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Radio/Radio.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const radio_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Radio/radio */ "./node_modules/@patternfly/react-styles/css/components/Radio/radio.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const helpers_1 = __webpack_require__(/*! ../../helpers */ "./node_modules/@patternfly/react-core/dist/js/helpers/index.js");
class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = (event) => {
            this.props.onChange(event.currentTarget.checked, event);
        };
        if (!props.label && !props['aria-label']) {
            // eslint-disable-next-line no-console
            console.error('Radio:', 'Radio requires an aria-label to be specified');
        }
        this.state = {
            ouiaStateId: helpers_1.getDefaultOUIAId(Radio.displayName)
        };
    }
    render() {
        const _a = this.props, { 'aria-label': ariaLabel, checked, className, defaultChecked, isLabelWrapped, isLabelBeforeButton, isChecked, isDisabled, isValid, label, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onChange, description, ouiaId, ouiaSafe = true } = _a, props = tslib_1.__rest(_a, ['aria-label', "checked", "className", "defaultChecked", "isLabelWrapped", "isLabelBeforeButton", "isChecked", "isDisabled", "isValid", "label", "onChange", "description", "ouiaId", "ouiaSafe"]);
        if (!props.id) {
            // eslint-disable-next-line no-console
            console.error('Radio:', 'id is required to make input accessible');
        }
        const inputRendered = (React.createElement("input", Object.assign({}, props, { className: react_styles_1.css(radio_1.default.radioInput), type: "radio", onChange: this.handleChange, "aria-invalid": !isValid, disabled: isDisabled, checked: checked || isChecked }, (checked === undefined && { defaultChecked }), (!label && { 'aria-label': ariaLabel }), helpers_1.getOUIAProps(Radio.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe))));
        let labelRendered = null;
        if (label && isLabelWrapped) {
            labelRendered = React.createElement("span", { className: react_styles_1.css(radio_1.default.radioLabel, isDisabled && radio_1.default.modifiers.disabled) }, label);
        }
        else if (label) {
            labelRendered = (React.createElement("label", { className: react_styles_1.css(radio_1.default.radioLabel, isDisabled && radio_1.default.modifiers.disabled), htmlFor: props.id }, label));
        }
        const descRender = description ? React.createElement("div", { className: react_styles_1.css(radio_1.default.radioDescription) }, description) : null;
        const childrenRendered = isLabelBeforeButton ? (React.createElement(React.Fragment, null,
            labelRendered,
            inputRendered,
            descRender)) : (React.createElement(React.Fragment, null,
            inputRendered,
            labelRendered,
            descRender));
        return isLabelWrapped ? (React.createElement("label", { className: react_styles_1.css(radio_1.default.radio, className), htmlFor: props.id }, childrenRendered)) : (React.createElement("div", { className: react_styles_1.css(radio_1.default.radio, className) }, childrenRendered));
    }
}
exports.Radio = Radio;
Radio.displayName = 'Radio';
Radio.defaultProps = {
    className: '',
    isDisabled: false,
    isValid: true,
    onChange: () => { }
};
//# sourceMappingURL=Radio.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Tabs/Tab.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Tabs/Tab.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tab = void 0;
/** The parent <Tabs> component accecesses this component's propeties directly in order to present each Tab */
exports.Tab = (_props) => null;
exports.Tab.displayName = 'Tab';
//# sourceMappingURL=Tab.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Tabs/TabButton.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Tabs/TabButton.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TabButton = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const helpers_1 = __webpack_require__(/*! ../../helpers */ "./node_modules/@patternfly/react-core/dist/js/helpers/index.js");
exports.TabButton = (_a) => {
    var { children, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    tabContentRef, ouiaId, ouiaSafe } = _a, props = tslib_1.__rest(_a, ["children", "tabContentRef", "ouiaId", "ouiaSafe"]);
    const Component = (props.href ? 'a' : 'button');
    return (React.createElement(Component, Object.assign({}, helpers_1.getOUIAProps(exports.TabButton.displayName, ouiaId, ouiaSafe), props), children));
};
exports.TabButton.displayName = 'TabButton';
//# sourceMappingURL=TabButton.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Tabs/TabContent.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Tabs/TabContent.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TabContent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const tab_content_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/TabContent/tab-content */ "./node_modules/@patternfly/react-styles/css/components/TabContent/tab-content.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const helpers_1 = __webpack_require__(/*! ../../helpers */ "./node_modules/@patternfly/react-core/dist/js/helpers/index.js");
const TabsContext_1 = __webpack_require__(/*! ./TabsContext */ "./node_modules/@patternfly/react-core/dist/js/components/Tabs/TabsContext.js");
const variantStyle = {
    default: '',
    light300: tab_content_1.default.modifiers.light_300
};
const TabContentBase = (_a) => {
    var { id, activeKey, 'aria-label': ariaLabel, child, children, className, eventKey, innerRef, ouiaId, ouiaSafe } = _a, props = tslib_1.__rest(_a, ["id", "activeKey", 'aria-label', "child", "children", "className", "eventKey", "innerRef", "ouiaId", "ouiaSafe"]);
    if (children || child) {
        let labelledBy;
        if (ariaLabel) {
            labelledBy = null;
        }
        else {
            labelledBy = children ? `pf-tab-${eventKey}-${id}` : `pf-tab-${child.props.eventKey}-${id}`;
        }
        return (React.createElement(TabsContext_1.TabsContextConsumer, null, ({ variant }) => (React.createElement("section", Object.assign({ ref: innerRef, hidden: children ? null : child.props.eventKey !== activeKey, className: children
                ? react_styles_1.css('pf-c-tab-content', className, variantStyle[variant])
                : react_styles_1.css('pf-c-tab-content', child.props.className, variantStyle[variant]), id: children ? id : `pf-tab-section-${child.props.eventKey}-${id}`, "aria-label": ariaLabel, "aria-labelledby": labelledBy, role: "tabpanel", tabIndex: 0 }, helpers_1.getOUIAProps('TabContent', ouiaId, ouiaSafe), props), children || child.props.children))));
    }
    return null;
};
exports.TabContent = React.forwardRef((props, ref) => (React.createElement(TabContentBase, Object.assign({}, props, { innerRef: ref }))));
//# sourceMappingURL=TabContent.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Tabs/TabTitleText.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Tabs/TabTitleText.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TabTitleText = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const tabs_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Tabs/tabs */ "./node_modules/@patternfly/react-styles/css/components/Tabs/tabs.js"));
exports.TabTitleText = (_a) => {
    var { children, className = '' } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("span", Object.assign({ className: react_styles_1.css(tabs_1.default.tabsItemText, className) }, props), children));
};
exports.TabTitleText.displayName = 'TabTitleText';
//# sourceMappingURL=TabTitleText.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Tabs/Tabs.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Tabs/Tabs.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = exports.TabsComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const tabs_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Tabs/tabs */ "./node_modules/@patternfly/react-styles/css/components/Tabs/tabs.js"));
const button_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Button/button */ "./node_modules/@patternfly/react-styles/css/components/Button/button.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const angle_left_icon_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/angle-left-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/angle-left-icon.js"));
const angle_right_icon_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/angle-right-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/angle-right-icon.js"));
const util_1 = __webpack_require__(/*! ../../helpers/util */ "./node_modules/@patternfly/react-core/dist/js/helpers/util.js");
const TabButton_1 = __webpack_require__(/*! ./TabButton */ "./node_modules/@patternfly/react-core/dist/js/components/Tabs/TabButton.js");
const TabContent_1 = __webpack_require__(/*! ./TabContent */ "./node_modules/@patternfly/react-core/dist/js/components/Tabs/TabContent.js");
const TabsContext_1 = __webpack_require__(/*! ./TabsContext */ "./node_modules/@patternfly/react-core/dist/js/components/Tabs/TabsContext.js");
const helpers_1 = __webpack_require__(/*! ../../helpers */ "./node_modules/@patternfly/react-core/dist/js/helpers/index.js");
var TabsComponent;
(function (TabsComponent) {
    TabsComponent["div"] = "div";
    TabsComponent["nav"] = "nav";
})(TabsComponent = exports.TabsComponent || (exports.TabsComponent = {}));
const variantStyle = {
    default: '',
    light300: tabs_1.default.modifiers.colorSchemeLight_300
};
class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.tabList = React.createRef();
        this.handleScrollButtons = () => {
            if (this.tabList.current && !this.props.isVertical) {
                const container = this.tabList.current;
                // get first element and check if it is in view
                const overflowOnLeft = !util_1.isElementInView(container, container.firstChild, false);
                // get last element and check if it is in view
                const overflowOnRight = !util_1.isElementInView(container, container.lastChild, false);
                const showScrollButtons = overflowOnLeft || overflowOnRight;
                const disableLeftScrollButton = !overflowOnLeft;
                const disableRightScrollButton = !overflowOnRight;
                this.setState({
                    showScrollButtons,
                    disableLeftScrollButton,
                    disableRightScrollButton
                });
            }
        };
        this.scrollLeft = () => {
            // find first Element that is fully in view on the left, then scroll to the element before it
            if (this.tabList.current) {
                const container = this.tabList.current;
                const childrenArr = Array.from(container.children);
                let firstElementInView;
                let lastElementOutOfView;
                let i;
                for (i = 0; i < childrenArr.length && !firstElementInView; i++) {
                    if (util_1.isElementInView(container, childrenArr[i], false)) {
                        firstElementInView = childrenArr[i];
                        lastElementOutOfView = childrenArr[i - 1];
                    }
                }
                if (lastElementOutOfView) {
                    container.scrollLeft -= lastElementOutOfView.scrollWidth;
                }
            }
        };
        this.scrollRight = () => {
            // find last Element that is fully in view on the right, then scroll to the element after it
            if (this.tabList.current) {
                const container = this.tabList.current;
                const childrenArr = Array.from(container.children);
                let lastElementInView;
                let firstElementOutOfView;
                for (let i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
                    if (util_1.isElementInView(container, childrenArr[i], false)) {
                        lastElementInView = childrenArr[i];
                        firstElementOutOfView = childrenArr[i + 1];
                    }
                }
                if (firstElementOutOfView) {
                    container.scrollLeft += firstElementOutOfView.scrollWidth;
                }
            }
        };
        this.state = {
            showScrollButtons: false,
            disableLeftScrollButton: false,
            disableRightScrollButton: false,
            shownKeys: [this.props.activeKey],
            ouiaStateId: helpers_1.getDefaultOUIAId(Tabs.displayName)
        };
    }
    handleTabClick(event, eventKey, tabContentRef, mountOnEnter) {
        const { shownKeys } = this.state;
        this.props.onSelect(event, eventKey);
        // process any tab content sections outside of the component
        if (tabContentRef) {
            React.Children.toArray(this.props.children)
                .map(child => child)
                .filter(child => child.props && child.props.tabContentRef && child.props.tabContentRef.current)
                .forEach(child => (child.props.tabContentRef.current.hidden = true));
            // most recently selected tabContent
            if (tabContentRef.current) {
                tabContentRef.current.hidden = false;
            }
        }
        if (mountOnEnter) {
            this.setState({
                shownKeys: shownKeys.concat(eventKey)
            });
        }
    }
    componentDidMount() {
        if (!this.props.isVertical) {
            window.addEventListener('resize', this.handleScrollButtons, false);
            // call the handle resize function to check if scroll buttons should be shown
            this.handleScrollButtons();
        }
    }
    componentWillUnmount() {
        if (!this.props.isVertical) {
            window.removeEventListener('resize', this.handleScrollButtons, false);
        }
    }
    componentDidUpdate(prevProps) {
        const { activeKey, mountOnEnter } = this.props;
        const { shownKeys } = this.state;
        if (prevProps.activeKey !== activeKey && mountOnEnter && shownKeys.indexOf(activeKey) < 0) {
            this.setState({
                shownKeys: shownKeys.concat(activeKey)
            });
        }
    }
    render() {
        const _a = this.props, { className, children, activeKey, id, isFilled, isSecondary, isVertical, isBox, leftScrollAriaLabel, rightScrollAriaLabel, 'aria-label': ariaLabel, component, ouiaId, ouiaSafe, mountOnEnter, unmountOnExit, inset, variant } = _a, props = tslib_1.__rest(_a, ["className", "children", "activeKey", "id", "isFilled", "isSecondary", "isVertical", "isBox", "leftScrollAriaLabel", "rightScrollAriaLabel", 'aria-label', "component", "ouiaId", "ouiaSafe", "mountOnEnter", "unmountOnExit", "inset", "variant"]);
        const { showScrollButtons, disableLeftScrollButton, disableRightScrollButton, shownKeys } = this.state;
        const filteredChildren = React.Children.toArray(children)
            .filter(Boolean)
            .filter(child => !child.props.isHidden);
        const uniqueId = id || util_1.getUniqueId();
        const Component = component === TabsComponent.nav ? 'nav' : 'div';
        return (React.createElement(TabsContext_1.TabsContextProvider, { value: { variant } },
            React.createElement(Component, Object.assign({ "aria-label": ariaLabel, className: react_styles_1.css(tabs_1.default.tabs, isFilled && tabs_1.default.modifiers.fill, isSecondary && tabs_1.default.modifiers.secondary, isVertical && tabs_1.default.modifiers.vertical, isBox && tabs_1.default.modifiers.box, showScrollButtons && !isVertical && tabs_1.default.modifiers.scrollable, util_1.formatBreakpointMods(inset, tabs_1.default), variantStyle[variant], className) }, helpers_1.getOUIAProps(Tabs.displayName, ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe), { id: id && id }, props),
                React.createElement("button", { className: react_styles_1.css(tabs_1.default.tabsScrollButton, isSecondary && button_1.default.modifiers.secondary), "aria-label": leftScrollAriaLabel, onClick: this.scrollLeft, disabled: disableLeftScrollButton, "aria-hidden": disableLeftScrollButton },
                    React.createElement(angle_left_icon_1.default, null)),
                React.createElement("ul", { className: react_styles_1.css(tabs_1.default.tabsList), ref: this.tabList, onScroll: this.handleScrollButtons }, filteredChildren.map((child, index) => {
                    const _a = child.props, { title, eventKey, tabContentRef, id: childId, tabContentId, className: childClassName = '', ouiaId: childOuiaId, 
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    isHidden } = _a, rest = tslib_1.__rest(_a, ["title", "eventKey", "tabContentRef", "id", "tabContentId", "className", "ouiaId", "isHidden"]);
                    let ariaControls = tabContentId ? `${tabContentId}` : `pf-tab-section-${eventKey}-${childId || uniqueId}`;
                    if ((mountOnEnter || unmountOnExit) && eventKey !== activeKey) {
                        ariaControls = undefined;
                    }
                    return (React.createElement("li", { key: index, className: react_styles_1.css(tabs_1.default.tabsItem, eventKey === activeKey && tabs_1.default.modifiers.current, childClassName) },
                        React.createElement(TabButton_1.TabButton, Object.assign({ className: react_styles_1.css(tabs_1.default.tabsLink), onClick: (event) => this.handleTabClick(event, eventKey, tabContentRef, mountOnEnter), id: `pf-tab-${eventKey}-${childId || uniqueId}`, "aria-controls": ariaControls, tabContentRef: tabContentRef, ouiaId: childOuiaId }, rest), title)));
                })),
                React.createElement("button", { className: react_styles_1.css(tabs_1.default.tabsScrollButton, isSecondary && button_1.default.modifiers.secondary), "aria-label": rightScrollAriaLabel, onClick: this.scrollRight, disabled: disableRightScrollButton, "aria-hidden": disableRightScrollButton },
                    React.createElement(angle_right_icon_1.default, null))),
            filteredChildren
                .filter(child => child.props.children &&
                !(unmountOnExit && child.props.eventKey !== activeKey) &&
                !(mountOnEnter && shownKeys.indexOf(child.props.eventKey) === -1))
                .map((child, index) => (React.createElement(TabContent_1.TabContent, { key: index, activeKey: activeKey, child: child, id: child.props.id || uniqueId, ouiaId: child.props.ouiaId })))));
    }
}
exports.Tabs = Tabs;
Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
    activeKey: 0,
    onSelect: () => undefined,
    isFilled: false,
    isSecondary: false,
    isVertical: false,
    isBox: false,
    leftScrollAriaLabel: 'Scroll left',
    rightScrollAriaLabel: 'Scroll right',
    component: TabsComponent.div,
    mountOnEnter: false,
    unmountOnExit: false,
    ouiaSafe: true,
    variant: 'default'
};
//# sourceMappingURL=Tabs.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Tabs/TabsContext.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Tabs/TabsContext.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TabsContextConsumer = exports.TabsContextProvider = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const TabsContext = React.createContext({
    variant: 'default'
});
exports.TabsContextProvider = TabsContext.Provider;
exports.TabsContextConsumer = TabsContext.Consumer;
//# sourceMappingURL=TabsContext.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Tile/Tile.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Tile/Tile.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const tile_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Tile/tile */ "./node_modules/@patternfly/react-styles/css/components/Tile/tile.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
exports.Tile = (_a) => {
    var { children, title, icon, isStacked, isSelected, isDisabled, isDisplayLarge, className } = _a, props = tslib_1.__rest(_a, ["children", "title", "icon", "isStacked", "isSelected", "isDisabled", "isDisplayLarge", "className"]);
    return (React.createElement("div", Object.assign({ className: react_styles_1.css(tile_1.default.tile, isSelected && tile_1.default.modifiers.selected, isDisabled && tile_1.default.modifiers.disabled, isDisplayLarge && tile_1.default.modifiers.displayLg, className), tabIndex: 0 }, props),
        React.createElement("div", { className: react_styles_1.css(tile_1.default.tileHeader, isStacked && tile_1.default.modifiers.stacked) },
            icon && React.createElement("div", { className: react_styles_1.css(tile_1.default.tileIcon) }, icon),
            React.createElement("div", { className: react_styles_1.css(tile_1.default.tileTitle) }, title)),
        children && React.createElement("div", { className: react_styles_1.css(tile_1.default.tileBody) }, children)));
};
exports.Tile.displayName = 'Tile';
//# sourceMappingURL=Tile.js.map

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/filterApps.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/filterApps.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");var e=__webpack_require__(/*! ./stringConstants-ac30ec98.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/stringConstants-ac30ec98.js");exports.TOPOLOGY_INV_NAME="/insights/platform/topological-inventory",exports.default=function filterApps(e){return"/insights/platform/topological-inventory"!==e.name},exports.filterVendorAppTypes=function filterVendorAppTypes(r){var n=e.getActiveVendor();return function(t){return t.supported_source_types.find((function(t){var o,i;return n===e.CLOUD_VENDOR?(null===(o=r.find((function(e){var r=e.name;return t===r})))||void 0===o?void 0:o.vendor)!==e.REDHAT_VENDOR:(null===(i=r.find((function(e){var r=e.name;return t===r})))||void 0===i?void 0:i.vendor)===e.REDHAT_VENDOR}))}};


/***/ })

}]);
//# sourceMappingURL=../sourcemaps/vendors~sourceDetail~sourcesPage.js.map