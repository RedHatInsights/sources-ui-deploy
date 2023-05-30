"use strict";(self.webpackChunksources_ui=self.webpackChunksources_ui||[]).push([[932],{91447:(e,t,a)=>{a.d(t,{Z:()=>i,n:()=>r});var n=a(48815),r=function(e){return(0,n.Rj)().checkAvailabilitySource(e).catch((function(){}))};const i=r},72810:(e,t,a)=>{a.d(t,{h:()=>s});var n=a(4942),r=a(48815),i=function(e,t){return new Promise((function(a){setTimeout(a.bind(null,t),e)}))};function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"showApplication",l=arguments.length>4?arguments[4]:void 0;return new Promise((function(s,c){var u=Date.now();return function s(){return(0,r.Rj)()[n](e).then((function(e){if(Date.now()-u>=t)return l?o(o({},e),{},{availability_status:null,availability_status_error:null}):e;if("available"===e.availability_status||"unavailable"===e.availability_status){if(l&&new Date(e.last_checked_at||e.updated_at)>l)return e;if(!l)return e}return i(a).then((function(){return s()}))}))}().then((function(e){return s(e)})).catch((function(e){return c(e)}))}))}},66974:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(92950),r=a.n(n),i=a(45697),l=a.n(i),o=a(86896),s=a(44012),c=a(6848),u=a(69957),m=function(e){var t=e.onExit,a=e.onStay,i=e.title,l=e.exitTitle,s=e.stayTitle,m=e.description,d=(0,o.Z)(),f=(0,n.useRef)(!1);return r().createElement(c.Modal,{onEscapePress:function(e){f.current&&a(e),f.current=!0},className:"sources",variant:"small",title:i,"aria-label":d.formatMessage({id:"wizard.closeAriaLabel",defaultMessage:"Close add source wizard"}),header:r().createElement(c.Title,{headingLevel:"h1",size:"2xl"},r().createElement(u.ZP,{size:"sm",className:"src-c-warning-icon","aria-label":"Exclamation icon"}),i),isOpen:!0,onClose:a,actions:[r().createElement(c.Button,{key:"confirm",variant:"primary",id:"on-exit-button",onClick:t},l),r().createElement(c.Button,{key:"cancel",variant:"link",id:"on-stay-button",onClick:a},s)]},m)};m.propTypes={onExit:l().func.isRequired,onStay:l().func.isRequired,title:l().node,exitTitle:l().node,stayTitle:l().node,description:l().node},m.defaultProps={title:r().createElement(s.Z,{id:"wizard.closeTitle",defaultMessage:"Exit source creation?"}),exitTitle:r().createElement(s.Z,{id:"wizard.exitText",defaultMessage:"Exit"}),stayTitle:r().createElement(s.Z,{id:"wizard.stayText",defaultMessage:"Stay"}),description:r().createElement(s.Z,{id:"wizard.closeWarning",defaultMessage:"All inputs will be discarded."})};const d=m},98824:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(92950),r=a.n(n),i=a(45697),l=a.n(i),o=a(86896),s=a(6848),c=a(68778),u=function(e){var t=e.href,a=e.children;return r().createElement(r().Fragment,null,r().createElement(c.ZP,{className:"pf-u-mr-sm",fill:"var(--pf-global--success-color--100)"}),r().createElement(s.Text,{component:"a",href:t,target:"_blank",rel:"noopener noreferrer"},a))};u.propTypes={href:l().string.isRequired,children:l().node.isRequired};var m=insights.chrome.isBeta()?"preview/":"",d="/".concat(m,"subscriptions"),f="/".concat(m,"insights"),p="/".concat(m,"cost-management"),g=function(e){var t=e.onClose,a=(0,o.Z)();return r().createElement(n.Fragment,null,r().createElement(s.Alert,{variant:"info",isInline:!0,title:a.formatMessage({id:"aws.alertTitle",defaultMessage:"Allow 24 hours for full activation"})},a.formatMessage({id:"aws.alertDescription",defaultMessage:"Manage connections for this source at any time in Settings > Sources."})),r().createElement(s.Bullseye,null,r().createElement(s.EmptyState,{variant:s.EmptyStateVariant.full,className:"pf-u-mt-md"},r().createElement(s.EmptyStateIcon,{icon:c.ZP,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),r().createElement(s.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},a.formatMessage({id:"aws.successTitle",defaultMessage:"Amazon Web Services connection established"})),r().createElement(s.EmptyStateBody,null,a.formatMessage({id:"aws.successDescription",defaultMessage:"Discover the benefits of your connection or exit to manage your new source."}),r().createElement(s.Grid,{hasGutter:!0,className:"src-c-aws-grid pf-u-mt-md"},r().createElement(s.GridItem,{md:"6"},r().createElement(u,{href:"https://access.redhat.com/management/cloud"},a.formatMessage({id:"aws.goldImages",defaultMessage:"View enabled AWS gold images"}))),r().createElement(s.GridItem,{md:"6"},r().createElement(u,{href:d},a.formatMessage({id:"aws.subwtachUsage",defaultMessage:"Subscription Watch usage"}))),r().createElement(s.GridItem,{md:"6"},r().createElement(u,{href:f},a.formatMessage({id:"aws.insights",defaultMessage:"Get started with Red Hat Insights"}))),r().createElement(s.GridItem,{md:"6"},r().createElement(u,{href:p},a.formatMessage({id:"aws.costLink",defaultMessage:"Cost Management reporting"}))))),r().createElement(s.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},a.formatMessage({id:"exit",defaultMessage:"Exit"})),r().createElement(s.EmptyStateSecondaryActions,null,r().createElement(s.Text,{component:"a",href:"https://access.redhat.com/public-cloud/aws",target:"_blank",rel:"noopener noreferrer"},a.formatMessage({id:"aws.learnMore",defaultMessage:"Learn more about this Cloud"}))))))};g.propTypes={onClose:l().func.isRequired};const y=g},79433:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(92950),r=a.n(n),i=a(45697),l=a.n(i),o=a(44012),s=a(6848),c=a(43047),u=function(e){var t=e.onClose,a=e.returnButtonTitle,n=e.message,i=e.title,l=e.customText,o=e.primaryAction,u=e.secondaryActions,m=e.Component;return r().createElement(s.Bullseye,null,r().createElement(s.EmptyState,{variant:s.EmptyStateVariant.full,className:"pf-u-mt-4xl"},r().createElement(s.EmptyStateIcon,{icon:c.ZP,color:"var(--pf-global--danger-color--100)",className:"pf-u-mb-0"}),r().createElement(s.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},i),r().createElement(s.EmptyStateBody,{className:"src-c-wizard--step-text"},n||l),r().createElement(m,{variant:"primary",onClick:o||t},a),u&&r().createElement(s.EmptyStateSecondaryActions,{className:"pf-u-mt-sm"},u)))};u.propTypes={onClose:l().func.isRequired,returnButtonTitle:l().node,message:l().node,title:l().node,customText:l().node,primaryAction:l().func,secondaryActions:l().node,Component:l().elementType},u.defaultProps={title:r().createElement(o.Z,{id:"wizard.unsuccConfiguration",defaultMessage:"Something went wrong"}),customText:r().createElement(o.Z,{id:"wizard.errorText",defaultMessage:"There was a problem while trying to add your source. Please try again. If the error persists, open a support case."}),Component:s.Button};const m=u},50063:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(92950),r=a.n(n),i=a(45697),l=a.n(i),o=a(44012),s=a(6848),c=a(68778),u=a(24160),m=function(e){var t=e.onClose,a=e.successfulMessage,n=e.hideSourcesButton,i=e.returnButtonTitle,l=e.title,m=e.linkText,d=e.secondaryActions,f=e.uuid;return r().createElement(s.Bullseye,null,r().createElement(s.EmptyState,{variant:s.EmptyStateVariant.full,className:"pf-u-mt-4xl"},r().createElement(s.EmptyStateIcon,{icon:c.ZP,color:"var(--pf-global--success-color--100)",className:"pf-u-mb-0"}),r().createElement(s.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},l),r().createElement(s.EmptyStateBody,{className:"src-c-wizard--step-text"},a),f&&r().createElement(s.Form,{className:"src-c-uuid"},r().createElement(s.FormGroup,{label:r().createElement(o.Z,{id:"wizard.sourcesUid",defaultMessage:"Source UUID"}),fieldId:"source-uuid"},r().createElement(s.ClipboardCopy,{id:"source-uuid",isReadOnly:!0,hoverTip:"Source UUID",clickTip:"Copied",className:"pf-u-mt-md"},f))),r().createElement(s.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},i),!n&&r().createElement(s.EmptyStateSecondaryActions,null,r().createElement(s.Button,{variant:"link",component:"a",target:"_blank",rel:"noopener noreferrer",href:(0,u.Z)()},m)),d&&r().createElement(s.EmptyStateSecondaryActions,null,d)))};m.propTypes={onClose:l().func.isRequired,successfulMessage:l().node.isRequired,hideSourcesButton:l().bool,returnButtonTitle:l().node.isRequired,title:l().node,linkText:l().node,secondaryActions:l().node,uuid:l().string},m.defaultProps={title:r().createElement(o.Z,{id:"wizard.succConfiguration",defaultMessage:"Configuration successful"}),linkText:r().createElement(o.Z,{id:"wizard.toSources",defaultMessage:"Take me to sources"})};const d=m},52893:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(92950),r=a.n(n),i=a(45697),l=a.n(i),o=a(44012),s=a(6848),c=function(e){var t=e.onClose,a=e.customText,n=e.cancelTitle,i=e.description;return r().createElement(s.Bullseye,null,r().createElement(s.EmptyState,{variant:s.EmptyStateVariant.full,className:"pf-u-mt-4xl"},r().createElement(s.EmptyStateIcon,{icon:s.Spinner,className:"pf-u-mb-0"}),r().createElement(s.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},a),i&&r().createElement(s.EmptyStateBody,{className:"src-c-wizard--step-text"},i),t&&r().createElement(s.EmptyStateSecondaryActions,{className:"pf-u-mt-xl"},r().createElement(s.Button,{variant:"link",onClick:t},n))))};c.propTypes={onClose:l().func,customText:l().node,cancelTitle:l().node,description:l().node},c.defaultProps={customText:r().createElement(o.Z,{id:"wizard.loadingText",defaultMessage:"Loading, please wait."}),cancelTitle:r().createElement(o.Z,{id:"wizard.cancelText",defaultMessage:"Cancel"})};const u=c},4435:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(92950),r=a.n(n),i=a(45697),l=a.n(i),o=a(86896),s=a(44012),c=a(6848),u=a(5913),m=function(e){var t=e.onClose,a=e.returnButtonTitle,n=e.title,i=e.secondaryActions,l=e.uuid,s=(0,o.Z)();return r().createElement(c.Bullseye,null,r().createElement(c.EmptyState,{variant:c.EmptyStateVariant.full,className:"pf-u-mt-4xl"},r().createElement(c.EmptyStateIcon,{icon:u.ZP,color:"var(--pf-global--Color--200)",className:"pf-u-mb-0"}),r().createElement(c.Title,{headingLevel:"h2",size:"xl",className:"pf-u-mt-xl"},n),r().createElement(c.EmptyStateBody,null,s.formatMessage({id:"wizard.uncompleteConfigurationDescription",defaultMessage:"We are still working to confirm credentials and app settings.{newLine}To track progress, check the Status column in the Sources table."},{newLine:r().createElement("br",{key:"br"})}),null!=l?l:r().createElement(c.ClipboardCopy,{isReadOnly:!0,hoverTip:"Source UUID",clickTip:"Copied",className:"pf-u-mt-md"},l)),r().createElement(c.Button,{variant:"primary",onClick:t,className:"pf-u-mt-xl"},a),i&&r().createElement(c.EmptyStateSecondaryActions,null,i)))};m.propTypes={onClose:l().func.isRequired,returnButtonTitle:l().node.isRequired,title:l().node,secondaryActions:l().node,uuid:l().string},m.defaultProps={title:r().createElement(s.Z,{id:"wizard.uncompleteConfigurationTitle",defaultMessage:"Configuration in progress"})};const d=m},5746:(e,t,a)=>{a.d(t,{Z:()=>n});const n=function(e,t){var a,n,r,i,l,o;return(null===(a=e.applications)||void 0===a||null===(n=a.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===n?void 0:n.availability_status_error)||(null===(r=e.endpoint)||void 0===r||null===(i=r.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===i?void 0:i.availability_status_error)||(null===(l=e.authentications)||void 0===l||null===(o=l.filter(Boolean).find((function(e){return e.availability_status_error})))||void 0===o?void 0:o.availability_status_error)||t.formatMessage({id:"wizard.unknownError",defaultMessage:"Unknown error"})}},86482:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(93433);const r=function(e){var t,a,r,i=(null===(t=e.applications)||void 0===t?void 0:t.filter(Boolean).map((function(e){return e.availability_status||"timeout"})))||[],l=(null===(a=e.endpoint)||void 0===a?void 0:a.filter(Boolean).map((function(e){return e.availability_status||"timeout"})))||[],o=(null===(r=e.authentications)||void 0===r?void 0:r.filter(Boolean).map((function(e){return e.availability_status||"timeout"})))||[],s=[].concat((0,n.Z)(i),(0,n.Z)(l),(0,n.Z)(o));return s.includes("unavailable")?"unavailable":s.length>0&&s.every((function(e){return"available"===e}))?"available":s.includes("timeout")?"timeout":"finished"}},24160:(e,t,a)=>{a.d(t,{Z:()=>n});const n=function(){return insights.chrome.isBeta()?"/preview/settings/sources":"/settings/sources"}},64673:(e,t,a)=>{a.d(t,{W:()=>r,Z:()=>i});var n=a(84866),r=function(e,t){return function(a){return a.supported_source_types.find((function(a){var n;return(null===(n=e.find((function(e){var t=e.name;return a===t})))||void 0===n?void 0:n.category)===t}))}};const i=function(e){return e.name!==n.M$}}}]);
//# sourceMappingURL=../sourcemaps/932.b273469fb0a74adb3dceb82e1d976ff1.js.map