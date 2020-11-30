(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~addSource~remove"],{

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = exports.ModalVariant = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const ReactDOM = tslib_1.__importStar(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
const helpers_1 = __webpack_require__(/*! ../../helpers */ "./node_modules/@patternfly/react-core/dist/js/helpers/index.js");
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
const backdrop_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Backdrop/backdrop */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/components/Backdrop/backdrop.js"));
const ModalContent_1 = __webpack_require__(/*! ./ModalContent */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalContent.js");
const helpers_2 = __webpack_require__(/*! ../../helpers */ "./node_modules/@patternfly/react-core/dist/js/helpers/index.js");
var ModalVariant;
(function (ModalVariant) {
    ModalVariant["small"] = "small";
    ModalVariant["medium"] = "medium";
    ModalVariant["large"] = "large";
    ModalVariant["default"] = "default";
})(ModalVariant = exports.ModalVariant || (exports.ModalVariant = {}));
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.boxId = '';
        this.labelId = '';
        this.descriptorId = '';
        this.handleEscKeyClick = (event) => {
            const { onEscapePress } = this.props;
            if (event.keyCode === helpers_1.KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
                onEscapePress ? onEscapePress(event) : this.props.onClose();
            }
        };
        this.getElement = (appendTo) => {
            if (typeof appendTo === 'function') {
                return appendTo();
            }
            return appendTo || document.body;
        };
        this.toggleSiblingsFromScreenReaders = (hide) => {
            const { appendTo } = this.props;
            const target = this.getElement(appendTo);
            const bodyChildren = target.children;
            for (const child of Array.from(bodyChildren)) {
                if (child !== this.state.container) {
                    hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
                }
            }
        };
        this.isEmpty = (value) => value === null || value === undefined || value === '';
        const boxIdNum = Modal.currentId++;
        const labelIdNum = boxIdNum + 1;
        const descriptorIdNum = boxIdNum + 2;
        this.boxId = props.id || `pf-modal-part-${boxIdNum}`;
        this.labelId = `pf-modal-part-${labelIdNum}`;
        this.descriptorId = `pf-modal-part-${descriptorIdNum}`;
        this.state = {
            container: undefined,
            ouiaStateId: helpers_2.getDefaultOUIAId(Modal.displayName, props.variant)
        };
    }
    componentDidMount() {
        const { appendTo, title, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, hasNoBodyWrapper, header } = this.props;
        const target = this.getElement(appendTo);
        const container = document.createElement('div');
        this.setState({ container });
        target.appendChild(container);
        target.addEventListener('keydown', this.handleEscKeyClick, false);
        if (this.props.isOpen) {
            target.classList.add(react_styles_1.css(backdrop_1.default.backdropOpen));
        }
        else {
            target.classList.remove(react_styles_1.css(backdrop_1.default.backdropOpen));
        }
        if (this.isEmpty(title) && this.isEmpty(ariaLabel) && this.isEmpty(ariaLabelledby)) {
            // eslint-disable-next-line no-console
            console.error('Modal: Specify at least one of: title, aria-label, aria-labelledby.');
        }
        if (this.isEmpty(ariaLabel) && this.isEmpty(ariaLabelledby) && (hasNoBodyWrapper || header)) {
            // eslint-disable-next-line no-console
            console.error('Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.');
        }
    }
    componentDidUpdate() {
        const { appendTo } = this.props;
        const target = this.getElement(appendTo);
        if (this.props.isOpen) {
            target.classList.add(react_styles_1.css(backdrop_1.default.backdropOpen));
            this.toggleSiblingsFromScreenReaders(true);
        }
        else {
            target.classList.remove(react_styles_1.css(backdrop_1.default.backdropOpen));
            this.toggleSiblingsFromScreenReaders(false);
        }
    }
    componentWillUnmount() {
        const { appendTo } = this.props;
        const target = this.getElement(appendTo);
        if (this.state.container) {
            target.removeChild(this.state.container);
        }
        target.removeEventListener('keydown', this.handleEscKeyClick, false);
        target.classList.remove(react_styles_1.css(backdrop_1.default.backdropOpen));
    }
    render() {
        const _a = this.props, { 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        appendTo, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onEscapePress, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, 'aria-describedby': ariaDescribedby, title, titleIconVariant, titleLabel, ouiaId, ouiaSafe } = _a, props = tslib_1.__rest(_a, ["appendTo", "onEscapePress", 'aria-labelledby', 'aria-label', 'aria-describedby', "title", "titleIconVariant", "titleLabel", "ouiaId", "ouiaSafe"]);
        const { container } = this.state;
        if (!helpers_1.canUseDOM || !container) {
            return null;
        }
        return ReactDOM.createPortal(React.createElement(ModalContent_1.ModalContent, Object.assign({}, props, { boxId: this.boxId, labelId: this.labelId, descriptorId: this.descriptorId, title: title, titleIconVariant: titleIconVariant, titleLabel: titleLabel, "aria-label": ariaLabel, "aria-describedby": ariaDescribedby, "aria-labelledby": ariaLabelledby, ouiaId: ouiaId !== undefined ? ouiaId : this.state.ouiaStateId, ouiaSafe: ouiaSafe })), container);
    }
}
exports.Modal = Modal;
Modal.displayName = 'Modal';
Modal.currentId = 0;
Modal.defaultProps = {
    className: '',
    isOpen: false,
    title: '',
    titleIconVariant: null,
    titleLabel: '',
    'aria-label': '',
    showClose: true,
    'aria-describedby': '',
    'aria-labelledby': '',
    id: undefined,
    actions: [],
    onClose: () => undefined,
    variant: 'default',
    hasNoBodyWrapper: false,
    appendTo: () => document.body,
    ouiaSafe: true
};
//# sourceMappingURL=Modal.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBox.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBox.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBox = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
const c_modal_box_m_align_top_spacer_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-tokens/dist/js/c_modal_box_m_align_top_spacer */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-tokens/dist/js/c_modal_box_m_align_top_spacer.js"));
exports.ModalBox = (_a) => {
    var { children, className = '', variant = 'default', position, positionOffset, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel = '', 'aria-describedby': ariaDescribedby, style } = _a, props = tslib_1.__rest(_a, ["children", "className", "variant", "position", "positionOffset", 'aria-labelledby', 'aria-label', 'aria-describedby', "style"]);
    if (positionOffset) {
        style = style || {};
        style[c_modal_box_m_align_top_spacer_1.default.name] = positionOffset;
    }
    return (React.createElement("div", Object.assign({}, props, { role: "dialog", "aria-label": ariaLabel || null, "aria-labelledby": ariaLabelledby || null, "aria-describedby": ariaDescribedby, "aria-modal": "true", className: react_styles_1.css(modal_box_1.default.modalBox, className, position === 'top' && modal_box_1.default.modifiers.alignTop, variant === 'large' && modal_box_1.default.modifiers.lg, variant === 'small' && modal_box_1.default.modifiers.sm, variant === 'medium' && modal_box_1.default.modifiers.md), style: style }), children));
};
exports.ModalBox.displayName = 'ModalBox';
//# sourceMappingURL=ModalBox.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxBody.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxBody.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBoxBody = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
exports.ModalBoxBody = (_a) => {
    var { children = null, className = '' } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({}, props, { className: react_styles_1.css(modal_box_1.default.modalBoxBody, className) }), children));
};
exports.ModalBoxBody.displayName = 'ModalBoxBody';
//# sourceMappingURL=ModalBoxBody.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxCloseButton.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxCloseButton.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBoxCloseButton = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const Button_1 = __webpack_require__(/*! ../Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/index.js");
const times_icon_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/times-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/times-icon.js"));
exports.ModalBoxCloseButton = (_a) => {
    var { className = '', onClose = () => undefined } = _a, props = tslib_1.__rest(_a, ["className", "onClose"]);
    return (React.createElement(Button_1.Button, Object.assign({ className: className, variant: "plain", onClick: onClose, "aria-label": "Close" }, props),
        React.createElement(times_icon_1.default, null)));
};
exports.ModalBoxCloseButton.displayName = 'ModalBoxCloseButton';
//# sourceMappingURL=ModalBoxCloseButton.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxDescription.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxDescription.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBoxDescription = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
exports.ModalBoxDescription = (_a) => {
    var { children = null, className = '', id = '' } = _a, props = tslib_1.__rest(_a, ["children", "className", "id"]);
    return (React.createElement("div", Object.assign({}, props, { id: id, className: react_styles_1.css(modal_box_1.default.modalBoxDescription, className) }), children));
};
exports.ModalBoxDescription.displayName = 'ModalBoxDescription';
//# sourceMappingURL=ModalBoxDescription.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxFooter.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxFooter.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBoxFooter = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
exports.ModalBoxFooter = (_a) => {
    var { children = null, className = '' } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("footer", Object.assign({}, props, { className: react_styles_1.css(modal_box_1.default.modalBoxFooter, className) }), children));
};
exports.ModalBoxFooter.displayName = 'ModalBoxFooter';
//# sourceMappingURL=ModalBoxFooter.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxHeader.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxHeader.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBoxHeader = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
exports.ModalBoxHeader = (_a) => {
    var { children = null, className = '', help = null } = _a, props = tslib_1.__rest(_a, ["children", "className", "help"]);
    return (React.createElement("header", Object.assign({ className: react_styles_1.css(modal_box_1.default.modalBoxHeader, help && modal_box_1.default.modifiers.help, className) }, props),
        help && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: react_styles_1.css(modal_box_1.default.modalBoxHeaderMain) }, children),
            React.createElement("div", { className: "pf-c-modal-box__header-help" }, help))),
        !help && children));
};
exports.ModalBoxHeader.displayName = 'ModalBoxHeader';
//# sourceMappingURL=ModalBoxHeader.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxTitle.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxTitle.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalBoxTitle = exports.isVariantIcon = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
const accessibility_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/utilities/Accessibility/accessibility */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/utilities/Accessibility/accessibility.js"));
const helpers_1 = __webpack_require__(/*! ../../helpers */ "./node_modules/@patternfly/react-core/dist/js/helpers/index.js");
const Tooltip_1 = __webpack_require__(/*! ../Tooltip */ "./node_modules/@patternfly/react-core/dist/js/components/Tooltip/index.js");
const check_circle_icon_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/check-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/check-circle-icon.js"));
const exclamation_circle_icon_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-circle-icon.js"));
const exclamation_triangle_icon_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-triangle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon.js"));
const info_circle_icon_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/info-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/info-circle-icon.js"));
const bell_icon_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/bell-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/bell-icon.js"));
exports.isVariantIcon = (icon) => ['success', 'danger', 'warning', 'info', 'defaut'].includes(icon);
exports.ModalBoxTitle = (_a) => {
    var { className = '', id, title, titleIconVariant, titleLabel = '' } = _a, props = tslib_1.__rest(_a, ["className", "id", "title", "titleIconVariant", "titleLabel"]);
    const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
    const h1 = React.useRef();
    const label = titleLabel || (exports.isVariantIcon(titleIconVariant) ? `${helpers_1.capitalize(titleIconVariant)} alert:` : titleLabel);
    const variantIcons = {
        success: React.createElement(check_circle_icon_1.default, null),
        danger: React.createElement(exclamation_circle_icon_1.default, null),
        warning: React.createElement(exclamation_triangle_icon_1.default, null),
        info: React.createElement(info_circle_icon_1.default, null),
        default: React.createElement(bell_icon_1.default, null)
    };
    const CustomIcon = !exports.isVariantIcon(titleIconVariant) && titleIconVariant;
    React.useLayoutEffect(() => {
        setIsTooltipVisible(h1.current && h1.current.offsetWidth < h1.current.scrollWidth);
    }, []);
    const content = (React.createElement("h1", Object.assign({ id: id, ref: h1, className: react_styles_1.css(modal_box_1.default.modalBoxTitle, titleIconVariant && modal_box_1.default.modifiers.icon, className) }, props),
        titleIconVariant && (React.createElement("span", { className: react_styles_1.css(modal_box_1.default.modalBoxTitleIcon) }, exports.isVariantIcon(titleIconVariant) ? variantIcons[titleIconVariant] : React.createElement(CustomIcon, null))),
        label && React.createElement("span", { className: react_styles_1.css(accessibility_1.default.screenReader) }, label),
        React.createElement("span", { className: react_styles_1.css(modal_box_1.default.modalBoxTitleText) }, title)));
    return isTooltipVisible ? (React.createElement(Tooltip_1.Tooltip, { content: title, isVisible: true }, content)) : (content);
};
exports.ModalBoxTitle.displayName = 'ModalBoxTitle';
//# sourceMappingURL=ModalBoxTitle.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalContent.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalContent.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalContent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const helpers_1 = __webpack_require__(/*! ../../helpers */ "./node_modules/@patternfly/react-core/dist/js/helpers/index.js");
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
const bullseye_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/layouts/Bullseye/bullseye */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/layouts/Bullseye/bullseye.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
const helpers_2 = __webpack_require__(/*! ../../helpers */ "./node_modules/@patternfly/react-core/dist/js/helpers/index.js");
const Backdrop_1 = __webpack_require__(/*! ../Backdrop/Backdrop */ "./node_modules/@patternfly/react-core/dist/js/components/Backdrop/Backdrop.js");
const ModalBoxBody_1 = __webpack_require__(/*! ./ModalBoxBody */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxBody.js");
const ModalBoxCloseButton_1 = __webpack_require__(/*! ./ModalBoxCloseButton */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxCloseButton.js");
const ModalBox_1 = __webpack_require__(/*! ./ModalBox */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBox.js");
const ModalBoxFooter_1 = __webpack_require__(/*! ./ModalBoxFooter */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxFooter.js");
const ModalBoxDescription_1 = __webpack_require__(/*! ./ModalBoxDescription */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxDescription.js");
const ModalBoxHeader_1 = __webpack_require__(/*! ./ModalBoxHeader */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxHeader.js");
const ModalBoxTitle_1 = __webpack_require__(/*! ./ModalBoxTitle */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxTitle.js");
exports.ModalContent = (_a) => {
    var { children, className = '', isOpen = false, header = null, help = null, description = null, title = '', titleIconVariant = null, titleLabel = '', 'aria-label': ariaLabel = '', 'aria-describedby': ariaDescribedby, 'aria-labelledby': ariaLabelledby, showClose = true, footer = null, actions = [], onClose = () => undefined, variant = 'default', position, positionOffset, width = -1, boxId, labelId, descriptorId, disableFocusTrap = false, hasNoBodyWrapper = false, ouiaId, ouiaSafe = true } = _a, props = tslib_1.__rest(_a, ["children", "className", "isOpen", "header", "help", "description", "title", "titleIconVariant", "titleLabel", 'aria-label', 'aria-describedby', 'aria-labelledby', "showClose", "footer", "actions", "onClose", "variant", "position", "positionOffset", "width", "boxId", "labelId", "descriptorId", "disableFocusTrap", "hasNoBodyWrapper", "ouiaId", "ouiaSafe"]);
    if (!isOpen) {
        return null;
    }
    const modalBoxHeader = header ? (React.createElement(ModalBoxHeader_1.ModalBoxHeader, { help: help }, header)) : (title && (React.createElement(ModalBoxHeader_1.ModalBoxHeader, { help: help },
        React.createElement(ModalBoxTitle_1.ModalBoxTitle, { title: title, titleIconVariant: titleIconVariant, titleLabel: titleLabel, id: labelId }),
        description && React.createElement(ModalBoxDescription_1.ModalBoxDescription, { id: descriptorId }, description))));
    const modalBoxFooter = footer ? (React.createElement(ModalBoxFooter_1.ModalBoxFooter, null, footer)) : (actions.length > 0 && React.createElement(ModalBoxFooter_1.ModalBoxFooter, null, actions));
    const modalBody = hasNoBodyWrapper ? (children) : (React.createElement(ModalBoxBody_1.ModalBoxBody, Object.assign({}, props, (!description && !ariaDescribedby && { id: descriptorId })), children));
    const boxStyle = width === -1 ? {} : { width };
    const ariaLabelledbyFormatted = () => {
        if (ariaLabelledby === null) {
            return null;
        }
        const idRefList = [];
        if ((ariaLabel && boxId) !== '') {
            idRefList.push(ariaLabel && boxId);
        }
        if (ariaLabelledby) {
            idRefList.push(ariaLabelledby);
        }
        if (title) {
            idRefList.push(labelId);
        }
        return idRefList.join(' ');
    };
    const modalBox = (React.createElement(ModalBox_1.ModalBox, Object.assign({ id: boxId, style: boxStyle, className: react_styles_1.css(className, ModalBoxTitle_1.isVariantIcon(titleIconVariant) &&
            modal_box_1.default.modifiers[titleIconVariant]), variant: variant, position: position, positionOffset: positionOffset, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledbyFormatted(), "aria-describedby": ariaDescribedby || (hasNoBodyWrapper ? null : descriptorId) }, helpers_2.getOUIAProps(exports.ModalContent.displayName, ouiaId, ouiaSafe)),
        showClose && React.createElement(ModalBoxCloseButton_1.ModalBoxCloseButton, { onClose: onClose }),
        modalBoxHeader,
        modalBody,
        modalBoxFooter));
    return (React.createElement(Backdrop_1.Backdrop, null,
        React.createElement(helpers_1.FocusTrap, { active: !disableFocusTrap, focusTrapOptions: { clickOutsideDeactivates: true }, className: react_styles_1.css(bullseye_1.default.bullseye) }, modalBox)));
};
exports.ModalContent.displayName = 'ModalContent';
//# sourceMappingURL=ModalContent.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Modal/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Modal/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./Modal */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./ModalBox */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBox.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./ModalBoxBody */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxBody.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./ModalBoxCloseButton */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxCloseButton.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./ModalBoxHeader */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxHeader.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./ModalBoxFooter */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalBoxFooter.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./ModalContent */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalContent.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/Wizard.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Wizard/Wizard.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Wizard = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const constants_1 = __webpack_require__(/*! ../../helpers/constants */ "./node_modules/@patternfly/react-core/dist/js/helpers/constants.js");
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
const wizard_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Wizard/wizard */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/components/Wizard/wizard.js"));
const Modal_1 = __webpack_require__(/*! ../Modal */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/index.js");
const WizardFooterInternal_1 = __webpack_require__(/*! ./WizardFooterInternal */ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardFooterInternal.js");
const WizardToggle_1 = __webpack_require__(/*! ./WizardToggle */ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardToggle.js");
const WizardNav_1 = __webpack_require__(/*! ./WizardNav */ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardNav.js");
const WizardNavItem_1 = __webpack_require__(/*! ./WizardNavItem */ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardNavItem.js");
const WizardContext_1 = __webpack_require__(/*! ./WizardContext */ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardContext.js");
const WizardHeader_1 = __webpack_require__(/*! ./WizardHeader */ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardHeader.js");
class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyClicks = (event) => {
            if (event.keyCode === constants_1.KEY_CODES.ESCAPE_KEY) {
                if (this.state.isNavOpen) {
                    this.setState({ isNavOpen: !this.state.isNavOpen });
                }
                else if (this.props.isOpen) {
                    this.props.onClose();
                }
            }
        };
        this.onNext = () => {
            const { onNext, onClose, onSave } = this.props;
            const { currentStep } = this.state;
            const flattenedSteps = this.getFlattenedSteps();
            const maxSteps = flattenedSteps.length;
            if (currentStep >= maxSteps) {
                // Hit the save button at the end of the wizard
                if (onSave) {
                    return onSave();
                }
                return onClose();
            }
            else {
                const newStep = currentStep + 1;
                this.setState({
                    currentStep: newStep
                });
                const { id: prevId, name: prevName } = flattenedSteps[currentStep - 1];
                const { id, name } = flattenedSteps[newStep - 1];
                return onNext && onNext({ id, name }, { prevId, prevName });
            }
        };
        this.onBack = () => {
            const { onBack } = this.props;
            const { currentStep } = this.state;
            const flattenedSteps = this.getFlattenedSteps();
            if (flattenedSteps.length < currentStep) {
                // Previous step was removed, just update the currentStep state
                const adjustedStep = flattenedSteps.length;
                this.setState({
                    currentStep: adjustedStep
                });
            }
            else {
                const newStep = currentStep - 1 <= 0 ? 0 : currentStep - 1;
                this.setState({
                    currentStep: newStep
                });
                const { id: prevId, name: prevName } = flattenedSteps[newStep];
                const { id, name } = flattenedSteps[newStep - 1];
                return onBack && onBack({ id, name }, { prevId, prevName });
            }
        };
        this.goToStep = (step) => {
            const { onGoToStep } = this.props;
            const { currentStep } = this.state;
            const flattenedSteps = this.getFlattenedSteps();
            const maxSteps = flattenedSteps.length;
            if (step < 1) {
                step = 1;
            }
            else if (step > maxSteps) {
                step = maxSteps;
            }
            this.setState({ currentStep: step, isNavOpen: false });
            const { id: prevId, name: prevName } = flattenedSteps[currentStep - 1];
            const { id, name } = flattenedSteps[step - 1];
            return onGoToStep && onGoToStep({ id, name }, { prevId, prevName });
        };
        this.goToStepById = (stepId) => {
            const flattenedSteps = this.getFlattenedSteps();
            let step;
            for (let i = 0; i < flattenedSteps.length; i++) {
                if (flattenedSteps[i].id === stepId) {
                    step = i + 1;
                    break;
                }
            }
            if (step) {
                this.setState({ currentStep: step });
            }
        };
        this.goToStepByName = (stepName) => {
            const flattenedSteps = this.getFlattenedSteps();
            let step;
            for (let i = 0; i < flattenedSteps.length; i++) {
                if (flattenedSteps[i].name === stepName) {
                    step = i + 1;
                    break;
                }
            }
            if (step) {
                this.setState({ currentStep: step });
            }
        };
        this.getFlattenedSteps = () => {
            const { steps } = this.props;
            const flattenedSteps = [];
            for (const step of steps) {
                if (step.steps) {
                    for (const childStep of step.steps) {
                        flattenedSteps.push(childStep);
                    }
                }
                else {
                    flattenedSteps.push(step);
                }
            }
            return flattenedSteps;
        };
        this.getFlattenedStepsIndex = (flattenedSteps, stepName) => {
            for (let i = 0; i < flattenedSteps.length; i++) {
                if (flattenedSteps[i].name === stepName) {
                    return i + 1;
                }
            }
            return 0;
        };
        this.initSteps = (steps) => {
            // Set default Step values
            for (let i = 0; i < steps.length; i++) {
                if (steps[i].steps) {
                    for (let j = 0; j < steps[i].steps.length; j++) {
                        steps[i].steps[j] = Object.assign({ canJumpTo: true }, steps[i].steps[j]);
                    }
                }
                steps[i] = Object.assign({ canJumpTo: true }, steps[i]);
            }
            return steps;
        };
        this.getElement = (appendTo) => {
            if (typeof appendTo === 'function') {
                return appendTo();
            }
            return appendTo || document.body;
        };
        const newId = Wizard.currentId++;
        this.titleId = props.titleId || `pf-wizard-title-${newId}`;
        this.descriptionId = props.descriptionId || `pf-wizard-description-${newId}`;
        this.state = {
            currentStep: this.props.startAtStep && Number.isInteger(this.props.startAtStep) ? this.props.startAtStep : 1,
            isNavOpen: false
        };
    }
    componentDidMount() {
        const target = typeof document !== 'undefined' ? document.body : null;
        if (target) {
            target.addEventListener('keydown', this.handleKeyClicks, false);
        }
    }
    componentWillUnmount() {
        const target = (typeof document !== 'undefined' && document.body) || null;
        if (target) {
            target.removeEventListener('keydown', this.handleKeyClicks, false);
        }
    }
    render() {
        const _a = this.props, { 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        width, height, title, description, onClose, onSave, onBack, onNext, onGoToStep, className, steps, startAtStep, nextButtonText = 'Next', backButtonText = 'Back', cancelButtonText = 'Cancel', hideClose, closeButtonAriaLabel = 'Close', navAriaLabel, navAriaLabelledBy, mainAriaLabel, mainAriaLabelledBy, hasNoBodyPadding, footer, appendTo, isOpen, titleId, descriptionId } = _a, rest = tslib_1.__rest(_a, ["width", "height", "title", "description", "onClose", "onSave", "onBack", "onNext", "onGoToStep", "className", "steps", "startAtStep", "nextButtonText", "backButtonText", "cancelButtonText", "hideClose", "closeButtonAriaLabel", "navAriaLabel", "navAriaLabelledBy", "mainAriaLabel", "mainAriaLabelledBy", "hasNoBodyPadding", "footer", "appendTo", "isOpen", "titleId", "descriptionId"])
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ;
        const { currentStep } = this.state;
        const flattenedSteps = this.getFlattenedSteps();
        const adjustedStep = flattenedSteps.length < currentStep ? flattenedSteps.length : currentStep;
        const activeStep = flattenedSteps[adjustedStep - 1];
        const computedSteps = this.initSteps(steps);
        const firstStep = activeStep === flattenedSteps[0];
        const isValid = activeStep && activeStep.enableNext !== undefined ? activeStep.enableNext : true;
        const nav = (isWizardNavOpen) => {
            const wizNavAProps = {
                isOpen: isWizardNavOpen,
                'aria-label': navAriaLabel,
                'aria-labelledby': (title || navAriaLabelledBy) && (navAriaLabelledBy || this.titleId)
            };
            return (React.createElement(WizardNav_1.WizardNav, Object.assign({}, wizNavAProps), computedSteps.map((step, index) => {
                if (step.isFinishedStep) {
                    // Don't show finished step in the side nav
                    return;
                }
                let enabled;
                let navItemStep;
                if (step.steps) {
                    let hasActiveChild = false;
                    let canJumpToParent = false;
                    for (const subStep of step.steps) {
                        if (activeStep.name === subStep.name) {
                            // one of the children matches
                            hasActiveChild = true;
                        }
                        if (subStep.canJumpTo) {
                            canJumpToParent = true;
                        }
                    }
                    navItemStep = this.getFlattenedStepsIndex(flattenedSteps, step.steps[0].name);
                    return (React.createElement(WizardNavItem_1.WizardNavItem, { key: index, content: step.name, isCurrent: hasActiveChild, isDisabled: !canJumpToParent, step: navItemStep, onNavItemClick: this.goToStep },
                        React.createElement(WizardNav_1.WizardNav, Object.assign({}, wizNavAProps, { returnList: true }), step.steps.map((childStep, indexChild) => {
                            if (childStep.isFinishedStep) {
                                // Don't show finished step in the side nav
                                return;
                            }
                            navItemStep = this.getFlattenedStepsIndex(flattenedSteps, childStep.name);
                            enabled = childStep.canJumpTo;
                            return (React.createElement(WizardNavItem_1.WizardNavItem, { key: `child_${indexChild}`, content: childStep.name, isCurrent: activeStep.name === childStep.name, isDisabled: !enabled, step: navItemStep, onNavItemClick: this.goToStep }));
                        }))));
                }
                navItemStep = this.getFlattenedStepsIndex(flattenedSteps, step.name);
                enabled = step.canJumpTo;
                return (React.createElement(WizardNavItem_1.WizardNavItem, Object.assign({}, step.stepNavItemProps, { key: index, content: step.name, isCurrent: activeStep.name === step.name, isDisabled: !enabled, step: navItemStep, onNavItemClick: this.goToStep })));
            })));
        };
        const context = {
            goToStepById: this.goToStepById,
            goToStepByName: this.goToStepByName,
            onNext: this.onNext,
            onBack: this.onBack,
            onClose,
            activeStep
        };
        const wizard = (React.createElement(WizardContext_1.WizardContextProvider, { value: context },
            React.createElement("div", Object.assign({}, rest, { className: react_styles_1.css(wizard_1.default.wizard, activeStep && activeStep.isFinishedStep && 'pf-m-finished', className) }, (height && { style: { height } })),
                title && (React.createElement(WizardHeader_1.WizardHeader, { titleId: this.titleId, descriptionId: this.descriptionId, onClose: onClose, title: title, description: description, closeButtonAriaLabel: closeButtonAriaLabel, hideClose: hideClose })),
                React.createElement(WizardToggle_1.WizardToggle, { mainAriaLabel: mainAriaLabel, isInPage: isOpen === undefined, mainAriaLabelledBy: (title || mainAriaLabelledBy) && (mainAriaLabelledBy || this.titleId), isNavOpen: this.state.isNavOpen, onNavToggle: isNavOpen => this.setState({ isNavOpen }), nav: nav, steps: steps, activeStep: activeStep, hasNoBodyPadding: hasNoBodyPadding }, footer || (React.createElement(WizardFooterInternal_1.WizardFooterInternal, { onNext: this.onNext, onBack: this.onBack, onClose: onClose, isValid: isValid, firstStep: firstStep, activeStep: activeStep, nextButtonText: (activeStep && activeStep.nextButtonText) || nextButtonText, backButtonText: backButtonText, cancelButtonText: cancelButtonText }))))));
        if (isOpen !== undefined) {
            return (React.createElement(Modal_1.Modal, { isOpen: isOpen, variant: Modal_1.ModalVariant.large, "aria-labelledby": this.titleId, "aria-describedby": this.descriptionId, showClose: false, hasNoBodyWrapper: true }, wizard));
        }
        return wizard;
    }
}
exports.Wizard = Wizard;
Wizard.displayName = 'Wizard';
Wizard.currentId = 0;
Wizard.defaultProps = {
    title: null,
    description: '',
    className: '',
    startAtStep: 1,
    nextButtonText: 'Next',
    backButtonText: 'Back',
    cancelButtonText: 'Cancel',
    hideClose: false,
    closeButtonAriaLabel: 'Close',
    navAriaLabel: null,
    navAriaLabelledBy: null,
    mainAriaLabel: null,
    mainAriaLabelledBy: null,
    hasNoBodyPadding: false,
    onBack: null,
    onNext: null,
    onGoToStep: null,
    width: null,
    height: null,
    footer: null,
    onClose: () => undefined,
    appendTo: null,
    isOpen: undefined
};
//# sourceMappingURL=Wizard.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardContext.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardContext.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardContextConsumer = exports.WizardContextProvider = exports.WizardContext = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
exports.WizardContext = React.createContext({
    goToStepById: () => null,
    goToStepByName: () => null,
    onNext: () => null,
    onBack: () => null,
    onClose: () => null,
    activeStep: { name: null }
});
exports.WizardContextProvider = exports.WizardContext.Provider;
exports.WizardContextConsumer = exports.WizardContext.Consumer;
//# sourceMappingURL=WizardContext.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardFooterInternal.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardFooterInternal.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardFooterInternal = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
const wizard_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Wizard/wizard */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/components/Wizard/wizard.js"));
const Button_1 = __webpack_require__(/*! ../Button */ "./node_modules/@patternfly/react-core/dist/js/components/Button/index.js");
exports.WizardFooterInternal = ({ onNext, onBack, onClose, isValid, firstStep, activeStep, nextButtonText, backButtonText, cancelButtonText }) => (React.createElement("footer", { className: react_styles_1.css(wizard_1.default.wizardFooter) },
    React.createElement(Button_1.Button, { variant: Button_1.ButtonVariant.primary, type: "submit", onClick: onNext, isDisabled: !isValid }, nextButtonText),
    !activeStep.hideBackButton && (React.createElement(Button_1.Button, { variant: Button_1.ButtonVariant.secondary, onClick: onBack, className: react_styles_1.css(firstStep && 'pf-m-disabled') }, backButtonText)),
    !activeStep.hideCancelButton && (React.createElement(Button_1.Button, { variant: Button_1.ButtonVariant.link, onClick: onClose }, cancelButtonText))));
exports.WizardFooterInternal.displayName = 'WizardFooterInternal';
//# sourceMappingURL=WizardFooterInternal.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardToggle.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardToggle.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardToggle = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@patternfly/react-core/node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/dist/esm/index.js");
const wizard_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Wizard/wizard */ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-styles/css/components/Wizard/wizard.js"));
const angle_right_icon_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/angle-right-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/angle-right-icon.js"));
const caret_down_icon_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/caret-down-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/caret-down-icon.js"));
const WizardBody_1 = __webpack_require__(/*! ./WizardBody */ "./node_modules/@patternfly/react-core/dist/js/components/Wizard/WizardBody.js");
exports.WizardToggle = ({ isNavOpen, onNavToggle, nav, steps, activeStep, children, hasNoBodyPadding = false, 'aria-label': ariaLabel = 'Wizard Toggle', mainAriaLabelledBy = null, mainAriaLabel = null, isInPage = true }) => {
    let activeStepIndex;
    let activeStepName;
    let activeStepSubName;
    for (let i = 0; i < steps.length; i++) {
        if ((activeStep.id && steps[i].id === activeStep.id) || steps[i].name === activeStep.name) {
            activeStepIndex = i + 1;
            activeStepName = steps[i].name;
            break;
        }
        else if (steps[i].steps) {
            for (const step of steps[i].steps) {
                if ((activeStep.id && step.id === activeStep.id) || step.name === activeStep.name) {
                    activeStepIndex = i + 1;
                    activeStepName = steps[i].name;
                    activeStepSubName = step.name;
                    break;
                }
            }
        }
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: () => onNavToggle(!isNavOpen), className: react_styles_1.css(wizard_1.default.wizardToggle, isNavOpen && 'pf-m-expanded'), "aria-label": ariaLabel, "aria-expanded": isNavOpen },
            React.createElement("ol", { className: react_styles_1.css(wizard_1.default.wizardToggleList) },
                React.createElement("li", { className: react_styles_1.css(wizard_1.default.wizardToggleListItem) },
                    React.createElement("span", { className: react_styles_1.css(wizard_1.default.wizardToggleNum) }, activeStepIndex),
                    " ",
                    activeStepName,
                    activeStepSubName && React.createElement(angle_right_icon_1.default, { className: react_styles_1.css(wizard_1.default.wizardToggleSeparator), "aria-hidden": "true" })),
                activeStepSubName && React.createElement("li", { className: react_styles_1.css(wizard_1.default.wizardToggleListItem) }, activeStepSubName)),
            React.createElement("span", { className: react_styles_1.css(wizard_1.default.wizardToggleIcon) },
                React.createElement(caret_down_icon_1.default, { "aria-hidden": "true" }))),
        React.createElement("div", { className: react_styles_1.css(wizard_1.default.wizardOuterWrap) },
            React.createElement("div", { className: react_styles_1.css(wizard_1.default.wizardInnerWrap) },
                nav(isNavOpen),
                React.createElement(WizardBody_1.WizardBody, { mainComponent: isInPage ? 'div' : 'main', "aria-label": mainAriaLabel, "aria-labelledby": mainAriaLabelledBy, hasNoBodyPadding: hasNoBodyPadding }, activeStep.component)),
            children)));
};
exports.WizardToggle.displayName = 'WizardToggle';
//# sourceMappingURL=WizardToggle.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/node_modules/@patternfly/react-tokens/dist/js/c_modal_box_m_align_top_spacer.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/node_modules/@patternfly/react-tokens/dist/js/c_modal_box_m_align_top_spacer.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.c_modal_box_m_align_top_spacer = {
  "name": "--pf-c-modal-box--m-align-top--spacer",
  "value": "0.5rem",
  "var": "var(--pf-c-modal-box--m-align-top--spacer)"
};
exports["default"] = exports.c_modal_box_m_align_top_spacer;

/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/CloseModal.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/CloseModal.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=__webpack_require__(/*! react */ "./node_modules/react/index.js"),React__default=_interopDefault(React),Button_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button.js */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js"),PropTypes=_interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")),reactIntl=__webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js"),Title_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title.js */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js"),Modal_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/Modal/Modal.js */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js"),ExclamationTriangleIcon=_interopDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-triangle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon.js")),CloseModal=function CloseModal(e){var t=e.onExit,a=e.onStay,i=e.isOpen,l=e.title,r=e.exitTitle,o=e.stayTitle,s=e.description,n=reactIntl.useIntl();return React__default.createElement(Modal_js.Modal,{variant:"small",title:l,"aria-label":n.formatMessage({id:"wizard.closeAriaLabel",defaultMessage:"Close add source wizard"}),header:React__default.createElement(Title_js.Title,{headingLevel:"h1",size:"2xl"},React__default.createElement(ExclamationTriangleIcon,{size:"sm",className:"ins-c-source__warning-icon"}),l),isOpen:i,onClose:a,actions:[React__default.createElement(Button_js.Button,{key:"confirm",variant:"primary",id:"on-exit-button",onClick:t},r),React__default.createElement(Button_js.Button,{key:"cancel",variant:"link",id:"on-stay-button",onClick:a},o)]},s)};CloseModal.propTypes={onExit:PropTypes.func.isRequired,onStay:PropTypes.func.isRequired,isOpen:PropTypes.bool.isRequired,title:PropTypes.node,exitTitle:PropTypes.node,stayTitle:PropTypes.node,description:PropTypes.node},CloseModal.defaultProps={title:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.closeTitle",defaultMessage:"Exit source creation?"}),exitTitle:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.exitText",defaultMessage:"Exit"}),stayTitle:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.stayText",defaultMessage:"Stay"}),description:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.closeWarning",defaultMessage:"All inputs will be discarded."})},exports.default=CloseModal;


