(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~addApp~addSource~edit~remove"],{

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Backdrop/Backdrop.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Backdrop/Backdrop.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const backdrop_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Backdrop/backdrop */ "./node_modules/@patternfly/react-styles/css/components/Backdrop/backdrop.js"));
exports.Backdrop = (_a) => {
    var { children = null, className = '' } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({}, props, { className: react_styles_1.css(backdrop_1.default.backdrop, className) }), children));
};
exports.Backdrop.displayName = 'Backdrop';
//# sourceMappingURL=Backdrop.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Modal/Modal.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const ReactDOM = tslib_1.__importStar(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
const helpers_1 = __webpack_require__(/*! ../../helpers */ "./node_modules/@patternfly/react-core/dist/js/helpers/index.js");
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const backdrop_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/Backdrop/backdrop */ "./node_modules/@patternfly/react-styles/css/components/Backdrop/backdrop.js"));
const ModalContent_1 = __webpack_require__(/*! ./ModalContent */ "./node_modules/@patternfly/react-core/dist/js/components/Modal/ModalContent.js");
var ModalVariant;
(function (ModalVariant) {
    ModalVariant["small"] = "small";
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
            let target;
            if (typeof appendTo === 'function') {
                target = appendTo();
            }
            else {
                target = appendTo;
            }
            return target;
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
            container: undefined
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
        onEscapePress, 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel, 'aria-describedby': ariaDescribedby, title, ouiaId, ouiaSafe } = _a, props = tslib_1.__rest(_a, ["appendTo", "onEscapePress", 'aria-labelledby', 'aria-label', 'aria-describedby', "title", "ouiaId", "ouiaSafe"]);
        const { container } = this.state;
        if (!helpers_1.canUseDOM || !container) {
            return null;
        }
        return ReactDOM.createPortal(React.createElement(ModalContent_1.ModalContent, Object.assign({}, props, { boxId: this.boxId, labelId: this.labelId, descriptorId: this.descriptorId, title: title, "aria-label": ariaLabel, "aria-describedby": ariaDescribedby, "aria-labelledby": ariaLabelledby, ouiaId: ouiaId, ouiaSafe: ouiaSafe })), container);
    }
}
exports.Modal = Modal;
Modal.displayName = 'Modal';
Modal.currentId = 0;
Modal.defaultProps = {
    className: '',
    isOpen: false,
    title: '',
    'aria-label': '',
    showClose: true,
    'aria-describedby': '',
    'aria-labelledby': '',
    id: undefined,
    actions: [],
    onClose: () => undefined,
    variant: 'default',
    hasNoBodyWrapper: false,
    appendTo: (typeof document !== 'undefined' && document.body) || null,
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
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
exports.ModalBox = (_a) => {
    var { children, className = '', variant = 'default', 'aria-labelledby': ariaLabelledby, 'aria-label': ariaLabel = '', 'aria-describedby': ariaDescribedby } = _a, props = tslib_1.__rest(_a, ["children", "className", "variant", 'aria-labelledby', 'aria-label', 'aria-describedby']);
    return (React.createElement("div", Object.assign({}, props, { role: "dialog", "aria-label": ariaLabel || null, "aria-labelledby": ariaLabelledby || null, "aria-describedby": ariaDescribedby, "aria-modal": "true", className: react_styles_1.css(modal_box_1.default.modalBox, className, variant === 'large' && modal_box_1.default.modifiers.lg, variant === 'small' && modal_box_1.default.modifiers.sm) }), children));
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
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
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
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
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
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
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
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
exports.ModalBoxHeader = (_a) => {
    var { children = null, className = '' } = _a, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("header", Object.assign({ className: react_styles_1.css('pf-c-modal-box__header', className) }, props), children));
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
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
const Tooltip_1 = __webpack_require__(/*! ../Tooltip */ "./node_modules/@patternfly/react-core/dist/js/components/Tooltip/index.js");
exports.ModalBoxTitle = (_a) => {
    var { className = '', id, title } = _a, props = tslib_1.__rest(_a, ["className", "id", "title"]);
    const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);
    const h1 = React.useRef();
    React.useLayoutEffect(() => {
        setIsTooltipVisible(h1.current && h1.current.offsetWidth < h1.current.scrollWidth);
    }, []);
    return isTooltipVisible ? (React.createElement(Tooltip_1.Tooltip, { content: title },
        React.createElement("h1", Object.assign({ id: id, ref: h1, className: react_styles_1.css(modal_box_1.default.modalBoxTitle, className) }, props), title))) : (React.createElement("h1", Object.assign({ id: id, ref: h1, className: react_styles_1.css(modal_box_1.default.modalBoxTitle, className) }, props), title));
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
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const helpers_1 = __webpack_require__(/*! ../../helpers */ "./node_modules/@patternfly/react-core/dist/js/helpers/index.js");
const modal_box_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/components/ModalBox/modal-box */ "./node_modules/@patternfly/react-styles/css/components/ModalBox/modal-box.js"));
const bullseye_1 = tslib_1.__importDefault(__webpack_require__(/*! @patternfly/react-styles/css/layouts/Bullseye/bullseye */ "./node_modules/@patternfly/react-styles/css/layouts/Bullseye/bullseye.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
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
    var { children, className = '', isOpen = false, header = null, description = null, title = '', 'aria-label': ariaLabel = '', 'aria-describedby': ariaDescribedby, 'aria-labelledby': ariaLabelledby, showClose = true, footer = null, actions = [], onClose = () => undefined, variant = 'default', width = -1, boxId, labelId, descriptorId, disableFocusTrap = false, hasNoBodyWrapper = false, ouiaId, ouiaSafe = true } = _a, props = tslib_1.__rest(_a, ["children", "className", "isOpen", "header", "description", "title", 'aria-label', 'aria-describedby', 'aria-labelledby', "showClose", "footer", "actions", "onClose", "variant", "width", "boxId", "labelId", "descriptorId", "disableFocusTrap", "hasNoBodyWrapper", "ouiaId", "ouiaSafe"]);
    if (!isOpen) {
        return null;
    }
    const modalBoxHeader = header ? (React.createElement(ModalBoxHeader_1.ModalBoxHeader, null, header)) : (title && (React.createElement(ModalBoxHeader_1.ModalBoxHeader, null,
        React.createElement(ModalBoxTitle_1.ModalBoxTitle, { title: title, id: labelId, className: react_styles_1.css(modal_box_1.default.modalBoxTitle) }),
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
    const modalBox = (React.createElement(ModalBox_1.ModalBox, Object.assign({ id: boxId, style: boxStyle, className: className, variant: variant, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledbyFormatted(), "aria-describedby": ariaDescribedby || (hasNoBodyWrapper ? null : descriptorId) }, helpers_2.getOUIAProps(exports.ModalContent.displayName, ouiaId, ouiaSafe)),
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

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextList.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Text/TextList.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
var TextListVariants;
(function (TextListVariants) {
    TextListVariants["ul"] = "ul";
    TextListVariants["ol"] = "ol";
    TextListVariants["dl"] = "dl";
})(TextListVariants = exports.TextListVariants || (exports.TextListVariants = {}));
exports.TextList = (_a) => {
    var { children = null, className = '', component = TextListVariants.ul } = _a, props = tslib_1.__rest(_a, ["children", "className", "component"]);
    const Component = component;
    return (React.createElement(Component, Object.assign({}, props, { "data-pf-content": true, className: react_styles_1.css(className) }), children));
};
exports.TextList.displayName = 'TextList';
//# sourceMappingURL=TextList.js.map

/***/ }),

/***/ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextListItem.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@patternfly/react-core/dist/js/components/Text/TextListItem.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const React = tslib_1.__importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_styles_1 = __webpack_require__(/*! @patternfly/react-styles */ "./node_modules/@patternfly/react-styles/dist/esm/index.js");
var TextListItemVariants;
(function (TextListItemVariants) {
    TextListItemVariants["li"] = "li";
    TextListItemVariants["dt"] = "dt";
    TextListItemVariants["dd"] = "dd";
})(TextListItemVariants = exports.TextListItemVariants || (exports.TextListItemVariants = {}));
exports.TextListItem = (_a) => {
    var { children = null, className = '', component = TextListItemVariants.li } = _a, props = tslib_1.__rest(_a, ["children", "className", "component"]);
    const Component = component;
    return (React.createElement(Component, Object.assign({}, props, { "data-pf-content": true, className: react_styles_1.css(className) }), children));
};
exports.TextListItem.displayName = 'TextListItem';
//# sourceMappingURL=TextListItem.js.map

/***/ })

}]);
//# sourceMappingURL=../sourcemaps/vendors~addApp~addSource~edit~remove.js.map