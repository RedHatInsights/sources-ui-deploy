(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~addApplication~addSource"],{

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
//# sourceMappingURL=../sourcemaps/vendors~addApplication~addSource.js.map