/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/FinishedStep-490967d7.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/FinishedStep-490967d7.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=__webpack_require__(/*! react */ "./node_modules/react/index.js"),React__default=_interopDefault(React),Button_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button.js */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js"),PropTypes=_interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")),reactIntl=__webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js"),Bullseye_js=__webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js"),EmptyState_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyState.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js"),EmptyStateSecondaryActions_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions.js"),EmptyStateIcon_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js"),Title_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title.js */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js"),EmptyStateBody_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js"),CheckCircleIcon=_interopDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/check-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/check-circle-icon.js")),computeSourcesUrl=function computeSourcesUrl(){return insights.chrome.isBeta()?"/beta/settings/sources":"/settings/sources"},FinishedStep=function FinishedStep(e){var t=e.onClose,s=e.successfulMessage,r=e.hideSourcesButton,a=e.returnButtonTitle,o=e.title,c=e.linkText,n=e.secondaryActions;return(React__default.createElement(Bullseye_js.Bullseye,null,React__default.createElement(EmptyState_js.EmptyState,{variant:EmptyState_js.EmptyStateVariant.full,className:"pf-u-mt-4xl"},React__default.createElement(EmptyStateIcon_js.EmptyStateIcon,{icon:CheckCircleIcon,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),React__default.createElement(Title_js.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},o),React__default.createElement(EmptyStateBody_js.EmptyStateBody,{className:"ins-c-sources__wizard--step-text"},s),React__default.createElement(Button_js.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},a),!r&&React__default.createElement(EmptyStateSecondaryActions_js.EmptyStateSecondaryActions,null,React__default.createElement(Button_js.Button,{variant:"link",component:"a",target:"_blank",rel:"noopener noreferrer",href:computeSourcesUrl()},c)),n&&React__default.createElement(EmptyStateSecondaryActions_js.EmptyStateSecondaryActions,null,n))))};FinishedStep.propTypes={onClose:PropTypes.func.isRequired,successfulMessage:PropTypes.node.isRequired,hideSourcesButton:PropTypes.bool,returnButtonTitle:PropTypes.node.isRequired,title:PropTypes.node,linkText:PropTypes.node,secondaryActions:PropTypes.node},FinishedStep.defaultProps={title:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.succConfiguration",defaultMessage:"Configuration successful"}),linkText:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.toSources",defaultMessage:"Take me to sources"})},exports.FinishedStep=FinishedStep,exports.computeSourcesUrl=computeSourcesUrl;


/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/TimeoutStep.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/TimeoutStep.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=__webpack_require__(/*! react */ "./node_modules/react/index.js"),React__default=_interopDefault(React),Button_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button.js */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js"),PropTypes=_interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")),reactIntl=__webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js"),Bullseye_js=__webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js"),EmptyState_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyState.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js"),EmptyStateSecondaryActions_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateSecondaryActions.js"),EmptyStateIcon_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js"),Title_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title.js */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js"),EmptyStateBody_js=__webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js"),WrenchIcon=_interopDefault(__webpack_require__(/*! @patternfly/react-icons/dist/js/icons/wrench-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/wrench-icon.js")),TimeoutStep=function TimeoutStep(e){var t=e.onClose,a=e.returnButtonTitle,r=e.title,n=e.secondaryActions,o=reactIntl.useIntl();return React__default.createElement(Bullseye_js.Bullseye,null,React__default.createElement(EmptyState_js.EmptyState,{variant:EmptyState_js.EmptyStateVariant.full,className:"pf-u-mt-4xl"},React__default.createElement(EmptyStateIcon_js.EmptyStateIcon,{icon:WrenchIcon,color:"var(--pf-global--Color--200)",className:"pf-u-mb-0"}),React__default.createElement(Title_js.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},r),React__default.createElement(EmptyStateBody_js.EmptyStateBody,null,o.formatMessage({id:"wizard.uncompleteConfigurationDescription",defaultMessage:"We are still working to confirm credentials and app settings.{newLine}To track progress, check the Status column in the Sources table."},{newLine:React__default.createElement("br",{key:"br"})})),React__default.createElement(Button_js.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},a),n&&React__default.createElement(EmptyStateSecondaryActions_js.EmptyStateSecondaryActions,null,n)))};TimeoutStep.propTypes={onClose:PropTypes.func.isRequired,returnButtonTitle:PropTypes.node.isRequired,title:PropTypes.node,secondaryActions:PropTypes.node},TimeoutStep.defaultProps={title:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.uncompleteConfigurationTitle",defaultMessage:"Configuration not yet complete"})},exports.default=TimeoutStep;


/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/computeSourceStatus.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/computeSourceStatus.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0});var computeSourceStatus=function computeSourceStatus(i){var a,l,o,t,e,u,v,n,d=null===(a=i.applications)||void 0===a?void 0:null===(l=a[0])||void 0===l?void 0:l.availability_status,s=null===(o=i.endpoint)||void 0===o?void 0:null===(t=o[0])||void 0===t?void 0:t.availability_status;return[d,s].includes("unavailable")?"unavailable":"available"===d&&!(null===(e=i.endpoint)||void 0===e?void 0:e[0])||"available"===s&&!(null===(u=i.applications)||void 0===u?void 0:u[0])||"available"===d&&"available"===s?"available":(null===(v=i.applications)||void 0===v?void 0:v[0])||(null===(n=i.endpoint)||void 0===n?void 0:n[0])?"timeout":"finished"};exports.computeSourceStatus=computeSourceStatus,exports.default=computeSourceStatus;


/***/ }),

/***/ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/handleError.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/handleError.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var get=_interopDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));__webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/files/cjs/interceptors */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/files/cjs/interceptors.js"),__webpack_require__(/*! ./constants.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/constants.js");var index=__webpack_require__(/*! ./index-1eff31c6.js */ "./node_modules/@redhat-cloud-services/frontend-components-sources/cjs/index-1eff31c6.js"),handleError=function handleError(e){var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return e||(r="Undefined error"),r||"string"!=typeof e||(r=e),r||(r=get(e,"errors[0].detail",JSON.stringify(e,null,2))),t?index.getSourcesApi().deleteSource(t).then((function(){return r})).catch((function(e){var t=get(e,"errors[0].detail",JSON.stringify(e,null,2));return"".concat(r,". The source was not removed, try remove it later: ").concat(t)})):r};exports.handleError=handleError;


/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEmpty.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ })

}]);
//# sourceMappingURL=../sourcemaps/vendors~addSource~remove.js.map